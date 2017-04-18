const initialState = [];

export default function playlist(state = initialState, action) {
  if (action.type === 'CHANGE_TOM_TO') {
    return action.payload;
  }
  return state;
}
