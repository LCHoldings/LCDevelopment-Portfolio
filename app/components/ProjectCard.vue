<script lang="ts" setup>
import type { Post } from '~/types/Post'
import { formatDate, urlFor } from '~/utils'

defineProps<{ post: Post }>()
</script>

<template>
    <div class="max-w-sm p-4 border rounded-lg shadow bg-gray-800 border-gray-700">
        <img class="rounded-lg" :src="urlFor(post.mainImage).width(500).height(300).url()" alt="">
        <h1 class="mt-3 text-2xl font-bold" >{{ post.title }}</h1>
        <p class="text-white/70">{{ post.excerpt }}</p>
    </div>
</template>