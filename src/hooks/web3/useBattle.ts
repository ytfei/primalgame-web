import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { PoolEnum } from 'src/enums/assetsEnum'
import { computed } from "vue";
import { useNFT } from 'hooks/web3/useNFT'
import { errorHandel} from "hooks/web3/utils";

const { getInfo } = useNFT()
const { web3, checkConnect } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.BATTLE) as string)
const contract = import.meta.env.VITE_BATTLE_CONTRACT_ADDRESS as string

export function useBattle () {
  const instance = computed( () => {
    const { Contract } = web3.value.eth
    return  new Contract(abi, contract)
  })
  // 1v1
  const refresh1V1 = async () => {
    // console.log(web3.value.eth.abi.decodeParameters(['uint', 'uint', 'uint', 'bool', 'bool', 'uint[]'], "0x0000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000012400000000000000000000000000000000000000000000000000000000628497ce0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000005800000000000000000000000000000000000000000000000000000000000000408000000000000000000000000000000000000000000000000000000000000058000000000000000000000000000000000000000000000000000000000000004080000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000040800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"))
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .refresh1V1()
        .send({ from: account })
        .then((res: any) => {
          console.log(res)
          resolve(res)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const battle1V1 = async (tokenId: string, enemyTokenId: string) => {
    const [account] = await web3.value.eth.getAccounts()
    const gas = await instance.value.methods.battle1V1(tokenId, enemyTokenId).estimateGas({ from: account },
      (error: Error, amount: number) => {
        console.log(error, amount)
      }).then((res: any) => {
      return res
    })
    console.log(gas)
    return new Promise((resolve, reject) => {
      console.log(tokenId, enemyTokenId)
      instance.value.methods
        .battle1V1(tokenId, enemyTokenId)
        .send({ from: account })
        .then((res: any) => {
          console.log(res)
          const result: any = {}
          res.events.BattleOnevOne.returnValues.amount.forEach((item: string, index: number) => {
            result[PoolEnum[index].toLowerCase()] = item
          })
          resolve({
            success: res.events.BattleOnevOne.returnValues.success,
            captureSelfId: res.events.BattleOnevOne.returnValues.captureSelfId,
            captureEnemieId: res.events.BattleOnevOne.returnValues.captureEnemieId,
            battleResources: result
          })
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            console.log(error)
            reject(errorInfo)
          })
        })
    })
  }
  const takeReward = async () => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .takeReward()
        .send({ from: account })
        .then((res: any) => {
          console.log(res)
          resolve(res)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const getRewardInfo = async () => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .pendingReward(account)
        .call()
        .then((res: any) => {
          const result: any = {}
          res.forEach((item: string, index: number) => {
            result[PoolEnum[index].toLowerCase()] = item
          })
          resolve(result)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const get1V1Enemies = async () => {
    await checkConnect()
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .get1V1Enemies(account)
        .call()
        .then(async (res: any) => {
          console.log(res)
          const promiseArray = res.enemies.map((tokenId: string) => getInfo(tokenId))
          const result = await Promise.allSettled(promiseArray)
          const newResult = result.filter((item: any) => item.status === 'fulfilled').map((item: any) => item.value)
          if (res.enemies.length > 2) {
            res.defeat.forEach((item: string, index: number) => {
              newResult[index].status = item // 添加野怪攻击状态
            })
          }
          resolve(newResult)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const get1V1ForFree = async () => {
    await checkConnect()
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .refresh1v1ForFree(account)
        .call()
        .then((res: boolean) => {
          resolve(res)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  return {
    refresh1V1,
    battle1V1,
    takeReward,
    getRewardInfo,
    get1V1Enemies,
    get1V1ForFree
  }
}
