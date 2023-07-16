<template lang="pug">
#comingsoon.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
    .modal-dialog
        .modal-content
            .modal-body.p-4.py-lg-5.position-relative
                .position-absolute.top-0.end-0
                    button.btn.border-0.text-title(data-bs-dismiss="modal")
                        i.fas.fa-times
                .fs-1.text-title.text-uppercase.fw-bold.text-center {{$t("Coming soon")}}
                .row.py-3.justify-content-center.d-flex
                    .col-12.mb-3.text-center
                        a.hvr-float-shadow
                            nuxt-img.w-100(src='@/assets/images/logo.png')

</template>

<script>
export default {
    name: 'ComingSoon',
}
</script>

<style scoped></style>
