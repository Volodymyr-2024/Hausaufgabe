const initialState = { name: "John Doe", status: "online" };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_INFO": {
      const newState = { ...state };
      if (
        newState.name !== action.payload.name ||
        newState.status !== action.payload.status
      ) {
        return { name: action.payload.name, status: action.payload.status };
      }

      return state;
    }
    default:
      return state;
  }
}
