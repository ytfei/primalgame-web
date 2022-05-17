import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { errorHandel } from "hooks/web3/utils";
import { AttrEnum, SkillEnum } from "src/enums/assetsEnum";

const { web3, onConnect } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.NFT) as string)
const contract = import.meta.env.VITE_NFT_CONTRACT_ADDRESS as string

export function useNFT () {
  const NFTInstance = computed( () => {
    const { Contract } = web3.value.eth
    return  new Contract(abi, contract)
  })
  const getNFTList = async (): Promise<object[]> => {
    await onConnect()
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getOwnedTokens(account)
        .call()
        .then(async (res: any) => {
          const newArray: object[] = []
          for (const [index, value] of res.entries()) {
            let newObject: any = {}
            await getInfo(value).then((res: any) => {
              const result: Indexable = {
                attrs: {},
                skills: {}
              }
              res.attrs.forEach((item: string, index: number) => {
                result.attrs[AttrEnum[index]] = item
              })
              res.exists.forEach((item: string, index: number) => {
                result.skills[SkillEnum[index]] = item
              })
              newObject = result
            })
            newArray.splice(index, 0, newObject)
          }
          resolve(newArray)
        })
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  const getSkills = async (tokenId: string): Promise<object> => {
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalAllSkill(tokenId)
        .call()
        .then((res: string[]) => {
          const result: Indexable = {}
          res.forEach((item: string, index: number) => {
            result[SkillEnum[index]] = item
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
  const getAttribute = async (tokenId: number): Promise<object> => {
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalAllAttribute(tokenId)
        .call()
        .then((res: string[]) => {
          const result: Indexable = {}
          res.forEach((item: string, index: number) => {
            result[AttrEnum[index]] = item
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
  const getInfo = async (tokenId: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      NFTInstance.value.methods
        .getPrimalInfo(tokenId)
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
  return {
    getSkills,
    getAttribute,
    getInfo,
    getNFTList
  }
}
