<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input placeholder="Add a Task..." v-model="form.title" required />
      </div>
      <button style="color: black" class="addTaskBtn" type="submit">
        Add Task
      </button>
    </form>
    <List />
  </div>
</template>

<script>
import { createTask } from "@/firebase";
import { reactive } from "vue";
import List from "./List.vue";
export default {
  setup() {
    const form = reactive({ title: "" });
    const onSubmit = async () => {
      await createTask({ ...form });
      form.title = "";
    };
    return { form, onSubmit };
  },
  components: {
    List,
  },
};
</script>

<style>
body {
  background: black;
}
* {
  font-family: "Avenir";
}
form {
  width: 50%;
  border-bottom: none;
  padding: 10px;
  margin: 100px auto 0;
  display: block;
}
input {
  border-radius: 7px;
  border: none;
  background: white;
  text-indent: 15px;
  height: 50px;
  outline: none;
  display: block;
  color: black;
  margin: 20px auto;
  width: 75%;
  transition: 0.5s;
  font-size: 16px;
}
input::placeholder {
  color: black;
}
.addTaskBtn {
  margin: 0 auto;
  display: block;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  color: black;
  border: none;
  width: 20%;
  border-radius: 7px;
  cursor: pointer;
}
.addTaskBtn:hover,
input:hover {
  background: #eeeeee;
  transition: 0.5s;
}

@media (max-width: 1150px) {
  .taskTitle {
    width: 75%;
  }
}
@media (max-width: 1050px) {
  form {
    width: 75%;
  }
}
@media (max-width: 768px) {
  form {
    width: 100%;
  }
}
@media (max-width: 600px) {
  input {
    width: 95%;
  }
  .addTaskBtn {
    width: 50%;
  }
}
@media (max-width: 300px) {
  .deleteBtn {
    display: none;
  }
}
</style>
