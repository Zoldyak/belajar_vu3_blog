<template>
    <div class="post-list">
       <div v-for="(item, index) in posts" :key="index">
            <!-- <h3>{{ item.title }}</h3> -->
            <PostSingle :data_item="item" />
        </div>
    </div>
</template>
<script>


import PostSingle from './PostSingle.vue';
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
