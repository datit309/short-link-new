<template lang="pug">
section
    .container.trade-game
        .row.mx-0.mt-4.trade
            .score-table.wow.fadeIn(data-wow-delay='0.2s' data-wow-duration="0.7s")
                .card.mb-4.h-100
                    .card-header
                        nav
                            .nav.nav-pills(role='tablist')
                                button.nav-link.active(data-bs-toggle='tab' data-bs-target='#bets' type='button' role='tab'  )
                                    .fs-3.text-uppercase {{$t("HideURL.TOP - Free URL Shortener and Link Hider")}}

                    .card-body.p-0
                        .tab-content
                            .row.mx-0.justify-content-center
                               h1.text-danger.text-center.my-5(style="font-size: 150px") ONLY FREE
</template>
<script>
import { mapState } from 'pinia'
import { useAccountStore } from '~/store/account'
// const theme = Cookies.get('theme') || 'light'
definePageMeta({
    layout: 'master-light',
})
export default {
    name: 'Pricing',
    computed: {
        ...mapState(useAccountStore, {
            myOwnName: 'account',
            account: (store) => store.account,
        }),
    },

}
</script>
<style scoped></style>
