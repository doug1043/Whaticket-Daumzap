'use strict';const a244_0x31f216=a244_0x35e7;(function(_0x149cc2,_0x518644){const _0x5899a0=a244_0x35e7,_0x202b4d=_0x149cc2();while(!![]){try{const _0x158706=parseInt(_0x5899a0(0x86))/0x1*(-parseInt(_0x5899a0(0x7b))/0x2)+parseInt(_0x5899a0(0x6e))/0x3+parseInt(_0x5899a0(0x7c))/0x4*(parseInt(_0x5899a0(0x8c))/0x5)+-parseInt(_0x5899a0(0x7d))/0x6*(parseInt(_0x5899a0(0x71))/0x7)+parseInt(_0x5899a0(0x88))/0x8+parseInt(_0x5899a0(0x7a))/0x9*(parseInt(_0x5899a0(0x78))/0xa)+-parseInt(_0x5899a0(0x81))/0xb;if(_0x158706===_0x518644)break;else _0x202b4d['push'](_0x202b4d['shift']());}catch(_0x5bac94){_0x202b4d['push'](_0x202b4d['shift']());}}}(a244_0x3aeb,0x6b19d));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['handleMessageStatusUpdate']=exports[a244_0x31f216(0x77)]=void 0x0;function a244_0x3aeb(){const _0x2bd237=['toString','43GrXzGq','DELIVERY_ACK','5584360nMTbFc','update','WebMessageInfo','Status','2845495ZzTkgZ','2353365comsXy','SENT','../utils/logger','7fGcXxb','Erro\x20ao\x20atualizar\x20status\x20da\x20mensagem:\x20','proto','READ','logger','handleMessageStatusUpdate','MessageStatus','690EfdzyM','apply','59589lcLhDo','30106hdoAGr','4TetckS','3341742ssnyKh','(((.+)+)+)+$','search','@whiskeysockets/baileys','9520797ubBHDq','DELIVERED','error','constructor'];a244_0x3aeb=function(){return _0x2bd237;};return a244_0x3aeb();}const baileys_1=require(a244_0x31f216(0x80)),logger_1=require(a244_0x31f216(0x70));var MessageStatus;(function(_0x591dbf){const _0xad4d8a=a244_0x31f216,_0x2cfc4b=(function(){let _0x850f89=!![];return function(_0x185f20,_0x5d00e9){const _0xde9a5=_0x850f89?function(){const _0x57e59a=a244_0x35e7;if(_0x5d00e9){const _0xbd3301=_0x5d00e9[_0x57e59a(0x79)](_0x185f20,arguments);return _0x5d00e9=null,_0xbd3301;}}:function(){};return _0x850f89=![],_0xde9a5;};}()),_0x2be095=_0x2cfc4b(this,function(){const _0x2c316a=a244_0x35e7;return _0x2be095[_0x2c316a(0x85)]()[_0x2c316a(0x7f)]('(((.+)+)+)+$')['toString']()[_0x2c316a(0x84)](_0x2be095)[_0x2c316a(0x7f)](_0x2c316a(0x7e));});_0x2be095(),_0x591dbf[_0xad4d8a(0x6f)]='SENT',_0x591dbf[_0xad4d8a(0x82)]=_0xad4d8a(0x82),_0x591dbf[_0xad4d8a(0x74)]='READ';}(MessageStatus=exports[a244_0x31f216(0x77)]||(exports[a244_0x31f216(0x77)]={})));function a244_0x35e7(_0x1ed7bf,_0x5a5254){const _0x39749d=a244_0x3aeb();return a244_0x35e7=function(_0x55c895,_0x229758){_0x55c895=_0x55c895-0x6e;let _0x3aeb18=_0x39749d[_0x55c895];return _0x3aeb18;},a244_0x35e7(_0x1ed7bf,_0x5a5254);}const handleMessageStatusUpdate=async(_0x33742d,_0x22a887)=>{const _0x4560fb=a244_0x31f216;try{const _0x1e6392=_0x33742d['status'];switch(_0x1e6392){case baileys_1[_0x4560fb(0x73)][_0x4560fb(0x8a)][_0x4560fb(0x8b)][_0x4560fb(0x87)]:await _0x22a887['update']({'status':MessageStatus[_0x4560fb(0x82)]});break;case baileys_1[_0x4560fb(0x73)][_0x4560fb(0x8a)][_0x4560fb(0x8b)][_0x4560fb(0x74)]:await _0x22a887[_0x4560fb(0x89)]({'status':MessageStatus[_0x4560fb(0x74)]});break;}return _0x1e6392;}catch(_0x163a1b){logger_1[_0x4560fb(0x75)][_0x4560fb(0x83)](_0x4560fb(0x72)+_0x163a1b);throw _0x163a1b;}};exports[a244_0x31f216(0x76)]=handleMessageStatusUpdate;