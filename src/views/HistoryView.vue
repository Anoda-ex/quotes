<template>
    <div class="wrapper">
        <div>
            <h1 class="title">History</h1>
        </div>
        <ul v-if="history.length" class="history">
            <li v-for="(item, index) in history" :key="index">
                "{{ item.content }}" - {{ item.author }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {useQuotesStore} from "@/stores/counter.js";


const {history} = useQuotesStore();

</script>

<style scoped>
.wrapper{
    height: 100%;
    overflow: auto;

}
.title{
    text-align: center;
}
.history {
    text-align: left;
    max-width: 400px;
    margin: 20px auto;
    list-style-type: none;
    padding: 0;
}
.history li {
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
</style>
