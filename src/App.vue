<template>
  <v-app>
    <v-main>
      <reload-prompt />
      <router-view />
      <the-navigation-bar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReloadPrompt from './components/ReloadPrompt.vue'
import TheNavigationBar from './components/TheNavigationBar.vue'

export default defineComponent({
    name: "App",
    components: { ReloadPrompt, TheNavigationBar },
    data() {
      return {
      //
      };
    }
})
</script>
