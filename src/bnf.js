/*
 * @description 定义好语言所需范式
 * @date 2016年10月24日15:58:08
 * @author luobata
 */

define(function(require, exports, module) {
    var bnf = function (str) {
        var statement = {
            reference: function (str) {
                // ::= "$" <identifier> { "." <method> | <identifier> }
                console.log(statement);
                if (str.indexOf('$') === 0) {

                }
            },
            identifier: function (str) {
                // ::= <alpha-char> { <identifier-char> }
            },
            alphaChar: function (str) {
                // ::= "a..z, A..Z"
            },
            identifierChar: function (str) {
                // ::= "a..z, A..Z ,0..9 ,- ,_"
            }
        };

        var terminals = {
            $: {
                type: 'reference'
            }
        };

        var nonTerminals = [
            '$',
            '#if',
            '#set',
            'a..z'
        ];

        return function (str) {
            var strArr = str.split('');
            var tmpArr = [];
            for (var i = 0; i < strArr.length; i++) {
                var token = terminals[strArr[i]];
                tmpArr.push(strArr.slice(0, i));
                var tpl = strArr.slice(i).join('');
                // str
                if (token) {
                    statement[token.type].call(bnf, tpl);
                }
            }
        }
    }

    module.exports = bnf();
})
