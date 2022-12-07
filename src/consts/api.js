export const apiURL = 'http://127.0.0.1/api/';

export const ENDPOINTS = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    GET_USER: 'auth/getUser',
    GET_USER_INFO: 'auth/getUserInfo',
    UPDATE: '/auth/update',
  },
  LOCATION: {
    GET_PROVINCES: 'location/getProvinces',
    GET_CITIES: 'location/getCities',
  },
  ANIMAL: {
    GET_FILTERED_ANIMALS: 'animals/getFilteredAnimals',
    GET_ANIMAL_INFO: 'animals/getAnimalInfo',
    GET_SPECIES: 'animals/getSpecies',
    GET_BREEDS: 'animals/getBreeds',
    GET_SIZES: 'animals/getSizes',
    CREATE: 'animals/create',
  }
};

export const LOCAL_STORAGE = {
  API_TOKEN: 'API_TOKEN',
  USER_NAME: 'USER_NAME',
  USER_SURNAME: 'USER_SURNAME',
  USER_ROLE: 'USER_ROLE',
};