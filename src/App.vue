<template>
  <v-app>
    <v-main>
      <reload-prompt />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

export default defineComponent({
    name: "App",
    components: { ReloadPrompt },
    data() {
        return {
        //
        };
    }
})
</script>
