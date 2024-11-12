<script setup>
const route = useRoute();
</script>

<template>
    <div>
        Page: index
        <p>目前路由的路徑 - route.fullPath 為：{{ route.path }}</p>
    </div>
    <header>
        <ul class="list">
            <li>
                <NuxtLink to="/">前台首頁</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">前台 About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/admin">前往 後台首頁</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/admin/order">前往 後台訂單</NuxtLink>
            </li>
        </ul>
    </header>
    <h1>前台首頁</h1>
    <h1>產品</h1>
    <ProductCard
        imageSrc="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
        altText="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢"
        title="尊爵雙人房"
        price="NT$10000"
        buttonText="馬上預約"
    />
    <footer>
        <h5>前台模板的表尾</h5>
        <button type="button" class="btn btn-primary btn-sm" disabled>
            Primary
        </button>
        <button type="button" class="btn btn-secondary btn-sm" disabled>
            Secondary
        </button>
        <button type="button" class="btn btn-success btn-sm" disabled>
            Success
        </button>
        <button type="button" class="btn btn-danger btn-sm" disabled>
            Danger
        </button>
        <button type="button" class="btn btn-warning btn-sm" disabled>
            Warning
        </button>
        <button type="button" class="btn btn-info btn-sm" disabled>Info</button>
        <button type="button" class="btn btn-light btn-sm" disabled>
            Light
        </button>
        <button type="button" class="btn btn-dark btn-sm" disabled>Dark</button>

        <button type="button" class="btn btn-link btn-sm" disabled>Link</button>
    </footer>
</template>

<style lang="scss" scoped>
.btn-sm {
    margin: 0 5px;
}
</style>
