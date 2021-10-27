// 获取带@的路径，@为webpack别名，src
const vscode = require('vscode')
const util = require('./util')
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.getCurrentFilePath', (urlAll) => {
    let url =  urlAll.path.match(/src(\S*)/)[1]
    util.showInfo('已复制进剪贴板')
    vscode.env.clipboard.writeText(url)
  }))
}
