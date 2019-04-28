<template>
  <div id="menu-container">
    <img src="../../static/logo.png" style="height:64px;float:left;">
        <Menu mode="horizontal" theme="light" @on-select="navTo" :active-name="activeItem">
          <MenuItem name="Home">主页</MenuItem>
          <MenuItem name="gymList">健身房</MenuItem>
          <MenuItem :name="vHasPlan.name">健身计划</MenuItem>
          <MenuItem :name="vIsLogin.name">{{vIsLogin.title}}</MenuItem>
        </Menu>
  </div>
</template>
<script>
  export default {
    name: 'MenuBar',
    data() {
      return {
        hasPlan: true,
        vHasPlan: {
          name: 'Plan'
        },
        vIsLogin: {
          name: 'Login',
          title: '登录'
        },
        activeItem: 'Home'
      }
    },
    methods: {
      navTo(name) {
        this.$router.push(name);
      }
    },
    computed: {
      fIsLogin() {
        return this.$store.getters.getLogin;
      },
      fHasPlan() {
        return this.$store.getters.getPlan;
      },
      routerPath() {
        return this.$route.path;
      }
    },
    watch: {
      fIsLogin() {
        if (this.$store.getters.getLogin) {
          this.vIsLogin.name = 'Me';
          this.vIsLogin.title = '个人中心';
        } else {
          this.vIsLogin.name = 'Login';
          this.vIsLogin.title = '登录';
        }
      },
      fHasPlan() {
        if (this.$store.getters.getPlan) {
          this.vHasPlan.name = "Plan";
        }
      },
      routerPath() {
        this.activeItem = this.$route.path.substr(1);
      }
    }
  }

</script>
<style>
  .ivu-menu-light {
    background-color: rgba(145, 121, 121, 0);
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    height: 0px;
  }
.ivu-menu-horizontal{
  width: 720px;
  margin: 0 auto;
}
  .ivu-menu-item {
    width: 120px;
    text-align: center;
    margin: 0 30px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0);
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    color: #fff;

  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #fbda41;
    border-bottom: 2px solid #fbda41;
  }

</style>
