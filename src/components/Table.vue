<template >
  <div>
    <vs-table stripe :data="medicines">
      <template slot="thead">
        <vs-th>Medicine</vs-th>
        <vs-th>Strength</vs-th>
        <vs-th>Quantity</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr v-for="tr in data">
          <vs-td>{{tr.name}}</vs-td>

          <vs-td>{{tr.strength}}</vs-td>

          <vs-td>{{tr.quantity}}</vs-td>

          <app-edit-button></app-edit-button>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import EditButton from "./EditButton.vue";

export default {
  props: ["medicines"],
  components: {
    appEditButton: EditButton
  }
};
</script> 