import { ErrorCodes, ref } from 'vue'
import { projectfirestore } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getPosts = ()=>{
    const posts = ref([])
    const error =ref(null)
    const load =async  () =>{
        try {
          await new Promise((resolve) => {
            console.log("LOADING...");
            setTimeout(resolve, 2000)
        })
        // const querySnapshot = await getDocs(collection(projectfirestore, "post"));
        // console.log(querySnapshot);
        const res= await projectfirestore.collection('posts').get() /// POSTS ada nama collection yang ada di firebase  firestore
        // console.log(res);
         posts.value= res.docs.map(doc=>{
          return  {
            ...doc.data(),
            id:doc.id
          }
        })
        console.log(posts);

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