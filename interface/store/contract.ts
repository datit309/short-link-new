import { defineStore } from 'pinia'
import { Contract, ethers } from 'ethers'
import ABI_TOKEN from '~/utils/abi/token'
import ABI_DEPOSIT from '~/utils/abi/deposit'

const config = useRuntimeConfig()
const provider_bep20 = new ethers.providers.JsonRpcProvider(config.public.RPC_URL_BEP20)
const provider_erc20 = new ethers.providers.JsonRpcProvider(config.public.RPC_URL_ERC20)
const provider_polygon = new ethers.providers.JsonRpcProvider(config.public.RPC_URL_POLYGON)

export const useContractStore = defineStore('contract', {
    state: () => ({
        contract: {
            select_network_deposit: '',
            signer: null,
        },
    }),
    getters: {},
    actions: {
        async changeNetworkDeposit(data: any) {
            this.contract.select_network_deposit = data
        },
        async setSigner(data: any) {
            this.contract.signer = data
        },
        getContractUSDT(signer: any) {
            let contract = null
            const network = this.contract.select_network_deposit
            switch (network) {
                case 'BEP20': {
                    contract = new Contract(config.public.SC_USDT_BEP20 || '', ABI_TOKEN, signer || provider_bep20)
                    break
                }
                case 'ERC20': {
                    contract = new Contract(config.public.SC_USDT_ERC20 || '', ABI_TOKEN, signer || provider_erc20)
                    break
                }
                case 'POLYGON': {
                    contract = new Contract(config.public.SC_USDT_ERC20 || '', ABI_TOKEN, signer || provider_polygon)
                    break
                }
            }
            return contract
        },
        getContractDeposit(signer: any) {
            let contract = null
            const network = this.contract.select_network_deposit
            switch (network) {
                case 'BEP20': {
                    contract = new Contract(config.public.SC_DEPOSIT_BEP20 || '', ABI_DEPOSIT, signer || provider_bep20)
                    break
                }
                case 'ERC20': {
                    contract = new Contract(config.public.SC_DEPOSIT_ERC20 || '', ABI_DEPOSIT, signer || provider_erc20)
                    break
                }
                case 'POLYGON': {
                    contract = new Contract(config.public.SC_DEPOSIT_ERC20 || '', ABI_DEPOSIT, signer || provider_polygon)
                    break
                }
            }
            return contract
        },
    },
})
