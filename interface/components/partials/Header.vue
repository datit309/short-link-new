<template lang="pug">
header
    // Modal
    coming-soon
    #notice.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    .position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    //div.justify-content-center.d-flex.mb-2
                        img.w-75(src='@/assets/images/logo.png')
                    //h5.text-title.text-uppercase.fw-bold.text-center {{$t('Notice')}}
                    .row.py-3.justify-content-center
                        img.w-100(src='@/assets/images/notice-4-6.jpeg')


    #resend-email.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    //.position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    div.justify-content-center.d-flex.mb-2
                        img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                        img.w-75(v-else src='~/assets/images/logo.png')
                    h5.text-title.text-uppercase.fw-bold.text-center {{$t('Resend Email Active')}}
                    .row.py-3.justify-content-center
                        form
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t("Username")}}
                                //  (Can be changed later)
                                input.form-control(v-model="username" type='text' placeholder="Username")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Email')}}
                                //  (Can be changed later)
                                input.form-control(v-model="email" type='text' placeholder="Email")
                            .d-flex.justify-content-center
                                button.btn.text-center.w-50.btn-connect(@click.prevent="resendEmailActive" type='submit') Resend

                        .mt-3
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t("You don't have account?")}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#registerModal" ) {{$t('Register')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Forget password?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resetPasswordModal" ) {{$t('Reset')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Resend email active?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resend-email" ) {{$t('Resend')}}

    #registerModal.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    //.position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    div.justify-content-center.d-flex.mb-2
                        img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                        img.w-75(v-else src='~/assets/images/logo.png')
                    h5.text-title.text-uppercase.fw-bold.text-center {{$t('COMPLETE REGISTRATION')}}
                    .row.py-3.justify-content-center
                        div
                            .mb-3
                                label.form-label {{$t('Referral')}}
                                input.form-control(v-model="account.referral.address" type='text' placeholder='Referral')
                                //#emailHelp.form-text We&apos;ll never share your email with anyone else.
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Username')}}
                                //  (Can be changed later)
                                input.form-control(v-model="username" type='text' placeholder="Username")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Password')}}
                                .input-group
                                    input.form-control(v-model="password" :type="show_password ? 'text' : 'password'" placeholder='Password' aria-label='Password' aria-describedby='basic-addon1')
                                    .input-group-text
                                        button.btn.p-0(@click.prevent="show_password = !show_password")
                                            i.fas.fa-eye
                                //label.form-label(for='exampleInputPassword1') {{$t('Password')}}
                                ////  (Can be changed later)
                                //input.form-control(v-model="password" type='password' placeholder="Password")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Confirm Password')}}
                                //  (Can be changed later)
                                .input-group
                                    input.form-control(v-model="confirm_password" :type="show_password ? 'text' : 'password'" placeholder='Confirm Password' aria-label='Confirm Password' aria-describedby='basic-addon1')
                                    .input-group-text
                                        button.btn.p-0(@click.prevent="show_password = !show_password")
                                            i.fas.fa-eye
                                //input.form-control(v-model="confirm_password" type='password' placeholder="Confirm Password")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Email')}}
                                //  (Can be changed later)
                                input.form-control(v-model="email" type='text' placeholder="Email")
                            //.mb-3
                                label.form-label(for='exampleInputPassword1') Wallet address (BEP20)
                                //  (Can be changed later)
                                input.form-control(v-model="wallet_address" type='text' placeholder="Wallet Address BEP-20")
                            .mb-3.form-check
                                input#exampleCheck1.form-check-input(type='checkbox' checked="true")
                                label.form-check-label(for='exampleCheck1' )
                                    span {{$t('I agree to the collection of information in cookies, I agree with')}} &nbsp;
                                    a(href="javascript:void(0)") {{$t('Privacy policy')}}
                                    span &nbsp; {{$t('and with')}} &nbsp;
                                    a(href="javascript:void(0)") {{$t('Terms of Use')}}
                                    span
                                        | , {{$t("Gambling isn't forbidden by my")}}
                                    span {{$t("local authorities and I'm at least 18 years old.")}}
                            .d-flex.justify-content-center
                                button.btn.text-center.w-50.btn-connect(@click.prevent="registerAPIV2" type='submit') {{$t('COMPLETE REGISTRATION')}}
                        .mt-3
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('You already have account?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#loginModal" ) {{$t('Login')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Forget password?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resetPasswordModal" ) {{$t('Reset')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Resend email active?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resend-email" ) {{$t('Resend')}}

    #resetPasswordModal.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    //.position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    div.justify-content-center.d-flex.mb-2
                        img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                        img.w-75(v-else src='~/assets/images/logo.png')
                    h5.text-title.text-uppercase.fw-bold.text-center {{$t('RESET PASSWORD')}}
                    .row.py-3.justify-content-center
                        form
                            .mb-3
                                label.form-label {{$t('Username')}}
                                input.form-control(v-model="username" type='text' placeholder="Username")
                            .mb-3
                                label.form-label {{$t('Email')}}
                                input.form-control(v-model="email" type='text' placeholder="Email")
                            .d-flex.justify-content-center
                                button.btn.text-center.w-50.btn-connect(@click.prevent="resetPasswordAPIV2" type='submit') {{$t('RESET')}}

                        .mt-3
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t("You don't have account?")}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#registerModal" ) {{$t('Register')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Forget password?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resetPasswordModal" ) {{$t('Reset')}}
                        .mt-2
                            label.form-check-label(for='exampleCheck1' )
                                span {{$t('Resend email active?')}}
                                a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resend-email" ) {{$t('Resend')}}

    #loginModal.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    //.position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    div.justify-content-center.d-flex.mb-2
                        img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                        img.w-75(v-else src='~/assets/images/logo.png')
                    //h5.text-title.text-uppercase.fw-bold.text-center {{$t('LOGIN WITH WALLET')}}
                    //.row.border-bottom.py-3.justify-content-center
                    //    .d-flex.justify-content-center
                    //        button.btn.text-center.w-50.text-dark.d-lg-block.d-none(style='background: #60FFFA;' @click.prevent="connectWithWeb3Modal" type='submit' data-bs-dismiss="modal")
                    //            span.mx-2 {{$t('Connect Wallet')}}
                    //            i.fas.fa-wallet
                    //    .d-flex.justify-content-center
                    //        button.btn.text-center.w-50.text-dark.d-block.d-lg-none(style='background: #60FFFA;' @click.prevent="connectWithWalletConnect" type='submit' data-bs-dismiss="modal")
                    //            span.mx-2 {{$t('Connect Wallet')}}
                    //            i.fas.fa-wallet
                    //h5.text-title.text-uppercase.fw-bold.text-center.mt-3 {{$t('OR')}}
                    h5.text-title.text-uppercase.fw-bold.text-center {{$t('LOGIN WITH PASSWORD')}}
                    .row.py-3.justify-content-center
                        form
                            .mb-3
                                label.form-label {{$t('Username')}}
                                //  (Can be changed later)
                                input#exampleInputPassword1.form-control(v-model="username" type='text' placeholder="Username")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Password')}}
                                .input-group
                                    input.form-control(v-model="password" :type="show_password ? 'text' : 'password'" placeholder='Password' aria-label='Password' aria-describedby='basic-addon1')
                                    .input-group-text
                                        button.btn.p-0(@click.prevent="show_password = !show_password")
                                            i.fas.fa-eye
                            //.mb-3
                                label.form-label {{$t('Password')}}
                                //  (Can be changed later)
                                input#exampleInputPassword2.form-control(v-model="password" type='password' placeholder="Password")

                            .d-flex.justify-content-center
                                button.btn.btn-connect.text-center.w-50(@click.prevent="loginAPIV2" type='submit') {{$t('Login')}}

                            .mt-3
                                label.form-check-label(for='exampleCheck1' )
                                    span {{$t("You don't have account?")}}
                                    a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#registerModal" ) {{$t('Register')}}
                            .mt-2
                                label.form-check-label(for='exampleCheck1' )
                                    span {{$t('Forget password?')}}
                                    a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resetPasswordModal" ) {{$t('Reset')}}
                            .mt-2
                                label.form-check-label(for='exampleCheck1' )
                                    span {{$t('Resend email active?')}}
                                    a.mx-2(href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#resend-email" ) {{$t('Resend')}}




    #selectnetwork.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    .position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    h1.text-title.text-uppercase.fw-bold Select a network
                    p You are currently browsing on the
                        span.text-title.mx-1 Moba game
                        | network
                    .row.py-3.justify-content-center
                        //.col-6.mb-3.d-none
                        //  a(@click="selectNetwork('TRC20')").hvr-float-shadow
                        //    img.w-100(src='@/assets/images/trc.png')
                        .col-6.mb-3
                            a(@click="selectNetwork('BEP20')" data-bs-dismiss="modal").hvr-float-shadow
                                img.w-100(src='@/assets/images/bep.png')
                        .col-6.mb-3
                            a(@click="selectNetwork('ERC20')" data-bs-dismiss="modal").hvr-float-shadow
                                img.w-100(src='@/assets/images/erc.png')
                        .col-6.mb-3
                            a(@click="selectNetwork('POLYGON')" data-bs-dismiss="modal").hvr-float-shadow
                                img.w-100(src='@/assets/images/poly.png')


    nav.navbar.navbar-expand-lg.bg-menu.mt-lg-3
        .container
            a.navbar-brand.me-0(href="/")
                img.img-logo.d-none.d-lg-block(v-if="theme === 'dark'" src='~/assets/images/logo.png')
                img.img-logo.d-none.d-lg-block(v-else src='~/assets/images/logo.png')
                img.img-logo.d-lg-none(src='~/assets/images/favicon.png')
            .d-flex.justify-content-center
                //.dropdown.me-1(v-if="account.detail.username")
                    button.btn.btn-sub(type='button' data-bs-toggle='dropdown' aria-expanded='false')
                        .d-flex.align-items-center(v-if="$route.query.invest_id" )
                            .flex-shrink-1
                                i.fas.fa-robot.me-1
                            .w-100.px-2.pe-lg-4
                                p.small.mb-0.lh-1(v-text="$filters.money(trade_in_package.balance, '')")
                                p.small.mb-0.lh-1(v-text="default_asset")
                            //.flex-shrink-1
                                i.fas.fa-caret-down
                        .d-flex.align-items-center(v-else)
                            .flex-shrink-1
                                //img.img-coin(src="~/assets/images/usdt.png")
                                span.border.rounded.px-1.py-0 {{user.type === 'D' ? 'D': 'L'}}
                            .w-100.px-2.pe-lg-4
                                p.small.mb-0.lh-1(v-text="$filters.money(user.balance, '')")
                                p.small.mb-0.lh-1(v-text="default_asset")
                            //.flex-shrink-1
                                i.fas.fa-caret-down
                    ul.dropdown-menu.dropdown-menu-lg-end(aria-labelledby='dropdownMenuButton1' style='min-width:auto')
                        li(v-for="item in assets" )
                            .dropdown-item
                                .d-flex.align-items-center
                                    .flex-shrink-1
                                        //img.img-coin(src='~/assets/images/usdt.png')
                                        span.border.rounded.px-1.py-0.d-lg-block.d-none {{item.type === 'D' ? 'DEMO': 'LIVE'}}
                                        span.border.rounded.px-1.py-0.d-block.d-lg-none {{item.type === 'D' ? 'D': 'L'}}
                                    .w-100.px-2.pe-lg-4.align-items-center
                                        span.small.mb-0.lh-1 {{$filters.money(item.balance)}} {{ item.symbol }}
                                        span.small.mb-0.lh-1.ms-2
                                            a.btn.btn-deposit.px-2.py-0(href='/game' @click="chooseAsset(item.symbol, item.type)") {{$t("Play")}}

                //.dropdown.me-1(v-if="account.detail.username && follow_detail.docs.length > 0")
                    button.btn.btn-sub(type='button' data-bs-toggle='dropdown' aria-expanded='false')
                        .d-flex.align-items-center
                            i.fas.fa-robot.me-1
                            .w-100.px-2.pe-lg-4.d-lg-block.d-none
                                p.small.mb-0.lh-1 {{$t("AI BOT")}}
                                //p.small.mb-0.lh-1
                            //.flex-shrink-1
                                i.fas.fa-caret-down
                    ul.dropdown-menu.dropdown-menu-lg-end(aria-labelledby='dropdownMenuButton1' style='min-width:auto')
                        template( v-for="item in follow_detail.docs")
                            li(v-if="item.status === 'ACTIVE'")
                                .dropdown-item
                                    .d-flex.align-items-center
                                        .flex-shrink-1
                                            i.fas.fa-robot.me-1
                                        .w-100.px-2.pe-lg-4.align-items-center
                                            span.small.mb-0.lh-1  {{ $filters.money(item.balance) }} USDT
                                            span.small.mb-0.lh-1.ms-2
                                                a.btn.btn-deposit.px-2.py-0(:href='`/game?invest_id=${item._id}`') {{$t("Play")}}
                //a.btn.btn-control.me-2(v-if="account.detail.username && current_route_name !== 'game'" href="/game")
                    .d-none.d-lg-block {{$t('Play')}}
                    .d-lg-none
                        i.fas.fa-gamepad
                //a.btn.btn-control.me-1.d-none.d-lg-block(v-if="account.detail.username && current_route_name !== 'index'" href="/game/wallet")
                    .d-lg-inline
                        i.fas.fa-wallet
                    .d-none.d-lg-inline.ms-2 {{$t('Deposit')}}

                button.btn.btn-sub.p-2.px-lg-3.me-1(v-if="!account.detail.username" data-bs-toggle="modal" data-bs-target="#loginModal" type='button' aria-expanded='false')
                    | {{$t('Login')}} / {{$t('Register')}}
                //.dropdown.me-1.dropdown-menu-right(v-if="account.detail.username")
                    button.btn.btn-sub(type='button' data-bs-toggle='dropdown' aria-expanded='false')
                        .d-flex
                            .w-100.px-2.pe-lg-4
                                .d-lg-inline
                                    i.fas.fa-user
                                .d-none.d-lg-inline.ms-2 {{(account.detail.username)}}

                            //.flex-shrink-1.d-none.d-lg-block
                                i.fas.fa-caret-down
                    ul.dropdown-menu.dropdown-menu-end(aria-labelledby='dropdownMenuButton1' style='min-width:200px')
                        li
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/account")
                                span {{$t('My Account')}}
                                i.fas.fa-user.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/bot-ai")
                                span {{$t('AI Bot')}}
                                i.fas.fa-robot.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/network")
                                span {{$t('Network')}}
                                i.fas.fa-network-wired.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/wallet")
                                span {{$t('Wallet')}}
                                i.fas.fa-wallet.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/3rd-party")
                                span {{$t('Moba Game Online')}}
                                i.fas.fa-wallet.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="/game/history")
                                span {{$t('History')}}
                                i.fas.fa-history.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(href="https://t.me/mobagamesupport" target="_blank")
                                span {{$t('Supports')}}
                                i.fas.fa-headset.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.py-2(@click="disconnectWallet")
                                span {{$t('Logout')}}
                                i.fas.fa-sign-out-alt.ms-5

                //.dropdown.dropdown-menu-right.me-1
                  button.btn.btn-sub(type='button' data-bs-toggle='dropdown' aria-expanded='false')
                    span(:class="`${locale.img}`")
                    span.text-light.d-none.d-lg-inline.ms-2 {{locale.name}}
                  ul.dropdown-menu.dropdown-menu-lg-end(aria-labelledby='dropdownMenuButton1' style='min-width:auto')
                    li(v-for="locale in list_locales" :key="locale.code"
                        @click.prevent.stop="setLanguage(locale.code)")
                      a.dropdown-item(href='#')
                        span(:class="`${locale.img} me-2`")
                        span.d-none.d-lg-inline {{ locale.name }}
                //.dropdown.dropdown-menu-right
                    button.btn.btn-sub(v-if="theme === 'dark'" @click="setTheme('light')")
                        span(class="fas fa-moon")
                    button.btn.btn-sub(v-else @click="setTheme('dark')")
                        span(class="fas fa-sun")


</template>

<script>
import { mapState } from 'pinia'

import _ from 'lodash'
import { ethers, providers } from 'ethers'
import moment from 'moment'
import Cookies from 'js-cookie'
import { markRaw } from 'vue'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { authStore } from '~/store/auth'
import { useWeb3Store } from '~/store/web3Modal'
import { useAccountStore } from '~/store/account'
import { profileStore } from '~/store/profile'
import { orderStore } from "~/store/order";
import { langStore } from "~/store/lang";
import ComingSoon from "~/components/ComingSoon.vue";

export default {
    components: {ComingSoon},
    computed: {
        ...mapState(useAccountStore, {
            myOwnName: 'account',
            account: (store) => store.account,
        }),
        ...mapState(orderStore, {
            myOwnName: 'order',
            trade_in_package: (store) => store.trade_in_package,
        }),
        ...mapState(langStore, {
            myOwnName: 'order',
            locale: (store) => store.locale,
            list_locales: (store) => store.list_locales,
        }),
        ...mapState(useWeb3Store, {
            myOwnName: 'web3Modal',
            web3Modal: (store) => store.web3Modal,
        }),
        ...mapState(profileStore, _.keys(profileStore().$state)),
        current_route_name: {
            get() {
                return useRoute().name
            },
        },
    },
    data() {
        return {
            is_register_contract: false,
            referral: '',
            username: '',
            password: '',
            confirm_password: '',
            show_password: false,
            email: '',
            wallet_address: '',
            provider: null,
            signer: null,
            wallet: null,
            default_asset: 'USDT',
            amount: 0,
            follow_detail: {
                docs: [],
                beginBalance: 0,
                lastBalance: 0,
                profit: 0,
            },
            demo_account: {
                balance: 0,
                symbol: 'USDT'
            },
            code: null,
            theme: 'light'
        }
    },
    watch: {
        username(new_value) {
            this.username = new_value.toLowerCase()
        },
        email(new_value) {
            this.email = new_value.toLowerCase()
        },
        'account.detail.username'() {
            this.saveReferral()
            this.getProfileDetail()
            this.getUserFollowDetail()
            // if(!this.account.detail.email && this.account.detail.username && this.current_route_name !== 'game-account'){
            //     this.$router.push('/game/account')
            //     this.$warning('Please update your email and new password!')
            // }
        },

        $route(to, from) {
            this.current_route_name = to.name
            let order = orderStore()
            if(from.name !== 'game-bot-ai' && to.name === 'game'){
                order.updateTradeInPackage(null)
            }
            this.$forceUpdate()
        },
    },
    async mounted() {
        const vm = this
        const storeAccount = useAccountStore()
        const storeWeb3 = useWeb3Store()

        let theme = Cookies.get('theme')
        if(theme){
            vm.theme = theme
        }

        // await vm.checkServerMaintenance()

        if (vm.$route.query.referral && !vm.account.detail.username) {
            await this.saveReferral()
            const modalReg = new vm.$bootstrap.Modal('#registerModal')
            modalReg.show()
        }

        if (vm.account.detail.username || vm.account.detail.wallet_address) {
            await vm.getProfileDetail()
            await vm.getUserFollowDetail()
        }
        // if(!this.account.detail.email && this.account.detail.username && this.current_route_name !== 'game-account'){
        //     this.$router.push('/game/account')
        //     this.$warning('Please update your email and new password!')
        // }
        // default support BEP20
        await storeWeb3.setNetwork(vm.web3Modal.network_connect ? vm.web3Modal.network_connect : 'BEP20')
        await vm.saveReferral()
        await vm.autoConnectWeb3Modal()

        vm.$emitter.on('connectDapp', () => {
            this.connectWithWeb3Modal()
        })
        vm.$emitter.on('disconnectDapp', () => {
            this.disconnectWallet()
        })

        let langCode = Cookies.get('i18n_redirected')
        if(langCode){
            this.setLanguage(langCode)
        }

    },
    methods: {
        setTheme(code){
            let vm = this
            Cookies.set('theme', code)
            vm.theme = code
            window.location.reload()
        },
        setLanguage(code){
            const lang = langStore()
            lang.setLang(code)
            this.$i18n.setLocaleCookie(code)
            this.$i18n.setLocale(code)
        },
        async getUserFollowDetail(){
            let vm = this
            const profile = profileStore()
            if(vm.account.detail.username){
                await profile.userFollowDetail({}).then((response) => {
                    let {data, success, message} = response
                    if(success){
                        vm.follow_detail = data

                    }
                }).catch((error) => {
                    vm.$error(error.message)
                })
            }

        },
        async selectNetwork(network) {
            const vm = this
            // const storeAccount = useAccountStore()
            const storeWeb3 = useWeb3Store()
            try {
                await storeWeb3.setNetwork(network)
                if (vm.account.detail.wallet_address) {
                    if (typeof window != 'undefined') {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: vm.web3Modal.network.CHAIN_ID_HEX }],
                        })
                    }
                    await vm.connectWithWeb3Modal()
                }
            } catch (switchError) {
                if (switchError.code === 4902) {
                    vm.$warning(`Please confirm add network to ${vm.web3Modal.network.CHAIN_NAME}`)
                    try {
                        if (typeof window != 'undefined') {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        chainId: vm.web3Modal.network.CHAIN_ID_HEX,
                                        chainName: vm.web3Modal.network.CHAIN_NAME,
                                        nativeCurrency: {
                                            name: vm.web3Modal.network.NAME,
                                            symbol: vm.web3Modal.network.SYMBOL, // 2-6 characters long
                                            decimals: vm.web3Modal.network.DECIMAL,
                                        },
                                        blockExplorerUrls: [vm.web3Modal.network.BLOCK_URL],
                                        rpcUrls: [vm.web3Modal.network.RPC_URL],
                                    },
                                ],
                            })
                        }
                        await vm.connectWithWeb3Modal()
                    } catch (addError) {
                        // handle "add" error
                        vm.$error(addError.message)
                    }
                } else {
                    vm.$error(switchError.message)
                }
            }
        },
        async resendEmailActive() {
            const vm = this
            const auth = authStore()
            try {
                const response = await auth.resendEmailActive({ email: vm.email, username: vm.username })
                if (response.success) {
                    vm.$success(vm.$t('Resend email active success, Please check your email address.'))
                } else if (_.isArray(response.message)) {
                    _.forEach(response.message, (msg) => {
                        vm.$error(msg)
                    })
                } else {
                    vm.$error(response.message)
                }
            } catch (e) {
                vm.$error(e.message)
            }
        },
        async connectWithWeb3Modal() {
            const vm = this
            // const storeAccount = useAccountStore()
            const storeWeb3 = useWeb3Store()
            try {
                const { wallet, provider, chainId } = await vm.$connectWeb3()
                vm.provider = provider
                vm.wallet = wallet
                if (chainId.toString() === vm.web3Modal.network.CHAIN_ID.toString()) {
                    // await storeAccount.$patch(async (state) => {
                    //     state.account.detail.wallet_address = wallet
                    //     state.account.wallet.auto_connect = 'on'
                    // })
                    await storeWeb3.$patch((state) => {
                        // state.web3Modal.provider = markRaw(provider)
                        state.web3Modal.connect_by = 'web3_modal'
                        state.web3Modal.chainId = Number(chainId)
                    })
                    await vm.loginAPI(provider)
                } else if (typeof window != 'undefined') {
                    await vm.addChainNetwork()
                }
            } catch (error) {
                if (error.code === 4001) {
                    vm.$error(`Can't connect wallet`)
                } else if (error.message) {
                    vm.$error(error.message)
                } else {
                    vm.$error(error)
                }
            }
        },
        async connectWithWalletConnect() {
            const vm = this
            const rpc = {}
            const storeWeb3 = useWeb3Store()
            try {
                rpc[vm.web3Modal.network.CHAIN_ID] = vm.web3Modal.network.RPC_URL
                const providerWalletConnect = new WalletConnectProvider({
                    rpc,
                    chainId: vm.web3Modal.network.CHAIN_ID,
                    network: 'Binance',
                    qrcode: true,
                })
                await providerWalletConnect.enable()

                providerWalletConnect.on('accountsChanged', async (accounts, chainId) => {
                    await providerWalletConnect.disconnect()
                    await vm.clearStoreAndProvider()
                })

                providerWalletConnect.on('disconnect', async (code, reason) => {
                    await vm.clearStoreAndProvider()
                })

                providerWalletConnect.on('session_update', async (error, payload) => {
                    if (error) {
                        throw error
                    }
                })

                const provider = new providers.Web3Provider(providerWalletConnect)

                if (providerWalletConnect.chainId.toString() === vm.web3Modal.network.CHAIN_ID.toString()) {
                    // let signer = await provider.getSigner(
                    //     vm.account.detail.wallet_address
                    // );
                    await storeWeb3.$patch((state) => {
                        state.web3Modal.provider = markRaw(provider)
                        state.web3Modal.connect_by = 'wallet_connect'
                        state.web3Modal.chainId = Number(providerWalletConnect.chainId.toString())
                    })
                    await vm.loginAPI(provider)
                } else if (process.env.NODE_ENV === 'production') {
                    await providerWalletConnect.disconnect()
                    await vm.clearStoreAndProvider()
                    vm.error(`Please change network to ${vm.web3Modal.network.CHAIN_NAME}`)
                }
            } catch (e) {
                vm.error(e.message)
            }
        },
        async clearStoreAndProvider(resetState = true) {
            const vm = this
            const config = useRuntimeConfig()
            const storeAccount = useAccountStore()
            const storeWeb3 = useWeb3Store()
            await storeAccount.updateWalletAddress(null)
            if (resetState) {
                await storeAccount.resetState()
                await storeWeb3.resetState()
                await Cookies.remove(config.public.clientKeyStoreToken)
                await localStorage.clear()
                await sessionStorage.clear()
            }
        },
        async disconnectWallet() {
            const vm = this
            const storeWeb3 = useWeb3Store()

            try {
                if (vm.web3Modal.connect_by === 'wallet_connect') {
                    await vm.web3Modal.provider.disconnect()
                } else {
                    await vm.$disconnectWeb3()
                }
                await vm.clearStoreAndProvider()
                // default support BEP20
                await storeWeb3.setNetwork(vm.web3Modal.network_connect ? vm.web3Modal.network_connect : 'BEP20')
                // vm.$error('Disconnected')
                // await vm.$router.push('/', { replace: true, redirectCode: 301, external: false })
                window.location.href = '/'
            } catch (e) {
                vm.$error(e.message)
            }
        },
        async addChainNetwork() {
            const vm = this
            const ethereum = window.ethereum
            try {
                await vm.$changeNetworkWeb3(vm.web3Modal.network.CHAIN_ID)
                vm.$warning('Please change network to ' + vm.web3Modal.network.CHAIN_NAME)
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: vm.web3Modal.network.CHAIN_ID_HEX }],
                })
                await vm.connectWithWeb3Modal()
            } catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        vm.$warning('Please confirm add network to ' + vm.web3Modal.network.CHAIN_NAME)
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: vm.web3Modal.network.CHAIN_ID_HEX,
                                    chainName: vm.web3Modal.network.CHAIN_NAME,
                                    nativeCurrency: {
                                        name: vm.web3Modal.NAME,
                                        symbol: vm.web3Modal.SYMBOL, // 2-6 characters long
                                        decimals: vm.web3Modal.DECIMAL,
                                    },
                                    blockExplorerUrls: [vm.web3Modal.network.BLOCK_URL],
                                    rpcUrls: [vm.web3Modal.network.RPC_URL],
                                },
                            ],
                        })
                        await vm.connectWithWeb3Modal()
                    } catch (addError) {
                        // handle "add" error
                        vm.$error(addError.message)
                    }
                } else {
                    vm.$error(switchError.message)
                }
            }
        },
        async autoConnectWeb3Modal() {
            const vm = this
            const auto_connect = vm.account.wallet.auto_connect
            if (auto_connect === 'on' && !vm.account.detail.wallet_address) {
                await vm.connectWithWeb3Modal()
            }
        },
        async saveReferral() {
            const vm = this
            const storeAccount = useAccountStore()
            const storeWeb3 = useWeb3Store()
            // if (vm.$route.query.referral && ethers.utils.isAddress(vm.$route.query.referral)) {
            //     await storeAccount.updateRefDetail(vm.$route.query.referral.toString())
            // } else {
            //     if (!ethers.utils.isAddress(vm.account.referral.address)) {
            //         await storeAccount.updateRefDetail(ethers.constants.AddressZero)
            //     }
            // }

            if (vm.$route.query.referral) {
                let team = vm.$route.query.team.toString()
                const address = vm.$route.query.referral.toString()
                if (team === '1') {
                    team = 'L'
                } else if (team === '2') {
                    team = 'R'
                } else {
                    team = 'A'
                }
                await storeAccount.updateRefDetail({
                    address,
                    team,
                })
            }
        },
        splitAddress(address) {
            if (address === null || address.length === 0) {
                return 'CONNECT'
            }
            const strTemp = ''
            return strTemp.concat(address.slice(0, 4), '...', address.slice(-5))
        },
        async loginAPI(provider) {
            const vm = this
            const storeAccount = useAccountStore()
            const auth = authStore()
            const address = await provider.getSigner().getAddress()
            const payload = await storeAccount.decodeToken()
            const config = useRuntimeConfig()
            if (!payload) {
                const { signature, timeExpired } = await vm.confirmSignatureInWallet(provider)
                if (signature && timeExpired) {
                    try {
                        const response = await auth.doLoginCRM({
                            wallet_address: address,
                            signature,
                            time_expired: timeExpired,
                            chain_id: vm.web3Modal.network.CHAIN_ID,
                        })
                        const { message, success } = response
                        if (success) {
                            // await storeAccount.$patch(async (state) => {
                            //     state.account.detail.wallet_address = address
                            //     state.account.wallet.auto_connect = 'on'
                            //     // state.account.wallet.signer = markRaw(await provider.getSigner())
                            //     state.account.detail.token = response.data.token
                            //     state.account.user_crm = response.data.user_crm
                            // })
                            const decoded = await storeAccount.decodeToken()
                            vm.$hideLoading()
                            await vm.$router.push('/game')
                        } else if (!success && message === 'WalletAddress not found!') {
                            vm.$error(message)
                            vm.$hideLoading()
                            await vm.saveReferral()
                            // const modalRegister = new vm.$bootstrap.Modal('#registerModal', {
                            //     keyboard: false,
                            //     backdrop: 'static',
                            // })
                            // modalRegister.show()
                        } else {
                            vm.$hideLoading()
                            vm.$error(message)
                        }
                    } catch (e) {
                        vm.$hideLoading()
                        if (_.isArray(e.message)) {
                            e.message.forEach((error) => {
                                vm.$error(error)
                            })
                        } else {
                            if (e.message) {
                                vm.$error(e.message)
                            }
                            if (e.message && e.status !== 401) {
                                vm.$error(e.message)
                            }
                        }
                    }
                } else {
                    vm.$hideLoading()
                    await vm.clearStoreAndProvider()
                }
            } else {
                // console.log("success");
                vm.$success('Connect success')
                const decoded = await storeAccount.decodeToken()
                // await storeAccount.$patch(async (state) => {
                //     state.account.detail.wallet_address = address
                //     state.account.wallet.auto_connect = 'on'
                //     state.account.user_crm = payload.user_crm
                // })
                await vm.$router.push('/game')
                vm.$hideLoading()
                // window.location.href = '/game'
            }
        },
        async registerAPI() {
            const vm = this
            const auth = authStore()
            const address = await vm.provider.getSigner().getAddress()
            const modalRegister = new vm.$bootstrap.Modal('#registerModal', {
                keyboard: false,
                backdrop: 'static',
            })
            vm.$showLoading()
            try {
                const response = await auth.doRegisterCRM({
                    username: vm.username,
                    ref_id: vm.account.referral.address,
                    wallet_address: address,
                })
                const { data, success, message } = response
                if (success) {
                    vm.$success('Register success, Please connect again!')
                    await new Promise((r) =>
                        setTimeout(async () => {
                            // console.log('hide modal')
                            modalRegister.hide()
                            modalRegister._hideModal()
                            $('.modal-backdrop').remove()
                            await new Promise((r) =>
                                setTimeout(async () => {
                                    // console.log('connect')
                                    if (vm.web3Modal.connect_by === 'wallet_connect') {
                                        await vm.connectWithWalletConnect()
                                    } else {
                                        await vm.connectWithWeb3Modal()
                                    }
                                    vm.$hideLoading()
                                }, 1000)
                            )
                        }, 1000)
                    )
                } else {
                    vm.$hideLoading()
                    vm.$error(message)
                }
            } catch (e) {
                await vm.disconnectWallet()
                vm.$hideLoading()
                if (_.isArray(e.message)) {
                    e.message.forEach((error) => {
                        vm.$error(error)
                    })
                } else if (e.message) {
                    vm.$error(e.message)
                } else {
                    vm.$error(e)
                }
            }
        },
        async registerReferral() {
            const vm = this
            if (vm.account.detail.wallet_address) {
                const ref_address = vm.account.referral.address ? vm.account.referral.address : ethers.constants.AddressZero
                const contract = contractStore.user[chainId].contract

                const ref = await contract.getRef(vm.account.detail.wallet_address)
                const new_ref = vm.account.referral.address
                if (ref === '0x0000000000000000000000000000000000000000' && new_ref !== '0x0000000000000000000000000000000000000000' && new_ref != null) {
                    await vm.$stepModal.show({
                        step: 1,
                        message: 'Register referral',
                    })
                    try {
                        const register = await contract.register(new_ref)
                        await register.wait()
                    } catch (e) {
                        if (typeof e.data === 'object') {
                            vm.$error(e.data.message)
                        } else if (e.reason) {
                            vm.$error(e.reason)
                        } else {
                            vm.$error(e.message)
                        }
                    }
                    await vm.$stepModal.hide()
                }
            }
        },
        async confirmSignatureInWallet(provider) {
            const vm = this
            vm.$showLoading()
            try {
                const address = await provider.getSigner().getAddress()
                const signer = await provider.getSigner()
                const timeExpired = moment().utc().add(5, 'm').unix()
                const message = `signature${address}${timeExpired}`
                const signature = await signer.signMessage(message)
                return { signature, timeExpired }
            } catch (e) {
                vm.$hideLoading()
                await vm.clearStoreAndProvider(false)
                throw new Error('User rejected signing')
                return null
            }
        },
        async getProfileDetail() {
            const vm = this
            const profile = profileStore()
            if(vm.account.detail.user_type !== 'D') {
                await profile
                .postGetProfile({})
                .then((response) => {
                    const { message, success } = response
                    if (success) {
                        let default_asset = Cookies.get('default_asset')
                        let default_asset_type = Cookies.get('default_asset_type')
                        vm.chooseAsset(default_asset ? default_asset : vm.default_asset, default_asset_type ? default_asset_type : 'L')
                    } else {
                        vm.$error(message)
                    }
                })
                .catch((error) => {
                    // console.log('getProfileDetail', error)
                    vm.$error(error.message)
                })
            }

        },
        chooseAsset(symbol, type = 'L') {
            const vm = this
            const profile = profileStore()
            const data = _.find(vm.assets, (item) => {
                return (item.symbol === symbol && type === item.type)
            })
            Cookies.set('default_asset', data.symbol)
            Cookies.set('default_asset_type', data.type)
            profile.setAsset(data)
            // window.location.href = '/game'

        },
        // api new v2
        async loginAPIV2() {
            const vm = this
            const storeAccount = useAccountStore()
            const auth = authStore()
            const modal = new vm.$bootstrap.Modal('#loginModal', {
                keyboard: false,
                backdrop: 'static',
            })
            vm.$showLoading()
            try {
                const response = await auth.doLoginCRMV2({
                    username: vm.username,
                    password: vm.password,
                })
                const { message, success, data } = response
                if (success) {
                    vm.$hideLoading()
                    setTimeout(async () => {
                        // console.log('hide modal')
                        modal.hide()
                        modal._hideModal()
                        $('.modal-backdrop').remove()
                    }, 100)
                    if (data.two_factor_enabled) {
                        vm.$Swal
                        .fire({
                            title: vm.$t('Enter the code by the authentication app on your device.'),
                            input: 'number',
                            inputAttributes: {
                                autocapitalize: 'off',
                            },
                            showCancelButton: false,
                            confirmButtonText: 'Submit',
                            showLoaderOnConfirm: true,
                            preConfirm: (code) => {
                                return auth
                                .verify2FA({ username: vm.username, code })
                                .then(async (response) => {
                                    if (!response.success) {
                                        throw new Error(response.message)
                                    }
                                    return response
                                })
                                .catch((error) => {
                                    vm.$Swal.showValidationMessage(`${error.message}`)
                                })
                            },
                            allowOutsideClick: () => !vm.$Swal.isLoading(),
                        })
                        .then(async (result) => {
                            if (result.isConfirmed) {
                                if (result.value.success) {
                                    const decoded = await storeAccount.decodeToken()
                                    Cookies.set('default_asset', vm.default_asset)
                                    Cookies.set('default_asset_type', 'L')
                                    await vm.$router.push('/')
                                } else {
                                    await vm.logoutAPIV2()
                                }
                            }
                        })
                    } else {
                        const decoded = await storeAccount.decodeToken()
                        Cookies.set('default_asset', vm.default_asset)
                        Cookies.set('default_asset_type', 'L')
                        await vm.$router.push('/')
                    }
                } else {
                    vm.$hideLoading()
                    if (_.isArray(message)) {
                        message.forEach((error) => {
                            vm.$error(error)
                        })
                    } else {
                        vm.$error(message)
                    }
                }
            } catch (e) {
                await vm.logoutAPIV2()
                vm.$hideLoading()
                if (_.isArray(e.message)) {
                    e.message.forEach((error) => {
                        vm.$error(error)
                    })
                } else {
                    if (e.message) {
                        vm.$error(e.message)
                    }
                    if (e.message && e.status !== 401) {
                        vm.$error(e.message)
                    }
                }
            }
        },
        async registerAPIV2() {
            const vm = this
            const auth = authStore()
            const modalRegister = new vm.$bootstrap.Modal('#registerModal', {
                keyboard: false,
                backdrop: 'static',
            })
            vm.$showLoading()
            try {
                if (vm.password !== vm.confirm_password) {
                    throw new Error(vm.$t('Confirm password is incorrect'))
                    return
                }
                const response = await auth.doRegisterCRMV2({
                    username: vm.username,
                    password: vm.password,
                    email: vm.email,
                    ref_id: vm.account.referral.address,
                    wallet_address: vm.wallet_address,
                    team: vm.account.referral.team,
                })
                const { data, success, message } = response
                if (success) {
                    vm.$hideLoading()
                    vm.$success(vm.$t('Register success!. Please activate your account by email.'))
                    await new Promise((r) =>
                        setTimeout(async () => {
                            // console.log('hide modal')
                            modalRegister.hide()
                            modalRegister._hideModal()
                            $('.modal-backdrop').remove()
                            await vm.loginAPIV2()
                        }, 1000)
                    )
                } else {
                    vm.$hideLoading()
                    if (_.isArray(message)) {
                        message.forEach((error) => {
                            vm.$error(error)
                        })
                    } else {
                        vm.$error(message)
                    }
                }
            } catch (e) {
                vm.$hideLoading()
                if (_.isArray(e.message)) {
                    e.message.forEach((error) => {
                        vm.$error(error)
                    })
                } else if (e.message) {
                    vm.$error(e.message)
                } else {
                    vm.$error(e)
                }
            }
        },
        async resetPasswordAPIV2() {
            const vm = this
            const auth = authStore()
            const modalRegister = new vm.$bootstrap.Modal('#resetPasswordModal', {
                keyboard: false,
                backdrop: 'static',
            })
            vm.$showLoading()
            try {
                const response = await auth.doResetPasswordCRMV2({
                    username: vm.username,
                    email: vm.email,
                })
                const { data, success, message } = response
                if (success) {
                    vm.$hideLoading()
                    vm.$success(vm.$t('Reset password was successful!'))
                    await new Promise((r) =>
                        setTimeout(async () => {
                            // console.log('hide modal')
                            modalRegister.hide()
                            modalRegister._hideModal()
                            $('.modal-backdrop').remove()
                        }, 1000)
                    )
                } else {
                    vm.$hideLoading()
                    if (_.isArray(message)) {
                        message.forEach((error) => {
                            vm.$error(error)
                        })
                    } else {
                        vm.$error(message)
                    }
                }
            } catch (e) {
                vm.$hideLoading()
                if (_.isArray(e.message)) {
                    e.message.forEach((error) => {
                        vm.$error(error)
                    })
                } else if (e.message) {
                    vm.$error(e.message)
                } else {
                    vm.$error(e)
                }
            }
        },
        async logoutAPIV2() {
            const vm = this
            await vm.clearStoreAndProvider()
            window.location.href = '/'
        },
        async checkServerMaintenance() {
            const vm = this
            const auth = authStore()
            try {
                const response = await auth.doPing()
                if (response.success) {
                    vm.$maintenance.hide()
                } else {
                    vm.$maintenance.show()
                }
            } catch (e) {
                console.log('error ping', e.message)
                vm.$maintenance.show()
            }
        },
    },
}
</script>

<style scoped></style>
