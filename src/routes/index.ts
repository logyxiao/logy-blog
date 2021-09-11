import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'
import Article from '@/pages/article'
import History from '@/pages/history'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/history',
    exact: true,
    component: History,
  },
  {
    path: '/article',
    exact: true,
    component: Article,
  },
]

export default routesConfig
