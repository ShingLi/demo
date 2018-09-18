export default [
    {
        path: '/agent-index',
        name: 'agent-index',
        component: () => import('./')
    },
    {
        path: '/user-center',
        name: 'user-center',
        component: () => import('./user-center/user-center')
    },
    {
        path: '/pwd',
        name: 'pwd',
        component: () => import('./pwd/pwd')
    },
    {
        path: '/addSubAccount',
        name: 'addSubAccount',
        component: () => import('./addsubaccount/addsubaccount')
    },
    {
        path: '/install',
        name: 'install',
        component: () => import('./install/install')
    },
    {
        path: '/community',
        name: 'community',
        component: () => import('./community/community')
    }
]
