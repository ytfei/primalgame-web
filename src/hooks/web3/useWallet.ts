import Web3Modal, { providers } from 'web3modal'
import { providerOptions } from './config'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3/dist/web3.min.js'
import { reactive, ref, toRefs } from 'vue'

interface WalletInfo {
  web3: typeof Web3 | null
  provider: typeof providers | null
  account: string | null
}
const web3Modal = ref<typeof Web3Modal>(null)
const walletInfo: WalletInfo = reactive({
  web3: null,
  provider: null,
  account: null
})
export function useWallet() {
  !web3Modal.value && initWeb3Modal()

  function initWeb3Modal () {
    web3Modal.value = new Web3Modal({
      cacheProvider: true,
      providerOptions
    })
  }

  const getAccounts = async () => {
    const [account] = await walletInfo.web3.eth.getAccounts()
    walletInfo.account = account
  }

  const subscribeToEvents = (provider: WalletConnectProvider) => {
    if (!provider) return

    provider.on('connect', () => {})
    provider.on('accountsChanged', () => {
      getAccounts()
    })
    provider.on('chainChanged', () => {})
    provider.on('disconnect', () => {})
  }

  const onConnect = async () => {
    const provider = await web3Modal.value.connect()
    subscribeToEvents(provider)
    const web3 = new Web3(provider)
    walletInfo.provider = provider
    walletInfo.web3 = web3
    getAccounts()
  }

  const resetWallet = async () => {
    await walletInfo.web3?.currentProvider?.close?.()
    web3Modal.value.clearCachedProvider()
    walletInfo.provider = null
    walletInfo.web3 = null
    walletInfo.account = null
  }

  const checkConnect = async () => {
    !walletInfo.web3 && await onConnect()
  }
  return {
    ...toRefs(walletInfo),
    onConnect,
    resetWallet,
    checkConnect
  }
}
