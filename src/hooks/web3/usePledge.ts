import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { useWallet } from "src/hooks/web3/useWallet";
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.PLEDGE) as string)

const contracts = {
  pledge: import.meta.env.VITE_PLEDGE_CONTRACT_ADDRESS as string,
} as Indexable


export function usePledge () {
  const instance = computed(() => new web3.value.eth.Contract(abi, contracts.pledge))

  const getPoolAttr = async (poolType: number) => {
    return new Promise((resolve, reject) => {
      instance.value.methods
        .getPoolAttr(poolType)
        .call()
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
  const plunder = async (tokenId: string, poolType: number) => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      instance.value.methods
        .plunder(tokenId, poolType)
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
  return {
    getPoolAttr,
    stake,
    unStake,
    pendingReward,
    takeReward,
    plunder,
  }
}
