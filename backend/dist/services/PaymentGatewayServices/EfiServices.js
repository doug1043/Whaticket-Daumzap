const a450_0x404b4f=a450_0x1d8d;(function(_0x233fc7,_0x46361b){const _0x155b22=a450_0x1d8d,_0x27e949=_0x233fc7();while(!![]){try{const _0x201952=parseInt(_0x155b22(0x197))/0x1+parseInt(_0x155b22(0x1aa))/0x2*(-parseInt(_0x155b22(0x19b))/0x3)+parseInt(_0x155b22(0x1a1))/0x4+parseInt(_0x155b22(0x17d))/0x5+-parseInt(_0x155b22(0x179))/0x6*(-parseInt(_0x155b22(0x17a))/0x7)+parseInt(_0x155b22(0x178))/0x8+-parseInt(_0x155b22(0x163))/0x9*(parseInt(_0x155b22(0x1a2))/0xa);if(_0x201952===_0x46361b)break;else _0x27e949['push'](_0x27e949['shift']());}catch(_0x185ba5){_0x27e949['push'](_0x27e949['shift']());}}}(a450_0x2fb7,0x56cc5));const a450_0x570bb1=(function(){let _0x18478e=!![];return function(_0x15f9ea,_0x170ea5){const _0x2db4b4=_0x18478e?function(){const _0x275615=a450_0x1d8d;if(_0x170ea5){const _0x55ccea=_0x170ea5[_0x275615(0x15e)](_0x15f9ea,arguments);return _0x170ea5=null,_0x55ccea;}}:function(){};return _0x18478e=![],_0x2db4b4;};}()),a450_0xe28f05=a450_0x570bb1(this,function(){const _0x15d5fc=a450_0x1d8d;return a450_0xe28f05[_0x15d5fc(0x166)]()[_0x15d5fc(0x1af)](_0x15d5fc(0x1a5))[_0x15d5fc(0x166)]()[_0x15d5fc(0x1a9)](a450_0xe28f05)[_0x15d5fc(0x1af)](_0x15d5fc(0x1a5));});a450_0xe28f05();function a450_0x2fb7(){const _0x40f307=['then','paid','3082968uUImzD','2042154paKRTe','14QlnxYE','efiInitialize:\x20','../../../private/','531460EOOUNO','../../utils/logger','findByPk','default','company','body','value','efi','/subscription/aa/webhook','error','../../models/Invoices','__esModule','txId','sdk-node-apis-efi','json','pix','valor','_paymentGateway','reload','nome','Recebido\x20valor\x20menor','status','_efiPixKey','efiInitialize','startsWith','Processando\x20pagamento','310482TklBhw','../../models/Company','original','map','89031hetGie','#Fatura:','toLocaleString','_efiCertFile','txid','join','1592276wtuVWx','49360MyEkbN','pixCreateImmediateCharge','processInvoiceExpired','(((.+)+)+)+$','pixCopiaECola','../../errors/AppError','Error\x20getting\x20detail\x20of\x20txid','constructor','6aBSCaC','BACKEND_URL','efiWebhook','debug','logger','search','efiCheckStatus','__importDefault','./PaymentGatewayServices','open','info','apply','efiInitialize:\x20fail\x20to\x20verify\x20current\x20webhook','env','CONCLUIDA','efiInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','2619htqbmz','pixDetailWebhook','_efiClientSecret','toString','../SettingServices/GetSuperSettingService','webhookUrl','pixConfigWebhook','findOne','https://','update','defineProperty','efiInitialize:\x20webhook\x20correto\x20já\x20instalado','replace','processInvoicePaid','all','stringify','efiCreateSubscription','_efiClientId','Invoice\x20not\x20found'];a450_0x2fb7=function(){return _0x40f307;};return a450_0x2fb7();}function a450_0x1d8d(_0x252e21,_0x234d59){const _0x465da5=a450_0x2fb7();return a450_0x1d8d=function(_0xe28f05,_0x570bb1){_0xe28f05=_0xe28f05-0x15c;let _0x2fb753=_0x465da5[_0xe28f05];return _0x2fb753;},a450_0x1d8d(_0x252e21,_0x234d59);}'use strict';var __importDefault=this&&this[a450_0x404b4f(0x1b1)]||function(_0x51095c){const _0x36541a=a450_0x404b4f;return _0x51095c&&_0x51095c[_0x36541a(0x188)]?_0x51095c:{'default':_0x51095c};};Object[a450_0x404b4f(0x16d)](exports,a450_0x404b4f(0x188),{'value':!![]}),exports[a450_0x404b4f(0x173)]=exports[a450_0x404b4f(0x1b0)]=exports[a450_0x404b4f(0x1ac)]=exports['efiInitialize']=void 0x0;const sdk_node_apis_efi_1=__importDefault(require(a450_0x404b4f(0x18a))),path_1=__importDefault(require('path')),GetSuperSettingService_1=__importDefault(require(a450_0x404b4f(0x167))),logger_1=require(a450_0x404b4f(0x17e)),Invoices_1=__importDefault(require(a450_0x404b4f(0x187))),Company_1=__importDefault(require(a450_0x404b4f(0x198))),AppError_1=__importDefault(require(a450_0x404b4f(0x1a7))),PaymentGatewayServices_1=require(a450_0x404b4f(0x1b2)),webhookUrl=process[a450_0x404b4f(0x160)][a450_0x404b4f(0x1ab)]+a450_0x404b4f(0x185);async function getEfiOptions(){const _0x291eaf=a450_0x404b4f,_0x20ba49=path_1['default'][_0x291eaf(0x1a0)](__dirname,_0x291eaf(0x17c)+await(0x0,GetSuperSettingService_1[_0x291eaf(0x180)])({'key':_0x291eaf(0x19e)}));return{'sandbox':![],'client_id':await(0x0,GetSuperSettingService_1[_0x291eaf(0x180)])({'key':_0x291eaf(0x174)}),'client_secret':await(0x0,GetSuperSettingService_1[_0x291eaf(0x180)])({'key':_0x291eaf(0x165)}),'pix_cert':_0x20ba49,'validateMtls':![]};}const newEfiPayInstance=async()=>{const _0x47962e=a450_0x404b4f,_0x481230=await getEfiOptions();return new sdk_node_apis_efi_1[(_0x47962e(0x180))](_0x481230);},createWebHook=async _0x32d5b8=>{const _0x4163e4=a450_0x404b4f,_0xda035={'chave':await(0x0,GetSuperSettingService_1[_0x4163e4(0x180)])({'key':'_efiPixKey'})},_0x4d59ab={'webhookUrl':webhookUrl};return _0x32d5b8[_0x4163e4(0x169)](_0xda035,_0x4d59ab)[_0x4163e4(0x176)](_0x16773e=>{const _0x593fad=_0x4163e4;logger_1['logger'][_0x593fad(0x15d)]({'result':_0x16773e},'pixConfigWebhook\x20ok');},_0x8ff80d=>{const _0x1c27a6=_0x4163e4;logger_1['logger'][_0x1c27a6(0x186)]({'result':_0x8ff80d},'pixConfigWebhook\x20error:');});},efiInitialize=async()=>{const _0x1f48c7=a450_0x404b4f,_0xa59b32=await(0x0,GetSuperSettingService_1[_0x1f48c7(0x180)])({'key':_0x1f48c7(0x18e)});if(!webhookUrl[_0x1f48c7(0x195)](_0x1f48c7(0x16b))){logger_1[_0x1f48c7(0x1ae)]['debug'](_0x1f48c7(0x162));return;}try{if(_0xa59b32==='efi'){const _0x522703=await getEfiOptions(),_0x19c6bf=new sdk_node_apis_efi_1[(_0x1f48c7(0x180))](_0x522703),_0x28ad22={'chave':await(0x0,GetSuperSettingService_1[_0x1f48c7(0x180)])({'key':_0x1f48c7(0x193)})};_0x19c6bf[_0x1f48c7(0x164)](_0x28ad22)[_0x1f48c7(0x176)](_0x57836e=>{const _0x3e66f9=_0x1f48c7;_0x57836e?.[_0x3e66f9(0x168)]!==webhookUrl?createWebHook(_0x19c6bf):logger_1[_0x3e66f9(0x1ae)]['debug']({'result':_0x57836e},_0x3e66f9(0x16e));},_0x2df345=>{const _0x2af8ad=_0x1f48c7;_0x2df345?.[_0x2af8ad(0x190)]==='webhook_nao_encontrado'?createWebHook(_0x19c6bf):logger_1[_0x2af8ad(0x1ae)]['error'](_0x2df345,_0x2af8ad(0x15f));});}}catch(_0x19a4fe){logger_1[_0x1f48c7(0x1ae)][_0x1f48c7(0x186)](_0x19a4fe,_0x1f48c7(0x17b));}};exports[a450_0x404b4f(0x194)]=efiInitialize;const efiWebhook=async(_0x45c65c,_0x10de5c)=>{const _0x13d69b=a450_0x404b4f,{evento:_0x3e0a43}=_0x45c65c['body'];if(_0x3e0a43==='teste_webhook')return _0x10de5c[_0x13d69b(0x18b)]({'ok':!![]});return _0x45c65c[_0x13d69b(0x182)][_0x13d69b(0x18c)]&&await Promise[_0x13d69b(0x171)](_0x45c65c['body'][_0x13d69b(0x18c)][_0x13d69b(0x19a)](async _0x590cc2=>{const _0xac4c1d=_0x13d69b;logger_1[_0xac4c1d(0x1ae)]['debug'](_0x590cc2,_0xac4c1d(0x196));const _0x2188f2=await Invoices_1[_0xac4c1d(0x180)][_0xac4c1d(0x16a)]({'where':{'txId':_0x590cc2[_0xac4c1d(0x19f)],'status':_0xac4c1d(0x15c)},'include':[{'model':Company_1[_0xac4c1d(0x180)],'as':_0xac4c1d(0x181)}]});if(!_0x2188f2){logger_1['logger']['debug']('efiWebhook:\x20Invoice\x20not\x20found\x20or\x20already\x20paid');return;}const _0x40e7c8=parseFloat(_0x590cc2[_0xac4c1d(0x18d)]);if(_0x40e7c8<_0x2188f2[_0xac4c1d(0x183)]){logger_1[_0xac4c1d(0x1ae)]['debug'](_0xac4c1d(0x191));return;}await(0x0,PaymentGatewayServices_1['processInvoicePaid'])(_0x2188f2);})),_0x10de5c[_0x13d69b(0x18b)]({'ok':!![]});};exports[a450_0x404b4f(0x1ac)]=efiWebhook;const efiCheckStatus=async(_0x425467,_0xa000c5=null)=>{const _0x3185a7=a450_0x404b4f;try{!_0xa000c5&&(_0xa000c5=await newEfiPayInstance());const _0x183b2f=await _0xa000c5['pixDetailCharge']({'txid':_0x425467[_0x3185a7(0x189)]});if(_0x183b2f[_0x3185a7(0x192)]!==_0x3185a7(0x161))return![];const {pix:_0x36c726}=_0x183b2f,_0x584a16=parseFloat(_0x36c726[0x0][_0x3185a7(0x18d)]);if(_0x584a16>=_0x425467['value'])return await(0x0,PaymentGatewayServices_1[_0x3185a7(0x170)])(_0x425467),!![];return![];}catch(_0xffe5a){logger_1[_0x3185a7(0x1ae)][_0x3185a7(0x186)](_0xffe5a,_0x3185a7(0x1a8));}return![];};exports[a450_0x404b4f(0x1b0)]=efiCheckStatus;const efiPollCheckStatus=async(_0x291144,_0x64fa82,_0x34c771=0xa,_0x3850ab=0x7530)=>{let _0x208e96=0x0;async function _0x3ee6bf(){const _0x372b0b=a450_0x1d8d;await _0x64fa82[_0x372b0b(0x18f)]();if(_0x64fa82[_0x372b0b(0x192)]===_0x372b0b(0x177)){logger_1['logger'][_0x372b0b(0x1ad)]('efiPollCheckStatus:\x20Invoice\x20'+_0x64fa82['id']+'\x20already\x20paid,\x20finishing\x20polling');return;}const _0x2fbd33=await(0x0,exports['efiCheckStatus'])(_0x64fa82,_0x291144);if(_0x2fbd33)return;_0x208e96+=0x1;if(_0x208e96>=_0x34c771){(0x0,PaymentGatewayServices_1[_0x372b0b(0x1a4)])(_0x64fa82);return;}await new Promise(_0x519613=>setTimeout(_0x519613,_0x3850ab)),await _0x3ee6bf();}return _0x3ee6bf();},efiCreateSubscription=async(_0x425ffa,_0xb002a2)=>{const _0x1a7378=a450_0x404b4f,{price:_0x51dda9,invoiceId:_0x42789c}=_0x425ffa['body'],_0x146ed9=parseFloat(_0x51dda9),_0x4dd461={'calendario':{'expiracao':0x12c},'valor':{'original':_0x146ed9[_0x1a7378(0x19d)]('pt-br',{'minimumFractionDigits':0x2})[_0x1a7378(0x16f)](',','.')},'chave':await(0x0,GetSuperSettingService_1[_0x1a7378(0x180)])({'key':_0x1a7378(0x193)}),'solicitacaoPagador':_0x1a7378(0x19c)+_0x42789c},_0x49a95f=await getEfiOptions();try{const _0x5a2c02=await Invoices_1['default'][_0x1a7378(0x17f)](_0x42789c);if(!_0x5a2c02)throw new Error(_0x1a7378(0x175));await(0x0,exports[_0x1a7378(0x194)])();const _0x434291=new sdk_node_apis_efi_1[(_0x1a7378(0x180))](_0x49a95f),_0x5450e7=await _0x434291[_0x1a7378(0x1a3)]([],_0x4dd461);return await _0x5a2c02[_0x1a7378(0x16c)]({'txId':_0x5450e7['txid'],'payGw':_0x1a7378(0x184),'payGwData':JSON[_0x1a7378(0x172)](_0x5450e7)}),await _0x5a2c02['reload'](),efiPollCheckStatus(_0x434291,_0x5a2c02),_0xb002a2[_0x1a7378(0x18b)]({'qrcode':{'qrcode':_0x5450e7[_0x1a7378(0x1a6)]},'valor':{'original':_0x4dd461['valor'][_0x1a7378(0x199)]}});}catch(_0x2a40b1){logger_1[_0x1a7378(0x1ae)]['error']({'efiOptions':_0x49a95f,'error':_0x2a40b1},'efiCreateSubscription\x20error');throw new AppError_1[(_0x1a7378(0x180))]('Problema\x20encontrado,\x20entre\x20em\x20contato\x20com\x20o\x20suporte!',0x190);}};exports['efiCreateSubscription']=efiCreateSubscription;