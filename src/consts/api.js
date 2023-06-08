export const ENDPOINTS = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    GET_USER: 'auth/getUser',
    GET_USER_INFO: 'auth/getUserInfo',
    UPDATE: '/auth/update',
    FAVOURITE: '/auth/favourite',
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
    UPDATE: 'animals/update',
    UPDATE_IMAGE: 'animals/updateImage',
    STORE_FOSTERING: 'animals/storeFostering',
    DELETE_FOSTERING: 'animals/deleteFostering',
  },
  ASSOCIATION: {
    GET_FILTERED_ASSOCIATIONS: 'associations/getFilteredAssociations',
    GET_ASSOCIATION_INFO: 'associations/getAssociationInfo',
  }
};