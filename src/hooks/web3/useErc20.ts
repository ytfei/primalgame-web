import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { utils } from 'web3/dist/web3.min.js'
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.ERC20) as string)
type ERC20ContractType = 'currency'
const contracts = {
  currency: '0x4f5B7299DCc1600afefAa4D75D2e7A3138598005'
} as Indexable

export function useERC20 (contractType: ERC20ContractType) {
  const contractAddress = contracts[contractType]
  const erc20Instance = computed( () => {
    const { Contract } = web3.value.eth
    return  new Contract(abi, contractAddress)
  })

  function getBalance (address: string): Promise<string>  {
    return new Promise((resolve, reject) => {
      erc20Instance.value?.methods
        .balanceOf(address).call()
        .then((res: string) => resolve(utils.fromWei(res)))
        .catch((error: Error) => {
          errorHandel(error, (errorInfo: ErrorInfo) => {
            reject(errorInfo)
          })
        })
    })
  }
  async function approve (address: string, price: number) {
    const [account] = await web3.value.eth.getAccounts()
    // const balance = await getBalance(account)
    // if (Number.parseFloat(balance) < price) {
    //   return Promise.reject(new Error('Insufficient balance'))
    // }
    return new Promise((resolve, reject) => {
      erc20Instance.value.methods
        .approve(address, (utils.toWei(price.toString())))
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
    getBalance,
    approve,
  }
}
