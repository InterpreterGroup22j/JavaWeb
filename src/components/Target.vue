<template>
  <div id="Target">
    体重&#160;<Input v-model="value1" placeholder="请输入目标体重" style="width: 300px" />
    <br>
    腰围&#160;<Input v-model="value2" placeholder="请输入目标腰围" type="password" style="width: 300px" />
    <br>
    <i-button type="button">确定</i-button>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        cityList: [{
            value: '150',
            label: '150'
          },
          {
            value: '151',
            label: '151'
          }
        ],
        model1: '',
        value1: '',
        value2: ''
      }
    }
  }

</script>
<style>

</style>
