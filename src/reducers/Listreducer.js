import {
  ADD_LIST,
  DELETE_LIST,
  COMPLETE_LIST,
  EDIT_LIST,
 
} from "../actions/constant";


const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state,action.payload];

    case DELETE_LIST:
      return state.filter(el => el.key !== action.payload);

    case COMPLETE_LIST:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );
    case EDIT_LIST:
      return state.map(el =>
        el.key === action.payload.key ? { ...el, text: action.payload.text} : el
      );
      
    default:
      return  state; 
  }
};
export default reducer;
