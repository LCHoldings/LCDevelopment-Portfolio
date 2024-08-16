<template>
    <div class="max-w-screen-xl mx-auto">
        <footer class="rounded-lg shadow m-4 bg-gray-900">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ new Date().getFullYear() }}
                    LC
                    Development. All Rights Reserved.</span>
                <div
                    class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <NuxtLink href="/" class="hover:underline me-4 md:me-6">Homepage</NuxtLink>
                    <NuxtLink href="#" class="hover:underline me-4 md:me-6">Branding</NuxtLink>
                    <NuxtLink href="#" class="hover:underline">Contact</NuxtLink>
                </div>
            </div>
        </footer>
    </div>
</template>