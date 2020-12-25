import state from "./moduleToDoState.js";
import mutations from "./moduleToDoMutations.js";
import actions from "./moduleToDoActions.js";
import getters from "./moduleToDoGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
