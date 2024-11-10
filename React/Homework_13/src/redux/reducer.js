const initialState = {
  users: [
    "Alice",
    "Adam",
    "Ava",
    "Amber",
    "Andrew",
    "Ben",
    "Blake",
    "Bella",
    "Brody",
    "Brianna",
    "Charlie",
    "Chloe",
    "Caleb",
    "Clara",
    "Connor",
    "David",
    "Dylan",
    "Daniel",
    "Daisy",
    "Debbie",
    "Eve",
    "Ethan",
    "Emily",
    "Ella",
    "Eric",
    "Frank",
    "Fiona",
    "Finn",
    "Faith",
    "Freddie",
  ],
  filter: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
