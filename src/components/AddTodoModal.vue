<template>
  <div
    class="absolute top-0 left-0 bg-[rgba(25,25,25,0.9)] w-screen h-screen z-20"
  >
    <div class="fixed inset-0 flex justify-center items-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            required
            @change="
              (e) =>
                (todoFormData = {
                  ...todoFormData,
                  title: e.target.value,
                })
            "
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="subtitle"
          >
            Sub Title
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full px-4 py-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="subtitle"
            type="text"
            @change="
              (e) =>
                (todoFormData = {
                  ...todoFormData,
                  subTitle: e.target.value,
                })
            "
          />
        </div>
        <div class="mb-6 relative">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Deadline
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="date"
            required
            @change="
              (e) =>
                (todoFormData = {
                  ...todoFormData,
                  deadline: e.target.value,
                })
            "
          />
        </div>
        <!-- <div class="w-full mb-10">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Status
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              @change="
                (e) =>
                  (todoFormData = {
                    ...todoFormData,
                    status: e.target.value,
                  })
              "
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div> -->
        <div class="flex gap-2">
          <button
            class="w-full bg-primaryColor hover:bg-green-500 hover:scale-95 transition-all duration-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
            type="button"
            @click="() => addTodo(todoFormData)"
          >
            Add
          </button>
          <button
            class="w-full bg-red-500 hover:scale-95 transition-all duration-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
            type="button"
            @click="() => openModal(false)"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const todoFormData = ref({
  id: Date.now(),
  status: "todo",
  progress: 0,
});

const handleSubmission = () => {
  console.log(todoFormData);
};

import { useTodoStore } from "../store/todo";
const { openModal, addTodo } = useTodoStore();
</script>
