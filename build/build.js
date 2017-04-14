// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
var archiver = require('archiver');
var fs = require('fs');
var moment = require('moment');

env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var packageJson = require('../package.json')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  //create zip file
  rm('-rf', config.build.archiveRoot)
  mkdir('-p', config.build.archiveRoot)
  var packageName = packageJson.name+'_'+packageJson.environment+'_'+packageJson.version+'.'+packageJson.build+'_'+packageJson.platform+'_'+moment().format('YYYYMMDD')+'.zip';
  var output = fs.createWriteStream(path.join(config.build.archiveRoot, packageName));
  var archive = archiver('zip');
  archive.on('error', function(err) {
      process.stdout.write(err);
  });
  archive.pipe(output);
  archive.directory('dist', true, { date: new Date() });
  archive.finalize();
  process.stdout.write("created archive:" +path.join(config.build.archiveRoot, packageName)+ '\n')
})
