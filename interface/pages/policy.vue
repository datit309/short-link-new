<template lang="pug">
section
    .container.trade-game
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' )
                                    .text-uppercase.fs-3 {{$t("HIDEURL.TOP - Privacy Policy and Terms of Use")}}
                    .card-body.p-0
                        .row.mx-0.justify-content-center
                            .col-lg-12.mb-4.col-sm-12.mt-4
                                .p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            | Welcome to website
                                            a.mx-1(href="/") HideURL.TOP
                                            | ! This policy describes how we collect, use, and protect your personal information when you access our website and use our services. Please read this policy carefully before using the website or providing personal information to us.

                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 1. Collection of Personal Information
                                            | We may collect personal information from you when you register an account, use the service, or submit information to us through various means. Personal information may include your name, email address, IP address, and any other personal information you provide to us.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 2. Use of Personal Information
                                            | We use your personal information to provide services, maintain and manage your account, verify identity, address complaints, and communicate with you. We may also use personal information to provide information about updates, promotions, and other advertising messages that we believe you may be interested in.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 3. Security of Personal Information
                                            | We are committed to protecting your personal information and implement appropriate security measures to prevent unauthorized access, misuse, disclosure, alteration, or destruction of your personal information. We only store your personal information for as long as necessary to fulfill the purposes stated in this policy or as required by applicable law.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 4. Disclosure of Personal Information to Third Parties
                                            | We do not share your personal information with third parties unless we have your explicit consent or when we need to share that information to provide the services you requested. However, we may disclose your personal information when necessary to comply with current legal regulations, protect our rights, assets, or security.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 5. Use of Cookies
                                            | We may use cookies and similar technologies to provide a better user experience, customize content and advertisements, track and analyze website usage. By using this website, you agree to our use of cookies as described in this policy.
                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 6. Links to Third-Party Websites
                                            | Our website may contain links to third-party websites. We are not responsible for the content or privacy policies of any websites that are not owned or controlled by us.

                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 7. Policy Changes
                                            | We may update this policy at our discretion or to comply with current legal requirements. Any changes to this policy will be posted on our website. Continued use of the website after changes have been posted signifies your acceptance of those changes.

                            .col-lg-4.mb-4.col-sm-12
                                .bg-box.p-2.p-lg-3.rounded.h-100
                                    .tab-content
                                        p.mb-2.fs-5
                                            h3 8. Contact
                                            | If you have any questions, comments, or complaints regarding this policy or how we process your personal information, please contact us.
                            p Please note that this policy applies only to the hideurl.top website and does not apply to any other websites you may access through links on this website.
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
}
</script>
<style scoped></style>
