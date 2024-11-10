<script setup>
const route = useRoute();
</script>

<template>
    <div>
        Page: index
        <p>目前路由的路徑 - route.fullPath 為：{{ route.path }}</p>
    </div>
</template>

<style scoped></style>
