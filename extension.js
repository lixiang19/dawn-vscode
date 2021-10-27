const vscode = require('vscode')

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
  console.log('插件运行了')
  require('./src/getCurrentFilePath')(context)
  require('./src/getFolderAllPath')(context)
  require('./src/createNewVue')(context)
  require('./src/testCommand')(context)
  require('./src/booster')(context)
  require('./src/booster/createNewTask')(context)
}

/**
 * 插件被释放时触发
 */
exports.deactivate = function () {

}
