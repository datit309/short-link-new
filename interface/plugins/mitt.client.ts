import mitt from 'mitt'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('emitter', mitt())
})
