/*
 * @description velocity js版本
 * @date 2016年10月23日21:24:45
 * @author luobata
 *
 */
var parse = require('./parse');
var compile = require('./compile');
var util = require('./util');

var Velocity = {
    parse: parse,
    Compile: compile,
    util: util
};


Velocity.render = function(template, context) {

    var asts = parse(template);
    var compile = new Compile(asts);
    return compile.render(context);
}

module.exports = Velocity;
