<template>
  <div id="app">
    <Layout>
      <Header class="header">
        <MenuBar />
      </Header>
      <Content class="content">
        <router-view />
      </Content>
    </Layout>
  </div>
</template>

<script>
  import MenuBar from './components/MenuBar.vue'
  export default {
    name: 'App',
    components: {
      MenuBar
    }
  }

</script>

<style>
  .header {
    width: 100vw;
    background-color: #333;
    box-shadow: 0 3px 10px 2px #000;
    z-index: 99;
    position: fixed;
  }

  .content {
    background-color: #333;
  }

  /* #app {
    height: 100%;
    width: 100%;
  } */

</style>
