<template>
  <div class="text-white relative z-20">
    <section class="container mx-auto py-8 px-4 md:py-16 md:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between mb-8">
        <div class="text-center md:text-left mb-8 md:mb-0">
          <h1 class="text-3xl md:text-6xl font-bold mb-4">Hello There</h1>
          <p class="text-lg md:text-2xl">
            I'm Rose Tovar, a full-stack developer with a passion for creating dynamic and responsive web applications.
          </p>
        </div>
        <img src="/assets/me.png" alt="Rose Tovar" class="w-32 h-32 md:w-60 md:h-60 hidden sm:block">
      </div>
      <div class="flex flex-col md:flex-row items-center justify-between mb-20">
        <img src="/assets/work.png" alt="Work" class="w-48 h-48 md:w-80 md:h-80 mb-8 md:mb-0 md:mr-8">
        <div class="text-center md:text-left">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Who I Am?</h2>
          <p class="text-lg md:text-2xl mb-4">
            I enjoy coding because it allows me to turn my imagination into reality, crafting new solutions to intriguing problems.
          </p>
          <p class="text-lg md:text-2xl mb-4">
            I am well-versed in
            <span class="text-yellow-400">Python</span>,
            <span class="text-blue-400">JavaScript</span>,
            <span class="text-green-400">Go</span>,
            <span class="text-purple-400">C#</span>, and
            <span class="text-red-400">Rust</span>, and I love building web applications, desktop GUIs, and video games in Godot.
          </p>
          <p class="text-lg md:text-2xl mb-4">
            My background in computational physics involves programming in C++ and Python, where I've tackled complex challenges like dynamic rupture models.
          </p>
          <p class="text-lg md:text-2xl">
            This blend of creative and technical skills fuels my passion for software development.
          </p>
        </div>
      </div>
      <div class="mb-20 text-center">
        <h2 class="text-2xl md:text-4xl font-bold mb-4">Technologies I Use</h2>
        <br>
        <div class="grid grid-cols-5 gap-2 md:flex md:flex-wrap md:justify-center md:space-x-4">
          <i class="devicon-python-plain text-3xl md:text-6xl"></i>
          <i class="devicon-django-plain text-3xl md:text-6xl"></i>
          <i class="devicon-fastapi-plain text-3xl md:text-6xl"></i>
          <i class="devicon-javascript-plain text-3xl md:text-6xl"></i>
          <i class="devicon-vuejs-plain text-3xl md:text-6xl"></i>
          <i class="devicon-react-plain text-3xl md:text-6xl"></i>
          <i class="devicon-nodejs-plain text-3xl md:text-6xl"></i>
          <i class="devicon-express-original text-3xl md:text-6xl"></i>
          <i class="devicon-go-plain text-3xl md:text-6xl"></i>
          <i class="devicon-csharp-plain text-3xl md:text-6xl"></i>
          <i class="devicon-dotnetcore-plain text-3xl md:text-6xl"></i>
          <i class="devicon-rust-plain text-3xl md:text-6xl"></i>
          <i class="devicon-postgresql-plain text-3xl md:text-6xl"></i>
          <i class="devicon-mongodb-plain text-3xl md:text-6xl"></i>
          <i class="devicon-mariadb-plain text-3xl md:text-6xl"></i>
        </div>
      </div>
      <div class="mb-0 text-center">
        <h2 class="text-2xl md:text-4xl font-bold mb-4">Connect With Me</h2>
        <div class="flex flex-row justify-center items-center space-x-4">
          <div class="flex items-center space-x-2">
            <a href="https://www.linkedin.com/in/rvtovar/" target="_blank" class="text-lg md:text-2xl">
              <i class="devicon-linkedin-plain text-3xl md:text-4xl"></i>
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <a href="mailto:contact@vanica4rize.com" class="text-lg md:text-2xl">
              <i class="fas fa-envelope text-3xl md:text-4xl"></i>
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <a href="https://discordapp.com/users/599047807885770761" target="_blank" class="text-lg md:text-2xl">
              <i class="fab fa-discord text-3xl md:text-4xl"></i>
            </a>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Add this CSS to hide the first image on smaller screens */
@media (max-width: 850px) {
  .hidden.sm\\:block {
    display: none;
  }
}
</style>