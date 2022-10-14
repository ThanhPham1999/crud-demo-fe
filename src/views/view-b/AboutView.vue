<template>
  <div class="about">
    <h1>CRUD test is here</h1>
    <div>
      <a-input v-model:value="addItem" placeholder="Thêm" />
      <a-button @click="handleAddData(addItem)" type="primary">ADD</a-button>
   </div>
    <div>
      <a-input v-model:value="editItem" placeholder="Thêm" />
      <a-button @click="handleUpdateData({name : editItem , id : id })" type="primary">UPDATE</a-button>
   </div>
    <DataTable
    :size="TABLE_SIZE.medium"
    :data="{ dataSource: listTest,totalElement: 10 }"
    :columns="columns"
    :on-get-data="handleGetData"
    :on-delete-data ="handleDeleteData"
    :on-edit-data ="handleEditData"
  />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";

import { TABLE_SIZE } from "@/utils/constants";

import { useTestStore } from "../../stores/index";
import {  columns } from "./data";

const { getDataTest, addDataTest, deleteDataTest, updateDataTest } = useTestStore()
const { listTest } = storeToRefs(useTestStore());

const id = ref("")
const addItem = ref("")
const editItem = ref ("")

const handleGetData = async () => {
  try {
    await getDataTest();
  } catch (e) {
    alert(e)
  }
};
const handleAddData = async (data) =>{
  try {
    await addDataTest(data)
    await getDataTest()
  } catch (error) {
    alert(error)
  }
}
const handleDeleteData = async(data) =>{
  console.log(data," Component ");
  try {
    await deleteDataTest(data)
    await getDataTest()
  } catch (error) {
    alert(error)
  }
}
const handleEditData = async(data) =>{
  console.log(data," Component ");
  editItem.value = data.name
  id.value= data._id
}
const handleUpdateData = async(data) =>{
  console.log(data," Component ");
  try {
    await updateDataTest(data)
    await getDataTest()
  } catch (error) {
    alert(error)
  }
}
onMounted(async ()=> await handleGetData())
</script>