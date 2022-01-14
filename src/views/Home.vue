<template>
  <div class="home">
    <TaskCreate />
    <List />
  </div>
</template>

<script>
import TaskCreate from "@/components/CreateTask.vue";
export default {
  name: "Home",
  components: {
    TaskCreate,
  },
};
</script>
