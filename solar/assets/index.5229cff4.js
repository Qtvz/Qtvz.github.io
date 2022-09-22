(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Jo(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=Jo(Sf);function zc(n){return!!n||n===""}function Qo(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Af(i):Qo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(Qe(n))return n}}const Ef=/;(?![^(]*\))/g,Tf=/:(.+)/;function Af(n){const e={};return n.split(Ef).forEach(t=>{if(t){const i=t.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ea(n){let e="";if(dt(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=ea(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const je={},ki=[],jt=()=>{},Cf=()=>!1,Lf=/^on[^a-z]/,xs=n=>Lf.test(n),ta=n=>n.startsWith("onUpdate:"),ht=Object.assign,na=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pf=Object.prototype.hasOwnProperty,Be=(n,e)=>Pf.call(n,e),De=Array.isArray,pr=n=>vs(n)==="[object Map]",Rf=n=>vs(n)==="[object Set]",Ie=n=>typeof n=="function",dt=n=>typeof n=="string",ia=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",Bc=n=>Qe(n)&&Ie(n.then)&&Ie(n.catch),Df=Object.prototype.toString,vs=n=>Df.call(n),If=n=>vs(n).slice(8,-1),Ff=n=>vs(n)==="[object Object]",ra=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ss=Jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Nf=/-(\w)/g,on=Ms(n=>n.replace(Nf,(e,t)=>t?t.toUpperCase():"")),Of=/\B([A-Z])/g,nr=Ms(n=>n.replace(Of,"-$1").toLowerCase()),ys=Ms(n=>n.charAt(0).toUpperCase()+n.slice(1)),Us=Ms(n=>n?`on${ys(n)}`:""),xr=(n,e)=>!Object.is(n,e),zs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},hs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Uf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ra;const zf=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Kt;class Bf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Kt&&(this.parent=Kt,this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Gf(n,e=Kt){e&&e.active&&e.effects.push(n)}const sa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Gc=n=>(n.w&Gn)>0,kc=n=>(n.n&Gn)>0,kf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Gn},Vf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Gc(r)&&!kc(r)?r.delete(n):e[t++]=r,r.w&=~Gn,r.n&=~Gn}e.length=t}},To=new WeakMap;let fr=0,Gn=1;const Ao=30;let Ht;const oi=Symbol(""),Co=Symbol("");class oa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Gf(this,i)}run(){if(!this.active)return this.fn();let e=Ht,t=On;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,On=!0,Gn=1<<++fr,fr<=Ao?kf(this):Da(this),this.fn()}finally{fr<=Ao&&Vf(this),Gn=1<<--fr,Ht=this.parent,On=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let On=!0;const Vc=[];function ir(){Vc.push(On),On=!1}function rr(){const n=Vc.pop();On=n===void 0?!0:n}function Tt(n,e,t){if(On&&Ht){let i=To.get(n);i||To.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=sa()),Hc(r)}}function Hc(n,e){let t=!1;fr<=Ao?kc(n)||(n.n|=Gn,t=!Gc(n)):t=!n.has(Ht),t&&(n.add(Ht),Ht.deps.push(n))}function Mn(n,e,t,i,r,s){const a=To.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&De(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":De(n)?ra(t)&&o.push(a.get("length")):(o.push(a.get(oi)),pr(n)&&o.push(a.get(Co)));break;case"delete":De(n)||(o.push(a.get(oi)),pr(n)&&o.push(a.get(Co)));break;case"set":pr(n)&&o.push(a.get(oi));break}if(o.length===1)o[0]&&Lo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Lo(sa(l))}}function Lo(n,e){const t=De(n)?n:[...n];for(const i of t)i.computed&&Ia(i);for(const i of t)i.computed||Ia(i)}function Ia(n,e){(n!==Ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Hf=Jo("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ia)),Wf=aa(),qf=aa(!1,!0),Xf=aa(!0),Fa=jf();function jf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=He(this);for(let s=0,a=this.length;s<a;s++)Tt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ir();const i=He(this)[e].apply(this,t);return rr(),i}}),n}function aa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?ch:$c:e?Yc:jc).get(i))return i;const a=De(i);if(!n&&a&&Be(Fa,r))return Reflect.get(Fa,r,s);const o=Reflect.get(i,r,s);return(ia(r)?Wc.has(r):Hf(r))||(n||Tt(i,"get",r),e)?o:ot(o)?a&&ra(r)?o:o.value:Qe(o)?n?Zc(o):Ar(o):o}}const Yf=qc(),$f=qc(!0);function qc(n=!1){return function(t,i,r,s){let a=t[i];if(ji(a)&&ot(a)&&!ot(r))return!1;if(!n&&(!ds(r)&&!ji(r)&&(a=He(a),r=He(r)),!De(t)&&ot(a)&&!ot(r)))return a.value=r,!0;const o=De(t)&&ra(i)?Number(i)<t.length:Be(t,i),l=Reflect.set(t,i,r,s);return t===He(s)&&(o?xr(r,a)&&Mn(t,"set",i,r):Mn(t,"add",i,r)),l}}function Zf(n,e){const t=Be(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Mn(n,"delete",e,void 0),i}function Kf(n,e){const t=Reflect.has(n,e);return(!ia(e)||!Wc.has(e))&&Tt(n,"has",e),t}function Jf(n){return Tt(n,"iterate",De(n)?"length":oi),Reflect.ownKeys(n)}const Xc={get:Wf,set:Yf,deleteProperty:Zf,has:Kf,ownKeys:Jf},Qf={get:Xf,set(n,e){return!0},deleteProperty(n,e){return!0}},eh=ht({},Xc,{get:qf,set:$f}),la=n=>n,bs=n=>Reflect.getPrototypeOf(n);function Ir(n,e,t=!1,i=!1){n=n.__v_raw;const r=He(n),s=He(e);t||(e!==s&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=bs(r),o=i?la:t?fa:vr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Fr(n,e=!1){const t=this.__v_raw,i=He(t),r=He(n);return e||(n!==r&&Tt(i,"has",n),Tt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Nr(n,e=!1){return n=n.__v_raw,!e&&Tt(He(n),"iterate",oi),Reflect.get(n,"size",n)}function Na(n){n=He(n);const e=He(this);return bs(e).has.call(e,n)||(e.add(n),Mn(e,"add",n,n)),this}function Oa(n,e){e=He(e);const t=He(this),{has:i,get:r}=bs(t);let s=i.call(t,n);s||(n=He(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?xr(e,a)&&Mn(t,"set",n,e):Mn(t,"add",n,e),this}function Ua(n){const e=He(this),{has:t,get:i}=bs(e);let r=t.call(e,n);r||(n=He(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Mn(e,"delete",n,void 0),s}function za(){const n=He(this),e=n.size!==0,t=n.clear();return e&&Mn(n,"clear",void 0,void 0),t}function Or(n,e){return function(i,r){const s=this,a=s.__v_raw,o=He(a),l=e?la:n?fa:vr;return!n&&Tt(o,"iterate",oi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ur(n,e,t){return function(...i){const r=this.__v_raw,s=He(r),a=pr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?la:e?fa:vr;return!e&&Tt(s,"iterate",l?Co:oi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function wn(n){return function(...e){return n==="delete"?!1:this}}function th(){const n={get(s){return Ir(this,s)},get size(){return Nr(this)},has:Fr,add:Na,set:Oa,delete:Ua,clear:za,forEach:Or(!1,!1)},e={get(s){return Ir(this,s,!1,!0)},get size(){return Nr(this)},has:Fr,add:Na,set:Oa,delete:Ua,clear:za,forEach:Or(!1,!0)},t={get(s){return Ir(this,s,!0)},get size(){return Nr(this,!0)},has(s){return Fr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Or(!0,!1)},i={get(s){return Ir(this,s,!0,!0)},get size(){return Nr(this,!0)},has(s){return Fr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ur(s,!1,!1),t[s]=Ur(s,!0,!1),e[s]=Ur(s,!1,!0),i[s]=Ur(s,!0,!0)}),[n,t,e,i]}const[nh,ih,rh,sh]=th();function ca(n,e){const t=e?n?sh:rh:n?ih:nh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Be(t,r)&&r in i?t:i,r,s)}const oh={get:ca(!1,!1)},ah={get:ca(!1,!0)},lh={get:ca(!0,!1)},jc=new WeakMap,Yc=new WeakMap,$c=new WeakMap,ch=new WeakMap;function uh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fh(n){return n.__v_skip||!Object.isExtensible(n)?0:uh(If(n))}function Ar(n){return ji(n)?n:ua(n,!1,Xc,oh,jc)}function hh(n){return ua(n,!1,eh,ah,Yc)}function Zc(n){return ua(n,!0,Qf,lh,$c)}function ua(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=fh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vi(n){return ji(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function ji(n){return!!(n&&n.__v_isReadonly)}function ds(n){return!!(n&&n.__v_isShallow)}function Kc(n){return Vi(n)||ji(n)}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function Jc(n){return hs(n,"__v_skip",!0),n}const vr=n=>Qe(n)?Ar(n):n,fa=n=>Qe(n)?Zc(n):n;function Qc(n){On&&Ht&&(n=He(n),Hc(n.dep||(n.dep=sa())))}function eu(n,e){n=He(n),n.dep&&Lo(n.dep)}function ot(n){return!!(n&&n.__v_isRef===!0)}function tu(n){return nu(n,!1)}function dh(n){return nu(n,!0)}function nu(n,e){return ot(n)?n:new ph(n,e)}class ph{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:He(e),this._value=t?e:vr(e)}get value(){return Qc(this),this._value}set value(e){const t=this.__v_isShallow||ds(e)||ji(e);e=t?e:He(e),xr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:vr(e),eu(this))}}function Hi(n){return ot(n)?n.value:n}const mh={get:(n,e,t)=>Hi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return ot(r)&&!ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function iu(n){return Vi(n)?n:new Proxy(n,mh)}function gh(n){const e=De(n)?new Array(n.length):{};for(const t in n)e[t]=xh(n,t);return e}class _h{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function xh(n,e,t){const i=n[e];return ot(i)?i:new _h(n,e,t)}var ru;class vh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ru]=!1,this._dirty=!0,this.effect=new oa(e,()=>{this._dirty||(this._dirty=!0,eu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return Qc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ru="__v_isReadonly";function Mh(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=jt):(i=n.get,r=n.set),new vh(i,r,s||!r,t)}function Un(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ss(s,e,t)}return r}function Ot(n,e,t,i){if(Ie(n)){const s=Un(n,e,t,i);return s&&Bc(s)&&s.catch(a=>{Ss(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ot(n[s],e,t,i));return r}function Ss(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Un(l,null,10,[n,a,o]);return}}yh(n,t,r,i)}function yh(n,e,t,i=!0){console.error(n)}let Mr=!1,Po=!1;const ft=[];let tn=0;const Wi=[];let pn=null,Qn=0;const su=Promise.resolve();let ha=null;function ou(n){const e=ha||su;return n?e.then(this?n.bind(this):n):e}function bh(n){let e=tn+1,t=ft.length;for(;e<t;){const i=e+t>>>1;yr(ft[i])<n?e=i+1:t=i}return e}function da(n){(!ft.length||!ft.includes(n,Mr&&n.allowRecurse?tn+1:tn))&&(n.id==null?ft.push(n):ft.splice(bh(n.id),0,n),au())}function au(){!Mr&&!Po&&(Po=!0,ha=su.then(cu))}function Sh(n){const e=ft.indexOf(n);e>tn&&ft.splice(e,1)}function wh(n){De(n)?Wi.push(...n):(!pn||!pn.includes(n,n.allowRecurse?Qn+1:Qn))&&Wi.push(n),au()}function Ba(n,e=Mr?tn+1:0){for(;e<ft.length;e++){const t=ft[e];t&&t.pre&&(ft.splice(e,1),e--,t())}}function lu(n){if(Wi.length){const e=[...new Set(Wi)];if(Wi.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((t,i)=>yr(t)-yr(i)),Qn=0;Qn<pn.length;Qn++)pn[Qn]();pn=null,Qn=0}}const yr=n=>n.id==null?1/0:n.id,Eh=(n,e)=>{const t=yr(n)-yr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function cu(n){Po=!1,Mr=!0,ft.sort(Eh);const e=jt;try{for(tn=0;tn<ft.length;tn++){const t=ft[tn];t&&t.active!==!1&&Un(t,null,14)}}finally{tn=0,ft.length=0,lu(),Mr=!1,ha=null,(ft.length||Wi.length)&&cu()}}function Th(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||je;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||je;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Uf))}let o,l=i[o=Us(e)]||i[o=Us(on(e))];!l&&s&&(l=i[o=Us(nr(e))]),l&&Ot(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ot(c,n,6,r)}}function uu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const u=uu(c,e,!0);u&&(o=!0,ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):ht(a,s),Qe(n)&&i.set(n,a),a)}function ws(n,e){return!n||!xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(n,e[0].toLowerCase()+e.slice(1))||Be(n,nr(e))||Be(n,e))}let qt=null,fu=null;function ps(n){const e=qt;return qt=n,fu=n&&n.type.__scopeId||null,e}function Ah(n,e=qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Za(-1);const s=ps(e),a=n(...r);return ps(s),i._d&&Za(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Bs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const y=ps(n);try{if(t.shapeFlag&4){const E=r||i;d=Qt(u.call(E,E,f,s,m,h,g)),_=l}else{const E=e;d=Qt(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),_=e.props?l:Ch(l)}}catch(E){mr.length=0,Ss(E,n,1),d=Ft(xn)}let A=d;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:S}=A;E.length&&S&7&&(a&&E.some(ta)&&(_=Lh(_,a)),A=kn(A,_))}return t.dirs&&(A=kn(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,ps(y),d}const Ch=n=>{let e;for(const t in n)(t==="class"||t==="style"||xs(t))&&((e||(e={}))[t]=n[t]);return e},Lh=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ph(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ga(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ws(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ga(i,a,c):!0:!!a;return!1}function Ga(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ws(t,s))return!0}return!1}function Rh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Dh=n=>n.__isSuspense;function Ih(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):wh(n)}function os(n,e){if(st){let t=st.provides;const i=st.parent&&st.parent.provides;i===t&&(t=st.provides=Object.create(i)),t[n]=e}}function zn(n,e,t=!1){const i=st||qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const ka={};function as(n,e,t){return hu(n,e,t)}function hu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=je){const o=st;let l,c=!1,u=!1;if(ot(n)?(l=()=>n.value,c=ds(n)):Vi(n)?(l=()=>n,i=!0):De(n)?(u=!0,c=n.some(_=>Vi(_)||ds(_)),l=()=>n.map(_=>{if(ot(_))return _.value;if(Vi(_))return zi(_);if(Ie(_))return Un(_,o,2)})):Ie(n)?e?l=()=>Un(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Ot(n,o,3,[h])}:l=jt,e&&i){const _=l;l=()=>zi(_())}let f,h=_=>{f=d.onStop=()=>{Un(_,o,4)}};if(Sr)return h=jt,e?t&&Ot(e,o,3,[l(),u?[]:void 0,h]):l(),jt;let m=u?[]:ka;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((y,A)=>xr(y,m[A])):xr(_,m)))&&(f&&f(),Ot(e,o,3,[_,m===ka?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>xt(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),p=()=>da(g));const d=new oa(l,p);return e?t?g():m=d.run():r==="post"?xt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&na(o.scope.effects,d)}}function Fh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?du(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=st;Yi(this);const o=hu(r,s.bind(i),t);return a?Yi(a):ai(),o}function du(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function zi(n,e){if(!Qe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),ot(n))zi(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)zi(n[t],e);else if(Rf(n)||pr(n))n.forEach(t=>{zi(t,e)});else if(Ff(n))for(const t in n)zi(n[t],e);return n}function Nh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pa(()=>{n.isMounted=!0}),_u(()=>{n.isUnmounting=!0}),n}const Lt=[Function,Array],Oh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(n,{slots:e}){const t=Sd(),i=Nh();let r;return()=>{const s=e.default&&mu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==xn){a=p;break}}const o=He(n),{mode:l}=o;if(i.isLeaving)return Gs(a);const c=Va(a);if(!c)return Gs(a);const u=Ro(c,o,i,t);Do(c,u);const f=t.subTree,h=f&&Va(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==xn&&(!ei(c,h)||m)){const p=Ro(h,o,i,t);if(Do(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},Gs(a);l==="in-out"&&c.type!==xn&&(p.delayLeave=(d,_,y)=>{const A=pu(i,h);A[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Uh=Oh;function pu(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ro(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:y}=e,A=String(n.key),E=pu(t,n),S=(M,C)=>{M&&Ot(M,i,9,C)},L=(M,C)=>{const I=C[1];S(M,C),De(M)?M.every(ne=>ne.length<=1)&&I():M.length<=1&&I()},U={mode:s,persisted:a,beforeEnter(M){let C=o;if(!t.isMounted)if(r)C=p||o;else return;M._leaveCb&&M._leaveCb(!0);const I=E[A];I&&ei(n,I)&&I.el._leaveCb&&I.el._leaveCb(),S(C,[M])},enter(M){let C=l,I=c,ne=u;if(!t.isMounted)if(r)C=d||l,I=_||c,ne=y||u;else return;let ge=!1;const W=M._enterCb=O=>{ge||(ge=!0,O?S(ne,[M]):S(I,[M]),U.delayedLeave&&U.delayedLeave(),M._enterCb=void 0)};C?L(C,[M,W]):W()},leave(M,C){const I=String(n.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return C();S(f,[M]);let ne=!1;const ge=M._leaveCb=W=>{ne||(ne=!0,C(),W?S(g,[M]):S(m,[M]),M._leaveCb=void 0,E[I]===n&&delete E[I])};E[I]=n,h?L(h,[M,ge]):ge()},clone(M){return Ro(M,e,t,i)}};return U}function Gs(n){if(Ts(n))return n=kn(n),n.children=null,n}function Va(n){return Ts(n)?n.children?n.children[0]:void 0:n}function Do(n,e){n.shapeFlag&6&&n.component?Do(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function mu(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Jt?(a.patchFlag&128&&r++,i=i.concat(mu(a.children,e,o))):(e||a.type!==xn)&&i.push(o!=null?kn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Es(n){return Ie(n)?{setup:n,name:n.name}:n}const ls=n=>!!n.type.__asyncLoader,Ts=n=>n.type.__isKeepAlive;function zh(n,e){gu(n,"a",e)}function Bh(n,e){gu(n,"da",e)}function gu(n,e,t=st){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(As(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ts(r.parent.vnode)&&Gh(i,e,t,r),r=r.parent}}function Gh(n,e,t,i){const r=As(e,n,i,!0);xu(()=>{na(i[e],r)},t)}function As(n,e,t=st,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ir(),Yi(t);const o=Ot(e,t,n,a);return ai(),rr(),o});return i?r.unshift(s):r.push(s),s}}const yn=n=>(e,t=st)=>(!Sr||n==="sp")&&As(n,e,t),kh=yn("bm"),pa=yn("m"),Vh=yn("bu"),Hh=yn("u"),_u=yn("bum"),xu=yn("um"),Wh=yn("sp"),qh=yn("rtg"),Xh=yn("rtc");function jh(n,e=st){As("ec",n,e)}function qn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ir(),Ot(l,t,8,[n.el,o,n,e]),rr())}}const vu="components";function Yh(n,e){return Zh(vu,n,!0,e)||n}const $h=Symbol();function Zh(n,e,t=!0,i=!1){const r=qt||st;if(r){const s=r.type;if(n===vu){const o=Cd(s,!1);if(o&&(o===e||o===on(e)||o===ys(on(e))))return s}const a=Ha(r[n]||s[n],e)||Ha(r.appContext[n],e);return!a&&i?s:a}}function Ha(n,e){return n&&(n[e]||n[on(e)]||n[ys(on(e))])}const Io=n=>n?Du(n)?Ma(n)||n.proxy:Io(n.parent):null,ms=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Io(n.parent),$root:n=>Io(n.root),$emit:n=>n.emit,$options:n=>ma(n),$forceUpdate:n=>n.f||(n.f=()=>da(n.update)),$nextTick:n=>n.n||(n.n=ou.bind(n.proxy)),$watch:n=>Fh.bind(n)}),Kh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==je&&Be(i,e))return a[e]=1,i[e];if(r!==je&&Be(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Be(c,e))return a[e]=3,s[e];if(t!==je&&Be(t,e))return a[e]=4,t[e];Fo&&(a[e]=0)}}const u=ms[e];let f,h;if(u)return e==="$attrs"&&Tt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==je&&Be(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Be(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==je&&Be(r,e)?(r[e]=t,!0):i!==je&&Be(i,e)?(i[e]=t,!0):Be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==je&&Be(n,a)||e!==je&&Be(e,a)||(o=s[0])&&Be(o,a)||Be(i,a)||Be(ms,a)||Be(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Fo=!0;function Jh(n){const e=ma(n),t=n.proxy,i=n.ctx;Fo=!1,e.beforeCreate&&Wa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:A,unmounted:E,render:S,renderTracked:L,renderTriggered:U,errorCaptured:M,serverPrefetch:C,expose:I,inheritAttrs:ne,components:ge,directives:W,filters:O}=e;if(c&&Qh(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const J in a){const H=a[J];Ie(H)&&(i[J]=H.bind(t))}if(r){const J=r.call(t,t);Qe(J)&&(n.data=Ar(J))}if(Fo=!0,s)for(const J in s){const H=s[J],N=Ie(H)?H.bind(t,t):Ie(H.get)?H.get.bind(t,t):jt,X=!Ie(H)&&Ie(H.set)?H.set.bind(t):jt,he=It({get:N,set:X});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>he.value,set:ce=>he.value=ce})}if(o)for(const J in o)Mu(o[J],i,t,J);if(l){const J=Ie(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{os(H,J[H])})}u&&Wa(u,n,"c");function ie(J,H){De(H)?H.forEach(N=>J(N.bind(t))):H&&J(H.bind(t))}if(ie(kh,f),ie(pa,h),ie(Vh,m),ie(Hh,g),ie(zh,p),ie(Bh,d),ie(jh,M),ie(Xh,L),ie(qh,U),ie(_u,y),ie(xu,E),ie(Wh,C),De(I))if(I.length){const J=n.exposed||(n.exposed={});I.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:N=>t[H]=N})})}else n.exposed||(n.exposed={});S&&n.render===jt&&(n.render=S),ne!=null&&(n.inheritAttrs=ne),ge&&(n.components=ge),W&&(n.directives=W)}function Qh(n,e,t=jt,i=!1){De(n)&&(n=No(n));for(const r in n){const s=n[r];let a;Qe(s)?"default"in s?a=zn(s.from||r,s.default,!0):a=zn(s.from||r):a=zn(s),ot(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Wa(n,e,t){Ot(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Mu(n,e,t,i){const r=i.includes(".")?du(t,i):()=>t[i];if(dt(n)){const s=e[n];Ie(s)&&as(r,s)}else if(Ie(n))as(r,n.bind(t));else if(Qe(n))if(De(n))n.forEach(s=>Mu(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&as(r,s,n)}}function ma(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gs(l,c,a,!0)),gs(l,e,a)),Qe(e)&&s.set(e,l),l}function gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gs(n,s,t,!0),r&&r.forEach(a=>gs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=ed[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const ed={data:qa,props:Zn,emits:Zn,methods:Zn,computed:Zn,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Zn,directives:Zn,watch:nd,provide:qa,inject:td};function qa(n,e){return e?n?function(){return ht(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function td(n,e){return Zn(No(n),No(e))}function No(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Zn(n,e){return n?ht(ht(Object.create(null),n),e):e}function nd(n,e){if(!n)return e;if(!e)return n;const t=ht(Object.create(null),n);for(const i in e)t[i]=mt(n[i],e[i]);return t}function id(n,e,t,i=!1){const r={},s={};hs(s,Cs,1),n.propsDefaults=Object.create(null),yu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:hh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=He(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ws(n.emitsOptions,h))continue;const m=e[h];if(l)if(Be(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=on(h);r[g]=Oo(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{yu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Be(e,f)&&((u=nr(f))===f||!Be(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Oo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Be(e,f)&&!0)&&(delete s[f],c=!0)}c&&Mn(n,"set","$attrs")}function yu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ss(l))continue;const c=e[l];let u;r&&Be(r,u=on(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ws(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=He(t),c=o||je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Oo(r,l,f,c[f],n,!Be(c,f))}}return a}function Oo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Be(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Yi(r),i=c[t]=l.call(null,e),ai())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===nr(t))&&(i=!0))}return i}function bu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=bu(f,e,!0);ht(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Qe(n)&&i.set(n,ki),ki;if(De(s))for(let u=0;u<s.length;u++){const f=on(s[u]);Xa(f)&&(a[f]=je)}else if(s)for(const u in s){const f=on(u);if(Xa(f)){const h=s[u],m=a[f]=De(h)||Ie(h)?{type:h}:h;if(m){const g=$a(Boolean,m.type),p=$a(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Be(m,"default"))&&o.push(f)}}}const c=[a,o];return Qe(n)&&i.set(n,c),c}function Xa(n){return n[0]!=="$"}function ja(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Ya(n,e){return ja(n)===ja(e)}function $a(n,e){return De(e)?e.findIndex(t=>Ya(t,n)):Ie(e)&&Ya(e,n)?0:-1}const Su=n=>n[0]==="_"||n==="$stable",ga=n=>De(n)?n.map(Qt):[Qt(n)],sd=(n,e,t)=>{if(e._n)return e;const i=Ah((...r)=>ga(e(...r)),t);return i._c=!1,i},wu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Su(r))continue;const s=n[r];if(Ie(s))e[r]=sd(r,s,i);else if(s!=null){const a=ga(s);e[r]=()=>a}}},Eu=(n,e)=>{const t=ga(e);n.slots.default=()=>t},od=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=He(e),hs(e,"_",t)):wu(e,n.slots={})}else n.slots={},e&&Eu(n,e);hs(n.slots,Cs,1)},ad=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ht(r,e),!t&&o===1&&delete r._):(s=!e.$stable,wu(e,r)),a=e}else e&&(Eu(n,e),a={default:1});if(s)for(const o in r)!Su(o)&&!(o in a)&&delete r[o]};function Tu(){return{app:null,config:{isNativeTag:Cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ld=0;function cd(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!Qe(r)&&(r=null);const s=Tu(),a=new Set;let o=!1;const l=s.app={_uid:ld++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Pd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Ft(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Ma(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Uo(n,e,t,i,r=!1){if(De(n)){n.forEach((h,m)=>Uo(h,e&&(De(e)?e[m]:e),t,i,r));return}if(ls(i)&&!r)return;const s=i.shapeFlag&4?Ma(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===je?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Be(f,c)&&(f[c]=null)):ot(c)&&(c.value=null)),Ie(l))Un(l,o,12,[a,u]);else{const h=dt(l),m=ot(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?De(p)&&na(p,s):De(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Be(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Be(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,xt(g,t)):g()}}}const xt=Ih;function ud(n){return fd(n)}function fd(n,e){const t=zf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=jt,cloneNode:g,insertStaticContent:p}=n,d=(w,P,G,Z=null,ee=null,le=null,ue=!1,fe=null,pe=!!P.dynamicChildren)=>{if(w===P)return;w&&!ei(w,P)&&(Z=ae(w),oe(w,ee,le,!0),w=null),P.patchFlag===-2&&(pe=!1,P.dynamicChildren=null);const{type:v,ref:x,shapeFlag:D}=P;switch(v){case _a:_(w,P,G,Z);break;case xn:y(w,P,G,Z);break;case ks:w==null&&A(P,G,Z,ue);break;case Jt:W(w,P,G,Z,ee,le,ue,fe,pe);break;default:D&1?L(w,P,G,Z,ee,le,ue,fe,pe):D&6?O(w,P,G,Z,ee,le,ue,fe,pe):(D&64||D&128)&&v.process(w,P,G,Z,ee,le,ue,fe,pe,me)}x!=null&&ee&&Uo(x,w&&w.ref,le,P||w,!P)},_=(w,P,G,Z)=>{if(w==null)i(P.el=o(P.children),G,Z);else{const ee=P.el=w.el;P.children!==w.children&&c(ee,P.children)}},y=(w,P,G,Z)=>{w==null?i(P.el=l(P.children||""),G,Z):P.el=w.el},A=(w,P,G,Z)=>{[w.el,w.anchor]=p(w.children,P,G,Z,w.el,w.anchor)},E=({el:w,anchor:P},G,Z)=>{let ee;for(;w&&w!==P;)ee=h(w),i(w,G,Z),w=ee;i(P,G,Z)},S=({el:w,anchor:P})=>{let G;for(;w&&w!==P;)G=h(w),r(w),w=G;r(P)},L=(w,P,G,Z,ee,le,ue,fe,pe)=>{ue=ue||P.type==="svg",w==null?U(P,G,Z,ee,le,ue,fe,pe):I(w,P,ee,le,ue,fe,pe)},U=(w,P,G,Z,ee,le,ue,fe)=>{let pe,v;const{type:x,props:D,shapeFlag:q,transition:Y,patchFlag:se,dirs:Se}=w;if(w.el&&g!==void 0&&se===-1)pe=w.el=g(w.el);else{if(pe=w.el=a(w.type,le,D&&D.is,D),q&8?u(pe,w.children):q&16&&C(w.children,pe,null,Z,ee,le&&x!=="foreignObject",ue,fe),Se&&qn(w,null,Z,"created"),D){for(const j in D)j!=="value"&&!ss(j)&&s(pe,j,null,D[j],le,w.children,Z,ee,re);"value"in D&&s(pe,"value",null,D.value),(v=D.onVnodeBeforeMount)&&Zt(v,Z,w)}M(pe,w,w.scopeId,ue,Z)}Se&&qn(w,null,Z,"beforeMount");const b=(!ee||ee&&!ee.pendingBranch)&&Y&&!Y.persisted;b&&Y.beforeEnter(pe),i(pe,P,G),((v=D&&D.onVnodeMounted)||b||Se)&&xt(()=>{v&&Zt(v,Z,w),b&&Y.enter(pe),Se&&qn(w,null,Z,"mounted")},ee)},M=(w,P,G,Z,ee)=>{if(G&&m(w,G),Z)for(let le=0;le<Z.length;le++)m(w,Z[le]);if(ee){let le=ee.subTree;if(P===le){const ue=ee.vnode;M(w,ue,ue.scopeId,ue.slotScopeIds,ee.parent)}}},C=(w,P,G,Z,ee,le,ue,fe,pe=0)=>{for(let v=pe;v<w.length;v++){const x=w[v]=fe?In(w[v]):Qt(w[v]);d(null,x,P,G,Z,ee,le,ue,fe)}},I=(w,P,G,Z,ee,le,ue)=>{const fe=P.el=w.el;let{patchFlag:pe,dynamicChildren:v,dirs:x}=P;pe|=w.patchFlag&16;const D=w.props||je,q=P.props||je;let Y;G&&Xn(G,!1),(Y=q.onVnodeBeforeUpdate)&&Zt(Y,G,P,w),x&&qn(P,w,G,"beforeUpdate"),G&&Xn(G,!0);const se=ee&&P.type!=="foreignObject";if(v?ne(w.dynamicChildren,v,fe,G,Z,se,le):ue||N(w,P,fe,null,G,Z,se,le,!1),pe>0){if(pe&16)ge(fe,P,D,q,G,Z,ee);else if(pe&2&&D.class!==q.class&&s(fe,"class",null,q.class,ee),pe&4&&s(fe,"style",D.style,q.style,ee),pe&8){const Se=P.dynamicProps;for(let b=0;b<Se.length;b++){const j=Se[b],de=D[j],ve=q[j];(ve!==de||j==="value")&&s(fe,j,de,ve,ee,w.children,G,Z,re)}}pe&1&&w.children!==P.children&&u(fe,P.children)}else!ue&&v==null&&ge(fe,P,D,q,G,Z,ee);((Y=q.onVnodeUpdated)||x)&&xt(()=>{Y&&Zt(Y,G,P,w),x&&qn(P,w,G,"updated")},Z)},ne=(w,P,G,Z,ee,le,ue)=>{for(let fe=0;fe<P.length;fe++){const pe=w[fe],v=P[fe],x=pe.el&&(pe.type===Jt||!ei(pe,v)||pe.shapeFlag&70)?f(pe.el):G;d(pe,v,x,null,Z,ee,le,ue,!0)}},ge=(w,P,G,Z,ee,le,ue)=>{if(G!==Z){for(const fe in Z){if(ss(fe))continue;const pe=Z[fe],v=G[fe];pe!==v&&fe!=="value"&&s(w,fe,v,pe,ue,P.children,ee,le,re)}if(G!==je)for(const fe in G)!ss(fe)&&!(fe in Z)&&s(w,fe,G[fe],null,ue,P.children,ee,le,re);"value"in Z&&s(w,"value",G.value,Z.value)}},W=(w,P,G,Z,ee,le,ue,fe,pe)=>{const v=P.el=w?w.el:o(""),x=P.anchor=w?w.anchor:o("");let{patchFlag:D,dynamicChildren:q,slotScopeIds:Y}=P;Y&&(fe=fe?fe.concat(Y):Y),w==null?(i(v,G,Z),i(x,G,Z),C(P.children,G,x,ee,le,ue,fe,pe)):D>0&&D&64&&q&&w.dynamicChildren?(ne(w.dynamicChildren,q,G,ee,le,ue,fe),(P.key!=null||ee&&P===ee.subTree)&&Au(w,P,!0)):N(w,P,G,x,ee,le,ue,fe,pe)},O=(w,P,G,Z,ee,le,ue,fe,pe)=>{P.slotScopeIds=fe,w==null?P.shapeFlag&512?ee.ctx.activate(P,G,Z,ue,pe):Q(P,G,Z,ee,le,ue,pe):ie(w,P,pe)},Q=(w,P,G,Z,ee,le,ue)=>{const fe=w.component=bd(w,Z,ee);if(Ts(w)&&(fe.ctx.renderer=me),wd(fe),fe.asyncDep){if(ee&&ee.registerDep(fe,J),!w.el){const pe=fe.subTree=Ft(xn);y(null,pe,P,G)}return}J(fe,w,P,G,ee,le,ue)},ie=(w,P,G)=>{const Z=P.component=w.component;if(Ph(w,P,G))if(Z.asyncDep&&!Z.asyncResolved){H(Z,P,G);return}else Z.next=P,Sh(Z.update),Z.update();else P.el=w.el,Z.vnode=P},J=(w,P,G,Z,ee,le,ue)=>{const fe=()=>{if(w.isMounted){let{next:x,bu:D,u:q,parent:Y,vnode:se}=w,Se=x,b;Xn(w,!1),x?(x.el=se.el,H(w,x,ue)):x=se,D&&zs(D),(b=x.props&&x.props.onVnodeBeforeUpdate)&&Zt(b,Y,x,se),Xn(w,!0);const j=Bs(w),de=w.subTree;w.subTree=j,d(de,j,f(de.el),ae(de),w,ee,le),x.el=j.el,Se===null&&Rh(w,j.el),q&&xt(q,ee),(b=x.props&&x.props.onVnodeUpdated)&&xt(()=>Zt(b,Y,x,se),ee)}else{let x;const{el:D,props:q}=P,{bm:Y,m:se,parent:Se}=w,b=ls(P);if(Xn(w,!1),Y&&zs(Y),!b&&(x=q&&q.onVnodeBeforeMount)&&Zt(x,Se,P),Xn(w,!0),D&&_e){const j=()=>{w.subTree=Bs(w),_e(D,w.subTree,w,ee,null)};b?P.type.__asyncLoader().then(()=>!w.isUnmounted&&j()):j()}else{const j=w.subTree=Bs(w);d(null,j,G,Z,w,ee,le),P.el=j.el}if(se&&xt(se,ee),!b&&(x=q&&q.onVnodeMounted)){const j=P;xt(()=>Zt(x,Se,j),ee)}(P.shapeFlag&256||Se&&ls(Se.vnode)&&Se.vnode.shapeFlag&256)&&w.a&&xt(w.a,ee),w.isMounted=!0,P=G=Z=null}},pe=w.effect=new oa(fe,()=>da(v),w.scope),v=w.update=()=>pe.run();v.id=w.uid,Xn(w,!0),v()},H=(w,P,G)=>{P.component=w;const Z=w.vnode.props;w.vnode=P,w.next=null,rd(w,P.props,Z,G),ad(w,P.children,G),ir(),Ba(),rr()},N=(w,P,G,Z,ee,le,ue,fe,pe=!1)=>{const v=w&&w.children,x=w?w.shapeFlag:0,D=P.children,{patchFlag:q,shapeFlag:Y}=P;if(q>0){if(q&128){he(v,D,G,Z,ee,le,ue,fe,pe);return}else if(q&256){X(v,D,G,Z,ee,le,ue,fe,pe);return}}Y&8?(x&16&&re(v,ee,le),D!==v&&u(G,D)):x&16?Y&16?he(v,D,G,Z,ee,le,ue,fe,pe):re(v,ee,le,!0):(x&8&&u(G,""),Y&16&&C(D,G,Z,ee,le,ue,fe,pe))},X=(w,P,G,Z,ee,le,ue,fe,pe)=>{w=w||ki,P=P||ki;const v=w.length,x=P.length,D=Math.min(v,x);let q;for(q=0;q<D;q++){const Y=P[q]=pe?In(P[q]):Qt(P[q]);d(w[q],Y,G,null,ee,le,ue,fe,pe)}v>x?re(w,ee,le,!0,!1,D):C(P,G,Z,ee,le,ue,fe,pe,D)},he=(w,P,G,Z,ee,le,ue,fe,pe)=>{let v=0;const x=P.length;let D=w.length-1,q=x-1;for(;v<=D&&v<=q;){const Y=w[v],se=P[v]=pe?In(P[v]):Qt(P[v]);if(ei(Y,se))d(Y,se,G,null,ee,le,ue,fe,pe);else break;v++}for(;v<=D&&v<=q;){const Y=w[D],se=P[q]=pe?In(P[q]):Qt(P[q]);if(ei(Y,se))d(Y,se,G,null,ee,le,ue,fe,pe);else break;D--,q--}if(v>D){if(v<=q){const Y=q+1,se=Y<x?P[Y].el:Z;for(;v<=q;)d(null,P[v]=pe?In(P[v]):Qt(P[v]),G,se,ee,le,ue,fe,pe),v++}}else if(v>q)for(;v<=D;)oe(w[v],ee,le,!0),v++;else{const Y=v,se=v,Se=new Map;for(v=se;v<=q;v++){const Ne=P[v]=pe?In(P[v]):Qt(P[v]);Ne.key!=null&&Se.set(Ne.key,v)}let b,j=0;const de=q-se+1;let ve=!1,ye=0;const Ce=new Array(de);for(v=0;v<de;v++)Ce[v]=0;for(v=Y;v<=D;v++){const Ne=w[v];if(j>=de){oe(Ne,ee,le,!0);continue}let R;if(Ne.key!=null)R=Se.get(Ne.key);else for(b=se;b<=q;b++)if(Ce[b-se]===0&&ei(Ne,P[b])){R=b;break}R===void 0?oe(Ne,ee,le,!0):(Ce[R-se]=v+1,R>=ye?ye=R:ve=!0,d(Ne,P[R],G,null,ee,le,ue,fe,pe),j++)}const Fe=ve?hd(Ce):ki;for(b=Fe.length-1,v=de-1;v>=0;v--){const Ne=se+v,R=P[Ne],xe=Ne+1<x?P[Ne+1].el:Z;Ce[v]===0?d(null,R,G,xe,ee,le,ue,fe,pe):ve&&(b<0||v!==Fe[b]?ce(R,G,xe,2):b--)}}},ce=(w,P,G,Z,ee=null)=>{const{el:le,type:ue,transition:fe,children:pe,shapeFlag:v}=w;if(v&6){ce(w.component.subTree,P,G,Z);return}if(v&128){w.suspense.move(P,G,Z);return}if(v&64){ue.move(w,P,G,me);return}if(ue===Jt){i(le,P,G);for(let D=0;D<pe.length;D++)ce(pe[D],P,G,Z);i(w.anchor,P,G);return}if(ue===ks){E(w,P,G);return}if(Z!==2&&v&1&&fe)if(Z===0)fe.beforeEnter(le),i(le,P,G),xt(()=>fe.enter(le),ee);else{const{leave:D,delayLeave:q,afterLeave:Y}=fe,se=()=>i(le,P,G),Se=()=>{D(le,()=>{se(),Y&&Y()})};q?q(le,se,Se):Se()}else i(le,P,G)},oe=(w,P,G,Z=!1,ee=!1)=>{const{type:le,props:ue,ref:fe,children:pe,dynamicChildren:v,shapeFlag:x,patchFlag:D,dirs:q}=w;if(fe!=null&&Uo(fe,null,G,w,!0),x&256){P.ctx.deactivate(w);return}const Y=x&1&&q,se=!ls(w);let Se;if(se&&(Se=ue&&ue.onVnodeBeforeUnmount)&&Zt(Se,P,w),x&6)F(w.component,G,Z);else{if(x&128){w.suspense.unmount(G,Z);return}Y&&qn(w,null,P,"beforeUnmount"),x&64?w.type.remove(w,P,G,ee,me,Z):v&&(le!==Jt||D>0&&D&64)?re(v,P,G,!1,!0):(le===Jt&&D&384||!ee&&x&16)&&re(pe,P,G),Z&&we(w)}(se&&(Se=ue&&ue.onVnodeUnmounted)||Y)&&xt(()=>{Se&&Zt(Se,P,w),Y&&qn(w,null,P,"unmounted")},G)},we=w=>{const{type:P,el:G,anchor:Z,transition:ee}=w;if(P===Jt){k(G,Z);return}if(P===ks){S(w);return}const le=()=>{r(G),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(w.shapeFlag&1&&ee&&!ee.persisted){const{leave:ue,delayLeave:fe}=ee,pe=()=>ue(G,le);fe?fe(w.el,le,pe):pe()}else le()},k=(w,P)=>{let G;for(;w!==P;)G=h(w),r(w),w=G;r(P)},F=(w,P,G)=>{const{bum:Z,scope:ee,update:le,subTree:ue,um:fe}=w;Z&&zs(Z),ee.stop(),le&&(le.active=!1,oe(ue,w,P,G)),fe&&xt(fe,P),xt(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},re=(w,P,G,Z=!1,ee=!1,le=0)=>{for(let ue=le;ue<w.length;ue++)oe(w[ue],P,G,Z,ee)},ae=w=>w.shapeFlag&6?ae(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),be=(w,P,G)=>{w==null?P._vnode&&oe(P._vnode,null,null,!0):d(P._vnode||null,w,P,null,null,null,G),Ba(),lu(),P._vnode=w},me={p:d,um:oe,m:ce,r:we,mt:Q,mc:C,pc:N,pbc:ne,n:ae,o:n};let Te,_e;return e&&([Te,_e]=e(me)),{render:be,hydrate:Te,createApp:cd(be,Te)}}function Xn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Au(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=In(r[s]),o.el=a.el),t||Au(a,o))}}function hd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const dd=n=>n.__isTeleport,Jt=Symbol(void 0),_a=Symbol(void 0),xn=Symbol(void 0),ks=Symbol(void 0),mr=[];let Xt=null;function xa(n=!1){mr.push(Xt=n?null:[])}function pd(){mr.pop(),Xt=mr[mr.length-1]||null}let br=1;function Za(n){br+=n}function Cu(n){return n.dynamicChildren=br>0?Xt||ki:null,pd(),br>0&&Xt&&Xt.push(n),n}function md(n,e,t,i,r,s){return Cu(Ru(n,e,t,i,r,s,!0))}function Lu(n,e,t,i,r){return Cu(Ft(n,e,t,i,r,!0))}function zo(n){return n?n.__v_isVNode===!0:!1}function ei(n,e){return n.type===e.type&&n.key===e.key}const Cs="__vInternal",Pu=({key:n})=>n!=null?n:null,cs=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||ot(n)||Ie(n)?{i:qt,r:n,k:e,f:!!t}:n:null;function Ru(n,e=null,t=null,i=0,r=null,s=n===Jt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pu(e),ref:e&&cs(e),scopeId:fu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(va(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),br>0&&!a&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const Ft=gd;function gd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$h)&&(n=xn),zo(n)){const o=kn(n,e,!0);return t&&va(o,t),br>0&&!s&&Xt&&(o.shapeFlag&6?Xt[Xt.indexOf(n)]=o:Xt.push(o)),o.patchFlag|=-2,o}if(Ld(n)&&(n=n.__vccOpts),e){e=_d(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=ea(o)),Qe(l)&&(Kc(l)&&!De(l)&&(l=ht({},l)),e.style=Qo(l))}const a=dt(n)?1:Dh(n)?128:dd(n)?64:Qe(n)?4:Ie(n)?2:0;return Ru(n,e,t,i,r,a,s,!0)}function _d(n){return n?Kc(n)||Cs in n?ht({},n):n:null}function kn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?vd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Pu(o),ref:e&&e.ref?t&&r?De(r)?r.concat(cs(e)):[r,cs(e)]:cs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&kn(n.ssContent),ssFallback:n.ssFallback&&kn(n.ssFallback),el:n.el,anchor:n.anchor}}function xd(n=" ",e=0){return Ft(_a,null,n,e)}function Qt(n){return n==null||typeof n=="boolean"?Ft(xn):De(n)?Ft(Jt,null,n.slice()):typeof n=="object"?In(n):Ft(_a,null,String(n))}function In(n){return n.el===null||n.memo?n:kn(n)}function va(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),va(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Cs in e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[xd(e)]):t=8);n.children=e,n.shapeFlag|=t}function vd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ea([e.class,i.class]));else if(r==="style")e.style=Qo([e.style,i.style]);else if(xs(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Zt(n,e,t,i=null){Ot(n,e,7,[t,i])}const Md=Tu();let yd=0;function bd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Md,s={uid:yd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(i,r),emitsOptions:uu(i,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:i.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Th.bind(null,s),n.ce&&n.ce(s),s}let st=null;const Sd=()=>st||qt,Yi=n=>{st=n,n.scope.on()},ai=()=>{st&&st.scope.off(),st=null};function Du(n){return n.vnode.shapeFlag&4}let Sr=!1;function wd(n,e=!1){Sr=e;const{props:t,children:i}=n.vnode,r=Du(n);id(n,t,r,e),od(n,i);const s=r?Ed(n,e):void 0;return Sr=!1,s}function Ed(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Jc(new Proxy(n.ctx,Kh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Ad(n):null;Yi(n),ir();const s=Un(i,n,0,[n.props,r]);if(rr(),ai(),Bc(s)){if(s.then(ai,ai),e)return s.then(a=>{Ka(n,a,e)}).catch(a=>{Ss(a,n,0)});n.asyncDep=s}else Ka(n,s,e)}else Iu(n,e)}function Ka(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=iu(e)),Iu(n,t)}let Ja;function Iu(n,e,t){const i=n.type;if(!n.render){if(!e&&Ja&&!i.render){const r=i.template||ma(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ht(ht({isCustomElement:s,delimiters:o},a),l);i.render=Ja(r,c)}}n.render=i.render||jt}Yi(n),ir(),Jh(n),rr(),ai()}function Td(n){return new Proxy(n.attrs,{get(e,t){return Tt(n,"get","$attrs"),e[t]}})}function Ad(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Td(n))},slots:n.slots,emit:n.emit,expose:e}}function Ma(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(iu(Jc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ms)return ms[t](n)}}))}function Cd(n,e=!0){return Ie(n)?n.displayName||n.name:n.name||e&&n.__name}function Ld(n){return Ie(n)&&"__vccOpts"in n}const It=(n,e)=>Mh(n,e,Sr);function Fu(n,e,t){const i=arguments.length;return i===2?Qe(e)&&!De(e)?zo(e)?Ft(n,null,[e]):Ft(n,e):Ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zo(t)&&(t=[t]),Ft(n,e,t))}const Pd="3.2.39",Rd="http://www.w3.org/2000/svg",ti=typeof document<"u"?document:null,Qa=ti&&ti.createElement("template"),Dd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ti.createElementNS(Rd,n):ti.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ti.createTextNode(n),createComment:n=>ti.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ti.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Qa.innerHTML=i?`<svg>${n}</svg>`:n;const o=Qa.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Id(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Fd(n,e,t){const i=n.style,r=dt(t);if(t&&!r){for(const s in t)Bo(i,s,t[s]);if(e&&!dt(e))for(const s in e)t[s]==null&&Bo(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const el=/\s*!important$/;function Bo(n,e,t){if(De(t))t.forEach(i=>Bo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Nd(n,e);el.test(t)?n.setProperty(nr(i),t.replace(el,""),"important"):n[i]=t}}const tl=["Webkit","Moz","ms"],Vs={};function Nd(n,e){const t=Vs[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return Vs[e]=i;i=ys(i);for(let r=0;r<tl.length;r++){const s=tl[r]+i;if(s in n)return Vs[e]=s}return e}const nl="http://www.w3.org/1999/xlink";function Od(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(nl,e.slice(6,e.length)):n.setAttributeNS(nl,e,t);else{const s=wf(e);t==null||s&&!zc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Ud(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=zc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Nu,zd]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Go=0;const Bd=Promise.resolve(),Gd=()=>{Go=0},kd=()=>Go||(Bd.then(Gd),Go=Nu());function Vd(n,e,t,i){n.addEventListener(e,t,i)}function Hd(n,e,t,i){n.removeEventListener(e,t,i)}function Wd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=qd(e);if(i){const c=s[e]=Xd(i,r);Vd(n,o,c,l)}else a&&(Hd(n,o,a,l),s[e]=void 0)}}const il=/(?:Once|Passive|Capture)$/;function qd(n){let e;if(il.test(n)){e={};let i;for(;i=n.match(il);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),e]}function Xd(n,e){const t=i=>{const r=i.timeStamp||Nu();(zd||r>=t.attached-1)&&Ot(jd(i,t.value),e,5,[i])};return t.value=n,t.attached=kd(),t}function jd(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rl=/^on[a-z]/,Yd=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Id(n,i,r):e==="style"?Fd(n,t,i):xs(e)?ta(e)||Wd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(n,e,i,r))?Ud(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Od(n,e,i,r))};function $d(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&rl.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||rl.test(e)&&dt(t)?!1:e in n}const Zd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Uh.props;const Kd=ht({patchProp:Yd},Dd);let sl;function Jd(){return sl||(sl=ud(Kd))}const Qd=(...n)=>{const e=Jd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ep(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function ep(n){return dt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Oi=typeof window<"u";function tp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function Hs(n,e){const t={};for(const i in e){const r=e[i];t[i]=Yt(r)?r.map(n):n(r)}return t}const gr=()=>{},Yt=Array.isArray,np=/\/$/,ip=n=>n.replace(np,"");function Ws(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=ap(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function rp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ol(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function sp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&$i(e.matched[i],t.matched[r])&&Ou(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function $i(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ou(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!op(n[t],e[t]))return!1;return!0}function op(n,e){return Yt(n)?al(n,e):Yt(e)?al(e,n):n===e}function al(n,e){return Yt(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ap(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var wr;(function(n){n.pop="pop",n.push="push"})(wr||(wr={}));var _r;(function(n){n.back="back",n.forward="forward",n.unknown=""})(_r||(_r={}));function lp(n){if(!n)if(Oi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ip(n)}const cp=/^[^#]+#/;function up(n,e){return n.replace(cp,"#")+e}function fp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ls=()=>({left:window.pageXOffset,top:window.pageYOffset});function hp(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=fp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ll(n,e){return(history.state?history.state.position-e:-1)+n}const ko=new Map;function dp(n,e){ko.set(n,e)}function pp(n){const e=ko.get(n);return ko.delete(n),e}let mp=()=>location.protocol+"//"+location.host;function Uu(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),ol(l,"")}return ol(t,n)+i+r}function gp(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Uu(n,location),g=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===g){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:d,type:wr.pop,direction:d?d>0?_r.forward:_r.back:_r.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Xe({},h.state,{scroll:Ls()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function cl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Ls():null}}function _p(n){const{history:e,location:t}=window,i={value:Uu(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:mp()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Xe({},e.state,cl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Xe({},r.value,e.state,{forward:l,scroll:Ls()});s(u.current,u,!0);const f=Xe({},cl(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function xp(n){n=lp(n);const e=_p(n),t=gp(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Xe({location:"",base:n,go:i,createHref:up.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vp(n){return typeof n=="string"||n&&typeof n=="object"}function zu(n){return typeof n=="string"||typeof n=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bu=Symbol("");var ul;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ul||(ul={}));function Zi(n,e){return Xe(new Error,{type:n,[Bu]:!0},e)}function ln(n,e){return n instanceof Error&&Bu in n&&(e==null||!!(n.type&e))}const fl="[^/]+?",Mp={sensitive:!1,strict:!1,start:!0,end:!0},yp=/[.+*?^${}()[\]/\\]/g;function bp(n,e){const t=Xe({},Mp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(yp,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:d,regexp:_}=h;s.push({name:g,repeatable:p,optional:d});const y=_||fl;if(y!==fl){m+=10;try{new RegExp(`(${y})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let A=p?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(A=d&&c.length<2?`(?:/${A})`:"/"+A),d&&(A+="?"),r+=A,m+=20,d&&(m+=-8),p&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:d}=m,_=g in c?c[g]:"";if(Yt(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Yt(_)?_.join("/"):_;if(!y)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Sp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Sp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(hl(i))return 1;if(hl(r))return-1}return r.length-i.length}function hl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Ep={type:0,value:""},Tp=/[a-zA-Z0-9_]/;function Ap(n){if(!n)return[[]];if(n==="/")return[[Ep]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Tp.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Cp(n,e,t){const i=bp(Ap(n.path),t),r=Xe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lp(n,e){const t=[],i=new Map;e=ml({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=Pp(u);g.aliasOf=h&&h.record;const p=ml(e,u),d=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)d.push(Xe({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let _,y;for(const A of d){const{path:E}=A;if(f&&E[0]!=="/"){const S=f.record.path,L=S[S.length-1]==="/"?"":"/";A.path=f.record.path+(E&&L+E)}if(_=Cp(A,f,p),h?h.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),m&&u.name&&!pl(_)&&a(u.name)),g.children){const S=g.children;for(let L=0;L<S.length;L++)s(S[L],_,h&&h.children[L])}h=h||_,l(_)}return y?()=>{a(y)}:gr}function a(u){if(zu(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&wp(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Gu(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!pl(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Zi(1,{location:u});p=h.record.name,m=Xe(dl(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&dl(u.params,h.keys.map(y=>y.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(y=>y.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw Zi(1,{location:u,currentLocation:f});p=h.record.name,m=Xe({},f.params,u.params),g=h.stringify(m)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:d,meta:Dp(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function dl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Pp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Rp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Rp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function pl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Dp(n){return n.reduce((e,t)=>Xe(e,t.meta),{})}function ml(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Gu(n,e){return e.children.some(t=>t===n||Gu(n,t))}const ku=/#/g,Ip=/&/g,Fp=/\//g,Np=/=/g,Op=/\?/g,Vu=/\+/g,Up=/%5B/g,zp=/%5D/g,Hu=/%5E/g,Bp=/%60/g,Wu=/%7B/g,Gp=/%7C/g,qu=/%7D/g,kp=/%20/g;function ya(n){return encodeURI(""+n).replace(Gp,"|").replace(Up,"[").replace(zp,"]")}function Vp(n){return ya(n).replace(Wu,"{").replace(qu,"}").replace(Hu,"^")}function Vo(n){return ya(n).replace(Vu,"%2B").replace(kp,"+").replace(ku,"%23").replace(Ip,"%26").replace(Bp,"`").replace(Wu,"{").replace(qu,"}").replace(Hu,"^")}function Hp(n){return Vo(n).replace(Np,"%3D")}function Wp(n){return ya(n).replace(ku,"%23").replace(Op,"%3F")}function qp(n){return n==null?"":Wp(n).replace(Fp,"%2F")}function _s(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Xp(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Vu," "),a=s.indexOf("="),o=_s(a<0?s:s.slice(0,a)),l=a<0?null:_s(s.slice(a+1));if(o in e){let c=e[o];Yt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function gl(n){let e="";for(let t in n){const i=n[t];if(t=Hp(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Yt(i)?i.map(s=>s&&Vo(s)):[i&&Vo(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function jp(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Yt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Yp=Symbol(""),_l=Symbol(""),ba=Symbol(""),Xu=Symbol(""),Ho=Symbol("");function ar(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Fn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Zi(4,{from:t,to:e})):f instanceof Error?o(f):vp(f)?o(Zi(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function qs(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if($p(o)){const c=(o.__vccOpts||o)[e];c&&r.push(Fn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=tp(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Fn(h,t,i,s,a)()}))}}return r}function $p(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function xl(n){const e=zn(ba),t=zn(Xu),i=It(()=>e.resolve(Hi(n.to))),r=It(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex($i.bind(null,u));if(h>-1)return h;const m=vl(l[c-2]);return c>1&&vl(u)===m&&f[f.length-1].path!==m?f.findIndex($i.bind(null,l[c-2])):h}),s=It(()=>r.value>-1&&Qp(t.params,i.value.params)),a=It(()=>r.value>-1&&r.value===t.matched.length-1&&Ou(t.params,i.value.params));function o(l={}){return Jp(l)?e[Hi(n.replace)?"replace":"push"](Hi(n.to)).catch(gr):Promise.resolve()}return{route:i,href:It(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Zp=Es({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xl,setup(n,{slots:e}){const t=Ar(xl(n)),{options:i}=zn(ba),r=It(()=>({[Ml(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ml(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Fu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Kp=Zp;function Jp(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Qp(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Yt(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function vl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ml=(n,e,t)=>n!=null?n:e!=null?e:t,em=Es({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=zn(Ho),r=It(()=>n.route||i.value),s=zn(_l,0),a=It(()=>{let c=Hi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=It(()=>r.value.matched[a.value]);os(_l,It(()=>a.value+1)),os(Yp,o),os(Ho,r);const l=tu();return as(()=>[l.value,o.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!$i(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return yl(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=Fu(h,Xe({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return yl(t.default,{Component:d,route:c})||d}}});function yl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const tm=em;function nm(n){const e=Lp(n.routes,n),t=n.parseQuery||Xp,i=n.stringifyQuery||gl,r=n.history,s=ar(),a=ar(),o=ar(),l=dh(En);let c=En;Oi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hs.bind(null,k=>""+k),f=Hs.bind(null,qp),h=Hs.bind(null,_s);function m(k,F){let re,ae;return zu(k)?(re=e.getRecordMatcher(k),ae=F):ae=k,e.addRoute(ae,re)}function g(k){const F=e.getRecordMatcher(k);F&&e.removeRoute(F)}function p(){return e.getRoutes().map(k=>k.record)}function d(k){return!!e.getRecordMatcher(k)}function _(k,F){if(F=Xe({},F||l.value),typeof k=="string"){const _e=Ws(t,k,F.path),w=e.resolve({path:_e.path},F),P=r.createHref(_e.fullPath);return Xe(_e,w,{params:h(w.params),hash:_s(_e.hash),redirectedFrom:void 0,href:P})}let re;if("path"in k)re=Xe({},k,{path:Ws(t,k.path,F.path).path});else{const _e=Xe({},k.params);for(const w in _e)_e[w]==null&&delete _e[w];re=Xe({},k,{params:f(k.params)}),F.params=f(F.params)}const ae=e.resolve(re,F),be=k.hash||"";ae.params=u(h(ae.params));const me=rp(i,Xe({},k,{hash:Vp(be),path:ae.path})),Te=r.createHref(me);return Xe({fullPath:me,hash:be,query:i===gl?jp(k.query):k.query||{}},ae,{redirectedFrom:void 0,href:Te})}function y(k){return typeof k=="string"?Ws(t,k,l.value.path):Xe({},k)}function A(k,F){if(c!==k)return Zi(8,{from:F,to:k})}function E(k){return U(k)}function S(k){return E(Xe(y(k),{replace:!0}))}function L(k){const F=k.matched[k.matched.length-1];if(F&&F.redirect){const{redirect:re}=F;let ae=typeof re=="function"?re(k):re;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=y(ae):{path:ae},ae.params={}),Xe({query:k.query,hash:k.hash,params:"path"in ae?{}:k.params},ae)}}function U(k,F){const re=c=_(k),ae=l.value,be=k.state,me=k.force,Te=k.replace===!0,_e=L(re);if(_e)return U(Xe(y(_e),{state:typeof _e=="object"?Xe({},be,_e.state):be,force:me,replace:Te}),F||re);const w=re;w.redirectedFrom=F;let P;return!me&&sp(i,ae,re)&&(P=Zi(16,{to:w,from:ae}),X(ae,ae,!0,!1)),(P?Promise.resolve(P):C(w,ae)).catch(G=>ln(G)?ln(G,2)?G:N(G):J(G,w,ae)).then(G=>{if(G){if(ln(G,2))return U(Xe({replace:Te},y(G.to),{state:typeof G.to=="object"?Xe({},be,G.to.state):be,force:me}),F||w)}else G=ne(w,ae,!0,Te,be);return I(w,ae,G),G})}function M(k,F){const re=A(k,F);return re?Promise.reject(re):Promise.resolve()}function C(k,F){let re;const[ae,be,me]=im(k,F);re=qs(ae.reverse(),"beforeRouteLeave",k,F);for(const _e of ae)_e.leaveGuards.forEach(w=>{re.push(Fn(w,k,F))});const Te=M.bind(null,k,F);return re.push(Te),vi(re).then(()=>{re=[];for(const _e of s.list())re.push(Fn(_e,k,F));return re.push(Te),vi(re)}).then(()=>{re=qs(be,"beforeRouteUpdate",k,F);for(const _e of be)_e.updateGuards.forEach(w=>{re.push(Fn(w,k,F))});return re.push(Te),vi(re)}).then(()=>{re=[];for(const _e of k.matched)if(_e.beforeEnter&&!F.matched.includes(_e))if(Yt(_e.beforeEnter))for(const w of _e.beforeEnter)re.push(Fn(w,k,F));else re.push(Fn(_e.beforeEnter,k,F));return re.push(Te),vi(re)}).then(()=>(k.matched.forEach(_e=>_e.enterCallbacks={}),re=qs(me,"beforeRouteEnter",k,F),re.push(Te),vi(re))).then(()=>{re=[];for(const _e of a.list())re.push(Fn(_e,k,F));return re.push(Te),vi(re)}).catch(_e=>ln(_e,8)?_e:Promise.reject(_e))}function I(k,F,re){for(const ae of o.list())ae(k,F,re)}function ne(k,F,re,ae,be){const me=A(k,F);if(me)return me;const Te=F===En,_e=Oi?history.state:{};re&&(ae||Te?r.replace(k.fullPath,Xe({scroll:Te&&_e&&_e.scroll},be)):r.push(k.fullPath,be)),l.value=k,X(k,F,re,Te),N()}let ge;function W(){ge||(ge=r.listen((k,F,re)=>{if(!we.listening)return;const ae=_(k),be=L(ae);if(be){U(Xe(be,{replace:!0}),ae).catch(gr);return}c=ae;const me=l.value;Oi&&dp(ll(me.fullPath,re.delta),Ls()),C(ae,me).catch(Te=>ln(Te,12)?Te:ln(Te,2)?(U(Te.to,ae).then(_e=>{ln(_e,20)&&!re.delta&&re.type===wr.pop&&r.go(-1,!1)}).catch(gr),Promise.reject()):(re.delta&&r.go(-re.delta,!1),J(Te,ae,me))).then(Te=>{Te=Te||ne(ae,me,!1),Te&&(re.delta&&!ln(Te,8)?r.go(-re.delta,!1):re.type===wr.pop&&ln(Te,20)&&r.go(-1,!1)),I(ae,me,Te)}).catch(gr)}))}let O=ar(),Q=ar(),ie;function J(k,F,re){N(k);const ae=Q.list();return ae.length?ae.forEach(be=>be(k,F,re)):console.error(k),Promise.reject(k)}function H(){return ie&&l.value!==En?Promise.resolve():new Promise((k,F)=>{O.add([k,F])})}function N(k){return ie||(ie=!k,W(),O.list().forEach(([F,re])=>k?re(k):F()),O.reset()),k}function X(k,F,re,ae){const{scrollBehavior:be}=n;if(!Oi||!be)return Promise.resolve();const me=!re&&pp(ll(k.fullPath,0))||(ae||!re)&&history.state&&history.state.scroll||null;return ou().then(()=>be(k,F,me)).then(Te=>Te&&hp(Te)).catch(Te=>J(Te,k,F))}const he=k=>r.go(k);let ce;const oe=new Set,we={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:p,resolve:_,options:n,push:E,replace:S,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:H,install(k){const F=this;k.component("RouterLink",Kp),k.component("RouterView",tm),k.config.globalProperties.$router=F,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Hi(l)}),Oi&&!ce&&l.value===En&&(ce=!0,E(r.location).catch(be=>{}));const re={};for(const be in En)re[be]=It(()=>l.value[be]);k.provide(ba,F),k.provide(Xu,Ar(re)),k.provide(Ho,l);const ae=k.unmount;oe.add(k),k.unmount=function(){oe.delete(k),oe.size<1&&(c=En,ge&&ge(),ge=null,l.value=En,ce=!1,ie=!1),ae()}}};return we}function vi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function im(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>$i(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>$i(c,l))||r.push(l))}return[t,i,r]}const rm="/solar/assets/sun.c2fb3ff1.jpg",sm="/solar/assets/mercury.ae66c484.jpg",om="/solar/assets/venus.f354d5f2.jpg",am="/solar/assets/earth.ced5955f.jpg",lm="/solar/assets/mars.8fc78106.jpg",cm="/solar/assets/jupiter.c4319905.jpg",um="/solar/assets/saturn.34570ec3.jpg",fm="/solar/assets/uranus.166d3f03.jpg",hm="/solar/assets/neptune.db3fc038.jpg";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="144",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dm=0,bl=1,pm=2,ju=1,mm=2,hr=3,Ki=0,Ut=1,Nn=2,Bn=0,qi=1,Sl=2,wl=3,El=4,gm=5,Ui=100,_m=101,xm=102,Tl=103,Al=104,vm=200,Mm=201,ym=202,bm=203,Yu=204,$u=205,Sm=206,wm=207,Em=208,Tm=209,Am=210,Cm=0,Lm=1,Pm=2,Wo=3,Rm=4,Dm=5,Im=6,Fm=7,Zu=0,Nm=1,Om=2,vn=0,Um=1,zm=2,Bm=3,Gm=4,km=5,Ku=300,Ji=301,Qi=302,qo=303,Xo=304,Ps=306,jo=1e3,Wt=1001,Yo=1002,vt=1003,Cl=1004,Ll=1005,Rt=1006,Vm=1007,Rs=1008,ui=1009,Hm=1010,Wm=1011,Ju=1012,qm=1013,ii=1014,ri=1015,Er=1016,Xm=1017,jm=1018,Xi=1020,Ym=1021,$m=1022,nn=1023,Zm=1024,Km=1025,li=1026,er=1027,Jm=1028,Qm=1029,eg=1030,tg=1031,ng=1033,Xs=33776,js=33777,Ys=33778,$s=33779,Pl=35840,Rl=35841,Dl=35842,Il=35843,ig=36196,Fl=37492,Nl=37496,Ol=37808,Ul=37809,zl=37810,Bl=37811,Gl=37812,kl=37813,Vl=37814,Hl=37815,Wl=37816,ql=37817,Xl=37818,jl=37819,Yl=37820,$l=37821,Zl=36492,fi=3e3,Ke=3001,rg=3200,sg=3201,og=0,ag=1,mn="srgb",si="srgb-linear",Zs=7680,lg=519,Kl=35044,Jl="300 es",$o=1035;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Ql=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function cg(n,e){return(n%e+e)%e}function Js(n,e,t){return(1-t)*n+t*e}function ec(n){return(n&n-1)===0&&n!==0}function Zo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],y=r[1],A=r[4],E=r[7],S=r[2],L=r[5],U=r[8];return s[0]=a*p+o*y+l*S,s[3]=a*d+o*A+l*L,s[6]=a*_+o*E+l*U,s[1]=c*p+u*y+f*S,s[4]=c*d+u*A+f*L,s[7]=c*_+u*E+f*U,s[2]=h*p+m*y+g*S,s[5]=h*d+m*A+g*L,s[8]=h*_+m*E+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Qs={[mn]:{[si]:ci},[si]:{[mn]:us}},Bt={legacyMode:!0,get workingColorSpace(){return si},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Qs[e]&&Qs[e][t]!==void 0){const i=Qs[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Gt={h:0,s:0,l:0},Br={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Gr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=si){return this.r=e,this.g=t,this.b=i,Bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=si){if(e=cg(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const i=ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Bt.fromWorkingColorSpace(Gr(this,nt),e),Mt(nt.r*255,0,255)<<16^Mt(nt.g*255,0,255)<<8^Mt(nt.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=si){Bt.fromWorkingColorSpace(Gr(this,nt),t);const i=nt.r,r=nt.g,s=nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=si){return Bt.fromWorkingColorSpace(Gr(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=mn){return Bt.fromWorkingColorSpace(Gr(this,nt),e),e!==mn?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=i,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Br);const i=Js(Gt.h,Br.h,t),r=Js(Gt.s,Br.s,t),s=Js(Gt.l,Br.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=ef;let bi;class tf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Tr("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nf{constructor(e=null){this.isSource=!0,this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(to(r[a].image)):s.push(to(r[a]))}else s=to(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ug=0;class zt extends mi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Wt,r=Wt,s=Rt,a=Rs,o=nn,l=ui,c=1,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Cr(),this.name="",this.source=new nf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ku;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,S=(_+1)/2,L=(u+h)/4,U=(f+p)/4,M=(g+d)/4;return A>E&&A>S?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=L/i,s=U/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=M/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=U/s,r=M/s),this.set(i,r,s,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends mi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Rt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rf extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fg extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,y=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const S=Math.sqrt(A),L=Math.atan2(S,_*y);d=Math.sin(d*L)/S,o=Math.sin(o*L)/S}const E=o*y;if(l=l*d+h*E,c=c*d+m*E,u=u*d+g*E,f=f*d+p*E,d===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new B,tc=new di;class Lr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox),io.applyMatrix4(e.matrixWorld),this.union(io);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),kr.subVectors(this.max,lr),Si.subVectors(e.a,lr),wi.subVectors(e.b,lr),Ei.subVectors(e.c,lr),Tn.subVectors(wi,Si),An.subVectors(Ei,wi),Yn.subVectors(Si,Ei);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Yn.z,Yn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Yn.z,0,-Yn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Yn.y,Yn.x,0];return!ro(t,Si,wi,Ei,kr)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,Si,wi,Ei,kr))?!1:(Vr.crossVectors(Tn,An),t=[Vr.x,Vr.y,Vr.z],ro(t,Si,wi,Ei,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new B,new B,new B,new B,new B,new B,new B,new B],jn=new B,io=new Lr,Si=new B,wi=new B,Ei=new B,Tn=new B,An=new B,Yn=new B,lr=new B,kr=new B,Vr=new B,$n=new B;function ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$n.fromArray(n,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=i.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hg=new Lr,nc=new B,Hr=new B,so=new B;class wa{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(so.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Hr.set(0,0,1).multiplyScalar(e.radius):Hr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(nc.copy(e.center).add(Hr)),this.expandByPoint(nc.copy(e.center).sub(Hr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new B,oo=new B,Wr=new B,Cn=new B,ao=new B,qr=new B,lo=new B;class dg{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oo.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Cn.dot(this.direction),l=-Cn.dot(Wr),c=Cn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Wr).multiplyScalar(h).add(oo),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){ao.subVectors(t,e),qr.subVectors(i,e),lo.crossVectors(ao,qr);let a=this.direction.dot(lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(qr.crossVectors(Cn,qr));if(l<0)return null;const c=o*this.direction.dot(ao.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,i){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Ln.crossVectors(i,St),Ln.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Ln.crossVectors(i,St)),Ln.normalize(),Xr.crossVectors(St,Ln),r[0]=Ln.x,r[4]=Xr.x,r[8]=St.x,r[1]=Ln.y,r[5]=Xr.y,r[9]=St.y,r[2]=Ln.z,r[6]=Xr.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],y=i[3],A=i[7],E=i[11],S=i[15],L=r[0],U=r[4],M=r[8],C=r[12],I=r[1],ne=r[5],ge=r[9],W=r[13],O=r[2],Q=r[6],ie=r[10],J=r[14],H=r[3],N=r[7],X=r[11],he=r[15];return s[0]=a*L+o*I+l*O+c*H,s[4]=a*U+o*ne+l*Q+c*N,s[8]=a*M+o*ge+l*ie+c*X,s[12]=a*C+o*W+l*J+c*he,s[1]=u*L+f*I+h*O+m*H,s[5]=u*U+f*ne+h*Q+m*N,s[9]=u*M+f*ge+h*ie+m*X,s[13]=u*C+f*W+h*J+m*he,s[2]=g*L+p*I+d*O+_*H,s[6]=g*U+p*ne+d*Q+_*N,s[10]=g*M+p*ge+d*ie+_*X,s[14]=g*C+p*W+d*J+_*he,s[3]=y*L+A*I+E*O+S*H,s[7]=y*U+A*ne+E*Q+S*N,s[11]=y*M+A*ge+E*ie+S*X,s[15]=y*C+A*W+E*J+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],y=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,A=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,E=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,S=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,L=t*y+i*A+r*E+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=y*U,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*U,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*U,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*U,e[4]=A*U,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*U,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*U,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*U,e[8]=E*U,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*U,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*U,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*U,e[12]=S*U,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*U,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*d-t*o*d)*U,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,y=l*c,A=l*u,E=l*f,S=i.x,L=i.y,U=i.z;return r[0]=(1-(p+_))*S,r[1]=(m+E)*S,r[2]=(g-A)*S,r[3]=0,r[4]=(m-E)*L,r[5]=(1-(h+_))*L,r[6]=(d+y)*L,r[7]=0,r[8]=(g+A)*U,r[9]=(d-y)*U,r[10]=(1-(h+p))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,f=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=f,kt.elements[9]*=f,kt.elements[10]*=f,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new B,kt=new lt,pg=new B(0,0,0),mg=new B(1,1,1),Ln=new B,Xr=new B,St=new B,ic=new lt,rc=new di;class Pr{constructor(e=0,t=0,i=0,r=Pr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Pr.DefaultOrder="XYZ";Pr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gg=0;const sc=new B,Ai=new di,fn=new lt,jr=new B,cr=new B,_g=new B,xg=new di,oc=new B(1,0,0),ac=new B(0,1,0),lc=new B(0,0,1),vg={type:"added"},cc={type:"removed"};class Et extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DefaultUp.clone();const e=new B,t=new Pr,i=new di,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Nt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DefaultMatrixWorldAutoUpdate,this.layers=new sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(cr,jr,this.up):fn.lookAt(jr,cr,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(fn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DefaultUp=new B(0,1,0);Et.DefaultMatrixAutoUpdate=!0;Et.DefaultMatrixWorldAutoUpdate=!0;const Vt=new B,hn=new B,co=new B,dn=new B,Ci=new B,Li=new B,uc=new B,uo=new B,fo=new B,ho=new B;class gn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vt.subVectors(r,t),hn.subVectors(i,t),co.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(hn),l=Vt.dot(co),c=hn.dot(hn),u=hn.dot(co),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l}static isFrontFacing(e,t,i,r){return Vt.subVectors(i,t),hn.subVectors(e,t),Vt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Vt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,i),Li.subVectors(s,i),uo.subVectors(e,i);const l=Ci.dot(uo),c=Li.dot(uo);if(l<=0&&c<=0)return t.copy(i);fo.subVectors(e,r);const u=Ci.dot(fo),f=Li.dot(fo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ci,a);ho.subVectors(e,s);const m=Ci.dot(ho),g=Li.dot(ho);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Li,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return uc.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(uc,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(Ci,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mg=0;class Ds extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=qi,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yu,this.blendDst=$u,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ea extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new B,Yr=new ze;class rn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class of extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class af extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yg=0;const Pt=new lt,po=new Et,Pi=new B,wt=new Lr,ur=new Lr,rt=new B;class Vn extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?af:of)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(wt.min,ur.min),wt.expandByPoint(rt),rt.addVectors(wt.max,ur.max),wt.expandByPoint(rt)):(wt.expandByPoint(ur.min),wt.expandByPoint(ur.max))}wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rt.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),rt.add(Pi)),r=Math.max(r,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new B,u[I]=new B;const f=new B,h=new B,m=new B,g=new ze,p=new ze,d=new ze,_=new B,y=new B;function A(I,ne,ge){f.fromArray(r,I*3),h.fromArray(r,ne*3),m.fromArray(r,ge*3),g.fromArray(a,I*2),p.fromArray(a,ne*2),d.fromArray(a,ge*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const W=1/(p.x*d.y-d.x*p.y);!isFinite(W)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(W),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(W),c[I].add(_),c[ne].add(_),c[ge].add(_),u[I].add(y),u[ne].add(y),u[ge].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let I=0,ne=E.length;I<ne;++I){const ge=E[I],W=ge.start,O=ge.count;for(let Q=W,ie=W+O;Q<ie;Q+=3)A(i[Q+0],i[Q+1],i[Q+2])}const S=new B,L=new B,U=new B,M=new B;function C(I){U.fromArray(s,I*3),M.copy(U);const ne=c[I];S.copy(ne),S.sub(U.multiplyScalar(U.dot(ne))).normalize(),L.crossVectors(M,ne);const W=L.dot(u[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=W}for(let I=0,ne=E.length;I<ne;++I){const ge=E[I],W=ge.start,O=ge.count;for(let Q=W,ie=W+O;Q<ie;Q+=3)C(i[Q+0]),C(i[Q+1]),C(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new lt,Ri=new dg,mo=new wa,Pn=new B,Rn=new B,Dn=new B,go=new B,_o=new B,xo=new B,$r=new B,Zr=new B,Kr=new B,Jr=new ze,Qr=new ze,es=new ze,vo=new B,ts=new B;class _n extends Et{constructor(e=new Vn,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),e.ray.intersectsSphere(mo)===!1)||(fc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(fc),i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,L=E;S<L;S+=3){const U=o.getX(S),M=o.getX(S+1),C=o.getX(S+2);a=ns(this,y,e,Ri,l,c,u,f,h,U,M,C),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const A=o.getX(_),E=o.getX(_+1),S=o.getX(_+2);a=ns(this,r,e,Ri,l,c,u,f,h,A,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,L=E;S<L;S+=3){const U=S,M=S+1,C=S+2;a=ns(this,y,e,Ri,l,c,u,f,h,U,M,C),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const A=_,E=_+1,S=_+2;a=ns(this,r,e,Ri,l,c,u,f,h,A,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function bg(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Nn,o),l===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,r,s,a,o,l,c,u,f){Pn.fromBufferAttribute(r,c),Rn.fromBufferAttribute(r,u),Dn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){$r.set(0,0,0),Zr.set(0,0,0),Kr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(go.fromBufferAttribute(_,c),_o.fromBufferAttribute(_,u),xo.fromBufferAttribute(_,f),a?($r.addScaledVector(go,d),Zr.addScaledVector(_o,d),Kr.addScaledVector(xo,d)):($r.addScaledVector(go.sub(Pn),d),Zr.addScaledVector(_o.sub(Rn),d),Kr.addScaledVector(xo.sub(Dn),d)))}Pn.add($r),Rn.add(Zr),Dn.add(Kr)}n.isSkinnedMesh&&(n.boneTransform(c,Pn),n.boneTransform(u,Rn),n.boneTransform(f,Dn));const m=bg(n,e,t,i,Pn,Rn,Dn,vo);if(m){o&&(Jr.fromBufferAttribute(o,c),Qr.fromBufferAttribute(o,u),es.fromBufferAttribute(o,f),m.uv=gn.getUV(vo,Pn,Rn,Dn,Jr,Qr,es,new ze)),l&&(Jr.fromBufferAttribute(l,c),Qr.fromBufferAttribute(l,u),es.fromBufferAttribute(l,f),m.uv2=gn.getUV(vo,Pn,Rn,Dn,Jr,Qr,es,new ze));const g={a:c,b:u,c:f,normal:new B,materialIndex:0};gn.getNormal(Pn,Rn,Dn,g.normal),m.face=g}return m}class Rr extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function g(p,d,_,y,A,E,S,L,U,M,C){const I=E/U,ne=S/M,ge=E/2,W=S/2,O=L/2,Q=U+1,ie=M+1;let J=0,H=0;const N=new B;for(let X=0;X<ie;X++){const he=X*ne-W;for(let ce=0;ce<Q;ce++){const oe=ce*I-ge;N[p]=oe*y,N[d]=he*A,N[_]=O,c.push(N.x,N.y,N.z),N[p]=0,N[d]=0,N[_]=L>0?1:-1,u.push(N.x,N.y,N.z),f.push(ce/U),f.push(1-X/M),J+=1}}for(let X=0;X<M;X++)for(let he=0;he<U;he++){const ce=h+he+Q*X,oe=h+he+Q*(X+1),we=h+(he+1)+Q*(X+1),k=h+(he+1)+Q*X;l.push(ce,oe,k),l.push(oe,we,k),H+=6}o.addGroup(m,H,C),m+=H,h+=J}}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ut(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const wg={clone:tr,merge:ut};var Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lf extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends lf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=90,Ii=1;class Ag extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Dt(Di,Ii,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new B(1,0,0)),this.add(r);const s=new Dt(Di,Ii,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(-1,0,0)),this.add(s);const a=new Dt(Di,Ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new B(0,1,0)),this.add(a);const o=new Dt(Di,Ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new B(0,-1,0)),this.add(o);const l=new Dt(Di,Ii,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new B(0,0,1)),this.add(l);const c=new Dt(Di,Ii,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new B(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class cf extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cg extends hi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Bn});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Rt),new Ag(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Mo=new B,Lg=new B,Pg=new Nt;class Kn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Mo.subVectors(i,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Mo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pg.getNormalMatrix(e),r=this.coplanarPoint(Mo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new wa,is=new B;class uf{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],y=i[14],A=i[15];return t[0].setComponents(o-r,f-l,p-h,A-d).normalize(),t[1].setComponents(o+r,f+l,p+h,A+d).normalize(),t[2].setComponents(o+s,f+c,p+m,A+_).normalize(),t[3].setComponents(o-s,f-c,p-m,A-_).normalize(),t[4].setComponents(o-a,f-u,p-g,A-y).normalize(),t[5].setComponents(o+a,f+u,p+g,A+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ta extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const y=_*h-a;for(let A=0;A<c;A++){const E=A*f-s;g.push(E,-y,0),p.push(0,0,1),d.push(A/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<o;y++){const A=y+c*_,E=y+c*(_+1),S=y+1+c*(_+1),L=y+1+c*_;m.push(A,E,L),m.push(E,S,L)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(d,2))}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg="vec3 transformed = vec3( position );",Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
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
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,M_=`uniform bool receiveShadow;
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
#endif`,y_=`#if defined( USE_ENVMAP )
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
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,w_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,T_=`PhysicalMaterial material;
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
#endif`,A_=`struct PhysicalMaterial {
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
}`,C_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,X_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,w0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,E0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,T0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,A0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,C0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#include <envmap_common_pars_fragment>
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
}`,F0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,G0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:Dg,alphamap_pars_fragment:Ig,alphatest_fragment:Fg,alphatest_pars_fragment:Ng,aomap_fragment:Og,aomap_pars_fragment:Ug,begin_vertex:zg,beginnormal_vertex:Bg,bsdfs:Gg,iridescence_fragment:kg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Xg,color_fragment:jg,color_pars_fragment:Yg,color_pars_vertex:$g,color_vertex:Zg,common:Kg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,encodings_fragment:r_,encodings_pars_fragment:s_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:u_,fog_vertex:f_,fog_pars_vertex:h_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_fragment:g_,lightmap_pars_fragment:__,lights_lambert_fragment:x_,lights_lambert_pars_fragment:v_,lights_pars_begin:M_,lights_toon_fragment:b_,lights_toon_pars_fragment:S_,lights_phong_fragment:w_,lights_phong_pars_fragment:E_,lights_physical_fragment:T_,lights_physical_pars_fragment:A_,lights_fragment_begin:C_,lights_fragment_maps:L_,lights_fragment_end:P_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:D_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:F_,map_fragment:N_,map_pars_fragment:O_,map_particle_fragment:U_,map_particle_pars_fragment:z_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:G_,morphcolor_vertex:k_,morphnormal_vertex:V_,morphtarget_pars_vertex:H_,morphtarget_vertex:W_,normal_fragment_begin:q_,normal_fragment_maps:X_,normal_pars_fragment:j_,normal_pars_vertex:Y_,normal_vertex:$_,normalmap_pars_fragment:Z_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:e0,output_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:f0,shadowmask_pars_fragment:h0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:y0,transmission_pars_fragment:b0,uv_pars_fragment:S0,uv_pars_vertex:w0,uv_vertex:E0,uv2_pars_fragment:T0,uv2_pars_vertex:A0,uv2_vertex:C0,worldpos_vertex:L0,background_vert:P0,background_frag:R0,cube_vert:D0,cube_frag:I0,depth_vert:F0,depth_frag:N0,distanceRGBA_vert:O0,distanceRGBA_frag:U0,equirect_vert:z0,equirect_frag:B0,linedashed_vert:G0,linedashed_frag:k0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:W0,meshlambert_frag:q0,meshmatcap_vert:X0,meshmatcap_frag:j0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:K0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:rx,shadow_frag:sx,sprite_vert:ox,sprite_frag:ax},Me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},en={basic:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:ut([Me.points,Me.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:ut([Me.common,Me.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:ut([Me.sprite,Me.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:ut([Me.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:ut([Me.common,Me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:ut([Me.lights,Me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};en.physical={uniforms:ut([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function lx(n,e,t,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=e.get(y));const A=n.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(y=null),y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ps)?(c===void 0&&(c=new _n(new Rr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:tr(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _n(new Ta(2,2),new pi({name:"BackgroundMaterial",uniforms:tr(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function cx(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(O,Q,ie,J,H){let N=!1;if(a){const X=p(J,ie,Q);c!==X&&(c=X,m(c.object)),N=_(O,J,ie,H),N&&y(O,J,ie,H)}else{const X=Q.wireframe===!0;(c.geometry!==J.id||c.program!==ie.id||c.wireframe!==X)&&(c.geometry=J.id,c.program=ie.id,c.wireframe=X,N=!0)}H!==null&&t.update(H,34963),(N||u)&&(u=!1,M(O,Q,ie,J),H!==null&&n.bindBuffer(34963,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,Q,ie){const J=ie.wireframe===!0;let H=o[O.id];H===void 0&&(H={},o[O.id]=H);let N=H[Q.id];N===void 0&&(N={},H[Q.id]=N);let X=N[J];return X===void 0&&(X=d(h()),N[J]=X),X}function d(O){const Q=[],ie=[],J=[];for(let H=0;H<r;H++)Q[H]=0,ie[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ie,attributeDivisors:J,object:O,attributes:{},index:null}}function _(O,Q,ie,J){const H=c.attributes,N=Q.attributes;let X=0;const he=ie.getAttributes();for(const ce in he)if(he[ce].location>=0){const we=H[ce];let k=N[ce];if(k===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),we===void 0||we.attribute!==k||k&&we.data!==k.data)return!0;X++}return c.attributesNum!==X||c.index!==J}function y(O,Q,ie,J){const H={},N=Q.attributes;let X=0;const he=ie.getAttributes();for(const ce in he)if(he[ce].location>=0){let we=N[ce];we===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(we=O.instanceColor));const k={};k.attribute=we,we&&we.data&&(k.data=we.data),H[ce]=k,X++}c.attributes=H,c.attributesNum=X,c.index=J}function A(){const O=c.newAttributes;for(let Q=0,ie=O.length;Q<ie;Q++)O[Q]=0}function E(O){S(O,0)}function S(O,Q){const ie=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;ie[O]=1,J[O]===0&&(n.enableVertexAttribArray(O),J[O]=1),H[O]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Q),H[O]=Q)}function L(){const O=c.newAttributes,Q=c.enabledAttributes;for(let ie=0,J=Q.length;ie<J;ie++)Q[ie]!==O[ie]&&(n.disableVertexAttribArray(ie),Q[ie]=0)}function U(O,Q,ie,J,H,N){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(O,Q,ie,H,N):n.vertexAttribPointer(O,Q,ie,J,H,N)}function M(O,Q,ie,J){if(i.isWebGL2===!1&&(O.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const H=J.attributes,N=ie.getAttributes(),X=Q.defaultAttributeValues;for(const he in N){const ce=N[he];if(ce.location>=0){let oe=H[he];if(oe===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const we=oe.normalized,k=oe.itemSize,F=t.get(oe);if(F===void 0)continue;const re=F.buffer,ae=F.type,be=F.bytesPerElement;if(oe.isInterleavedBufferAttribute){const me=oe.data,Te=me.stride,_e=oe.offset;if(me.isInstancedInterleavedBuffer){for(let w=0;w<ce.locationSize;w++)S(ce.location+w,me.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let w=0;w<ce.locationSize;w++)E(ce.location+w);n.bindBuffer(34962,re);for(let w=0;w<ce.locationSize;w++)U(ce.location+w,k/ce.locationSize,ae,we,Te*be,(_e+k/ce.locationSize*w)*be)}else{if(oe.isInstancedBufferAttribute){for(let me=0;me<ce.locationSize;me++)S(ce.location+me,oe.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<ce.locationSize;me++)E(ce.location+me);n.bindBuffer(34962,re);for(let me=0;me<ce.locationSize;me++)U(ce.location+me,k/ce.locationSize,ae,we,k*be,k/ce.locationSize*me*be)}}else if(X!==void 0){const we=X[he];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(ce.location,we);break;case 3:n.vertexAttrib3fv(ce.location,we);break;case 4:n.vertexAttrib4fv(ce.location,we);break;default:n.vertexAttrib1fv(ce.location,we)}}}}L()}function C(){ge();for(const O in o){const Q=o[O];for(const ie in Q){const J=Q[ie];for(const H in J)g(J[H].object),delete J[H];delete Q[ie]}delete o[O]}}function I(O){if(o[O.id]===void 0)return;const Q=o[O.id];for(const ie in Q){const J=Q[ie];for(const H in J)g(J[H].object),delete J[H];delete Q[ie]}delete o[O.id]}function ne(O){for(const Q in o){const ie=o[Q];if(ie[O.id]===void 0)continue;const J=ie[O.id];for(const H in J)g(J[H].object),delete J[H];delete ie[O.id]}}function ge(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ge,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:ne,initAttributes:A,enableAttribute:E,disableUnusedAttributes:L}}function ux(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function fx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),A=h>0,E=a||e.has("OES_texture_float"),S=A&&E,L=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:L}}function hx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Kn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const y=s?0:i,A=y*4;let E=_.clippingState||null;l.value=E,E=u(g,h,A,m);for(let S=0;S!==A;++S)E[S]=t[S];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,E=m;A!==p;++A,E+=4)a.copy(f[A]).applyMatrix4(y,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function dx(n){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=Ji:o===Xo&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===qo||o===Xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class px extends lf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,hc=[.125,.215,.35,.446,.526,.582],ni=20,yo=new px,dc=new Ye;let bo=null;const Jn=(1+Math.sqrt(5))/2,Ni=1/Jn,pc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Jn,Ni),new B(0,Jn,-Ni),new B(Ni,0,Jn),new B(-Ni,0,Jn),new B(Jn,Ni,0),new B(-Jn,Ni,0)];class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Er,format:nn,encoding:fi,depthBuffer:!1},r=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(s)),this._blurMaterial=gx(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,i,r){const o=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(dc),u.toneMapping=vn,u.autoClear=!1;const m=new Ea({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new _n(new Rr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(dc),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):y===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const A=this._cubeSize;rs(r,y*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pc[(r-1)%pc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ni-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):ni;d>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ni}`);const _=[];let y=0;for(let U=0;U<ni;++U){const M=U/p,C=Math.exp(-M*M/2);_.push(C),U===0?y+=C:U<d&&(y+=2*C)}for(let U=0;U<_.length;U++)_[U]=_[U]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[r],S=3*E*(r>A-Bi?r-A+Bi:0),L=4*(this._cubeSize-E);rs(t,S,L,3*E,2*E),l.setRenderTarget(t),l.render(f,yo)}}function mx(n){const e=[],t=[],i=[];let r=n;const s=n-Bi+1+hc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Bi?l=hc[a-n+Bi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,y=new Float32Array(p*g*m),A=new Float32Array(d*g*m),E=new Float32Array(_*g*m);for(let L=0;L<m;L++){const U=L%3*2/3-1,M=L>2?0:-1,C=[U,M,0,U+2/3,M,0,U+2/3,M+1,0,U,M,0,U+2/3,M+1,0,U,M+1,0];y.set(C,p*g*L),A.set(h,d*g*L);const I=[L,L,L,L,L,L];E.set(I,_*g*L)}const S=new Vn;S.setAttribute("position",new rn(y,p)),S.setAttribute("uv",new rn(A,d)),S.setAttribute("faceIndex",new rn(E,_)),e.push(S),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gc(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gx(n,e,t){const i=new Float32Array(ni),r=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function _c(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function xc(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function _x(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qo||l===Xo,u=l===Ji||l===Qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new mc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new mc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let A=0,E=y.length;A<E;A+=3){const S=y[A+0],L=y[A+1],U=y[A+2];h.push(S,L,L,U,U,S)}}else{const y=g.array;p=g.version;for(let A=0,E=y.length/3-1;A<E;A+=3){const S=A+0,L=A+1,U=A+2;h.push(S,L,L,U,U,S)}}const d=new(Qu(h)?af:of)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Mx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function yx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bx(n,e){return n[0]-e[0]}function Sx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let ie=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};var g=ie;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;E===!0&&(I=1),S===!0&&(I=2),L===!0&&(I=3);let ne=u.attributes.position.count*I,ge=1;ne>e.maxTextureSize&&(ge=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const W=new Float32Array(ne*ge*4*d),O=new rf(W,ne,ge,d);O.type=ri,O.needsUpdate=!0;const Q=I*4;for(let J=0;J<d;J++){const H=U[J],N=M[J],X=C[J],he=ne*ge*4*J;for(let ce=0;ce<H.count;ce++){const oe=ce*Q;E===!0&&(a.fromBufferAttribute(H,ce),W[he+oe+0]=a.x,W[he+oe+1]=a.y,W[he+oe+2]=a.z,W[he+oe+3]=0),S===!0&&(a.fromBufferAttribute(N,ce),W[he+oe+4]=a.x,W[he+oe+5]=a.y,W[he+oe+6]=a.z,W[he+oe+7]=0),L===!0&&(a.fromBufferAttribute(X,ce),W[he+oe+8]=a.x,W[he+oe+9]=a.y,W[he+oe+10]=a.z,W[he+oe+11]=X.itemSize===4?a.w:1)}}_={count:d,texture:O,size:new ze(ne,ge)},s.set(u,_),u.addEventListener("dispose",ie)}let y=0;for(let E=0;E<m.length;E++)y+=m[E];const A=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let S=0;S<p;S++)d[S]=[S,0];i[u.id]=d}for(let S=0;S<p;S++){const L=d[S];L[0]=S,L[1]=m[S]}d.sort(Sx);for(let S=0;S<8;S++)S<p&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(bx);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const L=o[S],U=L[0],M=L[1];U!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+S)!==_[U]&&u.setAttribute("morphTarget"+S,_[U]),y&&u.getAttribute("morphNormal"+S)!==y[U]&&u.setAttribute("morphNormal"+S,y[U]),r[S]=M,A+=M):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),y&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ex(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const hf=new zt,df=new rf,pf=new fg,mf=new cf,vc=[],Mc=[],yc=new Float32Array(16),bc=new Float32Array(9),Sc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Is(n,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),_t(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;bc.set(i),n.uniformMatrix3fv(this.addr,!1,bc),_t(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),_t(t,i)}}function Ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;gt(t,e)||(n.uniform2iv(this.addr,e),_t(t,e))}function Nx(n,e){const t=this.cache;gt(t,e)||(n.uniform3iv(this.addr,e),_t(t,e))}function Ox(n,e){const t=this.cache;gt(t,e)||(n.uniform4iv(this.addr,e),_t(t,e))}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;gt(t,e)||(n.uniform2uiv(this.addr,e),_t(t,e))}function Bx(n,e){const t=this.cache;gt(t,e)||(n.uniform3uiv(this.addr,e),_t(t,e))}function Gx(n,e){const t=this.cache;gt(t,e)||(n.uniform4uiv(this.addr,e),_t(t,e))}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||hf,r)}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pf,r)}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mf,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||df,r)}function qx(n){switch(n){case 5126:return Tx;case 35664:return Ax;case 35665:return Cx;case 35666:return Lx;case 35674:return Px;case 35675:return Rx;case 35676:return Dx;case 5124:case 35670:return Ix;case 35667:case 35671:return Fx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ox;case 5125:return Ux;case 36294:return zx;case 36295:return Bx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Wx}}function Xx(n,e){n.uniform1fv(this.addr,e)}function jx(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Yx(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function $x(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kx(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jx(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qx(n,e){n.uniform1iv(this.addr,e)}function ev(n,e){n.uniform2iv(this.addr,e)}function tv(n,e){n.uniform3iv(this.addr,e)}function nv(n,e){n.uniform4iv(this.addr,e)}function iv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function sv(n,e){n.uniform3uiv(this.addr,e)}function ov(n,e){n.uniform4uiv(this.addr,e)}function av(n,e,t){const i=e.length,r=Is(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||hf,r[s])}function lv(n,e,t){const i=e.length,r=Is(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||pf,r[s])}function cv(n,e,t){const i=e.length,r=Is(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||mf,r[s])}function uv(n,e,t){const i=e.length,r=Is(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||df,r[s])}function fv(n){switch(n){case 5126:return Xx;case 35664:return jx;case 35665:return Yx;case 35666:return $x;case 35674:return Zx;case 35675:return Kx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}class hv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qx(t.type)}}class dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=fv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function wc(n,e){n.seq.push(e),n.map[e.id]=e}function mv(n,e,t){const i=n.name,r=i.length;for(So.lastIndex=0;;){const s=So.exec(i),a=So.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wc(t,c===void 0?new hv(o,n,e):new dv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new pv(o),wc(t,f)),t=f}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);mv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let gv=0;function _v(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function xv(n){switch(n){case fi:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Tc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_v(n.getShaderSource(e),a)}else return r}function vv(n,e){const t=xv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mv(n,e){let t;switch(e){case Um:t="Linear";break;case zm:t="Reinhard";break;case Bm:t="OptimizedCineon";break;case Gm:t="ACESFilmic";break;case km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yv(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function bv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function Ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(n){return n.replace(wv,Ev)}function Ev(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ko(t)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace(Tv,Av)}function Av(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Lv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function Dv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Iv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cv(t),c=Lv(t),u=Pv(t),f=Rv(t),h=Dv(t),m=t.isWebGL2?"":yv(t),g=bv(s),p=r.createProgram();let d,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(dr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(d=[Pc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[m,Pc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,vv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Ko(a),a=Ac(a,t),a=Cc(a,t),o=Ko(o),o=Ac(o,t),o=Cc(o,t),a=Lc(a),o=Lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=y+d+a,E=y+_+o,S=Ec(r,35633,A),L=Ec(r,35632,E);if(r.attachShader(p,S),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(S).trim(),ne=r.getShaderInfoLog(L).trim();let ge=!0,W=!0;if(r.getProgramParameter(p,35714)===!1){ge=!1;const O=Tc(r,S,"vertex"),Q=Tc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+O+`
`+Q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||ne==="")&&(W=!1);W&&(this.diagnostics={runnable:ge,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:ne,prefix:_}})}r.deleteShader(S),r.deleteShader(L);let U;this.getUniforms=function(){return U===void 0&&(U=new fs(r,p)),U};let M;return this.getAttributes=function(){return M===void 0&&(M=Sv(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=L,this}let Fv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ov(e),t.set(e,i)),i}}class Ov{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}}function Uv(n,e,t,i,r,s,a){const o=new sf,l=new Nv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,C,I,ne,ge){const W=ne.fog,O=ge.geometry,Q=M.isMeshStandardMaterial?ne.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),J=!!ie&&ie.mapping===Ps?ie.image.height:null,H=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const N=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,X=N!==void 0?N.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let ce,oe,we,k;if(H){const Te=en[H];ce=Te.vertexShader,oe=Te.fragmentShader}else ce=M.vertexShader,oe=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),k=l.getFragmentShaderID(M);const F=n.getRenderTarget(),re=M.alphaTest>0,ae=M.clearcoat>0,be=M.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:ce,fragmentShader:oe,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:k,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ge.isInstancedMesh===!0,instancingColor:ge.isInstancedMesh===!0&&ge.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F===null?n.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:fi,map:!!M.map,matcap:!!M.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:J,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===ag,tangentSpaceNormalMap:M.normalMapType===og,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ke,clearcoat:ae,clearcoatMap:ae&&!!M.clearcoatMap,clearcoatRoughnessMap:ae&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!M.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!M.iridescenceMap,iridescenceThicknessMap:be&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===qi,alphaMap:!!M.alphaMap,alphaTest:re,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ge.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:vn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nn,flipSided:M.side===Ut,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)C.push(I),C.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),M.push(o.mask)}function A(M){const C=g[M.type];let I;if(C){const ne=en[C];I=wg.clone(ne.uniforms)}else I=M.uniforms;return I}function E(M,C){let I;for(let ne=0,ge=c.length;ne<ge;ne++){const W=c[ne];if(W.cacheKey===C){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Iv(n,C,M,s),c.push(I)),I}function S(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:E,releaseProgram:S,releaseShaderCache:L,programs:c,dispose:U}}function zv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Bv),i.length>1&&i.sort(h||Rc),r.length>1&&r.sort(h||Rc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Gv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Dc,n.set(i,[a])):r>=s.length?(a=new Dc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hv=0;function Wv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qv(n,e){const t=new kv,i=Vv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new lt,o=new lt;function l(u,f){let h=0,m=0,g=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let p=0,d=0,_=0,y=0,A=0,E=0,S=0,L=0,U=0,M=0;u.sort(Wv);const C=f!==!0?Math.PI:1;for(let ne=0,ge=u.length;ne<ge;ne++){const W=u[ne],O=W.color,Q=W.intensity,ie=W.distance,J=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)h+=O.r*Q*C,m+=O.g*Q*C,g+=O.b*Q*C;else if(W.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(W.sh.coefficients[H],Q);else if(W.isDirectionalLight){const H=t.get(W);if(H.color.copy(W.color).multiplyScalar(W.intensity*C),W.castShadow){const N=W.shadow,X=i.get(W);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,r.directionalShadow[p]=X,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=W.shadow.matrix,E++}r.directional[p]=H,p++}else if(W.isSpotLight){const H=t.get(W);H.position.setFromMatrixPosition(W.matrixWorld),H.color.copy(O).multiplyScalar(Q*C),H.distance=ie,H.coneCos=Math.cos(W.angle),H.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),H.decay=W.decay,r.spot[_]=H;const N=W.shadow;if(W.map&&(r.spotLightMap[U]=W.map,U++,N.updateMatrices(W),W.castShadow&&M++),r.spotLightMatrix[_]=N.matrix,W.castShadow){const X=i.get(W);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,r.spotShadow[_]=X,r.spotShadowMap[_]=J,L++}_++}else if(W.isRectAreaLight){const H=t.get(W);H.color.copy(O).multiplyScalar(Q),H.halfWidth.set(W.width*.5,0,0),H.halfHeight.set(0,W.height*.5,0),r.rectArea[y]=H,y++}else if(W.isPointLight){const H=t.get(W);if(H.color.copy(W.color).multiplyScalar(W.intensity*C),H.distance=W.distance,H.decay=W.decay,W.castShadow){const N=W.shadow,X=i.get(W);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,r.pointShadow[d]=X,r.pointShadowMap[d]=J,r.pointShadowMatrix[d]=W.shadow.matrix,S++}r.point[d]=H,d++}else if(W.isHemisphereLight){const H=t.get(W);H.skyColor.copy(W.color).multiplyScalar(Q*C),H.groundColor.copy(W.groundColor).multiplyScalar(Q*C),r.hemi[A]=H,A++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==A||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==L||I.numSpotMaps!==U)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=y,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=L+U-M,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=M,I.directionalLength=p,I.pointLength=d,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=A,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=L,I.numSpotMaps=U,r.version=Hv++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let y=0,A=u.length;y<A;y++){const E=u[y];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(E.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const S=r.hemi[d];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Ic(n,e){const t=new qv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Xv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Ic(n,e),t.set(s,[l])):a>=o.length?(l=new Ic(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class jv extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yv extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
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
}`;function Kv(n,e,t){let i=new uf;const r=new ze,s=new ze,a=new at,o=new jv({depthPacking:sg}),l=new Yv,c={},u=t.maxTextureSize,f={0:Ut,1:Ki,2:Nn},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:$v,fragmentShader:Zv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _n(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju,this.render=function(E,S,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const U=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Bn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let ne=0,ge=E.length;ne<ge;ne++){const W=E[ne],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();if(r.multiply(Q),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,O.mapSize.y=s.y)),O.map===null){const J=this.type!==hr?{minFilter:vt,magFilter:vt}:{};O.map=new hi(r.x,r.y,J),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ie=O.getViewportCount();for(let J=0;J<ie;J++){const H=O.getViewport(J);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),I.viewport(a),O.updateMatrices(W,J),i=O.getFrustum(),A(S,L,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===hr&&_(O,L),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(U,M,C)};function _(E,S){const L=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,L,h,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,L,m,p,null)}function y(E,S,L,U,M,C){let I=null;const ne=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(ne!==void 0?I=ne:I=L.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ge=I.uuid,W=S.uuid;let O=c[ge];O===void 0&&(O={},c[ge]=O);let Q=O[W];Q===void 0&&(Q=I.clone(),O[W]=Q),I=Q}return I.visible=S.visible,I.wireframe=S.wireframe,C===hr?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:f[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(L.matrixWorld),I.nearDistance=U,I.farDistance=M),I}function A(E,S,L,U,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===hr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const ne=e.update(E),ge=E.material;if(Array.isArray(ge)){const W=ne.groups;for(let O=0,Q=W.length;O<Q;O++){const ie=W[O],J=ge[ie.materialIndex];if(J&&J.visible){const H=y(E,J,U,L.near,L.far,M);n.renderBufferDirect(L,null,ne,H,E,ie)}}}else if(ge.visible){const W=y(E,ge,U,L.near,L.far,M);n.renderBufferDirect(L,null,ne,W,E,null)}}const I=E.children;for(let ne=0,ge=I.length;ne<ge;ne++)A(I[ne],S,L,U,M)}}function Jv(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const xe=new at;let $=null;const Ae=new at(0,0,0,0);return{setMask:function(Ee){$!==Ee&&!R&&(n.colorMask(Ee,Ee,Ee,Ee),$=Ee)},setLocked:function(Ee){R=Ee},setClear:function(Ee,Ve,it,Je,bn){bn===!0&&(Ee*=Je,Ve*=Je,it*=Je),xe.set(Ee,Ve,it,Je),Ae.equals(xe)===!1&&(n.clearColor(Ee,Ve,it,Je),Ae.copy(xe))},reset:function(){R=!1,$=null,Ae.set(-1,0,0,0)}}}function s(){let R=!1,xe=null,$=null,Ae=null;return{setTest:function(Ee){Ee?re(2929):ae(2929)},setMask:function(Ee){xe!==Ee&&!R&&(n.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if($!==Ee){if(Ee)switch(Ee){case Cm:n.depthFunc(512);break;case Lm:n.depthFunc(519);break;case Pm:n.depthFunc(513);break;case Wo:n.depthFunc(515);break;case Rm:n.depthFunc(514);break;case Dm:n.depthFunc(518);break;case Im:n.depthFunc(516);break;case Fm:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);$=Ee}},setLocked:function(Ee){R=Ee},setClear:function(Ee){Ae!==Ee&&(n.clearDepth(Ee),Ae=Ee)},reset:function(){R=!1,xe=null,$=null,Ae=null}}}function a(){let R=!1,xe=null,$=null,Ae=null,Ee=null,Ve=null,it=null,Je=null,bn=null;return{setTest:function($e){R||($e?re(2960):ae(2960))},setMask:function($e){xe!==$e&&!R&&(n.stencilMask($e),xe=$e)},setFunc:function($e,an,At){($!==$e||Ae!==an||Ee!==At)&&(n.stencilFunc($e,an,At),$=$e,Ae=an,Ee=At)},setOp:function($e,an,At){(Ve!==$e||it!==an||Je!==At)&&(n.stencilOp($e,an,At),Ve=$e,it=an,Je=At)},setLocked:function($e){R=$e},setClear:function($e){bn!==$e&&(n.clearStencil($e),bn=$e)},reset:function(){R=!1,xe=null,$=null,Ae=null,Ee=null,Ve=null,it=null,Je=null,bn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,A=null,E=null,S=null,L=null,U=null,M=null,C=!1,I=null,ne=null,ge=null,W=null,O=null;const Q=n.getParameter(35661);let ie=!1,J=0;const H=n.getParameter(7938);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),ie=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ie=J>=2);let N=null,X={};const he=n.getParameter(3088),ce=n.getParameter(2978),oe=new at().fromArray(he),we=new at().fromArray(ce);function k(R,xe,$){const Ae=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(R,Ee),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Ve=0;Ve<$;Ve++)n.texImage2D(xe+Ve,0,6408,1,1,0,6408,5121,Ae);return Ee}const F={};F[3553]=k(3553,3553,1),F[34067]=k(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(2929),l.setFunc(Wo),Z(!1),ee(bl),re(2884),P(Bn);function re(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function ae(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function be(R,xe){return m[R]!==xe?(n.bindFramebuffer(R,xe),m[R]=xe,i&&(R===36009&&(m[36160]=xe),R===36160&&(m[36009]=xe)),!0):!1}function me(R,xe){let $=p,Ae=!1;if(R)if($=g.get(xe),$===void 0&&($=[],g.set(xe,$)),R.isWebGLMultipleRenderTargets){const Ee=R.texture;if($.length!==Ee.length||$[0]!==36064){for(let Ve=0,it=Ee.length;Ve<it;Ve++)$[Ve]=36064+Ve;$.length=Ee.length,Ae=!0}}else $[0]!==36064&&($[0]=36064,Ae=!0);else $[0]!==1029&&($[0]=1029,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Te(R){return d!==R?(n.useProgram(R),d=R,!0):!1}const _e={[Ui]:32774,[_m]:32778,[xm]:32779};if(i)_e[Tl]=32775,_e[Al]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(_e[Tl]=R.MIN_EXT,_e[Al]=R.MAX_EXT)}const w={[vm]:0,[Mm]:1,[ym]:768,[Yu]:770,[Am]:776,[Em]:774,[Sm]:772,[bm]:769,[$u]:771,[Tm]:775,[wm]:773};function P(R,xe,$,Ae,Ee,Ve,it,Je){if(R===Bn){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(re(3042),_=!0),R!==gm){if(R!==y||Je!==C){if((A!==Ui||L!==Ui)&&(n.blendEquation(32774),A=Ui,L=Ui),Je)switch(R){case qi:n.blendFuncSeparate(1,771,1,771);break;case Sl:n.blendFunc(1,1);break;case wl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case qi:n.blendFuncSeparate(770,771,1,771);break;case Sl:n.blendFunc(770,1);break;case wl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,S=null,U=null,M=null,y=R,C=Je}return}Ee=Ee||xe,Ve=Ve||$,it=it||Ae,(xe!==A||Ee!==L)&&(n.blendEquationSeparate(_e[xe],_e[Ee]),A=xe,L=Ee),($!==E||Ae!==S||Ve!==U||it!==M)&&(n.blendFuncSeparate(w[$],w[Ae],w[Ve],w[it]),E=$,S=Ae,U=Ve,M=it),y=R,C=null}function G(R,xe){R.side===Nn?ae(2884):re(2884);let $=R.side===Ut;xe&&($=!$),Z($),R.blending===qi&&R.transparent===!1?P(Bn):P(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ae=R.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ue(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(32926):ae(32926)}function Z(R){I!==R&&(R?n.frontFace(2304):n.frontFace(2305),I=R)}function ee(R){R!==dm?(re(2884),R!==ne&&(R===bl?n.cullFace(1029):R===pm?n.cullFace(1028):n.cullFace(1032))):ae(2884),ne=R}function le(R){R!==ge&&(ie&&n.lineWidth(R),ge=R)}function ue(R,xe,$){R?(re(32823),(W!==xe||O!==$)&&(n.polygonOffset(xe,$),W=xe,O=$)):ae(32823)}function fe(R){R?re(3089):ae(3089)}function pe(R){R===void 0&&(R=33984+Q-1),N!==R&&(n.activeTexture(R),N=R)}function v(R,xe){N===null&&pe();let $=X[N];$===void 0&&($={type:void 0,texture:void 0},X[N]=$),($.type!==R||$.texture!==xe)&&(n.bindTexture(R,xe||F[R]),$.type=R,$.texture=xe)}function x(){const R=X[N];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function b(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(R){oe.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function ye(R){we.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),we.copy(R))}function Ce(R,xe){let $=f.get(xe);$===void 0&&($=new WeakMap,f.set(xe,$));let Ae=$.get(R);Ae===void 0&&(Ae=n.getUniformBlockIndex(xe,R.name),$.set(R,Ae))}function Fe(R,xe){const Ae=f.get(xe).get(R);u.get(R)!==Ae&&(n.uniformBlockBinding(xe,Ae,R.__bindingPointIndex),u.set(R,Ae))}function Ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,X={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,A=null,E=null,S=null,L=null,U=null,M=null,C=!1,I=null,ne=null,ge=null,W=null,O=null,oe.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:re,disable:ae,bindFramebuffer:be,drawBuffers:me,useProgram:Te,setBlending:P,setMaterial:G,setFlipSided:Z,setCullFace:ee,setLineWidth:le,setPolygonOffset:ue,setScissorTest:fe,activeTexture:pe,bindTexture:v,unbindTexture:x,compressedTexImage2D:D,texImage2D:j,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Fe,texStorage2D:Se,texStorage3D:b,texSubImage2D:q,texSubImage3D:Y,compressedTexSubImage2D:se,scissor:ve,viewport:ye,reset:Ne}}function Qv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(v,x){return _?new OffscreenCanvas(v,x):Tr("canvas")}function A(v,x,D,q){let Y=1;if((v.width>q||v.height>q)&&(Y=q/Math.max(v.width,v.height)),Y<1||x===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const se=x?Zo:Math.floor,Se=se(Y*v.width),b=se(Y*v.height);p===void 0&&(p=y(Se,b));const j=D?y(Se,b):p;return j.width=Se,j.height=b,j.getContext("2d").drawImage(v,0,0,Se,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Se+"x"+b+")."),j}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function E(v){return ec(v.width)&&ec(v.height)}function S(v){return o?!1:v.wrapS!==Wt||v.wrapT!==Wt||v.minFilter!==vt&&v.minFilter!==Rt}function L(v,x){return v.generateMipmaps&&x&&v.minFilter!==vt&&v.minFilter!==Rt}function U(v){n.generateMipmap(v)}function M(v,x,D,q,Y=!1){if(o===!1)return x;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let se=x;return x===6403&&(D===5126&&(se=33326),D===5131&&(se=33325),D===5121&&(se=33321)),x===33319&&(D===5126&&(se=33328),D===5131&&(se=33327),D===5121&&(se=33323)),x===6408&&(D===5126&&(se=34836),D===5131&&(se=34842),D===5121&&(se=q===Ke&&Y===!1?35907:32856),D===32819&&(se=32854),D===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function C(v,x,D){return L(v,D)===!0||v.isFramebufferTexture&&v.minFilter!==vt&&v.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function I(v){return v===vt||v===Cl||v===Ll?9728:9729}function ne(v){const x=v.target;x.removeEventListener("dispose",ne),W(x),x.isVideoTexture&&g.delete(x)}function ge(v){const x=v.target;x.removeEventListener("dispose",ge),Q(x)}function W(v){const x=i.get(v);if(x.__webglInit===void 0)return;const D=v.source,q=d.get(D);if(q){const Y=q[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&O(v),Object.keys(q).length===0&&d.delete(D)}i.remove(v)}function O(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const D=v.source,q=d.get(D);delete q[x.__cacheKey],a.memory.textures--}function Q(v){const x=v.texture,D=i.get(v),q=i.get(x);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(D.__webglFramebuffer[Y]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Y=0;Y<D.__webglColorRenderbuffer.length;Y++)D.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Y]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let Y=0,se=x.length;Y<se;Y++){const Se=i.get(x[Y]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(x[Y])}i.remove(x),i.remove(v)}let ie=0;function J(){ie=0}function H(){const v=ie;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),ie+=1,v}function N(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function X(v,x){const D=i.get(v);if(v.isVideoTexture&&fe(v),v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){const q=v.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(D,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,D.__webglTexture)}function he(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){ae(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,D.__webglTexture)}function ce(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){ae(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,D.__webglTexture)}function oe(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){be(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,D.__webglTexture)}const we={[jo]:10497,[Wt]:33071,[Yo]:33648},k={[vt]:9728,[Cl]:9984,[Ll]:9986,[Rt]:9729,[Vm]:9985,[Rs]:9987};function F(v,x,D){if(D?(n.texParameteri(v,10242,we[x.wrapS]),n.texParameteri(v,10243,we[x.wrapT]),(v===32879||v===35866)&&n.texParameteri(v,32882,we[x.wrapR]),n.texParameteri(v,10240,k[x.magFilter]),n.texParameteri(v,10241,k[x.minFilter])):(n.texParameteri(v,10242,33071),n.texParameteri(v,10243,33071),(v===32879||v===35866)&&n.texParameteri(v,32882,33071),(x.wrapS!==Wt||x.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,10240,I(x.magFilter)),n.texParameteri(v,10241,I(x.minFilter)),x.minFilter!==vt&&x.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(x.type===ri&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(v,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function re(v,x){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",ne));const q=x.source;let Y=d.get(q);Y===void 0&&(Y={},d.set(q,Y));const se=N(x);if(se!==v.__cacheKey){Y[se]===void 0&&(Y[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[se].usedTimes++;const Se=Y[v.__cacheKey];Se!==void 0&&(Y[v.__cacheKey].usedTimes--,Se.usedTimes===0&&O(x)),v.__cacheKey=se,v.__webglTexture=Y[se].texture}return D}function ae(v,x,D){let q=3553;x.isDataArrayTexture&&(q=35866),x.isData3DTexture&&(q=32879);const Y=re(v,x),se=x.source;if(t.activeTexture(33984+D),t.bindTexture(q,v.__webglTexture),se.version!==se.__currentVersion||Y===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Se=S(x)&&E(x.image)===!1;let b=A(x.image,Se,!1,u);b=pe(x,b);const j=E(b)||o,de=s.convert(x.format,x.encoding);let ve=s.convert(x.type),ye=M(x.internalFormat,de,ve,x.encoding,x.isVideoTexture);F(q,x,j);let Ce;const Fe=x.mipmaps,Ne=o&&x.isVideoTexture!==!0,R=se.__currentVersion===void 0||Y===!0,xe=C(x,b,j);if(x.isDepthTexture)ye=6402,o?x.type===ri?ye=36012:x.type===ii?ye=33190:x.type===Xi?ye=35056:ye=33189:x.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===li&&ye===6402&&x.type!==Ju&&x.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ii,ve=s.convert(x.type)),x.format===er&&ye===6402&&(ye=34041,x.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Xi,ve=s.convert(x.type))),R&&(Ne?t.texStorage2D(3553,1,ye,b.width,b.height):t.texImage2D(3553,0,ye,b.width,b.height,0,de,ve,null));else if(x.isDataTexture)if(Fe.length>0&&j){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,ve,Ce.data):t.texImage2D(3553,$,ye,Ce.width,Ce.height,0,de,ve,Ce.data);x.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,xe,ye,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,de,ve,b.data)):t.texImage2D(3553,0,ye,b.width,b.height,0,de,ve,b.data);else if(x.isCompressedTexture){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],x.format!==nn?de!==null?Ne?t.compressedTexSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,Ce.data):t.compressedTexImage2D(3553,$,ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,de,ve,Ce.data):t.texImage2D(3553,$,ye,Ce.width,Ce.height,0,de,ve,Ce.data)}else if(x.isDataArrayTexture)Ne?(R&&t.texStorage3D(35866,xe,ye,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,de,ve,b.data)):t.texImage3D(35866,0,ye,b.width,b.height,b.depth,0,de,ve,b.data);else if(x.isData3DTexture)Ne?(R&&t.texStorage3D(32879,xe,ye,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,de,ve,b.data)):t.texImage3D(32879,0,ye,b.width,b.height,b.depth,0,de,ve,b.data);else if(x.isFramebufferTexture){if(R)if(Ne)t.texStorage2D(3553,xe,ye,b.width,b.height);else{let $=b.width,Ae=b.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(3553,Ee,ye,$,Ae,0,de,ve,null),$>>=1,Ae>>=1}}else if(Fe.length>0&&j){Ne&&R&&t.texStorage2D(3553,xe,ye,Fe[0].width,Fe[0].height);for(let $=0,Ae=Fe.length;$<Ae;$++)Ce=Fe[$],Ne?t.texSubImage2D(3553,$,0,0,de,ve,Ce):t.texImage2D(3553,$,ye,de,ve,Ce);x.generateMipmaps=!1}else Ne?(R&&t.texStorage2D(3553,xe,ye,b.width,b.height),t.texSubImage2D(3553,0,0,0,de,ve,b)):t.texImage2D(3553,0,ye,de,ve,b);L(x,j)&&U(q),se.__currentVersion=se.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function be(v,x,D){if(x.image.length!==6)return;const q=re(v,x),Y=x.source;if(t.activeTexture(33984+D),t.bindTexture(34067,v.__webglTexture),Y.version!==Y.__currentVersion||q===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const se=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,b=[];for(let $=0;$<6;$++)!se&&!Se?b[$]=A(x.image[$],!1,!0,c):b[$]=Se?x.image[$].image:x.image[$],b[$]=pe(x,b[$]);const j=b[0],de=E(j)||o,ve=s.convert(x.format,x.encoding),ye=s.convert(x.type),Ce=M(x.internalFormat,ve,ye,x.encoding),Fe=o&&x.isVideoTexture!==!0,Ne=Y.__currentVersion===void 0||q===!0;let R=C(x,j,de);F(34067,x,de);let xe;if(se){Fe&&Ne&&t.texStorage2D(34067,R,Ce,j.width,j.height);for(let $=0;$<6;$++){xe=b[$].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const Ee=xe[Ae];x.format!==nn?ve!==null?Fe?t.compressedTexSubImage2D(34069+$,Ae,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(34069+$,Ae,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+$,Ae,0,0,Ee.width,Ee.height,ve,ye,Ee.data):t.texImage2D(34069+$,Ae,Ce,Ee.width,Ee.height,0,ve,ye,Ee.data)}}}else{xe=x.mipmaps,Fe&&Ne&&(xe.length>0&&R++,t.texStorage2D(34067,R,Ce,b[0].width,b[0].height));for(let $=0;$<6;$++)if(Se){Fe?t.texSubImage2D(34069+$,0,0,0,b[$].width,b[$].height,ve,ye,b[$].data):t.texImage2D(34069+$,0,Ce,b[$].width,b[$].height,0,ve,ye,b[$].data);for(let Ae=0;Ae<xe.length;Ae++){const Ve=xe[Ae].image[$].image;Fe?t.texSubImage2D(34069+$,Ae+1,0,0,Ve.width,Ve.height,ve,ye,Ve.data):t.texImage2D(34069+$,Ae+1,Ce,Ve.width,Ve.height,0,ve,ye,Ve.data)}}else{Fe?t.texSubImage2D(34069+$,0,0,0,ve,ye,b[$]):t.texImage2D(34069+$,0,Ce,ve,ye,b[$]);for(let Ae=0;Ae<xe.length;Ae++){const Ee=xe[Ae];Fe?t.texSubImage2D(34069+$,Ae+1,0,0,ve,ye,Ee.image[$]):t.texImage2D(34069+$,Ae+1,Ce,ve,ye,Ee.image[$])}}}L(x,de)&&U(34067),Y.__currentVersion=Y.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function me(v,x,D,q,Y){const se=s.convert(D.format,D.encoding),Se=s.convert(D.type),b=M(D.internalFormat,se,Se,D.encoding);i.get(x).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,b,x.width,x.height,x.depth,0,se,Se,null):t.texImage2D(Y,0,b,x.width,x.height,0,se,Se,null)),t.bindFramebuffer(36160,v),ue(x)?h.framebufferTexture2DMultisampleEXT(36160,q,Y,i.get(D).__webglTexture,0,le(x)):n.framebufferTexture2D(36160,q,Y,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(v,x,D){if(n.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let q=33189;if(D||ue(x)){const Y=x.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ri?q=36012:Y.type===ii&&(q=33190));const se=le(x);ue(x)?h.renderbufferStorageMultisampleEXT(36161,se,q,x.width,x.height):n.renderbufferStorageMultisample(36161,se,q,x.width,x.height)}else n.renderbufferStorage(36161,q,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const q=le(x);D&&ue(x)===!1?n.renderbufferStorageMultisample(36161,q,35056,x.width,x.height):ue(x)?h.renderbufferStorageMultisampleEXT(36161,q,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,v)}else{const q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Y=0;Y<q.length;Y++){const se=q[Y],Se=s.convert(se.format,se.encoding),b=s.convert(se.type),j=M(se.internalFormat,Se,b,se.encoding),de=le(x);D&&ue(x)===!1?n.renderbufferStorageMultisample(36161,de,j,x.width,x.height):ue(x)?h.renderbufferStorageMultisampleEXT(36161,de,j,x.width,x.height):n.renderbufferStorage(36161,j,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function _e(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const q=i.get(x.depthTexture).__webglTexture,Y=le(x);if(x.depthTexture.format===li)ue(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,Y):n.framebufferTexture2D(36160,36096,3553,q,0);else if(x.depthTexture.format===er)ue(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,Y):n.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function w(v){const x=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");_e(x.__webglFramebuffer,v)}else if(D){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=n.createRenderbuffer(),Te(x.__webglDepthbuffer[q],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Te(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function P(v,x,D){const q=i.get(v);x!==void 0&&me(q.__webglFramebuffer,v,v.texture,36064,3553),D!==void 0&&w(v)}function G(v){const x=v.texture,D=i.get(v),q=i.get(x);v.addEventListener("dispose",ge),v.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++);const Y=v.isWebGLCubeRenderTarget===!0,se=v.isWebGLMultipleRenderTargets===!0,Se=E(v)||o;if(Y){D.__webglFramebuffer=[];for(let b=0;b<6;b++)D.__webglFramebuffer[b]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const b=v.texture;for(let j=0,de=b.length;j<de;j++){const ve=i.get(b[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&ue(v)===!1){const b=se?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let j=0;j<b.length;j++){const de=b[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[j]);const ve=s.convert(de.format,de.encoding),ye=s.convert(de.type),Ce=M(de.internalFormat,ve,ye,de.encoding),Fe=le(v);n.renderbufferStorageMultisample(36161,Fe,Ce,v.width,v.height),n.framebufferRenderbuffer(36160,36064+j,36161,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,q.__webglTexture),F(34067,x,Se);for(let b=0;b<6;b++)me(D.__webglFramebuffer[b],v,x,36064,34069+b);L(x,Se)&&U(34067),t.unbindTexture()}else if(se){const b=v.texture;for(let j=0,de=b.length;j<de;j++){const ve=b[j],ye=i.get(ve);t.bindTexture(3553,ye.__webglTexture),F(3553,ve,Se),me(D.__webglFramebuffer,v,ve,36064+j,3553),L(ve,Se)&&U(3553)}t.unbindTexture()}else{let b=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?b=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,q.__webglTexture),F(b,x,Se),me(D.__webglFramebuffer,v,x,36064,b),L(x,Se)&&U(b),t.unbindTexture()}v.depthBuffer&&w(v)}function Z(v){const x=E(v)||o,D=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0,Y=D.length;q<Y;q++){const se=D[q];if(L(se,x)){const Se=v.isWebGLCubeRenderTarget?34067:3553,b=i.get(se).__webglTexture;t.bindTexture(Se,b),U(Se),t.unbindTexture()}}}function ee(v){if(o&&v.samples>0&&ue(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],D=v.width,q=v.height;let Y=16384;const se=[],Se=v.stencilBuffer?33306:36096,b=i.get(v),j=v.isWebGLMultipleRenderTargets===!0;if(j)for(let de=0;de<x.length;de++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let de=0;de<x.length;de++){se.push(36064+de),v.depthBuffer&&se.push(Se);const ve=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ve===!1&&(v.depthBuffer&&(Y|=256),v.stencilBuffer&&(Y|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[de]),ve===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),j){const ye=i.get(x[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,D,q,0,0,D,q,Y,9728),m&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let de=0;de<x.length;de++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,b.__webglColorRenderbuffer[de]);const ve=i.get(x[de]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function le(v){return Math.min(f,v.samples)}function ue(v){const x=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(v){const x=a.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function pe(v,x){const D=v.encoding,q=v.format,Y=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===$o||D!==fi&&(D===Ke?o===!1?e.has("EXT_sRGB")===!0&&q===nn?(v.format=$o,v.minFilter=Rt,v.generateMipmaps=!1):x=tf.sRGBToLinear(x):(q!==nn||Y!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),x}this.allocateTextureUnit=H,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=he,this.setTexture3D=ce,this.setTextureCube=oe,this.rebindTextures=P,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function eM(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ui)return 5121;if(s===Xm)return 32819;if(s===jm)return 32820;if(s===Hm)return 5120;if(s===Wm)return 5122;if(s===Ju)return 5123;if(s===qm)return 5124;if(s===ii)return 5125;if(s===ri)return 5126;if(s===Er)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ym)return 6406;if(s===nn)return 6408;if(s===Zm)return 6409;if(s===Km)return 6410;if(s===li)return 6402;if(s===er)return 34041;if(s===Jm)return 6403;if(s===$m)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$o)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qm)return 36244;if(s===eg)return 33319;if(s===tg)return 33320;if(s===ng)return 36249;if(s===Xs||s===js||s===Ys||s===$s)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$s)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pl||s===Rl||s===Dl||s===Il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ig)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fl||s===Nl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fl)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Nl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ol||s===Ul||s===zl||s===Bl||s===Gl||s===kl||s===Vl||s===Hl||s===Wl||s===ql||s===Xl||s===jl||s===Yl||s===$l)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ol)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ul)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ql)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$l)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Zl)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Xi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class tM extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const y=new Gi;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class iM extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===li&&(i=ii),i===void 0&&u===er&&(i=Xi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class rM extends mi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],y=[],A=new Dt;A.layers.enable(1),A.viewport=new at;const E=new Dt;E.layers.enable(2),E.viewport=new at;const S=[A,E],L=new tM;L.layers.enable(1),L.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=_[N];return X===void 0&&(X=new wo,_[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=_[N];return X===void 0&&(X=new wo,_[N]=X),X.getGripSpace()},this.getHand=function(N){let X=_[N];return X===void 0&&(X=new wo,_[N]=X),X.getHandSpace()};function C(N){const X=y.indexOf(N.inputSource);if(X===-1)return;const he=_[X];he!==void 0&&he.dispatchEvent({type:N.type,data:N.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",ne);for(let N=0;N<_.length;N++){const X=y[N];X!==null&&(y[N]=null,_[N].disconnect(X))}U=null,M=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:h}),d=new hi(h.framebufferWidth,h.framebufferHeight,{format:nn,type:ui,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,he=null,ce=null;g.depth&&(ce=g.stencil?35056:33190,X=g.stencil?er:li,he=g.stencil?Xi:ii);const oe={colorFormat:32856,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new hi(f.textureWidth,f.textureHeight,{format:nn,type:ui,depthTexture:new iM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ne(N){for(let X=0;X<N.removed.length;X++){const he=N.removed[X],ce=y.indexOf(he);ce>=0&&(y[ce]=null,_[ce].dispatchEvent({type:"disconnected",data:he}))}for(let X=0;X<N.added.length;X++){const he=N.added[X];let ce=y.indexOf(he);if(ce===-1){for(let we=0;we<_.length;we++)if(we>=y.length){y.push(he),ce=we;break}else if(y[we]===null){y[we]=he,ce=we;break}if(ce===-1)break}const oe=_[ce];oe&&oe.dispatchEvent({type:"connected",data:he})}}const ge=new B,W=new B;function O(N,X,he){ge.setFromMatrixPosition(X.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const ce=ge.distanceTo(W),oe=X.projectionMatrix.elements,we=he.projectionMatrix.elements,k=oe[14]/(oe[10]-1),F=oe[14]/(oe[10]+1),re=(oe[9]+1)/oe[5],ae=(oe[9]-1)/oe[5],be=(oe[8]-1)/oe[0],me=(we[8]+1)/we[0],Te=k*be,_e=k*me,w=ce/(-be+me),P=w*-be;X.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(P),N.translateZ(w),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const G=k+w,Z=F+w,ee=Te-P,le=_e+(ce-P),ue=re*F/Z*G,fe=ae*F/Z*G;N.projectionMatrix.makePerspective(ee,le,ue,fe,G,Z)}function Q(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;L.near=E.near=A.near=N.near,L.far=E.far=A.far=N.far,(U!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,M=L.far);const X=N.parent,he=L.cameras;Q(L,X);for(let oe=0;oe<he.length;oe++)Q(he[oe],X);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),N.matrix.copy(L.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ce=N.children;for(let oe=0,we=ce.length;oe<we;oe++)ce[oe].updateMatrixWorld(!0);he.length===2?O(L,A,E):L.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let ie=null;function J(N,X){if(c=X.getViewerPose(l||a),m=X,c!==null){const he=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ce=!1;he.length!==L.cameras.length&&(L.cameras.length=0,ce=!0);for(let oe=0;oe<he.length;oe++){const we=he[oe];let k=null;if(h!==null)k=h.getViewport(we);else{const re=u.getViewSubImage(f,we);k=re.viewport,oe===0&&(e.setRenderTargetTextures(d,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(d))}let F=S[oe];F===void 0&&(F=new Dt,F.layers.enable(oe),F.viewport=new at,S[oe]=F),F.matrix.fromArray(we.transform.matrix),F.projectionMatrix.fromArray(we.projectionMatrix),F.viewport.set(k.x,k.y,k.width,k.height),oe===0&&L.matrix.copy(F.matrix),ce===!0&&L.cameras.push(F)}}for(let he=0;he<_.length;he++){const ce=y[he],oe=_[he];ce!==null&&oe!==void 0&&oe.update(ce,X,l||a)}ie&&ie(N,X),m=null}const H=new ff;H.setAnimationLoop(J),this.setAnimationLoop=function(N){ie=N},this.dispose=function(){}}}function sM(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,y,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=y*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function oM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(y,A){const E=A.program;i.uniformBlockBinding(y,E)}function c(y,A){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",d));const S=A.program;i.updateUBOMapping(y,S);const L=e.render.frame;s[y.id]!==L&&(h(y),s[y.id]=L)}function u(y){const A=f();y.__bindingPointIndex=A;const E=n.createBuffer(),S=y.__size,L=y.usage;return n.bindBuffer(35345,E),n.bufferData(35345,S,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,A,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const A=r[y.id],E=y.uniforms,S=y.__cache;n.bindBuffer(35345,A);for(let L=0,U=E.length;L<U;L++){const M=E[L];if(m(M,L,S)===!0){const C=M.value,I=M.__offset;typeof C=="number"?(M.__data[0]=C,n.bufferSubData(35345,I,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),n.bufferSubData(35345,I,M.__data))}}n.bindBuffer(35345,null)}function m(y,A,E){const S=y.value;if(E[A]===void 0)return typeof S=="number"?E[A]=S:E[A]=S.clone(),!0;if(typeof S=="number"){if(E[A]!==S)return E[A]=S,!0}else{const L=E[A];if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(y){const A=y.uniforms;let E=0;const S=16;let L=0;for(let U=0,M=A.length;U<M;U++){const C=A[U],I=p(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,U>0){L=E%S;const ne=S-L;L!==0&&ne-I.boundary<0&&(E+=S-L,C.__offset=E)}E+=I.storage}return L=E%S,L>0&&(E+=S-L),y.__size=E,y.__cache={},this}function p(y){const A=y.value,E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function d(y){const A=y.target;A.removeEventListener("dispose",d);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function _(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function aM(){const n=Tr("canvas");return n.style.display="block",n}function gf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:aM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,y=0,A=null,E=-1,S=null;const L=new at,U=new at;let M=null,C=e.width,I=e.height,ne=1,ge=null,W=null;const O=new at(0,0,C,I),Q=new at(0,0,C,I);let ie=!1;const J=new uf;let H=!1,N=!1,X=null;const he=new lt,ce=new ze,oe=new B,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return A===null?ne:1}let F=t;function re(T,V){for(let K=0;K<T.length;K++){const z=T[K],te=e.getContext(z,V);if(te!==null)return te}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),F===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),F=re(V,T),F===null)throw re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,be,me,Te,_e,w,P,G,Z,ee,le,ue,fe,pe,v,x,D,q,Y,se,Se,b,j,de;function ve(){ae=new xx(F),be=new fx(F,ae,n),ae.init(be),b=new eM(F,ae,be),me=new Jv(F,ae,be),Te=new yx,_e=new zv,w=new Qv(F,ae,me,_e,be,b,Te),P=new dx(p),G=new _x(p),Z=new Rg(F,be),j=new cx(F,ae,Z,be),ee=new vx(F,Z,Te,j),le=new Ex(F,ee,Z,Te),Y=new wx(F,be,w),x=new hx(_e),ue=new Uv(p,P,G,ae,be,j,x),fe=new sM(p,_e),pe=new Gv,v=new Xv(ae,be),q=new lx(p,P,me,le,u,a),D=new Kv(p,le,be),de=new oM(F,Te,be,me),se=new ux(F,ae,Te,be),Se=new Mx(F,ae,Te,be),Te.programs=ue.programs,p.capabilities=be,p.extensions=ae,p.properties=_e,p.renderLists=pe,p.shadowMap=D,p.state=me,p.info=Te}ve();const ye=new rM(p,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(C,I,!1))},this.getSize=function(T){return T.set(C,I)},this.setSize=function(T,V,K){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,I=V,e.width=Math.floor(T*ne),e.height=Math.floor(V*ne),K!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(C*ne,I*ne).floor()},this.setDrawingBufferSize=function(T,V,K){C=T,I=V,ne=K,e.width=Math.floor(T*K),e.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,V,K,z){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,V,K,z),me.viewport(L.copy(O).multiplyScalar(ne).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,V,K,z){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,V,K,z),me.scissor(U.copy(Q).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){me.setScissorTest(ie=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,V=!0,K=!0){let z=0;T&&(z|=16384),V&&(z|=256),K&&(z|=1024),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),pe.dispose(),v.dispose(),_e.dispose(),P.dispose(),G.dispose(),le.dispose(),j.dispose(),de.dispose(),ue.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ve),ye.removeEventListener("sessionend",it),X&&(X.dispose(),X=null),Je.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Te.autoReset,V=D.enabled,K=D.autoUpdate,z=D.needsUpdate,te=D.type;ve(),Te.autoReset=T,D.enabled=V,D.autoUpdate=K,D.needsUpdate=z,D.type=te}function Ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function R(T){const V=T.target;V.removeEventListener("dispose",R),xe(V)}function xe(T){$(T),_e.remove(T)}function $(T){const V=_e.get(T).programs;V!==void 0&&(V.forEach(function(K){ue.releaseProgram(K)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,z,te,Le){V===null&&(V=we);const Pe=te.isMesh&&te.matrixWorld.determinant()<0,Oe=vf(T,V,K,z,te);me.setMaterial(z,Pe);let Re=K.index;const qe=K.attributes.position;if(Re===null){if(qe===void 0||qe.count===0)return}else if(Re.count===0)return;let Ge=1;z.wireframe===!0&&(Re=ee.getWireframeAttribute(K),Ge=2),j.setup(te,z,Oe,K,Re);let ke,Ze=se;Re!==null&&(ke=Z.get(Re),Ze=Se,Ze.setIndex(ke));const Hn=Re!==null?Re.count:qe.count,gi=K.drawRange.start*Ge,_i=K.drawRange.count*Ge,$t=Le!==null?Le.start*Ge:0,We=Le!==null?Le.count*Ge:1/0,xi=Math.max(gi,$t),et=Math.min(Hn,gi+_i,$t+We)-1,Ct=Math.max(0,et-xi+1);if(Ct!==0){if(te.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*k()),Ze.setMode(1)):Ze.setMode(4);else if(te.isLine){let Sn=z.linewidth;Sn===void 0&&(Sn=1),me.setLineWidth(Sn*k()),te.isLineSegments?Ze.setMode(1):te.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else te.isPoints?Ze.setMode(0):te.isSprite&&Ze.setMode(4);if(te.isInstancedMesh)Ze.renderInstances(xi,Ct,te.count);else if(K.isInstancedBufferGeometry){const Sn=Math.min(K.instanceCount,K._maxInstanceCount);Ze.renderInstances(xi,Ct,Sn)}else Ze.render(xi,Ct)}},this.compile=function(T,V){function K(z,te,Le){z.transparent===!0&&z.side===Nn?(z.side=Ut,z.needsUpdate=!0,Dr(z,te,Le),z.side=Ki,z.needsUpdate=!0,Dr(z,te,Le),z.side=Nn):Dr(z,te,Le)}h=v.get(T),h.init(),g.push(h),T.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(z){const te=z.material;if(te)if(Array.isArray(te))for(let Le=0;Le<te.length;Le++){const Pe=te[Le];K(Pe,T,z)}else K(te,T,z)}),g.pop(),h=null};let Ae=null;function Ee(T){Ae&&Ae(T)}function Ve(){Je.stop()}function it(){Je.start()}const Je=new ff;Je.setAnimationLoop(Ee),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){Ae=T,ye.setAnimationLoop(T),T===null?Je.stop():Je.start()},ye.addEventListener("sessionstart",Ve),ye.addEventListener("sessionend",it),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,A),h=v.get(T,g.length),h.init(),g.push(h),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(he),N=this.localClippingEnabled,H=x.init(this.clippingPlanes,N,V),f=pe.get(T,m.length),f.init(),m.push(f),bn(T,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ge,W),H===!0&&x.beginShadows();const K=h.state.shadowsArray;if(D.render(K,T,V),H===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(f,T),h.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const z=V.cameras;for(let te=0,Le=z.length;te<Le;te++){const Pe=z[te];$e(f,T,Pe,Pe.viewport)}}else $e(f,T,V);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(p,T,V),j.resetDefaultState(),E=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function bn(T,V,K,z){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){z&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Pe=le.update(T),Oe=T.material;Oe.visible&&f.push(T,Pe,Oe,K,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Te.render.frame&&(T.skeleton.update(),T.skeleton.frame=Te.render.frame),!T.frustumCulled||J.intersectsObject(T))){z&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Pe=le.update(T),Oe=T.material;if(Array.isArray(Oe)){const Re=Pe.groups;for(let qe=0,Ge=Re.length;qe<Ge;qe++){const ke=Re[qe],Ze=Oe[ke.materialIndex];Ze&&Ze.visible&&f.push(T,Pe,Ze,K,oe.z,ke)}}else Oe.visible&&f.push(T,Pe,Oe,K,oe.z,null)}}const Le=T.children;for(let Pe=0,Oe=Le.length;Pe<Oe;Pe++)bn(Le[Pe],V,K,z)}function $e(T,V,K,z){const te=T.opaque,Le=T.transmissive,Pe=T.transparent;h.setupLightsView(K),Le.length>0&&an(te,V,K),z&&me.viewport(L.copy(z)),te.length>0&&At(te,V,K),Le.length>0&&At(Le,V,K),Pe.length>0&&At(Pe,V,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function an(T,V,K){const z=be.isWebGL2;X===null&&(X=new hi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Er:ui,minFilter:Rs,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(ce),z?X.setSize(ce.x,ce.y):X.setSize(Zo(ce.x),Zo(ce.y));const te=p.getRenderTarget();p.setRenderTarget(X),p.clear();const Le=p.toneMapping;p.toneMapping=vn,At(T,V,K),p.toneMapping=Le,w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X),p.setRenderTarget(te)}function At(T,V,K){const z=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Le=T.length;te<Le;te++){const Pe=T[te],Oe=Pe.object,Re=Pe.geometry,qe=z===null?Pe.material:z,Ge=Pe.group;Oe.layers.test(K.layers)&&xf(Oe,V,K,Re,qe,Ge)}}function xf(T,V,K,z,te,Le){T.onBeforeRender(p,V,K,z,te,Le),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(p,V,K,z,T,Le),te.transparent===!0&&te.side===Nn?(te.side=Ut,te.needsUpdate=!0,p.renderBufferDirect(K,V,z,te,T,Le),te.side=Ki,te.needsUpdate=!0,p.renderBufferDirect(K,V,z,te,T,Le),te.side=Nn):p.renderBufferDirect(K,V,z,te,T,Le),T.onAfterRender(p,V,K,z,te,Le)}function Dr(T,V,K){V.isScene!==!0&&(V=we);const z=_e.get(T),te=h.state.lights,Le=h.state.shadowsArray,Pe=te.state.version,Oe=ue.getParameters(T,te.state,Le,V,K),Re=ue.getProgramCacheKey(Oe);let qe=z.programs;z.environment=T.isMeshStandardMaterial?V.environment:null,z.fog=V.fog,z.envMap=(T.isMeshStandardMaterial?G:P).get(T.envMap||z.environment),qe===void 0&&(T.addEventListener("dispose",R),qe=new Map,z.programs=qe);let Ge=qe.get(Re);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===Pe)return La(T,Oe),Ge}else Oe.uniforms=ue.getUniforms(T),T.onBuild(K,Oe,p),T.onBeforeCompile(Oe,p),Ge=ue.acquireProgram(Oe,Re),qe.set(Re,Ge),z.uniforms=Oe.uniforms;const ke=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=x.uniform),La(T,Oe),z.needsLights=yf(T),z.lightsStateVersion=Pe,z.needsLights&&(ke.ambientLightColor.value=te.state.ambient,ke.lightProbe.value=te.state.probe,ke.directionalLights.value=te.state.directional,ke.directionalLightShadows.value=te.state.directionalShadow,ke.spotLights.value=te.state.spot,ke.spotLightShadows.value=te.state.spotShadow,ke.rectAreaLights.value=te.state.rectArea,ke.ltc_1.value=te.state.rectAreaLTC1,ke.ltc_2.value=te.state.rectAreaLTC2,ke.pointLights.value=te.state.point,ke.pointLightShadows.value=te.state.pointShadow,ke.hemisphereLights.value=te.state.hemi,ke.directionalShadowMap.value=te.state.directionalShadowMap,ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ke.spotShadowMap.value=te.state.spotShadowMap,ke.spotLightMatrix.value=te.state.spotLightMatrix,ke.spotLightMap.value=te.state.spotLightMap,ke.pointShadowMap.value=te.state.pointShadowMap,ke.pointShadowMatrix.value=te.state.pointShadowMatrix);const Ze=Ge.getUniforms(),Hn=fs.seqWithValue(Ze.seq,ke);return z.currentProgram=Ge,z.uniformsList=Hn,Ge}function La(T,V){const K=_e.get(T);K.outputEncoding=V.outputEncoding,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function vf(T,V,K,z,te){V.isScene!==!0&&(V=we),w.resetTextureUnits();const Le=V.fog,Pe=z.isMeshStandardMaterial?V.environment:null,Oe=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:fi,Re=(z.isMeshStandardMaterial?G:P).get(z.envMap||Pe),qe=z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!z.normalMap&&!!K.attributes.tangent,ke=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,Hn=!!K.morphAttributes.color,gi=z.toneMapped?p.toneMapping:vn,_i=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=_i!==void 0?_i.length:0,We=_e.get(z),xi=h.state.lights;if(H===!0&&(N===!0||T!==S)){const yt=T===S&&z.id===E;x.setState(z,T,yt)}let et=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==xi.state.version||We.outputEncoding!==Oe||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||We.envMap!==Re||z.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ge||We.morphTargets!==ke||We.morphNormals!==Ze||We.morphColors!==Hn||We.toneMapping!==gi||be.isWebGL2===!0&&We.morphTargetsCount!==$t)&&(et=!0):(et=!0,We.__version=z.version);let Ct=We.currentProgram;et===!0&&(Ct=Dr(z,V,te));let Sn=!1,or=!1,Fs=!1;const pt=Ct.getUniforms(),Wn=We.uniforms;if(me.useProgram(Ct.program)&&(Sn=!0,or=!0,Fs=!0),z.id!==E&&(E=z.id,or=!0),Sn||S!==T){if(pt.setValue(F,"projectionMatrix",T.projectionMatrix),be.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,or=!0,Fs=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const yt=pt.map.cameraPosition;yt!==void 0&&yt.setValue(F,oe.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||te.isSkinnedMesh)&&pt.setValue(F,"viewMatrix",T.matrixWorldInverse)}if(te.isSkinnedMesh){pt.setOptional(F,te,"bindMatrix"),pt.setOptional(F,te,"bindMatrixInverse");const yt=te.skeleton;yt&&(be.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),pt.setValue(F,"boneTexture",yt.boneTexture,w),pt.setValue(F,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ns=K.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&be.isWebGL2===!0)&&Y.update(te,K,z,Ct),(or||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,pt.setValue(F,"receiveShadow",te.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),or&&(pt.setValue(F,"toneMappingExposure",p.toneMappingExposure),We.needsLights&&Mf(Wn,Fs),Le&&z.fog===!0&&fe.refreshFogUniforms(Wn,Le),fe.refreshMaterialUniforms(Wn,z,ne,I,X),fs.upload(F,We.uniformsList,Wn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fs.upload(F,We.uniformsList,Wn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(F,"center",te.center),pt.setValue(F,"modelViewMatrix",te.modelViewMatrix),pt.setValue(F,"normalMatrix",te.normalMatrix),pt.setValue(F,"modelMatrix",te.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const yt=z.uniformsGroups;for(let Os=0,bf=yt.length;Os<bf;Os++)if(be.isWebGL2){const Pa=yt[Os];de.update(Pa,Ct),de.bind(Pa,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function Mf(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function yf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,V,K){_e.get(T.texture).__webglTexture=V,_e.get(T.depthTexture).__webglTexture=K;const z=_e.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=K===void 0,z.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const K=_e.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,K=0){A=T,_=V,y=K;let z=!0;if(T){const Re=_e.get(T);Re.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),z=!1):Re.__webglFramebuffer===void 0?w.setupRenderTarget(T):Re.__hasExternalTextures&&w.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture)}let te=null,Le=!1,Pe=!1;if(T){const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture)&&(Pe=!0);const qe=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(te=qe[V],Le=!0):be.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?te=_e.get(T).__webglMultisampledFramebuffer:te=qe,L.copy(T.viewport),U.copy(T.scissor),M=T.scissorTest}else L.copy(O).multiplyScalar(ne).floor(),U.copy(Q).multiplyScalar(ne).floor(),M=ie;if(me.bindFramebuffer(36160,te)&&be.drawBuffers&&z&&me.drawBuffers(T,te),me.viewport(L),me.scissor(U),me.setScissorTest(M),Le){const Re=_e.get(T.texture);F.framebufferTexture2D(36160,36064,34069+V,Re.__webglTexture,K)}else if(Pe){const Re=_e.get(T.texture),qe=V||0;F.framebufferTextureLayer(36160,36064,Re.__webglTexture,K||0,qe)}E=-1},this.readRenderTargetPixels=function(T,V,K,z,te,Le,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){me.bindFramebuffer(36160,Oe);try{const Re=T.texture,qe=Re.format,Ge=Re.type;if(qe!==nn&&b.convert(qe)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===Er&&(ae.has("EXT_color_buffer_half_float")||be.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ge!==ui&&b.convert(Ge)!==F.getParameter(35738)&&!(Ge===ri&&(be.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-z&&K>=0&&K<=T.height-te&&F.readPixels(V,K,z,te,b.convert(qe),b.convert(Ge),Le)}finally{const Re=A!==null?_e.get(A).__webglFramebuffer:null;me.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,V,K=0){const z=Math.pow(2,-K),te=Math.floor(V.image.width*z),Le=Math.floor(V.image.height*z);w.setTexture2D(V,0),F.copyTexSubImage2D(3553,K,0,0,T.x,T.y,te,Le),me.unbindTexture()},this.copyTextureToTexture=function(T,V,K,z=0){const te=V.image.width,Le=V.image.height,Pe=b.convert(K.format),Oe=b.convert(K.type);w.setTexture2D(K,0),F.pixelStorei(37440,K.flipY),F.pixelStorei(37441,K.premultiplyAlpha),F.pixelStorei(3317,K.unpackAlignment),V.isDataTexture?F.texSubImage2D(3553,z,T.x,T.y,te,Le,Pe,Oe,V.image.data):V.isCompressedTexture?F.compressedTexSubImage2D(3553,z,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Pe,V.mipmaps[0].data):F.texSubImage2D(3553,z,T.x,T.y,Pe,Oe,V.image),z===0&&K.generateMipmaps&&F.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,V,K,z,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Re=b.convert(z.format),qe=b.convert(z.type);let Ge;if(z.isData3DTexture)w.setTexture3D(z,0),Ge=32879;else if(z.isDataArrayTexture)w.setTexture2DArray(z,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,z.flipY),F.pixelStorei(37441,z.premultiplyAlpha),F.pixelStorei(3317,z.unpackAlignment);const ke=F.getParameter(3314),Ze=F.getParameter(32878),Hn=F.getParameter(3316),gi=F.getParameter(3315),_i=F.getParameter(32877),$t=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(3314,$t.width),F.pixelStorei(32878,$t.height),F.pixelStorei(3316,T.min.x),F.pixelStorei(3315,T.min.y),F.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Ge,te,V.x,V.y,V.z,Le,Pe,Oe,Re,qe,$t.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ge,te,V.x,V.y,V.z,Le,Pe,Oe,Re,$t.data)):F.texSubImage3D(Ge,te,V.x,V.y,V.z,Le,Pe,Oe,Re,qe,$t),F.pixelStorei(3314,ke),F.pixelStorei(32878,Ze),F.pixelStorei(3316,Hn),F.pixelStorei(3315,gi),F.pixelStorei(32877,_i),te===0&&z.generateMipmaps&&F.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){_=0,y=0,A=null,me.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lM extends gf{}lM.prototype.isWebGL1Renderer=!0;class cM extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ca extends Vn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new B,h=new B,m=[],g=[],p=[],d=[];for(let _=0;_<=i;_++){const y=[],A=_/i;let E=0;_==0&&a==0?E=.5/t:_==i&&l==Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const L=S/t;f.x=-e*Math.cos(r+L*s)*Math.sin(a+A*o),f.y=e*Math.cos(a+A*o),f.z=e*Math.sin(r+L*s)*Math.sin(a+A*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(L+E,1-A),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<t;y++){const A=u[_][y+1],E=u[_][y],S=u[_+1][y],L=u[_+1][y+1];(_!==0||a>0)&&m.push(A,E,L),(_!==i-1||l<Math.PI)&&m.push(E,S,L)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(d,2))}static fromJSON(e){return new Ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Fc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const fM=new uM;class _f{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class hM extends _f{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Tr("img");function l(){u(),Fc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class dM extends _f{constructor(e){super(e)}load(e,t,i,r){const s=new zt,a=new hM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Nc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const Oc={type:"change"},Eo={type:"start"},Uc={type:"end"};class pM extends mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",pe),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Oc),i.update(),s=r.NONE},this.update=function(){const b=new B,j=new di().setFromUnitVectors(e.up,new B(0,1,0)),de=j.clone().invert(),ve=new B,ye=new di,Ce=2*Math.PI;return function(){const Ne=i.object.position;b.copy(Ne).sub(i.target),b.applyQuaternion(j),o.setFromVector3(b),i.autoRotate&&s===r.NONE&&C(U()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let R=i.minAzimuthAngle,xe=i.maxAzimuthAngle;return isFinite(R)&&isFinite(xe)&&(R<-Math.PI?R+=Ce:R>Math.PI&&(R-=Ce),xe<-Math.PI?xe+=Ce:xe>Math.PI&&(xe-=Ce),R<=xe?o.theta=Math.max(R,Math.min(xe,o.theta)):o.theta=o.theta>(R+xe)/2?Math.max(R,o.theta):Math.min(xe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),b.setFromSpherical(o),b.applyQuaternion(de),Ne.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ve.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a?(i.dispatchEvent(Oc),ve.copy(i.object.position),ye.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",D),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",ee),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",pe)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Nc,l=new Nc;let c=1;const u=new B;let f=!1;const h=new ze,m=new ze,g=new ze,p=new ze,d=new ze,_=new ze,y=new ze,A=new ze,E=new ze,S=[],L={};function U(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function I(b){l.phi-=b}const ne=function(){const b=new B;return function(de,ve){b.setFromMatrixColumn(ve,0),b.multiplyScalar(-de),u.add(b)}}(),ge=function(){const b=new B;return function(de,ve){i.screenSpacePanning===!0?b.setFromMatrixColumn(ve,1):(b.setFromMatrixColumn(ve,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(de),u.add(b)}}(),W=function(){const b=new B;return function(de,ve){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;b.copy(Ce).sub(i.target);let Fe=b.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*de*Fe/ye.clientHeight,i.object.matrix),ge(2*ve*Fe/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(de*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),ge(ve*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(b){i.object.isPerspectiveCamera?c/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(b){i.object.isPerspectiveCamera?c*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(b){h.set(b.clientX,b.clientY)}function J(b){y.set(b.clientX,b.clientY)}function H(b){p.set(b.clientX,b.clientY)}function N(b){m.set(b.clientX,b.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;C(2*Math.PI*g.x/j.clientHeight),I(2*Math.PI*g.y/j.clientHeight),h.copy(m),i.update()}function X(b){A.set(b.clientX,b.clientY),E.subVectors(A,y),E.y>0?O(M()):E.y<0&&Q(M()),y.copy(A),i.update()}function he(b){d.set(b.clientX,b.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),W(_.x,_.y),p.copy(d),i.update()}function ce(b){b.deltaY<0?Q(M()):b.deltaY>0&&O(M()),i.update()}function oe(b){let j=!1;switch(b.code){case i.keys.UP:W(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:W(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:W(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:W(-i.keyPanSpeed,0),j=!0;break}j&&(b.preventDefault(),i.update())}function we(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),j=.5*(S[0].pageY+S[1].pageY);h.set(b,j)}}function k(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),j=.5*(S[0].pageY+S[1].pageY);p.set(b,j)}}function F(){const b=S[0].pageX-S[1].pageX,j=S[0].pageY-S[1].pageY,de=Math.sqrt(b*b+j*j);y.set(0,de)}function re(){i.enableZoom&&F(),i.enablePan&&k()}function ae(){i.enableZoom&&F(),i.enableRotate&&we()}function be(b){if(S.length==1)m.set(b.pageX,b.pageY);else{const de=Se(b),ve=.5*(b.pageX+de.x),ye=.5*(b.pageY+de.y);m.set(ve,ye)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;C(2*Math.PI*g.x/j.clientHeight),I(2*Math.PI*g.y/j.clientHeight),h.copy(m)}function me(b){if(S.length===1)d.set(b.pageX,b.pageY);else{const j=Se(b),de=.5*(b.pageX+j.x),ve=.5*(b.pageY+j.y);d.set(de,ve)}_.subVectors(d,p).multiplyScalar(i.panSpeed),W(_.x,_.y),p.copy(d)}function Te(b){const j=Se(b),de=b.pageX-j.x,ve=b.pageY-j.y,ye=Math.sqrt(de*de+ve*ve);A.set(0,ye),E.set(0,Math.pow(A.y/y.y,i.zoomSpeed)),O(E.y),y.copy(A)}function _e(b){i.enableZoom&&Te(b),i.enablePan&&me(b)}function w(b){i.enableZoom&&Te(b),i.enableRotate&&be(b)}function P(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",G),i.domElement.addEventListener("pointerup",Z)),q(b),b.pointerType==="touch"?v(b):le(b))}function G(b){i.enabled!==!1&&(b.pointerType==="touch"?x(b):ue(b))}function Z(b){Y(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(Uc),s=r.NONE}function ee(b){Y(b)}function le(b){let j;switch(b.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Mi.DOLLY:if(i.enableZoom===!1)return;J(b),s=r.DOLLY;break;case Mi.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;H(b),s=r.PAN}else{if(i.enableRotate===!1)return;ie(b),s=r.ROTATE}break;case Mi.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;ie(b),s=r.ROTATE}else{if(i.enablePan===!1)return;H(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eo)}function ue(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(b);break;case r.DOLLY:if(i.enableZoom===!1)return;X(b);break;case r.PAN:if(i.enablePan===!1)return;he(b);break}}function fe(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Eo),ce(b),i.dispatchEvent(Uc))}function pe(b){i.enabled===!1||i.enablePan===!1||oe(b)}function v(b){switch(se(b),S.length){case 1:switch(i.touches.ONE){case yi.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case yi.PAN:if(i.enablePan===!1)return;k(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case yi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;re(),s=r.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ae(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eo)}function x(b){switch(se(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;w(b),i.update();break;default:s=r.NONE}}function D(b){i.enabled!==!1&&b.preventDefault()}function q(b){S.push(b)}function Y(b){delete L[b.pointerId];for(let j=0;j<S.length;j++)if(S[j].pointerId==b.pointerId){S.splice(j,1);return}}function se(b){let j=L[b.pointerId];j===void 0&&(j=new ze,L[b.pointerId]=j),j.set(b.pageX,b.pageY)}function Se(b){const j=b.pointerId===S[0].pointerId?S[1]:S[0];return L[j.pointerId]}i.domElement.addEventListener("contextmenu",D),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",ee),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const mM={id:"universe"},gM=Es({__name:"universe",props:{timeSpan:{type:Number,default:60*60*24*30}},setup(n){const e=n,t=new dM;let i,r,s,a;const o=()=>{i=new cM,s=new gf({antialias:!0}),s.setSize(innerWidth,innerHeight);const y=document.getElementById("universe");y&&y.appendChild(s.domElement)},l=()=>{r=new Dt(60,innerWidth/innerHeight,1,1e5),r.position.set(0,500,2e3),r.lookAt(i.position)},c=()=>{a=new pM(r,s.domElement),a.maxPolarAngle=.9*Math.PI/2,a.enableZoom=!0,a.enableDamping=!0,a.dampingFactor=.12},u=()=>{o(),l(),p(),c(),_()};let f={},h={};const{timeSpan:m}=gh(e),g=y=>{const{name:A,img:E,geometry:S,self:L}=y,{radius:U,widthSegments:M,heightSegments:C}=S;f[A]=new Gi,h[A]=new Gi,i.add(h[A]),t.load(E,I=>{const ne=new Ca(U,M,C),ge=new Ea({map:I}),W=new _n(ne,ge);if("position"in y){const{position:H,revolution:N}=y,{dir:X,distance:he}=H,{dir:ce,speed:oe}=N;f[A].position[X]-=he;const we=2*Math.PI/(oe*24*60*60*60),k=()=>{requestAnimationFrame(k),h[A].rotation[ce]+=we*(m==null?void 0:m.value)};k()}f[A].add(W),h[A].add(f[A]);const{dir:O,speed:Q}=L;let ie=new B(0,1,0).applyAxisAngle(new B(0,0,1),O*(Math.PI/180));f[A].rotateZ(O*(Math.PI/180));const J=()=>{requestAnimationFrame(J),f[A].rotateOnWorldAxis(ie,Q)};J()})},p=()=>{const y={name:"sun",img:rm,geometry:{radius:500,widthSegments:20,heightSegments:20},self:{dir:0,speed:.004}},A={name:"mercury",img:sm,geometry:{radius:25,widthSegments:20,heightSegments:20},self:{dir:.034,speed:.002},position:{dir:"x",distance:550},revolution:{dir:"y",speed:88}},E={name:"venus",img:om,geometry:{radius:100,widthSegments:20,heightSegments:20},self:{dir:3.39458,speed:-.005},position:{dir:"x",distance:700},revolution:{dir:"y",speed:224.701}},S={name:"earth",img:am,geometry:{radius:100,widthSegments:20,heightSegments:20},self:{dir:23.44,speed:.01},position:{dir:"x",distance:950},revolution:{dir:"y",speed:365}},L={name:"mars",img:lm,geometry:{radius:85,widthSegments:20,heightSegments:20},self:{dir:25.19,speed:.01},position:{dir:"x",distance:1200},revolution:{dir:"y",speed:687}},U={name:"jupiter",img:cm,geometry:{radius:150,widthSegments:20,heightSegments:20},self:{dir:3.13,speed:.08},position:{dir:"x",distance:1500},revolution:{dir:"y",speed:11.8*365}},M={name:"saturn",img:um,geometry:{radius:120,widthSegments:20,heightSegments:20},self:{dir:26.7,speed:.15},position:{dir:"x",distance:1800},revolution:{dir:"y",speed:29.5*365}},C={name:"uranus",img:fm,geometry:{radius:50,widthSegments:20,heightSegments:20},self:{dir:97.77,speed:.1},position:{dir:"x",distance:2100},revolution:{dir:"y",speed:83.747*365}},I={name:"neptune",img:hm,geometry:{radius:50,widthSegments:20,heightSegments:20},self:{dir:29.56,speed:.1},position:{dir:"x",distance:2300},revolution:{dir:"y",speed:164.8*365}};g(y),g(A),g(E),g(S),g(L),g(U),g(M),g(C),g(I)};function d(){const y=window.innerWidth,A=window.innerHeight;r.aspect=y/A,r.updateProjectionMatrix(),s.setSize(y,A)}const _=()=>{requestAnimationFrame(_),s.render(i,r),r.lookAt(i.position),a.update()};return pa(u),window.addEventListener("resize",d),(y,A)=>(xa(),md("div",mM))}});const _M=Es({__name:"index",setup(n){const e=tu(7776e3);return(t,i)=>(xa(),Lu(gM,{"time-span":e.value},null,8,["time-span"]))}}),xM=[{path:"/",name:"index",component:_M}],vM=nm({history:xp(),routes:xM});const MM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},yM={};function bM(n,e){const t=Yh("router-view");return xa(),Lu(t)}const SM=MM(yM,[["render",bM]]);Qd(SM).use(vM).mount("#app");
