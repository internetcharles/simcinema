import { SET_INFO } from "../actions/movieActions";

const initialState = {
  info: {
    title: '',
    genre: '',
    description: '',
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        info: action.payload
      }
    default:
      return state;
  }
}