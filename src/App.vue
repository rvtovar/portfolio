<script setup>
import 'css-doodle'
import Navbar from '@/components/Navbar.vue'
import DoodleBackground from '@/components/DoodleBackground.vue'


</script>

<template>
<Navbar />
<doodle-background>
  <router-view v-slot="{Component, route}">
    <transition name="fade" mode="out-in">
      <main :key="route.name">
        <component :is="Component"></component>
      </main>
    </transition>
  </router-view>
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
