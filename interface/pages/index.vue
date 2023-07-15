<template lang="pug">
section
    .container.trade-game
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab'  )
                                    .fs-3.text-uppercase {{$t("HideURL.TOP - Free URL Shortener and Link Hider")}}

                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .p-2.p-lg-3.rounded
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
                                                nuxt-link(href="/policy") {{$t('terms of use')}}
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
                                                    span.input-group-text(@click="copyText('https://hideurl.top')") HideURL.TOP/
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

        .row.mx-0
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab'  )
                                    .text-uppercase.fs-5 {{$t("About us")}}
                    .card-body.p-0
                        .row.mx-0.justify-content-center
                            .col-lg-12.mb-2.col-sm-12.mt-2
                                .p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            | We are delighted to introduce you to our website,
                                            a.mx-1(href="/") HideURL.TOP
                                            | . Our platform is designed to provide a simple and secure way to hide and shorten URLs, ensuring privacy and convenience for our users.
                                        p.mb-2.fs-6
                                            | At
                                            a.mx-1(href="/") HideURL.TOP
                                            | , we understand the importance of protecting your online presence and safeguarding your personal information. With our user-friendly interface, you can quickly and easily convert lengthy URLs into shorter, more manageable links. This feature not only helps you save space when sharing links but also provides an added layer of anonymity and security.
                                        p.mb-2.fs-6 Here are some key features of
                                            a.mx-1(href="/") HideURL.TOP
                                            | :
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-link.fa-2x.me-2.text-website
                                            | URL Shortening: Our platform allows you to shorten any URL, making it easier to share and remember. Whether you're sharing links on social media, sending them via email, or posting them on websites, our service ensures that your URLs are concise and user-friendly.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-user-shield.fa-2x.me-2.text-website
                                            | Privacy Protection: We value your privacy and take it seriously. When you use
                                            a.mx-1(href="/") HideURL.TOP
                                            | , we do not collect any personally identifiable information without your consent. Your data is securely processed, and we employ industry-standard security measures to protect it from unauthorized access.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-cog.fa-2x.me-2.text-website
                                            | Customizable Links: With
                                            a.mx-1(href="/") HideURL.TOP
                                            | , you can customize your shortened links to make them more memorable and meaningful. Personalize your URLs with keywords or relevant terms to enhance their effectiveness and branding.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-chart-bar.fa-2x.me-2.text-website
                                            | Analytics and Tracking: Gain insights into the performance of your shortened links with our analytics feature. Track the number of clicks, geographic distribution, and other relevant statistics to measure the impact of your shared links.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-palette.fa-2x.me-2.text-website
                                            | User-Friendly Interface: We strive to provide a seamless user experience. Our intuitive interface makes it effortless to shorten URLs, manage your links, and access additional features. Enjoy a hassle-free and efficient process from start to finish.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-rocket.fa-2x.me-2.text-website
                                            | Reliable and Fast: Our platform is built to deliver speed and reliability. We understand the importance of quick access to information, and we ensure that your shortened links redirect promptly, allowing your audience to access the desired content without delay.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6
                                            i.fas.fa-headset.fa-2x.me-2.text-website
                                            | Dedicated Support: We are here to assist you every step of the way. If you have any questions, concerns, or need technical support, our responsive customer support team is ready to provide assistance and address your queries promptly.
                            .col-lg-12.mb-4.col-sm-12
                                .p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-6 At
                                            a.mx-1(href="/") HideURL.TOP
                                            | , we are committed to creating a trusted and user-focused environment for all our visitors. We continually strive to improve our services and enhance your online experience. Whether you're an individual, business professional, marketer, or social media enthusiast, we aim to be your go-to platform for URL shortening and privacy protection.
                                        p.mb-2.fs-6 Thank you for choosing
                                            a.mx-1(href="/") HideURL.TOP
                                            | . Start exploring our website and discover the benefits of secure and simplified URL management today!

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
                    throw new Error('The link you just entered is not valid. Please enter a valid link starting with http:// or https://')
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
                            vm.$success('Create success')
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
