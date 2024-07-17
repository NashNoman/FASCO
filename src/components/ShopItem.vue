<template>
  <router-link to="/product/123">
    <div class="flex gap-5 md:flex-col">
      <img
        class="w-40 md:w-56 lg:w-80"
        src="https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div class="mb-4 self-end md:self-start">
        <p class="mb-2 font-serif max-md:text-2xl">Rounded Red Hat</p>
        <p class="mb-4 max-md:text-lg">$8.00</p>
        <div class="flex gap-2">
          <span
            class="size-7 rounded-full border-[5px] border-white bg-yellow-400 ring-1 ring-black"
          ></span>
          <span class="size-7 rounded-full bg-black"></span>
        </div>
      </div>
    </div>
  </router-link>
</template>
