<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// 也可以在本頁呼叫直接渲染在畫面上
// const { newsList } = await useAsyncData('newsApi', async () => {
//     const res = await axios.get('https://nuxr3.zeabur.app/api/v1/home/news/');

//     return res.data;
// });

const { isLoading, newsList } = useHome();
</script>

<template>
    <div class="container">
        <h1>最新消息</h1>
        <NewsCard
            v-for="news in newsList"
            :key="news._id"
            :title="news.title"
            :image="news.image"
            :description="news.description"
            :createdAt="news.createdAt"
            :updatedAt="news.updatedAt"
        />

        <ClientOnly>
            <Loading v-model:active="isLoading" />
        </ClientOnly>
    </div>
</template>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}
</style>
