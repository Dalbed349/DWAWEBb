(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=i.Error,h=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!a(e))return h(this,t);var n=o(e,this,t);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):o(i(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return io})),n.d(e,"b",(function(){return Mo})),n.d(e,"c",(function(){return mo}));var r=n("589b"),i=n("22e5"),o=n("e691"),s=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
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
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
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
 */
let l="9.13.0";
/**
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
 */const h=new o["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=o["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=o["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=o["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends s["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class x{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(y(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class I{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new x(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.A=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class N{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
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
 */
class P{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new P(0,0))}static max(){return new M(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends j{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends j{construct(t,e,n){return new $(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $(e)}static emptyPath(){return new $([])}}
/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(F.fromString(t))}static fromName(t){return new U(F.fromString(t).popFirst(5))}static empty(){return new U(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new F(t.slice()))}}
/**
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
 */class B{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function q(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new H(i,U.empty(),e)}function z(t){return new H(t.readTime,t.key,-1)}class H{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new H(M.min(),U.empty(),-1)}static max(){return new H(M.max(),U.empty(),-1)}}function K(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=U.comparator(t.documentKey,e.documentKey),0!==n?n:R(t.largestBatchId,e.largestBatchId))}
/**
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
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
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
 */async function Q(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==G)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):X.reject(e)}static resolve(t){return new X((e,n)=>{e(t)})}static reject(t){return new X((e,n)=>{n(t)})}static waitFor(t){return new X((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next(t=>t?X.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new X((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{o[c]=t,++s,s===i&&n(o)},t=>r(t))}})}static doWhile(t,e){return new X((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
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
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class J{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
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
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */J.at=-1;class nt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rt(this.root,t,this.comparator,!1)}getReverseIterator(){return new rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rt(this.root,t,this.comparator,!0)}}class rt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:it.RED,this.left=null!=r?r:it.EMPTY,this.right=null!=i?i:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new it(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return it.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class ot{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new st(this.data.getIterator())}getIteratorFrom(t){return new st(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ot))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class st{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class at{constructor(t){this.fields=t,t.sort($.comparator)}static empty(){return new at([])}unionWith(t){let e=new ot($.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
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
 */
/**
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
 */
class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(t){if(y(!!t),"string"==typeof t){let e=0;const n=ut.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
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
 */function dt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(t){const e=t.mapValue.fields.__previous_value__;return dt(e)?pt(e):e}function gt(t){const e=lt(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
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
 */class mt{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class vt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vt&&t.projectId===this.projectId&&t.database===this.database}}function yt(t){return null==t}function bt(t){return 0===t&&1/t==-1/0}
/**
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
 */
const wt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dt(t)?4:Lt(t)?9007199254740991:10:v()}function _t(t,e){if(t===e)return!0;const n=Et(t);if(n!==Et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gt(t).isEqual(gt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=lt(t.timestampValue),r=lt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ft(t.bytesValue).isEqual(ft(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ht(t.geoPointValue.latitude)===ht(e.geoPointValue.latitude)&&ht(t.geoPointValue.longitude)===ht(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ht(t.integerValue)===ht(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ht(t.doubleValue),r=ht(e.doubleValue);return n===r?bt(n)===bt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!_t(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function Tt(t,e){return void 0!==(t.values||[]).find(t=>_t(t,e))}function Ct(t,e){if(t===e)return 0;const n=Et(t),r=Et(e);if(n!==r)return R(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ht(t.integerValue||t.doubleValue),r=ht(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return St(t.timestampValue,e.timestampValue);case 4:return St(gt(t),gt(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),r=ft(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=R(n[i],r[i]);if(0!==t)return t}return R(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(ht(t.latitude),ht(e.latitude));return 0!==n?n:R(ht(t.longitude),ht(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ct(n[i],r[i]);if(t)return t}return R(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===wt.mapValue&&e===wt.mapValue)return 0;if(t===wt.mapValue)return 1;if(e===wt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=R(r[s],o[s]);if(0!==t)return t;const e=Ct(n[r[s]],i[o[s]]);if(0!==e)return e}return R(r.length,o.length)}(t.mapValue,e.mapValue);default:throw v()}}function St(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=lt(t),r=lt(e),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function At(t){return xt(t)}function xt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=lt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=xt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${xt(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function It(t){return!!t&&"integerValue"in t}function kt(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function Dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nt(t){return!!t&&"mapValue"in t}function Rt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Rt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Nt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rt(e)}setAll(t){let e=$.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Rt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Nt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Nt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){tt(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Pt(Rt(this.value))}}
/**
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
 */
class Mt{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Mt(t,0,M.min(),M.min(),Pt.empty(),0)}static newFoundDocument(t,e,n){return new Mt(t,1,e,M.min(),n,0)}static newNoDocument(t,e){return new Mt(t,2,e,M.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new Mt(t,3,e,M.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class jt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ht=null}}function Ft(t,e=null,n=[],r=[],i=null,o=null,s=null){return new jt(t,e,n,r,i,o,s)}function Vt(t){const e=b(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+At(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),yt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>At(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>At(t)).join(",")),e.ht=t}return e.ht}function $t(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${At(e.value)}`;var e}).join(", ")}]`),yt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>At(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>At(t)).join(",")),`Target(${e})`}function Ut(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!te(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!_t(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ne(t.startAt,e.startAt)&&ne(t.endAt,e.endAt)}function Bt(t){return U.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class qt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new zt(t,e,n):"array-contains"===e?new Wt(t,n):"in"===e?new Qt(t,n):"not-in"===e?new Xt(t,n):"array-contains-any"===e?new Yt(t,n):new qt(t,e,n)}static lt(t,e,n){return"in"===e?new Ht(t,n):new Kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ct(e,this.value)):null!==e&&Et(this.value)===Et(e)&&this.ft(Ct(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zt extends qt{constructor(t,e,n){super(t,e,n),this.key=U.fromName(n.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.ft(e)}}class Ht extends qt{constructor(t,e){super(t,"in",e),this.keys=Gt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kt extends qt{constructor(t,e){super(t,"not-in",e),this.keys=Gt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Gt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>U.fromName(t.referenceValue))}class Wt extends qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return kt(e)&&Tt(e.arrayValue,this.value)}}class Qt extends qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Tt(this.value.arrayValue,e)}}class Xt extends qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Tt(this.value.arrayValue,e)}}class Yt extends qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!kt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Tt(this.value.arrayValue,t))}}class Jt{constructor(t,e){this.position=t,this.inclusive=e}}class Zt{constructor(t,e="asc"){this.field=t,this.dir=e}}function te(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ee(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?U.comparator(U.fromName(s.referenceValue),n.key):Ct(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function ne(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class re{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ie(t,e,n,r,i,o,s,a){return new re(t,e,n,r,i,o,s,a)}function oe(t){return new re(t)}function se(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ae(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ce(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ue(t){return null!==t.collectionGroup}function le(t){const e=b(t);if(null===e._t){e._t=[];const t=ce(e),n=ae(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Zt(t)),e._t.push(new Zt($.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Zt($.keyField(),t))}}}return e._t}function he(t){const e=b(t);if(!e.wt)if("F"===e.limitType)e.wt=Ft(e.path,e.collectionGroup,le(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of le(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Zt(i.field,e))}const n=e.endAt?new Jt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Jt(e.startAt.position,e.startAt.inclusive):null;e.wt=Ft(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function fe(t,e,n){return new re(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function de(t,e){return Ut(he(t),he(e))&&t.limitType===e.limitType}function pe(t){return`${Vt(he(t))}|lt:${t.limitType}`}function ge(t){return`Query(target=${$t(he(t))}; limitType=${t.limitType})`}function me(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):U.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ee(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,le(t),e))&&!(t.endAt&&!function(t,e,n){const r=ee(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,le(t),e))}(t,e)}function ve(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ye(t){return(e,n)=>{let r=!1;for(const i of le(t)){const t=be(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function be(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ct(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
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
 */function we(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bt(e)?"-0":e}}function Ee(t){return{integerValue:""+t}}
/**
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
 */class _e{constructor(){this._=void 0}}function Te(t,e,n){return t instanceof Ae?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof xe?Ie(t,e):t instanceof ke?Oe(t,e):function(t,e){const n=Se(t,e),r=Ne(n)+Ne(t.yt);return It(n)&&It(t.yt)?Ee(r):we(t.It,r)}(t,e)}function Ce(t,e,n){return t instanceof xe?Ie(t,e):t instanceof ke?Oe(t,e):n}function Se(t,e){return t instanceof De?It(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ae extends _e{}class xe extends _e{constructor(t){super(),this.elements=t}}function Ie(t,e){const n=Re(e);for(const r of t.elements)n.some(t=>_t(t,r))||n.push(r);return{arrayValue:{values:n}}}class ke extends _e{constructor(t){super(),this.elements=t}}function Oe(t,e){let n=Re(e);for(const r of t.elements)n=n.filter(t=>!_t(t,r));return{arrayValue:{values:n}}}class De extends _e{constructor(t,e){super(),this.It=t,this.yt=e}}function Ne(t){return ht(t.integerValue||t.doubleValue)}function Re(t){return kt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function Le(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof xe&&e instanceof xe||t instanceof ke&&e instanceof ke?L(t.elements,e.elements,_t):t instanceof De&&e instanceof De?_t(t.yt,e.yt):t instanceof Ae&&e instanceof Ae}(t.transform,e.transform)}class Pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pe}static exists(t){return new Pe(void 0,t)}static updateTime(t){return new Pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Me(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class je{}function Fe(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ge(t.key,Pe.none()):new Be(t.key,t.data,Pe.none());{const n=t.data,r=Pt.empty();let i=new ot($.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new qe(t.key,r,new at(i.toArray()),Pe.none())}}function Ve(t,e,n){t instanceof Be?function(t,e,n){const r=t.value.clone(),i=He(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof qe?function(t,e,n){if(!Me(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=He(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ze(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function $e(t,e,n,r){return t instanceof Be?function(t,e,n,r){if(!Me(t.precondition,e))return n;const i=t.value.clone(),o=Ke(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof qe?function(t,e,n,r){if(!Me(t.precondition,e))return n;const i=Ke(t.fieldTransforms,r,e),o=e.data;return o.setAll(ze(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Me(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ue(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Le(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Be extends je{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qe extends je{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ze(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function He(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ce(s,a,n[i]))}return r}function Ke(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Te(t,o,e))}return r}class Ge extends je{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */
class We{constructor(t){this.count=t}}
/**
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
 */var Qe,Xe;function Ye(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Qe.OK:return w.OK;case Qe.CANCELLED:return w.CANCELLED;case Qe.UNKNOWN:return w.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return w.INTERNAL;case Qe.UNAVAILABLE:return w.UNAVAILABLE;case Qe.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Qe.NOT_FOUND:return w.NOT_FOUND;case Qe.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Qe.ABORTED:return w.ABORTED;case Qe.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Qe.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Xe=Qe||(Qe={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}
/**
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
 */const Ze=new nt(U.comparator);function tn(){return Ze}const en=new nt(U.comparator);function nn(...t){let e=en;for(const n of t)e=e.insert(n.key,n);return e}function rn(t){let e=en;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function on(){return an()}function sn(){return an()}function an(){return new Je(t=>t.toString(),(t,e)=>t.isEqual(e))}new nt(U.comparator);const cn=new ot(U.comparator);function un(...t){let e=cn;for(const n of t)e=e.add(n);return e}const ln=new ot(R);function hn(){return ln}
/**
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
 */class fn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new fn(M.min(),r,hn(),tn(),un())}}class dn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dn(n,e,un(),un(),un())}}
/**
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
 */class pn{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class gn{constructor(t,e){this.targetId=t,this.At=e}}class mn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class vn{constructor(){this.Rt=0,this.bt=wn(),this.Pt=ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=un(),e=un(),n=un();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new dn(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=wn()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class yn{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=tn(),this.qt=bn(),this.Kt=new ot(R)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach((t,n)=>{this.Ht(n)&&e(n)})}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(Bt(t))if(0===n){const n=new U(t.path);this.jt(e,n,Mt.newNoDocument(n,M.min()))}else y(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Bt(i.target)){const e=new U(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,Mt.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}});let n=un();this.qt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.Ut.forEach((e,n)=>n.setReadTime(t));const r=new fn(t,e,this.Kt,this.Ut,n);return this.Ut=tn(),this.qt=bn(),this.Kt=new ot(R),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new vn,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new ot(R),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new vn),this.Bt.getRemoteKeysForTarget(t).forEach(e=>{this.jt(t,e,null)})}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function bn(){return new nt(U.comparator)}function wn(){return new nt(U.comparator)}
/**
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
 */const En=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),_n=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Tn{constructor(t,e){this.databaseId=t,this.gt=e}}function Cn(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sn(t,e){return t.gt?e.toBase64():e.toUint8Array()}function An(t){return y(!!t),M.fromTimestamp(function(t){const e=lt(t);return new P(e.seconds,e.nanos)}(t))}function xn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function In(t){const e=F.fromString(t);return y(Kn(e)),e}function kn(t,e){const n=In(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(Rn(n))}function On(t,e){return xn(t.databaseId,e)}function Dn(t){const e=In(t);return 4===e.length?F.emptyPath():Rn(e)}function Nn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rn(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.gt?(y(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?w.UNKNOWN:Ye(t.code);return new E(e,t.message||"")}(s);n=new mn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(t,r.document.name),o=An(r.document.updateTime),s=new Pt({mapValue:{fields:r.document.fields}}),a=Mt.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kn(t,r.document),o=r.readTime?An(r.readTime):M.min(),s=Mt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new pn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kn(t,r.document),o=r.removedTargetIds||[];n=new pn([],o,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new We(r),o=t.targetId;n=new gn(o,i)}}return n}function Pn(t,e){return{documents:[On(t,e.path)]}}function Mn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=On(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=On(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(Dt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Dt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Un(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Bn(t.field),direction:$n(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.gt||yt(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function jn(t){let e=Dn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Vn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Zt(qn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Jt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Jt(n,e)}(n.endAt)),ie(e,i,s,o,a,"F",c,u)}function Fn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Vn(t){return t?void 0!==t.unaryFilter?[Hn(t)]:void 0!==t.fieldFilter?[zn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Vn(t)).reduce((t,e)=>t.concat(e)):v():[]}function $n(t){return En[t]}function Un(t){return _n[t]}function Bn(t){return{fieldPath:t.canonicalString()}}function qn(t){return $.fromServerFormat(t.fieldPath)}function zn(t){return qt.create(qn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Hn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qn(t.unaryFilter.field);return qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qn(t.unaryFilter.field);return qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qn(t.unaryFilter.field);return qt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qn(t.unaryFilter.field);return qt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Kn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */const Gn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Wn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Qn=Wn;
/**
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
 */
/**
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
 */
class Xn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ve(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$e(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sn();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=Fe(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),un())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Ue(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Ue(t,e))}}
/**
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
 */
class Yn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Jn{constructor(t,e,n,r,i=M.min(),o=M.min(),s=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class Zn{constructor(t){this.re=t}}function tr(t){const e=jn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?fe(e,e.limit,"L"):e}
/**
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
 */
class er{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(ht(t.integerValue));else if("doubleValue"in t){const n=ht(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),bt(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(""+(n.seconds||"")),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(ft(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Lt(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):v()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),U.fromName(t).path.forEach(t=>{this.le(e,60),this.Ie(t,e)})}le(t,e){t.fe(e)}we(t){t.fe(2)}}er.Te=new er;
/**
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
 */
class nr{constructor(){this.Ye=new rr}addToCollectionParentIndex(t,e){return this.Ye.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve(H.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}}class rr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ot(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ot(F.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class ir{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ir(t,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */ir.DEFAULT_COLLECTION_PERCENTILE=10,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ir.DEFAULT=new ir(41943040,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ir.DISABLED=new ir(-1,0,0);
/**
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
 */
class or{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new or(0)}static vn(){return new or(-1)}}
/**
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
 */
/**
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
 */
class sr{constructor(){this.changes=new Je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class ar{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class cr{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&$e(n.mutation,t,at.empty(),P.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,un()).next(()=>e))}getLocalViewOfDocuments(t,e,n=un()){const r=on();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=nn();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=on();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,un()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=tn();const o=an(),s=an();return e.forEach((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof qe)?i=i.insert(e.key,e):void 0!==s&&(o.set(e.key,s.mutation.getFieldMask()),$e(s.mutation,e,s.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>o.set(t,e)),e.forEach((t,e)=>{var n;return s.set(t,new ar(e,null!==(n=o.get(t))&&void 0!==n?n:null))}),s))}recalculateAndSaveOverlays(t,e){const n=an();let r=new nt((t,e)=>t-e),i=un();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||at.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||un()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=sn();c.forEach(t=>{if(!i.has(t)){const r=Fe(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return X.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return U.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ue(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):X.resolve(on());let s=-1,a=i;return o.next(e=>X.forEach(e,(e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?X.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,un())).next(t=>({batchId:s,changes:rn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=nn();return this.indexManager.getCollectionParents(t,r).next(o=>X.forEach(o,o=>{const s=function(t,e){return new re(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Mt.newInvalidDocument(n)))});let n=nn();return r.forEach((r,i)=>{const o=t.get(r);void 0!==o&&$e(o.mutation,i,at.empty(),P.now()),me(e,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):X.resolve(Mt.newInvalidDocument(e))}}
/**
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
 */class ur{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return X.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:An(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:tr(t.bundledQuery),readTime:An(t.readTime)}}(e)),X.resolve()}}
/**
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
 */class lr{constructor(){this.overlays=new nt(U.comparator),this.es=new Map}getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=on();return X.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.ue(t,e,r)}),X.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const r=on(),i=e.length+1,o=new U(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return X.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new nt((t,e)=>t-e);const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=on(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=on(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>s.set(t,e)),s.size()>=r)break;return X.resolve(s)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Yn(e,n));let i=this.es.get(e);void 0===i&&(i=un(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
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
 */class hr{constructor(){this.ns=new ot(fr.ss),this.rs=new ot(fr.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new fr(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new fr(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new U(new F([])),n=new fr(e,t),r=new fr(e,t+1),i=[];return this.rs.forEachInRange([n,r],t=>{this.cs(t),i.push(t.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new U(new F([])),n=new fr(e,t),r=new fr(e,t+1);let i=un();return this.rs.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new fr(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fr{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return U.comparator(t.key,e.key)||R(t._s,e._s)}static os(t,e){return R(t._s,e._s)||U.comparator(t.key,e.key)}}
/**
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
 */class dr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ot(fr.ss)}checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xn(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new fr(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return X.resolve(o)}lookupMutationBatch(t,e){return X.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return X.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fr(e,0),r=new fr(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],t=>{const e=this.ys(t._s);i.push(e)}),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ot(R);return e.forEach(t=>{const e=new fr(t,0),r=new fr(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],t=>{n=n.add(t._s)})}),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;U.isDocumentKey(i)||(i=i.child(""));const o=new fr(new U(i),0);let s=new ot(R);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t._s)),!0)},o),X.resolve(this.Is(s))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(e.mutations,r=>{const i=new fr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new fr(e,0),r=this.gs.firstAfterOrEqual(n);return X.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class pr{constructor(t){this.Es=t,this.docs=new nt(U.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():Mt.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Mt.newInvalidDocument(t))}),X.resolve(n)}getAllFromCollection(t,e,n){let r=tn();const i=new U(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||K(z(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return X.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}As(t,e){return X.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new gr(this)}getSize(t){return X.resolve(this.size)}}class gr extends sr{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)}),X.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
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
 */class mr{constructor(t){this.persistence=t,this.Rs=new Je(t=>Vt(t),Ut),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.bs=0,this.Ps=new hr,this.targetCount=0,this.vs=or.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),X.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new or(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.Dn(e),X.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),X.waitFor(i).next(()=>r)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),X.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.Ps.containsKey(e))}}
/**
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
 */class vr{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new J(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new mr(this),this.indexManager=new nr,this.remoteDocumentCache=function(t){return new pr(t)}(t=>this.referenceDelegate.xs(t)),this.It=new Zn(e),this.Ns=new ur(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new dr(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new yr(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(t=>this.referenceDelegate.Os(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ms(t,e){return X.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class yr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class br{constructor(t){this.persistence=t,this.Fs=new hr,this.$s=null}static Bs(t){return new br(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),X.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,n=>{const r=U.fromPath(n);return this.Us(t,r).next(t=>{t||e.removeEntry(r,M.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.Us(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}Us(t,e){return X.or([()=>X.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
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
 */
/**
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
 */
class wr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=un(),r=un();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wr(t,e.fromCache,n,r)}}
/**
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
 */class Er{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next(i=>i||this.Oi(t,e,r,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(se(e))return X.resolve(null);let n=he(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=fe(e,null,"F"),n=he(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=un(...r);return this.Ni.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const o=this.Fi(e,r);return this.$i(e,o,i,n.readTime)?this.ki(t,fe(e,null,"F")):this.Bi(t,o,e,n)}))})))}Oi(t,e,n,r){return se(e)||r.isEqual(M.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(i=>{const s=this.Fi(e,i);return this.$i(e,s,n,r)?this.Mi(t,e):(f()<=o["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ge(e)),this.Bi(t,s,e,q(r,-1)))})}Fi(t,e){let n=new ot(ye(t));return e.forEach((e,r)=>{me(t,r)&&(n=n.add(r))}),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return f()<=o["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",ge(e)),this.Ni.getDocumentsMatchingQuery(t,e,H.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
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
 */class _r{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new nt(R),this.qi=new Je(t=>Vt(t),Ut),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ui))}}function Tr(t,e,n,r){return new _r(t,e,n,r)}async function Cr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],o=[];let s=un();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next(t=>({ji:t,removedBatchIds:i,addedBatchIds:o}))})})}function Sr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function Ar(t,e){const n=b(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const s=[];e.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Cs.removeMatchingKeys(t,o.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,o.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ct.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Cs.updateTargetData(t,u))});let a=tn(),c=un();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(xr(t,o,e.documentUpdates).next(t=>{a=t.Wi,c=t.zi})),!r.isEqual(M.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return X.waitFor(s).next(()=>o.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ui=i,t))}function xr(t,e,n){let r=un(),i=un();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=tn();return n.forEach((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)}),{Wi:r,zi:i}})}function Ir(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Cs.getTargetData(t,e).next(i=>i?(r=i,X.resolve(r)):n.Cs.allocateTargetId(t).next(i=>(r=new Jn(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t})}async function kr(t,e,n){const r=b(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Y(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Or(t,e,n){const r=b(t);let i=M.min(),o=un();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.qi.get(n);return void 0!==i?X.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,he(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:M.min(),n?o:un())).next(t=>(Dr(r,ve(e),t),{documents:t,Hi:o})))}function Dr(t,e,n){let r=t.Ki.get(e)||M.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ki.set(e,r)}class Nr{constructor(){this.activeTargetIds=hn()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rr{constructor(){this.Lr=new Nr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Nr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Lr{qr(t){}shutdown(){}}
/**
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
 */class Pr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Mr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class jr{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
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
 */class Fr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const o=this.ho(t,e);d("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(t,o,s,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",o,"request:",n),e})}_o(t,e,n,r,i,o){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=Mr[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.setWithCredentials(!0),s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),o(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(w.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new E(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),o=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.lo(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const c=r.join("");d("Connection","Creating WebChannel: "+c,s);const u=i.createWebChannel(c,s);let l=!1,h=!1;const f=new jr({Hr:t=>{h?d("Connection","Not sending because WebChannel is closed:",t):(l||(d("Connection","Opening WebChannel transport."),u.open(),l=!0),d("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a["f"].EventType.OPEN,()=>{h||d("Connection","WebChannel transport opened.")}),p(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,d("Connection","WebChannel transport closed"),f.io())}),p(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),f.io(new E(w.UNAVAILABLE,"The operation could not be completed")))}),p(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Qe[t];if(void 0!==e)return Ye(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.io(new E(e,n)),u.close()}else d("Connection","WebChannel received:",n),f.ro(n)}}),p(o,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}
/**
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
 */
/**
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
 */function Vr(){return"undefined"!=typeof document?document:null}
/**
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
 */function $r(t){return new Tn(t,!0)}class Ur{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */class Br{constructor(t,e,n,r,i,o,s,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ur(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.So===e&&this.Go(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)})})}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.Qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget(()=>this.So===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qr extends Br{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.It=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=Ln(this.It,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?An(e.readTime):M.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Nn(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=Bt(r)?{documents:Pn(t,r)}:{query:Mn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Sn(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=Cn(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=Fn(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Nn(this.It),e.removeTarget=t,this.Bo(e)}}
/**
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
 */
class zr extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,e,n,i,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.nu=!0}}class Hr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+t.toString()),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(e),this.ou=!1):d("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
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
 */class Kr{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(t=>{n.enqueueAndForget(async()=>{ei(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e._u.add(4),await Wr(e),e.gu.set("Unknown"),e._u.delete(4),await Gr(e)}(this))})}),this.gu=new Hr(n,r)}}async function Gr(t){if(ei(t))for(const e of t.wu)await e(!0)}async function Wr(t){for(const e of t.wu)await e(!1)}function Qr(t,e){const n=b(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ti(n)?Zr(n):ui(n).ko()&&Yr(n,e))}function Xr(t,e){const n=b(t),r=ui(n);n.du.delete(e),r.ko()&&Jr(n,e),0===n.du.size&&(r.ko()?r.Fo():ei(n)&&n.gu.set("Unknown"))}function Yr(t,e){t.yu.Mt(e.targetId),ui(t).zo(e)}function Jr(t,e){t.yu.Mt(e),ui(t).Ho(e)}function Zr(t){t.yu=new yn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ui(t).start(),t.gu.uu()}function ti(t){return ei(t)&&!ui(t).No()&&t.du.size>0}function ei(t){return 0===b(t)._u.size}function ni(t){t.yu=void 0}async function ri(t){t.du.forEach((e,n)=>{Yr(t,e)})}async function ii(t,e){ni(t),ti(t)?(t.gu.hu(e),Zr(t)):t.gu.set("Unknown")}async function oi(t,e,n){if(t.gu.set("Online"),e instanceof mn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await si(t,n)}else if(e instanceof pn?t.yu.Gt(e):e instanceof gn?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(M.min()))try{const e=await Sr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),Jr(t,e);const r=new Jn(n.target,e,1,n.sequenceNumber);Yr(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await si(t,e)}}async function si(t,e,n){if(!Y(e))throw e;t._u.add(1),await Wr(t),t.gu.set("Offline"),n||(n=()=>Sr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Gr(t)})}async function ai(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=ei(n);n._u.add(3),await Wr(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Gr(n)}async function ci(t,e){const n=b(t);e?(n._u.delete(2),await Gr(n)):e||(n._u.add(2),await Wr(n),n.gu.set("Unknown"))}function ui(t){return t.pu||(t.pu=function(t,e,n){const r=b(t);return r.su(),new qr(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
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
 */}(t.datastore,t.asyncQueue,{Yr:ri.bind(null,t),Zr:ii.bind(null,t),Wo:oi.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),ti(t)?Zr(t):t.gu.set("Unknown")):(await t.pu.stop(),ni(t))})),t.pu}
/**
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
 */
class li{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new li(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hi(t,e){if(p("AsyncQueue",`${e}: ${t}`),Y(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class fi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||U.comparator(e.key,n.key):(t,e)=>U.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new fi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new fi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class di{constructor(){this.Tu=new nt(U.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal((e,n)=>{t.push(n)}),t}}class pi{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach(t=>{o.push({type:0,doc:t})}),new pi(t,e,fi.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&de(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class gi{constructor(){this.Au=void 0,this.listeners=[]}}class mi{constructor(){this.queries=new Je(t=>pe(t),de),this.onlineState="Unknown",this.Ru=new Set}}async function vi(t,e){const n=b(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new gi),i)try{o.Au=await n.onListen(r)}catch(t){const n=hi(t,`Initialization of query '${ge(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.bu(n.onlineState),o.Au&&e.Pu(o.Au)&&Ei(n)}async function yi(t,e){const n=b(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(i)&&(r=!0);e.Au=i}}r&&Ei(n)}function wi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Ei(t){t.Ru.forEach(t=>{t.next()})}class _i{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new pi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=pi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
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
 */
/**
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
 */
class Ti{constructor(t){this.key=t}}class Ci{constructor(t){this.key=t}}class Si{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=un(),this.mutatedKeys=un(),this.Gu=ye(t),this.Qu=new fi(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new di,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=me(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const o=e?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new pi(this.query,t.Qu,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new di,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=un(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new Ci(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new Ti(n))}),e}tc(t){this.Uu=t.Hi,this.Ku=un();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return pi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Ai{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xi{constructor(t){this.key=t,this.nc=!1}}class Ii{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Je(t=>pe(t),de),this.rc=new Map,this.oc=new Set,this.uc=new nt(U.comparator),this.cc=new Map,this.ac=new hr,this.hc={},this.lc=new Map,this.fc=or.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ki(t,e){const n=qi(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const t=await Ir(n.localStore,he(e));n.isPrimaryClient&&Qr(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Oi(n,e,r,"current"===o,t.resumeToken)}return i}async function Oi(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await Or(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return ji(t,e.targetId,s.Xu),s.snapshot}(t,e,n,r);const o=await Or(t.localStore,e,!0),s=new Si(e,o.Hi),a=s.Wu(o.documents),c=dn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);ji(t,n,u.Xu);const l=new Ai(e,n,s);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Di(t,e){const n=b(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(t=>!de(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xr(n.remoteStore,r.targetId),Pi(n,r.targetId)}).catch(Q)):(Pi(n,r.targetId),await kr(n.localStore,r.targetId,!0))}async function Ni(t,e){const n=b(t);try{const t=await Ar(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.cc.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?y(r.nc):t.removedDocuments.size>0&&(y(r.nc),r.nc=!1))}),await $i(n,t,e)}catch(t){await Q(t)}}function Ri(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.bu(e)&&(r=!0)}),r&&Ei(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Li(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let t=new nt(U.comparator);t=t.insert(o,Mt.newNoDocument(o,M.min()));const n=un().add(o),i=new fn(M.min(),new Map,new ot(R),t,n);await Ni(r,i),r.uc=r.uc.remove(o),r.cc.delete(e),Vi(r)}else await kr(r.localStore,e,!1).then(()=>Pi(r,e,n)).catch(Q)}function Pi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||Mi(t,e)})}function Mi(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Xr(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Vi(t))}function ji(t,e,n){for(const r of n)r instanceof Ti?(t.ac.addReference(r.key,e),Fi(t,r)):r instanceof Ci?(d("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Mi(t,r.key)):v()}function Fi(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(d("SyncEngine","New document in limbo: "+n),t.oc.add(r),Vi(t))}function Vi(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new U(F.fromString(e)),r=t.fc.next();t.cc.set(r,new xi(n)),t.uc=t.uc.insert(n,r),Qr(t.remoteStore,new Jn(he(oe(n.path)),r,2,J.at))}}async function $i(t,e,n){const r=b(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((t,a)=>{s.push(r._c(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=wr.Ci(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>X.forEach(e,e=>X.forEach(e.Si,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>X.forEach(e.Di,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Y(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,o))}async function Ui(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Cr(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await $i(n,t.ji)}}function Bi(t,e){const n=b(t),r=n.cc.get(e);if(r&&r.nc)return un().add(r.key);{let t=un();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function qi(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ni.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Li.bind(null,e),e.sc.Wo=bi.bind(null,e.eventManager),e.sc.wc=wi.bind(null,e.eventManager),e}class zi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=$r(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Tr(this.persistence,new Er,t.initialUser,this.It)}yc(t){return new vr(br.Bs,this.It)}gc(t){return new Rr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ri(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ui.bind(null,this.syncEngine),await ci(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new mi}createDatastore(t){const e=$r(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Fr(r));var r;return function(t,e,n,r){return new zr(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ri(this.syncEngine,t,0),o=Pr.C()?new Pr:new Lr,new Kr(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Ii(t,e,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Wr(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Ki(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gi(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wi(t){if(U.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Xi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qi(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
const Yi=new Map;class Ji{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Gi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Zi{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new C;switch(t.type){case"gapi":const e=t.client;return new I(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yi.get(t);e&&(d("ComponentProvider","Removing Datastore"),Yi.delete(t),e.terminate())}(this),Promise.resolve()}}function to(t,e,n,r={}){var i;const o=(t=Xi(t,Zi))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(s["g"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(o)}t._authCredentials=new S(new T(e,n))}}
/**
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
 */class eo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ro(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new eo(this.firestore,t,this._key)}}class no{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new no(this.firestore,t,this._query)}}class ro extends no{constructor(t,e,n){super(t,e,oe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new eo(this.firestore,null,new U(t))}withConverter(t){return new ro(this.firestore,t,this._path)}}function io(t,e,...n){if(t=Object(s["l"])(t),Ki("collection","path",e),t instanceof Zi){const r=F.fromString(e,...n);return Wi(r),new ro(t,null,r)}{if(!(t instanceof eo||t instanceof ro))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Wi(r),new ro(t.firestore,null,r)}}
/**
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
 */
/**
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
 */
class oo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
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
 */
/**
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
 */
class so{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ao(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Cr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function co(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uo(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>ai(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ai(e.remoteStore,n)),t.onlineComponents=e}async function uo(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await ao(t,new zi)),t.offlineComponents}async function lo(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await co(t,new Hi)),t.onlineComponents}async function ho(t){const e=await lo(t),n=e.eventManager;return n.onListen=ki.bind(null,e.syncEngine),n.onUnlisten=Di.bind(null,e.syncEngine),n}function fo(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new oo({next:n=>{e.enqueueAndForget(()=>yi(t,s)),n.fromCache&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new _i(n,o,{includeMetadataChanges:!0,Nu:!0});return vi(t,s)}(await ho(t),t.asyncQueue,e,n,r)),r.promise}class po{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ur(this,"async_queue_retry"),this.Wc=()=>{const t=Vr();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Vr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Vr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const e=new _;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Y(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=li.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.qc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class go extends Zi{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new po,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yo(this),this._firestoreClient.terminate()}}function mo(t,e){const n="object"==typeof t?t:Object(r["e"])(),i="string"==typeof t?t:e||"(default)",o=Object(r["b"])(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const t=Object(s["j"])("firestore");t&&to(o,...t)}return o}function vo(t){return t._firestoreClient||yo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yo(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new mt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new so(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
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
 */
/**
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
 */
class bo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bo(ct.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new bo(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class wo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Eo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
/**
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
 */const _o=new RegExp("[~\\*/\\[\\]]");function To(t,e,n){if(e.search(_o)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wo(...e.split("."))._internalPath}catch(r){throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Co(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}
/**
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
 */
class So{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new eo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ao(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ao extends So{data(){return super.data()}}function xo(t,e){return"string"==typeof e?To(t,e):e instanceof wo?e._internalPath:e._delegate._internalPath}
/**
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
 */function Io(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
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
 */
class ko{convertValue(t,e="none"){switch(Et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return tt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Eo(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gt(t));default:return null}}convertTimestamp(t){const e=lt(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);y(Kn(n));const r=new vt(n.get(1),n.get(3)),i=new U(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */
/**
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
 */
class Oo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Do extends So{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(xo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class No extends Do{data(t={}){return super.data(t)}}class Ro{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Oo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new No(this._firestore,this._userDataWriter,n.key,n,new Oo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new No(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Oo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new No(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Oo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:Lo(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Lo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}class Po extends ko{constructor(t){super(),this.firestore=t}convertBytes(t){return new bo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new eo(this.firestore,null,e)}}function Mo(t){t=Xi(t,no);const e=Xi(t.firestore,go),n=vo(e),r=new Po(e);return Io(t._query),fo(n,t._query).then(n=>new Ro(e,r,t,n))}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new go(new A(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vt(t.options.projectId,e)}
/**
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
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(c,"3.7.2",t),Object(r["g"])(c,"3.7.2","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:s(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return $})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return _})),n.d(e,"j",(function(){return E})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return U})),n.d(e,"m",(function(){return l})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return f})),n.d(e,"p",(function(){return N})),n.d(e,"q",(function(){return P})),n.d(e,"r",(function(){return p}));
/**
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
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function f(){return!h()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d(){return"object"===typeof indexedDB}function p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
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
 */const m=()=>g().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof r)return;const t=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},y=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},b=()=>{try{return m()||v()||y()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},w=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config};
/**
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
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
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
 */function C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
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
 */const S="FirebaseError";class A extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?I(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new A(r,s,n);return a}}function I(t,e){return t.replace(k,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
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
 */function O(t){return JSON.parse(t)}
/**
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
 */
const D=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=O(u(o[0])||""),n=O(u(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},N=function(t){const e=D(t).claims;return"object"===typeof e&&e.hasOwnProperty("iat")?e["iat"]:null};function R(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(L(n)&&L(o)){if(!R(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
const P=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})},M=1e3,j=2,F=144e5,V=.5;function $(t,e=M,n=j){const r=e*Math.pow(n,t),i=Math.round(V*r*(Math.random()-.5)*2);return Math.min(F,r+i)}
/**
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
 */
/**
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
 */
function U(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("4362"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),f=n("35a1"),d=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,v,y,b,w,E,_,T=n&&n.that,C=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),x=i(e,T),I=function(t){return r&&d(r,"normal",t),new g(!0,t)},k=function(t){return C?(s(t),A?x(t[0],t[1],I):x(t[0],t[1])):A?x(t,I):x(t)};if(S)r=t;else{if(v=f(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(w=k(t[y]),w&&l(m,w))return w;return new g(!1)}r=h(t,v)}E=r.next;while(!(_=o(E,r)).done){try{w=k(_.value)}catch(O){d(r,"throw",O)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("5a34"),s=n("1d80"),a=n("577e"),c=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(a(s(this)),a(o(t)),arguments.length>1?arguments[1]:void 0)}})},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.13.0";
/**
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
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var v=m("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var _=/-(\w)/g,T=E((function(t){return t.replace(_,(function(t,e){return e?e.toUpperCase():""}))})),C=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,A=E((function(t){return t.replace(S,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function I(t,e){return t.bind(e)}var k=Function.prototype.bind?I:x;function O(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function D(t,e){for(var n in e)t[n]=e[n];return t}function N(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function R(t,e,n){}var L=function(t,e,n){return!1},P=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return M(t[n],e[n])}))}catch(u){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var V="data-server-rendered",$=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:R,parsePlatformTagName:P,mustUseProp:L,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+q.source+".$_\\d]");function G(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,Q="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Y&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,at)}catch(Cs){}var ct=function(){return void 0===W&&(W=!X&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,ft="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var dt=R,pt=0,gt=function(){this.id=pt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){y(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var mt=[];function vt(t){mt.push(t),gt.target=t}function yt(){mt.pop(),gt.target=mt[mt.length-1]}var bt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var Et=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function _t(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ct=Array.prototype,St=Object.create(Ct),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach((function(t){var e=Ct[t];H(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var xt=Object.getOwnPropertyNames(St),It=!0;function kt(t){It=t}var Ot=function(t){this.value=t,this.dep=new gt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Q?Dt(t,St):Nt(t,St,xt),this.observeArray(t)):this.walk(t)};function Dt(t,e){t.__proto__=e}function Nt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];H(t,o,e[o])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:It&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Lt(t,e,n,r,i){var o=new gt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&jt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Rt(e),o.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&jt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Lt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var Ft=B.optionMergeStrategies;function Vt(t,e){if(!e)return t;for(var n,r,i,o=ft?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&l(r)&&l(i)&&Vt(r,i):Pt(t,n,i));return t}function $t(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Vt(r,i):i}:e?t?function(){return Vt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ut(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Bt(n):n}function Bt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function qt(t,e,n,r){var i=Object.create(t||null);return e?D(i,e):i}Ft.data=function(t,e,n){return n?$t(t,e,n):e&&"function"!==typeof e?t:$t(t,e)},U.forEach((function(t){Ft[t]=Ut})),$.forEach((function(t){Ft[t+"s"]=qt})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in D(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return D(i,t),e&&D(i,e),i},Ft.provide=$t;var zt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=T(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=T(a),s[o]=l(i)?i:{type:i};else 0;t.props=s}}function Kt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?D({from:o},s):{from:s}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Kt(e,n),Gt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Wt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)w(t,o)||a(o);function a(r){var i=Ft[r]||zt;s[r]=i(t[r],e[r],n,r)}return s}function Qt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var o=T(n);if(w(i,o))return i[o];var s=C(o);if(w(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Xt(t,e,n,r){var i=e[t],o=!w(n,t),s=n[t],a=ee(Boolean,i.type);if(a>-1)if(o&&!w(i,"default"))s=!1;else if(""===s||s===A(t)){var c=ee(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Yt(r,i,t);var u=It;kt(!0),Rt(s),kt(u)}return s}function Yt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){vt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Cs){ie(Cs,r,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Cs){ne(Cs,r,i)}return o}function ie(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(Cs){Cs!==t&&oe(Cs,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!Y||"undefined"===typeof console)throw t;console.error(t)}var se,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();se=function(){he.then(le),rt&&setTimeout(R)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var fe=1,de=new MutationObserver(le),pe=document.createTextNode(String(fe));de.observe(pe,{characterData:!0}),se=function(){fe=(fe+1)%2,pe.data=String(fe)},ae=!0}function ge(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Cs){ne(Cs,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function ve(t){ye(t,me),me.clear()}function ye(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ye(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ye(t[r[n]],e)}}}var be=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function Ee(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=we(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function _e(t,e,n){var s;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=we([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=we([a,c]),s.merged=!0,t[e]=s}function Te(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var l=A(u);Ce(s,c,u,l,!0)||Ce(s,a,u,l,!1)}return s}}function Ce(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ae(t){return a(t)?[_t(t)]:Array.isArray(t)?Ie(t):void 0}function xe(t){return i(t)&&i(t.text)&&s(t.isComment)}function Ie(t,e){var n,s,c,u,l=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=Ie(s,(e||"")+"_"+n),xe(s[0])&&xe(u)&&(l[c]=_t(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?xe(u)?l[c]=_t(u.text+s):""!==s&&l.push(_t(s)):xe(s)&&xe(u)?l[c]=_t(u.text+s.text):(o(t._isVList)&&i(s.tag)&&r(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+n+"__"),l.push(s)));return l}function ke(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=De(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach((function(n){Lt(t,n,e[n])})),kt(!0))}function De(t,e){if(t){for(var n=Object.create(null),r=ft?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&w(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ne(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Re)&&delete n[u];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Le(t){return t.isComment&&t.asyncFactory}function Pe(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Me(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=je(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",s),H(i,"$key",a),H(i,"$hasNormal",o),i}function Me(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ae(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Le(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,o,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ft&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ve(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function $e(t){return Qt(this.$options,"filters",t,!0)||P}function Ue(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Be(t,e,n,r,i){var o=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?Ue(i,r):o?Ue(o,t):r?A(r)!==e:void 0===t}function qe(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=N(n));var s=function(s){if("class"===s||"style"===s||v(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||B.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(s),u=A(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=t.on||(t.on={});l["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ke(r,"__static__"+t,!1)),r}function He(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function We(t,e){if(e)if(l(e)){var n=t.on=t.on?D({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Qe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Qe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=He,t._n=g,t._s=p,t._l=Fe,t._t=Ve,t._q=M,t._i=j,t._m=ze,t._f=$e,t._k=Be,t._b=qe,t._v=_t,t._e=Et,t._u=Qe,t._g=We,t._d=Xe,t._p=Ye}function Ze(t,e,r,i,s){var a,c=this,u=s.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=De(u.inject,i),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=Ne(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=dn(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return dn(a,t,e,n,r,h)}}function tn(t,e,r,o,s){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,s,o,t),f=a.render.call(null,h._c,h);if(f instanceof bt)return en(f,r,h.parent,a,h);if(Array.isArray(f)){for(var d=Ae(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=en(d[g],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var o=Tt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Dn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Mn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Vn(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,u),void 0===t))return _n(l,e,n,s,a);e=e||{},_r(t),i(e.model)&&ln(t.options,e);var h=Te(e,t,a);if(o(t.options.functional))return tn(t,h,e,n,s);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cn(e);var p=t.options.name||a,g=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:s},l);return g}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?un(o,i):o)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,fn=2;function dn(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=fn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Et();if(i(n)&&i(n.is)&&(e=n.is),!e)return Et();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===fn?r=Ae(r):o===hn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),s=B.isReservedTag(e)?new bt(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Qt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):s=sn(e,n,t,r);return Array.isArray(s)?s:i(s)?(i(a)&&gn(s,a),i(n)&&mn(n),s):Et()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function mn(t){c(t.style)&&ve(t.style),c(t.class)&&ve(t.class)}function vn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ne(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return dn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return dn(t,e,n,r,i,!0)};var o=r&&r.data;Lt(t,"$attrs",o&&o.attrs||n,null,!0),Lt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function wn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Pe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Cs){ne(Cs,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=Et()),t.parent=i,t}}function En(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function _n(t,e,n,r,i){var o=Et();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Tn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(s,n)}));var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=F((function(n){t.resolved=En(n,e),a?s.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),g=t(f,p);return c(g)&&(d(g)?r(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),i(g.error)&&(t.errorComp=En(g.error,e)),i(g.loading)&&(t.loadingComp=En(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),g.delay||200)),i(g.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Cn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Le(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&kn(t,e)}function An(t,e){yn.$on(t,e)}function xn(t,e){yn.$off(t,e)}function In(t,e){var n=yn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function kn(t,e,n){yn=t,Ee(e,n||{},An,xn,In,t),yn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)re(n[o],e,r,e,i)}return e}}var Dn=null;function Nn(t){var e=Dn;return Dn=t,function(){Dn=e}}function Rn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ln(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Nn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$n(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$n(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Et),$n(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&$n(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,$n(t,"mounted")),t}function Mn(t,e,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Xt(d,p,e,t)}kt(!0),t.$options.propsData=e}r=r||n;var g=t.$options._parentListeners;t.$options._parentListeners=r,kn(t,r,g),u&&(t.$slots=Ne(o,i.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);$n(t,"activated")}}function Vn(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Vn(t.$children[n]);$n(t,"deactivated")}}function $n(t,e){vt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Un=[],Bn=[],qn={},zn=!1,Hn=!1,Kn=0;function Gn(){Kn=Un.length=Bn.length=0,qn={},zn=Hn=!1}var Wn=0,Qn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Xn.now()})}function Yn(){var t,e;for(Wn=Qn(),Hn=!0,Un.sort((function(t,e){return t.id-e.id})),Kn=0;Kn<Un.length;Kn++)t=Un[Kn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=Bn.slice(),r=Un.slice();Gn(),tr(n),Jn(r),ut&&B.devtools&&ut.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Zn(t){t._inactive=!1,Bn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Hn){var n=Un.length-1;while(n>Kn&&Un[n].id>t.id)n--;Un.splice(n+1,0,t)}else Un.push(t);zn||(zn=!0,ge(Yn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;vt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Cs){if(!this.user)throw Cs;ne(Cs,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ve(t),yt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function sr(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&gr(t,e.methods),e.data?cr(t):Rt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==ot&&mr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||kt(!1);var s=function(o){i.push(o);var s=Xt(o,e,n,t);Lt(r,o,s),o in t||or(t,"_props",o)};for(var a in e)s(a);kt(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||z(o)||or(t,"_data",o)}Rt(e,!0)}function ur(t,e){vt();try{return t.call(e,e)}catch(Cs){return ne(Cs,e,"data()"),{}}finally{yt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,s||R,R,lr)),i in t||fr(t,i,o)}}function fr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?dr(e):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?dr(e):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(t,e,ir)}function dr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:k(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)vr(t,n,r[i]);else vr(t,n,r)}}function vr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function yr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return vr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';vt(),re(e,r,[i.value],r,o),yt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?Er(e,t):e.$options=Wt(_r(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Rn(e),Sn(e),vn(e),$n(e,"beforeCreate"),Oe(e),sr(e),ke(e),$n(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Er(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function _r(t){var e=t.options;if(t.super){var n=_r(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&D(t.extendOptions,i),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Cr(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ar(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function xr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Wt(n.options,t),s["super"]=n,s.options.props&&Ir(s),s.options.computed&&kr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,$.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=D({},s.options),i[r]=s,s}}function Ir(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function kr(t){var e=t.options.computed;for(var n in e)fr(t.prototype,n,e[n])}function Or(t){$.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Dr(t){return t&&(t.Ctor.options.name||t.tag)}function Nr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Rr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Lr(n,o,r,i)}}}function Lr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}wr(Cr),yr(Cr),On(Cr),Ln(Cr),wn(Cr);var Pr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Dr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Lr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Lr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Rr(t,(function(t){return Nr(e,t)}))})),this.$watch("exclude",(function(e){Rr(t,(function(t){return!Nr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Cn(t),n=e&&e.componentOptions;if(n){var r=Dr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Nr(o,r))||s&&r&&Nr(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Mr};function Fr(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:dt,extend:D,mergeOptions:Wt,defineReactive:Lt},t.set=Pt,t.delete=Mt,t.nextTick=ge,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),$.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,D(t.options.components,jr),Sr(t),Ar(t),xr(t),Or(t)}Fr(Cr),Object.defineProperty(Cr.prototype,"$isServer",{get:ct}),Object.defineProperty(Cr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cr,"FunctionalRenderContext",{value:Ze}),Cr.version="2.6.14";var Vr=m("style,class"),$r=m("input,textarea,option,select,progress"),Ur=function(t,e,n){return"value"===n&&$r(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Br=m("contenteditable,draggable,spellcheck"),qr=m("events,caret,typing,plaintext-only"),zr=function(t,e){return Qr(e)||"false"===e?"false":"contenteditable"===t&&qr(e)?e:"true"},Hr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Wr=function(t){return Gr(t)?t.slice(6,t.length):""},Qr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Yr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Yr(e,n.data));return Jr(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Jr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return ii(t)||oi(t)};function ai(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=m("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function di(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function mi(t,e,n){t.insertBefore(e,n)}function vi(t,e){t.removeChild(e)}function yi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function Ei(t){return t.tagName}function _i(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ci=Object.freeze({createElement:fi,createElementNS:di,createTextNode:pi,createComment:gi,insertBefore:mi,removeChild:vi,appendChild:yi,parentNode:bi,nextSibling:wi,tagName:Ei,setTextContent:_i,setStyleScope:Ti}),Si={create:function(t,e){Ai(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ai(t,!0),Ai(e))},destroy:function(t){Ai(t,!0)}};function Ai(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var xi=new bt("",{},[]),Ii=["create","activate","update","remove","destroy"];function ki(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Oi(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Oi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Di(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ni(t){var e,n,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Ii.length;++e)for(s[Ii[e]]=[],n=0;n<c.length;++n)i(c[n][Ii[e]])&&s[Ii[e]].push(c[n][Ii[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!s,!p(t,e,n,r)){var l=t.data,h=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),_(t),b(t,h,e),i(l)&&E(t,e),y(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return g(t,e),y(n,t.elm,r),o(a)&&v(t,e,n,r),!0}}function g(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(E(t,e),_(t)):(Ai(t),e.push(t))}function v(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](xi,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function E(t,n){for(var r=0;r<s.create.length;++r)s.create[r](xi,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(xi,t),i(e.insert)&&n.push(t))}function _(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Dn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function C(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(A(r),C(r)):f(r.elm))}}function A(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&A(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else f(t.elm)}function x(t,e,n,o,s){var a,c,l,h,f=0,p=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,b=n[0],w=n[y],E=!s;while(f<=g&&p<=y)r(m)?m=e[++f]:r(v)?v=e[--g]:ki(m,b)?(k(m,b,o,n,p),m=e[++f],b=n[++p]):ki(v,w)?(k(v,w,o,n,y),v=e[--g],w=n[--y]):ki(m,w)?(k(m,w,o,n,y),E&&u.insertBefore(t,m.elm,u.nextSibling(v.elm)),m=e[++f],w=n[--y]):ki(v,b)?(k(v,b,o,n,p),E&&u.insertBefore(t,v.elm,m.elm),v=e[--g],b=n[++p]):(r(a)&&(a=Di(e,f,g)),c=i(b.key)?a[b.key]:I(b,e,f,g),r(c)?d(b,o,t,m.elm,!1,n,p):(l=e[c],ki(l,b)?(k(l,b,o,n,p),e[c]=void 0,E&&u.insertBefore(t,l.elm,m.elm)):d(b,o,t,m.elm,!1,n,p)),b=n[++p]);f>g?(h=r(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,o)):p>y&&S(e,f,g)}function I(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&ki(t,s))return o}}function k(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;i(d)&&i(f=d.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(i(d)&&w(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);i(f=d.hook)&&i(f=f.update)&&f(t,e)}r(e.text)?i(p)&&i(g)?p!==g&&x(h,p,g,n,l):i(g)?(i(t.text)&&u.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):i(p)?S(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(d)&&i(f=d.hook)&&i(f=f.postpatch)&&f(t,e)}}}function O(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var D=m("attrs,class,staticClass,staticStyle,key");function N(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return g(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!N(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(i(c)){var d=!1;for(var p in c)if(!D(p)){d=!0,E(e,n);break}!d&&c["class"]&&ve(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,d(e,h);else{var f=i(t.nodeType);if(!f&&ki(t,e))k(t,e,h,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(V)&&(t.removeAttribute(V),n=!0),o(n)&&N(t,e,h))return O(e,h,!0),t;t=l(t)}var p=t.elm,g=u.parentNode(p);if(d(e,h,p._leaveCb?null:g,u.nextSibling(p)),i(e.parent)){var m=e.parent,v=w(e);while(m){for(var y=0;y<s.destroy.length;++y)s.destroy[y](m);if(m.elm=e.elm,v){for(var b=0;b<s.create.length;++b)s.create[b](xi,m);var E=m.data.hook.insert;if(E.merged)for(var _=1;_<E.fns.length;_++)E.fns[_]()}else Ai(m);m=m.parent}}i(g)?S([t],0,0):i(t.tag)&&C(t)}}return O(e,h,c),e.elm}i(t)&&C(t)}}var Ri={create:Li,update:Li,destroy:function(t){Li(t,xi)}};function Li(t,e){(t.data.directives||e.data.directives)&&Pi(t,e)}function Pi(t,e){var n,r,i,o=t===xi,s=e===xi,a=ji(t.data.directives,t.context),c=ji(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Vi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Vi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Vi(u[n],"inserted",e,t)};o?_e(e,"insert",h):h()}if(l.length&&_e(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Vi(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||Vi(a[n],"unbind",t,t,s)}var Mi=Object.create(null);function ji(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Qt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Vi(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Cs){ne(Cs,n.context,"directive "+t.name+" "+e+" hook")}}var $i=[Si,Ri];function Ui(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,s,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(o in i(l.__ob__)&&(l=e.data.attrs=D({},l)),l)s=l[o],a=u[o],a!==s&&Bi(c,o,s,e.data.pre);for(o in(tt||nt)&&l.value!==u.value&&Bi(c,"value",l.value),u)r(l[o])&&(Gr(o)?c.removeAttributeNS(Kr,Wr(o)):Br(o)||c.removeAttribute(o))}}function Bi(t,e,n,r){r||t.tagName.indexOf("-")>-1?qi(t,e,n):Hr(e)?Qr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Br(e)?t.setAttribute(e,zr(e,n)):Gr(e)?Qr(n)?t.removeAttributeNS(Kr,Wr(e)):t.setAttributeNS(Kr,e,n):qi(t,e,n)}function qi(t,e,n){if(Qr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:Ui,update:Ui};function Hi(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Xr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Gi={create:Hi,update:Hi},Wi="__r",Qi="__c";function Xi(t){if(i(t[Wi])){var e=tt?"change":"input";t[e]=[].concat(t[Wi],t[e]||[]),delete t[Wi]}i(t[Qi])&&(t.change=[].concat(t[Qi],t.change||[]),delete t[Qi])}function Yi(t,e,n){var r=Ki;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Ji=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Ji){var i=Wn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Ki.addEventListener(t,e,st?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Ki).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ki=e.elm,Xi(n),Ee(n,i,Zi,to,Yi,e.context),Ki=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=D({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Cs){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||ao(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Cs){}return n&&t.value!==e}function ao(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},uo=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function lo(t){var e=ho(t.style);return t.staticStyle?D(t.staticStyle,e):e}function ho(t){return Array.isArray(t)?N(t):"string"===typeof t?uo(t):t}function fo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&D(r,n)}(n=lo(t.data))&&D(r,n);var o=t;while(o=o.parent)o.data&&(n=lo(o.data))&&D(r,n);return r}var po,go=/^--/,mo=/\s*!important$/,vo=function(t,e,n){if(go.test(e))t.style.setProperty(e,n);else if(mo.test(n))t.style.setProperty(A(e),n.replace(mo,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},yo=["Webkit","Moz","ms"],bo=E((function(t){if(po=po||document.createElement("div").style,t=T(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<yo.length;n++){var r=yo[n]+e;if(r in po)return r}}));function wo(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,f=ho(e.data.style)||{};e.data.normalizedStyle=i(f.__ob__)?D({},f):f;var d=fo(e,!0);for(a in h)r(d[a])&&vo(c,a,"");for(a in d)s=d[a],s!==h[a]&&vo(c,a,null==s?"":s)}}var Eo={create:wo,update:wo},_o=/\s+/;function To(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_o).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Co(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_o).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function So(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&D(e,Ao(t.name||"v")),D(e,t),e}return"string"===typeof t?Ao(t):void 0}}var Ao=E((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),xo=X&&!et,Io="transition",ko="animation",Oo="transition",Do="transitionend",No="animation",Ro="animationend";xo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Oo="WebkitTransition",Do="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(No="WebkitAnimation",Ro="webkitAnimationEnd"));var Lo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Po(t){Lo((function(){Lo(t)}))}function Mo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),To(t,e))}function jo(t,e){t._transitionClasses&&y(t._transitionClasses,e),Co(t,e)}function Fo(t,e,n){var r=$o(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Io?Do:Ro,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var Vo=/\b(transform|all)(,|$)/;function $o(t,e){var n,r=window.getComputedStyle(t),i=(r[Oo+"Delay"]||"").split(", "),o=(r[Oo+"Duration"]||"").split(", "),s=Uo(i,o),a=(r[No+"Delay"]||"").split(", "),c=(r[No+"Duration"]||"").split(", "),u=Uo(a,c),l=0,h=0;e===Io?s>0&&(n=Io,l=s,h=o.length):e===ko?u>0&&(n=ko,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?Io:ko:null,h=n?n===Io?o.length:c.length:0);var f=n===Io&&Vo.test(r[Oo+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function Uo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Bo(e)+Bo(t[n])})))}function Bo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qo(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=So(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,f=o.appearClass,d=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,v=o.enter,y=o.afterEnter,b=o.enterCancelled,w=o.beforeAppear,E=o.appear,_=o.afterAppear,T=o.appearCancelled,C=o.duration,S=Dn,A=Dn.$vnode;while(A&&A.parent)S=A.context,A=A.parent;var x=!S._isMounted||!t.isRootInsert;if(!x||E||""===E){var I=x&&f?f:u,k=x&&p?p:h,O=x&&d?d:l,D=x&&w||m,N=x&&"function"===typeof E?E:v,R=x&&_||y,L=x&&T||b,P=g(c(C)?C.enter:C);0;var M=!1!==s&&!et,j=Ko(N),V=n._enterCb=F((function(){M&&(jo(n,O),jo(n,k)),V.cancelled?(M&&jo(n,I),L&&L(n)):R&&R(n),n._enterCb=null}));t.data.show||_e(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,V)})),D&&D(n),M&&(Mo(n,I),Mo(n,k),Po((function(){jo(n,I),V.cancelled||(Mo(n,O),j||(Ho(P)?setTimeout(V,P):Fo(n,a,V)))}))),t.data.show&&(e&&e(),N&&N(n,V)),M||j||V()}}}function zo(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=So(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,f=o.beforeLeave,d=o.leave,p=o.afterLeave,m=o.leaveCancelled,v=o.delayLeave,y=o.duration,b=!1!==s&&!et,w=Ko(d),E=g(c(y)?y.leave:y);0;var _=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(jo(n,l),jo(n,h)),_.cancelled?(b&&jo(n,u),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){_.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),b&&(Mo(n,u),Mo(n,h),Po((function(){jo(n,u),_.cancelled||(Mo(n,l),w||(Ho(E)?setTimeout(_,E):Fo(n,a,_)))}))),d&&d(n,_),b||w||_())}}function Ho(t){return"number"===typeof t&&!isNaN(t)}function Ko(t){if(r(t))return!1;var e=t.fns;return i(e)?Ko(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Go(t,e){!0!==e.data.show&&qo(e)}var Wo=X?{create:Go,activate:Go,remove:function(t,e){!0!==t.data.show?zo(t,e):e()}}:{},Qo=[zi,Gi,ro,co,Eo,Wo],Xo=Qo.concat($i),Yo=Ni({nodeOps:Ci,modules:Xo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&os(t,"input")}));var Jo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?_e(n,"postpatch",(function(){Jo.componentUpdated(t,e,n)})):Zo(t,e,n.context),t._vOptions=[].map.call(t.options,ns)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",rs),t.addEventListener("compositionend",is),t.addEventListener("change",is),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ns);if(i.some((function(t,e){return!M(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return es(t,i)})):e.value!==e.oldValue&&es(e.value,i);o&&os(t,"change")}}}};function Zo(t,e,n){ts(t,e,n),(tt||nt)&&setTimeout((function(){ts(t,e,n)}),0)}function ts(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=j(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(M(ns(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function es(t,e){return e.every((function(e){return!M(e,t)}))}function ns(t){return"_value"in t?t._value:t.value}function rs(t){t.target.composing=!0}function is(t){t.target.composing&&(t.target.composing=!1,os(t.target,"input"))}function os(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function ss(t){return!t.componentInstance||t.data&&t.data.transition?t:ss(t.componentInstance._vnode)}var as={bind:function(t,e,n){var r=e.value;n=ss(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qo(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?qo(n,(function(){t.style.display=t.__vOriginalDisplay})):zo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},cs={model:Jo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?ls(Cn(e.children)):t}function hs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[T(o)]=i[o];return e}function fs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ds(t){while(t=t.parent)if(t.data.transition)return!0}function ps(t,e){return e.key===t.key&&e.tag===t.tag}var gs=function(t){return t.tag||Le(t)},ms=function(t){return"show"===t.name},vs={name:"transition",props:us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(gs),n.length)){0;var r=this.mode;0;var i=n[0];if(ds(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return fs(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(ms)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!Le(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},c);if("out-in"===r)return this._leaving=!0,_e(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fs(t,i);if("in-out"===r){if(Le(o))return u;var f,d=function(){f()};_e(c,"afterEnter",d),_e(c,"enterCancelled",d),_e(h,"delayLeave",(function(t){f=t}))}}return i}}},ys=D({tag:String,moveClass:String},us);delete ys.mode;var bs={props:ys,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Nn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ws),t.forEach(Es),t.forEach(_s),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Mo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Do,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Do,t),n._moveCb=null,jo(n,e))})}})))},methods:{hasMove:function(t,e){if(!xo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Co(n,t)})),To(n,e),n.style.display="none",this.$el.appendChild(n);var r=$o(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function ws(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Es(t){t.data.newPos=t.elm.getBoundingClientRect()}function _s(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Ts={Transition:vs,TransitionGroup:bs};Cr.config.mustUseProp=Ur,Cr.config.isReservedTag=si,Cr.config.isReservedAttr=Vr,Cr.config.getTagNamespace=ai,Cr.config.isUnknownElement=ui,D(Cr.options.directives,cs),D(Cr.options.components,Ts),Cr.prototype.__patch__=X?Yo:R,Cr.prototype.$mount=function(t,e){return t=t&&X?hi(t):void 0,Pn(this,t,e)},X&&setTimeout((function(){B.devtools&&ut&&ut.emit("init",Cr)}),0),e["a"]=Cr}).call(this,n("c8ba"))},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),f=n("d039"),d=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,E=a.Dispatch,_=a.Function,T=a.MessageChannel,C=a.String,S=0,A={},x="onreadystatechange";try{r=a.location}catch(N){}var I=function(t){if(h(A,t)){var e=A[t];delete A[t],e()}},k=function(t){return function(){I(t)}},O=function(t){I(t.data)},D=function(t){a.postMessage(C(t),r.protocol+"//"+r.host)};y&&b||(y=function(t){var e=p(arguments,1);return A[++S]=function(){c(l(t)?t:_(t),void 0,e)},i(S),S},b=function(t){delete A[t]},v?i=function(t){w.nextTick(k(t))}:E&&E.now?i=function(t){E.now(k(t))}:T&&!m?(o=new T,s=o.port2,o.port1.onmessage=O,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(D)?(i=D,a.addEventListener("message",O,!1)):i=x in g("script")?function(t){d.appendChild(g("script"))[x]=function(){d.removeChild(this),I(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:y,clear:b}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("fc6a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),c=a(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}n("fb6a"),n("b0c0"),n("a630"),n("ac1f"),n("00b4");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return r(t)||i(t,e)||s(t,e)||a()}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},"3c43":function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!==typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3e8f":function(t,e){},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!s(r=i(n,t)))return r;if(o(n=t.valueOf)&&!s(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!s(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=o(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),f=0;u<l;u++,f++)s(h,f,t[u]);return h.length=f,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),f=n("9a1f"),d=n("35a1"),p=r.Array;t.exports=function(t){var e=s(t),n=u(this),r=arguments.length,g=r>1?arguments[1]:void 0,m=void 0!==g;m&&(g=i(g,r>2?arguments[2]:void 0));var v,y,b,w,E,_,T=d(e),C=0;if(!T||this==p&&c(T))for(v=l(e),y=n?new this(v):p(v);v>C;C++)_=m?g(e[C],C):e[C],h(y,C,_);else for(w=f(e,T),E=w.next,y=n?new this:[];!(b=o(E,w)).done;C++)_=m?a(w,g,[b.value,C],!0):b.value,h(y,C,_);return y.length=C,y}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("59ed"),s=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),f=n("04d1"),d=n("d998"),p=n("2d00"),g=n("512c"),m=[],v=i(m.sort),y=i(m.push),b=u((function(){m.sort(void 0)})),w=u((function(){m.sort(null)})),E=h("sort"),_=!u((function(){if(p)return p<70;if(!(f&&f>3)){if(d)return!0;if(g)return g<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:e+r,v:n})}for(m.sort((function(t,e){return e.v-t.v})),r=0;r<m.length;r++)e=m[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),T=b||!w||!E||!_,C=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:T},{sort:function(t){void 0!==t&&o(t);var e=s(this);if(_)return void 0===t?v(e):v(e,t);var n,r,i=[],c=a(e);for(r=0;r<c;r++)r in e&&y(i,e[r]);l(i,C(t)),n=i.length,r=0;while(r<n)e[r]=i[r++];while(r<c)delete e[r++];return e}})},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"4fad":function(t,e,n){var r=n("d039"),i=n("861d"),o=n("c6b6"),s=n("d86b"),a=Object.isExtensible,c=r((function(){a(1)}));t.exports=c||s?function(t){return!!i(t)&&((!s||"ArrayBuffer"!=o(t))&&(!a||a(t)))}:a},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return mt})),n.d(e,"b",(function(){return ht})),n.d(e,"c",(function(){return lt})),n.d(e,"d",(function(){return ft})),n.d(e,"e",(function(){return yt})),n.d(e,"f",(function(){return vt})),n.d(e,"g",(function(){return bt}));var r=n("22e5"),i=n("e691"),o=n("1fd5");const s=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(_(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=_(s);return r&&s.addEventListener("upgradeneeded",t=>{r(_(s.result),t.oldVersion,t.newVersion,_(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(t=>{o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],x=new Map;function I(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return x.set(e,o),o}b(t=>({...t,get:(e,n,r)=>I(e,n)||t.get(e,n,r),has:(e,n)=>!!I(e,n)||t.has(e,n)}));
/**
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
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",N="0.8.3",R=new i["b"]("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",$="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.13.0",ot="[DEFAULT]",st={[D]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[V]:"fire-auth",[$]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t,e,n=ot){ht(t,e).clearInstance(n)}
/**
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
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new o["b"]("app","Firebase",dt);
/**
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
 */
class gt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
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
 */const mt=it;function vt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw pt.create("bad-app-name",{appName:String(s)});if(n||(n=Object(o["i"])()),!n)throw pt.create("no-options");const a=at.get(s);if(a){if(Object(o["h"])(n,a.options)&&Object(o["h"])(i,a.config))return a;throw pt.create("duplicate-app",{appName:s})}const c=new r["b"](s);for(const r of ct.values())c.addComponent(r);const u=new gt(n,i,c);return at.set(s,u),u}function yt(t=ot){const e=at.get(t);if(!e&&t===ot)return vt();if(!e)throw pt.create("no-app",{appName:t});return e}function bt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}lt(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
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
 */
const wt="firebase-heartbeat-database",Et=1,_t="firebase-heartbeat-store";let Tt=null;function Ct(){return Tt||(Tt=C(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Tt}async function St(t){var e;try{const e=await Ct();return e.transaction(_t).objectStore(_t).get(xt(t))}catch(n){if(n instanceof o["c"])R.warn(n.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});R.warn(t.message)}}}async function At(t,e){var n;try{const n=await Ct(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,xt(t)),r.done}catch(r){if(r instanceof o["c"])R.warn(r.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});R.warn(t.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const It=1024,kt=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Dt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Dt(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=Object(o["e"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Dt(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["n"])()&&Object(o["r"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return Object(o["e"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Pt(t){lt(new r["a"]("platform-logger",t=>new k(t),"PRIVATE")),lt(new r["a"]("heartbeat",t=>new Ot(t),"PRIVATE")),bt(D,N,t),bt(D,N,"esm2017"),bt("fire-js","")}Pt("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a function")}},"5a34":function(t,e,n){var r=n("da84"),i=n("44e7"),o=r.TypeError;t.exports=function(t){if(i(t))throw o("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5c8a":function(t,e,n){"use strict";n.d(e,"a",(function(){return vt})),n.d(e,"b",(function(){return wt}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");
/**
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
 */
const a=new Map,c={activated:!1,tokenObservers:[]},u={initialized:!1,enabled:!1};function l(t){return a.get(t)||c}function h(t,e){a.set(t,e)}function f(){return u}
/**
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
 */const d="https://content-firebaseappcheck.googleapis.com/v1",p="exchangeRecaptchaV3Token",g="exchangeDebugToken",m={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4},v=864e5;
/**
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
 */
class y{constructor(t,e,n,r,i){if(this.operation=t,this.retryPolicy=e,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new o["a"],await b(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new o["a"],await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function b(t){return new Promise(e=>{setTimeout(e,t)})}
/**
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
 */const w={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},E=new o["b"]("appCheck","AppCheck",w);
/**
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
 */
function _(t=!1){var e;return t?null===(e=self.grecaptcha)||void 0===e?void 0:e.enterprise:self.grecaptcha}function T(t){if(!l(t).activated)throw E.create("use-before-activation",{appName:t.name})}function C(t){const e=Math.round(t/1e3),n=Math.floor(e/86400),r=Math.floor((e-3600*n*24)/3600),i=Math.floor((e-3600*n*24-3600*r)/60),o=e-3600*n*24-3600*r-60*i;let s="";return n&&(s+=S(n)+"d:"),r&&(s+=S(r)+"h:"),s+=S(i)+"m:"+S(o)+"s",s}function S(t){return 0===t?"00":t>=10?t.toString():"0"+t}
/**
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
 */async function A({url:t,body:e},n){var r,i;const o={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&(o["X-Firebase-Client"]=t)}const a={method:"POST",body:JSON.stringify(e),headers:o};let c,u;try{c=await fetch(t,a)}catch(d){throw E.create("fetch-network-error",{originalErrorMessage:null===(r=d)||void 0===r?void 0:r.message})}if(200!==c.status)throw E.create("fetch-status-error",{httpStatus:c.status});try{u=await c.json()}catch(d){throw E.create("fetch-parse-error",{originalErrorMessage:null===(i=d)||void 0===i?void 0:i.message})}const l=u.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw E.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+u.ttl});const h=1e3*Number(l[1]),f=Date.now();return{token:u.token,expireTimeMillis:f+h,issuedAtTimeMillis:f}}function x(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${d}/projects/${n}/apps/${r}:${p}?key=${i}`,body:{recaptcha_v3_token:e}}}function I(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${d}/projects/${n}/apps/${r}:${g}?key=${i}`,body:{debug_token:e}}}
/**
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
 */const k="firebase-app-check-database",O=1,D="firebase-app-check-store",N="debug-token";let R=null;function L(){return R||(R=new Promise((t,e)=>{var n;try{const n=indexedDB.open(k,O);n.onsuccess=e=>{t(e.target.result)},n.onerror=t=>{var n;e(E.create("storage-open",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=t=>{const e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(D,{keyPath:"compositeKey"})}}}catch(r){e(E.create("storage-open",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message}))}}),R)}function P(t){return $(U(t))}function M(t,e){return V(U(t),e)}function j(t){return V(N,t)}function F(){return $(N)}async function V(t,e){const n=await L(),r=n.transaction(D,"readwrite"),i=r.objectStore(D),o=i.put({compositeKey:t,value:e});return new Promise((t,e)=>{o.onsuccess=e=>{t()},r.onerror=t=>{var n;e(E.create("storage-set",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))}})}async function $(t){const e=await L(),n=e.transaction(D,"readonly"),r=n.objectStore(D),i=r.get(t);return new Promise((t,e)=>{i.onsuccess=e=>{const n=e.target.result;t(n?n.value:void 0)},n.onerror=t=>{var n;e(E.create("storage-get",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))}})}function U(t){return`${t.options.appId}-${t.name}`}
/**
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
 */const B=new s["b"]("@firebase/app-check");
/**
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
 */async function q(t){if(Object(o["n"])()){let n=void 0;try{n=await P(t)}catch(e){B.warn("Failed to read token from IndexedDB. Error: "+e)}return n}}function z(t,e){return Object(o["n"])()?M(t,e).catch(t=>{B.warn("Failed to write token to IndexedDB. Error: "+t)}):Promise.resolve()}async function H(){let t=void 0;try{t=await F()}catch(e){}if(t)return t;{const t=Object(o["q"])();return j(t).catch(t=>B.warn("Failed to persist debug token to IndexedDB. Error: "+t)),t}}
/**
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
 */function K(){const t=f();return t.enabled}async function G(){const t=f();if(t.enabled&&t.token)return t.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function W(){const t=Object(o["k"])(),e=f();if(e.initialized=!0,"string"!==typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==t.FIREBASE_APPCHECK_DEBUG_TOKEN)return;e.enabled=!0;const n=new o["a"];e.token=n,"string"===typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(H())}
/**
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
 */const Q={error:"UNKNOWN_ERROR"};function X(t){return o["d"].encodeString(JSON.stringify(t),!1)}async function Y(t,e=!1){const n=t.app;T(n);const r=l(n);let i=r.token,o=void 0;if(i&&!rt(i)&&(h(n,Object.assign(Object.assign({},r),{token:void 0})),i=void 0),!i){const t=await r.cachedTokenPromise;t&&(rt(t)?i=t:await z(n,void 0))}if(!e&&i&&rt(i))return{token:i.token};let s,a=!1;if(K()){r.exchangeTokenPromise||(r.exchangeTokenPromise=A(I(n,await G()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const e=await r.exchangeTokenPromise;return await z(n,e),h(n,Object.assign(Object.assign({},r),{token:e})),{token:e.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await r.exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?B.warn(c.message):B.error(c),o=c}return i?o?s=rt(i)?{token:i.token,internalError:o}:it(o):(s={token:i.token},h(n,Object.assign(Object.assign({},r),{token:i})),await z(n,i)):s=it(o),a&&nt(n,s),s}function J(t,e,n,r){const{app:i}=t,o=l(i),s={next:n,error:r,type:e};if(h(i,Object.assign(Object.assign({},o),{tokenObservers:[...o.tokenObservers,s]})),o.token&&rt(o.token)){const e=o.token;Promise.resolve().then(()=>{n({token:e.token}),tt(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>tt(t))}function Z(t,e){const n=l(t),r=n.tokenObservers.filter(t=>t.next!==e);0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),h(t,Object.assign(Object.assign({},n),{tokenObservers:r}))}function tt(t){const{app:e}=t,n=l(e);let r=n.tokenRefresher;r||(r=et(t),h(e,Object.assign(Object.assign({},n),{tokenRefresher:r}))),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function et(t){const{app:e}=t;return new y(async()=>{const n=l(e);let r;if(r=n.token?await Y(t,!0):await Y(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=l(e);if(t.token){let e=t.token.issuedAtTimeMillis+.5*(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)+3e5;const n=t.token.expireTimeMillis-3e5;return e=Math.min(e,n),Math.max(0,e-Date.now())}return 0},m.RETRIAL_MIN_WAIT,m.RETRIAL_MAX_WAIT)}function nt(t,e){const n=l(t).tokenObservers;for(const i of n)try{"EXTERNAL"===i.type&&null!=e.error?i.error(e.error):i.next(e)}catch(r){}}function rt(t){return t.expireTimeMillis-Date.now()>0}function it(t){return{token:X(Q),error:t}}
/**
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
 */class ot{constructor(t,e){this.app=t,this.heartbeatServiceProvider=e}_delete(){const{tokenObservers:t}=l(this.app);for(const e of t)Z(this.app,e.next);return Promise.resolve()}}function st(t,e){return new ot(t,e)}function at(t){return{getToken:e=>Y(t,e),addTokenListener:e=>J(t,"INTERNAL",e),removeTokenListener:e=>Z(t.app,e)}}const ct="@firebase/app-check",ut="0.5.16",lt="https://www.google.com/recaptcha/api.js";function ht(t,e){const n=l(t),r=new o["a"];h(t,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=dt(t),s=_(!1);return s?ft(t,e,s,i,r):mt(()=>{const n=_(!1);if(!n)throw new Error("no recaptcha");ft(t,e,n,i,r)}),r.promise}function ft(t,e,n,r,i){n.ready(()=>{gt(t,e,n,r),i.resolve(n)})}function dt(t){const e="fire_app_check_"+t.name,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function pt(t){T(t);const e=l(t).reCAPTCHAState,n=await e.initialized.promise;return new Promise((e,r)=>{const i=l(t).reCAPTCHAState;n.ready(()=>{e(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function gt(t,e,n,r){const i=n.render(r,{sitekey:e,size:"invisible"}),o=l(t);h(t,Object.assign(Object.assign({},o),{reCAPTCHAState:Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}))}function mt(t){const e=document.createElement("script");e.src=lt,e.onload=t,document.head.appendChild(e)}
/**
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
 */
class vt{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,e;bt(this._throttleData);const n=await pt(this._app).catch(t=>{throw E.create("recaptcha-error")});let r;try{r=await A(x(this._app,n),this._heartbeatServiceProvider)}catch(i){throw(null===(t=i.code)||void 0===t?void 0:t.includes("fetch-status-error"))?(this._throttleData=yt(Number(null===(e=i.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),E.create("throttled",{time:C(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,r}initialize(t){this._app=t,this._heartbeatServiceProvider=Object(r["b"])(t,"heartbeat"),ht(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof vt&&this._siteKey===t._siteKey}}function yt(t,e){if(404===t||403===t)return{backoffCount:1,allowRequestsAfter:Date.now()+v,httpStatus:t};{const n=e?e.backoffCount:0,r=Object(o["f"])(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function bt(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw E.create("throttled",{time:C(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}
/**
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
 */function wt(t=Object(r["e"])(),e){t=Object(o["l"])(t);const n=Object(r["b"])(t,"app-check");if(f().initialized||W(),K()&&G().then(t=>console.log(`App Check debug token: ${t}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return r;throw E.create("already-initialized",{appName:t.name})}const i=n.initialize({options:e});return Et(t,e.provider,e.isTokenAutoRefreshEnabled),l(t).isTokenAutoRefreshEnabled&&J(i,"INTERNAL",()=>{}),i}function Et(t,e,n){const r=l(t),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=e,i.cachedTokenPromise=q(t).then(e=>(e&&rt(e)&&(h(t,Object.assign(Object.assign({},l(t)),{token:e})),nt(t,{token:e.token})),e)),i.isTokenAutoRefreshEnabled=void 0===n?t.automaticDataCollectionEnabled:n,h(t,i),i.provider.initialize(t)}const _t="app-check",Tt="app-check-internal";function Ct(){Object(r["c"])(new i["a"](_t,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return st(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Tt).initialize()})),Object(r["c"])(new i["a"](Tt,t=>{const e=t.getProvider("app-check").getImmediate();return at(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Object(r["g"])(ct,ut)}Ct()},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||s((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,s=1,f=c.f,d=u.f;while(i>s){var g,m=h(arguments[s++]),v=f?p(a(m),f(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!o(d,m,g)||(n[g]=m[g])}return n}:f},6547:function(t,e,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=o(s(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),h=n("83ab"),f=n("f183").fastKey,d=n("69f3"),p=d.set,g=d.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){a(t,d),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),d=l.prototype,m=g(e),v=function(t,e,n){var r,i,o=m(t),s=y(t,e);return s?s.value=n:(o.last=s={index:i=f(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),h?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var n,r=m(t),i=f(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(d,{clear:function(){var t=this,e=m(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,n=m(e),r=y(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),h?n.size--:e.size--}return!!r},forEach:function(t){var e,n=m(this),r=s(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(d,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),h&&r(d,"size",{get:function(){return m(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=g(e),o=g(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),g=function(t){if(!o(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),f=n("c6cd"),d=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var w=f.state||(f.state=new v),E=c(w.get),_=c(w.has),T=c(w.set);r=function(t,e){if(_(w,t))throw new m(g);return e.facade=t,T(w,t,e),e},i=function(t){return E(w,t)||{}},o=function(t){return _(w,t)}}else{var C=d("state");p[C]=!0,r=function(t,e){if(h(t,C))throw new m(g);return e.facade=t,l(t,C,e),e},i=function(t){return h(t,C)?t[C]:{}},o=function(t){return h(t,C)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:b}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e330"),s=n("94ca"),a=n("6eeb"),c=n("f183"),u=n("2266"),l=n("19aa"),h=n("1626"),f=n("861d"),d=n("d039"),p=n("1c7e"),g=n("d44e"),m=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),b=v?"set":"add",w=i[t],E=w&&w.prototype,_=w,T={},C=function(t){var e=o(E[t]);a(E,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},S=s(t,!h(w)||!(y||E.forEach&&!d((function(){(new w).entries().next()}))));if(S)_=n.getConstructor(e,t,v,b),c.enable();else if(s(t,!0)){var A=new _,x=A[b](y?{}:-0,1)!=A,I=d((function(){A.has(1)})),k=p((function(t){new w(t)})),O=!y&&d((function(){var t=new w,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(_=e((function(t,e){l(t,E);var n=m(new w,t,_);return void 0!=e&&u(e,n[b],{that:n,AS_ENTRIES:v}),n})),_.prototype=E,E.constructor=_),(I||O)&&(C("delete"),C("has"),v&&C("get")),(O||x)&&C(b),y&&E.clear&&delete E.clear}return T[t]=_,r({global:!0,forced:_!=w},T),g(_,t),y||n.setStrong(_,t,v),_}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),o=r.Object;t.exports=function(t){return o(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),s="find",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),f=n("9112"),d=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=s.PROPER,y=s.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,E=p("iterator"),_="keys",T="values",C="entries",S=function(){return this};t.exports=function(t,e,n,s,p,m,A){c(n,e,s);var x,I,k,O=function(t){if(t===p&&P)return P;if(!w&&t in R)return R[t];switch(t){case _:return function(){return new n(this,t)};case T:return function(){return new n(this,t)};case C:return function(){return new n(this,t)}}return function(){return new n(this)}},D=e+" Iterator",N=!1,R=t.prototype,L=R[E]||R["@@iterator"]||p&&R[p],P=!w&&L||O(p),M="Array"==e&&R.entries||L;if(M&&(x=u(M.call(new t)),x!==Object.prototype&&x.next&&(o||u(x)===b||(l?l(x,b):a(x[E])||d(x,E,S)),h(x,D,!0,!0),o&&(g[D]=S))),v&&p==T&&L&&L.name!==T&&(!o&&y?f(R,"name",T):(N=!0,P=function(){return i(L,this)})),p)if(I={values:O(T),keys:m?P:O(_),entries:O(C)},A)for(k in I)(w||N||!(k in R))&&d(R,k,I[k]);else r({target:e,proto:!0,forced:w||N},I);return o&&!A||R[E]===P||d(R,E,P,{name:p}),g[e]=P,I}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var m=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function b(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?w(o,a):String(o)===String(a)}))}function E(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var C={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&S(g,s,p.route,p.configProps),a(g,s,i)):a()}var m=u.matched[h],v=m&&m.components[c];if(!m||!v)return l[c]=null,a();l[c]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),T(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(v,s,u,y)),a(v,s,i)}};function S(t,e,n,i){var o=e.props=A(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function x(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function I(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/+/g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},D=X,N=j,R=F,L=U,P=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,b="+"===m||"*"===m,w="?"===m||"*"===m,E=n[2]||a,_=p||g;r.push({name:d||i++,prefix:f||"",delimiter:E,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:_?q(_):v?".*":"[^"+B(E)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function F(t,e){return U(j(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",H(n));return z(o,e)}function W(t,e,n){return Q(j(t,n),e,n)}function Q(t,e,n){O(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,H(n)),e)}function X(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):O(t)?G(t,e,n):W(t,e,n)}D.parse=N,D.compile=R,D.tokensToFunction=L,D.tokensToRegExp=P;var Y=Object.create(null);function J(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=D.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=J(c,a,"path "+e.path)}else 0;return o}var l=I(o.path||""),h=e&&e.path||"/",f=l.path?x(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[m]=b(i,v,this.exactPath),u[g]=this.exact||this.exactPath?u[m]:E(i,v);var y=u[m]?this.ariaCurrentValue:null,w=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},_={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=w})):_[this.event]=w;var T={class:u},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[g],isExactActive:u[m]});if(C){if(1===C.length)return C[0];if(C.length>1||!C.length)return 0===C.length?t():t("span",{},C)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":y};else{var S=st(this.$slots.default);if(S){S.isStatic=!1;var A=S.data=r({},S.data);for(var x in A.on=A.on||{},A.on){var I=A.on[x];x in _&&(A.on[x]=Array.isArray(I)?I:[I])}for(var k in _)k in A.on?A.on[k].push(_[k]):A.on[k]=w;var O=S.data.attrs=r({},S.data.attrs);O.href=c,O["aria-current"]=y}else T.on=_}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",C),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?k(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=D(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var g=gt(c,t),m=J(g,d,'redirect route with path "'+g+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function gt(t,e){return x(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return mt.now().toFixed(3)}var yt=vt();function bt(){return yt}function wt(t){return yt=t}var Et=Object.create(null);function _t(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=At(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Rt(t,o)})).catch((function(t){0})):Rt(s,o))}))}}function Ct(){var t=bt();t&&(Et[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){Ct(),t.state&&t.state.key&&wt(t.state.key)}function At(){var t=bt();if(t)return Et[t]}function xt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function It(t){return Dt(t.x)||Dt(t.y)}function kt(t){return{x:Dt(t.x)?t.x:window.pageXOffset,y:Dt(t.y)?t.y:window.pageYOffset}}function Ot(t){return{x:Dt(t.x)?t.x:0,y:Dt(t.y)?t.y:0}}function Dt(t){return"number"===typeof t}var Nt=/^#\d/;function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Ot(i),e=xt(r,i)}else It(t)&&(e=kt(t))}else n&&It(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pt(t,e){Ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=bt(),n.replaceState(i,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Pt(t,!0)}function jt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return qt(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function $t(t,e){var n=qt(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ut(t,e){return qt(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Bt(t,e){return qt(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function qt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var zt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Gt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Kt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Gt(t,Ft.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Gt(t)&&Kt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(b(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),o($t(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return o(Ut(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Bt(i,t))):Kt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Vt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};jt(f,d,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);jt(s,d,(function(){if(r.pending!==t)return o(Ut(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(_t());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Pt(k(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(k(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Pt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(k(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(_t());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),(function(n){r&&Tt(t.router,n,e,!0),Lt||ye(n.fullPath)}))},o=Lt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?Pt(me(t)):window.location.hash=t}function ye(t){Lt?Mt(me(t)):window.location.replace(me(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Gt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},Ee={currentRoute:{configurable:!0}};function _e(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ee.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Lt&&i;o&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return _e(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return _e(this.resolveHooks,t)},we.prototype.afterEach=function(t){return _e(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Te(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,Ee),we.install=at,we.version="3.5.3",we.isNavigationFailure=Gt,we.NavigationFailureType=Ft,we.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(we),e["a"]=we},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mr})),n.d(e,"b",(function(){return yr})),n.d(e,"c",(function(){return vr})),n.d(e,"d",(function(){return wr})),n.d(e,"e",(function(){return br})),n.d(e,"f",(function(){return Er})),n.d(e,"g",(function(){return _r})),n.d(e,"h",(function(){return pr})),n.d(e,"i",(function(){return gr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0;b.prototype.s=!1,b.prototype.na=function(){this.s||(this.s=!0,this.M(),0==w)||h(this)},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}var x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function I(t,e){return t<e?-1:t>e?1:0}function k(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return-1!=k().indexOf(t)}function D(t){return D[" "](t),t}function N(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}D[" "]=c;var R,L=O("Opera"),P=O("Trident")||O("MSIE"),M=O("Edge"),j=M||P,F=O("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),V=-1!=k().toLowerCase().indexOf("webkit")&&!O("Edge");function $(){var t=a.document;return t?t.documentMode:void 0}t:{var U="",B=function(){var t=k();return F?/rv:([^\);]+)(\)|;)/.exec(t):M?/Edge\/([\d\.]+)/.exec(t):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):V?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(B&&(U=B?B[1]:""),P){var q=$();if(null!=q&&q>parseFloat(U)){R=String(q);break t}}R=U}var z,H={};function K(){return N((function(){let t=0;const e=x(String(R)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=I(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||I(0==i[2].length,0==o[2].length)||I(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(a.document&&P){var G=$();z=G||(parseInt(R,10)||void 0)}else z=void 0;var W=z;function Q(t,e){if(C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F){t:{try{D(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:X[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.X.h.call(this)}}y(Q,C);var X={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++J,this.ba=this.ea=!1}function tt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function et(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=E(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(tt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new Z(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=wt(n),t&&t[Y]?t.N(e,n,l(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)S||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)dt(t,e[o],n,r,i);return null}return n=wt(n),t&&t[Y]?t.O(e,n,l(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=wt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(tt(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):tt(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function vt(t,e){if(t.ba)t=!0;else{e=new Q(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof ot?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Et(){b.call(this),this.i=new ot(this),this.P=this,this.I=null}function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var i=e;e=new C(r,t),it(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Tt(s,r,!0,e)&&i}if(s=e.g=t,i=Tt(s,r,!0,e)&&i,i=Tt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Tt(s,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.ea&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(Et,b),Et.prototype[Y]=!0,Et.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},Et.prototype.M=function(){if(Et.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)tt(n[r]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function St(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=It.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var xt,It=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kt,t=>t.reset());class kt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){a.setTimeout(()=>{throw t},0)}function Dt(t,e){xt||Nt(),Rt||(xt(),Rt=!0),Lt.add(t,e)}function Nt(){var t=a.Promise.resolve(void 0);xt=function(){t.then(Pt)}}var Rt=!1,Lt=new At;function Pt(){for(var t;t=St();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=It;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rt=!1}function Mt(t,e){Et.call(this),this.h=t||1,this.g=e||a,this.j=m(this.lb,this),this.l=Date.now()}function jt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ft(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Vt(t){t.g=Ft(()=>{t.g=null,t.i&&(t.i=!1,Vt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Mt,Et),r=Mt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(jt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Mt.X.M.call(this),jt(this),delete this.g};class $t extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ut(t){b.call(this),this.h=t,this.g={}}y(Ut,b);var Bt=[];function qt(t,e,n,r){Array.isArray(n)||(n&&(Bt[0]=n.toString()),n=Bt);for(var i=0;i<n.length;i++){var o=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function zt(t){et(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Ht(){this.g=!0}function Kt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Gt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Wt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ct(n)}catch(a){return e}}Ut.prototype.M=function(){Ut.X.M.call(this),zt(this)},Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.Aa=function(){this.g=!1},Ht.prototype.info=function(){};var Yt={},Jt=null;function Zt(){return Jt=Jt||new Et}function te(t){C.call(this,Yt.Pa,t)}function ee(t){const e=Zt();_t(e,new te(e))}function ne(t,e){C.call(this,Yt.STAT_EVENT,t),this.stat=e}function re(t){const e=Zt();_t(e,new ne(e,t))}function ie(t,e){C.call(this,Yt.Qa,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Yt.Pa="serverreachability",y(te,C),Yt.STAT_EVENT="statevent",y(ne,C),Yt.Qa="timingevent",y(ie,C);var se={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ae={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ce(){}function ue(t){return t.h||(t.h=t.i())}function le(){}ce.prototype.h=null;var he,fe={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function de(){C.call(this,"d")}function pe(){C.call(this,"c")}function ge(){}function me(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ut(this),this.O=ye,t=j?125:void 0,this.T=new Mt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}y(de,C),y(pe,C),y(ge,ce),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},he=new ge;var ye=45e3,be={},we={};function Ee(t,e,n){t.K=1,t.v=qe(Fe(e)),t.s=n,t.P=!0,_e(t,null)}function _e(t,e){t.F=Date.now(),Ae(t),t.A=Fe(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),nn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ve,t.g=ar(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $t(m(t.La,t,t.g),t.N)),qt(t.S,t.g,"readystatechange",t.ib),e=t.H?nt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ee(),Kt(t.j,t.u,t.A,t.m,t.U,t.s)}function Te(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Se(t,n),r==we){4==e&&(t.o=4,re(14),i=!1),Wt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,re(15),Wt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Wt(t.j,t.m,r,null),De(t,r)}Te(t)&&r!=we&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,re(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zn(e),e.K=!0,re(11))):(Wt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),ke(t))}function Se(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?we:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?we:(e=e.substr(r,n),t.C=r+n,e)))}function Ae(t){t.V=Date.now()+t.O,xe(t,t.O)}function xe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(m(t.gb,t),e)}function Ie(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ke(t){0==t.l.G||t.I||nr(t.l,t)}function Oe(t){Ie(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,jt(t.T),zt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function De(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||hn(n.h,t)))if(!t.J&&hn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;er(n),zn(n)}Jn(n),re(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=oe(m(n.cb,n),6e3));if(1>=ln(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ir(n,11)}else if((t.J||n.g==t)&&er(n),!A(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(fn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Be(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=sr(r,r.H?r.ka:null,r.V),s.J){dn(r.h,s);var a=s,c=r.J;c&&a.setTimeout(c),a.B&&(Ie(a),Ae(a)),r.g=s}else Yn(r);0<n.i.length&&Kn(n)}else"stop"!=u[0]&&"close"!=u[0]||ir(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ir(n,7):qn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ee(4)}catch(u){}}function Ne(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Re(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Re(t),r=Ne(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=me.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==jn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const h=jn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(3!=h||j||this.g&&(this.h.h||this.g.fa()||Fn(this.g)))){this.I||4!=h||7==e||ee(8==e||0>=f?3:2),Ie(this);var n=this.g.aa();this.Y=n;e:if(Te(this)){var r=Fn(this.g);t="";var i=r.length,o=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),ke(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Gt(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,re(12),Oe(this),ke(this);break t}Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,De(this,n)}this.P?(Ce(this,h,s),j&&this.i&&3==h&&(qt(this.S,this.T,"tick",this.hb),this.T.start())):(Wt(this.j,this.m,s,null),De(this,s)),4==h&&Oe(this),this.i&&!this.I&&(4==h?nr(this.l,this):(this.i=!1,Ae(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),Oe(this),ke(this)}}}catch(h){}},r.hb=function(){if(this.g){var t=jn(this.g),e=this.g.fa();this.C<e.length&&(Ie(this),Ce(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.I=!0,Oe(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qt(this.j,this.A),2!=this.K&&(ee(),re(17)),Oe(this),this.o=2,ke(this)):xe(this,this.V-t)};var Pe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Me(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function je(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof je){this.h=void 0!==e?e:t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,$e(this,t.m),this.l=t.l,e=t.i;var n=new Je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ue(this,n),this.o=t.o}else t&&(n=String(t).match(Pe))?(this.h=!!e,Ve(this,n[1]||"",!0),this.s=ze(n[2]||""),this.g=ze(n[3]||"",!0),$e(this,n[4]),this.l=ze(n[5]||"",!0),Ue(this,n[6]||"",!0),this.o=ze(n[7]||"")):(this.h=!!e,this.i=new Je(null,this.h))}function Fe(t){return new je(t)}function Ve(t,e,n){t.j=n?ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ue(t,e,n){e instanceof Je?(t.i=e,on(t.i,t.h)):(n||(e=He(e,Xe)),t.i=new Je(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function qe(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function He(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ke(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(He(e,Ge,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(He(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(He(n,"/"==n.charAt(0)?Qe:We,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",He(n,Ye)),t.join("")};var Ge=/[#\/\?@]/g,We=/[#\?:]/g,Qe=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ze(t){t.g||(t.g=new Map,t.h=0,t.i&&Me(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function tn(t,e){Ze(t),e=rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function en(t,e){return Ze(t),e=rn(t,e),t.g.has(e)}function nn(t,e,n){tn(t,e),0<n.length&&(t.i=null,t.g.set(rn(t,e),_(n)),t.h+=n.length)}function rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(Ze(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(tn(this,e),nn(this,n,t))}),t)),t.j=e}r=Je.prototype,r.add=function(t,e){Ze(this),this.i=null,t=rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Ze(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){Ze(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){Ze(this);let e=[];if("string"===typeof t)en(this,t)&&(e=e.concat(this.g.get(rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Ze(this),this.i=null,t=rn(this,t),en(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var sn=class{constructor(t,e){this.h=t,this.g=e}};function an(t){this.l=t||cn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ln(t){return t.h?1:t.g?t.g.size:0}function hn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fn(t,e){t.g?t.g.add(e):t.h=e}function dn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function pn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _(t.i)}function gn(){}function mn(){this.g=new gn}function vn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yn(t,e){const n=new Ht;if(a.Image){const r=new Image;r.onload=v(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=v(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(bn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function bn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function wn(t){this.l=t.ac||null,this.j=t.jb||!1}function En(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_n,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}an.prototype.cancel=function(){if(this.i=pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},gn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},gn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(wn,ce),wn.prototype.g=function(){return new En(this.l,this.j)},wn.prototype.i=function(t){return function(){return t}}({}),y(En,Et);var _n=0;function Tn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Cn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sn(t)}function Sn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=_n)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=_n},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cn(this):Sn(this),3==this.readyState&&Tn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,Cn(this))},r.Ua=function(t){this.g&&(this.response=t,Cn(this))},r.ga=function(){this.g&&Cn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=a.JSON.parse;function xn(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=In,this.K=this.L=!1}y(xn,Et);var In="",kn=/^https?$/i,On=["POST","PUT"];function Dn(t){return P&&K()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Nn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rn(t),Pn(t)}function Rn(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof s&&(!t.C[1]||4!=jn(t)||2!=t.aa()))if(t.v&&4==jn(t))Ft(t.Ha,0,t);else if(_t(t,"readystatechange"),4==jn(t)){t.h=!1;try{const s=t.aa();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match(Pe)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!kn.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var c=2<jn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.aa()+"]",Rn(t)}}finally{Pn(t)}}}function Pn(t,e){if(t.g){Mn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||_t(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Mn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}function Fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case In:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Vn(t){let e="";return et(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Vn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Be(t,e,n))}function Un(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bn(t){this.Ca=0,this.i=[],this.j=new Ht,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Un("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Un("baseRetryDelayMs",5e3,t),this.bb=Un("retryDelaySeedMs",1e4,t),this.$a=Un("forwardChannelMaxRetries",2,t),this.ta=Un("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new an(t&&t.concurrentRequestLimit),this.Fa=new mn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function qn(t){if(Hn(t),3==t.G){var e=t.U++,n=Fe(t.F);Be(n,"SID",t.I),Be(n,"RID",e),Be(n,"TYPE","terminate"),Qn(t,n),e=new me(t,t.j,e,void 0),e.K=2,e.v=qe(Fe(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=ar(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ae(e)}or(t)}function zn(t){t.g&&(Zn(t),t.g.cancel(),t.g=null)}function Hn(t){zn(t),t.u&&(a.clearTimeout(t.u),t.u=null),er(t),t.h.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Kn(t){un(t.h)||t.m||(t.m=!0,Dt(t.Ja,t),t.C=0)}function Gn(t,e){return!(ln(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=oe(m(t.Ja,t,e),rr(t,t.C)),t.C++,!0))}function Wn(t,e){var n;n=e?e.m:t.U++;const r=Fe(t.F);Be(r,"SID",t.I),Be(r,"RID",n),Be(r,"AID",t.T),Qn(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new me(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fn(t.h,n),Ee(n,r,e)}function Qn(t,e){t.ia&&et(t.ia,(function(t,n){Be(e,n,t)})),t.l&&Le({},(function(t,n){Be(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{vn(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Yn(t){t.g||t.u||(t.Z=1,Dt(t.Ia,t),t.A=0)}function Jn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=oe(m(t.Ia,t),rr(t,t.A)),t.A++,!0)}function Zn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function tr(t){t.g=new me(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Fe(t.sa);Be(e,"RID","rpc"),Be(e,"SID",t.I),Be(e,"CI",t.L?"0":"1"),Be(e,"AID",t.T),Be(e,"TYPE","xmlhttp"),Qn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qe(Fe(e)),n.s=null,n.P=!0,_e(n,t)}function er(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function nr(t,e){var n=null;if(t.g==e){er(t),Zn(t),t.g=null;var r=2}else{if(!hn(t.h,e))return;n=e.D,dn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Zt(),_t(r,new ie(r,n)),Kn(t)}else Yn(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Gn(t,e)||2==r&&Jn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}function rr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ir(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new je("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ve(n,"https"),qe(n)),yn(n.toString(),r)}else re(2);t.G=0,t.l&&t.l.va(e),or(t),Hn(t)}function or(t){if(t.G=0,t.la=[],t.l){const e=pn(t.h);0==e.length&&0==t.i.length||(T(t.la,e),T(t.la,t.i),t.h.i.length=0,_(t.i),t.i.length=0),t.l.ua()}}function sr(t,e,n){var r=n instanceof je?Fe(n):new je(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),$e(r,r.m);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new je(null,void 0);r&&Ve(o,r),e&&(o.g=e),i&&$e(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Be(r,n,e),Be(r,"VER",t.ma),Qn(t,r),r}function ar(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new xn(new wn({jb:!0})):new xn(t.ra),e.Ka(t.H),e}function cr(){}function ur(){if(P&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function lr(t,e){Et.call(this),this.g=new Bn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dr(this)}function hr(t){de.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function fr(){pe.call(this),this.status=1}function dr(t){this.g=t}r=xn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():he.g(),this.C=this.u?ue(this.u):ue(he),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Nn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=a.FormData&&t instanceof a.FormData,!(0<=E(On,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mn(this),0<this.B&&((this.K=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ft(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Nn(this,o)}},r.qa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Pn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pn(this,!0)),xn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Ln(this):this.fb())},r.fb=function(){Ln(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Bn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new me(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=nt(o),it(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,i,e),n=Fe(this.F),Be(n,"RID",t),Be(n,"CVER",22),this.D&&Be(n,"X-HTTP-Session-Id",this.D),Qn(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(Vn(o)))+"&"+e:this.o&&$n(n,this.o,o)),fn(this.h,i),this.Ya&&Be(n,"TYPE","init"),this.O?(Be(n,"$req",e),Be(n,"SID","null"),i.Z=!0,Ee(i,n,null)):Ee(i,n,e),this.G=2}}else 3==this.G&&(t?Wn(this,t):0==this.i.length||un(this.h)||Wn(this))},r.Ia=function(){if(this.u=null,tr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=oe(m(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,re(10),zn(this),tr(this))},r.cb=function(){null!=this.v&&(this.v=null,zn(this),Jn(this),re(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))},r=cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},ur.prototype.g=function(t,e){return new lr(t,e)},y(lr,Et),lr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=sr(t,null,t.V),Kn(t)},lr.prototype.close=function(){qn(this.g)},lr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ct(t),t=n);e.i.push(new sn(e.ab++,t)),3==e.G&&Kn(e)},lr.prototype.M=function(){this.g.l=null,delete this.j,qn(this.g),delete this.g,lr.X.M.call(this)},y(hr,de),y(fr,pe),y(dr,cr),dr.prototype.xa=function(){_t(this.g,"a")},dr.prototype.wa=function(t){_t(this.g,new hr(t))},dr.prototype.va=function(t){_t(this.g,new fr)},dr.prototype.ua=function(){_t(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,lr.prototype.send=lr.prototype.u,lr.prototype.open=lr.prototype.m,lr.prototype.close=lr.prototype.close,se.NO_ERROR=0,se.TIMEOUT=8,se.HTTP_ERROR=6,ae.COMPLETE="complete",le.EventType=fe,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",Et.prototype.listen=Et.prototype.N,xn.prototype.listenOnce=xn.prototype.O,xn.prototype.getLastError=xn.prototype.Oa,xn.prototype.getLastErrorCode=xn.prototype.Ea,xn.prototype.getStatus=xn.prototype.aa,xn.prototype.getResponseJson=xn.prototype.Sa,xn.prototype.getResponseText=xn.prototype.fa,xn.prototype.send=xn.prototype.da,xn.prototype.setWithCredentials=xn.prototype.Ka;var pr=o.createWebChannelTransport=function(){return new ur},gr=o.getStatEventTarget=function(){return Zt()},mr=o.ErrorCode=se,vr=o.EventType=ae,yr=o.Event=Yt,br=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wr=o.FetchXmlHttpFactory=wn,Er=o.WebChannel=le,_r=o.XhrIo=xn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),f=n("107c"),d=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),E=a.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],T=w||_||E||h||f;T&&(g=function(t){var e,n,i,a,c,h,f,T=this,C=l(T),S=o(t),A=C.raw;if(A)return A.lastIndex=T.lastIndex,e=r(g,A,S),T.lastIndex=A.lastIndex,e;var x=C.groups,I=E&&T.sticky,k=r(s,T),O=T.source,D=0,N=S;if(I&&(k=y(k,"y",""),-1===v(k,"g")&&(k+="g"),N=b(S,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==m(S,T.lastIndex-1))&&(O="(?: "+O+")",N=" "+N,D++),n=new RegExp("^(?:"+O+")",k)),_&&(n=new RegExp("^"+O+"$(?!\\s)",k)),w&&(i=T.lastIndex),a=r(p,I?n:T,N),I?a?(a.input=b(a.input,D),a[0]=b(a[0],D),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),_&&a&&a.length>1&&r(d,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&x)for(a.groups=h=u(null),c=0;c<x.length;c++)f=x[c],h[f[0]]=a[f[1]];return a}),t.exports=g},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new k(r||[]);return o._invoke=S(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==n&&r.call(E,o)&&(b=E);var _=y.prototype=m.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=A(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:D}}function D(){return{value:e,done:!0}}return v.prototype=y,c(_,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},T(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new C(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},T(_),c(_,a,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return s(i(n,t));throw u(a(t)+" is not iterable")}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),s(t,l,!1,!0),a[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),f=n("d039"),d=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),v=n("3a9b"),y=n("d9b5"),b=n("825a"),w=n("7b0b"),E=n("fc6a"),_=n("a04b"),T=n("577e"),C=n("5c6c"),S=n("7c73"),A=n("df75"),x=n("241c"),I=n("057f"),k=n("7418"),O=n("06cf"),D=n("9bf2"),N=n("d1e7"),R=n("f36a"),L=n("6eeb"),P=n("5692"),M=n("f772"),j=n("d012"),F=n("90e3"),V=n("b622"),$=n("e538"),U=n("746f"),B=n("d44e"),q=n("69f3"),z=n("b727").forEach,H=M("hidden"),K="Symbol",G="prototype",W=V("toPrimitive"),Q=q.set,X=q.getterFor(K),Y=Object[G],J=i.Symbol,Z=J&&J[G],tt=i.TypeError,et=i.QObject,nt=o("JSON","stringify"),rt=O.f,it=D.f,ot=I.f,st=N.f,at=c([].push),ct=P("symbols"),ut=P("op-symbols"),lt=P("string-to-symbol-registry"),ht=P("symbol-to-string-registry"),ft=P("wks"),dt=!et||!et[G]||!et[G].findChild,pt=l&&f((function(){return 7!=S(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(Y,e);r&&delete Y[e],it(t,e,n),r&&t!==Y&&it(Y,e,r)}:it,gt=function(t,e){var n=ct[t]=S(Z);return Q(n,{type:K,tag:t,description:e}),l||(n.description=e),n},mt=function(t,e,n){t===Y&&mt(ut,e,n),b(t);var r=_(e);return b(n),d(ct,r)?(n.enumerable?(d(t,H)&&t[H][r]&&(t[H][r]=!1),n=S(n,{enumerable:C(0,!1)})):(d(t,H)||it(t,H,C(1,{})),t[H][r]=!0),pt(t,r,n)):it(t,r,n)},vt=function(t,e){b(t);var n=E(e),r=A(n).concat(_t(n));return z(r,(function(e){l&&!a(bt,n,e)||mt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?S(t):vt(S(t),e)},bt=function(t){var e=_(t),n=a(st,this,e);return!(this===Y&&d(ct,e)&&!d(ut,e))&&(!(n||!d(this,e)||!d(ct,e)||d(this,H)&&this[H][e])||n)},wt=function(t,e){var n=E(t),r=_(e);if(n!==Y||!d(ct,r)||d(ut,r)){var i=rt(n,r);return!i||!d(ct,r)||d(n,H)&&n[H][r]||(i.enumerable=!0),i}},Et=function(t){var e=ot(E(t)),n=[];return z(e,(function(t){d(ct,t)||d(j,t)||at(n,t)})),n},_t=function(t){var e=t===Y,n=ot(e?ut:E(t)),r=[];return z(n,(function(t){!d(ct,t)||e&&!d(Y,t)||at(r,ct[t])})),r};if(h||(J=function(){if(v(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,e=F(t),n=function(t){this===Y&&a(n,ut,t),d(this,H)&&d(this[H],e)&&(this[H][e]=!1),pt(this,e,C(1,t))};return l&&dt&&pt(Y,e,{configurable:!0,set:n}),gt(e,t)},Z=J[G],L(Z,"toString",(function(){return X(this).tag})),L(J,"withoutSetter",(function(t){return gt(F(t),t)})),N.f=bt,D.f=mt,O.f=wt,x.f=I.f=Et,k.f=_t,$.f=function(t){return gt(V(t),t)},l&&(it(Z,"description",{configurable:!0,get:function(){return X(this).description}}),u||L(Y,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:J}),z(A(ft),(function(t){U(t)})),r({target:K,stat:!0,forced:!h},{for:function(t){var e=T(t);if(d(lt,e))return lt[e];var n=J(e);return lt[e]=n,ht[n]=e,n},keyFor:function(t){if(!y(t))throw tt(t+" is not a symbol");if(d(ht,t))return ht[t]},useSetter:function(){dt=!0},useSimple:function(){dt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:yt,defineProperty:mt,defineProperties:vt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Et,getOwnPropertySymbols:_t}),r({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(w(t))}}),nt){var Tt=!h||f((function(){var t=J();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:Tt},{stringify:function(t,e,n){var r=R(arguments),i=e;if((m(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(g(i)&&(e=a(i,this,t,e)),!y(e))return e}),r[1]=e,s(nt,null,r)}})}if(!Z[W]){var Ct=Z.valueOf;L(Z,W,(function(t){return a(Ct,this)}))}B(J,K),j[H]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&h(o.prototype,"finally",d,{unsafe:!0})}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e,n){var r=n("4dae"),i=Math.floor,o=function(t,e){var n=t.length,c=i(n/2);return n<8?s(t,e):a(t,o(r(t,0,c),e),o(r(t,c),e),e)},s=function(t,e){var n,r,i=t.length,o=1;while(o<i){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},a=function(t,e,n,r){var i=e.length,o=n.length,s=0,a=0;while(s<i||a<o)t[s+a]=s<i&&a<o?r(e[s],n[a])<=0?e[s++]:n[a++]:s<i?e[s++]:n[a++];return t};t.exports=o},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var t={};return r[d].call(t)!==t}));g?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("0366"),d=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,E=h.process,_=h.Promise,T=d(h,"queueMicrotask"),C=T&&T.value;C||(r=function(){var t,e;y&&(t=E.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},g||y||v||!b||!w?!m&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=f(u.then,u),s=function(){l(r)}):y?s=function(){E.nextTick(r)}:(p=f(p,h),s=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=C||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=s(p),E=o(w),_=r(g,m),T=a(E),C=0,S=v||c,A=e?S(p,T):n||f?S(p,0):void 0;T>C;C++)if((d||C in E)&&(y=E[C],b=_(y,C,w),t))if(e)A[C]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:u(A,y)}else switch(t){case 4:return!1;case 7:u(A,y)}return h?-1:i||l?l:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d86b:function(t,e,n){var r=n("d039");t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&s(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(r){t[n]=s[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(o,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,f=n("e893"),d=o.Symbol,p=d&&d.prototype;if(i&&c(d)&&(!("description"in p)||void 0!==d().description)){var g={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(g[e]=!0),e};f(m,d),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(d("test")),y=s(p.toString),b=s(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,E=s("".replace),_=s("".slice);h(p,"description",{configurable:!0,get:function(){var t=b(this),e=y(t);if(a(g,t))return"";var n=v?_(e,7,-1):E(e,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=s(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",f=s.set,d=s.getterFor(h);t.exports=c(Array,"Array",(function(t,e){f(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);t.exports=r?function(t){return t&&o(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
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
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),f=n("fea9"),d=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),E=n("19aa"),_=n("8925"),T=n("2266"),C=n("1c7e"),S=n("4840"),A=n("2cf4").set,x=n("b575"),I=n("cdf9"),k=n("44de"),O=n("f069"),D=n("e667"),N=n("69f3"),R=n("94ca"),L=n("b622"),P=n("6069"),M=n("605d"),j=n("2d00"),F=L("species"),V="Promise",$=N.getterFor(V),U=N.set,B=N.getterFor(V),q=f&&f.prototype,z=f,H=q,K=u.TypeError,G=u.document,W=u.process,Q=O.f,X=Q,Y=!!(G&&G.createEvent&&u.dispatchEvent),J=b(u.PromiseRejectionEvent),Z="unhandledrejection",tt="rejectionhandled",et=0,nt=1,rt=2,it=1,ot=2,st=!1,at=R(V,(function(){var t=_(z),e=t!==String(z);if(!e&&66===j)return!0;if(c&&!H["finally"])return!0;if(j>=51&&/native code/.test(t))return!1;var n=new z((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,st=n.then((function(){}))instanceof r,!st||!e&&P&&!J})),ct=at||!C((function(t){z.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;x((function(){var r=t.value,i=t.state==nt,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{l?(i||(t.rejection===ot&&pt(t),t.rejection=it),!0===l?s=r:(p&&p.enter(),s=l(r),p&&(p.exit(),c=!0)),s===u.promise?d(K("Promise-chain cycle")):(a=ut(s))?h(a,s,f,d):f(s)):d(r)}catch(g){p&&!c&&p.exit(),d(g)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ft(t)}))}},ht=function(t,e,n){var r,i;Y?(r=G.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!J&&(i=u["on"+t])?i(r):t===Z&&k("Unhandled promise rejection",n)},ft=function(t){h(A,u,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=D((function(){M?W.emit("unhandledRejection",r,n):ht(Z,n,r)})),t.rejection=M||dt(t)?ot:it,e.error))throw e.value}))},dt=function(t){return t.rejection!==it&&!t.parent},pt=function(t){h(A,u,(function(){var e=t.facade;M?W.emit("rejectionHandled",e):ht(tt,e,t.value)}))},gt=function(t,e,n){return function(r){t(e,r,n)}},mt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,lt(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw K("Promise can't be resolved itself");var r=ut(e);r?x((function(){var n={done:!1};try{h(r,e,gt(vt,n,t),gt(mt,n,t))}catch(i){mt(n,i,t)}})):(t.value=e,t.state=nt,lt(t,!1))}catch(i){mt({done:!1},i,t)}}};if(at&&(z=function(t){E(this,H),y(t),h(r,this);var e=$(this);try{t(gt(vt,e),gt(mt,e))}catch(n){mt(e,n)}},H=z.prototype,r=function(t){U(this,{type:V,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:et,value:void 0})},r.prototype=p(H,{then:function(t,e){var n=B(this),r=n.reactions,i=Q(S(this,z));return i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=M?W.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=et&&lt(n,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=$(t);this.promise=t,this.resolve=gt(vt,e),this.reject=gt(mt,e)},O.f=Q=function(t){return t===z||t===o?new i(t):X(t)},!c&&b(f)&&q!==Object.prototype)){s=q.then,st||(d(q,"then",(function(t,e){var n=this;return new z((function(t,e){h(s,n,t,e)})).then(t,e)}),{unsafe:!0}),d(q,"catch",H["catch"],{unsafe:!0}));try{delete q.constructor}catch(yt){}g&&g(q,H)}a({global:!0,wrap:!0,forced:at},{Promise:z}),m(z,V,!1,!0),v(V),o=l(V),a({target:V,stat:!0,forced:at},{reject:function(t){var e=Q(this);return h(e.reject,void 0,t),e.promise}}),a({target:V,stat:!0,forced:c||at},{resolve:function(t){return I(c&&this===o?z:this,t)}}),a({target:V,stat:!0,forced:ct},{all:function(t){var e=this,n=Q(e),r=n.resolve,i=n.reject,o=D((function(){var n=y(e.resolve),o=[],s=0,a=1;T(t,(function(t){var c=s++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=Q(e),r=n.reject,i=D((function(){var i=y(e.resolve);T(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ed18:function(t,e,n){(function(e){const r=n("3e8f"),i=n("df7c"),o=n("3c43"),s=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function a(t){const e={};let n,r=t.toString();r=r.replace(/\r\n?/gm,"\n");while(null!=(n=s.exec(r))){const t=n[1];let r=n[2]||"";r=r.trim();const i=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===i&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),e[t]=r}return e}function c(t){console.log("[dotenv][DEBUG] "+t)}function u(t){return"~"===t[0]?i.join(o.homedir(),t.slice(1)):t}function l(t){let n=i.resolve(e.cwd(),".env"),o="utf8";const s=Boolean(t&&t.debug),a=Boolean(t&&t.override);t&&(null!=t.path&&(n=u(t.path)),null!=t.encoding&&(o=t.encoding));try{const t=h.parse(r.readFileSync(n,{encoding:o}));return Object.keys(t).forEach((function(e){Object.prototype.hasOwnProperty.call(Object({NODE_ENV:"production",BASE_URL:"/"}),e)?(!0===a&&(Object({NODE_ENV:"production",BASE_URL:"/"})[e]=t[e]),s&&c(!0===a?`"${e}" is already defined in \`process.env\` and WAS overwritten`:`"${e}" is already defined in \`process.env\` and was NOT overwritten`)):Object({NODE_ENV:"production",BASE_URL:"/"})[e]=t[e]})),{parsed:t}}catch(l){return s&&c(`Failed to load ${n} ${l.message}`),{error:l}}}const h={config:l,parse:a};t.exports.config=h.config,t.exports.parse=h.parse,t.exports=h}).call(this,n("4362"))},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f183:function(t,e,n){var r=n("23e7"),i=n("e330"),o=n("d012"),s=n("861d"),a=n("1a2d"),c=n("9bf2").f,u=n("241c"),l=n("057f"),h=n("4fad"),f=n("90e3"),d=n("bb2f"),p=!1,g=f("meta"),m=0,v=function(t){c(t,g,{value:{objectID:"O"+m++,weakData:{}}})},y=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,g)){if(!h(t))return"F";if(!e)return"E";v(t)}return t[g].objectID},b=function(t,e){if(!a(t,g)){if(!h(t))return!0;if(!e)return!1;v(t)}return t[g].weakData},w=function(t){return d&&p&&h(t)&&!a(t,g)&&v(t),t},E=function(){_.enable=function(){},p=!0;var t=u.f,e=i([].splice),n={};n[g]=1,t(n).length&&(u.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===g){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},_=t.exports={enable:E,fastKey:y,getWeakData:b,onFreeze:w};o[g]=!0},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?s(e):"Object"==(r=s(e))&&o(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),s=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),f=n("b622"),d=n("1dde"),p=n("f36a"),g=d("slice"),m=f("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!g},{slice:function(t,e){var n,r,i,f=l(this),d=u(f),g=c(t,d),b=c(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,s(n)&&(n===v||o(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===v||void 0===n))return p(f,g,b);for(r=new(void 0===n?v:n)(y(b-g,0)),i=0;g<b;g++,i++)g in f&&h(r,i,f[g]);return r.length=i,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.4e64893c.js.map