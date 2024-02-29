<template>
  <div class="HomeView">
   <h1>Home</h1>
   <div v-if="error">{{ error }}</div>
   <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
   </div>
   <div v-else>
      <Loading />
   </div>
   
   <!-- <div v-for="row in posts" :key="row.id">
    <h3>{{ row.title }}</h3>
  </div> -->
  <button @click="showPosts = !showPosts">onUnmounted</button>
  <button @click="posts.pop()">Delete</button>
  </div>
</template>
<script>
// import PostList from "../components/PostList.vue"
import PostList from "../components/PostList";
import getPosts  from '../composable/api_pots'
import Loading from '@/components/Loading.vue'
import { ErrorCodes, ref } from 'vue'
export default {
  name: 'HomeView',
  components: {
    PostList,
    Loading
  },
  setup(){

      const {load,posts,error} = getPosts() 
      
      load()
      const showPosts = ref(true)
      return {
        posts,
        showPosts,
        error
      }
  }

  // setup(){
  //   console.log('setup');
  //   const posts= ref([
  //     {
  //       id:1,
  //       title:"Judul 1",
  //       body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //     },
  //     {
  //       id:2,
  //       title:"Judul 2",
  //       body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //     }
  //   ])
   
  //   return {
  //     posts
  //   }
  // },

}
</script>
