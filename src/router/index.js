import Vue from 'vue'
import Router from 'vue-router'
import Alert from "../views/Alert/Alert";
import IO from "../views/IO/IO";
import InDoor from "../views/InDoor/InDoor";
import OutDoor from "../views/OutDoor/OutDoor";
import OutPut from "../views/OutPut/OutPut";
import Maintain from "../views/Maintain/Maintain";
import Main from "../views/Main";


Vue.use(Router)
const routes = [
  {
    path:'/',
    name:'Alert',
    title:'首页',
    component:Main,
    children:[{
      path:'Alert',
      title:'告警记录',
      name:'Alert_index',
      component:Alert
    }]
  },
  {
    path:'/',
    name:'IO',
    title:'出入',
    component:Main,
    children:[{
      path:'IO',
      title:'出入记录',
      name:'IO_index',
      component:IO
    }]
  },
  {
    path:'/',
    name:'Indoor',
    title:'室内',
    component:Main,
    children:[{
      path:'Indoor',
      title:'室内记录',
      name:'Indoor_index',
      component:InDoor
    }]
  },
  {
    path:'/',
    name:'Outdoor',
    title:'室外',
    component:Main,
    children:[{
      path:'Outdoor',
      title:'室外记录',
      name:'Outdoor_index',
      component:OutDoor
    }]
  },
  {
    path:'/',
    name:'OutPut',
    title:'外出',
    component:Main,
    children:[{
      path:'OutPut',
      title:'外出记录',
      name:'Output_index',
      component:OutPut
    }]
  },
  {
    path:'/',
    name:'Maintain',
    title:'保养',
    component:Main,
    children:[{
      path:'Maintain',
      title:'保养记录',
      name:'Maintain_index',
      component:Maintain
    }]
  },
]
const router = new Router({
  routes
});

export default router
