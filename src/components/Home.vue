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
          <Card class="card">
            <p slot="title">小帖子</p>
            <div class="card_content" @click="click">Content</div>
          </Card>
        </iCol>
        <iCol span="8">
          <Card class="card">
            <p slot="title">小帖子</p>
            <div class="card_content">Content</div>
          </Card>
        </iCol>
        <iCol span="8">
          <Card class="card">
            <p slot="title">小帖子</p>
            <div class="card_content" @click="click">{{test.test1}}</div>
          </Card>
        </iCol>
      </Row>
    </section>

  </div>
</template>
<script>
  import anime from 'animejs'
  export default {
    data() {
      return {
        setting: {
          autoplay: true,
          loop: true
        },
        test: {
          test1: 0
        }
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
    }
  }

</script>
<style>
.home-section{
  height: 100vh;
  width: 100vw;
}
  .carouselItem {
    background: #CCC;
    height: 500px;
  }

  /* #home-container {
    margin: 20px;
  } */

  #card_container {
    margin-top: 20px;
  }

  .card_content {
    height: 200px;
  }

</style>
