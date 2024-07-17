<template>
  <div class="flex flex-col items-center gap-4">
    <div
      class="size-[4.75rem] flex items-center justify-center bg-white rounded-xl d-number"
    >
      <p class="font-digital text-4xl">{{ value }}</p>
    </div>
    <p class="text-2xl">{{ props.label }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number;
  label: string;
}>();

const value = props.value.toString().padStart(2, "0");
</script>

<style scoped>
.d-number {
  box-shadow: 0 4px 14px #00000028;
}
</style>
