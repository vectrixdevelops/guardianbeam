
'use strict'

import { h, app } from 'hyperapp'
import Router from './helper/Router'

import RouterComponents from './views/include/router/RouterComponents'

import Reports from './views/Reports'
import Report from './views/Report'
import Profile from './views/Profile'

// State

const state = {
  Router: {}
}

// Actions

const actions = {
  Router
}

// Main View

const view = (state, actions) =>
  h('div', { class: 'view' }, [
    h('div', { class: 'page' }, [
      RouterComponents.Route
    ]),
    h('div', { class: 'controls' }, [
      RouterComponents.Link({ to: '/' }, [
        h('button', { class: 'control' }, 'Reports')
      ]),
      RouterComponents.Link({ to: '/report' }, [
        h('button', { class: 'control' }, 'Report')
      ]),
      RouterComponents.Link({ to: '/profile' }, [
        h('button', { class: 'control' }, 'Profile')
      ])
    ])
  ]);

// App

const main = app(state, actions, view, document.getElementById('app'));

main.Router.init()

window.addEventListener('hashchange', e => {
  main.Router.init()
})
