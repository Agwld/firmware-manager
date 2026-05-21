(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Tf=()=>{};var Rc={};/**
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
 */const sl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},bf=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],c=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,c=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(v=64)),n.push(e[m],e[g],e[v],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(sl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):bf(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const g=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Af;const v=i<<2|c>>4;if(n.push(v),d!==64){const R=c<<4&240|d>>2;if(n.push(R),g!==64){const C=d<<6&192|g;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sf=function(r){const t=sl(r);return il.encodeByteArray(t,!0)},Vs=function(r){return Sf(r).replace(/\./g,"")},Rf=function(r){try{return il.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ol(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pf=()=>ol().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Rc>"u")return;const r=Rc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Cf=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Rf(r[1]);return t&&JSON.parse(t)},Oo=()=>{try{return Tf()||Pf()||Vf()||Cf()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Df=r=>{var t,e;return(e=(t=Oo())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},xf=r=>{const t=Df(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},al=()=>{var r;return(r=Oo())==null?void 0:r.config};/**
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
 */class Nf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function kf(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Vs(JSON.stringify(e)),Vs(JSON.stringify(a)),""].join(".")}/**
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
 */function Cs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cl(){var t;const r=(t=Oo())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ul(){return!cl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ll(){return!cl()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function hl(){try{return typeof indexedDB=="object"}catch{return!1}}function Mf(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Of="FirebaseError";class Fn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Of,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Ff(i,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Fn(s,c,n)}}function Ff(r,t){return r.replace(Lf,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Lf=/\{\$([^}]+)}/g;function Ds(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Pc(i)&&Pc(a)){if(!Ds(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Pc(r){return r!==null&&typeof r=="object"}/**
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
 */function Gt(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bf(r){return(await fetch(r,{credentials:"include"})).ok}class wr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class Uf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Nf;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qf(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:$f(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $f(r){return r===Ue?void 0:r}function qf(r){return r.instantiationMode==="EAGER"}/**
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
 */class jf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const zf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Kf=W.INFO,Gf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Hf=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Gf[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ml{constructor(t){this.name=t,this._logLevel=Kf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Wf=(r,t)=>t.some(e=>r instanceof e);let Vc,Cc;function Qf(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jf(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,so=new WeakMap,pl=new WeakMap,Gi=new WeakMap,Fo=new WeakMap;function Yf(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(ve(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&gl.set(e,r)}).catch(()=>{}),Fo.set(t,r),t}function Xf(r){if(so.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});so.set(r,t)}let io={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return so.get(r);if(t==="objectStoreNames")return r.objectStoreNames||pl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ve(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Zf(r){io=r(io)}function tm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Hi(this),t,...e);return pl.set(n,t.sort?t.sort():[t]),ve(n)}:Jf().includes(r)?function(...t){return r.apply(Hi(this),t),ve(gl.get(this))}:function(...t){return ve(r.apply(Hi(this),t))}}function em(r){return typeof r=="function"?tm(r):(r instanceof IDBTransaction&&Xf(r),Wf(r,Qf())?new Proxy(r,io):r)}function ve(r){if(r instanceof IDBRequest)return Yf(r);if(Gi.has(r))return Gi.get(r);const t=em(r);return t!==r&&(Gi.set(r,t),Fo.set(t,r)),t}const Hi=r=>Fo.get(r);function nm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),c=ve(a);return n&&a.addEventListener("upgradeneeded",l=>{n(ve(a.result),l.oldVersion,l.newVersion,ve(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const rm=["get","getKey","getAll","getAllKeys","count"],sm=["put","add","delete","clear"],Wi=new Map;function Dc(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Wi.get(t))return Wi.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=sm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||rm.includes(e)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&l.done]))[0]};return Wi.set(t,i),i}Zf(r=>({...r,get:(t,e,n)=>Dc(t,e)||r.get(t,e,n),has:(t,e)=>!!Dc(t,e)||r.has(t,e)}));/**
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
 */class im{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(om(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function om(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oo="@firebase/app",xc="0.14.12";/**
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
 */const re=new ml("@firebase/app"),am="@firebase/app-compat",cm="@firebase/analytics-compat",um="@firebase/analytics",lm="@firebase/app-check-compat",hm="@firebase/app-check",dm="@firebase/auth",fm="@firebase/auth-compat",mm="@firebase/database",gm="@firebase/data-connect",pm="@firebase/database-compat",_m="@firebase/functions",ym="@firebase/functions-compat",Im="@firebase/installations",Em="@firebase/installations-compat",vm="@firebase/messaging",wm="@firebase/messaging-compat",Tm="@firebase/performance",bm="@firebase/performance-compat",Am="@firebase/remote-config",Sm="@firebase/remote-config-compat",Rm="@firebase/storage",Pm="@firebase/storage-compat",Vm="@firebase/firestore",Cm="@firebase/ai",Dm="@firebase/firestore-compat",xm="firebase",Nm="12.13.0";/**
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
 */const ao="[DEFAULT]",km={[oo]:"fire-core",[am]:"fire-core-compat",[um]:"fire-analytics",[cm]:"fire-analytics-compat",[hm]:"fire-app-check",[lm]:"fire-app-check-compat",[dm]:"fire-auth",[fm]:"fire-auth-compat",[mm]:"fire-rtdb",[gm]:"fire-data-connect",[pm]:"fire-rtdb-compat",[_m]:"fire-fn",[ym]:"fire-fn-compat",[Im]:"fire-iid",[Em]:"fire-iid-compat",[vm]:"fire-fcm",[wm]:"fire-fcm-compat",[Tm]:"fire-perf",[bm]:"fire-perf-compat",[Am]:"fire-rc",[Sm]:"fire-rc-compat",[Rm]:"fire-gcs",[Pm]:"fire-gcs-compat",[Vm]:"fire-fst",[Dm]:"fire-fst-compat",[Cm]:"fire-vertex","fire-js":"fire-js",[xm]:"fire-js-all"};/**
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
 */const xs=new Map,Mm=new Map,co=new Map;function Nc(r,t){try{r.container.addComponent(t)}catch(e){re.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Ns(r){const t=r.name;if(co.has(t))return re.debug(`There were multiple attempts to register component ${t}.`),!1;co.set(t,r);for(const e of xs.values())Nc(e,r);for(const e of Mm.values())Nc(e,r);return!0}function Om(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Fm(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Lm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new dl("app","Firebase",Lm);/**
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
 */class Bm{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const Um=Nm;function _l(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:ao,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw we.create("bad-app-name",{appName:String(s)});if(e||(e=al()),!e)throw we.create("no-options");const i=xs.get(s);if(i){if(Ds(e,i.options)&&Ds(n,i.config))return i;throw we.create("duplicate-app",{appName:s})}const a=new jf(s);for(const l of co.values())a.addComponent(l);const c=new Bm(e,n,a);return xs.set(s,c),c}function $m(r=ao){const t=xs.get(r);if(!t&&r===ao&&al())return _l();if(!t)throw we.create("no-app",{appName:r});return t}function En(r,t,e){let n=km[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),re.warn(a.join(" "));return}Ns(new wr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const qm="firebase-heartbeat-database",jm=1,Tr="firebase-heartbeat-store";let Qi=null;function yl(){return Qi||(Qi=nm(qm,jm,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Tr)}catch(e){console.warn(e)}}}}).catch(r=>{throw we.create("idb-open",{originalErrorMessage:r.message})})),Qi}async function zm(r){try{const e=(await yl()).transaction(Tr),n=await e.objectStore(Tr).get(Il(r));return await e.done,n}catch(t){if(t instanceof Fn)re.warn(t.message);else{const e=we.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});re.warn(e.message)}}}async function kc(r,t){try{const n=(await yl()).transaction(Tr,"readwrite");await n.objectStore(Tr).put(t,Il(r)),await n.done}catch(e){if(e instanceof Fn)re.warn(e.message);else{const n=we.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});re.warn(n.message)}}}function Il(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Km=1024,Gm=30;class Hm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qm(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gm){const a=Jm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){re.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mc(),{heartbeatsToSend:n,unsentEntries:s}=Wm(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return re.warn(e),""}}}function Mc(){return new Date().toISOString().substring(0,10)}function Wm(r,t=Km){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Oc(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Oc(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Qm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hl()?Mf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return kc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return kc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Oc(r){return Vs(JSON.stringify({version:2,heartbeats:r})).length}function Jm(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Ym(r){Ns(new wr("platform-logger",t=>new im(t),"PRIVATE")),Ns(new wr("heartbeat",t=>new Hm(t),"PRIVATE")),En(oo,xc,r),En(oo,xc,"esm2020"),En("fire-js","")}Ym("");var Xm="firebase",Zm="12.13.0";/**
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
 */En(Xm,Zm,"app");var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,El;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function y(){}y.prototype=p.prototype,I.F=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(w,E,A){for(var _=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)_[Dt-2]=arguments[Dt];return p.prototype[E].apply(w,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,y){y||(y=0);const w=Array(16);if(typeof p=="string")for(var E=0;E<16;++E)w[E]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(E=0;E<16;++E)w[E]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],E=I.g[2];let A=I.g[3],_;_=p+(A^y&(E^A))+w[0]+3614090360&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(E^p&(y^E))+w[1]+3905402710&4294967295,A=p+(_<<12&4294967295|_>>>20),_=E+(y^A&(p^y))+w[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(p^E&(A^p))+w[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=p+(A^y&(E^A))+w[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(E^p&(y^E))+w[5]+1200080426&4294967295,A=p+(_<<12&4294967295|_>>>20),_=E+(y^A&(p^y))+w[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(p^E&(A^p))+w[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=p+(A^y&(E^A))+w[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(E^p&(y^E))+w[9]+2336552879&4294967295,A=p+(_<<12&4294967295|_>>>20),_=E+(y^A&(p^y))+w[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(p^E&(A^p))+w[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=p+(A^y&(E^A))+w[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(E^p&(y^E))+w[13]+4254626195&4294967295,A=p+(_<<12&4294967295|_>>>20),_=E+(y^A&(p^y))+w[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(p^E&(A^p))+w[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=p+(E^A&(y^E))+w[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(p^y))+w[6]+3225465664&4294967295,A=p+(_<<9&4294967295|_>>>23),_=E+(p^y&(A^p))+w[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(E^A))+w[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=p+(E^A&(y^E))+w[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(p^y))+w[10]+38016083&4294967295,A=p+(_<<9&4294967295|_>>>23),_=E+(p^y&(A^p))+w[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(E^A))+w[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=p+(E^A&(y^E))+w[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(p^y))+w[14]+3275163606&4294967295,A=p+(_<<9&4294967295|_>>>23),_=E+(p^y&(A^p))+w[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(E^A))+w[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=p+(E^A&(y^E))+w[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(p^y))+w[2]+4243563512&4294967295,A=p+(_<<9&4294967295|_>>>23),_=E+(p^y&(A^p))+w[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(E^A))+w[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=p+(y^E^A)+w[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^E)+w[8]+2272392833&4294967295,A=p+(_<<11&4294967295|_>>>21),_=E+(A^p^y)+w[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^p)+w[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=p+(y^E^A)+w[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^E)+w[4]+1272893353&4294967295,A=p+(_<<11&4294967295|_>>>21),_=E+(A^p^y)+w[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^p)+w[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=p+(y^E^A)+w[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^E)+w[0]+3936430074&4294967295,A=p+(_<<11&4294967295|_>>>21),_=E+(A^p^y)+w[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^p)+w[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=p+(y^E^A)+w[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^E)+w[12]+3873151461&4294967295,A=p+(_<<11&4294967295|_>>>21),_=E+(A^p^y)+w[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^p)+w[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=p+(E^(y|~A))+w[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~E))+w[7]+1126891415&4294967295,A=p+(_<<10&4294967295|_>>>22),_=E+(p^(A|~y))+w[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~p))+w[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=p+(E^(y|~A))+w[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~E))+w[3]+2399980690&4294967295,A=p+(_<<10&4294967295|_>>>22),_=E+(p^(A|~y))+w[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~p))+w[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=p+(E^(y|~A))+w[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~E))+w[15]+4264355552&4294967295,A=p+(_<<10&4294967295|_>>>22),_=E+(p^(A|~y))+w[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~p))+w[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=p+(E^(y|~A))+w[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~E))+w[11]+3174756917&4294967295,A=p+(_<<10&4294967295|_>>>22),_=E+(p^(A|~y))+w[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.v=function(I,p){p===void 0&&(p=I.length);const y=p-this.blockSize,w=this.C;let E=this.h,A=0;for(;A<p;){if(E==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<p;)if(w[E++]=I.charCodeAt(A++),E==this.blockSize){s(this,w),E=0;break}}else for(;A<p;)if(w[E++]=I[A++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=p},n.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;p=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=p&255,p/=256;for(this.v(I),I=Array(16),p=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)I[p++]=this.g[y]>>>w&255;return I};function i(I,p){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function a(I,p){this.h=p;const y=[];let w=!0;for(let E=I.length-1;E>=0;E--){const A=I[E]|0;w&&A==p||(y[E]=A,w=!1)}this.g=y}var c={};function l(I){return-128<=I&&I<128?i(I,function(p){return new a([p|0],p<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return x(d(-I));const p=[];let y=1;for(let w=0;I>=y;w++)p[w]=I/y|0,y*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return x(m(I.substring(1),p));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let w=g;for(let A=0;A<I.length;A+=8){var E=Math.min(8,I.length-A);const _=parseInt(I.substring(A,A+E),p);E<8?(E=d(Math.pow(p,E)),w=w.j(E).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var g=l(0),v=l(1),R=l(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();let I=0,p=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);I+=(w>=0?w:4294967296+w)*p,p*=4294967296}return I},r.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+x(this).toString(I);const p=d(Math.pow(I,6));var y=this;let w="";for(;;){const E=nt(y,p).g;y=G(y,E.j(p));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=E,C(y))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},r.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function N(I){return I.h==-1}r.l=function(I){return I=G(this,I),N(I)?-1:C(I)?0:1};function x(I){const p=I.g.length,y=[];for(let w=0;w<p;w++)y[w]=~I.g[w];return new a(y,~I.h).add(v)}r.abs=function(){return N(this)?x(this):this},r.add=function(I){const p=Math.max(this.g.length,I.g.length),y=[];let w=0;for(let E=0;E<=p;E++){let A=w+(this.i(E)&65535)+(I.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=_>>>16,A&=65535,_&=65535,y[E]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(I,p){return I.add(x(p))}r.j=function(I){if(C(this)||C(I))return g;if(N(this))return N(I)?x(this).j(x(I)):x(x(this).j(I));if(N(I))return x(this.j(x(I)));if(this.l(R)<0&&I.l(R)<0)return d(this.m()*I.m());const p=this.g.length+I.g.length,y=[];for(var w=0;w<2*p;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const A=this.i(w)>>>16,_=this.i(w)&65535,Dt=I.i(E)>>>16,Ne=I.i(E)&65535;y[2*w+2*E]+=_*Ne,q(y,2*w+2*E),y[2*w+2*E+1]+=A*Ne,q(y,2*w+2*E+1),y[2*w+2*E+1]+=_*Dt,q(y,2*w+2*E+1),y[2*w+2*E+2]+=A*Dt,q(y,2*w+2*E+2)}for(I=0;I<p;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=p;I<2*p;I++)y[I]=0;return new a(y,0)};function q(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function U(I,p){this.g=I,this.h=p}function nt(I,p){if(C(p))throw Error("division by zero");if(C(I))return new U(g,g);if(N(I))return p=nt(x(I),p),new U(x(p.g),x(p.h));if(N(p))return p=nt(I,x(p)),new U(x(p.g),p.h);if(I.g.length>30){if(N(I)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=p;w.l(I)<=0;)y=Q(y),w=Q(w);var E=J(y,1),A=J(w,1);for(w=J(w,2),y=J(y,2);!C(w);){var _=A.add(w);_.l(I)<=0&&(E=E.add(y),A=_),w=J(w,1),y=J(y,1)}return p=G(I,E.j(p)),new U(E,p)}for(E=g;I.l(p)>=0;){for(y=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(y),_=A.j(p);N(_)||_.l(I)>0;)y-=w,A=d(y),_=A.j(p);C(A)&&(A=v),E=E.add(A),I=G(I,_)}return new U(E,I)}r.B=function(I){return nt(this,I).h},r.and=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},r.or=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},r.xor=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function Q(I){const p=I.g.length+1,y=[];for(let w=0;w<p;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function J(I,p){const y=p>>5;p%=32;const w=I.g.length-y,E=[];for(let A=0;A<w;A++)E[A]=p>0?I.i(A+y)>>>p|I.i(A+y+1)<<32-p:I.i(A+y);return new a(E,I.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,El=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Te=a}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vl,ur,wl,_s,uo,Tl,bl,Al;(function(){var r,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ls=="object"&&ls];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,u){if(u)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in h))break t;h=h[b]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var h=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&h.push([f,u[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,h){return o.call.apply(o.bind,arguments)}function d(o,u,h){return d=l,d.apply(null,arguments)}function m(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function g(o,u){function h(){}h.prototype=u.prototype,o.Z=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,b,S){for(var D=Array(arguments.length-2),j=2;j<arguments.length;j++)D[j-2]=arguments[j];return u.prototype[b].apply(f,D)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const u=o.length;if(u>0){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function C(o,u){for(let f=1;f<arguments.length;f++){const b=arguments[f];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const S=b.length||0;o.length=h+S;for(let D=0;D<S;D++)o[h+D]=b[D]}else o.push(b)}}class N{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(o){a.setTimeout(()=>{throw o},0)}function G(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,h){const f=U.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var U=new N(()=>new nt,o=>o.reset());class nt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,J=!1,I=new q,p=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(y)}};function y(){for(var o;o=G();){try{o.h.call(o.g)}catch(h){x(h)}var u=U;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}J=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,u),a.removeEventListener("test",h,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function Dt(o,u){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(Dt,E),Dt.prototype.init=function(o,u){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Dt.Z.h.call(this)},Dt.prototype.h=function(){Dt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),zd=0;function Kd(o,u,h,f,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=b,this.key=++zd,this.da=this.fa=!1}function Qr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jr(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function Gd(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function Sa(o){const u={};for(const h in o)u[h]=o[h];return u}const Ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pa(o,u){let h,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(h in f)o[h]=f[h];for(let S=0;S<Ra.length;S++)h=Ra[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Yr(o){this.src=o,this.g={},this.h=0}Yr.prototype.add=function(o,u,h,f,b){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const D=Ti(o,u,f,b);return D>-1?(u=o[D],h||(u.fa=!1)):(u=new Kd(u,this.src,S,!!f,b),u.fa=h,o.push(u)),u};function wi(o,u){const h=u.type;if(h in o.g){var f=o.g[h],b=Array.prototype.indexOf.call(f,u,void 0),S;(S=b>=0)&&Array.prototype.splice.call(f,b,1),S&&(Qr(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ti(o,u,h,f){for(let b=0;b<o.length;++b){const S=o[b];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==f)return b}return-1}var bi="closure_lm_"+(Math.random()*1e6|0),Ai={};function Va(o,u,h,f,b){if(Array.isArray(u)){for(let S=0;S<u.length;S++)Va(o,u[S],h,f,b);return null}return h=xa(h),o&&o[Ne]?o.J(u,h,c(f)?!!f.capture:!1,b):Hd(o,u,h,!1,f,b)}function Hd(o,u,h,f,b,S){if(!u)throw Error("Invalid event type");const D=c(b)?!!b.capture:!!b;let j=Ri(o);if(j||(o[bi]=j=new Yr(o)),h=j.add(u,h,f,D,S),h.proxy)return h;if(f=Wd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(b=D),b===void 0&&(b=!1),o.addEventListener(u.toString(),f,b);else if(o.attachEvent)o.attachEvent(Da(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Wd(){function o(h){return u.call(o.src,o.listener,h)}const u=Qd;return o}function Ca(o,u,h,f,b){if(Array.isArray(u))for(var S=0;S<u.length;S++)Ca(o,u[S],h,f,b);else f=c(f)?!!f.capture:!!f,h=xa(h),o&&o[Ne]?(o=o.i,S=String(u).toString(),S in o.g&&(u=o.g[S],h=Ti(u,h,f,b),h>-1&&(Qr(u[h]),Array.prototype.splice.call(u,h,1),u.length==0&&(delete o.g[S],o.h--)))):o&&(o=Ri(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ti(u,h,f,b)),(h=o>-1?u[o]:null)&&Si(h))}function Si(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ne])wi(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(Da(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Ri(u))?(wi(h,o),h.h==0&&(h.src=null,u[bi]=null)):Qr(o)}}}function Da(o){return o in Ai?Ai[o]:Ai[o]="on"+o}function Qd(o,u){if(o.da)o=!0;else{u=new Dt(u,this);const h=o.listener,f=o.ha||o.src;o.fa&&Si(o),o=h.call(f,u)}return o}function Ri(o){return o=o[bi],o instanceof Yr?o:null}var Pi="__closure_events_fn_"+(Math.random()*1e9>>>0);function xa(o){return typeof o=="function"?o:(o[Pi]||(o[Pi]=function(u){return o.handleEvent(u)}),o[Pi])}function vt(){w.call(this),this.i=new Yr(this),this.M=this,this.G=null}g(vt,w),vt.prototype[Ne]=!0,vt.prototype.removeEventListener=function(o,u,h,f){Ca(this,o,u,h,f)};function St(o,u){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new E(u,o);else if(u instanceof E)u.target=u.target||o;else{var b=u;u=new E(f,o),Pa(u,b)}b=!0;let S,D;if(h)for(D=h.length-1;D>=0;D--)S=u.g=h[D],b=Xr(S,f,!0,u)&&b;if(S=u.g=o,b=Xr(S,f,!0,u)&&b,b=Xr(S,f,!1,u)&&b,h)for(D=0;D<h.length;D++)S=u.g=h[D],b=Xr(S,f,!1,u)&&b}vt.prototype.N=function(){if(vt.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const h=o.g[u];for(let f=0;f<h.length;f++)Qr(h[f]);delete o.g[u],o.h--}}this.G=null},vt.prototype.J=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},vt.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function Xr(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let b=!0;for(let S=0;S<u.length;++S){const D=u[S];if(D&&!D.da&&D.capture==h){const j=D.listener,ft=D.ha||D.src;D.fa&&wi(o.i,D),b=j.call(ft,f)!==!1&&b}}return b&&!f.defaultPrevented}function Jd(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Na(o){o.g=Jd(()=>{o.g=null,o.i&&(o.i=!1,Na(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Yd extends w{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Na(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(o){w.call(this),this.h=o,this.g={}}g($n,w);var ka=[];function Ma(o){Jr(o.g,function(u,h){this.g.hasOwnProperty(h)&&Si(u)},o),o.g={}}$n.prototype.N=function(){$n.Z.N.call(this),Ma(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vi=a.JSON.stringify,Xd=a.JSON.parse,Zd=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Oa(){}function Fa(){}var qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ci(){E.call(this,"d")}g(Ci,E);function Di(){E.call(this,"c")}g(Di,E);var ke={},La=null;function Zr(){return La=La||new vt}ke.Ia="serverreachability";function Ba(o){E.call(this,ke.Ia,o)}g(Ba,E);function jn(o){const u=Zr();St(u,new Ba(u))}ke.STAT_EVENT="statevent";function Ua(o,u){E.call(this,ke.STAT_EVENT,o),this.stat=u}g(Ua,E);function Rt(o){const u=Zr();St(u,new Ua(u,o))}ke.Ja="timingevent";function $a(o,u){E.call(this,ke.Ja,o),this.size=u}g($a,E);function zn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Kn(){this.g=!0}Kn.prototype.ua=function(){this.g=!1};function tf(o,u,h,f,b,S){o.info(function(){if(o.g)if(S){var D="",j=S.split("&");for(let et=0;et<j.length;et++){var ft=j[et].split("=");if(ft.length>1){const pt=ft[0];ft=ft[1];const Wt=pt.split("_");D=Wt.length>=2&&Wt[1]=="type"?D+(pt+"="+ft+"&"):D+(pt+"=redacted&")}}}else D=null;else D=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+u+`
`+h+`
`+D})}function ef(o,u,h,f,b,S,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+u+`
`+h+`
`+S+" "+D})}function on(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rf(o,h)+(f?" "+f:"")})}function nf(o,u){o.info(function(){return"TIMEOUT: "+u})}Kn.prototype.info=function(){};function rf(o,u){if(!o.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return Vi(S)}catch{return u}}var ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ja;function xi(){}g(xi,Oa),xi.prototype.g=function(){return new XMLHttpRequest},ja=new xi;function Gn(o){return encodeURIComponent(String(o))}function sf(o){var u=1;o=o.split(":");const h=[];for(;u>0&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function le(o,u,h,f){this.j=o,this.i=u,this.l=h,this.S=f||1,this.V=new $n(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var Ka={},Ni={};function ki(o,u,h){o.M=1,o.A=ns(Ht(u)),o.u=h,o.R=!0,Ga(o,null)}function Ga(o,u){o.F=Date.now(),es(o),o.B=Ht(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),ic(h.i,"t",f),o.C=0,h=o.j.L,o.h=new za,o.g=Tc(o.j,h?u:null,!o.u),o.P>0&&(o.O=new Yd(d(o.Y,o,o.g),o.P)),u=o.V,h=o.g,f=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(ka[0]=b.toString()),b=ka);for(let S=0;S<b.length;S++){const D=Va(h,b[S],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.J?Sa(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),jn(),tf(o.i,o.v,o.B,o.l,o.S,o.u)}le.prototype.ba=function(o){o=o.target;const u=this.O;u&&fe(o)==3?u.j():this.Y(o)},le.prototype.Y=function(o){try{if(o==this.g)t:{const j=fe(this.g),ft=this.g.ya(),et=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||dc(this.g)))){this.K||j!=4||ft==7||(ft==8||et<=0?jn(3):jn(2)),Mi(this);var u=this.g.ca();this.X=u;var h=of(this);if(this.o=u==200,ef(this.i,this.v,this.B,this.l,this.S,j,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var S=f;break e}}S=null}if(o=S)on(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oi(this,o);else{this.o=!1,this.m=3,Rt(12),Me(this),Hn(this);break t}}if(this.R){o=!0;let pt;for(;!this.K&&this.C<h.length;)if(pt=af(this,h),pt==Ni){j==4&&(this.m=4,Rt(14),o=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Ka){this.m=4,Rt(15),on(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else on(this.i,this.l,pt,null),Oi(this,pt);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||h.length!=0||this.h.h||(this.m=1,Rt(16),o=!1),this.o=this.o&&o,!o)on(this.i,this.l,h,"[Invalid Chunked Response]"),Me(this),Hn(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),zi(D),D.P=!0,Rt(11))}}else on(this.i,this.l,h,null),Oi(this,h);j==4&&Me(this),this.o&&!this.K&&(j==4?Ic(this.j,this):(this.o=!1,es(this)))}else vf(this.g),u==400&&h.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),Me(this),Hn(this)}}}catch{}finally{}};function of(o){if(!Ha(o))return o.g.la();const u=dc(o.g);if(u==="")return"";let h="";const f=u.length,b=fe(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Me(o),Hn(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<f;S++)o.h.h=!0,h+=o.h.i.decode(u[S],{stream:!(b&&S==f-1)});return u.length=0,o.h.g+=h,o.C=0,o.h.g}function Ha(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function af(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Ni:(h=Number(u.substring(h,f)),isNaN(h)?Ka:(f+=1,f+h>u.length?Ni:(u=u.slice(f,f+h),o.C=f+h,u)))}le.prototype.cancel=function(){this.K=!0,Me(this)};function es(o){o.T=Date.now()+o.H,Wa(o,o.H)}function Wa(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=zn(d(o.aa,o),u)}function Mi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}le.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(nf(this.i,this.B),this.M!=2&&(jn(),Rt(17)),Me(this),this.m=2,Hn(this)):Wa(this,this.T-o)};function Hn(o){o.j.I==0||o.K||Ic(o.j,o)}function Me(o){Mi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Ma(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Oi(o,u){try{var h=o.j;if(h.I!=0&&(h.g==o||Fi(h.h,o))){if(!o.L&&Fi(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)as(h),is(h);else break t;ji(h),Rt(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=zn(d(h.Va,h),6e3));Ya(h.h)<=1&&h.ta&&(h.ta=void 0)}else Fe(h,11)}else if((o.L||h.g==o)&&as(h),!_(u))for(b=h.Ba.g.parse(u),u=0;u<b.length;u++){let et=b[u];const pt=et[0];if(!(pt<=h.K))if(h.K=pt,et=et[1],h.I==2)if(et[0]=="c"){h.M=et[1],h.ba=et[2];const Wt=et[3];Wt!=null&&(h.ka=Wt,h.j.info("VER="+h.ka));const Le=et[4];Le!=null&&(h.za=Le,h.j.info("SVER="+h.za));const me=et[5];me!=null&&typeof me=="number"&&me>0&&(f=1.5*me,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ge=o.g;if(ge){const us=ge.g?ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var S=f.h;S.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Li(S,S.h),S.h=null))}if(f.G){const Ki=ge.g?ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Ki&&(f.wa=Ki,rt(f.J,f.G,Ki))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var D=o;if(f.na=wc(f,f.L?f.ba:null,f.W),D.L){Xa(f.h,D);var j=D,ft=f.O;ft&&(j.H=ft),j.D&&(Mi(j),es(j)),f.g=D}else _c(f);h.i.length>0&&os(h)}else et[0]!="stop"&&et[0]!="close"||Fe(h,7);else h.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Fe(h,7):qi(h):et[0]!="noop"&&h.l&&h.l.qa(et),h.A=0)}}jn(4)}catch{}}var cf=class{constructor(o,u){this.g=o,this.map=u}};function Qa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ja(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ya(o){return o.h?1:o.g?o.g.size:0}function Fi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Li(o,u){o.g?o.g.add(u):o.h=u}function Xa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Qa.prototype.cancel=function(){if(this.i=Za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Za(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.G);return u}return R(o.i)}var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(o,u){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let b,S=null;f>=0?(b=o[h].substring(0,f),S=o[h].substring(f+1)):b=o[h],u(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function he(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof he?(this.l=o.l,Wn(this,o.j),this.o=o.o,this.g=o.g,Qn(this,o.u),this.h=o.h,Bi(this,oc(o.i)),this.m=o.m):o&&(u=String(o).match(tc))?(this.l=!1,Wn(this,u[1]||"",!0),this.o=Jn(u[2]||""),this.g=Jn(u[3]||"",!0),Qn(this,u[4]),this.h=Jn(u[5]||"",!0),Bi(this,u[6]||"",!0),this.m=Jn(u[7]||"")):(this.l=!1,this.i=new Xn(null,this.l))}he.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Yn(u,ec,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Yn(u,ec,!0),"@"),o.push(Gn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Yn(h,h.charAt(0)=="/"?df:hf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Yn(h,mf)),o.join("")},he.prototype.resolve=function(o){const u=Ht(this);let h=!!o.j;h?Wn(u,o.j):h=!!o.o,h?u.o=o.o:h=!!o.g,h?u.g=o.g:h=o.u!=null;var f=o.h;if(h)Qn(u,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=u.h.lastIndexOf("/");b!=-1&&(f=u.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let D=0;D<b.length;){const j=b[D++];j=="."?f&&D==b.length&&S.push(""):j==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&D==b.length&&S.push("")):(S.push(j),f=!0)}f=S.join("/")}else f=b}return h?u.h=f:h=o.i.toString()!=="",h?Bi(u,oc(o.i)):h=!!o.m,h&&(u.m=o.m),u};function Ht(o){return new he(o)}function Wn(o,u,h){o.j=h?Jn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Qn(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Bi(o,u,h){u instanceof Xn?(o.i=u,gf(o.i,o.l)):(h||(u=Yn(u,ff)),o.i=new Xn(u,o.l))}function rt(o,u,h){o.i.set(u,h)}function ns(o){return rt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Jn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,lf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ec=/[#\/\?@]/g,hf=/[#\?:]/g,df=/[#\?]/g,ff=/[#\?@]/g,mf=/#/g;function Xn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Oe(o){o.g||(o.g=new Map,o.h=0,o.i&&uf(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}r=Xn.prototype,r.add=function(o,u){Oe(this),this.i=null,o=an(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function nc(o,u){Oe(o),u=an(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function rc(o,u){return Oe(o),u=an(o,u),o.g.has(u)}r.forEach=function(o,u){Oe(this),this.g.forEach(function(h,f){h.forEach(function(b){o.call(u,b,f,this)},this)},this)};function sc(o,u){Oe(o);let h=[];if(typeof u=="string")rc(o,u)&&(h=h.concat(o.g.get(an(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)h=h.concat(o[u]);return h}r.set=function(o,u){return Oe(this),this.i=null,o=an(this,o),rc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=sc(this,o),o.length>0?String(o[0]):u):u};function ic(o,u,h){nc(o,u),h.length>0&&(o.i=null,o.g.set(an(o,u),R(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var h=u[f];const b=Gn(h);h=sc(this,h);for(let S=0;S<h.length;S++){let D=b;h[S]!==""&&(D+="="+Gn(h[S])),o.push(D)}}return this.i=o.join("&")};function oc(o){const u=new Xn;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function an(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gf(o,u){u&&!o.j&&(Oe(o),o.i=null,o.g.forEach(function(h,f){const b=f.toLowerCase();f!=b&&(nc(this,f),ic(this,b,h))},o)),o.j=u}function pf(o,u){const h=new Kn;if(a.Image){const f=new Image;f.onload=m(de,h,"TestLoadImage: loaded",!0,u,f),f.onerror=m(de,h,"TestLoadImage: error",!1,u,f),f.onabort=m(de,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=m(de,h,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function _f(o,u){const h=new Kn,f=new AbortController,b=setTimeout(()=>{f.abort(),de(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?de(h,"TestPingServer: ok",!0,u):de(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),de(h,"TestPingServer: error",!1,u)})}function de(o,u,h,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(h)}catch{}}function yf(){this.g=new Zd}function Ui(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Ui,Oa),Ui.prototype.g=function(){return new rs(this.i,this.h)};function rs(o,u){vt.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(rs,vt),r=rs.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,tr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ac(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ac(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Zn(this):tr(this),this.readyState==3&&ac(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,Zn(this))},r.Na=function(o){this.g&&(this.response=o,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,tr(o)}r.setRequestHeader=function(o,u){this.A.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function tr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cc(o){let u="";return Jr(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function $i(o,u,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=cc(h),typeof o=="string"?h!=null&&Gn(h):rt(o,u,h))}function at(o){vt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(at,vt);var If=/^https?$/i,Ef=["POST","PUT"];r=at.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ja.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){uc(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)h.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ef,u,void 0)>=0)||f||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of h)this.g.setRequestHeader(S,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){uc(this,S)}};function uc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,lc(o),ss(o)}function lc(o){o.A||(o.A=!0,St(o,"complete"),St(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,St(this,"complete"),St(this,"abort"),ss(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ss(this,!0)),at.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?hc(this):this.Xa())},r.Xa=function(){hc(this)};function hc(o){if(o.h&&typeof i<"u"){if(o.v&&fe(o)==4)setTimeout(o.Ca.bind(o),0);else if(St(o,"readystatechange"),fe(o)==4){o.h=!1;try{const S=o.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var f;if(f=S===0){let D=String(o.D).match(tc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),f=!If.test(D?D.toLowerCase():"")}h=f}if(h)St(o,"complete"),St(o,"success");else{o.o=6;try{var b=fe(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",lc(o)}}finally{ss(o)}}}}function ss(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,u||St(o,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function fe(o){return o.g?o.g.readyState:0}r.ca=function(){try{return fe(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Xd(u)}};function dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(o){const u={};o=(o.g&&fe(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=sf(o[f]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[b]||[];u[b]=S,S.push(h)}Gd(u,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function fc(o){this.za=0,this.i=[],this.j=new Kn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=er("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=er("baseRetryDelayMs",5e3,o),this.Za=er("retryDelaySeedMs",1e4,o),this.Ta=er("forwardChannelMaxRetries",2,o),this.va=er("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Qa(o&&o.concurrentRequestLimit),this.Ba=new yf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=fc.prototype,r.ka=8,r.I=1,r.connect=function(o,u,h,f){Rt(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=wc(this,null,this.W),os(this)};function qi(o){if(mc(o),o.I==3){var u=o.V++,h=Ht(o.J);if(rt(h,"SID",o.M),rt(h,"RID",u),rt(h,"TYPE","terminate"),nr(o,h),u=new le(o,o.j,u),u.M=2,u.A=ns(Ht(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=u.A,h=!0),h||(u.g=Tc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),es(u)}vc(o)}function is(o){o.g&&(zi(o),o.g.cancel(),o.g=null)}function mc(o){is(o),o.v&&(a.clearTimeout(o.v),o.v=null),as(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function os(o){if(!Ja(o.h)&&!o.m){o.m=!0;var u=o.Ea;Q||p(),J||(Q(),J=!0),I.add(u,o),o.D=0}}function wf(o,u){return Ya(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=zn(d(o.Ea,o,u),Ec(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new le(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Sa(S),Pa(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=pc(this,b,u),h=Ht(this.J),rt(h,"RID",o),rt(h,"CVER",22),this.G&&rt(h,"X-HTTP-Session-Id",this.G),nr(this,h),S&&(this.R?u="headers="+Gn(cc(S))+"&"+u:this.u&&$i(h,this.u,S)),Li(this.h,b),this.Ra&&rt(h,"TYPE","init"),this.S?(rt(h,"$req",u),rt(h,"SID","null"),b.U=!0,ki(b,h,null)):ki(b,h,u),this.I=2}}else this.I==3&&(o?gc(this,o):this.i.length==0||Ja(this.h)||gc(this))};function gc(o,u){var h;u?h=u.l:h=o.V++;const f=Ht(o.J);rt(f,"SID",o.M),rt(f,"RID",h),rt(f,"AID",o.K),nr(o,f),o.u&&o.o&&$i(f,o.u,o.o),h=new le(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),u&&(o.i=u.G.concat(o.i)),u=pc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Li(o.h,h),ki(h,f,u)}function nr(o,u){o.H&&Jr(o.H,function(h,f){rt(u,f,h)}),o.l&&Jr({},function(h,f){rt(u,f,h)})}function pc(o,u,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;t:{var b=o.i;let j=-1;for(;;){const ft=["count="+h];j==-1?h>0?(j=b[0].g,ft.push("ofs="+j)):j=0:ft.push("ofs="+j);let et=!0;for(let pt=0;pt<h;pt++){var S=b[pt].g;const Wt=b[pt].map;if(S-=j,S<0)j=Math.max(0,b[pt].g-100),et=!1;else try{S="req"+S+"_"||"";try{var D=Wt instanceof Map?Wt:Object.entries(Wt);for(const[Le,me]of D){let ge=me;c(me)&&(ge=Vi(me)),ft.push(S+Le+"="+encodeURIComponent(ge))}}catch(Le){throw ft.push(S+"type="+encodeURIComponent("_badmap")),Le}}catch{f&&f(Wt)}}if(et){D=ft.join("&");break t}}D=void 0}return o=o.i.splice(0,h),u.G=o,D}function _c(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;Q||p(),J||(Q(),J=!0),I.add(u,o),o.A=0}}function ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=zn(d(o.Da,o),Ec(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,yc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=zn(d(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),is(this),yc(this))};function zi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function yc(o){o.g=new le(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Ht(o.na);rt(u,"RID","rpc"),rt(u,"SID",o.M),rt(u,"AID",o.K),rt(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&rt(u,"TO",o.ia),rt(u,"TYPE","xmlhttp"),nr(o,u),o.u&&o.o&&$i(u,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ns(Ht(u)),h.u=null,h.R=!0,Ga(h,o)}r.Va=function(){this.C!=null&&(this.C=null,is(this),ji(this),Rt(19))};function as(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ic(o,u){var h=null;if(o.g==u){as(o),zi(o),o.g=null;var f=2}else if(Fi(o.h,u))h=u.G,Xa(o.h,u),f=1;else return;if(o.I!=0){if(u.o)if(f==1){h=u.u?u.u.length:0,u=Date.now()-u.F;var b=o.D;f=Zr(),St(f,new $a(f,h)),os(o)}else _c(o);else if(b=u.m,b==3||b==0&&u.X>0||!(f==1&&wf(o,u)||f==2&&ji(o)))switch(h&&h.length>0&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Fe(o,5);break;case 4:Fe(o,10);break;case 3:Fe(o,6);break;default:Fe(o,2)}}}function Ec(o,u){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*u}function Fe(o,u){if(o.j.info("Error code "+u),u==2){var h=d(o.bb,o),f=o.Ua;const b=!f;f=new he(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wn(f,"https"),ns(f),b?pf(f.toString(),h):_f(f.toString(),h)}else Rt(2);o.I=0,o.l&&o.l.pa(u),vc(o),mc(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function vc(o){if(o.I=0,o.ja=[],o.l){const u=Za(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ja,u),C(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function wc(o,u,h){var f=h instanceof he?Ht(h):new he(h);if(f.g!="")u&&(f.g=u+"."+f.g),Qn(f,f.u);else{var b=a.location;f=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;const S=new he(null);f&&Wn(S,f),u&&(S.g=u),b&&Qn(S,b),h&&(S.h=h),f=S}return h=o.G,u=o.wa,h&&u&&rt(f,h,u),rt(f,"VER",o.ka),nr(o,f),f}function Tc(o,u,h){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new at(new Ui({ab:h})):new at(o.ma),u.Fa(o.L),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}r=bc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function cs(){}cs.prototype.g=function(o,u){return new Nt(o,u)};function Nt(o,u){vt.call(this),this.g=new fc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new cn(this)}g(Nt,vt),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){qi(this.g)},Nt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Vi(o),o=h);u.i.push(new cf(u.Ya++,o)),u.I==3&&os(u)},Nt.prototype.N=function(){this.g.l=null,delete this.j,qi(this.g),delete this.g,Nt.Z.N.call(this)};function Ac(o){Ci.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const h in u){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Ac,Ci);function Sc(){Di.call(this),this.status=1}g(Sc,Di);function cn(o){this.g=o}g(cn,bc),cn.prototype.ra=function(){St(this.g,"a")},cn.prototype.qa=function(o){St(this.g,new Ac(o))},cn.prototype.pa=function(o){St(this.g,new Sc)},cn.prototype.oa=function(){St(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Al=function(){return new cs},bl=function(){return Zr()},Tl=ke,uo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,_s=ts,qa.COMPLETE="complete",wl=qa,Fa.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",vt.prototype.listen=vt.prototype.J,ur=Fa,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,vl=at}).apply(typeof ls<"u"?ls:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Ln="12.13.0";function tg(r){Ln=r}/**
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
 */const Xe=new ml("@firebase/firestore");function gn(){return Xe.logLevel}function V(r,...t){if(Xe.logLevel<=W.DEBUG){const e=t.map(Lo);Xe.debug(`Firestore (${Ln}): ${r}`,...e)}}function Pt(r,...t){if(Xe.logLevel<=W.ERROR){const e=t.map(Lo);Xe.error(`Firestore (${Ln}): ${r}`,...e)}}function Se(r,...t){if(Xe.logLevel<=W.WARN){const e=t.map(Lo);Xe.warn(`Firestore (${Ln}): ${r}`,...e)}}function Lo(r){if(typeof r=="string")return r;try{return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Sl(r,n,e)}function Sl(r,t,e){let n=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Pt(n),new Error(n)}function F(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Sl(t,s,n)}function $(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Rl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class ng{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rg{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){F(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ne)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string",31837,{l:n}),new Rl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string",2055,{h:t}),new It(t)}}class sg{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ig{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new sg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class og{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fm(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){F(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(F(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Lc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ag(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Bo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=ag(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function lo(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return Ji(s)===Ji(i)?B(s,i):Ji(s)?1:-1}return B(r.length,t.length)}const cg=55296,ug=57343;function Ji(r){const t=r.charCodeAt(0);return t>=cg&&t<=ug}function bn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Pl(r){return r+"\0"}/**
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
 */const Bc="__name__";class Qt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Qt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Qt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return B(t.length,e.length)}static compareSegments(t,e){const n=Qt.isNumericId(t),s=Qt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Qt.extractNumericId(t).compare(Qt.extractNumericId(e)):lo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Te.fromString(t.substring(4,t.length-2))}}class Y extends Qt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Qt{construct(t,e,n){return new ot(t,e,n)}static isValidIdentifier(t){return lg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bc}static keyField(){return new ot([Bc])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(i(),s++)}if(i(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Y.fromString(t))}static fromName(t){return new k(Y.fromString(t).popFirst(5))}static empty(){return new k(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Y(t.slice()))}}/**
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
 */function Vl(r,t,e){if(!e)throw new M(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function hg(r,t,e,n){if(t===!0&&n===!0)throw new M(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Uc(r){if(!k.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $c(r){if(k.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Cl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Uo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function Ot(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Uo(r);throw new M(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(r,t){const e={typeString:r};return t&&(e.value=t),e}function Lr(r,t){if(!Cl(r))throw new M(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new M(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const qc=-62135596800,jc=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*jc);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<qc)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jc}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Lr(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-qc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:ht("string",X._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const br=-1;class ks{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function ho(r){return r.fields.find(t=>t.kind===2)}function $e(r){return r.fields.filter(t=>t.kind!==2)}ks.UNKNOWN_ID=-1;class ys{constructor(t,e){this.fieldPath=t,this.kind=e}}class Ar{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Ar(0,Ft.min())}}function dg(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new Ft(s,k.empty(),t)}function Dl(r){return new Ft(r.readTime,r.key,br)}class Ft{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ft(L.min(),k.empty(),br)}static max(){return new Ft(L.max(),k.empty(),br)}}function $o(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
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
 */const xl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==xl)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new T((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof T?e:T.resolve(e)}catch(e){return T.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):T.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):T.reject(e)}static resolve(t){return new T((e,n)=>{e(t)})}static reject(t){return new T((e,n)=>{n(t)})}static waitFor(t){return new T((e,n)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=T.resolve(!1);for(const n of t)e=e.next(s=>s?T.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new T((n,s)=>{const i=t.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++c,c===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new T((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
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
 */const kt="SimpleDb";class Zs{static open(t,e,n,s){try{return new Zs(e,t.transaction(s,n))}catch(i){throw new mr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new ne,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new mr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=qo(n.target.error);this.S.reject(new mr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(V(kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new mg(e)}}class be{static delete(t){return V(kt,"Removing database:",t),je(ol().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!hl())return!1;if(be.F())return!0;const t=Cs(),e=be.M(t),n=0<e&&e<10,s=kl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,be.M(Cs())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(V(kt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new mr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new M(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new M(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new mr(t,a))},s.onupgradeneeded=i=>{V(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{V(kt,"Database upgrade to version "+this.version+" complete")})}})),this.K&&(this.db.onversionchange=e=>this.K(e)),this.db}q(t){this.K=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const c=Zs.open(this.db,t,i?"readonly":"readwrite",n),l=s(c).next(d=>(c.C(),d)).catch(d=>(c.abort(d),T.reject(d))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&a<3;if(V(kt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function kl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class fg{constructor(t){this.U=t,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(t){this.U=t}done(){this.$=!0}j(t){this.W=t}delete(){return je(this.U.delete())}}class mr extends M{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function De(r){return r.name==="IndexedDbTransactionError"}class mg{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(V(kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(V(kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),je(n)}add(t){return V(kt,"ADD",this.store.name,t,t),je(this.store.add(t))}get(t){return je(this.store.get(t)).next(e=>(e===void 0&&(e=null),V(kt,"GET",this.store.name,t,e),e))}delete(t){return V(kt,"DELETE",this.store.name,t),je(this.store.delete(t))}count(){return V(kt,"COUNT",this.store.name),je(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new T((a,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(c,l)=>{a.push(l)}).next(()=>a)}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new T((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}X(t,e){V(kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.H(s,(i,a,c)=>c.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new T((n,s)=>{e.onerror=i=>{const a=qo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(c=>{c?a.continue():n()}):n()}})}H(t,e){const n=[];return new T((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const c=a.target.result;if(!c)return void s();const l=new fg(c),d=e(c.primaryKey,c.value,l);if(d instanceof T){const m=d.catch(g=>(l.done(),T.reject(g)));n.push(m)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}}).next(()=>T.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function je(r){return new T((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=qo(n.target.error);e(s)}})}let zc=!1;function qo(r){const t=be.M(Cs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zc||(zc=!0,setTimeout(()=>{throw n},0)),n}}return r}const gr="IndexBackfiller";class gg{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){V(gr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();V(gr,`Documents written: ${e}`)}catch(e){De(e)?V(gr,"Ignoring IndexedDB error during index backfill: ",e):await rn(e)}await this.re(6e4)})}}class pg{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return T.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return V(gr,`Processing collection: ${a}`),this.oe(t,a,s).next(c=>{s-=c,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(c=>(V(gr,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(t,e,c))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Dl(i);$o(a,n)>0&&(n=a)}),new Ft(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Bt.ce=-1;/**
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
 */const We=-1;function ti(r){return r==null}function Sr(r){return r===0&&1/r==-1/0}function _g(r){return typeof r=="number"&&Number.isInteger(r)&&!Sr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ms="";function At(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Kc(t)),t=yg(r.get(e),t);return Kc(t)}function yg(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Ms:e+="";break;default:e+=i}}return e}function Kc(r){return r+Ms+""}function Jt(r){const t=r.length;if(F(t>=2,64408,{path:r}),t===2)return F(r.charAt(0)===Ms&&r.charAt(1)==="",56145,{path:r}),Y.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Ms,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const c=r.substring(i,a);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new Y(n)}/**
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
 */const qe="remoteDocuments",Br="owner",un="owner",Rr="mutationQueues",Ig="userId",qt="mutations",Gc="batchId",He="userMutationsIndex",Hc=["userId","batchId"];/**
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
 */function Is(r,t){return[r,At(t)]}function Ml(r,t,e){return[r,At(t),e]}const Eg={},An="documentMutations",Os="remoteDocumentsV14",vg=["prefixPath","collectionGroup","readTime","documentId"],Es="documentKeyIndex",wg=["prefixPath","collectionGroup","documentId"],Ol="collectionGroupIndex",Tg=["collectionGroup","readTime","prefixPath","documentId"],Pr="remoteDocumentGlobal",fo="remoteDocumentGlobalKey",Sn="targets",Fl="queryTargetsIndex",bg=["canonicalId","targetId"],Rn="targetDocuments",Ag=["targetId","path"],jo="documentTargetsIndex",Sg=["path","targetId"],Fs="targetGlobalKey",Qe="targetGlobal",Vr="collectionParents",Rg=["collectionId","parent"],Pn="clientMetadata",Pg="clientId",ei="bundles",Vg="bundleId",ni="namedQueries",Cg="name",zo="indexConfiguration",Dg="indexId",mo="collectionGroupIndex",xg="collectionGroup",pr="indexState",Ng=["indexId","uid"],Ll="sequenceNumberIndex",kg=["uid","sequenceNumber"],_r="indexEntries",Mg=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Bl="documentKeyIndex",Og=["indexId","uid","orderedDocumentKey"],ri="documentOverlays",Fg=["userId","collectionPath","documentId"],go="collectionPathOverlayIndex",Lg=["userId","collectionPath","largestBatchId"],Ul="collectionGroupOverlayIndex",Bg=["userId","collectionGroup","largestBatchId"],Ko="globals",Ug="name",$l=[Rr,qt,An,qe,Sn,Br,Qe,Rn,Pn,Pr,Vr,ei,ni],$g=[...$l,ri],ql=[Rr,qt,An,Os,Sn,Br,Qe,Rn,Pn,Pr,Vr,ei,ni,ri],jl=ql,Go=[...jl,zo,pr,_r],qg=Go,zl=[...Go,Ko],jg=zl;/**
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
 */class po extends Nl{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function gt(r,t){const e=$(r);return be.O(e.le,t)}/**
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
 */function Wc(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function xe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Kl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class st{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hs(this.root,t,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hs(this.root,t,this.comparator,!0)}}class hs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Et(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Z{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(t){return new Qc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class Qc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ln(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class xt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new xt([])}unionWith(t){let e=new Z(ot.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Gl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gl("Invalid base64 string: "+i):i}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const zg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(r){if(F(!!r,39018),typeof r=="string"){let t=0;const e=zg.exec(r);if(F(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ie(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
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
 */const Hl="server_timestamp",Wl="__type__",Ql="__previous_value__",Jl="__local_write_time__";function Ho(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Wl])==null?void 0:n.stringValue)===Hl}function si(r){const t=r.mapValue.fields[Ql];return Ho(t)?si(t):t}function Cr(r){const t=se(r.mapValue.fields[Jl].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class Kg{constructor(t,e,n,s,i,a,c,l,d,m,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const Ls="(default)";class Ze{constructor(t,e){this.projectId=t,this.database=e||Ls}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database===Ls}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}function Gg(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(r.options.projectId,t)}/**
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
 */const Wo="__type__",Yl="__max__",Ee={mapValue:{fields:{__type__:{stringValue:Yl}}}},Qo="__vector__",Vn="value",vs={nullValue:"NULL_VALUE"};function Re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ho(r)?4:Xl(r)?9007199254740991:ii(r)?10:11:O(28295,{value:r})}function te(r,t){if(r===t)return!0;const e=Re(r);if(e!==Re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Cr(r).isEqual(Cr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=se(s.timestampValue),c=se(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ie(s.bytesValue).isEqual(ie(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=it(s.doubleValue),c=it(i.doubleValue);return a===c?Sr(a)===Sr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return bn(r.arrayValue.values||[],t.arrayValue.values||[],te);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wc(a)!==Wc(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!te(a[l],c[l])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function Dr(r,t){return(r.values||[]).find(e=>te(e,t))!==void 0}function Pe(r,t){if(r===t)return 0;const e=Re(r),n=Re(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(i,a){const c=it(i.integerValue||i.doubleValue),l=it(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,t);case 3:return Jc(r.timestampValue,t.timestampValue);case 4:return Jc(Cr(r),Cr(t));case 5:return lo(r.stringValue,t.stringValue);case 6:return function(i,a){const c=ie(i),l=ie(a);return c.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=B(c[d],l[d]);if(m!==0)return m}return B(c.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const c=B(it(i.latitude),it(a.latitude));return c!==0?c:B(it(i.longitude),it(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Yc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var v,R,C,N;const c=i.fields||{},l=a.fields||{},d=(v=c[Vn])==null?void 0:v.arrayValue,m=(R=l[Vn])==null?void 0:R.arrayValue,g=B(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((N=m==null?void 0:m.values)==null?void 0:N.length)||0);return g!==0?g:Yc(d,m)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ee.mapValue&&a===Ee.mapValue)return 0;if(i===Ee.mapValue)return 1;if(a===Ee.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const v=lo(l[g],m[g]);if(v!==0)return v;const R=Pe(c[l[g]],d[m[g]]);if(R!==0)return R}return B(l.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function Jc(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=se(r),n=se(t),s=B(e.seconds,n.seconds);return s!==0?s:B(e.nanos,n.nanos)}function Yc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Pe(e[s],n[s]);if(i)return i}return B(e.length,n.length)}function Cn(r){return _o(r)}function _o(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=se(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ie(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return k.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=_o(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${_o(e.fields[a])}`;return s+"}"}(r.mapValue):O(61005,{value:r})}function ws(r){switch(Re(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=si(r);return t?16+ws(t):16;case 5:return 2*r.stringValue.length;case 6:return ie(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ws(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return xe(n.fields,(i,a)=>{s+=i.length+ws(a)}),s}(r.mapValue);default:throw O(13486,{value:r})}}function Jo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function yo(r){return!!r&&"integerValue"in r}function xr(r){return!!r&&"arrayValue"in r}function Xc(r){return!!r&&"nullValue"in r}function Zc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ts(r){return!!r&&"mapValue"in r}function ii(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Wo])==null?void 0:n.stringValue)===Qo}function yr(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return xe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=yr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yr(r.arrayValue.values[e]);return t}return{...r}}function Xl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Yl}const Zl={mapValue:{fields:{[Wo]:{stringValue:Qo},[Vn]:{arrayValue:{}}}}};function Hg(r){return"nullValue"in r?vs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Jo(Ze.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ii(r)?Zl:{mapValue:{}}:O(35942,{value:r})}function Wg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Jo(Ze.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Zl:"mapValue"in r?ii(r)?{mapValue:{}}:Ee:O(61959,{value:r})}function tu(r,t){const e=Pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function eu(r,t){const e=Pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yr(e)}setAll(t){let e=ot.emptyPath(),n={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=c.popLast()}a?n[c.lastSegment()]=yr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return te(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ts(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){xe(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new bt(yr(this.value))}}function th(r){const t=[];return xe(r.fields,(e,n)=>{const s=new ot([e]);if(Ts(n)){const i=th(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new xt(t)}/**
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
 */class ct{constructor(t,e,n,s,i,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new ct(t,0,L.min(),L.min(),L.min(),bt.empty(),0)}static newFoundDocument(t,e,n,s){return new ct(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new ct(t,2,e,L.min(),L.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new ct(t,3,e,L.min(),L.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dn{constructor(t,e){this.position=t,this.inclusive=e}}function nu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(a.referenceValue),e.key):n=Pe(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function ru(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!te(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Bs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qg(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class eh{}class K extends eh{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Jg(t,e,n):e==="array-contains"?new Zg(t,n):e==="in"?new ah(t,n):e==="not-in"?new tp(t,n):e==="array-contains-any"?new ep(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Yg(t,n):new Xg(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Pe(e,this.value)):e!==null&&Re(this.value)===Re(e)&&this.matchesComparison(Pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends eh{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new tt(t,e)}matches(t){return xn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xn(r){return r.op==="and"}function Io(r){return r.op==="or"}function Yo(r){return nh(r)&&xn(r)}function nh(r){for(const t of r.filters)if(t instanceof tt)return!1;return!0}function Eo(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+Cn(r.value);if(Yo(r))return r.filters.map(t=>Eo(t)).join(",");{const t=r.filters.map(e=>Eo(e)).join(",");return`${r.op}(${t})`}}function rh(r,t){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&te(n.value,s.value)}(r,t):r instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,c)=>i&&rh(a,s.filters[c]),!0):!1}(r,t):void O(19439)}function sh(r,t){const e=r.filters.concat(t);return tt.create(e,r.op)}function ih(r){return r instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${Cn(e.value)}`}(r):r instanceof tt?function(e){return e.op.toString()+" {"+e.getFilters().map(ih).join(" ,")+"}"}(r):"Filter"}class Jg extends K{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yg extends K{constructor(t,e){super(t,"in",e),this.keys=oh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xg extends K{constructor(t,e){super(t,"not-in",e),this.keys=oh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oh(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>k.fromName(n.referenceValue))}class Zg extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xr(e)&&Dr(e.arrayValue,this.value)}}class ah extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dr(this.value.arrayValue,e)}}class tp extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Dr(this.value.arrayValue,e)}}class ep extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Dr(this.value.arrayValue,n))}}/**
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
 */class np{constructor(t,e=null,n=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function vo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new np(r,t,e,n,s,i,a)}function tn(r){const t=$(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Eo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cn(n)).join(",")),t.Te=e}return t.Te}function Ur(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Qg(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!rh(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ru(r.startAt,t.startAt)&&ru(r.endAt,t.endAt)}function Us(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function $s(r,t){return r.filters.filter(e=>e instanceof K&&e.field.isEqual(t))}function su(r,t,e){let n=vs,s=!0;for(const i of $s(r,t)){let a=vs,c=!0;switch(i.op){case"<":case"<=":a=Hg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,c=!1;break;case"!=":case"not-in":a=vs}tu({value:n,inclusive:s},{value:a,inclusive:c})<0&&(n=a,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];tu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function iu(r,t,e){let n=Ee,s=!0;for(const i of $s(r,t)){let a=Ee,c=!0;switch(i.op){case">=":case">":a=Wg(i.value),c=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,c=!1;break;case"!=":case"not-in":a=Ee}eu({value:n,inclusive:s},{value:a,inclusive:c})>0&&(n=a,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];eu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class oi{constructor(t,e=null,n=[],s=[],i=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function rp(r,t,e,n,s,i,a,c){return new oi(r,t,e,n,s,i,a,c)}function $r(r){return new oi(r)}function ou(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sp(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ip(r){return r.collectionGroup!==null}function Ir(r){const t=$(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Z(ot.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Bs(i,n))}),e.has(ot.keyField().canonicalString())||t.Ie.push(new Bs(ot.keyField(),n))}return t.Ie}function Ut(r){const t=$(r);return t.Ee||(t.Ee=op(t,Ir(r))),t.Ee}function op(r,t){if(r.limitType==="F")return vo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bs(s.field,i)});const e=r.endAt?new Dn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Dn(r.startAt.position,r.startAt.inclusive):null;return vo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function wo(r,t,e){return new oi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ai(r,t){return Ur(Ut(r),Ut(t))&&r.limitType===t.limitType}function ch(r){return`${tn(Ut(r))}|lt:${r.limitType}`}function pn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ih(s)).join(", ")}]`),ti(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cn(s)).join(",")),`Target(${n})`}(Ut(r))}; limitType=${r.limitType})`}function qr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Ir(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,c,l){const d=nu(a,c,l);return a.inclusive?d<=0:d<0}(n.startAt,Ir(n),s)||n.endAt&&!function(a,c,l){const d=nu(a,c,l);return a.inclusive?d>=0:d>0}(n.endAt,Ir(n),s))}(r,t)}function ap(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function uh(r){return(t,e)=>{let n=!1;for(const s of Ir(r)){const i=cp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function cp(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Pe(l,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
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
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xe(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const up=new st(k.comparator);function Mt(){return up}const lh=new st(k.comparator);function lr(...r){let t=lh;for(const e of r)t=t.insert(e.key,e);return t}function hh(r){let t=lh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Yt(){return Er()}function dh(){return Er()}function Er(){return new ce(r=>r.toString(),(r,t)=>r.isEqual(t))}const lp=new st(k.comparator),hp=new Z(k.comparator);function z(...r){let t=hp;for(const e of r)t=t.add(e);return t}const dp=new Z(B);function fp(){return dp}/**
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
 */function Xo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sr(t)?"-0":t}}function fh(r){return{integerValue:""+r}}function mp(r,t){return _g(t)?fh(t):Xo(r,t)}/**
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
 */class ci{constructor(){this._=void 0}}function gp(r,t,e){return r instanceof Nr?function(s,i){const a={fields:{[Wl]:{stringValue:Hl},[Jl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ho(i)&&(i=si(i)),i&&(a.fields[Ql]=i),{mapValue:a}}(e,t):r instanceof Nn?gh(r,t):r instanceof kn?ph(r,t):function(s,i){const a=mh(s,i),c=au(a)+au(s.Ae);return yo(a)&&yo(s.Ae)?fh(c):Xo(s.serializer,c)}(r,t)}function pp(r,t,e){return r instanceof Nn?gh(r,t):r instanceof kn?ph(r,t):e}function mh(r,t){return r instanceof kr?function(n){return yo(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Nr extends ci{}class Nn extends ci{constructor(t){super(),this.elements=t}}function gh(r,t){const e=_h(t);for(const n of r.elements)e.some(s=>te(s,n))||e.push(n);return{arrayValue:{values:e}}}class kn extends ci{constructor(t){super(),this.elements=t}}function ph(r,t){let e=_h(t);for(const n of r.elements)e=e.filter(s=>!te(s,n));return{arrayValue:{values:e}}}class kr extends ci{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function au(r){return it(r.integerValue||r.doubleValue)}function _h(r){return xr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class _p{constructor(t,e){this.field=t,this.transform=e}}function yp(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Nn&&s instanceof Nn||n instanceof kn&&s instanceof kn?bn(n.elements,s.elements,te):n instanceof kr&&s instanceof kr?te(n.Ae,s.Ae):n instanceof Nr&&s instanceof Nr}(r.transform,t.transform)}class Ip{constructor(t,e){this.version=t,this.transformResults=e}}class yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ui{}function yh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new jr(r.key,yt.none()):new Bn(r.key,r.data,yt.none());{const e=r.data,n=bt.empty();let s=new Z(ot.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ue(r.key,n,new xt(s.toArray()),yt.none())}}function Ep(r,t,e){r instanceof Bn?function(s,i,a){const c=s.value.clone(),l=uu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ue?function(s,i,a){if(!bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=uu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Ih(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function vr(r,t,e,n){return r instanceof Bn?function(i,a,c,l){if(!bs(i.precondition,a))return c;const d=i.value.clone(),m=lu(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ue?function(i,a,c,l){if(!bs(i.precondition,a))return c;const d=lu(i.fieldTransforms,l,a),m=a.data;return m.setAll(Ih(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,c){return bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function vp(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=mh(n.transform,s||null);i!=null&&(e===null&&(e=bt.empty()),e.set(n.field,i))}return e||null}function cu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&bn(n,s,(i,a)=>yp(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Bn extends ui{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ue extends ui{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ih(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function uu(r,t,e){const n=new Map;F(r.length===e.length,32656,{Ve:e.length,de:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,c=t.data.field(i.field);n.set(i.field,pp(a,c,e[s]))}return n}function lu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,gp(i,a,t))}return n}class jr extends ui{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends ui{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ep(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=vr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=vr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=dh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const l=yh(a,c);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&bn(this.mutations,t.mutations,(e,n)=>cu(e,n))&&bn(this.baseMutations,t.baseMutations,(e,n)=>cu(e,n))}}class ta{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){F(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return lp}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ta(t,e,n,s)}}/**
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
 */class ea{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class wp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,H;function Tp(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function vh(r){if(r===void 0)return Pt("GRPC error has no .code"),P.UNKNOWN;switch(r){case lt.OK:return P.OK;case lt.CANCELLED:return P.CANCELLED;case lt.UNKNOWN:return P.UNKNOWN;case lt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case lt.INTERNAL:return P.INTERNAL;case lt.UNAVAILABLE:return P.UNAVAILABLE;case lt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case lt.NOT_FOUND:return P.NOT_FOUND;case lt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case lt.ABORTED:return P.ABORTED;case lt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case lt.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}(H=lt||(lt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bp(){return new TextEncoder}/**
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
 */const Ap=new Te([4294967295,4294967295],0);function hu(r){const t=bp().encode(r),e=new El;return e.update(t),new Uint8Array(e.digest())}function du(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Te([e,n],0),new Te([s,i],0)]}class na{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(n<0)throw new hr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Te.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(Te.fromNumber(n)));return s.compare(Ap)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=hu(t),[n,s]=du(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new na(i,s,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=hu(t),[n,s]=du(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Kr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new zr(L.min(),s,new st(B),Mt(),z())}}class Kr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Kr(n,e,z(),z(),z())}}/**
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
 */class As{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class wh{constructor(t,e){this.targetId=t,this.Ce=e}}class Th{constructor(t,e,n=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class fu{constructor(){this.ve=0,this.Fe=mu(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),n=z();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}}),new Kr(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=mu()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,F(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Sp{constructor(t){this.Ge=t,this.ze=new Map,this.je=Mt(),this.Je=ds(),this.He=ds(),this.Ze=new st(B)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Us(i))if(n===0){const a=new k(i.path);this.et(e,a,ct.newNoDocument(a,L.min()))}else F(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const c=this.ut(t),l=c?this.ct(c,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=ie(n).toUint8Array()}catch(l){if(l instanceof Gl)return Se("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new na(a,s,i)}catch(l){return Se(l instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Us(c.target)){const l=new k(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ct.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.Ke())}});let n=z();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new zr(t,e,this.Ze,this.je,n);return this.je=Mt(),this.Je=ds(),this.He=ds(),this.Ze=new st(B),s}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new fu,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new Z(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Z(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new fu),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ds(){return new st(k.comparator)}function mu(){return new st(k.comparator)}const Rp={asc:"ASCENDING",desc:"DESCENDING"},Pp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vp={and:"AND",or:"OR"};class Cp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function To(r,t){return r.useProto3Json||ti(t)?t:{value:t}}function Mn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Dp(r,t){return Mn(r,t.toTimestamp())}function Ct(r){return F(!!r,49232),L.fromTimestamp(function(e){const n=se(e);return new X(n.seconds,n.nanos)}(r))}function ra(r,t){return bo(r,t).canonicalString()}function bo(r,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ah(r){const t=Y.fromString(r);return F(kh(t),10190,{key:t.toString()}),t}function qs(r,t){return ra(r.databaseId,t.path)}function Je(r,t){const e=Ah(t);if(e.get(1)!==r.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(Ph(e))}function Sh(r,t){return ra(r.databaseId,t)}function Rh(r){const t=Ah(r);return t.length===4?Y.emptyPath():Ph(t)}function Ao(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ph(r){return F(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function gu(r,t,e){return{name:qs(r,t),fields:e.value.mapValue.fields}}function xp(r,t,e){const n=Je(r,t.name),s=Ct(t.updateTime),i=t.createTime?Ct(t.createTime):L.min(),a=new bt({mapValue:{fields:t.fields}}),c=ct.newFoundDocument(n,s,i,a);return e&&c.setHasCommittedMutations(),e?c.setHasCommittedMutations():c}function Np(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(F(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(F(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?P.UNKNOWN:vh(d.code);return new M(m,d.message||"")}(a);e=new Th(n,s,i,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Je(r,n.document.name),i=Ct(n.document.updateTime),a=n.document.createTime?Ct(n.document.createTime):L.min(),c=new bt({mapValue:{fields:n.document.fields}}),l=ct.newFoundDocument(s,i,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new As(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Je(r,n.document),i=n.readTime?Ct(n.readTime):L.min(),a=ct.newNoDocument(s,i),c=n.removedTargetIds||[];e=new As([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Je(r,n.document),i=n.removedTargetIds||[];e=new As([],i,s,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new wp(s,i),c=n.targetId;e=new wh(c,a)}}return e}function js(r,t){let e;if(t instanceof Bn)e={update:gu(r,t.key,t.value)};else if(t instanceof jr)e={delete:qs(r,t.key)};else if(t instanceof ue)e={update:gu(r,t.key,t.data),updateMask:Bp(t.fieldMask)};else{if(!(t instanceof Eh))return O(16599,{dt:t.type});e={verify:qs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const c=a.transform;if(c instanceof Nr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Nn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Dp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(r,t.precondition)),e}function So(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?yt.updateTime(Ct(i.updateTime)):i.exists!==void 0?yt.exists(i.exists):yt.none()}(t.currentDocument):yt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,c){let l=null;if("setToServerValue"in c)F(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Nr;else if("appendMissingElements"in c){const m=c.appendMissingElements.values||[];l=new Nn(m)}else if("removeAllFromArray"in c){const m=c.removeAllFromArray.values||[];l=new kn(m)}else"increment"in c?l=new kr(a,c.increment):O(16584,{proto:c});const d=ot.fromServerFormat(c.fieldPath);return new _p(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Je(r,t.update.name),i=new bt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new xt(d.map(m=>ot.fromServerFormat(m)))}(t.updateMask);return new ue(s,i,a,e,n)}return new Bn(s,i,e,n)}if(t.delete){const s=Je(r,t.delete);return new jr(s,e)}if(t.verify){const s=Je(r,t.verify);return new Eh(s,e)}return O(1463,{proto:t})}function kp(r,t){return r&&r.length>0?(F(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Ct(s.updateTime):Ct(i);return a.isEqual(L.min())&&(a=Ct(i)),new Ip(a,s.transformResults||[])}(e,t))):[]}function Vh(r,t){return{documents:[Sh(r,t.path)]}}function Ch(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Sh(r,s);const i=function(d){if(d.length!==0)return Nh(tt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:_n(v.field),direction:Op(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=To(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Dh(r){let t=Rh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){F(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(g){const v=xh(g);return v instanceof tt&&Yo(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(v=>function(C){return new Bs(yn(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(e.orderBy));let c=null;e.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,ti(v)?null:v}(e.limit));let l=null;e.startAt&&(l=function(g){const v=!!g.before,R=g.values||[];return new Dn(R,v)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const v=!g.before,R=g.values||[];return new Dn(R,v)}(e.endAt)),rp(t,s,a,i,c,"F",l,d)}function Mp(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xh(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yn(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yn(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return K.create(yn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return tt.create(e.compositeFilter.filters.map(n=>xh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function Op(r){return Rp[r]}function Fp(r){return Pp[r]}function Lp(r){return Vp[r]}function _n(r){return{fieldPath:r.canonicalString()}}function yn(r){return ot.fromServerFormat(r.fieldPath)}function Nh(r){return r instanceof K?function(e){if(e.op==="=="){if(Zc(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(Xc(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zc(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(Xc(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:Fp(e.op),value:e.value}}}(r):r instanceof tt?function(e){const n=e.getFilters().map(s=>Nh(s));return n.length===1?n[0]:{compositeFilter:{op:Lp(e.op),filters:n}}}(r):O(54877,{filter:r})}function Bp(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function kh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Mh(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Xt{constructor(t,e,n,s,i=L.min(),a=L.min(),c=dt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Oh{constructor(t){this.yt=t}}function Up(r,t){let e;if(t.document)e=xp(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),s=nn(t.noDocument.readTime);e=ct.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=k.fromSegments(t.unknownDocument.path),s=nn(t.unknownDocument.version);e=ct.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new X(s[0],s[1]);return L.fromTimestamp(i)}(t.readTime)),e}function pu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:zs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:qs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Mn(i,a.version.toTimestamp()),createTime:Mn(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:en(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:en(t.version)}}return n}function zs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function en(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function nn(r){const t=new X(r.seconds,r.nanoseconds);return L.fromTimestamp(t)}function ze(r,t){const e=(t.baseMutations||[]).map(i=>So(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const c=t.mutations[i+1];a.updateTransforms=c.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>So(r.yt,i)),s=X.fromMillis(t.localWriteTimeMs);return new Zo(t.batchId,s,e,n)}function dr(r){const t=nn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?nn(r.lastLimboFreeSnapshotVersion):L.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return F(a===1,1966,{count:a}),Ut($r(Rh(i.documents[0])))}(r.query):function(i){return Ut(Dh(i))}(r.query),new Xt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,dt.fromBase64String(r.resumeToken))}function Fh(r,t){const e=en(t.snapshotVersion),n=en(t.lastLimboFreeSnapshotVersion);let s;s=Us(t.target)?Vh(r.yt,t.target):Ch(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tn(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Lh(r){const t=Dh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?wo(t,t.limit,"L"):t}function Yi(r,t){return new ea(t.largestBatchId,So(r.yt,t.overlayMutation))}function _u(r,t){const e=t.path.lastSegment();return[r,At(t.path.popLast()),e]}function yu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:en(n.readTime),documentKey:At(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class $p{getBundleMetadata(t,e){return Iu(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:nn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Iu(t).put(function(s){return{bundleId:s.id,createTime:en(Ct(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Eu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Lh(i.bundledQuery),readTime:nn(i.readTime)}}(n)})}saveNamedQuery(t,e){return Eu(t).put(function(s){return{name:s.name,readTime:en(Ct(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Iu(r){return gt(r,ei)}function Eu(r){return gt(r,ni)}/**
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
 */class li{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new li(t,n)}getOverlay(t,e){return rr(t).get(_u(this.userId,e)).next(n=>n?Yi(this.serializer,n):null)}getOverlays(t,e){const n=Yt();return T.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const c=new ea(e,a);s.push(this.St(t,c))}),T.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(At(a.getCollectionPath())));const i=[];return s.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(rr(t).X(go,c))}),T.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Yt(),i=At(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rr(t).J(go,a).next(c=>{for(const l of c){const d=Yi(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Yt();let a;const c=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return rr(t).ee({index:Ul,range:c},(l,d,m)=>{const g=Yi(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()}).next(()=>i)}St(t,e){return rr(t).put(function(s,i,a){const[c,l,d]=_u(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:js(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function rr(r){return gt(r,ri)}/**
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
 */class qp{bt(t){return gt(t,Ko)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?dt.fromUint8Array(n):dt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class Ke{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(it(t.integerValue));else if("doubleValue"in t){const n=it(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Sr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=se(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(ie(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Xl(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):ii(t)?this.kt(t.mapValue,e):(this.Kt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Nt(e)):O(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}Kt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,c;const n=t.fields||{};this.Ft(e,53);const s=Vn,i=((c=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:c.length)||0;this.Ft(e,15),e.Mt(it(i)),this.Ot(s,e),this.Ct(n[s],e)}qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),k.fromName(t).path.forEach(n=>{this.Ft(e,60),this.$t(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Ke.Wt=new Ke;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=255;function jp(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function vu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=jp(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class zp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(t){const e=this.en(t),n=vu(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=vu(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(hn),this.sn(255)}_n(){this.an(hn),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===hn?(this.sn(hn),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===hn?(this.an(hn),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Kp{constructor(t){this.cn=t}Bt(t){this.cn.Qt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.Yt(t)}vt(){this.cn.rn()}}class Gp{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Xt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class sr{constructor(){this.cn=new zp,this.ascending=new Kp(this.cn),this.descending=new Gp(this.cn)}seed(t){this.cn.seed(t)}ln(t){return t===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Ge{constructor(t,e,n,s){this.hn=t,this.Pn=e,this.Tn=n,this.In=s}En(){const t=this.In.length,e=t===0||this.In[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.In,0),e!==t?n.set([0],this.In.length):++n[n.length-1],new Ge(this.hn,this.Pn,this.Tn,n)}Rn(t,e,n){return{indexId:this.hn,uid:t,arrayValue:Ss(this.Tn),directionalValue:Ss(this.In),orderedDocumentKey:Ss(e),documentKey:n.path.toArray()}}An(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function pe(r,t){let e=r.hn-t.hn;return e!==0?e:(e=wu(r.Tn,t.Tn),e!==0?e:(e=wu(r.In,t.In),e!==0?e:k.comparator(r.Pn,t.Pn)))}function wu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function Ss(r){return ll()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function Tu(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class bu{constructor(t){this.Vn=new Z((e,n)=>ot.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.dn=t.orderBy,this.mn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.mn.push(n)}}get fn(){return this.Vn.size>1}gn(t){if(F(t.collectionGroup===this.collectionId,49279),this.fn)return!1;const e=ho(t);if(e!==void 0&&!this.pn(e))return!1;const n=$e(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.pn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.yn(c,l)||!this.wn(this.dn[a++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(a>=this.dn.length||!this.wn(this.dn[a++],c))return!1}return!0}Sn(){if(this.fn)return null;let t=new Z(ot.comparator);const e=[];for(const n of this.mn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ys(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ys(n.field,0))}for(const n of this.dn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ys(n.field,n.dir==="asc"?0:1)));return new ks(ks.UNKNOWN_ID,this.collectionId,e,Ar.empty())}pn(t){for(const e of this.mn)if(this.yn(e,t))return!0;return!1}yn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}wn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Bh(r){var e,n;if(F(r instanceof K||r instanceof tt,20012),r instanceof K){if(r instanceof ah){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>K.create(r.field,"==",i)))||[];return tt.create(s,"or")}return r}const t=r.filters.map(s=>Bh(s));return tt.create(t,r.op)}function Hp(r){if(r.getFilters().length===0)return[];const t=Vo(Bh(r));return F(Uh(t),7391),Ro(t)||Po(t)?[t]:t.getFilters()}function Ro(r){return r instanceof K}function Po(r){return r instanceof tt&&Yo(r)}function Uh(r){return Ro(r)||Po(r)||function(e){if(e instanceof tt&&Io(e)){for(const n of e.getFilters())if(!Ro(n)&&!Po(n))return!1;return!0}return!1}(r)}function Vo(r){if(F(r instanceof K||r instanceof tt,34018),r instanceof K)return r;if(r.filters.length===1)return Vo(r.filters[0]);const t=r.filters.map(n=>Vo(n));let e=tt.create(t,r.op);return e=Ks(e),Uh(e)?e:(F(e instanceof tt,64498),F(xn(e),40251),F(e.filters.length>1,57927),e.filters.reduce((n,s)=>sa(n,s)))}function sa(r,t){let e;return F(r instanceof K||r instanceof tt,38388),F(t instanceof K||t instanceof tt,25473),e=r instanceof K?t instanceof K?function(s,i){return tt.create([s,i],"and")}(r,t):Au(r,t):t instanceof K?Au(t,r):function(s,i){if(F(s.filters.length>0&&i.filters.length>0,48005),xn(s)&&xn(i))return sh(s,i.getFilters());const a=Io(s)?s:i,c=Io(s)?i:s,l=a.filters.map(d=>sa(d,c));return tt.create(l,"or")}(r,t),Ks(e)}function Au(r,t){if(xn(t))return sh(t,r.getFilters());{const e=t.filters.map(n=>sa(r,n));return tt.create(e,"or")}}function Ks(r){if(F(r instanceof K||r instanceof tt,11850),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return Ks(t[0]);if(nh(r))return r;const e=t.map(s=>Ks(s)),n=[];return e.forEach(s=>{s instanceof K?n.push(s):s instanceof tt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:tt.create(n,r.op)}/**
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
 */class Wp{constructor(){this.bn=new ia}addToCollectionParentIndex(t,e){return this.bn.add(e),T.resolve()}getCollectionParents(t,e){return T.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return T.resolve()}deleteFieldIndex(t,e){return T.resolve()}deleteAllFieldIndexes(t){return T.resolve()}createTargetIndexes(t,e){return T.resolve()}getDocumentsMatchingTarget(t,e){return T.resolve(null)}getIndexType(t,e){return T.resolve(0)}getFieldIndexes(t,e){return T.resolve([])}getNextCollectionGroupToUpdate(t){return T.resolve(null)}getMinOffset(t,e){return T.resolve(Ft.min())}getMinOffsetFromCollectionGroup(t,e){return T.resolve(Ft.min())}updateCollectionGroup(t,e,n){return T.resolve()}updateIndexEntries(t,e){return T.resolve()}}class ia{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Z(Y.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Z(Y.comparator)).toArray()}}/**
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
 */const Su="IndexedDbIndexManager",fs=new Uint8Array(0);class Qp{constructor(t,e){this.databaseId=e,this.Dn=new ia,this.Cn=new ce(n=>tn(n),(n,s)=>Ur(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Dn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.Dn.add(e)});const i={collectionId:n,parent:At(s)};return Ru(t).put(i)}return T.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Pl(e),""],!1,!0);return Ru(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Jt(a.parent))}return n})}addFieldIndex(t,e){const n=ir(t),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=fn(t);return i.next(c=>{a.put(yu(c,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=ir(t),s=fn(t),i=dn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=ir(t),n=dn(t),s=fn(t);return e.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(t,e){return T.forEach(this.vn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new bu(n).Sn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=dn(t);let s=!0;const i=new Map;return T.forEach(this.vn(e),a=>this.Fn(t,a).next(c=>{s&&(s=!!c),i.set(a,c)})).next(()=>{if(s){let a=z();const c=[];return T.forEach(i,(l,d)=>{V(Su,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(nt=>`${nt.fieldPath}:${nt.kind}`).join(",")}`}(l)} to execute ${tn(e)}`);const m=function(U,nt){const Q=ho(nt);if(Q===void 0)return null;for(const J of $s(U,Q.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(d,l),g=function(U,nt){const Q=new Map;for(const J of $e(nt))for(const I of $s(U,J.fieldPath))switch(I.op){case"==":case"in":Q.set(J.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Q.set(J.fieldPath.canonicalString(),I.value),Array.from(Q.values())}return null}(d,l),v=function(U,nt){const Q=[];let J=!0;for(const I of $e(nt)){const p=I.kind===0?su(U,I.fieldPath,U.startAt):iu(U,I.fieldPath,U.startAt);Q.push(p.value),J&&(J=p.inclusive)}return new Dn(Q,J)}(d,l),R=function(U,nt){const Q=[];let J=!0;for(const I of $e(nt)){const p=I.kind===0?iu(U,I.fieldPath,U.endAt):su(U,I.fieldPath,U.endAt);Q.push(p.value),J&&(J=p.inclusive)}return new Dn(Q,J)}(d,l),C=this.Mn(l,d,v),N=this.Mn(l,d,R),x=this.xn(l,d,g),G=this.On(l.indexId,m,C,v.inclusive,N,R.inclusive,x);return T.forEach(G,q=>n.Z(q,e.limit).next(U=>{U.forEach(nt=>{const Q=k.fromSegments(nt.documentKey);a.has(Q)||(a=a.add(Q),c.push(Q))})}))}).next(()=>c)}return T.resolve(null)})}vn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=Hp(tt.create(t.filters,"and")).map(n=>vo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Cn.set(t,e),e)}On(t,e,n,s,i,a,c){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const v=e?this.Nn(e[g/d]):fs,R=this.Bn(t,v,n[g%d],s),C=this.Ln(t,v,i[g%d],a),N=c.map(x=>this.Bn(t,v,x,!0));m.push(...this.createRange(R,C,N))}return m}Bn(t,e,n,s){const i=new Ge(t,k.empty(),e,n);return s?i:i.En()}Ln(t,e,n,s){const i=new Ge(t,k.empty(),e,n);return s?i.En():i}Fn(t,e){const n=new bu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const c of i)n.gn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(t,e){let n=2;const s=this.vn(e);return T.forEach(s,i=>this.Fn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new Z(ot.comparator),m=!1;for(const g of l.filters)for(const v of g.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?m=!0:d=d.add(v.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}kn(t,e){const n=new sr;for(const s of $e(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.ln(s.kind);Ke.Wt.Dt(i,a)}return n.un()}Nn(t){const e=new sr;return Ke.Wt.Dt(t,e.ln(0)),e.un()}Kn(t,e){const n=new sr;return Ke.Wt.Dt(Jo(this.databaseId,e),n.ln(function(i){const a=$e(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}xn(t,e,n){if(n===null)return[];let s=[];s.push(new sr);let i=0;for(const a of $e(t)){const c=n[i++];for(const l of s)if(this.qn(e,a.fieldPath)&&xr(c))s=this.Un(s,a,c);else{const d=l.ln(a.kind);Ke.Wt.Dt(c,d)}}return this.$n(s)}Mn(t,e,n){return this.xn(t,e,n.position)}$n(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Un(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const c of s){const l=new sr;l.seed(c.un()),Ke.Wt.Dt(a,l.ln(e.kind)),i.push(l)}return i}qn(t,e){return!!t.filters.find(n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=ir(t),s=fn(t);return(e?n.J(mo,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return T.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{a.push(function(m,g){const v=g?new Ar(g.sequenceNumber,new Ft(nn(g.readTime),new k(Jt(g.documentKey)),g.largestBatchId)):Ar.empty(),R=m.fields.map(([C,N])=>new ys(ot.fromServerFormat(C),N));return new ks(m.indexId,m.collectionGroup,R,v)}(c,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:B(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=ir(t),i=fn(t);return this.Wn(t).next(a=>s.J(mo,IDBKeyRange.bound(e,e)).next(c=>T.forEach(c,l=>i.put(yu(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return T.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?T.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),T.forEach(c,l=>this.Qn(t,s,l).next(d=>{const m=this.Gn(i,l);return d.isEqual(m)?T.resolve():this.zn(t,i,l,d,m)}))))})}jn(t,e,n,s){return dn(t).put(s.Rn(this.uid,this.Kn(n,e.key),e.key))}Jn(t,e,n,s){return dn(t).delete(s.An(this.uid,this.Kn(n,e.key),e.key))}Qn(t,e,n){const s=dn(t);let i=new Z(pe);return s.ee({index:Bl,range:IDBKeyRange.only([n.indexId,this.uid,Ss(this.Kn(n,e))])},(a,c)=>{i=i.add(new Ge(n.indexId,e,Tu(c.arrayValue),Tu(c.directionalValue)))}).next(()=>i)}Gn(t,e){let n=new Z(pe);const s=this.kn(e,t);if(s==null)return n;const i=ho(e);if(i!=null){const a=t.data.field(i.fieldPath);if(xr(a))for(const c of a.arrayValue.values||[])n=n.add(new Ge(e.indexId,t.key,this.Nn(c),s))}else n=n.add(new Ge(e.indexId,t.key,fs,s));return n}zn(t,e,n,s,i){V(Su,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,g,v){const R=l.getIterator(),C=d.getIterator();let N=ln(R),x=ln(C);for(;N||x;){let G=!1,q=!1;if(N&&x){const U=m(N,x);U<0?q=!0:U>0&&(G=!0)}else N!=null?q=!0:G=!0;G?(g(x),x=ln(C)):q?(v(N),N=ln(R)):(N=ln(R),x=ln(C))}}(s,i,pe,c=>{a.push(this.jn(t,e,n,c))},c=>{a.push(this.Jn(t,e,n,c))}),T.waitFor(a)}Wn(t){let e=1;return fn(t).ee({index:Ll,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,c)=>pe(a,c)).filter((a,c,l)=>!c||pe(a,l[c-1])!==0);const s=[];s.push(t);for(const a of n){const c=pe(a,t),l=pe(a,e);if(c===0)s[0]=t.En();else if(c>0&&l<0)s.push(a),s.push(a.En());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Hn(s[a],s[a+1]))return[];const c=s[a].An(this.uid,fs,k.empty()),l=s[a+1].An(this.uid,fs,k.empty());i.push(IDBKeyRange.bound(c,l))}return i}Hn(t,e){return pe(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Pu)}getMinOffset(t,e){return T.mapArray(this.vn(e),n=>this.Fn(t,n).next(s=>s||O(44426))).next(Pu)}}function Ru(r){return gt(r,Vr)}function dn(r){return gt(r,_r)}function ir(r){return gt(r,zo)}function fn(r){return gt(r,pr)}function Pu(r){F(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;$o(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ft(t.readTime,t.documentKey,e)}/**
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
 */const Vu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$h=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function qh(r,t,e){const n=r.store(qt),s=r.store(An),i=[],a=IDBKeyRange.only(e.batchId);let c=0;const l=n.ee({range:a},(m,g,v)=>(c++,v.delete()));i.push(l.next(()=>{F(c===1,47070,{batchId:e.batchId})}));const d=[];for(const m of e.mutations){const g=Ml(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return T.waitFor(i).next(()=>d)}function Gs(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt($h,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class hi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(t,e,n,s){F(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new hi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _e(t).ee({index:He,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=In(t),a=_e(t);return a.add({}).next(c=>{F(typeof c=="number",49019);const l=new Zo(c,e,n,s),d=function(R,C,N){const x=N.baseMutations.map(q=>js(R.yt,q)),G=N.mutations.map(q=>js(R.yt,q));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:G}}(this.serializer,this.userId,l),m=[];let g=new Z((v,R)=>B(v.canonicalString(),R.canonicalString()));for(const v of s){const R=Ml(this.userId,v.key.path,c);g=g.add(v.key.path.popLast()),m.push(a.put(d)),m.push(i.put(R,Eg))}return g.forEach(v=>{m.push(this.indexManager.addToCollectionParentIndex(t,v))}),t.addOnCommittedListener(()=>{this.Zn[c]=l.keys()}),T.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return _e(t).get(e).next(n=>n?(F(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),ze(this.serializer,n)):null)}Xn(t,e){return this.Zn[e]?T.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return _e(t).ee({index:He,range:s},(a,c,l)=>{c.userId===this.userId&&(F(c.batchId>=n,47524,{Yn:n}),i=ze(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=We;return _e(t).ee({index:He,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,We],[this.userId,Number.POSITIVE_INFINITY]);return _e(t).J(He,e).next(n=>n.map(s=>ze(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Is(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return In(t).ee({range:s},(a,c,l)=>{const[d,m,g]=a,v=Jt(m);if(d===this.userId&&e.path.isEqual(v))return _e(t).get(g).next(R=>{if(!R)throw O(61480,{er:a,batchId:g});F(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(ze(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(B);const s=[];return e.forEach(i=>{const a=Is(this.userId,i.path),c=IDBKeyRange.lowerBound(a),l=In(t).ee({range:c},(d,m,g)=>{const[v,R,C]=d,N=Jt(R);v===this.userId&&i.path.isEqual(N)?n=n.add(C):g.done()});s.push(l)}),T.waitFor(s).next(()=>this.tr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Is(this.userId,n),a=IDBKeyRange.lowerBound(i);let c=new Z(B);return In(t).ee({range:a},(l,d,m)=>{const[g,v,R]=l,C=Jt(v);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(c=c.add(R)):m.done()}).next(()=>this.tr(t,c))}tr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(_e(t).get(i).next(a=>{if(a===null)throw O(35274,{batchId:i});F(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(ze(this.serializer,a))}))}),T.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return qh(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.nr(e.batchId)}),T.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}nr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return T.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return In(t).ee({range:n},(i,a,c)=>{if(i[0]===this.userId){const l=Jt(i[1]);s.push(l)}else c.done()}).next(()=>{F(s.length===0,56720,{rr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return jh(t,this.userId,e)}ir(t){return zh(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:We,lastStreamToken:""})}}function jh(r,t,e){const n=Is(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return In(r).ee({range:i,Y:!0},(c,l,d)=>{const[m,g,v]=c;m===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function _e(r){return gt(r,qt)}function In(r){return gt(r,An)}function zh(r){return gt(r,Rr)}/**
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
 */class oe{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new oe(0)}static ar(){return new oe(-1)}}/**
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
 */class Jp{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.ur(t).next(e=>{const n=new oe(e.highestTargetId);return e.highestTargetId=n.next(),this.cr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.ur(t).next(e=>L.fromTimestamp(new X(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.ur(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.ur(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.cr(t,s)))}addTargetData(t,e){return this.lr(t,e).next(()=>this.ur(t).next(n=>(n.targetCount+=1,this.hr(e,n),this.cr(t,n))))}updateTargetData(t,e){return this.lr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>mn(t).delete(e.targetId)).next(()=>this.ur(t)).next(n=>(F(n.targetCount>0,8065),n.targetCount-=1,this.cr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return mn(t).ee((a,c)=>{const l=dr(c);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>T.waitFor(i)).next(()=>s)}forEachTarget(t,e){return mn(t).ee((n,s)=>{const i=dr(s);e(i)})}ur(t){return Cu(t).get(Fs).next(e=>(F(e!==null,2888),e))}cr(t,e){return Cu(t).put(Fs,e)}lr(t,e){return mn(t).put(Fh(this.serializer,e))}hr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.ur(t).next(e=>e.targetCount)}getTargetData(t,e){const n=tn(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return mn(t).ee({range:s,index:Fl},(a,c,l)=>{const d=dr(c);Ur(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=Ie(t);return e.forEach(a=>{const c=At(a.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(t,n,a))}),T.waitFor(s)}removeMatchingKeys(t,e,n){const s=Ie(t);return T.forEach(e,i=>{const a=At(i.path);return T.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=Ie(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=Ie(t);let i=z();return s.ee({range:n,Y:!0},(a,c,l)=>{const d=Jt(a[1]),m=new k(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=At(e.path),s=IDBKeyRange.bound([n],[Pl(n)],!1,!0);let i=0;return Ie(t).ee({index:jo,Y:!0,range:s},([a,c],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return mn(t).get(e).next(n=>n?dr(n):null)}}function mn(r){return gt(r,Sn)}function Cu(r){return gt(r,Qe)}function Ie(r){return gt(r,Rn)}/**
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
 */const Du="LruGarbageCollector",Yp=1048576;function xu([r,t],[e,n]){const s=B(r,e);return s===0?B(t,n):s}class Xp{constructor(t){this.Pr=t,this.buffer=new Z(xu),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();xu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){V(Du,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?V(Du,"Ignoring IndexedDB error during garbage collection: ",e):await rn(e)}await this.Ar(3e5)})}}class Zp{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return T.resolve(Bt.ce);const n=new Xp(e);return this.Vr.forEachTarget(t,s=>n.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>n.Er(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(Vu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vu):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,s,i,a,c,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,c=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),gn()<=W.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Gh(r,t){return new Zp(r,t)}/**
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
 */class t_{constructor(t,e){this.db=t,this.garbageCollector=Gh(this,e)}dr(t){const e=this.pr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}pr(t){let e=0;return this.mr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}mr(t,e){return this.yr(t,(n,s)=>e(s))}addReference(t,e,n){return ms(t,n)}removeReference(t,e,n){return ms(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ms(t,e)}wr(t,e){return function(s,i){let a=!1;return zh(s).te(c=>jh(s,c,i).next(l=>(l&&(a=!0),T.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(t,(a,c)=>{if(c<=e){const l=this.wr(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,L.min()),Ie(t).delete(function(g){return[0,At(g.path)]}(a))))});s.push(l)}}).next(()=>T.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ms(t,e)}yr(t,e){const n=Ie(t);let s,i=Bt.ce;return n.ee({index:jo},([a,c],{path:l,sequenceNumber:d})=>{a===0?(i!==Bt.ce&&e(new k(Jt(s)),i),i=d,s=l):i=Bt.ce}).next(()=>{i!==Bt.ce&&e(new k(Jt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ms(r,t){return Ie(r).put(function(n,s){return{targetId:0,path:At(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class Hh{constructor(){this.changes=new ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?T.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class e_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Be(t).put(n)}removeEntry(t,e,n){return Be(t).delete(function(i,a){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],zs(a),c[c.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Sr(t,n)))}getEntry(t,e){let n=ct.newInvalidDocument(e);return Be(t).ee({index:Es,range:IDBKeyRange.only(or(e))},(s,i)=>{n=this.br(e,i)}).next(()=>n)}Dr(t,e){let n={size:0,document:ct.newInvalidDocument(e)};return Be(t).ee({index:Es,range:IDBKeyRange.only(or(e))},(s,i)=>{n={document:this.br(e,i),size:Gs(i)}}).next(()=>n)}getEntries(t,e){let n=Mt();return this.Cr(t,e,(s,i)=>{const a=this.br(s,i);n=n.insert(s,a)}).next(()=>n)}vr(t,e){let n=Mt(),s=new st(k.comparator);return this.Cr(t,e,(i,a)=>{const c=this.br(i,a);n=n.insert(i,c),s=s.insert(i,Gs(a))}).next(()=>({documents:n,Fr:s}))}Cr(t,e,n){if(e.isEmpty())return T.resolve();let s=new Z(Mu);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(or(s.first()),or(s.last())),a=s.getIterator();let c=a.getNext();return Be(t).ee({index:Es,range:i},(l,d,m)=>{const g=k.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&Mu(c,g)<0;)n(c,null),c=a.getNext();c&&c.isEqual(g)&&(n(c,d),c=a.hasNext()?a.getNext():null),c?m.j(or(c)):m.done()}).next(()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,c=[a.popLast().toArray(),a.lastSegment(),zs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Be(t).J(IDBKeyRange.bound(c,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Mt();for(const g of d){const v=this.br(k.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);v.isFoundDocument()&&(qr(e,v)||s.has(v.key))&&(m=m.insert(v.key,v))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=Mt();const a=ku(e,n),c=ku(e,Ft.max());return Be(t).ee({index:Ol,range:IDBKeyRange.bound(a,c,!0)},(l,d,m)=>{const g=this.br(k.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new n_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Nu(t).get(fo).next(e=>(F(!!e,20021),e))}Sr(t,e){return Nu(t).put(fo,e)}br(t,e){if(e){const n=Up(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(L.min())))return n}return ct.newInvalidDocument(t)}}function Wh(r){return new e_(r)}class n_ extends Hh{constructor(t,e){super(),this.Mr=t,this.trackRemovals=e,this.Or=new ce(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new Z((i,a)=>B(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const c=this.Or.get(i);if(e.push(this.Mr.removeEntry(t,i,c.readTime)),a.isValidDocument()){const l=pu(this.Mr.serializer,a);s=s.add(i.path.popLast());const d=Gs(l);n+=d-c.size,e.push(this.Mr.addEntry(t,i,l))}else if(n-=c.size,this.trackRemovals){const l=pu(this.Mr.serializer,a.convertToNoDocument(L.min()));e.push(this.Mr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Mr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Mr.updateMetadata(t,n)),T.waitFor(e)}getFromCache(t,e){return this.Mr.Dr(t,e).next(n=>(this.Or.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Mr.vr(t,e).next(({documents:n,Fr:s})=>(s.forEach((i,a)=>{this.Or.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Nu(r){return gt(r,Pr)}function Be(r){return gt(r,Os)}function or(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ku(r,t){const e=t.documentKey.path.toArray();return[r,zs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Mu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=B(e[i],n[i]),s)return s;return s=B(e.length,n.length),s||(s=B(e[e.length-2],n[n.length-2]),s||B(e[e.length-1],n[n.length-1]))}/**
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
 */class r_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Qh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&vr(n.mutation,s,xt.empty(),X.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,z()).next(()=>n))}getLocalViewOfDocuments(t,e,n=z()){const s=Yt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=lr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Yt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,z()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,s){let i=Mt();const a=Er(),c=function(){return Er()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ue)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),vr(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>c.set(d,new r_(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const n=Er();let s=new st((a,c)=>a-c),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||xt.empty();m=c.applyToLocalView(d,m),n.set(l,m);const g=(s.get(c.batchId)||z()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,g=dh();m.forEach(v=>{if(!i.has(v)){const R=yh(e.get(v),n.get(v));R!==null&&g.set(v,R),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return T.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return sp(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ip(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):T.resolve(Yt());let c=br,l=i;return a.next(d=>T.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?T.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{l=l.insert(m,v)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,z())).next(m=>({batchId:c,changes:hh(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(n=>{let s=lr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(t,i).next(c=>T.forEach(c,l=>{const d=function(g,v){return new oi(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ct.newInvalidDocument(m)))});let c=lr();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&vr(m.mutation,d,xt.empty(),X.now()),qr(e,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class s_{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return T.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ct(s.createTime)}}(e)),T.resolve()}getNamedQuery(t,e){return T.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Lh(s.bundledQuery),readTime:Ct(s.readTime)}}(e)),T.resolve()}}/**
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
 */class i_{constructor(){this.overlays=new st(k.comparator),this.Lr=new Map}getOverlay(t,e){return T.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Yt();return T.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),T.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(n)),T.resolve()}getOverlaysForCollection(t,e,n){const s=Yt(),i=e.length+1,a=new k(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return T.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new st((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=Yt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Yt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return T.resolve(c)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ea(e,n));let i=this.Lr.get(e);i===void 0&&(i=z(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}/**
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
 */class o_{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return T.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,T.resolve()}}/**
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
 */class oa{constructor(){this.kr=new Z(_t.Kr),this.qr=new Z(_t.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new _t(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new _t(t,e))}Qr(t,e){t.forEach(n=>this.removeReference(n,e))}Gr(t){const e=new k(new Y([])),n=new _t(e,t),s=new _t(e,t+1),i=[];return this.qr.forEachInRange([n,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new k(new Y([])),n=new _t(e,t),s=new _t(e,t+1);let i=z();return this.qr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new _t(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class _t{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return k.comparator(t.key,e.key)||B(t.Jr,e.Jr)}static Ur(t,e){return B(t.Jr,e.Jr)||k.comparator(t.key,e.key)}}/**
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
 */class a_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new Z(_t.Kr)}checkEmpty(t){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zo(i,e,n,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new _t(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return T.resolve(a)}lookupMutationBatch(t,e){return T.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?We:this.Yn-1)}getAllMutationBatches(t){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(B);return e.forEach(s=>{const i=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{n=n.add(c.Jr)})}),T.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const a=new _t(new k(i),0);let c=new Z(B);return this.Hr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Jr)),!0)},a),T.resolve(this.Yr(c))}Yr(t){const e=[];return t.forEach(n=>{const s=this.Zr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){F(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return T.forEach(e.mutations,s=>{const i=new _t(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new _t(e,0),s=this.Hr.firstAfterOrEqual(n);return T.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,T.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class c_{constructor(t){this.ti=t,this.docs=function(){return new st(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return T.resolve(n?n.document.mutableCopy():ct.newInvalidDocument(e))}getEntries(t,e){let n=Mt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),T.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Mt();const a=e.path,c=new k(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||$o(Dl(m),n)<=0||(s.has(m.key)||qr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}ni(t,e){return T.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new u_(this)}getSize(t){return T.resolve(this.size)}}class u_ extends Hh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)}),T.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class l_{constructor(t){this.persistence=t,this.ri=new ce(e=>tn(e),Ur),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ii=0,this.si=new oa,this.targetCount=0,this.oi=oe._r()}forEachTarget(t,e){return this.ri.forEach((n,s)=>e(s)),T.resolve()}getLastRemoteSnapshotVersion(t){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return T.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),T.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new oe(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,T.resolve()}updateTargetData(t,e){return this.lr(e),T.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,T.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(t){return T.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return T.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),T.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),T.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),T.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return T.resolve(n)}containsKey(t,e){return T.resolve(this.si.containsKey(e))}}/**
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
 */class aa{constructor(t,e){this._i={},this.overlays={},this.ai=new Bt(0),this.ui=!1,this.ui=!0,this.ci=new o_,this.referenceDelegate=t(this),this.li=new l_(this),this.indexManager=new Wp,this.remoteDocumentCache=function(s){return new c_(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new Oh(e),this.Pi=new s_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new i_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new a_(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new h_(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(t,e){return T.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class h_ extends Nl{constructor(t){super(),this.currentSequenceNumber=t}}class di{constructor(t){this.persistence=t,this.Ri=new oa,this.Ai=null}static Vi(t){return new di(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),T.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),T.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),T.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.di,n=>{const s=k.fromPath(n);return this.mi(t,s).next(i=>{i||e.removeEntry(s,L.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return T.or([()=>T.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Hs{constructor(t,e){this.persistence=t,this.fi=new ce(n=>At(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Gh(this,e)}static Vi(t,e){return new Hs(t,e)}Ti(){}Ii(t){return T.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}pr(t){let e=0;return this.mr(t,n=>{e++}).next(()=>e)}mr(t,e){return T.forEach(this.fi,(n,s)=>this.wr(t,n,s).next(i=>i?T.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,e).next(c=>{c||(n++,i.removeEntry(a,L.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),T.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),T.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),T.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),T.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ws(t.data.value)),e}wr(t,e,n){return T.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return T.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class d_{constructor(t){this.serializer=t}k(t,e,n,s){const i=new Zs("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Br)}(t),function(l){l.createObjectStore(Rr,{keyPath:Ig}),l.createObjectStore(qt,{keyPath:Gc,autoIncrement:!0}).createIndex(He,Hc,{unique:!0}),l.createObjectStore(An)}(t),Ou(t),function(l){l.createObjectStore(qe)}(t));let a=T.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Rn),l.deleteObjectStore(Sn),l.deleteObjectStore(Qe)}(t),Ou(t)),a=a.next(()=>function(l){const d=l.store(Qe),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return d.put(Fs,m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(qt).J().next(g=>{l.deleteObjectStore(qt),l.createObjectStore(qt,{keyPath:Gc,autoIncrement:!0}).createIndex(He,Hc,{unique:!0});const v=d.store(qt),R=g.map(C=>v.put(C));return T.waitFor(R)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(Pn,{keyPath:Pg})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.gi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Pr)}(t),this.pi(i)))),n<7&&s>=7&&(a=a.next(()=>this.yi(i))),n<8&&s>=8&&(a=a.next(()=>this.wi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Si(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(ei,{keyPath:Vg})})(t),function(l){l.createObjectStore(ni,{keyPath:Cg})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(ri,{keyPath:Fg});d.createIndex(go,Lg,{unique:!1}),d.createIndex(Ul,Bg,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(Os,{keyPath:vg});d.createIndex(Es,wg),d.createIndex(Ol,Tg)}(t)).next(()=>this.bi(t,i)).next(()=>t.deleteObjectStore(qe))),n<14&&s>=14&&(a=a.next(()=>this.Di(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(zo,{keyPath:Dg,autoIncrement:!0}).createIndex(mo,xg,{unique:!1}),l.createObjectStore(pr,{keyPath:Ng}).createIndex(Ll,kg,{unique:!1}),l.createObjectStore(_r,{keyPath:Mg}).createIndex(Bl,Og,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(pr).clear()}).next(()=>{e.objectStore(_r).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(Ko,{keyPath:Ug})})(t)})),n<18&&s>=18&&ll()&&(a=a.next(()=>{e.objectStore(pr).clear()}).next(()=>{e.objectStore(_r).clear()})),a}pi(t){let e=0;return t.store(qe).ee((n,s)=>{e+=Gs(s)}).next(()=>{const n={byteSize:e};return t.store(Pr).put(fo,n)})}gi(t){const e=t.store(Rr),n=t.store(qt);return e.J().next(s=>T.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,We],[i.userId,i.lastAcknowledgedBatchId]);return n.J(He,a).next(c=>T.forEach(c,l=>{F(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=ze(this.serializer,l);return qh(t,i.userId,d).next(()=>{})}))}))}yi(t){const e=t.store(Rn),n=t.store(qe);return t.store(Qe).get(Fs).next(s=>{const i=[];return n.ee((a,c)=>{const l=new Y(a),d=function(g){return[0,At(g)]}(l);i.push(e.get(d).next(m=>m?T.resolve():(g=>e.put({targetId:0,path:At(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>T.waitFor(i))})}wi(t,e){t.createObjectStore(Vr,{keyPath:Rg});const n=e.store(Vr),s=new ia,i=a=>{if(s.add(a)){const c=a.lastSegment(),l=a.popLast();return n.put({collectionId:c,parent:At(l)})}};return e.store(qe).ee({Y:!0},(a,c)=>{const l=new Y(a);return i(l.popLast())}).next(()=>e.store(An).ee({Y:!0},([a,c,l],d)=>{const m=Jt(c);return i(m.popLast())}))}Si(t){const e=t.store(Sn);return e.ee((n,s)=>{const i=dr(s),a=Fh(this.serializer,i);return e.put(a)})}bi(t,e){const n=e.store(qe),s=[];return n.ee((i,a)=>{const c=e.store(Os),l=function(g){return g.document?new k(Y.fromString(g.document.name).popFirst(5)):g.noDocument?k.fromSegments(g.noDocument.path):g.unknownDocument?k.fromSegments(g.unknownDocument.path):O(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(c.put(d))}).next(()=>T.waitFor(s))}Di(t,e){const n=e.store(qt),s=Wh(this.serializer),i=new aa(di.Vi,this.serializer.yt);return n.J().next(a=>{const c=new Map;return a.forEach(l=>{let d=c.get(l.userId)??z();ze(this.serializer,l).keys().forEach(m=>d=d.add(m)),c.set(l.userId,d)}),T.forEach(c,(l,d)=>{const m=new It(d),g=li.wt(this.serializer,m),v=i.getIndexManager(m),R=hi.wt(m,this.serializer,v,i.referenceDelegate);return new Qh(s,R,g,v).recalculateAndSaveOverlaysForDocumentKeys(new po(e,Bt.ce),l).next()})})}}function Ou(r){r.createObjectStore(Rn,{keyPath:Ag}).createIndex(jo,Sg,{unique:!0}),r.createObjectStore(Sn,{keyPath:"targetId"}).createIndex(Fl,bg,{unique:!0}),r.createObjectStore(Qe)}const ye="IndexedDbPersistence",Xi=18e5,Zi=5e3,to="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",f_="main";class ca{constructor(t,e,n,s,i,a,c,l,d,m,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ci=i,this.window=a,this.document=c,this.Fi=d,this.Mi=m,this.xi=g,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=v=>Promise.resolve(),!ca.v())throw new M(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new t_(this,s),this.Ki=e+f_,this.serializer=new Oh(l),this.qi=new be(this.Ki,this.xi,new d_(this.serializer)),this.ci=new qp,this.li=new Jp(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Wh(this.serializer),this.Pi=new $p,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,m===!1&&Pt(ye,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(P.FAILED_PRECONDITION,to);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.li.getHighestSequenceNumber(t))}).then(t=>{this.ai=new Bt(t,this.Fi)}).then(()=>{this.ui=!0}).catch(t=>(this.qi&&this.qi.close(),Promise.reject(t)))}zi(t){return this.ki=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.qi.q(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>gs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(t).next(e=>{e||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(t)).next(e=>this.isPrimary&&!e?this.Hi(t).next(()=>!1):!!e&&this.Zi(t).next(()=>!0))).catch(t=>{if(De(t))return V(ye,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return V(ye,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Ci.enqueueRetryable(()=>this.ki(t)),this.isPrimary=t})}ji(t){return ar(t).get(un).next(e=>T.resolve(this.Xi(e)))}Yi(t){return gs(t).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Xi)){this.Li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=gt(e,Pn);return n.J().next(s=>{const i=this.ns(s,Xi),a=s.filter(c=>i.indexOf(c)===-1);return T.forEach(a,c=>n.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ui)for(const e of t)this.Ui.removeItem(this.rs(e.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(t){return!!t&&t.ownerId===this.clientId}Ji(t){return this.Mi?T.resolve(!0):ar(t).get(un).next(e=>{if(e!==null&&this.ts(e.leaseTimestampMs,Zi)&&!this.ss(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new M(P.FAILED_PRECONDITION,to);return!1}}return!(!this.networkEnabled||!this.inForeground)||gs(t).J().next(n=>this.ns(n,Zi).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||a&&c)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&V(ye,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[Br,Pn],t=>{const e=new po(t,Bt.ce);return this.Hi(e).next(()=>this.Yi(e))}),this.qi.close(),this.ls()}ns(t,e){return t.filter(n=>this.ts(n.updateTimeMs,e)&&!this.ss(n.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",t=>gs(t).J().next(e=>this.ns(e,Xi).map(n=>n.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(t,e){return hi.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Qp(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return li.wt(this.serializer,t)}getBundleCache(){return this.Pi}runTransaction(t,e,n){V(ye,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?jg:l===17?zl:l===16?qg:l===15?Go:l===14?jl:l===13?ql:l===12?$g:l===11?$l:void O(60245)}(this.xi);let a;return this.qi.runTransaction(t,s,i,c=>(a=new po(c,this.ai?this.ai.next():Bt.ce),e==="readwrite-primary"?this.ji(a).next(l=>!!l||this.Ji(a)).next(l=>{if(!l)throw Pt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new M(P.FAILED_PRECONDITION,xl);return n(a)}).next(l=>this.Zi(a).next(()=>l)):this.Ps(a).next(()=>n(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Ps(t){return ar(t).get(un).next(e=>{if(e!==null&&this.ts(e.leaseTimestampMs,Zi)&&!this.ss(e.ownerId)&&!this.Xi(e)&&!(this.Mi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new M(P.FAILED_PRECONDITION,to)})}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ar(t).put(un,e)}static v(){return be.v()}Hi(t){const e=ar(t);return e.get(un).next(n=>this.Xi(n)?(V(ye,"Releasing primary lease."),e.delete(un)):T.resolve())}ts(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Pt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;ul()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(t){var e;try{const n=((e=this.Ui)==null?void 0:e.getItem(this.rs(t)))!==null;return V(ye,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Pt(ye,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(t){Pt("Failed to set zombie client id.",t)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ar(r){return gt(r,Br)}function gs(r){return gt(r,Pn)}function m_(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class ua{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=s}static Es(t,e){let n=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(t,e.fromCache,n,s)}}/**
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
 */class g_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Jh{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ul()?8:kl(Cs())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.gs(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new g_;return this.ys(t,e,a).next(c=>{if(i.result=c,this.As)return this.ws(t,e,a,c.size)})}).next(()=>i.result)}ws(t,e,n,s){return n.documentReadCount<this.Vs?(gn()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",pn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),T.resolve()):(gn()<=W.DEBUG&&V("QueryEngine","Query:",pn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(gn()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",pn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):T.resolve())}gs(t,e){if(ou(e))return T.resolve(null);let n=Ut(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=wo(e,null,"F"),n=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=z(...i);return this.fs.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ss(e,c);return this.bs(e,d,a,l.readTime)?this.gs(t,wo(e,null,"F")):this.Ds(t,d,e,l)}))})))}ps(t,e,n,s){return ou(e)||s.isEqual(L.min())?T.resolve(null):this.fs.getDocuments(t,n).next(i=>{const a=this.Ss(e,i);return this.bs(e,a,n,s)?T.resolve(null):(gn()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pn(e)),this.Ds(t,a,e,dg(s,br)).next(c=>c))})}Ss(t,e){let n=new Z(uh(t));return e.forEach((s,i)=>{qr(t,i)&&(n=n.add(i))}),n}bs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,e,n){return gn()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",pn(e)),this.fs.getDocumentsMatchingQuery(t,e,Ft.min(),n)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const la="LocalStore",p_=3e8;class __{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new st(B),this.Fs=new ce(i=>tn(i),Ur),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Yh(r,t,e,n){return new __(r,t,e,n)}async function Xh(r,t){const e=$(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Os(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],c=[];let l=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:c}))})})}function y_(r,t){const e=$(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,m){const g=d.batch,v=g.keys();let R=T.resolve();return v.forEach(C=>{R=R.next(()=>m.getEntry(l,C)).next(N=>{const x=d.docVersions.get(C);F(x!==null,48541),N.version.compareTo(x)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Zh(r){const t=$(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function I_(r,t){const e=$(r),n=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const c=[];t.targetChanges.forEach((m,g)=>{const v=s.get(g);if(!v)return;c.push(e.li.removeMatchingKeys(i,m.removedDocuments,g).next(()=>e.li.addMatchingKeys(i,m.addedDocuments,g)));let R=v.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(dt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,n)),s=s.insert(g,R),function(N,x,G){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=p_?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(v,R,m)&&c.push(e.li.updateTargetData(i,R))});let l=Mt(),d=z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(E_(i,a,t.documentUpdates).next(m=>{l=m.Bs,d=m.Ls})),!n.isEqual(L.min())){const m=e.li.getLastRemoteSnapshotVersion(i).next(g=>e.li.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(m)}return T.waitFor(c).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.vs=s,i))}function E_(r,t,e){let n=z(),s=z();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Mt();return e.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(L.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):V(la,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function v_(r,t){const e=$(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=We),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function w_(r,t){const e=$(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.li.getTargetData(n,t).next(i=>i?(s=i,T.resolve(s)):e.li.allocateTargetId(n).next(a=>(s=new Xt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(n.targetId,n),e.Fs.set(t,n.targetId)),n})}async function Co(r,t,e){const n=$(r),s=n.vs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!De(a))throw a;V(la,`Failed to update sequence numbers for target ${t}: ${a}`)}n.vs=n.vs.remove(t),n.Fs.delete(s.target)}function Fu(r,t,e){const n=$(r);let s=L.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const g=$(l),v=g.Fs.get(m);return v!==void 0?T.resolve(g.vs.get(v)):g.li.getTargetData(d,m)}(n,a,Ut(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?i:z())).next(c=>(T_(n,ap(t),c),{documents:c,ks:i})))}function T_(r,t,e){let n=r.Ms.get(t)||L.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ms.set(t,n)}class Lu{constructor(){this.activeTargetIds=fp()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class td{constructor(){this.vo=new Lu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Lu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class b_{Mo(t){}shutdown(){}}/**
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
 */const Bu="ConnectivityMonitor";class Uu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Bu,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){V(Bu,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ps=null;function Do(){return ps===null?ps=function(){return 268435456+Math.round(2147483648*Math.random())}():ps++,"0x"+ps.toString(16)}/**
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
 */const eo="RestConnection",A_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class S_{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Ls?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const a=Do(),c=this.Qo(t,e.toUriEncodedString());V(eo,`Sending RPC '${t}' ${a}:`,c,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(c),m=fl(d);return this.zo(t,c,l,n,m).then(g=>(V(eo,`Received RPC '${t}' ${a}: `,g),g),g=>{throw Se(eo,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",n),g})}jo(t,e,n,s,i,a){return this.Wo(t,e,n,s,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}Qo(t,e){const n=A_[t];let s=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class R_{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const wt="WebChannelConnection",cr=(r,t,e)=>{r.listen(t,n=>{try{e(n)}catch(s){setTimeout(()=>{throw s},0)}})};class vn extends S_{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!vn.c_){const t=bl();cr(t,Tl.STAT_EVENT,e=>{e.stat===uo.PROXY?V(wt,"STAT_EVENT: detected buffering proxy"):e.stat===uo.NOPROXY&&V(wt,"STAT_EVENT: detected no buffering proxy")}),vn.c_=!0}}zo(t,e,n,s,i){const a=Do();return new Promise((c,l)=>{const d=new vl;d.setWithCredentials(!0),d.listenOnce(wl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case _s.NO_ERROR:const g=d.getResponseJson();V(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case _s.TIMEOUT:V(wt,`RPC '${t}' ${a} timed out`),l(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case _s.HTTP_ERROR:const v=d.getStatus();if(V(wt,`RPC '${t}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const N=function(G){const q=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(C.status);l(new M(N,C.message))}else l(new M(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new M(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(wt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);V(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)})}T_(t,e,n){const s=Do(),i=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const d=i.join("");V(wt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let g=!1,v=!1;const R=new R_({Jo:C=>{v?V(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(g||(V(wt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),g=!0),V(wt,`RPC '${t}' stream ${s} sending:`,C),m.send(C))},Ho:()=>m.close()});return cr(m,ur.EventType.OPEN,()=>{v||(V(wt,`RPC '${t}' stream ${s} transport opened.`),R.i_())}),cr(m,ur.EventType.CLOSE,()=>{v||(v=!0,V(wt,`RPC '${t}' stream ${s} transport closed`),R.o_(),this.E_(m))}),cr(m,ur.EventType.ERROR,C=>{v||(v=!0,Se(wt,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),R.o_(new M(P.UNAVAILABLE,"The operation could not be completed")))}),cr(m,ur.EventType.MESSAGE,C=>{var N;if(!v){const x=C.data[0];F(!!x,16349);const G=x,q=(G==null?void 0:G.error)||((N=G[0])==null?void 0:N.error);if(q){V(wt,`RPC '${t}' stream ${s} received error:`,q);const U=q.status;let nt=function(I){const p=lt[I];if(p!==void 0)return vh(p)}(U),Q=q.message;U==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&Se(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),nt===void 0&&(nt=P.INTERNAL,Q="Unknown error status: "+U+" with message "+q.message),v=!0,R.o_(new M(nt,Q)),m.close()}else V(wt,`RPC '${t}' stream ${s} received:`,x),R.__(x)}}),vn.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Al()}}/**
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
 */function P_(r){return new vn(r)}/**
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
 */function V_(){return typeof window<"u"?window:null}function Rs(){return typeof document<"u"?document:null}/**
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
 */function fi(r){return new Cp(r,!0)}/**
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
 */vn.c_=!1;class ed{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const $u="PersistentStream";class nd{constructor(t,e,n,s,i,a,c,l){this.Ci=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ed(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new M(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return V($u,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(V($u,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C_ extends nd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Np(this.serializer,t),n=function(i){if(!("targetChange"in i))return L.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ct(a.readTime):L.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=Ao(this.serializer),e.addTarget=function(i,a){let c;const l=a.target;if(c=Us(l)?{documents:Vh(i,l)}:{query:Ch(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=bh(i,a.resumeToken);const d=To(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Mn(i,a.snapshotVersion.toTimestamp());const d=To(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=Mp(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=Ao(this.serializer),e.removeTarget=t,this.K_(e)}}class D_ extends nd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return F(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,F(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){F(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=kp(t.writeResults,t.commitTime),n=Ct(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Ao(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>js(this.serializer,n))};this.K_(e)}}/**
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
 */class x_{}class N_ extends x_{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(t,bo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(P.UNKNOWN,i.toString())})}jo(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(t,bo(e,n),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function k_(r,t,e,n){return new N_(r,t,e,n)}class M_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pt(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ee="RemoteStore";class O_{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new oe(1e3),this.Va=new oe(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{n.enqueueAndForget(async()=>{sn(this)&&(V(ee,"Restarting streams for network reachability change."),await async function(l){const d=$(l);d.da.add(4),await Gr(d),d.ga.set("Unknown"),d.da.delete(4),await mi(d)}(this))})}),this.ga=new M_(n,s)}}async function mi(r){if(sn(r))for(const t of r.ma)await t(!0)}async function Gr(r){for(const t of r.ma)await t(!1)}function xo(r,t){return r.Ea.get(t)||void 0}function rd(r,t){const e=$(r),n=xo(e,t.targetId);if(n!==void 0&&e.Ia.has(n))return;const s=function(c,l){const d=xo(c,l);d!==void 0&&c.Ra.delete(d);const m=function(v,R){return R%2!=0?v.Va.next():v.Aa.next()}(c,l);return c.Ea.set(l,m),c.Ra.set(m,l),m}(e,t.targetId);V(ee,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new Xt(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,i),ma(e)?fa(e):Un(e).O_()&&da(e,i)}function ha(r,t){const e=$(r),n=Un(e),s=xo(e,t);V(ee,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),n.O_()&&sd(e,s),e.Ia.size===0&&(n.O_()?n.L_():sn(e)&&e.ga.set("Unknown"))}function da(r,t){if(r.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.Ra.get(t.targetId);if(e===void 0)return void V(ee,"SDK target ID not found for remote ID: "+t.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(n)}Un(r).Z_(t)}function sd(r,t){r.pa.$e(t),Un(r).X_(t)}function fa(r){r.pa=new Sp({getRemoteKeysForTarget:t=>{const e=r.Ra.get(t);return e!==void 0?r.remoteSyncer.getRemoteKeysForTarget(e):z()},At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Un(r).start(),r.ga.ua()}function ma(r){return sn(r)&&!Un(r).x_()&&r.Ia.size>0}function sn(r){return $(r).da.size===0}function id(r){r.pa=void 0}async function F_(r){r.ga.set("Online")}async function L_(r){r.Ia.forEach((t,e)=>{da(r,t)})}async function B_(r,t){id(r),ma(r)?(r.ga.ha(t),fa(r)):r.ga.set("Unknown")}async function U_(r,t,e){if(r.ga.set("Online"),t instanceof Th&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}}(r,t)}catch(n){V(ee,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ws(r,n)}else if(t instanceof As?r.pa.Xe(t):t instanceof wh?r.pa.st(t):r.pa.tt(t),!e.isEqual(L.min()))try{const n=await Zh(r.localStore);e.compareTo(n)>=0&&await function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const g=i.Ia.get(m);g&&i.Ia.set(m,g.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,m)=>{const g=i.Ia.get(d);if(!g)return;i.Ia.set(d,g.withResumeToken(dt.EMPTY_BYTE_STRING,g.snapshotVersion)),sd(i,d);const v=new Xt(g.target,d,m,g.sequenceNumber);da(i,v)});const l=function(m,g){const v=new Map;g.targetChanges.forEach((C,N)=>{const x=m.Ra.get(N);x!==void 0&&v.set(x,C)});let R=new st(B);return g.targetMismatches.forEach((C,N)=>{const x=m.Ra.get(C);x!==void 0&&(R=R.insert(x,N))}),new zr(g.snapshotVersion,v,R,g.documentUpdates,g.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){V(ee,"Failed to raise snapshot:",n),await Ws(r,n)}}async function Ws(r,t,e){if(!De(t))throw t;r.da.add(1),await Gr(r),r.ga.set("Offline"),e||(e=()=>Zh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(ee,"Retrying IndexedDB access"),await e(),r.da.delete(1),await mi(r)})}function od(r,t){return t().catch(e=>Ws(r,e,t))}async function Hr(r){const t=$(r),e=Ve(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:We;for(;$_(t);)try{const s=await v_(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,q_(t,s)}catch(s){await Ws(t,s)}ad(t)&&cd(t)}function $_(r){return sn(r)&&r.Ta.length<10}function q_(r,t){r.Ta.push(t);const e=Ve(r);e.O_()&&e.Y_&&e.ea(t.mutations)}function ad(r){return sn(r)&&!Ve(r).x_()&&r.Ta.length>0}function cd(r){Ve(r).start()}async function j_(r){Ve(r).ra()}async function z_(r){const t=Ve(r);for(const e of r.Ta)t.ea(e.mutations)}async function K_(r,t,e){const n=r.Ta.shift(),s=ta.from(n,t,e);await od(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Hr(r)}async function G_(r,t){t&&Ve(r).Y_&&await async function(n,s){if(function(a){return Tp(a)&&a!==P.ABORTED}(s.code)){const i=n.Ta.shift();Ve(n).B_(),await od(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hr(n)}}(r,t),ad(r)&&cd(r)}async function qu(r,t){const e=$(r);e.asyncQueue.verifyOperationInProgress(),V(ee,"RemoteStore received new credentials");const n=sn(e);e.da.add(3),await Gr(e),n&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await mi(e)}async function H_(r,t){const e=$(r);t?(e.da.delete(2),await mi(e)):t||(e.da.add(2),await Gr(e),e.ga.set("Unknown"))}function Un(r){return r.ya||(r.ya=function(e,n,s){const i=$(e);return i.sa(),new C_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:F_.bind(null,r),Yo:L_.bind(null,r),t_:B_.bind(null,r),H_:U_.bind(null,r)}),r.ma.push(async t=>{t?(r.ya.B_(),ma(r)?fa(r):r.ga.set("Unknown")):(await r.ya.stop(),id(r))})),r.ya}function Ve(r){return r.wa||(r.wa=function(e,n,s){const i=$(e);return i.sa(),new D_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:j_.bind(null,r),t_:G_.bind(null,r),ta:z_.bind(null,r),na:K_.bind(null,r)}),r.ma.push(async t=>{t?(r.wa.B_(),await Hr(r)):(await r.wa.stop(),r.Ta.length>0&&(V(ee,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.wa}/**
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
 */class ga{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,c=new ga(t,e,a,s,i);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(r,t){if(Pt("AsyncQueue",`${t}: ${r}`),De(r))return new M(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class wn{static emptySet(t){return new wn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=lr(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new wn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class ju{constructor(){this.Sa=new st(k.comparator)}track(t){const e=t.doc.key,n=this.Sa.get(e);n?t.type!==0&&n.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&n.type!==1?this.Sa=this.Sa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Sa=this.Sa.remove(e):t.type===1&&n.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,ba:n}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,n)=>{t.push(n)}),t}}class On{constructor(t,e,n,s,i,a,c,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new On(t,e,wn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ai(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class W_{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class Q_{constructor(){this.queries=zu(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,n){const s=$(e),i=s.queries;s.queries=zu(),i.forEach((a,c)=>{for(const l of c.va)l.onError(n)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function zu(){return new ce(r=>ch(r),ai)}async function ud(r,t){const e=$(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Fa()&&t.Ma()&&(n=2):(i=new W_,n=t.Ma()?0:1);try{switch(n){case 0:i.Ca=await e.onListen(s,!0);break;case 1:i.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=pa(a,`Initialization of query '${pn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.va.push(t),t.Oa(e.onlineState),i.Ca&&t.Na(i.Ca)&&_a(e)}async function ld(r,t){const e=$(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.va.indexOf(t);a>=0&&(i.va.splice(a,1),i.va.length===0?s=t.Ma()?0:1:!i.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function J_(r,t){const e=$(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(n=!0);a.Ca=s}}n&&_a(e)}function Y_(r,t,e){const n=$(r),s=n.queries.get(t);if(s)for(const i of s.va)i.onError(e);n.queries.delete(t)}function _a(r){r.xa.forEach(t=>{t.next()})}var No,Ku;(Ku=No||(No={})).Ba="default",Ku.Cache="cache";class hd{constructor(t,e,n){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=n||{}}Na(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new On(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const n=e!=="Offline";return(!this.options.Wa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=On.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==No.Cache}}/**
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
 */class dd{constructor(t){this.key=t}}class fd{constructor(t){this.key=t}}class X_{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=z(),this.mutatedKeys=z(),this.iu=uh(t),this.su=new wn(this.iu)}get ou(){return this.tu}_u(t,e){const n=e?e.au:new ju,s=e?e.su:this.su;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,g)=>{const v=s.get(m),R=qr(this.query,g)?g:null,C=!!v&&this.mutatedKeys.has(v.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;v&&R?v.data.isEqual(R.data)?C!==N&&(n.track({type:3,doc:R}),x=!0):this.uu(v,R)||(n.track({type:2,doc:R}),x=!0,(l&&this.iu(R,l)>0||d&&this.iu(R,d)<0)&&(c=!0)):!v&&R?(n.track({type:0,doc:R}),x=!0):v&&!R&&(n.track({type:1,doc:v}),x=!0,(l||d)&&(c=!0)),x&&(R?(a=a.add(R),i=N?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{su:a,au:n,bs:c,mutatedKeys:i}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const a=t.au.Da();a.sort((m,g)=>function(R,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:x})}};return N(R)-N(C)}(m.type,g.type)||this.iu(m.doc,g.doc)),this.cu(n),s=s??!1;const c=e&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,d=l!==this.nu;return this.nu=l,a.length!==0||d?{snapshot:new On(this.query,t.su,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new ju,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=z(),this.su.forEach(n=>{this.Pu(n.key)&&(this.ru=this.ru.add(n.key))});const e=[];return t.forEach(n=>{this.ru.has(n)||e.push(new fd(n))}),this.ru.forEach(n=>{t.has(n)||e.push(new dd(n))}),e}Tu(t){this.tu=t.ks,this.ru=z();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return On.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ya="SyncEngine";class Z_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ty{constructor(t){this.key=t,this.Eu=!1}}class ey{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new ce(c=>ch(c),ai),this.Vu=new Map,this.du=new Set,this.mu=new st(k.comparator),this.fu=new Map,this.gu=new oa,this.pu={},this.yu=new Map,this.wu=oe.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function ny(r,t,e=!0){const n=Id(r);let s;const i=n.Au.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await md(n,t,e,!0),s}async function ry(r,t){const e=Id(r);await md(e,t,!0,!1)}async function md(r,t,e,n){const s=await w_(r.localStore,Ut(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let c;return n&&(c=await sy(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&rd(r.remoteStore,s),c}async function sy(r,t,e,n,s){r.bu=(g,v,R)=>async function(N,x,G,q){let U=x.view._u(G);U.bs&&(U=await Fu(N.localStore,x.query,!1).then(({documents:I})=>x.view._u(I,U)));const nt=q&&q.targetChanges.get(x.targetId),Q=q&&q.targetMismatches.get(x.targetId)!=null,J=x.view.applyChanges(U,N.isPrimaryClient,nt,Q);return Hu(N,x.targetId,J.hu),J.snapshot}(r,g,v,R);const i=await Fu(r.localStore,t,!0),a=new X_(t,i.ks),c=a._u(i.documents),l=Kr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(c,r.isPrimaryClient,l);Hu(r,e,d.hu);const m=new Z_(t,e,a);return r.Au.set(t,m),r.Vu.has(e)?r.Vu.get(e).push(t):r.Vu.set(e,[t]),d.snapshot}async function iy(r,t,e){const n=$(r),s=n.Au.get(t),i=n.Vu.get(s.targetId);if(i.length>1)return n.Vu.set(s.targetId,i.filter(a=>!ai(a,t))),void n.Au.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Co(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&ha(n.remoteStore,s.targetId),ko(n,s.targetId)}).catch(rn)):(ko(n,s.targetId),await Co(n.localStore,s.targetId,!0))}async function oy(r,t){const e=$(r),n=e.Au.get(t),s=e.Vu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ha(e.remoteStore,n.targetId))}async function ay(r,t,e){const n=Ed(r);try{const s=await function(a,c){const l=$(a),d=X.now(),m=c.reduce((R,C)=>R.add(C.key),z());let g,v;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Mt(),N=z();return l.xs.getEntries(R,m).next(x=>{C=x,C.forEach((G,q)=>{q.isValidDocument()||(N=N.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,C)).next(x=>{g=x;const G=[];for(const q of c){const U=vp(q,g.get(q.key).overlayedDocument);U!=null&&G.push(new ue(q.key,U,th(U.value.mapValue),yt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,G,c)}).next(x=>{v=x;const G=x.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(R,x.batchId,G)})}).then(()=>({batchId:v.batchId,changes:hh(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.pu[a.currentUser.toKey()];d||(d=new st(B)),d=d.insert(c,l),a.pu[a.currentUser.toKey()]=d}(n,s.batchId,e),await Wr(n,s.changes),await Hr(n.remoteStore)}catch(s){const i=pa(s,"Failed to persist write");e.reject(i)}}async function gd(r,t){const e=$(r);try{const n=await I_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.fu.get(i);a&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?F(a.Eu,14607):s.removedDocuments.size>0&&(F(a.Eu,42227),a.Eu=!1))}),await Wr(e,n,t)}catch(n){await rn(n)}}function Gu(r,t,e){const n=$(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Au.forEach((i,a)=>{const c=a.view.Oa(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=$(a);l.onlineState=c;let d=!1;l.queries.forEach((m,g)=>{for(const v of g.va)v.Oa(c)&&(d=!0)}),d&&_a(l)}(n.eventManager,t),s.length&&n.Ru.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function cy(r,t,e){const n=$(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.fu.get(t),i=s&&s.key;if(i){let a=new st(k.comparator);a=a.insert(i,ct.newNoDocument(i,L.min()));const c=z().add(i),l=new zr(L.min(),new Map,new st(B),a,c);await gd(n,l),n.mu=n.mu.remove(i),n.fu.delete(t),Ia(n)}else await Co(n.localStore,t,!1).then(()=>ko(n,t,e)).catch(rn)}async function uy(r,t){const e=$(r),n=t.batch.batchId;try{const s=await y_(e.localStore,t);_d(e,n,null),pd(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Wr(e,s)}catch(s){await rn(s)}}async function ly(r,t,e){const n=$(r);try{const s=await function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(F(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);_d(n,t,e),pd(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Wr(n,s)}catch(s){await rn(s)}}function pd(r,t){(r.yu.get(t)||[]).forEach(e=>{e.resolve()}),r.yu.delete(t)}function _d(r,t,e){const n=$(r);let s=n.pu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.pu[n.currentUser.toKey()]=s}}function ko(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Vu.get(t))r.Au.delete(n),e&&r.Ru.Du(n,e);r.Vu.delete(t),r.isPrimaryClient&&r.gu.Gr(t).forEach(n=>{r.gu.containsKey(n)||yd(r,n)})}function yd(r,t){r.du.delete(t.path.canonicalString());const e=r.mu.get(t);e!==null&&(ha(r.remoteStore,e),r.mu=r.mu.remove(t),r.fu.delete(e),Ia(r))}function Hu(r,t,e){for(const n of e)n instanceof dd?(r.gu.addReference(n.key,t),hy(r,n)):n instanceof fd?(V(ya,"Document no longer in limbo: "+n.key),r.gu.removeReference(n.key,t),r.gu.containsKey(n.key)||yd(r,n.key)):O(19791,{Cu:n})}function hy(r,t){const e=t.key,n=e.path.canonicalString();r.mu.get(e)||r.du.has(n)||(V(ya,"New document in limbo: "+e),r.du.add(n),Ia(r))}function Ia(r){for(;r.du.size>0&&r.mu.size<r.maxConcurrentLimboResolutions;){const t=r.du.values().next().value;r.du.delete(t);const e=new k(Y.fromString(t)),n=r.wu.next();r.fu.set(n,new ty(e)),r.mu=r.mu.insert(e,n),rd(r.remoteStore,new Xt(Ut($r(e.path)),n,"TargetPurposeLimboResolution",Bt.ce))}}async function Wr(r,t,e){const n=$(r),s=[],i=[],a=[];n.Au.isEmpty()||(n.Au.forEach((c,l)=>{a.push(n.bu(l,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ua.Es(l.targetId,d);i.push(g)}}))}),await Promise.all(a),n.Ru.H_(s),await async function(l,d){const m=$(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>T.forEach(d,v=>T.forEach(v.Ts,R=>m.persistence.referenceDelegate.addReference(g,v.targetId,R)).next(()=>T.forEach(v.Is,R=>m.persistence.referenceDelegate.removeReference(g,v.targetId,R)))))}catch(g){if(!De(g))throw g;V(la,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const R=m.vs.get(v),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);m.vs=m.vs.insert(v,N)}}}(n.localStore,i))}async function dy(r,t){const e=$(r);if(!e.currentUser.isEqual(t)){V(ya,"User change. New user:",t.toKey());const n=await Xh(e.localStore,t);e.currentUser=t,function(i,a){i.yu.forEach(c=>{c.forEach(l=>{l.reject(new M(P.CANCELLED,a))})}),i.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Wr(e,n.Ns)}}function fy(r,t){const e=$(r),n=e.fu.get(t);if(n&&n.Eu)return z().add(n.key);{let s=z();const i=e.Vu.get(t);if(!i)return s;for(const a of i){const c=e.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function Id(r){const t=$(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=gd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cy.bind(null,t),t.Ru.H_=J_.bind(null,t.eventManager),t.Ru.Du=Y_.bind(null,t.eventManager),t}function Ed(r){const t=$(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ly.bind(null,t),t}class Mr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fi(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return Yh(this.persistence,new Jh,t.initialUser,this.serializer)}xu(t){return new aa(di.Vi,this.serializer)}Mu(t){return new td}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mr.provider={build:()=>new Mr};class my extends Mr{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){F(this.persistence.referenceDelegate instanceof Hs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Kh(n,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new aa(n=>Hs.Vi(n,e),this.serializer)}}class gy extends Mr{constructor(t,e,n){super(),this.Lu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Lu.initialize(this,t),await Ed(this.Lu.syncEngine),await Hr(this.Lu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ou(t){return Yh(this.persistence,new Jh,t.initialUser,this.serializer)}Nu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Kh(n,t.asyncQueue,e)}Bu(t,e){const n=new pg(e,this.persistence);return new gg(t.asyncQueue,n)}xu(t){const e=m_(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new ca(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,V_(),Rs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Mu(t){return new td}}class Qs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Gu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=dy.bind(null,this.syncEngine),await H_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Q_}()}createDatastore(t){const e=fi(t.databaseInfo.databaseId),n=P_(t.databaseInfo);return k_(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,c){return new O_(n,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Gu(this.syncEngine,e,0),function(){return Uu.v()?new Uu:new b_}())}createSyncEngine(t,e){return function(s,i,a,c,l,d,m){const g=new ey(s,i,a,c,l,d);return m&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=$(s);V(ee,"RemoteStore shutting down."),i.da.add(5),await Gr(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Qs.provider={build:()=>new Qs};/**
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
 */class vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Ce="FirestoreClient";class py{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Bo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{V(Ce,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V(Ce,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=pa(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function no(r,t){r.asyncQueue.verifyOperationInProgress(),V(Ce,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Xh(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Wu(r,t){r.asyncQueue.verifyOperationInProgress();const e=await _y(r);V(Ce,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>qu(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>qu(t.remoteStore,s)),r._onlineComponents=t}async function _y(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Ce,"Using user provided OfflineComponentProvider");try{await no(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Se("Error using user provided cache. Falling back to memory cache: "+e),await no(r,new Mr)}}else V(Ce,"Using default OfflineComponentProvider"),await no(r,new my(void 0));return r._offlineComponents}async function wd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Ce,"Using user provided OnlineComponentProvider"),await Wu(r,r._uninitializedComponentsProvider._online)):(V(Ce,"Using default OnlineComponentProvider"),await Wu(r,new Qs))),r._onlineComponents}function yy(r){return wd(r).then(t=>t.syncEngine)}async function Mo(r){const t=await wd(r),e=t.eventManager;return e.onListen=ny.bind(null,t.syncEngine),e.onUnlisten=iy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ry.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=oy.bind(null,t.syncEngine),e}function Iy(r,t,e,n){const s=new vd(n),i=new hd(t,s,e);return r.asyncQueue.enqueueAndForget(async()=>ud(await Mo(r),i)),()=>{s.Ku(),r.asyncQueue.enqueueAndForget(async()=>ld(await Mo(r),i))}}function Ey(r,t,e={}){const n=new ne;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const m=new vd({next:v=>{m.Ku(),a.enqueueAndForget(()=>ld(i,g));const R=v.docs.has(c);!R&&v.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&l&&l.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new hd($r(c.path),m,{includeMetadataChanges:!0,Wa:!0});return ud(i,g)}(await Mo(r),r.asyncQueue,t,e,n)),n.promise}function vy(r,t){const e=new ne;return r.asyncQueue.enqueueAndForget(async()=>ay(await yy(r),t,e)),e.promise}/**
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
 */function Td(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const wy="ComponentProvider",Qu=new Map;function Ty(r,t,e,n,s){return new Kg(r,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Td(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
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
 */const bd="firestore.googleapis.com",Ju=!0;class Yu{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bd,this.ssl=Ju}else this.host=t.host,this.ssl=t.ssl??Ju;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$h;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Yp)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Td(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eg;switch(n.type){case"firstParty":return new ig(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qu.get(e);n&&(V(wy,"Removing Datastore"),Qu.delete(e),n.terminate())}(this),Promise.resolve()}}function by(r,t,e,n={}){var d;r=Ot(r,gi);const s=fl(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;s&&Bf(`https://${c}`),i.host!==bd&&i.host!==c&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:n};if(!Ds(l,a)&&(r._setSettings(l),n.mockUserToken)){let m,g;if(typeof n.mockUserToken=="string")m=n.mockUserToken,g=It.MOCK_USER;else{m=kf(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new It(v)}r._authCredentials=new ng(new Rl(m,g))}}/**
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
 */class pi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pi(this.firestore,t,this._query)}}class ut{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Lr(e,ut._jsonSchema))return new ut(t,n||null,new k(Y.fromString(e.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:ht("string",ut._jsonSchemaVersion),referencePath:ht("string")};class Ae extends pi{constructor(t,e,n){super(t,e,$r(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new k(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function Ad(r,t,...e){if(r=Gt(r),Vl("collection","path",t),r instanceof gi){const n=Y.fromString(t,...e);return $c(n),new Ae(r,null,n)}{if(!(r instanceof ut||r instanceof Ae))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return $c(n),new Ae(r.firestore,null,n)}}function jt(r,t,...e){if(r=Gt(r),arguments.length===1&&(t=Bo.newId()),Vl("doc","path",t),r instanceof gi){const n=Y.fromString(t,...e);return Uc(n),new ut(r,null,new k(n))}{if(!(r instanceof ut||r instanceof Ae))throw new M(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Uc(n),new ut(r.firestore,r instanceof Ae?r.converter:null,new k(n))}}/**
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
 */const Xu="AsyncQueue";class Zu{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new ed(this,"async_queue_retry"),this.lc=()=>{const n=Rs();n&&V(Xu,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.hc=t;const e=Rs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Rs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new ne;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!De(t))throw t;V(Xu,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(n=>{throw this._c=n,this.ac=!1,Pt("INTERNAL UNHANDLED ERROR: ",tl(n)),n}).then(n=>(this.ac=!1,n))));return this.hc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=ga.createAndSchedule(this,t,e,n,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&O(47125,{Rc:tl(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function tl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class ae extends gi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Zu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zu(t),this._firestoreClient=void 0,await t}}}function Ay(r,t){const e=typeof r=="object"?r:$m(),n=typeof r=="string"?r:Ls,s=Om(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=xf("firestore");i&&by(s,...i)}return s}function _i(r){if(r._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Sd(r),r._firestoreClient}function Sd(r){var n,s,i,a;const t=r._freezeSettings(),e=Ty(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new py(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(r._componentsProvider))}function Sy(r,t){Se("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return Ry(r,Qs.provider,{build:n=>new gy(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function Ry(r,t,e){if((r=Ot(r,ae))._firestoreClient||r._terminated)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new M(P.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},Sd(r)}/**
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
 */class Lt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lt(dt.fromBase64String(t))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Lt(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Lr(t,Lt._jsonSchema))return Lt.fromBase64String(t.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:ht("string",Lt._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class yi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ea{constructor(t){this._methodName=t}}/**
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
 */class Zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(t){if(Lr(t,Zt._jsonSchema))return new Zt(t.latitude,t.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:ht("string",Zt._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class zt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Lr(t,zt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new zt(t.vectorValues);throw new M(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zt._jsonSchemaVersion="firestore/vectorValue/1.0",zt._jsonSchema={type:ht("string",zt._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const Py=/^__.*__$/;class Vy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}class Rd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ue(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:r})}}class va{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new va({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.wc(t),n}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.fc(),n}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Js(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(Pd(this.dataSource)&&Py.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Cy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fi(t)}V(t,e,n,s=!1){return new va({dataSource:t,methodName:e,targetDoc:n,path:ot.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wa(r){const t=r._freezeSettings(),e=fi(r._databaseId);return new Cy(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vd(r,t,e,n,s,i={}){const a=r.V(i.merge||i.mergeFields?2:0,t,e,s);Ta("Data must be an object, but it was:",a,n);const c=xd(n,a);let l,d;if(i.merge)l=new xt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const v=Or(t,g,e);if(!a.contains(v))throw new M(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Md(m,v)||m.push(v)}l=new xt(m),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new Vy(new bt(c),l,d)}class Ii extends Ea{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ii}}function Cd(r,t,e,n){const s=r.V(1,t,e);Ta("Data must be an object, but it was:",s,n);const i=[],a=bt.empty();xe(n,(l,d)=>{const m=kd(t,l,e);d=Gt(d);const g=s.Sc(m);if(d instanceof Ii)i.push(m);else{const v=Ei(d,g);v!=null&&(i.push(m),a.set(m,v))}});const c=new xt(i);return new Rd(a,c,s.fieldTransforms)}function Dd(r,t,e,n,s,i){const a=r.V(1,t,e),c=[Or(t,n,e)],l=[s];if(i.length%2!=0)throw new M(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(Or(t,i[v])),l.push(i[v+1]);const d=[],m=bt.empty();for(let v=c.length-1;v>=0;--v)if(!Md(d,c[v])){const R=c[v];let C=l[v];C=Gt(C);const N=a.Sc(R);if(C instanceof Ii)d.push(R);else{const x=Ei(C,N);x!=null&&(d.push(R),m.set(R,x))}}const g=new xt(d);return new Rd(m,g,a.fieldTransforms)}function Ei(r,t){if(Nd(r=Gt(r)))return Ta("Unsupported field value:",t,r),xd(r,t);if(r instanceof Ea)return function(n,s){if(!Pd(s.dataSource))throw s.Dc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const c of n){let l=Ei(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=X.fromDate(n);return{timestampValue:Mn(s.serializer,i)}}if(n instanceof X){const i=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mn(s.serializer,i)}}if(n instanceof Zt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lt)return{bytesValue:bh(s.serializer,n._byteString)};if(n instanceof ut){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ra(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof zt)return function(a,c){const l=a instanceof zt?a.toArray():a;return{mapValue:{fields:{[Wo]:{stringValue:Qo},[Vn]:{arrayValue:{values:l.map(m=>{if(typeof m!="number")throw c.Dc("VectorValues must only contain numeric values.");return Xo(c.serializer,m)})}}}}}}(n,s);if(Mh(n))return n._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Uo(n)}`)}(r,t)}function xd(r,t){const e={};return Kl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(r,(n,s)=>{const i=Ei(s,t.yc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Nd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Zt||r instanceof Lt||r instanceof ut||r instanceof Ea||r instanceof zt||Mh(r))}function Ta(r,t,e){if(!Nd(e)||!Cl(e)){const n=Uo(e);throw n==="an object"?t.Dc(r+" a custom object"):t.Dc(r+" "+n)}}function Or(r,t,e){if((t=Gt(t))instanceof yi)return t._internalPath;if(typeof t=="string")return kd(r,t);throw Js("Field path arguments must be of type string or ",r,!1,void 0,e)}const Dy=new RegExp("[~\\*/\\[\\]]");function kd(r,t,e){if(t.search(Dy)>=0)throw Js(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new yi(...t.split("."))._internalPath}catch{throw Js(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Js(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new M(P.INVALID_ARGUMENT,c+r+l)}function Md(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class xy{convertValue(t,e="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return xe(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[Vn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>it(a.doubleValue));return new zt(e)}convertGeoPoint(t){return new Zt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=si(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Cr(t));default:return null}}convertTimestamp(t){const e=se(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);F(kh(n),9688,{name:t});const s=new Ze(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||Pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */class Od extends xy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,e)}}const el="@firebase/firestore",nl="4.14.1";/**
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
 */function rl(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}/**
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
 */class Fd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ny(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Or("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ny extends Fd{data(){return super.data()}}/**
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
 */function ky(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Ld(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class fr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ye extends Fd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Or("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ye._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ye._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ye._jsonSchema={type:ht("string",Ye._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Ps extends Ye{data(t={}){return super.data(t)}}class Tn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ps(this._firestore,this._userDataWriter,n.key,n,new fr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Ps(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ps(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:My(c.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Tn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Bo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function My(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
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
 */Tn._jsonSchemaVersion="firestore/querySnapshot/1.0",Tn._jsonSchema={type:ht("string",Tn._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};/**
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
 */class Oy{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=wa(t)}set(t,e,n){this._verifyNotCommitted();const s=ro(t,this._firestore),i=Ld(s.converter,e,n),a=Vd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,yt.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=ro(t,this._firestore);let a;return a=typeof(e=Gt(e))=="string"||e instanceof yi?Dd(this._dataReader,"WriteBatch.update",i._key,e,n,s):Cd(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,yt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ro(t,this._firestore);return this._mutations=this._mutations.concat(new jr(e._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ro(r,t){if((r=Gt(r)).firestore!==t)throw new M(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function Fy(r){r=Ot(r,ut);const t=Ot(r.firestore,ae),e=_i(t);return Ey(e,r._key).then(n=>Ud(t,r,n))}function Bd(r,t,e){r=Ot(r,ut);const n=Ot(r.firestore,ae),s=Ld(r.converter,t,e),i=wa(n);return vi(n,[Vd(i,"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,yt.none())])}function ba(r,t,e,...n){r=Ot(r,ut);const s=Ot(r.firestore,ae),i=wa(s);let a;return a=typeof(t=Gt(t))=="string"||t instanceof yi?Dd(i,"updateDoc",r._key,t,e,n):Cd(i,"updateDoc",r._key,t),vi(s,[a.toMutation(r._key,yt.exists(!0))])}function Ly(r){return vi(Ot(r.firestore,ae),[new jr(r._key,yt.none())])}function Aa(r,...t){var d,m,g;r=Gt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||rl(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(rl(t[n])){const v=t[n];t[n]=(d=v.next)==null?void 0:d.bind(v),t[n+1]=(m=v.error)==null?void 0:m.bind(v),t[n+2]=(g=v.complete)==null?void 0:g.bind(v)}let i,a,c;if(r instanceof ut)a=Ot(r.firestore,ae),c=$r(r._key.path),i={next:v=>{t[n]&&t[n](Ud(a,r,v))},error:t[n+1],complete:t[n+2]};else{const v=Ot(r,pi);a=Ot(v.firestore,ae),c=v._query;const R=new Od(a);i={next:C=>{t[n]&&t[n](new Tn(a,R,v,C))},error:t[n+1],complete:t[n+2]},ky(r._query)}const l=_i(a);return Iy(l,c,s,i)}function vi(r,t){const e=_i(r);return vy(e,t)}function Ud(r,t,e){const n=e.docs.get(t._key),s=new Od(r);return new Ye(r,s,t._key,n,new fr(e.hasPendingWrites,e.fromCache),t.converter)}function By(r){return r=Ot(r,ae),_i(r),new Oy(r,t=>vi(r,t))}(function(t,e=!0){tg(Um),Ns(new wr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),c=new ae(new rg(n.getProvider("auth-internal")),new og(a,n.getProvider("app-check-internal")),Gg(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),En(el,nl,t),En(el,nl,"esm2020")})();const Uy={apiKey:"AIzaSyCKaIqJhpWMQsiMUHGc08Egn22hNkNE4wg",authDomain:"sufst-firmware.firebaseapp.com",projectId:"sufst-firmware",storageBucket:"sufst-firmware.firebasestorage.app",messagingSenderId:"360125318020",appId:"1:360125318020:web:b50a6388bdbefd98f193d1",measurementId:"G-3FX30KTHDN"},$y=_l(Uy),Vt=Ay($y);Sy(Vt).catch(r=>{console.warn("Offline persistence failed to enable:",r)});let $t=[],Kt={suites:[],active_suite_id:""},Ys=!1,Xs=null;Aa(Ad(Vt,"pcbs"),async r=>{let t=[];if(r.forEach(e=>{t.push({id:e.id,...e.data()})}),window.pywebview)for(let e of t)e.image&&!e.image_data&&(e.image_data=await pywebview.api.read_local_image(e.image));$t=t,document.getElementById("dashboard-view")&&window.showDashboard(),document.getElementById("pcb-view")&&Xs&&window.viewPcb(Xs)});Aa(Ad(Vt,"suites"),r=>{Kt.suites=[],r.forEach(t=>{Kt.suites.push({id:t.id,...t.data()})}),Kt.suites.sort((t,e)=>t.date<e.date?1:-1),document.getElementById("suites-view")&&window.showSuites(),document.getElementById("dashboard-view")&&window.showDashboard()});Aa(jt(Vt,"config","global"),r=>{r.exists()&&(Kt.active_suite_id=r.data().active_suite_id),document.getElementById("suites-view")&&window.showSuites(),document.getElementById("dashboard-view")&&window.showDashboard()});function qy(){return`
    <div class="sidebar">
      <div class="sidebar-header">
        SUFST Firmware
      </div>
      <div class="nav-item active" id="nav-dashboard" onclick="window.showDashboard()">Dashboard</div>
      <div class="nav-item" id="nav-library" onclick="alert('Global Firmware Library coming soon!')">Firmware Library</div>
      <div class="nav-item" id="nav-suites" onclick="window.showSuites()">Firmware Suites</div>
      
      <div class="admin-login-btn" onclick="window.toggleAdmin()">
        🔒 <span id="admin-btn-text">Admin Login</span>
      </div>
    </div>
  `}function $d(){const r=Kt.suites.find(n=>n.id===Kt.active_suite_id),t=r?r.name:"None Set",e=$t.map((n,s)=>{const i=n.image_data?`<img src="${n.image_data}" alt="${n.name}">`:'<span style="color: var(--text-secondary); font-size: 0.8rem;">No Image</span>';let a=null,c="";return r&&r.pcb_versions&&r.pcb_versions[n.id]&&(a=r.pcb_versions[n.id],a!=="ignore"&&(c=`<div style="font-size: 0.8rem; margin-top: 5px; color: ${n.version===a?"var(--success-color)":"var(--danger-color)"}">
              Suite requires: ${a}
            </div>`)),`
    <div class="pcb-card fade-in" style="animation-delay: ${s*.1}s" onclick="window.viewPcb('${n.id}')">
      <div class="pcb-img-container">${i}</div>
      <div class="pcb-card-header">
        <div class="pcb-title">${n.name}</div>
        <div class="status-badge ${n.status==="ok"?"status-ok":"status-warn"}">
          ${n.status==="ok"?"Up to date":"Update Available"}
        </div>
      </div>
      <div class="pcb-desc-text">${n.description||""}</div>
      <div class="pcb-version" style="margin-top: auto; padding-top: 10px;">
        Current: ${n.version}
        ${c}
      </div>
    </div>
  `}).join("");return`
    <div class="main-content" id="dashboard-view">
      <div class="header fade-in">
        <div>
          <h1>Fleet Dashboard</h1>
          <p style="color: var(--text-secondary); margin-top: 5px;">Active Suite: <strong>${t}</strong></p>
        </div>
        <div style="display: flex; gap: 10px;">
          ${r?'<button class="btn btn-primary" onclick="window.openFlashFullCarModal()">Flash Full Car</button>':""}
          <button class="btn btn-primary admin-only" onclick="window.openAddPcbModal()">+ Add PCB</button>
        </div>
      </div>
      <div class="pcb-grid">
        ${e}
      </div>
    </div>
  `}async function jy(r){const t=$t.find(s=>s.id===r);if(!t)return"";let e=[];window.pywebview?e=await pywebview.api.get_firmwares(r,t.github):e=[{id:"fw_mock",version:"v1.0.0 (Mock)",date:"Today",type:"mock"}];const n=e.map(s=>{const i=s.extensions?s.extensions.map(a=>`<span style="font-size: 0.65rem; padding: 2px 6px; background-color: var(--surface-hover); border: 1px solid var(--border-color); border-radius: 4px; margin-right: 4px;">${a.toUpperCase()}</span>`).join(""):"";return`
    <div class="fw-item">
      <div class="fw-info">
        <div class="fw-version">${s.version}</div>
        <div class="fw-meta">${s.date} • ${s.type.toUpperCase()} ${i?"• "+i:""}</div>
      </div>
      <button class="btn btn-primary" onclick="window.openFlashModal('${t.id}', '${s.id}', '${s.version}')">Select for Flash</button>
    </div>
  `}).join("");return`
    <div class="main-content fade-in" id="pcb-view">
      <button class="back-btn" onclick="window.showDashboard()">
        ← Back to Dashboard
      </button>
      
      <div class="detail-header">
        <div style="display: flex; gap: 20px; align-items: flex-start;">
          ${t.image_data?`<img src="${t.image_data}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;">`:""}
          <div>
            <h1 style="margin-bottom: 5px;">${t.name}</h1>
            <p style="color: var(--text-secondary); margin-bottom: 10px;">${t.description||""}</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Currently installed: <strong>${t.version}</strong></p>
          </div>
        </div>
        <button class="btn admin-only" onclick="window.openEditPcbModal('${t.id}')">Edit PCB</button>
      </div>

      <div class="fw-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
          <h2 style="margin: 0; border: none; padding: 0;">Available Firmware</h2>
          <div style="display: flex; gap: 10px;">
            <button class="btn" onclick="window.syncGithub('${t.id}')">🔄 Sync GitHub</button>
            <button class="btn admin-only-block" style="display:none;" onclick="window.importBinary('${t.id}')">Import Binary</button>
          </div>
        </div>
        
        <div class="fw-list">
          ${n.length>0?n:'<p style="color: var(--text-secondary);">No firmware found.</p>'}
        </div>
      </div>
    </div>
  `}window.viewPcb=async function(r){Xs=r;const t=document.querySelector(".main-content");t&&(t.outerHTML=await jy(r))};window.showDashboard=function(){Xs=null,document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),document.getElementById("nav-dashboard").classList.add("active");const r=document.querySelector(".main-content");r&&(r.outerHTML=$d())};let mt=null;window.showSuites=function(){document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),document.getElementById("nav-suites").classList.add("active");let r="";if(mt!==null){const e=$t.map((n,s)=>{const i=mt.pcb_versions[n.id]||"ignore",a=n.image_data?`<img src="${n.image_data}" alt="${n.name}">`:'<span style="color: var(--text-secondary); font-size: 0.8rem;">No Image</span>';return`
      <div class="pcb-card fade-in" style="animation-delay: ${s*.1}s; cursor: pointer; border-color: ${i!=="ignore"?"var(--success-color)":"var(--border-color)"}" onclick="window.openSuitePcbSelector('${n.id}')">
        <div class="pcb-img-container">${a}</div>
        <div class="pcb-card-header">
          <div class="pcb-title">${n.name}</div>
        </div>
        <div class="pcb-version" style="margin-top: auto; padding-top: 10px;">
          Configured: <strong style="color: ${i!=="ignore"?"var(--success-color)":"var(--text-secondary)"}">${i==="ignore"?"Ignore":i}</strong>
        </div>
      </div>
      `}).join("");r=`
      <div class="main-content fade-in" id="suites-view">
        <div class="header">
          <div style="flex-grow: 1;">
            <h1>Suite Builder</h1>
            <input type="text" class="form-input" id="builder-suite-name" placeholder="Enter Suite Name..." value="${mt.name}" style="font-size: 1.2rem; font-weight: bold; margin-top: 10px; width: 60%;">
          </div>
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <button class="btn" onclick="window.cancelSuiteBuilder()">Cancel</button>
            <button class="btn btn-primary" onclick="window.saveSuiteBuilder()">💾 Save Suite</button>
          </div>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Click on a PCB below to configure its firmware version for this suite.</p>
        <div class="pcb-grid">
          ${e}
        </div>
      </div>
    `}else{const e=Kt.suites.map(n=>{const s=n.id===Kt.active_suite_id;return`
        <div class="fw-item" style="border: 2px solid ${s?"var(--accent-color)":"var(--border-color)"}">
          <div class="fw-info">
            <div class="fw-version">${n.name} ${s?'<span class="status-badge status-ok" style="margin-left: 10px;">ACTIVE</span>':""}</div>
            <div class="fw-meta">${n.date}</div>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn admin-only-block" style="display:none;" onclick="window.openEditSuiteBuilder('${n.id}')">Edit</button>
            <button class="btn btn-danger admin-only-block" style="display:none;" onclick="window.deleteSuite('${n.id}')">Delete</button>
            ${s?"":`<button class="btn btn-primary" onclick="window.setActiveSuite('${n.id}')">Set Active</button>`}
          </div>
        </div>
      `}).join("");r=`
      <div class="main-content fade-in" id="suites-view">
        <div class="header">
          <div>
            <h1>Firmware Suites</h1>
            <p style="color: var(--text-secondary); margin-top: 5px;">Manage global car configurations.</p>
          </div>
          <button class="btn btn-primary admin-only" onclick="window.openCreateSuiteBuilder()">+ Create Suite</button>
        </div>
        <div class="fw-list" style="margin-top: 20px;">
          ${e.length>0?e:'<p style="color: var(--text-secondary);">No suites found.</p>'}
        </div>
      </div>
    `}const t=document.querySelector(".main-content");t&&(t.outerHTML=r)};window.openCreateSuiteBuilder=function(){mt={id:"",name:"",pcb_versions:{}},window.showSuites()};window.openEditSuiteBuilder=function(r){const t=Kt.suites.find(e=>e.id===r);t&&(mt=JSON.parse(JSON.stringify(t)),window.showSuites())};window.cancelSuiteBuilder=function(){mt=null,window.showSuites()};window.saveSuiteBuilder=async function(){const r=document.getElementById("builder-suite-name");if(r&&(mt.name=r.value),!mt.name)return alert("Please enter a name for this suite.");!mt.id&&(mt.id="suite_"+Math.random().toString(36).substring(2,10)),mt.date||(mt.date=new Date().toISOString().split("T")[0]),await Bd(jt(Vt,"suites",mt.id),{name:mt.name,date:mt.date,pcb_versions:mt.pcb_versions}),mt=null};window.setActiveSuite=async function(r){await ba(jt(Vt,"config","global"),{active_suite_id:r})};window.deleteSuite=async function(r){confirm("Are you sure you want to delete this suite?")&&await Ly(jt(Vt,"suites",r))};window.importBinary=async function(r){if(window.pywebview){const t=await pywebview.api.import_binary(r);t.status==="success"?(alert("Imported "+t.file),window.viewPcb(r)):t.status==="error"&&alert("Error: "+t.message)}else alert("PyWebview not available. Cannot open file dialog.")};window.syncGithub=async function(r){const t=$t.find(e=>e.id===r);t&&window.pywebview?(await pywebview.api.sync_github(r,t.github),window.viewPcb(r)):alert("PyWebview not available or PCB not found. Cannot sync.")};let Fr=null,qd=null,jd=null;window.openFlashModal=function(r,t,e){Fr=r,qd=t,jd=e;const n=$t.find(s=>s.id===r);document.getElementById("flash-modal-title").innerText=`Flash ${n.name}`,document.getElementById("flash-modal-subtitle").innerText=`Firmware: ${e}`,document.getElementById("flash-settings").style.display="block",document.getElementById("flash-progress-section").classList.remove("active"),document.getElementById("flash-terminal").innerHTML="",document.getElementById("flash-progress-fill").style.width="0%",document.getElementById("btn-start-flash").style.display="block",document.getElementById("btn-close-flash").innerText="Cancel",document.getElementById("flash-modal").classList.add("active")};window.closeFlashModal=function(){document.getElementById("flash-modal").classList.remove("active")};window.startFlashing=async function(){const r=document.getElementById("flash-interface").value;document.getElementById("flash-settings").style.display="none",document.getElementById("flash-progress-section").classList.add("active"),document.getElementById("btn-start-flash").style.display="none",document.getElementById("btn-close-flash").style.display="none",window.updateFlashProgress(5,"Preparing payload..."),window.pywebview?await pywebview.api.flash_firmware(Fr,qd,r):(window.updateFlashProgress(50,"Mock flashing..."),setTimeout(()=>window.flashComplete("success"),2e3))};window.updateFlashProgress=function(r,t){document.getElementById("flash-progress-fill").style.width=`${r}%`;const e=document.getElementById("flash-terminal");e.innerHTML+=`<div class="terminal-line">[${new Date().toLocaleTimeString()}] ${t}</div>`,e.scrollTop=e.scrollHeight};window.flashComplete=async function(r){const t=document.getElementById("flash-terminal");if(r==="success"){t.innerHTML+=`<div class="terminal-line" style="color: var(--success-color);">[${new Date().toLocaleTimeString()}] Operation completed successfully.</div>`;const e=$t.find(n=>n.id===Fr);e&&(e.status="ok",e.version=jd,await ba(jt(Vt,"pcbs",e.id),{version:e.version,status:"ok"}))}else t.innerHTML+=`<div class="terminal-line" style="color: var(--danger-color);">[${new Date().toLocaleTimeString()}] Operation failed.</div>`;t.scrollTop=t.scrollHeight,document.getElementById("btn-close-flash").innerText="Done",document.getElementById("btn-close-flash").style.display="block",document.getElementById("pcb-view")&&window.viewPcb(Fr)};function zy(){return`
    <div class="modal-overlay" id="flash-modal">
      <div class="modal-content">
        <div class="modal-header" id="flash-modal-title">Flash Firmware</div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;" id="flash-modal-subtitle"></p>
        <div id="flash-settings">
          <div class="form-group">
            <label>Communication Interface</label>
            <select class="form-select" id="flash-interface">
              <option value="can">CAN Bus (Kvaser/Vector via OpenBLT)</option>
              <option value="swd">SWD (ST-Link / OpenOCD)</option>
              <option value="usb">USB DFU</option>
            </select>
          </div>
        </div>
        <div class="progress-container" id="flash-progress-section">
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="flash-progress-fill"></div></div>
          <div class="terminal-log" id="flash-terminal"></div>
        </div>
        <div class="modal-actions">
          <button class="btn" id="btn-close-flash" onclick="window.closeFlashModal()">Cancel</button>
          <button class="btn btn-primary" id="btn-start-flash" onclick="window.startFlashing()">Start Flashing</button>
        </div>
      </div>
    </div>
    
    <!-- Admin Login Modal -->
    <div class="modal-overlay" id="login-modal">
      <div class="modal-content">
        <div class="modal-header">Admin Login</div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-input" id="admin-password">
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('login-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.submitLogin()">Login</button>
        </div>
      </div>
    </div>

    <!-- PCB Form Modal -->
    <div class="modal-overlay" id="pcb-form-modal">
      <div class="modal-content">
        <div class="modal-header" id="pcb-form-title">Add PCB</div>
        <input type="hidden" id="pcb-form-id">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" id="pcb-name">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-input" id="pcb-desc">
        </div>
        <div class="form-group">
          <label>GitHub Release URL</label>
          <input type="text" class="form-input" id="pcb-github" placeholder="e.g. https://github.com/SUFST/BMS-firmware">
        </div>
        <div class="form-group">
          <label>PCB Image</label>
          <div style="display: flex; gap: 10px; align-items: center;">
            <input type="text" class="form-input" id="pcb-image" readonly placeholder="No image selected">
            <button class="btn" onclick="window.selectImage()">Select File</button>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('pcb-form-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.submitPcbForm()">Save</button>
        </div>
      </div>
    </div>

    <!-- Suite PCB Selector Modal -->
    <div class="modal-overlay" id="suite-selector-modal">
      <div class="modal-content">
        <div class="modal-header" id="suite-selector-title">Select Firmware</div>
        <input type="hidden" id="suite-selector-pcb-id">
        <div id="suite-selector-list" style="max-height: 400px; overflow-y: auto; margin-bottom: 20px;">
          <!-- Dynamically populated -->
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('suite-selector-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.confirmSuitePcbSelection()">Confirm</button>
        </div>
      </div>
    </div>
    
    <!-- Full Car Flash Modal -->
    <div class="modal-overlay" id="flash-full-modal">
      <div class="modal-content">
        <div class="modal-header">Flash Full Car</div>
        
        <div id="flash-settings-full">
          <p style="margin-bottom: 15px;">This will flash all PCBs to the versions specified in the Active Suite.</p>
          <div class="form-group">
            <label>Communication Interface</label>
            <select class="form-select" id="flash-interface-full">
              <option value="can">CAN Bus (Kvaser/Vector via OpenBLT)</option>
            </select>
          </div>
        </div>
        
        <div class="progress-container" id="flash-progress-section-full">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" id="flash-progress-fill-full" style="width: 0%"></div>
          </div>
          <div class="progress-text" id="flash-progress-text-full">Preparing...</div>
          <div class="terminal-log" id="flash-terminal-full"></div>
        </div>
        
        <div class="modal-actions">
          <button class="btn" id="btn-close-flash-full" onclick="document.getElementById('flash-full-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" id="btn-start-flash-full" onclick="window.startFullCarFlash()">Start Flash Sequence</button>
        </div>
      </div>
    </div>
  `}window.toggleAdmin=function(){Ys?(Ys=!1,document.body.classList.remove("admin-mode-active"),document.getElementById("admin-btn-text").innerText="Admin Login"):(document.getElementById("login-modal").classList.add("active"),document.getElementById("admin-password").value="",document.getElementById("admin-password").focus())};window.submitLogin=async function(){const r=document.getElementById("admin-password").value;window.pywebview?(await pywebview.api.login(r)).status==="success"?(Ys=!0,document.body.classList.add("admin-mode-active"),document.getElementById("admin-btn-text").innerText="Logout Admin",document.getElementById("login-modal").classList.remove("active")):alert("Invalid password"):r==="sufst"?(Ys=!0,document.body.classList.add("admin-mode-active"),document.getElementById("admin-btn-text").innerText="Logout Admin",document.getElementById("login-modal").classList.remove("active")):alert("Invalid mock password")};window.openAddPcbModal=function(){document.getElementById("pcb-form-title").innerText="Add PCB",document.getElementById("pcb-form-id").value="",document.getElementById("pcb-name").value="",document.getElementById("pcb-desc").value="",document.getElementById("pcb-github").value="",document.getElementById("pcb-image").value="",document.getElementById("pcb-form-modal").classList.add("active")};window.openEditPcbModal=function(r){const t=$t.find(e=>e.id===r);t&&(document.getElementById("pcb-form-title").innerText="Edit PCB",document.getElementById("pcb-form-id").value=r,document.getElementById("pcb-name").value=t.name,document.getElementById("pcb-desc").value=t.description||"",document.getElementById("pcb-github").value=t.github||"",document.getElementById("pcb-image").value=t.image||"",document.getElementById("pcb-form-modal").classList.add("active"))};window.selectImage=async function(){if(window.pywebview){const r=await pywebview.api.select_image();r.status==="success"?document.getElementById("pcb-image").value=r.file:r.status==="error"&&alert("Error: "+r.message)}else document.getElementById("pcb-image").value="mock_image.png"};window.submitPcbForm=async function(){let r=document.getElementById("pcb-form-id").value;const t={name:document.getElementById("pcb-name").value,description:document.getElementById("pcb-desc").value,github:document.getElementById("pcb-github").value,image:document.getElementById("pcb-image").value};r||(r="pcb_"+Math.random().toString(36).substring(2,10),t.status="ok",t.version="Unknown"),await Bd(jt(Vt,"pcbs",r),t,{merge:!0}),document.getElementById("pcb-form-modal").classList.remove("active")};window.openSuitePcbSelector=async function(r){const t=$t.find(a=>a.id===r);document.getElementById("suite-selector-title").innerText=`Select firmware for ${t.name}`,document.getElementById("suite-selector-pcb-id").value=r;const e=document.getElementById("suite-selector-list");e.innerHTML='<p style="color:var(--text-secondary);">Loading firmwares...</p>',document.getElementById("suite-selector-modal").classList.add("active");let n=[];window.pywebview&&(n=await pywebview.api.get_firmwares(t.id,t.github));const s=mt.pcb_versions[r]||"ignore",i=n.map(a=>`
    <label class="fw-radio-item">
      <input type="radio" name="suite-fw-select" value="${a.version}" ${s===a.version?"checked":""}>
      <div>
        <strong>${a.version}</strong>
        <div style="color:var(--text-secondary);font-size:0.8rem">${a.date} (${a.type})</div>
      </div>
    </label>
  `).join("");e.innerHTML=`
    <div class="fw-radio-list">
      <label class="fw-radio-item">
        <input type="radio" name="suite-fw-select" value="ignore" ${s==="ignore"?"checked":""}>
        <span style="color:var(--text-secondary)">-- Don't flash this PCB --</span>
      </label>
      ${i}
    </div>
  `};window.confirmSuitePcbSelection=function(){const r=document.getElementById("suite-selector-pcb-id").value,t=document.getElementsByName("suite-fw-select");let e="ignore";for(const n of t)n.checked&&(e=n.value);mt.pcb_versions[r]=e,document.getElementById("suite-selector-modal").classList.remove("active"),window.showSuites()};function Ky(){document.querySelector("#app").innerHTML=`
    ${qy()}
    ${$d()}
    ${zy()}
  `,setInterval(()=>{window.pywebview&&Fr&&window.pollFlashStatus()},500),window.addEventListener("pywebviewready",async function(){console.log("Pywebview is ready!");try{if(!(await Fy(jt(Vt,"config","global"))).exists()){console.log("Migrating local database.json to Firebase...");const t=await pywebview.api.get_pcbs(),e=await pywebview.api.get_suites(),n=By(Vt);for(const s of t)delete s.image_data,n.set(jt(Vt,"pcbs",s.id),s);for(const s of e.suites)n.set(jt(Vt,"suites",s.id),s);n.set(jt(Vt,"config","global"),{active_suite_id:e.active_suite_id||""}),await n.commit(),console.log("Migration complete!")}if($t.length>0){for(let t of $t)t.image&&!t.image_data&&(t.image_data=await pywebview.api.read_local_image(t.image));document.getElementById("dashboard-view")&&window.showDashboard()}}catch(r){console.error(r)}})}window.openFlashFullCarModal=function(){document.getElementById("flash-full-modal").classList.add("active"),document.getElementById("flash-settings-full").style.display="block",document.getElementById("flash-progress-section-full").classList.remove("active"),document.getElementById("btn-start-flash-full").style.display="block",document.getElementById("btn-close-flash-full").style.display="block",document.getElementById("btn-close-flash-full").innerText="Cancel",document.getElementById("flash-terminal-full").innerHTML=""};window.startFullCarFlash=async function(){const r=document.getElementById("flash-interface-full").value,t=Kt.suites.find(i=>i.id===Kt.active_suite_id);if(!t)return alert("No active suite set!");document.getElementById("flash-settings-full").style.display="none",document.getElementById("flash-progress-section-full").classList.add("active"),document.getElementById("btn-start-flash-full").style.display="none",document.getElementById("btn-close-flash-full").style.display="none";const e=document.getElementById("flash-terminal-full");e.innerHTML="";const n=i=>e.innerHTML+=`<div class="terminal-line">[${new Date().toLocaleTimeString()}] ${i}</div>`,s=Object.keys(t.pcb_versions).filter(i=>t.pcb_versions[i]!=="ignore");for(let i=0;i<s.length;i++){const a=s[i],c=$t.find(d=>d.id===a),l=t.pcb_versions[a];if(document.getElementById("flash-progress-fill-full").style.width=Math.floor(i/s.length*100)+"%",document.getElementById("flash-progress-text-full").innerText=`Flashing ${(c==null?void 0:c.name)||a} (${i+1}/${s.length})...`,n(`Starting sequence for ${(c==null?void 0:c.name)||a}...`),window.pywebview){const m=(await pywebview.api.get_firmwares(a)).find(g=>g.version===l);m?(await pywebview.api.flash_firmware(a,m.id,r),await new Promise(g=>setTimeout(g,2e3)),n(`<span style="color:var(--success-color)">Successfully flashed ${(c==null?void 0:c.name)||a}!</span>`),c.version=l,await ba(jt(Vt,"pcbs",a),{version:l,status:"ok"})):n(`<span style="color:red">Error: Could not find firmware for version ${l}</span>`)}else await new Promise(d=>setTimeout(d,2e3)),n(`Mock flashed ${(c==null?void 0:c.name)||a} successfully.`)}document.getElementById("flash-progress-fill-full").style.width="100%",document.getElementById("flash-progress-text-full").innerText="Full Car Flash Complete!",document.getElementById("btn-close-flash-full").style.display="block",document.getElementById("btn-close-flash-full").innerText="Close",n("<b>All Sequence Steps Finished.</b>")};Ky();
