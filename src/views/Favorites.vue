<template>
  <div>
    <h2>Favoritos</h2>
    <div class="container">
      <div class="text-right m-auto p-relative">
        <button class="btn btn-secondary mb-3 m-2" @click="back()">
          Ir a la lista
        </button>
      </div>
      <table id="customers">
        <tr>
          <th class="text-center">Contenido</th>
          <th class="text-center">Favorito</th>
          <th class="text-center">Fecha de creación</th>
        </tr>
        <tr v-if="ToDoList.length == 0">
          <td colspan="100%" class="align-middle text-center">
            No existen registros.
          </td>
        </tr>
        <tr
          v-else
          v-for="(item, index) in ToDoList"
          :key="`item-${index}`"
          class="text-center"
        >
          <td>{{ item.content }}</td>
          <td><toggle-button :value="item.favorite" /></td>
          <td>{{ item.date }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "favorites",
  methods: {
    back() {
      this.$router.push("/");
    }
  },
  computed: {
    ToDoList() {
      return this.$store.getters["toDo/ToDoList"].filter(parameter => {
        return parameter.favorite == true;
      });
    }
  }
};
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

.pointer {
  cursor: pointer;
}
</style>
