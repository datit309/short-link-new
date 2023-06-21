<template lang="pug">
footer.fixed-bottom
    nav.navbar.navbar-expand-lg.bg-menu.mt-lg-3
        .container
            a.navbar-brand(href='/')
                //img.img-logo-footer(src='@/assets/images/logo.png')
                img.img-logo-footer.d-none.d-lg-block(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                img.img-logo-footer.d-none.d-lg-block(v-else src='~/assets/images/logo.png')
                img.img-logo-footer.d-lg-none(src='~/assets/images/favicon.png')
            .d-flex
                a.text-light.mx-2(href="https://t.me/MobagameAIBlockchain" target="_blank")
                    i.fab.fa-telegram.fa-2x
                a.text-light.mx-2(href="javascript:void(0)" target="_blank")
                    i.fab.fa-facebook.fa-2x
                a.text-light.mx-2(href="javascript:void(0)" target="_blank")
                    i.fab.fa-discord.fa-2x
                a.text-light.mx-2(href="#" target="_blank")
                    i.fas.fa-envelope.fa-2x
                a.text-light.mx-2(href="#" target="_blank")
                    i.fab.fa-twitter.fa-2x
            //.d-flex.justify-content-center
                img.img-aware.d-none.d-lg-block.py-2(src='@/assets/flags/4x3/us.svg')
                .img-aware-mb.d-lg-none.d-flex.align-items-center
                    img.w-75(src='@/assets/flags/4x3/us.svg')
                //.dropdown.dropup.ms-3
                  button.btn.btn-language.dropdown-toggle(type='button' data-bs-toggle='dropdown' aria-expanded='false')
                    span.fi.fi-gb.me-2
                    | English
                  //ul.dropdown-menu.dropdown-menu-lg-end(aria-labelledby='dropdownMenuButton1' style='min-width:auto')
                    li
                      a.dropdown-item(href='#')
                        span.fi.fi-es.me-2
                        | Span
                    li
                      a.dropdown-item(href='#')
                        span.fi.fi-cn.me-2
                        | Chines
</template>

<script>
import Cookies from "js-cookie";

export default {
    data(){
        return {
            theme: 'dark'
        }
    },
    mounted() {
        let theme = Cookies.get('theme')
        let vm = this
        if(theme){
            vm.theme = theme
        }
    }
}
</script>
<style scoped></style>
