// https://nuxt.com/docs/api/configuration/nuxt-config
import nodePolyfills from 'rollup-plugin-polyfill-node'

const path = require('path')

const MODE = process.env.NODE_ENV
const development = MODE === 'development'

export default defineNuxtConfig({
    ssr: false,
    scss: {
        sourceMap: true,
    },
    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: {
            APP_URL: 'https://mobagame.io',
            apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
            socketIOUrl: process.env.NUXT_PUBLIC_API_SOCKET_IO,
            clientKeyStoreToken: process.env.NUXT_PUBLIC_APP_CLIENT_TOKEN,
            kaAccessToken: process.env.NUXT_PUBLIC_KA_GAME_ACCESS_TOKEN,
            kaGameLaunch: process.env.NUXT_PUBLIC_GAME_LAUNCH,
            kaPartner: process.env.NUXT_PUBLIC_PARTNER,

            // ERC 20
            CHAIN_ID_ERC20: process.env.NUXT_PUBLIC_CHAIN_ID_ERC20,
            CHAIN_NAME_ERC20: process.env.NUXT_PUBLIC_CHAIN_NAME_ERC20,
            CHAIN_ID_HEX_ERC20: process.env.NUXT_PUBLIC_CHAIN_ID_HEX_ERC20,
            BLOCK_URL_ERC20: process.env.NUXT_PUBLIC_BLOCK_URL_ERC20,
            SC_DEPOSIT_ERC20: process.env.NUXT_PUBLIC_SC_DEPOSIT_ERC20, // DEPOSIT
            SC_USDT_ERC20: process.env.NUXT_PUBLIC_SC_USDT_ERC20,
            RPC_URL_ERC20: process.env.NUXT_PUBLIC_RPC_URL_ERC20,

            // BEP20
            CHAIN_ID_BEP20: process.env.NUXT_PUBLIC_CHAIN_ID_BEP20,
            CHAIN_NAME_BEP20: process.env.NUXT_PUBLIC_CHAIN_NAME_BEP20,
            CHAIN_ID_HEX_BEP20: process.env.NUXT_PUBLIC_CHAIN_ID_HEX_BEP20,
            BLOCK_URL_BEP20: process.env.NUXT_PUBLIC_BLOCK_URL_BEP20,
            SC_USDT_BEP20: process.env.NUXT_PUBLIC_SC_USDT_BEP20,
            SC_DEPOSIT_BEP20: process.env.NUXT_PUBLIC_SC_DEPOSIT_BEP20, // DEPOSIT
            SC_BNB_BEP20: process.env.NUXT_PUBLIC_SC_BNB,
            RPC_URL_BEP20: process.env.NUXT_PUBLIC_RPC_URL_BEP20,
            SC_PANCAKE_FACTORY_BEP20: process.env.NUXT_PUBLIC_SC_PANCAKE_ROUTER,
            SC_PANCAKE_ROUTER_BEP20: process.env.NUXT_PUBLIC_SC_PANCAKE_FACTORY,
            // POLYGON
            RPC_URL_POLYGON: process.env.NUXT_PUBLIC_RPC_URL_POLYGON,
            CHAIN_ID_POLYGON: process.env.NUXT_PUBLIC_CHAIN_ID_POLYGON,
            CHAIN_NAME_POLYGON: process.env.NUXT_PUBLIC_CHAIN_NAME_POLYGON,
            CHAIN_ID_HEX_POLYGON: process.env.NUXT_PUBLIC_CHAIN_ID_HEX_POLYGON,
            BLOCK_URL_POLYGON: process.env.NUXT_PUBLIC_BLOCK_URL_POLYGON,
        },
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: process.env.NUXT_PUBLIC_APP_TITLE,
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'title', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { name: 'description', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'index, follow' },
                { name: 'language', content: 'English' },
                { name: 'revisit-after', content: '3 days' },
                { name: 'author', content: 'Mobagame' },
                { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { hid: 'og:site_name', name: 'og:site_name', content: 'Mobagame Crypto Gambling' },
                { hid: 'og:url', name: 'og:url', content: 'https://mobagame.io' },
                { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:image:type', name: 'og:image:type', content: 'image/jpeg' },
                { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://mobagame.io/client/images/moba_game_banner.jpg' },
                { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://mobagame.io/client/images/moba_game_banner.jpg' },
                { hid: 'og:image:width', name: 'og:image:width', content: '500' },
                { hid: 'og:image:height', name: 'og:image:height', content: '282' },
                { hid: 'og:image:alt', name: 'og:image:alt', property: 'og:image:alt', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },

                { name: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:domain', content: 'mobagame.io' },
                { property: 'twitter:url', content: 'https://mobagame.io' },
                { name: 'twitter:title', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { name: 'twitter:description', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
                { name: 'twitter:image', content: 'https://mobagame.io/client/images/moba_game_banner.jpg' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                { rel: 'stylesheet', href: '/client/jstree/themes/default/style.min.css' },
            ],
            script: [
                { src: '/jquery.min.js', type: 'text/javascript' },
                // {src: "/js/bootstrap.bundle.min.js", type: "text/javascript"},
                { src: '/js/all.min.js', type: 'text/javascript' },
                { src: '/js/smooth-scroll.js', type: 'text/javascript' },
                { src: '/wow/wow.min.js', type: 'text/javascript' },
                { src: '/slick/slick.js', type: 'text/javascript' },
                { src: '/js/chart.bundle.js', type: 'text/javascript' },
                { src: '/client/jstree/jstree.min.js', type: 'text/javascript' },
                { src: '/js/moment.min.js', type: 'text/javascript' },
                { src: '/js/daterangepicker.js', type: 'text/javascript' },
                { src: 'https://www.googletagmanager.com/gtag/js?id=G-893754965M', type: 'text/javascript' },
                {
                    hid: 'gtm',
                    children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-577JB7T');`,
                    type: 'text/javascript',
                },
                {
                    hid: 'gtm',
                    children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-893754965M');`,
                    type: 'text/javascript',
                },
            ],
            noscript: [{ children: 'Javascript is required' }],
        },
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/css/fontawesome.min.css',
        '~/assets/css/hover-min.css',
        // '~/assets/scss/style.scss',
        '~/assets/css/animate.css',
        '~/assets/slick/slick.css',
        '~/assets/fonts/fontstyle.css',
        '~/assets/css/flag-icons.min.css',
        '~/assets/css/daterangepicker.css'
    ],
    modules: [
        [
            '@pinia/nuxt',
            {
                disableVuex: true,
                autoImports: [
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/device',
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './lang/i18n.config.ts',
            },
        ],
    ],
    vite: {
        plugins: [
            development &&
                nodePolyfills({
                    include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')],
                }),
        ],
        build: {
            rollupOptions: {
                plugins: [nodePolyfills()],
            },
            commonjsOptions: {
                transformMixedEsModules: true,
            },
        },
    },
})
