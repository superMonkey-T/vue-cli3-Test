<style lang="less">
  @import "Content.less";
</style>
<template>
  <Card>
    <Table border ref="selection" :columns="columns12" :data="data6">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <div class="change-btn">
      <Button @click="handleSelectAll(true)">全选</Button>
      <Button @click="handleSelectAll(false)">取消全选</Button>
    </div>
    <div class="pages">
      <Page :total="100" show-elevator />
    </div>
  </Card>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        columns12: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            slot: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        data6: [
          {
            name: '张林',
            age: 18,
            address: '北京市朝阳区大望路一号院'
          },
          {
            name: '二蛋',
            age: 24,
            address: '山东威海豆豆村01号'
          },
          {
            name: '二胖',
            age: 30,
            address: '河南省开封市'
          },
          {
            name: '孙大圣',
            age: 1000,
            address: '天宫一号常住居民'
          }
        ]
      }
    },
    created(){
      console.log()
      // this.pagesIndex = this.$route.query.index
    },
    methods: {
      //查看详情
      show (index:any):void {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        })
      },
      //移除
      remove (index:any):void {
        this.data6.splice(index, 1);
      },
      //全选，反选
      handleSelectAll (status:any) {
        this.$refs.selection.selectAll(status);
      }
    }
  }
</script>

