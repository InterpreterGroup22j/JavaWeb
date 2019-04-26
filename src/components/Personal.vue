<template>
    <div id="">
        <el-input placeholder="姓名" v-model="input" :disabled="true"></el-input>
        <br>
        <el-input placeholder="账号" v-model="input" :disabled="true"></el-input>
        <br>
        <el-input placeholder="身高" v-model="input" :disabled="true"></el-input>
        <br>
        <el-input placeholder="体重" v-model="input" :disabled="true"></el-input>
        <br>    
        <el-input placeholder="腰围" v-model="input" :disabled="true"></el-input>
        <button v-on:click="loginbutton">修改</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>