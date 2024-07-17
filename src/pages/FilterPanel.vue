<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import FilterCategory from "../components/ui/FilterCategory.vue";

const openFilters = defineModel<boolean>("openFilters", { required: true });
</script>

<template>
  <div
    :class="`left-1/2 top-1/2 z-40 h-[95%] w-[95%] flex-col gap-10 rounded-xl bg-white p-4 shadow-2xl max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:!flex lg:h-auto lg:w-auto lg:gap-8 lg:bg-none lg:shadow-none ${openFilters ? 'fixed flex' : 'hidden'}`"
  >
    <button @click="openFilters = false" class="self-end lg:hidden">
      <XMarkIcon class="size-7" />
    </button>
    <h2 class="font-serif text-3xl">Filters</h2>
    <FilterCategory label="Size">
      <button
        class="rounded-md border border-secondary px-[17px] pb-3 pt-[0.625rem]"
      >
        S
      </button>
      <button
        class="rounded-md border border-secondary px-[17px] pb-3 pt-[0.625rem]"
      >
        M
      </button>
      <button
        class="rounded-md border border-secondary px-[17px] pb-3 pt-[0.625rem]"
      >
        L
      </button>
      <button
        class="rounded-md border border-secondary px-[17px] pb-3 pt-[0.625rem]"
      >
        XL
      </button>
    </FilterCategory>
    <FilterCategory label="Colors">
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
      <div
        class="size-[30px] rounded-full bg-[#ff6c6c] ring-1 ring-neutral-200"
      ></div>
    </FilterCategory>
    <FilterCategory label="Prices" class="flex flex-col gap-3 text-secondary">
      <span>$0-$50</span>
      <span>$50-$100</span>
      <span>$100-$150</span>
      <span>$150-$200</span>
      <span>$200-$400</span>
    </FilterCategory>
  </div>
</template>
