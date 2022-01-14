<template>
  <ul>
    <li v-for="{ id, title } in tasks" :key="title">
      <p class="taskTitle">{{ title }}</p>
      <button class="deleteBtn" @click="deleteTask(id)">
        <font-awesome-icon icon="trash" />
      </button>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { LoadTasks, deleteTask } from "@/firebase";
export default {
  components: { FontAwesomeIcon },
  setup() {
    const tasks = LoadTasks();
    return { tasks, deleteTask };
  },
};
</script>

<style>
ul {
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  display: block;
  border-top: none;
  width: 50%;
  list-style-type: none;
}
li {
  text-align: left;
  border-radius: 7px;
  text-indent: 15px;
  background: white;
  width: 75%;
  margin: 15px auto;
  color: black;
  display: block;
}
.deleteBtn,
.taskTitle {
  display: inline-block;
}
.deleteBtn {
  padding: 16px;
  float: right;
  border-radius: 7px;
  cursor: pointer;
  color: black;
  margin: 0;
  border: 2px solid white;
  background: white;
}
.taskTitle {
  text-align: left;
  width: 85%;
}
@media (max-width: 1150px) {
  .taskTitle {
    width: 75%;
  }
}
@media (max-width: 1050px) {
  ul {
    width: 75%;
  }
  .taskTitle {
    width: 85%;
  }
}
@media (max-width: 768px) {
  ul {
    width: 100%;
  }
  li {
    padding: 4px;
  }
  .deleteBtn {
    padding: 16px;
  }
}
@media (max-width: 600px) {
  li {
    width: 95%;
  }
}
@media (max-width: 300px) {
  .deleteBtn {
    display: none;
  }
}
</style>
