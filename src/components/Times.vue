<template>
  <vs-row vs-justify="center">
    <!-- Use a loop -->
    <app-time class="cardx" :time="time.morning">
      <app-table :time="time.morning" :medicines="medicines.morning"></app-table>
    </app-time>
    <app-time class="cardx" :time="time.midDay">
      <app-table :time="time.midDay" :medicines="medicines.midDay"></app-table>
    </app-time>
    <app-time class="cardx" :time="time.teaTime">
      <app-table :time="time.teaTime" :medicines="medicines.teaTime"></app-table>
    </app-time>
    <app-time class="cardx" :time="time.bedtime">
      <app-table :time="time.bedtime" :medicines="medicines.bedtime"></app-table>
    </app-time>
  </vs-row>
</template>

<script>
import Time from "./Time";
import Table from "./Table.vue";

export default {
  data() {
    return {
      time: {
        morning: ["Morning", "morning"],
        midDay: ["Mid-day", "midDay"],
        teaTime: ["Tea-time", "teaTime"],
        bedtime: ["Bedtime", "bedtime"]
      }
    };
  },
  components: {
    appTime: Time,
    appTable: Table
  },
  computed: {
    medicines() {
      return this.$store.getters.getDosette;
    }
  }
};
</script>

<style scoped>
.cardx {
  margin: 2%;
}
</style>
