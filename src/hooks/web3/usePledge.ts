import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { useWallet } from "src/hooks/web3/useWallet";
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.PLEDGE) as string)

const contracts = {
  pledge: import.meta.env.VITE_PROPS_STORE_CONTRACT_ADDRESS as string,
} as Indexable


export function usePledge () {
  const propsStore = computed(() => new web3.value.eth.Contract(abi, contracts.pledge))

  const buyProps = async (tokenId: number, price: number, quantity: number) => {
    const [account] = await web3.value.eth.getAccounts()
    return new Promise((resolve, reject) => {
      propsStore.value.methods
        .buyCard(tokenId, quantity)
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
    buyProps
  }
}
