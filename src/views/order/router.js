export default [
    {
        path: '/myorder',
        name: 'myorder',
        component: () => import('./'),
        children: [
            {
                path: ':id',
                component: () => import('./order-detail/order-detail'),
                props: true
            }
        ]
    }
]
