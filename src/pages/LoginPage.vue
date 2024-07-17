<template>
  <div class="lg:flex lg:justify-center lg:items-center h-screen">
    <div
      class="lg:grid grid-cols-2 lg:gap-10 lg:border lg:h-[90%] lg:w-[90%] overflow-hidden"
    >
      <img
        src="https://th.bing.com/th/id/R.89bfcd7ed4136c1eceea7fcbe0446ebc?rik=r2Pqfra9WEGm7A&pid=ImgRaw&r=0"
        class="hidden lg:block object-cover h-full"
        alt=""
      />
      <div class="px-5 h-full">
        <nav class="py-7">
          <router-link to="/">
            <p class="text-primary text-3xl font-serif md:text-4xl lg:text-5xl">
              FASCO
            </p>
          </router-link>
        </nav>
        <h2 class="text-2xl font-serif mt-16">Sign In To FASCO</h2>
        <div class="flex flex-col">
          <div class="flex flex-col gap-4 mt-6 md:flex-row md:w-full">
            <button
              class="flex items-center justify-center gap-3 ring-1 py-1 px-6 rounded-lg"
            >
              <img
                class="size-9"
                src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
                alt=""
              />
              Sign up with Google
            </button>
            <button
              class="flex items-center justify-center gap-3 ring-1 py-1 px-6 rounded-lg"
            >
              <img
                class="size-9"
                src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-gmail-logo-png-png-image_4839469.jpg"
                alt=""
              />
              Sign up with Email
            </button>
          </div>
          <p class="text-center font-bold text-[#838383] my-10 text-xl">
            - OR -
          </p>
          <form class="flex flex-col gap-6" @submit.prevent="formHandler">
            <FormInput placeholder="Email Name" type="email" />
            <FormInput placeholder="Password" type="password" />
            <Button class="font-semibold mt-4 md:w-2/3 md:self-center"
              >Sign In</Button
            >
          </form>
          <Button
            class="font-semibold ring-2 !bg-white !text-blue-500 md:self-center md:col-span-2 md:w-2/3 mt-4"
            >Register Now</Button
          >
          <router-link
            to="/forget-password"
            class="text-blue-500 font-bold mt-4 text-center"
            >Forget Password?</router-link
          >
        </div>
        <p class="text-right mt-7 text-xs absolute bottom-3 right-3">
          FASCO Terms & Codnitions
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import FormInput from "../components/ui/FormInput.vue";

const router = useRouter();

const formHandler = () => {
  router.push("/shop");
};
</script>

<style scoped></style>
