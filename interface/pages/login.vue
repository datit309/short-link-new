<template></template>

<script>
import Cookies from 'js-cookie'
import _ from 'lodash'
import { authStore } from '~/store/auth'
import { useAccountStore } from '~/store/account'

export default {
    name: 'Login',
    layout: 'auth',
    mounted() {
        const vm = this
        vm.postDoLogin()
    },
    methods: {
        async postDoLogin() {
            const vm = this
            const storeAccount = useAccountStore()
            const auth = authStore()
            vm.$showLoading()
            await auth
                .doLoginUUID({ token_uuid: vm.$route.query.token_uuid })
                .then(async (response) => {
                    const { message, data, success } = response
                    if (success) {
                        vm.$hideLoading()
                        const decoded = await storeAccount.decodeToken()
                        await vm.$router.push('/game')
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
                })
                .catch((e) => {
                    vm.$hideLoading()
                    vm.$error(e)
                })
        },
    },
}
</script>

<style scoped></style>
