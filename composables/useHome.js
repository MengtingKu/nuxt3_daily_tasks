import axios from 'axios';

export const useHome = () => {
    const newsList = ref([]);
    const isLoading = ref(false);
    const newsUrl = `https://nuxr3.zeabur.app/api/v1/home/news/`;

    onMounted(async () => {
        try {
            isLoading.value = true;
            const res = await axios.get(newsUrl);
            newsList.value = res.data.result;
            isLoading.value = false;
        } catch (error) {
            alert(error);
        } finally {
            isLoading.value = false;
        }
    });

    return { isLoading, newsList };
};
