<template>
  <div class="bg-background">
    <a v-if="previewEnabled && !inFrame" :href="`/preview/disable?redirect=${route.fullPath}`" class="preview-toggle">
      <span>Preview Enabled</span>
      <span>Disable Preview</span>
    </a>

    <div class="container bg-background">
      <NavBar />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()
</script>
