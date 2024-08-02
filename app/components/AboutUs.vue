<script setup lang="ts">
import { type TeamMember } from '~/types/TeamMember'
import { formatDate, urlFor } from '~/utils'

const query = groq`*[ _type == "teamMember" ] | order(_createdAt desc)`
const { data: teamMembers } = await useSanityQuery<TeamMember[]>(query)

console.log(teamMembers)

/*
const team: TeamMember[] = [
    {
        name: "Lazyllama",
        role: "Frontend Development & Project Lead",
        description: "Hello! I'm the project lead and frontend developer for LC Scripts. I make the website and the scripts look pretty and make sure bugs are fixed and features are added.",
        links: {
            discord: {
                link: "https://discord.com/users/754965470888722484",
                icon: "discord"
            },
            website: {
                link: "https://lazyllama.xyz",
                icon: "website"
            },
            github: {
                link: "https://github.com/lazylllama",
                icon: "github",
            }
        },
    },
    {
        name: "Cyber",
        role: "Backend Development & Lead Development",
        description: "Heya! I'm Cyber, I'm a developer for LC Scripts. I work on the backend and the scripts and plan most of the features and fix alot of bugs and issues.",
        links: {
            discord: {
                link: "https://discord.com/users/679345452478496809",
                icon: "discord"
            },
            website: {
                link: "https://lcdevelopment.net",
                icon: "website",
            },
            github: {
                link: "https://github.com/cyberdev-tech",
                icon: "github",
            }
        },
    },

];*/
</script>

<template>
    <!-- Team -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-48 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tighttext-white">The Team</h2>
            <p class="mt-1 text-neutral-400">The ones that make the magic happen.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="member in teamMembers">
                <div
                    class="flex flex-col rounded-xl p-4 md:p-6 border bg-base-300 border-base-200 shadow-xl transition-all duration-500 shadow-black/60 hover:shadow-base-300">
                    <div class="flex items-center gap-x-4">
                        <img class="rounded-full size-20" :src="urlFor(member.logotype).url()"
                            alt="Team Member Logo">
                        <div class="grow">
                            <h3 class="font-medium text-neutral-200">
                                {{ member.name }}
                            </h3>
                            <p class="text-xs uppercase text-neutral-500">
                                {{ member.jobTitle }}
                            </p>
                        </div>
                    </div>

                    <p class="mt-3 text-neutral-500">
                        {{ member.description }}
                    </p>

                    <!-- Social Brands -->

                    <div class="mt-3 space-x-1">
                        <a v-if="member.discordLink"
                            class="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none text-neutral-400 border-neutral-700 hover:bg-neutral-700"
                            :href="member.discordLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                class="flex-shrink-0 size-3.5" viewBox="0 0 640 512">
                                <path class="fill-white"
                                    d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                            </svg>
                        </a>
                        <a v-if="member.githubLink"
                            class="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none text-neutral-400 border-neutral-700 hover:bg-neutral-700"
                            :href="member.githubLink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                class="flex-shrink-0 size-3.5" viewBox="0 0 496 512">
                                <path class="fill-white"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                        <a v-if="member.websiteLink"
                            class="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none text-neutral-400 border-neutral-700 hover:bg-neutral-700"
                            :href="member.websiteLink">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="flex-shrink-0 size-3.5" viewBox="0 0 24 24" fill="currentColor" width="16">
                                <path class="fill-white"
                                    d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                            </svg>
                        </a>
                    </div>
                    <!-- End Social Brands -->
                </div>
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
</template>
