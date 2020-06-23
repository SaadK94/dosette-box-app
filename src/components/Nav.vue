<template>
  <vs-row>
    <vs-navbar type="gradient" class="navbarx" color="rgba(65, 182, 230, .9)">
      <div slot="title">
        <vs-navbar-title class="title">My Dosette Box</vs-navbar-title>
      </div>
      <vs-navbar-item v-if="isAuthenticated">
        <vs-button @click="logout" color="rgb(0, 48, 135)">Logout</vs-button>
      </vs-navbar-item>
    </vs-navbar>
  </vs-row>
</template>

<script>
import { AUTH_LOGOUT } from "../store/mutation-types";

export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch(AUTH_LOGOUT);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.title {
  color: rgb(35, 31, 32);
  font-size: 1.6em;
  font-weight: 700;
  width: 215px;
}
.navbarx {
  height: 40px;
}
</style>