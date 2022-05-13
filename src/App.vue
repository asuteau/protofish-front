<template>
  <v-app>
    <v-navigation-drawer
      v-if="!isMobile"
      color="grey-darken-1"
      elevation="2"
      permanent
    />
    <the-top-bar />
    <the-bottom-bar 
      v-if="isMobile"
    />
    <v-main>
      <reload-prompt />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReloadPrompt from './components/ReloadPrompt.vue'
import TheTopBar from './components/TheTopBar.vue'
import TheBottomBar from './components/TheBottomBar.vue'

export default defineComponent({
  name: "App",
  components: { ReloadPrompt, TheTopBar, TheBottomBar },
  data() {
    return {
    //
    };
  },
  computed: {
    isMobile(): boolean {
      return this.$vuetify.display.mobile
    }
  }
})
</script>
