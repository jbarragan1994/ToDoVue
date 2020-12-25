export default {
  setNewsList(state, value) {
    state.newsList = value;
  },
  setRegistersFields(state, value) {
    state.toDoFields.push(value);
  },
  updateRegister(state, value) {
    state.toDoFields[value.id] = value;
  },
  updateFavorite(state, value) {
    if (state.toDoFields[value].favorite == true) {
      state.toDoFields[value].favorite = false;
    } else {
      state.toDoFields[value].favorite = true;
    }
  },
  finalizedElement(state, value) {
    if (state.toDoFields[value].finalized == true) {
      state.toDoFields[value].finalized = false;
    } else {
      state.toDoFields[value].finalized = true;
    }
  },
  setUpdateRegisters(state, value) {
    /* let arr = state.toDoFields.filter(parameter => {
      return parameter.deleted == false;
    });
    state.toDoUpdate = arr[value]; */
    state.toDoUpdate = state.toDoFields[value];
    state.toDoUpdate.id = value;
  },
  deleteRegisters(state, value) {
    state.toDoFields[value].deleted = true;
  }
};
