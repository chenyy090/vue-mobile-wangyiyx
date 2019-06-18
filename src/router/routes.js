// import Home from '../pages/Home/Home.vue'
// import Classify from '../pages/Classify/Classify.vue'
// import Discern from '../pages/Discern/Discern.vue'
// import Cart from '../pages/Cart/Cart.vue'

//路由组件懒加载（首屏）
//返回promise
//开始不执行，第一次请求才执行
const Home = () => import('../pages/Home/Home.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Discern = () => import('../pages/Discern/Discern.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')


export default [
  //meta是route的属性
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/discern',
      component: Discern,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isShowFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/',
      redirect:'/home',
      meta: {
        isShowFooter: true
      }
    }
  ]


