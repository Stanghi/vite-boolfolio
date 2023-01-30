<script>
import axios from 'axios';
import { baseUrl } from '../js/data/data';
import { store } from '../js/data/store';
export default {
    name: 'FormSearch',
    data() {
        return {
            tosearch: '',
            baseUrl,
            store,
        };
    },
    methods: {
        getApi() {
            const data = new FormData();
            data.append('tosearch', this.tosearch);

            axios.post(baseUrl + 'projects/search', data).then((result) => {
                this.tosearch = '';
                store.projects = result.data.projects;
                console.log(this.tosearch, result.data);
            });
        },
    },
};
</script>

<template>
    <div class="container-search">
        <input type="text" placeholder="Search..." v-model="tosearch" @keyup.enter="getApi()" />
        <button @click="getApi()">Search</button>
    </div>
</template>

<style lang="scss" scoped>
.container-search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    input {
        width: 25%;
        margin-right: 5px;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid black;
    }
    button {
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid black;
    }
}
</style>
