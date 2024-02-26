<template lang="">
    <div>
        <h3>
            {{data_item.title}}
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
            return props.data_item.body.substring(0,200) +"..."
        })
     return {
        snippet
     }
    }
}
</script>
<style lang="">
    
</style>