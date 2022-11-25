export const apiURL = 'http://127.0.0.1/api/';

export const ENDPOINTS = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    GET_USER: 'auth/getUser'
  },
  LOCATION: {
    GET_PROVINCES: 'location/getProvinces',
    GET_CITIES: 'location/getCities',
  }
};

export const LOCAL_STORAGE = {
  API_TOKEN: 'API_TOKEN',
  USER_NAME: 'USER_NAME',
  USER_SURNAME: 'USER_SURNAME',
  USER_ROLE: 'USER_ROLE',
};