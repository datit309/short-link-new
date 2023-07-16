<template lang="pug">
footer
    nav.navbar.navbar-expand-lg.bg-menu.mt-lg-3
        .container.justify-content-between
            a.navbar-brand(href='/')
                nuxt-img.img-logo-footer.d-none.d-lg-block(src='/images/logo.png' alt="hideurl")
                nuxt-img.img-logo-footer.d-lg-none(src='/images/favicon.png' alt="hideurl")
            .d-flex

                a.mx-2(href="https://t.me/+dJCz3rOLV5w1NDNl" target="_blank" rel="nofollow")
                    i.fab.fa-telegram.fa-2x.d-none.d-lg-block
                    i.fab.fa-telegram.d-lg-none
                a.mx-2(href="javascript:void(0)" target="_blank" rel="nofollow")
                    i.fab.fa-facebook.fa-2x.d-none.d-lg-block
                    i.fab.fa-facebook.d-lg-none
                a.mx-2(href="javascript:void(0)" target="_blank" rel="nofollow")
                    i.fab.fa-discord.fa-2x.d-none.d-lg-block
                    i.fab.fa-discord.d-lg-none
                //a.mx-2(href="javascript:void(0)" target="_blank" rel="nofollow")
                    i.fas.fa-envelope.fa-2x.d-none.d-lg-block
                    i.fas.fa-envelope.d-lg-none
                a.mx-2(href="javascript:void(0)" target="_blank" rel="nofollow")
                    i.fab.fa-twitter.fa-2x.d-none.d-lg-block
                    i.fab.fa-twitter.d-lg-none
            .d-flex
                a(href="https://hightechk.net" target="_blank" rel="nofollow")
                    nuxt-img.img-aware.d-none.d-lg-block.py-2(src='/images/hightechk.net-removebg-preview.png' style='width: 100px' alt="hightechk")
                    .d-lg-none.d-flex.align-items-center.mt-2
                        nuxt-img(src='/images/hightechk.net-removebg-preview.png' style='width: 80px' alt="hightechk")
</template>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            theme: 'dark',
        }
    },
    mounted() {
        const theme = Cookies.get('theme')
        const vm = this
        if (theme) {
            vm.theme = theme
        }
    },
}
</script>
<style scoped></style>
