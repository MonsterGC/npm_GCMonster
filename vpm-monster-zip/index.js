const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Unzip = require('unzip');
const Zip = require('moxie-zip').ZipWriter;

/**
 * 打包Zip
 * @param   {String}     source  需压缩的源地址
 * @param   {String}     target  压缩包地址
 * @param   {Object}     options 过滤条件，参考glob的ignore文档
 * @param   {Function}   fn      回调函数
 * @example  zip('./folder', 'folder.zip', fn)
 * @date     2019-08-21 16:13
 */


const GCMonster = function () { }

GCMonster.prototype.zip = function (source, target, options, fn) {
    const zip = new Zip;
    // 检查是否存在options
    if (typeof options == 'function') {
        fn = options;
        options = null;
    }
    //  检查是否存在回调函数
    fn = fn || function () { };

    // 查找文件准备执行压缩
    glob(source + '/**', options, function (err, files) {
        if (err) throw err;

        // 添加文件到待解压数据中
        files.forEach(function (item) {
            if (fs.statSync(item).isFile()) {
                zip.addFile(path.relative(source, item), item)
            }
        })


        // 执行压缩
        zip.saveAs(target, function (err) {
            fn(err, target)
        })
    })
}


/**
 * 解压Zip
 * @param    {String}   src     压缩包地址
 * @param    {String}   target  解压缩目的地
 * @param    {Function} fn      回调，可选
 * @example  zip('./folder.zip', './test/folder' [, fn]);
 * @date     2019-08-21 16:13
 */

GCMonster.prototype.unzip = function (src, target, fn) {
    fs
        .createReadStream(src)
        .pipe(Unzip.Extract({ path: target }))
        .on('close', fn || function () { })
}

exports.GCMonster = GCMonster;