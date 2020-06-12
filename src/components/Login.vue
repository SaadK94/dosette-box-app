<template>
  <vs-row vs-justify="center" class="full-card">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-sm="6" vs-xs="8">
      <vs-card class="card">
        <div slot="header">
          <vs-row vs-justify="center">
            <h3>Login</h3>
          </vs-row>
        </div>
        <div class="card-body">
          <vs-row vs-justify="center">
            <form @submit.prevent="login">
              <vs-input
                :danger="emailIcon.danger"
                :danger-text="errorMessage"
                valIconDanger="clear"
                :icon-after="emailIcon.iconAfter"
                :icon="emailIcon.icon"
                label-placeholder="Email"
                v-model="email"
                type="email"
                required
              />
              <vs-input
                :danger="passwordIcon.danger"
                :danger-text="errorMessage"
                valIconDanger="clear"
                :icon-after="passwordIcon.iconAfter"
                :icon="passwordIcon.icon"
                label-placeholder="Password"
                v-model="password"
                type="password"
                required
              />
              <vs-row vs-justify="center">
                <vs-button type="gradient" button="submit" class="btn">Login</vs-button>
              </vs-row>
            </form>
          </vs-row>
        </div>
        <div slot="footer">
          <vs-row vs-justify="center">Don't have an account?</vs-row>
          <vs-row vs-justify="center">
            <router-link to="/register">Register</router-link>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import { AUTH_REQUEST } from "../store/mutation-types";
import pictre from "../assets/meds.jpg";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailIcon: {
        danger: false,
        icon: "email",
        iconAfter: true
      },
      passwordIcon: {
        danger: false,
        icon: "lock",
        iconAfter: true
      }
    };
  },
  computed: {
    errorMessage() {
      return this.$store.getters.getErrorMessage;
    }
  },
  watch: {
    errorMessage() {
      if (this.errorMessage === "Email not found") {
        this.passwordIconReset();
        this.emailIcon.danger = true;
        this.emailIcon.icon = "";
        this.emailIcon.iconAfter = false;
      }
      if (this.errorMessage === "Incorrect password") {
        this.emailIconReset();
        this.passwordIcon.danger = true;
        this.passwordIcon.icon = "";
        this.passwordIcon.iconAfter = false;
      }
    }
  },
  methods: {
    async login() {
      const { email, password } = this;
      await this.$store.dispatch(AUTH_REQUEST, { email, password });
      if (!this.errorMessage) {
        this.$router.push("/");
      }
    },
    emailIconReset() {
      this.emailIcon.danger = false;
      this.emailIcon.icon = "email";
      this.emailIcon.iconAfter = true;
    },
    passwordIconReset() {
      this.passwordIcon.danger = false;
      this.passwordIcon.icon = "lock";
      this.passwordIcon.iconAfter = true;
    }
  }
};
</script>

<style scoped>
h3 {
  font-size: 150%;
}
.full-card {
  margin-top: 7%;
}
.card {
  height: 100%;
}
.card-body {
  margin-top: 2%;
}
.card-body .vs-input {
  margin-top: 12%;
}
.btn {
  width: 100%;
  margin-top: 12%;
}
</style>