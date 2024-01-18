<template lang="pug">
section(v-if="post.title" )
    .container
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' )
                                    .text-uppercase.fs-3 {{$t(post.title)}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        img.w-100.rounded.mb-2(v-if="post.thumbnail" :src="post.thumbnail")
                                        h1.mb-2.px-0(v-if="post.title" ) {{post.title}}

                                        p(v-html="post.description")

</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import { useLinkStore } from '~/store/link'

// const theme = Cookies.get('theme') || 'light'
definePageMeta({
    layout: 'master-light',
})

export default {
    name: 'Index',
    data() {
        return {
            post: {
                title: '',
                description: '',
                slug: '',
                thumbnail: '',
            }
        }
    },
    computed: {},
    watch: {},
    async mounted() {
        const vm = this
        await vm.getPost()
    },
    methods: {
        async getPost() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                vm.$showLoading()
                vm.post.slug = vm.$route.path.split('/post/').join('')
                if (!vm.post.slug) {
                    throw new Error('The link you entered is not valid')
                }

                await linkStore
                    .getPost({
                        slug: vm.post.slug
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.post = data
                            vm.$hideLoading()
                        } else {
                            vm.$hideLoading()
                            // vm.$error(message)
                            // clearError({ redirect: '/' })

                        }
                    })
                    .catch((error) => {
                        vm.$hideLoading()
                        // clearError({ redirect: '/' })
                        vm.$error(error.message)
                    })
            } catch (e) {
                vm.$hideLoading()
                vm.$error(e.message)
                // clearError({ redirect: '/' })
            }
        },
    },
}
</script>
<style scoped></style>
