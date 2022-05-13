<template>
  <v-app-bar
    color="primary"
    elevation="2"
  >
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
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>
