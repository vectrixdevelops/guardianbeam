
'use strict'

import { app } from 'hyperapp'

import { state, actions } from './args'

// custom interop
// ...

// custom views
// ...

// launchpad interop
import RouterInit from './main/RouterInit'

// launchpad views
import App from './views/App'

// ...

const view = s => App
const container = document.getElementById('app')

const main = app(state, actions, view, container)

// ...

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
