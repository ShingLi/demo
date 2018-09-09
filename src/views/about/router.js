export default [
    {
        path: '/about',
        name: 'about',
        component: () => import('/')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import('./feedback')
    },
    {
        path: '/copyright',
        name: 'copyright',
        component: () => import('./copyright')
    },
    {
        path: '/disclaimer',
        name: 'disclaimer',
        component: () => import('./disclaimer')
    }
]
