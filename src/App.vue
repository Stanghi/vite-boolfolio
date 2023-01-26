<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/api/',
            projects: [],
        };
    },
    methods: {
        getApi() {
            axios.get(this.baseUrl + 'projects').then((result) => {
                this.projects = result.data.projects;
            });
        },
    },
    mounted() {
        this.getApi();
    },
};
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        <div class="prova">
            <div v-for="project in projects" :key="project.id" class="card">
                <h2>{{ project.title }}</h2>
                <p>{{ project.client_name }}</p>
                <p>{{ project.summary }}</p>
                <img src="" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './style/general';
</style>
