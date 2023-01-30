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
                store.type = result.data.type;
                store.technologies = result.data.technologies;
            });
        },
        getApiByType(type_id) {
            axios.get(baseUrl + 'projects/getByType/' + type_id).then((result) => {
                store.projects = result.data;
            });
        },
        getApiByTechnologies(technology_id) {
            axios.get(baseUrl + 'projects/getByTechnologies/' + technology_id).then((result) => {
                store.projects = result.data;
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
    <div class="container">
        <div class="card-container">
            <ProjectCard v-for="project in store.projects" :key="'proj' + project.id" :project="project" />
        </div>

        <div class="col">
            <h2>Types</h2>
            <button @click="getApi()">ALL</button>
            <button v-for="type in store.type" :key="'type' + type.id" @click="getApiByType(type.id)">
                {{ type.name }}
            </button>

            <h2>Technologies</h2>
            <button
                v-for="technology in store.technologies"
                :key="'tech' + technology.id"
                @click="getApiByTechnologies(technology.id)"
            >
                {{ technology.name }}
            </button>
        </div>
    </div>
</template>

<style></style>
