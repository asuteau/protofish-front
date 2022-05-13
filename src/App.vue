<template>
  <v-app>
    <the-top-bar
      :is-mobile="isMobile"
      :menu-items="menuItems"
    />
    <the-bottom-bar 
      v-if="isMobile"
      :menu-items="menuItems"
    />
    <v-main>
      <v-container fluid>
        <reload-prompt />
        <router-view />
      </v-container>
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
        { id: 'calendar', label: "Calendrier", route: "calendar", icon: "far fa-calendar" },
        { id: 'rankings', label: "Palmarès", route: "rankings", icon: "far fa-star" },
        { id: 'statistics', label: "Statistiques", route: "statistics", icon: "far fa-chart-bar" }
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
