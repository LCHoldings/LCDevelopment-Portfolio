<script lang="js" setup>
import { redirectToEmail } from '~/utils/index'
import confetti from 'canvas-confetti'

var confettiCount = 0
var shapes = ['circle', 'circle', 'circle', 'square', 'square', 'star']

function confettiWithCursor() {
    const { clientX, clientY } = event

    if (confettiCount == 30) {
        window.alert("You really like confetti huh? Recommendation: Don't overdo it 😂🎉")
    } else if (confettiCount > 30) {
        confetti({
            particleCount: 1000,
            spread: 180,
            origin: { x: 0.5, y: -0.3 },
            angle: 270,
            shapes
        })
    } else {
        confetti({
            particleCount: 100,
            spread: 70,
            shapes,
            origin: { x: clientX / window.innerWidth, y: clientY / window.innerHeight },
        })
    }
    confettiCount++
}
</script>

<template>
    <div class="flex justify-center -mt-24">
        <div class="max-w-screen-xl w-screen mx-auto absolute">
            <footer class="rounded-lg shadow m-4 bg-gray-900/40">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm sm:text-center text-gray-400" @click="confettiWithCursor()">
                        © {{ new Date().getFullYear() }}
                        LC Development. All Rights Reserved.</span>
                    <div
                        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
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