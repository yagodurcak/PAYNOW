"use strict";(()=>{var e={};e.id=161,e.ids=[161],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},660:(e,t,n)=>{n.r(t),n.d(t,{config:()=>P,default:()=>d,routeModule:()=>m});var a={};n.r(a),n.d(a,{fetchTransactions:()=>u});var r=n(9947),i=n(2706),o=n(6762);let u=()=>new Promise(e=>{setTimeout(()=>{e([{id:1,name:"Compra Supermercado",amount:50,date:"2024-11-10"},{id:2,name:"Pago de Servicios",amount:100,date:"2024-11-11"},{id:3,name:"Transferencia a Amigo",amount:200,date:"2024-11-12"},{id:4,name:"Pago de Renta",amount:150,date:"2024-11-13"}])},1e3)}),d=(0,o.M)(a,"default"),P=(0,o.M)(a,"config"),m=new r.PagesAPIRouteModule({definition:{kind:i.A.PAGES_API,page:"/api/mockData",pathname:"/api/mockData",bundlePath:"",filename:""},userland:a})},2706:(e,t)=>{var n;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(n||(n={}))},9947:(e,t,n)=>{e.exports=n(5600)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=660);module.exports=n})();