const initialState = {
  taskList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_TASK":
      return { ...state, taskList: payload };

    default:
      return state;
  }
};
