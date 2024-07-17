<script setup lang="ts">
import SectionHeader from "./SectionHeader.vue";
import Button from "./ui/Button.vue";
</script>

<template>
  <section class="relative mt-36 pb-16">
    <form
      class="absolute left-1/2 top-1/2 z-50 mx-auto flex max-w-[39.4375rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-8 shadow-white drop-shadow-xl max-md:min-w-full max-md:px-5 lg:!w-[39.45rem]"
    >
      <SectionHeader>
        <template #title>Subscribe To Our Newsletter</template>
      </SectionHeader>
      <input
        type="text"
        autocomplete="none"
        placeholder="michael@ymail.com"
        class="rounded-xl p-4 text-xl shadow-2xl focus:outline-none"
      />
      <Button class="self-center">Subscribe Now</Button>
    </form>
    <div
      class="z-0 flex h-[46.6875rem] justify-around sm:max-md:-translate-x-10"
    >
      <img
        class="w-[24.1875rem] scale-x-[-1] object-cover object-right"
        src="../assets/boy-wearing-orange-jacket.png"
        alt=""
      />
      <img
        class="w-[22.1875rem] object-cover object-right"
        src="../assets/girl-wearing-black-jacket.png"
        alt=""
      />
    </div>
  </section>
</template>
