<script>
import Header from './js/partials/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>

<template>
    <Header />
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@use './style/general';
</style>
