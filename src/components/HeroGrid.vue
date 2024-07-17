<script setup lang="ts">
import { useRouter } from "vue-router";
import HeroImage from "./HeroImage.vue";
import Button from "./ui/Button.vue";

const router = useRouter();

const goToShop = () => {
  router.push("/shop");
};

const heroImages: {
  url: string;
  lg?: boolean;
  containerClass?: string;
  imageClass?: string;
}[] = [
  {
    url: "https://www.hauteavenue.in/wp-content/uploads/2023/08/m2-758x800.png",
    lg: true,
    containerClass: "col-start-1 hidden md:block",
    imageClass: "absolute bottom-0 left-1/2 -translate-x-1/2 max-w-lg",
  },
  {
    url: "https://voguevelvets.com/wp-content/uploads/2024/04/2148880197.jpg",
    containerClass: "row-start-1",
  },
  {
    url: "https://images.unsplash.com/photo-1713519372473-7473b501ae68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    containerClass: "row-start-4",
    imageClass: "absolute -translate-y-1/4 -translate-x-1/2 top-0 left-1/2",
  },
  {
    url: "https://img.freepik.com/free-photo/curly-haired-man-with-brown-blouse-posing_23-2148892052.jpg?t=st=1720711206~exp=1720714806~hmac=058f06a5c8807dddb0fccd9e54d2f61b453ec12f484ef5ff5f386c6161b75c3c&w=740",
    lg: true,
    containerClass: "lg:col-start-4 xl:col-start-3 hidden lg:block",
    imageClass: "absolute left-1/2 -translate-x-1/2 max-w-xl",
  },
];
</script>
<template>
  <div
    class="container grid h-[48rem] grid-cols-1 grid-rows-4 gap-y-9 sm:grid-cols-1 md:grid-cols-2 md:gap-9 lg:grid-cols-4 xl:grid-cols-3"
  >
    <HeroImage
      :image-url="heroImages[0].url"
      :lg="heroImages[0].lg"
      :container-class="heroImages[0].containerClass"
      :class="heroImages[0].imageClass"
    />
    <div class="row-span-4 grid grid-rows-subgrid lg:max-xl:col-span-2">
      <HeroImage
        :image-url="heroImages[1].url"
        :lg="heroImages[1].lg"
        :container-class="heroImages[1].containerClass"
        :class="heroImages[1].imageClass"
      />
      <div
        class="row-span-2 flex flex-col items-center justify-between uppercase text-primary"
      >
        <h1 class="text-[5rem] font-medium leading-none text-primary">
          Ultimate
        </h1>
        <h1 class="text-stroke text-[10rem] font-bold leading-none text-white">
          Sale
        </h1>
        <p class="text-xl leading-none">New Collection</p>
        <Button @click="goToShop" class="uppercase">Shop Now</Button>
      </div>
      <HeroImage
        :image-url="heroImages[2].url"
        :lg="heroImages[2].lg"
        :container-class="heroImages[2].containerClass"
        :class="heroImages[2].imageClass"
      />
    </div>
    <HeroImage
      :image-url="heroImages[3].url"
      :lg="heroImages[3].lg"
      :container-class="heroImages[3].containerClass"
      :class="heroImages[3].imageClass"
    />
  </div>
</template>
