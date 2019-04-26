<template>
    <div id="login">
        账号&#160;<Input v-model="value1" placeholder="请输入账号" style="width: 300px" />
        <br>
        密码&#160;<Input v-model="value2" placeholder="请输入密码" type="password" style="width: 300px" />
        <br>
        <Button type="primary" @click="login()">登录</Button>
        <Button type="primary" @click="goRegister()">注册</Button>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
        data () {
            return {
                value1: '',
                value2: ''
            }
        },
        methods:{
            login(){
                this.$store.dispatch('login');
                this.$router.push('/home');
            },
            goRegister(){
                this.$router.push('/register');
            }
        }
    }
</script>