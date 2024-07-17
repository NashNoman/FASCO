<template>
  <UserNavbar />
  <div class="container">
    <header class="mb-12 lg:mb-24 lg:mt-24 lg:flex lg:flex-col lg:items-center">
      <h1 class="mb-2 font-serif text-4xl">Shopping Cart</h1>
      <div class="flex items-center text-sm lg:gap-5">
        <span>Home</span>
        <ChevronRightIcon class="size-4 text-primary" />
        <span>Your Shopping Cart</span>
      </div>
    </header>
    <main
      class="grid grid-cols-1 gap-y-4 max-lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      <table
        class="border-t text-xl md:border-none lg:col-span-2 xl:col-span-3"
      >
        <tr class="border-b border-[#d5d5d5] font-serif max-md:hidden">
          <th class="w-[36rem] pb-9 text-left font-normal">Product</th>
          <th class="w-96 pb-9 text-left font-normal">Price</th>
          <th class="w-96 pb-9 text-left font-normal max-lg:hidden">
            Quantity
          </th>
          <th class="w-96 pb-9 text-right font-normal">Total</th>
        </tr>
        <tr class="border-b border-[#d5d5d5] font-serif">
          <td class="flex gap-5 py-8 md:w-[22.875rem]">
            <div>
              <img
                class="h-[14.0625rem] w-[10.5rem] object-cover object-top"
                src="https://m.media-amazon.com/images/I/61AwyF9ZTeL._AC_SX522_.jpg"
                alt=""
              />
              <div
                class="mt-3 flex w-fit rounded border font-sans font-semibold text-black lg:hidden"
              >
                <button class="size-11">-</button>
                <input
                  type="text"
                  value="01"
                  class="size-11 text-center text-secondary"
                />
                <button class="size-11">+</button>
              </div>
            </div>
            <div class="space-y-8 font-sans">
              <p class="font-serif">Mini Dress With Ruffled Straps</p>
              <p class="font-serif">
                Price: <span class="font-lighter">$14.90</span>
              </p>
              <p class="text-secondary">Color: Red</p>
              <button class="text-secondary underline">Remove</button>
            </div>
          </td>
          <td class="pt-10 align-top max-md:hidden">$14.90</td>
          <td class="pt-8 align-top max-lg:hidden">
            <div
              class="flex w-fit rounded border font-sans font-semibold text-black"
            >
              <button class="size-11">-</button>
              <input
                type="text"
                value="01"
                class="size-11 text-center text-secondary"
              />
              <button class="size-11">+</button>
            </div>
          </td>
          <td class="pt-10 text-right align-top max-md:hidden">$14.90</td>
        </tr>
      </table>
      <CheckoutBottom class="mt-6 lg:col-start-2 xl:col-start-3" />
    </main>
  </div>
  <NewsLetterSection />
  <Footer />
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import CheckoutBottom from "../components/CheckoutBottom.vue";
import Footer from "./../components/Footer.vue";
import NewsLetterSection from "./../components/NewsLetterSection.vue";
import UserNavbar from "./../components/UserNavbar.vue";
</script>

<style scoped></style>
