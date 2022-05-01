<script lang="ts">
import type FishingEvent from '@/types/FishingEvent';
import { defineComponent } from 'vue'
import CalendarEvent from './CalendarEvent.vue'

export default defineComponent({
  data() {
    return {
      events: [] as FishingEvent[]
    };
  },
  methods: {
    async getEvents() {
      let events: FishingEvent[] = []
      try {
        let response = await this.axios.get('https://protofishapi.herokuapp.com/events');
        events = response.data;
        response = await this.axios.get(`https://picsum.photos/v2/list?page=2&limit=${events.length}`)
        events.map(e => e).forEach((e, index) => {
          e.urlpic = response.data[index].download_url
        })
      } catch (error) {
        console.error('An error occured', error)
      }
      this.events = events
    }
  },
  created() {
    // fetch on init
    this.getEvents()
  },
  components: { CalendarEvent }
})
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="event in events" :key="event.nom">
      <CalendarEvent :event="event" />
    </div>
  </div>
</template>