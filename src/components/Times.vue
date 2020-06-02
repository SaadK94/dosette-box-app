<template>
  <vs-row vs-justify="center">
    <app-time>
      <app-morning-table></app-morning-table>
    </app-time>
    <app-time>
      <app-mid-day-table></app-mid-day-table>
    </app-time>
    <app-time>
      <app-tea-time-table></app-tea-time-table>
    </app-time>
    <app-time>
      <app-bed-time-table></app-bed-time-table>
    </app-time>
  </vs-row>
</template>

<script>
import Time from "./Time";
import MorningTable from "./tables/MorningTable.vue";
import MidDayTable from "./tables/MidDayTable.vue";
import TeaTimeTable from "./tables/TeaTimeTable.vue";
import BedTimeTable from "./tables/BedTimeTable.vue";

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
    appMorningTable: MorningTable,
    appMidDayTable: MidDayTable,
    appTeaTimeTable: TeaTimeTable,
    appBedTimeTable: BedTimeTable
  }
};
</script>