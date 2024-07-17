<script setup lang="ts">
import SectionHeader from "./SectionHeader.vue";
import CustomerReview from "./ui/CustomerReview.vue";
import NavigationButtons from "./ui/NavigationButtons.vue";
</script>

<template>
  <section class="flex flex-col items-center bg-[#fafafa] py-24">
    <SectionHeader class="w-auto">
      <template #title>This Is What Our Customers Say</template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
    </SectionHeader>
    <div class="relative my-16 flex w-full justify-center">
      <CustomerReview class="z-10" />
      <CustomerReview
        class="!max-lg:scale-[0.6] absolute left-1/3 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 lg:scale-75"
      />
      <CustomerReview
        class="!max-lg:scale-[0.6] absolute left-2/3 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 lg:scale-75"
      />
    </div>
    <NavigationButtons class="mx-auto" />
  </section>
</template>
