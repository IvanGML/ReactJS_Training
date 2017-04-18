const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

export default function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
