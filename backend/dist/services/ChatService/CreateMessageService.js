const a376_0x1e83c9=a376_0x4cf3;function a376_0x4cf3(_0x2727f5,_0x3583cc){const _0x4b2ec9=a376_0x23a3();return a376_0x4cf3=function(_0x1fcde8,_0x497a2a){_0x1fcde8=_0x1fcde8-0x179;let _0x23a38a=_0x4b2ec9[_0x1fcde8];return _0x23a38a;},a376_0x4cf3(_0x2727f5,_0x3583cc);}(function(_0x4875c4,_0x41850f){const _0x528977=a376_0x4cf3,_0x1cd5e1=_0x4875c4();while(!![]){try{const _0x2f052c=-parseInt(_0x528977(0x18c))/0x1+-parseInt(_0x528977(0x190))/0x2*(-parseInt(_0x528977(0x18f))/0x3)+-parseInt(_0x528977(0x186))/0x4*(-parseInt(_0x528977(0x18d))/0x5)+parseInt(_0x528977(0x197))/0x6+-parseInt(_0x528977(0x182))/0x7*(parseInt(_0x528977(0x193))/0x8)+-parseInt(_0x528977(0x189))/0x9*(-parseInt(_0x528977(0x188))/0xa)+-parseInt(_0x528977(0x18e))/0xb*(parseInt(_0x528977(0x17e))/0xc);if(_0x2f052c===_0x41850f)break;else _0x1cd5e1['push'](_0x1cd5e1['shift']());}catch(_0x42dd9f){_0x1cd5e1['push'](_0x1cd5e1['shift']());}}}(a376_0x23a3,0x35a43));const a376_0x497a2a=(function(){let _0x338640=!![];return function(_0x3c5bac,_0x5ceb79){const _0x2535fe=_0x338640?function(){if(_0x5ceb79){const _0x1bd20d=_0x5ceb79['apply'](_0x3c5bac,arguments);return _0x5ceb79=null,_0x1bd20d;}}:function(){};return _0x338640=![],_0x2535fe;};}()),a376_0x1fcde8=a376_0x497a2a(this,function(){const _0x26322a=a376_0x4cf3;return a376_0x1fcde8['toString']()['search'](_0x26322a(0x196))['toString']()[_0x26322a(0x180)](a376_0x1fcde8)[_0x26322a(0x195)](_0x26322a(0x196));});function a376_0x23a3(){const _0x1a1158=['83716lrkPKy','update','findAll','8928paCVgv','default','search','(((.+)+)+)+$','2350596HgWDvE','chat','findByPk','../../models/ChatMessage','sender','../../models/User','reload','610668YjGHea','users','constructor','__importDefault','49rGzGWa','name','__esModule','create','412JHERTI','../../models/ChatUser','10KLtNTY','974601UUtVaH','../../models/Chat','defineProperty','367101lVbhGl','9970osdpTe','33SGLbfT','3Yzspni'];a376_0x23a3=function(){return _0x1a1158;};return a376_0x23a3();}a376_0x1fcde8();'use strict';var __importDefault=this&&this[a376_0x1e83c9(0x181)]||function(_0x2140c3){const _0x32f730=a376_0x1e83c9;return _0x2140c3&&_0x2140c3[_0x32f730(0x184)]?_0x2140c3:{'default':_0x2140c3};};Object[a376_0x1e83c9(0x18b)](exports,a376_0x1e83c9(0x184),{'value':!![]});const Chat_1=__importDefault(require(a376_0x1e83c9(0x18a))),ChatMessage_1=__importDefault(require(a376_0x1e83c9(0x17a))),ChatUser_1=__importDefault(require(a376_0x1e83c9(0x187))),User_1=__importDefault(require(a376_0x1e83c9(0x17c)));async function CreateMessageService({senderId:_0x59e534,chatId:_0x525eff,message:_0xfc715e}){const _0x29b7de=a376_0x1e83c9,_0x56fb20=await ChatMessage_1[_0x29b7de(0x194)][_0x29b7de(0x185)]({'senderId':_0x59e534,'chatId':_0x525eff,'message':_0xfc715e});await _0x56fb20[_0x29b7de(0x17d)]({'include':[{'model':User_1[_0x29b7de(0x194)],'as':_0x29b7de(0x17b),'attributes':['id',_0x29b7de(0x183)]},{'model':Chat_1[_0x29b7de(0x194)],'as':_0x29b7de(0x198),'include':[{'model':ChatUser_1['default'],'as':_0x29b7de(0x17f)}]}]});const _0x159a3f=await User_1[_0x29b7de(0x194)][_0x29b7de(0x179)](_0x59e534);await _0x56fb20[_0x29b7de(0x198)]['update']({'lastMessage':_0x159a3f['name']+':\x20'+_0xfc715e});const _0x234356=await ChatUser_1[_0x29b7de(0x194)][_0x29b7de(0x192)]({'where':{'chatId':_0x525eff}});for(let _0x1994c1 of _0x234356){_0x1994c1['userId']===_0x59e534?await _0x1994c1[_0x29b7de(0x191)]({'unreads':0x0}):await _0x1994c1['update']({'unreads':_0x1994c1['unreads']+0x1});}return _0x56fb20;}exports[a376_0x1e83c9(0x194)]=CreateMessageService;