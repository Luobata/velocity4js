/*
 * @description velocity js版本
 * @date 2016年10月23日21:24:45
 * @author luobata
 *
 */
define(function(require, exports, module) {
    var parse = require('./parse');
    var compile = require('./compiler');
    var util = require('./util');

    var Velocity = {
        parse: parse,
        Compile: compile,
        util: util
    };


    Velocity.render = function(template, context) {

        var asts = parse(template);
        var compiler = new compile(asts);
        return compiler.render(context);
    }

    module.exports = Velocity;
})
