import Home from '../components/home.vue'
import Menu from '../components/menu.vue'
import Admin from '../components/admin.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import History from '../components/history.vue'
import Booking from '../components/booking.vue' 

export const routes = [
    {path: '/',
     name: 'homeLink',
     components: {
        default:Home,
        "booking-guide": Booking,
        "history": History 
    } 
},
    {path: '/menu', name: 'menuLink', component: Menu},  
    {path: '/admin', name: 'adminLink', component:Admin, beforeEnter:(to,from,next) => {
      alert('This area is for registered users, please login to continue');
      next()
    }},
    {path: '/about', name: 'aboutLink', component: About, children: [
        {path:'/contact',name: 'contactLink', component: Contact},
        {path:'/history',name: 'historyLink', component: History},
        {path:'/booking', name: 'bookingLink',component: Booking}, 
      
    ]},
    {path: '*', redirect:'/'}
  ]