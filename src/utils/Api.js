import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  var config = {
    method: 'get',
    url: `${baseUrl}/character/`,
    headers: {},
  };
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

export const getLocations = async ({id}) => {
  var config = {
    method: 'get',
    url: `${baseUrl}/location/${id}`,
    headers: {},
  };
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
export const getEpisodes = async ({ids}) => {
  var config = {
    method: 'get',
    url: `${baseUrl}/episode/${ids}`,
    headers: {},
  };
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
