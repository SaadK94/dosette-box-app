<template>
  <vs-row id="main" vs-justify="center" class="full-card">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-sm="6" vs-xs="8">
      <vs-card class="card">
        <div slot="header">
          <vs-row class="card-header" vs-justify="center">
            <h3>Register</h3>
          </vs-row>
        </div>
        <div class="card-body">
          <vs-row vs-justify="center">
            <form @submit.prevent="doPasswordsMatch">
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
              <vs-input
                :danger="confirmPasswordIcon.danger"
                danger-text="Passwords don't match"
                valIconDanger="clear"
                :icon-after="confirmPasswordIcon.iconAfter"
                :icon="confirmPasswordIcon.icon"
                label-placeholder="Confirm Password"
                v-model="confirmPassword"
                type="password"
                required
              />
              <vs-row vs-justify="center">
                <vs-button color="rgb(0, 48, 135)" button="submit" class="btn">Register</vs-button>
              </vs-row>
            </form>
          </vs-row>
        </div>
        <div slot="footer">
          <vs-row vs-justify="center">Already have an account?</vs-row>
          <vs-row vs-justify="center">
            <router-link to="/login">Login</router-link>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import { AUTH_REGISTER } from "../store/mutation-types";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      emailIcon: {
        danger: false,
        icon: "email",
        iconAfter: true
      },
      passwordIcon: {
        danger: false,
        icon: "lock",
        iconAfter: true
      },
      confirmPasswordIcon: {
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
      if (this.errorMessage === "Email already in use") {
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
    async signup() {
      const { email, password } = this;
      await this.$store.dispatch(AUTH_REGISTER, { email, password });
      if (!this.errorMessage) {
        this.$router.push("/login");
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
    },
    confirmPasswordIconReset() {
      this.confirmPasswordIcon.danger = false;
      this.confirmPasswordIcon.icon = "lock";
      this.confirmPasswordIcon.iconAfter = true;
    },
    doPasswordsMatch() {
      this.passwordIconReset();
      this.emailIconReset();
      this.confirmPasswordIconReset();

      if (this.password !== this.confirmPassword) {
        this.confirmPasswordIcon.danger = true;
        this.confirmPasswordIcon.icon = "";
        this.confirmPasswordIcon.iconAfter = false;
      }
      if (this.password == this.confirmPassword) {
        this.signup();
      }
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
.btn {
  width: 100%;
  margin-top: 12%;
}
.card-body .vs-input {
  margin-top: 12%;
}
.card-header {
  color: rgb(0, 94, 184);
  font-size: 1.3em;
}
</style>