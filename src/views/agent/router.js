import device from './device/router'
import order from './order-list/router'
export default [
    {
        path: '/agent-index',
        name: 'agent-index',
        component: () => import('./')
    },
    {
        path: '/user-center', // 代理商个人中心
        name: 'user-center',
        component: () => import('./user-center/user-center')
    },
    {
        path: '/pwd', // 个人中心账户密码
        name: 'pwd',
        component: () => import('./pwd/pwd')
    },
    {
        path: '/addSubAccount', // 个人中心添加小区管理员
        name: 'addSubAccount',
        component: () => import('./addsubaccount/addsubaccount')
    },
    {
        path: '/install', // 个人中心安装设备
        name: 'install',
        component: () => import('./install/install')
    },
    {
        path: '/community', // 小区管理员
        name: 'community',
        component: () => import('./community/community')
    },
    ...device,
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./chart/chart')
    },
    {
        path: '/earnings',
        name: 'earnings',
        component: () => import('./earnings/earnings')
    },
    ...order,
    {
        path: '/bind-card',
        name: 'bind-card',
        component: () => import('./bind-card')
    }
]
