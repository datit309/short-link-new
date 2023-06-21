import Notiflix from 'notiflix'

export default defineNuxtPlugin((nuxtApp) => {
    const timeoutNotify = 2000
    nuxtApp.provide('success', (msg: string) => Notiflix.Notify.success(msg, { clickToClose: true, showOnlyTheLastOne: false, timeout: timeoutNotify, cssAnimationStyle: 'from-right' }))
    nuxtApp.provide('error', (msg: string) => Notiflix.Notify.failure(msg, { clickToClose: true, showOnlyTheLastOne: false, timeout: timeoutNotify, cssAnimationStyle: 'from-right' }))
    nuxtApp.provide('warning', (msg: string) => Notiflix.Notify.warning(msg, { clickToClose: true, showOnlyTheLastOne: false, timeout: timeoutNotify, cssAnimationStyle: 'from-right' }))
    nuxtApp.provide('info', (msg: string) => Notiflix.Notify.info(msg, { clickToClose: true, showOnlyTheLastOne: false, timeout: timeoutNotify, cssAnimationStyle: 'from-right' }))
    nuxtApp.provide('showLoading', (msg: string) => Notiflix.Loading.hourglass(msg, { clickToClose: false }))
    nuxtApp.provide('hideLoading', (msg: string) => Notiflix.Loading.remove())
})
