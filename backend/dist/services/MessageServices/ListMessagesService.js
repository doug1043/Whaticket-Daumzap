const a447_0x358cc6=a447_0x18f0;function a447_0x18f0(_0xcf663,_0x119fef){const _0xb12a42=a447_0x5210();return a447_0x18f0=function(_0x2dd84c,_0x3a9352){_0x2dd84c=_0x2dd84c-0x13c;let _0x5210f0=_0xb12a42[_0x2dd84c];return _0x5210f0;},a447_0x18f0(_0xcf663,_0x119fef);}(function(_0x29e498,_0x25b522){const _0x58a676=a447_0x18f0,_0x3ad558=_0x29e498();while(!![]){try{const _0x4bf2f3=parseInt(_0x58a676(0x157))/0x1+-parseInt(_0x58a676(0x143))/0x2*(-parseInt(_0x58a676(0x149))/0x3)+parseInt(_0x58a676(0x159))/0x4*(parseInt(_0x58a676(0x153))/0x5)+-parseInt(_0x58a676(0x151))/0x6*(-parseInt(_0x58a676(0x13e))/0x7)+-parseInt(_0x58a676(0x14b))/0x8+-parseInt(_0x58a676(0x145))/0x9*(parseInt(_0x58a676(0x14f))/0xa)+parseInt(_0x58a676(0x144))/0xb;if(_0x4bf2f3===_0x25b522)break;else _0x3ad558['push'](_0x3ad558['shift']());}catch(_0x34ccca){_0x3ad558['push'](_0x3ad558['shift']());}}}(a447_0x5210,0xc24ad));function a447_0x5210(){const _0x5f2a8c=['3FlrKvj','queue','9731328saRCsl','../../models/OldMessage','../../models/Message','../../errors/AppError','10ctXtRD','../TicketServices/ShowTicketService','1545834LVkpJc','DESC','1759755fUjlOv','search','__importDefault','__esModule','312509xzWUAy','apply','4pDncCe','../../models/Queue','constructor','sequelize','toString','21PXFkSL','findAndCountAll','default','contact','quotedMsg','339382nfFJFN','21693705oYpijq','14102874nPnhPG','reverse','length','queueId'];a447_0x5210=function(){return _0x5f2a8c;};return a447_0x5210();}const a447_0x3a9352=(function(){let _0x27509d=!![];return function(_0x2a4157,_0x272b2f){const _0xe5757a=_0x27509d?function(){const _0xe8dde4=a447_0x18f0;if(_0x272b2f){const _0x3ead32=_0x272b2f[_0xe8dde4(0x158)](_0x2a4157,arguments);return _0x272b2f=null,_0x3ead32;}}:function(){};return _0x27509d=![],_0xe5757a;};}()),a447_0x2dd84c=a447_0x3a9352(this,function(){const _0x1cb8f6=a447_0x18f0;return a447_0x2dd84c['toString']()[_0x1cb8f6(0x154)]('(((.+)+)+)+$')[_0x1cb8f6(0x13d)]()[_0x1cb8f6(0x15b)](a447_0x2dd84c)[_0x1cb8f6(0x154)]('(((.+)+)+)+$');});a447_0x2dd84c();'use strict';var __importDefault=this&&this[a447_0x358cc6(0x155)]||function(_0x20befe){const _0xbe22ca=a447_0x358cc6;return _0x20befe&&_0x20befe[_0xbe22ca(0x156)]?_0x20befe:{'default':_0x20befe};};Object['defineProperty'](exports,a447_0x358cc6(0x156),{'value':!![]});const sequelize_1=require(a447_0x358cc6(0x13c)),AppError_1=__importDefault(require(a447_0x358cc6(0x14e))),Message_1=__importDefault(require(a447_0x358cc6(0x14d))),ShowTicketService_1=__importDefault(require(a447_0x358cc6(0x150))),Queue_1=__importDefault(require(a447_0x358cc6(0x15a))),OldMessage_1=__importDefault(require(a447_0x358cc6(0x14c))),ListMessagesService=async({pageNumber:pageNumber='1',ticketId:_0x47db33,companyId:_0x56858f,queues:queues=[]})=>{const _0x122092=a447_0x358cc6,_0x3e4ffc=await(0x0,ShowTicketService_1['default'])(_0x47db33,_0x56858f);if(!_0x3e4ffc)throw new AppError_1[(_0x122092(0x140))]('ERR_NO_TICKET_FOUND',0x194);const _0x5727c5=0x14,_0x1e56c6=_0x5727c5*(+pageNumber-0x1),_0x289c8d={'where':{'ticketId':_0x47db33,'companyId':_0x56858f}};queues['length']>0x0&&(_0x289c8d['where'][_0x122092(0x148)]={[sequelize_1['Op']['or']]:{[sequelize_1['Op']['in']]:queues,[sequelize_1['Op']['eq']]:null}});const {count:_0x1f23a4,rows:_0x5edaba}=await Message_1[_0x122092(0x140)][_0x122092(0x13f)]({..._0x289c8d,'limit':_0x5727c5,'include':['contact',{'model':Message_1[_0x122092(0x140)],'as':_0x122092(0x142),'include':[_0x122092(0x141)]},{'model':OldMessage_1[_0x122092(0x140)],'as':'oldMessages'},{'model':Queue_1[_0x122092(0x140)],'as':_0x122092(0x14a)}],'offset':_0x1e56c6,'order':[['createdAt',_0x122092(0x152)]]}),_0x1ac421=_0x1f23a4>_0x1e56c6+_0x5edaba[_0x122092(0x147)];return{'messages':_0x5edaba[_0x122092(0x146)](),'ticket':_0x3e4ffc,'count':_0x1f23a4,'hasMore':_0x1ac421};};exports[a447_0x358cc6(0x140)]=ListMessagesService;