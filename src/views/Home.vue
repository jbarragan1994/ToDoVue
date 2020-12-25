<template>
  <div>
    <h2>To do</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <select
                name="search"
                class="form-control"
                v-model="search.favorite"
              >
                <option value="">Buscar</option>
                <option :value="true">Favoritos</option>
                <option :value="false">No Favoritos</option>
              </select>
            </div>
            <div class="col-md-6">
              <input type="date" class="form-control" v-model="search.date" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-right m-auto p-relative">
            <button class="btn btn-success mb-3 mr-2" @click="addRegister()">
              Agregar <font-awesome-icon icon="plus-circle" />
            </button>
            <button class="btn btn-info mb-3 mr-2" @click="goFavorites()">
              Mostrar favoritos
            </button>
            <button
              v-if="selectCheck"
              class="btn btn-danger mb-3 m-2"
              @click="deleteRegiters()"
            >
              Eliminar registros
            </button>
            <button v-else class="btn btn-danger mb-3" disabled>
              Eliminar registros
            </button>
          </div>
        </div>
      </div>
      <table id="customers">
        <tr>
          <th class="text-center"></th>
          <th class="text-center">Contenido</th>
          <th class="text-center">Favorito</th>
          <th class="text-center">Fecha de creación</th>
          <th class="text-center">Finalizado</th>
          <th class="text-center">Opciones</th>
        </tr>
        <tr v-if="ToDoListHome.length == 0">
          <td colspan="100%" class="align-middle text-center">
            No existen registros.
          </td>
        </tr>
        <tr
          v-else
          v-for="(item, index) in ToDoListHome"
          :key="`item-${index}`"
          class="text-center"
        >
          <td>
            <input type="checkbox" @change="checkboxDelete(index)" />
          </td>
          <td>{{ item.content }}</td>
          <td>
            <toggle-button
              :value="item.favorite"
              @change="changeFavorite(index)"
            />
          </td>
          <td>{{ item.date }}</td>
          <td>
            <toggle-button
              :value="item.finalized"
              @change="finalizedElement(index)"
            />
          </td>
          <td>
            <div v-if="!item.finalized">
              <a class="ml-2 pointer text-muted">
                <font-awesome-icon icon="edit" @click="editRegister(index)" />
              </a>
              <a class="ml-2 pointer text-muted" @click="deleteRegister(index)">
                <font-awesome-icon icon="trash" />
              </a>
            </div>
            <div v-else>
              <span class="text-danger">Finalizado</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      selectCheck: false,
      checkDelete: [],
      search: [],
      searchDate: ""
    };
  },
  methods: {
    addRegister() {
      this.$router.push("/create");
    },
    goFavorites() {
      this.$router.push("/favorites");
    },
    editRegister(id) {
      this.$store.commit("toDo/setUpdateRegisters", id);
      this.$router.push("/update");
    },
    deleteRegister(id) {
      this.$store.getters["toDo/ToDoList"].splice(id, 1);
    },
    deleteRegiters() {
      /* for (let i = 0; i < this.checkDelete.length; i++) {
				this.deleteRegister(this.checkDelete[i])
			} */
    },
    checkboxDelete(id) {
      let arrInclude = this.checkDelete.includes(id);
      if (!arrInclude) {
        this.checkDelete.push(id);
      } else {
        this.checkDelete.splice(id, 1);
      }
      this.selectCheck = true;
    },
    changeFavorite(id) {
      this.$store.commit("toDo/updateFavorite", id);
    },
    finalizedElement(id) {
      this.$store.commit("toDo/finalizedElement", id);
    }
  },
  computed: {
    ToDoListHome() {
       return this.$store.getters["toDo/ToDoList"].filter(parameter => {
        if (this.search.favorite != undefined) {
          switch (this.search.favorite) {
            case "":
              return parameter;
              break;
            case true:
              return parameter.favorite == true;
              break;
            case false:
              return parameter.favorite == false;
              break;
          }
        } else if (this.search.date != undefined) {
          return parameter.date == this.search.date;
        } else {
          return parameter;
        }
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
