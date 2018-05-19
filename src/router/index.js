import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login/login'
import pages from 'views/pages/index'
import group from 'views/pages/group'
import managerArea from 'views/pages/managerArea'
import powerArea from 'views/pages/powerArea'
import computedOnline from 'views/pages/powerArea/computedOnline'
import distribution from 'views/pages/powerArea/distribution'
import lineLoss from 'views/pages/powerArea/lineLoss'
import primaryUser from 'views/pages/powerArea/primaryUser'
import problemPlat from 'views/pages/powerArea/problemPlat'
import terminal from 'views/pages/terminal'
import terminalMan from 'views/pages/terminal/terminalMan'
import recordMan from 'views/pages/terminal/recordMan'
import portMan from 'views/pages/terminal/portMan'
import dataCollMan from 'views/pages/terminal/dataCollMan'
import user from 'views/pages/user'
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
          component: user,
          children: [
            {path: 'dataAna', name: 'dataAna', component: dataAna},
            {path: 'managerAIO', name: 'managerAIO', component: managerAIO},
            {path: 'managerRep', name: 'managerRep', component: managerRep},
            {path: 'querySyn', name: 'querySyn', component: querySyn},
            {path: 'queryWork', name: 'queryWork', component: queryWork}
          ]
        },
        {
          path: 'terminal',
          name: 'terminal',
          component: terminal,
          children: [
            {path: 'terminalMan', name: 'terminalMan', component: terminalMan},
            {path: 'recordMan', name: 'recordMan', component: recordMan},
            {path: 'portMan', name: 'portMan', component: portMan},
            {path: 'dataCollMan', name: 'dataCollMan', component: dataCollMan}
          ]
        },
        {
          path: 'powerArea',
          name: 'powerArea',
          component: powerArea,
          children: [
            {path: 'computedOnline', name: 'computedOnline', component: computedOnline},
            {path: 'distribution', name: 'recordMan', component: distribution},
            {path: 'lineLoss', name: 'lineLoss', component: lineLoss},
            {path: 'primaryUser', name: 'primaryUser', component: primaryUser},
            {path: 'problemPlat', name: 'problemPlat', component: problemPlat}
          ]
        },
        {
          path: 'group',
          name: 'group',
          component: group
        },
        {
          path: 'managerArea',
          name: 'managerArea',
          component: managerArea
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
