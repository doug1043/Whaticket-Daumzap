const a28_0x2c5f81=a28_0x4add;(function(_0x3a71f9,_0x1155ad){const _0x369b82=a28_0x4add,_0x414ac8=_0x3a71f9();while(!![]){try{const _0x4c8928=-parseInt(_0x369b82(0x12e))/0x1+parseInt(_0x369b82(0x11d))/0x2+parseInt(_0x369b82(0x11a))/0x3+parseInt(_0x369b82(0x124))/0x4+parseInt(_0x369b82(0x11c))/0x5+-parseInt(_0x369b82(0x12b))/0x6+parseInt(_0x369b82(0x138))/0x7;if(_0x4c8928===_0x1155ad)break;else _0x414ac8['push'](_0x414ac8['shift']());}catch(_0x22003d){_0x414ac8['push'](_0x414ac8['shift']());}}}(a28_0x56da,0xa798f));function a28_0x56da(){const _0x54b0ec=['search','params','399156CRrwBz','split','__esModule','emit','../config/auth','update','getIO','7133286WTEuwX','../services/PromptServices/ListPromptsService','../libs/socket','1169999HJzMiC','../services/PromptServices/CreatePromptService','jsonwebtoken','store','Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado\x20nas\x20conexões\x20Whatsapp!','json','toString','delete','verify','../services/PromptServices/ShowPromptService','898184lrEEce','prompt','defineProperty','show','-mainchannel','body','(((.+)+)+)+$','query','Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado!','index','../services/PromptServices/UpdatePromptService','headers','authorization','remove','3180924fXGJov','default','5758545BQtnTF','1210482fPeVVC','__importDefault','constructor','status','secret'];a28_0x56da=function(){return _0x54b0ec;};return a28_0x56da();}const a28_0x5a3e48=(function(){let _0x64312f=!![];return function(_0x34e184,_0x1d967b){const _0x425804=_0x64312f?function(){if(_0x1d967b){const _0x42c2a9=_0x1d967b['apply'](_0x34e184,arguments);return _0x1d967b=null,_0x42c2a9;}}:function(){};return _0x64312f=![],_0x425804;};}()),a28_0x5eacee=a28_0x5a3e48(this,function(){const _0x9ac271=a28_0x4add;return a28_0x5eacee['toString']()['search'](_0x9ac271(0x112))[_0x9ac271(0x134)]()[_0x9ac271(0x11f)](a28_0x5eacee)[_0x9ac271(0x122)](_0x9ac271(0x112));});a28_0x5eacee();'use strict';var __importDefault=this&&this[a28_0x2c5f81(0x11e)]||function(_0x482646){const _0x54a805=a28_0x2c5f81;return _0x482646&&_0x482646[_0x54a805(0x126)]?_0x482646:{'default':_0x482646};};Object[a28_0x2c5f81(0x13a)](exports,a28_0x2c5f81(0x126),{'value':!![]}),exports[a28_0x2c5f81(0x119)]=exports[a28_0x2c5f81(0x129)]=exports[a28_0x2c5f81(0x13b)]=exports[a28_0x2c5f81(0x131)]=exports[a28_0x2c5f81(0x115)]=void 0x0;const socket_1=require(a28_0x2c5f81(0x12d)),CreatePromptService_1=__importDefault(require(a28_0x2c5f81(0x12f))),DeletePromptService_1=__importDefault(require('../services/PromptServices/DeletePromptService')),ListPromptsService_1=__importDefault(require(a28_0x2c5f81(0x12c))),ShowPromptService_1=__importDefault(require(a28_0x2c5f81(0x137))),UpdatePromptService_1=__importDefault(require(a28_0x2c5f81(0x116))),Whatsapp_1=__importDefault(require('../models/Whatsapp')),jsonwebtoken_1=require(a28_0x2c5f81(0x130)),auth_1=__importDefault(require(a28_0x2c5f81(0x128))),index=async(_0x36bb25,_0x22cd7d)=>{const _0x2222c9=a28_0x2c5f81,{pageNumber:_0x51f8fb,searchParam:_0x1b4f92}=_0x36bb25[_0x2222c9(0x113)],_0x53ec4e=_0x36bb25[_0x2222c9(0x117)]['authorization'],[,_0xdf2f6d]=_0x53ec4e['split']('\x20'),_0x154de2=(0x0,jsonwebtoken_1['verify'])(_0xdf2f6d,auth_1['default']['secret']),{companyId:_0x469557}=_0x154de2,{prompts:_0x1fc5e5,count:_0x321e5f,hasMore:_0x29eb63}=await(0x0,ListPromptsService_1[_0x2222c9(0x11b)])({'searchParam':_0x1b4f92,'pageNumber':_0x51f8fb,'companyId':_0x469557});return _0x22cd7d[_0x2222c9(0x120)](0xc8)[_0x2222c9(0x133)]({'prompts':_0x1fc5e5,'count':_0x321e5f,'hasMore':_0x29eb63});};exports['index']=index;const store=async(_0x1a376f,_0x4f67e0)=>{const _0x4e7402=a28_0x2c5f81,_0x170898=_0x1a376f[_0x4e7402(0x117)]['authorization'],[,_0x1f4d7f]=_0x170898[_0x4e7402(0x125)]('\x20'),_0x442819=(0x0,jsonwebtoken_1[_0x4e7402(0x136)])(_0x1f4d7f,auth_1[_0x4e7402(0x11b)]['secret']),{companyId:_0x108607}=_0x442819,{name:_0x10db99,apiKey:_0x57dc4f,prompt:_0x5051d1,maxTokens:_0x167668,temperature:_0x372d75,promptTokens:_0x57ed7d,completionTokens:_0x36a93e,totalTokens:_0x5d909a,queueId:_0x366578,maxMessages:_0x20b194,voice:_0x519934,voiceKey:_0x1d4752,voiceRegion:_0x5e970d}=_0x1a376f[_0x4e7402(0x13d)],_0x1fae20=await(0x0,CreatePromptService_1['default'])({'name':_0x10db99,'apiKey':_0x57dc4f,'prompt':_0x5051d1,'maxTokens':_0x167668,'temperature':_0x372d75,'promptTokens':_0x57ed7d,'completionTokens':_0x36a93e,'totalTokens':_0x5d909a,'queueId':_0x366578,'maxMessages':_0x20b194,'companyId':_0x108607,'voice':_0x519934,'voiceKey':_0x1d4752,'voiceRegion':_0x5e970d}),_0x28ae2a=(0x0,socket_1['getIO'])();return _0x28ae2a['to']('company-'+_0x108607+_0x4e7402(0x13c))[_0x4e7402(0x127)]('prompt',{'action':_0x4e7402(0x129),'prompt':_0x1fae20}),_0x4f67e0[_0x4e7402(0x120)](0xc8)[_0x4e7402(0x133)](_0x1fae20);};exports[a28_0x2c5f81(0x131)]=store;const show=async(_0x5216e2,_0x32ab39)=>{const _0x4c8bcb=a28_0x2c5f81,{promptId:_0x146ca1}=_0x5216e2[_0x4c8bcb(0x123)],_0x3e4636=_0x5216e2[_0x4c8bcb(0x117)][_0x4c8bcb(0x118)],[,_0x430343]=_0x3e4636[_0x4c8bcb(0x125)]('\x20'),_0x2ec202=(0x0,jsonwebtoken_1[_0x4c8bcb(0x136)])(_0x430343,auth_1['default']['secret']),{companyId:_0x365bf7}=_0x2ec202,_0x34985a=await(0x0,ShowPromptService_1[_0x4c8bcb(0x11b)])({'promptId':_0x146ca1,'companyId':_0x365bf7});return _0x32ab39[_0x4c8bcb(0x120)](0xc8)[_0x4c8bcb(0x133)](_0x34985a);};exports[a28_0x2c5f81(0x13b)]=show;function a28_0x4add(_0x2ce37a,_0xa1cb94){const _0xc0e1a8=a28_0x56da();return a28_0x4add=function(_0x5eacee,_0x5a3e48){_0x5eacee=_0x5eacee-0x112;let _0x56dac8=_0xc0e1a8[_0x5eacee];return _0x56dac8;},a28_0x4add(_0x2ce37a,_0xa1cb94);}const update=async(_0x5e8159,_0x3a7bf5)=>{const _0x9cee3c=a28_0x2c5f81,{promptId:_0x43f830}=_0x5e8159[_0x9cee3c(0x123)],_0x3104e9=_0x5e8159['body'],_0x21e11f=_0x5e8159['headers'][_0x9cee3c(0x118)],[,_0x25e922]=_0x21e11f[_0x9cee3c(0x125)]('\x20'),_0x1f5e0a=(0x0,jsonwebtoken_1['verify'])(_0x25e922,auth_1[_0x9cee3c(0x11b)]['secret']),{companyId:_0x30b79b}=_0x1f5e0a,_0x404d0c=await(0x0,UpdatePromptService_1['default'])({'promptData':_0x3104e9,'promptId':_0x43f830,'companyId':_0x30b79b}),_0x53b239=(0x0,socket_1[_0x9cee3c(0x12a)])();return _0x53b239[_0x9cee3c(0x127)](_0x9cee3c(0x139),{'action':_0x9cee3c(0x129),'prompt':_0x404d0c}),_0x3a7bf5[_0x9cee3c(0x120)](0xc8)[_0x9cee3c(0x133)](_0x404d0c);};exports['update']=update;const remove=async(_0x1b3298,_0x5aa514)=>{const _0x599e40=a28_0x2c5f81,{promptId:_0x235e1e}=_0x1b3298['params'],_0x188f66=_0x1b3298[_0x599e40(0x117)][_0x599e40(0x118)],[,_0x807cfb]=_0x188f66[_0x599e40(0x125)]('\x20'),_0x2b9758=(0x0,jsonwebtoken_1[_0x599e40(0x136)])(_0x807cfb,auth_1['default'][_0x599e40(0x121)]),{companyId:_0x251490}=_0x2b9758;try{const {count:_0x4ea14f}=await Whatsapp_1['default']['findAndCountAll']({'where':{'promptId':+_0x235e1e,'companyId':_0x251490}});if(_0x4ea14f>0x0)return _0x5aa514[_0x599e40(0x120)](0xc8)[_0x599e40(0x133)]({'message':_0x599e40(0x132)});await(0x0,DeletePromptService_1[_0x599e40(0x11b)])(_0x235e1e,_0x251490);const _0x512a5e=(0x0,socket_1[_0x599e40(0x12a)])();return _0x512a5e[_0x599e40(0x127)](_0x599e40(0x139),{'action':_0x599e40(0x135),'intelligenceId':+_0x235e1e}),_0x5aa514[_0x599e40(0x120)](0xc8)[_0x599e40(0x133)]({'message':'Prompt\x20deleted'});}catch(_0x2fdde0){return _0x5aa514['status'](0x1f4)['json']({'message':_0x599e40(0x114)});}};exports[a28_0x2c5f81(0x119)]=remove;