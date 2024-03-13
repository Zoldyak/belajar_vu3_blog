import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowPost from '../views/posts/Show.vue'
import PostCreate from '../views/posts/Create.vue'
import Tag from '../views/posts/Tag.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props:true
  },
  {
    path: '/posts/Create',
    name: 'PostCreate',
    component: PostCreate,
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
