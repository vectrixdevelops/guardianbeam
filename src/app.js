
'use strict'

import { h, app } from 'hyperapp'
import Router from './helper/Router'

// Views

const Reports = (state, actions) =>
  h('div', { class: 'reports-container' }, [
    h('h1', {}, 'Reports')
  ]);

const Report = (state, actions) =>
  h('div', { class: 'report-container' }, [
    h('h1', {}, 'Report'),
    h('h2', {}, 'Route: ' + state.Router.path)
  ]);

const Profile = (state, actions) =>
  h('div', { class: 'profile-container' }, [
    h('h1', {}, 'Profile'),
    h('h2', {}, 'Route: ' + state.Router.path)
  ]);

// Helper Views

const Route = (state, actions) => {
  const routes = {
    '/profile': Profile,
    '/report': Report,
    '': Reports
  }

  return (routes[state.Router.path] || Reports)(state, actions)
}

const Link = (props, children) => (state, actions) => {
  var to = props.to
  delete props.to

  return h('a', { onclick: () => actions.Router.route({ path: to }) }, children)
}

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
      Route
    ]),
    h('div', { class: 'controls' }, [
      Link({ to: '/' }, [
        h('button', { class: 'control' }, 'Reports')
      ]),
      Link({ to: '/report' }, [
        h('button', { class: 'control' }, 'Report')
      ]),
      Link({ to: '/profile' }, [
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
