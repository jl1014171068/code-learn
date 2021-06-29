import { install } from './install'
import { createMatcher } from './create-matcher'
import { HTML5History } from './history/html5'
import { inBrowser } from './util/dom'
export default class VueRouter {
  constructor(options) {
    this.app = null
    this.apps = []
    this.options = options
    this.matcher = createMatcher(options.routes || [], this)
    this.history = new HTML5History(this, options.base)
  }
}

VueRouter.install = install
VueRouter.version = '__VERSION__'

if (inBrowser && window.Vue) window.Vue.use(VueRouter)
