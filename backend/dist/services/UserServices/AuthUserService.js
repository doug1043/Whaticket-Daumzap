const a532_0x577029=a532_0x16df;(function(_0x271a77,_0x4ea471){const _0x402019=a532_0x16df,_0x4eecc6=_0x271a77();while(!![]){try{const _0x309f41=-parseInt(_0x402019(0xbf))/0x1*(-parseInt(_0x402019(0xc5))/0x2)+-parseInt(_0x402019(0xcc))/0x3+-parseInt(_0x402019(0xc3))/0x4+-parseInt(_0x402019(0xdd))/0x5*(-parseInt(_0x402019(0xc8))/0x6)+parseInt(_0x402019(0xc7))/0x7+parseInt(_0x402019(0xd2))/0x8+parseInt(_0x402019(0xd1))/0x9*(-parseInt(_0x402019(0xd8))/0xa);if(_0x309f41===_0x4ea471)break;else _0x4eecc6['push'](_0x4eecc6['shift']());}catch(_0x1ce9ea){_0x4eecc6['push'](_0x4eecc6['shift']());}}}(a532_0x5da8,0x9add9));const a532_0x441333=(function(){let _0x432230=!![];return function(_0x2b1e70,_0x301fa6){const _0x1583e9=_0x432230?function(){const _0x5875d7=a532_0x16df;if(_0x301fa6){const _0x39d5b3=_0x301fa6[_0x5875d7(0xcd)](_0x2b1e70,arguments);return _0x301fa6=null,_0x39d5b3;}}:function(){};return _0x432230=![],_0x1583e9;};}()),a532_0x446bb0=a532_0x441333(this,function(){const _0x19fd92=a532_0x16df;return a532_0x446bb0[_0x19fd92(0xca)]()[_0x19fd92(0xd7)](_0x19fd92(0xc2))['toString']()[_0x19fd92(0xdc)](a532_0x446bb0)[_0x19fd92(0xd7)](_0x19fd92(0xc2));});a532_0x446bb0();'use strict';var __importDefault=this&&this[a532_0x577029(0xd5)]||function(_0x1f4831){const _0x2150a1=a532_0x577029;return _0x1f4831&&_0x1f4831[_0x2150a1(0xcf)]?_0x1f4831:{'default':_0x1f4831};};function a532_0x16df(_0x339a30,_0x45fb69){const _0x309a41=a532_0x5da8();return a532_0x16df=function(_0x446bb0,_0x441333){_0x446bb0=_0x446bb0-0xbb;let _0x5da83a=_0x309a41[_0x446bb0];return _0x5da83a;},a532_0x16df(_0x339a30,_0x45fb69);}function a532_0x5da8(){const _0x22014a=['toString','split','2676483fYpkEM','apply','ERR_OUT_OF_HOURS','__esModule','../../models/User','16066359wdHhBS','1630984PAeeDg','endWork','getHours','__importDefault','ERR_INVALID_CREDENTIALS','search','10TNuOmy','startWork','../../models/Setting','getMinutes','constructor','85DgsKbS','SerializeUser','../../errors/AppError','../../helpers/CreateTokens','incrementTokenVersion','2vFNMvw','queues','findOne','(((.+)+)+)+$','409292bFRvDk','../../models/Company','854822FVSlVD','checkPassword','8570884nzsgdb','399126Brktxf','default'];a532_0x5da8=function(){return _0x22014a;};return a532_0x5da8();}Object['defineProperty'](exports,a532_0x577029(0xcf),{'value':!![]});const User_1=__importDefault(require(a532_0x577029(0xd0))),AppError_1=__importDefault(require(a532_0x577029(0xbc))),CreateTokens_1=require(a532_0x577029(0xbd)),SerializeUser_1=require('../../helpers/SerializeUser'),Company_1=__importDefault(require(a532_0x577029(0xc4))),Setting_1=__importDefault(require(a532_0x577029(0xda))),AuthUserService=async({email:_0x41a7b0,password:_0x2b1f56})=>{const _0x663a47=a532_0x577029,_0x34fb00=await User_1[_0x663a47(0xc9)][_0x663a47(0xc1)]({'where':{'email':_0x41a7b0},'include':[_0x663a47(0xc0),{'model':Company_1['default'],'include':[{'model':Setting_1[_0x663a47(0xc9)]}]}]});if(!_0x34fb00)throw new AppError_1[(_0x663a47(0xc9))](_0x663a47(0xd6),0x191);const _0x4e2d39=new Date(),_0x7677f7=_0x4e2d39[_0x663a47(0xd4)]()*0x3c*0x3c,_0x856888=_0x4e2d39[_0x663a47(0xdb)]()*0x3c,_0x1a991a=_0x7677f7+_0x856888,_0x5eca97=_0x34fb00[_0x663a47(0xd9)],_0x3ec016=Number(_0x5eca97[_0x663a47(0xcb)](':')[0x0])*0x3c*0x3c,_0x2a3a40=Number(_0x5eca97[_0x663a47(0xcb)](':')[0x1])*0x3c,_0x5f0b22=_0x3ec016+_0x2a3a40,_0x41c7ea=_0x34fb00[_0x663a47(0xd3)],_0x10ecb8=Number(_0x41c7ea[_0x663a47(0xcb)](':')[0x0])*0x3c*0x3c,_0x3e53c2=Number(_0x41c7ea[_0x663a47(0xcb)](':')[0x1])*0x3c,_0x4214ea=_0x10ecb8+_0x3e53c2;if(_0x1a991a<_0x5f0b22||_0x1a991a>_0x4214ea)throw new AppError_1['default'](_0x663a47(0xce),0x191);if(!await _0x34fb00[_0x663a47(0xc6)](_0x2b1f56))throw new AppError_1[(_0x663a47(0xc9))]('ERR_INVALID_CREDENTIALS',0x191);await _0x34fb00[_0x663a47(0xbe)]();const _0x2d5247=(0x0,CreateTokens_1['createAccessToken'])(_0x34fb00),_0x1f40be=(0x0,CreateTokens_1['createRefreshToken'])(_0x34fb00),_0x236d5d=await(0x0,SerializeUser_1[_0x663a47(0xbb)])(_0x34fb00);return{'serializedUser':_0x236d5d,'token':_0x2d5247,'refreshToken':_0x1f40be};};exports['default']=AuthUserService;