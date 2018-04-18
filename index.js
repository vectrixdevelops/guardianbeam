
import { readFileSync } from 'fs'
import { renderToString } from '@hyperapp/render/browser'
import Base from './src/views/include/Base'

const view = s => Base({
  css: readFileSync('./dist/app.css', 'utf-8'),
  js: readFileSync('./dist/app.js', 'utf-8')
})

process.stdout.write('<!DOCTYPE html>' + renderToString(view, {}, {}))
