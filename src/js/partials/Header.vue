<script>
export default {
    name: 'Header',
};
</script>

<template>
    <header>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'contacts' }">Contacts</router-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: grey;
    text-align: center;
    padding: 15px 0;
    ul {
        list-style: none;
        li {
            display: inline-block;
            padding: 10px 20px;
            a {
                font-weight: bold;
                color: white;
                text-decoration: none;
                text-transform: uppercase;
                &:hover,
                &.active {
                    color: black;
                }
            }
        }
    }
}
</style>
