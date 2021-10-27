const vscode = require('vscode')
const util = require('../util')
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.createNewTask', (urlAll) => {
    util.showInfo('测试命令成功运行')
    const panel = vscode.window.createWebviewPanel(
      'createNewTask', // Identifies the type of the webview. Used internally
      '模版配置', // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      } // Webview options. More on these later.
    )
    panel.webview.html = 'www.baidu.com'
  }))
}
