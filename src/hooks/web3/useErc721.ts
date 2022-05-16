import { useWallet } from "src/hooks/web3/useWallet";
import { contractAbiMap, ContractAbiTypeEnum } from "src/enums/contractAbiEnum";
import { computed } from "vue";
import { utils } from 'web3/dist/web3.min.js'
import { errorHandel } from "hooks/web3/utils";

const { web3 } = useWallet()
const abi = JSON.parse(contractAbiMap.get(ContractAbiTypeEnum.ERC20) as string)
type ERC20ContractType = 'mtee' | 'hgc' | 'busd'
const contracts = {
  mtee: import.meta.env.VITE_MTEE_CONTRACT_ADDRESS as string,
  hgc: import.meta.env.VITE_HGC_CONTRACT_ADDRESS as string,
  busd: import.meta.env.VITE_BUSD_CONTRACT_ADDRESS as string
} as Indexable

export function useERC20 (contractType: ERC20ContractType) {
  const contractAddress = contracts[contractType]
  const erc721Instance = computed( () => {
    const { Contract } = web3.value.eth
    return  new Contract(abi, contractAddress)
  })


  return {

  }
}
