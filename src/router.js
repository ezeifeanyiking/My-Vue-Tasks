
import {createRouter, createWebHistory} from 'vue-router';
import DCHeros from './pages/DCHeros'
import Calendar from './pages/Calendar'
import Home from './pages/Home'


const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DCHeros },
    { path: '/calendar', component: Calendar }
] 
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;