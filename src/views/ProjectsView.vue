<template>
  <div class="projects-container p-8">
    <div class="project-box bg-purple-100 p-6 rounded-lg shadow-md mb-6 relative z-10">
      <h2 class="text-2xl font-bold mb-2">Summer 2023
        <a href="https://github.com/rvtovar/rust_todos" class="text-blue-500">
          Console To-Do's
        </a>
      </h2>

      <ul class="list-disc list-inside mb-4">
        <li>Developed a console-based to-do application with integration into a local PostgreSQL database for efficient task management and data persistence.</li>
        <li>Implemented seamless user interactions to enhance the overall functionality of the application.</li>
        <li>Optimized code modules using Rust to improve performance and maintainability for the application.</li>
      </ul>
      <a href="https://github.com/rvtovar/rust_todos" target="_blank" class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">View Here</a>
    </div>
    <div class="project-box bg-green-100 p-6 rounded-lg shadow-md mb-6 relative z-10">
      <h2 class="text-2xl font-bold mb-2">2022 – 2023
        <a href="https://app.transition.quickorganics.com/login" class="text-blue-400">
          Quick Organics Web Application
        </a>
      </h2>

      <ul class="list-disc list-inside mb-4">
        <li>Developed scalable APIs with Django Rest Framework and PostgreSQL, significantly enhancing data retrieval efficiency.</li>
        <li>Conducted weekly Postgres Database migrations to ensure data integrity and optimize performance, utilizing advanced SQL queries.</li>
        <li>Collaborated with cross-functional teams to implement scalable solutions, enhancing application responsiveness by 50% within the established timeframe.</li>
      </ul>
      <a href="https://app.transition.quickorganics.com/login" target="_blank" class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">View Here</a>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
<script setup lang="ts">
</script>