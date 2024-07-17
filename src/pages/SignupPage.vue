<template>
  <div class="lg:flex lg:justify-center lg:items-center h-screen">
    <div class="lg:grid grid-cols-2 lg:gap-10 lg:border lg:h-[90%] lg:w-[90%]">
      <img
        src="https://onlinetkani.ru/image/catalog/Natali/blazer.jpg"
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
        <h2 class="text-2xl font-serif mt-16">Create Account</h2>
        <div>
          <div class="flex flex-col gap-4 mt-6 md:flex-row">
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
          <form
            class="flex flex-col gap-6 md:grid md:grid-cols-2"
            @submit.prevent="formHandler"
          >
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />
            <FormInput placeholder="Email Name" type="email" />
            <FormInput placeholder="Phone Number" type="number" />
            <FormInput placeholder="Password" type="password" />
            <FormInput placeholder="Confirm Password" type="password" />
            <Button class="mt-4 md:col-span-2 md:w-2/3 md:justify-self-center"
              >Create Account</Button
            >
          </form>
          <p class="text-center mt-6">
            Already have an account?
            <router-link to="/login" class="text-blue-500">Login</router-link>
          </p>
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
