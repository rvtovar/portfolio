<script setup>

</script>

<template>
  <div class="doodle-background">
    <div class="content">
      <slot></slot>
    </div>
    <css-doodle class="doodle">
      :doodle {
      @grid: 1x3 / 100vmax;
      position: absolute;
      top: 0; left: 0;
      z-index: 0;
      }

      @size: 100% 200%;
      position: absolute;

      background: @m(100, (
      linear-gradient(transparent, @p(
      #FFFDE1@repeat(2, @p([0-9a-f])),
      #FB3569@repeat(2, @p([0-9a-f]))
      ))
      @r(0%, 100%) @r(0%, 100%) /
      @r(1px) @r(23vmin)
      no-repeat
      ));

      will-change: transform;
      animation: f 50s linear calc(-50s / @size() * @i()) infinite;
      @keyframes f {
      from { transform: translateY(-100%) }
      to { transform: translateY(100%) }
      }
    </css-doodle>

  </div>
</template>

<style scoped>
.doodle-background {
  position: relative;
  z-index: 0;
  min-height: 100vh;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4B0082;
}
@media (max-width: 850px) {
  .doodle {
    display: none;
  }
}

</style>