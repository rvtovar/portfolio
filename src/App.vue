<script setup>
import 'css-doodle'
import Navbar from '@/components/Navbar.vue'
import DoodleBackground from '@/components/DoodleBackground.vue'
import { ref } from 'vue'

// const scrollToTop = ref(false)
//
// function handleAfterLeave() {
//   scrollToTop.value = true
// }
</script>

<template>
  <Navbar />
  <doodle-background>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </doodle-background>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>