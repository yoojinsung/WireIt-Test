if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/terminal-output/terminal-output.js']) {
   __coverage__['build/terminal-output/terminal-output.js'] = {"path":"build/terminal-output/terminal-output.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"(anonymous_2)","line":18,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":28}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":43,"column":44}},"2":{"start":{"line":16,"column":0},"end":{"line":41,"column":3}},"3":{"start":{"line":19,"column":4},"end":{"line":19,"column":30}}},"branchMap":{},"code":["(function () { YUI.add('terminal-output', function (Y, NAME) {","","/**"," * @module terminal-output"," */","","'use strict';","","/**"," * Class that extends Terminal to differenciate Input/Output terminals"," * @class TerminalOutput"," * @extends Terminal"," * @constructor"," * @param {Object} oConfigs The user configuration for the instance."," */","Y.TerminalOutput = Y.Base.create(\"terminal-output\", Y.Terminal, [], {","","  getClassName: function(n) {","    return \"yui3-terminal-\"+n;","  }","","}, {","  ATTRS: {","","    dir: {","      value: [0.3, 0]","    },","","    ddGroupsDrag: {","      value: ['output']","    },","","    ddGroupsDrop: {","      value: ['input']","    }","","    // TODO","    // alwaysSrc: true","","  }","});","","}, '@VERSION@', {\"requires\": [\"terminal\"]});","","}());"]};
}
var __cov_SWrh5BZWYLfg_NA9yKTI4w = __coverage__['build/terminal-output/terminal-output.js'];
__cov_SWrh5BZWYLfg_NA9yKTI4w.s['1']++;YUI.add('terminal-output',function(Y,NAME){'use strict';__cov_SWrh5BZWYLfg_NA9yKTI4w.f['1']++;__cov_SWrh5BZWYLfg_NA9yKTI4w.s['2']++;Y.TerminalOutput=Y.Base.create('terminal-output',Y.Terminal,[],{getClassName:function(n){__cov_SWrh5BZWYLfg_NA9yKTI4w.f['2']++;__cov_SWrh5BZWYLfg_NA9yKTI4w.s['3']++;return'yui3-terminal-'+n;}},{ATTRS:{dir:{value:[0.3,0]},ddGroupsDrag:{value:['output']},ddGroupsDrop:{value:['input']}}});},'@VERSION@',{'requires':['terminal']});