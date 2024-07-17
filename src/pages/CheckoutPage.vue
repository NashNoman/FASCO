<template>
  <UserNavbar />
  <h1 class="container font-serif text-3xl md:text-center lg:my-10 lg:text-4xl">
    FASCO Demo Checkout
  </h1>
  <div class="mt-4 border-b border-t border-[#d4d4d4] py-4">
    <main class="container py-10">
      <form
        class="grid grid-cols-1 gap-14 lg:grid-cols-2"
        action="#"
        @submit.prevent=""
      >
        <CheckoutFormSection>
          <template #label>
            <div class="mb-5 flex items-end justify-between">
              <label class="font-serif text-5xl text-primary" for="email"
                >Contact</label
              >
              <p class="text-primary">
                Have an account?
                <router-link to="/signup" class="text-blue-500"
                  >Create Account</router-link
                >
              </p>
            </div>
          </template>
          <input
            type="email"
            class="col-span-2"
            placeholder="Email Address"
            name="email"
            id="email"
          />
        </CheckoutFormSection>
        <CheckoutFormSection label="Delivery">
          <select name="country" id="country" class="col-span-2 text-secondary">
            <option value="country">Country / Region</option>
          </select>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Address" class="col-span-2" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code" />
          <div class="col-span-2 flex items-center gap-2 pl-1">
            <Checkbox class="!border-2 !border-white !p-0" id="save-future" />
            <label for="save-future" class="text-secondary"
              >Save This Info For Future</label
            >
          </div>
        </CheckoutFormSection>
        <CheckoutFormSection class="gap-0" label="Payment">
          <select name="country" id="country" class="col-span-2 text-secondary">
            <option value="payment-type">
              Credit Card
              <img
                src="https://www.fintechfutures.com/files/2019/01/Mastercard-logo-2019.jpg"
                class="rounded-sm"
                alt=""
              />
            </option>
          </select>
          <div
            class="col-span-2 grid grid-cols-2 gap-2 bg-[#f5f5f5] px-3 pb-5 pt-3"
          >
            <input type="text" placeholder="Card Number" class="col-span-2" />
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="Security Code" />
            <input
              type="text"
              placeholder="Card Holder Name"
              class="col-span-2"
            />
            <div class="col-span-2 flex items-center gap-2 pl-1">
              <Checkbox class="!border-2 !border-white !p-0" id="save-future" />
              <label for="save-future" class="text-secondary"
                >Save This Info For Future</label
              >
            </div>
          </div>
        </CheckoutFormSection>
        <div
          class="flex flex-col gap-4 bg-[#f5f5f5] px-4 py-7 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <div class="flex items-center gap-5">
            <div
              class="relative before:absolute before:right-0 before:top-0 before:flex before:size-6 before:-translate-y-1/2 before:translate-x-1/2 before:items-center before:justify-center before:rounded-full before:bg-red-500 before:text-white before:content-['1']"
            >
              <img
                src="https://m.media-amazon.com/images/I/61AwyF9ZTeL._AC_SX522_.jpg"
                class="size-32 object-cover object-top"
                alt=""
              />
            </div>
            <div class="flex-grow">
              <p class="font-serif text-lg text-black">
                Mini Dress With Ruffled Straps
              </p>
              <div class="flex justify-between">
                <p>Red</p>
                <p>$100.00</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <input
              type="text"
              placeholder="Discount code"
              class="flex-grow border-none"
            />
            <Button> Apply </Button>
          </div>
          <div class="space-y-3 text-primary">
            <p>Subtotal</p>
            <p>Shipping</p>
            <p>Total</p>
          </div>
        </div>
        <Button type="submit" class="my-[-1.5rem] lg:col-start-1"
          >Pay Now</Button
        >
        <small class="justify-self-center text-xs text-primary lg:col-start-1"
          >Copyright © 2022 Nashwan . All Rights Reserved.</small
        >
      </form>
    </main>
  </div>
  <NewsLetterSection />
  <Footer />
</template>

<script setup lang="ts">
import CheckoutFormSection from "../components/CheckoutFormSection.vue";
import Footer from "../components/Footer.vue";
import NewsLetterSection from "../components/NewsLetterSection.vue";
import Checkbox from "../components/ui/Checkbox.vue";
import UserNavbar from "../components/UserNavbar.vue";
import Button from "./../components/ui/Button.vue";
</script>

<style scoped>
input,
select {
  @apply border border-secondary p-5;
}
</style>
