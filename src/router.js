import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';
import Profiles from './components/profiles/Profiles';
import About from './components/about/About';
import Search from './components/search/Search';


export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/artists', component: Artists },
    { path: '/profiles', component: Profiles },
    { path: '/about', component: About },
    { path: '/search', component: Search },
    { path: '*', redirect: '/' }
  ]
});