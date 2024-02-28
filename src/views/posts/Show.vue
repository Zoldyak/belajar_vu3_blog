<template lang="">
    <div v-if="error">
        {{error}}
    </div>
    <div>
        <h3>
            Name : {{postdetail.first_name}}
        </h3>
        <p>email : {{postdetail.email}}</p>
    </div>
</template>
<script>
import  getPostsDetail from '@/composable/api_postdetail'
export default {
    props: ['id'],
    setup(props) {
        const {postdetail,error,load}= getPostsDetail(props.id)
        load()
        return {postdetail,error}
    }
}
</script>
<style lang="">
    
</style>