//Imports de Vue
import Vue from 'vue'
import Router from 'vue-router'
//Imports internas
import Home from './views/Home.vue'
import About from './views/About.vue'
import Information from './views/Information.vue'
import Schedule from './views/Schedule.vue'
import GameDetails from './views/GameDetails.vue'
import Stadiums from './views/Stadiums.vue'
import Contact from './views/Contact.vue'
import Rules from './views/Rules.vue'
import Registration from './views/Registration.vue'
//Imports internas relacionadas con Firebase
import Chat from './views/Chat.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/information',
      name: 'information',
      component: Information,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      // Los ":" vuelven la ruta dinamica 
      path: '/gameDetails/:id',
      name: 'gameDetails',
      component: GameDetails,
    },
    {
      path: '/stadiums',
      name: 'stadiums',
      component: Stadiums,
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/Chat/:id',
      name: 'Chat',
      component: Chat,
    },
  ]
})
