<template lang="v">
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label>
                    Nama Deppan
                </label>
                <input type="text" v-model="FirstName"/>             
            </div>
            <div>
                <label>
                    Nama Belakang
                </label>
                <input type="text"  v-model="LastName"/>             
            </div>
            <div>
                <label>
                    tags
                </label>
                <input type="text"  v-model="tag" @keydown.enter.prevent="handlekeydownn"/>             
            </div>
            <button type="submit">Kirim</button>
        </form>
        <div v-for="tag in tags" :key="tag">
            {{tag}}
        </div>
        {{FirstName}}
        {{LastName}}
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const router=useRoute()
        const FirstName= ref()
        const LastName= ref()
        const tag= ref()
        const tags= ref([])
        const handlekeydownn = ()=>{
            if (! tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g,'')
                tags.value.push(tag.value)
            }
            tag.value=''
        }
        const handleSubmit = async ()=>{
            const post_data={
                first_name:FirstName.value,
                last_name:LastName.value,
                tags:tags.value
            }
            await fetch('http://localhost:3000/posts',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(post_data)
            })
             router.push({
                name: 'home'
            })
        }
       
        return {
            FirstName,
            LastName,
            tag,
            tags,
            handlekeydownn,
            handleSubmit,
            router
        }
    }
}
</script>
<style lang="">
    
</style>