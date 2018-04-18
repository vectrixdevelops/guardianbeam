
const Router = {
  init: d => {
    const hash = window.location.hash
    const index = hash.indexOf('?')
    return {
      path: hash.slice(1, index === -1 ? hash.length : index)
    }
  },
  route: data => state => {
    const path = (typeof data.path === 'string' ? data.path : state.path)
    window.location.hash = path
  }
}

export default Router
