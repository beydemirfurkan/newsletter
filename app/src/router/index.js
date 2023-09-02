import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import HomeOne_two from '../views/HomeOne_two.vue'
import HomeOne_three from '../views/HomeOne_three.vue'
import HomeOne_four from '../views/HomeOne_four.vue'
import Dark from '../views/Dark'
import DarkTwo from '../views/Dark_two'
import DarkThree from '../views/Dark_three'
import DarkFour from '../views/Dark_four'
import HomeTwo from '../views/HomeTwo'
import HomeTwo_two from '../views/HomeTwo_two.vue'
import HomeTwo_three from '../views/HomeTwo_three.vue'
import HomeTwo_four from '../views/HomeTwo_four.vue'
import HomeThree from '../views/HomeThree'
import HomeThree_two from '../views/HomeThree_two'
import HomeThree_three from '../views/HomeThree_three'
import HomeThree_four from '../views/HomeThree_four'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Archive from '../views/Archive.vue'
import fourOfour from '../components/404.vue'
import PostOne from '../components/Posts/PostOne/index.vue'
import PostTwo from '../components/Posts/PostTwo/index.vue'
import PostThree from '../components/Posts/PostThree/index'
import Business from '../components/category/Buisness.vue'
import Entertainment from '../components/category/Entertainment.vue'
import Features from '../components/category/Feature.vue'
import Sports from '../components/category/Sports.vue'
import Trending from '../components/category/Trending.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homev1.2',
    name: 'HomeOne_two',
    component: HomeOne_two
  },
  {
    path: '/homev1.3',
    name: 'HomeOne_three',
    component: HomeOne_three
  },
  {
    path: '/homev1.4',
    name: 'HomeOne_Four',
    component: HomeOne_four
  },
  {
    path: '/dark',
    name: 'Dark',
    component: Dark
  },
  {
    path: '/dark-two',
    name: 'DarkTwo',
    component: DarkTwo
  },
  {
    path: '/dark-three',
    name: 'DarkThree',
    component: DarkThree
  },
  {
    path: '/dark-four',
    name: 'DarkFour',
    component: DarkFour
  },
  {
    path: '/home-two',
    name: 'HomeTwo',
    component: HomeTwo
  },
  {
    path: '/homev2.2',
    name: 'HomeTwo_two',
    component: HomeTwo_two
  },
  {
    path: '/homev2.3',
    name: 'HomeTwo_three',
    component: HomeTwo_three
  },
  {
    path: '/homev2.4',
    name: 'HomeTwo_four',
    component: HomeTwo_four
  },
  {
    path: '/home-three',
    name: 'HomeThree',
    component: HomeThree
  },
  {
    path: '/homev3.2',
    name: 'HomeThree_two',
    component: HomeThree_two
  },
  {
    path: '/homev3.3',
    name: 'HomeThree_three',
    component: HomeThree_three
  },
  {
    path: '/homev3.4',
    name: 'HomeThree_four',
    component: HomeThree_four
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/404',
    name: '404',
    component: fourOfour
  },
  {
    path: '/posts/postOne',
    name: 'PostOne',
    component: PostOne
  },
  {
    path: '/posts/posttwo',
    name: 'PostTwo',
    component: PostTwo
  },
  {
    path: '/posts/postthree',
    name: 'PostThree',
    component: PostThree
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
