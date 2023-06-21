import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const authStore = defineStore('auth', {
    state: () => ({}),
    actions: {
        resendEmailActive(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-resend-active', body).then(resolve).catch(reject)
            })
        },
        doActiveAccount(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-active-crm', body).then(resolve).catch(reject)
            })
        },
        doPing(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/ping', body).then(resolve).catch(reject)
            })
        },
        doLoginUUID(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-login-uuid', body)
                    .then((response: any) => {
                        const { data, message, success } = response
                        if (success) {
                            Cookies.set(config.public.clientKeyStoreToken, data.token)
                        }
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        doLoginCRM(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-login-crm', body)
                    .then((response: any) => {
                        const { data, message, success } = response
                        if (success) {
                            Cookies.set(config.public.clientKeyStoreToken, data.token)
                        }
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        doRegisterCRM(body: any) {
            const config = useRuntimeConfig()
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-register-crm', body).then(resolve).catch(reject)
            })
        },
        doLoginCRMV2(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-login-crm-v2', body)
                    .then((response: any) => {
                        const { data, message, success } = response
                        if (success) {
                            Cookies.set(config.public.clientKeyStoreToken, data.token)
                        }
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        doRegisterCRMV2(body: any) {
            const config = useRuntimeConfig()
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-register-crm-v2', body).then(resolve).catch(reject)
            })
        },
        doResetPasswordCRMV2(body: any) {
            const config = useRuntimeConfig()
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/do-reset-password-crm-v2', body).then(resolve).catch(reject)
            })
        },
        verify2FA(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/auth/verify-2fa', body).then(resolve).catch(reject)
            })
        },
    },
})
