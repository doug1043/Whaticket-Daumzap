const a401_0x5d2359=a401_0x2961;(function(_0x445a5a,_0x232435){const _0x5e359b=a401_0x2961,_0x115e02=_0x445a5a();while(!![]){try{const _0x1f7f11=parseInt(_0x5e359b(0x70))/0x1+parseInt(_0x5e359b(0x82))/0x2+-parseInt(_0x5e359b(0x81))/0x3*(parseInt(_0x5e359b(0x88))/0x4)+-parseInt(_0x5e359b(0x83))/0x5+parseInt(_0x5e359b(0x74))/0x6*(-parseInt(_0x5e359b(0x72))/0x7)+-parseInt(_0x5e359b(0x7f))/0x8+parseInt(_0x5e359b(0x73))/0x9;if(_0x1f7f11===_0x232435)break;else _0x115e02['push'](_0x115e02['shift']());}catch(_0x25a474){_0x115e02['push'](_0x115e02['shift']());}}}(a401_0x2a40,0x37e0b));function a401_0x2a40(){const _0x34a798=['__esModule','name','(((.+)+)+)+$','col','LOWER','Sequelize','defineProperty','toString','1116544pFIsrN','../../models/ContactListItem','405786gETcph','198790GirIAA','1358535fHgNUf','sequelize','ASC','default','search','4sblNKi','trim','316679rUKCzE','toLowerCase','21QdtUrA','4986315oAxoeQ','389394eyVNlA','length','findAndCountAll'];a401_0x2a40=function(){return _0x34a798;};return a401_0x2a40();}const a401_0x23d6dd=(function(){let _0x3cd2fd=!![];return function(_0x2757d2,_0x49bb15){const _0x314e1d=_0x3cd2fd?function(){if(_0x49bb15){const _0x2541b7=_0x49bb15['apply'](_0x2757d2,arguments);return _0x49bb15=null,_0x2541b7;}}:function(){};return _0x3cd2fd=![],_0x314e1d;};}()),a401_0x237339=a401_0x23d6dd(this,function(){const _0x21e26c=a401_0x2961;return a401_0x237339['toString']()[_0x21e26c(0x87)](_0x21e26c(0x79))[_0x21e26c(0x7e)]()['constructor'](a401_0x237339)[_0x21e26c(0x87)](_0x21e26c(0x79));});a401_0x237339();'use strict';var __importDefault=this&&this['__importDefault']||function(_0xbf2656){const _0x2c98c0=a401_0x2961;return _0xbf2656&&_0xbf2656[_0x2c98c0(0x77)]?_0xbf2656:{'default':_0xbf2656};};function a401_0x2961(_0x3baeca,_0x4c5cb9){const _0x726a8c=a401_0x2a40();return a401_0x2961=function(_0x237339,_0x23d6dd){_0x237339=_0x237339-0x6f;let _0x2a403e=_0x726a8c[_0x237339];return _0x2a403e;},a401_0x2961(_0x3baeca,_0x4c5cb9);}Object[a401_0x5d2359(0x7d)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a401_0x5d2359(0x84)),ContactListItem_1=__importDefault(require(a401_0x5d2359(0x80))),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x40fa2b,contactListId:_0xf075c7})=>{const _0x25e297=a401_0x5d2359,_0x4f1e05={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x25e297(0x7c)]['where'](sequelize_1[_0x25e297(0x7c)]['fn'](_0x25e297(0x7b),sequelize_1[_0x25e297(0x7c)][_0x25e297(0x7a)](_0x25e297(0x78))),'LIKE','%'+searchParam[_0x25e297(0x71)]()[_0x25e297(0x6f)]()+'%')},{'number':{[sequelize_1['Op']['like']]:'%'+searchParam[_0x25e297(0x71)]()[_0x25e297(0x6f)]()+'%'}}],'companyId':_0x40fa2b,'contactListId':_0xf075c7},_0x4701de=0x14,_0x2ef3d5=_0x4701de*(+pageNumber-0x1),{count:_0xf25a50,rows:_0x35339d}=await ContactListItem_1[_0x25e297(0x86)][_0x25e297(0x76)]({'where':_0x4f1e05,'limit':_0x4701de,'offset':_0x2ef3d5,'order':[['name',_0x25e297(0x85)]]}),_0x5199be=_0xf25a50>_0x2ef3d5+_0x35339d[_0x25e297(0x75)];return{'contacts':_0x35339d,'count':_0xf25a50,'hasMore':_0x5199be};};exports[a401_0x5d2359(0x86)]=ListService;