import './assets/main.css'
import { createApp, reactive } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


import header from './components/headerFooter/header.vue';
import footer from './components/headerFooter/footer.vue';
import Loader from './components/utilis/loader.vue'
import Toaster from "@meforma/vue-toaster";
import Articles from './components/Articles/index.vue';
import Contact from './components/Contact/index.vue';
import Home from './components/home.vue'
import Article from './components/Articles/article.vue';
import Login from './components/login.vue'
import notFound from './components/404.vue'
import Notify from './components/notify.vue';

const app = createApp(App)
// const theData = (route) =>{
//     return{
//         crazyProps: route.path + 'nuts'
//     }
// }
const checkAuth = () =>{//cek jika blm login redirect ke login
    const isAuth = loginCheck.loggedIn;;
    if(!isAuth) return './Login'
    return true
}

const isAdmin = () =>{//cek jika blm login redirect ke login
    const isAdmin = loginCheck.loggedIn;;
    if(!isAdmin) return './Login'
    return true
}

const routes = createRouter({//history untuk melihat history perpindahan lama web
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home },//homepage
        // {path: '/login', component: Login },  
        { 
            path: '/login', 
            components: {
                default: Login,//jika di path lain maka ini diubah sesuai name path
                notify: Notify//menambah file ini saat di page login. dipanggil di app.vue
            }, 
            name: 'Login' 
        },        
        {path: '/articles', component: Articles, beforeEnter: [checkAuth, isAdmin]},
        {path: '/mk', component: Contact, name: 'contactName' },//dgn name maka path tidak penting karena dipanggi memakai compononet
        // {path: '/contact', redirect:'/' },redirect jika page contact belum selesai build
        //nested route below
        // {path: '/articles', component: Articles, children:[
        //     {path: ':articleId', component: Article, props:true },//, props agar bisa mengirim data dari sini ke child
        // ]},
        {path: '/articles/:articleId', component: Article, props:true },//, props agar bisa mengirim data dari sini ke child
        
        {path: '/:notFound(.*)', component: notFound }//dynamic, jika memasukkan url page yang tidak adaa, akan notFound (.*)
    
    ],
    linkActiveClass: 'active'//active kelas boostrap. mengubah styling header, 
    //tergantung page yang active, active= header biru
});

// --- Auth User ---
const loginCheck = reactive({
    loggedIn: false,  // To track login status
    firstName: ''     // To store the first name of the logged-in user
  });

// routes.beforeEach((to, from, next) => {
//     console.log('beforeEach');

//     // izinkah akses ke path berikut meski blum login '/'
//     if (to.path === '/') { return next(); }
//     if (to.path === '/articles') { return next(); }
//     //blok path berikut, perlu login
//     const isAuth = loginCheck.loggedIn; // Memeriksa status login
//     if (to.path !== '/login' && !isAuth) {
//         return next('/login'); // Redirect ke '/login'
//     }
//     if (to.path === '/login' && isAuth) {return next('/');}
//     next(); // Izinkan akses untuk page lain
// });

//meta
routes.beforeEach((to)=>{
    console.log(to)
})
app.component('app-header', header)
app.component('app-footer', footer)
app.component('app-loader', Loader)
app.component('app-warning', Toaster)

app.provide('loginCheck', loginCheck);
app.use(Toaster);//karena dependecies maka appUse
app.use(routes)
app.mount('#app')