
import { h } from 'hyperapp'

import RouterComponents from './router/RouterComponents'

const Navigation = (state, actions) =>
  h('nav', {}, [
    h('div', { class: 'navigation-area' }, [
      h('img', { class: 'navigation-brand', src: '' }, null),
      h('div', { class: 'navigation-menu' }, [
        RouterComponents.Link({ to: '/reports' }, [
          h('button', { class: 'control' }, 'Reports')
        ]),
        RouterComponents.Link({ to: '/report' }, [
          h('button', { class: 'control' }, 'Report')
        ]),
        RouterComponents.Link({ to: '/profile' }, [
          h('button', { class: 'control' }, 'Profile')
        ])
      ])
    ])
  ]);

export default Navigation
