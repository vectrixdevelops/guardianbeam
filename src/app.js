
'use strict'

import { h, app } from 'hyperapp'

import Router from './helper/Router'
import requests from './helper/fetchRequests'

import Main from './views/Main'

// State

const state = {
  Router: {},

  reportsSearch: {

  },
  reportsPage: 0,
  reports: [
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

  updateReports: () => (state, actions) => {
    requests.post(API_URL + '/report/list', state.reportsSearch)
    .catch(error => console.error(error))
    .then(response => {
      state.reports = response.tickets;
    });
  },

  backReportsPage: () => (state, actions) => {
    if ((state.reportsPage - 1) > -1) {
      actions.updateReports();
      state.reportsPage = state.reportsPage - 1;
    }
  },

  forwardReportsPage: () => (state, actions) => {
    if ((state.reportsPage + 1) < (state.reports.length / 6)) {
      actions.updateReports();
      state.reportsPage = state.reportsPage + 1;
    }
  }
}

// Main View

const view = (state, actions) => Main(state, actions)

// App

const main = app(state, actions, view, document.getElementById('app'));

main.Router.init()
main.updateReports()

window.addEventListener('hashchange', e => {
  main.Router.init()
})
