import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login/login'
import pages from 'views/pages/index'
import group from 'views/pages/group'
import groupNav from 'views/pages/group/navIndex'
import managerArea from 'views/pages/managerArea'
import managerAreaNav from 'views/pages/managerArea/navIndex'
import powerArea from 'views/pages/powerArea'
import powerAreaNav from 'views/pages/powerArea/navIndex'
import computedOnline from 'views/pages/powerArea/computedOnline'
import distribution from 'views/pages/powerArea/distribution'
import lineLoss from 'views/pages/powerArea/lineLoss'
import primaryUser from 'views/pages/powerArea/primaryUser'
import problemPlat from 'views/pages/powerArea/problemPlat'
import terminal from 'views/pages/terminal'
import terminalNav from 'views/pages/terminal/navIndex'
import terminalMan from 'views/pages/terminal/terminalMan'
import recordMan from 'views/pages/terminal/recordMan'
import portMan from 'views/pages/terminal/portMan'
import dataCollMan from 'views/pages/terminal/dataCollMan'
import user from 'views/pages/user'
import userNav from 'views/pages/user/navIndex'
import dataAna from 'views/pages/user/dataAna'
import managerAIO from 'views/pages/user/managerAIO'
import managerRep from 'views/pages/user/managerRep'
import querySyn from 'views/pages/user/querySyn'
import queryWork from 'views/pages/user/queryWork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/pages',
      name: 'pages',
      component: pages,
      children: [
        {
          path: 'user',
          name: 'user',
          components: {default: user, nav: userNav},
          children: [
            {path: 'dataAna', name: '数据分析', component: dataAna},
            {path: 'managerAIO', name: '多表合一管理', component: managerAIO},
            {path: 'managerRep', name: '报表管理', component: managerRep},
            {path: 'querySyn', name: '综合查询', component: querySyn},
            {path: 'queryWork', name: '工单查询', component: queryWork}
          ]
        },
        {
          path: 'terminal',
          name: 'terminal',
          components: {default: terminal, nav: terminalNav},
          children: [
            {path: 'terminalMan', name: '终端管理', component: terminalMan},
            {path: 'recordMan', name: '档案管理', component: recordMan},
            {path: 'portMan', name: '接口管理', component: portMan},
            {path: 'dataCollMan', name: '数据采集管理', component: dataCollMan}
          ]
        },
        {
          path: 'powerArea',
          name: 'powerArea',
          components: {default: powerArea, nav: powerAreaNav},
          children: [
            {path: 'computedOnline', name: '计算在线检测', component: computedOnline},
            {path: 'distribution', name: '配变检测分析', component: distribution},
            {path: 'lineLoss', name: '线损分析', component: lineLoss},
            {path: 'primaryUser', name: '重点用户检测', component: primaryUser},
            {path: 'problemPlat', name: '问题交流平台', component: problemPlat}
          ]
        },
        {
          path: 'group',
          name: 'group',
          components: {default: group, nav: groupNav}
        },
        {
          path: 'managerArea',
          name: 'managerArea',
          components: {default: managerArea, nav: managerAreaNav}
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
