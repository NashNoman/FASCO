<template>
  <section class="py-36 container space-y-12">
    <SectionHeader>
      <template #title>New Arrival</template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
    </SectionHeader>
    <div class="flex justify-between xl:text-base text-xs">
      <Button
        class="sm:max-lg:py-2 sm:max-lg:px-4 !bg-[#fafafa] !text-secondary shadow-none"
      >
        Men's Fashion
      </Button>
      <Button class="sm:max-lg:py-2 sm:max-lg:px-4">Women's Fashion </Button>
      <Button
        class="sm:max-lg:py-2 sm:max-lg:px-4 !bg-[#fafafa] !text-secondary shadow-none"
      >
        Women's Accessories
      </Button>
      <Button
        class="sm:max-lg:py-2 sm:max-lg:px-4 !bg-[#fafafa] !text-secondary shadow-none"
      >
        Men's Accessories
      </Button>
      <Button
        class="sm:max-lg:py-2 sm:max-lg:px-4 !bg-[#fafafa] !text-secondary shadow-none"
      >
        Discount Deals
      </Button>
    </div>
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-16"
    >
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard class="hidden md:flex" />
      <ItemCard class="hidden lg:flex" />
      <ItemCard class="hidden lg:flex" />
    </div>
    <div class="flex justify-center">
      <Button class="px-14"> View More </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import SectionHeader from "./SectionHeader.vue";
import Button from "./ui/Button.vue";
</script>
