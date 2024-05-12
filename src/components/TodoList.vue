<template>
  <div
    class="w-96 border-dashed border-2 max-h-[73vh] pb-2 rounded-3xl overflow-auto no-scrollbar"
  >
    <div class="sticky top-0 z-10 py-2 bg-gray-50 rounded-b-3xl">
      <div
        class="flex justify-center bg-white px-4 py-2.5 mx-2 rounded-full mb-4 shadow border"
      >
        <span><slot /></span>
        <!-- <span class="font-semibold flex gap-2 items-center">
          <img src="/add.svg" alt="" class="h-5 w-5" />
          <span>Add new task</span>
        </span> -->
      </div>
    </div>

    <draggable
      class="dragArea list-group w-full flex flex-col gap-8 px-2 pt-2"
      :list="data"
      @change="log"
    >
      <Card
        v-for="todoItem in data"
        :key="todoItem.id"
        :todoListData="todoItem"
      />
    </draggable>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { defineComponent } from "vue";

// const props = defineProps({ data: Array });
// console.log(props);

export default defineComponent({
  props: ["data"],
  setup(props) {
    console.log(props.data);

    return {
      enabled: true,
      dragging: false,
    };
  },
  components: {
    draggable: VueDraggableNext,
    Card,
  },
  // data() {
  //   return {
  //     enabled: true,
  //     data: props.data,
  //     dragging: false,
  //   };
  // },
  methods: {
    log(event) {
      console.log("HI", event);
    },
  },
});
</script>
