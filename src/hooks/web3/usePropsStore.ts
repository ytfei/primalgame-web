import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { useWallet } from "src/hooks/web3/useWallet";
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.PROPS_STORE) as string)

const contracts = {
  store: import.meta.env.VITE_PROPS_STORE_CONTRACT_ADDRESS as string,
} as Indexable


export function usePropsStore () {
  const propsStore = computed(() => new web3.value.eth.Contract(abi, contracts.store))

  const buyProps = async (tokenId: number, price: number, quantity: number) => {
    console.log(web3);
    console.log(propsStore);
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
