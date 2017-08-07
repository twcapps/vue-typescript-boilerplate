require('./check-versions')()

process.env.NODE_ENV = 'production'
process.env.npm_config_platform = process.env.npm_config_platform ? process.env.npm_config_platform : ''
process.env.npm_config_environment = process.env.npm_config_environment ? process.env.npm_config_environment : 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var packageJson = require('../package.json')
var archiver = require('archiver');
var fs = require('fs');
var moment = require('moment');

var spinner = ora(`building for ${process.env.npm_config_environment}...`)
spinner.start()

// step 1: clear build directory
rm(path.join(config.build.assetsRoot, process.env.npm_config_platform), err => {
  if (err) throw err

  // step 2: build project with webpack
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    // step 3: archive dist folder as zip
    const packageName = `${packageJSON.name}_${process.env.npm_config_environment}_${packageJSON.version}.` +
      `${packageJSON.build}_${process.env.npm_config_platform}_${moment().format('YYYYMMDD')}.` +
      `${process.env.npm_config_platform === 'tizen' ? 'wgt' : 'zip'}`

    rm(path.join(config.build.archiveRoot, packageName), err => {
      if (err) throw err

      if (!fs.existsSync(config.build.archiveRoot)) {
        fs.mkdirSync(config.build.archiveRoot)
      }
      const output = fs.createWriteStream(path.join(config.build.archiveRoot, packageName))

      const archive = archiver('zip')
      archive.on('error', (err) => {
        if (err) throw err
      })
      archive.on('close', () => {
        console.log(chalk.green(`created archive: ${path.join(config.build.archiveRoot, packageName)}\n`))
      })
      archive.pipe(output)
      archive.directory(webpackConfig.output.path, false)
      archive.finalize()
    })
  })
})
