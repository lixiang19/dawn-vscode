
// 获取带@的路径，@为webpack别名，src
const vscode = require('vscode')
const util = require('./util')
const fs = require('fs')
const path = require('path')
const exec =require('child_process').exec
const TreeProvider = require('./booster/TreeProvide')
module.exports = function (context) {
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider(
      'booster',
      new TreeProvider()
    )
  )
}
