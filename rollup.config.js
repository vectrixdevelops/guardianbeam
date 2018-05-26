
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const { NODE_ENV, API_URL } = process.env

export default {
  plugins: [
    replace({ NODE_ENV, API_URL }),
    resolve()
  ]
}
