import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Questions = () => import('@/views/Questions')
const Personalize = () => import('@/views/Personalize')
const Quiz = () => import('@/views/Quiz')
const FinishQuiz = () => import('@/views/FinishQuiz')





const Colors = () => import('@/views2/theme/Colors')
const Typography = () => import('@/views2/theme/Typography')

const Charts = () => import('@/views2/Charts')
const Widgets = () => import('@/views2/Widgets')

// Views - Components
const Cards = () => import('@/views2/base/Cards')
const Forms = () => import('@/views2/base/Forms')
const Switches = () => import('@/views2/base/Switches')
const Tables = () => import('@/views2/base/Tables')
const Tabs = () => import('@/views2/base/Tabs')
const Breadcrumbs = () => import('@/views2/base/Breadcrumbs')
const Carousels = () => import('@/views2/base/Carousels')
const Collapses = () => import('@/views2/base/Collapses')
const Jumbotrons = () => import('@/views2/base/Jumbotrons')
const ListGroups = () => import('@/views2/base/ListGroups')
const Navs = () => import('@/views2/base/Navs')
const Navbars = () => import('@/views2/base/Navbars')
const Paginations = () => import('@/views2/base/Paginations')
const Popovers = () => import('@/views2/base/Popovers')
const ProgressBars = () => import('@/views2/base/ProgressBars')
const Tooltips = () => import('@/views2/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views2/buttons/StandardButtons')
const ButtonGroups = () => import('@/views2/buttons/ButtonGroups')
const Dropdowns = () => import('@/views2/buttons/Dropdowns')
const BrandButtons = () => import('@/views2/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views2/icons/Flags')
const FontAwesome = () => import('@/views2/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views2/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views2/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views2/notifications/Alerts')
const Badges = () => import('@/views2/notifications/Badges')
const Modals = () => import('@/views2/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views2/pages/Page404')
const Page500 = () => import('@/views2/pages/Page500')
const Login = () => import('@/views2/pages/Login')
const Register = () => import('@/views2/pages/Register')

// Users
const Users = () => import('@/views2/users/Users')
const User = () => import('@/views2/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'history',
          name: 'history',
          component: History
        },
        {
          path: 'questions',
          name: 'questions',
          component: Questions
        },
        {
          path: 'personalize',
          name: 'personalize',
          component: Personalize
        },
        {
          path: 'quiz',
          name: 'quiz',
          component: Quiz
        },
        {
          path: 'finishQuiz',
          name: 'finishQuiz',
          component: FinishQuiz
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
