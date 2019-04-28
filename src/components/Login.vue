<template>
  <Card style="width: 800px;margin:0 auto">
    <Row>
      <Col span="9">
        <div id="picture">
          picture
        </div>
      </Col>
    <Col span="15">
    <div id="login">
      <Input v-model="account" prefix="md-person" placeholder="请输入账号" style="width: 300px;height: 32px;margin: 16px 0 16px 0" />
      <br>
      <Input v-model="password" prefix="md-lock" placeholder="请输入密码" type="password" style="width: 300px;height: 32px;margin: 0 0 24px 0" />
      <div id="button1">    
       <Button type="primary" long @click="login()">登录</Button>
      </div>
      <div id="button2"> 
        <Button type="primary" long @click="goRegister()">注册</Button>
      </div>
    </div>
    </Col>
    </Row>
  </Card>
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
        this.axios.post('/user/userLogin', {
            user_account: this.account,
            user_password: this.password
          })
          .then(res => {
            console.log(res);
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
    margin:0 100px 0 100px;
  }
  #button1{
    width:300px;
    margin:0 0 16px 0;
  }
  #button2{
    width:300px;
  }

</style>
