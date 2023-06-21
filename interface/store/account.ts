import { defineStore } from 'pinia'
import moment from 'moment'
import Cookies from 'js-cookie'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAccountStore = defineStore('account', {
    // other options...
    persist: {
        storage: persistedState.sessionStorage,
    },
    state: () => ({
        account: {
            detail: {
                id: null,
                wallet_address: null,
                token: null,
                email: '',
                username: '',
                type: '',
                access_token: '',
            },
            user_crm: {
                UserName: '',
                RefID: '',
            },
            referral: {
                address: null,
                team: 'A',
            },
            wallet: {
                signer: null,
                auto_connect: 'off',
            },
        },
    }),
    getters: {
        getAddress(state) {
            return state.account.detail.wallet_address
        },
        getToken(state) {
            return state.account.detail.token
        },
        getUsername(state) {
            return state.account.user_crm.UserName
        },
        getRefID(state) {
            return state.account.user_crm.RefID
        },
    },
    actions: {
        updateWalletAddress(data: any) {
            this.account.detail.wallet_address = data
        },
        updateSigner(data: any) {
            this.account.wallet.signer = data
        },
        updateRefDetail(data: any) {
            this.account.referral.address = data.address
            this.account.referral.team = data.team
        },

        resetState() {
            this.$reset()
        },
        async decodeToken() {
            try {
                const config = useRuntimeConfig()
                const token = Cookies.get(config.public.clientKeyStoreToken)
                if (!token) {
                    return null
                }
                const data = JSON.parse(atob(token.split('.')[1]))
                if (moment().utc().unix() >= data.exp) {
                    localStorage.clear()
                    sessionStorage.clear()
                    Cookies.remove(config.public.clientKeyStoreToken)
                    return null
                }
                // @ts-ignore
                this.account.detail.token = token
                this.account.detail.type = data.type
                this.account.detail.wallet_address = data.wallet_address
                this.account.detail.email = data.email
                this.account.detail.username = data.username
                this.account.detail.access_token = data.access_token

                this.account.user_crm.UserName = data.username
                this.account.user_crm.RefID = data.user_crm.RefID

                return data
            } catch (e) {
                return null
            }
        },
    },
})
