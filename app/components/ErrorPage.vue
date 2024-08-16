<script lang="ts" setup>
defineProps<{ statusCode: number }>()

function goBack() {
    history.back()
}
</script>

<template>
    <div
        class="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
    </div>
    <div class="py-[16vh]">
        <div class="relative isolate pt-14 px-4 max-w-screen-xl mx-auto h-[53vh]">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">{{ statusCode }}
                    </h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-400" v-if="statusCode == 404">
                        Sorry, we can't find that page. Lets rewind one page back.
                    </p>
                    <p class="mb-4 text-lg font-light text-gray-400" v-else>
                        Sorry, something went wrong. Lets rewind one page back.
                    </p>
                    <Button
                        class="inline-flex text-white focus:ring-4 font-medium rounded-lg text-sm text-center my-4" @click="goBack">
                        Go back
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>