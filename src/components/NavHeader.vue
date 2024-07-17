<template>
  <header class="container mb-16 bg-white text-primary">
    <nav class="flex items-center justify-between">
      <Logo />
      <div class="hidden lg:flex lg:items-center lg:gap-10 xl:gap-[3.75rem]">
        <template v-for="link in links" :key="link.value">
          <routerLink :to="link.href">
            <p>
              {{ link.value }}
            </p>
          </routerLink>
        </template>
        <Button @click="goToSignup"> Sign Up </Button>
      </div>
      <MobileNav @goToSignup="goToSignup" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Logo from "./Logo.vue";
import MobileNav from "./MobileNav.vue";
import Button from "./ui/Button.vue";

const router = useRouter();

const goToSignup = () => {
  router.push("/signup");
};

const links = [
  { value: "Home", href: "/" },
  { value: "Deals", href: "/deals" },
  { value: "New Arrivals", href: "/new-arrivals" },
  { value: "Packages", href: "/packages" },
  { value: "Sign in", href: "/signin" },
];
</script>
