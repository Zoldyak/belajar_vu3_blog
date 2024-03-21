import { ErrorCodes, ref } from 'vue'
import { projectfirestore } from "@/firebase/config"
const getPost = (id)=>{
  
    const post = ref(null)
    const error =ref(null)
    const load =async  () =>{
        try {
          console.log("ID KU"+id)
          const res = await  projectfirestore.collection('posts').doc(id).get()
           if (!res.exists ) {
            throw Error('Tidak Ada Data');
          }
          post.value = {
            ...res.data(),
            id:res.id
          }
          // let data = await  fetch('http://localhost:3000/posts/'+id)
          // if (!data.ok ) {
          //   throw Error('Tidak Ada Data');
          // }
          // post.value = await data.json();
        } catch (err) {
          error.value=err.message
        }
      }
    return { post,error,load}
}
export default getPost