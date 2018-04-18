
import { h } from 'hyperapp'

const Report = (state, actions) =>
  h('div', { class: 'report-container' }, [
    h('h1', {}, 'Report'),
    h('h2', {}, 'Route: ' + state.Router.path)
  ])

export default Report
