import View from './components/view'
import Link from './components/link'

export let _Vue

export function install(Vue) {
  // 表示路由插件已经安装，无需在此安装，确保install方法只调用一次
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = (v) => v !== undefined

  // vue 在每个实例中挂在一个属性_routerRoot
  Vue.mixin({
    beforeCreate() {
      if (isDef(this.$options.router)) {
        // 根实例
        this._routerRoot = this
        this._router = this.$options.router
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        // 其他子实例
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
    },
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._routerRoot._router
    },
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route
    },
  })

  // 注册全局组建
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const starts = Vue.config.optionMergeStrategies 
  starts.beforeRouteEnter = starts.beforeRouteLeave = starts.beforeRouteUpdate = starts.created 
}
