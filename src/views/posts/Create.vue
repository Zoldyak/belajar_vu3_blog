<template lang="v">
    <div>
        <form>
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
export default {
    setup() {
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
        return {
            FirstName,
            LastName,
            tag,
            tags,
            handlekeydownn
        }
    }
}
</script>
<style lang="">
    
</style>