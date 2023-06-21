<template lang="pug">
section(v-if="link.is_password" )
    .container
        .row.mx-0.my-5
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' aria-controls='nav-home' aria-selected='true')
                                    h3 {{$t("Rút gọn link miễn phí. Dữ liệu lưu giữ vĩnh viễn")}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        label.form-label.mb-0.px-0(v-if="link.is_password" ) {{$t("Mật khẩu truy cập")}}
                                        .input-group.mb-2.bg-block.px-0.input-group-lg(v-if="link.is_password" )
                                            span.input-group-text
                                                i.fas.fa-lock
                                            input.form-control(v-model="get_short_link.password" type='password' aria-describedby='basic-addon3' placeholder="Mật khẩu truy cập")

                                            button.btn.btn-sub.py-3(@click="getShortLinkWithPassword") {{$t('Tiếp tục')}}
</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import { profileStore } from '~/store/profile'
import { kaStore } from '~/store/ka'
import Cookies from "js-cookie";
import {useLinkStore} from "~/store/link";

// const theme = Cookies.get('theme') || 'light'
definePageMeta({
    layout: 'blank',
})

// useHead({
//     meta: [
//         { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
//         { hid: 'og:site_name', name: 'og:site_name', content: 'Mobagame Crypto Gambling' },
//         { hid: 'og:url', name: 'og:url', content: 'https://mobagame.io' },
//         { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
//         { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
//         { hid: 'og:image:type', name: 'og:image:type', content: 'image/jpeg' },
//         { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://mobagame.io/client/images/moba_game_banner.jpg' },
//         { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://mobagame.io/client/images/moba_game_banner.jpg' },
//         { hid: 'og:image:width', name: 'og:image:width', content: '500' },
//         { hid: 'og:image:height', name: 'og:image:height', content: '282' },
//         { hid: 'og:image:alt', name: 'og:image:alt', property: 'og:image:alt', content: 'Moba Game : Crypto Dapp Games & Crypto Slot Games - Crypto Gambling' },
//     ]
// })
export default {
    name: 'Index',
    computed: {
        ...mapState(profileStore, _.keys(profileStore().$state)),
    },
    data() {
        return {
            short_link: {
                origin: '',
                custom: '',
                date_expires: null,
                password: null,
                domain: '',
            },
            get_short_link: {
                short_link: '',
                password: ''
            },
            link: {
                domain: '',
                is_password: null,
                short_link: '',
                origin_link: '',
                counter: 0
            }
        }
    },
    watch: {},
    async mounted() {
        const vm = this

        $(function() {
            $('input[name="date_expires"]').daterangepicker({
                opens: 'left',
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'YYYY/MM/DD'
                },
                autoApply: true
            }, function(start, end, label) {
                vm.short_link.date_expires = start.format('YYYY-MM-DD')
            });
        });
        await vm.getShortLink()
    },
    methods: {
        async getShortLinkWithPassword(){
            let vm = this
            const linkStore = useLinkStore()
            try {
                vm.$showLoading()
                vm.get_short_link.short_link = vm.$route.path.split('/').join('')
                if(!vm.get_short_link.short_link){
                    throw new Error('Link bạn vừa nhập không hợp lệ')
                }

                await linkStore.getShortLinkWithPassword({
                    short_link: vm.get_short_link.short_link,
                    password: vm.get_short_link.password,
                }).then((response) => {
                    let {data, message, success} = response
                    if(success){
                        vm.link = data
                        if(data.origin_link){
                            // window.location.href = data.origin_link
                            return navigateTo(data.origin_link, {external: true, redirectCode: 301})
                        }
                        vm.$hideLoading()
                    } else {
                        vm.$hideLoading()
                        vm.$error(message)
                    }
                }).catch((error) => {
                    vm.$hideLoading()
                    vm.$error(error.message)
                })
            } catch (e) {
                vm.$hideLoading()
                vm.$error(e.message)
            }
        },
        async getShortLink(){
            let vm = this
            const linkStore = useLinkStore()
            try {
                vm.$showLoading()
                vm.get_short_link.short_link = vm.$route.path.split('/').join('')
                if(!vm.get_short_link.short_link){
                    throw new Error('Link bạn vừa nhập không hợp lệ')
                }

                await linkStore.getShortLink({
                    short_link: vm.get_short_link.short_link,
                }).then((response) => {
                    let {data, message, success} = response
                    if(success){
                        vm.link = data
                        if(!data.is_password && data.origin_link){
                            // window.location.href = data.origin_link
                            return navigateTo(data.origin_link, {external: true, redirectCode: 301})
                        }
                        vm.$hideLoading()
                    } else {
                        vm.$hideLoading()
                        vm.$error(message)
                    }
                }).catch((error) => {
                    vm.$hideLoading()
                    vm.$error(error.message)
                })
            } catch (e) {
                vm.$hideLoading()
                vm.$error(e.message)
            }
        }
    },
}
</script>
<style scoped></style>
