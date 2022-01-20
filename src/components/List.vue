<template>
  <ul>
    <li v-for="{ title } in tasks" :key="title">
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
  border: none;
  text-align: center;
  display: block;
  padding: 15px;
  margin: 10px auto;
  width: 90%;
}
li {
  text-align: left;
  border-radius: 7px;
  text-indent: 15px;
  background: white;
  width: 100%;
  height: 50px;
  line-height: 12.5px;
  color: black;
  display: block;
  margin: 10px auto;
}
.taskTitle {
  text-indent: 0;
  text-align: left;
  width: 75%;
  border: 2px solid rgba(0, 0, 0, 0);
  display: inline-block;
}
.deleteBtn {
  float: right;
  width: 50px;
  height: 50px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 7px;
  cursor: pointer;
}

@media (max-width: 400px) {
  ul {
    width: 85%;
  }
  li {
    height: 40px;
    line-height: 5px;
  }
  .deleteBtn {
    width: 40px;
    height: 40px;
    font-size: 13px;
  }
}
@media (max-width: 350px) {
  li {
    height: 40px;
    line-height: 10px;
  }
}
@media (max-width: 300px) {
  .taskTitle {
    width: 65%;
  }
}
@media (max-width: 265px) {
  ul {
    width: 80%;
  }
  .taskTitle {
    width: 45%;
  }
}
</style>
