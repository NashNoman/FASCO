<template>
  <div class="col-start-1 flex flex-col">
    <slot name="label">
      <label class="mb-5 font-serif text-5xl text-primary" for="email">{{
        props.label
      }}</label>
    </slot>

    <div :class="`grid grid-cols-2 gap-3 ${$attrs.class || ''}`">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>
