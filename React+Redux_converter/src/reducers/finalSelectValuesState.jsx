const Lenght = [ 'mm', 'm', 'km' ];
const Weight = [ 'g', 'kg', 't' ];
const Temperature = [ 'c', 'f' ];

export default function reduce(state = Weight, action) {
  if (action.type === 'CHANGE_TOM_TO_FINAL') {
    if(action.payload === 'Weight'){
        return state = Weight;
    } else if(action.payload === 'Length'){
        return state = Lenght;
    } else if(action.payload === 'Temperature'){
        return state = Temperature;
    }
    return state;
  } 
  if (action.type === 'RESET_MEASUREMENTS_TO_DEFAULT') {
      return state = Weight;
  }
  return state;
}


