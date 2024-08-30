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

const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()

function refreshPage() {
  location.reload()
}

function goBack() {
  history.back()
}

var asciiText = `
 __    __            __  __           
/  |  /  |          /  |/  |          
$$ |  $$ |  ______  $$ |$$ |  ______  
$$ |__$$ | /      \ $$ |$$ | /      \ 
$$    $$ |/$$$$$$  |$$ |$$ |/$$$$$$  |
$$$$$$$$ |$$    $$ |$$ |$$ |$$ |  $$ |
$$ |  $$ |$$$$$$$$/ $$ |$$ |$$ \__$$ |
$$ |  $$ |$$       |$$ |$$ |$$    $$/ 
$$/   $$/  $$$$$$$/ $$/ $$/  $$$$$$/  
                                      
`
var consoleText = "\n" + `
If you are reading this, youve managed to get the console open. If it was a mistake, you can close it easily by pressing the X in the upper right.

If you didnt open it by mistake, you are just like me! I love to see what is going on behind the scenes!

The portfolio is open-source! Check it out on GitHub: https://github.com/LCHoldings/LCDevelopment-Portfolio

If you have any questions, feel free to ask me! I am always happy to help.

Have a great day!
// Lazyllama 🦙
` + "\n";

console.log(asciiText + consoleText)
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