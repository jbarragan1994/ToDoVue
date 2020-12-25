import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moduleToDo from "./to-do/moduleToDo.js";

export default new Vuex.Store({
  modules: {
    toDo: moduleToDo
  }
});
