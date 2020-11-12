import VueRouter from 'vue-router';
import Home from './components/Home';
import DadosForm from './components/DadosForm';
 
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: DadosForm
        },
    ]
});