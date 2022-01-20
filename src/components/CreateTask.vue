<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input placeholder="Add a Task..." v-model="form.title" required />
      </div>
      <button style="color: black" class="addTaskBtn" type="submit">
        <font-awesome-icon icon="plus" />
      </button>
      <List />
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
    FontAwesomeIcon,
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
  font-size: 16px;
}
form {
  border: none;
  width: 50%;
  margin: 100px auto 0;
  display: block;
}
input {
  border-radius: 7px;
  border: none;
  background: white;
  outline: none;
  display: block;
  color: black;
  margin: 20px auto;
  width: 90%;
  height: 50px;
  text-indent: 15px;
  transition: 0.5s;
}
input::placeholder {
  color: black;
}
.addTaskBtn {
  margin: 0 auto;
  display: block;
  background-color: white;
  color: black;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 7px;
  cursor: pointer;
}
.addTaskBtn:hover,
input:hover {
  background: #eeeeee;
  transition: 0.5s;
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
@media (max-width: 400px) {
  input {
    width: 85%;
    height: 40px;
  }
  .addTaskBtn {
    width: 40px;
    height: 40px;
    font-size: 13px;
  }
}
@media (max-width: 350px) {
  * {
    font-size: 13px;
  }
}

@media (max-width: 265px) {
  input {
    width: 80%;
  }
}
@media (max-width: 200px) {
  * {
    display: none;
  }
}
</style>
