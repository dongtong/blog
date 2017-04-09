<template>
  <!--router-view => ProductList-->
  <router-view :products="theProducts" :title="title"></router-view>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: 'Shop products here',
        theProducts: []
      }
    },
    created() {
      $.getJSON('https://hplussport.com/api/products')
      .done(data => {
        this.theProducts = data
      })
    }
  }
</script>

<style>

</style>
