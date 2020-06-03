<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <app-times></app-times>
    </vs-col>
  </vs-row>
</template>

<script>
import Times from "./Times.vue";

export default {
  data() {
    return {};
  },
  components: {
    appTimes: Times
  }
};
</script>

<style scoped>
</style>