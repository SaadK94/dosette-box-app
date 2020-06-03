<template>
  <div>
    <form @submit.prevent="login">
      <h1>Login</h1>
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="Email" />
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password" />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../store/mutation-types";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>