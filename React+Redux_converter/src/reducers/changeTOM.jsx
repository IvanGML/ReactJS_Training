const initialState = [true];

export default function playlist(state = initialState, action) {
  if (action.type === 'CHANGE_TOM') {
    return !state;
  }
  return state;
}
