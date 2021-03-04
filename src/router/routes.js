import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'
import Info from '../pages/Shop/Info/Info.vue'

import ShopContain from '../components/ShopContain/ShopContain.vue'
const routes = [
    {
        path : "/msite",
        component : Msite,
        meta : {
            isShow : true
        }
    },
    {
        path : "/order",
        component : Order,
        meta : {
            isShow : true
        }
    },
    {
        path : "/profile",
        component : Profile,
        meta : {
            isShow : true
        }
    },
    {
        path : "/search",
        component : Search,
        meta : {
            isShow : true
        }
    },
    {
        path : "/login",
        component : Login
    },
    {
        path : "/shop",
        component : Shop,
        redirect : '/shop/goods',
        children : [
            {
            path : "/shop/rating",
            component : Rating,
            },
            {
                path : "/shop/goods",
                component : Goods,
            },
            {
                path : "info",
                component : Info,
            },
        ]
    },
    {
        path : "/",
        redirect : "/msite"
    },
]

export default routes
