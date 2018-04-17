
import Dummy from './Dummy'
import Graphic from './Graphic'
import NotFound from './NotFound'
// import Reroute from './Reroute'

import shallowEqualArrays from '../helpers/shallowEqualArrays'

const RouterView = d => (state, actions) => {
  // map paths to views
  const routes = {
    '': Graphic,
    '/dummy-route-1': Dummy({ text: '1' }),
    '/dummy-route-2': Dummy({ text: '2' }),
    '/dummy-route-3': Dummy({ text: '3' })
  }

  // update RouterPage's paths if needed
  const oldPaths = state.RouterPage.paths
  const paths = Object.keys(routes)
  if (!oldPaths || !shallowEqualArrays(oldPaths, paths)) {
    actions.RouterPage.init({ paths })
  }

  // render route
  return routes[state.Router.path] || NotFound
}

export default RouterView
