const a568_0x2f47c3=a568_0x4002;(function(_0x3eae1d,_0x18c4ba){const _0x14d561=a568_0x4002,_0x1f579c=_0x3eae1d();while(!![]){try{const _0x26a17b=parseInt(_0x14d561(0x8f))/0x1*(parseInt(_0x14d561(0x80))/0x2)+-parseInt(_0x14d561(0x91))/0x3*(parseInt(_0x14d561(0x84))/0x4)+parseInt(_0x14d561(0x72))/0x5+parseInt(_0x14d561(0x77))/0x6+-parseInt(_0x14d561(0x81))/0x7*(parseInt(_0x14d561(0x7b))/0x8)+parseInt(_0x14d561(0x7e))/0x9*(-parseInt(_0x14d561(0x76))/0xa)+-parseInt(_0x14d561(0x73))/0xb;if(_0x26a17b===_0x18c4ba)break;else _0x1f579c['push'](_0x1f579c['shift']());}catch(_0x531e66){_0x1f579c['push'](_0x1f579c['shift']());}}}(a568_0x212a,0x53483));const a568_0x19174f=(function(){let _0x277030=!![];return function(_0x533567,_0x46eaa1){const _0x225f1e=_0x277030?function(){if(_0x46eaa1){const _0x1198ff=_0x46eaa1['apply'](_0x533567,arguments);return _0x46eaa1=null,_0x1198ff;}}:function(){};return _0x277030=![],_0x225f1e;};}()),a568_0x2ac97b=a568_0x19174f(this,function(){const _0x40360c=a568_0x4002;return a568_0x2ac97b['toString']()['search'](_0x40360c(0x82))['toString']()['constructor'](a568_0x2ac97b)['search'](_0x40360c(0x82));});a568_0x2ac97b();'use strict';var __importDefault=this&&this[a568_0x2f47c3(0x7a)]||function(_0x296fb8){return _0x296fb8&&_0x296fb8['__esModule']?_0x296fb8:{'default':_0x296fb8};};Object[a568_0x2f47c3(0x74)](exports,a568_0x2f47c3(0x8c),{'value':!![]}),exports['deleteMedia']=exports['mediaUpload']=void 0x0;function a568_0x212a(){const _0x3dbaac=['unlinkSync','291fcKqKm','send','message','1698240ybKlsM','2263151qwmmVc','defineProperty','deleteMedia','70PfHnOo','2035548xCGEDx','../../errors/AppError','lodash','__importDefault','8KsdhXL','status','params','215343uxXKhD','greetingMediaAttachment','51758ZILHGG','3509891mcjiqZ','(((.+)+)+)+$','Arquivo\x20adicionado!','5608qAIKnH','head','Arquivo\x20excluído','public','save','filename','existsSync','mediaUpload','__esModule','resolve','default','26zAYLIi'];a568_0x212a=function(){return _0x3dbaac;};return a568_0x212a();}const lodash_1=require(a568_0x2f47c3(0x79)),AppError_1=__importDefault(require(a568_0x2f47c3(0x78))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),path_1=__importDefault(require('path')),fs_1=__importDefault(require('fs')),mediaUpload=async(_0x884cce,_0x210305)=>{const _0x37dceb=a568_0x2f47c3,{whatsappId:_0x3e9573}=_0x884cce[_0x37dceb(0x7d)],_0x1d6a51=_0x884cce['files'],_0x521424=(0x0,lodash_1[_0x37dceb(0x85)])(_0x1d6a51);try{const _0x1e1604=await Whatsapp_1[_0x37dceb(0x8e)]['findByPk'](_0x3e9573);if(_0x1e1604[_0x37dceb(0x7f)]){const _0x2d17b7=path_1[_0x37dceb(0x8e)][_0x37dceb(0x8d)]('public',_0x1e1604[_0x37dceb(0x7f)]),_0x10e7a0=fs_1[_0x37dceb(0x8e)]['existsSync'](_0x2d17b7);_0x10e7a0&&fs_1[_0x37dceb(0x8e)][_0x37dceb(0x90)](_0x2d17b7);}return _0x1e1604[_0x37dceb(0x7f)]=_0x521424[_0x37dceb(0x89)],await _0x1e1604[_0x37dceb(0x88)](),_0x210305[_0x37dceb(0x7c)](0xc8)['json']({'mensagem':_0x37dceb(0x83)});}catch(_0x2c35b6){throw new AppError_1[(_0x37dceb(0x8e))](_0x2c35b6[_0x37dceb(0x93)]);}};function a568_0x4002(_0x4b34b5,_0x5c15e5){const _0x1ae056=a568_0x212a();return a568_0x4002=function(_0x2ac97b,_0x19174f){_0x2ac97b=_0x2ac97b-0x72;let _0x212ab7=_0x1ae056[_0x2ac97b];return _0x212ab7;},a568_0x4002(_0x4b34b5,_0x5c15e5);}exports[a568_0x2f47c3(0x8b)]=mediaUpload;const deleteMedia=async(_0x29c389,_0x10654d)=>{const _0x213128=a568_0x2f47c3,{whatsappId:_0x4f0e35}=_0x29c389[_0x213128(0x7d)];try{const _0x553417=await Whatsapp_1[_0x213128(0x8e)]['findByPk'](_0x4f0e35),_0x419acc=path_1[_0x213128(0x8e)][_0x213128(0x8d)](_0x213128(0x87),_0x553417['greetingMediaAttachment']),_0x16c886=fs_1['default'][_0x213128(0x8a)](_0x419acc);return _0x16c886&&fs_1[_0x213128(0x8e)][_0x213128(0x90)](_0x419acc),_0x553417['greetingMediaAttachment']=null,await _0x553417[_0x213128(0x88)](),_0x10654d[_0x213128(0x92)]({'message':_0x213128(0x86)});}catch(_0x2580cf){throw new AppError_1['default'](_0x2580cf[_0x213128(0x93)]);}};exports[a568_0x2f47c3(0x75)]=deleteMedia;