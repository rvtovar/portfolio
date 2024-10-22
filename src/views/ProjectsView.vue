<script setup>
import { ref } from 'vue';
import projectData from "@/assets/projects.json";
const projects = ref(projectData);
</script>

<template>
  <div class="projects-container p-8">
    <h1 class="text-center text-4xl font-bold mb-8 text-white">Recent and Current Projects</h1>
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-box p-6 rounded-lg shadow-md mb-6 relative z-10 bg-purple-100"
      >
        <img :src="project.img_url" alt="Project Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
        <div class="p-4">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-2xl font-bold">{{ project.title }}</h2>
            <span :class="['status-marker', project.status]">{{ project.status }}</span>
          </div>
          <p class="text-gray-600 mb-4">{{ project.time }}</p>
          <ul class="list-disc list-inside mb-4">
            <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <div class="text-center mb-4">
            <a
              :href="project.link"
              target="_blank"
              class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Here
            </a>
          </div>
          <ul class="tech-stack flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <li v-for="(tech, index) in project.tech" :key="tech" class="text-sm sm:text-lg font-medium">
              {{ tech }}<span v-if="index < project.tech.length - 1"> • </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.project-box {
  flex: 1 1 100%;
  @apply p-6 rounded-lg shadow-md mb-6 relative z-10;
}

@media (min-width: 1000px) {
  .project-box {
    flex: 1 1 calc(50% - 16px);
  }
}

.status-marker {
  @apply px-2 py-1 text-sm font-semibold rounded-full;
}

.completed {
  @apply bg-green-100 text-green-800;
}

.in-progress {
  @apply bg-yellow-100 text-yellow-800;
}

.not-started {
  @apply bg-red-100 text-red-800;
}
</style>