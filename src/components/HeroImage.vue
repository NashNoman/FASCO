<script setup lang="ts">
const props = defineProps<{
  imageUrl: string;
  containerClass?: string;
  lg?: boolean;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div
    :class="`relative overflow-hidden rounded-xl bg-neutral-200 ${props.lg ? 'row-span-4' : ''} ${props.containerClass || ''}`"
  >
    <img :class="$attrs.class" :src="props.imageUrl" alt="" />
  </div>
</template>
