<template>
  <div id="login">
    账号&#160;<Input v-model="account" placeholder="请输入账号" style="width: 300px" />
    <br>
    密码&#160;<Input v-model="password" placeholder="请输入密码" type="password" style="width: 300px" />
    <br>
    <Button type="primary" @click="login()">登录</Button>
    <Button type="primary" @click="goRegister()">注册</Button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.axios.post('http://n828vd.natappfree.cc/user/userLogin', {
            user_account: this.account,
            user_password: this.password
          })
          .then(res => {
            console.log(res.data.code);
            if(res.data.code==200){
              this.$store.dispatch('login',this.account);
              this.$router.push('/home');
            } 
          })
          .catch(err => console.log(err));
      },
      goRegister() {
        this.$router.push('/register');
      }
    }
  }

</script>
<style>
  #login {
    padding: 84px 40px 0px 40px;
  }

</style>
