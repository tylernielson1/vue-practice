import { createRouter, createWebHashHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    routes: [
        { path: '/', redirect: '/teams' },
        { 
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { 
            path: '/users', 
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                console.log('beforeEnter users')
                next()
            }
        },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:notFound(.*)', redirect: '/teams' }
    ],
    linkActiveClass: 'active',
    history: createWebHashHistory(),
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    }
})

router.beforeEach(function(to, from, next) {
    console.log(to, from)
    next()
})

export default router;