<script>
import axios from 'axios';
import { baseUrl } from '../data/data';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            projects: {},
        };
    },
    methods: {
        getApi() {
            axios.get(baseUrl + 'projects/' + this.$route.params.slug).then((result) => {
                this.projects = result.data;
            });
        },
    },
    mounted() {
        this.getApi();
    },
};
</script>

<template>
    <h1>{{ projects.title }}</h1>

    <p>{{ projects.client_name }}</p>
    <div v-html="projects.summary"></div>
    <img :src="projects.cover_image" :alt="projects.title" />

    <h3 v-if="projects.type">{{ projects.type.name }}</h3>
    <p v-for="technologies in projects.technologies" :key="technologies.id">{{ technologies.name }}</p>
</template>

<style></style>
