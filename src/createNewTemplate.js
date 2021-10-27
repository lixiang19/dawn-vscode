// 右键新建vue模板文件
const vscode = require('vscode')
const util = require('./util')
const fs = require('fs')
const path = require('path')
const generateComponent = (componentName, fullPath, componentType) => {
  if (fs.existsSync(fullPath)) {
    util.showInfo(`${componentName}已经存在`)
  }

  let fcTemplate = null
  // 采用if判断而不是直接传值变量，因为/路径和\路径的区别
  fcTemplate = path.resolve(__dirname, './file_template/vue.txt')
  const jsFileContent = fs.readFileSync(fcTemplate, { encoding: 'utf-8' })
  const jsFile = path.resolve(`${fullPath}`)

  fs.writeFileSync(jsFile, jsFileContent.replace(/IDNAME/g, componentName))
  util.openFileInVscode(fullPath, null)
}

module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.createNewVue', async (urlAll) => {
    // 文件夹绝对路径
    const folderPath = urlAll.fsPath
    const statPromise = util.promisify(fs.stat, fs)
    const stat = await statPromise(folderPath)
    if (stat.isFile()) {
      util.showInfo('请右键父文件夹,无新建同级功能')
    } else {
      const options = {
        prompt: '请输入组件名: ',
        placeHolder: '组件名'
      }

      // 调出系统输入框获取组件名
      vscode.window.showInputBox(options).then(value => {
        if (!value) return
        const componentName = value
        const fullPath = `${folderPath}/${componentName}` + '.vue'
        generateComponent(componentName, fullPath, 'vue')
      })
    }
  }))
  
}
