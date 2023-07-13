import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    apiSecret: string,

    i18n: {
        precompile: {
             strictMessage: boolean,

             escapeHtml: boolean,
        },
    },
  }
  interface PublicRuntimeConfig {
     APP_URL: string,

    apiBase: string,

    clientKeyStoreToken: string,

    persistedState: {
        storage: string,

        debug: boolean,

        cookieOptions: any,
    },

    device: {
        enabled: boolean,

        defaultUserAgent: string,

        refreshOnResize: boolean,
    },

    i18n: {
        experimental: {
             jsTsFormatResource: boolean,
        },

        baseUrl: string,
    },
  }
}