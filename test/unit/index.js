import Vue from 'vue'
Vue.config.productionTip = false

// require all test files (files that ends with .spec.ts)
const testsContext = require.context('../../src', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.ts for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main\.ts$).+\.(ts|vue)$/i)
srcContext.keys().forEach(srcContext)
