const initialState = [];

export default function dispatch(state = initialState, action) {
  if (action.type === 'INPUT_CUSTOM_TO_STORE') {
    return action.payload;
  }
  return state;
}
