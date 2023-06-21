import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { io } from 'socket.io-client'

export const socketIOStore = defineStore('socketio', {
    getters: {
        socket() {
            const config = useRuntimeConfig()
            return io(config.public?.socketIOUrl || '', {
                transports: ['websocket', 'polling'],
                autoConnect: true,
                query: {
                    token: Cookies.get(config.public?.clientKeyStoreToken || ''),
                },
            })
        },
    },
})
