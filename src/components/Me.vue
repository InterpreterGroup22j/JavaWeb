<template>
  <Form class="MeForm" :label-width="80">
    <FormItem label="Id">
      <Input v-model="formItem.id" :disabled="true" placeholder="id" />
    </FormItem>
    <FormItem label="Username">
      <Input v-model="formItem.username" :disabled="true" placeholder="username" />
      <icon type="md-create"></icon>
    </FormItem>
    <FormItem label="Account">
      <Input v-model="formItem.account" :disabled="true" placeholder="account" />
    </FormItem>
    <FormItem label="Password">
      <Input v-model="formItem.password" :disabled="true" placeholder="password" />
    </FormItem>
    <FormItem label="Sex">
      <Input v-model="formItem.sex" :disabled="true" placeholder="sex" />
    </FormItem>
    <FormItem label="Height">
      <Input v-model="formItem.height" :disabled="true" placeholder="height" />
    </FormItem>
    <FormItem label="Weight">
      <Input v-model="formItem.weight" :disabled="true" placeholder="weight" />
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data() {
      return {
        formItem: {
          id: '',
          username: '',
          account: '',
          password: '',
          sex:'',
          height:'',
          weight:''
        }
      }
    },
    mounted:{
    info(){
      this.axios.post('http://h6be2u.natappfree.cc/user/qryUserInfo', {
            id: this.formItem.id,
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
.MeForm{
    width:400px;
    margin: 0,auto;
    padding:50px;
    border: 1px solid black;
}
</style>