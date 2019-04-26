<template>
  <div id="gym-detail-container">
    <Card class="gym-detail-card">
      <p class='detail_title'>
        营业时间：{{startTime}} - {{endTime}}
      </p>
    </Card>
    <Card class="gym-detail-card">
      <p class='detail_title'>
        商家详情
      </p>
      <ul>
        <li v-for="detail in details">
          {{detail}}
        </li>
      </ul>
    </Card>
    <Card class="gym-detail-card">
      <p class='detail_title'>商家服务</p>
      <i-table :columns="serviceType" :data="serviceDetail"></i-table>
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
        <li v-for="comment in comments">
          <p>
            {{comment.user}}
            <Rate allow-half show-text disabled v-model="comment.score">
              <span style="color: #f5a623">{{ comment.score }}</span>
            </Rate>
          </p>
          {{comment.content}}
        </li>
      </ul>
    </Card>
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
        user_comment:null,
        startTime: '09:30',
        endTime: '21:30',
        details: [
          '付费停车',
          '吸烟区',
          '充电线'
        ],
        serviceType: [{
            title: '器械',
            key: 'instrument'
          },
          {
            title: '课程',
            key: 'classes'
          },
          {
            title: '设施',
            key: 'facility'
          }
        ],
        serviceDetail: [{
          instrument: '哑铃',
          classes: '搏击操',
          facility: '储物柜'
        }],
        comments: [{
            user: '用户一',
            score: 5,
            content: '设施齐全'
          },
          {
            user: '用户二',
            score: 3,
            content: '环境好'
          }
        ]
      }
    },
    methods: {
      submit() {
        this.$Message.info('提交评论');
        this.axios.post('', {
            rate:this.user_rate,
            Comment:this.user_comment,
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      },
      cancel() {
        this.$Message.info('取消本次评论');
        this.user_rate=0;
      }
    },
    mounted: {
      load(){
        this.axios.post('', {
            
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }

</script>

<style>
  .detail_title {
    font-size: 150%;
  }
  .gym-detail-card{
    padding: 0px 20px;
    margin: 10px 0px;
  }
#gym-detail-container{
  padding: 20px 100px;
}
</style>
