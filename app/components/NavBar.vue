<template>
    <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
            <NuxtLink to="/" class="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                    <path
                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"
                        fill="#FFFFFF" />
                </svg>
                <span class="self-center text-2xl font-bold whitespace-nowrap text-white">LC Development</span>
            </NuxtLink>
            <div class="w-auto" id="navbar-default">
                <div class="font-medium flex p-0 rounded-lg flex-row space-x-8 mt-0 border-0 border-gray-700">
                    <NuxtLink to="/" class="py-2 px-3 hover:text-blue-500" active-class="text-blue-500">
                        Homepage</NuxtLink>
                    <NuxtLink to="projects" class="py-2 px-3 hover:text-blue-500" active-class="text-blue-500">
                        Projects</NuxtLink>
                    <NuxtLink to="skills" class="py-2 px-3 hover:text-blue-500" active-class="text-blue-500">
                        Skills</NuxtLink>
                    <NuxtLink to="team" class="py-2 px-3 hover:text-blue-500" active-class="text-blue-500">
                        About Us</NuxtLink>
                    <NuxtLink to="contact" class="py-2 px-3 hover:text-blue-500" active-class="text-blue-500">
                        Contact</NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>