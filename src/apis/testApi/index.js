import { fetchApi } from "../apiFactory";
import { TEST } from "../constants";
import {transformDataApi} from "./transform"
const { GET_LIST ,ADD_ITEM , DELETE_ITEM , UPDATE_ITEM } = TEST;

export const testApi = () => {
  const getList = async (params) => {
    // TODO: use transform here
    const result = await fetchApi(GET_LIST, params)
    const transformData = transformDataApi(result)
    return transformData
  };
  const addItem = async (item) =>{
    const data = {name: item}
    return await fetchApi(ADD_ITEM, {}, data)
  }
  const deleteItem = async (item) =>{
    const data = {id: item._id}
    return await fetchApi(DELETE_ITEM, data)
  }
  const updateItem = async (obj) =>{
    return await fetchApi(UPDATE_ITEM, {id : obj.id}, {name : obj.name})
  }
  return {
    getList,
    addItem,
    deleteItem,
    updateItem
  };
};

