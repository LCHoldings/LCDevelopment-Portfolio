<template>
  <ContextMenu>
    <ContextMenuTrigger>

      <div class="bg-background">
        <a v-if="previewEnabled && !inFrame" :href="`/preview/disable?redirect=${route.fullPath}`"
          class="preview-toggle">
          <span>Preview Enabled</span>
          <span>Disable Preview</span>
        </a>

        <div class="">
          <NavBar />
          <main>
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </main>
        </div>
      </div>
    </ContextMenuTrigger>

    <ContextMenuContent class="w-64">
      <ContextMenuItem @click="goBack" inset>
        Back
        <ContextMenuShortcut>Alt + ←</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem @click="refreshPage" inset>
        Reload
        <ContextMenuShortcut>Ctrl + R</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { consoleEasterEgg } from './utils';

const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()

function refreshPage() {
  location.reload()
}

function goBack() {
  history.back()
}

useSeoMeta({
  title: 'LC Development',
  ogTitle: 'LC Development',
  description: 'We are a group of two developers who are passionate about turning your ideas and dreams into reality.',
  ogDescription: 'We are a group of two developers who are passionate about turning your ideas and dreams into reality.',
  ogImage: 'https://lcdevelopment.net/logo.png',
  twitterCard: 'summary_large_image',
})

consoleEasterEgg()
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>

