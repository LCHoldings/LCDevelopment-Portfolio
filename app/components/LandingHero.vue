<script setup lang="js">
import { Button } from '@/components/ui/button'
/* import { TresCanvas, useLoader } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { TextureLoader } from 'three'

const texture = useLoader(TextureLoader, '/LightningTexture.png') */

function redirectToEmail() {
    const subject = "Hello from the website!";
    const email = "mailto:llama@lcholdings.net?subject=" + encodeURIComponent(subject);
    window.location.href = email;
}
</script>

<template>
    <div class="relative isolate pt-14 px-4 max-w-screen-xl mx-auto overflow-y-clip h-[100vh] pointer-events-none">
        <!-- Thanks to Tailwind CSS for the gradient -->
        <div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl -top-60 mt-8 pointer-events-none"
            aria-hidden="true">
            <div class="relative left-[calc(20%-9rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr animate-gradient from-blue-600 to-violet-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[62.1875rem] bg-300%"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <!-- End Gradient -->
        <div class="py-[30vh]">
            <div class="max-w-2xl flex flex-row">
                <div class="text-left">
                    <h1
                        class="text-6xl font-bold tracking-tight text-white pointer-events-none font-manrope leading-snug">
                        We turn your 💭 into <span
                            class="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text animate-gradient">reality
                            and beyond!</span></h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300 pointer-events-none">We are passionate about turning
                        your
                        ideas and dreams into reality.
                        With our expertise, we bring your vision to life and create innovative solutions
                        tailored to your needs. Let us make your dreams a reality!</p>
                    <div class="mt-10 flex gap-x-6 pointer-events-auto">
                        <Button class="transition-all text-white hover:text-white/60" @click="redirectToEmail()">Get in
                            touch!</Button>
                        <span class="transition-all text-white hover:text-white/60 my-auto font-bold">
                            <NuxtLink to="projects">Previous work →</NuxtLink>
                        </span>
                    </div>
                </div>
                <!-- 
                    Right part of hero 
                    TODO: Something useful of this 
                -->
                <!-- <div class="rounded-lg overflow-hidden hidden sm:absolute right-0 top-55% h-[450px] w-[350px]">
                    <div class="h-[450px] w-[350px]">
                        <TresCanvas shadows alpha>
                            <TresPerspectiveCamera :position="[20, 0, 45]" :look-at="[0, 0, 0]" />
                            <Suspense>
                                <GLTFModel path="/LightningBolt.gltf" draco />
                            </Suspense>
                            <TresMeshStandardMaterial :map="texture" />
                            <TresDirectionalLight :position="[3, 3, 3]" :intensity="2" cast-shadow />
                        </TresCanvas>
                    </div>
                </div>-->
            </div>
        </div>
        <!-- Thanks to Tailwind CSS for the gradient -->
        <div class="absolute inset-x-0 top-[calc(80%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)] pointer-events-none"
            aria-hidden="true">
            <div class="relative left-[calc(30%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-violet-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <!-- End Gradient -->
    </div>
</template>

<style>
/* TODO: Remove or keep this */
/* .div-3d {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

#canvas {
    height: 100%;
    width: 100%;
} */
</style>