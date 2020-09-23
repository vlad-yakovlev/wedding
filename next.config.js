const R = require('ramda')
const basePath = process.env.NEXT_BASE_PATH || ''

module.exports = R.compose(
  require('next-optimized-images'),
)({
  assetPrefix: basePath + '/',
  basePath: basePath,
})
