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
                token: null,
                email: '',
                username: '',
                type: '',
                user_id: '',
            },
        },
    }),
    getters: {
        getToken(state) {
            return state.account.detail.token
        },
    },
    actions: {
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
                this.account.detail.email = data.email
                this.account.detail.username = data.username
                this.account.detail.user_id = data.user_id

                return data
            } catch (e) {
                return null
            }
        },
    },
})
