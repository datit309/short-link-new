<template lang="pug">
section
    .container
        .row.mx-0.my-5
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' aria-controls='nav-home' aria-selected='true')
                                    h1.text-uppercase.fs-3 {{$t("HIDEURL.TOP - SHORT LINK FOR FREE. DATA KEEPING PERMANENTLY")}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        label.form-label.mb-0.px-0 {{$t("Paste your link to shorten")}}
                                        .input-group.mb-2.bg-block.px-0.input-group-lg
                                            span.input-group-text
                                                i.fab.fa-telegram-plane
                                            input.form-control.py-3(:readonly="!!new_link.short_link.length > 0" v-model="short_link.origin" type='text' aria-describedby='basic-addon3' :placeholder='$t("Paste your link to shorten")')
                                            button.btn.btn-sub.py-3(v-if="new_link.short_link.length <= 0" @click="createShortLink") {{$t('Shorten links')}}

                                        p.my-3
                                            span.me-1
                                                i.fas.fa-exclamation-triangle
                                            span.me-1 {{$t('By clicking the button')}}
                                            span.fw-bold.me-1 {{$t("SHORT LINK,")}}
                                            span.me-1 {{$t('means you agree with')}}
                                            span
                                                a(href="javascript:void(0)") {{$t('terms of use')}}
                                        template(v-if="new_link.short_link.length > 0" )
                                            label.form-label.mb-0.px-0 {{$t("Your shortened link")}}
                                            template(v-for="link in new_link.short_link" )
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.fas.fa-link
                                                    input.form-control(:value="`${link.domain}/${link.short_link}`" type='text' aria-describedby='basic-addon3' :placeholder="$t('Your shortened link')" readonly)

                                                    button.btn.btn-sub.py-2(@click="copyText(`${link.domain}/${link.short_link}`)") {{$t('Copy')}}
                                            .row.mt-3.justify-content-center
                                                .col-md-3.col-lg-2.col-6
                                                    button.btn.btn-sub.py-3.w-100(@click="new_link.short_link = []") {{$t('Create another link')}}

                                        .row.my-3(v-if="new_link.short_link.length <= 0" )
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Quantity")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    //span.input-group-text
                                                        i.fas.fa-link
                                                    //span.input-group-text https://domain.com/
                                                    input.form-control(v-model="short_link.limit" type='number' min="1" max="5" aria-describedby='basic-addon3' placeholder="1")
                                                p * {{$t('You can create up to 5 different links at the same time.')}}
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Custom Links")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    //span.input-group-text
                                                        i.fas.fa-link
                                                    span.input-group-text(@click="copyText('https://hideurl.top')") hideurl.top/
                                                    input.form-control(v-model="short_link.custom" type='text' aria-describedby='basic-addon3' placeholder="custom-link")
                                                p * {{$t('By default, the system will generate random links. You can set the link by option.')}}
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Effective time")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.far.fa-calendar-alt
                                                    input.form-control(name="date_expires" type='text' aria-describedby='basic-addon3' :placeholder="$t('Effective time')")
                                                p * {{$t('After 00:00 minutes of the selected date, the link will no longer be valid. Leave blank if keeping the link permanently.')}}
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Password protection")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.fas.fa-lock
                                                    input.form-control(v-model="short_link.password" type='text' aria-describedby='basic-addon3' :placeholder='$t("Password protection")')
                                                p * {{$t('Set a password to protect the shortened link. Leave blank if you do not want to set a password.')}}

</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import Cookies from 'js-cookie'
import { useLinkStore } from '~/store/link'
import { useAccountStore } from '~/store/account'
import moment from "moment";

// const theme = Cookies.get('theme') || 'light'
definePageMeta({
    layout: 'master-light',
})
export default {
    name: 'Index',
    computed: {
        ...mapState(useAccountStore, {
            myOwnName: 'account',
            account: (store) => store.account,
        }),
    },
    data() {
        return {
            short_link: {
                origin: '',
                custom: '',
                date_expires: null,
                password: null,
                domain: '',
                limit: 1,
            },
            get_short_link: {
                short_link: '',
            },
            new_link: {
                short_link: [],
            },
        }
    },
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
                    minDate: moment().toDate(),
                },
                function (start, end, label) {
                    vm.short_link.date_expires = start.format('YYYY-MM-DD')
                }
            )
        })
    },
    methods: {
        validURL(str) {
            const pattern = new RegExp(
                '^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$',
                'i'
            ) // fragment locator
            return !!pattern.test(str)
        },
        copyText(text) {
            const vm = this
            navigator.clipboard.writeText(text).then(
                function () {
                    vm.$success(vm.$t('copy success'))
                },
                function (err) {
                    vm.$error(vm.$t('copy failed'), err)
                }
            )
        },
        async createShortLink() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                if (!vm.short_link.origin || !vm.validURL(vm.short_link.origin)) {
                    throw new Error('Link bạn vừa nhập không hợp lệ. Hãy nhập 1 link hợp lệ bắt đầu bằng http:// hoặc https://')
                }
                await linkStore
                    .createShortLink({
                        user_id: vm.account.detail.user_id,
                        domain: vm.short_link.domain,
                        origin_link: vm.short_link.origin,
                        short_link: vm.short_link.custom,
                        date_expires: vm.short_link.date_expires,
                        password: vm.short_link.password,
                        limit: vm.short_link.limit,
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.new_link.short_link = data
                            vm.$success(message)
                        } else {
                            vm.$error(message)
                        }
                    })
                    .catch((error) => {
                        vm.$error(error.message)
                    })
            } catch (e) {
                vm.$error(e.message)
            }
        },
    },
}
</script>
<style scoped></style>
