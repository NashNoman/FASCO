<template>
  <div
    v-if="props.show"
    @click.self="$emit('toggleShow')"
    class="fixed left-0 top-0 z-50 h-screen w-screen bg-[#78787868]"
  >
    <div
      class="flex size-full flex-col bg-white px-5 py-8 md:float-end md:w-[30rem] lg:w-[38rem]"
    >
      <div class="mb-10 flex items-start justify-between">
        <div class="flex flex-col gap-2 font-serif">
          <h3 class="text-4xl">Shopping Cart</h3>
          <p class="font-sans text-2xl tracking-tighter text-secondary">
            Buy <span class="font-bold text-black">$122.35</span> More And Get
            <span class="font-bold text-black">Free Shipping</span>
          </p>
        </div>
        <button @click="$emit('toggleShow')">
          <XMarkIcon class="mr-2 size-8" />
        </button>
      </div>
      <div class="flex flex-grow flex-col">
        <div class="flex gap-10 border-b border-[#d4d4d4] py-4">
          <img
            class="w-24 self-start"
            src="https://m.media-amazon.com/images/I/61AwyF9ZTeL._AC_SX522_.jpg"
            alt=""
          />
          <div class="space-y-2 text-xl">
            <p class="font-serif font-bold">Denim Jacket</p>
            <p class="text-secondary">Color: Red</p>
            <p>$14.80</p>
            <div class="flex gap-8 rounded bg-[#f1f1f1] px-3 py-2 text-4xl">
              <button class="w-5">-</button>
              <input
                class="w-10 bg-[#f1f1f1] text-secondary"
                type="text"
                value="01"
              />
              <button class="w-5">+</button>
            </div>
          </div>
        </div>
      </div>
      <CheckoutBottom />
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import CheckoutBottom from "./CheckoutBottom.vue";

const props = defineProps<{
  show: boolean;
}>();

defineEmits<{
  toggleShow: [];
}>();
</script>
