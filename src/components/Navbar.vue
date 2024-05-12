<template>
  <div
    class="flex justify-between items-center w-full h-full p-8 max-h-[10vh] dark:bg-[#2A2B2F]"
  >
    <h1 class="text-2xl font-semibold dark:text-[#fff]">
      Welcome back, Shemil 👋
    </h1>
    <div
      class="flex gap-4 items-center font-semibold text-2xl dark:text-gray-500"
    >
      <span class="pi pi-search"></span>
      <div class="relative">
        <span class="pi pi-bell"></span>
        <span
          class="absolute h-2.5 w-2.5 rounded-full bg-yellow-500 top-0 right-1"
        ></span>
      </div>
      <span class="pi pi-calendar"></span>
      <p class="text-[#20212776] dark:text-gray-500">{{ formattedDate }}</p>
      <img src="/Profile.svg" alt="" class="h-14" />
    </div>
  </div>
</template>

<script setup lang="ts">
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

const formattedDate = `${day} ${month} ${year}`;
</script>
