<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>My Dosette Box</vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link to="/dashboard">Dosette Box</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/register">Register</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/login">Login</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/logout">Logout</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeItem: 0
  })
};
</script>