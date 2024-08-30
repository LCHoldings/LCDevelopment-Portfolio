<script setup lang="ts">
import { type Post } from '~/types/Post'
import { PortableText } from '@portabletext/vue'

const route = useRoute()

const query1 = groq`*[ _type == "post" && slug.current == $slug][0]`
const { data: post } = await useSanityQuery<Post>(query1, {
  slug: route.params.slug,
})
</script>

<template>
  <div> <!-- Root Note (IMPORTANT) -->
    <div
      class="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
    </div>
    <section v-if="post">
      <ArticleHeader :title="post.title" :date="post._createdAt" :type="post.type" :author="post.author" />
      <article class="mx-auto max-w-screen-xl p-4">
        <div v-if="post.body" class="postcontent">
          <PortableText :value="post.body" />
        </div>
      </article>
    </section>
  </div>
</template>

<style>
.postcontent p {
  margin: 1rem 0 !important;
}

.postcontent * {
  font-weight: 300;
}

.postcontent h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.postcontent h2 {
  font-size: 2rem;
  font-weight: 700;
}

.postcontent h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.postcontent h4 {
  font-size: 1.25rem;
  font-weight: 700;
}

.postcontent h5 {
  font-size: 1rem;
  font-weight: 700;
}

.postcontent h6 {
  font-size: 0.875rem;
  font-weight: 700;
}

.postcontent strong {
  font-weight: 700;
}

.postcontent a {
  font-weight: 600;
  text-decoration: underline;
  color: #3182ce;
}
</style>