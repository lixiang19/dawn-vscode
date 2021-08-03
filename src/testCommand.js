// 用于测试单条命令，无实际业务
const vscode = require('vscode')
const util = require('./util')
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.testCommand', (urlAll) => {

  }))
}
