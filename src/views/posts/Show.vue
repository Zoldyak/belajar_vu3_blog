<template>

            <!-- Page Header-->
            <header class="masthead" style="background-image: url('assets/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <div v-if="error">
                                {{ error }}
                            </div>
                            <div v-if="post">
                                <h3>
                                    <h1>{{ post.first_name }}</h1>
                                    Name : 
                                </h3>
                                <h2 class="subheading">{{ post.email }}</h2>
                            </div>
                            <div v-else>
                                <Loading />
                            </div>
                           
                           
                            <span class="meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on August 24, 2023
                            </span>
                            <button class="btn btn-danger" @click="handleDelete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div v-if="post">
                            <span class="meta" v-for="tag in post.tags" :key="tag">
                            #{{ tag }}
                            </span>
                        </div>
                        <div v-else>
                            <Loading />
                        </div>
                    </div>
                </div>
            </div>
        </article>
</template>

<script>
import { ref, onMounted } from 'vue';
import getPost from '@/composable/api_postdetail';
import Loading from '@/components/Loading.vue'
import { projectfirestore } from "@/firebase/config"
import { useRouter } from "vue-router";
export default {
   props: ['id'],
   components:{
    Loading
   },
   setup(props) {
    
         const router = useRouter()
        const { post,error,load } = getPost(props.id);

        onMounted(async () => {
            await new Promise((resolve) => {
                setTimeout(resolve, 2000)
            })
             load()
        });
        const handleDelete= async ()=>{
            await projectfirestore.collection('posts').doc(props.id).delete()
            router.push({
                name :'home'}
            )
        }
        return { post, error,handleDelete };
   }
}
</script>

<style>

</style>
