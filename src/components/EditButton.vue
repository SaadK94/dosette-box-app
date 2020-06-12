<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" type="line" icon="edit" size="small"></vs-button>
    <vs-popup class="holamundo" title="Edit Medication" :active.sync="popupActivo">
      <form @submit.prevent="editMedicine">
        <vs-input label="Medicine Name" class="inputx" v-model="name" required />
        <vs-input label="Strength" class="inputx" v-model="strength" required />
        <vs-input label="Quantity" class="inputx" v-model="quantity" type="number" required />
        <vs-row type="flex" vs-justify="space-between">
          <vs-button
            class="btn"
            color="success"
            type="border"
            icon="done"
            :disabled="false"
            button="submit"
          >Done</vs-button>
          <vs-button
            class="btn"
            color="danger"
            type="border"
            icon="delete"
            @click="deleteMedicine"
          >Delete</vs-button>
        </vs-row>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import { DOSETTE_DELETE, DOSETTE_EDIT } from "../store/mutation-types";

export default {
  data() {
    return {
      popupActivo: false,
      name: this.medName || "",
      strength: this.medStrength || "",
      quantity: this.medQuantity || ""
    };
  },
  props: ["data", "time", "medName", "medStrength", "medQuantity"],
  methods: {
    async editMedicine() {
      const data = {
        time: this.time[1],
        name: this.name,
        strength: this.strength,
        quantity: this.quantity,
        id: this.data._id
      };
      this.popupActivo = false;
      await this.$store.dispatch(DOSETTE_EDIT, data);
    },
    async deleteMedicine() {
      const data = {
        time: this.time[1],
        name: this.name,
        strength: this.strength,
        quantity: this.quantity,
        id: this.data._id
      };
      this.popupActivo = false;
      await this.$store.dispatch(DOSETTE_DELETE, data);
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