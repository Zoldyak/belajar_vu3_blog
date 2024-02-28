import { ErrorCodes, ref } from 'vue'

const getPostsDetail = (id)=>{
    const postdetail = ref(null)
    const error =ref(null)
    const load =async  () =>{
        try {
          let data = await  fetch('http://localhost:3000/posts/'+ id)
          if (!data.ok ) {
            throw Error('Tidak Ada Data');
          }
          postdetail.value = await data.json();
        } catch (err) {
          error.value=err.message
        }
      }
    return { postdetail,error,load}
}
export default getPostsDetail