import { defineStore } from 'pinia'
// @ts-ignore
import BNB from '~/assets/images/bnb.png'
// @ts-ignore
import MATIC from '~/assets/images/polygon.png'
// @ts-ignore
import ETH from '~/assets/images/eth.png'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useWeb3Store = defineStore('web3Store', {
    // other options...
    state: () => ({
        web3Modal: {
            provider: null,
            connect_by: null,
            chainId: null,
            network_connect: null,
            network: {
                NAME: '',
                ICON: '',
                RPC_URL: '',
                CHAIN_ID: 0,
                CHAIN_NAME: '',
                CHAIN_ID_HEX: '',
                BLOCK_URL: '',
                SYMBOL: '',
                DECIMAL: 18,
            },
        },
    }),
    getters: {},
    actions: {
        setProvider(data: any) {
            this.web3Modal.provider = data
        },
        setNetworkConnect(data: any) {
            this.web3Modal.network_connect = data
        },
        changeNetwork(data: any) {
            this.web3Modal.chainId = data
        },
        setConnector(data: any) {
            this.web3Modal.connect_by = data
        },
        setNetwork(data: any) {
            const config = useRuntimeConfig()

            switch (data) {
                case 'BEP20': {
                    this.web3Modal.network.CHAIN_ID = Number(config.public.CHAIN_ID_BEP20)
                    this.web3Modal.network.RPC_URL = config.public.RPC_URL_BEP20
                    this.web3Modal.network.CHAIN_ID_HEX = config.public.CHAIN_ID_HEX_BEP20
                    this.web3Modal.network.CHAIN_NAME = config.public.CHAIN_NAME_BEP20
                    this.web3Modal.network.BLOCK_URL = config.public.BLOCK_URL_BEP20
                    this.web3Modal.network.ICON = BNB
                    this.web3Modal.network.NAME = 'Binance'
                    this.web3Modal.network.SYMBOL = 'BNB'
                    this.web3Modal.network.DECIMAL = 18
                    break
                }
                case 'POLYGON': {
                    this.web3Modal.network.CHAIN_ID = Number(config.public.CHAIN_ID_POLYGON)
                    this.web3Modal.network.RPC_URL = config.public.RPC_URL_POLYGON
                    this.web3Modal.network.CHAIN_ID_HEX = config.public.CHAIN_ID_HEX_POLYGON
                    this.web3Modal.network.CHAIN_NAME = config.public.CHAIN_NAME_POLYGON
                    this.web3Modal.network.BLOCK_URL = config.public.BLOCK_URL_POLYGON
                    this.web3Modal.network.ICON = MATIC
                    this.web3Modal.network.NAME = 'Matic'
                    this.web3Modal.network.SYMBOL = 'MATIC'
                    this.web3Modal.network.DECIMAL = 18
                    break
                }
                case 'ERC20': {
                    this.web3Modal.network.CHAIN_ID = Number(config.public.CHAIN_ID_ERC20)
                    this.web3Modal.network.RPC_URL = config.public.RPC_URL_ERC20
                    this.web3Modal.network.CHAIN_ID_HEX = config.public.CHAIN_ID_HEX_ERC20
                    this.web3Modal.network.CHAIN_NAME = config.public.CHAIN_NAME_ERC20
                    this.web3Modal.network.BLOCK_URL = config.public.BLOCK_URL_ERC20
                    this.web3Modal.network.ICON = ETH
                    this.web3Modal.network.NAME = 'Ethereum'
                    this.web3Modal.network.SYMBOL = 'ETH'
                    this.web3Modal.network.DECIMAL = 18
                    break
                }
            }
            this.setNetworkConnect(data)
            this.changeNetwork(this.web3Modal.network.CHAIN_ID)
        },
        resetState() {
            this.$reset()
        },
    },
})
