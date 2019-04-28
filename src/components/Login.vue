<template>
  <div class="login-container">
    <Card class="login-card">
      <Row>
        <iCol span="9">
          <div class="container">
            <img src="../../static/logot.png" class="login-img">
          </div>
        </iCol>
        <iCol span="1">
          <Divider type="vertical" style="height:100%;border:1px solid #ccc;margin:auto;"/>
        </iCol>
        <iCol span="14">
          <div class="container">
            <div id="login">
              <Input v-model="account" prefix="md-person" placeholder="请输入账号"
                style="width: 300px;height: 32px;margin: 16px 0 16px 0" />
              <br>
              <Input v-model="password" prefix="md-lock" placeholder="请输入密码" type="password"
                style="width: 300px;height: 32px;margin: 0 0 24px 0" />
              <div id="button1">
                <Button type="primary" long @click="login()">登录</Button>
              </div>
              <div id="button2">
                <Button type="primary" long @click="goRegister()">注册</Button>
              </div>
            </div>
          </div>

        </iCol>
      </Row>
    </Card>
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
        this.axios.post('/user/userLogin', {
            user_account: this.account,
            user_password: this.password
          })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$store.dispatch('login', this.account);
              this.$router.push('/home');
            }else{
              this.$Message.info('账号或密码错误');
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
.ivu-input:hover {
    border: 1px solid #fbda41;
  }

  .ivu-btn-primary {
    border: 1px solid black;
    background-color: #fff;
    color: black;
    font-size: 14px;
  }

  .ivu-btn-primary:hover {
    background-color: #fbda41;
    border: 1px solid #fbda41;
  }
  .login-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-card {
    width: 800px;
    height: 500px;
  }

  .ivu-card-body {
    height: 100%;
  }

  .ivu-row {
    height: 100%;
  }

  .ivu-col {
    height: 100%;
  }

  .login-img {
    width: 287px;
    height: 287px;
    margin: 0 auto;
  }

  #button1 {
    width: 300px;
    margin: 0 0 16px 0;
  }

  #button2 {
    width: 300px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

</style>
