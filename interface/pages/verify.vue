<template lang="pug">
section
    .login
        .row.mx-0.mt-4
            .col-lg-3.mx-auto.pt-5
                //.row.mx-0
                //    .col-12.col-lg-3.mx-auto
                //        img.w-100.px-2.mb-3(src='~/assets/images/logo.png')
                h2.text-center.mb-4 {{$t("HideURL Verify registration")}}
                p.fs-5.text-center.text-green(v-if="isActive" )
                    | {{$t("Your account is verified. Please login to play the game.")}}
                p.fs-5.text-center.text-red(v-else)
                    | {{$t("Account activation link does not exist!")}}
                p.fs-6.text-center
                    a(href='/game').text-link.ms-2 {{$("Back")}}
</template>

<script>
import { authStore } from '~/store/auth'
definePageMeta({
    layout: 'master',
})

export default {
    name: 'Login',
    data() {
        return {
            token: '',
            isActive: false,
        }
    },
    mounted() {
        const vm = this
        vm.token = vm.$route.query.token
        // console.log(vm.token)
        // vm.verifyAccount()
    },
    methods: {
        async verifyAccount() {
            const vm = this
            const auth = authStore()
            try {
                const response = await auth.doActiveAccount({ token: vm.token })
                if (response.success) {
                    vm.isActive = true
                    vm.$success(response.message)
                } else {
                    vm.$error(response.data ? response.data : response.message)
                }
            } catch (e) {
                vm.$error(e.message)
            }
        },
    },
}
</script>

<style scoped></style>
