<script lang="ts" setup>
defineProps<{ title: string }>()
</script>


<template>
    <div class="py-12 lg:py-14 mx-auto flex flex-col justify-center items-center max-w-xl text-center mb-16">
        <h2 class="text-2xl font-bold md:text-6xl md:leading-tight text-white tracking-tight">{{ title }}</h2>
        <p class="mt-6 text-lg leading-8 text-white/60">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
</template>
