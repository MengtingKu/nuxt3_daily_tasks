<script setup>
const props = defineProps({
    price: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <p class="product-price">{{ price }}</p>
</template>

<style scoped>
.product-price {
    font-size: 16px;
    color: #007bff;
    text-align: center;
    margin-bottom: 16px;
}
</style>
