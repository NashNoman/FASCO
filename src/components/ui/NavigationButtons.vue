<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/16/solid";
import IconButton from "./IconButton.vue";
</script>

<template>
  <div class="flex gap-4">
    <IconButton>
      <ChevronLeftIcon />
    </IconButton>
    <IconButton :active="true">
      <ChevronRightIcon />
    </IconButton>
  </div>
</template>
