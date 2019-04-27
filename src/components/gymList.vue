<template>
  <div class="list">
    <ul>
      <li v-for="gym in gymList" :key="gym.name">
        <router-link :to="{ name: 'gymDetail', params: { 
          gym_id: gym.id,
          gym_name:gym.gym_name,
          gym_intro:gym.gym_intro,
          gym_addr:gym.gym_addr,
          gym_tel:gym.gym_tel
          }}">
          <Card class="gym-item-card">
            <Row>
              <i-col span="6">
                <p>{{gym.gym_pic }}</p>
              </i-col>
              <i-col span='18'>
                <p>{{gym.gym_name}}</p>
                <p>
                  <Rate allow-half show-text disabled :value.sync="gym.score">
                    <span style="color: #f5a623">{{ gym.score }}</span>
                  </Rate>
                </p>  
                <p>{{gym.gym_addr}}</p>
              </i-col>
            </Row>
          </Card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "gymList",
    data() {
      return {
        gymList: [
          // {
          //   gym_id:'1',
          //   gym_pic: '图片',
          //   gym_name: '百斯特健身',
          //   gym_addr: '八一路'
          // },
          // {
          //   gym_id:'2',
          //   gym_pic: '图片',
          //   gym_name: '飞宇健身',
          //   gym_addr: '珞珈山街'
          // }
        ]
      }
    },
    methods:{
      loadin(){
              this.axios.post('http://n828vd.natappfree.cc/gym/gyms', {
          })
          .then(
            res => {
              //console.log(res.data.data);
              this.gymList = res.data.data;
            }
            )
          .catch(err => console.log(err));
      }
    },

    mounted(){
      this.loadin();
    }
    // mounted: {
    //   load(){
    //     this.axios.post('', {
            
    //       })
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err));
    //   }
    // }
  }

</script>
<style>
  li {
    list-style: none;
  }

  .list {
    padding: 84px 100px 0px 100px;
  }

  .gym-item-card {
    padding: 0px 20px;
    margin: 10px 0px;
  }

</style>
