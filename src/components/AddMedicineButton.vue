<template>
  <div class="centerx">
    <vs-button @click="popupActivo=true" color="success" type="line" icon="add" size="small">Add</vs-button>
    <vs-popup class="holamundo" title="Add Medication" :active.sync="popupActivo">
      <vs-input
        label="Medicine Name"
        class="inputx"
        placeholder="Search Medicine..."
        v-model="name"
      />
      <vs-input label="Strength" class="inputx" placeholder="e.g. 500 mg" v-model="strength" />
      <vs-input label="Quantity" class="inputx" placeholder="e.g. 2" v-model="quantity" />
      <vs-button
        class="btn"
        color="success"
        type="border"
        icon="done"
        :disabled="false"
        @click="addMedicine"
      >Done</vs-button>
    </vs-popup>
  </div>
</template>

<script>
import { USER_ADD } from "../store/mutation-types";

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
    addMedicine() {
      const data = {
        time: this.time[1],
        name: this.name,
        strength: this.strength,
        quantity: this.quantity
      };
      this.$store.dispatch(USER_ADD, data).then(() => {
        this.name = this.strength = this.quantity = "";
        this.popupActivo = false;
      });
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