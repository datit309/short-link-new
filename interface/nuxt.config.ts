// https://nuxt.com/docs/api/configuration/nuxt-config
import nodePolyfills from 'rollup-plugin-polyfill-node'

const path = require('path')

const MODE = process.env.NODE_ENV
const development = MODE === 'development'
const title = process.env.NUXT_PUBLIC_APP_TITLE
const description = 'HideURL.TOP is a free URL shortening and link hiding tool that allows you to protect and secure your links effortlessly. Safeguard your URLs and maintain privacy with our user-friendly service'
export default defineNuxtConfig({
    ssr: false,
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || 'https://hideurl.top',
    },
    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',
        // Public keys that are exposed to the client
        public: {
            APP_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://hideurl.top',
            apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
            clientKeyStoreToken: process.env.NUXT_PUBLIC_APP_CLIENT_TOKEN,
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: title,
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí, Giấu link số lượng lớn, Rút gọn link số lượng lớn',
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'index, follow' },
                {
                    name: 'robots',
                    content: '<generated>',
                },
                { name: 'language', content: 'English' },
                { name: 'revisit-after', content: '3 days' },
                { name: 'author', content: 'hideurl.top' },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    property: 'og:title',
                    content: title,
                },
                { hid: 'og:site_name', name: 'og:site_name', content: title },
                { hid: 'og:url', name: 'og:url', content: 'https://hideurl.top' },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    property: 'og:description',
                    content: description,
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
                    content: description,
                },

                { name: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:domain', content: 'hideurl.top' },
                { property: 'twitter:url', content: 'https://hideurl.top' },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: description,
                },
                { name: 'twitter:image', content: 'https://hideurl.top/favicon.png' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL || 'https://hideurl.top' },
            ],
            script: [
                { src: '/jquery.min.js', type: 'text/javascript' },
                { src: '/js/all.min.js', type: 'text/javascript' },
                { src: '/js/moment.min.js', type: 'text/javascript' },
                { src: '/js/daterangepicker.js', type: 'text/javascript' },
                { src: 'https://www.googletagmanager.com/gtag/js?id=G-L408P91Y7S', type: 'text/javascript', async: "true" },
                {
                    hid: 'gtm',
                    children: `
                         window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'G-L408P91Y7S');
                    `,
                    type: 'text/javascript',
                },
                { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7566427492875170', type: 'text/javascript', async: "true", crossorigin: "anonymous" },
            ],
            noscript: [{ children: 'Javascript is required' }],
        },
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/css/fontawesome.min.css',
        '~/assets/css/hover-min.css',
        '~/assets/scss/style-light.scss',
        '~/assets/fonts/fontstyle.css',
        '~/assets/css/daterangepicker.css',
    ],
    modules: [
        [
            '@pinia/nuxt',
            {
                disableVuex: true,
                autoImports: [
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        'nuxt-og-image',
        'nuxt-seo-experiments',
        '@nuxt/image',
    ],
    image: {
        domains: ['hideurl.top'],
        inject: true,
        quality: 80,
        format: ['webp']
    },
    i18n: {
        vueI18n: './lang/i18n.config.ts' // if you are using custom path, default
    },
    sitemap: {
        xslTips: false,
        discoverImages: true,
    },
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
    webpack: {
        loaders: {
            vue: {
                hotReload: true,
            }
        }
    }
})
