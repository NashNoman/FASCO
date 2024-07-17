<script setup lang="ts">
import { Bars3BottomRightIcon } from "@heroicons/vue/16/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import ShoppingCartPanel from "./ShoppingCartPanel.vue";
import NavWrapper from "./ui/NavWrapper.vue";

const open = ref(false);
const showCart = ref(false);
</script>

<template>
  <ShoppingCartPanel :show="showCart" @toggle-show="showCart = false" />
  <NavWrapper>
    <template #center>
      <div
        @click.self="open = false"
        :class="`right-0 top-0 z-40 max-lg:h-screen max-lg:w-screen max-lg:bg-[#00000077] lg:!relative lg:!block ${open ? 'max-lg:fixed' : 'hidden'}`"
      >
        <div
          class="float-right flex flex-col items-center gap-14 bg-white max-lg:h-screen max-lg:w-screen max-lg:pt-10 md:max-lg:w-1/2 lg:flex-row lg:gap-16 lg:justify-self-center"
        >
          <button @click="open = false" class="self-end pr-10 lg:hidden">
            <XMarkIcon class="size-7" />
          </button>
          <router-link active-class="border-b border-primary p-1.5" to="/"
            >Home</router-link
          >
          <router-link active-class="border-b border-primary p-1.5 " to="/shop"
            >Shop</router-link
          >
          <router-link
            active-class="border-b border-primary p-1.5"
            to="/products"
            >Products</router-link
          >
          <router-link active-class="border-b border-primary p-1.5" to="/pages"
            >Pages</router-link
          >
        </div>
      </div>
    </template>
    <template #end>
      <div class="col-start-3 flex justify-self-end lg:gap-4">
        <button class="w-10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.877 16.4848L13.609 12.2168C13.5281 12.1359 13.4227 12.0938 13.3102 12.0938H12.8461C13.9535 10.8105 14.625 9.14062 14.625 7.3125C14.625 3.27305 11.352 0 7.3125 0C3.27305 0 0 3.27305 0 7.3125C0 11.352 3.27305 14.625 7.3125 14.625C9.14062 14.625 10.8105 13.9535 12.0938 12.8461V13.3102C12.0938 13.4227 12.1395 13.5281 12.2168 13.609L16.4848 17.877C16.65 18.0422 16.9172 18.0422 17.0824 17.877L17.877 17.0824C18.0422 16.9172 18.0422 16.65 17.877 16.4848ZM7.3125 12.9375C4.20469 12.9375 1.6875 10.4203 1.6875 7.3125C1.6875 4.20469 4.20469 1.6875 7.3125 1.6875C10.4203 1.6875 12.9375 4.20469 12.9375 7.3125C12.9375 10.4203 10.4203 12.9375 7.3125 12.9375Z"
              fill="#484848"
              stroke="#484848"
              stroke-width="0.0351562"
            />
          </svg>
        </button>
        <button class="w-10">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11.875C11.3789 11.875 10.8398 12.5 9 12.5C7.16016 12.5 6.625 11.875 5.5 11.875C2.60156 11.875 0.25 14.2266 0.25 17.125V18.125C0.25 19.1602 1.08984 20 2.125 20H15.875C16.9102 20 17.75 19.1602 17.75 18.125V17.125C17.75 14.2266 15.3984 11.875 12.5 11.875ZM15.875 18.125H2.125V17.125C2.125 15.2656 3.64062 13.75 5.5 13.75C6.07031 13.75 6.99609 14.375 9 14.375C11.0195 14.375 11.9258 13.75 12.5 13.75C14.3594 13.75 15.875 15.2656 15.875 17.125V18.125ZM9 11.25C12.1055 11.25 14.625 8.73047 14.625 5.625C14.625 2.51953 12.1055 0 9 0C5.89453 0 3.375 2.51953 3.375 5.625C3.375 8.73047 5.89453 11.25 9 11.25ZM9 1.875C11.0664 1.875 12.75 3.55859 12.75 5.625C12.75 7.69141 11.0664 9.375 9 9.375C6.93359 9.375 5.25 7.69141 5.25 5.625C5.25 3.55859 6.93359 1.875 9 1.875Z"
              fill="#484848"
              stroke="#484848"
              stroke-width="0.0390625"
            />
          </svg>
        </button>
        <button class="w-10">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3369 6.0659L13.264 5.32631L10.9967 0.729091C10.5904 -0.090353 9.41332 -0.10077 9.0036 0.729091L6.73624 5.32631L1.66332 6.0659C0.753597 6.19784 0.389014 7.31937 1.04874 7.96173L4.71887 11.5381L3.85082 16.5902C3.69457 17.5034 4.65638 18.1874 5.46193 17.7603L10.0001 15.3749L14.5383 17.7603C15.3439 18.184 16.3057 17.5034 16.1494 16.5902L15.2814 11.5381L18.9515 7.96173C19.6112 7.31937 19.2467 6.19784 18.3369 6.0659ZM13.4932 10.9548L14.3161 15.7603L10.0001 13.493L5.68415 15.7603L6.50707 10.9548L3.01401 7.55201L7.8404 6.85062L10.0001 2.47562L12.1598 6.85062L16.9862 7.55201L13.4932 10.9548Z"
              fill="#484848"
            />
          </svg>
        </button>
        <button
          class="relative w-10 text-center before:absolute before:right-0 before:top-0 before:size-6 before:-translate-y-1/2 before:rounded-full before:bg-red-500 before:text-white before:content-['1']"
          @click="showCart = true"
        >
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5C14 2.24297 11.757 0 9 0C6.24297 0 4 2.24297 4 5H0.25V16.875C0.25 18.6009 1.6491 20 3.375 20H14.625C16.3509 20 17.75 18.6009 17.75 16.875V5H14ZM9 1.875C10.7231 1.875 12.125 3.27688 12.125 5H5.875C5.875 3.27688 7.27688 1.875 9 1.875ZM15.875 16.875C15.875 17.5643 15.3143 18.125 14.625 18.125H3.375C2.68574 18.125 2.125 17.5643 2.125 16.875V6.875H4V8.4375C4 8.95527 4.41973 9.375 4.9375 9.375C5.45527 9.375 5.875 8.95527 5.875 8.4375V6.875H12.125V8.4375C12.125 8.95527 12.5447 9.375 13.0625 9.375C13.5803 9.375 14 8.95527 14 8.4375V6.875H15.875V16.875Z"
              fill="#484848"
              stroke="#484848"
              stroke-width="0.0390625"
            />
          </svg>
        </button>
        <button @click="open = true" class="w-10 lg:hidden">
          <Bars3BottomRightIcon class="size-6" />
        </button>
      </div>
    </template>
  </NavWrapper>
</template>
