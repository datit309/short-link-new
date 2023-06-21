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
                                    h3 {{$t("Rút gọn link miễn phí. Dữ liệu lưu giữ vĩnh viễn")}}
                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                                .col-lg-12.mb-4
                                    .bg-box.p-2.p-lg-3.rounded
                                        label.form-label.mb-0.px-0 {{$t("Dán link cần rút gọn của bạn")}}
                                        .input-group.mb-2.bg-block.px-0.input-group-lg
                                            span.input-group-text
                                                i.fab.fa-telegram-plane
                                            input.form-control(type='text' aria-describedby='basic-addon3' placeholder="Dán link cần rút gọn của bạn")

                                            button.btn.btn-sub.py-3() {{$t('Rút gọn link')}}
                                        .row.my-3
                                            .col
                                                label.form-label.mb-0.px-0 {{$t("Link tùy chỉnh")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    //span.input-group-text
                                                        i.fas.fa-link
                                                    span.input-group-text https://domain.com/
                                                    input.form-control(type='text' aria-describedby='basic-addon3' placeholder="custom-link")
                                                p * Mặc định, hệ thống sẽ tạo link ngẫu nhiên. Bạn có thể đặt link theo tùy chọn.
                                            .col
                                                label.form-label.mb-0.px-0 {{$t("Thời gian hiệu lực")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.far.fa-calendar-alt
                                                    input.form-control(name="date_expires" type='text' aria-describedby='basic-addon3' placeholder="Thời gian hiệu lực")
                                                p * Sau 00:00 phút của ngày được chọn, link sẽ không còn hiệu lực. Để trống nếu giữ vĩnh viễn link.
                                            .col
                                                label.form-label.mb-0.px-0 {{$t("Mật khẩu bảo vệ")}}
                                                .input-group.mb-2.bg-block.px-0
                                                    span.input-group-text
                                                        i.fas.fa-lock
                                                    input.form-control(type='text' aria-describedby='basic-addon3' placeholder="Mật khẩu bảo vệ")
                                                p * Đặt mật khẩu để bảo vệ link rút gọn. Để trống nếu bạn không muốn đặt mật khẩu.

                                        //button.btn.btn-deposit() {{$t("Update Profile")}}
</template>
<script>
import { mapState } from 'pinia'
import _ from 'lodash'
import { profileStore } from '~/store/profile'
import { kaStore } from '~/store/ka'
import Cookies from "js-cookie";

// const theme = Cookies.get('theme') || 'light'
// definePageMeta({
//     layout: theme !== 'light' ? 'master' : 'master-light',
// })
export default {
    name: 'Index',
    computed: {
        ...mapState(profileStore, _.keys(profileStore().$state)),
    },
    data() {
        return {
            short_link: {
                origin: '',
                custom: '',
                date_expires: null,
                password: null,
            }
        }
    },
    watch: {},
    async mounted() {
        const vm = this
        const modal = new vm.$bootstrap.Modal('#notice', {
            keyboard: false,
            backdrop: 'static',
        })

        $(function() {
            $('input[name="date_expires"]').daterangepicker({
                opens: 'left',
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'YYYY/MM/DD'
                },
                autoApply: true
            }, function(start, end, label) {
                vm.short_link.date_expires = start.format('YYYY-MM-DD')
            });
        });
    },
    methods: {
        splitUsername(username) {
            if (username === null || username.length === 0) {
                return '******'
            }
            const strTemp = ''
            return strTemp.concat(username.slice(0, 3), '*****', username.slice(-3))
        },
    },
}
</script>
<style scoped></style>
