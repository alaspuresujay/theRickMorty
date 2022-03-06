import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

export const getCharacters = async page => {
  var config = {
    method: 'get',
    url: `${baseUrl}/character?page=${page}`,
    headers: {},
  };
  console.log('Fetching data from API', config.url);
  try {
    const response = await axios(config);
    return {
      data: response.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const getLocations = async id => {
  var config = {
    method: 'get',
    url: `${baseUrl}/location/${id}`,
    headers: {},
  };
  console.log('Fetching data from API', config.url);

  try {
    const response = await axios(config);
    return {
      data: response.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
export const getEpisodes = async ids => {
  var config = {
    method: 'get',
    url: `${baseUrl}/episode/${ids}`,
    headers: {},
  };
  console.log('Fetching data from API', config.url);

  try {
    const response = await axios(config);
    return {
      data: response.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
