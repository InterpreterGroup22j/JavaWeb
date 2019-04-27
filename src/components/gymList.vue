<template>
  <div class="list">
    <ul>
      <li v-for="gym in gymList" :key="gym.name">
        <router-link :to="'gymDetail'">
          <Card class="gym-item-card">
            <Row>
              <i-col span="6">
                <p>{{gym.image}}</p>
              </i-col>
              <i-col span='18'>
                <p>{{gym.name}}</p>
                <p>
                  <Rate allow-half show-text disabled :value.sync="gym.score">
                    <span style="color: #f5a623">{{ gym.score }}</span>
                  </Rate>
                </p>
                <p>{{gym.location}}</p>
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
        path:'/gymDetail',
        gymList: [{
            image: '图片',
            name: '百斯特健身',
            score: 5,
            location: '八一路'
          },
          {
            image: '图片',
            name: '飞宇健身',
            score: 3.4,
            location: '珞珈山街'
          }
        ]
      }
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
