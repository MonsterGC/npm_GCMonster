# GCMonster 
[GLOB](https://www.npmjs.com/package/glob)  



### API
```js
const GCMonster = require('monster-zip').GCMonster

/**
 * 打包Zip
 * @param   {String}     source  需压缩的源地址
 * @param   {String}     target  压缩包地址
 * @param   {Object}     options 过滤条件，参考glob的ignore文档
 * @param   {Function}   fn      回调函数
 * @example  zip('./test', './test.zip', fn)
 */
GCZip.zip('./test', './test.zip', [], function(err){
	console.log(arguments)
})

/**
 * 解压Zip
 * @param    {String}   src     压缩包地址
 * @param    {String}   target  解压缩目的地
 * @param    {Function} fn      回调，可选
 * @example  zip('./test.zip', './test' [, fn]);
 */
package.unzip(src, target, callback)

```

### Options Example
```js

package.zip('./test', './test.zip', ['**/node_modules/**'], function(err){
	console.log(arguments)
})
```
