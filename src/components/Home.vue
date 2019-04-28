<template>
  <div id="home-container">
    <section class="home-section s0 card-reveal">
      <div class="s0-container">
        <img class="s0-logo" src="../../static/logot.png">
      </div>
    </section>
    <section class="home-section test card-reveal s1">
      <div class="s-title s1-title headline">增<br>肌<br>绝<br>对<br>不<br>要<br>胡<br>吃<br>海<br>塞</div>
    </section>
    <section class="home-section test card-reveal s2">
      <div class="s-title s2-title headline">体<br>能<br>训<br>练<br>，<br>一<br>定<br>要<br>坚<br>持<br>做</div>
    </section>
    <section class="home-section s3">
      <div>
        <Row class="s3-row">
          <Divider class="headline" orientation="left">前端技术</Divider>
        </Row>
        <Row :gutter="32" class="s3-row">
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/vue.png">
                <p class="s3-card-title">Vue</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/vue.png">
                <p class="s3-card-title">Vuex</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/vue.png">
                <p class="s3-card-title">Vue Router</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/axios.png">
                <p class="s3-card-title">Axios</p>
              </div>
            </Card>
          </i-col>
        </Row>
        <Row :gutter="32" class="s3-row">
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/iview.png">
                <p class="s3-card-title">iView</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/nodejs.png">
                <p class="s3-card-title">Node.js</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/scrollreavel.png">
                <p class="s3-card-title">ScrollReveal</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/webpack.png">
                <p class="s3-card-title">webpack</p>
              </div>
            </Card>
          </i-col>
        </Row>
        <Row class="s3-row">
          <Divider class="headline" orientation="right">后台技术</Divider>
        </Row>
        <Row :gutter="32" class="s3-row">
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/springboot.png">
                <p class="s3-card-title">Spring Boot</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/mybatis.png">
                <p class="s3-card-title">MyBatis</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/shiro.png">
                <p class="s3-card-title">SHIRO</p>
              </div>
            </Card>
          </i-col>
          <i-col span="6" class="s3-col">
            <Card class="card-reveal s3-card">
              <div>
                <img src="../../static/mysql.png">
                <p class="s3-card-title">MySql</p>
              </div>
            </Card>
          </i-col>
        </Row>
      </div>
    </section>
  </div>
</template>
<script>
  import anime from 'animejs';
  import scrollReveal from 'scrollreveal';
  export default {
    data() {
      return {
        scrollReveal: scrollReveal()
      }
    },
    methods: {
     
    },
    mounted() {
      this.scrollReveal.reveal('.headline', {
        delay: 200,
        reset: true,
        distance: '100px',
        easing: 'ease'
      });
      this.scrollReveal.reveal('.card-reveal', {
        delay: 200,
        reset: true,
        distance: '10px',
        easing: 'ease',
        interval: 100,
        scale: 0.9,
        viewFactor: 0.25
      });
      this.scrollReveal.reveal('.s0-logo', {
        delay: 500,
        reset: true,
        distance: '10px',
        easing: 'ease',
        scale: 0.9,
        viewFactor: 0.25
      });
    }
  }

</script>
<style>
  img {
    height: 100px;
  }

  .home-section {
    padding: 84px 40px 0px 40px;
    height: 100vh;
  }

  .carouselItem {
    background: #CCC;
    height: 500px;
  }

  #card_container {
    margin-top: 20px;
  }

  .card_content {
    height: 200px;
  }

  .test {
    font-size: 24px;
  }

  .s0 {
    background-image: url('../../static/home/s1.jpg');
    padding: 0px;
  }

  .s0-container {
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
  }

  .s0-logo {
    height: 800px;
    margin-left: 100px;
    margin-top: 100px;
  }

  .s1 {
    background-image: url('../../static/home/food.jpg');
    filter: grayscale(0.8);
    transition: filter 1s;
  }

  .s1:hover {
    filter: grayscale(0);
  }

  .s2 {
    background-image: url('../../static/home/gym.jpg');
    filter: grayscale(0.8);
    transition: filter 1s;
  }

  .s2:hover {
    filter: grayscale(0);
  }

  .s3-col {
    text-align: center;
    font-size: 24px;
  }

  .s3-card-title {
    font-size: 20px;
  }

  .s3-row {
    margin: 32px;
  }

  .s-title {
    width: 200px;
    height: 100%;
    font-size: 40px;
    text-align: center;
    padding-top: 50px;
  }

  .s1-title {
    background-color: #fbda41;
    margin-left: 100px;
  }

  .s2-title {
    background-color: #648e93;
    color: #fbda41;
    margin-left: 1300px;
  }

  .ivu-divider-inner-text {
    font-size: 24px;
    color: #fbda41;
  }

</style>
