//会全部打包生成一个dist文件：
// import Home from '../pages/Home/Home.vue'
// import Classify from '../pages/Classify/Classify.vue'
// import Discern from '../pages/Discern/Discern.vue'
// import Cart from '../pages/Cart/Cart.vue'

//路由组件懒加载（首屏）
//用import函数    返回promise
//开始不执行，第一次请求才执行
//一个import函数打包生成一个dist文件
const Home = () => import('../pages/Home/Home.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Discern = () => import('../pages/Discern/Discern.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Login = () => import('../pages/Profile/Login/Login.vue')
const Register = () => import('../pages/Profile/Register/Register.vue')
const Search = () => import('../pages/Search/Search.vue')

//注册路由，没有写占位符
//首次请求时带params时显示，再刷新页面就没有了(params丢失)
//解决办法：注册路由时一定要写占位符
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
    // {
    //   path: '/personal',
    //   component: Profile
    // },
    {
      path: '/profile',
      component: Profile,
      children: [
        {
          path: '/profile/login',
          component: Login
        },
        {
          path: '/profile/register',
          component: Register
        },
        {
          path: '',
          redirect: '/profile/login'
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'/',
      redirect:'/home',
      meta: {
        isShowFooter: true
      }
    }
  ]


