// @ts-ignore
import * as jquery from 'jquery'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('jquery', jquery)
    nuxtApp.provide('jQuery', jquery)
})
