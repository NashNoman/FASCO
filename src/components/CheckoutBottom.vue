<script setup lang="ts">
import Button from "./ui/Button.vue";
import Checkbox from "./ui/Checkbox.vue";
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-4 flex items-center gap-2 border-b pb-2">
      <Checkbox />
      <p class="font-light">
        For <span class="font-bold">$10.00</span> Please Wrap The Product
      </p>
    </div>
    <div class="mb-3 flex justify-between font-serif">
      <p>Subtotal</p>
      <p>$100.00</p>
    </div>
    <Button @click="$router.push('/checkout')" class="w-full">
      Checkout
    </Button>
    <router-link to="/cart" class="mt-3 self-center font-serif underline">
      View Cart
    </router-link>
  </div>
</template>
