<template>
    <ClientOnly>
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
<!--        <template #fallback>-->
<!--            <NuxtLoading></NuxtLoading>-->
<!--        </template>-->
    </ClientOnly>
</template>

<script setup>
import '@/assets/js/gganalyst.js'
</script>
