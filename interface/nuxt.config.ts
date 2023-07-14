// https://nuxt.com/docs/api/configuration/nuxt-config
import nodePolyfills from 'rollup-plugin-polyfill-node'

const path = require('path')

const MODE = process.env.NODE_ENV
const development = MODE === 'development'

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: {
            APP_URL: 'https://hideurl.top',
            apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
            clientKeyStoreToken: process.env.NUXT_PUBLIC_APP_CLIENT_TOKEN,
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
                {
                    name: 'description',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'index, follow' },
                { name: 'language', content: 'English' },
                { name: 'revisit-after', content: '3 days' },
                { name: 'author', content: 'hideurl.top' },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    property: 'og:title',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },
                { hid: 'og:site_name', name: 'og:site_name', content: process.env.NUXT_PUBLIC_APP_TITLE },
                { hid: 'og:url', name: 'og:url', content: 'https://hideurl.top' },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    property: 'og:description',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },
                { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
                { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://hideurl.top/favicon.png' },
                { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://hideurl.top/favicon.png' },
                { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
                { hid: 'og:image:height', name: 'og:image:height', content: '630' },
                {
                    hid: 'og:image:alt',
                    name: 'og:image:alt',
                    property: 'og:image:alt',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },

                { name: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:domain', content: 'hideurl.top' },
                { property: 'twitter:url', content: 'https://hideurl.top' },
                {
                    name: 'twitter:title',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },
                {
                    name: 'twitter:description',
                    content: 'HideURL’s Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution.',
                },
                { name: 'twitter:image', content: 'https://hideurl.top/favicon.png' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            ],
            script: [
                { src: '/jquery.min.js', type: 'text/javascript' },
                // {src: "/js/bootstrap.bundle.min.js", type: "text/javascript"},
                { src: '/js/all.min.js', type: 'text/javascript' },
                { src: '/js/smooth-scroll.js', type: 'text/javascript' },
                { src: '/wow/wow.min.js', type: 'text/javascript' },
                { src: '/slick/slick.js', type: 'text/javascript' },
                { src: '/js/moment.min.js', type: 'text/javascript' },
                { src: '/js/daterangepicker.js', type: 'text/javascript' },
                { src: 'https://www.googletagmanager.com/gtag/js?id=G-RKK4GZERT5', type: 'text/javascript' },
                {
                    hid: 'gtm',
                    children: `
                        window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'G-RKK4GZERT5');
                    `,
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
        '~/assets/scss/style-light.scss',
        '~/assets/css/animate.css',
        '~/assets/slick/slick.css',
        '~/assets/fonts/fontstyle.css',
        '~/assets/css/flag-icons.min.css',
        '~/assets/css/daterangepicker.css',
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
                vueI18n: '/lang/i18n.config.ts',
            },
        ],
        'nuxt-simple-sitemap'
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
