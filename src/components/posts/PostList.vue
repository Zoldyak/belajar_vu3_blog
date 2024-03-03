<template>
    <div class="post-list">
        <div class="post-preview" v-for="(item, index) in posts" :key="index">
            <PostSingle :data_item="item" />
            <hr> 
        </div>
        <!-- Divider-->
        <hr class="my-4" />
          <!-- Pager-->
        <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
          
    </div>
</template>
<script>


import PostSingle from '../posts/PostSingle.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue';
export default {
    props:['posts'],
    components:{
        PostSingle
    },
    setup(props) {
        // console.log(props.posts);
        onMounted(()=>console.log("component onMounted"))
        onUnmounted(()=>console.log("component onUnmounted"))
        onUpdated(()=>console.log("component onUpdate"))
    }
}
</script>
