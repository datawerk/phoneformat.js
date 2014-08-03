(function(){var k=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function m(a,b){function c(){}c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fa=function(a,c,e){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function n(a,b){null!=a&&this.append.apply(this,arguments)}n.prototype.e="";n.prototype.set=function(a){this.e=""+a};n.prototype.append=function(a,b,c){this.e+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.e+=arguments[d];return this};n.prototype.clear=function(){this.e=""};n.prototype.toString=function(){return this.e};function p(a,b){return a<b?-1:a>b?1:0};function ba(a,b){this.qa=a;this.ma=!!b.fa;this.s=b.a;this.oa=b.type;this.ka=!1;switch(this.s){case ca:case da:case ea:case fa:case ga:this.ka=!0}this.q=b.defaultValue}var ca=3,da=4,ea=6,fa=16,ga=18;function ha(a,b){this.va=a;this.m={};for(var c=0;c<b.length;c++){var d=b[c];this.m[d.qa]=d}};function r(){this.d={};this.m=this.t().m;this.j=this.na=null}r.prototype.t=function(){var a=this.constructor,b;if(!(b=a.sa)){var c;b=a.ya;var d=[];for(c in b)0!=c&&d.push(new ba(c,b[c]));c=new ha(a,d);b=a.sa=c}return b};r.prototype.set=function(a,b){s(this,a.qa,b)};r.prototype.clear=function(a){ia(this,a.qa)};
function t(a,b){var c=a.d[b];if(null==c)return null;if(a.na){if(!(b in a.j)){var d=a.na,f=a.m[b];if(null!=c)if(f.ma){for(var e=[],g=0;g<c.length;g++)e[g]=d.da(f,c[g]);c=e}else c=d.da(f,c);return a.j[b]=c}return a.j[b]}return c}function u(a,b,c){var d=t(a,b);return a.m[b].ma?d[c||0]:d}
function w(a,b){var c;if(null!=a.d[b])c=u(a,b,void 0);else a:{c=a.m[b];if(void 0===c.q){var d=c.oa;if(d===Boolean)c.q=!1;else if(d===Number)c.q=0;else if(d===String)c.q=c.ka?"0":"";else{c=new d;break a}}c=c.q}return c}function x(a,b){return a.m[b].ma?null!=a.d[b]?a.d[b].length:0:null!=a.d[b]?1:0}function s(a,b,c){a.d[b]=c;a.j&&(a.j[b]=c)}function ia(a,b){delete a.d[b];a.j&&delete a.j[b]}function y(a,b){a.ya=b;a.t=function(){return a.sa||(new a).t()}};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function z(){r.apply(this)}m(z,r);function A(){r.apply(this)}m(A,r);function B(){r.apply(this)}m(B,r);B.prototype.ta=function(){return u(this,10)};B.prototype.k=function(){return w(this,10)};B.prototype.aa=function(a){s(this,10,a)};function ja(){r.apply(this)}m(ja,r);
y(z,{0:{name:"NumberFormat",ca:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,a:9,type:String},2:{name:"format",required:!0,a:9,type:String},3:{name:"leading_digits_pattern",fa:!0,a:9,type:String},4:{name:"national_prefix_formatting_rule",a:9,type:String},6:{name:"national_prefix_optional_when_formatting",a:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",a:9,type:String}});
y(A,{0:{name:"PhoneNumberDesc",ca:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",a:9,type:String},3:{name:"possible_number_pattern",a:9,type:String},6:{name:"example_number",a:9,type:String}});
y(B,{0:{name:"PhoneMetadata",ca:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",required:!0,a:11,type:A},2:{name:"fixed_line",required:!0,a:11,type:A},3:{name:"mobile",required:!0,a:11,type:A},4:{name:"toll_free",required:!0,a:11,type:A},5:{name:"premium_rate",required:!0,a:11,type:A},6:{name:"shared_cost",required:!0,a:11,type:A},7:{name:"personal_number",required:!0,a:11,type:A},8:{name:"voip",required:!0,a:11,type:A},21:{name:"pager",required:!0,a:11,type:A},25:{name:"uan",required:!0,
a:11,type:A},27:{name:"emergency",required:!0,a:11,type:A},28:{name:"voicemail",required:!0,a:11,type:A},24:{name:"no_international_dialling",required:!0,a:11,type:A},9:{name:"id",required:!0,a:9,type:String},10:{name:"country_code",required:!0,a:5,type:Number},11:{name:"international_prefix",required:!0,a:9,type:String},17:{name:"preferred_international_prefix",a:9,type:String},12:{name:"national_prefix",a:9,type:String},13:{name:"preferred_extn_prefix",a:9,type:String},15:{name:"national_prefix_for_parsing",
a:9,type:String},16:{name:"national_prefix_transform_rule",a:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",a:8,defaultValue:!1,type:Boolean},19:{name:"number_format",fa:!0,a:11,type:z},20:{name:"intl_number_format",fa:!0,a:11,type:z},22:{name:"main_country_for_code",a:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",a:9,type:String},26:{name:"leading_zero_possible",a:8,defaultValue:!1,type:Boolean}});
y(ja,{0:{name:"PhoneMetadataCollection",ca:"i18n.phonenumbers.PhoneMetadataCollection"},1:{name:"metadata",fa:!0,a:11,type:B}});/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var C={41:["CH"],43:["AT"],49:["DE"]},ka={DE:[,[,,"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,7})","\\d{2,15}"],[,,"[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})","\\d{2,15}",,,"30123456"],[,,"1(?:5[0-2579]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})","\\d{10,11}",
,,"15123456789"],[,,"800\\d{7,12}","\\d{10,15}",,,"8001234567890"],[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})","\\d{10,11}",,,"9001234567"],[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})","\\d{7,14}",,,"18012345"],[,,"700\\d{8}","\\d{11}",,,"70012345678"],[,,"NA","NA"],"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"],"0$1","",0],[,"(1\\d{3})(\\d{7})","$1 $2",["15"],"0$1","",0],[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"],"0$1","",0],[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"],
"0$1","",0],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])","[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"],
"0$1","",0],[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"],"0$1","",0],[,"(800)(\\d{7,12})","$1 $2",["800"],"0$1","",0],[,"(177)(99)(\\d{7,8})","$1 $2 $3",["177","1779","17799"],"0$1","",0],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["(?:18|90)0|137","1(?:37|80)|900[1359]"],"0$1","",0],[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"],"0$1","",0],[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"],"0$1","",0],[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"],"0$1","",0],[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"],"0$1","",0],
[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"],"0$1","",0],[,"(138)(\\d{4})","$1 $2",["138"],"0$1","",0]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})","\\d{4,14}",,,"16412345"],,,[,,"NA","NA"],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})","\\d{8,14}",,,"18500123456"],,,[,,"17799\\d{7,8}","\\d{12,13}",,,"177991234567"]],AT:[,[,,"[1-9]\\d{3,12}","\\d{3,13}"],[,,"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",
"\\d{3,13}",,,"1234567890"],[,,"6(?:44|5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}","\\d{7,13}",,,"644123456"],[,,"80[02]\\d{6,10}","\\d{9,13}",,,"800123456"],[,,"(?:711|9(?:0[01]|3[019]))\\d{6,10}","\\d{9,13}",,,"900123456"],[,,"8(?:10|2[018])\\d{6,10}","\\d{9,13}",,,"810123456"],[,,"NA","NA"],[,,"780\\d{6,10}","\\d{9,13}",,,"780123456"],"AT",43,"00","0",,,"0",,,,[[,"(1)(\\d{3,12})","$1 $2",["1"],"0$1","",0],[,"(5\\d)(\\d{3,5})","$1 $2",["5[079]"],"0$1","",0],[,"(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"],
"0$1","",0],[,"(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"],"0$1","",0],[,"(\\d{3})(\\d{3,10})","$1 $2",["316|46|51|732|6(?:44|5[0-3579]|[6-9])|7(?:1|[28]0)|[89]"],"0$1","",0],[,"(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-35-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}","\\d{5,13}",,,"50123"],,,[,,"NA","NA"]],CH:[,[,,"[2-9]\\d{8}|860\\d{9}","\\d{9}(?:\\d{3})?"],
[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}","\\d{9}",,,"212345678"],[,,"7[5-9]\\d{7}","\\d{9}",,,"781234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"90[016]\\d{6}","\\d{9}",,,"900123456"],[,,"84[0248]\\d{6}","\\d{9}",,,"840123456"],[,,"878\\d{6}","\\d{9}",,,"878123456"],[,,"NA","NA"],"CH",41,"00","0",,,"0",,,,[[,"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"],"0$1","",0],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4 $5",["860"],"0$1","",0]],,[,,"74[0248]\\d{6}","\\d{9}",,,"740123456"],,,[,,"NA","NA"],[,,"5[18]\\d{7}","\\d{9}",,,"581234567"],,,[,,"860\\d{9}","\\d{12}",,,"860123456789"]]};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function D(){r.apply(this)}m(D,r);D.prototype.ta=function(){return u(this,1)};D.prototype.k=function(){return w(this,1)};D.prototype.aa=function(a){s(this,1,a)};D.prototype.getExtension=function(){return u(this,3)};
y(D,{0:{name:"PhoneNumber",ca:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,a:5,type:Number},2:{name:"national_number",required:!0,a:4,type:Number},3:{name:"extension",a:9,type:String},4:{name:"italian_leading_zero",a:8,type:Boolean},8:{name:"number_of_leading_zeros",a:5,defaultValue:1,type:Number},5:{name:"raw_input",a:9,type:String},6:{name:"country_code_source",a:14,defaultValue:1,type:{Ea:1,Da:5,Ca:10,Ba:20}},7:{name:"preferred_domestic_carrier_code",a:9,type:String}});function E(){}E.prototype.r=function(a){new a.va;throw Error("Unimplemented");};E.prototype.da=function(a,b){if(11==a.s||10==a.s)return b instanceof r?b:this.r(a.oa.t(),b);if(14==a.s||!a.ka)return b;var c=a.oa;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&"string"==typeof b&&/^-?[0-9]+$/.test(b))return Number(b);return b};function F(){}m(F,E);F.prototype.r=function(a,b){var c=new a.va;c.na=this;c.d=b;c.j={};return c};function H(){}m(H,F);H.prototype.Aa=!1;H.prototype.da=function(a,b){return 8==a.s?!!b:E.prototype.da.apply(this,arguments)};H.prototype.r=function(a,b){var c=b;if(this.Aa){var c=[],d;for(d in b)c[parseInt(d,10)+1]=b[d]}return H.za.r.call(this,a,c)};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function I(){this.wa={}}I.u=function(){return I.ua?I.ua:I.ua=new I};
var J={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},la={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},ma=RegExp("[+\uff0b]+"),K=RegExp("^[+\uff0b]+"),na=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),oa=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),pa=/[\\\/] *x/,qa=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),ra=/(?:.*?[A-Za-z]){3}.*/,sa=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),ta=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),ua=/(\$\d)/,va=/^\(?\$1\)?$/;function wa(a){var b=a.search(oa);0<=b?(a=a.substring(b),a=a.replace(qa,""),b=a.search(pa),0<=b&&(a=a.substring(0,b))):a="";return a}function xa(a){return 2>a.length?!1:L(ta,a)}function ya(a){return L(ra,a)?M(a,la):M(a,J)}function za(a){var b=ya(a.toString());a.clear();a.append(b)}function M(a,b){for(var c=new n,d,f=a.length,e=0;e<f;++e)d=a.charAt(e),d=b[d.toUpperCase()],null!=d&&c.append(d);return c.toString()}
function N(a){return null!=a&&isNaN(a)&&a.toUpperCase()in ka}
I.prototype.format=function(a,b){if(0==u(a,2)&&null!=a.d[5]){var c=w(a,5);if(0<c.length)return c}var c=a.k(),d=O(a);if(0==b)return Aa(c,0,d,"");if(!(c in C))return d;var f=P(this,c,Q(c)),e;e=null!=a.d[3]&&0!=a.getExtension().length?3==b?";ext="+a.getExtension():null!=f.d[13]?u(f,13)+w(a,3):" ext. "+w(a,3):"";a:{for(var f=0==(t(f,20)||[]).length||2==b?t(f,19)||[]:t(f,20)||[],g,h=f.length,l=0;l<h;++l){g=f[l];var q=x(g,3);if(0==q||0==d.search(u(g,3,q-1)))if(q=new RegExp(u(g,1)),L(q,d)){f=g;break a}}f=
null}null!=f&&(h=f,f=w(h,2),g=new RegExp(u(h,1)),w(h,5),l="",h=w(h,4),l=2==b&&null!=h&&0<h.length?d.replace(g,f.replace(ua,h)):d.replace(g,f),3==b&&(l=l.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),l=l.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")),d=l);return Aa(c,b,d,e)};
function P(a,b,c){return"001"==c?R(a,""+b):R(a,c)}function O(a){var b=""+u(a,2);return null!=a.d[4]&&u(a,4)?Array(w(a,8)+1).join("0")+b:b}function Aa(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}
function S(a,b){var c=u(b,1);return null!=c.d[2]&&T(a,c)?T(a,u(b,5))?4:T(a,u(b,4))?3:T(a,u(b,6))?5:T(a,u(b,8))?6:T(a,u(b,7))?7:T(a,u(b,21))?8:T(a,u(b,25))?9:T(a,u(b,28))?10:T(a,u(b,2))?u(b,18)||T(a,u(b,3))?2:0:!u(b,18)&&T(a,u(b,3))?1:-1:-1}function R(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.wa[b];if(null==c){c=ka[b];if(null==c)return null;c=(new H).r(B.t(),c);a.wa[b]=c}return c}function T(a,b){return L(w(b,3),a)&&L(w(b,2),a)}
I.prototype.ea=function(a){if(null==a)return null;var b=a.k(),b=C[b];if(null==b)b=null;else if(1==b.length)b=b[0];else a:{a=O(a);for(var c,d=b.length,f=0;f<d;f++){c=b[f];var e=R(this,c);if(null!=e.d[23]){if(0==a.search(u(e,23))){b=c;break a}}else if(-1!=S(a,e)){b=c;break a}}b=null}return b};function Q(a){a=C[a];return null==a?"ZZ":a[0]}function Ba(a,b){var c=R(a,b);if(null==c)throw"Invalid region code: "+b;return c.k()}function Ca(a,b){return L(a,b)?0:0==b.search(a)?3:2}
function Da(a,b){var c=a.toString();if(0==c.length||"0"==c.charAt(0))return 0;for(var d,f=c.length,e=1;3>=e&&e<=f;++e)if(d=parseInt(c.substring(0,e),10),d in C)return b.append(c.substring(e)),d;return 0}
function Ea(a,b,c,d,f){if(0==a.length)return 0;a=new n(a);var e;null!=b&&(e=u(b,11));null==e&&(e="NonMatch");var g=a.toString();if(0==g.length)e=20;else if(K.test(g))g=g.replace(K,""),a.clear(),a.append(ya(g)),e=1;else{g=new RegExp(e);za(a);e=a.toString();if(0==e.search(g)){var g=e.match(g)[0].length,h=e.substring(g).match(na);h&&null!=h[1]&&0<h[1].length&&"0"==M(h[1],J)?e=!1:(a.clear(),a.append(e.substring(g)),e=!0)}else e=!1;e=e?5:20}d&&s(f,6,e);if(20!=e){if(2>=a.e.length)throw"Phone number too short after IDD";
c=Da(a,c);if(0!=c)return f.aa(c),c;throw"Invalid country calling code";}if(null!=b&&(e=b.k(),g=""+e,h=a.toString(),0==h.lastIndexOf(g,0))){var l=new n(h.substring(g.length)),h=u(b,1),g=new RegExp(w(h,2));Fa(l,b,null);b=l.toString();h=w(h,3);if(!L(g,a.toString())&&L(g,b)||3==Ca(h,a.toString()))return c.append(b),d&&s(f,6,10),f.aa(e),e}f.aa(0);return 0}
function Fa(a,b,c){var d=a.toString(),f=d.length,e=u(b,15);if(0!=f&&null!=e&&0!=e.length&&(e=new RegExp("^(?:"+e+")"),f=e.exec(d))){var g=RegExp,h;h=u(b,1);h=w(h,2);g=new g(h);h=L(g,d);var l=f.length-1;b=u(b,16);if(null==b||0==b.length||null==f[l]||0==f[l].length){if(!h||L(g,d.substring(f[0].length)))null!=c&&0<l&&null!=f[l]&&c.append(f[1]),a.set(d.substring(f[0].length))}else if(d=d.replace(e,b),!h||L(g,d))null!=c&&0<l&&c.append(f[1]),a.set(d)}}
I.prototype.parse=function(a,b){return Ga(this,a,b,!1)};I.prototype.$=function(a,b){if(!N(b)&&0<a.length&&"+"!=a.charAt(0))throw"Invalid country calling code";return Ga(this,a,b,!0)};
function Ga(a,b,c,d){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var f=new n,e=b.indexOf(";phone-context=");if(0<e){var g=e+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?f.append(b.substring(g,h)):f.append(b.substring(g))}g=b.indexOf("tel:");f.append(b.substring(0<=g?g+4:0,e))}else f.append(wa(b));e=f.toString();g=e.indexOf(";isub=");0<g&&(f.clear(),f.append(e.substring(0,g)));if(!xa(f.toString()))throw"The string supplied did not seem to be a phone number";
e=f.toString();if(!(N(c)||null!=e&&0<e.length&&K.test(e)))throw"Invalid country calling code";e=new D;d&&s(e,5,b);a:{b=f.toString();g=b.search(sa);if(0<=g&&xa(b.substring(0,g)))for(var h=b.match(sa),l=h.length,q=1;q<l;++q)if(null!=h[q]&&0<h[q].length){f.clear();f.append(b.substring(0,g));b=h[q];break a}b=""}0<b.length&&s(e,3,b);g=R(a,c);b=new n;h=0;l=f.toString();try{h=Ea(l,g,b,d,e)}catch(v){if("Invalid country calling code"==v&&K.test(l)){if(l=l.replace(K,""),h=Ea(l,g,b,d,e),0==h)throw v;}else throw v;
}0!=h?(f=Q(h),f!=c&&(g=P(a,h,f))):(za(f),b.append(f.toString()),null!=c?(h=g.k(),e.aa(h)):d&&ia(e,6));if(2>b.e.length)throw"The string supplied is too short to be a phone number";null!=g&&(a=new n,c=new n(b.toString()),Fa(c,g,a),f=c.toString(),g=u(g,1),g=w(g,3),2!=Ca(g,f)&&(b=c,d&&s(e,7,a.toString())));d=b.toString();a=d.length;if(2>a)throw"The string supplied is too short to be a phone number";if(17<a)throw"The string supplied is too long to be a phone number";if(1<d.length&&"0"==d.charAt(0)){s(e,
4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&s(e,8,a)}s(e,2,parseInt(d,10));return e}function L(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ha(a){this.ra="\u2008";this.ha=new RegExp(this.ra);this.ia="";this.n=new n;this.ba="";this.h=new n;this.p=new n;this.i=!0;this.v=this.o=this.la=!1;this.pa=I.u();this.w=0;this.c=new n;this.ga=!1;this.l="";this.b=new n;this.f=[];this.ja=a;this.xa=this.g=U(this,this.ja)}var Ia=new B;s(Ia,11,"NA");
var Ja=/\[([^\[\]])*\]/g,Ka=/\d(?=[^,}][^,}])/g,La=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),Ma=/[- ]/;function U(a,b){var c=N(b)?Ba(a.pa,b):0,c=R(a.pa,Q(c));return null!=c?c:Ia}
function Na(a){for(var b=a.f.length,c=0;c<b;++c){var d=a.f[c],f=w(d,1);if(a.ba==f)return!1;var e;e=a;var g=d,h=w(g,1);if(-1!=h.indexOf("|"))e=!1;else{h=h.replace(Ja,"\\d");h=h.replace(Ka,"\\d");e.n.clear();var l;l=e;var g=w(g,2),q="999999999999999".match(h)[0];q.length<l.b.e.length?l="":(h=q.replace(new RegExp(h,"g"),g),l=h=h.replace(RegExp("9","g"),l.ra));0<l.length?(e.n.append(l),e=!0):e=!1}if(e)return a.ba=f,a.ga=Ma.test(u(d,4)),a.w=0,!0}return a.i=!1}
function Oa(a,b){for(var c=[],d=b.length-3,f=a.f.length,e=0;e<f;++e){var g=a.f[e];if(0==x(g,3))c.push(a.f[e]);else{var h=Math.min(d,x(g,3)-1),g=u(g,3,h);0==b.search(g)&&c.push(a.f[e])}}a.f=c}Ha.prototype.clear=function(){this.ia="";this.h.clear();this.p.clear();this.n.clear();this.w=0;this.ba="";this.c.clear();this.l="";this.b.clear();this.i=!0;this.v=this.o=this.la=!1;this.f=[];this.ga=!1;this.g!=this.xa&&(this.g=U(this,this.ja))};
function Pa(a,b){a.h.append(b);var c=b;if(na.test(c)||1==a.h.e.length&&ma.test(c)){var c=b,d;"+"==c?(d=c,a.p.append(c)):(d=J[c],a.p.append(d),a.b.append(d));b=d}else a.i=!1,a.la=!0;if(!a.i){if(!a.la)if(Qa(a)){if(Ra(a))return Sa(a)}else if(0<a.l.length&&(c=a.b.toString(),a.b.clear(),a.b.append(a.l),a.b.append(c),c=a.c.toString(),d=c.lastIndexOf(a.l),a.c.clear(),a.c.append(c.substring(0,d))),a.l!=Ta(a))return a.c.append(" "),Sa(a);return a.h.toString()}switch(a.p.e.length){case 0:case 1:case 2:return a.h.toString();
case 3:if(Qa(a))a.v=!0;else return a.l=Ta(a),V(a);default:if(a.v)return Ra(a)&&(a.v=!1),a.c.toString()+a.b.toString();if(0<a.f.length){c=Ua(a,b);d=Va(a);if(0<d.length)return d;Oa(a,a.b.toString());return Na(a)?Wa(a):a.i?W(a,c):a.h.toString()}return V(a)}}function Sa(a){a.i=!0;a.v=!1;a.f=[];return V(a)}
function Va(a){for(var b=a.b.toString(),c=a.f.length,d=0;d<c;++d){var f=a.f[d],e=w(f,1);if((new RegExp("^(?:"+e+")$")).test(b))return a.ga=Ma.test(u(f,4)),b=b.replace(new RegExp(e,"g"),u(f,2)),W(a,b)}return""}function W(a,b){var c=a.c.e.length;return a.ga&&0<c&&" "!=a.c.toString().charAt(c-1)?a.c+" "+b:a.c+b}
function V(a){var b=a.b.toString();if(3<=b.length){for(var c=a.o&&0<x(a.g,20)?t(a.g,20)||[]:t(a.g,19)||[],d=c.length,f=0;f<d;++f){var e=c[f],g;(g=null==a.g.d[12]||a.o||u(e,6))||(g=w(e,4),g=0==g.length||va.test(g));g&&(g=w(e,2),La.test(g)&&a.f.push(e))}Oa(a,b);b=Va(a);return 0<b.length?b:Na(a)?Wa(a):a.h.toString()}return W(a,b)}function Wa(a){var b=a.b.toString(),c=b.length;if(0<c){for(var d="",f=0;f<c;f++)d=Ua(a,b.charAt(f));return a.i?W(a,d):a.h.toString()}return a.c.toString()}
function Ta(a){var b=a.b.toString(),c=0,d;1!=a.g.ta()?d=!1:(d=a.b.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.c.append("1").append(" "),a.o=!0):null!=a.g.d[15]&&(d=new RegExp("^(?:"+u(a.g,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.o=!0,c=d[0].length,a.c.append(b.substring(0,c))));a.b.clear();a.b.append(b.substring(c));return b.substring(0,c)}
function Qa(a){var b=a.p.toString(),c=new RegExp("^(?:\\+|"+u(a.g,11)+")"),c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.o=!0,c=c[0].length,a.b.clear(),a.b.append(b.substring(c)),a.c.clear(),a.c.append(b.substring(0,c)),"+"!=b.charAt(0)&&a.c.append(" "),!0):!1}function Ra(a){if(0==a.b.e.length)return!1;var b=new n,c=Da(a.b,b);if(0==c)return!1;a.b.clear();a.b.append(b.toString());b=Q(c);"001"==b?a.g=R(a.pa,""+c):b!=a.ja&&(a.g=U(a,b));a.c.append(""+c).append(" ");a.l="";return!0}
function Ua(a,b){var c=a.n.toString();if(0<=c.substring(a.w).search(a.ha)){var d=c.search(a.ha),c=c.replace(a.ha,b);a.n.clear();a.n.append(c);a.w=d;return c.substring(0,a.w+1)}1==a.f.length&&(a.i=!1);a.ba="";return a.h.toString()};var X;a:{var Xa=k.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){X=Ya;break a}}X=""}function Y(a){return-1!=X.indexOf(a)};var Za=Y("Opera")||Y("OPR"),Z=Y("Trident")||Y("MSIE"),$a=Y("Gecko")&&-1==X.toLowerCase().indexOf("webkit")&&!(Y("Trident")||Y("MSIE")),ab=-1!=X.toLowerCase().indexOf("webkit");function bb(){var a=k.document;return a?a.documentMode:void 0}
var cb=function(){var a="",b;if(Za&&k.opera)return a=k.opera.version,"function"==aa(a)?a():a;$a?b=/rv\:([^\);]+)(\)|;)/:Z?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ab&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(X))?a[1]:"");return Z&&(b=bb(),b>parseFloat(a))?String(b):a}(),db={};
function eb(a){if(!db[a]){for(var b=0,c=String(cb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),q=RegExp("(\\d*)(\\D*)","g");do{var v=l.exec(g)||["","",""],G=q.exec(h)||["","",""];if(0==v[0].length&&0==G[0].length)break;b=p(0==v[1].length?0:parseInt(v[1],10),0==G[1].length?0:parseInt(G[1],10))||p(0==v[2].length,0==G[2].length)||p(v[2],
G[2])}while(0==b)}db[a]=0<=b}}var fb=k.document,gb=fb&&Z?bb()||("CSS1Compat"==fb.compatMode?parseInt(cb,10):5):void 0;var hb;if(!(hb=!$a&&!Z)){var ib;if(ib=Z)ib=Z&&9<=gb;hb=ib}hb||$a&&eb("1.9.1");Z&&eb("9");/*

 Copyright (C) Alan Beebe (alan.beebe@gmail.com).

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PhoneNumberUtil=I;PhoneNumberUtil.prototype.parse=I.prototype.parse;PhoneNumberUtil.prototype.parseAndKeepRawInput=I.prototype.$;PhoneNumberUtil.prototype.getRegionCodeForNumber=I.prototype.ea;window.countryForE164Number=function(a){try{a=$(a);var b=I.u(),c=b.$(a,null),d=new n,d=b.ea(c);return d.toString()}catch(f){return""}};
window.isValidNumber=function(a,b){try{a=$(a);var c=I.u(),d=c.$(a,b),f;var e=c.ea(d),g=d.k(),h=P(c,g,e);if(null==h||"001"!=e&&g!=Ba(c,e))f=!1;else{var l=u(h,1),q=O(d);if(null!=l.d[2])f=-1!=S(q,h);else{var v=q.length;f=2<v&&17>=v}}return f}catch(G){return!1}};window.getTypeForNumber=function(a,b){a=$(a);var c=I.u(),d;d=c.$(a,b);var f=c.ea(d),c=P(c,d.k(),f);null==c?d=-1:(d=O(d),d=S(d,c));return d};window.formatE164=function(a,b){try{b=$(b);var c=I.u(),d=c.$(b,a),f=new n,f=c.format(d,0);return f.toString()}catch(e){return b}};
window.formatInternational=function(a,b){try{b=$(b);for(var c=new Ha(a),d=new n,f=0;f<b.length;++f){var e=c;e.ia=Pa(e,b.charAt(f));d=e.ia}return d.toString()}catch(g){return b}};function $(a){a=a.replace(/[^\d\+]/g,"");return a="+"==a.substr(0,1)?"+"+a.replace(/[^\d]/g,""):a.replace(/[^\d]/g,"")}window.cleanPhone=$;window.countryCodeToName=function(a){var b=[];b.AT="Austria";b.DE="Germany";b.CH="Switzerland";a=b[a.toUpperCase()];return void 0===a?"":a};})();
