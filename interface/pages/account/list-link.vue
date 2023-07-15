<template lang="pug">
section
    .container
        .row.mx-0.mt-4
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' )
                                    .text-uppercase.fs-3 {{$t("HIDEURL.TOP - HISTORY")}}
                    .card-body.p-0
                        .tab-content
                            .record-scroll.table-responsive
                                table.table.table-striped.mb-0
                                    thead
                                        tr
                                            //th(scope='col') {{$t("ID")}}
                                            th(scope='col') {{$t("Origin link")}}
                                            th(scope='col') {{$t("Short link")}}
                                            th(scope='col') {{$t("Password")}}
                                            th(scope='col') {{$t("Counter")}}
                                            th.time-block(scope='col') {{$t("Date Expires")}}
                                            th.time-block(scope='col') {{$t("Date Created")}}
                                            th(scope='col') {{$t("Actions")}}
                                    tbody
                                        tr(v-for="item in list_link.docs")
                                            //td {{item._id}}
                                            td.text-truncate(style="max-width: 150px;" @click="copyText(item.origin_link)")
                                                span
                                                    i.fas.fa-link
                                                //a(:href="item.origin_link" target="_blank")
                                                span {{item.origin_link}}
                                            td.text-truncate(@click="copyText(`${item.domain}/${item.short_link}`)")
                                                span
                                                    i.fas.fa-link
                                                //a(:href="`${item.domain}/${item.short_link}`" target="_blank")
                                                span {{`${item.domain}/${item.short_link}`}}
                                            td {{item.password}}
                                            td {{item.counter}}
                                            td
                                                .time-block {{item.date_expires}}
                                            td
                                                .time-block {{ $filters.convertDate(item.createdAt, 'YYYY-MM-DD HH:mm:ss')}}
                                            td.d-flex
                                                button.btn.btn-sub.me-2
                                                    i.fas.fa-pen
                                                button.btn.btn-danger
                                                    i.fas.fa-trash
                            .btn-toolbar.pb-3.mt-2(v-if="list_link.docs.length > 0" role='toolbar' aria-label='Toolbar with button groups')
                                .btn-group.mx-auto(role='group' aria-label='First group')
                                    button.btn.btn-sub(type='button' @click="list_link.page--" v-if="list_link.page > 1 && list_link.page <= list_link.totalPages")
                                        i.fas.fa-caret-left
                                    button.btn.btn-dark(type='button') {{list_link.page}}
                                    button.btn.btn-sub(type='button' @click="list_link.page++" v-if="list_link.page >= 1 && list_link.page < list_link.totalPages")
                                        i.fas.fa-caret-right
</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import Cookies from 'js-cookie'
import { useLinkStore } from '~/store/link'
import { useAccountStore } from '~/store/account'

definePageMeta({
    layout: 'master-light',
    // middleware: 'auth'
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
            },
            get_short_link: {
                short_link: '',
            },
            new_link: {
                short_link: '',
            },
            list_link: {
                docs: [],
                page: 1,
                totalPages: 1,
                limit: 10,
            },
        }
    },
    watch: {
        'list_link.page'() {
            const vm = this
            vm.getListShortLink()
        }
    },
    async mounted() {
        const vm = this
        await vm.getListShortLink()
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
        async getListShortLink() {
            const vm = this
            const linkStore = useLinkStore()
            try {
                await linkStore
                    .getListShortLinkByUser({
                        page: vm.list_link.page,
                        limit: vm.list_link.limit,
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.list_link.docs = data.docs
                            vm.list_link.totalPages = data.totalPages
                            // vm.$success(message)
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
