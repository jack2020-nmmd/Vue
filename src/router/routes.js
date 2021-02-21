import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
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
        path : "/",
        redirect : "/login"
    },
]

export default routes
