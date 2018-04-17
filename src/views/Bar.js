
import { h } from 'hyperapp'

const Bar = d =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-inner' }, [
      h('a', { class: 'bar-logo', href: '/' })
    ])
  ])

export default Bar
