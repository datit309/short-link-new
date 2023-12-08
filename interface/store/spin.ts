import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSpinStore = defineStore('spin', {
    state: () => ({
        symbol: 'BTCUSDT',
    }),
    actions: {
        changeSymbol(symbol: string) {
            this.symbol = symbol
        },
        createSpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/spin-wheel/create', body).then(resolve).catch(reject)
            })
        },
        updateSpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/spin-wheel/update', body).then(resolve).catch(reject)
            })
        },
        deleteSpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/spin-wheel/delete', body).then(resolve).catch(reject)
            })
        },
        getSpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/spin-wheel/detail', body).then(resolve).catch(reject)
            })
        },
        doSpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'spin-wheel/list', body).then(resolve).catch(reject)
            })
        },
        getDetailSpinUser(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'spin-wheel/detail-user', body).then(resolve).catch(reject);
            })
        },
        listItem(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'spin-wheel/list-item', body).then(resolve).catch(reject)
            })
        },
        historySpin(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'spin-wheel/history', body).then(resolve).catch(reject);
            })
        },
    },
})
