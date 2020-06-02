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
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch(AUTH_LOGOUT);
          // you can also redirect to /login if needed !
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
</style>
