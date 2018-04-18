
import { h } from 'hyperapp'

import Profile from '../../Profile'
import Report from '../../Report'
import Reports from '../../Reports'

const RouterComponents = {
  Route: (state, actions) => {
    const routes = {
      '/profile': Profile,
      '/report': Report,
      '': Reports
    }

    return (routes[state.Router.path] || Reports)(state, actions)
  },
  Link: (props, children) => (state, actions) => {
    var to = props.to
    delete props.to

    return h('a', { onclick: () => actions.Router.route({ path: to }) }, children)
  }
}

export default RouterComponents
