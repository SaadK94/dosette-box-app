<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" type="line" icon="edit" size="small"></vs-button>
    <vs-popup class="holamundo" title="Edit Medication" :active.sync="popupActivo">
      <vs-input
        label="Medicine Name"
        class="inputx"
        placeholder="Search Medicine..."
        v-model="medName"
      />
      <vs-input label="Strength" class="inputx" placeholder="e.g. 500 mg" v-model="medDose" />
      <vs-input label="Quantity" class="inputx" placeholder="e.g. 2" v-model="medDose" />
      <vs-row type="flex" vs-justify="space-between">
        <vs-button
          class="btn"
          color="success"
          type="border"
          icon="done"
          :disabled="false"
          @click="popupActivo=false"
        >Done</vs-button>
        <vs-button
          class="btn"
          color="danger"
          type="border"
          icon="delete"
          @click="popupActivo=false"
        >Delete</vs-button>
      </vs-row>
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
  width: 96%;
}

.btn {
  margin: 10px;
}
</style>