import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.ERC20) as string)
const contract = import.meta.env.VITE_NFT_CONTRACT_ADDRESS as string

export function useNFT () {
  const NFTInstance = computed( () => {
    const { Contract } = web3.value.eth
    return  new Contract(abi, contract)
  })
  const getNFTList = async (): Promise<string[]> => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getOwnedTokens(account)
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
  const getSkills = async (tokenId: string): Promise<string[]> => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalAllSkill(tokenId)
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
  const getAttribute = async (tokenId: string): Promise<string[]> => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalAllAttribute(tokenId)
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
  const getInfo = async (tokenId: string): Promise<string[]> => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalInfo(tokenId)
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
    getSkills,
    getAttribute,
    getInfo,
    getNFTList
  }
}
