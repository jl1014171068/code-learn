export function createRouteMap(routes){
  const pathList = []
  const pathMap = Object.create(null)
  const nameMap = Object.create(null)
  routes.forEach(route=>{
    addRouteRecord(pathList,pathMap,nameMap,route)
  })
  return {
    pathList,
    pathMap,
    nameMap
  }
}
function addRouteRecord(pathList,pathMap,nameMap,route){
  // const {} = route
  console.log(route)
}