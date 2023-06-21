<template>
    <div v-if="data.loading" class="loading-page">
        <div>
            <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useNuxtApp } from 'nuxt/app'

const data = reactive({ loading: true })

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    data.loading = true
})
nuxtApp.hook('page:finish', () => {
    data.loading = false
})
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 999999;
}

.spinner {
    margin: 10px auto 0;
    width: 100px;
    text-align: center;
}

.spinner > div {
    width: 18px;
    height: 18px;
    background-color: #00ffff;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
