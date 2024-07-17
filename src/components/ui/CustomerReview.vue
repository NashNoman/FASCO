<script setup lang="ts">
import FiveStarts from "./FiveStarts.vue";
</script>

<template>
  <div class="flex gap-16 rounded-xl bg-white p-12 shadow-2xl max-lg:scale-75">
    <img
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtaWxlfGVufDB8fDB8fHww"
      alt=""
      class="shadow-square size-60 object-cover"
    />
    <div class="flex w-[26.1875rem] flex-col gap-5 text-primary">
      <p>
        "You won't regret it. I would like to personally thank you for your
        outstanding product. Absolutely wonderful!"
      </p>
      <FiveStarts />
      <div class="h-0.5 bg-primary lg:max-w-60"></div>
      <p class="font-serif text-3xl">Suzan B.</p>
      <p>Traveler</p>
    </div>
  </div>
</template>

<style scoped>
.shadow-square {
  box-shadow: -1rem 1rem #d9d9d9;
}
</style>
