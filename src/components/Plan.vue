<template>
  <Form class="Plan" :label-width="80">
    <FormItem label="PlanId">
      <Input v-model="formItem.plan_id" :disabled="true" placeholder="id" />
    </FormItem>
    <FormItem label="PlanCriter">
      <Input v-model="formItem.plan_criter" :disabled="true" placeholder="plan_criter" />
    </FormItem>
    <FormItem label="PlanContent">
      <Input v-model="formItem.plan_content" :disabled="true" placeholder="plan_content" />
    </FormItem>
    <FormItem label="PlanType">
      <Input v-model="formItem.plan_type" :disabled="true" placeholder="plan_type" />
    </FormItem>
	
    <FormItem label="FoodId">
      <Input v-model="formItem.food_id" :disabled="true" placeholder="id" />
    </FormItem>
    <FormItem label="FoodType">
      <Input v-model="formItem.food_type" :disabled="true" placeholder="food_type" />
    </FormItem>
    <FormItem label="FoodCriter">
      <Input v-model="formItem.food_criter" :disabled="true" placeholder="food_criter" />
    </FormItem>
	<FormItem label="FoodName">
      <Input v-model="formItem.food_name" :disabled="true" placeholder="food_name" />
    </FormItem>
	<FormItem label="FoodAmount">
      <Input v-model="formItem.food_amount" :disabled="true" placeholder="food_amount" />
    </FormItem>
	<FormItem label="FoodAmountUnit">
      <Input v-model="formItem.food_amount_unit" :disabled="true" placeholder="food_amount_unit" />
    </FormItem>
	<FormItem label="FoodList">
      <Input v-model="formItem.food_list" :disabled="true" placeholder="food_list" />
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data() {
      return {
        formItem: {
          plan_id: '',
          plan_criter: '',
          plan_content: '',
          plan_type:'',
       
          food_id: '',
          food_type: '',
          food_criter: '',
          food_name:'',
		  food_amount:'',
		  food_amount_unit:'',
		  food_list
        }
      }
    },
    methods: {
      plan() {
        this.axios.post('http://n828vd.natappfree.cc/user/insertUser', {
            Plan_id: this.formItem.plan_id,
            plan_criter: this.formItem.plan_criter,
            plan_content: this.formItem.plan_content,
            plan_type: this.formItem.plan_type,
            food_id:this.formItem.food_id,
            food_type:this.formItem.food_type,
			food_criter:this.formItem.food_criter,
			food_name:this.formItem.food_name,
			food_amount:this.formItem.food_amount,
			food_amount_unit:this.formItem.food_amount_unit,
			food_list:this.formItem.food_list
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }
  <style>
#plan{
  padding: 84px 40px 0px 40px;
}
</style>