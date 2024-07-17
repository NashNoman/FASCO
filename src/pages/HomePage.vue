<template>
  <div class="w-full pt-12">
    <NavHeader />
    <section>
      <HeroGrid />
    </section>
  </div>
  <SectionFooter>
    <img
      v-for="(logo, index) in brandLogos"
      class="h-min w-48"
      :key="index"
      :src="logo.url"
      :alt="logo.alt"
    />
  </SectionFooter>
  <DealsSection />
  <NewArrivalsSection />
  <PeakyBlindersSection />
  <FollowUsSection />
  <CustomersSection />
  <NewsLetterSection />
  <Footer />
</template>

<script setup lang="ts">
import CustomersSection from "../components/CustomersSection.vue";
import DealsSection from "../components/DealsSection.vue";
import FollowUsSection from "../components/FollowUsSection.vue";
import Footer from "../components/Footer.vue";
import HeroGrid from "../components/HeroGrid.vue";
import NavHeader from "../components/NavHeader.vue";
import NewArrivalsSection from "../components/NewArrivalsSection.vue";
import NewsLetterSection from "../components/NewsLetterSection.vue";
import PeakyBlindersSection from "../components/PeakyBlindersSection.vue";
import SectionFooter from "../components/ui/SectionFooter.vue";

const brandLogos = [
  {
    url: "https://cdn.worldvectorlogo.com/logos/chanel-logo.svg",
    alt: "Chanel logo",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Louis_Vuitton_logo.png",
    alt: "Louis Vuitton logo",
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/prada-logo-1.svg",
    alt: "Prada logo",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*XuUIFUdW4E2J0zj9E4mLkQ.png",
    alt: "Calvin Klein logo",
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/denim.svg",
    alt: "Denim logo",
  },
];
</script>
