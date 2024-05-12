<template>
  <div class="h-full grid grid-cols-3 ml-14">
    <!-- <TodoList :data="todos.todosList"
      >To do ({{ todos.todosList.length }})</TodoList
    >
    <TodoList :data="todos.inProgressList"
      >In Progress ({{ todos.inProgressList.length }})</TodoList
    >
    <TodoList :data="todos.completedList"
      >Done ({{ todos.completedList.length }})</TodoList
    > -->

    <!-- =========================================================================================================== -->

    <div
      class="w-96 border-dashed border-2 dark:border-[#000] max-h-[73vh] pb-2 rounded-3xl overflow-auto no-scrollbar dark:bg-[#24262C]"
    >
      <div
        class="sticky top-0 z-10 py-2 bg-gray-50 dark:bg-[#24262C] rounded-b-3xl"
      >
        <div
          class="flex justify-center bg-[#fff] dark:bg-gray-700 dark:text-[#fff] px-4 py-2.5 mx-2 rounded-full mb-4 shadow font-semibold"
        >
          <span>To do ({{ todoListData.length }})</span>
        </div>
      </div>

      <draggable
        class="dragArea list-group w-full flex flex-col gap-8 px-2 pt-2"
        :list="todoListData"
        group="people"
        @change="moveToTodo"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <Card :key="element.id" :todoListData="element" />
        </template>
      </draggable>
    </div>

    <!-- =========================================================================================================== -->

    <div
      class="w-96 border-dashed border-2 dark:border-[#000] max-h-[73vh] pb-2 rounded-3xl overflow-auto no-scrollbar dark:bg-[#24262C]"
    >
      <div
        class="sticky top-0 z-10 py-2 bg-gray-50 dark:bg-[#24262C] rounded-b-3xl"
      >
        <div
          class="flex justify-center bg-[#fff] dark:bg-gray-700 dark:text-[#fff] px-4 py-2.5 mx-2 rounded-full mb-4 shadow font-semibold"
        >
          <span>In Progress ({{ inProgressListData.length }})</span>
        </div>
      </div>

      <draggable
        class="dragArea list-group w-full flex flex-col gap-8 px-2 pt-2"
        :list="inProgressListData"
        group="people"
        itemKey="name"
        @change="moveToInProgress"
      >
        <template #item="{ element, index }">
          <Card :key="element.id" :todoListData="element" />
        </template>
        <div>{{ element }} {{ index }}</div>
      </draggable>
    </div>

    <!-- =========================================================================================================== -->

    <div
      class="w-96 border-dashed border-2 dark:border-[#000] max-h-[73vh] pb-2 rounded-3xl overflow-auto no-scrollbar dark:bg-[#24262C]"
    >
      <div
        class="sticky top-0 z-10 py-2 bg-gray-50 dark:bg-[#24262C] rounded-b-3xl"
      >
        <div
          class="flex justify-center bg-[#fff] dark:bg-gray-700 dark:text-[#fff] px-4 py-2.5 mx-2 rounded-full mb-4 shadow font-semibold"
        >
          <span>Done ({{ completedListData.length }})</span>
        </div>
      </div>

      <draggable
        class="dragArea list-group w-full flex flex-col gap-8 px-2 pt-2"
        :list="completedListData"
        group="people"
        itemKey="name"
        @change="moveToComplete"
      >
        <template #item="{ element, index }">
          <Card :key="element.id" :todoListData="element" />
        </template>
        <div>{{ element }} {{ index }}</div>
      </draggable>

      <Placeholder />
    </div>
    <!-- =========================================================================================================== -->
  </div>
</template>

<script>
import { createPinia } from "pinia";
import draggable from "vuedraggable";
import { defineComponent, watch, reactive, ref } from "vue";
import Card from "./Card.vue";
import Placeholder from "./Placeholder.vue";
import { useTodoStore } from "../store/todo";

const pinia = createPinia();

export default defineComponent({
  setup() {
    if (!pinia.installed) pinia.use();
    const todos = useTodoStore();

    // Define reactive refs for todo lists
    const todoListData = ref(todos.todosList);
    const inProgressListData = ref(todos.inProgressList);
    const completedListData = ref(todos.completedList);

    watch(todos.todosList, (newValue) => {
      console.log("Hiiiiii");
      todoListData.value = newValue;
    });
    watch(todos.inProgressList, (newValue) => {
      console.log("Hiiiiii =====");
      inProgressListData.value = newValue;
    });
    watch(todos.completedList, (newValue) => {
      completedListData.value = newValue;
    });

    return {
      todos, // Return the reactive data object
      todoListData,
      inProgressListData,
      completedListData,
    };
  },
  components: {
    draggable,
    Card,
  },

  methods: {
    moveToTodo(event) {
      this.todos.changeStatusToTodo(event?.added?.element.id);
    },
    moveToInProgress(event) {
      this.todos.changeStatusToInprogress(event?.added?.element.id);
    },
    moveToComplete(event) {
      this.todos.changeStatusToComplete(event?.added?.element.id);
    },
  },
});
</script>
