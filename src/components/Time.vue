<template>
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-sm="12" vs-lg="6">
    <vs-card actionable class="cardx" fixedHeight>
      <div slot="header">
        <h3>TIME?!?!?!</h3>
      </div>
      <slot></slot>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          <app-add-medicine></app-add-medicine>
        </vs-row>
      </div>
    </vs-card>
  </vs-col>
</template>

<script>
import AddMedicine from "./AddMedicine.vue";

export default {
  components: {
    appAddMedicine: AddMedicine
  }
};
</script>

<style scoped>
.cardx {
  margin: 15px;
}
</style>