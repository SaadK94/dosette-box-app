<template >
  <div>
    <vs-table :data="teaTimeMeds">
      <template slot="thead">
        <vs-th>Medicine</vs-th>
        <vs-th>Strength</vs-th>
        <vs-th>Quantity</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" v-for="(tr) in data">
          <vs-td :data="tr.medicineName">{{tr.name}}</vs-td>

          <vs-td :data="tr.strength">{{tr.strength}}</vs-td>

          <vs-td :data="tr.quantity">{{tr.quantity}}</vs-td>

          <template class="expand-user" slot="expand">
            <div class="con-expand-users">
              <div class="con-btns-user">
                <div>
                  <vs-button type="line" size="small" color="primary" icon="edit">Edit</vs-button>
                  <vs-button type="line" size="small" color="danger" icon="delete_sweep">Remove</vs-button>
                </div>
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    teaTimeMeds() {
      return this.$store.getters.getTeaTime;
    }
  }
};
</script>

<style>
.con-expand-users .con-btns-user {
  display: flex;
  padding: 10px;
  padding-bottom: 0px;
  align-items: center;
  justify-content: space-between;
}
</style>