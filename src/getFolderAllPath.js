// 获取带@的路径，@为webpack别名，src
const vscode = require('vscode')
const util = require('./util')
const fs = require('fs')
const path = require('path')
const exec =require('child_process').exec
let folderName = ''
function readFileList(dir,filesList=[]) {
  const files = fs.readdirSync(dir)
  files.forEach((item,index) => {
    const fullPath = path.join(dir,item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      readFileList(path.join(dir,item),filesList)
    }else {
      console.log(fullPath)
      let url =  fullPath.split(folderName+'\\')[1].replace(/\\/g, '/')
      filesList.push(`'${url}'`)
    }
  })
}
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.getFolderAllPath', (urlAll) => {
    folderName = urlAll.path.split('/').reverse()[0]
    const list = []
    readFileList(urlAll.fsPath, list)
    const listCode = list.reduce((acc,cur)=>{
      return `${acc},
          ${cur}`
    })
    const res = `${folderName}: [
      ${listCode}
    ]`
    vscode.env.clipboard.writeText(res)
    util.showInfo('已复制进剪贴板')
  }))
}
