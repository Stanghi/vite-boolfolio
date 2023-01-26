<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
    name: 'App',
    components: {
        ProjectCard,
    },
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
        <div class="card-container">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<style lang="scss">
@use './style/general';
</style>
