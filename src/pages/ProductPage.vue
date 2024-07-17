<template>
  <UserNavbar />
  <main class="container py-10 lg:flex lg:justify-between lg:gap-5">
    <div
      class="flex flex-col gap-4 lg:h-[40.875rem] lg:flex-grow lg:flex-row-reverse"
    >
      <img
        class="h-[40.875rem] w-[30.6875rem] self-center object-cover object-top lg:flex-grow"
        src="https://m.media-amazon.com/images/I/61AwyF9ZTeL._AC_SX522_.jpg"
      />
      <div class="flex h-24 gap-5 lg:h-full lg:w-16 lg:flex-col">
        <img
          class="min-w-0 object-cover object-top"
          src="https://m.media-amazon.com/images/I/61NqPYLfx9L._AC_SX522_.jpg"
        />
        <img
          class="min-w-0 object-cover object-top p-0.5 outline outline-1"
          src="https://m.media-amazon.com/images/I/61AwyF9ZTeL._AC_SX522_.jpg"
        />
        <img
          class="min-w-0 object-cover object-top"
          src="https://m.media-amazon.com/images/I/61gnTz8hTgL._AC_SX522_.jpg"
        />
        <img
          class="min-w-0 object-cover object-top"
          src="https://m.media-amazon.com/images/I/71G+8+2raXL._AC_SX522_.jpg"
        />
      </div>
    </div>
    <div class="mt-9 flex flex-col gap-2 font-serif lg:flex-grow">
      <p class="text-[#666666]">FASCO</p>
      <div class="flex items-center justify-between">
        <p class="text-3xl">Denim Jacket</p>
        <button class="size-11 rounded-full border border-[#eeeeee] p-2">
          <Star2 />
        </button>
      </div>
      <div class="flex items-center font-sans font-medium">
        <StarIcon class="h-4" v-for="(_, index) in 4" :key="index" />
        <Star2 class="h-4" />
        <span>(3)</span>
      </div>
      <div class="text-2xl">
        $39.00
        <small class="text-base text-[#666666] line-through">$59.00</small>
        <small
          class="ml-2 rounded-full bg-red-600 px-3 py-0.5 font-sans text-xs font-medium text-white"
          >SAVE 33%</small
        >
      </div>
      <div class="flex items-center gap-2 font-sans">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.969855" clip-path="url(#clip0_6_72)">
            <path
              d="M19.7693 9.65383C17.8115 6.33154 14.1601 4.11108 10 4.11108C5.83821 4.11108 2.18766 6.3331 0.23078 9.65383C0.0796862 9.91022 0 10.2024 0 10.5C0 10.7976 0.0796862 11.0898 0.23078 11.3462C2.18859 14.6684 5.83995 16.8889 10 16.8889C14.1618 16.8889 17.8124 14.6668 19.7693 11.3461C19.9203 11.0897 20 10.7976 20 10.5C20 10.2024 19.9203 9.91021 19.7693 9.65383ZM10 15.2222C6.43904 15.2222 3.33019 13.3229 1.66668 10.5C3.19991 7.89813 5.96102 6.08088 9.17231 5.81223C9.51245 6.1624 9.72224 6.6399 9.72224 7.16664C9.72224 8.24053 8.85168 9.11108 7.77779 9.11108C6.70391 9.11108 5.83335 8.24053 5.83335 7.16664L5.83338 7.16518C5.47898 7.82785 5.27779 8.58483 5.27779 9.38886C5.27779 11.9969 7.392 14.1111 10 14.1111C12.608 14.1111 14.7222 11.9969 14.7222 9.38886C14.7222 8.3114 14.3611 7.31841 13.7537 6.52376C15.6842 7.32768 17.292 8.73282 18.3334 10.5C16.6699 13.3229 13.561 15.2222 10 15.2222Z"
              fill="black"
              stroke="black"
              stroke-width="0.0347222"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_72">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p class="text-secondary">24 people are viewing this right now</p>
      </div>
      <p
        class="flex justify-between rounded border border-[#f8cccc] bg-[#fdefee] px-3 py-2 text-lg text-[#ff706b] lg:mt-3 lg:px-5 lg:py-3"
      >
        Hurry up! Sale ends in:
        <span class="separate-words font-sans font-semibold"
          >00 : 05 : 59 : 47</span
        >
      </p>
      <p class="mt-4 font-sans text-[#666666]">
        Only <span class="font-bold">9</span> item(s) left in stock!
      </p>
      <div class="mb-4 h-1.5 w-full rounded-full bg-[#dedede]">
        <div class="h-full w-1/6 rounded-full bg-red-500"></div>
      </div>
      <p class="font-bold">Size: <span class="font-normal">M</span></p>
      <div class="flex gap-2 font-sans">
        <button
          class="flex size-11 items-center justify-center rounded-md border border-[#eeeeee] bg-black px-[17px] text-white"
        >
          M
        </button>
        <button
          class="flex size-11 items-center justify-center rounded-md border border-[#eeeeee] px-[17px]"
        >
          L
        </button>
        <button
          class="flex size-11 items-center justify-center rounded-md border border-[#eeeeee] px-[17px]"
        >
          XL
        </button>
        <button
          class="flex size-11 items-center justify-center rounded-md border border-[#eeeeee] px-[17px]"
        >
          XXL
        </button>
      </div>
      <p class="mt-4 font-bold">Color: <span class="font-normal">Blue</span></p>
      <div class="mb-4 flex gap-2">
        <span
          class="size-9 rounded-full border-[5px] border-white bg-blue-400 ring-1 ring-black"
        ></span>
        <span class="size-9 rounded-full bg-black"></span>
      </div>
      <p>Quantity</p>
      <div class="mb-10 flex gap-4">
        <div class="flex rounded border">
          <button class="size-11">-</button>
          <input type="text" value="1" class="size-11 text-center" />
          <button class="size-11">+</button>
        </div>
        <button class="h-11 flex-grow rounded border border-black">
          Add to cart
        </button>
      </div>
      <div class="mb-4 flex gap-8 border-b border-b-[#eeeeee] pb-3 font-sans">
        <ProdFormButton>
          <template #icon>
            <svg
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.90601 14.5H4.18726V1.375C4.18726 1.20924 4.12141 1.05027 4.0042 0.933058C3.88699 0.815848 3.72802 0.75 3.56226 0.75H2.93726C2.7715 0.75 2.61253 0.815848 2.49532 0.933058C2.37811 1.05027 2.31226 1.20924 2.31226 1.375V14.5H0.593509C0.501916 14.5 0.412315 14.5267 0.335777 14.5771C0.25924 14.6274 0.199119 14.699 0.162843 14.7831C0.126567 14.8672 0.115726 14.9601 0.131658 15.0503C0.147591 15.1405 0.1896 15.224 0.252494 15.2906L2.90874 18.1031C2.95255 18.1495 3.00536 18.1864 3.06393 18.2116C3.1225 18.2368 3.1856 18.2498 3.24937 18.2498C3.31314 18.2498 3.37624 18.2368 3.43481 18.2116C3.49338 18.1864 3.54618 18.1495 3.58999 18.1031L6.24624 15.2906C6.30909 15.2241 6.35109 15.1406 6.36704 15.0505C6.383 14.9604 6.37223 14.8675 6.33605 14.7835C6.29987 14.6994 6.23987 14.6277 6.16345 14.5774C6.08703 14.527 5.99754 14.5001 5.90601 14.5ZM13.7466 3.70938L11.0904 0.896875C11.0466 0.850534 10.9938 0.813621 10.9352 0.788392C10.8766 0.763164 10.8135 0.750152 10.7498 0.750152C10.686 0.750152 10.6229 0.763164 10.5643 0.788392C10.5057 0.813621 10.4529 0.850534 10.4091 0.896875L7.75288 3.70938C7.69001 3.77594 7.64801 3.85945 7.63207 3.94962C7.61612 4.03978 7.62693 4.13263 7.66316 4.21672C7.69938 4.30081 7.75944 4.37245 7.83592 4.42279C7.9124 4.47313 8.00195 4.49997 8.09351 4.5H9.81226V17.625C9.81226 17.7908 9.87811 17.9497 9.99532 18.0669C10.1125 18.1842 10.2715 18.25 10.4373 18.25H11.0623C11.228 18.25 11.387 18.1842 11.5042 18.0669C11.6214 17.9497 11.6873 17.7908 11.6873 17.625V4.5H13.406C13.4976 4.49997 13.5871 4.47313 13.6636 4.42279C13.7401 4.37245 13.8001 4.30081 13.8364 4.21672C13.8726 4.13263 13.8834 4.03978 13.8675 3.94962C13.8515 3.85945 13.8095 3.77594 13.7466 3.70938Z"
                fill="black"
              />
            </svg>
          </template>
          <template #label> Compare </template>
        </ProdFormButton>
        <ProdFormButton>
          <template #icon>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.48 13.7812C9.87592 13.7812 9.38623 14.2709 9.38623 14.875C9.38623 15.4791 9.87592 15.9688 10.48 15.9688C11.084 15.9688 11.5737 15.4791 11.5737 14.875C11.5737 14.2709 11.084 13.7812 10.48 13.7812ZM10.7796 12.8438H10.1546C9.89572 12.8438 9.68584 12.6339 9.68584 12.375V12.3601C9.68584 9.61234 12.7108 9.875 12.7108 8.16449C12.7108 7.38262 12.0171 6.59375 10.4671 6.59375C9.32865 6.59375 8.73799 6.97066 8.15416 7.71453C8.0015 7.90906 7.72236 7.94871 7.51947 7.80734L7.00643 7.44992C6.7867 7.29684 6.73846 6.99012 6.90311 6.77894C7.73225 5.71539 8.716 5.03125 10.4671 5.03125C12.5108 5.03125 14.2733 6.1934 14.2733 8.16449C14.2733 10.7979 11.2483 10.6586 11.2483 12.3601V12.375C11.2483 12.6339 11.0385 12.8438 10.7796 12.8438ZM10.48 2.0625C15.1136 2.0625 18.9175 5.81543 18.9175 10.5C18.9175 15.1598 15.1437 18.9375 10.48 18.9375C5.82201 18.9375 2.04248 15.1655 2.04248 10.5C2.04248 5.84363 5.816 2.0625 10.48 2.0625ZM10.48 0.8125C5.1301 0.8125 0.79248 5.15168 0.79248 10.5C0.79248 15.8514 5.1301 20.1875 10.48 20.1875C15.8299 20.1875 20.1675 15.8514 20.1675 10.5C20.1675 5.15168 15.8299 0.8125 10.48 0.8125Z"
                fill="black"
                stroke="black"
                stroke-width="0.0390625"
              />
            </svg>
          </template>
          <template #label>Ask a question</template>
        </ProdFormButton>
        <ProdFormButton>
          <template #icon>
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1802 13C15.2218 13 16.1073 13.3646 16.8364 14.0938C17.5655 14.8229 17.9302 15.7084 17.9302 16.75C17.9302 17.7916 17.5655 18.6771 16.8364 19.4062C16.1073 20.1354 15.2218 20.5 14.1802 20.5C13.1386 20.5 12.2531 20.1354 11.5239 19.4062C10.7948 18.6771 10.4302 17.7916 10.4302 16.75C10.4302 16.3594 10.4823 15.9817 10.5864 15.6172L6.7583 13.2344C6.02914 13.9115 5.16976 14.25 4.18018 14.25C3.13851 14.25 2.25309 13.8854 1.52393 13.1562C0.79476 12.4271 0.430176 11.5417 0.430176 10.5C0.430176 9.45834 0.79476 8.57291 1.52393 7.84375C2.25309 7.11459 3.13851 6.75 4.18018 6.75C5.16976 6.75 6.02914 7.08854 6.7583 7.76562L10.5864 5.38281C10.4823 5.01823 10.4302 4.64062 10.4302 4.25C10.4302 3.20834 10.7948 2.32291 11.5239 1.59375C12.2531 0.864584 13.1386 0.5 14.1802 0.5C15.2218 0.5 16.1073 0.864584 16.8364 1.59375C17.5655 2.32291 17.9302 3.20834 17.9302 4.25C17.9302 5.29166 17.5655 6.17709 16.8364 6.90625C16.1073 7.63541 15.2218 8 14.1802 8C13.1906 8 12.3312 7.66146 11.6021 6.98438L7.77393 9.36719C8.0083 10.1224 8.0083 10.8776 7.77393 11.6328L11.6021 14.0156C12.3312 13.3385 13.1906 13 14.1802 13ZM15.5083 2.92188C15.1437 2.55729 14.7011 2.375 14.1802 2.375C13.6593 2.375 13.2167 2.55729 12.8521 2.92188C12.4875 3.28646 12.3052 3.72916 12.3052 4.25C12.3052 4.77084 12.4875 5.21354 12.8521 5.57812C13.2167 5.94271 13.6593 6.125 14.1802 6.125C14.7011 6.125 15.1437 5.94271 15.5083 5.57812C15.8729 5.21354 16.0552 4.77084 16.0552 4.25C16.0552 3.72916 15.8729 3.28646 15.5083 2.92188ZM2.85205 11.8281C3.21664 12.1927 3.65934 12.375 4.18018 12.375C4.70101 12.375 5.14371 12.1927 5.5083 11.8281C5.87289 11.4635 6.05518 11.0208 6.05518 10.5C6.05518 9.97916 5.87289 9.53646 5.5083 9.17188C5.14371 8.80729 4.70101 8.625 4.18018 8.625C3.65934 8.625 3.21664 8.80729 2.85205 9.17188C2.48746 9.53646 2.30518 9.97916 2.30518 10.5C2.30518 11.0208 2.48746 11.4635 2.85205 11.8281ZM12.8521 18.0781C13.2167 18.4428 13.6593 18.625 14.1802 18.625C14.7011 18.625 15.1437 18.4428 15.5083 18.0781C15.8729 17.7135 16.0552 17.2709 16.0552 16.75C16.0552 16.2291 15.8729 15.7865 15.5083 15.4219C15.1437 15.0573 14.7011 14.875 14.1802 14.875C13.6593 14.875 13.2167 15.0573 12.8521 15.4219C12.4875 15.7865 12.3052 16.2291 12.3052 16.75C12.3052 17.2709 12.4875 17.7135 12.8521 18.0781Z"
                fill="black"
              />
            </svg>
          </template>
          <template #label>Share</template>
        </ProdFormButton>
      </div>
      <div class="mg-6">
        <div class="flex items-center gap-2 font-bold">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 5.5C8.8875 5.5 9 5.3875 9 5.25V4.75C9 4.6125 8.8875 4.5 8.75 4.5H1.25C1.1125 4.5 1 4.6125 1 4.75V5.25C1 5.3875 1.1125 5.5 1.25 5.5H8.75ZM19.75 11.5H19V8.12187C19 7.59687 18.7875 7.08125 18.4125 6.70937L15.7906 4.0875C15.4219 3.7125 14.9062 3.5 14.3781 3.5H13V1.95625C13 1.15312 12.3063 0.5 11.4563 0.5H3.54375C2.69375 0.5 2 1.15312 2 1.95625V2.5H0.25C0.1125 2.5 0 2.6125 0 2.75V3.25C0 3.3875 0.1125 3.5 0.25 3.5H7.75C7.8875 3.5 8 3.3875 8 3.25V2.75C8 2.6125 7.8875 2.5 7.75 2.5H3V1.95625C3 1.70312 3.24375 1.5 3.54375 1.5H11.4563C11.7563 1.5 12 1.70312 12 1.95625V11.5H6.4875C6.03125 10.8969 5.3125 10.5 4.5 10.5C3.93438 10.5 3.41875 10.6937 3 11.0125V8.5H2V13C2 14.3813 3.11875 15.5 4.5 15.5C5.88125 15.5 7 14.3813 7 13C7 12.8281 6.98125 12.6625 6.95 12.5H13.05C13.0156 12.6625 13 12.8281 13 13C13 14.3813 14.1187 15.5 15.5 15.5C16.8813 15.5 18 14.3813 18 13C18 12.8281 17.9813 12.6625 17.95 12.5H19.75C19.8875 12.5 20 12.3875 20 12.25V11.75C20 11.6125 19.8875 11.5 19.75 11.5ZM4.5 14.5C3.67188 14.5 3 13.8281 3 13C3 12.1719 3.67188 11.5 4.5 11.5C5.32812 11.5 6 12.1719 6 13C6 13.8281 5.32812 14.5 4.5 14.5ZM13 4.5H14.3781C14.6406 4.5 14.9 4.60625 15.0844 4.79375L17.7062 7.41563C17.7312 7.44063 17.7406 7.475 17.7625 7.50313H13V4.5ZM15.5 14.5C14.6719 14.5 14 13.8281 14 13C14 12.1719 14.6719 11.5 15.5 11.5C16.3281 11.5 17 12.1719 17 13C17 13.8281 16.3281 14.5 15.5 14.5ZM18 11.5H17.4875C17.0312 10.8969 16.3125 10.5 15.5 10.5C14.6875 10.5 13.9688 10.8969 13.5125 11.5H13V8.5H18V11.5ZM8 7.25V6.75C8 6.6125 7.8875 6.5 7.75 6.5H0.25C0.1125 6.5 0 6.6125 0 6.75V7.25C0 7.3875 0.1125 7.5 0.25 7.5H7.75C7.8875 7.5 8 7.3875 8 7.25Z"
              fill="black"
              stroke="black"
              stroke-width="0.03125"
            />
          </svg>
          <p>
            Estimated Delivery:
            <span class="font-sans font-normal">Jul 30 - Aug 03</span>
          </p>
        </div>
        <div class="flex items-center gap-2 font-bold">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9219 6.26875L15.3406 1.525C15.1375 0.9125 14.5656 0.5 13.9187 0.5H4.08125C3.43437 0.5 2.8625 0.9125 2.65937 1.525L1.07812 6.26875C1.02812 6.42188 1 6.58125 1 6.74375V15C1 15.8281 1.67188 16.5 2.5 16.5H15.5C16.3281 16.5 17 15.8281 17 15V6.74375C17 6.58125 16.975 6.42188 16.9219 6.26875ZM2 6.74375C2 6.69063 2.00937 6.6375 2.025 6.58437L3.60625 1.84063C3.675 1.6375 3.86562 1.5 4.08125 1.5H8.5V6.75H2V6.74375ZM16 15C16 15.275 15.775 15.5 15.5 15.5H2.5C2.225 15.5 2 15.275 2 15V7.75H16V15ZM16 6.75H9.5V1.5H13.9187C14.1344 1.5 14.325 1.6375 14.3938 1.84063L15.975 6.58437C15.9906 6.63438 16 6.6875 16 6.74375V6.75Z"
              fill="black"
              stroke="black"
              stroke-width="0.03125"
            />
          </svg>

          <p>
            Free Shipping & Return
            <span class="font-sans font-normal">On all orders over $75</span>
          </p>
        </div>
      </div>
      <div
        class="mt-4 flex flex-col items-center gap-5 rounded bg-[#f8f8f8] py-5"
      >
        <img
          class="h-7"
          src="https://images.ctfassets.net/gc4s9mi2asix/27iheywutAjlzI1CWL3srg/78dad30c9edccdf21edb709b6b0de272/Accepted-Cards-US.png"
          alt=""
        />
        <p>Guarantee safe & secure checkout</p>
      </div>
    </div>
  </main>
  <PeakyBlindersSection />
  <DealsSection />
  <NewsLetterSection />
  <Footer />
</template>

<script setup lang="ts">
import { StarIcon as Star2 } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";
import DealsSection from "../components/DealsSection.vue";
import Footer from "../components/Footer.vue";
import NewsLetterSection from "../components/NewsLetterSection.vue";
import PeakyBlindersSection from "../components/PeakyBlindersSection.vue";
import UserNavbar from "../components/UserNavbar.vue";
import ProdFormButton from "../components/ui/ProdFormButton.vue";
</script>

<style scoped>
.separate-words {
  word-spacing: 0.6rem;
}
</style>
