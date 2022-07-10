<script setup>
import api from '@/api/index'
import { onMounted, ref } from "vue";

const list = ref([])

onMounted(() => {
  api.getList({pageNo: 1}).then(res => {
  // api.getList({pageNo: 1, pageSize: 10}).then(res => {
    console.log(res)
    list.value = res.data.list
  }).catch(err => {
    console.log(err)
  })
})
</script>

<template>
  <div>
    <h2>Hello World</h2>
    <el-table :data="list">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="name" width="180" />
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>

</template>

<style>
</style>
