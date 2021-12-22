import { SET_BUDGET, SET_INFO } from "../actions/movieActions";

const initialState = {
  info: {
    title: '',
    genre: '',
    description: '',
    leadActor: '',
  },
  budget: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        info: action.payload
      }
    case SET_BUDGET:
      return {
        ...state,
        budget: action.payload
      }
    default:
      return state;
  }
}