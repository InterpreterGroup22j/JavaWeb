<template>
  <Form class="Plan" :label-width="80">
    <GymPlan label="Id">
      <Input v-model="gymPlan.id" :disabled="true" placeholder="id" />
    </GymPlan>
    <GymPlan label="PlanCriter">
      <Input v-model="gymPlan.plan_criter" :disabled="true" placeholder="plan_criter" />
    </GymPlan>
    <GymPlan label="PlanContent">
      <Input v-model="gymPlan.plan_content" :disabled="true" placeholder="plan_content" />
    </GymPlan>
    <GymPlan label="PlanType">
      <Input v-model="gymPlan.plan_type" :disabled="true" placeholder="plan_type" />
    </GymPlan>

    <List label="Id">
      <Input v-model="list.id" :disabled="true" placeholder="id" />
    </List>
    <List label="FoodType">
      <Input v-model="list.food_type" :disabled="true" placeholder="food_type" />
    </List>
    <List label="FoodCriter">
      <Input v-model="list.food_criter" :disabled="true" placeholder="food_criter" />
    </List>
    <List label="FoodName">
      <Input v-model="list.food_name" :disabled="true" placeholder="food_name" />
    </List>
    <List label="FoodAmount">
      <Input v-model="list.food_amount" :disabled="true" placeholder="food_amount" />
    </List>
    <List label="FoodAmountUnit">
      <Input v-model="list.food_amount_unit" :disabled="true" placeholder="food_amount_unit" />
    </List>
    <List label="FoodList">
      <Input v-model="list.food_list" :disabled="true" placeholder="food_list" />
    </List>
  </Form>
</template>
<script>
  export default {
    data() {
      return {
        gymPlan: {
          id: '',
          plan_criter: '',
          plan_content: '',
          plan_type: ''
        },
        list: {
          id: '',
          food_type: '',
          food_criter: '',
          food_name: '',
          food_amount: '',
          food_amount_unit: '',
          food_list:''
        }
      }
    },
    methods: {
      plan() {
        this.axios.post('/user/insertUser', {
            gymPlan_id: this.gymPlan_id,
            plan_criter: this.gymPlan.plan_criter,
            plan_content: this.gymPlan.plan_content,
            plan_type: this.gymPlan.plan_type,
            list_id: this.list.id,
            food_type: this.list.food_type,
            food_criter: this.list.food_criter,
            food_name: this.list.food_name,
            food_amount: this.list.food_amount,
            food_amount_unit: this.list.food_amount_unit,
            food_list: this.list.food_list
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }

</script>
<style>
  #plan {
    padding: 84 px 40 px 0 px 40 px;
  }
</style>
