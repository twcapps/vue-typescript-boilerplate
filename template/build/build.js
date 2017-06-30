require('./check-versions')()

process.env.NODE_ENV = 'production'

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

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
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
  })

  //create zip file
  rm(path.join(config.build.archiveRoot), err => {
    var packageName = packageJson.name+'_'+packageJson.environment+'_'+packageJson.version+'.'+packageJson.build+'_'+packageJson.platform+'_' + moment().format('YYYYMMDD') + '.zip';
    var output = fs.createWriteStream(path.join(config.build.archiveRoot, packageName));
    var archive = archiver('zip');
    archive.on('error', function(err) {
        process.stdout.write(err);
    });
    archive.pipe(output);
    archive.directory(config.build.archiveRoot, true, { date: new Date() });
    archive.finalize();
    process.stdout.write("created archive:" +path.join(config.build.archiveRoot, packageName)+ '\n')
  })
})
