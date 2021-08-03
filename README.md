# dawn README

插件为公司内部使用的工具集合

# Features

## 1.获取@路径-右键文件触发

右键获取以src为节点的绝对路径，且src命名为别名@

```js
@/getCurrentFilePath.js
```

如果文件为图片，因为webpack在scss种引入别名需加入**~**，所以获取@路径会自动加入**~**

```scss
~@/assets/images/flat/home/row_bg.png
```

## 2.新建vue模板文件-右键父文件夹触发

弹出input窗口输入文件名-如test后，会自动生成如下文件

```vue
<!--test-->
<template>
  <div id="test"></div>
</template>

<script>
import * as api from '@/api/index'
import * as tool from '@/utils/tool'
import * as util from '@/utils/util'
export default {
  name: 'test',

  components: {},

  props: {},

  watch: {
    
  },
  
  data () {
    return {
    }
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
@import "~@/assets/style/utils";
#test {
  height: 100%;
  width: 100%;
}
@mixin bg($path) {
 
}
.simple {
  @include bg("simple");
}
</style>
```

## 3.代码片段（TODO）

包含form-create的代码片段，快速生成表单，包含gl组件代码片段，输入f-或者gl-会自动提示

### 3.1. f- 开头

用在vue文件的script中，如f-input，暂不一一列举（TODO）

```js

      {
        type: 'input',
        title: '',
        field: '',
        value: '',
        props: {
          clearable: true
        },
        col: {
          span: 6
        },
        validate: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      },
```

### 3.2. gl-开头

用在vue文件的template中，如gl-table，暂不一一列举（TODO）

```html
 <gl-table :tableOption="tableOption" :rule="rule" :tableColumns="tableColumns" ref="table"> </gl-table>
```



# Release Notes

### 0.01

初版

### 0.1.0

基本功能完成，下一步完善代码片段