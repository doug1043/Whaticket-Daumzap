const a489_0x513582=a489_0x2a31;(function(_0x39fd25,_0x208769){const _0x509ffd=a489_0x2a31,_0x4aeef5=_0x39fd25();while(!![]){try{const _0x4b4a29=-parseInt(_0x509ffd(0x99))/0x1+parseInt(_0x509ffd(0xa8))/0x2*(parseInt(_0x509ffd(0x87))/0x3)+parseInt(_0x509ffd(0xa4))/0x4+parseInt(_0x509ffd(0x84))/0x5*(parseInt(_0x509ffd(0x9f))/0x6)+parseInt(_0x509ffd(0x9a))/0x7+-parseInt(_0x509ffd(0x92))/0x8*(-parseInt(_0x509ffd(0x83))/0x9)+parseInt(_0x509ffd(0x9b))/0xa*(-parseInt(_0x509ffd(0x8a))/0xb);if(_0x4b4a29===_0x208769)break;else _0x4aeef5['push'](_0x4aeef5['shift']());}catch(_0x4ef4d3){_0x4aeef5['push'](_0x4aeef5['shift']());}}}(a489_0x185b,0xcb372));function a489_0x185b(){const _0x53d5ac=['(((.+)+)+)+$','toDate','order','330WGLGxU','\x22data\x22\x20ASC','\x22horario\x22\x20ASC','COUNT(*)','default','6229220OwILLZ','map','attributes','findAll','30mlqGWz','data','EXTRACT(HOUR\x20FROM\x20\x22createdAt\x22)','sequelize-typescript','group','search','828ANJnkf','145205SyUYeK','constructor','moment','246555cttwgW','Sequelize','toString','46721895dwnwFK','total','../../models/TicketTraking','COUNT','day','__esModule','horario','literal','85688PnrUsN','dataValues','apply','trim','sequelize','__importDefault','lte','605209OlbAeE','2185939uFQeJW','10CNwiKs'];a489_0x185b=function(){return _0x53d5ac;};return a489_0x185b();}function a489_0x2a31(_0x2396fb,_0x44707e){const _0x16b0ac=a489_0x185b();return a489_0x2a31=function(_0x1fe4f8,_0x14fe7a){_0x1fe4f8=_0x1fe4f8-0x81;let _0x185b5f=_0x16b0ac[_0x1fe4f8];return _0x185b5f;},a489_0x2a31(_0x2396fb,_0x44707e);}const a489_0x14fe7a=(function(){let _0x300bef=!![];return function(_0x5f4613,_0xa833a4){const _0x6776ad=_0x300bef?function(){const _0xd1b340=a489_0x2a31;if(_0xa833a4){const _0x27bea=_0xa833a4[_0xd1b340(0x94)](_0x5f4613,arguments);return _0xa833a4=null,_0x27bea;}}:function(){};return _0x300bef=![],_0x6776ad;};}()),a489_0x1fe4f8=a489_0x14fe7a(this,function(){const _0xf61af9=a489_0x2a31;return a489_0x1fe4f8[_0xf61af9(0x89)]()[_0xf61af9(0x82)](_0xf61af9(0x9c))[_0xf61af9(0x89)]()[_0xf61af9(0x85)](a489_0x1fe4f8)[_0xf61af9(0x82)](_0xf61af9(0x9c));});a489_0x1fe4f8();'use strict';var __importDefault=this&&this[a489_0x513582(0x97)]||function(_0x32beea){return _0x32beea&&_0x32beea['__esModule']?_0x32beea:{'default':_0x32beea};};Object['defineProperty'](exports,a489_0x513582(0x8f),{'value':!![]});const sequelize_1=require(a489_0x513582(0x96)),TicketTraking_1=__importDefault(require(a489_0x513582(0x8c))),sequelize_typescript_1=require(a489_0x513582(0xab)),moment_1=__importDefault(require(a489_0x513582(0x86))),TicketsDayService=async({companyId:_0x4ab10e,dateStart:_0x532fcd,dateEnd:_0x50bedf})=>{const _0x5bc702=a489_0x513582;var _0x2f0318,_0xac0a09={'where':{'companyId':_0x4ab10e,'createdAt':{[sequelize_1['Op']['gte']]:(0x0,moment_1['default'])(_0x532fcd)['startOf'](_0x5bc702(0x8e))[_0x5bc702(0x9d)](),[sequelize_1['Op'][_0x5bc702(0x98)]]:(0x0,moment_1['default'])(_0x50bedf)['endOf']('day')['toDate']()}}};_0x532fcd&&_0x532fcd['trim']()===_0x50bedf&&_0x50bedf[_0x5bc702(0x95)]()?(_0xac0a09[_0x5bc702(0xa6)]=[[sequelize_typescript_1['Sequelize'][_0x5bc702(0x91)](_0x5bc702(0xaa)),_0x5bc702(0x90)],[sequelize_typescript_1[_0x5bc702(0x88)][_0x5bc702(0x91)](_0x5bc702(0xa2)),_0x5bc702(0x8b)]],_0xac0a09[_0x5bc702(0x81)]=_0x5bc702(0x90),_0xac0a09['order']=[sequelize_typescript_1['Sequelize'][_0x5bc702(0x91)](_0x5bc702(0xa1))]):(_0xac0a09[_0x5bc702(0xa6)]=[[sequelize_typescript_1['Sequelize'][_0x5bc702(0x91)]('TO_CHAR(DATE(\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)'),'data'],[sequelize_typescript_1['Sequelize']['fn'](_0x5bc702(0x8d),'*'),_0x5bc702(0x8b)]],_0xac0a09[_0x5bc702(0x81)]=_0x5bc702(0xa9),_0xac0a09[_0x5bc702(0x9e)]=[sequelize_typescript_1[_0x5bc702(0x88)][_0x5bc702(0x91)](_0x5bc702(0xa0))]);_0x2f0318=await TicketTraking_1['default'][_0x5bc702(0xa7)](_0xac0a09);var _0x1c4c52=0x0;return _0x2f0318=_0x2f0318[_0x5bc702(0xa5)](_0x2ebdec=>{const _0x329294=_0x5bc702;return _0x1c4c52+=Number(_0x2ebdec[_0x329294(0x93)][_0x329294(0x8b)]),{'horario':_0x2ebdec['dataValues'][_0x329294(0x90)],'data':_0x2ebdec[_0x329294(0x93)][_0x329294(0xa9)],'total':_0x2ebdec[_0x329294(0x93)][_0x329294(0x8b)]};}),{'data':_0x2f0318,'count':_0x1c4c52};};exports[a489_0x513582(0xa3)]=TicketsDayService;