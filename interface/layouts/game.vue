<template lang="pug">
partials-header
slot
partials-footer(v-if="current_route_name !== 'game'" )
button#backtop.hvr-float(@click='backToTop' title='Go to top')
    i.fas.fa-chevron-up.fa-2x
</template>

<script lang="ts">
export default {
    computed: {
        current_route_name: {
            get() {
                return useRoute().name
            },
        },
    },
    watch: {
        $route(to, from) {
            this.current_route_name = to.name
            this.$forceUpdate()
        },
    },
    mounted() {
        // import('~/assets/js/main')
    },
    methods: {
        backToTop() {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        },
    },
}
</script>

<style scoped></style>
