<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
    <div class="max-w-[85rem] py-10 lg:py-14 mx-auto flex justify-center items-center">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white">{{ title }}</h2>
    </div>
</template>