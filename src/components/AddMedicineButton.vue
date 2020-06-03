<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" color="success" type="line" icon="add" size="small">Add</vs-button>
    <vs-popup class="holamundo" title="Add Medication" :active.sync="popupActivo">
      <vs-input
        label="Medicine Name"
        class="inputx"
        placeholder="Search Medicine..."
        v-model="medName"
      />
      <vs-input label="Strength" class="inputx" placeholder="e.g. 500 mg" v-model="medDose" />
      <vs-input label="Quantity" class="inputx" placeholder="e.g. 2" v-model="medQuantity" />
      <vs-button
        class="btn"
        color="success"
        type="border"
        icon="done"
        :disabled="true"
        @click="popupActivo=false"
      >Done</vs-button>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medName: "",
      medDose: "",
      medQuantity: "",
      popupActivo: false
    };
  }
};
</script>

<style scoped>
.inputx {
  margin: 10px;
  width: 90%;
}

.btn {
  margin: 10px;
}
</style>