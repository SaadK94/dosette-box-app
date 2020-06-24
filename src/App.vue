<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "./store/mutation-types";
import axios from "./axios-instance";
import Nav from "./components/Nav.vue";

export default {
  created() {
    axios.interceptors.response.use(undefined, err => {
      return new Promise((resolve, reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT);
          this.$router.push("/login");
        }
        throw err;
      });
    });
  },
  components: {
    appNav: Nav
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: url(./assets/pill-wallpaper5.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
