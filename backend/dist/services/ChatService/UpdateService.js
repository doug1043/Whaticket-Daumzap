const a385_0x17bfbf=a385_0x56be;(function(_0x2a7549,_0x5565a4){const _0x128bcc=a385_0x56be,_0x5778d2=_0x2a7549();while(!![]){try{const _0xd4c296=parseInt(_0x128bcc(0x13a))/0x1*(-parseInt(_0x128bcc(0x13c))/0x2)+-parseInt(_0x128bcc(0x143))/0x3+-parseInt(_0x128bcc(0x12e))/0x4*(-parseInt(_0x128bcc(0x13f))/0x5)+-parseInt(_0x128bcc(0x133))/0x6*(-parseInt(_0x128bcc(0x136))/0x7)+parseInt(_0x128bcc(0x135))/0x8+parseInt(_0x128bcc(0x13e))/0x9*(parseInt(_0x128bcc(0x131))/0xa)+-parseInt(_0x128bcc(0x141))/0xb*(-parseInt(_0x128bcc(0x12f))/0xc);if(_0xd4c296===_0x5565a4)break;else _0x5778d2['push'](_0x5778d2['shift']());}catch(_0xbd2ca1){_0x5778d2['push'](_0x5778d2['shift']());}}}(a385_0x2e79,0xe5a8b));const a385_0x59560f=(function(){let _0x3ca631=!![];return function(_0x2a93a8,_0x3266f6){const _0x489b3e=_0x3ca631?function(){const _0x451bb3=a385_0x56be;if(_0x3266f6){const _0x3cd040=_0x3266f6[_0x451bb3(0x130)](_0x2a93a8,arguments);return _0x3266f6=null,_0x3cd040;}}:function(){};return _0x3ca631=![],_0x489b3e;};}()),a385_0x2f01cd=a385_0x59560f(this,function(){const _0x4512e4=a385_0x56be;return a385_0x2f01cd['toString']()[_0x4512e4(0x137)](_0x4512e4(0x129))[_0x4512e4(0x13b)]()[_0x4512e4(0x13d)](a385_0x2f01cd)[_0x4512e4(0x137)]('(((.+)+)+)+$');});a385_0x2f01cd();'use strict';var __importDefault=this&&this[a385_0x17bfbf(0x12b)]||function(_0x5c355f){const _0x1070c2=a385_0x17bfbf;return _0x5c355f&&_0x5c355f[_0x1070c2(0x139)]?_0x5c355f:{'default':_0x5c355f};};Object['defineProperty'](exports,a385_0x17bfbf(0x139),{'value':!![]});const Chat_1=__importDefault(require('../../models/Chat')),ChatUser_1=__importDefault(require(a385_0x17bfbf(0x140))),User_1=__importDefault(require(a385_0x17bfbf(0x132)));async function UpdateService(_0x33f50d){const _0x123cf1=a385_0x17bfbf,{users:_0x2c1a47}=_0x33f50d,_0x46eebb=await Chat_1[_0x123cf1(0x134)][_0x123cf1(0x12d)](_0x33f50d['id'],{'include':[{'model':ChatUser_1[_0x123cf1(0x134)],'as':_0x123cf1(0x12a)}]}),{ownerId:_0x1edcda}=_0x46eebb;await _0x46eebb['update']({'title':_0x33f50d[_0x123cf1(0x142)]});if(Array['isArray'](_0x2c1a47)){await ChatUser_1[_0x123cf1(0x134)]['destroy']({'where':{'chatId':_0x46eebb['id']}}),await ChatUser_1[_0x123cf1(0x134)][_0x123cf1(0x12c)]({'chatId':_0x46eebb['id'],'userId':_0x1edcda});for(let _0x46f973 of _0x2c1a47){_0x46f973['id']!==_0x1edcda&&await ChatUser_1['default']['create']({'chatId':_0x46eebb['id'],'userId':_0x46f973['id']});}}return await _0x46eebb['reload']({'include':[{'model':ChatUser_1[_0x123cf1(0x134)],'as':_0x123cf1(0x12a),'include':[{'model':User_1[_0x123cf1(0x134)],'as':_0x123cf1(0x128)}]},{'model':User_1[_0x123cf1(0x134)],'as':_0x123cf1(0x138)}]}),_0x46eebb;}function a385_0x56be(_0x103ae3,_0x42eef0){const _0xd62d4a=a385_0x2e79();return a385_0x56be=function(_0x2f01cd,_0x59560f){_0x2f01cd=_0x2f01cd-0x128;let _0x2e7971=_0xd62d4a[_0x2f01cd];return _0x2e7971;},a385_0x56be(_0x103ae3,_0x42eef0);}function a385_0x2e79(){const _0x5f463b=['owner','__esModule','1522957CrSuEZ','toString','2iqQrqF','constructor','17667OxlJxo','158890mKCuOm','../../models/ChatUser','550VCvgoG','title','4241610rtSWED','user','(((.+)+)+)+$','users','__importDefault','create','findByPk','168mVVlrG','111348IUAmlv','apply','1270BGzlvD','../../models/User','312qMeymD','default','10391800hFPKYN','71428TpEVfC','search'];a385_0x2e79=function(){return _0x5f463b;};return a385_0x2e79();}exports[a385_0x17bfbf(0x134)]=UpdateService;