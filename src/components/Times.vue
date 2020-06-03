<template>
  <vs-row vs-justify="center">
    <app-time :time="time.morning">
      <app-table :medicines="medicines.morning"></app-table>
    </app-time>
    <app-time :time="time.midDay">
      <app-table :medicines="medicines.midDay"></app-table>
    </app-time>
    <app-time :time="time.teaTime">
      <app-table :medicines="medicines.teaTime"></app-table>
    </app-time>
    <app-time :time="time.bedtime">
      <app-table :medicines="medicines.bedtime"></app-table>
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
        morning: "Morning",
        midDay: "Mid-day",
        teaTime: "Tea-time",
        bedtime: "Bedtime"
      }
    };
  },
  components: {
    appTime: Time,
    appTable: Table
  },
  computed: {
    medicines() {
      return this.$store.getters.getMedicines;
    }
  }
};
</script>

