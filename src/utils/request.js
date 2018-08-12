import axios from 'axios';

import UserStore from '~/stores/UserStore';
import { API_ENDPOINT } from '~/constants';

const defaultHeaders = () => ({
  authorization: `Bearer ${UserStore.token}`
});

const defaultOptions = {
  baseURL: API_ENDPOINT,
  method: 'get'
};

const request = options => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request({
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultHeaders(),
          ...options.headers
        }
      });
      resolve(response.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export { defaultHeaders as headers };
export default request;
