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
          <Card class="card headline load-hidden">
            <p slot="title">小帖子</p>
            <div class="card_content" @click="click">Content</div>
          </Card>
        </iCol>
        <iCol span="8">
          <Card class="card headline load-hidden">
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
    <section class="home-section headline">
      <div style="font-size:192px;">3</div>
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
        distance:'10px',
        easing:'ease',
        interval: 50,
      });
    }
  }

</script>
<style>
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

  .load-hidden {
    visibility: hidden;
  }

</style>
