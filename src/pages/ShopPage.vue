<script setup lang="ts">
import { ChevronRightIcon, FunnelIcon } from "@heroicons/vue/16/solid";
import { Bars2Icon, Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import FollowUsSection from "../components/FollowUsSection.vue";
import Footer from "../components/Footer.vue";
import NewsLetterSection from "../components/NewsLetterSection.vue";
import PeakyBlindersSection from "../components/PeakyBlindersSection.vue";
import ShopItem from "../components/ShopItem.vue";
import UserNavbar from "../components/UserNavbar.vue";
import IconButton from "../components/ui/IconButton.vue";
import FilterPanel from "./FilterPanel.vue";

const openFilters = ref(false);
</script>

<template>
  <UserNavbar />
  <div class="container mb-10">
    <header class="mb-12 lg:mb-24 lg:mt-24 lg:flex lg:flex-col lg:items-center">
      <h1 class="mb-2 font-serif text-4xl">Fashion</h1>
      <div class="flex items-center text-sm lg:gap-5">
        <span>Home</span>
        <ChevronRightIcon class="size-4 text-primary" />
        <span>Shop</span>
      </div>
    </header>
    <main class="flex grid-cols-8 flex-col gap-8 lg:grid">
      <FilterPanel v-model:openFilters="openFilters" />
      <div class="col-span-6 col-start-3 row-start-1 flex justify-between">
        <div class="flex items-center gap-2">
          <button
            class="size-5 text-primary lg:hidden"
            @click="openFilters = true"
          >
            <FunnelIcon class="size-5" />
          </button>
          <form action="#" @submit.prevent="">
            <select name="Category" id="category" class="font-serif">
              <option value="best-selling">Best Selling</option>
            </select>
          </form>
        </div>
        <div class="flex gap-2">
          <IconButton>
            <Bars2Icon class="size-5 rotate-90" />
          </IconButton>
          <IconButton>
            <Bars2Icon class="size-5" />
          </IconButton>
          <IconButton>
            <Bars3Icon class="size-5" />
          </IconButton>
        </div>
      </div>
      <div
        class="col-span-6 col-start-3 row-start-2 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <ShopItem v-for="(_, index) in 10" :key="index" />
      </div>
    </main>
  </div>
  <PeakyBlindersSection />
  <FollowUsSection />
  <NewsLetterSection />
  <Footer />
</template>
