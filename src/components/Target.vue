<template>
    
<div id="Target">
        健身类型&#160;<Input v-model="formItem.goal_type" placeholder="健身类型" style="width: 300px" />
        <br>
        目标层次&#160;<Input v-model="formItem.goal" placeholder="目标层次" style="width: 300px" />
        <br>
        <i-button type="button">确定</i-button>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data() {
      return {
        formItem: {
          goal_type: '',
          goal: ''
        }
      }
    },
    methods: {
      register() {
        this.axios.post('/user/insertGoal', {
            goal_type: this.formItem.goal_type,
            goal: this.formItem.goal
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }
</script>
<style>
</style>