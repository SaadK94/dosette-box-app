<template>
  <div class="centerx">
    <vs-button
      @click="popupActivo=true"
      color="rgb(0,150, 57)"
      type="line"
      icon="add"
      size="small"
    >Add</vs-button>
    <vs-popup
      style="color:rgb(0, 94, 184)"
      background-color="rgba(0, 0, 0, 0.65)"
      background-color-popup="rgb(237, 237, 238)"
      class="holamundo"
      title="Add Medication"
      :active.sync="popupActivo"
    >
      <form @submit.prevent="addMedicine" @click="isOpen= false">
        <vs-input
          label="Medicine Name"
          class="autocomplete"
          placeholder="Search Medicine..."
          v-model="name"
          required
          @input="searchMedicineDebounced"
        />
        <ul
          class="autocomplete-results"
          :style="listHeight"
          v-show="isOpen && medicineList.length > 0"
        >
          <li
            class="autocomplete-result"
            v-for="item in medicineList"
            @click="setResult(item.name)"
          >{{item.name}}</li>
        </ul>
        <vs-input
          label="Strength"
          class="inputx"
          placeholder="e.g. 500 mg"
          v-model="strength"
          @click="isOpen= false"
          required
        />
        <vs-input
          type="number"
          label="Quantity"
          class="inputx"
          placeholder="e.g. 2"
          v-model="quantity"
          @click="isOpen= false"
          required
        />
        <vs-button
          class="btn"
          color="rgb(0,150, 57)"
          type="border"
          icon="done"
          :disabled="disableButton"
          button="submit"
        >Done</vs-button>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import { DOSETTE_ADD, MEDICINE_SEARCH } from "../store/mutation-types";

export default {
  props: ["time"],
  data() {
    return {
      name: "",
      strength: "",
      quantity: "",
      popupActivo: false,
      timeoutId: null,
      isOpen: false
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
      this.isOpen = false;
    },
    async searchMedicine() {
      this.isOpen = true;
      if (!this.name) {
        this.isOpen = false;
        return;
      }
      await this.$store.dispatch(MEDICINE_SEARCH, this.name);
    },
    searchMedicineDebounced() {
      const self = this;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        self.searchMedicine();
      }, 1000);
    },
    setResult(result) {
      this.name = result;
      this.isOpen = false;
    }
  },
  computed: {
    medicineList() {
      return this.$store.getters.getMedicineList;
    },
    listHeight() {
      if (this.medicineList.length === 1) {
        return "height: 40px";
      } else if (this.medicineList.length === 2) {
        return "height: 60px";
      } else if (this.medicineList.length === 3) {
        return "height: 80px";
      } else {
        return "height: 120px";
      }
    },
    disableButton() {
      if (
        this.name === "" ||
        this.strength === "" ||
        this.quantity === "" ||
        this.quantity <= 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    popupActivo() {
      if (!this.popupActivo) {
        this.isOpen = false;
        this.name = "";
        this.strength = "";
        this.quantity = "";
      }
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

form {
  position: relative;
}

.autocomplete {
  margin: 10px;
  margin-bottom: 0;
  width: 90%;
}

.autocomplete-results {
  padding: 0;
  margin: 10px;
  margin-top: 0;
  border: 1px solid #eeeeee;
  overflow: auto;
  width: 90%;
  position: absolute;
  z-index: 99;
  background-color: white;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: rgb(0, 114, 206);
  color: white;
}
</style>