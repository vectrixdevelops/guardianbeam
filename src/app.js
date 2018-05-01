
'use strict'

import { h, app } from 'hyperapp'

import Router from './helper/Router'

import Main from './views/Main'

// State

const state = {
  Router: {},

  reportsPage: 0,
  reports: [
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    },
    {
      name: 'Vectrix',
      lastOnline: '04/27/2018',
      offense: 'Flying',
      severity: '86%',
      lastServer: 'M-123',
      issuedReports: '6'
    }
  ]
}

// Actions

const actions = {
  Router,

  backReportsPage: () => (state, actions) => {
    if ((state.reportsPage - 1) > -1) {
      state.reportsPage = state.reportsPage - 1;
    }
  },
  forwardReportsPage: () => (state, actions) => {
    if ((state.reportsPage + 1) < (state.reports.length / 6)) {
      state.reportsPage = state.reportsPage + 1;
    }
  }
}

// Main View

const view = (state, actions) => Main(state, actions)

// App

const main = app(state, actions, view, document.getElementById('app'));

main.Router.init()

window.addEventListener('hashchange', e => {
  main.Router.init()
})
