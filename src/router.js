import VueRouter from 'vue-router';
import Home from './components/Home';
import DadosForm from './components/DadosForm';
import Filme from './components/Filme';
 
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
        {
            path: '/filme/:id',
            name: 'filme',
            component: Filme
        },
    ]
});