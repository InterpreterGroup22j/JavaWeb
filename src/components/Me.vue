<template>
  <Form class="MeForm" :label-width="80">
    <FormItem label="Id">
      <Input v-model="formItem.id" :disabled="true" placeholder="id" />
    </FormItem>
    <FormItem label="Username">
      <Input v-model="formItem.username" :disabled=write placeholder="username" />
    </FormItem>
    <FormItem label="Account">
      <Input v-model="formItem.account" :disabled="true" placeholder="account" />
    </FormItem>
    <FormItem label="Sex">
      <Input v-model="formItem.sex" :disabled=write placeholder="sex" />
    </FormItem>
    <FormItem label="Height">
      <Input v-model="formItem.height" :disabled=write placeholder="height" />
    </FormItem>
    <FormItem label="Weight">
      <Input v-model="formItem.weight" :disabled=write placeholder="weight" />
    </FormItem>
    <FormItem>
      <Button type="primary" :icon=type @click="fWrite()">{{btn_label}}</Button>
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
          sex: '',
          height: '',
          weight: ''
        },
        write: true,
        type: 'md-create',
        btn_label: '编辑'
      }
    },
    methods: {
      fWrite() {
        this.write = !this.write;
        if (this.write) {
          this.type = 'md-create';
          this.btn_label = '编辑';
          this.axios.post('http://h6be2u.natappfree.cc/user/UpdateUserInfo', {
              user_name: this.formItem.username,
              user_account: this.formItem.account,
              user_sex: this.formItem.sex,
              user_height: this.formItem.height,
              user_weight: this.formItem.weight
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
          this.type = 'md-checkmark';
          this.btn_label = '保存';
        }
      },
      info() {
        this.axios.post('http://h6be2u.natappfree.cc/user/qryUserInfo', {
            id: this.formItem.id,
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
    },
    mounted() {
      this.info();
    }
  }

</script>
<style>
  .MeForm {
    width: 400px;
    margin: 84px auto 0px auto;
    padding: 50px;
    border: 1px solid black;
  }

</style>
