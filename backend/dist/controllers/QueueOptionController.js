const a31_0x21cf9f=a31_0x5937;(function(_0x784d39,_0x23b33){const _0x9d7755=a31_0x5937,_0xfa938d=_0x784d39();while(!![]){try{const _0x69bf5d=-parseInt(_0x9d7755(0x13c))/0x1*(parseInt(_0x9d7755(0x130))/0x2)+-parseInt(_0x9d7755(0x12b))/0x3*(-parseInt(_0x9d7755(0x12c))/0x4)+parseInt(_0x9d7755(0x146))/0x5+parseInt(_0x9d7755(0x14b))/0x6+parseInt(_0x9d7755(0x149))/0x7+-parseInt(_0x9d7755(0x13a))/0x8+parseInt(_0x9d7755(0x15a))/0x9;if(_0x69bf5d===_0x23b33)break;else _0xfa938d['push'](_0xfa938d['shift']());}catch(_0x216f64){_0xfa938d['push'](_0xfa938d['shift']());}}}(a31_0x48e1,0x77c82));const a31_0x34514c=(function(){let _0x266262=!![];return function(_0x330af3,_0xa06266){const _0x2dd500=_0x266262?function(){const _0x5ad58f=a31_0x5937;if(_0xa06266){const _0x31ce5f=_0xa06266[_0x5ad58f(0x14f)](_0x330af3,arguments);return _0xa06266=null,_0x31ce5f;}}:function(){};return _0x266262=![],_0x2dd500;};}()),a31_0x2f9b2e=a31_0x34514c(this,function(){const _0x496c59=a31_0x5937;return a31_0x2f9b2e[_0x496c59(0x14d)]()[_0x496c59(0x133)]('(((.+)+)+)+$')[_0x496c59(0x14d)]()['constructor'](a31_0x2f9b2e)['search'](_0x496c59(0x15d));});a31_0x2f9b2e();'use strict';var __importDefault=this&&this[a31_0x21cf9f(0x135)]||function(_0x603c15){const _0x1deada=a31_0x21cf9f;return _0x603c15&&_0x603c15[_0x1deada(0x14a)]?_0x603c15:{'default':_0x603c15};};function a31_0x48e1(){const _0x9d9308=['existsSync','json','7230816MrVFdH','store','Arquivo\x20excluído','(((.+)+)+)+$','3nQUxWg','365188gQIKAp','findByPk','show','update','2eXudcO','mediaName','default','search','QueueOption\x20not\x20found','__importDefault','deleteMedia','mediaPath','params','../services/QueueOptionService/ShowService','6723264ozOIJA','uploadFile','456307KzHEhs','../services/QueueOptionService/DeleteService','filename','../errors/AppError','save','Arquivo\x20Salvo','index','Option\x20Delected','company','defineProperty','687680dwfkZP','../models/QueueOption','status','3755101uDmPek','__esModule','1311846ynRuZg','unlinkSync','toString','file','apply','queue','remove','send','files','message','body','public','Option\x20Updated'];a31_0x48e1=function(){return _0x9d9308;};return a31_0x48e1();}Object[a31_0x21cf9f(0x145)](exports,a31_0x21cf9f(0x14a),{'value':!![]}),exports[a31_0x21cf9f(0x136)]=exports['mediaUpload']=exports[a31_0x21cf9f(0x151)]=exports[a31_0x21cf9f(0x13b)]=exports[a31_0x21cf9f(0x12f)]=exports[a31_0x21cf9f(0x12e)]=exports['store']=exports['index']=void 0x0;const CreateService_1=__importDefault(require('../services/QueueOptionService/CreateService')),ListService_1=__importDefault(require('../services/QueueOptionService/ListService')),UpdateService_1=__importDefault(require('../services/QueueOptionService/UpdateService')),ShowService_1=__importDefault(require(a31_0x21cf9f(0x139))),DeleteService_1=__importDefault(require(a31_0x21cf9f(0x13d))),lodash_1=require('lodash'),fs_1=__importDefault(require('fs')),path_1=__importDefault(require('path')),AppError_1=__importDefault(require(a31_0x21cf9f(0x13f))),QueueOption_1=__importDefault(require(a31_0x21cf9f(0x147))),index=async(_0x3c74cf,_0x58aaef)=>{const _0x1e39f0=a31_0x21cf9f,{queueId:_0x47bf5c,queueOptionId:_0x440352,parentId:_0x23d5ff}=_0x3c74cf['query'],_0x252fa8=await(0x0,ListService_1[_0x1e39f0(0x132)])({'queueId':_0x47bf5c,'queueOptionId':_0x440352,'parentId':_0x23d5ff});return _0x58aaef[_0x1e39f0(0x159)](_0x252fa8);};exports[a31_0x21cf9f(0x142)]=index;const store=async(_0x49e2ee,_0xb744a)=>{const _0x18dab6=a31_0x21cf9f,_0x261661=_0x49e2ee[_0x18dab6(0x155)],_0x682bfb=await(0x0,CreateService_1[_0x18dab6(0x132)])(_0x261661);return _0xb744a[_0x18dab6(0x148)](0xc8)['json'](_0x682bfb);};exports[a31_0x21cf9f(0x15b)]=store;const show=async(_0x2d4363,_0x199b0b)=>{const _0x18d33d=a31_0x21cf9f,{queueOptionId:_0x54439c}=_0x2d4363[_0x18d33d(0x138)],_0x543315=await(0x0,ShowService_1[_0x18d33d(0x132)])(_0x54439c);return _0x199b0b[_0x18d33d(0x148)](0xc8)[_0x18d33d(0x159)](_0x543315);};exports[a31_0x21cf9f(0x12e)]=show;const update=async(_0x3c5a96,_0xc1fa44)=>{const _0x25e3e9=a31_0x21cf9f,{queueOptionId:_0x14e5fc}=_0x3c5a96[_0x25e3e9(0x138)],_0x2e8ed9=_0x3c5a96[_0x25e3e9(0x155)],_0x428a0e=await(0x0,UpdateService_1[_0x25e3e9(0x132)])(_0x14e5fc,_0x2e8ed9);return _0xc1fa44['status'](0xc8)['json'](_0x428a0e);};exports[a31_0x21cf9f(0x12f)]=update;const uploadFile=async(_0x283bb6,_0x537e1c)=>{const _0x385f5c=a31_0x21cf9f,{queueOptionId:_0x367e1c}=_0x283bb6[_0x385f5c(0x138)],_0x3c2af2=_0x283bb6[_0x385f5c(0x155)],_0x107717=_0x283bb6[_0x385f5c(0x14e)],_0x3649d1=await QueueOption_1[_0x385f5c(0x132)][_0x385f5c(0x12d)](_0x367e1c);if(!_0x3649d1)throw new Error('QueueOption\x20not\x20found');const _0x587815=_0x3649d1['message'];return fs_1[_0x385f5c(0x132)][_0x385f5c(0x158)](_0x587815)&&fs_1[_0x385f5c(0x132)][_0x385f5c(0x14c)](_0x587815),_0x3649d1[_0x385f5c(0x154)]=_0x107717[_0x385f5c(0x13e)],await _0x3649d1[_0x385f5c(0x140)](),_0x537e1c['status'](0xc8)['json']({'message':_0x385f5c(0x157)});};exports['uploadFile']=uploadFile;const remove=async(_0x51db5c,_0x456460)=>{const _0x21c26b=a31_0x21cf9f,{queueOptionId:_0x54c556}=_0x51db5c[_0x21c26b(0x138)],_0x5d5178=await QueueOption_1[_0x21c26b(0x132)][_0x21c26b(0x12d)](_0x54c556);if(!_0x5d5178)throw new Error(_0x21c26b(0x134));const _0x40b581=_0x5d5178['message'];return fs_1['default']['existsSync'](_0x40b581)&&fs_1[_0x21c26b(0x132)]['unlinkSync'](_0x40b581),await(0x0,DeleteService_1[_0x21c26b(0x132)])(_0x54c556),_0x456460['status'](0xc8)['json']({'message':_0x21c26b(0x143)});};function a31_0x5937(_0x4a2b96,_0x5de4ac){const _0x124de5=a31_0x48e1();return a31_0x5937=function(_0x2f9b2e,_0x34514c){_0x2f9b2e=_0x2f9b2e-0x12b;let _0x48e103=_0x124de5[_0x2f9b2e];return _0x48e103;},a31_0x5937(_0x4a2b96,_0x5de4ac);}exports[a31_0x21cf9f(0x151)]=remove;const mediaUpload=async(_0x5b943f,_0x51c7fc)=>{const _0x29337e=a31_0x21cf9f,{queueOptionId:_0x472634}=_0x5b943f[_0x29337e(0x138)],_0x2cbed8=_0x5b943f[_0x29337e(0x153)],_0x261289=(0x0,lodash_1['head'])(_0x2cbed8);try{const _0x391a8f=await QueueOption_1[_0x29337e(0x132)][_0x29337e(0x12d)](_0x472634);return _0x391a8f[_0x29337e(0x12f)]({'mediaPath':_0x261289[_0x29337e(0x13e)],'mediaName':_0x261289['originalname']}),_0x51c7fc[_0x29337e(0x152)]({'mensagem':_0x29337e(0x141)});}catch(_0x5f482b){throw new AppError_1[(_0x29337e(0x132))](_0x5f482b['message']);}};exports['mediaUpload']=mediaUpload;const deleteMedia=async(_0x7742d1,_0x3b1e24)=>{const _0x2ab6e3=a31_0x21cf9f,{queueOptionId:_0x4eccbc}=_0x7742d1[_0x2ab6e3(0x138)];try{const _0x550415=await QueueOption_1[_0x2ab6e3(0x132)]['findByPk'](_0x4eccbc,{'include':[_0x2ab6e3(0x150)]}),_0xfdefcc=path_1[_0x2ab6e3(0x132)]['resolve'](_0x2ab6e3(0x156),_0x2ab6e3(0x144)+_0x550415[_0x2ab6e3(0x150)]['companyId'],_0x550415['mediaPath']),_0xfd168d=fs_1[_0x2ab6e3(0x132)]['existsSync'](_0xfdefcc);return _0xfd168d&&fs_1[_0x2ab6e3(0x132)][_0x2ab6e3(0x14c)](_0xfdefcc),_0x550415[_0x2ab6e3(0x137)]=null,_0x550415[_0x2ab6e3(0x131)]=null,await _0x550415[_0x2ab6e3(0x140)](),_0x3b1e24[_0x2ab6e3(0x152)]({'mensagem':_0x2ab6e3(0x15c)});}catch(_0x3dfa95){throw new AppError_1[(_0x2ab6e3(0x132))](_0x3dfa95[_0x2ab6e3(0x154)]);}};exports[a31_0x21cf9f(0x136)]=deleteMedia;