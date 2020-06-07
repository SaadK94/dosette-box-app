<template>
  <div>
    <vs-navbar type="gradient" v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>My Dosette Box</vs-navbar-title>
      </div>

      <vs-navbar-item v-if="!auth" index="0">
        <router-link to="/register">Register</router-link>
      </vs-navbar-item>
      <vs-navbar-item v-if="!auth" index="1">
        <router-link to="/login">Login</router-link>
      </vs-navbar-item>
      <vs-navbar-item v-if="auth" index="2">
        <vs-button type="gradient" size="small " @click="logout">Logout</vs-button>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../store/mutation-types";

export default {
  data: () => ({
    activeItem: 0
  }),
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
* {
  margin-bottom: 10px;
}
</style>