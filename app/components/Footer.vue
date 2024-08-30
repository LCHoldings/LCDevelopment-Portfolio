<script lang="ts" setup>
import { redirectToEmail } from '~/utils/index'
</script>

<template>
    <div class="flex justify-center -mt-24">
        <div class="max-w-screen-xl w-screen mx-auto absolute">
            <footer class="rounded-lg shadow m-4 bg-gray-900/40">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {{ new Date().getFullYear() }}
                        LC Development. All Rights Reserved.</span>
                    <div
                        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <NuxtLink href="/" class="hover:underline me-4 md:me-6">Homepage</NuxtLink>
                        <!-- TODO: Create branding page! -->
                        <!-- <NuxtLink href="#" class="hover:underline me-4 md:me-6">Branding</NuxtLink> -->
                        <button @click="redirectToEmail()" class="hover:underline">Contact</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>