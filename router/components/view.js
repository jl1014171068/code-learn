export default {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default',
    },
  },
  render(_, { props, children, parent, data }) {
    const h = parent.$createElement
    const name = props.name
    const route = parent.$route
    const matched = route.matched
    const component = matched && matched.components[name]
    if (!matched || !component) {
      return h()
    }
    return h(component, data, children)
  },
}
