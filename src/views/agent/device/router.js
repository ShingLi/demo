export default [
    {
        path: '/device', // 代理商首页 设备管理
        name: 'device',
        component: () => import('./device'),
        children: [
            {
                path: ':id',
                component: () => import('./device-detail/device-detail')
            }
        ]
    }
]
