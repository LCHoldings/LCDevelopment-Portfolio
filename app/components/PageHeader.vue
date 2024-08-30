<script lang="ts" setup>
defineProps<{ title: string, undertitle: string }>()
</script>

<template>
    <div class="relative pointer-events-none py-12 mt-24 lg:py-12 mx-auto flex flex-col justify-center items-center max-w-xl text-center mb-16">
        <h2 class="text-2xl font-bold md:text-6xl md:leading-tight text-white tracking-tight">{{ title }}</h2>
        <p class="mt-6 text-lg leading-8 text-white/60">{{ undertitle }}</p>
    </div>
</template>
