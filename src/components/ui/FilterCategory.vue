<template>
  <div>
    <h4 class="mb-6 font-serif text-lg">{{ props.label }}</h4>
    <div :class="$attrs.class || 'flex flex-wrap gap-2'">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>
