<template lang="">
    <div v-if="error">
        {{error}}
    </div>
    <div>
        <h3>
            Name : {{post.first_name}}
        </h3>
        <p>email : {{post.email}}</p>
    </div>
</template>
<script>
import getPost from '@/composable/api_postdetail';
export default {
   props:['id'],
   setup(props) {
    const { post,error,load} = getPost(props.id)
    load()
    return { post,error}
   }
}
</script>
<style lang="">
    
</style>