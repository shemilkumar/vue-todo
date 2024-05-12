<template>
  <div
    class="flex flex-col gap-4 bg-[#fff] dark:bg-[#292B31] p-4 rounded-3xl shadow-lg cursor-grabbing"
    :class="
      isDeadlineMet && todoListData.status !== 'done'
        ? 'border-2  border-red-500 dark:border-red-800'
        : 'border-2 dark:border-none'
    "
  >
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl font-semibold dark:text-[#fff]">
          {{ todoListData.title }}
        </h1>
        <h2 class="text-lg dark:text-gray-500">{{ todoListData.subTitle }}</h2>
      </div>
      <span
        class="text-red-600 font-semibold cursor-pointer hover:scale-125 transition-all duration-300"
        @click="removeTodo(todoListData.id)"
      >
        <i class="pi pi-trash"></i>
      </span>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex justify-between">
        <span class="flex gap-2 items-center dark:text-gray-300">
          <i class="pi pi-list"></i>
          <span>Progress</span>
        </span>
        <div class="flex gap-2 items-center dark:text-gray-300">
          <span
            class="flex justify-center items-center bg-gray-200 dark:bg-gray-600 text-gray-400 rounded-full font-semibold text-[10px] p-1 cursor-pointer"
            @click="() => changeProgress(todoListData.id, 'deduct')"
          >
            <i class="pi pi-minus"></i>
          </span>
          <span>{{ todoListData.progress }}%</span>
          <!-- <img
            src="/add.svg"
            alt=""
            class="h-5 w-5 font-semibold flex gap-2 items-center"
            @click="() => addProgress(todoListData.id)"
          /> -->
          <span
            class="flex justify-center items-center bg-gray-200 dark:bg-gray-600 text-gray-400 rounded-full font-semibold text-[10px] p-1 cursor-pointer"
            @click="() => changeProgress(todoListData.id, 'add')"
          >
            <i class="pi pi-plus"></i>
          </span>
        </div>
      </div>
      <div class="relative">
        <div class="absolute h-1.5 w-full bg-gray-300 rounded-full"></div>
        <div
          class="absolute h-1.5 rounded-full"
          :class="
            todoListData.progress < 50
              ? 'bg-red-500'
              : todoListData.progress >= 80
              ? 'bg-green-500'
              : 'bg-orange-400'
          "
          :style="{ width: todoListData.progress + '%' }"
        ></div>
      </div>
    </div>
    <div class="flex justify-between pt-2 items-center">
      <span
        class="px-4 py-2 font-semibold rounded-full dark:bg-gray-700 dark:text-gray-400"
        :class="
          isDeadlineMet
            ? 'bg-red-100 text-red-500'
            : 'bg-gray-200 text-gray-500'
        "
        >{{ formattedDate }}</span
      >
      <!-- <div class="flex gap-2 font-semibold">
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-comment"></i>
          <span>7</span>
        </span>
        <span class="flex justify-center items-center gap-2">
          <i class="pi pi-paperclip"></i>
          <span>2</span>
        </span>
      </div> -->

      <button
        class="px-6 py-2 bg-amber-300 border border-amber-900 rounded-full font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
        v-if="todoListData.status === 'todo'"
        @click="() => moveToInProgress(todoListData.id)"
      >
        START
      </button>

      <!-- :class="
          todoListData.progress !== 100 &&
          'bg-slate-300 hover:scale-100 opacity-60'
          :disabled="todoListData.progress !== 100"
        " -->
      <button
        v-if="todoListData.status === 'inProgress'"
        class="px-6 py-2 bg-green-300 border border-amber-900 rounded-full font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
        @click="() => moveToComplete(todoListData.id)"
      >
        DONE
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store/todo";

const { todoListData } = defineProps({ todoListData: Object });
const { moveToInProgress, moveToComplete, removeTodo, changeProgress } =
  useTodoStore();

const isDeadlineMet = ref(new Date(todoListData.deadline) < new Date());
const deadlineDate = new Date(todoListData.deadline);
const options = { day: "2-digit", month: "short", year: "numeric" };
const formattedDate = deadlineDate.toLocaleDateString("en-US", options);

console.log(formattedDate); // Output: "24 Aug 2024"
console.log(todoListData.deadline, isDeadlineMet.value);
</script>
