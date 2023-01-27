<script>
import axios from 'axios';
import { baseUrl } from '../data/data';
import ProjectCard from '../../components/ProjectCard.vue';
export default {
    name: 'Projects',
    components: {
        ProjectCard,
    },
    data() {
        return {
            baseUrl,
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
    <div class="card-container">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<style></style>
