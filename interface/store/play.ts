import { defineStore } from 'pinia'

export const playStore = defineStore('play', {
    state: () => ({}),
    actions: {
        getFund(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/play/fund', body).then(resolve).catch(reject)
            })
        },
        getListChat(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/play/list-chat', body).then(resolve).catch(reject)
            })
        },
        getHistoryGame(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/play/game-history', body).then(resolve).catch(reject)
            })
        },
        getTrendGame(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/play/game-trend', body).then(resolve).catch(reject)
            })
        },
    },
})
