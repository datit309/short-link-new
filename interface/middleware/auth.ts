import moment from 'moment'
import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const config = useRuntimeConfig()
    const token = Cookies.get(config.public.clientKeyStoreToken)
    const nuxtApp = useNuxtApp()
    const router = useRouter()
    if (token) {
        const decodeToken = JSON.parse(atob(token.split('.')[1]))
        if (moment().utc().unix() >= decodeToken.exp) {
            localStorage.clear()
            sessionStorage.clear()
            Cookies.remove(config.public.clientKeyStoreToken)
            try {
                nuxtApp.$error('Please login again!')
                router.push('/')
            } catch (e) {}
        }
    } else {
        try {
            nuxtApp.$error('Unauthorized!')
            router.push('/')
        } catch (e) {}
    }
})
