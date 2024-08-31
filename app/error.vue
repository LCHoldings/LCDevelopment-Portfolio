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
                        <ErrorPage :statusCode="error?.statusCode ?? 404" />
                    </main>
                    <Footer />
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
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

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

useSeoMeta({
  title: 'LC Development - 404',
  ogTitle: 'LC Development - 404',
  description: 'Looks like you have stumbled upon a page that does not exist.',
  ogDescription: 'Looks like you have stumbled upon a page that does not exist.',
  ogImage: 'https://lcdevelopment.net/logo.png',
  twitterCard: 'summary_large_image',
})


function refreshPage() {
    location.reload()
}

function goBack() {
    history.back()
}

consoleEasterEgg()
</script>