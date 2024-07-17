<template>
  <div class="logos">
    <div
      class="container flex flex-wrap items-center justify-around gap-10 py-14 md:justify-around lg:my-0 lg:h-52 lg:gap-4"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.logos {
  z-index: 100;
  box-shadow: 0 40px 50px #44444415;
}
</style>
