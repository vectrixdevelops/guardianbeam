
import { h } from 'hyperapp'

import Profile from '../../Profile'
import Report from '../../Report'
import Reports from '../../Reports'

const RouterComponents = {
  Route: (state, actions) => {
    const routes = {
      '/profile': Profile,
      '/report': Report,
      '/reports': Reports,
      '': Reports
    }

    return (routes[state.Router.path] || Reports)(state, actions)
  },
  Link: (props, children) => (state, actions) => {
    var to = props.to
    var query = props.query
    delete props.to
    delete props.query

    return h('a', { onclick: () => actions.Router.route({ path: to, query: query }) }, children)
  }
}

export default RouterComponents
