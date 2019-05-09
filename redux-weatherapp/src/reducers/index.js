import { SET_CITY, GET_WEATHER_INFO } from '../actions';

import data from '../data.json';

const initState = {
  currCity: data[0],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        currCity: action.city ? action.city : state.currCity,
      };
    default:
      return state;
  }
};

export default reducer;
