<template>
  <section
    class="grid grid-cols-1 overflow-hidden bg-gradient-to-b from-transparent to-[#fafafa] py-36 lg:grid-cols-[minmax(0px,_1fr)_850px_minmax(0px,_1fr)] xl:grid-cols-[minmax(0px,_1fr)_1280px_minmax(0px,_1fr)]"
  >
    <div
      class="flex flex-col items-center gap-12 lg:col-span-2 lg:col-start-2 lg:grid lg:grid-cols-[1fr_4fr] lg:gap-0"
    >
      <div>
        <div
          class="flex flex-col items-center gap-10 text-center lg:items-start lg:text-start"
        >
          <div class="w-[27.75rem] space-y-5">
            <h2 class="font-serif text-[2.875rem] text-primary">
              Deals Of The Month
            </h2>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
          </div>
          <Button class="w-52">Buy Now</Button>
          <div class="mt-4 space-y-5">
            <h3 class="text-[1.75rem] font-medium leading-none text-primary">
              Hurry, Before It's Too Late!
            </h3>
            <div class="flex gap-8 text-primary">
              <DigitalNumber :value="2" label="Days" />
              <DigitalNumber :value="6" label="Hr" />
              <DigitalNumber :value="5" label="Min" />
              <DigitalNumber :value="30" label="Sec" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse gap-6 lg:w-[100rem] lg:flex-row">
        <NavigationButtons class="lg:self-end" />
        <div
          class="flex h-[36.375rem] gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-2"
        >
          <div class="relative row-span-2">
            <img
              class="h-[36.375rem] w-[25.25rem] scale-x-[-1] object-cover"
              src="https://taniaamaral.com.br/wp-content/uploads/2021/01/Product-009-slide01.jpg"
              alt=""
            />
            <div
              class="absolute bottom-6 left-6 space-y-2 bg-white py-8 pl-6 pr-11 text-primary"
            >
              <div class="flex items-center gap-2">
                <span>01</span>
                <span class="border-1 w-7 border-t border-primary"></span>
                <span>Spring Sale</span>
              </div>
              <p class="text-3xl">30% OFF</p>
            </div>
          </div>
          <img
            class="h-[30.375rem] w-[23.25rem] object-cover"
            src="https://adityabirla-yarn.com/article/wp-content/uploads/2022/04/Rayon-Yarn-4.jpg"
            alt=""
          />
          <img
            class="h-[30.375rem] w-[23.25rem] object-cover"
            src="https://www-commerce.trenery.com.au/productimages_display/COMPMEDIUM/2/111439_518499_339819.jpg"
            alt=""
          />
          <div class="hidden items-center gap-3 self-end lg:flex">
            <button
              class="size-7 rounded-full border-8 border-white bg-black ring-1 ring-black"
            ></button>
            <button
              class="size-7 rounded-full border-8 border-white bg-secondary"
            ></button>
            <button
              class="size-7 rounded-full border-8 border-white bg-secondary"
            ></button>
            <button
              class="size-7 rounded-full border-8 border-white bg-secondary"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "./ui/Button.vue";
import DigitalNumber from "./ui/DigitalNumber.vue";
import NavigationButtons from "./ui/NavigationButtons.vue";
</script>

<style scoped></style>
