import Cookies from 'js-cookie'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const instance = axios.create({
        baseURL: config.public.apiBase,
        headers: {
            Authorization: `Bearer ${Cookies.get(config.public.clientKeyStoreToken)}`,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
    nuxtApp.provide('setTokenAxios', (accessToken: string) => {
        instance.defaults.headers.Authorization = `Bearer ${accessToken}`
    })
    nuxtApp.provide('setBaseUrlAxios', (url: string) => {
        instance.defaults.baseURL = url
    })

    instance.interceptors.response.use(
        (response) => {
            // if(response.data.message === 'Authentication error'){
            //     window.location.href = '/'
            //     sessionStorage.clear()
            //     localStorage.clear()
            // }
            return response
        },
        async (error) => {
            // const { config, response } = error
            // const originalRequest = config
            // if (response && response.status === 401) {
            //     if(process.client){
            //         sessionStorage.clear()
            //         localStorage.clear()
            //     }
            //     clearNuxtData()
            //     throw createError({ statusCode: 401, statusMessage: response.data.data.message });
            // }
            return Promise.reject(error)
        }
    )
    nuxtApp.provide('axios', (method = 'POST', url: string, data = {}, headers = {}) => {
        switch (method.toUpperCase()) {
            default:
                return new Promise((resolve, reject) => {
                    instance
                        .post(url, data, {
                            headers,
                        })
                        .then((response) => {
                            resolve(response.data)
                        })
                        .catch((reason) => {
                            reject(reason.response.data)
                        })
                })
            case 'GET':
                return new Promise((resolve, reject) => {
                    instance
                        .get(url, {
                            params: data,
                            headers,
                        })
                        .then((response) => {
                            resolve(response.data)
                        })
                        .catch((reason) => {
                            reject(reason.response.data)
                        })
                })
        }
    })
    // $axios.setHeader('Authorization', `Bearer ${Cookies.get('client_token')}`)
})
