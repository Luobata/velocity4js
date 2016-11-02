/*
 * @description 定义好语言所需范式
 * @date 2016年10月24日15:58:08
 * @author luobata
 */

define(function(require, exports, module) {
    var vtl = function () {
        var statement = {
            reference: function (str) {
                // $ [ ! ][ { ][a..z, A..Z ][ a..z, A..Z, 0..9, -, _ ][ } ]
                str.replace();
            },
            properties: function (str) {
                // $ [ { ][ a..z, A..Z ][ a..z, A..Z, 0..9, -, _ ] .[a..z, A..Z ][a..z, A-Z, 0..9, -, _ ] [ } ]
            },
            methods: function (str) {
                // $ [ { ][ a..z, A..Z ][ a..z, A..Z, 0..9, -, _ ] .[ a..z, A..Z ][a..z, A..Z, 0..9, -, _ ]( [optional parameter list...* ] ) [ } *]
            },
            directives: function (str) {
                // # [ { ] set [ } ] ( $ref = [ ", ' ]arg[ ", ' ] )
            },
            ifelse: function (str) {
                // # [ { ] if [ } ] ( [condition] ) [output] [# [ { ] elseif [ } ] ( [condition] ) [output] ]* [# [ { ] else [ } ] [output] ] # [ { ] end [ } ]
            }
        };


        return function (str) {
        }
    }

    module.exports = vtl;
})
