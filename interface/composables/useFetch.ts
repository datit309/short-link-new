import Cookies from 'js-cookie'

export const useFetchAPI = (method = 'post', url = '', body = {}, headers = {}) => {
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    const route = useRoute()
    switch (method) {
        case 'post': {
            return new Promise((resolve, reject) => {
                $fetch(url, {
                    method,
                    body,
                    baseURL: config.public.apiBase,
                    headers: {
                        ...headers,
                        Accept: 'application/json',
                        'Cache-Control': 'no-cache',
                        Authorization: `Bearer ${Cookies.get(config.public.clientKeyStoreToken)}`,
                    },
                    onResponse({ request, response, options }) {
                        if (response.status === 200 && response._data.message === 'Authentication error') {
                            Cookies.remove(config.public.clientKeyStoreToken)
                            localStorage.clear()
                            sessionStorage.clear()
                            window.location.href = '/'
                            // if (route.name !== 'index') {
                            //     window.location.href = '/'
                            // }
                            // nuxtApp.$error(response._data.message ? 'Please login to play the game!' : response._data.message)
                        }
                    },
                    onResponseError({ request, response, options }) {
                        // Handle the response errors
                        if (response.status === 401) {
                            Cookies.remove(config.public.clientKeyStoreToken)
                            localStorage.clear()
                            sessionStorage.clear()
                            window.location.href = '/'
                            // nuxtApp.$error(response._data.message === 'jwt malformed' ? 'Please login to play the game!' : response._data.message)
                        }
                    },
                })
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        // console.log('reason', reason.message)
                        if (!reason.response) {
                            reject(reason)
                        } else {
                            if (reason.response._data.message === 'jwt malformed') {
                                reason.response._data.message = 'Please login again!'
                                window.location.href = '/'
                            }
                            if (reason.response._data.message === 'jwt expired') {
                                window.location.href = '/'
                            }
                            reject(reason.response._data)
                        }
                    })
            })
        }
        case 'get': {
            return new Promise((resolve, reject) => {
                $fetch(url, {
                    method,
                    query: body,
                    baseURL: config.public.apiBase,
                    headers: {
                        ...headers,
                        Accept: 'application/json',
                        'Cache-Control': 'no-cache',
                        Authorization: `Bearer ${Cookies.get(config.public.clientKeyStoreToken)}`,
                    },
                    // onResponse({ request, response, options }) {
                    //     if (response.status === 200 && response._data.message === 'Authentication error') {
                    //         Cookies.remove(config.public.clientKeyStoreToken)
                    //         localStorage.clear()
                    //         sessionStorage.clear()
                    //         // if (route.name !== 'index') {
                    //         //     window.location.href = '/'
                    //         // }
                    //         // nuxtApp.$error(response._data.message ? 'Please login to play the game!' : response._data.message)
                    //     }
                    // },
                    // onResponseError({ request, response, options }) {
                    //     // Handle the response errors
                    //     if (response.status === 401) {
                    //         Cookies.remove(config.public.clientKeyStoreToken)
                    //         localStorage.clear()
                    //         sessionStorage.clear()
                    //         // if (route.name !== 'index') {
                    //         //     window.location.href = '/'
                    //         // }
                    //         // nuxtApp.$error(response._data.message === 'jwt malformed' ? 'Please login to play the game!' : response._data.message)
                    //     }
                    // },
                })
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        // console.log('reason', reason.message)
                        if (!reason.response) {
                            reject(reason)
                        } else {
                            if (reason.response._data.message === 'jwt malformed') {
                                reason.response._data.message = 'Please login to play the game!'
                            }
                            if (reason.response._data.message === 'jwt expired') {
                                window.location.href = '/'
                            }
                            reject(reason.response._data)
                        }
                    })
            })
        }
    }
}
