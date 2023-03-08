// Import VueRouter
import * as VueRouter from 'vue-router'; 

// Import Layout
import MainLayout from '../layout/MainLayout.vue';

// Import Views
import PresentationView from '../views/PresentationView.vue';
import AboutView from '../views/AboutView.vue';
import SkillsView from '../views/SkillsView.vue';
import WorkView from '../views/WorkView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
    {
        path: '/',
        redirect: {
            path: '/presentation'
        },
        component: MainLayout,
        children: [
            {
                path: '/presentation',
                name: 'Presentation',
                component: PresentationView
            },
            {
                path: 'about',
                name: 'About',
                component: AboutView
            },
            {
                path: 'skills',
                name: 'Skills',
                component: SkillsView
            },
            {
                path: 'work',
                name: 'Work',
                component: WorkView
            },
            {
                path: 'contact',
                name: 'Contact',
                component: ContactView
            }
        ]
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

export default router;