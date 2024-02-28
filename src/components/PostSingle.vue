<template lang="">
    <div>
        <h3>
            <router-link :to="{ name:'ShowPosts', params:{  id: data_item.id} }">
                {{data_item.first_name}}
            </router-link>
            
        </h3>
        <h4>
            {{snippet}}
        </h4>
    </div>
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