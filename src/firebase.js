import firebase from "firebase/app";
import "firebase/firestore";

import { ref, onUnmounted } from "vue";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

const db = firebaseApp.firestore();
const tasksCollection = db.collection("tasks");

export const createTask = (task) => {
  return tasksCollection.add(task);
};

export const deleteTask = (id) => {
  return tasksCollection.doc(id).delete();
};
export const LoadTasks = () => {
  const tasks = ref([]);
  const close = tasksCollection.onSnapshot((snapshot) => {
    tasks.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return tasks;
};
export default firebase;
