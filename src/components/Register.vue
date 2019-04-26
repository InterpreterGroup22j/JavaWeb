<template>
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
      <Button type="primary" @click="register()">注册</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data() {
      return {
        formItem: {
          username: '',
          account: '',
          password: '',
          sex:'',
          height:'',
          weight:''
        }
      }
    },
    methods: {
      register() {
        this.axios.post('http://ygnfje.natappfree.cc/user/insertUser', {
            user_name: this.formItem.username,
            user_account: this.formItem.account,
            user_password: this.formItem.password,
            user_sex:this.formItem.sex,
            user_height:this.formItem.height,
            user_weight:this.formItem.weight
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }

</script>
<style>
.registerForm{
    width:400px;
    margin: 0,auto;
    padding:84px 40px 0px 40px;
    border: 1px solid black;
}
</style>
