(function(t){function n(n){for(var r,o,i=n[0],u=n[1],l=n[2],d=0,f=[];d<i.length;d++)o=i[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(n);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,i=1;i<e.length;i++){var u=e[i];0!==a[u]&&(r=!1)}r&&(s.splice(n--,1),t=o(o.s=e[0]))}return t}var r={},a={app:0},s=[];function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var c=u;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"bg"}},[e("css-doodle",[t._v("\n      :doodle { @grid: 5/ 100vw 100vh; background: transparent; }\n      background-image: url(./img/m0@pick(1, 2, 3, 4).png);\n      background-size:contain; background-repeat:no-repeat; position:\n      absolute; @size: 10em; @place-cell: @rand(0, 20)% -20vh; left:\n      @rand(-100, 100)%; animation: move 5s linear @rand(0, 7)s infinite;\n      @keyframes move { 0% { transform: translateX( @rand(-10,-10)vw )\n      translateY(0vh) rotate(@rand(0, 72)deg); } 25% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(35vh) rotate(@rand(73, 144)deg); } 50% {\n      transform: translateX( @rand(-10,-10)vw ) translateY(70vh)\n      rotate(@rand(145, 216)deg); } 75% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(105vh) rotate(@rand(217, 288)deg); }\n      99.99% { transform: translateX( @rand(-10,-10)vw ) translateY(140vh)\n      rotate(@rand(289, 360)deg); } 100% { transform: translateX(\n      @rand(-10,-10)vw ) translateY(0vh) rotate(0deg); } }\n    ")])],1),e("router-view"),e("div",{staticClass:"text-center"},[e("gh-btns-watch",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}}),e("gh-btns-star",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}}),e("gh-btns-fork",{attrs:{slug:"rogeraabbccdd/Fadacai-Generator","show-count":""}})],1)],1)},s=[],o=(e("1054"),e("3a06"),{}),i=o,u=(e("034f"),e("2877")),l=Object(u["a"])(i,a,s,!1,null,null,null),c=l.exports,d=e("8c4f"),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12 mb-3"},[e("b-card",{attrs:{title:"已排序聲音","sub-title":"點按按鈕可以移除已排序的聲音"}},[e("hr"),e("playquery",{attrs:{sounds:t.sounds,query:t.query}})],1)],1),e("hr"),e("div",{staticClass:"col-12 my-3"},[e("b-card",{attrs:{title:"所有聲音","sub-title":""}},[e("hr"),e("soundbtns",{attrs:{sounds:t.sounds}})],1)],1)])])},v=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"col-12"},[r("img",{staticClass:"w-100",attrs:{src:e("6104"),id:"title"}})])}],h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",{directives:[{name:"show",rawName:"v-show",value:0==t.snds.length,expression:"snds.length == 0"}],staticStyle:{color:"#ccc"}},[t._v("請先在下方選擇音檔")]),t._l(t.snds,function(n,r){return e("b-button",{key:r,staticClass:"m-1",attrs:{variant:"success"},on:{click:function(n){return t.remove(r)}}},[t._v(t._s(n.name))])}),e("hr"),e("b-button",{ref:"btnPlay",staticClass:"m-1",attrs:{variant:"primary"},on:{click:function(n){return t.play()}}},[t._v("播放")]),e("b-button",{ref:"btnStop",staticClass:"m-1",attrs:{variant:"warning"},on:{click:function(n){return t.stop()}}},[t._v("停止")]),e("b-button",{staticClass:"m-1",attrs:{variant:"success"},on:{click:function(n){return t.getUrl()}}},[t._v("匯出")]),e("b-button",{staticClass:"m-1",attrs:{variant:"danger"},on:{click:function(n){return t.removeAll()}}},[t._v("清空")])],2)},p=[],b=(e("28a5"),e("7f7f"),-1),g=!1,m={name:"query",props:{sounds:Array,query:String},data:function(){var t=[];return{snds:t}},methods:{open:function(t,n){n.preventDefault()},play:function(){var t=this;if(this.snds.length>0){g=!0,b=0,this.$refs.btnPlay.setAttribute("disabled","true");var n=new Audio(this.snds[b].file);n.play(),n.onended=function(){b++,b<t.snds.length&&g?(n.src=t.snds[b].file,n.play()):(b=-1,g=!1,t.$refs.btnPlay.removeAttribute("disabled"))}}},stop:function(){b=-1,g=!1,this.$refs.btnPlay.removeAttribute("disabled")},getUrl:function(){for(var t="",n=0;n<this.snds.length;n++)t=t+this.snds[n].name+",";t=t.substr(0,t.length-1),this.$router.push({name:"home",query:{sounds:t}}),alert("匯出成功，可使用目前網址分享你的創作")},remove:function(t){-1==b&&this.snds.splice(t,1)},removeAll:function(){this.snds=[]}},mounted:function(){var t=this;L.$on("addSound",function(n){t.snds.push({file:t.sounds[n].file,name:t.sounds[n].name})})},watch:{sounds:function(t){if(void 0!=this.query&&this.query.length>0){var n=this.query.split(",");if(n.length>0)for(var e=0;e<n.length;e++){for(var r=-1,a=0;e<t.length;a++){var s=t[a].name;if(s==n[e]){r=a;break}}r>-1&&this.snds.push({file:t[r].file,name:t[r].name})}}}}},y=m,w=Object(u["a"])(y,h,p,!1,null,null,null),_=w.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(this.sounds,function(n,r){return e("b-button",{key:r,staticClass:"m-1",attrs:{variant:"success"},on:{click:function(n){return t.add(r)}}},[t._v(t._s(n.name))])}),1)},j=[],C={name:"sounds",props:{sounds:Array},methods:{add:function(t){L.$emit("addSound",t)}}},O=C,$=Object(u["a"])(O,k,j,!1,null,null,null),q=$.exports,x="soundList.json",A={name:"home",components:{playquery:_,soundbtns:q},data:function(){var t=this.$route.query.sounds,n=[];return{query:t,sounds:n}},created:function(){var t=this;this.$http.get(x).then(function(n){t.sounds=n.data.sounds})}},S=A,P=Object(u["a"])(S,f,v,!1,null,null,null),E=P.exports;r["default"].use(d["a"]);var X=new d["a"]({routes:[{path:"/*",name:"home",component:E}]}),Y=e("9483");Object(Y["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var F=e("9f7b"),M=e.n(F),N=(e("f9e3"),e("2dd8"),e("bc3a")),T=e.n(N),G=e("a7fe"),U=e.n(G),z=e("f676"),B=e("0284"),J=e.n(B);e.d(n,"eventBus",function(){return L}),r["default"].use(M.a),r["default"].use(U.a,T.a),r["default"].use(z["a"],{useCache:!0}),r["default"].use(J.a,{id:"UA-131804412-7",router:X,autoTracking:{pageviewOnLoad:!1}}),r["default"].config.productionTip=!1;var L=new r["default"];new r["default"]({router:X,render:function(t){return t(c)}}).$mount("#app")},6104:function(t,n,e){t.exports=e.p+"img/title.a0f22ec8.png"},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.d459db51.js.map