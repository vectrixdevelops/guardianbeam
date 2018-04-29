
import { h } from 'hyperapp'

import RouterComponents from './include/router/RouterComponents'

import Navigation from './include/Navigation'

const Main = (state, actions) =>
  h('div', { class: 'view' }, [
    Navigation,
    h('div', { class: 'page' }, [
      RouterComponents.Route
    ])
  ]);

export default Main
