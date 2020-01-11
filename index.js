!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function c(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(){return e=" ",document.createTextNode(e);var e}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let d;function m(e){d=e}const g=[],$=[],h=[],x=[],y=Promise.resolve();let b=!1;function v(e){h.push(e)}function w(){const e=new Set;do{for(;g.length;){const e=g.shift();m(e),_(e.$$)}for(;$.length;)$.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];e.has(n)||(n(),e.add(n))}h.length=0}while(g.length);for(;x.length;)x.pop()();b=!1}function _(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const C=new Set;function j(e,t){e&&e.i&&(C.delete(e),e.i(t))}function T(e,t,n,o){if(e&&e.o){if(C.has(e))return;C.add(e),(void 0).c.push(()=>{C.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function B(e){e&&e.c()}function E(e,n,a){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=e.$$;s&&s.m(n,a),v(()=>{const n=i.map(t).filter(r);l?l.push(...n):o(n),e.$$.on_mount=[]}),u.forEach(v)}function M(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(g.push(e),b||(b=!0,y.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function A(t,r,a,s,i,l,u=[-1]){const c=d;m(t);const f=r.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:n(),dirty:u};let g=!1;p.ctx=a?a(t,f,(e,n,o=n)=>(p.ctx&&i(p.ctx[e],p.ctx[e]=o)&&(p.bound[e]&&p.bound[e](o),g&&z(t,e)),n)):[],p.update(),g=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target&&(r.hydrate?p.fragment&&p.fragment.l(function(e){return Array.from(e.childNodes)}(r.target)):p.fragment&&p.fragment.c(),r.intro&&j(t.$$.fragment),E(t,r.target,r.anchor),w()),m(c)}class F{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function V(t){let n,o,r,a,d,m,g,$,h,x,y,b,v,w,_,C,j,T;return{c(){var e,s,i,l;n=c("svg"),o=c("filter"),r=c("feColorMatrix"),a=c("feComponentTransfer"),d=c("feFuncR"),g=c("feFuncG"),h=c("feFuncB"),y=c("feComponentTransfer"),b=c("feFuncR"),v=c("feFuncG"),w=c("feFuncB"),C=f(),j=u("img"),p(r,"type","matrix"),p(r,"values",".33 .33 .33 0 0\r\n                    .33 .33 .33 0 0\r\n                    .33 .33 .33 0 0\r\n                    0   0   0 1 0"),p(d,"type","table"),p(d,"tableValues",m=t[4]("r")),p(g,"type","table"),p(g,"tableValues",$=t[4]("g")),p(h,"type","table"),p(h,"tableValues",x=t[4]("b")),p(a,"color-interpolation-filters","sRGB"),p(b,"type","gamma"),p(b,"exponent",t[3]),p(b,"amplitude",t[2]),p(b,"offset","0"),p(v,"type","gamma"),p(v,"exponent",t[3]),p(v,"amplitude",t[2]),p(v,"offset","0"),p(w,"type","gamma"),p(w,"exponent",t[3]),p(w,"amplitude",t[2]),p(w,"offset","0"),p(y,"color-interpolation-filters","sRGB"),p(o,"id",_="duotone-"+t[5]),p(n,"viewBox","0 0 1 1"),p(n,"class","svelte-4zndf4"),j.src!==(T=t[0])&&p(j,"src",T),p(j,"alt",t[1]),e=j,s="filter",i="url(#duotone-"+t[5]+")",e.style.setProperty(s,i,l?"important":""),p(j,"class","svelte-4zndf4")},m(e,t){i(e,n,t),s(n,o),s(o,r),s(o,a),s(a,d),s(a,g),s(a,h),s(o,y),s(y,b),s(y,v),s(y,w),i(e,C,t),i(e,j,t)},p(e,[t]){16&t&&m!==(m=e[4]("r"))&&p(d,"tableValues",m),16&t&&$!==($=e[4]("g"))&&p(g,"tableValues",$),16&t&&x!==(x=e[4]("b"))&&p(h,"tableValues",x),8&t&&p(b,"exponent",e[3]),4&t&&p(b,"amplitude",e[2]),8&t&&p(v,"exponent",e[3]),4&t&&p(v,"amplitude",e[2]),8&t&&p(w,"exponent",e[3]),4&t&&p(w,"amplitude",e[2]),1&t&&j.src!==(T=e[0])&&p(j,"src",T),2&t&&p(j,"alt",e[1])},i:e,o:e,d(e){e&&l(n),e&&l(C),e&&l(j)}}}function G(e,t,n){let o,{src:r=""}=t,{alt:a=""}=t,{colours:s=["#000","#fff"]}=t,{amplitude:i=1}=t,{exponent:l=1}=t,u=[r,...s].join().split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0);return e.$set=e=>{"src"in e&&n(0,r=e.src),"alt"in e&&n(1,a=e.alt),"colours"in e&&n(6,s=e.colours),"amplitude"in e&&n(2,i=e.amplitude),"exponent"in e&&n(3,l=e.exponent)},e.$$.update=()=>{64&e.$$.dirty&&n(4,o=e=>s.map(t=>{const[n,o,r]=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,n,o)=>"#"+t+t+n+n+o+o).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return{r:n,g:o,b:r}[e]/255}).join(" "))},[r,a,i,l,o,u,s]}class I extends F{constructor(e){var t;super(),document.getElementById("svelte-4zndf4-style")||((t=u("style")).id="svelte-4zndf4-style",t.textContent="img.svelte-4zndf4{width:100%}svg.svelte-4zndf4{height:0}",s(document.head,t)),A(this,e,G,V,a,{src:0,alt:1,colours:6,amplitude:2,exponent:3})}}function L(t){let n,o,r,a,c,d,m,g,$,h,x,y,b,v,w,_,C,z,A,F,V,G,L;const N=new I({props:{src:"./assets/image.jpg",colours:["#ff00ff","#ffff00"],alt:"processed image",exponent:"1.3",amplitude:"1.1"}}),R=new I({props:{src:"./assets/image.jpg",colours:["#000","#7a4285","#07d4f2"],alt:"processed image",exponent:"2.0",amplitude:"1.9"}}),S=new I({props:{src:"./assets/image.jpg"}});return{c(){n=u("header"),n.innerHTML='<h1>Svelte Multitone Image</h1> \n    <a href="https://github.com/stephane-vanraes/svelte-multitoneimage">Github</a>',o=f(),r=u("main"),a=u("p"),a.textContent="A simple image renderer to apply multitone effects for svelte.",c=f(),d=u("div"),m=u("figure"),m.innerHTML='<img src="./assets/image.jpg" alt=""> \n            <figcaption>The original image</figcaption>',g=f(),$=u("figure"),B(N.$$.fragment),h=f(),x=u("figcaption"),x.textContent="The processed image",y=f(),b=u("pre"),b.textContent='<MultitoneImage\r\n        src="./assets/image.jpg"\r\n        alt="processed image"\r\n        colours="{[\'#ff00ff\', \'#ffff00\']}"\r\n        amplitude="1.1"\r\n        exponent="1.3" />',v=f(),w=u("div"),_=u("figure"),B(R.$$.fragment),C=f(),z=u("figcaption"),z.textContent="The colour array can have more than one colour.",A=f(),F=u("figure"),B(S.$$.fragment),V=f(),G=u("figcaption"),G.textContent="Default values will generate a grayscale image.",p(d,"class","sample"),p(w,"class","sample")},m(e,t){i(e,n,t),i(e,o,t),i(e,r,t),s(r,a),s(r,c),s(r,d),s(d,m),s(d,g),s(d,$),E(N,$,null),s($,h),s($,x),s(r,y),s(r,b),s(r,v),s(r,w),s(w,_),E(R,_,null),s(_,C),s(_,z),s(w,A),s(w,F),E(S,F,null),s(F,V),s(F,G),L=!0},p:e,i(e){L||(j(N.$$.fragment,e),j(R.$$.fragment,e),j(S.$$.fragment,e),L=!0)},o(e){T(N.$$.fragment,e),T(R.$$.fragment,e),T(S.$$.fragment,e),L=!1},d(e){e&&l(n),e&&l(o),e&&l(r),M(N),M(R),M(S)}}}class N extends F{constructor(e){super(),A(this,e,null,L,a,{})}}document.addEventListener("DOMContentLoaded",()=>{new N({target:document.body})})}();
