import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { useWallet } from "src/hooks/web3/useWallet";
import { errorHandel } from "hooks/web3/utils"
import { utils } from 'web3/dist/web3.min.js'
import { useNFT } from 'hooks/web3/useNFT'
import { PoolEnum } from 'src/enums/assetsEnum'

const { web3 } = useWallet()
const { getInfo } = useNFT()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.PLEDGE) as string)

const contracts = {
  pledge: import.meta.env.VITE_PLEDGE_CONTRACT_ADDRESS as string
} as Indexable


export function usePledge () {
  const instance = computed(() => new web3.value.eth.Contract(abi, contracts.pledge))

  const getPoolAttr = async (poolType: number): Promise<{ yield: string, amount: string }> => {
    return new Promise((resolve, reject) => {
      instance.value.methods
        .getPoolAttr(poolType)
        .call()
        .then((res: { yield: string, amount: string }) => {
          resolve({ yield: utils.fromWei(res.yield), amount:res.amount })
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }

  const getStakeNFTList = async (poolType: number) => {
    const [account] = await web3.value.eth.getAccounts()
    console.log(account)
    return new Promise((resolve, reject) => {
      instance.value.methods
        .getAllStakeIds(account, poolType)
        .call()
        .then(async (res: string[]) => {
          const requestArray = res.map((tokenId: string) => getInfo(tokenId))
          const result = await Promise.allSettled(requestArray)
          resolve(result.map((item: PromiseSettledResult<any>) => item.status === 'fulfilled' && { ...item.value, poolType })
            .filter((item: any) => item))
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }

  const stake = async (tokenId: string, poolType: number) => {
    const [account] = await web3.value.eth.getAccounts()
    // const gas = await instance.value.methods.stake(tokenId, poolType).estimateGas({ from: account },
    //   (error: Error, amount: number) => {
    //     console.log(error, amount)
    //   }).then((res: any) => {
    //   console.log(res)
    //   return res
    // })
    // console.log(gas)
    return new Promise((resolve, reject) => {
      instance.value.methods
        .stake(tokenId, poolType)
        .send({ from: account })
        .then((res: any) => {
          resolve(res)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const unStake = async (tokenId: string, poolType: number) => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .unStake(tokenId, poolType)
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
  const pendingReward = async () => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .pendingReward(account)
        .call()
        .then((res: any) => {
          const result: Indexable = {}
          // console.log(res.map((item: string, index: number) => ({
          //   index: utils.fromWei(item),
          // })), 12312312)
          res.forEach((item: string, index: number) => {
            result[PoolEnum[index].toLowerCase()] = utils.fromWei(item)
          })
          console.log(result)
          resolve(result)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
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
          resolve(res)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const plunder = async (tokenId: string, poolType: number): Promise<{ battleReport: boolean, reward: Object}> => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .plunder(tokenId, poolType)
        .send({ from: account })
        .then((res: any) => {
          console.log(res)
          const battleReport = web3.value.eth.abi.decodeParameters(['uint', 'uint', 'uint', 'bool', 'bool', 'uint[]'], res.events.PlunderBattleReport.raw.data)?.[3]
          const reward = web3.value.eth.abi.decodeParameters(['uint', 'uint', 'uint', 'uint[]'], res.events.PlunderReward.raw.data)?.[3]
          console.log(battleReport, reward)
          const result: Indexable = {}
          reward?.forEach((item: string, index: number) => {
            result[PoolEnum[index].toLowerCase()] = utils.fromWei(item)
          })
          console.log(result)
          resolve({ battleReport, reward: result })
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  return {
    getPoolAttr,
    stake,
    unStake,
    pendingReward,
    takeReward,
    plunder,
    getStakeNFTList
  }
}
