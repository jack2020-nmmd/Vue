import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
const routes = [
    {
        path : "/msite",
        component : Msite
    },
    {
        path : "/order",
        component : Order
    },
    {
        path : "/profile",
        component : Profile
    },
    {
        path : "/search",
        component : Search
    },

]

export default routes
