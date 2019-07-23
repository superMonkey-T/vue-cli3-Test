<template>
  <Card>
    <h1 style="min-height: 200px;">About路由内容页面</h1>
  </Card>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        pagesIndex:0
      }
    },
    created(){
      console.log()
      // this.pagesIndex = this.$route.query.index
    },
    methods: {
    }
  }
</script>

