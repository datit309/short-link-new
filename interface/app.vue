<template>
    <ClientOnly>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-577JB7T" height="0" width="0" style="display: none; visibility: hidden"></iframe>
        </noscript>
        <NuxtLayout :name="layout">
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
        <template #fallback>
            <NuxtLoading></NuxtLoading>
        </template>
    </ClientOnly>
</template>

<script setup>
import Cookies from "js-cookie";
const theme = Cookies.get('theme') || 'light'
const layout = theme === 'light' ? 'master-light' : 'master'
</script>
