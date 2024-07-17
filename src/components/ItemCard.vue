<template>
  <div class="flex flex-col rounded-xl shadow-2xl p-6 cursor-pointer">
    <img
      class="rounded-xl md:h-64 object-cover object-top"
      src="https://securmenow.com/solutii/solutie-9-magazin/wp-content/uploads/2021/08/clothingstore-shop-pic4.webp"
      alt=""
    />
    <div class="mt-4 flex flex-col gap-8">
      <div class="flex justify-between">
        <span>
          <p class="md:text-xl text-3xl text-primary font-medium">
            Shiny Dress
          </p>
          <p class="md:text-xs text-secondary">Al Karam</p>
        </span>
        <FiveStarts />
      </div>
      <p class="md:text-xs text-primary font-medium">(4.1k) Customer Reviews</p>
      <div class="flex justify-between items-center">
        <p class="md:text-2xl text-4xl text-primary font-medium tracking-tight">
          $95.50
        </p>
        <p class="text-red-500 md:text-xs">Almost Sold Out</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FiveStarts from "./ui/FiveStarts.vue";
</script>
