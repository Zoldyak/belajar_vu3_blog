import { ErrorCodes, ref } from 'vue'

const getPosts = ()=>{
    const posts = ref([])
    const error =ref(null)
    const load =async  () =>{
        try {
          let data = await  fetch('http://localhost:3000/posts')
          if (!data.ok ) {
            throw Error('Tidak Ada Data');
          }
          posts.value = await data.json();
        } catch (err) {
          error.value=err.message
        }
      }
    return { load,posts,error}
}
export default getPosts