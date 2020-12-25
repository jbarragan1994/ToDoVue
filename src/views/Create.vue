<template>
  <div>
    <div class="container">
      <h2 class="mb-5">Agregar registro</h2>
      <form class="form-horizontal">
        <div class="form-group row">
          <label class="control-label col-sm-2">Contenido</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="content"
              v-model="fields.content"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="control-label col-sm-2">Fecha</label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              name="date"
              v-model="fields.date"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="control-label col-sm-2">Favorito</label>
          <div class="col-sm-2">
            <div class="checkbox text-left">
              <label
                ><input
                  type="checkbox"
                  name="favorite"
                  v-model="fields.favorite"
              /></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button
              type="button"
              class="btn btn-success m-1"
              @click="addRegister()"
            >
              Guardar
            </button>
            <button type="button" class="btn btn-secondary m-1" @click="back()">
              Atras
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "create",
  data() {
    return {
      fields: {
        content: "",
        favorite: false,
        date: "",
        finalized: false,
        deleted: false
      }
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    addRegister() {
      this.$store.commit("toDo/setRegistersFields", this.fields);
      this.$router.push("/");
    }
  },
  computed: {
    registerUpdate() {
      return this.$store.state.toDo.toDoUpdate;
    }
  }
};
</script>
