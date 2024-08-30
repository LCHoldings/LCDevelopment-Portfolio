<script lang="ts" setup>
import type { Post } from '~/types/Post'
import { formatDate, urlFor } from '~/utils'

defineProps<{ post: Post }>()
</script>

<template>
    <div
        class="group flex flex-col h-full border shadow-xl rounded-xl bg-slate-900/50 border-neutral-900 overflow-hidden">
        <img class="h-44 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl"
            :src="urlFor(post.mainImage).width(372).height(176).url()" alt="">

        <div class="p-4 mb-3 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-blue-500">
                {{ post.type }}
            </span>
            <h3 class="text-xl font-semibold hover:text-white">
                {{ post.title }}
            </h3>
            <p class="mt-3 text-neutral-500 h-8">
                {{ post?.excerpt?.length > 70 ? post?.excerpt?.slice(0, 70) + '...' : post.excerpt ?? '' }}
            </p>
        </div>
        <div class="mt-auto flex border-t divide-x border-neutral-700/30 divide-neutral-700/30">
            <NuxtLink
                class="w-full py-3 px-4 inline-flex transition-all justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-slate-900/30 border-neutral-700/30 text-white hover:bg-slate-800/30 focus:bg-slate-800/30"
                :to="'/project/' + post.slug.current">
                Read More
            </NuxtLink>
            <a v-if="post.otherbutton"
                class="w-full py-3 px-4 inline-flex transition-all duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-slate-900/30 border-neutral-700/30 text-white hover:bg-slate-800/30 focus:bg-slate-800/30"
                :href="post.otherbuttonlink">
                {{ post.otherbuttontext }}
            </a>
        </div>
    </div>
</template>