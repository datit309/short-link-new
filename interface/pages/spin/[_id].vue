<script lang="ts">
import _ from 'lodash'
import { mapState } from 'pinia'
import { defineComponent } from 'vue'
import { useSpinStore } from '~/store/spin'
import { useAccountStore } from '~/store/account'
definePageMeta({
    layout: 'blank',
})
export default defineComponent({
    name: 'Index',
    computed: {
        ...mapState(useAccountStore, {
            myOwnName: 'account',
            account: (store) => store.account,
        }),
    },
    data() {
        return {
            theWheel: null,
            startWheel: true,
            audio: null,
            audio_bg: null,
            result: '',
            list_item: [],
            list_items_check: [],
            spin_detail: {
                turns: 0,
                turned: 0,
            },
        }
    },
    watch: {
        // audio_bg() {
        //     this.audio_bg.play()
        // },
    },
    mounted() {
        const vm = this
        vm.audio = new Audio('/sound/tick.mp3')
        vm.createWheel()
        vm.getSpinUser()
    },
    methods: {
        async playSoundVue(sound) {
            const vm = this
            if (sound) {
                const audio = new Audio(sound)
                await audio.play()
            }
        },
        async startSpin() {
            const vm = this
            const spinStore = useSpinStore()

            if (vm.startWheel) {
                if (vm.spin_detail.turns <= 0) {
                    vm.$error('You not have enough spin')
                    return
                }
                if (vm.account.detail.username) {
                    vm.spin_detail.turns--
                    spinStore
                        .doSpin({})
                        .then((response) => {
                            const { message, data, success } = response
                            if (success) {
                                const findIndex = _.findIndex(vm.list_items_check, (item) => {
                                    return item.type === data.type
                                })
                                vm.theWheel.animation.stopAngle = vm.theWheel.getRandomForSegment(findIndex + 1)
                                vm.theWheel.startAnimation()
                                vm.startWheel = false
                                vm.result = data
                            }
                        })
                        .catch((error) => {
                            vm.$error(error.message)
                        })
                }
            }
        },
        async getSpinUser() {
            const vm = this
            const spinStore = useSpinStore()
            if (vm.account.detail.username) {
                spinStore
                    .getDetailSpinUser({})
                    .then((response) => {
                        const { message, data, success } = response
                        if (success) {
                            vm.spin_detail = data
                        }
                    })
                    .catch((error) => {
                        vm.$error(error.message)
                    })
            }
        },
        async createWheel() {
            const spinStore = useSpinStore()
            const vm = this
            const profile = useAccountStore()
            // if (vm.account.detail.username) {
                spinStore
                    .getSpin({ _id: vm.$route.params._id })
                    .then((response) => {
                        let { message, data, success } = response
                        if (success) {
                            vm.list_item = _.clone(_.shuffle(data))
                            vm.list_items_check = _.clone(vm.list_item)
                            const segments = _.map(vm.list_item, (item) => {
                                // const fill = Math.floor(Math.random() * 16777215).toString(16)
                                if (item.type == 1) {
                                    return {
                                        fillStyle: '#555555',
                                        text: item.description,
                                        // textFillStyle: '#FFEC86',
                                        textFontSize: 14,
                                    }
                                } else if (item.type == 12) {
                                    return {
                                        fillStyle: '#CC0000',
                                        text: item.description,
                                        // textFillStyle: '#FFEC86',
                                        textFontSize: 14,
                                    }
                                } else {
                                    return {
                                        text: item.description,
                                        textFontSize: 14,
                                    }
                                }
                            })
                            vm.theWheel = new Winwheel({
                                canvasId: 'canvas',
                                innerRadius: 50,
                                textFontSize: 16,
                                textMargin: 0,
                                textFillStyle: '#ff1919',
                                numSegments: segments.length,
                                fillStyle: '#FFF0B2',
                                lineWidth: 4,
                                segments,
                                animation: {
                                    type: 'spinToStop',
                                    duration: 10,
                                    spins: 8,
                                    callbackFinished: (indicatedSegment) => {
                                        if (indicatedSegment.text == 'Good luck') {
                                            const myModalAlternative = new vm.$bootstrap.Modal('#lose')
                                            myModalAlternative.show()
                                            setTimeout(() => {
                                                myModalAlternative.hide()
                                            }, 2000)
                                        } else if (indicatedSegment.text == 'JACKPOT') {
                                            const myModalAlternative = new vm.$bootstrap.Modal('#jackpot')
                                            myModalAlternative.show()
                                            setTimeout(() => {
                                                myModalAlternative.hide()
                                            }, 2000)
                                        } else {
                                            const myModalAlternative = new vm.$bootstrap.Modal('#win')
                                            myModalAlternative.show()
                                            profile.addBalance(vm.result.value, vm.account.detail.user_games[0])
                                            setTimeout(() => {
                                                myModalAlternative.hide()
                                            }, 2000)
                                        }
                                        this.resetWheel()
                                    },
                                    callbackSound: () => {
                                        vm.audio.pause()
                                        vm.audio.currentTime = 0
                                        vm.audio.play()
                                    },
                                    soundTrigger: 'pin',
                                },
                                // Turn pins on.
                                pins: {
                                    number: 12,
                                    outerRadius: 0,
                                },
                            })
                        } else {
                            vm.$error(message)
                        }
                    })
                    .catch((error) => {
                        vm.$error(error.message)
                    })
            // }
        },
        async resetWheel() {
            const vm = this
            vm.theWheel.stopAnimation(false) // Stop the animation, false as param so does not call callback function.
            vm.theWheel.rotationAngle = 0 // Re-set the wheel angle to 0 degrees.
            vm.theWheel.draw() // Call draw to render changes to the wheel.
            vm.startWheel = true // Reset to false to power buttons and spin can be clicked again.
        },
    },
})
</script>

<template lang="pug">
section#spin-wheel
    .spin-wheel
        .wheel.pb-3.pb-lg-4
            // Modal
            #win.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
                .modal-dialog.modal-lg.modal-dialog-centered
                    .modal-content.bg-transparent
                        .modal-body.position-relative.wow.zoomIn(data-wow-duration="1s")
                            img.w-100(src='@/assets/images/result-bg.png')
                            .position-absolute.top-0.end-0.w-100.h-100
                                .d-flex.justify-content-center.align-items-center.w-100.h-100
                                    .row.mx-0
                                        .col-8.col-lg-8.mx-auto.pt-5
                                            img.w-100(src='@/assets/images/win.png')
                                        h1.text-center.text-warning
                                            .d-flex.justify-content-center
                                                .info-box.p-2.rounded-pill.px-4(style='font-size:37px') {{result.value > 0 ? $filters.money(result.value) :result.description}}
            #more-turn.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
                .modal-dialog.modal-lg.modal-dialog-centered
                    .modal-content.bg-transparent
                        .modal-body.position-relative.wow.zoomIn(data-wow-duration="1s")
                            img.w-100(src='@/assets/images/result-bg.png')
                            .position-absolute.top-0.end-0.w-100.h-100
                                .d-flex.justify-content-center.align-items-center.w-100.h-100
                                    .row.mx-0
                                        .col-8.col-lg-8.mx-auto.py-5
                                            img.w-100(src='@/assets/images/one-more.png')
            #lose.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
                .modal-dialog.modal-lg.modal-dialog-centered
                    .modal-content.bg-transparent
                        .modal-body.position-relative.wow.zoomIn(data-wow-duration="1s")
                            img.w-100(src='@/assets/images/result-bg.png')
                            .position-absolute.top-0.end-0.w-100.h-100
                                .d-flex.justify-content-center.align-items-center.w-100.h-100
                                    .row.mx-0
                                        .col-6.col-lg-8.mx-auto.py-5
                                            img.w-100(src='@/assets/images/lose.png')
            .d-flex.align-items-center.justify-content-center.h-100
                .bg-wheel.py-5
                    .the_wheel.animate__animated.animate__rotateIn
                        .position-absolute.power_controls.top-50.start-50.translate-middle(@click='startSpin')
                            img#spin_button.animate__animated.animate__heartBeat(src='@/assets/images/spin.png')
                        .position-absolute.power_controls.top-0.start-50.translate-middle-x
                            img.trickger(src='@/assets/images/trickger.png')
                        canvas#canvas(width="310" height="310" data-responsiveMinWidth="180" data-responsiveScaleHeight="true")
                            p.text-center.text-light Sorry, your browser doesn&apos;t support canvas. Please try another.
                    .row.mx-0.mt-3
                        .col-lg-8.mx-auto
                            ul.list-unstyled
                                li.d-grid.mb-3
                                    button.btn.btn-spin.px-4.py-2.text-uppercase.fw-bold Spin and win
                                li.mb-3
                                    .info-box.text-center.py-2.text-uppercase.fw-bold YOU HAVE
                                        span.text-warning.mx-2(v-text="spin_detail.turns")
                                        | SPIN
                                //li
                                    nuxt-link(href='/spin/history')
                                        .info-box.text-center.py-2.text-uppercase.fw-bold HISTORY
                                li.mb-3
                                    a(href='#History-spin-modal' data-bs-toggle="modal")
                                        .info-box.text-center.py-2.text-uppercase.fw-bold HISTORY
                                li
                                    nuxt-link(href='/trading')
                                        .info-box.text-center.py-2.text-uppercase.fw-bold HOME

</template>

<style scoped></style>
