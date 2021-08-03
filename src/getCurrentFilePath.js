// 获取带@的路径，@为webpack别名，src
const vscode = require('vscode')
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.getCurrentFilePath', (urlAll) => {
    let url = '@' + urlAll.path.match(/src(\S*)/)[1]
    const typeName = url.substring(url.lastIndexOf('.') + 1)

    const jpgList = ['png', 'jpeg', 'jpg']

    if (jpgList.includes(typeName)) {
      url = '~' + url
    }
    vscode.env.clipboard.writeText(url)
  }))
}
