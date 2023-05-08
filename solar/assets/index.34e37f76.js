var Df=Object.defineProperty;var If=(n,e,t)=>e in n?Df(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var qn=(n,e,t)=>(If(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function sa(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Ff="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nf=sa(Ff);function qc(n){return!!n||n===""}function oa(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?zf(i):oa(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(Qe(n))return n}}const Of=/;(?![^(]*\))/g,Uf=/:(.+)/;function zf(n){const e={};return n.split(Of).forEach(t=>{if(t){const i=t.split(Uf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function aa(n){let e="";if(dt(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=aa(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const je={},Vi=[],jt=()=>{},Bf=()=>!1,Gf=/^on[^a-z]/,bs=n=>Gf.test(n),la=n=>n.startsWith("onUpdate:"),ht=Object.assign,ca=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kf=Object.prototype.hasOwnProperty,Be=(n,e)=>kf.call(n,e),De=Array.isArray,mr=n=>Ss(n)==="[object Map]",Vf=n=>Ss(n)==="[object Set]",Ie=n=>typeof n=="function",dt=n=>typeof n=="string",ua=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",Xc=n=>Qe(n)&&Ie(n.then)&&Ie(n.catch),Hf=Object.prototype.toString,Ss=n=>Hf.call(n),Wf=n=>Ss(n).slice(8,-1),qf=n=>Ss(n)==="[object Object]",fa=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cs=sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ws=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Xf=/-(\w)/g,on=ws(n=>n.replace(Xf,(e,t)=>t?t.toUpperCase():"")),jf=/\B([A-Z])/g,ir=ws(n=>n.replace(jf,"-$1").toLowerCase()),Es=ws(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vs=ws(n=>n?`on${Es(n)}`:""),vr=(n,e)=>!Object.is(n,e),Hs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},gs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Yf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Oa;const $f=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Kt;class Zf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Kt&&(this.parent=Kt,this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Kf(n,e=Kt){e&&e.active&&e.effects.push(n)}const ha=n=>{const e=new Set(n);return e.w=0,e.n=0,e},jc=n=>(n.w&kn)>0,Yc=n=>(n.n&kn)>0,Jf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=kn},Qf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];jc(r)&&!Yc(r)?r.delete(n):e[t++]=r,r.w&=~kn,r.n&=~kn}e.length=t}},Ro=new WeakMap;let hr=0,kn=1;const Do=30;let Ht;const ai=Symbol(""),Io=Symbol("");class da{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Kf(this,i)}run(){if(!this.active)return this.fn();let e=Ht,t=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,Un=!0,kn=1<<++hr,hr<=Do?Jf(this):Ua(this),this.fn()}finally{hr<=Do&&Qf(this),kn=1<<--hr,Ht=this.parent,Un=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(Ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Ua(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Un=!0;const $c=[];function rr(){$c.push(Un),Un=!1}function sr(){const n=$c.pop();Un=n===void 0?!0:n}function Tt(n,e,t){if(Un&&Ht){let i=Ro.get(n);i||Ro.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=ha()),Zc(r)}}function Zc(n,e){let t=!1;hr<=Do?Yc(n)||(n.n|=kn,t=!jc(n)):t=!n.has(Ht),t&&(n.add(Ht),Ht.deps.push(n))}function Mn(n,e,t,i,r,s){const a=Ro.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&De(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":De(n)?fa(t)&&o.push(a.get("length")):(o.push(a.get(ai)),mr(n)&&o.push(a.get(Io)));break;case"delete":De(n)||(o.push(a.get(ai)),mr(n)&&o.push(a.get(Io)));break;case"set":mr(n)&&o.push(a.get(ai));break}if(o.length===1)o[0]&&Fo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Fo(ha(l))}}function Fo(n,e){const t=De(n)?n:[...n];for(const i of t)i.computed&&za(i);for(const i of t)i.computed||za(i)}function za(n,e){(n!==Ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const eh=sa("__proto__,__v_isRef,__isVue"),Kc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ua)),th=pa(),nh=pa(!1,!0),ih=pa(!0),Ba=rh();function rh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=He(this);for(let s=0,a=this.length;s<a;s++)Tt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){rr();const i=He(this)[e].apply(this,t);return sr(),i}}),n}function pa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Mh:nu:e?tu:eu).get(i))return i;const a=De(i);if(!n&&a&&Be(Ba,r))return Reflect.get(Ba,r,s);const o=Reflect.get(i,r,s);return(ua(r)?Kc.has(r):eh(r))||(n||Tt(i,"get",r),e)?o:at(o)?a&&fa(r)?o:o.value:Qe(o)?n?iu(o):Cr(o):o}}const sh=Jc(),oh=Jc(!0);function Jc(n=!1){return function(t,i,r,s){let a=t[i];if(Yi(a)&&at(a)&&!at(r))return!1;if(!n&&(!_s(r)&&!Yi(r)&&(a=He(a),r=He(r)),!De(t)&&at(a)&&!at(r)))return a.value=r,!0;const o=De(t)&&fa(i)?Number(i)<t.length:Be(t,i),l=Reflect.set(t,i,r,s);return t===He(s)&&(o?vr(r,a)&&Mn(t,"set",i,r):Mn(t,"add",i,r)),l}}function ah(n,e){const t=Be(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Mn(n,"delete",e,void 0),i}function lh(n,e){const t=Reflect.has(n,e);return(!ua(e)||!Kc.has(e))&&Tt(n,"has",e),t}function ch(n){return Tt(n,"iterate",De(n)?"length":ai),Reflect.ownKeys(n)}const Qc={get:th,set:sh,deleteProperty:ah,has:lh,ownKeys:ch},uh={get:ih,set(n,e){return!0},deleteProperty(n,e){return!0}},fh=ht({},Qc,{get:nh,set:oh}),ma=n=>n,Ts=n=>Reflect.getPrototypeOf(n);function Nr(n,e,t=!1,i=!1){n=n.__v_raw;const r=He(n),s=He(e);t||(e!==s&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=Ts(r),o=i?ma:t?xa:Mr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Or(n,e=!1){const t=this.__v_raw,i=He(t),r=He(n);return e||(n!==r&&Tt(i,"has",n),Tt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ur(n,e=!1){return n=n.__v_raw,!e&&Tt(He(n),"iterate",ai),Reflect.get(n,"size",n)}function Ga(n){n=He(n);const e=He(this);return Ts(e).has.call(e,n)||(e.add(n),Mn(e,"add",n,n)),this}function ka(n,e){e=He(e);const t=He(this),{has:i,get:r}=Ts(t);let s=i.call(t,n);s||(n=He(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?vr(e,a)&&Mn(t,"set",n,e):Mn(t,"add",n,e),this}function Va(n){const e=He(this),{has:t,get:i}=Ts(e);let r=t.call(e,n);r||(n=He(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Mn(e,"delete",n,void 0),s}function Ha(){const n=He(this),e=n.size!==0,t=n.clear();return e&&Mn(n,"clear",void 0,void 0),t}function zr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=He(a),l=e?ma:n?xa:Mr;return!n&&Tt(o,"iterate",ai),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Br(n,e,t){return function(...i){const r=this.__v_raw,s=He(r),a=mr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ma:e?xa:Mr;return!e&&Tt(s,"iterate",l?Io:ai),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function En(n){return function(...e){return n==="delete"?!1:this}}function hh(){const n={get(s){return Nr(this,s)},get size(){return Ur(this)},has:Or,add:Ga,set:ka,delete:Va,clear:Ha,forEach:zr(!1,!1)},e={get(s){return Nr(this,s,!1,!0)},get size(){return Ur(this)},has:Or,add:Ga,set:ka,delete:Va,clear:Ha,forEach:zr(!1,!0)},t={get(s){return Nr(this,s,!0)},get size(){return Ur(this,!0)},has(s){return Or.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:zr(!0,!1)},i={get(s){return Nr(this,s,!0,!0)},get size(){return Ur(this,!0)},has(s){return Or.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Br(s,!1,!1),t[s]=Br(s,!0,!1),e[s]=Br(s,!1,!0),i[s]=Br(s,!0,!0)}),[n,t,e,i]}const[dh,ph,mh,gh]=hh();function ga(n,e){const t=e?n?gh:mh:n?ph:dh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Be(t,r)&&r in i?t:i,r,s)}const _h={get:ga(!1,!1)},xh={get:ga(!1,!0)},vh={get:ga(!0,!1)},eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,Mh=new WeakMap;function yh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bh(n){return n.__v_skip||!Object.isExtensible(n)?0:yh(Wf(n))}function Cr(n){return Yi(n)?n:_a(n,!1,Qc,_h,eu)}function Sh(n){return _a(n,!1,fh,xh,tu)}function iu(n){return _a(n,!0,uh,vh,nu)}function _a(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=bh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Hi(n){return Yi(n)?Hi(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function _s(n){return!!(n&&n.__v_isShallow)}function ru(n){return Hi(n)||Yi(n)}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function su(n){return gs(n,"__v_skip",!0),n}const Mr=n=>Qe(n)?Cr(n):n,xa=n=>Qe(n)?iu(n):n;function ou(n){Un&&Ht&&(n=He(n),Zc(n.dep||(n.dep=ha())))}function au(n,e){n=He(n),n.dep&&Fo(n.dep)}function at(n){return!!(n&&n.__v_isRef===!0)}function lu(n){return cu(n,!1)}function wh(n){return cu(n,!0)}function cu(n,e){return at(n)?n:new Eh(n,e)}class Eh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:He(e),this._value=t?e:Mr(e)}get value(){return ou(this),this._value}set value(e){const t=this.__v_isShallow||_s(e)||Yi(e);e=t?e:He(e),vr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Mr(e),au(this))}}function Wi(n){return at(n)?n.value:n}const Th={get:(n,e,t)=>Wi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return at(r)&&!at(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function uu(n){return Hi(n)?n:new Proxy(n,Th)}function Ah(n){const e=De(n)?new Array(n.length):{};for(const t in n)e[t]=Lh(n,t);return e}class Ch{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Lh(n,e,t){const i=n[e];return at(i)?i:new Ch(n,e,t)}var fu;class Ph{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[fu]=!1,this._dirty=!0,this.effect=new da(e,()=>{this._dirty||(this._dirty=!0,au(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return ou(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}fu="__v_isReadonly";function Rh(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=jt):(i=n.get,r=n.set),new Ph(i,r,s||!r,t)}function zn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){As(s,e,t)}return r}function Ot(n,e,t,i){if(Ie(n)){const s=zn(n,e,t,i);return s&&Xc(s)&&s.catch(a=>{As(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ot(n[s],e,t,i));return r}function As(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){zn(l,null,10,[n,a,o]);return}}Dh(n,t,r,i)}function Dh(n,e,t,i=!0){console.error(n)}let yr=!1,No=!1;const ft=[];let tn=0;const qi=[];let pn=null,ei=0;const hu=Promise.resolve();let va=null;function du(n){const e=va||hu;return n?e.then(this?n.bind(this):n):e}function Ih(n){let e=tn+1,t=ft.length;for(;e<t;){const i=e+t>>>1;br(ft[i])<n?e=i+1:t=i}return e}function Ma(n){(!ft.length||!ft.includes(n,yr&&n.allowRecurse?tn+1:tn))&&(n.id==null?ft.push(n):ft.splice(Ih(n.id),0,n),pu())}function pu(){!yr&&!No&&(No=!0,va=hu.then(gu))}function Fh(n){const e=ft.indexOf(n);e>tn&&ft.splice(e,1)}function Nh(n){De(n)?qi.push(...n):(!pn||!pn.includes(n,n.allowRecurse?ei+1:ei))&&qi.push(n),pu()}function Wa(n,e=yr?tn+1:0){for(;e<ft.length;e++){const t=ft[e];t&&t.pre&&(ft.splice(e,1),e--,t())}}function mu(n){if(qi.length){const e=[...new Set(qi)];if(qi.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((t,i)=>br(t)-br(i)),ei=0;ei<pn.length;ei++)pn[ei]();pn=null,ei=0}}const br=n=>n.id==null?1/0:n.id,Oh=(n,e)=>{const t=br(n)-br(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function gu(n){No=!1,yr=!0,ft.sort(Oh);const e=jt;try{for(tn=0;tn<ft.length;tn++){const t=ft[tn];t&&t.active!==!1&&zn(t,null,14)}}finally{tn=0,ft.length=0,mu(),yr=!1,va=null,(ft.length||qi.length)&&gu()}}function Uh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||je;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||je;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Yf))}let o,l=i[o=Vs(e)]||i[o=Vs(on(e))];!l&&s&&(l=i[o=Vs(ir(e))]),l&&Ot(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ot(c,n,6,r)}}function _u(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const u=_u(c,e,!0);u&&(o=!0,ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):ht(a,s),Qe(n)&&i.set(n,a),a)}function Cs(n,e){return!n||!bs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(n,e[0].toLowerCase()+e.slice(1))||Be(n,ir(e))||Be(n,e))}let qt=null,xu=null;function xs(n){const e=qt;return qt=n,xu=n&&n.type.__scopeId||null,e}function zh(n,e=qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&tl(-1);const s=xs(e),a=n(...r);return xs(s),i._d&&tl(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Ws(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const y=xs(n);try{if(t.shapeFlag&4){const E=r||i;d=Qt(u.call(E,E,f,s,m,h,g)),_=l}else{const E=e;d=Qt(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),_=e.props?l:Bh(l)}}catch(E){gr.length=0,As(E,n,1),d=Ft(xn)}let A=d;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:S}=A;E.length&&S&7&&(a&&E.some(la)&&(_=Gh(_,a)),A=Vn(A,_))}return t.dirs&&(A=Vn(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,xs(y),d}const Bh=n=>{let e;for(const t in n)(t==="class"||t==="style"||bs(t))&&((e||(e={}))[t]=n[t]);return e},Gh=(n,e)=>{const t={};for(const i in n)(!la(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function kh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Cs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?qa(i,a,c):!0:!!a;return!1}function qa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Cs(t,s))return!0}return!1}function Vh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Hh=n=>n.__isSuspense;function Wh(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):Nh(n)}function us(n,e){if(st){let t=st.provides;const i=st.parent&&st.parent.provides;i===t&&(t=st.provides=Object.create(i)),t[n]=e}}function Bn(n,e,t=!1){const i=st||qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const Xa={};function fs(n,e,t){return vu(n,e,t)}function vu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=je){const o=st;let l,c=!1,u=!1;if(at(n)?(l=()=>n.value,c=_s(n)):Hi(n)?(l=()=>n,i=!0):De(n)?(u=!0,c=n.some(_=>Hi(_)||_s(_)),l=()=>n.map(_=>{if(at(_))return _.value;if(Hi(_))return Bi(_);if(Ie(_))return zn(_,o,2)})):Ie(n)?e?l=()=>zn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Ot(n,o,3,[h])}:l=jt,e&&i){const _=l;l=()=>Bi(_())}let f,h=_=>{f=d.onStop=()=>{zn(_,o,4)}};if(wr)return h=jt,e?t&&Ot(e,o,3,[l(),u?[]:void 0,h]):l(),jt;let m=u?[]:Xa;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((y,A)=>vr(y,m[A])):vr(_,m)))&&(f&&f(),Ot(e,o,3,[_,m===Xa?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>xt(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),p=()=>Ma(g));const d=new da(l,p);return e?t?g():m=d.run():r==="post"?xt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&ca(o.scope.effects,d)}}function qh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Mu(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=st;$i(this);const o=vu(r,s.bind(i),t);return a?$i(a):li(),o}function Mu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Bi(n,e){if(!Qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),at(n))Bi(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)Bi(n[t],e);else if(Vf(n)||mr(n))n.forEach(t=>{Bi(t,e)});else if(qf(n))for(const t in n)Bi(n[t],e);return n}function Xh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ya(()=>{n.isMounted=!0}),wu(()=>{n.isUnmounting=!0}),n}const Lt=[Function,Array],jh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(n,{slots:e}){const t=Fd(),i=Xh();let r;return()=>{const s=e.default&&bu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==xn){a=p;break}}const o=He(n),{mode:l}=o;if(i.isLeaving)return qs(a);const c=ja(a);if(!c)return qs(a);const u=Oo(c,o,i,t);Uo(c,u);const f=t.subTree,h=f&&ja(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==xn&&(!ti(c,h)||m)){const p=Oo(h,o,i,t);if(Uo(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},qs(a);l==="in-out"&&c.type!==xn&&(p.delayLeave=(d,_,y)=>{const A=yu(i,h);A[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Yh=jh;function yu(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Oo(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:y}=e,A=String(n.key),E=yu(t,n),S=(M,C)=>{M&&Ot(M,i,9,C)},P=(M,C)=>{const F=C[1];S(M,C),De(M)?M.every(ne=>ne.length<=1)&&F():M.length<=1&&F()},B={mode:s,persisted:a,beforeEnter(M){let C=o;if(!t.isMounted)if(r)C=p||o;else return;M._leaveCb&&M._leaveCb(!0);const F=E[A];F&&ti(n,F)&&F.el._leaveCb&&F.el._leaveCb(),S(C,[M])},enter(M){let C=l,F=c,ne=u;if(!t.isMounted)if(r)C=d||l,F=_||c,ne=y||u;else return;let ge=!1;const q=M._enterCb=O=>{ge||(ge=!0,O?S(ne,[M]):S(F,[M]),B.delayedLeave&&B.delayedLeave(),M._enterCb=void 0)};C?P(C,[M,q]):q()},leave(M,C){const F=String(n.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return C();S(f,[M]);let ne=!1;const ge=M._leaveCb=q=>{ne||(ne=!0,C(),q?S(g,[M]):S(m,[M]),M._leaveCb=void 0,E[F]===n&&delete E[F])};E[F]=n,h?P(h,[M,ge]):ge()},clone(M){return Oo(M,e,t,i)}};return B}function qs(n){if(Ps(n))return n=Vn(n),n.children=null,n}function ja(n){return Ps(n)?n.children?n.children[0]:void 0:n}function Uo(n,e){n.shapeFlag&6&&n.component?Uo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function bu(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Jt?(a.patchFlag&128&&r++,i=i.concat(bu(a.children,e,o))):(e||a.type!==xn)&&i.push(o!=null?Vn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ls(n){return Ie(n)?{setup:n,name:n.name}:n}const hs=n=>!!n.type.__asyncLoader,Ps=n=>n.type.__isKeepAlive;function $h(n,e){Su(n,"a",e)}function Zh(n,e){Su(n,"da",e)}function Su(n,e,t=st){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Rs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ps(r.parent.vnode)&&Kh(i,e,t,r),r=r.parent}}function Kh(n,e,t,i){const r=Rs(e,n,i,!0);Eu(()=>{ca(i[e],r)},t)}function Rs(n,e,t=st,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;rr(),$i(t);const o=Ot(e,t,n,a);return li(),sr(),o});return i?r.unshift(s):r.push(s),s}}const yn=n=>(e,t=st)=>(!wr||n==="sp")&&Rs(n,e,t),Jh=yn("bm"),ya=yn("m"),Qh=yn("bu"),ed=yn("u"),wu=yn("bum"),Eu=yn("um"),td=yn("sp"),nd=yn("rtg"),id=yn("rtc");function rd(n,e=st){Rs("ec",n,e)}function Xn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(rr(),Ot(l,t,8,[n.el,o,n,e]),sr())}}const Tu="components";function sd(n,e){return ad(Tu,n,!0,e)||n}const od=Symbol();function ad(n,e,t=!0,i=!1){const r=qt||st;if(r){const s=r.type;if(n===Tu){const o=Bd(s,!1);if(o&&(o===e||o===on(e)||o===Es(on(e))))return s}const a=Ya(r[n]||s[n],e)||Ya(r.appContext[n],e);return!a&&i?s:a}}function Ya(n,e){return n&&(n[e]||n[on(e)]||n[Es(on(e))])}const zo=n=>n?Bu(n)?Aa(n)||n.proxy:zo(n.parent):null,vs=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zo(n.parent),$root:n=>zo(n.root),$emit:n=>n.emit,$options:n=>ba(n),$forceUpdate:n=>n.f||(n.f=()=>Ma(n.update)),$nextTick:n=>n.n||(n.n=du.bind(n.proxy)),$watch:n=>qh.bind(n)}),ld={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==je&&Be(i,e))return a[e]=1,i[e];if(r!==je&&Be(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Be(c,e))return a[e]=3,s[e];if(t!==je&&Be(t,e))return a[e]=4,t[e];Bo&&(a[e]=0)}}const u=vs[e];let f,h;if(u)return e==="$attrs"&&Tt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==je&&Be(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Be(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==je&&Be(r,e)?(r[e]=t,!0):i!==je&&Be(i,e)?(i[e]=t,!0):Be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==je&&Be(n,a)||e!==je&&Be(e,a)||(o=s[0])&&Be(o,a)||Be(i,a)||Be(vs,a)||Be(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Bo=!0;function cd(n){const e=ba(n),t=n.proxy,i=n.ctx;Bo=!1,e.beforeCreate&&$a(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:A,unmounted:E,render:S,renderTracked:P,renderTriggered:B,errorCaptured:M,serverPrefetch:C,expose:F,inheritAttrs:ne,components:ge,directives:q,filters:O}=e;if(c&&ud(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const J in a){const W=a[J];Ie(W)&&(i[J]=W.bind(t))}if(r){const J=r.call(t,t);Qe(J)&&(n.data=Cr(J))}if(Bo=!0,s)for(const J in s){const W=s[J],N=Ie(W)?W.bind(t,t):Ie(W.get)?W.get.bind(t,t):jt,X=!Ie(W)&&Ie(W.set)?W.set.bind(t):jt,he=It({get:N,set:X});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>he.value,set:ue=>he.value=ue})}if(o)for(const J in o)Au(o[J],i,t,J);if(l){const J=Ie(l)?l.call(t):l;Reflect.ownKeys(J).forEach(W=>{us(W,J[W])})}u&&$a(u,n,"c");function ie(J,W){De(W)?W.forEach(N=>J(N.bind(t))):W&&J(W.bind(t))}if(ie(Jh,f),ie(ya,h),ie(Qh,m),ie(ed,g),ie($h,p),ie(Zh,d),ie(rd,M),ie(id,P),ie(nd,B),ie(wu,y),ie(Eu,E),ie(td,C),De(F))if(F.length){const J=n.exposed||(n.exposed={});F.forEach(W=>{Object.defineProperty(J,W,{get:()=>t[W],set:N=>t[W]=N})})}else n.exposed||(n.exposed={});S&&n.render===jt&&(n.render=S),ne!=null&&(n.inheritAttrs=ne),ge&&(n.components=ge),q&&(n.directives=q)}function ud(n,e,t=jt,i=!1){De(n)&&(n=Go(n));for(const r in n){const s=n[r];let a;Qe(s)?"default"in s?a=Bn(s.from||r,s.default,!0):a=Bn(s.from||r):a=Bn(s),at(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function $a(n,e,t){Ot(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Au(n,e,t,i){const r=i.includes(".")?Mu(t,i):()=>t[i];if(dt(n)){const s=e[n];Ie(s)&&fs(r,s)}else if(Ie(n))fs(r,n.bind(t));else if(Qe(n))if(De(n))n.forEach(s=>Au(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&fs(r,s,n)}}function ba(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ms(l,c,a,!0)),Ms(l,e,a)),Qe(e)&&s.set(e,l),l}function Ms(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ms(n,s,t,!0),r&&r.forEach(a=>Ms(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=fd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const fd={data:Za,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Kn,directives:Kn,watch:dd,provide:Za,inject:hd};function Za(n,e){return e?n?function(){return ht(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function hd(n,e){return Kn(Go(n),Go(e))}function Go(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Kn(n,e){return n?ht(ht(Object.create(null),n),e):e}function dd(n,e){if(!n)return e;if(!e)return n;const t=ht(Object.create(null),n);for(const i in e)t[i]=mt(n[i],e[i]);return t}function pd(n,e,t,i=!1){const r={},s={};gs(s,Ds,1),n.propsDefaults=Object.create(null),Cu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Sh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function md(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=He(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Cs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Be(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=on(h);r[g]=ko(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Cu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Be(e,f)&&((u=ir(f))===f||!Be(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ko(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Be(e,f)&&!0)&&(delete s[f],c=!0)}c&&Mn(n,"set","$attrs")}function Cu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(cs(l))continue;const c=e[l];let u;r&&Be(r,u=on(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Cs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=He(t),c=o||je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ko(r,l,f,c[f],n,!Be(c,f))}}return a}function ko(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Be(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:($i(r),i=c[t]=l.call(null,e),li())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ir(t))&&(i=!0))}return i}function Lu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=Lu(f,e,!0);ht(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Qe(n)&&i.set(n,Vi),Vi;if(De(s))for(let u=0;u<s.length;u++){const f=on(s[u]);Ka(f)&&(a[f]=je)}else if(s)for(const u in s){const f=on(u);if(Ka(f)){const h=s[u],m=a[f]=De(h)||Ie(h)?{type:h}:h;if(m){const g=el(Boolean,m.type),p=el(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Be(m,"default"))&&o.push(f)}}}const c=[a,o];return Qe(n)&&i.set(n,c),c}function Ka(n){return n[0]!=="$"}function Ja(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Qa(n,e){return Ja(n)===Ja(e)}function el(n,e){return De(e)?e.findIndex(t=>Qa(t,n)):Ie(e)&&Qa(e,n)?0:-1}const Pu=n=>n[0]==="_"||n==="$stable",Sa=n=>De(n)?n.map(Qt):[Qt(n)],gd=(n,e,t)=>{if(e._n)return e;const i=zh((...r)=>Sa(e(...r)),t);return i._c=!1,i},Ru=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Pu(r))continue;const s=n[r];if(Ie(s))e[r]=gd(r,s,i);else if(s!=null){const a=Sa(s);e[r]=()=>a}}},Du=(n,e)=>{const t=Sa(e);n.slots.default=()=>t},_d=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=He(e),gs(e,"_",t)):Ru(e,n.slots={})}else n.slots={},e&&Du(n,e);gs(n.slots,Ds,1)},xd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ht(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Ru(e,r)),a=e}else e&&(Du(n,e),a={default:1});if(s)for(const o in r)!Pu(o)&&!(o in a)&&delete r[o]};function Iu(){return{app:null,config:{isNativeTag:Bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vd=0;function Md(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!Qe(r)&&(r=null);const s=Iu(),a=new Set;let o=!1;const l=s.app={_uid:vd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Ft(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Aa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Vo(n,e,t,i,r=!1){if(De(n)){n.forEach((h,m)=>Vo(h,e&&(De(e)?e[m]:e),t,i,r));return}if(hs(i)&&!r)return;const s=i.shapeFlag&4?Aa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===je?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Be(f,c)&&(f[c]=null)):at(c)&&(c.value=null)),Ie(l))zn(l,o,12,[a,u]);else{const h=dt(l),m=at(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?De(p)&&ca(p,s):De(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Be(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Be(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,xt(g,t)):g()}}}const xt=Wh;function yd(n){return bd(n)}function bd(n,e){const t=$f();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=jt,cloneNode:g,insertStaticContent:p}=n,d=(w,L,G,Z=null,Q=null,le=null,ce=!1,fe=null,pe=!!L.dynamicChildren)=>{if(w===L)return;w&&!ti(w,L)&&(Z=oe(w),ae(w,Q,le,!0),w=null),L.patchFlag===-2&&(pe=!1,L.dynamicChildren=null);const{type:v,ref:x,shapeFlag:D}=L;switch(v){case wa:_(w,L,G,Z);break;case xn:y(w,L,G,Z);break;case Xs:w==null&&A(L,G,Z,ce);break;case Jt:q(w,L,G,Z,Q,le,ce,fe,pe);break;default:D&1?P(w,L,G,Z,Q,le,ce,fe,pe):D&6?O(w,L,G,Z,Q,le,ce,fe,pe):(D&64||D&128)&&v.process(w,L,G,Z,Q,le,ce,fe,pe,me)}x!=null&&Q&&Vo(x,w&&w.ref,le,L||w,!L)},_=(w,L,G,Z)=>{if(w==null)i(L.el=o(L.children),G,Z);else{const Q=L.el=w.el;L.children!==w.children&&c(Q,L.children)}},y=(w,L,G,Z)=>{w==null?i(L.el=l(L.children||""),G,Z):L.el=w.el},A=(w,L,G,Z)=>{[w.el,w.anchor]=p(w.children,L,G,Z,w.el,w.anchor)},E=({el:w,anchor:L},G,Z)=>{let Q;for(;w&&w!==L;)Q=h(w),i(w,G,Z),w=Q;i(L,G,Z)},S=({el:w,anchor:L})=>{let G;for(;w&&w!==L;)G=h(w),r(w),w=G;r(L)},P=(w,L,G,Z,Q,le,ce,fe,pe)=>{ce=ce||L.type==="svg",w==null?B(L,G,Z,Q,le,ce,fe,pe):F(w,L,Q,le,ce,fe,pe)},B=(w,L,G,Z,Q,le,ce,fe)=>{let pe,v;const{type:x,props:D,shapeFlag:H,transition:Y,patchFlag:se,dirs:Se}=w;if(w.el&&g!==void 0&&se===-1)pe=w.el=g(w.el);else{if(pe=w.el=a(w.type,le,D&&D.is,D),H&8?u(pe,w.children):H&16&&C(w.children,pe,null,Z,Q,le&&x!=="foreignObject",ce,fe),Se&&Xn(w,null,Z,"created"),D){for(const j in D)j!=="value"&&!cs(j)&&s(pe,j,null,D[j],le,w.children,Z,Q,re);"value"in D&&s(pe,"value",null,D.value),(v=D.onVnodeBeforeMount)&&Zt(v,Z,w)}M(pe,w,w.scopeId,ce,Z)}Se&&Xn(w,null,Z,"beforeMount");const b=(!Q||Q&&!Q.pendingBranch)&&Y&&!Y.persisted;b&&Y.beforeEnter(pe),i(pe,L,G),((v=D&&D.onVnodeMounted)||b||Se)&&xt(()=>{v&&Zt(v,Z,w),b&&Y.enter(pe),Se&&Xn(w,null,Z,"mounted")},Q)},M=(w,L,G,Z,Q)=>{if(G&&m(w,G),Z)for(let le=0;le<Z.length;le++)m(w,Z[le]);if(Q){let le=Q.subTree;if(L===le){const ce=Q.vnode;M(w,ce,ce.scopeId,ce.slotScopeIds,Q.parent)}}},C=(w,L,G,Z,Q,le,ce,fe,pe=0)=>{for(let v=pe;v<w.length;v++){const x=w[v]=fe?Fn(w[v]):Qt(w[v]);d(null,x,L,G,Z,Q,le,ce,fe)}},F=(w,L,G,Z,Q,le,ce)=>{const fe=L.el=w.el;let{patchFlag:pe,dynamicChildren:v,dirs:x}=L;pe|=w.patchFlag&16;const D=w.props||je,H=L.props||je;let Y;G&&jn(G,!1),(Y=H.onVnodeBeforeUpdate)&&Zt(Y,G,L,w),x&&Xn(L,w,G,"beforeUpdate"),G&&jn(G,!0);const se=Q&&L.type!=="foreignObject";if(v?ne(w.dynamicChildren,v,fe,G,Z,se,le):ce||N(w,L,fe,null,G,Z,se,le,!1),pe>0){if(pe&16)ge(fe,L,D,H,G,Z,Q);else if(pe&2&&D.class!==H.class&&s(fe,"class",null,H.class,Q),pe&4&&s(fe,"style",D.style,H.style,Q),pe&8){const Se=L.dynamicProps;for(let b=0;b<Se.length;b++){const j=Se[b],de=D[j],ve=H[j];(ve!==de||j==="value")&&s(fe,j,de,ve,Q,w.children,G,Z,re)}}pe&1&&w.children!==L.children&&u(fe,L.children)}else!ce&&v==null&&ge(fe,L,D,H,G,Z,Q);((Y=H.onVnodeUpdated)||x)&&xt(()=>{Y&&Zt(Y,G,L,w),x&&Xn(L,w,G,"updated")},Z)},ne=(w,L,G,Z,Q,le,ce)=>{for(let fe=0;fe<L.length;fe++){const pe=w[fe],v=L[fe],x=pe.el&&(pe.type===Jt||!ti(pe,v)||pe.shapeFlag&70)?f(pe.el):G;d(pe,v,x,null,Z,Q,le,ce,!0)}},ge=(w,L,G,Z,Q,le,ce)=>{if(G!==Z){for(const fe in Z){if(cs(fe))continue;const pe=Z[fe],v=G[fe];pe!==v&&fe!=="value"&&s(w,fe,v,pe,ce,L.children,Q,le,re)}if(G!==je)for(const fe in G)!cs(fe)&&!(fe in Z)&&s(w,fe,G[fe],null,ce,L.children,Q,le,re);"value"in Z&&s(w,"value",G.value,Z.value)}},q=(w,L,G,Z,Q,le,ce,fe,pe)=>{const v=L.el=w?w.el:o(""),x=L.anchor=w?w.anchor:o("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:Y}=L;Y&&(fe=fe?fe.concat(Y):Y),w==null?(i(v,G,Z),i(x,G,Z),C(L.children,G,x,Q,le,ce,fe,pe)):D>0&&D&64&&H&&w.dynamicChildren?(ne(w.dynamicChildren,H,G,Q,le,ce,fe),(L.key!=null||Q&&L===Q.subTree)&&Fu(w,L,!0)):N(w,L,G,x,Q,le,ce,fe,pe)},O=(w,L,G,Z,Q,le,ce,fe,pe)=>{L.slotScopeIds=fe,w==null?L.shapeFlag&512?Q.ctx.activate(L,G,Z,ce,pe):te(L,G,Z,Q,le,ce,pe):ie(w,L,pe)},te=(w,L,G,Z,Q,le,ce)=>{const fe=w.component=Id(w,Z,Q);if(Ps(w)&&(fe.ctx.renderer=me),Nd(fe),fe.asyncDep){if(Q&&Q.registerDep(fe,J),!w.el){const pe=fe.subTree=Ft(xn);y(null,pe,L,G)}return}J(fe,w,L,G,Q,le,ce)},ie=(w,L,G)=>{const Z=L.component=w.component;if(kh(w,L,G))if(Z.asyncDep&&!Z.asyncResolved){W(Z,L,G);return}else Z.next=L,Fh(Z.update),Z.update();else L.el=w.el,Z.vnode=L},J=(w,L,G,Z,Q,le,ce)=>{const fe=()=>{if(w.isMounted){let{next:x,bu:D,u:H,parent:Y,vnode:se}=w,Se=x,b;jn(w,!1),x?(x.el=se.el,W(w,x,ce)):x=se,D&&Hs(D),(b=x.props&&x.props.onVnodeBeforeUpdate)&&Zt(b,Y,x,se),jn(w,!0);const j=Ws(w),de=w.subTree;w.subTree=j,d(de,j,f(de.el),oe(de),w,Q,le),x.el=j.el,Se===null&&Vh(w,j.el),H&&xt(H,Q),(b=x.props&&x.props.onVnodeUpdated)&&xt(()=>Zt(b,Y,x,se),Q)}else{let x;const{el:D,props:H}=L,{bm:Y,m:se,parent:Se}=w,b=hs(L);if(jn(w,!1),Y&&Hs(Y),!b&&(x=H&&H.onVnodeBeforeMount)&&Zt(x,Se,L),jn(w,!0),D&&_e){const j=()=>{w.subTree=Ws(w),_e(D,w.subTree,w,Q,null)};b?L.type.__asyncLoader().then(()=>!w.isUnmounted&&j()):j()}else{const j=w.subTree=Ws(w);d(null,j,G,Z,w,Q,le),L.el=j.el}if(se&&xt(se,Q),!b&&(x=H&&H.onVnodeMounted)){const j=L;xt(()=>Zt(x,Se,j),Q)}(L.shapeFlag&256||Se&&hs(Se.vnode)&&Se.vnode.shapeFlag&256)&&w.a&&xt(w.a,Q),w.isMounted=!0,L=G=Z=null}},pe=w.effect=new da(fe,()=>Ma(v),w.scope),v=w.update=()=>pe.run();v.id=w.uid,jn(w,!0),v()},W=(w,L,G)=>{L.component=w;const Z=w.vnode.props;w.vnode=L,w.next=null,md(w,L.props,Z,G),xd(w,L.children,G),rr(),Wa(),sr()},N=(w,L,G,Z,Q,le,ce,fe,pe=!1)=>{const v=w&&w.children,x=w?w.shapeFlag:0,D=L.children,{patchFlag:H,shapeFlag:Y}=L;if(H>0){if(H&128){he(v,D,G,Z,Q,le,ce,fe,pe);return}else if(H&256){X(v,D,G,Z,Q,le,ce,fe,pe);return}}Y&8?(x&16&&re(v,Q,le),D!==v&&u(G,D)):x&16?Y&16?he(v,D,G,Z,Q,le,ce,fe,pe):re(v,Q,le,!0):(x&8&&u(G,""),Y&16&&C(D,G,Z,Q,le,ce,fe,pe))},X=(w,L,G,Z,Q,le,ce,fe,pe)=>{w=w||Vi,L=L||Vi;const v=w.length,x=L.length,D=Math.min(v,x);let H;for(H=0;H<D;H++){const Y=L[H]=pe?Fn(L[H]):Qt(L[H]);d(w[H],Y,G,null,Q,le,ce,fe,pe)}v>x?re(w,Q,le,!0,!1,D):C(L,G,Z,Q,le,ce,fe,pe,D)},he=(w,L,G,Z,Q,le,ce,fe,pe)=>{let v=0;const x=L.length;let D=w.length-1,H=x-1;for(;v<=D&&v<=H;){const Y=w[v],se=L[v]=pe?Fn(L[v]):Qt(L[v]);if(ti(Y,se))d(Y,se,G,null,Q,le,ce,fe,pe);else break;v++}for(;v<=D&&v<=H;){const Y=w[D],se=L[H]=pe?Fn(L[H]):Qt(L[H]);if(ti(Y,se))d(Y,se,G,null,Q,le,ce,fe,pe);else break;D--,H--}if(v>D){if(v<=H){const Y=H+1,se=Y<x?L[Y].el:Z;for(;v<=H;)d(null,L[v]=pe?Fn(L[v]):Qt(L[v]),G,se,Q,le,ce,fe,pe),v++}}else if(v>H)for(;v<=D;)ae(w[v],Q,le,!0),v++;else{const Y=v,se=v,Se=new Map;for(v=se;v<=H;v++){const Ne=L[v]=pe?Fn(L[v]):Qt(L[v]);Ne.key!=null&&Se.set(Ne.key,v)}let b,j=0;const de=H-se+1;let ve=!1,ye=0;const Ce=new Array(de);for(v=0;v<de;v++)Ce[v]=0;for(v=Y;v<=D;v++){const Ne=w[v];if(j>=de){ae(Ne,Q,le,!0);continue}let R;if(Ne.key!=null)R=Se.get(Ne.key);else for(b=se;b<=H;b++)if(Ce[b-se]===0&&ti(Ne,L[b])){R=b;break}R===void 0?ae(Ne,Q,le,!0):(Ce[R-se]=v+1,R>=ye?ye=R:ve=!0,d(Ne,L[R],G,null,Q,le,ce,fe,pe),j++)}const Fe=ve?Sd(Ce):Vi;for(b=Fe.length-1,v=de-1;v>=0;v--){const Ne=se+v,R=L[Ne],xe=Ne+1<x?L[Ne+1].el:Z;Ce[v]===0?d(null,R,G,xe,Q,le,ce,fe,pe):ve&&(b<0||v!==Fe[b]?ue(R,G,xe,2):b--)}}},ue=(w,L,G,Z,Q=null)=>{const{el:le,type:ce,transition:fe,children:pe,shapeFlag:v}=w;if(v&6){ue(w.component.subTree,L,G,Z);return}if(v&128){w.suspense.move(L,G,Z);return}if(v&64){ce.move(w,L,G,me);return}if(ce===Jt){i(le,L,G);for(let D=0;D<pe.length;D++)ue(pe[D],L,G,Z);i(w.anchor,L,G);return}if(ce===Xs){E(w,L,G);return}if(Z!==2&&v&1&&fe)if(Z===0)fe.beforeEnter(le),i(le,L,G),xt(()=>fe.enter(le),Q);else{const{leave:D,delayLeave:H,afterLeave:Y}=fe,se=()=>i(le,L,G),Se=()=>{D(le,()=>{se(),Y&&Y()})};H?H(le,se,Se):Se()}else i(le,L,G)},ae=(w,L,G,Z=!1,Q=!1)=>{const{type:le,props:ce,ref:fe,children:pe,dynamicChildren:v,shapeFlag:x,patchFlag:D,dirs:H}=w;if(fe!=null&&Vo(fe,null,G,w,!0),x&256){L.ctx.deactivate(w);return}const Y=x&1&&H,se=!hs(w);let Se;if(se&&(Se=ce&&ce.onVnodeBeforeUnmount)&&Zt(Se,L,w),x&6)I(w.component,G,Z);else{if(x&128){w.suspense.unmount(G,Z);return}Y&&Xn(w,null,L,"beforeUnmount"),x&64?w.type.remove(w,L,G,Q,me,Z):v&&(le!==Jt||D>0&&D&64)?re(v,L,G,!1,!0):(le===Jt&&D&384||!Q&&x&16)&&re(pe,L,G),Z&&Te(w)}(se&&(Se=ce&&ce.onVnodeUnmounted)||Y)&&xt(()=>{Se&&Zt(Se,L,w),Y&&Xn(w,null,L,"unmounted")},G)},Te=w=>{const{type:L,el:G,anchor:Z,transition:Q}=w;if(L===Jt){k(G,Z);return}if(L===Xs){S(w);return}const le=()=>{r(G),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(w.shapeFlag&1&&Q&&!Q.persisted){const{leave:ce,delayLeave:fe}=Q,pe=()=>ce(G,le);fe?fe(w.el,le,pe):pe()}else le()},k=(w,L)=>{let G;for(;w!==L;)G=h(w),r(w),w=G;r(L)},I=(w,L,G)=>{const{bum:Z,scope:Q,update:le,subTree:ce,um:fe}=w;Z&&Hs(Z),Q.stop(),le&&(le.active=!1,ae(ce,w,L,G)),fe&&xt(fe,L),xt(()=>{w.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},re=(w,L,G,Z=!1,Q=!1,le=0)=>{for(let ce=le;ce<w.length;ce++)ae(w[ce],L,G,Z,Q)},oe=w=>w.shapeFlag&6?oe(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),be=(w,L,G)=>{w==null?L._vnode&&ae(L._vnode,null,null,!0):d(L._vnode||null,w,L,null,null,null,G),Wa(),mu(),L._vnode=w},me={p:d,um:ae,m:ue,r:Te,mt:te,mc:C,pc:N,pbc:ne,n:oe,o:n};let Ee,_e;return e&&([Ee,_e]=e(me)),{render:be,hydrate:Ee,createApp:Md(be,Ee)}}function jn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Fu(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Fn(r[s]),o.el=a.el),t||Fu(a,o))}}function Sd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const wd=n=>n.__isTeleport,Jt=Symbol(void 0),wa=Symbol(void 0),xn=Symbol(void 0),Xs=Symbol(void 0),gr=[];let Xt=null;function Ea(n=!1){gr.push(Xt=n?null:[])}function Ed(){gr.pop(),Xt=gr[gr.length-1]||null}let Sr=1;function tl(n){Sr+=n}function Nu(n){return n.dynamicChildren=Sr>0?Xt||Vi:null,Ed(),Sr>0&&Xt&&Xt.push(n),n}function Td(n,e,t,i,r,s){return Nu(zu(n,e,t,i,r,s,!0))}function Ou(n,e,t,i,r){return Nu(Ft(n,e,t,i,r,!0))}function Ho(n){return n?n.__v_isVNode===!0:!1}function ti(n,e){return n.type===e.type&&n.key===e.key}const Ds="__vInternal",Uu=({key:n})=>n!=null?n:null,ds=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||at(n)||Ie(n)?{i:qt,r:n,k:e,f:!!t}:n:null;function zu(n,e=null,t=null,i=0,r=null,s=n===Jt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Uu(e),ref:e&&ds(e),scopeId:xu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(Ta(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Sr>0&&!a&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const Ft=Ad;function Ad(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===od)&&(n=xn),Ho(n)){const o=Vn(n,e,!0);return t&&Ta(o,t),Sr>0&&!s&&Xt&&(o.shapeFlag&6?Xt[Xt.indexOf(n)]=o:Xt.push(o)),o.patchFlag|=-2,o}if(Gd(n)&&(n=n.__vccOpts),e){e=Cd(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=aa(o)),Qe(l)&&(ru(l)&&!De(l)&&(l=ht({},l)),e.style=oa(l))}const a=dt(n)?1:Hh(n)?128:wd(n)?64:Qe(n)?4:Ie(n)?2:0;return zu(n,e,t,i,r,a,s,!0)}function Cd(n){return n?ru(n)||Ds in n?ht({},n):n:null}function Vn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Pd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Uu(o),ref:e&&e.ref?t&&r?De(r)?r.concat(ds(e)):[r,ds(e)]:ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vn(n.ssContent),ssFallback:n.ssFallback&&Vn(n.ssFallback),el:n.el,anchor:n.anchor}}function Ld(n=" ",e=0){return Ft(wa,null,n,e)}function Qt(n){return n==null||typeof n=="boolean"?Ft(xn):De(n)?Ft(Jt,null,n.slice()):typeof n=="object"?Fn(n):Ft(wa,null,String(n))}function Fn(n){return n.el===null||n.memo?n:Vn(n)}function Ta(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ta(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ds in e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[Ld(e)]):t=8);n.children=e,n.shapeFlag|=t}function Pd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=aa([e.class,i.class]));else if(r==="style")e.style=oa([e.style,i.style]);else if(bs(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Zt(n,e,t,i=null){Ot(n,e,7,[t,i])}const Rd=Iu();let Dd=0;function Id(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rd,s={uid:Dd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lu(i,r),emitsOptions:_u(i,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:i.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Uh.bind(null,s),n.ce&&n.ce(s),s}let st=null;const Fd=()=>st||qt,$i=n=>{st=n,n.scope.on()},li=()=>{st&&st.scope.off(),st=null};function Bu(n){return n.vnode.shapeFlag&4}let wr=!1;function Nd(n,e=!1){wr=e;const{props:t,children:i}=n.vnode,r=Bu(n);pd(n,t,r,e),_d(n,i);const s=r?Od(n,e):void 0;return wr=!1,s}function Od(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=su(new Proxy(n.ctx,ld));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?zd(n):null;$i(n),rr();const s=zn(i,n,0,[n.props,r]);if(sr(),li(),Xc(s)){if(s.then(li,li),e)return s.then(a=>{nl(n,a,e)}).catch(a=>{As(a,n,0)});n.asyncDep=s}else nl(n,s,e)}else Gu(n,e)}function nl(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=uu(e)),Gu(n,t)}let il;function Gu(n,e,t){const i=n.type;if(!n.render){if(!e&&il&&!i.render){const r=i.template||ba(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ht(ht({isCustomElement:s,delimiters:o},a),l);i.render=il(r,c)}}n.render=i.render||jt}$i(n),rr(),cd(n),sr(),li()}function Ud(n){return new Proxy(n.attrs,{get(e,t){return Tt(n,"get","$attrs"),e[t]}})}function zd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Ud(n))},slots:n.slots,emit:n.emit,expose:e}}function Aa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(uu(su(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vs)return vs[t](n)}}))}function Bd(n,e=!0){return Ie(n)?n.displayName||n.name:n.name||e&&n.__name}function Gd(n){return Ie(n)&&"__vccOpts"in n}const It=(n,e)=>Rh(n,e,wr);function ku(n,e,t){const i=arguments.length;return i===2?Qe(e)&&!De(e)?Ho(e)?Ft(n,null,[e]):Ft(n,e):Ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ho(t)&&(t=[t]),Ft(n,e,t))}const kd="3.2.39",Vd="http://www.w3.org/2000/svg",ni=typeof document<"u"?document:null,rl=ni&&ni.createElement("template"),Hd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ni.createElementNS(Vd,n):ni.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{rl.innerHTML=i?`<svg>${n}</svg>`:n;const o=rl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Wd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function qd(n,e,t){const i=n.style,r=dt(t);if(t&&!r){for(const s in t)Wo(i,s,t[s]);if(e&&!dt(e))for(const s in e)t[s]==null&&Wo(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const sl=/\s*!important$/;function Wo(n,e,t){if(De(t))t.forEach(i=>Wo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xd(n,e);sl.test(t)?n.setProperty(ir(i),t.replace(sl,""),"important"):n[i]=t}}const ol=["Webkit","Moz","ms"],js={};function Xd(n,e){const t=js[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return js[e]=i;i=Es(i);for(let r=0;r<ol.length;r++){const s=ol[r]+i;if(s in n)return js[e]=s}return e}const al="http://www.w3.org/1999/xlink";function jd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(al,e.slice(6,e.length)):n.setAttributeNS(al,e,t);else{const s=Nf(e);t==null||s&&!qc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Yd(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=qc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Vu,$d]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let qo=0;const Zd=Promise.resolve(),Kd=()=>{qo=0},Jd=()=>qo||(Zd.then(Kd),qo=Vu());function Qd(n,e,t,i){n.addEventListener(e,t,i)}function ep(n,e,t,i){n.removeEventListener(e,t,i)}function tp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=np(e);if(i){const c=s[e]=ip(i,r);Qd(n,o,c,l)}else a&&(ep(n,o,a,l),s[e]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function np(n){let e;if(ll.test(n)){e={};let i;for(;i=n.match(ll);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ir(n.slice(2)),e]}function ip(n,e){const t=i=>{const r=i.timeStamp||Vu();($d||r>=t.attached-1)&&Ot(rp(i,t.value),e,5,[i])};return t.value=n,t.attached=Jd(),t}function rp(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cl=/^on[a-z]/,sp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Wd(n,i,r):e==="style"?qd(n,t,i):bs(e)?la(e)||tp(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(n,e,i,r))?Yd(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jd(n,e,i,r))};function op(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&cl.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||cl.test(e)&&dt(t)?!1:e in n}const ap={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yh.props;const lp=ht({patchProp:sp},Hd);let ul;function cp(){return ul||(ul=yd(lp))}const up=(...n)=>{const e=cp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fp(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function fp(n){return dt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ui=typeof window<"u";function hp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function Ys(n,e){const t={};for(const i in e){const r=e[i];t[i]=Yt(r)?r.map(n):n(r)}return t}const _r=()=>{},Yt=Array.isArray,dp=/\/$/,pp=n=>n.replace(dp,"");function $s(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=xp(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function mp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function fl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function gp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Zi(e.matched[i],t.matched[r])&&Hu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Zi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Hu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!_p(n[t],e[t]))return!1;return!0}function _p(n,e){return Yt(n)?hl(n,e):Yt(e)?hl(e,n):n===e}function hl(n,e){return Yt(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function xp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Er;(function(n){n.pop="pop",n.push="push"})(Er||(Er={}));var xr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(xr||(xr={}));function vp(n){if(!n)if(Ui){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),pp(n)}const Mp=/^[^#]+#/;function yp(n,e){return n.replace(Mp,"#")+e}function bp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Is=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sp(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=bp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dl(n,e){return(history.state?history.state.position-e:-1)+n}const Xo=new Map;function wp(n,e){Xo.set(n,e)}function Ep(n){const e=Xo.get(n);return Xo.delete(n),e}let Tp=()=>location.protocol+"//"+location.host;function Wu(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),fl(l,"")}return fl(t,n)+i+r}function Ap(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Wu(n,location),g=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===g){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:d,type:Er.pop,direction:d?d>0?xr.forward:xr.back:xr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Xe({},h.state,{scroll:Is()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function pl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Is():null}}function Cp(n){const{history:e,location:t}=window,i={value:Wu(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Tp()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Xe({},e.state,pl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Xe({},r.value,e.state,{forward:l,scroll:Is()});s(u.current,u,!0);const f=Xe({},pl(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Lp(n){n=vp(n);const e=Cp(n),t=Ap(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Xe({location:"",base:n,go:i,createHref:yp.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Pp(n){return typeof n=="string"||n&&typeof n=="object"}function qu(n){return typeof n=="string"||typeof n=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xu=Symbol("");var ml;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ml||(ml={}));function Ki(n,e){return Xe(new Error,{type:n,[Xu]:!0},e)}function ln(n,e){return n instanceof Error&&Xu in n&&(e==null||!!(n.type&e))}const gl="[^/]+?",Rp={sensitive:!1,strict:!1,start:!0,end:!0},Dp=/[.+*?^${}()[\]/\\]/g;function Ip(n,e){const t=Xe({},Rp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Dp,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:d,regexp:_}=h;s.push({name:g,repeatable:p,optional:d});const y=_||gl;if(y!==gl){m+=10;try{new RegExp(`(${y})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let A=p?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(A=d&&c.length<2?`(?:/${A})`:"/"+A),d&&(A+="?"),r+=A,m+=20,d&&(m+=-8),p&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:d}=m,_=g in c?c[g]:"";if(Yt(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Yt(_)?_.join("/"):_;if(!y)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Fp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Np(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Fp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(_l(i))return 1;if(_l(r))return-1}return r.length-i.length}function _l(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Op={type:0,value:""},Up=/[a-zA-Z0-9_]/;function zp(n){if(!n)return[[]];if(n==="/")return[[Op]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Up.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Bp(n,e,t){const i=Ip(zp(n.path),t),r=Xe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Gp(n,e){const t=[],i=new Map;e=Ml({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=kp(u);g.aliasOf=h&&h.record;const p=Ml(e,u),d=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)d.push(Xe({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let _,y;for(const A of d){const{path:E}=A;if(f&&E[0]!=="/"){const S=f.record.path,P=S[S.length-1]==="/"?"":"/";A.path=f.record.path+(E&&P+E)}if(_=Bp(A,f,p),h?h.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),m&&u.name&&!vl(_)&&a(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)s(S[P],_,h&&h.children[P])}h=h||_,l(_)}return y?()=>{a(y)}:_r}function a(u){if(qu(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&Np(u,t[f])>=0&&(u.record.path!==t[f].record.path||!ju(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!vl(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Ki(1,{location:u});p=h.record.name,m=Xe(xl(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&xl(u.params,h.keys.map(y=>y.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(y=>y.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw Ki(1,{location:u,currentLocation:f});p=h.record.name,m=Xe({},f.params,u.params),g=h.stringify(m)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:d,meta:Hp(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function xl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function kp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Vp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Vp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function vl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Hp(n){return n.reduce((e,t)=>Xe(e,t.meta),{})}function Ml(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ju(n,e){return e.children.some(t=>t===n||ju(n,t))}const Yu=/#/g,Wp=/&/g,qp=/\//g,Xp=/=/g,jp=/\?/g,$u=/\+/g,Yp=/%5B/g,$p=/%5D/g,Zu=/%5E/g,Zp=/%60/g,Ku=/%7B/g,Kp=/%7C/g,Ju=/%7D/g,Jp=/%20/g;function Ca(n){return encodeURI(""+n).replace(Kp,"|").replace(Yp,"[").replace($p,"]")}function Qp(n){return Ca(n).replace(Ku,"{").replace(Ju,"}").replace(Zu,"^")}function jo(n){return Ca(n).replace($u,"%2B").replace(Jp,"+").replace(Yu,"%23").replace(Wp,"%26").replace(Zp,"`").replace(Ku,"{").replace(Ju,"}").replace(Zu,"^")}function em(n){return jo(n).replace(Xp,"%3D")}function tm(n){return Ca(n).replace(Yu,"%23").replace(jp,"%3F")}function nm(n){return n==null?"":tm(n).replace(qp,"%2F")}function ys(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function im(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace($u," "),a=s.indexOf("="),o=ys(a<0?s:s.slice(0,a)),l=a<0?null:ys(s.slice(a+1));if(o in e){let c=e[o];Yt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function yl(n){let e="";for(let t in n){const i=n[t];if(t=em(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Yt(i)?i.map(s=>s&&jo(s)):[i&&jo(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function rm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Yt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const sm=Symbol(""),bl=Symbol(""),La=Symbol(""),Qu=Symbol(""),Yo=Symbol("");function lr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Nn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Ki(4,{from:t,to:e})):f instanceof Error?o(f):Pp(f)?o(Ki(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Zs(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(om(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Nn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=hp(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Nn(h,t,i,s,a)()}))}}return r}function om(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Sl(n){const e=Bn(La),t=Bn(Qu),i=It(()=>e.resolve(Wi(n.to))),r=It(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Zi.bind(null,u));if(h>-1)return h;const m=wl(l[c-2]);return c>1&&wl(u)===m&&f[f.length-1].path!==m?f.findIndex(Zi.bind(null,l[c-2])):h}),s=It(()=>r.value>-1&&um(t.params,i.value.params)),a=It(()=>r.value>-1&&r.value===t.matched.length-1&&Hu(t.params,i.value.params));function o(l={}){return cm(l)?e[Wi(n.replace)?"replace":"push"](Wi(n.to)).catch(_r):Promise.resolve()}return{route:i,href:It(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const am=Ls({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sl,setup(n,{slots:e}){const t=Cr(Sl(n)),{options:i}=Bn(La),r=It(()=>({[El(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[El(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:ku("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),lm=am;function cm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function um(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Yt(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function wl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const El=(n,e,t)=>n!=null?n:e!=null?e:t,fm=Ls({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Bn(Yo),r=It(()=>n.route||i.value),s=Bn(bl,0),a=It(()=>{let c=Wi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=It(()=>r.value.matched[a.value]);us(bl,It(()=>a.value+1)),us(sm,o),us(Yo,r);const l=lu();return fs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Zi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Tl(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=ku(h,Xe({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Tl(t.default,{Component:d,route:c})||d}}});function Tl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const hm=fm;function dm(n){const e=Gp(n.routes,n),t=n.parseQuery||im,i=n.stringifyQuery||yl,r=n.history,s=lr(),a=lr(),o=lr(),l=wh(Tn);let c=Tn;Ui&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ys.bind(null,k=>""+k),f=Ys.bind(null,nm),h=Ys.bind(null,ys);function m(k,I){let re,oe;return qu(k)?(re=e.getRecordMatcher(k),oe=I):oe=k,e.addRoute(oe,re)}function g(k){const I=e.getRecordMatcher(k);I&&e.removeRoute(I)}function p(){return e.getRoutes().map(k=>k.record)}function d(k){return!!e.getRecordMatcher(k)}function _(k,I){if(I=Xe({},I||l.value),typeof k=="string"){const _e=$s(t,k,I.path),w=e.resolve({path:_e.path},I),L=r.createHref(_e.fullPath);return Xe(_e,w,{params:h(w.params),hash:ys(_e.hash),redirectedFrom:void 0,href:L})}let re;if("path"in k)re=Xe({},k,{path:$s(t,k.path,I.path).path});else{const _e=Xe({},k.params);for(const w in _e)_e[w]==null&&delete _e[w];re=Xe({},k,{params:f(k.params)}),I.params=f(I.params)}const oe=e.resolve(re,I),be=k.hash||"";oe.params=u(h(oe.params));const me=mp(i,Xe({},k,{hash:Qp(be),path:oe.path})),Ee=r.createHref(me);return Xe({fullPath:me,hash:be,query:i===yl?rm(k.query):k.query||{}},oe,{redirectedFrom:void 0,href:Ee})}function y(k){return typeof k=="string"?$s(t,k,l.value.path):Xe({},k)}function A(k,I){if(c!==k)return Ki(8,{from:I,to:k})}function E(k){return B(k)}function S(k){return E(Xe(y(k),{replace:!0}))}function P(k){const I=k.matched[k.matched.length-1];if(I&&I.redirect){const{redirect:re}=I;let oe=typeof re=="function"?re(k):re;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=y(oe):{path:oe},oe.params={}),Xe({query:k.query,hash:k.hash,params:"path"in oe?{}:k.params},oe)}}function B(k,I){const re=c=_(k),oe=l.value,be=k.state,me=k.force,Ee=k.replace===!0,_e=P(re);if(_e)return B(Xe(y(_e),{state:typeof _e=="object"?Xe({},be,_e.state):be,force:me,replace:Ee}),I||re);const w=re;w.redirectedFrom=I;let L;return!me&&gp(i,oe,re)&&(L=Ki(16,{to:w,from:oe}),X(oe,oe,!0,!1)),(L?Promise.resolve(L):C(w,oe)).catch(G=>ln(G)?ln(G,2)?G:N(G):J(G,w,oe)).then(G=>{if(G){if(ln(G,2))return B(Xe({replace:Ee},y(G.to),{state:typeof G.to=="object"?Xe({},be,G.to.state):be,force:me}),I||w)}else G=ne(w,oe,!0,Ee,be);return F(w,oe,G),G})}function M(k,I){const re=A(k,I);return re?Promise.reject(re):Promise.resolve()}function C(k,I){let re;const[oe,be,me]=pm(k,I);re=Zs(oe.reverse(),"beforeRouteLeave",k,I);for(const _e of oe)_e.leaveGuards.forEach(w=>{re.push(Nn(w,k,I))});const Ee=M.bind(null,k,I);return re.push(Ee),Mi(re).then(()=>{re=[];for(const _e of s.list())re.push(Nn(_e,k,I));return re.push(Ee),Mi(re)}).then(()=>{re=Zs(be,"beforeRouteUpdate",k,I);for(const _e of be)_e.updateGuards.forEach(w=>{re.push(Nn(w,k,I))});return re.push(Ee),Mi(re)}).then(()=>{re=[];for(const _e of k.matched)if(_e.beforeEnter&&!I.matched.includes(_e))if(Yt(_e.beforeEnter))for(const w of _e.beforeEnter)re.push(Nn(w,k,I));else re.push(Nn(_e.beforeEnter,k,I));return re.push(Ee),Mi(re)}).then(()=>(k.matched.forEach(_e=>_e.enterCallbacks={}),re=Zs(me,"beforeRouteEnter",k,I),re.push(Ee),Mi(re))).then(()=>{re=[];for(const _e of a.list())re.push(Nn(_e,k,I));return re.push(Ee),Mi(re)}).catch(_e=>ln(_e,8)?_e:Promise.reject(_e))}function F(k,I,re){for(const oe of o.list())oe(k,I,re)}function ne(k,I,re,oe,be){const me=A(k,I);if(me)return me;const Ee=I===Tn,_e=Ui?history.state:{};re&&(oe||Ee?r.replace(k.fullPath,Xe({scroll:Ee&&_e&&_e.scroll},be)):r.push(k.fullPath,be)),l.value=k,X(k,I,re,Ee),N()}let ge;function q(){ge||(ge=r.listen((k,I,re)=>{if(!Te.listening)return;const oe=_(k),be=P(oe);if(be){B(Xe(be,{replace:!0}),oe).catch(_r);return}c=oe;const me=l.value;Ui&&wp(dl(me.fullPath,re.delta),Is()),C(oe,me).catch(Ee=>ln(Ee,12)?Ee:ln(Ee,2)?(B(Ee.to,oe).then(_e=>{ln(_e,20)&&!re.delta&&re.type===Er.pop&&r.go(-1,!1)}).catch(_r),Promise.reject()):(re.delta&&r.go(-re.delta,!1),J(Ee,oe,me))).then(Ee=>{Ee=Ee||ne(oe,me,!1),Ee&&(re.delta&&!ln(Ee,8)?r.go(-re.delta,!1):re.type===Er.pop&&ln(Ee,20)&&r.go(-1,!1)),F(oe,me,Ee)}).catch(_r)}))}let O=lr(),te=lr(),ie;function J(k,I,re){N(k);const oe=te.list();return oe.length?oe.forEach(be=>be(k,I,re)):console.error(k),Promise.reject(k)}function W(){return ie&&l.value!==Tn?Promise.resolve():new Promise((k,I)=>{O.add([k,I])})}function N(k){return ie||(ie=!k,q(),O.list().forEach(([I,re])=>k?re(k):I()),O.reset()),k}function X(k,I,re,oe){const{scrollBehavior:be}=n;if(!Ui||!be)return Promise.resolve();const me=!re&&Ep(dl(k.fullPath,0))||(oe||!re)&&history.state&&history.state.scroll||null;return du().then(()=>be(k,I,me)).then(Ee=>Ee&&Sp(Ee)).catch(Ee=>J(Ee,k,I))}const he=k=>r.go(k);let ue;const ae=new Set,Te={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:p,resolve:_,options:n,push:E,replace:S,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:W,install(k){const I=this;k.component("RouterLink",lm),k.component("RouterView",hm),k.config.globalProperties.$router=I,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Wi(l)}),Ui&&!ue&&l.value===Tn&&(ue=!0,E(r.location).catch(be=>{}));const re={};for(const be in Tn)re[be]=It(()=>l.value[be]);k.provide(La,I),k.provide(Qu,Cr(re)),k.provide(Yo,l);const oe=k.unmount;ae.add(k),k.unmount=function(){ae.delete(k),ae.size<1&&(c=Tn,ge&&ge(),ge=null,l.value=Tn,ue=!1,ie=!1),oe()}}};return Te}function Mi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function pm(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Zi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Zi(c,l))||r.push(l))}return[t,i,r]}const mm="/solar/assets/sun.c2fb3ff1.jpg",gm={name:"sun",img:mm,geometry:{radius:500,widthSegments:20,heightSegments:20},self:{dir:0,cycle:24.47*23.93}},_m="/solar/assets/mercury.ae66c484.jpg",xm={name:"mercury",img:_m,geometry:{radius:25,widthSegments:20,heightSegments:20},self:{dir:.034,cycle:58.65*23.93},position:{dir:"x",distance:550},revolution:{dir:"y",cycle:88}},vm="/solar/assets/venus.1e0e08be.jpg",Mm={name:"venus",img:vm,geometry:{radius:95,widthSegments:20,heightSegments:20},self:{dir:3.39458,cycle:-243*23.93},position:{dir:"x",distance:700},revolution:{dir:"y",cycle:224.701}},ym="/solar/assets/earth.ced5955f.jpg",$o={name:"earth",img:ym,geometry:{radius:100,widthSegments:20,heightSegments:20},self:{dir:23.44,cycle:23.93},position:{dir:"x",distance:950},revolution:{dir:"y",cycle:365}},bm="/solar/assets/mars.8fc78106.jpg",Sm={name:"mars",img:bm,geometry:{radius:60,widthSegments:20,heightSegments:20},self:{dir:25.19,cycle:24.622833},position:{dir:"x",distance:1200},revolution:{dir:"y",cycle:687}},wm="/solar/assets/jupiter.c4319905.jpg",Em={name:"jupiter",img:wm,geometry:{radius:150,widthSegments:20,heightSegments:20},self:{dir:3.13,cycle:9.841667},position:{dir:"x",distance:1500},revolution:{dir:"y",cycle:11.8*365}},Tm="/solar/assets/saturn.34570ec3.jpg",Am={name:"saturn",img:Tm,geometry:{radius:120,widthSegments:20,heightSegments:20},self:{dir:26.7,cycle:.426*23.93},position:{dir:"x",distance:1800},revolution:{dir:"y",cycle:29.5*365}},Cm="/solar/assets/uranus.166d3f03.jpg",Lm={name:"uranus",img:Cm,geometry:{radius:85,widthSegments:20,heightSegments:20},self:{dir:97.77,cycle:17.23},position:{dir:"x",distance:2100},revolution:{dir:"y",cycle:83.747*365}},Pm="/solar/assets/neptune.db3fc038.jpg",Rm={name:"neptune",img:Pm,geometry:{radius:80,widthSegments:20,heightSegments:20},self:{dir:29.56,cycle:16.11},position:{dir:"x",distance:2400},revolution:{dir:"y",cycle:164.8*365}};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="144",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dm=0,Al=1,Im=2,ef=1,Fm=2,dr=3,Ji=0,Ut=1,On=2,Gn=0,Xi=1,Cl=2,Ll=3,Pl=4,Nm=5,zi=100,Om=101,Um=102,Rl=103,Dl=104,zm=200,Bm=201,Gm=202,km=203,tf=204,nf=205,Vm=206,Hm=207,Wm=208,qm=209,Xm=210,jm=0,Ym=1,$m=2,Zo=3,Zm=4,Km=5,Jm=6,Qm=7,rf=0,eg=1,tg=2,vn=0,ng=1,ig=2,rg=3,sg=4,og=5,sf=300,Qi=301,er=302,Ko=303,Jo=304,Fs=306,Qo=1e3,Wt=1001,ea=1002,vt=1003,Il=1004,Fl=1005,Rt=1006,ag=1007,Ns=1008,fi=1009,lg=1010,cg=1011,of=1012,ug=1013,ri=1014,si=1015,Tr=1016,fg=1017,hg=1018,ji=1020,dg=1021,pg=1022,nn=1023,mg=1024,gg=1025,ci=1026,tr=1027,_g=1028,xg=1029,vg=1030,Mg=1031,yg=1033,Ks=33776,Js=33777,Qs=33778,eo=33779,Nl=35840,Ol=35841,Ul=35842,zl=35843,bg=36196,Bl=37492,Gl=37496,kl=37808,Vl=37809,Hl=37810,Wl=37811,ql=37812,Xl=37813,jl=37814,Yl=37815,$l=37816,Zl=37817,Kl=37818,Jl=37819,Ql=37820,ec=37821,tc=36492,hi=3e3,Ke=3001,Sg=3200,wg=3201,Eg=0,Tg=1,mn="srgb",oi="srgb-linear",to=7680,Ag=519,nc=35044,ic="300 es",ta=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,rc=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Cg(n,e){return(n%e+e)%e}function io(n,e,t){return(1-t)*n+t*e}function sc(n){return(n&n-1)===0&&n!==0}function na(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],y=r[1],A=r[4],E=r[7],S=r[2],P=r[5],B=r[8];return s[0]=a*p+o*y+l*S,s[3]=a*d+o*A+l*P,s[6]=a*_+o*E+l*B,s[1]=c*p+u*y+f*S,s[4]=c*d+u*A+f*P,s[7]=c*_+u*E+f*B,s[2]=h*p+m*y+g*S,s[5]=h*d+m*A+g*P,s[8]=h*_+m*E+g*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ro={[mn]:{[oi]:ui},[oi]:{[mn]:ps}},Bt={legacyMode:!0,get workingColorSpace(){return oi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ro[e]&&ro[e][t]!==void 0){const i=ro[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Gt={h:0,s:0,l:0},kr={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=oi){return this.r=e,this.g=t,this.b=i,Bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=oi){if(e=Cg(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const i=lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Bt.fromWorkingColorSpace(Vr(this,nt),e),Mt(nt.r*255,0,255)<<16^Mt(nt.g*255,0,255)<<8^Mt(nt.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=oi){Bt.fromWorkingColorSpace(Vr(this,nt),t);const i=nt.r,r=nt.g,s=nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=oi){return Bt.fromWorkingColorSpace(Vr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=mn){return Bt.fromWorkingColorSpace(Vr(this,nt),e),e!==mn?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=i,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(kr);const i=io(Gt.h,kr.h,t),r=io(Gt.s,kr.s,t),s=io(Gt.l,kr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=lf;let Si;class cf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Ar("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uf{constructor(e=null){this.isSource=!0,this.uuid=Lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lg=0;class zt extends gi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Wt,r=Wt,s=Rt,a=Ns,o=nn,l=fi,c=1,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Lr(),this.name="",this.source=new uf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=sf;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,S=(_+1)/2,P=(u+h)/4,B=(f+p)/4,M=(g+d)/4;return A>E&&A>S?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=P/i,s=B/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=M/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=B/s,r=M/s),this.set(i,r,s,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends gi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Rt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ff extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pg extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,y=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const S=Math.sqrt(A),P=Math.atan2(S,_*y);d=Math.sin(d*P)/S,o=Math.sin(o*P)/S}const E=o*y;if(l=l*d+h*E,c=c*d+m*E,u=u*d+g*E,f=f*d+p*E,d===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new U,oc=new pi;class Pr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Yn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox),lo.applyMatrix4(e.matrixWorld),this.union(lo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Hr.subVectors(this.max,cr),wi.subVectors(e.a,cr),Ei.subVectors(e.b,cr),Ti.subVectors(e.c,cr),An.subVectors(Ei,wi),Cn.subVectors(Ti,Ei),$n.subVectors(wi,Ti);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-$n.z,$n.y,An.z,0,-An.x,Cn.z,0,-Cn.x,$n.z,0,-$n.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-$n.y,$n.x,0];return!co(t,wi,Ei,Ti,Hr)||(t=[1,0,0,0,1,0,0,0,1],!co(t,wi,Ei,Ti,Hr))?!1:(Wr.crossVectors(An,Cn),t=[Wr.x,Wr.y,Wr.z],co(t,wi,Ei,Ti,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new U,new U,new U,new U,new U,new U,new U,new U],Yn=new U,lo=new Pr,wi=new U,Ei=new U,Ti=new U,An=new U,Cn=new U,$n=new U,cr=new U,Hr=new U,Wr=new U,Zn=new U;function co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rg=new Pr,ac=new U,qr=new U,uo=new U;class Os{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(uo.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?qr.set(0,0,1).multiplyScalar(e.radius):qr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ac.copy(e.center).add(qr)),this.expandByPoint(ac.copy(e.center).sub(qr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new U,fo=new U,Xr=new U,Ln=new U,ho=new U,jr=new U,po=new U;class hf{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fo.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=Ln.dot(this.direction),l=-Ln.dot(Xr),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Xr).multiplyScalar(h).add(fo),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),jr.subVectors(i,e),po.crossVectors(ho,jr);let a=this.direction.dot(po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Ln,jr));if(l<0)return null;const c=o*this.direction.dot(ho.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dg,e,Ig)}lookAt(e,t,i){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Pn.crossVectors(i,wt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Pn.crossVectors(i,wt)),Pn.normalize(),Yr.crossVectors(wt,Pn),r[0]=Pn.x,r[4]=Yr.x,r[8]=wt.x,r[1]=Pn.y,r[5]=Yr.y,r[9]=wt.y,r[2]=Pn.z,r[6]=Yr.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],y=i[3],A=i[7],E=i[11],S=i[15],P=r[0],B=r[4],M=r[8],C=r[12],F=r[1],ne=r[5],ge=r[9],q=r[13],O=r[2],te=r[6],ie=r[10],J=r[14],W=r[3],N=r[7],X=r[11],he=r[15];return s[0]=a*P+o*F+l*O+c*W,s[4]=a*B+o*ne+l*te+c*N,s[8]=a*M+o*ge+l*ie+c*X,s[12]=a*C+o*q+l*J+c*he,s[1]=u*P+f*F+h*O+m*W,s[5]=u*B+f*ne+h*te+m*N,s[9]=u*M+f*ge+h*ie+m*X,s[13]=u*C+f*q+h*J+m*he,s[2]=g*P+p*F+d*O+_*W,s[6]=g*B+p*ne+d*te+_*N,s[10]=g*M+p*ge+d*ie+_*X,s[14]=g*C+p*q+d*J+_*he,s[3]=y*P+A*F+E*O+S*W,s[7]=y*B+A*ne+E*te+S*N,s[11]=y*M+A*ge+E*ie+S*X,s[15]=y*C+A*q+E*J+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],y=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,A=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,E=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,S=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,P=t*y+i*A+r*E+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return e[0]=y*B,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*B,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*B,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*B,e[4]=A*B,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*B,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*B,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*B,e[8]=E*B,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*B,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*B,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*B,e[12]=S*B,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*B,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*d-t*o*d)*B,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,y=l*c,A=l*u,E=l*f,S=i.x,P=i.y,B=i.z;return r[0]=(1-(p+_))*S,r[1]=(m+E)*S,r[2]=(g-A)*S,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(h+_))*P,r[6]=(d+y)*P,r[7]=0,r[8]=(g+A)*B,r[9]=(d-y)*B,r[10]=(1-(h+p))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,f=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=f,kt.elements[9]*=f,kt.elements[10]*=f,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new U,kt=new ot,Dg=new U(0,0,0),Ig=new U(1,1,1),Pn=new U,Yr=new U,wt=new U,lc=new ot,cc=new pi;class Rr{constructor(e=0,t=0,i=0,r=Rr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Rr.DefaultOrder="XYZ";Rr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fg=0;const uc=new U,Ci=new pi,fn=new ot,$r=new U,ur=new U,Ng=new U,Og=new pi,fc=new U(1,0,0),hc=new U(0,1,0),dc=new U(0,0,1),Ug={type:"added"},pc={type:"removed"};class yt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new U,t=new Rr,i=new pi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Nt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DefaultMatrixWorldAutoUpdate,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ur,$r,this.up):fn.lookAt($r,ur,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(fn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DefaultUp=new U(0,1,0);yt.DefaultMatrixAutoUpdate=!0;yt.DefaultMatrixWorldAutoUpdate=!0;const Vt=new U,hn=new U,mo=new U,dn=new U,Li=new U,Pi=new U,mc=new U,go=new U,_o=new U,xo=new U;class gn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vt.subVectors(r,t),hn.subVectors(i,t),mo.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(hn),l=Vt.dot(mo),c=hn.dot(hn),u=hn.dot(mo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l}static isFrontFacing(e,t,i,r){return Vt.subVectors(i,t),hn.subVectors(e,t),Vt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Vt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,i),Pi.subVectors(s,i),go.subVectors(e,i);const l=Li.dot(go),c=Pi.dot(go);if(l<=0&&c<=0)return t.copy(i);_o.subVectors(e,r);const u=Li.dot(_o),f=Pi.dot(_o);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Li,a);xo.subVectors(e,s);const m=Li.dot(xo),g=Pi.dot(xo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Pi,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return mc.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(mc,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zg=0;class Dr extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Xi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ra extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new U,Zr=new ze;class rn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class pf extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mf extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bg=0;const Pt=new ot,vo=new yt,Ri=new U,Et=new Pr,fr=new Pr,rt=new U;class bn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?mf:pf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Et.min,fr.min),Et.expandByPoint(rt),rt.addVectors(Et.max,fr.max),Et.expandByPoint(rt)):(Et.expandByPoint(fr.min),Et.expandByPoint(fr.max))}Et.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),rt.add(Ri)),r=Math.max(r,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new U,u[F]=new U;const f=new U,h=new U,m=new U,g=new ze,p=new ze,d=new ze,_=new U,y=new U;function A(F,ne,ge){f.fromArray(r,F*3),h.fromArray(r,ne*3),m.fromArray(r,ge*3),g.fromArray(a,F*2),p.fromArray(a,ne*2),d.fromArray(a,ge*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const q=1/(p.x*d.y-d.x*p.y);!isFinite(q)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(q),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(q),c[F].add(_),c[ne].add(_),c[ge].add(_),u[F].add(y),u[ne].add(y),u[ge].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let F=0,ne=E.length;F<ne;++F){const ge=E[F],q=ge.start,O=ge.count;for(let te=q,ie=q+O;te<ie;te+=3)A(i[te+0],i[te+1],i[te+2])}const S=new U,P=new U,B=new U,M=new U;function C(F){B.fromArray(s,F*3),M.copy(B);const ne=c[F];S.copy(ne),S.sub(B.multiplyScalar(B.dot(ne))).normalize(),P.crossVectors(M,ne);const q=P.dot(u[F])<0?-1:1;l[F*4]=S.x,l[F*4+1]=S.y,l[F*4+2]=S.z,l[F*4+3]=q}for(let F=0,ne=E.length;F<ne;++F){const ge=E[F],q=ge.start,O=ge.count;for(let te=q,ie=q+O;te<ie;te+=3)C(i[te+0]),C(i[te+1]),C(i[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new ot,Di=new hf,Mo=new Os,Rn=new U,Dn=new U,In=new U,yo=new U,bo=new U,So=new U,Kr=new U,Jr=new U,Qr=new U,es=new ze,ts=new ze,ns=new ze,wo=new U,is=new U;class _n extends yt{constructor(e=new bn,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),e.ray.intersectsSphere(Mo)===!1)||(gc.copy(s).invert(),Di.copy(e.ray).applyMatrix4(gc),i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,P=E;S<P;S+=3){const B=o.getX(S),M=o.getX(S+1),C=o.getX(S+2);a=rs(this,y,e,Di,l,c,u,f,h,B,M,C),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const A=o.getX(_),E=o.getX(_+1),S=o.getX(_+2);a=rs(this,r,e,Di,l,c,u,f,h,A,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,P=E;S<P;S+=3){const B=S,M=S+1,C=S+2;a=rs(this,y,e,Di,l,c,u,f,h,B,M,C),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const A=_,E=_+1,S=_+2;a=rs(this,r,e,Di,l,c,u,f,h,A,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Gg(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==On,o),l===null)return null;is.copy(o),is.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:n}}function rs(n,e,t,i,r,s,a,o,l,c,u,f){Rn.fromBufferAttribute(r,c),Dn.fromBufferAttribute(r,u),In.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Kr.set(0,0,0),Jr.set(0,0,0),Qr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(yo.fromBufferAttribute(_,c),bo.fromBufferAttribute(_,u),So.fromBufferAttribute(_,f),a?(Kr.addScaledVector(yo,d),Jr.addScaledVector(bo,d),Qr.addScaledVector(So,d)):(Kr.addScaledVector(yo.sub(Rn),d),Jr.addScaledVector(bo.sub(Dn),d),Qr.addScaledVector(So.sub(In),d)))}Rn.add(Kr),Dn.add(Jr),In.add(Qr)}n.isSkinnedMesh&&(n.boneTransform(c,Rn),n.boneTransform(u,Dn),n.boneTransform(f,In));const m=Gg(n,e,t,i,Rn,Dn,In,wo);if(m){o&&(es.fromBufferAttribute(o,c),ts.fromBufferAttribute(o,u),ns.fromBufferAttribute(o,f),m.uv=gn.getUV(wo,Rn,Dn,In,es,ts,ns,new ze)),l&&(es.fromBufferAttribute(l,c),ts.fromBufferAttribute(l,u),ns.fromBufferAttribute(l,f),m.uv2=gn.getUV(wo,Rn,Dn,In,es,ts,ns,new ze));const g={a:c,b:u,c:f,normal:new U,materialIndex:0};gn.getNormal(Rn,Dn,In,g.normal),m.face=g}return m}class Ir extends bn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function g(p,d,_,y,A,E,S,P,B,M,C){const F=E/B,ne=S/M,ge=E/2,q=S/2,O=P/2,te=B+1,ie=M+1;let J=0,W=0;const N=new U;for(let X=0;X<ie;X++){const he=X*ne-q;for(let ue=0;ue<te;ue++){const ae=ue*F-ge;N[p]=ae*y,N[d]=he*A,N[_]=O,c.push(N.x,N.y,N.z),N[p]=0,N[d]=0,N[_]=P>0?1:-1,u.push(N.x,N.y,N.z),f.push(ue/B),f.push(1-X/M),J+=1}}for(let X=0;X<M;X++)for(let he=0;he<B;he++){const ue=h+he+te*X,ae=h+he+te*(X+1),Te=h+(he+1)+te*(X+1),k=h+(he+1)+te*X;l.push(ue,ae,k),l.push(ae,Te,k),W+=6}o.addGroup(m,W,C),m+=W,h+=J}}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ut(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const r in i)e[r]=i[r]}return e}function kg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Vg={clone:nr,merge:ut};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gf extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends gf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=90,Fi=1;class qg extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Dt(Ii,Fi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Dt(Ii,Fi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const a=new Dt(Ii,Fi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const o=new Dt(Ii,Fi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new U(0,-1,0)),this.add(o);const l=new Dt(Ii,Fi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Dt(Ii,Fi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class _f extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xg extends di{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Gn});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Rt),new qg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Eo=new U,jg=new U,Yg=new Nt;class Jn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Eo.subVectors(i,t).cross(jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Eo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yg.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Os,ss=new U;class xf{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],y=i[14],A=i[15];return t[0].setComponents(o-r,f-l,p-h,A-d).normalize(),t[1].setComponents(o+r,f+l,p+h,A+d).normalize(),t[2].setComponents(o+s,f+c,p+m,A+_).normalize(),t[3].setComponents(o-s,f-c,p-m,A-_).normalize(),t[4].setComponents(o-a,f-u,p-g,A-y).normalize(),t[5].setComponents(o+a,f+u,p+g,A+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $g(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Da extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const y=_*h-a;for(let A=0;A<c;A++){const E=A*f-s;g.push(E,-y,0),p.push(0,0,1),d.push(A/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<o;y++){const A=y+c*_,E=y+c*(_+1),S=y+1+c*(_+1),P=y+1+c*_;m.push(A,E,P),m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(d,2))}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_="vec3 transformed = vec3( position );",i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,s_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,g_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,__=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,W_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,u0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,G0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,k0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,V0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,H0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,W0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,q0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,X0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:Zg,alphamap_pars_fragment:Kg,alphatest_fragment:Jg,alphatest_pars_fragment:Qg,aomap_fragment:e_,aomap_pars_fragment:t_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:r_,iridescence_fragment:s_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:u_,color_fragment:f_,color_pars_fragment:h_,color_pars_vertex:d_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:g_,defaultnormal_vertex:__,displacementmap_pars_vertex:x_,displacementmap_vertex:v_,emissivemap_fragment:M_,emissivemap_pars_fragment:y_,encodings_fragment:b_,encodings_pars_fragment:S_,envmap_fragment:w_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:B_,envmap_vertex:C_,fog_vertex:L_,fog_pars_vertex:P_,fog_fragment:R_,fog_pars_fragment:D_,gradientmap_pars_fragment:I_,lightmap_fragment:F_,lightmap_pars_fragment:N_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:U_,lights_pars_begin:z_,lights_toon_fragment:G_,lights_toon_pars_fragment:k_,lights_phong_fragment:V_,lights_phong_pars_fragment:H_,lights_physical_fragment:W_,lights_physical_pars_fragment:q_,lights_fragment_begin:X_,lights_fragment_maps:j_,lights_fragment_end:Y_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:Z_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:J_,map_fragment:Q_,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:r0,morphcolor_vertex:s0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:f0,normal_pars_vertex:h0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:x0,output_fragment:v0,packing:M0,premultiplied_alpha_fragment:y0,project_vertex:b0,dithering_fragment:S0,dithering_pars_fragment:w0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:C0,shadowmap_vertex:L0,shadowmask_pars_fragment:P0,skinbase_vertex:R0,skinning_pars_vertex:D0,skinning_vertex:I0,skinnormal_vertex:F0,specularmap_fragment:N0,specularmap_pars_fragment:O0,tonemapping_fragment:U0,tonemapping_pars_fragment:z0,transmission_fragment:B0,transmission_pars_fragment:G0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:H0,uv2_pars_fragment:W0,uv2_pars_vertex:q0,uv2_vertex:X0,worldpos_vertex:j0,background_vert:Y0,background_frag:$0,cube_vert:Z0,cube_frag:K0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:rx,linedashed_frag:sx,meshbasic_vert:ox,meshbasic_frag:ax,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:hx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:_x,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:Mx,points_frag:yx,shadow_vert:bx,shadow_frag:Sx,sprite_vert:wx,sprite_frag:Ex},Me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},en={basic:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:ut([Me.points,Me.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:ut([Me.common,Me.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:ut([Me.sprite,Me.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:ut([Me.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:ut([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:ut([Me.lights,Me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};en.physical={uniforms:ut([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function Tx(n,e,t,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=e.get(y));const A=n.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(y=null),y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Fs)?(c===void 0&&(c=new _n(new Ir(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:nr(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _n(new Da(2,2),new mi({name:"BackgroundMaterial",uniforms:nr(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function Ax(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(O,te,ie,J,W){let N=!1;if(a){const X=p(J,ie,te);c!==X&&(c=X,m(c.object)),N=_(O,J,ie,W),N&&y(O,J,ie,W)}else{const X=te.wireframe===!0;(c.geometry!==J.id||c.program!==ie.id||c.wireframe!==X)&&(c.geometry=J.id,c.program=ie.id,c.wireframe=X,N=!0)}W!==null&&t.update(W,34963),(N||u)&&(u=!1,M(O,te,ie,J),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,te,ie){const J=ie.wireframe===!0;let W=o[O.id];W===void 0&&(W={},o[O.id]=W);let N=W[te.id];N===void 0&&(N={},W[te.id]=N);let X=N[J];return X===void 0&&(X=d(h()),N[J]=X),X}function d(O){const te=[],ie=[],J=[];for(let W=0;W<r;W++)te[W]=0,ie[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ie,attributeDivisors:J,object:O,attributes:{},index:null}}function _(O,te,ie,J){const W=c.attributes,N=te.attributes;let X=0;const he=ie.getAttributes();for(const ue in he)if(he[ue].location>=0){const Te=W[ue];let k=N[ue];if(k===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),Te===void 0||Te.attribute!==k||k&&Te.data!==k.data)return!0;X++}return c.attributesNum!==X||c.index!==J}function y(O,te,ie,J){const W={},N=te.attributes;let X=0;const he=ie.getAttributes();for(const ue in he)if(he[ue].location>=0){let Te=N[ue];Te===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(Te=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(Te=O.instanceColor));const k={};k.attribute=Te,Te&&Te.data&&(k.data=Te.data),W[ue]=k,X++}c.attributes=W,c.attributesNum=X,c.index=J}function A(){const O=c.newAttributes;for(let te=0,ie=O.length;te<ie;te++)O[te]=0}function E(O){S(O,0)}function S(O,te){const ie=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;ie[O]=1,J[O]===0&&(n.enableVertexAttribArray(O),J[O]=1),W[O]!==te&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,te),W[O]=te)}function P(){const O=c.newAttributes,te=c.enabledAttributes;for(let ie=0,J=te.length;ie<J;ie++)te[ie]!==O[ie]&&(n.disableVertexAttribArray(ie),te[ie]=0)}function B(O,te,ie,J,W,N){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(O,te,ie,W,N):n.vertexAttribPointer(O,te,ie,J,W,N)}function M(O,te,ie,J){if(i.isWebGL2===!1&&(O.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=J.attributes,N=ie.getAttributes(),X=te.defaultAttributeValues;for(const he in N){const ue=N[he];if(ue.location>=0){let ae=W[he];if(ae===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const Te=ae.normalized,k=ae.itemSize,I=t.get(ae);if(I===void 0)continue;const re=I.buffer,oe=I.type,be=I.bytesPerElement;if(ae.isInterleavedBufferAttribute){const me=ae.data,Ee=me.stride,_e=ae.offset;if(me.isInstancedInterleavedBuffer){for(let w=0;w<ue.locationSize;w++)S(ue.location+w,me.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let w=0;w<ue.locationSize;w++)E(ue.location+w);n.bindBuffer(34962,re);for(let w=0;w<ue.locationSize;w++)B(ue.location+w,k/ue.locationSize,oe,Te,Ee*be,(_e+k/ue.locationSize*w)*be)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<ue.locationSize;me++)S(ue.location+me,ae.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<ue.locationSize;me++)E(ue.location+me);n.bindBuffer(34962,re);for(let me=0;me<ue.locationSize;me++)B(ue.location+me,k/ue.locationSize,oe,Te,k*be,k/ue.locationSize*me*be)}}else if(X!==void 0){const Te=X[he];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(ue.location,Te);break;case 3:n.vertexAttrib3fv(ue.location,Te);break;case 4:n.vertexAttrib4fv(ue.location,Te);break;default:n.vertexAttrib1fv(ue.location,Te)}}}}P()}function C(){ge();for(const O in o){const te=o[O];for(const ie in te){const J=te[ie];for(const W in J)g(J[W].object),delete J[W];delete te[ie]}delete o[O]}}function F(O){if(o[O.id]===void 0)return;const te=o[O.id];for(const ie in te){const J=te[ie];for(const W in J)g(J[W].object),delete J[W];delete te[ie]}delete o[O.id]}function ne(O){for(const te in o){const ie=o[te];if(ie[O.id]===void 0)continue;const J=ie[O.id];for(const W in J)g(J[W].object),delete J[W];delete ie[O.id]}}function ge(){q(),u=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ge,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:F,releaseStatesOfProgram:ne,initAttributes:A,enableAttribute:E,disableUnusedAttributes:P}}function Cx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Lx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(B){if(B==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),A=h>0,E=a||e.has("OES_texture_float"),S=A&&E,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:P}}function Px(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Jn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const y=s?0:i,A=y*4;let E=_.clippingState||null;l.value=E,E=u(g,h,A,m);for(let S=0;S!==A;++S)E[S]=t[S];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,E=m;A!==p;++A,E+=4)a.copy(f[A]).applyMatrix4(y,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Rx(n){let e=new WeakMap;function t(a,o){return o===Ko?a.mapping=Qi:o===Jo&&(a.mapping=er),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ko||o===Jo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dx extends gf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,_c=[.125,.215,.35,.446,.526,.582],ii=20,To=new Dx,xc=new Ye;let Ao=null;const Qn=(1+Math.sqrt(5))/2,Oi=1/Qn,vc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Qn,Oi),new U(0,Qn,-Oi),new U(Oi,0,Qn),new U(-Oi,0,Qn),new U(Qn,Oi,0),new U(-Qn,Oi,0)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ao=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Tr,format:nn,encoding:hi,depthBuffer:!1},r=yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(s)),this._blurMaterial=Fx(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,r){const o=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xc),u.toneMapping=vn,u.autoClear=!1;const m=new Ra({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new _n(new Ir,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(xc),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):y===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const A=this._cubeSize;os(r,y*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,To)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vc[(r-1)%vc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):ii;d>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ii}`);const _=[];let y=0;for(let B=0;B<ii;++B){const M=B/p,C=Math.exp(-M*M/2);_.push(C),B===0?y+=C:B<d&&(y+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[r],S=3*E*(r>A-Gi?r-A+Gi:0),P=4*(this._cubeSize-E);os(t,S,P,3*E,2*E),l.setRenderTarget(t),l.render(f,To)}}function Ix(n){const e=[],t=[],i=[];let r=n;const s=n-Gi+1+_c.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Gi?l=_c[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,y=new Float32Array(p*g*m),A=new Float32Array(d*g*m),E=new Float32Array(_*g*m);for(let P=0;P<m;P++){const B=P%3*2/3-1,M=P>2?0:-1,C=[B,M,0,B+2/3,M,0,B+2/3,M+1,0,B,M,0,B+2/3,M+1,0,B,M+1,0];y.set(C,p*g*P),A.set(h,d*g*P);const F=[P,P,P,P,P,P];E.set(F,_*g*P)}const S=new bn;S.setAttribute("position",new rn(y,p)),S.setAttribute("uv",new rn(A,d)),S.setAttribute("faceIndex",new rn(E,_)),e.push(S),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yc(n,e,t){const i=new di(n,e,t);return i.texture.mapping=Fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fx(n,e,t){const i=new Float32Array(ii),r=new U(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Sc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ko||l===Jo,u=l===Qi||l===er;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Mc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Mc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ox(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ux(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let A=0,E=y.length;A<E;A+=3){const S=y[A+0],P=y[A+1],B=y[A+2];h.push(S,P,P,B,B,S)}}else{const y=g.array;p=g.version;for(let A=0,E=y.length/3-1;A<E;A+=3){const S=A+0,P=A+1,B=A+2;h.push(S,P,P,B,B,S)}}const d=new(af(h)?mf:pf)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Bx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gx(n,e){return n[0]-e[0]}function kx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Vx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let ie=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};var g=ie;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let F=0;E===!0&&(F=1),S===!0&&(F=2),P===!0&&(F=3);let ne=u.attributes.position.count*F,ge=1;ne>e.maxTextureSize&&(ge=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const q=new Float32Array(ne*ge*4*d),O=new ff(q,ne,ge,d);O.type=si,O.needsUpdate=!0;const te=F*4;for(let J=0;J<d;J++){const W=B[J],N=M[J],X=C[J],he=ne*ge*4*J;for(let ue=0;ue<W.count;ue++){const ae=ue*te;E===!0&&(a.fromBufferAttribute(W,ue),q[he+ae+0]=a.x,q[he+ae+1]=a.y,q[he+ae+2]=a.z,q[he+ae+3]=0),S===!0&&(a.fromBufferAttribute(N,ue),q[he+ae+4]=a.x,q[he+ae+5]=a.y,q[he+ae+6]=a.z,q[he+ae+7]=0),P===!0&&(a.fromBufferAttribute(X,ue),q[he+ae+8]=a.x,q[he+ae+9]=a.y,q[he+ae+10]=a.z,q[he+ae+11]=X.itemSize===4?a.w:1)}}_={count:d,texture:O,size:new ze(ne,ge)},s.set(u,_),u.addEventListener("dispose",ie)}let y=0;for(let E=0;E<m.length;E++)y+=m[E];const A=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let S=0;S<p;S++)d[S]=[S,0];i[u.id]=d}for(let S=0;S<p;S++){const P=d[S];P[0]=S,P[1]=m[S]}d.sort(kx);for(let S=0;S<8;S++)S<p&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Gx);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const P=o[S],B=P[0],M=P[1];B!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+S)!==_[B]&&u.setAttribute("morphTarget"+S,_[B]),y&&u.getAttribute("morphNormal"+S)!==y[B]&&u.setAttribute("morphNormal"+S,y[B]),r[S]=M,A+=M):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),y&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Hx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Mf=new zt,yf=new ff,bf=new Pg,Sf=new _f,wc=[],Ec=[],Tc=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wc[r];if(s===void 0&&(s=new Float32Array(r),wc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Us(n,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Cc.set(i),n.uniformMatrix2fv(this.addr,!1,Cc),_t(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Ac.set(i),n.uniformMatrix3fv(this.addr,!1,Ac),_t(t,i)}}function Zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Tc.set(i),n.uniformMatrix4fv(this.addr,!1,Tc),_t(t,i)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jx(n,e){const t=this.cache;gt(t,e)||(n.uniform2iv(this.addr,e),_t(t,e))}function Qx(n,e){const t=this.cache;gt(t,e)||(n.uniform3iv(this.addr,e),_t(t,e))}function ev(n,e){const t=this.cache;gt(t,e)||(n.uniform4iv(this.addr,e),_t(t,e))}function tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nv(n,e){const t=this.cache;gt(t,e)||(n.uniform2uiv(this.addr,e),_t(t,e))}function iv(n,e){const t=this.cache;gt(t,e)||(n.uniform3uiv(this.addr,e),_t(t,e))}function rv(n,e){const t=this.cache;gt(t,e)||(n.uniform4uiv(this.addr,e),_t(t,e))}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Mf,r)}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bf,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sf,r)}function lv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yf,r)}function cv(n){switch(n){case 5126:return Wx;case 35664:return qx;case 35665:return Xx;case 35666:return jx;case 35674:return Yx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(n,e){n.uniform1fv(this.addr,e)}function fv(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function dv(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function pv(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mv(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gv(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _v(n,e){n.uniform1iv(this.addr,e)}function xv(n,e){n.uniform2iv(this.addr,e)}function vv(n,e){n.uniform3iv(this.addr,e)}function Mv(n,e){n.uniform4iv(this.addr,e)}function yv(n,e){n.uniform1uiv(this.addr,e)}function bv(n,e){n.uniform2uiv(this.addr,e)}function Sv(n,e){n.uniform3uiv(this.addr,e)}function wv(n,e){n.uniform4uiv(this.addr,e)}function Ev(n,e,t){const i=e.length,r=Us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Mf,r[s])}function Tv(n,e,t){const i=e.length,r=Us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||bf,r[s])}function Av(n,e,t){const i=e.length,r=Us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Sf,r[s])}function Cv(n,e,t){const i=e.length,r=Us(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||yf,r[s])}function Lv(n){switch(n){case 5126:return uv;case 35664:return fv;case 35665:return hv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return Mv;case 5125:return yv;case 36294:return bv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Cv}}class Pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=cv(t.type)}}class Rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Lv(t.type)}}class Dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Lc(n,e){n.seq.push(e),n.map[e.id]=e}function Iv(n,e,t){const i=n.name,r=i.length;for(Co.lastIndex=0;;){const s=Co.exec(i),a=Co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lc(t,c===void 0?new Pv(o,n,e):new Rv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Dv(o),Lc(t,f)),t=f}}}class ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Iv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Fv=0;function Nv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ov(n){switch(n){case hi:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Rc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Nv(n.getShaderSource(e),a)}else return r}function Uv(n,e){const t=Ov(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zv(n,e){let t;switch(e){case ng:t="Linear";break;case ig:t="Reinhard";break;case rg:t="OptimizedCineon";break;case sg:t="ACESFilmic";break;case og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bv(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function Gv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function pr(n){return n!==""}function Dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(Vv,Hv)}function Hv(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ia(t)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(n){return n.replace(Wv,qv)}function qv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function $v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rf:e="ENVMAP_BLENDING_MULTIPLY";break;case eg:e="ENVMAP_BLENDING_MIX";break;case tg:e="ENVMAP_BLENDING_ADD";break}return e}function Zv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xv(t),c=jv(t),u=Yv(t),f=$v(t),h=Zv(t),m=t.isWebGL2?"":Bv(t),g=Gv(s),p=r.createProgram();let d,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(pr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(d=[Nc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[m,Nc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,Uv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=ia(a),a=Dc(a,t),a=Ic(a,t),o=ia(o),o=Dc(o,t),o=Ic(o,t),a=Fc(a),o=Fc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=y+d+a,E=y+_+o,S=Pc(r,35633,A),P=Pc(r,35632,E);if(r.attachShader(p,S),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(S).trim(),ne=r.getShaderInfoLog(P).trim();let ge=!0,q=!0;if(r.getProgramParameter(p,35714)===!1){ge=!1;const O=Rc(r,S,"vertex"),te=Rc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+O+`
`+te)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(F===""||ne==="")&&(q=!1);q&&(this.diagnostics={runnable:ge,programLog:C,vertexShader:{log:F,prefix:d},fragmentShader:{log:ne,prefix:_}})}r.deleteShader(S),r.deleteShader(P);let B;this.getUniforms=function(){return B===void 0&&(B=new ms(r,p)),B};let M;return this.getAttributes=function(){return M===void 0&&(M=kv(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let Jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eM(e),t.set(e,i)),i}}class eM{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}}function tM(n,e,t,i,r,s,a){const o=new df,l=new Qv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,C,F,ne,ge){const q=ne.fog,O=ge.geometry,te=M.isMeshStandardMaterial?ne.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),J=!!ie&&ie.mapping===Fs?ie.image.height:null,W=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const N=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,X=N!==void 0?N.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let ue,ae,Te,k;if(W){const Ee=en[W];ue=Ee.vertexShader,ae=Ee.fragmentShader}else ue=M.vertexShader,ae=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),k=l.getFragmentShaderID(M);const I=n.getRenderTarget(),re=M.alphaTest>0,oe=M.clearcoat>0,be=M.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:M.type,vertexShader:ue,fragmentShader:ae,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:k,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ge.isInstancedMesh===!0,instancingColor:ge.isInstancedMesh===!0&&ge.instanceColor!==null,supportsVertexTextures:h,outputEncoding:I===null?n.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:hi,map:!!M.map,matcap:!!M.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:J,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Tg,tangentSpaceNormalMap:M.normalMapType===Eg,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ke,clearcoat:oe,clearcoatMap:oe&&!!M.clearcoatMap,clearcoatRoughnessMap:oe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!M.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!M.iridescenceMap,iridescenceThicknessMap:be&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Xi,alphaMap:!!M.alphaMap,alphaTest:re,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!q,useFog:M.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ge.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:vn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===Ut,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)C.push(F),C.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),M.push(o.mask)}function A(M){const C=g[M.type];let F;if(C){const ne=en[C];F=Vg.clone(ne.uniforms)}else F=M.uniforms;return F}function E(M,C){let F;for(let ne=0,ge=c.length;ne<ge;ne++){const q=c[ne];if(q.cacheKey===C){F=q,++F.usedTimes;break}}return F===void 0&&(F=new Kv(n,C,M,s),c.push(F)),F}function S(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:E,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:B}}function nM(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||iM),i.length>1&&i.sort(h||Oc),r.length>1&&r.sort(h||Oc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function rM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Uc,n.set(i,[a])):r>=s.length?(a=new Uc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function oM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aM=0;function lM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cM(n,e){const t=new sM,i=oM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new ot,o=new ot;function l(u,f){let h=0,m=0,g=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let p=0,d=0,_=0,y=0,A=0,E=0,S=0,P=0,B=0,M=0;u.sort(lM);const C=f!==!0?Math.PI:1;for(let ne=0,ge=u.length;ne<ge;ne++){const q=u[ne],O=q.color,te=q.intensity,ie=q.distance,J=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)h+=O.r*te*C,m+=O.g*te*C,g+=O.b*te*C;else if(q.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(q.sh.coefficients[W],te);else if(q.isDirectionalLight){const W=t.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity*C),q.castShadow){const N=q.shadow,X=i.get(q);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,r.directionalShadow[p]=X,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=q.shadow.matrix,E++}r.directional[p]=W,p++}else if(q.isSpotLight){const W=t.get(q);W.position.setFromMatrixPosition(q.matrixWorld),W.color.copy(O).multiplyScalar(te*C),W.distance=ie,W.coneCos=Math.cos(q.angle),W.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),W.decay=q.decay,r.spot[_]=W;const N=q.shadow;if(q.map&&(r.spotLightMap[B]=q.map,B++,N.updateMatrices(q),q.castShadow&&M++),r.spotLightMatrix[_]=N.matrix,q.castShadow){const X=i.get(q);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,r.spotShadow[_]=X,r.spotShadowMap[_]=J,P++}_++}else if(q.isRectAreaLight){const W=t.get(q);W.color.copy(O).multiplyScalar(te),W.halfWidth.set(q.width*.5,0,0),W.halfHeight.set(0,q.height*.5,0),r.rectArea[y]=W,y++}else if(q.isPointLight){const W=t.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity*C),W.distance=q.distance,W.decay=q.decay,q.castShadow){const N=q.shadow,X=i.get(q);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,r.pointShadow[d]=X,r.pointShadowMap[d]=J,r.pointShadowMatrix[d]=q.shadow.matrix,S++}r.point[d]=W,d++}else if(q.isHemisphereLight){const W=t.get(q);W.skyColor.copy(q.color).multiplyScalar(te*C),W.groundColor.copy(q.groundColor).multiplyScalar(te*C),r.hemi[A]=W,A++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==_||F.rectAreaLength!==y||F.hemiLength!==A||F.numDirectionalShadows!==E||F.numPointShadows!==S||F.numSpotShadows!==P||F.numSpotMaps!==B)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=y,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+B-M,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=M,F.directionalLength=p,F.pointLength=d,F.spotLength=_,F.rectAreaLength=y,F.hemiLength=A,F.numDirectionalShadows=E,F.numPointShadows=S,F.numSpotShadows=P,F.numSpotMaps=B,r.version=aM++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let y=0,A=u.length;y<A;y++){const E=u[y];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(E.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const S=r.hemi[d];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function zc(n,e){const t=new cM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function uM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new zc(n,e),t.set(s,[l])):a>=o.length?(l=new zc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class fM extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mM(n,e,t){let i=new xf;const r=new ze,s=new ze,a=new lt,o=new fM({depthPacking:wg}),l=new hM,c={},u=t.maxTextureSize,f={0:Ut,1:Ji,2:On},h=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:dM,fragmentShader:pM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _n(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef,this.render=function(E,S,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const B=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Gn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let ne=0,ge=E.length;ne<ge;ne++){const q=E[ne],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const te=O.getFrameExtents();if(r.multiply(te),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,O.mapSize.y=s.y)),O.map===null){const J=this.type!==dr?{minFilter:vt,magFilter:vt}:{};O.map=new di(r.x,r.y,J),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ie=O.getViewportCount();for(let J=0;J<ie;J++){const W=O.getViewport(J);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(a),O.updateMatrices(q,J),i=O.getFrustum(),A(S,P,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===dr&&_(O,P),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(B,M,C)};function _(E,S){const P=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,P,h,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,P,m,p,null)}function y(E,S,P,B,M,C){let F=null;const ne=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(ne!==void 0?F=ne:F=P.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ge=F.uuid,q=S.uuid;let O=c[ge];O===void 0&&(O={},c[ge]=O);let te=O[q];te===void 0&&(te=F.clone(),O[q]=te),F=te}return F.visible=S.visible,F.wireframe=S.wireframe,C===dr?F.side=S.shadowSide!==null?S.shadowSide:S.side:F.side=S.shadowSide!==null?S.shadowSide:f[S.side],F.alphaMap=S.alphaMap,F.alphaTest=S.alphaTest,F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.displacementMap=S.displacementMap,F.displacementScale=S.displacementScale,F.displacementBias=S.displacementBias,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(P.matrixWorld),F.nearDistance=B,F.farDistance=M),F}function A(E,S,P,B,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===dr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const ne=e.update(E),ge=E.material;if(Array.isArray(ge)){const q=ne.groups;for(let O=0,te=q.length;O<te;O++){const ie=q[O],J=ge[ie.materialIndex];if(J&&J.visible){const W=y(E,J,B,P.near,P.far,M);n.renderBufferDirect(P,null,ne,W,E,ie)}}}else if(ge.visible){const q=y(E,ge,B,P.near,P.far,M);n.renderBufferDirect(P,null,ne,q,E,null)}}const F=E.children;for(let ne=0,ge=F.length;ne<ge;ne++)A(F[ne],S,P,B,M)}}function gM(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const xe=new lt;let $=null;const Ae=new lt(0,0,0,0);return{setMask:function(we){$!==we&&!R&&(n.colorMask(we,we,we,we),$=we)},setLocked:function(we){R=we},setClear:function(we,Ve,it,Je,Sn){Sn===!0&&(we*=Je,Ve*=Je,it*=Je),xe.set(we,Ve,it,Je),Ae.equals(xe)===!1&&(n.clearColor(we,Ve,it,Je),Ae.copy(xe))},reset:function(){R=!1,$=null,Ae.set(-1,0,0,0)}}}function s(){let R=!1,xe=null,$=null,Ae=null;return{setTest:function(we){we?re(2929):oe(2929)},setMask:function(we){xe!==we&&!R&&(n.depthMask(we),xe=we)},setFunc:function(we){if($!==we){if(we)switch(we){case jm:n.depthFunc(512);break;case Ym:n.depthFunc(519);break;case $m:n.depthFunc(513);break;case Zo:n.depthFunc(515);break;case Zm:n.depthFunc(514);break;case Km:n.depthFunc(518);break;case Jm:n.depthFunc(516);break;case Qm:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);$=we}},setLocked:function(we){R=we},setClear:function(we){Ae!==we&&(n.clearDepth(we),Ae=we)},reset:function(){R=!1,xe=null,$=null,Ae=null}}}function a(){let R=!1,xe=null,$=null,Ae=null,we=null,Ve=null,it=null,Je=null,Sn=null;return{setTest:function($e){R||($e?re(2960):oe(2960))},setMask:function($e){xe!==$e&&!R&&(n.stencilMask($e),xe=$e)},setFunc:function($e,an,At){($!==$e||Ae!==an||we!==At)&&(n.stencilFunc($e,an,At),$=$e,Ae=an,we=At)},setOp:function($e,an,At){(Ve!==$e||it!==an||Je!==At)&&(n.stencilOp($e,an,At),Ve=$e,it=an,Je=At)},setLocked:function($e){R=$e},setClear:function($e){Sn!==$e&&(n.clearStencil($e),Sn=$e)},reset:function(){R=!1,xe=null,$=null,Ae=null,we=null,Ve=null,it=null,Je=null,Sn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,A=null,E=null,S=null,P=null,B=null,M=null,C=!1,F=null,ne=null,ge=null,q=null,O=null;const te=n.getParameter(35661);let ie=!1,J=0;const W=n.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),ie=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ie=J>=2);let N=null,X={};const he=n.getParameter(3088),ue=n.getParameter(2978),ae=new lt().fromArray(he),Te=new lt().fromArray(ue);function k(R,xe,$){const Ae=new Uint8Array(4),we=n.createTexture();n.bindTexture(R,we),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Ve=0;Ve<$;Ve++)n.texImage2D(xe+Ve,0,6408,1,1,0,6408,5121,Ae);return we}const I={};I[3553]=k(3553,3553,1),I[34067]=k(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(2929),l.setFunc(Zo),Z(!1),Q(Al),re(2884),L(Gn);function re(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function oe(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function be(R,xe){return m[R]!==xe?(n.bindFramebuffer(R,xe),m[R]=xe,i&&(R===36009&&(m[36160]=xe),R===36160&&(m[36009]=xe)),!0):!1}function me(R,xe){let $=p,Ae=!1;if(R)if($=g.get(xe),$===void 0&&($=[],g.set(xe,$)),R.isWebGLMultipleRenderTargets){const we=R.texture;if($.length!==we.length||$[0]!==36064){for(let Ve=0,it=we.length;Ve<it;Ve++)$[Ve]=36064+Ve;$.length=we.length,Ae=!0}}else $[0]!==36064&&($[0]=36064,Ae=!0);else $[0]!==1029&&($[0]=1029,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ee(R){return d!==R?(n.useProgram(R),d=R,!0):!1}const _e={[zi]:32774,[Om]:32778,[Um]:32779};if(i)_e[Rl]=32775,_e[Dl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(_e[Rl]=R.MIN_EXT,_e[Dl]=R.MAX_EXT)}const w={[zm]:0,[Bm]:1,[Gm]:768,[tf]:770,[Xm]:776,[Wm]:774,[Vm]:772,[km]:769,[nf]:771,[qm]:775,[Hm]:773};function L(R,xe,$,Ae,we,Ve,it,Je){if(R===Gn){_===!0&&(oe(3042),_=!1);return}if(_===!1&&(re(3042),_=!0),R!==Nm){if(R!==y||Je!==C){if((A!==zi||P!==zi)&&(n.blendEquation(32774),A=zi,P=zi),Je)switch(R){case Xi:n.blendFuncSeparate(1,771,1,771);break;case Cl:n.blendFunc(1,1);break;case Ll:n.blendFuncSeparate(0,769,0,1);break;case Pl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xi:n.blendFuncSeparate(770,771,1,771);break;case Cl:n.blendFunc(770,1);break;case Ll:n.blendFuncSeparate(0,769,0,1);break;case Pl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,S=null,B=null,M=null,y=R,C=Je}return}we=we||xe,Ve=Ve||$,it=it||Ae,(xe!==A||we!==P)&&(n.blendEquationSeparate(_e[xe],_e[we]),A=xe,P=we),($!==E||Ae!==S||Ve!==B||it!==M)&&(n.blendFuncSeparate(w[$],w[Ae],w[Ve],w[it]),E=$,S=Ae,B=Ve,M=it),y=R,C=null}function G(R,xe){R.side===On?oe(2884):re(2884);let $=R.side===Ut;xe&&($=!$),Z($),R.blending===Xi&&R.transparent===!1?L(Gn):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ae=R.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(32926):oe(32926)}function Z(R){F!==R&&(R?n.frontFace(2304):n.frontFace(2305),F=R)}function Q(R){R!==Dm?(re(2884),R!==ne&&(R===Al?n.cullFace(1029):R===Im?n.cullFace(1028):n.cullFace(1032))):oe(2884),ne=R}function le(R){R!==ge&&(ie&&n.lineWidth(R),ge=R)}function ce(R,xe,$){R?(re(32823),(q!==xe||O!==$)&&(n.polygonOffset(xe,$),q=xe,O=$)):oe(32823)}function fe(R){R?re(3089):oe(3089)}function pe(R){R===void 0&&(R=33984+te-1),N!==R&&(n.activeTexture(R),N=R)}function v(R,xe){N===null&&pe();let $=X[N];$===void 0&&($={type:void 0,texture:void 0},X[N]=$),($.type!==R||$.texture!==xe)&&(n.bindTexture(R,xe||I[R]),$.type=R,$.texture=xe)}function x(){const R=X[N];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function b(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(R){ae.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function ye(R){Te.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Te.copy(R))}function Ce(R,xe){let $=f.get(xe);$===void 0&&($=new WeakMap,f.set(xe,$));let Ae=$.get(R);Ae===void 0&&(Ae=n.getUniformBlockIndex(xe,R.name),$.set(R,Ae))}function Fe(R,xe){const Ae=f.get(xe).get(R);u.get(R)!==Ae&&(n.uniformBlockBinding(xe,Ae,R.__bindingPointIndex),u.set(R,Ae))}function Ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,X={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,A=null,E=null,S=null,P=null,B=null,M=null,C=!1,F=null,ne=null,ge=null,q=null,O=null,ae.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:re,disable:oe,bindFramebuffer:be,drawBuffers:me,useProgram:Ee,setBlending:L,setMaterial:G,setFlipSided:Z,setCullFace:Q,setLineWidth:le,setPolygonOffset:ce,setScissorTest:fe,activeTexture:pe,bindTexture:v,unbindTexture:x,compressedTexImage2D:D,texImage2D:j,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Fe,texStorage2D:Se,texStorage3D:b,texSubImage2D:H,texSubImage3D:Y,compressedTexSubImage2D:se,scissor:ve,viewport:ye,reset:Ne}}function _M(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(v,x){return _?new OffscreenCanvas(v,x):Ar("canvas")}function A(v,x,D,H){let Y=1;if((v.width>H||v.height>H)&&(Y=H/Math.max(v.width,v.height)),Y<1||x===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const se=x?na:Math.floor,Se=se(Y*v.width),b=se(Y*v.height);p===void 0&&(p=y(Se,b));const j=D?y(Se,b):p;return j.width=Se,j.height=b,j.getContext("2d").drawImage(v,0,0,Se,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Se+"x"+b+")."),j}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function E(v){return sc(v.width)&&sc(v.height)}function S(v){return o?!1:v.wrapS!==Wt||v.wrapT!==Wt||v.minFilter!==vt&&v.minFilter!==Rt}function P(v,x){return v.generateMipmaps&&x&&v.minFilter!==vt&&v.minFilter!==Rt}function B(v){n.generateMipmap(v)}function M(v,x,D,H,Y=!1){if(o===!1)return x;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let se=x;return x===6403&&(D===5126&&(se=33326),D===5131&&(se=33325),D===5121&&(se=33321)),x===33319&&(D===5126&&(se=33328),D===5131&&(se=33327),D===5121&&(se=33323)),x===6408&&(D===5126&&(se=34836),D===5131&&(se=34842),D===5121&&(se=H===Ke&&Y===!1?35907:32856),D===32819&&(se=32854),D===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function C(v,x,D){return P(v,D)===!0||v.isFramebufferTexture&&v.minFilter!==vt&&v.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function F(v){return v===vt||v===Il||v===Fl?9728:9729}function ne(v){const x=v.target;x.removeEventListener("dispose",ne),q(x),x.isVideoTexture&&g.delete(x)}function ge(v){const x=v.target;x.removeEventListener("dispose",ge),te(x)}function q(v){const x=i.get(v);if(x.__webglInit===void 0)return;const D=v.source,H=d.get(D);if(H){const Y=H[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&O(v),Object.keys(H).length===0&&d.delete(D)}i.remove(v)}function O(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const D=v.source,H=d.get(D);delete H[x.__cacheKey],a.memory.textures--}function te(v){const x=v.texture,D=i.get(v),H=i.get(x);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(D.__webglFramebuffer[Y]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Y=0;Y<D.__webglColorRenderbuffer.length;Y++)D.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Y]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let Y=0,se=x.length;Y<se;Y++){const Se=i.get(x[Y]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(x[Y])}i.remove(x),i.remove(v)}let ie=0;function J(){ie=0}function W(){const v=ie;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),ie+=1,v}function N(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function X(v,x){const D=i.get(v);if(v.isVideoTexture&&fe(v),v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){const H=v.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(D,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,D.__webglTexture)}function he(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){oe(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,D.__webglTexture)}function ue(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){oe(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,D.__webglTexture)}function ae(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){be(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,D.__webglTexture)}const Te={[Qo]:10497,[Wt]:33071,[ea]:33648},k={[vt]:9728,[Il]:9984,[Fl]:9986,[Rt]:9729,[ag]:9985,[Ns]:9987};function I(v,x,D){if(D?(n.texParameteri(v,10242,Te[x.wrapS]),n.texParameteri(v,10243,Te[x.wrapT]),(v===32879||v===35866)&&n.texParameteri(v,32882,Te[x.wrapR]),n.texParameteri(v,10240,k[x.magFilter]),n.texParameteri(v,10241,k[x.minFilter])):(n.texParameteri(v,10242,33071),n.texParameteri(v,10243,33071),(v===32879||v===35866)&&n.texParameteri(v,32882,33071),(x.wrapS!==Wt||x.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,10240,F(x.magFilter)),n.texParameteri(v,10241,F(x.minFilter)),x.minFilter!==vt&&x.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(x.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(v,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function re(v,x){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",ne));const H=x.source;let Y=d.get(H);Y===void 0&&(Y={},d.set(H,Y));const se=N(x);if(se!==v.__cacheKey){Y[se]===void 0&&(Y[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[se].usedTimes++;const Se=Y[v.__cacheKey];Se!==void 0&&(Y[v.__cacheKey].usedTimes--,Se.usedTimes===0&&O(x)),v.__cacheKey=se,v.__webglTexture=Y[se].texture}return D}function oe(v,x,D){let H=3553;x.isDataArrayTexture&&(H=35866),x.isData3DTexture&&(H=32879);const Y=re(v,x),se=x.source;if(t.activeTexture(33984+D),t.bindTexture(H,v.__webglTexture),se.version!==se.__currentVersion||Y===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Se=S(x)&&E(x.image)===!1;let b=A(x.image,Se,!1,u);b=pe(x,b);const j=E(b)||o,de=s.convert(x.format,x.encoding);let ve=s.convert(x.type),ye=M(x.internalFormat,de,ve,x.encoding,x.isVideoTexture);I(H,x,j);let Ce;const Fe=x.mipmaps,Ne=o&&x.isVideoTexture!==!0,R=se.__currentVersion===void 0||Y===!0,xe=C(x,b,j);if(x.isDepthTexture)ye=6402,o?x.type===si?ye=36012:x.type===ri?ye=33190:x.type===ji?ye=35056:ye=33189:x.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ci&&ye===6402&&x.type!==of&&x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ri,ve=s.convert(x.type)),x.format===tr&&ye===6402&&(ye=34041,x.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ji,ve=s.convert(x.type))),R&&(Ne?t.texStorage2D(3553,1,ye,b.width,b.height):t.texImage2D(3553,0,ye,b.width,b.height,0,de,ve,null));else if(x.isDataTexture)if(Fe.length>0&&j){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,ve,Ce.data):t.texImage2D(3553,$,ye,Ce.width,Ce.height,0,de,ve,Ce.data);x.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,xe,ye,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,de,ve,b.data)):t.texImage2D(3553,0,ye,b.width,b.height,0,de,ve,b.data);else if(x.isCompressedTexture){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],x.format!==nn?de!==null?Ne?t.compressedTexSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,Ce.data):t.compressedTexImage2D(3553,$,ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,ve,Ce.data):t.texImage2D(3553,$,ye,Ce.width,Ce.height,0,de,ve,Ce.data)}else if(x.isDataArrayTexture)Ne?(R&&t.texStorage3D(35866,xe,ye,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,de,ve,b.data)):t.texImage3D(35866,0,ye,b.width,b.height,b.depth,0,de,ve,b.data);else if(x.isData3DTexture)Ne?(R&&t.texStorage3D(32879,xe,ye,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,de,ve,b.data)):t.texImage3D(32879,0,ye,b.width,b.height,b.depth,0,de,ve,b.data);else if(x.isFramebufferTexture){if(R)if(Ne)t.texStorage2D(3553,xe,ye,b.width,b.height);else{let $=b.width,Ae=b.height;for(let we=0;we<xe;we++)t.texImage2D(3553,we,ye,$,Ae,0,de,ve,null),$>>=1,Ae>>=1}}else if(Fe.length>0&&j){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,de,ve,Ce):t.texImage2D(3553,$,ye,de,ve,Ce);x.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,xe,ye,b.width,b.height),t.texSubImage2D(3553,0,0,0,de,ve,b)):t.texImage2D(3553,0,ye,de,ve,b);P(x,j)&&B(H),se.__currentVersion=se.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function be(v,x,D){if(x.image.length!==6)return;const H=re(v,x),Y=x.source;if(t.activeTexture(33984+D),t.bindTexture(34067,v.__webglTexture),Y.version!==Y.__currentVersion||H===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const se=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,b=[];for(let $=0;$<6;$++)!se&&!Se?b[$]=A(x.image[$],!1,!0,c):b[$]=Se?x.image[$].image:x.image[$],b[$]=pe(x,b[$]);const j=b[0],de=E(j)||o,ve=s.convert(x.format,x.encoding),ye=s.convert(x.type),Ce=M(x.internalFormat,ve,ye,x.encoding),Fe=o&&x.isVideoTexture!==!0,Ne=Y.__currentVersion===void 0||H===!0;let R=C(x,j,de);I(34067,x,de);let xe;if(se){Fe&&Ne&&t.texStorage2D(34067,R,Ce,j.width,j.height);for(let $=0;$<6;$++){xe=b[$].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const we=xe[Ae];x.format!==nn?ve!==null?Fe?t.compressedTexSubImage2D(34069+$,Ae,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(34069+$,Ae,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+$,Ae,0,0,we.width,we.height,ve,ye,we.data):t.texImage2D(34069+$,Ae,Ce,we.width,we.height,0,ve,ye,we.data)}}}else{xe=x.mipmaps,Fe&&Ne&&(xe.length>0&&R++,t.texStorage2D(34067,R,Ce,b[0].width,b[0].height));for(let $=0;$<6;$++)if(Se){Fe?t.texSubImage2D(34069+$,0,0,0,b[$].width,b[$].height,ve,ye,b[$].data):t.texImage2D(34069+$,0,Ce,b[$].width,b[$].height,0,ve,ye,b[$].data);for(let Ae=0;Ae<xe.length;Ae++){const Ve=xe[Ae].image[$].image;Fe?t.texSubImage2D(34069+$,Ae+1,0,0,Ve.width,Ve.height,ve,ye,Ve.data):t.texImage2D(34069+$,Ae+1,Ce,Ve.width,Ve.height,0,ve,ye,Ve.data)}}else{Fe?t.texSubImage2D(34069+$,0,0,0,ve,ye,b[$]):t.texImage2D(34069+$,0,Ce,ve,ye,b[$]);for(let Ae=0;Ae<xe.length;Ae++){const we=xe[Ae];Fe?t.texSubImage2D(34069+$,Ae+1,0,0,ve,ye,we.image[$]):t.texImage2D(34069+$,Ae+1,Ce,ve,ye,we.image[$])}}}P(x,de)&&B(34067),Y.__currentVersion=Y.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function me(v,x,D,H,Y){const se=s.convert(D.format,D.encoding),Se=s.convert(D.type),b=M(D.internalFormat,se,Se,D.encoding);i.get(x).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,b,x.width,x.height,x.depth,0,se,Se,null):t.texImage2D(Y,0,b,x.width,x.height,0,se,Se,null)),t.bindFramebuffer(36160,v),ce(x)?h.framebufferTexture2DMultisampleEXT(36160,H,Y,i.get(D).__webglTexture,0,le(x)):n.framebufferTexture2D(36160,H,Y,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(v,x,D){if(n.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let H=33189;if(D||ce(x)){const Y=x.depthTexture;Y&&Y.isDepthTexture&&(Y.type===si?H=36012:Y.type===ri&&(H=33190));const se=le(x);ce(x)?h.renderbufferStorageMultisampleEXT(36161,se,H,x.width,x.height):n.renderbufferStorageMultisample(36161,se,H,x.width,x.height)}else n.renderbufferStorage(36161,H,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const H=le(x);D&&ce(x)===!1?n.renderbufferStorageMultisample(36161,H,35056,x.width,x.height):ce(x)?h.renderbufferStorageMultisampleEXT(36161,H,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,v)}else{const H=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Y=0;Y<H.length;Y++){const se=H[Y],Se=s.convert(se.format,se.encoding),b=s.convert(se.type),j=M(se.internalFormat,Se,b,se.encoding),de=le(x);D&&ce(x)===!1?n.renderbufferStorageMultisample(36161,de,j,x.width,x.height):ce(x)?h.renderbufferStorageMultisampleEXT(36161,de,j,x.width,x.height):n.renderbufferStorage(36161,j,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function _e(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const H=i.get(x.depthTexture).__webglTexture,Y=le(x);if(x.depthTexture.format===ci)ce(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):n.framebufferTexture2D(36160,36096,3553,H,0);else if(x.depthTexture.format===tr)ce(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function w(v){const x=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");_e(x.__webglFramebuffer,v)}else if(D){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]=n.createRenderbuffer(),Ee(x.__webglDepthbuffer[H],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ee(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function L(v,x,D){const H=i.get(v);x!==void 0&&me(H.__webglFramebuffer,v,v.texture,36064,3553),D!==void 0&&w(v)}function G(v){const x=v.texture,D=i.get(v),H=i.get(x);v.addEventListener("dispose",ge),v.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=x.version,a.memory.textures++);const Y=v.isWebGLCubeRenderTarget===!0,se=v.isWebGLMultipleRenderTargets===!0,Se=E(v)||o;if(Y){D.__webglFramebuffer=[];for(let b=0;b<6;b++)D.__webglFramebuffer[b]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const b=v.texture;for(let j=0,de=b.length;j<de;j++){const ve=i.get(b[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&ce(v)===!1){const b=se?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let j=0;j<b.length;j++){const de=b[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[j]);const ve=s.convert(de.format,de.encoding),ye=s.convert(de.type),Ce=M(de.internalFormat,ve,ye,de.encoding),Fe=le(v);n.renderbufferStorageMultisample(36161,Fe,Ce,v.width,v.height),n.framebufferRenderbuffer(36160,36064+j,36161,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),I(34067,x,Se);for(let b=0;b<6;b++)me(D.__webglFramebuffer[b],v,x,36064,34069+b);P(x,Se)&&B(34067),t.unbindTexture()}else if(se){const b=v.texture;for(let j=0,de=b.length;j<de;j++){const ve=b[j],ye=i.get(ve);t.bindTexture(3553,ye.__webglTexture),I(3553,ve,Se),me(D.__webglFramebuffer,v,ve,36064+j,3553),P(ve,Se)&&B(3553)}t.unbindTexture()}else{let b=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?b=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,H.__webglTexture),I(b,x,Se),me(D.__webglFramebuffer,v,x,36064,b),P(x,Se)&&B(b),t.unbindTexture()}v.depthBuffer&&w(v)}function Z(v){const x=E(v)||o,D=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let H=0,Y=D.length;H<Y;H++){const se=D[H];if(P(se,x)){const Se=v.isWebGLCubeRenderTarget?34067:3553,b=i.get(se).__webglTexture;t.bindTexture(Se,b),B(Se),t.unbindTexture()}}}function Q(v){if(o&&v.samples>0&&ce(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],D=v.width,H=v.height;let Y=16384;const se=[],Se=v.stencilBuffer?33306:36096,b=i.get(v),j=v.isWebGLMultipleRenderTargets===!0;if(j)for(let de=0;de<x.length;de++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let de=0;de<x.length;de++){se.push(36064+de),v.depthBuffer&&se.push(Se);const ve=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ve===!1&&(v.depthBuffer&&(Y|=256),v.stencilBuffer&&(Y|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[de]),ve===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),j){const ye=i.get(x[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,Y,9728),m&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let de=0;de<x.length;de++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,b.__webglColorRenderbuffer[de]);const ve=i.get(x[de]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function le(v){return Math.min(f,v.samples)}function ce(v){const x=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(v){const x=a.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function pe(v,x){const D=v.encoding,H=v.format,Y=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===ta||D!==hi&&(D===Ke?o===!1?e.has("EXT_sRGB")===!0&&H===nn?(v.format=ta,v.minFilter=Rt,v.generateMipmaps=!1):x=cf.sRGBToLinear(x):(H!==nn||Y!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),x}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=he,this.setTexture3D=ue,this.setTextureCube=ae,this.rebindTextures=L,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ce}function xM(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===fi)return 5121;if(s===fg)return 32819;if(s===hg)return 32820;if(s===lg)return 5120;if(s===cg)return 5122;if(s===of)return 5123;if(s===ug)return 5124;if(s===ri)return 5125;if(s===si)return 5126;if(s===Tr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===dg)return 6406;if(s===nn)return 6408;if(s===mg)return 6409;if(s===gg)return 6410;if(s===ci)return 6402;if(s===tr)return 34041;if(s===_g)return 6403;if(s===pg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ta)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xg)return 36244;if(s===vg)return 33319;if(s===Mg)return 33320;if(s===yg)return 36249;if(s===Ks||s===Js||s===Qs||s===eo)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nl||s===Ol||s===Ul||s===zl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ol)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bl||s===Gl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bl)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Gl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kl||s===Vl||s===Hl||s===Wl||s===ql||s===Xl||s===jl||s===Yl||s===$l||s===Zl||s===Kl||s===Jl||s===Ql||s===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ql)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$l)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ql)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ec)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===tc)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ji?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class vM extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ki extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const y=new ki;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class yM extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ci,u!==ci&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ci&&(i=ri),i===void 0&&u===tr&&(i=ji),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class bM extends gi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],y=[],A=new Dt;A.layers.enable(1),A.viewport=new lt;const E=new Dt;E.layers.enable(2),E.viewport=new lt;const S=[A,E],P=new vM;P.layers.enable(1),P.layers.enable(2);let B=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=_[N];return X===void 0&&(X=new Lo,_[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=_[N];return X===void 0&&(X=new Lo,_[N]=X),X.getGripSpace()},this.getHand=function(N){let X=_[N];return X===void 0&&(X=new Lo,_[N]=X),X.getHandSpace()};function C(N){const X=y.indexOf(N.inputSource);if(X===-1)return;const he=_[X];he!==void 0&&he.dispatchEvent({type:N.type,data:N.inputSource})}function F(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",ne);for(let N=0;N<_.length;N++){const X=y[N];X!==null&&(y[N]=null,_[N].disconnect(X))}B=null,M=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",F),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:h}),d=new di(h.framebufferWidth,h.framebufferHeight,{format:nn,type:fi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,he=null,ue=null;g.depth&&(ue=g.stencil?35056:33190,X=g.stencil?tr:ci,he=g.stencil?ji:ri);const ae={colorFormat:32856,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),d=new di(f.textureWidth,f.textureHeight,{format:nn,type:fi,depthTexture:new yM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Te=e.properties.get(d);Te.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ne(N){for(let X=0;X<N.removed.length;X++){const he=N.removed[X],ue=y.indexOf(he);ue>=0&&(y[ue]=null,_[ue].dispatchEvent({type:"disconnected",data:he}))}for(let X=0;X<N.added.length;X++){const he=N.added[X];let ue=y.indexOf(he);if(ue===-1){for(let Te=0;Te<_.length;Te++)if(Te>=y.length){y.push(he),ue=Te;break}else if(y[Te]===null){y[Te]=he,ue=Te;break}if(ue===-1)break}const ae=_[ue];ae&&ae.dispatchEvent({type:"connected",data:he})}}const ge=new U,q=new U;function O(N,X,he){ge.setFromMatrixPosition(X.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const ue=ge.distanceTo(q),ae=X.projectionMatrix.elements,Te=he.projectionMatrix.elements,k=ae[14]/(ae[10]-1),I=ae[14]/(ae[10]+1),re=(ae[9]+1)/ae[5],oe=(ae[9]-1)/ae[5],be=(ae[8]-1)/ae[0],me=(Te[8]+1)/Te[0],Ee=k*be,_e=k*me,w=ue/(-be+me),L=w*-be;X.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(L),N.translateZ(w),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const G=k+w,Z=I+w,Q=Ee-L,le=_e+(ue-L),ce=re*I/Z*G,fe=oe*I/Z*G;N.projectionMatrix.makePerspective(Q,le,ce,fe,G,Z)}function te(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;P.near=E.near=A.near=N.near,P.far=E.far=A.far=N.far,(B!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,M=P.far);const X=N.parent,he=P.cameras;te(P,X);for(let ae=0;ae<he.length;ae++)te(he[ae],X);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),N.matrix.copy(P.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ue=N.children;for(let ae=0,Te=ue.length;ae<Te;ae++)ue[ae].updateMatrixWorld(!0);he.length===2?O(P,A,E):P.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let ie=null;function J(N,X){if(c=X.getViewerPose(l||a),m=X,c!==null){const he=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ue=!1;he.length!==P.cameras.length&&(P.cameras.length=0,ue=!0);for(let ae=0;ae<he.length;ae++){const Te=he[ae];let k=null;if(h!==null)k=h.getViewport(Te);else{const re=u.getViewSubImage(f,Te);k=re.viewport,ae===0&&(e.setRenderTargetTextures(d,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let I=S[ae];I===void 0&&(I=new Dt,I.layers.enable(ae),I.viewport=new lt,S[ae]=I),I.matrix.fromArray(Te.transform.matrix),I.projectionMatrix.fromArray(Te.projectionMatrix),I.viewport.set(k.x,k.y,k.width,k.height),ae===0&&P.matrix.copy(I.matrix),ue===!0&&P.cameras.push(I)}}for(let he=0;he<_.length;he++){const ue=y[he],ae=_[he];ue!==null&&ae!==void 0&&ae.update(ue,X,l||a)}ie&&ie(N,X),m=null}const W=new vf;W.setAnimationLoop(J),this.setAnimationLoop=function(N){ie=N},this.dispose=function(){}}}function SM(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,y,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=y*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function wM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(y,A){const E=A.program;i.uniformBlockBinding(y,E)}function c(y,A){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",d));const S=A.program;i.updateUBOMapping(y,S);const P=e.render.frame;s[y.id]!==P&&(h(y),s[y.id]=P)}function u(y){const A=f();y.__bindingPointIndex=A;const E=n.createBuffer(),S=y.__size,P=y.usage;return n.bindBuffer(35345,E),n.bufferData(35345,S,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,A,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const A=r[y.id],E=y.uniforms,S=y.__cache;n.bindBuffer(35345,A);for(let P=0,B=E.length;P<B;P++){const M=E[P];if(m(M,P,S)===!0){const C=M.value,F=M.__offset;typeof C=="number"?(M.__data[0]=C,n.bufferSubData(35345,F,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),n.bufferSubData(35345,F,M.__data))}}n.bindBuffer(35345,null)}function m(y,A,E){const S=y.value;if(E[A]===void 0)return typeof S=="number"?E[A]=S:E[A]=S.clone(),!0;if(typeof S=="number"){if(E[A]!==S)return E[A]=S,!0}else{const P=E[A];if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(y){const A=y.uniforms;let E=0;const S=16;let P=0;for(let B=0,M=A.length;B<M;B++){const C=A[B],F=p(C);if(C.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,B>0){P=E%S;const ne=S-P;P!==0&&ne-F.boundary<0&&(E+=S-P,C.__offset=E)}E+=F.storage}return P=E%S,P>0&&(E+=S-P),y.__size=E,y.__cache={},this}function p(y){const A=y.value,E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function d(y){const A=y.target;A.removeEventListener("dispose",d);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function _(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function EM(){const n=Ar("canvas");return n.style.display="block",n}function wf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:EM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hi,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,y=0,A=null,E=-1,S=null;const P=new lt,B=new lt;let M=null,C=e.width,F=e.height,ne=1,ge=null,q=null;const O=new lt(0,0,C,F),te=new lt(0,0,C,F);let ie=!1;const J=new xf;let W=!1,N=!1,X=null;const he=new ot,ue=new ze,ae=new U,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return A===null?ne:1}let I=t;function re(T,V){for(let K=0;K<T.length;K++){const z=T[K],ee=e.getContext(z,V);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),I===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),I=re(V,T),I===null)throw re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,be,me,Ee,_e,w,L,G,Z,Q,le,ce,fe,pe,v,x,D,H,Y,se,Se,b,j,de;function ve(){oe=new Ox(I),be=new Lx(I,oe,n),oe.init(be),b=new xM(I,oe,be),me=new gM(I,oe,be),Ee=new Bx,_e=new nM,w=new _M(I,oe,me,_e,be,b,Ee),L=new Rx(p),G=new Nx(p),Z=new $g(I,be),j=new Ax(I,oe,Z,be),Q=new Ux(I,Z,Ee,j),le=new Hx(I,Q,Z,Ee),Y=new Vx(I,be,w),x=new Px(_e),ce=new tM(p,L,G,oe,be,j,x),fe=new SM(p,_e),pe=new rM,v=new uM(oe,be),H=new Tx(p,L,me,le,u,a),D=new mM(p,le,be),de=new wM(I,Ee,be,me),se=new Cx(I,oe,Ee,be),Se=new zx(I,oe,Ee,be),Ee.programs=ce.programs,p.capabilities=be,p.extensions=oe,p.properties=_e,p.renderLists=pe,p.shadowMap=D,p.state=me,p.info=Ee}ve();const ye=new bM(p,I);this.xr=ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(C,F,!1))},this.getSize=function(T){return T.set(C,F)},this.setSize=function(T,V,K){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,F=V,e.width=Math.floor(T*ne),e.height=Math.floor(V*ne),K!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(C*ne,F*ne).floor()},this.setDrawingBufferSize=function(T,V,K){C=T,F=V,ne=K,e.width=Math.floor(T*K),e.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,V,K,z){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,V,K,z),me.viewport(P.copy(O).multiplyScalar(ne).floor())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,V,K,z){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,V,K,z),me.scissor(B.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){me.setScissorTest(ie=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(T=!0,V=!0,K=!0){let z=0;T&&(z|=16384),V&&(z|=256),K&&(z|=1024),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),pe.dispose(),v.dispose(),_e.dispose(),L.dispose(),G.dispose(),le.dispose(),j.dispose(),de.dispose(),ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ve),ye.removeEventListener("sessionend",it),X&&(X.dispose(),X=null),Je.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Ee.autoReset,V=D.enabled,K=D.autoUpdate,z=D.needsUpdate,ee=D.type;ve(),Ee.autoReset=T,D.enabled=V,D.autoUpdate=K,D.needsUpdate=z,D.type=ee}function Ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function R(T){const V=T.target;V.removeEventListener("dispose",R),xe(V)}function xe(T){$(T),_e.remove(T)}function $(T){const V=_e.get(T).programs;V!==void 0&&(V.forEach(function(K){ce.releaseProgram(K)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,z,ee,Le){V===null&&(V=Te);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=Cf(T,V,K,z,ee);me.setMaterial(z,Pe);let Re=K.index;const qe=K.attributes.position;if(Re===null){if(qe===void 0||qe.count===0)return}else if(Re.count===0)return;let Ge=1;z.wireframe===!0&&(Re=Q.getWireframeAttribute(K),Ge=2),j.setup(ee,z,Oe,K,Re);let ke,Ze=se;Re!==null&&(ke=Z.get(Re),Ze=Se,Ze.setIndex(ke));const Hn=Re!==null?Re.count:qe.count,_i=K.drawRange.start*Ge,xi=K.drawRange.count*Ge,$t=Le!==null?Le.start*Ge:0,We=Le!==null?Le.count*Ge:1/0,vi=Math.max(_i,$t),et=Math.min(Hn,_i+xi,$t+We)-1,Ct=Math.max(0,et-vi+1);if(Ct!==0){if(ee.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*k()),Ze.setMode(1)):Ze.setMode(4);else if(ee.isLine){let wn=z.linewidth;wn===void 0&&(wn=1),me.setLineWidth(wn*k()),ee.isLineSegments?Ze.setMode(1):ee.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else ee.isPoints?Ze.setMode(0):ee.isSprite&&Ze.setMode(4);if(ee.isInstancedMesh)Ze.renderInstances(vi,Ct,ee.count);else if(K.isInstancedBufferGeometry){const wn=Math.min(K.instanceCount,K._maxInstanceCount);Ze.renderInstances(vi,Ct,wn)}else Ze.render(vi,Ct)}},this.compile=function(T,V){function K(z,ee,Le){z.transparent===!0&&z.side===On?(z.side=Ut,z.needsUpdate=!0,Fr(z,ee,Le),z.side=Ji,z.needsUpdate=!0,Fr(z,ee,Le),z.side=On):Fr(z,ee,Le)}h=v.get(T),h.init(),g.push(h),T.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(z){const ee=z.material;if(ee)if(Array.isArray(ee))for(let Le=0;Le<ee.length;Le++){const Pe=ee[Le];K(Pe,T,z)}else K(ee,T,z)}),g.pop(),h=null};let Ae=null;function we(T){Ae&&Ae(T)}function Ve(){Je.stop()}function it(){Je.start()}const Je=new vf;Je.setAnimationLoop(we),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){Ae=T,ye.setAnimationLoop(T),T===null?Je.stop():Je.start()},ye.addEventListener("sessionstart",Ve),ye.addEventListener("sessionend",it),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,A),h=v.get(T,g.length),h.init(),g.push(h),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(he),N=this.localClippingEnabled,W=x.init(this.clippingPlanes,N,V),f=pe.get(T,m.length),f.init(),m.push(f),Sn(T,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ge,q),W===!0&&x.beginShadows();const K=h.state.shadowsArray;if(D.render(K,T,V),W===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(f,T),h.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const z=V.cameras;for(let ee=0,Le=z.length;ee<Le;ee++){const Pe=z[ee];$e(f,T,Pe,Pe.viewport)}}else $e(f,T,V);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(p,T,V),j.resetDefaultState(),E=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Sn(T,V,K,z){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){z&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Pe=le.update(T),Oe=T.material;Oe.visible&&f.push(T,Pe,Oe,K,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ee.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ee.render.frame),!T.frustumCulled||J.intersectsObject(T))){z&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Pe=le.update(T),Oe=T.material;if(Array.isArray(Oe)){const Re=Pe.groups;for(let qe=0,Ge=Re.length;qe<Ge;qe++){const ke=Re[qe],Ze=Oe[ke.materialIndex];Ze&&Ze.visible&&f.push(T,Pe,Ze,K,ae.z,ke)}}else Oe.visible&&f.push(T,Pe,Oe,K,ae.z,null)}}const Le=T.children;for(let Pe=0,Oe=Le.length;Pe<Oe;Pe++)Sn(Le[Pe],V,K,z)}function $e(T,V,K,z){const ee=T.opaque,Le=T.transmissive,Pe=T.transparent;h.setupLightsView(K),Le.length>0&&an(ee,V,K),z&&me.viewport(P.copy(z)),ee.length>0&&At(ee,V,K),Le.length>0&&At(Le,V,K),Pe.length>0&&At(Pe,V,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function an(T,V,K){const z=be.isWebGL2;X===null&&(X=new di(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Tr:fi,minFilter:Ns,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(ue),z?X.setSize(ue.x,ue.y):X.setSize(na(ue.x),na(ue.y));const ee=p.getRenderTarget();p.setRenderTarget(X),p.clear();const Le=p.toneMapping;p.toneMapping=vn,At(T,V,K),p.toneMapping=Le,w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X),p.setRenderTarget(ee)}function At(T,V,K){const z=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Le=T.length;ee<Le;ee++){const Pe=T[ee],Oe=Pe.object,Re=Pe.geometry,qe=z===null?Pe.material:z,Ge=Pe.group;Oe.layers.test(K.layers)&&Af(Oe,V,K,Re,qe,Ge)}}function Af(T,V,K,z,ee,Le){T.onBeforeRender(p,V,K,z,ee,Le),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(p,V,K,z,T,Le),ee.transparent===!0&&ee.side===On?(ee.side=Ut,ee.needsUpdate=!0,p.renderBufferDirect(K,V,z,ee,T,Le),ee.side=Ji,ee.needsUpdate=!0,p.renderBufferDirect(K,V,z,ee,T,Le),ee.side=On):p.renderBufferDirect(K,V,z,ee,T,Le),T.onAfterRender(p,V,K,z,ee,Le)}function Fr(T,V,K){V.isScene!==!0&&(V=Te);const z=_e.get(T),ee=h.state.lights,Le=h.state.shadowsArray,Pe=ee.state.version,Oe=ce.getParameters(T,ee.state,Le,V,K),Re=ce.getProgramCacheKey(Oe);let qe=z.programs;z.environment=T.isMeshStandardMaterial?V.environment:null,z.fog=V.fog,z.envMap=(T.isMeshStandardMaterial?G:L).get(T.envMap||z.environment),qe===void 0&&(T.addEventListener("dispose",R),qe=new Map,z.programs=qe);let Ge=qe.get(Re);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===Pe)return Fa(T,Oe),Ge}else Oe.uniforms=ce.getUniforms(T),T.onBuild(K,Oe,p),T.onBeforeCompile(Oe,p),Ge=ce.acquireProgram(Oe,Re),qe.set(Re,Ge),z.uniforms=Oe.uniforms;const ke=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=x.uniform),Fa(T,Oe),z.needsLights=Pf(T),z.lightsStateVersion=Pe,z.needsLights&&(ke.ambientLightColor.value=ee.state.ambient,ke.lightProbe.value=ee.state.probe,ke.directionalLights.value=ee.state.directional,ke.directionalLightShadows.value=ee.state.directionalShadow,ke.spotLights.value=ee.state.spot,ke.spotLightShadows.value=ee.state.spotShadow,ke.rectAreaLights.value=ee.state.rectArea,ke.ltc_1.value=ee.state.rectAreaLTC1,ke.ltc_2.value=ee.state.rectAreaLTC2,ke.pointLights.value=ee.state.point,ke.pointLightShadows.value=ee.state.pointShadow,ke.hemisphereLights.value=ee.state.hemi,ke.directionalShadowMap.value=ee.state.directionalShadowMap,ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ke.spotShadowMap.value=ee.state.spotShadowMap,ke.spotLightMatrix.value=ee.state.spotLightMatrix,ke.spotLightMap.value=ee.state.spotLightMap,ke.pointShadowMap.value=ee.state.pointShadowMap,ke.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ze=Ge.getUniforms(),Hn=ms.seqWithValue(Ze.seq,ke);return z.currentProgram=Ge,z.uniformsList=Hn,Ge}function Fa(T,V){const K=_e.get(T);K.outputEncoding=V.outputEncoding,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Cf(T,V,K,z,ee){V.isScene!==!0&&(V=Te),w.resetTextureUnits();const Le=V.fog,Pe=z.isMeshStandardMaterial?V.environment:null,Oe=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:hi,Re=(z.isMeshStandardMaterial?G:L).get(z.envMap||Pe),qe=z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!z.normalMap&&!!K.attributes.tangent,ke=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,Hn=!!K.morphAttributes.color,_i=z.toneMapped?p.toneMapping:vn,xi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=xi!==void 0?xi.length:0,We=_e.get(z),vi=h.state.lights;if(W===!0&&(N===!0||T!==S)){const bt=T===S&&z.id===E;x.setState(z,T,bt)}let et=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vi.state.version||We.outputEncoding!==Oe||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||We.envMap!==Re||z.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ge||We.morphTargets!==ke||We.morphNormals!==Ze||We.morphColors!==Hn||We.toneMapping!==_i||be.isWebGL2===!0&&We.morphTargetsCount!==$t)&&(et=!0):(et=!0,We.__version=z.version);let Ct=We.currentProgram;et===!0&&(Ct=Fr(z,V,ee));let wn=!1,ar=!1,Bs=!1;const pt=Ct.getUniforms(),Wn=We.uniforms;if(me.useProgram(Ct.program)&&(wn=!0,ar=!0,Bs=!0),z.id!==E&&(E=z.id,ar=!0),wn||S!==T){if(pt.setValue(I,"projectionMatrix",T.projectionMatrix),be.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,ar=!0,Bs=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const bt=pt.map.cameraPosition;bt!==void 0&&bt.setValue(I,ae.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||ee.isSkinnedMesh)&&pt.setValue(I,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){pt.setOptional(I,ee,"bindMatrix"),pt.setOptional(I,ee,"bindMatrixInverse");const bt=ee.skeleton;bt&&(be.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(I,"boneTexture",bt.boneTexture,w),pt.setValue(I,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gs=K.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&be.isWebGL2===!0)&&Y.update(ee,K,z,Ct),(ar||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,pt.setValue(I,"receiveShadow",ee.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ar&&(pt.setValue(I,"toneMappingExposure",p.toneMappingExposure),We.needsLights&&Lf(Wn,Bs),Le&&z.fog===!0&&fe.refreshFogUniforms(Wn,Le),fe.refreshMaterialUniforms(Wn,z,ne,F,X),ms.upload(I,We.uniformsList,Wn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(I,We.uniformsList,Wn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(I,"center",ee.center),pt.setValue(I,"modelViewMatrix",ee.modelViewMatrix),pt.setValue(I,"normalMatrix",ee.normalMatrix),pt.setValue(I,"modelMatrix",ee.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const bt=z.uniformsGroups;for(let ks=0,Rf=bt.length;ks<Rf;ks++)if(be.isWebGL2){const Na=bt[ks];de.update(Na,Ct),de.bind(Na,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function Lf(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Pf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,V,K){_e.get(T.texture).__webglTexture=V,_e.get(T.depthTexture).__webglTexture=K;const z=_e.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=K===void 0,z.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const K=_e.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,K=0){A=T,_=V,y=K;let z=!0;if(T){const Re=_e.get(T);Re.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),z=!1):Re.__webglFramebuffer===void 0?w.setupRenderTarget(T):Re.__hasExternalTextures&&w.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture)}let ee=null,Le=!1,Pe=!1;if(T){const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture)&&(Pe=!0);const qe=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=qe[V],Le=!0):be.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?ee=_e.get(T).__webglMultisampledFramebuffer:ee=qe,P.copy(T.viewport),B.copy(T.scissor),M=T.scissorTest}else P.copy(O).multiplyScalar(ne).floor(),B.copy(te).multiplyScalar(ne).floor(),M=ie;if(me.bindFramebuffer(36160,ee)&&be.drawBuffers&&z&&me.drawBuffers(T,ee),me.viewport(P),me.scissor(B),me.setScissorTest(M),Le){const Re=_e.get(T.texture);I.framebufferTexture2D(36160,36064,34069+V,Re.__webglTexture,K)}else if(Pe){const Re=_e.get(T.texture),qe=V||0;I.framebufferTextureLayer(36160,36064,Re.__webglTexture,K||0,qe)}E=-1},this.readRenderTargetPixels=function(T,V,K,z,ee,Le,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){me.bindFramebuffer(36160,Oe);try{const Re=T.texture,qe=Re.format,Ge=Re.type;if(qe!==nn&&b.convert(qe)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===Tr&&(oe.has("EXT_color_buffer_half_float")||be.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ge!==fi&&b.convert(Ge)!==I.getParameter(35738)&&!(Ge===si&&(be.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-z&&K>=0&&K<=T.height-ee&&I.readPixels(V,K,z,ee,b.convert(qe),b.convert(Ge),Le)}finally{const Re=A!==null?_e.get(A).__webglFramebuffer:null;me.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,V,K=0){const z=Math.pow(2,-K),ee=Math.floor(V.image.width*z),Le=Math.floor(V.image.height*z);w.setTexture2D(V,0),I.copyTexSubImage2D(3553,K,0,0,T.x,T.y,ee,Le),me.unbindTexture()},this.copyTextureToTexture=function(T,V,K,z=0){const ee=V.image.width,Le=V.image.height,Pe=b.convert(K.format),Oe=b.convert(K.type);w.setTexture2D(K,0),I.pixelStorei(37440,K.flipY),I.pixelStorei(37441,K.premultiplyAlpha),I.pixelStorei(3317,K.unpackAlignment),V.isDataTexture?I.texSubImage2D(3553,z,T.x,T.y,ee,Le,Pe,Oe,V.image.data):V.isCompressedTexture?I.compressedTexSubImage2D(3553,z,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Pe,V.mipmaps[0].data):I.texSubImage2D(3553,z,T.x,T.y,Pe,Oe,V.image),z===0&&K.generateMipmaps&&I.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,V,K,z,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Re=b.convert(z.format),qe=b.convert(z.type);let Ge;if(z.isData3DTexture)w.setTexture3D(z,0),Ge=32879;else if(z.isDataArrayTexture)w.setTexture2DArray(z,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,z.flipY),I.pixelStorei(37441,z.premultiplyAlpha),I.pixelStorei(3317,z.unpackAlignment);const ke=I.getParameter(3314),Ze=I.getParameter(32878),Hn=I.getParameter(3316),_i=I.getParameter(3315),xi=I.getParameter(32877),$t=K.isCompressedTexture?K.mipmaps[0]:K.image;I.pixelStorei(3314,$t.width),I.pixelStorei(32878,$t.height),I.pixelStorei(3316,T.min.x),I.pixelStorei(3315,T.min.y),I.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?I.texSubImage3D(Ge,ee,V.x,V.y,V.z,Le,Pe,Oe,Re,qe,$t.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,ee,V.x,V.y,V.z,Le,Pe,Oe,Re,$t.data)):I.texSubImage3D(Ge,ee,V.x,V.y,V.z,Le,Pe,Oe,Re,qe,$t),I.pixelStorei(3314,ke),I.pixelStorei(32878,Ze),I.pixelStorei(3316,Hn),I.pixelStorei(3315,_i),I.pixelStorei(32877,xi),ee===0&&z.generateMipmaps&&I.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){_=0,y=0,A=null,me.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class TM extends wf{}TM.prototype.isWebGL1Renderer=!0;class AM extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ef extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new ot,ra=new hf,as=new Os,ls=new U;class CM extends yt{constructor(e=new bn,t=new Ef){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;Bc.copy(r).invert(),ra.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=c.getX(g);ls.fromBufferAttribute(f,d),Gc(ls,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)ls.fromBufferAttribute(f,g),Gc(ls,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gc(n,e,t,i,r,s,a){const o=ra.distanceSqToPoint(n);if(o<t){const l=new U;ra.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class zs extends bn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new U,h=new U,m=[],g=[],p=[],d=[];for(let _=0;_<=i;_++){const y=[],A=_/i;let E=0;_==0&&a==0?E=.5/t:_==i&&l==Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const P=S/t;f.x=-e*Math.cos(r+P*s)*Math.sin(a+A*o),f.y=e*Math.cos(a+A*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+A*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(P+E,1-A),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<t;y++){const A=u[_][y+1],E=u[_][y],S=u[_+1][y],P=u[_+1][y+1];(_!==0||a>0)&&m.push(A,E,P),(_!==i-1||l<Math.PI)&&m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(d,2))}static fromJSON(e){return new zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const kc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class LM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const PM=new LM;class Tf{constructor(e){this.manager=e!==void 0?e:PM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class RM extends Tf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=kc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ar("img");function l(){u(),kc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class DM extends Tf{constructor(e){super(e)}load(e,t,i,r){const s=new zt,a=new RM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Vc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);class IM{constructor(e,t){qn(this,"sphereGroup");qn(this,"sphereParentGroup");qn(this,"scene");qn(this,"loader");qn(this,"timeSpan");qn(this,"loadSphere",e=>{const{name:t,img:i,geometry:r,self:s}=e,{radius:a,widthSegments:o,heightSegments:l}=r,c=parseFloat((a/$o.geometry.radius).toFixed(2))*100;this.sphereGroup[t]=new ki,this.sphereParentGroup[t]=new ki,this.scene.add(this.sphereParentGroup[t]),this.loader.load(i,u=>{const f=new zs(c,o,l),h=new Ra({map:u}),m=new _n(f,h);if("position"in e){const{position:A,revolution:E}=e,{dir:S,distance:P}=A,{dir:B,cycle:M}=E;this.sphereGroup[t].position[S]-=P;const C=2*Math.PI/(M*24*60*60*60),F=()=>{requestAnimationFrame(F),this.sphereParentGroup[t].rotation[B]+=C*this.timeSpan};F()}this.sphereGroup[t].add(m),this.sphereParentGroup[t].add(this.sphereGroup[t]);const{dir:g,cycle:p}=s,d=2*Math.PI/(parseFloat((p/$o.self.cycle).toFixed(2))*24*60*60*60)*this.timeSpan;let _=new U(0,1,0).applyAxisAngle(new U(0,0,1),g*(Math.PI/180));this.sphereGroup[t].rotateZ(g*(Math.PI/180));const y=()=>{requestAnimationFrame(y),this.sphereGroup[t].rotateOnWorldAxis(_,d)};y()})});this.sphereGroup={},this.sphereParentGroup={},this.scene=e,this.loader=new DM,this.timeSpan=t}}const FM=n=>{const e=new zs(1e4,100,50),t={},i=new Ef(t),r=new CM(e,i);n.add(r)},Hc={type:"change"},Po={type:"start"},Wc={type:"end"};class NM extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",pe),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Hc),i.update(),s=r.NONE},this.update=function(){const b=new U,j=new pi().setFromUnitVectors(e.up,new U(0,1,0)),de=j.clone().invert(),ve=new U,ye=new pi,Ce=2*Math.PI;return function(){const Ne=i.object.position;b.copy(Ne).sub(i.target),b.applyQuaternion(j),o.setFromVector3(b),i.autoRotate&&s===r.NONE&&C(B()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let R=i.minAzimuthAngle,xe=i.maxAzimuthAngle;return isFinite(R)&&isFinite(xe)&&(R<-Math.PI?R+=Ce:R>Math.PI&&(R-=Ce),xe<-Math.PI?xe+=Ce:xe>Math.PI&&(xe-=Ce),R<=xe?o.theta=Math.max(R,Math.min(xe,o.theta)):o.theta=o.theta>(R+xe)/2?Math.max(R,o.theta):Math.min(xe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),b.setFromSpherical(o),b.applyQuaternion(de),Ne.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ve.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a?(i.dispatchEvent(Hc),ve.copy(i.object.position),ye.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",Q),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",pe)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Vc,l=new Vc;let c=1;const u=new U;let f=!1;const h=new ze,m=new ze,g=new ze,p=new ze,d=new ze,_=new ze,y=new ze,A=new ze,E=new ze,S=[],P={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function F(b){l.phi-=b}const ne=function(){const b=new U;return function(de,ve){b.setFromMatrixColumn(ve,0),b.multiplyScalar(-de),u.add(b)}}(),ge=function(){const b=new U;return function(de,ve){i.screenSpacePanning===!0?b.setFromMatrixColumn(ve,1):(b.setFromMatrixColumn(ve,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(de),u.add(b)}}(),q=function(){const b=new U;return function(de,ve){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;b.copy(Ce).sub(i.target);let Fe=b.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*de*Fe/ye.clientHeight,i.object.matrix),ge(2*ve*Fe/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(de*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),ge(ve*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(b){i.object.isPerspectiveCamera?c/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(b){i.object.isPerspectiveCamera?c*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(b){h.set(b.clientX,b.clientY)}function J(b){y.set(b.clientX,b.clientY)}function W(b){p.set(b.clientX,b.clientY)}function N(b){m.set(b.clientX,b.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;C(2*Math.PI*g.x/j.clientHeight),F(2*Math.PI*g.y/j.clientHeight),h.copy(m),i.update()}function X(b){A.set(b.clientX,b.clientY),E.subVectors(A,y),E.y>0?O(M()):E.y<0&&te(M()),y.copy(A),i.update()}function he(b){d.set(b.clientX,b.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),q(_.x,_.y),p.copy(d),i.update()}function ue(b){b.deltaY<0?te(M()):b.deltaY>0&&O(M()),i.update()}function ae(b){let j=!1;switch(b.code){case i.keys.UP:q(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:q(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:q(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:q(-i.keyPanSpeed,0),j=!0;break}j&&(b.preventDefault(),i.update())}function Te(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),j=.5*(S[0].pageY+S[1].pageY);h.set(b,j)}}function k(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),j=.5*(S[0].pageY+S[1].pageY);p.set(b,j)}}function I(){const b=S[0].pageX-S[1].pageX,j=S[0].pageY-S[1].pageY,de=Math.sqrt(b*b+j*j);y.set(0,de)}function re(){i.enableZoom&&I(),i.enablePan&&k()}function oe(){i.enableZoom&&I(),i.enableRotate&&Te()}function be(b){if(S.length==1)m.set(b.pageX,b.pageY);else{const de=Se(b),ve=.5*(b.pageX+de.x),ye=.5*(b.pageY+de.y);m.set(ve,ye)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;C(2*Math.PI*g.x/j.clientHeight),F(2*Math.PI*g.y/j.clientHeight),h.copy(m)}function me(b){if(S.length===1)d.set(b.pageX,b.pageY);else{const j=Se(b),de=.5*(b.pageX+j.x),ve=.5*(b.pageY+j.y);d.set(de,ve)}_.subVectors(d,p).multiplyScalar(i.panSpeed),q(_.x,_.y),p.copy(d)}function Ee(b){const j=Se(b),de=b.pageX-j.x,ve=b.pageY-j.y,ye=Math.sqrt(de*de+ve*ve);A.set(0,ye),E.set(0,Math.pow(A.y/y.y,i.zoomSpeed)),O(E.y),y.copy(A)}function _e(b){i.enableZoom&&Ee(b),i.enablePan&&me(b)}function w(b){i.enableZoom&&Ee(b),i.enableRotate&&be(b)}function L(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",G),i.domElement.addEventListener("pointerup",Z)),H(b),b.pointerType==="touch"?v(b):le(b))}function G(b){i.enabled!==!1&&(b.pointerType==="touch"?x(b):ce(b))}function Z(b){Y(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(Wc),s=r.NONE}function Q(b){Y(b)}function le(b){let j;switch(b.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case yi.DOLLY:if(i.enableZoom===!1)return;J(b),s=r.DOLLY;break;case yi.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;W(b),s=r.PAN}else{if(i.enableRotate===!1)return;ie(b),s=r.ROTATE}break;case yi.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;ie(b),s=r.ROTATE}else{if(i.enablePan===!1)return;W(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Po)}function ce(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(b);break;case r.DOLLY:if(i.enableZoom===!1)return;X(b);break;case r.PAN:if(i.enablePan===!1)return;he(b);break}}function fe(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Po),ue(b),i.dispatchEvent(Wc))}function pe(b){i.enabled===!1||i.enablePan===!1||ae(b)}function v(b){switch(se(b),S.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;Te(),s=r.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;k(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;re(),s=r.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Po)}function x(b){switch(se(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;w(b),i.update();break;default:s=r.NONE}}function D(b){i.enabled!==!1&&b.preventDefault()}function H(b){S.push(b)}function Y(b){delete P[b.pointerId];for(let j=0;j<S.length;j++)if(S[j].pointerId==b.pointerId){S.splice(j,1);return}}function se(b){let j=P[b.pointerId];j===void 0&&(j=new ze,P[b.pointerId]=j),j.set(b.pageX,b.pageY)}function Se(b){const j=b.pointerId===S[0].pointerId?S[1]:S[0];return P[j.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",Q),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const OM={id:"universe"},UM=Ls({__name:"universe",props:{timeSpan:{type:Number,default:60*60*24*30}},setup(n){const e=n;let t,i,r,s;const a=()=>{t=new AM,r=new wf({antialias:!0}),r.setSize(innerWidth,innerHeight);const p=document.getElementById("universe");p&&p.appendChild(r.domElement)},o=()=>{i=new Dt(60,innerWidth/innerHeight,1,50*1e4*1e4),i.position.set(0,500,2e3),i.lookAt(t.position)},l=()=>{s=new NM(i,r.domElement),s.maxPolarAngle=.9*Math.PI/2,s.enableZoom=!0,s.enableDamping=!0,s.dampingFactor=.12},c=()=>{FM(t)},u=()=>{a(),o(),h(),l(),c(),g()},{timeSpan:f}=Ah(e),h=()=>{const p=[gm,xm,Mm,$o,Sm,Em,Am,Lm,Rm],d=new IM(t,f==null?void 0:f.value);for(const _ of p)d.loadSphere(_)},m=()=>{const p=window.innerWidth,d=window.innerHeight;i.aspect=p/d,i.updateProjectionMatrix(),r.setSize(p,d)},g=()=>{requestAnimationFrame(g),r.render(t,i),i.lookAt(t.position),s.update()};return ya(u),window.addEventListener("resize",m),(p,d)=>(Ea(),Td("div",OM))}});const zM=Ls({__name:"index",setup(n){const e=lu(172800);return(t,i)=>(Ea(),Ou(UM,{"time-span":e.value},null,8,["time-span"]))}}),BM=[{path:"/",name:"index",component:zM}],GM=dm({history:Lp("/solar/"),routes:BM});const kM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},VM={};function HM(n,e){const t=sd("router-view");return Ea(),Ou(t)}const WM=kM(VM,[["render",HM]]);up(WM).use(GM).mount("#app");
