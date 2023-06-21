import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useWeb3Store } from '~/store/web3Modal'

export default defineNuxtPlugin((nuxtApp) => {
    let options: any
    let providerOptions: any
    const storeWeb3 = useWeb3Store()
    const rpc = {}
    if (process.client) {
        // @ts-ignore
        rpc[storeWeb3.web3Modal.network.CHAIN_ID] = storeWeb3.web3Modal.network.RPC_URL
        options = {
            rpc,
            // rpc: {
            //     56: 'https://bsc-dataseed.binance.org',
            //     97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            //     137: 'https://polygon-rpc.com',
            //     80001: 'https://matic-mumbai.chainstacklabs.com',
            //     // 5: 'https://goerli.infura.io/v3/',
            //     1: 'https://mainnet.infura.io/v3/',
            //     11155111: 'https://sepolia.infura.io/v3/e842cc823d4d445e9f31ec57235b951a',
            // },
            // chainId: localStorage.getItem('CHAIN_ID') ? Number(localStorage.getItem('CHAIN_ID')) : null,
            chainId: storeWeb3.web3Modal.chainId ? storeWeb3.web3Modal.chainId : null,
        }
        providerOptions = {
            /* See Provider Options Section */
            binancechainwallet: {
                package: true,
            },
            coinbasewallet: {
                package: CoinbaseWalletSDK, // Required
                options,
            },
            'custom-walletconnect': {
                display: {
                    logo: 'data:image/png;base64,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',
                    name: 'WalletConnect',
                    description: 'Scan with WalletConnect to connect',
                },
                package: WalletConnectProvider,
                options,
                connector: async (ProviderPackage: any, options: any) => {
                    const provider = new ProviderPackage(options)
                    await provider.enable()
                    return provider
                },
            },
        }
    }

    const web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true,
        providerOptions, // required
    })
    nuxtApp.provide('connectWeb3', async () => {
        const instance = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(instance)
        const chainId = (await provider.getNetwork()).chainId
        const wallet = await provider.getSigner().getAddress()
        return {
            wallet,
            provider,
            chainId,
        }
    })

    nuxtApp.provide('disconnectWeb3', async () => {
        await web3Modal.clearCachedProvider()
    })

    nuxtApp.provide('changeNetworkWeb3', async (chainId: number) => {
        await storeWeb3.changeNetwork(chainId)
    })
})
