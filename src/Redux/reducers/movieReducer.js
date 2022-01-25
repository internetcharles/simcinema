import { SET_ADVERTISING, SET_BUDGET, SET_INFO } from "../actions/movieActions";

const initialState = {
  info: {
    title: '',
    genre: '',
    description: '',
    leadActor: '',
    leadActress: '',
    composer: '',
    sfx: '',
    audio: '',
  },
  budget: 0,
  adInfo: {
    hype: 0,
    activeAds: {
      tvCommercials: 0,
      movieTrailers: 0,
      magazineNewspaperAds: 0,
      posters: 0,
    }
  }
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
    case SET_ADVERTISING:
      return {
        ...state,
        adInfo: action.payload
      }
    default:
      return state;
  }
}