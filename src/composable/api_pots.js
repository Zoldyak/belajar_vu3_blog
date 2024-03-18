import { ErrorCodes, ref } from 'vue'
import { projectfirestore } from "@/firebase/config";
const getPosts = ()=>{
    const posts = ref([])
    const error =ref(null)
    const load =async  () =>{
        try {
          await new Promise((resolve) => {
            console.log("LOADING...");
            setTimeout(resolve, 2000)
        })

        const res= await projectfirestore.collection('post').get()
        const data= res.docs.map(()=>{
          return  {
            ...doc.data(),
            id:doc.id
          }
        })
        console.log(data);

          // let data = await  fetch('http://localhost:3000/posts')
          // if (!data.ok ) {
          //   throw Error('Tidak Ada Data');
          // }
          // posts.value = await data.json();
        } catch (err) {
          error.value=err.message
        }
      }
    return { load,posts,error}
}
export default getPosts