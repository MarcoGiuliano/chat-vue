import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";

Vue.config.productionTip = false;

// NOTE: PASTE YOUR OWN CONFIG HERE!

const firebaseConfig = {
  apiKey: "AIzaSyDYWPHdLMvrymHp89uEBX5_-VOMzqLzUPM",
  authDomain: "vue-chat-89eb7.firebaseapp.com",
  projectId: "vue-chat-89eb7",
  storageBucket: "vue-chat-89eb7.appspot.com",
  messagingSenderId: "646903755358",
  appId: "1:646903755358:web:faf3b8f664ca07df2d3acf",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() =>
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app")
);
