<script setup lang="ts">
import ReloadPromptVue from './components/ReloadPrompt.vue'
import CalendarEvents from './components/CalendarEvents.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <ReloadPromptVue />
      <h1 class="title">Protofish</h1>
      <h2 class="subtitle">
        Here are the latest fishing <strong>events</strong>
      </h2>
      <CalendarEvents />
    </div>
  </section>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Footer Example</strong> Content goes here...
      </p>
    </div>
  </footer>
</template>
