<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->

    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">欢迎使用Chic原醉用户管理系统</div>
            <div class="layout-nav">
              <MenuItem name="1">
                <router-link to="/">
                  <Icon type="ios-navigate"></Icon>普通用户
                </router-link>
              </MenuItem>
              <MenuItem name="2">
                <router-link to="/MemberContent">
                  <Icon type="ios-keypad"></Icon>会员用户
                </router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <router-view/>
      </Layout>
    </div>
<!--    <router-view/>-->
  </div>
</template>

<style lang="less">
  @import "views/Home/Home.less";
  html,body {
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
