<template>
  <div id="gym-detail-container">
    <div class="mask">
      <div id="gym_name">
        {{gym_name}}
      </div>
      <Card class="gym-detail-card">
        <p class='detail_title'>
          {{gym_intro}}
        </p>
      </Card>
      <Card class="gym-detail-card">
        <p class='detail_title'>
          商家地址：
        </p>
        {{gym_addr}}
      </Card>
      <Card class="gym-detail-card">
        <p class='detail_title'>商家电话：</p>
        {{gym_tel}}
      </Card>
      <Card class="gym-detail-card">
        <p class='detail_title'>评论信息
          <span>
            <Button type="primary" shape="circle" @click="modal = true">发表评论</Button>
          </span>
        </p>
        <Modal v-model="modal" title="填写评论" @on-ok="submit" @on-cancel="cancel">
          <p>
            <Rate allow-half show-text v-model="user_rate"></Rate>
            <Input type="textarea" placeholder="请输入评论" v-model="user_comment"></Input>
          </p>
        </Modal>
        <ul>
          <li v-for="comment in comments" :key="comment.id">
            <Divider />
            <p>
              {{comment.user_id}}
            </p>
            <p>
              <Rate allow-half show-text disabled v-model="comment.point">
                <span style="color: #f5a623">{{ comment.point/comment.remark_num }}</span>
              </Rate>
            </p>
            {{comment.content}}
          </li>
        </ul>
      </Card>
    </div>
  </div>


</template>

<script>
  import Vue from 'vue'
  export default {
    name: "gymDetail",
    data() {
      return {
        modal: false,
        user_rate: 0,
        user_comment: null,
        // gym_id:1,
        // gym_name:'为之健身 Wake pop',
        // gym_intro:'营业时间：周一至周日 08：00-22：00',
        // gym_addr:"烟霞路万达尊底商（万达电影乐园对面）",
        // gym_tel:9823748932789,

        gym_id: this.$route.params.gym_id,
        gym_name: this.$route.params.gym_name,
        gym_intro: this.$route.params.gym_intro,
        gym_addr: this.$route.params.gym_addr,
        gym_tel: this.$route.params.gym_tel,

        comments: []
      }
    },
    methods: {
      load_comment() {
        this.axios.post('/gym/comments', {
            gym_id: this.gym_id
          })
          .then(
            res => {
              console.log(res);
              this.comments = res.data.data;
            }
          )
          .catch(err => console.log(err));
      },
      submit() {
        if (this.$store.getters.getLogin) {
          this.axios.post('/gym/addComments', {
              gym_id: this.gym_id,
              point: this.user_rate,
              content: this.user_comment,
            })
            .then(res => {
              this.load_comment();
              console.log(res);
            })
            .catch(err => console.log(err));
        } else {
          this.$Message.info('请先登录再评论健身房');
        }
      },
      cancel() {
        this.$Message.info('取消本次评论');
        this.user_rate = 0;
      },
    },
    mounted() {
      this.load_comment();
      //console.log(this.gym_id);
    }
  }

</script>

<style>
  #gym_name {
    text-align: center;
    font-size: 300%;
    color: #fbda41;
  }

  .detail_title {
    font-size: 150%;
  }

  .gym-detail-card {
    padding: 0px 20px;
    margin: 10px 0px;
  }

.mask{
  height: 100vh;
  width:100vw;
  padding: 84px 100px;
  background: rgba(51, 51, 51, 0.95);
}
  #gym-detail-container {
    height: 100vh;
    width: 100vw;
  }

</style>
