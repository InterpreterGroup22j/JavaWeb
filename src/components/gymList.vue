<template>
  <div class="list">
      <Card v-for="gym in gymList" :key="gym.name" class="gym-item-card">
        <router-link :to="{ name: 'gymDetail', params: { 
          gym_id: gym.id,
          gym_name:gym.gym_name,
          gym_intro:gym.gym_intro,
          gym_addr:gym.gym_addr,
          gym_tel:gym.gym_tel
          }}">
          <Row>
            <i-col span="6">
              <img :src="gym.gym_pic" alt="" class="gym_img">
            </i-col>
            <i-col span='18'>
              <div style="margin:0 auto">
              <p class="gym_name">{{gym.gym_name}}</p>
              <p>
                <Rate allow-half show-text disabled :value.sync="gym.score">
                  <span style="color: #f5a623">{{ gym.score }}</span>
                </Rate>
              </p>
              <p>{{gym.gym_addr}}</p>
              </div>
              
            </i-col>
          </Row>
        </router-link>
      </Card>
    </div>
</template>

<script>
  import Vue from 'vue';
  import scrollReveal from 'scrollreveal';
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
        ],
        scrollReveal: scrollReveal()
      }
    },
    methods: {
      loadin() {
        this.axios.post('/gym/gyms', {})
          .then(
            res => {
              console.log(res.data.data);
              this.gymList = res.data.data;
            }
          )
          .catch(err => console.log(err));
      }
    },
    mounted() {
      this.loadin();
    },
    updated(){
      this.scrollReveal.reveal('.gym-item-card', {
        delay: 200,
        reset: true,
        easing: 'ease',
        scale:0.9
      })
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

  .gym_name{
    font-size: 150%;
    margin-bottom: 17px;
  }
  .gym_img {
    /* width: 320px; */
    width: 80%;
    /* height: 100%; */
    height: 150px;
  }
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
