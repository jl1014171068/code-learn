import { inBrowser } from "../util/dom";
import {START} from '../util/route'
export class History {
  constructor(router,base){
    // 路由实例对象
    this.router = router
    // 基本路径
    this.base = normalizeBase(base)
    // 当前路由
    this.current = START
    console.log(router,base)
  }
}

function normalizeBase(base){

}