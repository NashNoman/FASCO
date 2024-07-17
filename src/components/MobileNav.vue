<template>
  <button @click="open = true" class="lg:hidden">
    <Bars3BottomRightIcon class="size-7 text-primary" />
  </button>
  <div
    class="fixed right-0 top-0 z-50 h-full w-full bg-[#00000088] lg:hidden"
    @click.self="open = false"
    v-if="open"
  >
    <div
      class="relative z-50 float-right flex h-full w-full flex-col items-center gap-[3.75rem] bg-white pt-10 shadow-2xl md:w-1/2 xl:hidden"
    >
      <button @click="open = false">
        <XMarkIcon class="absolute right-6 top-6 size-8" />
      </button>
      <a v-for="link in links" :key="link.value" href="#">
        <p>
          {{ link.value }}
        </p>
      </a>
      <Button @click="emit('goToSignup')"> Sign Up </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/vue/16/solid";
import { ref } from "vue";
import Button from "./ui/Button.vue";

const emit = defineEmits(["goToSignup"]);

const open = ref(false);

const links = [
  { value: "Home", href: "/" },
  { value: "Deals", href: "/deals" },
  { value: "New Arrivals", href: "/new-arrivals" },
  { value: "Packages", href: "/packages" },
  { value: "Sign in", href: "/signin" },
];
</script>
