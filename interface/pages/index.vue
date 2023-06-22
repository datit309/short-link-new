<template lang="pug">
section
    .container
        .row.mx-0.my-5
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab' aria-controls='nav-home' aria-selected='true')
                                    h3.text-uppercase {{$t("Rút gọn link miễn phí. Dữ liệu lưu giữ vĩnh viễn")}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        label.form-label.mb-0.px-0 {{$t("Dán link cần rút gọn của bạn")}}
                                        .input-group.mb-2.bg-block.px-0.input-group-lg
                                            span.input-group-text
                                                i.fab.fa-telegram-plane
                                            input.form-control.py-3(:readonly="!!new_link.short_link" v-model="short_link.origin" type='text' aria-describedby='basic-addon3' placeholder="Dán link cần rút gọn của bạn")
                                            button.btn.btn-sub.py-3(v-if="!new_link.short_link" @click="createShortLink") {{$t('Rút gọn link')}}

                                        p.my-3
                                            span.me-1
                                                i.fas.fa-exclamation-triangle
                                            span.me-1 Bằng việc bấm vào nút
                                            span.fw-bold.me-1 RÚT GỌN LINK,
                                            span.me-1 đồng nghĩa với việc bạn đồng ý với
                                            span
                                                a(href="javascript:void(0)") Điều khoản sử dụng
                                        template(v-if="new_link.short_link" )
                                            label.form-label.mb-0.px-0 {{$t("Link rút gọn của bạn")}}
                                            .input-group.mb-2.bg-block.px-0
                                                span.input-group-text
                                                    i.fas.fa-link
                                                input.form-control(:value="new_link.short_link" type='text' aria-describedby='basic-addon3' placeholder="Link rút gọn của bạn" readonly)

                                                button.btn.btn-sub.py-2(@click="copyText(new_link.short_link)") {{$t('Sao chép')}}
                                            .row.mt-3.justify-content-center
                                                .col-2
                                                    button.btn.btn-sub.py-3.w-100(@click="new_link.short_link = ''") {{$t('Tạo link khác')}}

                                        .row.my-3(v-if="!new_link.short_link" )
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Link tùy chỉnh")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    //span.input-group-text
                                                        i.fas.fa-link
                                                    span.input-group-text https://domain.com/
                                                    input.form-control(v-model="short_link.custom" type='text' aria-describedby='basic-addon3' placeholder="custom-link")
                                                p * Mặc định, hệ thống sẽ tạo link ngẫu nhiên. Bạn có thể đặt link theo tùy chọn.
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Thời gian hiệu lực")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.far.fa-calendar-alt
                                                    input.form-control(name="date_expires" type='text' aria-describedby='basic-addon3' placeholder="Thời gian hiệu lực")
                                                p * Sau 00:00 phút của ngày được chọn, link sẽ không còn hiệu lực. Để trống nếu giữ vĩnh viễn link.
                                            .col-12.col-lg-4
                                                label.form-label.mb-0.px-0 {{$t("Mật khẩu bảo vệ")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.fas.fa-lock
                                                    input.form-control(v-model="short_link.password" type='text' aria-describedby='basic-addon3' placeholder="Mật khẩu bảo vệ")
                                                p * Đặt mật khẩu để bảo vệ link rút gọn. Để trống nếu bạn không muốn đặt mật khẩu.

                                        //button.btn.btn-deposit() {{$t("Update Profile")}}
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
            },
            get_short_link: {
                short_link: '',
            },
            new_link: {
                short_link: '',
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
                    throw new Error('Link bạn vừa nhập không hợp lệ. Hãy nhập 1 link hợp lệ bắt đầu bằng http:// hoặc https://')
                }
                await linkStore
                    .createShortLink({
                        user_id: vm.account.detail.user_id,
                        domain: vm.short_link.domain,
                        origin_link: vm.short_link.origin,
                        short_link: vm.short_link.custom,
                        date_expires: vm.short_link.date_expires,
                        password: vm.short_link.password,
                    })
                    .then((response) => {
                        const { data, message, success } = response
                        if (success) {
                            vm.new_link.short_link = `${data.domain}/${data.short_link}`
                            vm.$success(message)
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
