<template lang="v">
    <!-- <div>
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
                    Email
                </label>
                <input type="text"  v-model="Email"/>             
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
    </div> -->


    <!-- Page Header-->
    <header class="masthead" style="background-image: url('assets/img/contact-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Contact Me</h1>
                            <span class="subheading">Have questions? I have answers.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div class="my-5">
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!-->
                            <form @submit.prevent="handleSubmit">
                                <div class="form-floating">
                                    <input class="form-control" type="text" v-model="FirstName"  placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">First Name</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                               
                                <div class="form-floating">
                                    <input class="form-control" type="text"  v-model="LastName" placeholder="Enter your phone number..." data-sb-validations="required" />
                                    <label for="phone">Last Name</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" type="text" v-model="Email"  placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="email">Email address</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" type="text"  v-model="tag" @keydown.enter.prevent="handlekeydownn" placeholder="Enter your message here..." data-sb-validations="required" />

                                    <label for="message">Message</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted-->
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form-->
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                <!-- Submit Button-->
                                <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Send</button>
                            </form>
                            <div v-for="tag in tags" :key="tag">
                                {{tag}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- Footer-->
</template>
<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { projectfirestore } from "@/firebase/config"
export default {
    setup() {
        const routes = useRouter()
        const FirstName= ref()
        const LastName= ref()
        const tag= ref()
        const Email= ref()
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
                tags:tags.value,
                email:Email.value
            }
            const res = projectfirestore.collection('posts').add(post_data)
            // await fetch('http://localhost:3000/posts',{
            //     method:"POST",
            //     headers:{"Content-Type":"application/json"},
            //     body:JSON.stringify(post_data)
            // })
            routes.push({
                name:'home'
            })
        }
       
        return {
            FirstName,
            LastName,
            tag,
            tags,
            handlekeydownn,
            handleSubmit,
            routes,
            Email
        }
    }
}
</script>
<style>
    /* .form-floating input, .form-floating textarea{
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }
    .was-validated .form-control:invalid, .form-control.is-invalid{
        border-color: #dc3545;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    } */
</style>