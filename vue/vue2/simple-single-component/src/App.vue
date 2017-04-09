<template>
  <product-list :products="theProducts" :title="title"></product-list>
</template>

<script>
  import ProductList from './ProductList.vue';

  export default {
    name: 'app',
    data () {
      return {
        title: 'Shop products here',
        theProducts: []
      }
    },
    components: {
      'product-list': ProductList
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
