
const vscode = require('vscode')
class TreeItem extends vscode.TreeItem {
  constructor(label,command) {
    super(label,command)
    this.tooltip = `${this.label}`
    this.command = command
    this.collapsibleState = vscode.TreeItemCollapsibleState.None;
    this.contextValue = 'booster'
  }
}
class TreeProvider {
  getTreeItem (element) {
    return element
  }
  getChildren (element) {
    if (!element) {
      return new Promise((resolve, reject) => {
        resolve([
          new TreeItem('新建任务模版',{
            title:'新建任务模版',
            command:'extension.createNewTask',
            arguments: []
          })
        ])
      })
    }
    return Promise.resolve([])
  }
}
module.exports = TreeProvider