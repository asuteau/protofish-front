<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="pwa-toast"
    role="alert"
  >
    <div class="message">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <div
      style="text-align: right;"
    >
      <v-btn
        v-if="needRefresh"
        class="mr-2"
        color="primary"
        flat
        @click="updateServiceWorker()"
      >
        Reload
      </v-btn>
      <v-btn
        flat
        variant="outlined"
        color="primary"
        @click="close"
      >
        Close
      </v-btn>
    </div>
  </div>
</template>

<style>
.pwa-toast {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast .message {
  margin-bottom: 8px;
}
</style>