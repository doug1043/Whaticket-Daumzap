const a411_0x180f78=a411_0x4933;(function(_0xe24dfe,_0x1e129c){const _0x3b5db0=a411_0x4933,_0x478220=_0xe24dfe();while(!![]){try{const _0x51f9df=-parseInt(_0x3b5db0(0x1ef))/0x1+-parseInt(_0x3b5db0(0x1e1))/0x2*(-parseInt(_0x3b5db0(0x1df))/0x3)+parseInt(_0x3b5db0(0x1eb))/0x4*(-parseInt(_0x3b5db0(0x1ea))/0x5)+parseInt(_0x3b5db0(0x1e7))/0x6*(-parseInt(_0x3b5db0(0x1f0))/0x7)+-parseInt(_0x3b5db0(0x1de))/0x8*(-parseInt(_0x3b5db0(0x1e3))/0x9)+parseInt(_0x3b5db0(0x1f1))/0xa*(-parseInt(_0x3b5db0(0x1ed))/0xb)+parseInt(_0x3b5db0(0x1f2))/0xc;if(_0x51f9df===_0x1e129c)break;else _0x478220['push'](_0x478220['shift']());}catch(_0x47b73e){_0x478220['push'](_0x478220['shift']());}}}(a411_0x25c1,0x957eb));const a411_0x43b130=(function(){let _0x17a74d=!![];return function(_0x4b4750,_0x2236e8){const _0x44357d=_0x17a74d?function(){const _0x5758d8=a411_0x4933;if(_0x2236e8){const _0x61a29b=_0x2236e8[_0x5758d8(0x1e5)](_0x4b4750,arguments);return _0x2236e8=null,_0x61a29b;}}:function(){};return _0x17a74d=![],_0x44357d;};}()),a411_0x27ec1d=a411_0x43b130(this,function(){const _0x50d60d=a411_0x4933;return a411_0x27ec1d[_0x50d60d(0x1e2)]()[_0x50d60d(0x1e9)](_0x50d60d(0x1e4))['toString']()[_0x50d60d(0x1ee)](a411_0x27ec1d)['search'](_0x50d60d(0x1e4));});a411_0x27ec1d();function a411_0x25c1(){const _0x110ca1=['__esModule','7063792mZxFmw','1255659vplanl','defineProperty','2BEHtSh','toString','9POFqQX','(((.+)+)+)+$','apply','../../errors/AppError','3796620BdWBLQ','__importDefault','search','2395OTjAkG','8696uCMOTx','default','11MZUjKZ','constructor','1144195prddWv','7TiQNsR','6290810pvxLUN','33098352OiZUzm'];a411_0x25c1=function(){return _0x110ca1;};return a411_0x25c1();}'use strict';var __importDefault=this&&this[a411_0x180f78(0x1e8)]||function(_0x2ca04b){const _0x5e371b=a411_0x180f78;return _0x2ca04b&&_0x2ca04b[_0x5e371b(0x1dd)]?_0x2ca04b:{'default':_0x2ca04b};};Object[a411_0x180f78(0x1e0)](exports,a411_0x180f78(0x1dd),{'value':!![]});function a411_0x4933(_0x25cc3d,_0x10a002){const _0x48652d=a411_0x25c1();return a411_0x4933=function(_0x27ec1d,_0x43b130){_0x27ec1d=_0x27ec1d-0x1dd;let _0x25c14e=_0x48652d[_0x27ec1d];return _0x25c14e;},a411_0x4933(_0x25cc3d,_0x10a002);}const AppError_1=__importDefault(require(a411_0x180f78(0x1e6))),ContactList_1=__importDefault(require('../../models/ContactList')),UpdateService=async _0x4071a9=>{const _0x12202d=a411_0x180f78,{id:_0x8a9715,name:_0x14e9d9}=_0x4071a9,_0xefe535=await ContactList_1[_0x12202d(0x1ec)]['findByPk'](_0x8a9715);if(!_0xefe535)throw new AppError_1[(_0x12202d(0x1ec))]('ERR_NO_CONTACTLIST_FOUND',0x194);return await _0xefe535['update']({'name':_0x14e9d9}),_0xefe535;};exports[a411_0x180f78(0x1ec)]=UpdateService;