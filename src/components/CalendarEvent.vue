<template>
  <v-card 
    class="mx-auto"
    flat
    rounded="lg"
  >
    <v-img
      :src="eventImage"
      class="white--text align-end rounded-t-lg"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title
        class="text-white"
        v-text="event.nom"
      />
      <v-card-subtitle 
        class="text-white"
        v-text="event.description"
      />
    </v-img>
    <v-list-item density="compact">
      <v-list-item-avatar left>
        <v-icon icon="fas fa-calendar-day" />
      </v-list-item-avatar>
      <v-list-item-subtitle>{{ eventDate }}</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { toLocaleString } from '@/helpers/date'
import type FishingEvent from '@/types/entities/FishingEvent'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<FishingEvent>,
      default: () => ({})
    }
  },
  data() {
    return {
      count: 1
    }
  },
  computed: {
    eventDate(): string {
      return toLocaleString(this.event.startdate)
    },
    eventImage(): string {
      return this.event.afficheurl || 'https://picsum.photos/200/300?random=1'
    }
  }
})
</script>

