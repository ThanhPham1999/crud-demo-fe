import { defineStore } from "pinia";
import { ref } from "vue";

import { testApi } from "@/apis";

export const useTestStore = defineStore("testStore", () => {
  const listTest = ref([]);
  const getDataTest = async (params) => {
    const { getList } = testApi();
    const res =  await getList(params);
    listTest.value = res.data
  };
  const addDataTest = async (data) =>{
    const { addItem } = testApi(data);
    await addItem(data);
  };
  const deleteDataTest = async (data) =>{
    const { deleteItem } = testApi(data);
    await deleteItem(data);
  }
  const updateDataTest = async (data) =>{
    console.log(data,"store");
    const { updateItem } = testApi(data);
    await updateItem(data);
  }
  return {
    listTest,
    getDataTest,
    addDataTest,
    deleteDataTest,
    updateDataTest
  };
});
