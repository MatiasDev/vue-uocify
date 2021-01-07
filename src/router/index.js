import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Playlist from '@/views/Playlist'
import Detail from '@/views/Artist'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name:'home',
      component: Home
  },  
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },        
  {
    path: '/search/:q',
    name:'search',
    component: SearchResults
  },
  {
    path: '/playlist/:idplaylist',
    name:'playlist',
    component: Playlist
  }, 
  {
    path: '/artist/:idartist',
    name:'artist',
    component: Detail
  },  
  {
      path: '*',
      name:'notfound',
      component: NotFound
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router