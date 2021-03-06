const toTypes = [String,Object]
const eventTypes = [String,Array]

export default {
  name:'RouterLink',
  props:{
    to:{
      type:toTypes,
      required:true
    },
    tag:{
      type:String,
      default:'a'
    },
    event:{
      type:eventTypes,
      default:'click'
    }
  },
  render(h){
    const router = this.$router 
    const current = this.$router
    const {location} = router.resolve(
      this.to,
      current
    )
    const data = {
      on:{
        click:()=>{
          router.push(location)
        }
      }
    }
    return h(this.tag,data,this.$slots.default)
  }
}