
import { h } from 'hyperapp'
import Spinner from './Spinner'

const production = NODE_ENV === 'production'

const Stub = data =>
  h('html', { lang: 'en-US' }, [
    h('head', null, [
      h('meta', { charset: 'utf-8' }),
      h('title', null, '@whaaaley/launchpad'),
      h('meta', { name: 'author', content: 'Dustin Dowell' }),
      h('meta', { name: 'description', content: 'Boilerplate for building web applications.' }),
      h('meta', { name: 'keywords', content: '' }),
      h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      production
        ? h('style', { innerHTML: data.css })
        : h('link', { rel: 'stylesheet', href: 'app.css' })
    ]),
    h('body', null, [
      h('div', { id: 'app' }, Spinner),
      production
        ? h('script', { innerHTML: data.js })
        : h('script', { defer: true, src: 'app.js' })
    ])
  ])

export default Stub
