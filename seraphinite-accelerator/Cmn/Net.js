function _typeof(f){_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return _typeof(f)}window.seraph_accel||(window.seraph_accel={});
(function(){function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!1,c="",d=a.indexOf("?");-1!=d&&(c=a.substr(d+1),a=a.substr(0,d));d={};if(!b)for(b=c.length?c.split("&"):[],c=0;c<b.length;c++){var e=b[c].split("="),g=null;1<e.length&&(g=e[1]);d[e[0]]=decodeURIComponent(g)}return{url:a,args:d}}seraph_accel.Net={GetQueryArgs:f,UpdateQueryArgs:function(a,b){var c=f(a,null==b);a=c.url;if(null==b)return a;for(var d in b){var e=b[d];void 0===e?delete c.args[d]:c.args[d]=null===e?void 0:
b[d]}b="";for(d in c.args)if(e=c.args[d],b&&(b+="&"),b+=d,e){switch(_typeof(e)){case "object":e=btoa(JSON.stringify(e));break;case "boolean":e=1}b+="="+encodeURIComponent(e)}b&&(a+="?"+b);return a},GetUrlPath:function(a){var b=a.indexOf("://");b=a.indexOf("/",-1==b?0:b+3);if(-1==b)return"";a=a.substr(b);b=a.indexOf("?");-1!==b&&(a=a.substr(0,b));1==a.length&&(a="");return a},GetUrlSite:function(a){var b=a.indexOf("://");-1!=b&&(a=a.substr(b+3));b=a.indexOf("/",b);-1!=b&&(a=a.substr(0,b));b=a.indexOf("?");
-1!==b&&(a=a.substr(0,b));b=a.indexOf("@");-1!==b&&(a=a.substr(b+1));b=a.indexOf(":");-1!==b&&(a=a.substr(0,b));return a},GetStrSlug:function(a){a=a.toLowerCase();return a=seraph_accel.Gen.StrReplaceAll(a," ","-")},CreateXmlHttp:function(){if("function"===typeof XMLHttpRequest)return new XMLHttpRequest;try{var a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){a=null}}return a}}})();
