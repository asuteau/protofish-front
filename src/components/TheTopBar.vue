<template>
  <v-app-bar
    color="primary-darken-2"
    elevation="2"
    density="compact"
  >
    <template #image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      />
    </template>

    <template #prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>Protofish</v-app-bar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>fas fa-filter</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>fas fa-user</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import type MenuItem from '@/types/MenuItem'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    menuItems: {
      type: Array as PropType<Array<MenuItem>>,
      default: () => ([])
    }
  },
})
</script>
