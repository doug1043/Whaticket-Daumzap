function a520_0x4ce9(_0x4982d3,_0x2099d9){const _0x4c1f7c=a520_0x4935();return a520_0x4ce9=function(_0x57803d,_0x4be6d5){_0x57803d=_0x57803d-0x1da;let _0x493502=_0x4c1f7c[_0x57803d];return _0x493502;},a520_0x4ce9(_0x4982d3,_0x2099d9);}const a520_0x754779=a520_0x4ce9;function a520_0x4935(){const _0x16be66=['apply','findOrCreate','ERR_CREATING_TICKET','queue','constructor','getIO','../WhatsappService/ShowWhatsAppService','default','__esModule','2093484JUywCd','defineProperty','68AUpCks','95889dhDhkp','(((.+)+)+)+$','19319760ONoyhT','search','2582275NlJsiV','../../libs/socket','../../models/Ticket','9644341exOged','../../helpers/GetDefaultWhatsApp','__importDefault','569386VoiLaS','ticket','open','../ContactServices/ShowContactService','emit','findByPk','3150296FXNTkZ','update','contact','toString','../../helpers/GetDefaultWhatsAppByUser'];a520_0x4935=function(){return _0x16be66;};return a520_0x4935();}(function(_0x335679,_0x3dc7fb){const _0x57197e=a520_0x4ce9,_0x3a9596=_0x335679();while(!![]){try{const _0xf4a661=parseInt(_0x57197e(0x1f9))/0x1+-parseInt(_0x57197e(0x1ee))/0x2*(-parseInt(_0x57197e(0x1ef))/0x3)+-parseInt(_0x57197e(0x1de))/0x4+parseInt(_0x57197e(0x1f3))/0x5+parseInt(_0x57197e(0x1ec))/0x6+parseInt(_0x57197e(0x1f6))/0x7+-parseInt(_0x57197e(0x1f1))/0x8;if(_0xf4a661===_0x3dc7fb)break;else _0x3a9596['push'](_0x3a9596['shift']());}catch(_0x3473c0){_0x3a9596['push'](_0x3a9596['shift']());}}}(a520_0x4935,0xaa18c));const a520_0x4be6d5=(function(){let _0x46a456=!![];return function(_0x11dc38,_0x1e5b37){const _0x62b81d=_0x46a456?function(){const _0x2946c0=a520_0x4ce9;if(_0x1e5b37){const _0x345e4e=_0x1e5b37[_0x2946c0(0x1e3)](_0x11dc38,arguments);return _0x1e5b37=null,_0x345e4e;}}:function(){};return _0x46a456=![],_0x62b81d;};}()),a520_0x57803d=a520_0x4be6d5(this,function(){const _0xc5e35a=a520_0x4ce9;return a520_0x57803d[_0xc5e35a(0x1e1)]()[_0xc5e35a(0x1f2)](_0xc5e35a(0x1f0))['toString']()[_0xc5e35a(0x1e7)](a520_0x57803d)[_0xc5e35a(0x1f2)](_0xc5e35a(0x1f0));});a520_0x57803d();'use strict';var __importDefault=this&&this[a520_0x754779(0x1f8)]||function(_0xf54e54){const _0xf4a2b7=a520_0x754779;return _0xf54e54&&_0xf54e54[_0xf4a2b7(0x1eb)]?_0xf54e54:{'default':_0xf54e54};};Object[a520_0x754779(0x1ed)](exports,a520_0x754779(0x1eb),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),CheckContactOpenTickets_1=__importDefault(require('../../helpers/CheckContactOpenTickets')),GetDefaultWhatsApp_1=__importDefault(require(a520_0x754779(0x1f7))),Ticket_1=__importDefault(require(a520_0x754779(0x1f5))),ShowContactService_1=__importDefault(require(a520_0x754779(0x1db))),socket_1=require(a520_0x754779(0x1f4)),GetDefaultWhatsAppByUser_1=__importDefault(require(a520_0x754779(0x1e2))),ShowWhatsAppService_1=__importDefault(require(a520_0x754779(0x1e9))),CreateTicketService=async({contactId:_0x188560,status:_0xc9bc74,userId:_0x354e1a,queueId:_0x334f5e,companyId:_0x47818d,whatsappId:_0x4b0f9c})=>{const _0x2bd6ba=a520_0x754779;let _0x450a30;_0x4b0f9c!==undefined&&_0x4b0f9c!==null&&_0x4b0f9c!==''&&(_0x450a30=await(0x0,ShowWhatsAppService_1['default'])(_0x4b0f9c,_0x47818d));let _0x4aa424=await(0x0,GetDefaultWhatsAppByUser_1['default'])(_0x354e1a);_0x450a30&&(_0x4aa424=_0x450a30);if(!_0x4aa424)_0x4aa424=await(0x0,GetDefaultWhatsApp_1[_0x2bd6ba(0x1ea)])(_0x47818d);await(0x0,CheckContactOpenTickets_1[_0x2bd6ba(0x1ea)])(_0x188560,_0x4b0f9c);const {isGroup:_0xacea73}=await(0x0,ShowContactService_1[_0x2bd6ba(0x1ea)])(_0x188560,_0x47818d),[{id:_0x362fba}]=await Ticket_1[_0x2bd6ba(0x1ea)][_0x2bd6ba(0x1e4)]({'where':{'contactId':_0x188560,'companyId':_0x47818d,'whatsappId':_0x4b0f9c},'defaults':{'contactId':_0x188560,'companyId':_0x47818d,'whatsappId':_0x4aa424['id'],'status':_0xc9bc74,'isGroup':_0xacea73,'userId':_0x354e1a}});await Ticket_1['default']['update']({'companyId':_0x47818d,'queueId':_0x334f5e,'userId':_0x354e1a,'whatsappId':_0x4aa424['id'],'status':_0x2bd6ba(0x1da)},{'where':{'id':_0x362fba}});const _0x17289b=await Ticket_1['default'][_0x2bd6ba(0x1dd)](_0x362fba,{'include':[_0x2bd6ba(0x1e0),_0x2bd6ba(0x1e6)]});if(!_0x17289b)throw new AppError_1[(_0x2bd6ba(0x1ea))](_0x2bd6ba(0x1e5));const _0x41e340=(0x0,socket_1[_0x2bd6ba(0x1e8)])();return _0x41e340['to'](_0x17289b['id'][_0x2bd6ba(0x1e1)]())[_0x2bd6ba(0x1dc)](_0x2bd6ba(0x1fa),{'action':_0x2bd6ba(0x1df),'ticket':_0x17289b}),_0x17289b;};exports[a520_0x754779(0x1ea)]=CreateTicketService;