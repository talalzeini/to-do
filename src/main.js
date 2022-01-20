import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPlus);

createApp(App)
  .use(router)
  .mount("#app");
