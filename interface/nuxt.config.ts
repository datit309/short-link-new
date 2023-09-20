// https://nuxt.com/docs/api/configuration/nuxt-config
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

const path = require('path')
import axios from 'axios'
import _ from 'lodash'

const MODE = process.env.NODE_ENV
const development = MODE === 'development'
const title = process.env.NUXT_PUBLIC_APP_TITLE
const description = 'HideURL.TOP is a reliable and secure short link service that allows you to easily shorten and protect your links. With our user-friendly platform, you can create custom short links for sharing on social media, emails, or websites. Experience the convenience and privacy of shortening your URLs with HideURL.TOP today!'
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
                    content: 'HideURL.TOP, Short link, Short links, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Hide URL, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí, Giấu link số lượng lớn, Rút gọn link số lượng lớn',
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
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL || 'https://hideurl.top' },
            ],
            script: [
                { src: '/jquery.min.js', type: 'text/javascript' },
                { src: '/js/all.min.js', type: 'text/javascript' },
                { src: '/slick/slick.js', type: 'text/javascript' },
                { src: '/js/moment.min.js', type: 'text/javascript' },
                { src: '/js/daterangepicker.js', type: 'text/javascript' },
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-L408P91Y7S',
                    type: 'text/javascript',
                    async: 'true',
                },
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
                {
                    hid: 'atsmarttag',
                    children: `
                         var __atsmarttag = {
                        pub_id: '6257072555054049941'
                      };
                        (function () {
                            var script = document.createElement('script');
                            script.src = '//static.accesstrade.vn/js/atsmarttag.min.js?v=1.1.0';
                            script.type = 'text/javascript';
                            script.async = true;
                            (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(script);
                              })();
                    `,
                    type: 'text/javascript',
                },
                {
                    hid: 'pushtimize',
                    children: `
                         (function() {
                            var script = document.createElement('script');
                            script.src = 'https://api.trackpush.com/sdk/inpage/v1.js?pid=nbwByI0UlvGyWyQlmSyuLQ';
                            script.async = true;
                            script.onload = function () {
                                InPagePushSDK.init({"content_type":"mainstream","time_to_show":"onload","delay_show":0,"max_ads":3,"max_showing":2,"max_showing_mobile":1,"ads_interval":5,"closeable":"1","position":"top","mobile_position":"top","align":"right"});

                            };
                            document.head.append(script);
                        })();
                    `,
                    type: 'text/javascript',
                },
                {
                    src: 'https://api.trackpush.com/sdk/native/v1.js?pid=nbwByI0UlvGyWyQlmSyuLQ&class=_bd5b59c038',
                    type: 'text/javascript',
                },
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7566427492875170',
                    type: 'text/javascript',
                    async: 'true',
                    crossorigin: 'anonymous',
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
        '~/assets/slick/slick.css',
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
        'nuxt-og-image',
        'nuxt-seo-experiments',
        '@nuxt/image',
        'nuxt-module-feed',
        '@nuxtjs/robots',
    ],
    image: {
        domains: ['hideurl.top'],
        inject: true,
        quality: 80,
        format: ['webp'],
    },
    i18n: {
        vueI18n: './lang/i18n.config.ts', // if you are using custom path, default
    },
    sitemap: {
        xslTips: false,
        discoverImages: true,
        exclude: [
            '/account/**',
        ],
        urls: async () => {
            let { data } = await axios.post(`${process.env.NUXT_PUBLIC_API_BASE_URL}/api/post/list`, {
                page: 1,
                limit: 1000,
            })
            return _.map(data.data.docs, (item) => ({
                loc: `/post/${item.slug}`,
                lastmod: item.updatedAt,
                changefreq: 'daily',
                priority: 0.8,
            }))
        },
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
        optimizeDeps: {
            esbuildOptions: {
                define: {
                    global: 'globalThis',
                },
                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        process: true,
                        buffer: true,
                    }),
                ],
            },
        },

    },
    webpack: {
        loaders: {
            vue: {
                hotReload: true,
            },
        },
    },
})
