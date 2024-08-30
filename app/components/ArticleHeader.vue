<script lang="ts" setup>
import { type TeamMember } from '~/types/TeamMember';
import { urlFor } from '~/utils'

const props = defineProps<{ title: string, date: string, type: string, author: string; }>()

function formatDate(date) {
    var newDate = new Date(date);
    return newDate.toDateString();
}

const query = groq`*[ _type == "teamMember" && name == $name][0]`
const { data: teamMember } = await useSanityQuery<TeamMember>(query2, {
    name: props.author,
})
</script>


<template>
    <div
        class="relative pointer-events-none py-12 mt-36 lg:py-12 mx-auto flex flex-col justify-left items-left max-w-screen-xl p-4 text-left">
        <div class="flex flex-row items-center">
            <h2 class="text-2xl font-bold md:text-6xl md:leading-tight text-white tracking-tight">{{ props.title }}</h2>
            <span v-if="type"
                class="inline-flex items-center ml-6 gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium  bg-blue-600/40 text-blue-200">
                <span class="size-1.5 inline-block rounded-full bg-blue-500"></span>
                {{ props.type }}
            </span>
        </div>
        <div class="flex flex-row items-center gap-3 mt-3">
            <p class="text-xl leading-8 text-white/60">{{ formatDate(props.date) }}</p>
            <p class="text-white/50">•</p>
            <div
                class="inline-flex flex-nowrap items-center  border ml-1 rounded-full p-1.5 pe-3 bg-slate-900/50 border-neutral-800">
                <img class="me-1.5 inline-block size-6 rounded-full"
                    :src="urlFor(teamMember.logotype).width(24).height(24).url()" alt="Avatar">
                <div class="whitespace-nowrap text-sm font-medium text-white">
                    {{ teamMember.name }}
                </div>
            </div>
        </div>
    </div>
</template>
