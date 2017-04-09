<template>
    <li>
        <img :src="product.image">
        <p><strong>{{product.name}}</strong></p> 
        <p>{{product.description}} <a @click="remove">Hide</a></p>
    </li>
</template>

<script>
    export default {
        name: 'product-item',
        props: ['products'],
        methods: {
            remove() { // es6 syntax
                this.$emit(remove)
            }
        }
    }
</script>

<!--scoped make sure the style just available in this component-->
<style scoped>
    img {
        float: left;
        width: 300px;
    }

    li {
        margin-bottom: 40px;
        clear: both;
    }
</style>