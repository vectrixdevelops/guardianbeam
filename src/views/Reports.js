
import { h } from 'hyperapp'

import RouterComponents from './include/router/RouterComponents'

const queryBackPage = (state) => ((state.reportsPage - 1) < 1 ? {} : { page: state.reportsPage - 1 })
const queryForwardPage = (state) => ((state.reportsPage + 1) > (state.reports.length / 6) ? {} : { page: state.reportsPage + 1 })

const ReportItem = (report) =>
  h('div', { class: 'report-item' }, [
    h('div', { class: 'user' }, [
      h('img', { }),
      h('div', { class: 'user-details' }, [
        h('p', { class: 'name' }, [
          report.name,
          ' (',
          h('span', { class: 'lastOnline' }, report.lastOnline),
          ')'
        ]),
      ])
    ]),
    h('div', { class: 'details' }, [
      h('p', { class: 'offense' }, 'Offense: ' + report.offense),
      h('p', { class: 'severity' }, 'Severity: ' + report.severity),
      h('p', { class: 'last-server' }, 'Last Server: ' + report.lastServer),
      h('p', { class: 'issued-reports' }, 'Issued Reports: ' + report.issuedReports)
    ]),
    h('button', { class: 'more' }, 'More')
  ]);

const Reports = (state, actions) =>
  h('div', { class: 'reports-container' }, [
    h('div', { class: 'reports-actions' }, [

    ]),
    h('div', { class: 'reports-list' }, state.reports.slice(state.reportsPage * 6, (state.reportsPage + 1) * 6).map(report =>
      ReportItem(report)
    )),
    h('div', { class: 'reports-navigation' }, [
      RouterComponents.Link({ to: '/reports', query: queryBackPage(state) }, [
        h('button', { class: 'back', onclick: () => actions.backReportsPage() }, '<')
      ]),
      RouterComponents.Link({ to: '/reports', query: queryForwardPage(state) }, [
        h('button', { class: 'forward', onclick: () => actions.forwardReportsPage() }, '>')
      ])
    ])
  ])

export default Reports
