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
export default {
    props:['posts'],
    components:{
        PostSingle
    },
    setup(props) {
        console.log(props.posts);
    }
}
</script>
