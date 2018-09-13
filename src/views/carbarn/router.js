export default [
    {
        path: '/carbarn',
        name: 'carbran',
        component: () => import('./'),
        children: [
            {
                path: ':id',
                component: () => import('./carbarn-detail/carbarn-detail')
            },
            {
                path: '/apply-carbarn',
                name: 'applyCarbarn',
                component: () => import('./apply-carbarn/apply-carbarn')
            }
        ]
    }
]
