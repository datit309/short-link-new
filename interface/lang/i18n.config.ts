import en from './locales/en.json'
import vi from './locales/vi.json'
import zh from './locales/zh.json'

const config = useRuntimeConfig()
export default defineI18nConfig((nuxt) => ({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        vi,
        zh,
    },
}))
