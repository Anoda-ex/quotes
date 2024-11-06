<template>
    <header class="header">
        <nav class="navigation">
            <ul class="list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/history" >History</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
</script>
<style scoped>
.header{
    padding: 10px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.navigation{
    display: flex;
    justify-content: end;
}
.list{
    display: flex;
    gap: 10px;
    font-size: 20px;
    li a{
        color: white;
        text-decoration: none;
        &.router-link-exact-active{
            opacity: 0.4;
        }
    }
}
</style>