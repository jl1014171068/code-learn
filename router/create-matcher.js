import { createRouteMap } from "./create-route-map"
export function createMatcher(routes,router){
  const {pathList,pathMap,nameMap} = createRouteMap(routes)

  // console.log('pathList', pathList)
  // console.log('pathMap', pathMap)
  // console.log('nameMap', nameMap)
}