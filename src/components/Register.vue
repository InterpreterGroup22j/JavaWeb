<template>
  <div class="register-container">
    <Card class="register-card">
      <Row>
        <iCol span="9">
          <div class="container">
            <img src="../../static/logot.png" class="login-img">
          </div>
        </iCol>
        <iCol span="1">
          <Divider type="vertical" style="height:100%;border:1px solid #ccc;margin:auto;" />
        </iCol>
        <iCol span="14">
          <div class="container">
            <Form class="registerForm" :label-width="80">
              <FormItem label="Username">
                <Input v-model="formItem.username" placeholder="username" />
              </FormItem>
              <FormItem label="Account">
                <Input v-model="formItem.account" placeholder="account" />
              </FormItem>
              <FormItem label="Password">
                <Input v-model="formItem.password" placeholder="password" />
              </FormItem>
              <FormItem label="Sex">
                <Input v-model="formItem.sex" placeholder="sex" />
              </FormItem>
              <FormItem label="Height">
                <Input v-model="formItem.height" placeholder="height" />
              </FormItem>
              <FormItem label="Weight">
                <Input v-model="formItem.weight" placeholder="weight" />
              </FormItem>
              <FormItem>
                <Button type="primary" @click="register()" style="width: 240px;">注册</Button>
              </FormItem>
            </Form>
          </div>
        </iCol>
      </Row>
    </Card>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        formItem: {
          username: '',
          account: '',
          password: '',
          sex: '',
          height: '',
          weight: ''
        }
      }
    },
    methods: {
      register() {
        this.axios.post('/user/insertUser', {
            user_name: this.formItem.username,
            user_account: this.formItem.account,
            user_password: this.formItem.password,
            user_sex: this.formItem.sex,
            user_height: this.formItem.height,
            user_weight: this.formItem.weight
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
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

  .register-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .register-card {
    width: 800px;
    height: 500px;
  }

  .registerForm {
    width: 400px;
    margin: 0, auto;
    padding: 84px 40px 0px 40px;
    border: 0px solid black;
  }

</style>
