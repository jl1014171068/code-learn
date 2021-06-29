export function createRoute(record, location) {
  const route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    // 当前路由匹配的组件
    matched: { components: record ? record.components : {} },
  }
  return Object.freeze(route) // 冻结不让修改
}

// the starting route that represents the initial state
export const START = createRoute(null, {
  path: '/',
})
