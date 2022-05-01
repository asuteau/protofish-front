<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    event: Object
  },
  data() {
    return {
      count: 1
    }
  }
})
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="event?.urlpic" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="title">
        {{ event?.nom }}
      </p>
      <p class="subtitle">
        {{ event?.description }}
      </p>
    </div>
  </div>
</template>