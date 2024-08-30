<script setup lang="ts">
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <div> <!-- Root Node (Important) -->
    <div
      class="pointer-events-none bg-transparent absolute inset-0 h-full w-full bg-[radial-gradient(#a3a0a012_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
    </div>
    <div class="relative isolate">
      <div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl -top-80 mt-8 pointer-events-none"
        aria-hidden="true">
        <div
          class="relative left-[calc(40%-11rem)] aspect-[1155/678] w-[39.125rem] -translate-x-1/2 bg-gradient-to-tr animate-gradient from-blue-600 to-violet-600 opacity-30 sm:left-[calc(50%-26rem)] sm:w-[72.1875rem] bg-300%"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
    </div>

    <div>
      <PageHeader title="Projects"
        undertitle="Curious about what we've been up to? Check out some of our standout projects. You can read about what we've done and see for yourself the work we're proud of." />

      <ProjectsGrid />
    </div>
  </div>
</template>
