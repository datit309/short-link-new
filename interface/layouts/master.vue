<template lang="pug">
partials-header
slot
partials-footer
button#backtop.hvr-float(@click='backToTop' title='Go to top')
    i.fas.fa-chevron-up.fa-2x
</template>

<script lang="ts">
import { useNuxtApp } from 'nuxt/app'
import "@/assets/scss/style.scss";

export default {
    watch: {
        $route(to, from) {
            const nuxtApp = useNuxtApp()
            nuxtApp.hook('page:finish', async () => {
                await import('~/assets/js/main').then((r) => r).catch((e) => e)
            })
        },
    },
    mounted() {
        const nuxtApp = useNuxtApp()
        nuxtApp.hook('page:finish', async () => {
            await import('~/assets/js/main').then((r) => r).catch((e) => e)
        })
    },
    methods: {
        backToTop() {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        },
    },
}
</script>
<style scoped>
</style>
