<script setup>

</script>

<template>
  <header class="bg-purple-500 shadow-md sticky top-0 z-10">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <router-link :to="{name: 'home'}" class="flex items-center">
        <img src="/assets/me.png" alt="Logo" class="w-8 h-8 rounded-full mr-3">
        <span class="text-white font-semibold text-lg">Rose Tovar</span>
      </router-link>
      <div class="flex items-center space-x-4">
        <router-link :to="{name: 'projects'}" class="text-white hover:text-gray-300 transition duration-300">
          Projects
        </router-link>
        <router-link :to="{name: 'resume'}" class="text-white hover:text-gray-300 transition duration-300">
          Resume
        </router-link>
        <a href="https://github.com/rvtovar" target="_blank" class="text-white hover:text-gray-300 transition duration-300">
          <i class="devicon-github-plain text-2xl"></i>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  z-index: 10;
}
</style>