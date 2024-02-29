<template>
    <div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="post">
            <h3>
                Name : {{ post.first_name }}
            </h3>
            <p>email : {{ post.email }}</p>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import getPost from '@/composable/api_postdetail';

export default {
   props: ['id'],
   setup(props) {
    

        const { post,error,load } = getPost(props.id);

        onMounted(async () => {
            await load()
        });

        return { post, error };
   }
}
</script>

<style>
</style>
