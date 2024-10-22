<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);

const fetchProjects = async () => {
  try {
    const response = await fetch('/src/assets/projects.json');
    projects.value = await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

onMounted(fetchProjects);
</script>

<template>
  <div class="projects-container p-8">
    <div
      v-for="project in projects"
      :key="project.title"
      :class="['project-box', `bg-${project.color}-100`, 'p-6', 'rounded-lg', 'shadow-md', 'mb-6', 'relative', 'z-10']"
    >
      <h2 class="text-2xl font-bold mb-2">
        {{ project.time }}
        <a :href="project.link" class="text-blue-500">
          {{ project.title }}
        </a>
      </h2>

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
</template>

<style scoped>
.projects-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>