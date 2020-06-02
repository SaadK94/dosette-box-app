<template>
  <div>
    <h1>Logout?</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../store/mutation-types";

export default {
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>