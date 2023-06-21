import { defineStore } from 'pinia'
import { useFetchAPI } from '~/composables/useFetch'

export const orderStore = defineStore('order', {
    persist: {
        storage: persistedState.sessionStorage,
    },
    state: () => ({
        auto_bet: {
            asset_type: 'L',
            user_copy_trade_id: null,
            start: false,
            balance: 0,
            total_win: 0,
            total_loss: 0,
            stop_profit: 100,
            stop_loss: 100,
            cash_out: 2,
            amount: 1,
            symbol: 'USDT',
            order: {
                _id: null,
                game_id: null,
            },
            on_lose: {
                return_bet: true,
                increase_bet: 2,
            },
            on_win: {
                return_bet: true,
                increase_bet: 2,
            },
        },
        trade_in_package: {
            _id: null,
            balance: 0,
        }
    }),
    actions: {
        updateAuto(body: any) {
            this.auto_bet = {
                ...this.auto_bet,
                ...body,
            }
        },
        updateOrderAuto(body: any) {
            this.auto_bet.order = {
                ...this.auto_bet.order,
                ...body,
            }
        },
        updateTradeInPackage(body: any) {
            this.trade_in_package = {
                ...this.trade_in_package,
                ...body,
            }
        },
        resetState() {
            this.$reset()
        },
        postDoOrder(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/do-order', body).then(resolve).catch(reject)
            })
        },
        postGetListHistoryOrder(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/history', body).then(resolve).catch(reject)
            })
        },
        postGetListOrderPending(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/pending', body).then(resolve).catch(reject)
            })
        },
        postGetUserOrderPending(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/user-order-pending', body).then(resolve).catch(reject)
            })
        },
        getMyHistoryOrder(body: any) {
            return new Promise(async (resolve, reject) => {
                const config = useRuntimeConfig()

                useFetchAPI('post', 'api/game/order/my-history', body).then(resolve).catch(reject)
            })
        },
        getHistoryBonus(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/history-bonus', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        postGetAllListHistoryOrder(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/all-history', body).then(resolve).catch(reject)
            })
        },
        getFeeOrder() {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/order/fee').then(resolve).catch(reject)
            })
        },
    },
})
