<template lang="pug">
//h1.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí
h2.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí
h3.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí
h4.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí
h5.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí
h6.d-none HideURL.TOP, URL shortener, Link hiding, Link protection, Secure URL, Hide URLs, Shorten links, URL encryption, Free URL shortener, Rút gọn link miễn phí

header
    // Modal
    coming-soon
    #resend-email.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-body.p-4.py-lg-5.position-relative
                    //.position-absolute.top-0.end-0
                        button.btn.border-0.text-title(data-bs-dismiss="modal")
                            i.fas.fa-times
                    div.justify-content-center.d-flex.mb-2
                        nuxt-img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png' alt="hideurl")
                        nuxt-img.w-75(v-else src='~/assets/images/logo.png' alt="hideurl")
                    .fs-3.text-title.text-uppercase.fw-bold.text-center {{$t('Resend Email Active')}}
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
                        nuxt-img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png' alt="hideurl")
                        nuxt-img.w-75(v-else src='~/assets/images/logo.png' alt="hideurl")
                    .fs-3.text-title.text-uppercase.fw-bold.text-center {{$t('Register')}}
                    .row.py-3.justify-content-center
                        div
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Username')}}
                                input.form-control(v-model="username" type='text' placeholder="Username")
                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Password')}}
                                .input-group
                                    input.form-control(v-model="password" :type="show_password ? 'text' : 'password'" placeholder='Password' aria-label='Password' aria-describedby='basic-addon1')
                                    .input-group-text
                                        button.btn.p-0(@click.prevent="show_password = !show_password")
                                            i.fas.fa-eye

                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Confirm Password')}}
                                .input-group
                                    input.form-control(v-model="confirm_password" :type="show_password ? 'text' : 'password'" placeholder='Confirm Password' aria-label='Confirm Password' aria-describedby='basic-addon1')
                                    .input-group-text
                                        button.btn.p-0(@click.prevent="show_password = !show_password")
                                            i.fas.fa-eye

                            .mb-3
                                label.form-label(for='exampleInputPassword1') {{$t('Email')}}
                                input.form-control(v-model="email" type='text' placeholder="Email")
                            .mb-3.form-check
                                input#exampleCheck1.form-check-input(type='checkbox' checked="true")
                                label.form-check-label(for='exampleCheck1' )
                                    span {{$t('I agree to the collection of information in cookies, I agree with')}} &nbsp;
                                    a(href="/policy" target="_blank") {{$t('Privacy policy')}}
                                    span &nbsp; {{$t('and with')}} &nbsp;
                                    a(href="/policy" target="_blank") {{$t('Terms of Use')}}
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
                        nuxt-img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png' alt="hideurl")
                        nuxt-img.w-75(v-else src='~/assets/images/logo.png' alt="hideurl")
                    .fs-3.text-title.text-uppercase.fw-bold.text-center {{$t('RESET PASSWORD')}}
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
                        nuxt-img.w-75(v-if="theme === 'dark'" src='~/assets/images/logo.png' alt="hideurl")
                        nuxt-img.w-75(v-else src='~/assets/images/logo.png' alt="hideurl")

                    .fs-3.text-title.text-uppercase.fw-bold.text-center {{$t('LOGIN WITH PASSWORD')}}
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





    nav.navbar.navbar-expand-lg.bg-menu.mt-lg-3
        .container
            a.navbar-brand.me-0(href="/")
                nuxt-img.img-logo.d-none.d-lg-block(src='~/assets/images/logo.png' alt="hideurl")
                nuxt-img.img-logo.d-lg-none(src='~/assets/images/favicon.png' alt="hideurl")
            .d-flex.justify-content-center
                button.btn.btn-sub.p-2.px-lg-3.me-1(v-if="!account.detail.username" data-bs-toggle="modal" data-bs-target="#loginModal" type='button' aria-expanded='false')
                    | {{$t('Login')}} / {{$t('Register')}}
                nuxt-link.btn.btn-sub.p-2.px-lg-3.me-1(to="/" v-if="account.detail.username" aria-expanded='false')
                    | {{$t('Create a shortened link')}}
                nuxt-link.btn.btn-sub.p-2.px-lg-3.me-1(to="/account/list-link" v-if="account.detail.username" aria-expanded='false')
                    | {{$t('History')}}

                .dropdown.me-1.dropdown-menu-right(v-if="account.detail.username")
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
                            //nuxt-link.dropdown-item.d-flex.justify-content-between.align-items-center.border-bottom.py-2(to="/account/list-link")
                                span {{$t('My Account')}}
                                i.fas.fa-user.ms-5
                            a.dropdown-item.d-flex.justify-content-between.align-items-center.py-2(@click="logoutAPIV2")
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
import Cookies from 'js-cookie'
import { authStore } from '~/store/auth'
import { useAccountStore } from '~/store/account'
import { langStore } from '~/store/lang'
import ComingSoon from '~/components/ComingSoon.vue'

export default {
    components: { ComingSoon },
    computed: {
        ...mapState(useAccountStore, {
            myOwnName: 'account',
            account: (store) => store.account,
        }),
        ...mapState(langStore, {
            myOwnName: 'lang',
            locale: (store) => store.locale,
            list_locales: (store) => store.list_locales,
        }),
    },
    data() {
        return {
            referral: '',
            username: '',
            password: '',
            confirm_password: '',
            show_password: false,
            email: '',
            code: null,
            theme: 'light',
        }
    },
    watch: {
        username(new_value) {
            this.username = new_value.toLowerCase()
        },
        email(new_value) {
            this.email = new_value.toLowerCase()
        },
    },
    async mounted() {
        const vm = this
        const storeAccount = useAccountStore()

        // await vm.checkServerMaintenance()

        const langCode = Cookies.get('i18n_redirected')
        if (langCode) {
            this.setLanguage(langCode)
        }
    },
    methods: {
        setLanguage(code) {
            const lang = langStore()
            lang.setLang(code)
            this.$i18n.setLocaleCookie(code)
            this.$i18n.setLocale(code)
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
                    const decoded = await storeAccount.decodeToken()
                    await vm.$router.push('/')
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
        async clearStoreAndProvider(resetState = true) {
            const vm = this
            const config = useRuntimeConfig()
            const storeAccount = useAccountStore()
            if (resetState) {
                await storeAccount.resetState()
                await Cookies.remove(config.public.clientKeyStoreToken)
                await localStorage.clear()
                await sessionStorage.clear()
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
