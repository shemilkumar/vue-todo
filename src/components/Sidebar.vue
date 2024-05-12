<template>
  <div
    class="h-screen w-96 shadow-lg bg-[#fff] dark:bg-[#222327] flex flex-col justify-between pb-8"
  >
    <div class="p-8">
      <div class="flex justify-between items-center">
        <span class="text-5xl font-semibold dark:text-[#fff]">Projects</span>
        <img src="/add.svg" alt="" class="h-10" />
      </div>
      <div class="px-8 mt-4">
        <h1 class="font-semibold dark:text-[#fff]">Projets</h1>
        <ul
          class="inline-flex flex-col gap-2 pl-4 mt-4 font-semibold text-gray-500"
        >
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            All Projects
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            Design System
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            User flow
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            Ux research
          </li>
        </ul>
      </div>

      <div class="mt-12 px-8">
        <h1 class="font-semibold dark:text-[#fff]">Tasks</h1>
        <ul
          class="inline-flex flex-col gap-2 pl-4 mt-4 font-semibold text-gray-500"
        >
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            All Tasks
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            To do (4)
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            In Progress
          </li>
          <li
            class="py-1 px-2 rounded-3xl flex hover:text-black hover:bg-gray-200"
          >
            Done (3)
          </li>
        </ul>
      </div>
    </div>
    <div
      class="flex justify-between mx-8 rounded-full bg-gray-100 dark:bg-[#2C2D31] px-1 py-1 font-semibold cursor-pointer"
    >
      <!-- dark:bg-[#222310] -->
      <!-- RGB(44, 45, 49) - #2C2D31
      RGB(54, 55, 59) - #36373B
      RGB(64, 65, 69) - #404145
      RGB(74, 75, 79) - #4A4B4F
      RGB(84, 85, 89) - #545559 -->
      <span
        class="flex gap-2 items-center rounded-full py-1.5 w-1/2 justify-center transition-all duration-700 bg-gray-100 dark:bg-[#2C2D31] text-[#000] dark:text-gray-500"
        @click="
          () => {
            dark = false;
            toggleDark();
          }
        "
        :class="!dark && 'shadow-xl '"
      >
        <i class="pi pi-sun"></i>
        <span>Light</span>
      </span>
      <span
        class="flex gap-2 items-center rounded-full py-1.5 w-1/2 justify-center transition-all duration-700 bg-gray-100 text-gray-400 dark:bg-[#36373B] dark:text-white"
        @click="
          () => {
            dark = true;
            toggleDark();
          }
        "
        :class="dark && 'shadow-xl'"
      >
        <i class="pi pi-moon"></i>
        <span>Dark</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
console.log(isDark.value);

const dark = ref(false);
</script>
