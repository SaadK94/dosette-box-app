<template>
  <div>
    <form @submit.prevent="signup">
      <h1>Register</h1>
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="Email" />
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password" />
      <hr />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REGISTER } from "../store/mutation-types";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      const { email, password } = this;
      this.$store
        .dispatch(AUTH_REGISTER, { email, password })
        .then(() => this.$router.push("/login"));
    }
  }
};
</script>
