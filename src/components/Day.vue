<template>
  <div>
    <vs-collapse :type="type">
      <vs-collapse-item>
        <div slot="header">DAY WILL SHOW HERE</div>
        <app-times></app-times>
      </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
import Times from "./Times.vue";

export default {
  data() {
    return {
      type: "margin"
    };
  },
  computed: {},
  components: {
    appTimes: Times
  }
};
</script>

<style scoped>
.con-radios-example {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 5px;

  .con-vs-radio {
    margin: 5px;
  }
}
</style>