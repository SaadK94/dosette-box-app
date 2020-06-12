<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" color="success" type="line" icon="add" size="small">Add</vs-button>
    <vs-popup class="holamundo" title="Add Medication" :active.sync="popupActivo">
      <form @submit.prevent="addMedicine">
        <vs-input
          label="Medicine Name"
          class="inputx"
          placeholder="Search Medicine..."
          v-model="name"
          required
        />
        <vs-input
          label="Strength"
          class="inputx"
          placeholder="e.g. 500 mg"
          v-model="strength"
          required
        />
        <vs-input
          type="number"
          label="Quantity"
          class="inputx"
          placeholder="e.g. 2"
          v-model="quantity"
          required
        />
        <vs-button
          class="btn"
          color="success"
          type="border"
          icon="done"
          :disabled="false"
          button="submit"
        >Done</vs-button>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import { DOSETTE_ADD } from "../store/mutation-types";

export default {
  props: ["time"],
  data() {
    return {
      name: "",
      strength: "",
      quantity: "",
      popupActivo: false
    };
  },
  methods: {
    async addMedicine() {
      const data = {
        time: this.time[1],
        name: this.name,
        strength: this.strength,
        quantity: this.quantity
      };
      await this.$store.dispatch(DOSETTE_ADD, data);
      this.name = this.strength = this.quantity = "";
      this.popupActivo = false;
    }
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