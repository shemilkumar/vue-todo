<template>
  <div class="flex dark:bg-[#2A2B2F]">
    <Sidebar />
    <div class="flex flex-col h-full w-full">
      <Navbar />
      <Menu />
      <Todos />
      <!-- <draggableComponent /> -->
    </div>
    <AddTodoModal v-if="isModalOpen" />
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import Todos from "./components/Todos.vue";
import AddTodoModal from "./components/AddTodoModal.vue";
import draggableComponent from "./components/draggableComponent.vue";

import { ref, watch } from "vue";
import { useTodoStore } from "./store/todo";
import { useDark, useToggle } from "@vueuse/core";

const { commonState } = useTodoStore();
const isModalOpen = ref(commonState.modalOpen);

watch(
  () => commonState.modalOpen,
  (newValue) => {
    isModalOpen.value = newValue;
  }
);
</script>
