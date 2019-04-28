<template>
  <div class="info-container">
    <Card class="info-card">
      <Form class="info-form" :label-width="80">
        <FormItem label="Username">
          <Input v-model="formItem.username" :readonly=readonly placeholder="username" />
        </FormItem>
        <FormItem label="Account">
          <Input v-model="formItem.account" readonly=readonly placeholder="account" />
        </FormItem>
        <FormItem label="Sex">
          <Input v-model="formItem.sex" :readonly=readonly placeholder="sex" />
        </FormItem>
        <FormItem label="Height">
          <Input v-model="formItem.height" :readonly=readonly placeholder="height" />
        </FormItem>
        <FormItem label="Weight">
          <Input v-model="formItem.weight" :readonly=readonly placeholder="weight" />
        </FormItem>
        <FormItem>
          <Button type="primary" :icon=type @click="fWrite()" style="width:220px;">{{btn_label}}</Button>
        </FormItem>
      </Form>
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
          sex: '',
          height: '',
          weight: ''
        },
        readonly: true,
        type: 'md-create',
        btn_label: '编辑'
      }
    },
    methods: {
      fWrite() {
        this.readonly = !this.readonly;
        if (this.readonly) {
          this.type = 'md-create';
          this.btn_label = '编辑';
          this.axios.post('/user/UpdateUserInfo', {
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
        this.axios.get('/user/qryUserInfo')
          .then(res => {
            console.log(res);
            this.formItem.username = res.data.data.user_name;
            this.formItem.account = res.data.data.user_account;
            this.formItem.sex = res.data.data.user_sex;
            this.formItem.height = res.data.data.user_height;
            this.formItem.weight = res.data.data.user_weight;
          })
          .catch(err => console.log(err));
      }
    },
    mounted() {
      this.info();
    }
  }

</script>

<style>
  .info-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-card {
    height: 700px;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-form {
    width: 800px;
    padding: 50px;
    border: 1px solid black;
  }

</style>
