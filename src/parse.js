/*
 * @description 词法分析 文件读取器
 * @date 2016年10月23日20:39:38
 * @author luobata
 *
 */

// TODO 定义产生式

define(function(require, exports, module) {
    var parse = function (str) {
        var bnf = require('./bnf.js');
        var terminals = {
            $: {
                type: 'reference'
            }
        };

        // TODO 字符串匹配 kmp
        bnf(str);

    };

    module.exports = parse;
})
