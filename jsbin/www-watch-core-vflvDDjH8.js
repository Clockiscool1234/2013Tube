var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var d=void 0,k=!0,l=null,p=!1,s,t=this;function u(a){a=a.split(".");for(var b=t,c;c=a.shift();)if(b[c]!=l)b=b[c];else return l;return b}function v(a){return a!==d}function w(a){return"string"==typeof a}var x="closure_uid_"+(1E9*Math.random()>>>0),aa=0,y=Date.now||function(){return+new Date};function A(a,b){var c=a.split("."),e=t;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&v(b)?e[f]=b:e=e[f]?e[f]:e[f]={}};var B={ia:p,ca:{"url-identifier":"?spf=1","link-class":"spf-link","nolink-class":l,"request-timeout":2E3,"cache-lifetime":6E5,"navigate-started-callback":l,"navigate-history-callback":l,"navigate-received-callback":l,"navigate-processed-callback":l,"load-received-callback":l,"load-processed-callback":l,"transition-class":"spf-transition","transition-duration":425,"transition-forward-parent-class":"spf-transition-forward","transition-reverse-parent-class":"spf-transition-reverse","transition-current-child-class":"spf-current",
"transition-forward-child-class":"spf-forward","transition-reverse-child-class":"spf-reverse"},config:{},now:function(){return+new Date},getKey:function(a){return a["spf-key"]||(a["spf-key"]=B.now()+"-"+ ++B.Ma)},Ma:0};B.debug={};B.debug.debug=function(a){B.debug.log("debug",arguments)};B.debug.info=function(a){B.debug.log("info",arguments)};B.debug.warn=function(a){B.debug.log("warn",arguments)};B.debug.error=function(a){B.debug.log("error",arguments)};
B.debug.log=function(a,b){if(B.ia&&window.console&&!(B.debug.ja[a]<B.debug.ja[B.debug.Ja])){b=Array.prototype.slice.call(b,0);var c=B.now(),e=(c-B.debug.La)/1E3;if(e.toFixed)for(e=e.toFixed(3);8>e.length;)e=" "+e;else e=""+e;b.unshift(e+"s: ");if(B.debug.Ka){b.unshift("[spf]");c="spf_debug_"+c;window[c]=b;for(var e="window.console."+a+"(",f=0,g=b.length;f<g;f++)e+=0<f?",":"",e+=c+"["+f+"]";eval("("+(e+")")+")")}else b.unshift("[spf."+a+"]"),window.console.log(b.join(" "))}};B.debug.La=B.now();
B.debug.Ka=!(!window.console||eval("/*@cc_on!@*/false"));B.debug.ja={debug:1,info:2,warn:3,error:4};B.debug.Ja="info";B.history={};function C(a){this.L=a;this.e=0;this.k=window.location.href;var b=this;this.I=function(){b.Ha.apply(b,arguments)}}C.prototype.Ha=function(a){var b=window.location.href;B.debug.info("history.pop ","url=",b,"evt=",a);if(a.state)if(a=a.state,b==this.k)this.e=a["spf-timestamp"],window.history.replaceState(a,"",b),B.debug.debug("    replaceState:  ","url=",b,"state=",a);else{var c=a["spf-timestamp"];a["spf-back"]=!!(c<this.e);this.e=c;this.k=b;this.L(b,a)}};
C.prototype.add=function(a,b,c){B.debug.info("history.add ",a);ba(this,p,a,b,c)};C.prototype.replace=function(a,b,c){B.debug.info("history.replace ",a);ba(this,k,a,b,c)};function ba(a,b,c,e,f){if(c||e)c=c||window.location.href,e=e||{},a.e=B.now(),e["spf-timestamp"]=a.e,b?(window.history.replaceState(e,"",c),B.debug.debug("    replaceState:  ","url=",c,"state=",e)):(window.history.pushState(e,"",c),B.debug.debug("    pushState:  ","url=",c,"state=",e)),a.k=c,f||a.L(c,e)};B.history.init=function(a){B.history.q||(B.history.B||(B.history.B=new C(a)),a=B.history.B,a.k=window.location.href,a.replace(a.k,l,k),window.addEventListener("popstate",a.I,p),B.history.q=k)};B.history.w=function(){B.history.q&&(window.removeEventListener("popstate",B.history.B.I,p),B.history.q=p)};B.history.add=function(a,b,c){B.history.B.add(a,b,c)};B.history.q=p;B.h={};B.h.get=function(a){if(B.h.p&&a in B.h.p){var b=B.h.p[a];if(b&&b.data){var c=B.now()-b.k;if(isNaN(b.e)||c<b.e)return b.data}B.h.remove(a)}};B.h.set=function(a,b,c){B.h.p||(B.h.p={});c=parseInt(c,10);0>=c||(B.h.p[a]=new ca(b,c),setTimeout(B.h.Ia,1E3))};B.h.remove=function(a){B.h.p&&a in B.h.p&&delete B.h.p[a]};B.h.clear=function(){delete B.h.p};B.h.Ia=function(){if(B.h.p)for(var a in B.h.p){var b=B.h.p[a];if(!b||!b.data)delete B.h.p[a];else{var c=B.now()-b.k;!isNaN(b.e)&&c>=b.e&&delete B.h.p[a]}}};
function ca(a,b){this.data=a;this.e=b;this.k=B.now()};B.d={};B.d.o={};B.d.o.get=function(a){return a.className&&a.className.match(/\S+/g)||[]};B.d.o.has=Array.prototype.indexOf?function(a,b){var c=B.d.o.get(a);return-1!=Array.prototype.indexOf.call(c,b)}:function(a,b){for(var c=B.d.o.get(a),e=0,f=c.length;e<f;e++)if(c[e]==b)return k;return p};B.d.o.add=function(a,b){B.d.o.has(a,b)||(a.className+=" "+b)};
B.d.o.remove=Array.prototype.filter?function(a,b){var c=B.d.o.get(a),c=Array.prototype.filter.call(c,function(a){return a!=b});a.className=c.join(" ")}:function(a,b){for(var c=B.d.o.get(a),e=[],f=0,g=c.length;f<g;f++)c[f]!=b&&e.push(c[f]);a.className=e.join(" ")};B.d.pa=function(a,b){b.parentNode.insertBefore(a,b)};B.d.oa=function(a,b){b.parentNode.insertBefore(a,b.nextSibling)};B.d.ma=function(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(p);else{for(;b=a.firstChild;)c.insertBefore(b,a);c.removeChild(a)}};B.d.na=function(a,b){if(b){for(var c;c=a.firstChild;)b.appendChild(c);a.appendChild(b)}};B.d.da=function(a,b){for(;a;){if(b(a))return a;a=a.parentNode}return l};
B.d.ta=function(a,b){for(var c in b){var e=b[c];"class"==c?a.className=e:"style"==c?a.style.cssText=e:a.setAttribute(c,e)}};B.d.url={};B.d.url.absolute=function(a){var b=document.createElement("a");b.href=a;return b.href};B.d.dataset={};B.d.dataset.get=function(a,b){return a.dataset?a.dataset[b]:a.getAttribute("data-"+B.j.ha(b))};B.d.dataset.set=function(a,b,c){a.dataset?a.dataset[b]=c:a.setAttribute("data-"+B.j.ha(b),c)};B.g={};B.g.N=function(a,b,c){a in B.g.i||(B.g.i[a]=[]);B.g.i[a].push([b,c])};B.g.Oa=function(a,b,c){if(a in B.g.i){a=B.g.i[a];for(var e=0,f=a.length;e<f;e++)if(a[e]&&a[e][0]==b&&a[e][1]==c){a[e]=l;break}}};B.g.t=function(a,b){if(a in B.g.i)for(var c=B.g.i[a],e=Array.prototype.slice.call(arguments,1),f=0,g=c.length;f<g;f++)c[f]&&c[f][0].apply(c[f][1],e)};B.g.clear=function(a){a?a in B.g.i&&delete B.g.i[a]:B.g.i={}};B.g.i={};B.j={};B.j.contains=function(a,b){return-1!=a.indexOf(b)};B.j.wa=function(a){return 0==a.lastIndexOf("?",0)};B.j.xa=function(a){var b=a.length-9;return 0<=b&&a.indexOf("-callback",b)==b};B.j.O=function(a){for(var b=0,c=0,e=a.length;c<e;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};B.j.ha=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};B.a={};B.a.scripts={};B.a.scripts.eval=function(a,b){if(window.execScript)window.execScript(a,"JavaScript");else{var c=document.createElement("script");c.appendChild(document.createTextNode(a));var e=document.getElementsByTagName("head")[0]||document.body;e.insertBefore(c,e.firstChild)}b&&b()};
B.a.scripts.load=function(a,b){var c=B.a.scripts.G+B.j.O(a),e=document.getElementById(c),f=e&&B.d.dataset.get(e,"loaded"),g=e&&!f;if(f)return b&&b(),e;b&&B.g.N(c,b);if(g)return e;var m=B.a.scripts.P(a,c,function(){B.d.dataset.get(m,"loaded")||(B.d.dataset.set(m,"loaded","true"),B.g.t(c),B.g.clear(c))});return m};
B.a.scripts.P=function(a,b,c){var e=document.createElement("script");e.id=b;e.onload=function(){setTimeout(c,0)};e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};e.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};B.a.scripts.Na=function(a){a=B.a.scripts.G+B.j.O(a);var b=document.getElementById(a);b&&(B.g.clear(a),b.parentNode.removeChild(b))};
B.a.scripts.A=function(a){if(B.a.scripts.Ga)document.createElement("script").src=a;else{var b=document.createElement("object");b.data=a;b.width=0;b.height=0;document.body.appendChild(b)}};B.a.scripts.execute=function(a,b){if(a){var c=B.a.scripts.J(a),e=function(){if(0<c.length){var a=c.shift(),g=a[0];a[1]?B.a.scripts.load(g,e):B.a.scripts.eval(g,e)}else b&&b()};e()}else b&&b()};B.a.scripts.ea=function(a){if(a){a=B.a.scripts.J(a);for(var b=0;b<a.length;b++){var c=a[b],e=c[0];c[1]&&B.a.scripts.A(e)}}};
B.a.scripts.J=function(a){var b=[];a.replace(B.a.scripts.Ea,function(a,e,f){(a=e.match(B.a.scripts.Fa))?b.push([a[1],k]):b.push([f,p]);return""});return b};B.a.scripts.G="js-";B.a.scripts.Ga=B.j.contains(navigator.appName,"Microsoft");B.a.scripts.Ea=/\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig;B.a.scripts.Fa=/src="([\S]+)"/;B.a.styles={};B.a.styles.eval=function(a){var b=document.createElement("style");(document.getElementsByTagName("head")[0]||document.body).appendChild(b);"styleSheet"in b?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))};B.a.styles.load=function(a){var b=B.a.styles.G+B.j.O(a),c=document.getElementById(b);return c?c:c=B.a.styles.P(a,b)};
B.a.styles.P=function(a,b,c){var e=document.createElement("link");e.id=b;e.rel="stylesheet";e.href=a;a=c||document;(a.getElementsByTagName("head")[0]||a.body).appendChild(e);return e};B.a.styles.Na=function(a){(a=document.getElementById(B.a.styles.G+B.j.O(a)))&&a.parentNode.removeChild(a)};
B.a.styles.A=function(a){var b=B.a.styles.G+"preload",c=document.getElementById(b);c||(c=document.createElement("iframe"),c.id=b,c.src='javascript:""',c.style.display="none",document.body.appendChild(c));setTimeout(function(){B.a.styles.P(a,"",c.contentWindow.document)},0)};B.a.styles.qa=function(a){if(a){a=B.a.styles.J(a);for(var b=0;b<a.length;b++){var c=a[b],e=c[0];c[1]?B.a.styles.load(e):B.a.styles.eval(e)}}};
B.a.styles.Da=function(a){if(a){a=B.a.styles.J(a);for(var b=0;b<a.length;b++){var c=a[b],e=c[0];c[1]&&B.a.styles.A(e)}}};B.a.styles.J=function(a){var b=[];a.replace(B.a.styles.Aa,function(a,e){if(B.j.contains(e,'rel="stylesheet"')){var f=e.match(B.a.styles.za);f&&b.push([f[1],k])}});a.replace(B.a.styles.Ba,function(a,e,f){f&&b.push([f,p])});return b};B.a.styles.G="css-";B.a.styles.Aa=/\x3clink([\s\S]*?)\x3e/ig;B.a.styles.Ba=/\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig;B.a.styles.za=/href="([\S]+)"/;B.a.u={};B.a.u.get=function(a,b){return B.a.u.send("GET",a,l,b)};B.a.u.Pa=function(a,b,c){return B.a.u.send("POST",a,b,c)};
B.a.u.send=function(a,b,c,e){c=e||{};var f=c.ua||function(){},g=c.onError||function(){},m=c.va||function(){},h,n=B.a.u.create();n.open(a,b,k);n.timing={};var r=n.abort;n.abort=function(){clearTimeout(h);n.onreadystatechange=l;r.call(n)};n.onreadystatechange=function(){var a=n.timing;if(2==n.readyState)a.responseStart=a.responseStart||B.now();else if(4==n.readyState)switch(a.responseEnd=a.responseEnd||B.now(),clearTimeout(h),n.status){case 200:case 204:case 304:f(n);break;default:g(n)}};0<c.ba&&(h=
setTimeout(function(){n.abort();m(n)},c.ba));n.timing.fetchStart=B.now();n.send(l);return n};var da;da="XMLHttpRequest"in window?function(){return new XMLHttpRequest}:"ActiveXObject"in window?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:d;B.a.u.create=da;B.b={};B.b.init=function(){B.b.q||(document.addEventListener("click",B.b.fa,p),B.b.q=k)};B.b.w=function(){B.b.q&&(document.removeEventListener("click",B.b.fa,p),B.b.q=p)};
B.b.fa=function(a){B.debug.debug("nav.handleClick ","evt=",a);if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)B.debug.debug("    ignoring click with modifier key");else if(0<a.button)B.debug.debug("    ignoring click with alternate button");else{var b=B.d.da(a.target,function(a){return B.d.o.has(a,B.config["link-class"])});if(b&&(!B.config["nolink-class"]||!B.d.da(a.target,function(a){return B.d.o.has(a,B.config["nolink-class"])})))if(b=b.href,!b||b==window.location.href)a.preventDefault();else{B.g.t("navigate-started-callback",
b);try{B.history.add(b),a.preventDefault()}catch(c){B.debug.error(">> error caught, ignoring click ","err=",c)}}}};B.b.ya=function(a,b){var c=!(!b||!b["spf-back"]);B.debug.debug("nav.handleHistory ","url=",a,"state=",b);B.g.t("navigate-history-callback",a);B.b.Ca(a,c)};B.b.navigate=function(a){if(a&&a!=window.location.href){B.g.t("navigate-started-callback",a);try{B.history.add(a)}catch(b){B.debug.error(">> error caught, redirecting ","url=",a,"err=",b),window.location.href=a}}};
B.b.Ca=function(a,b){B.debug.info("nav.navigate ",a,b);if(B.b.q){B.b.H&&(B.debug.warn("aborting previous navigate ","xhr=",B.b.H),B.b.H.abort(),B.b.H=l);var c=B.b.V(a,function(a,c){B.b.H=l;B.b.K(c,b,"navigate-processed-callback")},function(a){B.debug.warn("navigate failed, redirecting ","url=",a);B.b.H=l;window.location.href=a},"navigate-received-callback");B.b.H=c}else B.debug.error(">> nav not initialized")};
B.b.load=function(a,b,c){B.debug.info("nav.load ",a);return B.b.V(a,function(a,c){B.b.K(c,p,"load-processed-callback");b&&b(a,c)},function(a){B.debug.warn("load failed ","url=",a);c&&c(a)},"load-received-callback")};
B.b.V=function(a,b,c,e){function f(c){B.debug.debug("    XHR success","xhr=",c);r.navigationStart=n;if(c.timing)for(var f in c.timing)r[f]=c.timing[f];try{var h="JSON"in window?JSON.parse(c.responseText):eval("("+c.responseText+")")}catch(ga){B.debug.debug("    JSON parse failed");g(c);return}B.h.set(m,h,B.config["cache-lifetime"]);h.timing=r;e&&B.g.t(e,a,h);b&&b(a,h)}function g(b){B.debug.debug("    XHR error","xhr=",b);c&&c(a)}B.debug.debug("nav.request ",a);var m=B.d.url.absolute(a);B.debug.debug("    converted to absolute url ",
m);var h=B.config["url-identifier"]||"";h&&!B.j.contains(m,h)&&B.j.wa(h)&&(m=B.j.contains(m,"?")?m+h.replace("?","&"):m+h);var n=B.now(),r={};r.fetchStart=B.now();if(h=B.h.get(m))r.responseStart=r.responseEnd=B.now(),r.navigationStart=n,h.timing=r,B.debug.debug("    cached response found ",h),e&&B.g.t(e,a,h),b&&b(a,h);else return B.debug.debug("    sending XHR"),r={},B.a.u.get(m,{ba:B.config["request-timeout"],ua:f,onError:g,va:g})};
B.b.K=function(a,b,c){function e(){0==h&&(B.a.scripts.execute(a.js,function(){B.debug.debug("    executed scripts");c&&B.g.t(c,a)}),h--)}B.debug.info("nav.process ",a,b);B.a.styles.qa(a.css);B.debug.debug("    installed styles");a.title&&(document.title=a.title);var f=a.attr||{},g;for(g in f){var m=document.getElementById(g);m&&(B.d.ta(m,f[g]),B.debug.debug("    set attributes ",g))}var h=0,f=a.html||{};if(Object.keys)h=Object.keys(f).length;else for(g in f)h++;for(g in f)if(m=document.getElementById(g)){var n=
f[g],r=B.getKey(m);if(!B.b.ka||!B.d.o.has(m,B.config["transition-class"]))m.innerHTML=n,B.debug.debug("    updated fragment content ",g),B.a.scripts.execute(n,function(){B.debug.debug("    executed fragment scripts ",g);h--;e()});else{B.b.M(r,k);var q=[],m={reverse:!!b,$:n,C:l,F:l,D:m,la:B.config["transition-current-child-class"],ra:b?B.config["transition-reverse-child-class"]:B.config["transition-forward-child-class"],aa:b?B.config["transition-reverse-parent-class"]:B.config["transition-forward-parent-class"]};
q.push([function(a,b){a.C=document.createElement("div");a.C.className=a.la;B.d.na(a.D,a.C);a.F=document.createElement("div");a.F.className=a.ra;a.F.innerHTML=a.$;a.reverse?B.d.pa(a.F,a.C):B.d.oa(a.F,a.C);b()},0]);q.push([function(a,b){B.d.o.add(a.D,a.aa);b()},0]);q.push([function(a,b){B.debug.debug("    updated fragment content ",a.D.id);a.D.removeChild(a.C);B.d.o.remove(a.D,a.aa);B.d.ma(a.F);b()},B.config["transition-duration"]]);q.push([function(a,b){B.a.scripts.execute(a.$,function(){B.debug.debug("    executed fragment scripts ",
a.D.id);h--;e();b()})},0]);B.b.Z[r]={Y:0,X:q,data:m};B.b.M(r)}}else h--;e()};B.b.M=function(a,b){var c=B.b.Z;if(a in c)if(0<c[a].X.length){var e=c[a].X.shift();if(b)e[0](c[a].data,function(){B.b.M(a,b)});else c[a].Y=setTimeout(function(){e[0](c[a].data,function(){B.b.M(a,b)})},e[1])}else clearTimeout(c[a].Y),delete c[a]};B.b.A=function(a,b,c){B.debug.info("nav.preload ",a);return B.b.V(a,function(a,c){B.b.S(c);b&&b(a,c)},function(a){B.debug.warn("preload failed ","url=",a);c&&c(a)})};
B.b.S=function(a){B.debug.info("nav.preprocess ",a);B.a.styles.Da(a.css);B.debug.debug("    preinstalled styles");var b=a.html||{},c;for(c in b)B.a.scripts.ea(b[c]),B.debug.debug("    preexecuted fragment scripts ",c);B.a.scripts.ea(a.js);B.debug.debug("    preexecuted scripts")};B.b.q=p;B.b.Z={};var ea=B.b,fa;a:{for(var ha=document.createElement("div"),ia=["Webkit","Moz","Ms","O","Khtml"],ja=0,ka=ia.length;ja<ka;ja++)if(ia[ja]+"Transition"in ha.style){fa=k;break a}fa=p}ea.ka=fa;B.U={};B.U.init=function(a){var b=!!window.history.pushState;B.debug.info("main.init ","enable=",b);a=a||{};for(var c in B.ca){var e=c in a?a[c]:B.ca[c];B.config[c]=e;b&&(e&&B.j.xa(c))&&B.g.N(c,e)}B.debug.debug("    config",B.config);b&&(B.history.init(B.b.ya),B.b.init());return b};B.U.w=function(){B.b.w();B.history.w();B.g.clear();B.h.clear();B.config={}};B.init=B.U.init;B.w=B.U.w;B.navigate=B.b.navigate;B.load=B.b.load;B.K=B.b.K;B.A=B.b.A;B.S=B.b.S;
window.spf=B.ia?B:{init:B.init,dispose:B.w,navigate:B.navigate,load:B.load,process:B.K,preload:B.A,preprocess:B.S};function la(a){B.a.scripts.load(D("WATCH_EXTRA_JS"),a)};var E=Array.prototype,ma=E.indexOf?function(a,b,c){return E.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(w(a))return!w(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=E.forEach?function(a,b,c){E.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=w(a)?a.split(""):a,g=0;g<e;g++)g in f&&b.call(c,f[g],g,a)},na=E.filter?function(a,b,c){return E.filter.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=[],g=0,m=w(a)?a.split(""):
a,h=0;h<e;h++)if(h in m){var n=m[h];b.call(c,n,h,a)&&(f[g++]=n)}return f};function oa(a,b){var c;a:{c=a.length;for(var e=w(a)?a.split(""):a,f=0;f<c;f++)if(f in e&&b.call(d,e[f],f,a)){c=f;break a}c=-1}return 0>c?l:w(a)?a.charAt(c):a[c]}function pa(a,b,c){return 2>=arguments.length?E.slice.call(a,b):E.slice.call(a,b,c)};function G(){}G.prototype.L=p;G.prototype.w=function(){this.L||(this.L=k,this.W())};G.prototype.W=function(){if(this.I)for(;this.I.length;)this.I.shift()()};function H(){this.i=[];this.e={}}(function(){function a(){}a.prototype=G.prototype;H.e=G.prototype;H.prototype=new a})();s=H.prototype;s.ga=1;s.R=0;s.N=function(a,b,c){var e=this.e[a];e||(e=this.e[a]=[]);var f=this.ga;this.i[f]=a;this.i[f+1]=b;this.i[f+2]=c;this.ga=f+3;e.push(f);return f};s.Oa=function(a,b,c){if(a=this.e[a]){var e=this.i;if(a=oa(a,function(a){return e[a+1]==b&&e[a+2]==c}))return this.Q(a)}return p};
s.Q=function(a){if(0!=this.R)return this.k||(this.k=[]),this.k.push(a),p;var b=this.i[a];if(b){var c=this.e[b];if(c){var e=ma(c,a);0<=e&&E.splice.call(c,e,1)}delete this.i[a];delete this.i[a+1];delete this.i[a+2]}return!!b};s.t=function(a,b){var c=this.e[a];if(c){this.R++;for(var e=pa(arguments,1),f=0,g=c.length;f<g;f++){var m=c[f];this.i[m+1].apply(this.i[m+2],e)}this.R--;if(this.k&&0==this.R)for(;c=this.k.pop();)this.Q(c);return 0!=f}return p};
s.clear=function(a){if(a){var b=this.e[a];b&&(F(b,this.Q,this),delete this.e[a])}else this.i.length=0,this.e={}};s.W=function(){H.e.W.call(this);delete this.i;delete this.e;delete this.k};var J=window.yt&&window.yt.config_||{};A("yt.config_",J);var qa=window.yt&&window.yt.tokens_||{};A("yt.tokens_",qa);A("yt.globals_",window.yt&&window.yt.globals_||{});var ra=window.yt&&window.yt.msgs_||{};A("yt.msgs_",ra);var sa=window.yt&&window.yt.timeouts_||[];A("yt.timeouts_",sa);A("yt.intervals_",window.yt&&window.yt.intervals_||[]);function D(a,b){return a in J?J[a]:b}function K(a,b){var c=window.setTimeout(a,b);sa.push(c);return c}
function ta(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var e=b[0];for(c in e)a[c]=e[c]}};var ua=u("yt.pubsub.instance_")||new H;H.prototype.subscribe=H.prototype.N;H.prototype.unsubscribeByKey=H.prototype.Q;H.prototype.publish=H.prototype.t;H.prototype.clear=H.prototype.clear;A("yt.pubsub.instance_",ua);function L(a,b){var c=u("yt.pubsub.instance_");return c?c.subscribe(a,function(){var a=arguments;K(function(){b.apply(t,a)},0)},d):0}
function va(){var a=wa,b=u("yt.pubsub.instance_");b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a)}))}function M(a,b){var c=u("yt.pubsub.instance_");c&&c.publish.apply(c,arguments)};var xa={},ya=0;function za(a){if(a){var b=new Image,c=""+ya++;xa[c]=b;b.onload=b.onerror=function(){delete xa[c]};b.src=a;b=eval("null")}};function Aa(a){return a.responseStart-a.navigationStart}
function Ba(){var a=N(),b=Ca().info,c=D("TIMING_INFO")||{},e={v:2,s:"youtube",action:D("TIMING_ACTION")},f=a.start;delete a.start;var g=b.srt;delete b.srt;if(!g&&0!==g)try{g=Aa((window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance).timing)}catch(m){b.pt&&(g=b.pt)}if(g||0===g)b.srt=g;a.vr&&a.gv&&(a.vl=Math.round(a.vr-a.gv+f));a.aft||(a.aft=a.vr&&a.cl&&a.cl>a.vr?a.cl:a.vr?a.vr:a.ol);a.aft&&a.plev&&(a.aft=Math.min(a.aft,a.plev));for(var h in b)e[h]=b[h];for(var n in c)e[n]=
c[n];var g={},r=[],q;for(q in a){var z=Math.max(Math.round(a[q]-f),0);g[q]=z;r.push(q+"."+z)}e.rt=r.join(",");var a="https:"==window.location.protocol?"https://web.archive.org/web/20130322200855/https://gg.google.com/csi":"https://web.archive.org/web/20130322200855/http://csi.gstatic.com/csi",f="",I;for(I in e)f+="&"+I+"="+e[I];za(a+"?"+f.substring(1));if(e=document.getElementById("debug-csi-data")){var ga=[];I=function(a,b){ga.push("<tr><td>"+a+"</td><td>"+b+"</td></tr>")};for(h in b)I(h,b[h]);for(n in c)I(n,c[n]);for(q in g)I(q,g[q]);e.innerHTML="<table>"+ga.join("")+"</table>"}}
function Da(){var a=D("TIMING_ACTION"),b=D("TIMING_WFF"),c=N();a&&c.start&&(b&&c.vr?Ba():!b&&(c.ol||c.aft)&&Ba())}function N(){return Ca().tick}function Ca(){return u("ytcsi.data_")||Ea(d)}function Ea(a){var b={tick:{},info:{}};A("ytcsi."+(a||"")+"data_",b);return b};function Fa(){this.e=y()}new Fa;Fa.prototype.set=function(a){this.e=a};Fa.prototype.get=function(){return this.e};function Ga(a){var b=Ha,c;for(c in b)if(a.call(d,b[c],c,b))return c};var O,Ia,Ja,Ka;function La(){return t.navigator?t.navigator.userAgent:l}Ka=Ja=Ia=O=p;var Ma;if(Ma=La()){var Na=t.navigator;O=0==Ma.indexOf("Opera");Ia=!O&&-1!=Ma.indexOf("MSIE");Ja=!O&&-1!=Ma.indexOf("WebKit");Ka=!O&&!Ja&&"Gecko"==Na.product}var P=Ia,Oa=Ka,Pa=Ja;function Qa(){var a=t.document;return a?a.documentMode:d}var Ra;
a:{var Sa="",Q;if(O&&t.opera)var Ta=t.opera.version,Sa="function"==typeof Ta?Ta():Ta;else if(Oa?Q=/rv\:([^\);]+)(\)|;)/:P?Q=/MSIE\s+([^\);]+)(\)|;)/:Pa&&(Q=/WebKit\/(\S+)/),Q)var Ua=Q.exec(La()),Sa=Ua?Ua[1]:"";if(P){var Va=Qa();if(Va>parseFloat(Sa)){Ra=String(Va);break a}}Ra=Sa}var Wa=Ra,Xa={};
function Ya(a){var b;if(!(b=Xa[a])){b=0;for(var c=String(Wa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,e.length),g=0;0==b&&g<f;g++){var m=c[g]||"",h=e[g]||"",n=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");do{var q=n.exec(m)||["","",""],z=r.exec(h)||["","",""];if(0==q[0].length&&0==z[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==z[1].length?0:parseInt(z[1],10))?-1:(0==q[1].length?0:parseInt(q[1],
10))>(0==z[1].length?0:parseInt(z[1],10))?1:0)||((0==q[2].length)<(0==z[2].length)?-1:(0==q[2].length)>(0==z[2].length)?1:0)||(q[2]<z[2]?-1:q[2]>z[2]?1:0)}while(0==b)}b=Xa[a]=0<=b}return b}var Za=t.document,$a=!Za||!P?d:Qa()||("CSS1Compat"==Za.compatMode?parseInt(Wa,10):5);function ab(){N().ol=y();M("init");var a=D("PAGE_NAME");a&&M("init-"+a);Da()}function bb(a){(a=a||D("PAGE_NAME"))&&M("dispose-"+a);M("dispose");cb=p}var cb=p;function db(){}function eb(){Ea();document.getElementById("content").className+=" loading ";var a=document.getElementById("progress");a||(a=document.createElement("div"),a.id="progress",a.innerHTML="<dt><dd>",document.body.appendChild(a));fb(60,900);M("navigate")}
function gb(a,b){N().start=y();var c=Aa(b.timing);Ca().info.srt=c;fb(90,500);window.scroll(0,0);c=document.getElementById("content");c.style.height=c.clientHeight+"px";hb();var c=D("PAGE_NAME"),e;for(e in J)delete J[e];(e=u("yt.www.watch.player.dispose"))&&e();"swfcfg"in b&&(A("ytplayer.config",b.swfcfg),(e=u("yt.www.watch.player.init"))&&e());bb(c)}function ib(){fb(101,25);document.getElementById("content").style.height="";ab()}function jb(){hb(k);kb()}function lb(){}
function kb(){var a=document.getElementById("progress");if(a){var b=function(){a.parentNode.removeChild(a)};K(function(){a.className="done";var c=a.style;c.transitionDuration=c.MozTransitionDuration=c.e=c.k=c.webkitTransitionDuration="";K(b,450)},500)}}
function fb(a,b){var c=b||500,e=document.getElementById("progress");if(e){e.className="";var f=e.style;f.transitionDuration=f.MozTransitionDuration=f.e=f.k=f.webkitTransitionDuration=c+"ms";K(function(){f.width=a+"%";K(function(){e.className="waiting"},c)},0)}}function hb(a){function b(){c.className=c.className.replace(" loading ","")}var c=document.getElementById("content");a?b():K(b,50)};function R(a,b){this.x=v(a)?a:0;this.y=v(b)?b:0}R.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};R.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};R.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};R.prototype.scale=function(a,b){this.x*=a;this.y*="number"==typeof b?b:a;return this};function S(a,b){this.width=a;this.height=b}S.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};S.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};S.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};S.prototype.scale=function(a,b){this.width*=a;this.height*="number"==typeof b?b:a;return this};if(Oa||P){var mb;if(mb=P)mb=P&&9<=$a;mb||Oa&&Ya("1.9.1")}P&&Ya("9");function nb(){var a=document;return a.querySelectorAll&&a.querySelector?a.querySelectorAll("IMG"):a.getElementsByTagName("IMG")}function ob(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new S(a.clientWidth,a.clientHeight)}
function pb(){var a=document,b=!Pa&&"CSS1Compat"==a.compatMode?a.documentElement:a.body,a=a.parentWindow||a.defaultView;return P&&Ya("10")&&a.pageYOffset!=b.scrollTop?new R(b.scrollLeft,b.scrollTop):new R(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}function qb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return l};function T(a){this.e=a}var rb=/\s*;\s*/;T.prototype.set=function(a,b,c,e,f,g){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');v(c)||(c=-1);f=f?";domain="+f:"";e=e?";path="+e:"";g=g?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.e.cookie=a+"="+b+f+e+c+g};
T.prototype.get=function(a,b){for(var c=a+"=",e=(this.e.cookie||"").split(rb),f=0,g;g=e[f];f++){if(0==g.lastIndexOf(c,0))return g.substr(c.length);if(g==a)return""}return b};T.prototype.remove=function(a,b,c){var e=v(this.get(a));this.set(a,"",0,b,c);return e};T.prototype.clear=function(){for(var a=(this.e.cookie||"").split(rb),b=[],c=[],e,f,g=0;f=a[g];g++)e=f.indexOf("="),-1==e?(b.push(""),c.push(f)):(b.push(f.substring(0,e)),c.push(f.substring(e+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var sb=new T(document);sb.k=3950;function U(){var a;if(a=sb.get("PREF",d)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),e=c[0];(c=c[1])&&(V[e]=c.toString())}}}U.getInstance=function(){return U.B?U.B:U.B=new U};var V=u("yt.prefs.UserPrefs.prefs_")||{};A("yt.prefs.UserPrefs.prefs_",V);function tb(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}function ub(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function vb(a){a=V[a]!==d?V[a].toString():l;return a!=l&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):l}U.prototype.get=function(a,b){ub(a);tb(a);var c=V[a]!==d?V[a].toString():l;return c!=l?c:b?b:""};U.prototype.set=function(a,b){ub(a);tb(a);if(b==l)throw"ExpectedNotNull";V[a]=b.toString()};U.prototype.remove=function(a){ub(a);tb(a);delete V[a]};U.prototype.clear=function(){V={}};function wb(a,b){return a.dataset?a.dataset[xb(b)]:a.getAttribute("data-"+b)}var yb={};function xb(a){return yb[a]||(yb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var zb=u("yt.dom.getNextId_");if(!zb){zb=function(){return++Ab};A("yt.dom.getNextId_",zb);var Ab=0};function Bb(a){if(a=a||window.event){for(var b in a)b in Cb||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;this.T=a;if((b=a.target||a.srcElement)&&3==b.nodeType)b=b.parentNode;this.target=b;if(b=a.relatedTarget)try{b=b.nodeName&&b}catch(c){b=l}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=a.clientX!=d?a.clientX:a.pageX;this.clientY=a.clientY!=d?a.clientY:a.pageY;if(document.body&&document.documentElement){b=document.body.scrollLeft+
document.documentElement.scrollLeft;var e=document.body.scrollTop+document.documentElement.scrollTop;this.pageX=a.pageX!=d?a.pageX:a.clientX+b;this.pageY=a.pageY!=d?a.pageY:a.clientY+e}this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;"MozMousePixelScroll"==this.type?(this.wheelDeltaX=a.axis==a.HORIZONTAL_AXIS?a.detail:0,this.wheelDeltaY=a.axis==a.HORIZONTAL_AXIS?0:a.detail):
window.opera?(this.wheelDeltaX=0,this.wheelDeltaY=a.detail):0==a.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.e&&0==navigator.platform.indexOf("Mac")?(this.wheelDeltaX=a.wheelDeltaX/-30,this.wheelDeltaY=a.wheelDeltaY/-30):(this.wheelDeltaX=a.wheelDeltaX/-1.2,this.wheelDeltaY=a.wheelDeltaY/-1.2):(this.wheelDeltaX=0,this.wheelDeltaY=a.wheelDelta/-1.6):(this.wheelDeltaX=a.wheelDeltaX/-3,this.wheelDeltaY=a.wheelDeltaY/-3)}}s=Bb.prototype;s.T=l;s.type="";s.target=l;
s.relatedTarget=l;s.currentTarget=l;s.data=l;s.state=l;s.keyCode=0;s.charCode=0;s.altKey=p;s.ctrlKey=p;s.shiftKey=p;s.clientX=0;s.clientY=0;s.pageX=0;s.pageY=0;s.wheelDeltaX=0;s.wheelDeltaY=0;s.rotation=0;s.scale=1;s.preventDefault=function(){this.T.returnValue=p;this.T.preventDefault&&this.T.preventDefault()};var Cb={stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1};var Ha=u("yt.events.listeners_")||{};A("yt.events.listeners_",Ha);var Db=u("yt.events.counter_")||{count:0};A("yt.events.counter_",Db);function Eb(a,b,c){return Ga(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==p})}
function Fb(a,b){var c=window;if(!c||!c.addEventListener&&!c.attachEvent)return"";var e=Eb(c,a,b);if(e)return e;var e=++Db.count+"",f=!(!("mouseenter"==a||"mouseleave"==a)||!c.addEventListener||"onmouseenter"in document),g;g=f?function(e){e=new Bb(e);if(!qb(e.relatedTarget,function(a){return a==c}))return e.currentTarget=c,e.type=a,b.call(c,e)}:function(a){a=new Bb(a);a.currentTarget=c;return b.call(c,a)};Ha[e]=[c,a,b,g,p];c.addEventListener?"mouseenter"==a&&f?c.addEventListener("mouseover",g,p):
"mouseleave"==a&&f?c.addEventListener("mouseout",g,p):"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style?c.addEventListener("MozMousePixelScroll",g,p):c.addEventListener(a,g,p):c.attachEvent("on"+a,g);return e};function Gb(){U.getInstance();var a=1<window.devicePixelRatio;if(!!((vb("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=vb(b)||0,c=a?c|67108864:c&-67108865;0==c?delete V[b]:(a=c.toString(16),V[b]=a.toString());var e,b=[];for(e in V)b.push(e+"="+escape(V[e]));e=b.join("&");sb.set("PREF",e,31536E4,"/","youtube.com")}}function Hb(){var a=ob(),b=pb();M("page-init",a,b)}function Ib(){window.clearTimeout(Jb);Jb=K(function(){M("page-resize",ob())},200)}
function Kb(){var a=pb();50<=Math.abs(Lb-a.y)&&M("page-scroll",a)}var Mb=[],Jb=0,Lb=0;var W={},Nb={};function Ob(a,b){a=w(a)?document.getElementById(a):a;var c=b||a[x]||(a[x]=++aa),e=W[c];e&&(W[c]=na(e,function(b){return b[0]!=a}))}function Pb(a){a in W&&!Nb[a]&&(F(W[a],function(a){var c=a[0];a=a[1];c&&"IMG"==c.tagName&&(c.onload="",c.src=a)}),W[a]=[],Nb[a]=k)};var X,Y,Qb=0,Z=0,Rb=0,Sb=p,Tb=[];function Ub(a,b){Sb=k;X=b;Y=a;Qb=b.y+a.height+Z;Vb();if(Y&&X)for(var c=Wb(X.y+Y.height+Z);0<=c;c--)Pb("thumb-group-"+c);D("MEASURE_THUMBNAIL_DELAY_LOAD")&&(N().tdl=y())}function Xb(a){Y=a;X&&Yb(X.y+a.height+Z)}function Zb(a){X=a;Y&&Yb(a.y+Y.height+Z)}function Yb(a){var b=Rb,c=Math.abs(b-a);if(!b||400<=c){c=Wb(a);for(b=Wb(b);b<c;)Pb("thumb-group-"+c),c--;Rb=a}}
function Vb(){Sb&&$b(function(a,b){var c=wb(a,"group-key");if(!wb(a,"thumb-manual")&&!c){c&&Ob(a,c);c=a;if(c=w(c)?document.getElementById(c):c){var e=0,f=0;if(c.offsetParent){do e+=c.offsetLeft,f+=c.offsetTop;while(c=c.offsetParent)}c=new R(e,f)}else c=l;c="thumb-group-"+Wb(c.y);e=a;e=w(e)?document.getElementById(e):e;f=c||e[x]||(e[x]=++aa);f in W||(W[f]=[]);W[f].push([e,b]);Nb[f]=p;a.dataset?a.dataset[xb("group-key")]=c:a.setAttribute("data-group-key",c)}})}
function $b(a){var b=nb();F(b,function(b){var e=wb(b,"thumb");e&&a.call(t,b,e)})}function Wb(a){return Math.ceil(Math.max(0,a-Qb)/400)};window.yt=window.yt||{};A("yt.setConfig",function(a){ta(J,arguments)});A("yt.getConfig",D);A("yt.setMsg",function(a){ta(ra,arguments)});A("yt.setGoogMsg",function(a){ta(ra,arguments)});A("yt.setAjaxToken",function(a){ta(qa,arguments)});A("reportTimingMaps",function(a,b){for(var c in a){var e=c,f=a[c];N()[e]=f||y()}for(var g in b)c=g,e=b[g],Ca().info[c]=e;Da()});window.onload=function(){ab()};window.onunload=function(){bb()};
window.onerror=function(a,b,c){if(!cb){for(var e=document.getElementsByTagName("script"),f=p,g=0,m=e.length;g<m;g++)if(0<e[g].src.indexOf("/debug-")){f=k;break}f&&(za("/js_204?"+("error="+encodeURIComponent(a)+"&script="+encodeURIComponent(b)+"&linenumber="+encodeURIComponent(""+c)+"&url="+encodeURIComponent(window.location.href))),cb=k)}};var $=window.ytspf||{};
if($.enabled){$.config=$.config||{};var ac=$.config,bc={"nolink-class":"spf-nolink","navigate-started-callback":db,"navigate-history-callback":eb,"navigate-received-callback":gb,"navigate-processed-callback":ib},cc;for(cc in bc)ac[cc]=bc[cc];B.init($.config);L("init",jb);L("dispose",lb)}function dc(){la(function(){u("ytbin.www.watch.extra.setup")()});va()}
var wa=L("init",function(){D("THUMB_INIT_IN_CORE")&&(Mb.push(Fb("resize",Ib)),Mb.push(Fb("scroll",Kb)),Gb(),K(Hb,0),Z=D("THUMB_DELAY_LOAD_BUFFER")||0,Tb.push(L("page-init",Ub)),Tb.push(L("page-resize",Xb)),Tb.push(L("page-scroll",Zb)));var a=D("WATCH_DELAY_LOAD_MS");0<a?K(function(){dc()},a):dc()});})();


}
/*
     FILE ARCHIVED ON 20:08:55 Mar 22, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:54:34 Jul 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.588
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.018
  esindex: 0.013
  cdx.remote: 4.622
  LoadShardBlock: 44.595 (3)
  PetaboxLoader3.datanode: 55.299 (4)
  load_resource: 47.343
  PetaboxLoader3.resolve: 21.811
*/