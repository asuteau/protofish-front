<template>
  <calendar-events />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarEvents from '@/components/CalendarEvents.vue'

export default defineComponent({
  components: { CalendarEvents },
});
</script>
