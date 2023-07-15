<template lang="pug">
section(v-if="link.is_password" )
    .container
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' )
                                    .text-uppercase.fs-3 {{$t("HIDEURL.TOP - SHORT LINK FOR FREE. DATA KEEPING PERMANENTLY")}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        label.form-label.mb-0.px-0(v-if="link.is_password" ) {{$t("Password protection")}}
                                        .input-group.mb-2.bg-block.px-0.input-group-lg(v-if="link.is_password" )
                                            span.input-group-text
                                                i.fas.fa-lock
                                            input.form-control(v-model="get_short_link.password" type='password' aria-describedby='basic-addon3' :placeholder='$t("Password protection")')

                                            button.btn.btn-sub.py-3(@click="getShortLinkWithPassword") {{$t('Continue')}}
</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import { useLinkStore } from '~/store/link'

// const theme = Cookies.get('theme') || 'light'
definePageMeta({
    layout: 'blank',
})

export default {
    name: 'Index',
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
                password: '',
            },
            link: {
                domain: '',
                is_password: null,
                short_link: '',
                origin_link: '',
                counter: 0,
            },
        }
    },
    computed: {},
    watch: {},
    async mounted() {
        const vm = this

        $(function () {
            $('input[name="date_expires"]').daterangepicker(
                {
                    opens: 'left',
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: {
                        format: 'YYYY/MM/DD',
                    },
                    autoApply: true,
                },
                function (start, end, label) {
                    vm.short_link.date_expires = start.format('YYYY-MM-DD')
                }
            )
        })
        await vm.getShortLink()
    },
    methods: {
        async getShortLinkWithPassword() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                vm.$showLoading()
                vm.get_short_link.short_link = vm.$route.path.split('/').join('')
                if (!vm.get_short_link.short_link) {
                    throw new Error('The link you entered is not valid')
                }

                await linkStore
                    .getShortLinkWithPassword({
                        short_link: vm.get_short_link.short_link,
                        password: vm.get_short_link.password,
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.link = data
                            if (data.origin_link) {
                                // window.location.href = data.origin_link
                                return navigateTo(data.origin_link, { external: true, redirectCode: 301 })
                            }
                            vm.$hideLoading()
                        } else {
                            vm.$hideLoading()
                            vm.$error(message)
                        }
                    })
                    .catch((error) => {
                        vm.$hideLoading()
                        vm.$error(error.message)
                    })
            } catch (e) {
                vm.$hideLoading()
                vm.$error(e.message)
            }
        },
        async getShortLink() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                vm.$showLoading()
                vm.get_short_link.short_link = vm.$route.path.split('/').join('')
                if (!vm.get_short_link.short_link) {
                    throw new Error('The link you entered is not valid')
                }

                await linkStore
                    .getShortLink({
                        short_link: vm.get_short_link.short_link,
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.link = data
                            if (!data.is_password && data.origin_link) {
                                // window.location.href = data.origin_link
                                return navigateTo(data.origin_link, { external: true, redirectCode: 301 })
                            }
                            vm.$hideLoading()
                        } else {
                            vm.$hideLoading()
                            vm.$error(message)
                        }
                    })
                    .catch((error) => {
                        vm.$hideLoading()
                        vm.$error(error.message)
                    })
            } catch (e) {
                vm.$hideLoading()
                vm.$error(e.message)
            }
        },
    },
}
</script>
<style scoped></style>
