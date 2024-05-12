<template>
  <div
    class="flex justify-between m-8 border-b-4 dark:border-gray-500 border-gray-100 max-h-[10vh] dark:bg-[#2A2B2F]"
  >
    <div class="flex gap-4 text-xl font-medium dark:text-[#fff]">
      <span class="pb-2 px-4 font-semibold flex gap-2 items-center">
        <!-- <img src="/overview.svg" alt="" class="h-5 w-5" /> -->
        <span>Board View</span>
      </span>
      <span class="pb-2 px-4 font-semibold flex gap-2 items-center">
        <!-- <img src="/add.svg" alt="" class="h-5 w-5" /> -->
        <!-- <span>Add View</span> -->
      </span>
    </div>
    <div class="flex items-center gap-8 text-xl pb-2">
      <span class="font-semibold dark:text-[#fff]">Filter</span>
      <span class="font-semibold text-gray-500">Sort</span>
      <span
        class="flex gap-0.5 items-center justify-center h-10 w-10 border-2 rounded-full"
      >
        <span
          class="h-1 w-1 bg-primaryColor dark:bg-[#fff] rounded-full"
        ></span>
        <span
          class="h-1 w-1 bg-primaryColor dark:bg-[#fff] rounded-full"
        ></span>
        <span
          class="h-1 w-1 bg-primaryColor dark:bg-[#fff] rounded-full"
        ></span>
      </span>
      <button
        class="text-white bg-primaryColor py-2.5 px-4 rounded-full text-balance dark:bg-[#4B69FF]"
        @click="() => openModal(true)"
      >
        Add New Task
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../store/todo";
const { openModal } = useTodoStore();
</script>
