<template>
  <v-bottom-navigation
    v-model="activeMenuItem"
    bg-color="grey-lighten-5"
    color="primary"
    elevation="2"
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
        { id: 'toto', label: "Calendrier", route: "Calendar", icon: "far fa-calendar" },
        { id: 'titi', label: "Palmarès", route: "Ranking", icon: "far fa-star" },
        { id: 'tata', label: "Statistiques", route: "Statistics", icon: "far fa-chart-bar" }
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
