
import { h } from 'hyperapp'

const Dummy = data =>
  h('div', { class: 'dummy' }, [
    h('div', null, data.text)
  ])

export default Dummy
