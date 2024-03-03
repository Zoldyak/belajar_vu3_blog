<template lang="">
    <router-link :to="{ name:'ShowPost', params:{id:data_item.id} }">
       <h1>{{data_item.email}}</h1> 

        <h2 class="post-title">{{data_item.first_name}}</h2>
        <h3 class="post-subtitle">{{data_item.last_name}}</h3>
        {{snippet}}
    </router-link>
    <br>
    <span class="post-meta" v-for="tag in data_item.tags" :key="tag">
        {{tag}}
       
    </span>
</template>
<script>
import { computed } from "vue";
export default {
    
    props:['data_item'],
    setup(props) {
        const snippet =computed( ()=>{
            return props.data_item.email.substring(0,200) +"..."
        })
     return {
        snippet
     }
    }
}
</script>
<style lang="">
    
</style>