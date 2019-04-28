<template>
  <div class="me-layout">
    <Row>
      <iCol span="6">
        <Menu @on-select="goTo" theme="dark" class="me-menu">
          <MenuItem name="Info">个人信息</MenuItem>
          <MenuItem name="Comments">我的评论</MenuItem>
          <MenuItem name="Message">我的消息</MenuItem>
          <MenuItem name="nothing">...</MenuItem>
        </Menu>
      </iCol>
      <iCol span="18">
        <router-view />
      </iCol>
    </Row>
  </div>




</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goTo(name) {
        this.$router.push(name);
      }
    }
  }

</script>
<style>
  .me-layout {
    height: 100vh;
    width: 100vw;
    padding-top: 64px;
  }
  .me-menu{
    height: 100%;
    box-shadow: 0 3px 8px 1px #000;
    z-index: 98;
  }
  .ivu-menu-dark{
    background: rgba(0, 0, 0, 0);
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover{
    background: rgba(0, 0, 0, 0);
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    color: #fbda41;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover{
    background: rgba(0, 0, 0, 0);
    color: #fbda41;
  }
</style>
