// @flow
const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap() {
    return { '/': { page: '/' } }
  },
  assetPrefix: dev
    ? 'http://localhost:3000'
    : 'https://akameco.github.io/demo-next-static-export/',
}
