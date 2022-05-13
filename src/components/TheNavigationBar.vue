<template>
  <v-bottom-navigation
    v-model="activeMenuItem"
    color="primary"
  >
    <v-btn
      v-for="item in menuItems"
      :key="item.id"
      :value="item.id"
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
      <span
        :class="{ inactive: !isActive(item), 'mt-1': isActive(item) }"
      >{{ item.label }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menuItems: [
        { id: 'toto', label: "Calendrier", route: "Calendar", icon: "fas fa-calendar-days" },
        { id: 'titi', label: "Palmarès", route: "Ranking", icon: "fas fa-ranking-star" },
        { id: 'tata', label: "Statistiques", route: "Statistics", icon: "fas fa-chart-pie" },
        { id: 'tuto', label: "Profil", route: "Profile", icon: "fas fa-user" }
      ],
      activeMenuItem: ''
    }
  },
  created() {
    this.activeMenuItem = this.menuItems[0].id
  },
  methods: {
    isActive(item: any): boolean {
      return item.id === this.activeMenuItem
    }
  }
})
</script>

<style lang="scss" scoped>
  .inactive {
    opacity: 0;
    margin-top: -12px;
  }
</style>
