export const SET_CITY = 'SET_CITY';
export const GET_WEATHER_INFO = 'GET_WEATHER_INFO';

export const setCity = city => {
  return {
    type: SET_CITY,
    city,
  };
};
