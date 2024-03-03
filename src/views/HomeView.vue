<template>
  <div class="HomeView">
  
   
   <!-- <div v-for="row in posts" :key="row.id">
    <h3>{{ row.title }}</h3>
  </div> -->
  <!-- <button @click="showPosts = !showPosts">onUnmounted</button>
  <button @click="posts.pop()">Delete</button>
  <br>
  <button class="btn btn-primary">TES</button>
  <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui pariatur facere placeat odio atque nesciunt corporis et molestias, eius neque. Molestias repellendus impedit nulla corrupti dolores delectus distinctio soluta!</p> -->
 <!-- Page Header-->
        <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!-- Post preview-->
                    <div v-if="error">{{ error }}</div>
                    <div v-if="posts.length">
                        <PostList v-if="showPosts" :posts="posts" />
                    </div>
                    <div v-else>
                        <Loading />
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-->
  </div>
</template>
<script>
// import PostList from "../components/PostList.vue"
import PostList from "../components/posts/PostList";
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
  },
  mounted() {
    console.log($('.para').text());
  },

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
