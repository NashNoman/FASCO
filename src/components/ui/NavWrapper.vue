<template>
  <div class="container my-12 bg-white text-primary">
    <nav class="grid grid-cols-3 grid-rows-1 items-center justify-between">
      <Logo />

      <slot name="center"> </slot>
      <slot name="end"> </slot>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Logo from "../Logo.vue";
</script>
