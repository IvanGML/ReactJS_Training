const initialState = [];

export default function dispatch(state = initialState, action) {
  if (action.type === 'INPUT_TO_STORE') {
    return action.payload;
  }
  return state;
}
