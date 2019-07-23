<style scoped lang="less">
  @import './Home.less';
</style>
<template>

  <Layout>
    <Sider :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-bulb" />普通用户
          </template>
          <MenuItem name="1-1" @click.native="changRouter('/Content')">
            <Icon type="ios-alarm-outline" />用户1
          </MenuItem>
          <MenuItem name="1-2" @click.native="changRouter('/Test')">
            <Icon type="ios-albums-outline" />用户2
          </MenuItem>
          <MenuItem name="1-3" @click.native="changRouter('/Hello')">
            <Icon type="ios-alert-outline" />用户3
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>测试
          </template>
          <MenuItem name="2-1" @click.native="changRouter('/Content')">
            <Icon type="ios-analytics-outline" />测试1
          </MenuItem>
          <MenuItem name="2-2" @click.native="changRouter('/Test')">
            <Icon type="ios-aperture-outline" />测试2
          </MenuItem>
          <MenuItem name="2-3" @click.native="changRouter('/About')">
            <Icon type="ios-apps-outline" />测试3
          </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{padding: '0 24px 24px'}">
      <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
      <router-view class="content"/>
      <!-- <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

        <Button @click="getData">获取</Button>
      </Content> -->
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/views/Other/HelloWorld.vue";

// import httpRequest from '@/utils/utils'
export default {
  data(){
    return{
      isCollapsed: false
    }
  },
  methods:{
    changRouter(router: string):void{
      console.log(router)
      this.$router.push(router);
      // this.$router.push({
      //   name:router,
      //   params: {
      //     'index': router
      //   }
      // })
    },
  //   获取详细报告信息
	//  * https://alife.****.com/app/index.php?i=4&c=entry&a=wxapp&do=gettestcontentlist&m=chic_echomodel&openid=****
	//  * openid test_content_id
  //   getData(){

      // const params = {
      //   'openid':'oqisd5Dvc4S3Q8OjDrF73iOS3LWg'
      // }
      // httpRequest.getData('/app?i=4&c=entry&a=wxapp&do=gettestcontentlist&m=chic_echomodel',params).then((response:any)=>{
      //     console.log('成功'+response)
      // }).catch((err:any)=>{
      //     console.log('失败'+err)
      // })

    // }
  }
}

// @Component({
//   components: {
//     HelloWorld
//   }
// })
// export default class Home extends Vue {}
</script>
