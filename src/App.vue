<template>
  <div id="app">
    <Salas v-if="user"></Salas>
    <Login v-else></Login>
  </div>
</template>

<script>
import Login from "./components/Login";
import Salas from "./components/Salas";
import firebase from "firebase";

export default {
  data() {
    return {
      user: firebase.auth().currentUser,
    };
  },
  name: "App",
  components: {
    Login,
    Salas,
  },
};
</script>

<style>
body {
  background-color: white;
}
</style>
