<template>
  <div id="home-container">
    <section class="home-section">
      <Carousel :autoplay="setting.autoplay" :loop="setting.loop">
        <CarouselItem>
          <div class="carouselItem">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="carouselItem">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="carouselItem">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="carouselItem">4</div>
        </CarouselItem>
      </Carousel>
      <Row :gutter="16" id="card_container">
        <iCol span="8">
          <Card class="card headline">
            <p slot="title">小帖子</p>
            <div class="card_content" @click="click">Content</div>
          </Card>
        </iCol>
        <iCol span="8">
          <Card class="card headline">
            <p slot="title">小帖子</p>
            <div class="card_content">Content</div>
          </Card>
        </iCol>
        <iCol span="8">
          <Card class="card headline">
            <p slot="title">小帖子</p>
            <div class="card_content" @click="click">{{test.test1}}</div>
          </Card>
        </iCol>
      </Row>
    </section>
    <Divider />
    <section class="home-section test headline">
      <div class="headline">22222222222222222222</div>
      <div class="headline">22222222222222222222222222222</div>
      <div class="headline">222222222222222222</div>
      <div class="headline">2222222222222222222</div>
      <div class="headline">22222222222222222</div>
      <div class="headline">222222222222222222</div>
      <div class="headline">2222222222222222</div>
      <div class="headline">2222222222222222222222</div>
      <div class="headline">2222222222222222222222222222222</div>
    </section>
    <Divider />
    <section class="home-section">
      <div>
        <Row class="s3-row">
          <i-col class="s3-col">前端技术</i-col>
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
          <i-col class="s3-col">后台技术</i-col>
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
        setting: {
          autoplay: true,
          loop: true
        },
        test: {
          test1: 0
        },
        scrollReveal: scrollReveal()
      }
    },
    methods: {
      click() {
        var logEl = document.querySelector('.card_content');
        anime({
          targets: this.test,
          test1: 100,
          round: 1,
          easing: 'linear',
          update: function () {
            logEl.innerHTML = JSON.stringify(this.test);
          }
        });
      }
    },
    mounted() {
      this.scrollReveal.reveal('.headline', {
        delay: 200,
        reset: true,
        distance: '10px',
        easing: 'ease'
      });
      this.scrollReveal.reveal('.card-reveal', {
        delay: 200,
        reset: true,
        distance: '10px',
        easing: 'ease',
        interval:100,
        scale:0.9
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

  .s3-col {
    text-align: center;
    font-size: 24px;
  }
  .s3-card-title {
    font-size: 20px;
  }

.s3-row{
  margin: 32px;
}
</style>
