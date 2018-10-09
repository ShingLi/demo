import Store from '@/store/'
export default [
    {
        path: '/',
        component: () => import('./'),
        children: [
            {
                path: 'index/',
                redirect: '/'
            }
        ]
    },
    {
        path: '/home/:id/:redirectUrl/',
        redirect: to => {
            Store.dispatch({
                type: 'setOpenId',
                amount: to.params.id
            })
            return `/${to.params.redirectUrl}/`
        }
    }
]
