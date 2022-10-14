import { fetchApi } from "../apiFactory";
import { BUSINESS } from "../constants";

const { GET_DATA } = BUSINESS;

export const businessApi = () => {
  const getApi = async (params) => {
    // TODO: use transform here
    return await fetchApi(GET_DATA, params);
  };

  return {
    getApi,
  };
};
