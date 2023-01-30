<script>
import axios from 'axios';
import { baseUrl } from '../data/data';
import { store } from '../data/store';
import ProjectCard from '../../components/ProjectCard.vue';
import FormSearch from '../../components/FormSearch.vue';

export default {
    name: 'Projects',
    components: {
        ProjectCard,
        FormSearch,
    },
    data() {
        return {
            baseUrl,
            store,
        };
    },
    methods: {
        getApi() {
            axios.get(this.baseUrl + 'projects').then((result) => {
                store.projects = result.data.projects;
            });
        },
    },
    mounted() {
        this.getApi();
    },
};
</script>

<template>
    <FormSearch />
    <div class="card-container">
        <ProjectCard v-for="project in store.projects" :key="project.id" :project="project" />
    </div>
</template>

<style></style>
