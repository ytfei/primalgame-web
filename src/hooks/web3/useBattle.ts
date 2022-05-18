import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { PoolEnum } from 'src/enums/assetsEnum'
import { utils } from 'web3/dist/web3.min.js'
import { computed } from "vue";
import { errorHandel, getNFTCardList } from "hooks/web3/utils";
import { ResourceInfo } from 'types/store'

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
    console.log(web3.value.eth.abi.decodeParameter('bool', '0x0000000000000000000000000000000000000000000000000000000000000001'))
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      console.log(tokenId, enemyTokenId)
      instance.value.methods
        .battle1V1(tokenId, enemyTokenId)
        .send({ from: account })
        .on('receipt', function (receipt) {
          console.log(receipt)
        })
        // .then((res: any) => {
        //   console.log(res, 88888)
        //   resolve(res)
        // })
        // .catch((error: Error) => {
        //   errorHandel(error, (errorInfo: ErrorInfo) => {
        //     reject(errorInfo)
        //   })
        // })
    })
  }
  const takeReward = async (tokenId: string, enemyTokenId: string) => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .takeReward(tokenId, enemyTokenId)
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
          const enemiesList: any = await getNFTCardList(res.enemies)
          enemiesList.forEach((item: any, index: number) => {
            item.status = res.defeat[index] // 英雄是否被击败
          })
          resolve(enemiesList)
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
    get1V1Enemies
  }
}
