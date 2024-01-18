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
                                .col-md-3.col-sm-12.mb-4(v-for="item in list_post.docs")
                                    .px-2.px-lg-2.pt-2
                                        a.text-dark(:href="`/post/${item.slug}`")
                                            .row
                                                .col-12.mx-auto.why-img.position-relative
                                                    img.w-25.rotate-hvr.position-absolute.top-0.start-0.ms-3.mt-1(src='@/assets/images/logo.png')
                                                    img.icon.rounded(:src='item.thumbnail')
                                            .p-2
                                                .text-start.mb-0.fs-5 {{item.title}}
                                                hr
                                                .text-start.mb-0.fs-6(v-html="item.description.substring(0, 150) + '...'" )
                            .btn-toolbar.pb-3.mt-2(v-if="list_post.docs.length > 0" role='toolbar' aria-label='Toolbar with button groups')
                                .btn-group.mx-auto(role='group' aria-label='First group')
                                    button.btn.btn-sub(type='button' @click="list_post.page--" v-if="list_post.page > 1 && list_post.page <= list_post.totalPages")
                                        i.fas.fa-caret-left
                                    button.btn.btn-dark(type='button') {{list_post.page}}
                                    button.btn.btn-sub(type='button' @click="list_post.page++" v-if="list_post.page >= 1 && list_post.page < list_post.totalPages")
                                        i.fas.fa-caret-right
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
            list_post: {
                docs: [],
                page: 1,
                limit: 12,
                totalPages: 1
            }
        }
    },
    watch: {
        'list_post.page'() {
            const vm = this
            vm.getListPost()
        }
    },
    async mounted() {
        const vm = this
        await vm.getListPost()
    },
    methods: {
        async getListPost() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                await linkStore
                .getListPost({page: vm.list_post.page, limit: vm.list_post.limit})
                .then((response) => {
                    const { data, message, success } = response
                    if (success) {
                        vm.list_post.docs = data.docs
                        vm.list_post.totalPages = data.totalPages
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
