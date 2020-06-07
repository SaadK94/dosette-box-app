<template>
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-sm="12" vs-lg="6">
    <vs-card actionable fixedHeight>
      <vs-row slot="header" type="flex" vs-justify="space-between" vs-align="center">
        <h3>{{time[0]}}</h3>
        <app-add-medicine-button :time="time"></app-add-medicine-button>
      </vs-row>
      <slot></slot>
    </vs-card>
  </vs-col>
</template>

<script>
import AddMedicineButton from "./AddMedicineButton.vue";

export default {
  props: ["time"],
  components: {
    appAddMedicineButton: AddMedicineButton
  }
};
</script>

<style scoped>
</style>