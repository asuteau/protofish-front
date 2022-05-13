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
      :menu-items="menuItems"
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
import type MenuItem from './types/MenuItem'

export default defineComponent({
  name: "App",
  components: { ReloadPrompt, TheTopBar, TheBottomBar },
  data() {
    return {
      menuItems: [
        { id: 'toto', label: "Calendrier", route: "Calendar", icon: "far fa-calendar" },
        { id: 'titi', label: "Palmarès", route: "Ranking", icon: "far fa-star" },
        { id: 'tata', label: "Statistiques", route: "Statistics", icon: "far fa-chart-bar" }
      ] as MenuItem[]
    };
  },
  computed: {
    isMobile(): boolean {
      return this.$vuetify.display.mobile
    }
  }
})
</script>
