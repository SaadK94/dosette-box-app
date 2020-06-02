<template>
  <div>
    <app-day></app-day>
    <app-day></app-day>
    <app-day></app-day>
    <app-day></app-day>
    <app-day></app-day>
    <app-day></app-day>
    <app-day></app-day>
  </div>
</template>

<script>
import Day from "./Day.vue";

export default {
  components: {
    appDay: Day
  }
};
</script>

<style>
</style>