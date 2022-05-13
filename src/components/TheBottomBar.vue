<template>
  <v-bottom-navigation
    v-model="activeMenuItem"
    bg-color="grey-lighten-5"
    color="primary"
    elevation="2"
    density="comfortable"
  >
    <v-btn
      v-for="menuItem in menuItems"
      :key="menuItem.id"
      :value="menuItem.id"
      width="100"
      :to="{ name: menuItem.route }"
    >
      <v-icon size="large">
        {{ menuItem.icon }}
      </v-icon>
      <span
        :class="{ inactive: !isActive(menuItem), 'mt-1': isActive(menuItem) }"
      >{{ menuItem.label }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type MenuItem from '@/types/MenuItem'

export default defineComponent({
  props: {
    menuItems: {
      type: Array as PropType<Array<MenuItem>>,
      default: () => ([])
    }
  },
  data() {
    return {
      activeMenuItem: ''
    }
  },
  mounted() {
    this.activeMenuItem = this.menuItems.length ? this.menuItems[0].id : ''
  },
  methods: {
    isActive(item: MenuItem): boolean {
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
