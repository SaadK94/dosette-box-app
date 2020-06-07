<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" type="line" icon="edit" size="small"></vs-button>
    <vs-popup class="holamundo" title="Edit Medication" :active.sync="popupActivo">
      <vs-input label="Medicine Name" class="inputx" v-model="medName" />
      <vs-input label="Strength" class="inputx" v-model="medStrength" />
      <vs-input label="Quantity" class="inputx" v-model="medQuantity" />
      <vs-row type="flex" vs-justify="space-between">
        <vs-button
          class="btn"
          color="success"
          type="border"
          icon="done"
          :disabled="false"
          @click="editMedicine"
        >Done</vs-button>
        <vs-button
          class="btn"
          color="danger"
          type="border"
          icon="delete"
          @click="deleteMedicine"
        >Delete</vs-button>
      </vs-row>
    </vs-popup>
  </div>
</template>

<script>
import { USER_DELETE, USER_EDIT } from "../store/mutation-types";

export default {
  data() {
    return {
      popupActivo: false
    };
  },
  props: ["data", "time", "medName", "medStrength", "medQuantity"],
  methods: {
    editMedicine() {
      const data = {
        time: this.time[1],
        name: this.medName,
        strength: this.medStrength,
        quantity: this.medQuantity,
        id: this.data._id
      };
      this.$store.dispatch(USER_EDIT, data).then(() => {
        this.popupActivo = false;
      });
    },
    deleteMedicine() {
      const data = {
        time: this.time[1],
        name: this.medName,
        strength: this.medStrength,
        quantity: this.medQuantity,
        id: this.data._id
      };
      this.$store.dispatch(USER_DELETE, data).then(() => {
        this.popupActivo = false;
      });
    }
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