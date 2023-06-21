import { defineStore } from 'pinia'

export const kaStore = defineStore('ka', {
    state: () => ({}),
    actions: {
        getListGame(data: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/get-list-game', data).then(resolve).catch(reject)
            })
        },
        createToken() {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/createToken').then(resolve).catch(reject)
            })
        },
        getBalance() {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/balance').then(resolve).catch(reject)
            })
        },
        historyGameDetail() {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/historyGameDetail', {
                    UserName: '',
                })
                    .then(resolve)
                    .catch(reject)
            })
        },
        withdraw(amount: number) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/withdraw', {
                    amount,
                })
                    .then(resolve)
                    .catch(reject)
            })
        },
        deposit(amount: number) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/deposit', {
                    amount,
                })
                    .then(resolve)
                    .catch(reject)
            })
        },
        historyTransaction(page: number, transaction_type: string) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/ka/history-transaction', {
                    page,
                    transaction_type,
                })
                    .then(resolve)
                    .catch(reject)
            })
        },
    },
})
