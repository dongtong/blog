<template>
    <li>
        <p><strong>{{product.name}}</strong></p> 
        <router-link to="/products">Back to all products</router-link>
        <img :src="product.image">
        <p>{{product.description}}</p>
        <strong>{{product.price}}</strong>
        <div>
            <button>Add to Cart</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'product',
        data() {
            return {
                product: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            $.getJSON(`https://hplussport.com/api/products/${id}`)
            .done(data => {
                this.product = data;
            })
        }
    }
</script>

<style scoped>
    img {
        width: 300px;
        height: 300px;
    }
</style>