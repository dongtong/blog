<template>
    <div class="product-list">
        <h2>{{title}}</h2>
        <ul>
            <product-item @remove="remove(i)" v-for="(product,i) in products" :product="product"></product-item>
        </ul>
    </div>
</template>

<script>
    import ProductItem from './ProductItem.vue';

    export default {
        name: 'product-list',
        props: ['products', 'title'],
        components: {
            'product-item': ProductItem
        },
        methods: {
            remove(i) {
                this.products.splice(i, 1);
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-bottom: 40px;
    }

    ul {
        list-style-tyle: none;
    }
</style>