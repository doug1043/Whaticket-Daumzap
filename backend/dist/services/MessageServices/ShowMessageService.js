function a448_0xe691(){const _0x29abaa=['__importDefault','search','1546nqQAuv','9030352fFlzQY','defineProperty','toString','select\x20*\x20from\x20\x22Messages\x22\x20where\x20id\x20=\x20\x27','../../models/Message','418430LblATt','GetWhatsAppFromMessage','(((.+)+)+)+$','52rfWaBe','ticketId','length','1750653MqcuzF','../../models/Ticket','default','3750614qkgayU','29661970YCyWNh','12ryqUOf','whatsappId','1174XZQcQD','query','../../database','apply','9620991ksuZae'];a448_0xe691=function(){return _0x29abaa;};return a448_0xe691();}function a448_0x2afe(_0x3264e0,_0x2e15e9){const _0x3544ff=a448_0xe691();return a448_0x2afe=function(_0x3bfeff,_0x3711d8){_0x3bfeff=_0x3bfeff-0x8b;let _0xe691e3=_0x3544ff[_0x3bfeff];return _0xe691e3;},a448_0x2afe(_0x3264e0,_0x2e15e9);}const a448_0x47227d=a448_0x2afe;(function(_0x12fea5,_0x4b4418){const _0x55b131=a448_0x2afe,_0x507f40=_0x12fea5();while(!![]){try{const _0x43b6f7=parseInt(_0x55b131(0x90))/0x1*(parseInt(_0x55b131(0xa3))/0x2)+parseInt(_0x55b131(0x9c))/0x3+parseInt(_0x55b131(0x99))/0x4*(parseInt(_0x55b131(0x96))/0x5)+-parseInt(_0x55b131(0xa1))/0x6*(-parseInt(_0x55b131(0x9f))/0x7)+parseInt(_0x55b131(0x91))/0x8+-parseInt(_0x55b131(0x8d))/0x9+-parseInt(_0x55b131(0xa0))/0xa;if(_0x43b6f7===_0x4b4418)break;else _0x507f40['push'](_0x507f40['shift']());}catch(_0x2f822a){_0x507f40['push'](_0x507f40['shift']());}}}(a448_0xe691,0xb5aed));const a448_0x3711d8=(function(){let _0x5a7a08=!![];return function(_0x45d7a9,_0x2b1a26){const _0xe668a7=_0x5a7a08?function(){const _0x2353b6=a448_0x2afe;if(_0x2b1a26){const _0x192e0c=_0x2b1a26[_0x2353b6(0x8c)](_0x45d7a9,arguments);return _0x2b1a26=null,_0x192e0c;}}:function(){};return _0x5a7a08=![],_0xe668a7;};}()),a448_0x3bfeff=a448_0x3711d8(this,function(){const _0x11329b=a448_0x2afe;return a448_0x3bfeff[_0x11329b(0x93)]()[_0x11329b(0x8f)](_0x11329b(0x98))[_0x11329b(0x93)]()['constructor'](a448_0x3bfeff)[_0x11329b(0x8f)](_0x11329b(0x98));});a448_0x3bfeff();'use strict';var __importDefault=this&&this[a448_0x47227d(0x8e)]||function(_0xffebc4){return _0xffebc4&&_0xffebc4['__esModule']?_0xffebc4:{'default':_0xffebc4};};Object[a448_0x47227d(0x92)](exports,'__esModule',{'value':!![]}),exports[a448_0x47227d(0x97)]=void 0x0;const database_1=__importDefault(require(a448_0x47227d(0x8b))),Message_1=__importDefault(require(a448_0x47227d(0x95))),Ticket_1=__importDefault(require(a448_0x47227d(0x9d))),ShowMessageService=async _0x10917c=>{const _0x28df3d=a448_0x47227d,_0x37750b=await database_1[_0x28df3d(0x9e)][_0x28df3d(0xa4)](_0x28df3d(0x94)+_0x10917c+'\x27',{'model':Message_1[_0x28df3d(0x9e)],'mapToModel':!![]});if(_0x37750b[_0x28df3d(0x9b)]>0x0)return _0x37750b[0x0];return undefined;},GetWhatsAppFromMessage=async _0x14e12b=>{const _0x16a34f=a448_0x47227d,_0x4de4b6=_0x14e12b[_0x16a34f(0x9a)],_0xe29c40=await Ticket_1[_0x16a34f(0x9e)]['findByPk'](_0x4de4b6);if(!_0xe29c40)return null;return _0xe29c40[_0x16a34f(0xa2)];};exports['GetWhatsAppFromMessage']=GetWhatsAppFromMessage,exports[a448_0x47227d(0x9e)]=ShowMessageService;