<template>
  <v-row>
    <v-col
      v-for="event in events"
      :key="event.nom"
      cols="12"
      md="4"
    >
      <calendar-event :event="event" />
    </v-col>
  </v-row>
</template><script lang="ts">

import type FishingEvent from '@/types/entities/FishingEvent';
import { defineComponent } from 'vue'
import CalendarEvent from './CalendarEvent.vue'

export default defineComponent({
  components: { CalendarEvent },
  data() {
    return {
      events: [] as FishingEvent[]
    };
  },
  created() {
    // fetch on init
    this.getEvents()
  },
  methods: {
    async getEvents() {
      let events: FishingEvent[] = []
      try {
        let response = await this.axios.get('https://protofishapi.herokuapp.com/events');
        events = response.data.sort((a: FishingEvent, b: FishingEvent) => {
          return a.startdate > b.startdate ? 1 : -1
        });
        response = await this.axios.get(`https://picsum.photos/v2/list?page=2&limit=${events.length}`)
        events.map(e => e).forEach((e, index) => {
          e.urlpic = response.data[index].download_url
        })
      } catch (error) {
        console.error('An error occured', error)
      }
      this.events = events
    }
  }
})
</script>