import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useLinkStore = defineStore('useLinkStore', {
    state: () => ({}),
    actions: {
        createShortLink(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/link/create', body).then(resolve).catch(reject)
            })
        },
        getShortLink(body: any) {
            const config = useRuntimeConfig()

            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/link/get', body).then(resolve).catch(reject)
            })
        },
    },
})
