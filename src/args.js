
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

const getState = d => state => state
const update = data => data

const state = {
  // custom state
  // ...

  // launchpad state
  Images: {},
  Router: {},
  RouterPage: {},
  Stash: {}
}

const actions = {
  // custom actions
  // ...

  // launchpad actions
  Images: {
    update
  },
  Reroute: {
    update
  },
  Router,
  RouterPage,
  Stash: {
    update
  },

  // launchpad top-level actions
  getState,
  update
}

export { state, actions }
