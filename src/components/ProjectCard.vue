<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
};
</script>

<template>
    <div class="card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.client_name }}</p>
        <p>{{ project.summary }}</p>
        <img src="" alt="" />

        <h3>{{ project.type.name }}</h3>
        <p v-for="technologies in project.technologies" :key="technologies.id">{{ technologies.name }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 10px);
    height: 300px;
    overflow: auto;
    margin-bottom: 10px;
    padding: 20px 10px;
    border-radius: 5px;
    background-color: rgb(224, 219, 219);
}
</style>
