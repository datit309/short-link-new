<template lang="pug">
section
    .container.trade-game
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' aria-controls='nav-home' aria-selected='true')
                                    .text-uppercase.fs-3 {{$t("HIDEURL.TOP - Welcome to hideurl.top!")}}
                    .card-body.p-0
                        .row.mx-0.justify-content-center
                            .col-lg-12.mb-4.col-sm-12.mt-4
                                .p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            | We are delighted to introduce you to our website, hideurl.top. Our platform is designed to provide a simple and secure way to hide and shorten URLs, ensuring privacy and convenience for our users.
                                        p.mb-2.fs-5
                                            | At hideurl.top, we understand the importance of protecting your online presence and safeguarding your personal information. With our user-friendly interface, you can quickly and easily convert lengthy URLs into shorter, more manageable links. This feature not only helps you save space when sharing links but also provides an added layer of anonymity and security.
                                        p.mb-2.fs-5 Here are some key features of hideurl.top:
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 1. URL Shortening: Our platform allows you to shorten any URL, making it easier to share and remember. Whether you're sharing links on social media, sending them via email, or posting them on websites, our service ensures that your URLs are concise and user-friendly.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 2. Privacy Protection: We value your privacy and take it seriously. When you use hideurl.top, we do not collect any personally identifiable information without your consent. Your data is securely processed, and we employ industry-standard security measures to protect it from unauthorized access.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 3. Customizable Links: With hideurl.top, you can customize your shortened links to make them more memorable and meaningful. Personalize your URLs with keywords or relevant terms to enhance their effectiveness and branding.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 4. Analytics and Tracking: Gain insights into the performance of your shortened links with our analytics feature. Track the number of clicks, geographic distribution, and other relevant statistics to measure the impact of your shared links.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 5. User-Friendly Interface: We strive to provide a seamless user experience. Our intuitive interface makes it effortless to shorten URLs, manage your links, and access additional features. Enjoy a hassle-free and efficient process from start to finish.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 6. Reliable and Fast: Our platform is built to deliver speed and reliability. We understand the importance of quick access to information, and we ensure that your shortened links redirect promptly, allowing your audience to access the desired content without delay.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 7. Dedicated Support: We are here to assist you every step of the way. If you have any questions, concerns, or need technical support, our responsive customer support team is ready to provide assistance and address your queries promptly.
                            .col-lg-12.mb-4.col-sm-12
                                .p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5 At hideurl.top, we are committed to creating a trusted and user-focused environment for all our visitors. We continually strive to improve our services and enhance your online experience. Whether you're an individual, business professional, marketer, or social media enthusiast, we aim to be your go-to platform for URL shortening and privacy protection.
                                        p.mb-2.fs-5 Thank you for choosing hideurl.top. Start exploring our website and discover the benefits of secure and simplified URL management today!

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
