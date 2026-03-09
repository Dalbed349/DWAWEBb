const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Contact-CHBIrPOu.js","assets/Contact-BudciZQt.css","assets/Exhibitions-Crb8_w3v.js","assets/SubmenuLinks-CezxPyGo.js","assets/SubmenuLinks-U2v-_-kt.css","assets/Exhibitions-6WjwlhSi.css","assets/Biography-CVmQeTor.js","assets/transform-5rGwPuSG.js","assets/Biography-BgdF2vi9.css","assets/Works-B6JkW7Il.js","assets/Works-CZUmJ8s2.css","assets/WorkTemplate-SbirWw5m.js","assets/WorkTemplate-B7neQpYU.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function za(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Tr=[],Gt=()=>{},ng=()=>!1,Ki=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ka=t=>t.startsWith("onUpdate:"),He=Object.assign,Ga=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rg=Object.prototype.hasOwnProperty,Ie=(t,e)=>rg.call(t,e),se=Array.isArray,wr=t=>Gi(t)==="[object Map]",Lh=t=>Gi(t)==="[object Set]",ce=t=>typeof t=="function",Be=t=>typeof t=="string",kn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Fh=t=>(Ve(t)||ce(t))&&ce(t.then)&&ce(t.catch),Bh=Object.prototype.toString,Gi=t=>Bh.call(t),sg=t=>Gi(t).slice(8,-1),Uh=t=>Gi(t)==="[object Object]",Wa=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ig=/-(\w)/g,kt=Wi(t=>t.replace(ig,(e,n)=>n?n.toUpperCase():"")),og=/\B([A-Z])/g,sr=Wi(t=>t.replace(og,"-$1").toLowerCase()),Qi=Wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oo=Wi(t=>t?`on${Qi(t)}`:""),An=(t,e)=>!Object.is(t,e),No=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$h=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ag=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lg=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Mc;const Yi=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qa(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?fg(r):Qa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ve(t))return t}const cg=/;(?![^(]*\))/g,ug=/:([^]+)/,hg=/\/\*[^]*?\*\//g;function fg(t){const e={};return t.replace(hg,"").split(cg).forEach(n=>{if(n){const r=n.split(ug);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zt(t){let e="";if(Be(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=zt(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pg=za(dg);function jh(t){return!!t||t===""}const qh=t=>!!(t&&t.__v_isRef===!0),Hh=t=>Be(t)?t:t==null?"":se(t)||Ve(t)&&(t.toString===Bh||!ce(t.toString))?qh(t)?Hh(t.value):JSON.stringify(t,zh,2):String(t),zh=(t,e)=>qh(e)?zh(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Mo(r,i)+" =>"]=s,n),{})}:Lh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Mo(n))}:kn(e)?Mo(e):Ve(e)&&!se(e)&&!Uh(e)?String(e):e,Mo=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class gg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mg(){return Rt}let Se;const Lo=new WeakSet;class Kh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lc(this),Qh(this);const e=Se,n=Ft;Se=this,Ft=!0;try{return this.fn()}finally{Yh(this),Se=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ja(e);this.deps=this.depsTail=void 0,Lc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){aa(this)&&this.run()}get dirty(){return aa(this)}}let Gh=0,hs,fs;function Wh(t,e=!1){if(t.flags|=8,e){t.next=fs,fs=t;return}t.next=hs,hs=t}function Ya(){Gh++}function Xa(){if(--Gh>0)return;if(fs){let e=fs;for(fs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hs;){let e=hs;for(hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Qh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yh(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ja(r),_g(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function aa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===As))return;t.globalVersion=As;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!aa(t)){t.flags&=-3;return}const n=Se,r=Ft;Se=t,Ft=!0;try{Qh(t);const s=t.fn(t._value);(e.version===0||An(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=n,Ft=r,Yh(t),t.flags&=-3}}function Ja(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ja(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _g(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const Jh=[];function On(){Jh.push(Ft),Ft=!1}function Nn(){const t=Jh.pop();Ft=t===void 0?!0:t}function Lc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Se;Se=void 0;try{e()}finally{Se=n}}}let As=0;class yg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Za{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Se||!Ft||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new yg(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,Zh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(e){this.version++,As++,this.notify(e)}notify(e){Ya();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xa()}}}function Zh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Zh(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pi=new WeakMap,Qn=Symbol(""),la=Symbol(""),Is=Symbol("");function ct(t,e,n){if(Ft&&Se){let r=Pi.get(t);r||Pi.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Za),s.map=r,s.key=n),s.track()}}function sn(t,e,n,r,s,i){const a=Pi.get(t);if(!a){As++;return}const l=c=>{c&&c.trigger()};if(Ya(),e==="clear")a.forEach(l);else{const c=se(t),h=c&&Wa(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,g)=>{(g==="length"||g===Is||!kn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Is)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Qn)),wr(t)&&l(a.get(la)));break;case"delete":c||(l(a.get(Qn)),wr(t)&&l(a.get(la)));break;case"set":wr(t)&&l(a.get(Qn));break}}Xa()}function vg(t,e){const n=Pi.get(t);return n&&n.get(e)}function fr(t){const e=Te(t);return e===t?e:(ct(e,"iterate",Is),xt(t)?e:e.map(ut))}function Xi(t){return ct(t=Te(t),"iterate",Is),t}const Eg={__proto__:null,[Symbol.iterator](){return Fo(this,Symbol.iterator,ut)},concat(...t){return fr(this).concat(...t.map(e=>se(e)?fr(e):e))},entries(){return Fo(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return en(this,"every",t,e,void 0,arguments)},filter(t,e){return en(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return en(this,"find",t,e,ut,arguments)},findIndex(t,e){return en(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return en(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return en(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return en(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bo(this,"includes",t)},indexOf(...t){return Bo(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Bo(this,"lastIndexOf",t)},map(t,e){return en(this,"map",t,e,void 0,arguments)},pop(){return ts(this,"pop")},push(...t){return ts(this,"push",t)},reduce(t,...e){return Fc(this,"reduce",t,e)},reduceRight(t,...e){return Fc(this,"reduceRight",t,e)},shift(){return ts(this,"shift")},some(t,e){return en(this,"some",t,e,void 0,arguments)},splice(...t){return ts(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return ts(this,"unshift",t)},values(){return Fo(this,"values",ut)}};function Fo(t,e,n){const r=Xi(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Tg=Array.prototype;function en(t,e,n,r,s,i){const a=Xi(t),l=a!==t&&!xt(t),c=a[e];if(c!==Tg[e]){const p=c.apply(t,i);return l?ut(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,ut(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Fc(t,e,n,r){const s=Xi(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ut(l),c,t)}),s[e](i,...r)}function Bo(t,e,n){const r=Te(t);ct(r,"iterate",Is);const s=r[e](...n);return(s===-1||s===!1)&&nl(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function ts(t,e,n=[]){On(),Ya();const r=Te(t)[e].apply(t,n);return Xa(),Nn(),r}const wg=za("__proto__,__v_isRef,__isVue"),ef=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function Ag(t){kn(t)||(t=String(t));const e=Te(this);return ct(e,"has",t),e.hasOwnProperty(t)}class tf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?kg:of:i?sf:rf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=Eg[n]))return c;if(n==="hasOwnProperty")return Ag}const l=Reflect.get(e,n,tt(e)?e:r);return(kn(n)?ef.has(n):wg(n))||(s||ct(e,"get",n),i)?l:tt(l)?a&&Wa(n)?l:l.value:Ve(l)?s?lf(l):Ji(l):l}}class nf extends tf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=tr(i);if(!xt(r)&&!tr(r)&&(i=Te(i),r=Te(r)),!se(e)&&tt(i)&&!tt(r))return c?!1:(i.value=r,!0)}const a=se(e)&&Wa(n)?Number(n)<e.length:Ie(e,n),l=Reflect.set(e,n,r,tt(e)?e:s);return e===Te(s)&&(a?An(r,i)&&sn(e,"set",n,r):sn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kn(n)||!ef.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",se(e)?"length":Qn),Reflect.ownKeys(e)}}class Ig extends tf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bg=new nf,Rg=new Ig,Cg=new nf(!0);const ca=t=>t,li=t=>Reflect.getPrototypeOf(t);function Sg(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),a=wr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?ca:e?ua:ut;return!e&&ct(i,"iterate",c?la:Qn),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function ci(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pg(t,e){const n={get(s){const i=this.__v_raw,a=Te(i),l=Te(s);t||(An(s,l)&&ct(a,"get",s),ct(a,"get",l));const{has:c}=li(a),h=e?ca:t?ua:ut;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(Te(s),"iterate",Qn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Te(i),l=Te(s);return t||(An(s,l)&&ct(a,"has",s),ct(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Te(l),h=e?ca:t?ua:ut;return!t&&ct(c,"iterate",Qn),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return He(n,t?{add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear")}:{add(s){!e&&!xt(s)&&!tr(s)&&(s=Te(s));const i=Te(this);return li(i).has.call(i,s)||(i.add(s),sn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!tr(i)&&(i=Te(i));const a=Te(this),{has:l,get:c}=li(a);let h=l.call(a,s);h||(s=Te(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?An(i,d)&&sn(a,"set",s,i):sn(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:l}=li(i);let c=a.call(i,s);c||(s=Te(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&sn(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&sn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sg(s,t,e)}),n}function el(t,e){const n=Pg(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const Dg={get:el(!1,!1)},Vg={get:el(!1,!0)},xg={get:el(!0,!1)};const rf=new WeakMap,sf=new WeakMap,of=new WeakMap,kg=new WeakMap;function Og(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ng(t){return t.__v_skip||!Object.isExtensible(t)?0:Og(sg(t))}function Ji(t){return tr(t)?t:tl(t,!1,bg,Dg,rf)}function af(t){return tl(t,!1,Cg,Vg,sf)}function lf(t){return tl(t,!0,Rg,xg,of)}function tl(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Ng(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Ar(t){return tr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function nl(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Mg(t){return!Ie(t,"__v_skip")&&Object.isExtensible(t)&&$h(t,"__v_skip",!0),t}const ut=t=>Ve(t)?Ji(t):t,ua=t=>Ve(t)?lf(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function Gn(t){return cf(t,!1)}function Lg(t){return cf(t,!0)}function cf(t,e){return tt(t)?t:new Fg(t,e)}class Fg{constructor(e,n){this.dep=new Za,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||tr(e);e=r?e:Te(e),An(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function Yn(t){return tt(t)?t.value:t}const Bg={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uf(t){return Ar(t)?t:new Proxy(t,Bg)}function OA(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=$g(t,n);return e}class Ug{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vg(Te(this._object),this._key)}}function $g(t,e,n){const r=t[e];return tt(r)?r:new Ug(t,e,n)}class jg{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Za(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Wh(this,!0),!0}get value(){const e=this.dep.track();return Xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qg(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new jg(r,s,n)}const ui={},Di=new WeakMap;let Hn;function Hg(t,e=!1,n=Hn){if(n){let r=Di.get(n);r||Di.set(n,r=[]),r.push(t)}}function zg(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=j=>s?j:xt(j)||s===!1||s===0?En(j,1):En(j);let d,p,g,T,D=!1,k=!1;if(tt(t)?(p=()=>t.value,D=xt(t)):Ar(t)?(p=()=>h(t),D=!0):se(t)?(k=!0,D=t.some(j=>Ar(j)||xt(j)),p=()=>t.map(j=>{if(tt(j))return j.value;if(Ar(j))return h(j);if(ce(j))return c?c(j,2):j()})):ce(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){On();try{g()}finally{Nn()}}const j=Hn;Hn=d;try{return c?c(t,3,[T]):t(T)}finally{Hn=j}}:p=Gt,e&&s){const j=p,ae=s===!0?1/0:s;p=()=>En(j(),ae)}const M=mg(),z=()=>{d.stop(),M&&M.active&&Ga(M.effects,d)};if(i&&e){const j=e;e=(...ae)=>{j(...ae),z()}}let B=k?new Array(t.length).fill(ui):ui;const H=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const ae=d.run();if(s||D||(k?ae.some((oe,R)=>An(oe,B[R])):An(ae,B))){g&&g();const oe=Hn;Hn=d;try{const R=[ae,B===ui?void 0:k&&B[0]===ui?[]:B,T];c?c(e,3,R):e(...R),B=ae}finally{Hn=oe}}}else d.run()};return l&&l(H),d=new Kh(p),d.scheduler=a?()=>a(H,!1):H,T=j=>Hg(j,!1,d),g=d.onStop=()=>{const j=Di.get(d);if(j){if(c)c(j,4);else for(const ae of j)ae();Di.delete(d)}},e?r?H(!0):B=d.run():a?a(H.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function En(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,tt(t))En(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)En(t[r],e,n);else if(Lh(t)||wr(t))t.forEach(r=>{En(r,e,n)});else if(Uh(t)){for(const r in t)En(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&En(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Us(t,e,n,r){try{return r?t(...r):t()}catch(s){Zi(s,e,n)}}function Bt(t,e,n,r){if(ce(t)){const s=Us(t,e,n,r);return s&&Fh(s)&&s.catch(i=>{Zi(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function Zi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){On(),Us(i,null,10,[t,c,h]),Nn();return}}Kg(t,n,s,r,a)}function Kg(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const mt=[];let qt=-1;const Ir=[];let mn=null,dr=0;const hf=Promise.resolve();let Vi=null;function ff(t){const e=Vi||hf;return t?e.then(this?t.bind(this):t):e}function Gg(t){let e=qt+1,n=mt.length;for(;e<n;){const r=e+n>>>1,s=mt[r],i=bs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function rl(t){if(!(t.flags&1)){const e=bs(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=bs(n)?mt.push(t):mt.splice(Gg(e),0,t),t.flags|=1,df()}}function df(){Vi||(Vi=hf.then(gf))}function Wg(t){se(t)?Ir.push(...t):mn&&t.id===-1?mn.splice(dr+1,0,t):t.flags&1||(Ir.push(t),t.flags|=1),df()}function Bc(t,e,n=qt+1){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pf(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,r)=>bs(n)-bs(r));if(Ir.length=0,mn){mn.push(...e);return}for(mn=e,dr=0;dr<mn.length;dr++){const n=mn[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mn=null,dr=0}}const bs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gf(t){try{for(qt=0;qt<mt.length;qt++){const e=mt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Us(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<mt.length;qt++){const e=mt[qt];e&&(e.flags&=-2)}qt=-1,mt.length=0,pf(),Vi=null,(mt.length||Ir.length)&&gf()}}let Vt=null,mf=null;function xi(t){const e=Vt;return Vt=t,mf=t&&t.type.__scopeId||null,e}function vr(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qc(-1);const i=xi(e);let a;try{a=t(...s)}finally{xi(i),r._d&&Qc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Un(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(On(),Bt(c,n,8,[t.el,l,t,e]),Nn())}}const Qg=Symbol("_vte"),_f=t=>t.__isTeleport,_n=Symbol("_leaveCb"),hi=Symbol("_enterCb");function Yg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return no(()=>{t.isMounted=!0}),sl(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],yf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},vf=t=>{const e=t.subTree;return e.component?vf(e.component):e},Xg={name:"BaseTransition",props:yf,setup(t,{slots:e}){const n=Wm(),r=Yg();return()=>{const s=e.default&&wf(e.default(),!0);if(!s||!s.length)return;const i=Ef(s),a=Te(t),{mode:l}=a;if(r.isLeaving)return Uo(i);const c=Uc(i);if(!c)return Uo(i);let h=ha(c,a,r,n,p=>h=p);c.type!==Et&&Rs(c,h);let d=n.subTree&&Uc(n.subTree);if(d&&d.type!==Et&&!Kn(c,d)&&vf(n).type!==Et){let p=ha(d,a,r,n);if(Rs(d,p),l==="out-in"&&c.type!==Et)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Uo(i);l==="in-out"&&c.type!==Et?p.delayLeave=(g,T,D)=>{const k=Tf(r,d);k[String(d.key)]=d,g[_n]=()=>{T(),g[_n]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{D(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Ef(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Et){e=n;break}}return e}const Jg=Xg;function Tf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ha(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:T,onAfterLeave:D,onLeaveCancelled:k,onBeforeAppear:M,onAppear:z,onAfterAppear:B,onAppearCancelled:H}=e,j=String(t.key),ae=Tf(n,t),oe=(y,I)=>{y&&Bt(y,r,9,I)},R=(y,I)=>{const b=I[1];oe(y,I),se(y)?y.every(A=>A.length<=1)&&b():y.length<=1&&b()},v={mode:a,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=M||c;else return;y[_n]&&y[_n](!0);const b=ae[j];b&&Kn(t,b)&&b.el[_n]&&b.el[_n](),oe(I,[y])},enter(y){let I=h,b=d,A=p;if(!n.isMounted)if(i)I=z||h,b=B||d,A=H||p;else return;let E=!1;const be=y[hi]=ze=>{E||(E=!0,ze?oe(A,[y]):oe(b,[y]),v.delayedLeave&&v.delayedLeave(),y[hi]=void 0)};I?R(I,[y,be]):be()},leave(y,I){const b=String(t.key);if(y[hi]&&y[hi](!0),n.isUnmounting)return I();oe(g,[y]);let A=!1;const E=y[_n]=be=>{A||(A=!0,I(),be?oe(k,[y]):oe(D,[y]),y[_n]=void 0,ae[b]===t&&delete ae[b])};ae[b]=t,T?R(T,[y,E]):E()},clone(y){const I=ha(y,e,n,r,s);return s&&s(I),I}};return v}function Uo(t){if(eo(t))return t=Cn(t),t.children=null,t}function Uc(t){if(!eo(t))return _f(t.type)&&t.children?Ef(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ce(n.default))return n.default()}}function Rs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wf(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Mt?(a.patchFlag&128&&s++,r=r.concat(wf(a.children,e,l))):(e||a.type!==Et)&&r.push(l!=null?Cn(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Af(t,e){return ce(t)?He({name:t.name},e,{setup:t}):t}function If(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ki(t,e,n,r,s=!1){if(se(t)){t.forEach((D,k)=>ki(D,e&&(se(e)?e[k]:e),n,r,s));return}if(ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ki(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?cl(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,g=Te(p),T=p===Pe?()=>!1:D=>Ie(g,D);if(h!=null&&h!==c&&(Be(h)?(d[h]=null,T(h)&&(p[h]=null)):tt(h)&&(h.value=null)),ce(c))Us(c,l,12,[a,d]);else{const D=Be(c),k=tt(c);if(D||k){const M=()=>{if(t.f){const z=D?T(c)?p[c]:d[c]:c.value;s?se(z)&&Ga(z,i):se(z)?z.includes(i)||z.push(i):D?(d[c]=[i],T(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else D?(d[c]=a,T(c)&&(p[c]=a)):k&&(c.value=a,t.k&&(d[t.k]=a))};a?(M.id=-1,bt(M,n)):M()}}}Yi().requestIdleCallback;Yi().cancelIdleCallback;const ds=t=>!!t.type.__asyncLoader,eo=t=>t.type.__isKeepAlive;function Zg(t,e){bf(t,"a",e)}function em(t,e){bf(t,"da",e)}function bf(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(to(e,r,n),n){let s=n.parent;for(;s&&s.parent;)eo(s.parent.vnode)&&tm(r,e,n,s),s=s.parent}}function tm(t,e,n,r){const s=to(e,t,r,!0);Rf(()=>{Ga(r[e],s)},n)}function to(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{On();const l=$s(n),c=Bt(e,n,t,a);return l(),Nn(),c});return r?s.unshift(i):s.push(i),i}}const ln=t=>(e,n=et)=>{(!Ss||t==="sp")&&to(t,(...r)=>e(...r),n)},nm=ln("bm"),no=ln("m"),rm=ln("bu"),sm=ln("u"),sl=ln("bum"),Rf=ln("um"),im=ln("sp"),om=ln("rtg"),am=ln("rtc");function lm(t,e=et){to("ec",t,e)}const cm="components";function ps(t,e){return hm(cm,t,!0,e)||t}const um=Symbol.for("v-ndc");function hm(t,e,n=!0,r=!1){const s=Vt||et;if(s){const i=s.type;{const l=Zm(i,!1);if(l&&(l===e||l===kt(e)||l===Qi(kt(e))))return i}const a=$c(s[t]||i[t],e)||$c(s.appContext[t],e);return!a&&r?i:a}}function $c(t,e){return t&&(t[e]||t[kt(e)]||t[Qi(kt(e))])}function fm(t,e,n,r){let s;const i=n,a=se(t);if(a||Be(t)){const l=a&&Ar(t);let c=!1;l&&(c=!xt(t),t=Xi(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?ut(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const fa=t=>t?Gf(t)?cl(t):fa(t.parent):null,gs=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fa(t.parent),$root:t=>fa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>il(t),$forceUpdate:t=>t.f||(t.f=()=>{rl(t.update)}),$nextTick:t=>t.n||(t.n=ff.bind(t.proxy)),$watch:t=>km.bind(t)}),$o=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Ie(t,e),dm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($o(r,e))return a[e]=1,r[e];if(s!==Pe&&Ie(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ie(h,e))return a[e]=3,i[e];if(n!==Pe&&Ie(n,e))return a[e]=4,n[e];da&&(a[e]=0)}}const d=gs[e];let p,g;if(d)return e==="$attrs"&&ct(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Ie(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Ie(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $o(s,e)?(s[e]=n,!0):r!==Pe&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Pe&&Ie(t,a)||$o(e,a)||(l=i[0])&&Ie(l,a)||Ie(r,a)||Ie(gs,a)||Ie(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jc(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let da=!0;function pm(t){const e=il(t),n=t.proxy,r=t.ctx;da=!1,e.beforeCreate&&qc(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:T,updated:D,activated:k,deactivated:M,beforeDestroy:z,beforeUnmount:B,destroyed:H,unmounted:j,render:ae,renderTracked:oe,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:b,components:A,directives:E,filters:be}=e;if(h&&gm(h,r,null),a)for(const fe in a){const he=a[fe];ce(he)&&(r[fe]=he.bind(n))}if(s){const fe=s.call(n,n);Ve(fe)&&(t.data=Ji(fe))}if(da=!0,i)for(const fe in i){const he=i[fe],At=ce(he)?he.bind(n,n):ce(he.get)?he.get.bind(n,n):Gt,Ot=!ce(he)&&ce(he.set)?he.set.bind(n):Gt,St=ft({get:At,set:Ot});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>St.value,set:ke=>St.value=ke})}if(l)for(const fe in l)Cf(l[fe],r,n,fe);if(c){const fe=ce(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(he=>{Ei(he,fe[he])})}d&&qc(d,t,"c");function xe(fe,he){se(he)?he.forEach(At=>fe(At.bind(n))):he&&fe(he.bind(n))}if(xe(nm,p),xe(no,g),xe(rm,T),xe(sm,D),xe(Zg,k),xe(em,M),xe(lm,v),xe(am,oe),xe(om,R),xe(sl,B),xe(Rf,j),xe(im,y),se(I))if(I.length){const fe=t.exposed||(t.exposed={});I.forEach(he=>{Object.defineProperty(fe,he,{get:()=>n[he],set:At=>n[he]=At})})}else t.exposed||(t.exposed={});ae&&t.render===Gt&&(t.render=ae),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),E&&(t.directives=E),y&&If(t)}function gm(t,e,n=Gt){se(t)&&(t=pa(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function qc(t,e,n){Bt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cf(t,e,n,r){let s=r.includes(".")?$f(n,r):()=>n[r];if(Be(t)){const i=e[t];ce(i)&&Ti(s,i)}else if(ce(t))Ti(s,t.bind(n));else if(Ve(t))if(se(t))t.forEach(i=>Cf(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Ti(s,i,t)}}function il(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Oi(c,h,a,!0)),Oi(c,e,a)),Ve(e)&&i.set(e,c),c}function Oi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oi(t,i,n,!0),s&&s.forEach(a=>Oi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=mm[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const mm={data:Hc,props:zc,emits:zc,methods:is,computed:is,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:is,directives:is,watch:ym,provide:Hc,inject:_m};function Hc(t,e){return e?t?function(){return He(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function _m(t,e){return is(pa(t),pa(e))}function pa(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function is(t,e){return t?He(Object.create(null),t,e):e}function zc(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:He(Object.create(null),jc(t),jc(e??{})):e}function ym(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Sf(){return{app:null,config:{isNativeTag:ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vm=0;function Em(t,e){return function(r,s=null){ce(r)||(r=He({},r)),s!=null&&!Ve(s)&&(s=null);const i=Sf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:vm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:t_,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const T=h._ceVNode||qe(r,s);return T.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(T,d):t(T,d,g),c=!0,h._container=d,d.__vue_app__=h,cl(T.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Bt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=br;br=h;try{return d()}finally{br=p}}};return h}}let br=null;function Ei(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=et||Vt;if(r||br){const s=br?br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const Pf={},Df=()=>Object.create(Pf),Vf=t=>Object.getPrototypeOf(t)===Pf;function Tm(t,e,n,r=!1){const s={},i=Df();t.propsDefaults=Object.create(null),xf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:af(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wm(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Te(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ro(t.emitsOptions,g))continue;const T=e[g];if(c)if(Ie(i,g))T!==i[g]&&(i[g]=T,h=!0);else{const D=kt(g);s[D]=ga(c,l,D,T,t,!1)}else T!==i[g]&&(i[g]=T,h=!0)}}}else{xf(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ie(e,p)&&((d=sr(p))===p||!Ie(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ga(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&sn(t.attrs,"set","")}function xf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(us(c))continue;const h=e[c];let d;s&&Ie(s,d=kt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ro(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Te(n),h=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ga(s,c,p,h[p],t,!Ie(h,p))}}return a}function ga(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ie(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ce(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=$s(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===sr(n))&&(r=!0))}return r}const Am=new WeakMap;function kf(t,e,n=!1){const r=n?Am:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ce(t)){const d=p=>{c=!0;const[g,T]=kf(p,e,!0);He(a,g),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ve(t)&&r.set(t,Tr),Tr;if(se(i))for(let d=0;d<i.length;d++){const p=kt(i[d]);Kc(p)&&(a[p]=Pe)}else if(i)for(const d in i){const p=kt(d);if(Kc(p)){const g=i[d],T=a[p]=se(g)||ce(g)?{type:g}:He({},g),D=T.type;let k=!1,M=!0;if(se(D))for(let z=0;z<D.length;++z){const B=D[z],H=ce(B)&&B.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(M=!1)}else k=ce(D)&&D.name==="Boolean";T[0]=k,T[1]=M,(k||Ie(T,"default"))&&l.push(p)}}const h=[a,l];return Ve(t)&&r.set(t,h),h}function Kc(t){return t[0]!=="$"&&!us(t)}const Of=t=>t[0]==="_"||t==="$stable",ol=t=>se(t)?t.map(Ht):[Ht(t)],Im=(t,e,n)=>{if(e._n)return e;const r=vr((...s)=>ol(e(...s)),n);return r._c=!1,r},Nf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Of(s))continue;const i=t[s];if(ce(i))e[s]=Im(s,i,r);else if(i!=null){const a=ol(i);e[s]=()=>a}}},Mf=(t,e)=>{const n=ol(e);t.slots.default=()=>n},Lf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},bm=(t,e,n)=>{const r=t.slots=Df();if(t.vnode.shapeFlag&32){const s=e._;s?(Lf(r,e,n),n&&$h(r,"_",s,!0)):Nf(e,r)}else e&&Mf(t,e)},Rm=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lf(s,e,n):(i=!e.$stable,Nf(e,s)),a=e}else e&&(Mf(t,e),a={default:1});if(i)for(const l in s)!Of(l)&&a[l]==null&&delete s[l]},bt=Um;function Cm(t){return Sm(t)}function Sm(t,e){const n=Yi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:T=Gt,insertStaticContent:D}=t,k=(_,w,S,N=null,V=null,L=null,K=void 0,$=null,U=!!w.dynamicChildren)=>{if(_===w)return;_&&!Kn(_,w)&&(N=x(_),ke(_,V,L,!0),_=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:F,ref:te,shapeFlag:Q}=w;switch(F){case so:M(_,w,S,N);break;case Et:z(_,w,S,N);break;case Ho:_==null&&B(w,S,N,K);break;case Mt:A(_,w,S,N,V,L,K,$,U);break;default:Q&1?ae(_,w,S,N,V,L,K,$,U):Q&6?E(_,w,S,N,V,L,K,$,U):(Q&64||Q&128)&&F.process(_,w,S,N,V,L,K,$,U,J)}te!=null&&V&&ki(te,_&&_.ref,L,w||_,!w)},M=(_,w,S,N)=>{if(_==null)r(w.el=l(w.children),S,N);else{const V=w.el=_.el;w.children!==_.children&&h(V,w.children)}},z=(_,w,S,N)=>{_==null?r(w.el=c(w.children||""),S,N):w.el=_.el},B=(_,w,S,N)=>{[_.el,_.anchor]=D(_.children,w,S,N,_.el,_.anchor)},H=({el:_,anchor:w},S,N)=>{let V;for(;_&&_!==w;)V=g(_),r(_,S,N),_=V;r(w,S,N)},j=({el:_,anchor:w})=>{let S;for(;_&&_!==w;)S=g(_),s(_),_=S;s(w)},ae=(_,w,S,N,V,L,K,$,U)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),_==null?oe(w,S,N,V,L,K,$,U):y(_,w,V,L,K,$,U)},oe=(_,w,S,N,V,L,K,$)=>{let U,F;const{props:te,shapeFlag:Q,transition:ee,dirs:Z}=_;if(U=_.el=a(_.type,L,te&&te.is,te),Q&8?d(U,_.children):Q&16&&v(_.children,U,null,N,V,jo(_,L),K,$),Z&&Un(_,null,N,"created"),R(U,_,_.scopeId,K,N),te){for(const we in te)we!=="value"&&!us(we)&&i(U,we,null,te[we],L,N);"value"in te&&i(U,"value",null,te.value,L),(F=te.onVnodeBeforeMount)&&jt(F,N,_)}Z&&Un(_,null,N,"beforeMount");const ne=Pm(V,ee);ne&&ee.beforeEnter(U),r(U,w,S),((F=te&&te.onVnodeMounted)||ne||Z)&&bt(()=>{F&&jt(F,N,_),ne&&ee.enter(U),Z&&Un(_,null,N,"mounted")},V)},R=(_,w,S,N,V)=>{if(S&&T(_,S),N)for(let L=0;L<N.length;L++)T(_,N[L]);if(V){let L=V.subTree;if(w===L||qf(L.type)&&(L.ssContent===w||L.ssFallback===w)){const K=V.vnode;R(_,K,K.scopeId,K.slotScopeIds,V.parent)}}},v=(_,w,S,N,V,L,K,$,U=0)=>{for(let F=U;F<_.length;F++){const te=_[F]=$?yn(_[F]):Ht(_[F]);k(null,te,w,S,N,V,L,K,$)}},y=(_,w,S,N,V,L,K)=>{const $=w.el=_.el;let{patchFlag:U,dynamicChildren:F,dirs:te}=w;U|=_.patchFlag&16;const Q=_.props||Pe,ee=w.props||Pe;let Z;if(S&&$n(S,!1),(Z=ee.onVnodeBeforeUpdate)&&jt(Z,S,w,_),te&&Un(w,_,S,"beforeUpdate"),S&&$n(S,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&d($,""),F?I(_.dynamicChildren,F,$,S,N,jo(w,V),L):K||he(_,w,$,null,S,N,jo(w,V),L,!1),U>0){if(U&16)b($,Q,ee,S,V);else if(U&2&&Q.class!==ee.class&&i($,"class",null,ee.class,V),U&4&&i($,"style",Q.style,ee.style,V),U&8){const ne=w.dynamicProps;for(let we=0;we<ne.length;we++){const ve=ne[we],rt=Q[ve],Qe=ee[ve];(Qe!==rt||ve==="value")&&i($,ve,rt,Qe,V,S)}}U&1&&_.children!==w.children&&d($,w.children)}else!K&&F==null&&b($,Q,ee,S,V);((Z=ee.onVnodeUpdated)||te)&&bt(()=>{Z&&jt(Z,S,w,_),te&&Un(w,_,S,"updated")},N)},I=(_,w,S,N,V,L,K)=>{for(let $=0;$<w.length;$++){const U=_[$],F=w[$],te=U.el&&(U.type===Mt||!Kn(U,F)||U.shapeFlag&70)?p(U.el):S;k(U,F,te,null,N,V,L,K,!0)}},b=(_,w,S,N,V)=>{if(w!==S){if(w!==Pe)for(const L in w)!us(L)&&!(L in S)&&i(_,L,w[L],null,V,N);for(const L in S){if(us(L))continue;const K=S[L],$=w[L];K!==$&&L!=="value"&&i(_,L,$,K,V,N)}"value"in S&&i(_,"value",w.value,S.value,V)}},A=(_,w,S,N,V,L,K,$,U)=>{const F=w.el=_?_.el:l(""),te=w.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:Z}=w;Z&&($=$?$.concat(Z):Z),_==null?(r(F,S,N),r(te,S,N),v(w.children||[],S,te,V,L,K,$,U)):Q>0&&Q&64&&ee&&_.dynamicChildren?(I(_.dynamicChildren,ee,S,V,L,K,$),(w.key!=null||V&&w===V.subTree)&&Ff(_,w,!0)):he(_,w,S,te,V,L,K,$,U)},E=(_,w,S,N,V,L,K,$,U)=>{w.slotScopeIds=$,_==null?w.shapeFlag&512?V.ctx.activate(w,S,N,K,U):be(w,S,N,V,L,K,U):ze(_,w,U)},be=(_,w,S,N,V,L,K)=>{const $=_.component=Gm(_,N,V);if(eo(_)&&($.ctx.renderer=J),Qm($,!1,K),$.asyncDep){if(V&&V.registerDep($,xe,K),!_.el){const U=$.subTree=qe(Et);z(null,U,w,S)}}else xe($,_,w,S,V,L,K)},ze=(_,w,S)=>{const N=w.component=_.component;if(Fm(_,w,S))if(N.asyncDep&&!N.asyncResolved){fe(N,w,S);return}else N.next=w,N.update();else w.el=_.el,N.vnode=w},xe=(_,w,S,N,V,L,K)=>{const $=()=>{if(_.isMounted){let{next:Q,bu:ee,u:Z,parent:ne,vnode:we}=_;{const st=Bf(_);if(st){Q&&(Q.el=we.el,fe(_,Q,K)),st.asyncDep.then(()=>{_.isUnmounted||$()});return}}let ve=Q,rt;$n(_,!1),Q?(Q.el=we.el,fe(_,Q,K)):Q=we,ee&&No(ee),(rt=Q.props&&Q.props.onVnodeBeforeUpdate)&&jt(rt,ne,Q,we),$n(_,!0);const Qe=qo(_),Xe=_.subTree;_.subTree=Qe,k(Xe,Qe,p(Xe.el),x(Xe),_,V,L),Q.el=Qe.el,ve===null&&Bm(_,Qe.el),Z&&bt(Z,V),(rt=Q.props&&Q.props.onVnodeUpdated)&&bt(()=>jt(rt,ne,Q,we),V)}else{let Q;const{el:ee,props:Z}=w,{bm:ne,m:we,parent:ve,root:rt,type:Qe}=_,Xe=ds(w);if($n(_,!1),ne&&No(ne),!Xe&&(Q=Z&&Z.onVnodeBeforeMount)&&jt(Q,ve,w),$n(_,!0),ee&&Re){const st=()=>{_.subTree=qo(_),Re(ee,_.subTree,_,V,null)};Xe&&Qe.__asyncHydrate?Qe.__asyncHydrate(ee,_,st):st()}else{rt.ce&&rt.ce._injectChildStyle(Qe);const st=_.subTree=qo(_);k(null,st,S,N,_,V,L),w.el=st.el}if(we&&bt(we,V),!Xe&&(Q=Z&&Z.onVnodeMounted)){const st=w;bt(()=>jt(Q,ve,st),V)}(w.shapeFlag&256||ve&&ds(ve.vnode)&&ve.vnode.shapeFlag&256)&&_.a&&bt(_.a,V),_.isMounted=!0,w=S=N=null}};_.scope.on();const U=_.effect=new Kh($);_.scope.off();const F=_.update=U.run.bind(U),te=_.job=U.runIfDirty.bind(U);te.i=_,te.id=_.uid,U.scheduler=()=>rl(te),$n(_,!0),F()},fe=(_,w,S)=>{w.component=_;const N=_.vnode.props;_.vnode=w,_.next=null,wm(_,w.props,N,S),Rm(_,w.children,S),On(),Bc(_),Nn()},he=(_,w,S,N,V,L,K,$,U=!1)=>{const F=_&&_.children,te=_?_.shapeFlag:0,Q=w.children,{patchFlag:ee,shapeFlag:Z}=w;if(ee>0){if(ee&128){Ot(F,Q,S,N,V,L,K,$,U);return}else if(ee&256){At(F,Q,S,N,V,L,K,$,U);return}}Z&8?(te&16&&yt(F,V,L),Q!==F&&d(S,Q)):te&16?Z&16?Ot(F,Q,S,N,V,L,K,$,U):yt(F,V,L,!0):(te&8&&d(S,""),Z&16&&v(Q,S,N,V,L,K,$,U))},At=(_,w,S,N,V,L,K,$,U)=>{_=_||Tr,w=w||Tr;const F=_.length,te=w.length,Q=Math.min(F,te);let ee;for(ee=0;ee<Q;ee++){const Z=w[ee]=U?yn(w[ee]):Ht(w[ee]);k(_[ee],Z,S,null,V,L,K,$,U)}F>te?yt(_,V,L,!0,!1,Q):v(w,S,N,V,L,K,$,U,Q)},Ot=(_,w,S,N,V,L,K,$,U)=>{let F=0;const te=w.length;let Q=_.length-1,ee=te-1;for(;F<=Q&&F<=ee;){const Z=_[F],ne=w[F]=U?yn(w[F]):Ht(w[F]);if(Kn(Z,ne))k(Z,ne,S,null,V,L,K,$,U);else break;F++}for(;F<=Q&&F<=ee;){const Z=_[Q],ne=w[ee]=U?yn(w[ee]):Ht(w[ee]);if(Kn(Z,ne))k(Z,ne,S,null,V,L,K,$,U);else break;Q--,ee--}if(F>Q){if(F<=ee){const Z=ee+1,ne=Z<te?w[Z].el:N;for(;F<=ee;)k(null,w[F]=U?yn(w[F]):Ht(w[F]),S,ne,V,L,K,$,U),F++}}else if(F>ee)for(;F<=Q;)ke(_[F],V,L,!0),F++;else{const Z=F,ne=F,we=new Map;for(F=ne;F<=ee;F++){const dt=w[F]=U?yn(w[F]):Ht(w[F]);dt.key!=null&&we.set(dt.key,F)}let ve,rt=0;const Qe=ee-ne+1;let Xe=!1,st=0;const un=new Array(Qe);for(F=0;F<Qe;F++)un[F]=0;for(F=Z;F<=Q;F++){const dt=_[F];if(rt>=Qe){ke(dt,V,L,!0);continue}let Pt;if(dt.key!=null)Pt=we.get(dt.key);else for(ve=ne;ve<=ee;ve++)if(un[ve-ne]===0&&Kn(dt,w[ve])){Pt=ve;break}Pt===void 0?ke(dt,V,L,!0):(un[Pt-ne]=F+1,Pt>=st?st=Pt:Xe=!0,k(dt,w[Pt],S,null,V,L,K,$,U),rt++)}const or=Xe?Dm(un):Tr;for(ve=or.length-1,F=Qe-1;F>=0;F--){const dt=ne+F,Pt=w[dt],ar=dt+1<te?w[dt+1].el:N;un[F]===0?k(null,Pt,S,ar,V,L,K,$,U):Xe&&(ve<0||F!==or[ve]?St(Pt,S,ar,2):ve--)}}},St=(_,w,S,N,V=null)=>{const{el:L,type:K,transition:$,children:U,shapeFlag:F}=_;if(F&6){St(_.component.subTree,w,S,N);return}if(F&128){_.suspense.move(w,S,N);return}if(F&64){K.move(_,w,S,J);return}if(K===Mt){r(L,w,S);for(let Q=0;Q<U.length;Q++)St(U[Q],w,S,N);r(_.anchor,w,S);return}if(K===Ho){H(_,w,S);return}if(N!==2&&F&1&&$)if(N===0)$.beforeEnter(L),r(L,w,S),bt(()=>$.enter(L),V);else{const{leave:Q,delayLeave:ee,afterLeave:Z}=$,ne=()=>r(L,w,S),we=()=>{Q(L,()=>{ne(),Z&&Z()})};ee?ee(L,ne,we):we()}else r(L,w,S)},ke=(_,w,S,N=!1,V=!1)=>{const{type:L,props:K,ref:$,children:U,dynamicChildren:F,shapeFlag:te,patchFlag:Q,dirs:ee,cacheIndex:Z}=_;if(Q===-2&&(V=!1),$!=null&&ki($,null,S,_,!0),Z!=null&&(w.renderCache[Z]=void 0),te&256){w.ctx.deactivate(_);return}const ne=te&1&&ee,we=!ds(_);let ve;if(we&&(ve=K&&K.onVnodeBeforeUnmount)&&jt(ve,w,_),te&6)$t(_.component,S,N);else{if(te&128){_.suspense.unmount(S,N);return}ne&&Un(_,null,w,"beforeUnmount"),te&64?_.type.remove(_,w,S,J,N):F&&!F.hasOnce&&(L!==Mt||Q>0&&Q&64)?yt(F,w,S,!1,!0):(L===Mt&&Q&384||!V&&te&16)&&yt(U,w,S),N&&Oe(_)}(we&&(ve=K&&K.onVnodeUnmounted)||ne)&&bt(()=>{ve&&jt(ve,w,_),ne&&Un(_,null,w,"unmounted")},S)},Oe=_=>{const{type:w,el:S,anchor:N,transition:V}=_;if(w===Mt){cn(S,N);return}if(w===Ho){j(_);return}const L=()=>{s(S),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:$}=V,U=()=>K(S,L);$?$(_.el,L,U):U()}else L()},cn=(_,w)=>{let S;for(;_!==w;)S=g(_),s(_),_=S;s(w)},$t=(_,w,S)=>{const{bum:N,scope:V,job:L,subTree:K,um:$,m:U,a:F}=_;Gc(U),Gc(F),N&&No(N),V.stop(),L&&(L.flags|=8,ke(K,_,w,S)),$&&bt($,w),bt(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},yt=(_,w,S,N=!1,V=!1,L=0)=>{for(let K=L;K<_.length;K++)ke(_[K],w,S,N,V)},x=_=>{if(_.shapeFlag&6)return x(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=g(_.anchor||_.el),S=w&&w[Qg];return S?g(S):w};let Y=!1;const W=(_,w,S)=>{_==null?w._vnode&&ke(w._vnode,null,null,!0):k(w._vnode||null,_,w,null,null,null,S),w._vnode=_,Y||(Y=!0,Bc(),pf(),Y=!1)},J={p:k,um:ke,m:St,r:Oe,mt:be,mc:v,pc:he,pbc:I,n:x,o:t};let de,Re;return{render:W,hydrate:de,createApp:Em(W,de)}}function jo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Pm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ff(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=yn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ff(a,l)),l.type===so&&(l.el=a.el)}}function Dm(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Bf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bf(e)}function Gc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vm=Symbol.for("v-scx"),xm=()=>Wt(Vm);function Ti(t,e,n){return Uf(t,e,n)}function Uf(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:a}=n,l=He({},n),c=e&&r||!e&&i!=="post";let h;if(Ss){if(i==="sync"){const T=xm();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Gt,T.resume=Gt,T.pause=Gt,T}}const d=et;l.call=(T,D,k)=>Bt(T,d,D,k);let p=!1;i==="post"?l.scheduler=T=>{bt(T,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,D)=>{D?T():rl(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const g=zg(t,e,l);return Ss&&(h?h.push(g):c&&g()),g}function km(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?$f(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=$s(this),l=Uf(s,i.bind(r),n);return a(),l}function $f(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Om=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kt(e)}Modifiers`]||t[`${sr(e)}Modifiers`];function Nm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),a=i&&Om(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Be(d)?d.trim():d)),a.number&&(s=n.map(ag)));let l,c=r[l=Oo(e)]||r[l=Oo(kt(e))];!c&&i&&(c=r[l=Oo(sr(e))]),c&&Bt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Bt(h,t,6,s)}}function jf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ce(t)){const c=h=>{const d=jf(h,e,!0);d&&(l=!0,He(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(se(i)?i.forEach(c=>a[c]=null):He(a,i),Ve(t)&&r.set(t,a),a)}function ro(t,e){return!t||!Ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,sr(e))||Ie(t,e))}function qo(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:T,ctx:D,inheritAttrs:k}=t,M=xi(t);let z,B;try{if(n.shapeFlag&4){const j=s||r,ae=j;z=Ht(h.call(ae,j,d,p,T,g,D)),B=l}else{const j=e;z=Ht(j.length>1?j(p,{attrs:l,slots:a,emit:c}):j(p,null)),B=e.props?l:Mm(l)}}catch(j){ms.length=0,Zi(j,t,1),z=qe(Et)}let H=z;if(B&&k!==!1){const j=Object.keys(B),{shapeFlag:ae}=H;j.length&&ae&7&&(i&&j.some(Ka)&&(B=Lm(B,i)),H=Cn(H,B,!1,!0))}return n.dirs&&(H=Cn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Rs(H,n.transition),z=H,xi(M),z}const Mm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ki(n))&&((e||(e={}))[n]=t[n]);return e},Lm=(t,e)=>{const n={};for(const r in t)(!Ka(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fm(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wc(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==r[g]&&!ro(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Wc(r,a,h):!0:!!a;return!1}function Wc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ro(n,i))return!0}return!1}function Bm({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qf=t=>t.__isSuspense;function Um(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Wg(t)}const Mt=Symbol.for("v-fgt"),so=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),ms=[];let Ct=null;function Lt(t=!1){ms.push(Ct=t?null:[])}function $m(){ms.pop(),Ct=ms[ms.length-1]||null}let Cs=1;function Qc(t,e=!1){Cs+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function Hf(t){return t.dynamicChildren=Cs>0?Ct||Tr:null,$m(),Cs>0&&Ct&&Ct.push(t),t}function In(t,e,n,r,s,i){return Hf(je(t,e,n,r,s,i,!0))}function al(t,e,n,r,s){return Hf(qe(t,e,n,r,s,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const zf=({key:t})=>t??null,wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||tt(t)||ce(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zf(e),ref:e&&wi(e),scopeId:mf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return l?(ll(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),Cs>0&&!a&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const qe=jm;function jm(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===um)&&(t=Et),Ni(t)){const l=Cn(t,e,!0);return n&&ll(l,n),Cs>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(t)]=l:Ct.push(l)),l.patchFlag=-2,l}if(e_(t)&&(t=t.__vccOpts),e){e=qm(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=zt(l)),Ve(c)&&(nl(c)&&!se(c)&&(c=He({},c)),e.style=Qa(c))}const a=Be(t)?1:qf(t)?128:_f(t)?64:Ve(t)?4:ce(t)?2:0;return je(t,e,n,r,s,a,i,!0)}function qm(t){return t?nl(t)||Vf(t)?He({},t):t:null}function Cn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Hm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&zf(h),ref:e&&e.ref?n&&i?se(i)?i.concat(wi(e)):[i,wi(e)]:wi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Rs(d,c.clone(d)),d}function os(t=" ",e=0){return qe(so,null,t,e)}function Kf(t="",e=!1){return e?(Lt(),al(Et,null,t)):qe(Et,null,t)}function Ht(t){return t==null||typeof t=="boolean"?qe(Et):se(t)?qe(Mt,null,t.slice()):Ni(t)?yn(t):qe(so,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function ll(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ll(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vf(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[os(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zt([e.class,r.class]));else if(s==="style")e.style=Qa([e.style,r.style]);else if(Ki(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){Bt(t,e,7,[n,r])}const zm=Sf();let Km=0;function Gm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zm,i={uid:Km++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(r,s),emitsOptions:jf(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nm.bind(null,i),t.ce&&t.ce(i),i}let et=null;const Wm=()=>et||Vt;let Mi,ma;{const t=Yi(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Mi=e("__VUE_INSTANCE_SETTERS__",n=>et=n),ma=e("__VUE_SSR_SETTERS__",n=>Ss=n)}const $s=t=>{const e=et;return Mi(t),t.scope.on(),()=>{t.scope.off(),Mi(e)}},Yc=()=>{et&&et.scope.off(),Mi(null)};function Gf(t){return t.vnode.shapeFlag&4}let Ss=!1;function Qm(t,e=!1,n=!1){e&&ma(e);const{props:r,children:s}=t.vnode,i=Gf(t);Tm(t,r,i,e),bm(t,s,n);const a=i?Ym(t,e):void 0;return e&&ma(!1),a}function Ym(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dm);const{setup:r}=n;if(r){On();const s=t.setupContext=r.length>1?Jm(t):null,i=$s(t),a=Us(r,t,0,[t.props,s]),l=Fh(a);if(Nn(),i(),(l||t.sp)&&!ds(t)&&If(t),l){if(a.then(Yc,Yc),e)return a.then(c=>{Xc(t,c,e)}).catch(c=>{Zi(c,t,0)});t.asyncDep=a}else Xc(t,a,e)}else Wf(t,e)}function Xc(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=uf(e)),Wf(t,n)}let Jc;function Wf(t,e,n){const r=t.type;if(!t.render){if(!e&&Jc&&!r.render){const s=r.template||il(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=He(He({isCustomElement:i,delimiters:l},a),c);r.render=Jc(s,h)}}t.render=r.render||Gt}{const s=$s(t);On();try{pm(t)}finally{Nn(),s()}}}const Xm={get(t,e){return ct(t,"get",""),t[e]}};function Jm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xm),slots:t.slots,emit:t.emit,expose:e}}function cl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uf(Mg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function Zm(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function e_(t){return ce(t)&&"__vccOpts"in t}const ft=(t,e)=>qg(t,e,Ss);function ul(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!se(e)?Ni(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),qe(t,e,n))}const t_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _a;const Zc=typeof window<"u"&&window.trustedTypes;if(Zc)try{_a=Zc.createPolicy("vue",{createHTML:t=>t})}catch{}const Qf=_a?t=>_a.createHTML(t):t=>t,n_="http://www.w3.org/2000/svg",r_="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,eu=rn&&rn.createElement("template"),s_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rn.createElementNS(n_,t):e==="mathml"?rn.createElementNS(r_,t):n?rn.createElement(t,{is:n}):rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{eu.innerHTML=Qf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=eu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pn="transition",ns="animation",Ps=Symbol("_vtc"),Yf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},i_=He({},yf,Yf),o_=t=>(t.displayName="Transition",t.props=i_,t),a_=o_((t,{slots:e})=>ul(Jg,l_(t),e)),jn=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},tu=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function l_(t){const e={};for(const A in t)A in Yf||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,D=c_(s),k=D&&D[0],M=D&&D[1],{onBeforeEnter:z,onEnter:B,onEnterCancelled:H,onLeave:j,onLeaveCancelled:ae,onBeforeAppear:oe=z,onAppear:R=B,onAppearCancelled:v=H}=e,y=(A,E,be,ze)=>{A._enterCancelled=ze,qn(A,E?d:l),qn(A,E?h:a),be&&be()},I=(A,E)=>{A._isLeaving=!1,qn(A,p),qn(A,T),qn(A,g),E&&E()},b=A=>(E,be)=>{const ze=A?R:B,xe=()=>y(E,A,be);jn(ze,[E,xe]),nu(()=>{qn(E,A?c:i),tn(E,A?d:l),tu(ze)||ru(E,r,k,xe)})};return He(e,{onBeforeEnter(A){jn(z,[A]),tn(A,i),tn(A,a)},onBeforeAppear(A){jn(oe,[A]),tn(A,c),tn(A,h)},onEnter:b(!1),onAppear:b(!0),onLeave(A,E){A._isLeaving=!0;const be=()=>I(A,E);tn(A,p),A._enterCancelled?(tn(A,g),ou()):(ou(),tn(A,g)),nu(()=>{A._isLeaving&&(qn(A,p),tn(A,T),tu(j)||ru(A,r,M,be))}),jn(j,[A,be])},onEnterCancelled(A){y(A,!1,void 0,!0),jn(H,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),jn(v,[A])},onLeaveCancelled(A){I(A),jn(ae,[A])}})}function c_(t){if(t==null)return null;if(Ve(t))return[zo(t.enter),zo(t.leave)];{const e=zo(t);return[e,e]}}function zo(t){return lg(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ps]||(t[Ps]=new Set)).add(e)}function qn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ps];n&&(n.delete(e),n.size||(t[Ps]=void 0))}function nu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let u_=0;function ru(t,e,n,r){const s=t._endId=++u_,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=h_(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=T=>{T.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,g)}function h_(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${pn}Delay`),i=r(`${pn}Duration`),a=su(s,i),l=r(`${ns}Delay`),c=r(`${ns}Duration`),h=su(l,c);let d=null,p=0,g=0;e===pn?a>0&&(d=pn,p=a,g=i.length):e===ns?h>0&&(d=ns,p=h,g=c.length):(p=Math.max(a,h),d=p>0?a>h?pn:ns:null,g=d?d===pn?i.length:c.length:0);const T=d===pn&&/\b(transform|all)(,|$)/.test(r(`${pn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:T}}function su(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>iu(n)+iu(t[r])))}function iu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ou(){return document.body.offsetHeight}function f_(t,e,n){const r=t[Ps];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const au=Symbol("_vod"),d_=Symbol("_vsh"),p_=Symbol(""),g_=/(^|;)\s*display\s*:/;function m_(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ai(r,l,"")}else for(const a in e)n[a]==null&&Ai(r,a,"");for(const a in n)a==="display"&&(i=!0),Ai(r,a,n[a])}else if(s){if(e!==n){const a=r[p_];a&&(n+=";"+a),r.cssText=n,i=g_.test(n)}}else e&&t.removeAttribute("style");au in t&&(t[au]=i?r.display:"",t[d_]&&(r.display="none"))}const lu=/\s*!important$/;function Ai(t,e,n){if(se(n))n.forEach(r=>Ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=__(t,e);lu.test(n)?t.setProperty(sr(r),n.replace(lu,""),"important"):t[r]=n}}const cu=["Webkit","Moz","ms"],Ko={};function __(t,e){const n=Ko[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return Ko[e]=r;r=Qi(r);for(let s=0;s<cu.length;s++){const i=cu[s]+r;if(i in t)return Ko[e]=i}return e}const uu="http://www.w3.org/1999/xlink";function hu(t,e,n,r,s,i=pg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(uu,e.slice(6,e.length)):t.setAttributeNS(uu,e,n):n==null||i&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kn(n)?String(n):n)}function fu(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qf(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function y_(t,e,n,r){t.addEventListener(e,n,r)}function v_(t,e,n,r){t.removeEventListener(e,n,r)}const du=Symbol("_vei");function E_(t,e,n,r,s=null){const i=t[du]||(t[du]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=T_(e);if(r){const h=i[e]=I_(r,s);y_(t,l,h,c)}else a&&(v_(t,l,a,c),i[e]=void 0)}}const pu=/(?:Once|Passive|Capture)$/;function T_(t){let e;if(pu.test(t)){e={};let r;for(;r=t.match(pu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let Go=0;const w_=Promise.resolve(),A_=()=>Go||(w_.then(()=>Go=0),Go=Date.now());function I_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(b_(r,n.value),e,5,[r])};return n.value=t,n.attached=A_(),n}function b_(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const gu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,R_=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?f_(t,r,a):e==="style"?m_(t,n,r):Ki(e)?Ka(e)||E_(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C_(t,e,r,a))?(fu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hu(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?fu(t,kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hu(t,e,r,a))};function C_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&gu(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gu(e)&&Be(n)?!1:e in t}const S_=He({patchProp:R_},s_);let mu;function P_(){return mu||(mu=Cm(S_))}const D_=(...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=x_(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,V_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function V_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function x_(t){return Be(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof document<"u";function Xf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function k_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xf(t.default)}const Ae=Object.assign;function Wo(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ut(s)?s.map(t):t(s)}return n}const _s=()=>{},Ut=Array.isArray,Jf=/#/g,O_=/&/g,N_=/\//g,M_=/=/g,L_=/\?/g,Zf=/\+/g,F_=/%5B/g,B_=/%5D/g,ed=/%5E/g,U_=/%60/g,td=/%7B/g,$_=/%7C/g,nd=/%7D/g,j_=/%20/g;function hl(t){return encodeURI(""+t).replace($_,"|").replace(F_,"[").replace(B_,"]")}function q_(t){return hl(t).replace(td,"{").replace(nd,"}").replace(ed,"^")}function ya(t){return hl(t).replace(Zf,"%2B").replace(j_,"+").replace(Jf,"%23").replace(O_,"%26").replace(U_,"`").replace(td,"{").replace(nd,"}").replace(ed,"^")}function H_(t){return ya(t).replace(M_,"%3D")}function z_(t){return hl(t).replace(Jf,"%23").replace(L_,"%3F")}function K_(t){return t==null?"":z_(t).replace(N_,"%2F")}function Ds(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const G_=/\/$/,W_=t=>t.replace(G_,"");function Qo(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=J_(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ds(a)}}function Q_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _u(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Y_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pr(e.matched[r],n.matched[s])&&rd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!X_(t[n],e[n]))return!1;return!0}function X_(t,e){return Ut(t)?yu(t,e):Ut(e)?yu(e,t):t===e}function yu(t,e){return Ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function J_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vs;(function(t){t.pop="pop",t.push="push"})(Vs||(Vs={}));var ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ys||(ys={}));function Z_(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),W_(t)}const ey=/^[^#]+#/;function ty(t,e){return t.replace(ey,"#")+e}function ny(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const io=()=>({left:window.scrollX,top:window.scrollY});function ry(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ny(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vu(t,e){return(history.state?history.state.position-e:-1)+t}const va=new Map;function sy(t,e){va.set(t,e)}function iy(t){const e=va.get(t);return va.delete(t),e}let oy=()=>location.protocol+"//"+location.host;function sd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),_u(c,"")}return _u(n,t)+r+s}function ay(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const T=sd(t,location),D=n.value,k=e.value;let M=0;if(g){if(n.value=T,e.value=g,a&&a===D){a=null;return}M=k?g.position-k.position:0}else r(T);s.forEach(z=>{z(n.value,D,{delta:M,type:Vs.pop,direction:M?M>0?ys.forward:ys.back:ys.unknown})})};function c(){a=n.value}function h(g){s.push(g);const T=()=>{const D=s.indexOf(g);D>-1&&s.splice(D,1)};return i.push(T),T}function d(){const{history:g}=window;g.state&&g.replaceState(Ae({},g.state,{scroll:io()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Eu(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?io():null}}function ly(t){const{history:e,location:n}=window,r={value:sd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:oy()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(T){console.error(T),n[d?"replace":"assign"](g)}}function a(c,h){const d=Ae({},e.state,Eu(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ae({},s.value,e.state,{forward:c,scroll:io()});i(d.current,d,!0);const p=Ae({},Eu(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function cy(t){t=Z_(t);const e=ly(t),n=ay(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:ty.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uy(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cy(t)}function hy(t){return typeof t=="string"||t&&typeof t=="object"}function id(t){return typeof t=="string"||typeof t=="symbol"}const od=Symbol("");var Tu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Tu||(Tu={}));function Dr(t,e){return Ae(new Error,{type:t,[od]:!0},e)}function nn(t,e){return t instanceof Error&&od in t&&(e==null||!!(t.type&e))}const wu="[^/]+?",fy={sensitive:!1,strict:!1,start:!0,end:!0},dy=/[.+*?^${}()[\]/\\]/g;function py(t,e){const n=Ae({},fy,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let T=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(dy,"\\$&"),T+=40;else if(g.type===1){const{value:D,repeatable:k,optional:M,regexp:z}=g;i.push({name:D,repeatable:k,optional:M});const B=z||wu;if(B!==wu){T+=10;try{new RegExp(`(${B})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${D}" (${B}): `+j.message)}}let H=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=M&&h.length<2?`(?:/${H})`:"/"+H),M&&(H+="?"),s+=H,T+=20,M&&(T+=-8),k&&(T+=-20),B===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let g=1;g<d.length;g++){const T=d[g]||"",D=i[g-1];p[D.name]=T&&D.repeatable?T.split("/"):T}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of g)if(T.type===0)d+=T.value;else if(T.type===1){const{value:D,repeatable:k,optional:M}=T,z=D in h?h[D]:"";if(Ut(z)&&!k)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const B=Ut(z)?z.join("/"):z;if(!B)if(M)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);d+=B}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function gy(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ad(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Au(r))return 1;if(Au(s))return-1}return s.length-r.length}function Au(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const my={type:0,value:""},_y=/[a-zA-Z0-9_]/;function yy(t){if(!t)return[[]];if(t==="/")return[[my]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:_y.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function vy(t,e,n){const r=py(yy(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ey(t,e){const n=[],r=new Map;e=Cu({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,T){const D=!T,k=bu(p);k.aliasOf=T&&T.record;const M=Cu(e,p),z=[k];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of j)z.push(bu(Ae({},k,{components:T?T.record.components:k.components,path:ae,aliasOf:T?T.record:k})))}let B,H;for(const j of z){const{path:ae}=j;if(g&&ae[0]!=="/"){const oe=g.record.path,R=oe[oe.length-1]==="/"?"":"/";j.path=g.record.path+(ae&&R+ae)}if(B=vy(j,g,M),T?T.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),D&&p.name&&!Ru(B)&&a(p.name)),ld(B)&&c(B),k.children){const oe=k.children;for(let R=0;R<oe.length;R++)i(oe[R],B,T&&T.children[R])}T=T||B}return H?()=>{a(H)}:_s}function a(p){if(id(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=Ay(p,n);n.splice(g,0,p),p.record.name&&!Ru(p)&&r.set(p.record.name,p)}function h(p,g){let T,D={},k,M;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw Dr(1,{location:p});M=T.record.name,D=Ae(Iu(g.params,T.keys.filter(H=>!H.optional).concat(T.parent?T.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Iu(p.params,T.keys.map(H=>H.name))),k=T.stringify(D)}else if(p.path!=null)k=p.path,T=n.find(H=>H.re.test(k)),T&&(D=T.parse(k),M=T.record.name);else{if(T=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!T)throw Dr(1,{location:p,currentLocation:g});M=T.record.name,D=Ae({},g.params,p.params),k=T.stringify(D)}const z=[];let B=T;for(;B;)z.unshift(B.record),B=B.parent;return{name:M,path:k,params:D,matched:z,meta:wy(z)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Iu(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ty(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ty(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ru(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wy(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Cu(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ay(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ad(t,e[i])<0?r=i:n=i+1}const s=Iy(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Iy(t){let e=t;for(;e=e.parent;)if(ld(e)&&ad(t,e)===0)return e}function ld({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function by(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zf," "),a=i.indexOf("="),l=Ds(a<0?i:i.slice(0,a)),c=a<0?null:Ds(i.slice(a+1));if(l in e){let h=e[l];Ut(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Su(t){let e="";for(let n in t){const r=t[n];if(n=H_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(r)?r.map(i=>i&&ya(i)):[r&&ya(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ry(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Cy=Symbol(""),Pu=Symbol(""),fl=Symbol(""),dl=Symbol(""),Ea=Symbol("");function rs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Dr(4,{from:n,to:e})):g instanceof Error?c(g):hy(g)?c(Dr(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Yo(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Xf(c)){const d=(c.__vccOpts||c)[e];d&&i.push(vn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=k_(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const T=(p.__vccOpts||p)[e];return T&&vn(T,n,r,a,l,s)()}))}}return i}function Du(t){const e=Wt(fl),n=Wt(dl),r=ft(()=>{const c=Yn(t.to);return e.resolve(c)}),s=ft(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Pr.bind(null,d));if(g>-1)return g;const T=Vu(c[h-2]);return h>1&&Vu(d)===T&&p[p.length-1].path!==T?p.findIndex(Pr.bind(null,c[h-2])):g}),i=ft(()=>s.value>-1&&xy(n.params,r.value.params)),a=ft(()=>s.value>-1&&s.value===n.matched.length-1&&rd(n.params,r.value.params));function l(c={}){if(Vy(c)){const h=e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(_s);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ft(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function Sy(t){return t.length===1?t[0]:t}const Py=Af({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Du,setup(t,{slots:e}){const n=Ji(Du(t)),{options:r}=Wt(fl),s=ft(()=>({[xu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Sy(e.default(n));return t.custom?i:ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Dy=Py;function Vy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xy(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ut(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Vu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xu=(t,e,n)=>t??e??n,ky=Af({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(Ea),s=ft(()=>t.route||r.value),i=Wt(Pu,0),a=ft(()=>{let h=Yn(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=ft(()=>s.value.matched[a.value]);Ei(Pu,ft(()=>a.value+1)),Ei(Cy,l),Ei(Ea,s);const c=Gn();return Ti(()=>[c.value,l.value,t.name],([h,d,p],[g,T,D])=>{d&&(d.instances[p]=h,T&&T!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),h&&d&&(!T||!Pr(d,T)||!g)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return ku(n.default,{Component:g,route:h});const T=p.props[d],D=T?T===!0?h.params:typeof T=="function"?T(h):T:null,M=ul(g,Ae({},D,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return ku(n.default,{Component:M,route:h})||M}}});function ku(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Oy=ky;function Ny(t){const e=Ey(t.routes,t),n=t.parseQuery||by,r=t.stringifyQuery||Su,s=t.history,i=rs(),a=rs(),l=rs(),c=Lg(gn);let h=gn;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wo.bind(null,x=>""+x),p=Wo.bind(null,K_),g=Wo.bind(null,Ds);function T(x,Y){let W,J;return id(x)?(W=e.getRecordMatcher(x),J=Y):J=x,e.addRoute(J,W)}function D(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(x=>x.record)}function M(x){return!!e.getRecordMatcher(x)}function z(x,Y){if(Y=Ae({},Y||c.value),typeof x=="string"){const w=Qo(n,x,Y.path),S=e.resolve({path:w.path},Y),N=s.createHref(w.fullPath);return Ae(w,S,{params:g(S.params),hash:Ds(w.hash),redirectedFrom:void 0,href:N})}let W;if(x.path!=null)W=Ae({},x,{path:Qo(n,x.path,Y.path).path});else{const w=Ae({},x.params);for(const S in w)w[S]==null&&delete w[S];W=Ae({},x,{params:p(w)}),Y.params=p(Y.params)}const J=e.resolve(W,Y),de=x.hash||"";J.params=d(g(J.params));const Re=Q_(r,Ae({},x,{hash:q_(de),path:J.path})),_=s.createHref(Re);return Ae({fullPath:Re,hash:de,query:r===Su?Ry(x.query):x.query||{}},J,{redirectedFrom:void 0,href:_})}function B(x){return typeof x=="string"?Qo(n,x,c.value.path):Ae({},x)}function H(x,Y){if(h!==x)return Dr(8,{from:Y,to:x})}function j(x){return R(x)}function ae(x){return j(Ae(B(x),{replace:!0}))}function oe(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let J=typeof W=="function"?W(x):W;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=B(J):{path:J},J.params={}),Ae({query:x.query,hash:x.hash,params:J.path!=null?{}:x.params},J)}}function R(x,Y){const W=h=z(x),J=c.value,de=x.state,Re=x.force,_=x.replace===!0,w=oe(W);if(w)return R(Ae(B(w),{state:typeof w=="object"?Ae({},de,w.state):de,force:Re,replace:_}),Y||W);const S=W;S.redirectedFrom=Y;let N;return!Re&&Y_(r,J,W)&&(N=Dr(16,{to:S,from:J}),St(J,J,!0,!1)),(N?Promise.resolve(N):I(S,J)).catch(V=>nn(V)?nn(V,2)?V:Ot(V):he(V,S,J)).then(V=>{if(V){if(nn(V,2))return R(Ae({replace:_},B(V.to),{state:typeof V.to=="object"?Ae({},de,V.to.state):de,force:Re}),Y||S)}else V=A(S,J,!0,_,de);return b(S,J,V),V})}function v(x,Y){const W=H(x,Y);return W?Promise.reject(W):Promise.resolve()}function y(x){const Y=cn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let W;const[J,de,Re]=My(x,Y);W=Yo(J.reverse(),"beforeRouteLeave",x,Y);for(const w of J)w.leaveGuards.forEach(S=>{W.push(vn(S,x,Y))});const _=v.bind(null,x,Y);return W.push(_),yt(W).then(()=>{W=[];for(const w of i.list())W.push(vn(w,x,Y));return W.push(_),yt(W)}).then(()=>{W=Yo(de,"beforeRouteUpdate",x,Y);for(const w of de)w.updateGuards.forEach(S=>{W.push(vn(S,x,Y))});return W.push(_),yt(W)}).then(()=>{W=[];for(const w of Re)if(w.beforeEnter)if(Ut(w.beforeEnter))for(const S of w.beforeEnter)W.push(vn(S,x,Y));else W.push(vn(w.beforeEnter,x,Y));return W.push(_),yt(W)}).then(()=>(x.matched.forEach(w=>w.enterCallbacks={}),W=Yo(Re,"beforeRouteEnter",x,Y,y),W.push(_),yt(W))).then(()=>{W=[];for(const w of a.list())W.push(vn(w,x,Y));return W.push(_),yt(W)}).catch(w=>nn(w,8)?w:Promise.reject(w))}function b(x,Y,W){l.list().forEach(J=>y(()=>J(x,Y,W)))}function A(x,Y,W,J,de){const Re=H(x,Y);if(Re)return Re;const _=Y===gn,w=pr?history.state:{};W&&(J||_?s.replace(x.fullPath,Ae({scroll:_&&w&&w.scroll},de)):s.push(x.fullPath,de)),c.value=x,St(x,Y,W,_),Ot()}let E;function be(){E||(E=s.listen((x,Y,W)=>{if(!$t.listening)return;const J=z(x),de=oe(J);if(de){R(Ae(de,{replace:!0,force:!0}),J).catch(_s);return}h=J;const Re=c.value;pr&&sy(vu(Re.fullPath,W.delta),io()),I(J,Re).catch(_=>nn(_,12)?_:nn(_,2)?(R(Ae(B(_.to),{force:!0}),J).then(w=>{nn(w,20)&&!W.delta&&W.type===Vs.pop&&s.go(-1,!1)}).catch(_s),Promise.reject()):(W.delta&&s.go(-W.delta,!1),he(_,J,Re))).then(_=>{_=_||A(J,Re,!1),_&&(W.delta&&!nn(_,8)?s.go(-W.delta,!1):W.type===Vs.pop&&nn(_,20)&&s.go(-1,!1)),b(J,Re,_)}).catch(_s)}))}let ze=rs(),xe=rs(),fe;function he(x,Y,W){Ot(x);const J=xe.list();return J.length?J.forEach(de=>de(x,Y,W)):console.error(x),Promise.reject(x)}function At(){return fe&&c.value!==gn?Promise.resolve():new Promise((x,Y)=>{ze.add([x,Y])})}function Ot(x){return fe||(fe=!x,be(),ze.list().forEach(([Y,W])=>x?W(x):Y()),ze.reset()),x}function St(x,Y,W,J){const{scrollBehavior:de}=t;if(!pr||!de)return Promise.resolve();const Re=!W&&iy(vu(x.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return ff().then(()=>de(x,Y,Re)).then(_=>_&&ry(_)).catch(_=>he(_,x,Y))}const ke=x=>s.go(x);let Oe;const cn=new Set,$t={currentRoute:c,listening:!0,addRoute:T,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:k,resolve:z,options:t,push:j,replace:ae,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:xe.add,isReady:At,install(x){const Y=this;x.component("RouterLink",Dy),x.component("RouterView",Oy),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(c)}),pr&&!Oe&&c.value===gn&&(Oe=!0,j(s.location).catch(de=>{}));const W={};for(const de in gn)Object.defineProperty(W,de,{get:()=>c.value[de],enumerable:!0});x.provide(fl,Y),x.provide(dl,af(W)),x.provide(Ea,c);const J=x.unmount;cn.add(x),x.unmount=function(){cn.delete(x),cn.size<1&&(h=gn,E&&E(),E=null,c.value=gn,Oe=!1,fe=!1),J()}}};function yt(x){return x.reduce((Y,W)=>Y.then(()=>y(W)),Promise.resolve())}return $t}function My(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Pr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Pr(h,c))||s.push(c))}return[n,r,s]}function Ly(t){return Wt(dl)}const js=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Fy={name:"Navbar"},By={id:"NavContent"},Uy={class:"menu-item"},$y={class:"menu-item"},jy={class:"menu-item"},qy={class:"menu-item"};function Hy(t,e,n,r,s,i){const a=ps("router-link");return Lt(),In("nav",By,[je("div",Uy,[qe(a,{to:"/"},{default:vr(()=>e[0]||(e[0]=[os("Home")])),_:1})]),je("div",$y,[qe(a,{to:"/Exhibitions/Works"},{default:vr(()=>e[1]||(e[1]=[os("Works")])),_:1})]),je("div",jy,[qe(a,{to:"/About/Exhibitions"},{default:vr(()=>e[2]||(e[2]=[os("Bio/CV")])),_:1})]),je("div",qy,[qe(a,{to:"/Contact"},{default:vr(()=>e[3]||(e[3]=[os("Contact")])),_:1})])])}const zy=js(Fy,[["render",Hy],["__scopeId","data-v-4cbc0c1d"]]);var Ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ky=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(g=64)),r.push(n[d],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ky(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Gy;const g=i<<2|l>>4;if(r.push(g),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wy=function(t){const e=cd(t);return pl.encodeByteArray(e,!0)},Li=function(t){return Wy(t).replace(/\./g,"")},Qy=function(t){try{return pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>ud().__FIREBASE_DEFAULTS__,Xy=()=>{if(typeof process>"u"||typeof Ou>"u")return;const t=Ou.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qy(t[1]);return e&&JSON.parse(e)},gl=()=>{try{return Yy()||Xy()||Jy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zy=t=>{var e,n;return(n=(e=gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ev=t=>{const e=Zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hd=()=>{var t;return(t=gl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Li(JSON.stringify(n)),Li(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rv(){var t;const e=(t=gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sv(){return!rv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function iv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="FirebaseError";class Fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ov,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?av(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Fr(s,l,r)}}function av(t,e){return t.replace(lv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lv=/\{\$([^}]+)}/g;function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Nu(i)&&Nu(a)){if(!Ta(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1e3,hv=2,fv=4*60*60*1e3,dv=.5;function pv(t,e=uv,n=hv){const r=e*Math.pow(n,t),s=Math.round(dv*r*(Math.random()-.5)*2);return Math.min(fv,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_v(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mv(t){return t===zn?void 0:t}function _v(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const vv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Ev=ge.INFO,Tv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},wv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Tv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=Ev,this._logHandler=wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Av=(t,e)=>e.some(n=>t instanceof n);let Mu,Lu;function Iv(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bv(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dd=new WeakMap,wa=new WeakMap,pd=new WeakMap,Xo=new WeakMap,vl=new WeakMap;function Rv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(bn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&dd.set(n,t)}).catch(()=>{}),vl.set(e,t),e}function Cv(t){if(wa.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});wa.set(t,e)}let Aa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sv(t){Aa=t(Aa)}function Pv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jo(this),e,...n);return pd.set(r,e.sort?e.sort():[e]),bn(r)}:bv().includes(t)?function(...e){return t.apply(Jo(this),e),bn(dd.get(this))}:function(...e){return bn(t.apply(Jo(this),e))}}function Dv(t){return typeof t=="function"?Pv(t):(t instanceof IDBTransaction&&Cv(t),Av(t,Iv())?new Proxy(t,Aa):t)}function bn(t){if(t instanceof IDBRequest)return Rv(t);if(Xo.has(t))return Xo.get(t);const e=Dv(t);return e!==t&&(Xo.set(t,e),vl.set(e,t)),e}const Jo=t=>vl.get(t);function Vv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=bn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(bn(a.result),c.oldVersion,c.newVersion,bn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const xv=["get","getKey","getAll","getAllKeys","count"],kv=["put","add","delete","clear"],Zo=new Map;function Fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xv.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Zo.set(e,i),i}Sv(t=>({...t,get:(e,n,r)=>Fu(e,n)||t.get(e,n,r),has:(e,n)=>!!Fu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ia="@firebase/app",Bu="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new yl("@firebase/app"),Mv="@firebase/app-compat",Lv="@firebase/analytics-compat",Fv="@firebase/analytics",Bv="@firebase/app-check-compat",Uv="@firebase/app-check",$v="@firebase/auth",jv="@firebase/auth-compat",qv="@firebase/database",Hv="@firebase/data-connect",zv="@firebase/database-compat",Kv="@firebase/functions",Gv="@firebase/functions-compat",Wv="@firebase/installations",Qv="@firebase/installations-compat",Yv="@firebase/messaging",Xv="@firebase/messaging-compat",Jv="@firebase/performance",Zv="@firebase/performance-compat",eE="@firebase/remote-config",tE="@firebase/remote-config-compat",nE="@firebase/storage",rE="@firebase/storage-compat",sE="@firebase/firestore",iE="@firebase/vertexai",oE="@firebase/firestore-compat",aE="firebase",lE="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="[DEFAULT]",cE={[Ia]:"fire-core",[Mv]:"fire-core-compat",[Fv]:"fire-analytics",[Lv]:"fire-analytics-compat",[Uv]:"fire-app-check",[Bv]:"fire-app-check-compat",[$v]:"fire-auth",[jv]:"fire-auth-compat",[qv]:"fire-rtdb",[Hv]:"fire-data-connect",[zv]:"fire-rtdb-compat",[Kv]:"fire-fn",[Gv]:"fire-fn-compat",[Wv]:"fire-iid",[Qv]:"fire-iid-compat",[Yv]:"fire-fcm",[Xv]:"fire-fcm-compat",[Jv]:"fire-perf",[Zv]:"fire-perf-compat",[eE]:"fire-rc",[tE]:"fire-rc-compat",[nE]:"fire-gcs",[rE]:"fire-gcs-compat",[sE]:"fire-fst",[oE]:"fire-fst-compat",[iE]:"fire-vertex","fire-js":"fire-js",[aE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Map,uE=new Map,Ra=new Map;function Uu(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Ra.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,t);for(const n of Fi.values())Uu(n,t);for(const n of uE.values())Uu(n,t);return!0}function El(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new _l("app","Firebase",hE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=lE;function gd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rn.create("bad-app-name",{appName:String(s)});if(n||(n=hd()),!n)throw Rn.create("no-options");const i=Fi.get(s);if(i){if(Ta(n,i.options)&&Ta(r,i.config))return i;throw Rn.create("duplicate-app",{appName:s})}const a=new yv(s);for(const c of Ra.values())a.addComponent(c);const l=new fE(n,r,a);return Fi.set(s,l),l}function md(t=ba){const e=Fi.get(t);if(!e&&t===ba&&hd())return gd();if(!e)throw Rn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let s=(r=cE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(l.join(" "));return}Vr(new nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firebase-heartbeat-database",gE=1,ks="firebase-heartbeat-store";let ea=null;function _d(){return ea||(ea=Vv(pE,gE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),ea}async function mE(t){try{const n=(await _d()).transaction(ks),r=await n.objectStore(ks).get(yd(t));return await n.done,r}catch(e){if(e instanceof Fr)on.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(n.message)}}}async function $u(t,e){try{const r=(await _d()).transaction(ks,"readwrite");await r.objectStore(ks).put(e,yd(t)),await r.done}catch(n){if(n instanceof Fr)on.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function yd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=1024,yE=30*24*60*60*1e3;class vE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=yE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ju(),{heartbeatsToSend:r,unsentEntries:s}=EE(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return on.warn(n),""}}}function ju(){return new Date().toISOString().substring(0,10)}function EE(t,e=_E){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),qu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?iv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qu(t){return Li(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){Vr(new nr("platform-logger",e=>new Ov(e),"PRIVATE")),Vr(new nr("heartbeat",e=>new vE(e),"PRIVATE")),Xn(Ia,Bu,t),Xn(Ia,Bu,"esm2017"),Xn("fire-js","")}wE("");var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,vd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(I,b,A){for(var E=Array(arguments.length-2),be=2;be<arguments.length;be++)E[be-2]=arguments[be];return v.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(b=0;16>b;++b)I[b]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],b=R.g[2];var A=R.g[3],E=v+(A^y&(b^A))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[2]+606105819&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[6]+2821735955&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[10]+4294925233&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[14]+2792965006&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(b^A&(y^b))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[11]+643717713&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[15]+3634488961&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[3]+4107603335&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[7]+1735328473&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(y^b^A)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[11]+1839030562&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[7]+4139469664&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[3]+3572445317&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[15]+530742520&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(b^(y|~A))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[14]+2878612391&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[10]+4293915773&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[6]+2734768916&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[2]+718787259&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+A&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,I=this.B,b=this.h,A=0;A<v;){if(b==0)for(;A<=y;)s(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<v;)if(I[b++]=R.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<v;)if(I[b++]=R[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)R[y++]=this.g[v]>>>I&255;return R};function i(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function a(R,v){this.h=v;for(var y=[],I=!0,b=R.length-1;0<=b;b--){var A=R[b]|0;I&&A==v||(y[b]=A,I=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new a([v|0],0>v?-1:0)}):new a([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return M(h(-R));for(var v=[],y=1,I=0;R>=y;I++)v[I]=R/y|0,y*=4294967296;return new a(v,0)}function d(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return M(d(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),I=p,b=0;b<R.length;b+=8){var A=Math.min(8,R.length-b),E=parseInt(R.substring(b,b+A),v);8>A?(A=h(Math.pow(v,A)),I=I.j(A).add(h(E))):(I=I.j(y),I=I.add(h(E)))}return I}var p=c(0),g=c(1),T=c(16777216);t=a.prototype,t.m=function(){if(k(this))return-M(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D(this))return"0";if(k(this))return"-"+M(this).toString(R);for(var v=h(Math.pow(R,6)),y=this,I="";;){var b=j(y,v).g;y=z(y,b.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=b,D(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function D(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=z(this,R),k(R)?-1:D(R)?0:1};function M(R){for(var v=R.g.length,y=[],I=0;I<v;I++)y[I]=~R.g[I];return new a(y,~R.h).add(g)}t.abs=function(){return k(this)?M(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0,b=0;b<=v;b++){var A=I+(this.i(b)&65535)+(R.i(b)&65535),E=(A>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);I=E>>>16,A&=65535,E&=65535,y[b]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(R,v){return R.add(M(v))}t.j=function(R){if(D(this)||D(R))return p;if(k(this))return k(R)?M(this).j(M(R)):M(M(this).j(R));if(k(R))return M(this.j(M(R)));if(0>this.l(T)&&0>R.l(T))return h(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<R.g.length;b++){var A=this.i(I)>>>16,E=this.i(I)&65535,be=R.i(b)>>>16,ze=R.i(b)&65535;y[2*I+2*b]+=E*ze,B(y,2*I+2*b),y[2*I+2*b+1]+=A*ze,B(y,2*I+2*b+1),y[2*I+2*b+1]+=E*be,B(y,2*I+2*b+1),y[2*I+2*b+2]+=A*be,B(y,2*I+2*b+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new a(y,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function H(R,v){this.g=R,this.h=v}function j(R,v){if(D(v))throw Error("division by zero");if(D(R))return new H(p,p);if(k(R))return v=j(M(R),v),new H(M(v.g),M(v.h));if(k(v))return v=j(R,M(v)),new H(M(v.g),v.h);if(30<R.g.length){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(R);)y=ae(y),I=ae(I);var b=oe(y,1),A=oe(I,1);for(I=oe(I,2),y=oe(y,2);!D(I);){var E=A.add(I);0>=E.l(R)&&(b=b.add(y),A=E),I=oe(I,1),y=oe(y,1)}return v=z(R,b.j(v)),new H(b,v)}for(b=p;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),E=A.j(v);k(E)||0<E.l(R);)y-=I,A=h(y),E=A.j(v);D(A)&&(A=g),b=b.add(A),R=z(R,E)}return new H(b,R)}t.A=function(R){return j(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&R.i(I);return new a(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|R.i(I);return new a(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^R.i(I);return new a(y,this.h^R.h)};function ae(R){for(var v=R.g.length+1,y=[],I=0;I<v;I++)y[I]=R.i(I)<<1|R.i(I-1)>>>31;return new a(y,R.h)}function oe(R,v){var y=v>>5;v%=32;for(var I=R.g.length-y,b=[],A=0;A<I;A++)b[A]=0<v?R.i(A+y)>>>v|R.i(A+y+1)<<32-v:R.i(A+y);return new a(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Jn=a}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ed,as,Td,Ii,Ca,wd,Ad,Id;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in f))break e;f=f[C]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,C={next:function(){if(!m&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function D(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,C,P){for(var q=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)q[Ce-2]=arguments[Ce];return u.prototype[C].apply(m,q)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function M(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=o.length||0,P=m.length||0;o.length=C+P;for(let q=0;q<P;q++)o[C+q]=m[q]}else o.push(m)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var ae=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function oe(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function R(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function v(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)o[f]=m[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function A(o){l.setTimeout(()=>{throw o},0)}function E(){var o=At;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class be{constructor(){this.h=this.g=null}add(u,f){const m=ze.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var ze=new z(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,he=!1,At=new be,Ot=()=>{const o=l.Promise.resolve(void 0);fe=()=>{o.then(St)}};var St=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){A(f)}var u=ze;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}he=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function $t(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ae){e:{try{j(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$t.aa.h.call(this)}}D($t,Oe);var yt={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function W(o,u,f,m,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function de(o){this.src=o,this.g={},this.h=0}de.prototype.add=function(o,u,f,m,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var q=_(o,u,m,C);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new W(u,this.src,P,!!m,C),u.fa=f,o.push(u)),u};function Re(o,u){var f=u.type;if(f in o.g){var m=o.g[f],C=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(m,C,1),P&&(J(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function _(o,u,f,m){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==m)return C}return-1}var w="closure_lm_"+(1e6*Math.random()|0),S={};function N(o,u,f,m,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)N(o,u[P],f,m,C);return null}return f=ee(f),o&&o[x]?o.K(u,f,h(m)?!!m.capture:!!m,C):V(o,u,f,!1,m,C)}function V(o,u,f,m,C,P){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,Ce=te(o);if(Ce||(o[w]=Ce=new de(o)),f=Ce.add(u,f,m,q,P),f.proxy)return f;if(m=L(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)cn||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),m,C);else if(o.attachEvent)o.attachEvent(U(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function L(){function o(f){return u.call(o.src,o.listener,f)}const u=F;return o}function K(o,u,f,m,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(o,u[P],f,m,C);else m=h(m)?!!m.capture:!!m,f=ee(f),o&&o[x]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=_(P,f,m,C),-1<f&&(J(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=te(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,f,m,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[x])Re(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(U(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=te(u))?(Re(f,o),f.h==0&&(f.src=null,u[w]=null)):J(o)}}}function U(o){return o in S?S[o]:S[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new $t(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&$(o),o=f.call(m,u)}return o}function te(o){return o=o[w],o instanceof de?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(u){return o.handleEvent(u)}),o[Q])}function Z(){ke.call(this),this.i=new de(this),this.M=this,this.F=null}D(Z,ke),Z.prototype[x]=!0,Z.prototype.removeEventListener=function(o,u,f,m){K(this,o,u,f,m)};function ne(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var C=u;u=new Oe(m,o),I(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var q=u.g=f[P];C=we(q,m,!0,u)&&C}if(q=u.g=o,C=we(q,m,!0,u)&&C,C=we(q,m,!1,u)&&C,f)for(P=0;P<f.length;P++)q=u.g=f[P],C=we(q,m,!1,u)&&C}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)J(f[m]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},Z.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function we(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==f){var Ce=q.listener,Je=q.ha||q.src;q.fa&&Re(o.i,q),C=Ce.call(Je,m)!==!1&&C}}return C&&!m.defaultPrevented}function ve(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function rt(o){o.g=ve(()=>{o.g=null,o.i&&(o.i=!1,rt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Qe extends ke{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(o){ke.call(this),this.h=o,this.g={}}D(Xe,ke);var st=[];function un(o){oe(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),un(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var or=l.JSON.stringify,dt=l.JSON.parse,Pt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ar(){}ar.prototype.h=null;function zl(o){return o.h||(o.h=o.i())}function Kl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Eo(){Oe.call(this,"d")}D(Eo,Oe);function To(){Oe.call(this,"c")}D(To,Oe);var Mn={},Gl=null;function Gs(){return Gl=Gl||new Z}Mn.La="serverreachability";function Wl(o){Oe.call(this,Mn.La,o)}D(Wl,Oe);function Hr(o){const u=Gs();ne(u,new Wl(u))}Mn.STAT_EVENT="statevent";function Ql(o,u){Oe.call(this,Mn.STAT_EVENT,o),this.stat=u}D(Ql,Oe);function pt(o){const u=Gs();ne(u,new Ql(u,o))}Mn.Ma="timingevent";function Yl(o,u){Oe.call(this,Mn.Ma,o),this.size=u}D(Yl,Oe);function zr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Kr(){this.g=!0}Kr.prototype.xa=function(){this.g=!1};function kp(o,u,f,m,C,P){o.info(function(){if(o.g)if(P)for(var q="",Ce=P.split("&"),Je=0;Je<Ce.length;Je++){var Ee=Ce[Je].split("=");if(1<Ee.length){var it=Ee[0];Ee=Ee[1];var ot=it.split("_");q=2<=ot.length&&ot[1]=="type"?q+(it+"="+Ee+"&"):q+(it+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+q})}function Op(o,u,f,m,C,P,q){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+q})}function lr(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mp(o,f)+(m?" "+m:"")})}function Np(o,u){o.info(function(){return"TIMEOUT: "+u})}Kr.prototype.info=function(){};function Mp(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return or(f)}catch{return u}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wo;function Qs(){}D(Qs,ar),Qs.prototype.g=function(){return new XMLHttpRequest},Qs.prototype.i=function(){return{}},wo=new Qs;function hn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jl}function Jl(){this.i=null,this.g="",this.h=!1}var Zl={},Ao={};function Io(o,u,f){o.L=1,o.v=Zs(Jt(u)),o.m=f,o.P=!0,ec(o,null)}function ec(o,u){o.F=Date.now(),Ys(o),o.A=Jt(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),pc(f.i,"t",m),o.C=0,f=o.j.J,o.h=new Jl,o.g=xc(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Qe(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(st[0]=C.toString()),C=st);for(var P=0;P<C.length;P++){var q=N(f,C[P],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Hr(),kp(o.i,o.u,o.A,o.l,o.R,o.m)}hn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Zt(o)==3?u.j():this.Y(o)},hn.prototype.Y=function(o){try{if(o==this.g)e:{const ot=Zt(this.g);var u=this.g.Ba();const hr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Tc(this.g)))){this.J||ot!=4||u==7||(u==8||0>=hr?Hr(3):Hr(2)),bo(this);var f=this.g.Z();this.X=f;t:if(tc(this)){var m=Tc(this.g);o="";var C=m.length,P=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Gr(this);var q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(P&&u==C-1)});m.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,Op(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Je=this.g;if((Ce=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ce)){var Ee=Ce;break t}}Ee=null}if(f=Ee)lr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,f);else{this.o=!1,this.s=3,pt(12),Ln(this),Gr(this);break e}}if(this.P){f=!0;let Nt;for(;!this.J&&this.C<q.length;)if(Nt=Lp(this,q),Nt==Ao){ot==4&&(this.s=4,pt(14),f=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Zl){this.s=4,pt(15),lr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else lr(this.i,this.l,Nt,null),Ro(this,Nt);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||q.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)lr(this.i,this.l,q,"[Invalid Chunked Response]"),Ln(this),Gr(this);else if(0<q.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),xo(it),it.M=!0,pt(11))}}else lr(this.i,this.l,q,null),Ro(this,q);ot==4&&Ln(this),this.o&&!this.J&&(ot==4?Sc(this.j,this):(this.o=!1,Ys(this)))}else eg(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Ln(this),Gr(this)}}}catch{}finally{}};function tc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lp(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?Ao:(f=Number(u.substring(f,m)),isNaN(f)?Zl:(m+=1,m+f>u.length?Ao:(u=u.slice(m,m+f),o.C=m+f,u)))}hn.prototype.cancel=function(){this.J=!0,Ln(this)};function Ys(o){o.S=Date.now()+o.I,nc(o,o.I)}function nc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zr(g(o.ba,o),u)}function bo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}hn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Np(this.i,this.A),this.L!=2&&(Hr(),pt(17)),Ln(this),this.s=2,Gr(this)):nc(this,this.S-o)};function Gr(o){o.j.G==0||o.J||Sc(o.j,o)}function Ln(o){bo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,un(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ro(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Co(f.h,o))){if(!o.K&&Co(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ii(f),ri(f);else break e;Vo(f),pt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=zr(g(f.Za,f),6e3));if(1>=ic(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Bn(f,11)}else if((o.K||f.g==o)&&ii(f),!B(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ee=C[u];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const it=Ee[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=Ee[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const hr=Ee[5];hr!=null&&typeof hr=="number"&&0<hr&&(m=1.5*hr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Nt=o.g;if(Nt){const ai=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var P=m.h;P.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(So(P,P.h),P.h=null))}if(m.D){const ko=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(m.ya=ko,De(m.I,m.D,ko))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var q=o;if(m.qa=Vc(m,m.J?m.ia:null,m.W),q.K){oc(m.h,q);var Ce=q,Je=m.L;Je&&(Ce.I=Je),Ce.B&&(bo(Ce),Ys(Ce)),m.g=q}else Rc(m);0<f.i.length&&si(f)}else Ee[0]!="stop"&&Ee[0]!="close"||Bn(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Bn(f,7):Do(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Hr(4)}catch{}}var Fp=class{constructor(o,u){this.g=o,this.map=u}};function rc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ic(o){return o.h?1:o.g?o.g.size:0}function Co(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function So(o,u){o.g?o.g.add(u):o.h=u}function oc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}rc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ac(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function Bp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Up(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function lc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Up(o),m=Bp(o),C=m.length,P=0;P<C;P++)u.call(void 0,m[P],f&&f[P],o)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),C=null;if(0<=m){var P=o[f].substring(0,m);C=o[f].substring(m+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,Xs(this,o.j),this.o=o.o,this.g=o.g,Js(this,o.s),this.l=o.l;var u=o.i,f=new Yr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),uc(this,f),this.m=o.m}else o&&(u=String(o).match(cc))?(this.h=!1,Xs(this,u[1]||"",!0),this.o=Wr(u[2]||""),this.g=Wr(u[3]||"",!0),Js(this,u[4]),this.l=Wr(u[5]||"",!0),uc(this,u[6]||"",!0),this.m=Wr(u[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Fn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Qr(u,hc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Qr(u,hc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Qr(f,f.charAt(0)=="/"?Hp:qp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Qr(f,Kp)),o.join("")};function Jt(o){return new Fn(o)}function Xs(o,u,f){o.j=f?Wr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Js(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function uc(o,u,f){u instanceof Yr?(o.i=u,Gp(o.i,o.h)):(f||(u=Qr(u,zp)),o.i=new Yr(u,o.h))}function De(o,u,f){o.i.set(u,f)}function Zs(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,jp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hc=/[#\/\?@]/g,qp=/[#\?:]/g,Hp=/[#\?]/g,zp=/[#\?@]/g,Kp=/#/g;function Yr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&$p(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Yr.prototype,t.add=function(o,u){fn(this),this.i=null,o=cr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function fc(o,u){fn(o),u=cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function dc(o,u){return fn(o),u=cr(o,u),o.g.has(u)}t.forEach=function(o,u){fn(this),this.g.forEach(function(f,m){f.forEach(function(C){o.call(u,C,m,this)},this)},this)},t.na=function(){fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=o[m];for(let P=0;P<C.length;P++)f.push(u[m])}return f},t.V=function(o){fn(this);let u=[];if(typeof o=="string")dc(this,o)&&(u=u.concat(this.g.get(cr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return fn(this),this.i=null,o=cr(this,o),dc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function pc(o,u,f){fc(o,u),0<f.length&&(o.i=null,o.g.set(cr(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const P=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var C=P;q[m]!==""&&(C+="="+encodeURIComponent(String(q[m]))),o.push(C)}}return this.i=o.join("&")};function cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Gp(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(fc(this,m),pc(this,C,f))},o)),o.j=u}function Wp(o,u){const f=new Kr;if(l.Image){const m=new Image;m.onload=T(dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=T(dn,f,"TestLoadImage: error",!1,u,m),m.onabort=T(dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(dn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Qp(o,u){const f=new Kr,m=new AbortController,C=setTimeout(()=>{m.abort(),dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(C),P.ok?dn(f,"TestPingServer: ok",!0,u):dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),dn(f,"TestPingServer: error",!1,u)})}function dn(o,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Yp(){this.g=new Pt}function Xp(o,u,f){const m=f||"";try{lc(o,function(C,P){let q=C;h(C)&&(q=or(C)),u.push(m+P+"="+encodeURIComponent(q))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function ei(o){this.l=o.Ub||null,this.j=o.eb||!1}D(ei,ar),ei.prototype.g=function(){return new ti(this.l,this.j)},ei.prototype.i=function(o){return function(){return o}}({});function ti(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ti,Z),t=ti.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Jr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function gc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Xr(this):Jr(this),this.readyState==3&&gc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Xr(this))},t.Qa=function(o){this.g&&(this.response=o,Xr(this))},t.ga=function(){this.g&&Xr(this)};function Xr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jr(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function mc(o){let u="";return oe(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Po(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=mc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):De(o,u,f))}function Me(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Me,Z);var Jp=/^https?$/i,Zp=["POST","PUT"];t=Me.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wo.g(),this.v=this.o?zl(this.o):zl(wo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){_c(this,P);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())f.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zp,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ec(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){_c(this,P)}};function _c(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,yc(o),ni(o)}function yc(o){o.A||(o.A=!0,ne(o,"complete"),ne(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ne(this,"complete"),ne(this,"abort"),ni(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vc(this):this.bb())},t.bb=function(){vc(this)};function vc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)ve(o.Ea,0,o);else if(ne(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=q===0){var C=String(o.D).match(cc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Jp.test(C?C.toLowerCase():"")}f=m}if(f)ne(o,"complete"),ne(o,"success");else{o.m=6;try{var P=2<Zt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",yc(o)}}finally{ni(o)}}}}function ni(o,u){if(o.g){Ec(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ne(o,"ready");try{f.onreadystatechange=m}catch{}}}function Ec(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),dt(u)}};function Tc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function eg(o){const u={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(B(o[m]))continue;var f=b(o[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}R(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function wc(o){this.Aa=0,this.i=[],this.j=new Kr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,o),this.cb=Zr("retryDelaySeedMs",1e4,o),this.Wa=Zr("forwardChannelMaxRetries",2,o),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rc(o&&o.concurrentRequestLimit),this.Da=new Yp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wc.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,m){pt(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Vc(this,null,this.W),si(this)};function Do(o){if(Ac(o),o.G==3){var u=o.U++,f=Jt(o.I);if(De(f,"SID",o.K),De(f,"RID",u),De(f,"TYPE","terminate"),es(o,f),u=new hn(o,o.j,u),u.L=2,u.v=Zs(Jt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=xc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ys(u)}Dc(o)}function ri(o){o.g&&(xo(o),o.g.cancel(),o.g=null)}function Ac(o){ri(o),o.u&&(l.clearTimeout(o.u),o.u=null),ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function si(o){if(!sc(o.h)&&!o.s){o.s=!0;var u=o.Ga;fe||Ot(),he||(fe(),he=!0),At.add(u,o),o.B=0}}function tg(o,u){return ic(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zr(g(o.Ga,o,u),Pc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new hn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=v(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=bc(this,C,u),f=Jt(this.I),De(f,"RID",o),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),es(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(mc(P)))+"&"+u:this.m&&Po(f,this.m,P)),So(this.h,C),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",u),De(f,"SID","null"),C.T=!0,Io(C,f,null)):Io(C,f,u),this.G=2}}else this.G==3&&(o?Ic(this,o):this.i.length==0||sc(this.h)||Ic(this))};function Ic(o,u){var f;u?f=u.l:f=o.U++;const m=Jt(o.I);De(m,"SID",o.K),De(m,"RID",f),De(m,"AID",o.T),es(o,m),o.m&&o.o&&Po(m,o.m,o.o),f=new hn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=bc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),So(o.h,f),Io(f,m,u)}function es(o,u){o.H&&oe(o.H,function(f,m){De(u,m,f)}),o.l&&lc({},function(f,m){De(u,m,f)})}function bc(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const q=["count="+f];P==-1?0<f?(P=C[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let Ce=!0;for(let Je=0;Je<f;Je++){let Ee=C[Je].g;const it=C[Je].map;if(Ee-=P,0>Ee)P=Math.max(0,C[Je].g-100),Ce=!1;else try{Xp(it,q,"req"+Ee+"_")}catch{m&&m(it)}}if(Ce){m=q.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function Rc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;fe||Ot(),he||(fe(),he=!0),At.add(u,o),o.v=0}}function Vo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zr(g(o.Fa,o),Pc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zr(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),ri(this),Cc(this))};function xo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Cc(o){o.g=new hn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Jt(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),es(o,u),o.m&&o.o&&Po(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Zs(Jt(u)),f.m=null,f.P=!0,ec(f,o)}t.Za=function(){this.C!=null&&(this.C=null,ri(this),Vo(this),pt(19))};function ii(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Sc(o,u){var f=null;if(o.g==u){ii(o),xo(o),o.g=null;var m=2}else if(Co(o.h,u))f=u.D,oc(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;m=Gs(),ne(m,new Yl(m,f)),si(o)}else Rc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&tg(o,u)||m==2&&Vo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function Pc(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Bn(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const C=!m;m=new Fn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xs(m,"https"),Zs(m),C?Wp(m.toString(),f):Qp(m.toString(),f)}else pt(2);o.G=0,o.l&&o.l.sa(u),Dc(o),Ac(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Dc(o){if(o.G=0,o.ka=[],o.l){const u=ac(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Vc(o,u,f){var m=f instanceof Fn?Jt(f):new Fn(f);if(m.g!="")u&&(m.g=u+"."+m.g),Js(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Fn(null);m&&Xs(P,m),u&&(P.g=u),C&&Js(P,C),f&&(P.l=f),m=P}return f=o.D,u=o.ya,f&&u&&De(m,f,u),De(m,"VER",o.la),es(o,m),m}function xc(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new ei({eb:f})):new Me(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}t=kc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oi(){}oi.prototype.g=function(o,u){return new It(o,u)};function It(o,u){Z.call(this),this.g=new wc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ur(this)}D(It,Z),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Do(this.g)},It.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=or(o),o=f);u.i.push(new Fp(u.Ya++,o)),u.G==3&&si(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,It.aa.N.call(this)};function Oc(o){Eo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}D(Oc,Eo);function Nc(){To.call(this),this.status=1}D(Nc,To);function ur(o){this.g=o}D(ur,kc),ur.prototype.ua=function(){ne(this.g,"a")},ur.prototype.ta=function(o){ne(this.g,new Oc(o))},ur.prototype.sa=function(o){ne(this.g,new Nc)},ur.prototype.ra=function(){ne(this.g,"b")},oi.prototype.createWebChannel=oi.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Id=function(){return new oi},Ad=function(){return Gs()},wd=Mn,Ca={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,Ii=Ws,Xl.COMPLETE="complete",Td=Xl,Kl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",Z.prototype.listen=Z.prototype.K,as=Kl,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Ed=Me}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const zu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new yl("@firebase/firestore");function gr(){return rr.logLevel}function X(t,...e){if(rr.logLevel<=ge.DEBUG){const n=e.map(Tl);rr.debug(`Firestore (${Br}): ${t}`,...n)}}function an(t,...e){if(rr.logLevel<=ge.ERROR){const n=e.map(Tl);rr.error(`Firestore (${Br}): ${t}`,...n)}}function xr(t,...e){if(rr.logLevel<=ge.WARN){const n=e.map(Tl);rr.warn(`Firestore (${Br}): ${t}`,...n)}}function Tl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Ne(t,e){t||ue()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class IE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bE{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new bd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new lt(e)}}class RE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class CE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new SE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function kr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new wt(0,0))}static max(){return new le(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Os.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Os?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Os{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const xE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Os{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return xE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new re(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Le.fromString(e))}static fromName(e){return new ie(Le.fromString(e).popFirst(5))}static empty(){return new ie(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Le(e.slice()))}}function kE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new Sn(s,ie.empty(),e)}function OE(t){return new Sn(t.readTime,t.key,-1)}class Sn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sn(le.min(),ie.empty(),-1)}static max(){return new Sn(le.max(),ie.empty(),-1)}}function NE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==ME)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function FE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ur(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ao.oe=-1;function lo(t){return t==null}function Sa(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ku(e)),e=UE(t.get(n),e);return Ku(e)}function UE(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Ku(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new di(this.root,e,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new di(this.root,e,this.comparator,!0)}}class di{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wu(this.data.getIterator())}getIteratorFrom(e){return new Wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new Ge(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rd("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const jE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=jE.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dn(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function co(t){const e=t.mapValue.fields.__previous_value__;return wl(e)?co(e):e}function Ns(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wl(t)?4:zE(t)?9007199254740991:HE(t)?10:11:ue()}function Yt(t,e){if(t===e)return!0;const n=Vn(t);if(n!==Vn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pn(s.timestampValue),l=Pn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dn(s.bytesValue).isEqual(Dn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Fe(s.doubleValue),l=Fe(i.doubleValue);return a===l?Sa(a)===Sa(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return kr(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gu(a)!==Gu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Yt(a[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function Ls(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Or(t,e){if(t===e)return 0;const n=Vn(t),r=Vn(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Fe(i.integerValue||i.doubleValue),c=Fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Qu(t.timestampValue,e.timestampValue);case 4:return Qu(Ns(t),Ns(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Dn(i),c=Dn(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=me(l[h],c[h]);if(d!==0)return d}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=me(Fe(i.latitude),Fe(a.latitude));return l!==0?l:me(Fe(i.longitude),Fe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yu(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},g=a.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,D=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=me(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Yu(T,D)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===pi.mapValue&&a===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=me(c[p],d[p]);if(g!==0)return g;const T=Or(l[c[p]],h[d[p]]);if(T!==0)return T}return me(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Qu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Pn(t),r=Pn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Yu(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Or(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Nr(t){return Pa(t)}function Pa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pa(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Pa(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function bi(t){switch(Vn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=co(t);return e?16+bi(e):16;case 5:return 2*t.stringValue.length;case 6:return Dn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return qs(r.fields,(i,a)=>{s+=i.length+bi(a)}),s}(t.mapValue);default:throw ue()}}function Da(t){return!!t&&"integerValue"in t}function Al(t){return!!t&&"arrayValue"in t}function Xu(t){return!!t&&"nullValue"in t}function Ju(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ta(t){return!!t&&"mapValue"in t}function HE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=vs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(vs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,le.min(),le.min(),le.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,le.min(),le.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,le.min(),le.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.position=e,this.inclusive=n}}function Zu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),n.key):r=Or(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function eh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n="asc"){this.field=e,this.dir=n}}function KE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{}class Ke extends Cd{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WE(e,n,r):n==="array-contains"?new XE(e,r):n==="in"?new JE(e,r):n==="not-in"?new ZE(e,r):n==="array-contains-any"?new eT(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QE(e,r):new YE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Or(n,this.value)):n!==null&&Vn(this.value)===Vn(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Cd{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xt(e,n)}matches(e){return Sd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sd(t){return t.op==="and"}function Pd(t){return GE(t)&&Sd(t)}function GE(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Va(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Nr(t.value);if(Pd(t))return t.filters.map(e=>Va(e)).join(",");{const e=t.filters.map(n=>Va(n)).join(",");return`${t.op}(${e})`}}function Dd(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Dd(a,s.filters[l]),!0):!1}(t,e):void ue()}function Vd(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Nr(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(Vd).join(" ,")+"}"}(t):"Filter"}class WE extends Ke{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class QE extends Ke{constructor(e,n){super(e,"in",n),this.keys=xd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YE extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=xd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class XE extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Al(n)&&Ls(n.arrayValue,this.value)}}class JE extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ls(this.value.arrayValue,n)}}class ZE extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ls(this.value.arrayValue,n)}}class eT extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function th(t,e=null,n=[],r=[],s=null,i=null,a=null){return new tT(t,e,n,r,s,i,a)}function Il(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Va(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Nr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Nr(r)).join(",")),e.ue=n}return e.ue}function bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eh(t.startAt,e.startAt)&&eh(t.endAt,e.endAt)}function xa(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nT(t,e,n,r,s,i,a,l){return new uo(t,e,n,r,s,i,a,l)}function kd(t){return new uo(t)}function nh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rT(t){return t.collectionGroup!==null}function Es(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ge(_t.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ui(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Ui(_t.keyField(),r))}return e.ce}function Qt(t){const e=_e(t);return e.le||(e.le=sT(e,Es(t))),e.le}function sT(t,e){if(t.limitType==="F")return th(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)});const n=t.endAt?new Bi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bi(t.startAt.position,t.startAt.inclusive):null;return th(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ka(t,e,n){return new uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ho(t,e){return bl(Qt(t),Qt(e))&&t.limitType===e.limitType}function Od(t){return`${Il(Qt(t))}|lt:${t.limitType}`}function mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vd(s)).join(", ")}]`),lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Nr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Nr(s)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function fo(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Es(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Zu(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Es(r),s)||r.endAt&&!function(a,l,c){const h=Zu(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Es(r),s))}(t,e)}function iT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nd(t){return(e,n)=>{let r=!1;for(const s of Es(t)){const i=oT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oT(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Or(c,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $E(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Ue(ie.comparator);function xn(){return aT}const Md=new Ue(ie.comparator);function ls(...t){let e=Md;for(const n of t)e=e.insert(n.key,n);return e}function lT(t){let e=Md;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wn(){return Ts()}function Ld(){return Ts()}function Ts(){return new ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const cT=new Ge(ie.comparator);function ye(...t){let e=cT;for(const n of t)e=e.add(n);return e}const uT=new Ge(me);function hT(){return uT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function dT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this._=void 0}}function pT(t,e,n){return t instanceof Oa?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wl(i)&&(i=co(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof $i?Fd(t,e):t instanceof ji?Bd(t,e):function(s,i){const a=mT(s,i),l=rh(a)+rh(s.Pe);return Da(a)&&Da(s.Pe)?dT(l):fT(s.serializer,l)}(t,e)}function gT(t,e,n){return t instanceof $i?Fd(t,e):t instanceof ji?Bd(t,e):n}function mT(t,e){return t instanceof Na?function(r){return Da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oa extends po{}class $i extends po{constructor(e){super(),this.elements=e}}function Fd(t,e){const n=Ud(e);for(const r of t.elements)n.some(s=>Yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ji extends po{constructor(e){super(),this.elements=e}}function Bd(t,e){let n=Ud(e);for(const r of t.elements)n=n.filter(s=>!Yt(s,r));return{arrayValue:{values:n}}}class Na extends po{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rh(t){return Fe(t.integerValue||t.doubleValue)}function Ud(t){return Al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _T(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof $i&&s instanceof $i||r instanceof ji&&s instanceof ji?kr(r.elements,s.elements,Yt):r instanceof Na&&s instanceof Na?Yt(r.Pe,s.Pe):r instanceof Oa&&s instanceof Oa}(t.transform,e.transform)}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rl{}function $d(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vT(t.key,er.none()):new Cl(t.key,t.data,er.none());{const n=t.data,r=Kt.empty();let s=new Ge(_t.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new go(t.key,r,new Tn(s.toArray()),er.none())}}function yT(t,e,n){t instanceof Cl?function(s,i,a){const l=s.value.clone(),c=ih(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof go?function(s,i,a){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ih(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(jd(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ws(t,e,n,r){return t instanceof Cl?function(i,a,l,c){if(!Ri(i.precondition,a))return l;const h=i.value.clone(),d=oh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof go?function(i,a,l,c){if(!Ri(i.precondition,a))return l;const h=oh(i.fieldTransforms,c,a),d=a.data;return d.setAll(jd(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return Ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function sh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kr(r,s,(i,a)=>_T(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cl extends Rl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class go extends Rl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ih(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,gT(a,l,n[s]))}return r}function oh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,pT(i,a,e))}return r}class vT extends Rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ld();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=$d(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(n,r)=>sh(n,r))&&kr(this.baseMutations,e.baseMutations,(n,r)=>sh(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,pe;function qd(t){if(t===void 0)return an("GRPC error has no .code"),G.UNKNOWN;switch(t){case $e.OK:return G.OK;case $e.CANCELLED:return G.CANCELLED;case $e.UNKNOWN:return G.UNKNOWN;case $e.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case $e.INTERNAL:return G.INTERNAL;case $e.UNAVAILABLE:return G.UNAVAILABLE;case $e.UNAUTHENTICATED:return G.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case $e.NOT_FOUND:return G.NOT_FOUND;case $e.ALREADY_EXISTS:return G.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return G.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case $e.ABORTED:return G.ABORTED;case $e.OUT_OF_RANGE:return G.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return G.UNIMPLEMENTED;case $e.DATA_LOSS:return G.DATA_LOSS;default:return ue()}}(pe=$e||($e={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new Jn([4294967295,4294967295],0);function ah(t){const e=AT().encode(t),n=new vd;return n.update(e),new Uint8Array(n.digest())}function lh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([n,r],0),new Jn([s,i],0)]}class Sl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cs(`Invalid padding: ${n}`);if(r<0)throw new cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new cs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Jn.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Jn.fromNumber(r)));return s.compare(IT)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ah(e),[r,s]=lh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const n=ah(e),[r,s]=lh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mo(le.min(),s,new Ue(me),xn(),ye())}}class Hs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hs(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Hd{constructor(e,n){this.targetId=e,this.me=n}}class zd{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ch{constructor(){this.fe=0,this.ge=uh(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Hs(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=uh()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bT{constructor(e){this.Le=e,this.Be=new Map,this.ke=xn(),this.qe=gi(),this.Qe=gi(),this.Ke=new Ue(me)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(xa(i))if(r===0){const a=new ie(i.path);this.We(n,a,ht.newNoDocument(a,le.min()))}else Ne(r===1);else{const a=this.Ze(n);if(a!==r){const l=this.Xe(e),c=l?this.et(l,e,a):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Dn(r).toUint8Array()}catch(c){if(c instanceof Rd)return xr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sl(a,s,i)}catch(c){return xr(c instanceof cs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Ye(a);if(l){if(i.current&&xa(l.target)){const c=new ie(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,ht.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=ye();this.Qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new mo(e,n,this.Ke,this.ke,r);return this.ke=xn(),this.qe=gi(),this.Qe=gi(),this.Ke=new Ue(me),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new ch,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Ge(me),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(me),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ch),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gi(){return new Ue(ie.comparator)}function uh(){return new Ue(ie.comparator)}const RT={asc:"ASCENDING",desc:"DESCENDING"},CT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ST={and:"AND",or:"OR"};class PT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ma(t,e){return t.useProto3Json||lo(e)?e:{value:e}}function DT(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rr(t){return Ne(!!t),le.fromTimestamp(function(n){const r=Pn(n);return new wt(r.seconds,r.nanos)}(t))}function xT(t,e){return La(t,e).canonicalString()}function La(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kd(t){const e=Le.fromString(t);return Ne(Xd(e)),e}function na(t,e){const n=Kd(e);if(n.get(1)!==t.databaseId.projectId)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Wd(n))}function Gd(t,e){return xT(t.databaseId,e)}function kT(t){const e=Kd(t);return e.length===4?Le.emptyPath():Wd(e)}function hh(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wd(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function OT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ne(d===void 0||typeof d=="string"),nt.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?G.UNKNOWN:qd(h.code);return new re(d,h.message||"")}(a);n=new zd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=na(t,r.document.name),i=Rr(r.document.updateTime),a=r.document.createTime?Rr(r.document.createTime):le.min(),l=new Kt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ci(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=na(t,r.document),i=r.readTime?Rr(r.readTime):le.min(),a=ht.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ci([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=na(t,r.document),i=r.removedTargetIds||[];n=new Ci([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new wT(s,i),l=r.targetId;n=new Hd(l,a)}}return n}function NT(t,e){return{documents:[Gd(t,e.path)]}}function MT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gd(t,s);const i=function(h){if(h.length!==0)return Yd(Xt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:_r(g.field),direction:BT(g.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ma(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function LT(t){let e=kT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Qd(p);return g instanceof Xt&&Pd(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(D){return new Ui(yr(D.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,lo(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,T=p.values||[];return new Bi(T,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,T=p.values||[];return new Bi(T,g)}(n.endAt)),nT(e,s,a,i,l,"F",c,h)}function FT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qd(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yr(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yr(n.unaryFilter.field);return Ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>Qd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function BT(t){return RT[t]}function UT(t){return CT[t]}function $T(t){return ST[t]}function _r(t){return{fieldPath:t.canonicalString()}}function yr(t){return _t.fromServerFormat(t.fieldPath)}function Yd(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Ju(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(Xu(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ju(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(Xu(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:UT(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>Yd(s));return r.length===1?r[0]:{compositeFilter:{op:$T(n.op),filters:r}}}(t):ue()}function Xd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,r,s,i=le.min(),a=le.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.ht=e}}function qT(t){const e=LT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.ln=new zT}addToCollectionParentIndex(e,n){return this.ln.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Sn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class zT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Mr(0)}static Qn(){return new Mr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class KT{constructor(e){this.Gn=e,this.buffer=new Ge(dh),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GT{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){X("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ur(n)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Yn(3e5)})}}class WT{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(ao.oe);const r=new KT(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(fh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fh):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),gr()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function QT(t,e){return new WT(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.changes=new ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ws(r.mutation,s,Tn.empty(),wt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Wn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=ls();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=xn();const a=Ts(),l=function(){return Ts()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof go)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ws(d.mutation,h,d.mutation.getFieldMask(),wt.now())):a.set(h.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new XT(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ts();let s=new Ue((a,l)=>a-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Tn.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Ld();d.forEach(g=>{if(!i.has(g)){const T=$d(n.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ie.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Wn());let l=-1,c=i;return a.next(h=>O.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(d=>({batchId:l,changes:lT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=ls();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,c=>{const h=function(p,g){return new uo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ht.newInvalidDocument(d)))});let l=ls();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ws(d.mutation,h,Tn.empty(),wt.now()),fo(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return O.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rr(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:qT(s.bundledQuery),readTime:Rr(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.overlays=new Ue(ie.comparator),this.Er=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wn();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Wn(),i=n.length+1,a=new ie(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Wn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Wn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return O.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new TT(n,r));let i=this.Er.get(n);i===void 0&&(i=ye(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.dr=new Ge(Ye.Ar),this.Rr=new Ge(Ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ye(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ie(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ie(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ye();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ie.comparator(e.key,n.key)||me(e.br,n.br)}static Vr(e,n){return me(e.br,n.br)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ge(Ye.Ar)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ET(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(me);return n.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],l=>{r=r.add(l.br)})}),O.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new ie(i),0);let l=new Ge(me);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},a),O.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return O.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ye(n,0),s=this.vr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.Nr=e,this.docs=function(){return new Ue(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const a=n.path,l=new ie(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||NE(OE(d),r)<=0||(s.has(d.key)||fo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Lr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new s0(this)}getSize(e){return O.resolve(this.size)}}class s0 extends YT{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.persistence=e,this.Br=new ir(n=>Il(n),bl),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.kr=0,this.qr=new Pl,this.targetCount=0,this.Qr=Mr.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),O.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Mr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Un(n),O.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ao(0),this.Ur=!1,this.Ur=!0,this.Wr=new t0,this.referenceDelegate=e(this),this.Gr=new i0(this),this.indexManager=new HT,this.remoteDocumentCache=function(s){return new r0(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new jT(n),this.jr=new ZT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new e0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new n0(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new o0(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return O.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class o0 extends LE{constructor(e){super(),this.currentSequenceNumber=e}}class Dl{constructor(e){this.persistence=e,this.Zr=new Pl,this.Xr=null}static ei(e){return new Dl(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),O.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.ti,r=>{const s=ie.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return O.or([()=>O.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class qi{constructor(e,n){this.persistence=e,this.ri=new ir(r=>BE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=QT(this,n)}static ei(e,n){return new qi(e,n)}Hr(){}Jr(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return O.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,n).next(l=>{l||(r++,i.removeEntry(a,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),O.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bi(e.data.value)),n}ir(e,n,r){return O.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return sv()?8:FE(nv())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new a0;return this.ts(e,n,a).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,a,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(gr()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),O.resolve()):(gr()<=ge.DEBUG&&X("QueryEngine","Query:",mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(gr()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):O.resolve())}Xi(e,n){if(nh(n))return O.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ka(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ye(...i);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,a,c.readTime)?this.Xi(e,ka(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return nh(n)||s.isEqual(le.min())?O.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(n,i);return this.ss(n,a,r,s)?O.resolve(null):(gr()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(n)),this.os(e,a,n,kE(s,-1)).next(l=>l))})}rs(e,n){let r=new Ge(Nd(e));return n.forEach((s,i)=>{fo(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return gr()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",mr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Sn.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(me),this.cs=new ir(i=>Il(i),bl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function u0(t,e,n,r){return new c0(t,e,n,r)}async function Zd(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ye();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:l}))})})}function ep(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function h0(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(nt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(k,M,z){return k.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(g,T,d)&&l.push(n.Gr.updateTargetData(i,T))});let c=xn(),h=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(f0(i,a,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(le.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return O.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function f0(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=xn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:a,Es:s}})}function d0(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Gr.allocateTargetId(r).next(a=>(s=new wn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Fa(t,e,n){const r=_e(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ur(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function ph(t,e,n){const r=_e(t);let s=le.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=_e(c),g=p.cs.get(d);return g!==void 0?O.resolve(p.us.get(g)):p.Gr.getTargetData(h,d)}(r,a,Qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:ye())).next(l=>(p0(r,iT(e),l),{documents:l,ds:i})))}function p0(t,e,n){let r=t.ls.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class gh{constructor(){this.activeTargetIds=hT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g0{constructor(){this._o=new gh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new gh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi=null;function ra(){return mi===null?mi=function(){return 268435456+Math.round(2147483648*Math.random())}():mi++,"0x"+mi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class v0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,a){const l=ra(),c=this.No(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,a),this.Bo(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw xr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,a,l){return this.Oo(n,r,s,i,a)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}No(n,r){const s=_0[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=ra();return new Promise((a,l)=>{const c=new Ed;c.setWithCredentials(!0),c.listenOnce(Td.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ii.NO_ERROR:const d=c.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Ii.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),l(new re(G.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const p=c.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const D=function(M){const z=M.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(z)>=0?z:G.UNKNOWN}(T.status);l(new re(D,T.message))}else l(new re(G.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(G.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=ra(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Id(),l=Ad(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let g=!1,T=!1;const D=new y0({Eo:M=>{T?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(at,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Ao:()=>p.close()}),k=(M,z,B)=>{M.listen(z,H=>{try{B(H)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,as.EventType.OPEN,()=>{T||(X(at,`RPC '${e}' stream ${s} transport opened.`),D.So())}),k(p,as.EventType.CLOSE,()=>{T||(T=!0,X(at,`RPC '${e}' stream ${s} transport closed`),D.Do())}),k(p,as.EventType.ERROR,M=>{T||(T=!0,xr(at,`RPC '${e}' stream ${s} transport errored:`,M),D.Do(new re(G.UNAVAILABLE,"The operation could not be completed")))}),k(p,as.EventType.MESSAGE,M=>{var z;if(!T){const B=M.data[0];Ne(!!B);const H=B,j=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(j){X(at,`RPC '${e}' stream ${s} received error:`,j);const ae=j.status;let oe=function(y){const I=$e[y];if(I!==void 0)return qd(I)}(ae),R=j.message;oe===void 0&&(oe=G.INTERNAL,R="Unknown error status: "+ae+" with message "+j.message),T=!0,D.Do(new re(oe,R)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,B),D.vo(B)}}),k(l,wd.STAT_EVENT,M=>{M.stat===Ca.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Ca.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){return new PT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,s,i,a,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new np(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T0 extends E0{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=OT(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Rr(a.readTime):le.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=hh(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=xa(c)?{documents:NT(i,c)}:{query:MT(i,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=VT(i,a.resumeToken);const h=Ma(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=DT(i,a.snapshotVersion.toTimestamp());const h=Ma(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=FT(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=hh(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,La(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(G.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,La(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new re(G.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class A0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(an(n),this.C_=!1):X("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Ks(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=_e(c);h.k_.add(4),await zs(h),h.K_.set("Unknown"),h.k_.delete(4),await _o(h)}(this))})}),this.K_=new A0(r,s)}}async function _o(t){if(Ks(t))for(const e of t.q_)await e(!0)}async function zs(t){for(const e of t.q_)await e(!1)}function rp(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Nl(n)?Ol(n):$r(n).s_()&&kl(n,e))}function xl(t,e){const n=_e(t),r=$r(n);n.B_.delete(e),r.s_()&&sp(n,e),n.B_.size===0&&(r.s_()?r.a_():Ks(n)&&n.K_.set("Unknown"))}function kl(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$r(t).V_(e)}function sp(t,e){t.U_.xe(e),$r(t).m_(e)}function Ol(t){t.U_=new bT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$r(t).start(),t.K_.F_()}function Nl(t){return Ks(t)&&!$r(t).i_()&&t.B_.size>0}function Ks(t){return _e(t).k_.size===0}function ip(t){t.U_=void 0}async function b0(t){t.K_.set("Online")}async function R0(t){t.B_.forEach((e,n)=>{kl(t,e)})}async function C0(t,e){ip(t),Nl(t)?(t.K_.O_(e),Ol(t)):t.K_.set("Unknown")}async function S0(t,e,n){if(t.K_.set("Online"),e instanceof zd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _h(t,r)}else if(e instanceof Ci?t.U_.$e(e):e instanceof Hd?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(le.min()))try{const r=await ep(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.U_.it(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),sp(i,c);const p=new wn(d.target,c,h,d.sequenceNumber);kl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await _h(t,r)}}async function _h(t,e,n){if(!Ur(e))throw e;t.k_.add(1),await zs(t),t.K_.set("Offline"),n||(n=()=>ep(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await _o(t)})}async function yh(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ks(n);n.k_.add(3),await zs(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await _o(n)}async function P0(t,e){const n=_e(t);e?(n.k_.delete(2),await _o(n)):e||(n.k_.add(2),await zs(n),n.K_.set("Unknown"))}function $r(t){return t.W_||(t.W_=function(n,r,s){const i=_e(n);return i.b_(),new T0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:b0.bind(null,t),mo:R0.bind(null,t),po:C0.bind(null,t),R_:S0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Nl(t)?Ol(t):t.K_.set("Unknown")):(await t.W_.stop(),ip(t))})),t.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Ml(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(t,e){if(an("AsyncQueue",`${e}: ${t}`),Ur(t))return new re(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{static emptySet(e){return new Cr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ls(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.z_=new Ue(ie.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lr{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Lr(e,n,Cr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class V0{constructor(){this.queries=Eh(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=Eh(),i.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(G.ABORTED,"Firestore shutting down"))}}function Eh(){return new ir(t=>Od(t),ho)}async function x0(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new D0,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=op(a,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Ll(n)}async function k0(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function O0(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&Ll(n)}function N0(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Ll(t){t.X_.forEach(e=>{e.next()})}var Ba,Th;(Th=Ba||(Ba={})).na="default",Th.Cache="cache";class M0{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ba.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.key=e}}class lp{constructor(e){this.key=e}}class L0{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=Nd(e),this.ma=new Cr(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new vh,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),T=fo(this.query,p)?p:null,D=!!g&&this.mutatedKeys.has(g.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let M=!1;g&&T?g.data.isEqual(T.data)?D!==k&&(r.track({type:3,doc:T}),M=!0):this.ya(g,T)||(r.track({type:2,doc:T}),M=!0,(c&&this.Va(T,c)>0||h&&this.Va(T,h)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),M=!0):g&&!T&&(r.track({type:1,doc:g}),M=!0,(c||h)&&(l=!0)),M&&(T?(a=a.add(T),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((d,p)=>function(T,D){const k=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(T)-k(D)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,a.length!==0||h?{snapshot:new Lr(this.query,e.ma,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new vh,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new lp(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new ap(r))}),n}va(e){this.da=e.ds,this.Ra=ye();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Lr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class F0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B0{constructor(e){this.key=e,this.Fa=!1}}class U0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new ir(l=>Od(l),ho),this.Oa=new Map,this.Na=new Set,this.La=new Ue(ie.comparator),this.Ba=new Map,this.ka=new Pl,this.qa={},this.Qa=new Map,this.Ka=Mr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function $0(t,e,n=!0){const r=dp(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await cp(r,e,n,!0),s}async function j0(t,e){const n=dp(t);await cp(n,e,!0,!1)}async function cp(t,e,n,r){const s=await d0(t.localStore,Qt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await q0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&rp(t.remoteStore,s),l}async function q0(t,e,n,r,s){t.Ua=(p,g,T)=>async function(k,M,z,B){let H=M.view.ga(z);H.ss&&(H=await ph(k.localStore,M.query,!1).then(({documents:R})=>M.view.ga(R,H)));const j=B&&B.targetChanges.get(M.targetId),ae=B&&B.targetMismatches.get(M.targetId)!=null,oe=M.view.applyChanges(H,k.isPrimaryClient,j,ae);return Ah(k,M.targetId,oe.ba),oe.snapshot}(t,p,g,T);const i=await ph(t.localStore,e,!0),a=new L0(e,i.ds),l=a.ga(i.documents),c=Hs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Ah(t,n,h.ba);const d=new F0(e,n,a);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function H0(t,e,n){const r=_e(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!ho(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xl(r.remoteStore,s.targetId),Ua(r,s.targetId)}).catch(oo)):(Ua(r,s.targetId),await Fa(r.localStore,s.targetId,!0))}async function z0(t,e){const n=_e(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xl(n.remoteStore,r.targetId))}async function up(t,e){const n=_e(t);try{const r=await h0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ba.get(i);a&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?Ne(a.Fa):s.removedDocuments.size>0&&(Ne(a.Fa),a.Fa=!1))}),await fp(n,r,e)}catch(r){await oo(r)}}function wh(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,a)=>{const l=a.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=_e(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.J_)g.ea(l)&&(h=!0)}),h&&Ll(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K0(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Ue(ie.comparator);a=a.insert(i,ht.newNoDocument(i,le.min()));const l=ye().add(i),c=new mo(le.min(),new Map,new Ue(me),a,l);await up(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Fl(r)}else await Fa(r.localStore,e,!1).then(()=>Ua(r,e,n)).catch(oo)}function Ua(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||hp(t,r)})}function hp(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(xl(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Fl(t))}function Ah(t,e,n){for(const r of n)r instanceof ap?(t.ka.addReference(r.key,e),G0(t,r)):r instanceof lp?(X("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||hp(t,r.key)):ue()}function G0(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Na.add(r),Fl(t))}function Fl(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ie(Le.fromString(e)),r=t.Ka.next();t.Ba.set(r,new B0(n)),t.La=t.La.insert(n,r),rp(t.remoteStore,new wn(Qt(kd(n.path)),r,"TargetPurposeLimboResolution",ao.oe))}}async function fp(t,e,n){const r=_e(t),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Vl.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,h){const d=_e(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,g=>O.forEach(g.Wi,T=>d.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>O.forEach(g.Gi,T=>d.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!Ur(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const T=d.us.get(g),D=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(D);d.us=d.us.insert(g,k)}}}(r.localStore,i))}async function W0(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Zd(n.localStore,e);n.currentUser=e,function(i,a){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(G.CANCELLED,a))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fp(n,r.Ts)}}function Q0(t,e){const n=_e(t),r=n.Ba.get(e);if(r&&r.Fa)return ye().add(r.key);{let s=ye();const i=n.Oa.get(e);if(!i)return s;for(const a of i){const l=n.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function dp(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=up.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K0.bind(null,e),e.Ma.R_=O0.bind(null,e.eventManager),e.Ma.Wa=N0.bind(null,e.eventManager),e}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tp(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return u0(this.persistence,new l0,e.initialUser,this.serializer)}ja(e){return new Jd(Dl.ei,this.serializer)}za(e){return new g0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class Y0 extends Hi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof qi);const r=this.persistence.referenceDelegate.garbageCollector;return new GT(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Jd(r=>qi.ei(r,n),this.serializer)}}class $a{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=W0.bind(null,this.syncEngine),await P0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V0}()}createDatastore(e){const n=tp(e.databaseInfo.databaseId),r=function(i){return new v0(i)}(e.databaseInfo);return function(i,a,l,c){return new w0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new I0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wh(this.syncEngine,n,0),function(){return mh.p()?new mh:new m0}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new U0(s,i,a,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);X("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await zs(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$a.provider={build:()=>new $a};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=VE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ia(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z0(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>yh(e.remoteStore,s)),t._onlineComponents=e}async function Z0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await ia(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===G.FAILED_PRECONDITION||s.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;xr("Error using user provided cache. Falling back to memory cache: "+n),await ia(t,new Hi)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await ia(t,new Y0(void 0));return t._offlineComponents}async function ew(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Ih(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Ih(t,new $a))),t._onlineComponents}async function tw(t){const e=await ew(t),n=e.eventManager;return n.onListen=$0.bind(null,e.syncEngine),n.onUnlisten=H0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z0.bind(null,e.syncEngine),n}function nw(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new X0({next:g=>{d.eu(),a.enqueueAndForget(()=>k0(i,p)),g.fromCache&&c.source==="server"?h.reject(new re(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new M0(l,d,{includeMetadataChanges:!0,ua:!0});return x0(i,p)}(await tw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Map;function rw(t,e,n,r){if(e===!0&&r===!0)throw new re(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rh(t){if(ie.isDocumentKey(t))throw new re(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sw(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function ja(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sw(t);throw new re(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ch({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ch(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AE;switch(r.type){case"firstParty":return new CE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bh.get(n);r&&(X("ComponentProvider","Removing Datastore"),bh.delete(n),r.terminate())}(this),Promise.resolve()}}function iw(t,e,n,r={}){var s;const i=(t=ja(t,Bl))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=lt.MOCK_USER;else{l=tv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new re(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(h)}t._authCredentials=new IE(new bd(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yo(this.firestore,e,this._query)}}class jr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jr(this.firestore,e,this._key)}}class Sr extends yo{constructor(e,n,r){super(e,n,kd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jr(this.firestore,null,new ie(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function ow(t,e,...n){if(t=fd(t),t instanceof Bl){const r=Le.fromString(e,...n);return Rh(r),new Sr(t,null,r)}{if(!(t instanceof jr||t instanceof Sr))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Rh(r),new Sr(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new np(this,"async_queue_retry"),this.fu=()=>{const r=sa();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=sa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Zn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ur(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw an("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Ml.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class gp extends Bl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sh(e),this._firestoreClient=void 0,await e}}}function aw(t,e){const n=typeof t=="object"?t:md(),r=typeof t=="string"?t:"(default)",s=El(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ev("firestore");i&&iw(s,...i)}return s}function lw(t){if(t._terminated)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cw(t),t._firestoreClient}function cw(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new qE(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pp(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new J0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(nt.fromBase64String(e))}catch(n){throw new re(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zi(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const fw=new RegExp("[~\\*/\\[\\]]");function dw(t,e,n){if(e.search(fw)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new mp(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Ph(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new re(G.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pw extends _p{data(){return super.data()}}function yp(t,e){return typeof e=="string"?dw(t,e):e instanceof mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mw{convertValue(e,n="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Fe(a.doubleValue));return new hw(i)}convertGeoPoint(e){return new uw(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=co(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ne(Xd(r));const s=new Ms(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _w extends _p{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Si extends _w{data(e={}){return super.data(e)}}class yw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Si(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Si(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Si(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:vw(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}class Ew extends mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jr(this.firestore,null,n)}}function Tw(t){t=ja(t,yo);const e=ja(t.firestore,gp),n=lw(e),r=new Ew(e);return gw(t._query),nw(n,t._query).then(s=>new yw(e,r,t,s))}(function(e,n=!0){(function(s){Br=s})(dE),Vr(new nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new gp(new bE(r.getProvider("auth-internal")),new PE(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Xn(zu,"4.7.5",e),Xn(zu,"4.7.5","esm2017")})();const ww={class:"footer"},Aw={__name:"Footer",setup(t){const e=new Date().getFullYear();return(n,r)=>(Lt(),In("footer",ww,[je("p",null,"© "+Hh(Yn(e))+" Donald Alberti. All rights reserved.",1)]))}},Iw=js(Aw,[["__scopeId","data-v-52ea8deb"]]),bw={name:"APP",components:{Navbar:zy,Footer:Iw},setup(){const t=Gn([]),e=Gn(!0),n=Gn([]),r=Ly(),s=Gn([]),i=()=>{for(n.value=[];n.value.length<3;){var p=Math.floor(Math.random()*9)+1;n.value.indexOf(p)===-1&&n.value.push(p)}};let a=null;no(async()=>{i(),(await Tw(ow(kA,"DWAwork"))).forEach(g=>{const T={idd:g.id,id:g.data().id,year:g.data().year,dimension:g.data().dimension,medium:g.data().medium,support:g.data().support,series:g.data().series,gp:g.data().gp,imgname:g.data().imgname,red:g.data().red,yellow:g.data().yellow,blue:g.data().blue,order:g.data().order,title:g.data().title};t.value.push(T)}),a=setInterval(()=>{i()},1e4),s.value=t.value.filter(g=>g.imgname!=="99"&&g.imgname!=="98"&&g.imgname!=="95"&&g.imgname!=="93"&&g.imgname!=="94"&&g.imgname!=="92"&&g.id!=="DA715"&&g.id!=="DA713"&&g.id!=="DA711"&&g.id!=="DA712"&&g.id!=="DA714"&&g.series.includes("Maquettes")).sort((g,T)=>g.series>T.series?1:-1),sl(()=>{a&&clearInterval(a)})});const l=ft(()=>Array.from(new Set(t.value.map(g=>g.support))).sort((g,T)=>g.localeCompare(T))),c=ft(()=>t.value?t.value.filter(g=>g.imgname!=="99"&&g.imgname!=="98"&&g.red==1).sort((g,T)=>g.series>T.series?1:-1):[]),h=ft(()=>t.value?t.value.filter(g=>g.imgname!=="99"&&g.imgname!=="98"&&g.blue==1).sort((g,T)=>g.series>T.series?1:-1):[]),d=ft(()=>t.value?t.value.filter(g=>g.imgname!=="99"&&g.imgname!=="98"&&g.yellow==1).sort((g,T)=>g.series>T.series?1:-1):[]);return{currentRoute:r,inventory:t,show:e,listOfSupports:l,listOfReds:c,listOfBlues:h,listOfYellows:d,initialMaquetteSelection:s,arr:n}}},Rw={id:"app"},Cw={id:"nav"},Sw={id:"banner"};function Pw(t,e,n,r,s,i){const a=ps("Navbar"),l=ps("router-view"),c=ps("Footer");return Lt(),In("div",Rw,[je("div",Cw,[e[2]||(e[2]=je("div",{id:"headerLine"},null,-1)),qe(a),je("div",Sw,[qe(a_,{name:"fadeIn"},{default:vr(()=>[r.show?(Lt(),In("div",{key:0,id:"nameBanner",onClick:e[0]||(e[0]=(...h)=>t.rollStart&&t.rollStart(...h))},e[1]||(e[1]=[je("div",null,"DONALD ALBERTI",-1),je("div",{id:"subTitle"}," (1950-) Reductive Abstraction and Color Painting ",-1)]))):Kf("",!0)]),_:1})])]),je("div",{id:"app-backgrounds",class:zt({"instant-hide":r.currentRoute.name===":Selection"})},[je("div",{class:zt(["router-bg bg-home",{"active-bg":r.currentRoute.name==="Home"}])},null,2),je("div",{class:zt(["router-bg bg-works",{"active-bg":r.currentRoute.name==="Works"}])},null,2),je("div",{class:zt(["router-bg bg-bio",{"active-bg":r.currentRoute.name==="Biography"||r.currentRoute.name==="Exhibitions"}])},null,2),je("div",{class:zt(["router-bg bg-contact",{"active-bg":r.currentRoute.name==="Contact"}])},null,2)],2),(Lt(),al(l,{key:r.currentRoute.name,arr:r.arr,initialMaquetteSelection:r.initialMaquetteSelection,listOfReds:r.listOfReds,listOfBlues:r.listOfBlues,listOfYellows:r.listOfYellows,inventory:r.inventory},null,8,["arr","initialMaquetteSelection","listOfReds","listOfBlues","listOfYellows","inventory"])),qe(c)])}const Dw=js(bw,[["render",Pw]]),Vw="modulepreload",xw=function(t){return"/"+t},Dh={},ss=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=xw(c),c in Dh)return;Dh[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Vw,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,T)=>{p.addEventListener("load",g),p.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},kw={name:"ImageItem",props:{source:{type:String,required:!0},styles:{type:String,required:!0}},setup(t){const e=Gn(t.source);return{imageUrl:e,setAltImg:()=>{e.value="@/assets/full-size/DA999.jpg"}}}},Ow={class:"image__wrapper"},Nw=["src"];function Mw(t,e,n,r,s,i){return Lt(),In("figure",Ow,[je("img",{loading:"lazy",decoding:"async",class:zt([n.styles,"img-shadow","fade-in"]),src:n.source,onError:e[0]||(e[0]=(...a)=>r.setAltImg&&r.setAltImg(...a)),alt:"-"},null,42,Nw)])}const Lw=js(kw,[["render",Mw],["__scopeId","data-v-d549cc90"]]),Fw={components:{ImageItem:Lw},props:{arr:{type:Array,required:!0},initialMaquetteSelection:{type:Array,required:!0}},name:"Home",setup(t){const e=Gn(!1),n=ft(()=>t.initialMaquetteSelection.length>=3&&t.arr.length>=3?[t.initialMaquetteSelection[t.arr[0]].id,t.initialMaquetteSelection[t.arr[1]].id,t.initialMaquetteSelection[t.arr[2]].id].map(s=>{const i=`/assets/png-Edits/${s}-edit.png`;return{id:s,src:i}}):[]);return no(()=>{window.scrollTo(0,0)}),{hover:e,displayedImages:n}}},Bw={class:"Container1",id:"home"},Uw={class:"home2"};function $w(t,e,n,r,s,i){const a=ps("ImageItem");return Lt(),In("div",Bw,[je("div",Uw,[je("div",{id:"innercontainer",onMouseover:e[0]||(e[0]=l=>r.hover=!0),onMouseleave:e[1]||(e[1]=l=>r.hover=!1),class:zt({active:r.hover})},[(Lt(!0),In(Mt,null,fm(r.displayedImages,(l,c)=>(Lt(),In("div",{key:c,id:"heroIMG"},[l.src?(Lt(),al(a,{key:0,styles:"parent-style",class:"image__item",source:l.src,alt:"random image"},null,8,["source"])):Kf("",!0)]))),128))],34)])])}const jw=js(Fw,[["render",$w],["__scopeId","data-v-e55e21e6"]]),qw=[{path:"/",name:"Home",component:jw,props:!0,meta:{next:"Works"}},{path:"/Contact",name:"Contact",props:!0,component:()=>ss(()=>import("./Contact-CHBIrPOu.js"),__vite__mapDeps([0,1])),meta:{prev:"Catalogue"}},{path:"/About/Exhibitions",name:"Exhibitions",props:!0,component:()=>ss(()=>import("./Exhibitions-Crb8_w3v.js"),__vite__mapDeps([2,3,4,5]))},{path:"/About/Biography",name:"Biography",props:!0,component:()=>ss(()=>import("./Biography-CVmQeTor.js"),__vite__mapDeps([6,7,3,4,8])),meta:{next:"Catalogue",prev:"Works"}},{path:"/Exhibitions/Works",name:"Works",props:!0,component:()=>ss(()=>import("./Works-B6JkW7Il.js"),__vite__mapDeps([9,10])),meta:{next:"Biography",prev:"Home"}},{path:"/Exhibitions/Works/:Selection",name:":Selection",props:!0,component:()=>ss(()=>import("./WorkTemplate-SbirWw5m.js"),__vite__mapDeps([11,7,12]))}],Hw=Ny({history:uy(),routes:qw});var zw="firebase",Kw="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(zw,Kw,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map,vp={activated:!1,tokenObservers:[]},Gw={initialized:!1,enabled:!1};function We(t){return qa.get(t)||Object.assign({},vp)}function Ww(t,e){return qa.set(t,e),qa.get(t)}function vo(){return Gw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="https://content-firebaseappcheck.googleapis.com/v1",Qw="exchangeRecaptchaV3Token",Yw="exchangeDebugToken",Vh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Xw=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xs,this.pending.promise.catch(n=>{}),await Zw(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xs,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Zw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Tt=new _l("appCheck","AppCheck",eA);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Ul(t){if(!We(t).activated)throw Tt.create("use-before-activation",{appName:t.name})}function Tp(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let a="";return n&&(a+=yi(n)+"d:"),r&&(a+=yi(r)+"h:"),a+=yi(s)+"m:"+yi(i)+"s",a}function yi(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const p=await s.getHeartbeatsHeader();p&&(r["X-Firebase-Client"]=p)}const i={method:"POST",body:JSON.stringify(e),headers:r};let a;try{a=await fetch(t,i)}catch(p){throw Tt.create("fetch-network-error",{originalErrorMessage:p==null?void 0:p.message})}if(a.status!==200)throw Tt.create("fetch-status-error",{httpStatus:a.status});let l;try{l=await a.json()}catch(p){throw Tt.create("fetch-parse-error",{originalErrorMessage:p==null?void 0:p.message})}const c=l.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Tt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const h=Number(c[1])*1e3,d=Date.now();return{token:l.token,expireTimeMillis:d+h,issuedAtTimeMillis:d}}function tA(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${Ep}/projects/${n}/apps/${r}:${Qw}?key=${s}`,body:{recaptcha_v3_token:e}}}function wp(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${Ep}/projects/${n}/apps/${r}:${Yw}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="firebase-app-check-database",rA=1,Fs="firebase-app-check-store",Ap="debug-token";let vi=null;function Ip(){return vi||(vi=new Promise((t,e)=>{try{const n=indexedDB.open(nA,rA);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Tt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Fs,{keyPath:"compositeKey"})}}}catch(n){e(Tt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),vi)}function sA(t){return Rp(Cp(t))}function iA(t,e){return bp(Cp(t),e)}function oA(t){return bp(Ap,t)}function aA(){return Rp(Ap)}async function bp(t,e){const r=(await Ip()).transaction(Fs,"readwrite"),i=r.objectStore(Fs).put({compositeKey:t,value:e});return new Promise((a,l)=>{i.onsuccess=c=>{a()},r.onerror=c=>{var h;l(Tt.create("storage-set",{originalErrorMessage:(h=c.target.error)===null||h===void 0?void 0:h.message}))}})}async function Rp(t){const n=(await Ip()).transaction(Fs,"readonly"),s=n.objectStore(Fs).get(t);return new Promise((i,a)=>{s.onsuccess=l=>{const c=l.target.result;i(c?c.value:void 0)},n.onerror=l=>{var c;a(Tt.create("storage-get",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Cp(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new yl("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t){if(ml()){let e;try{e=await sA(t)}catch(n){Bs.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function oa(t,e){return ml()?iA(t,e).catch(n=>{Bs.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function cA(){let t;try{t=await aA()}catch{}if(t)return t;{const e=cv();return oA(e).catch(n=>Bs.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){return vo().enabled}async function ql(){const t=vo();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function uA(){const t=ud(),e=vo();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new xs;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(cA())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={error:"UNKNOWN_ERROR"};function fA(t){return pl.encodeString(JSON.stringify(t),!1)}async function Ha(t,e=!1){const n=t.app;Ul(n);const r=We(n);let s=r.token,i;if(s&&!Er(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(Er(c)?s=c:await oa(n,void 0))}if(!e&&s&&Er(s))return{token:s.token};let a=!1;if(jl()){r.exchangeTokenPromise||(r.exchangeTokenPromise=$l(wp(n,await ql()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const c=await r.exchangeTokenPromise;return await oa(n,c),r.token=c,{token:c.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),s=await We(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Bs.warn(c.message):Bs.error(c),i=c}let l;return s?i?Er(s)?l={token:s.token,internalError:i}:l=Oh(i):(l={token:s.token},r.token=s,await oa(n,s)):l=Oh(i),a&&Dp(n,l),l}async function dA(t){const e=t.app;Ul(e);const{provider:n}=We(e);if(jl()){const r=await ql(),{token:s}=await $l(wp(e,r),t.heartbeatServiceProvider);return{token:s}}else{const{token:r}=await n.getToken();return{token:r}}}function Sp(t,e,n,r){const{app:s}=t,i=We(s),a={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,a],i.token&&Er(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),kh(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>kh(t))}function Pp(t,e){const n=We(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function kh(t){const{app:e}=t,n=We(e);let r=n.tokenRefresher;r||(r=pA(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function pA(t){const{app:e}=t;return new Jw(async()=>{const n=We(e);let r;if(n.token?r=await Ha(t,!0):r=await Ha(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=We(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Vh.RETRIAL_MIN_WAIT,Vh.RETRIAL_MAX_WAIT)}function Dp(t,e){const n=We(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Er(t){return t.expireTimeMillis-Date.now()>0}function Oh(t){return{token:fA(hA),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=We(this.app);for(const n of e)Pp(this.app,n.next);return Promise.resolve()}}function mA(t,e){return new gA(t,e)}function _A(t){return{getToken:e=>Ha(t,e),getLimitedUseToken:()=>dA(t),addTokenListener:e=>Sp(t,"INTERNAL",e),removeTokenListener:e=>Pp(t.app,e)}}const yA="@firebase/app-check",vA="0.8.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="https://www.google.com/recaptcha/api.js";function TA(t,e){const n=new xs,r=We(t);r.reCAPTCHAState={initialized:n};const s=wA(t),i=xh(!1);return i?Nh(t,e,i,s,n):bA(()=>{const a=xh(!1);if(!a)throw new Error("no recaptcha");Nh(t,e,a,s,n)}),n.promise}function Nh(t,e,n,r,s){n.ready(()=>{IA(t,e,n,r),s.resolve(n)})}function wA(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function AA(t){Ul(t);const n=await We(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=We(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function IA(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible",callback:()=>{We(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{We(t).reCAPTCHAState.succeeded=!1}}),i=We(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function bA(t){const e=document.createElement("script");e.src=EA,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;CA(this._throttleData);const s=await AA(this._app).catch(a=>{throw Tt.create("recaptcha-error")});if(!(!((e=We(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Tt.create("recaptcha-error");let i;try{i=await $l(tA(this._app,s),this._heartbeatServiceProvider)}catch(a){throw!((n=a.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=RA(Number((r=a.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Tt.create("throttled",{time:Tp(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=El(e,"heartbeat"),TA(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Hl?this._siteKey===e._siteKey:!1}}function RA(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Xw,httpStatus:t};{const n=e?e.backoffCount:0,r=pv(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function CA(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Tt.create("throttled",{time:Tp(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t=md(),e){t=fd(t);const n=El(t,"app-check");if(vo().initialized||uA(),jl()&&ql().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw Tt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return PA(t,e.provider,e.isTokenAutoRefreshEnabled),We(t).isTokenAutoRefreshEnabled&&Sp(r,"INTERNAL",()=>{}),r}function PA(t,e,n){const r=Ww(t,Object.assign({},vp));r.activated=!0,r.provider=e,r.cachedTokenPromise=lA(t).then(s=>(s&&Er(s)&&(r.token=s,Dp(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,r.provider.initialize(t)}const DA="app-check",Mh="app-check-internal";function VA(){Vr(new nr(DA,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return mA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Mh).initialize()})),Vr(new nr(Mh,t=>{const e=t.getProvider("app-check").getImmediate();return _A(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Xn(yA,vA)}VA();const xA={apiKey:"AIzaSyAydlnvV_mND-EbivDvSpDh8SaZi8bmC_0",authDomain:"donaldalbertiweb.firebaseapp.com",projectId:"donaldalbertiweb",storageBucket:"donaldalbertiweb.appspot.com",messagingSenderId:"421206639121",appId:"1:421206639121:web:aeeee299d880eae7e467b0",measurementId:"G-H28WJPDBCR"},Vp=gd(xA);SA(Vp,{provider:new Hl("6LdekOEiAAAAAB3GoQR1haz2wEpH4lgdL4_IwKaw"),isTokenAutoRefreshEnabled:!1});const kA=aw(Vp),xp=D_(Dw);xp.use(Hw);xp.mount("#app");export{Mt as F,Lw as I,a_ as T,js as _,je as a,os as b,al as c,no as d,In as e,qe as f,fm as g,Kf as h,ps as i,Hh as j,ft as k,Rf as l,Ti as m,ff as n,Lt as o,Gn as r,OA as t,Ly as u,vr as w};
