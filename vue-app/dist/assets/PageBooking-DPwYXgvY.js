import{f as rh,o as gn,c as _n,a as sh,w as ih,b as rt,g as sr,v as ir,F as Ho,d as oh,h as ah,i as ch,t as Ko,j as Xt,n as uh,k as lh}from"./index-C7kifASl.js";import{_ as hh}from"./HeroSection-Btwfe39b.js";const dh=()=>{};var Wo={};/**
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
 */const pc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},fh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|l>>4;let v=(l&15)<<2|d>>6,C=d&63;h||(C=64,a||(v=64)),r.push(e[m],e[E],e[v],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(pc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||E==null)throw new mh;const v=o<<2|l>>4;if(r.push(v),d!==64){const C=l<<4&240|d>>2;if(r.push(C),E!==64){const N=d<<6&192|E;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ph=function(n){const t=pc(n);return gc.encodeByteArray(t,!0)},yr=function(n){return ph(n).replace(/\./g,"")},gh=function(n){try{return gc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yh=()=>_h().__FIREBASE_DEFAULTS__,Eh=()=>{if(typeof process>"u"||typeof Wo>"u")return;const n=Wo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Th=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gh(n[1]);return t&&JSON.parse(t)},ri=()=>{try{return dh()||yh()||Eh()||Th()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ih=n=>{var t,e;return(e=(t=ri())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},vh=n=>{const t=Ih(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},_c=()=>{var n;return(n=ri())==null?void 0:n.config};/**
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
 */class wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function si(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ah(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Rh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yr(JSON.stringify(e)),yr(JSON.stringify(a)),""].join(".")}const vn={};function Sh(){const n={prod:[],emulator:[]};for(const t of Object.keys(vn))vn[t]?n.emulator.push(t):n.prod.push(t);return n}function bh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Qo=!1;function Ch(n,t){if(typeof window>"u"||typeof document>"u"||!si(window.location.host)||vn[n]===t||vn[n]||Qo)return;vn[n]=t;function e(v){return`__firebase__banner__${v}`}const r="__firebase__banner",o=Sh().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,C){v.setAttribute("width","24"),v.setAttribute("id",C),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Qo=!0,a()},v}function m(v,C){v.setAttribute("id",C),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function E(){const v=bh(r),C=e("text"),N=document.getElementById(C)||document.createElement("span"),x=e("learnmore"),k=document.getElementById(x)||document.createElement("a"),W=e("preprendIcon"),G=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const U=v.element;l(U),m(k,x);const M=d();h(G,W),U.append(G,N,k,M),document.body.appendChild(U)}o?(N.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Ph(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){var t;const n=(t=ri())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nh(){return!Vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ec(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}function kh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const xh="FirebaseError";class de extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=xh,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xr.prototype.create)}}class xr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Oh(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new de(s,l,r)}}function Oh(n,t){return n.replace(Mh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Mh=/\{\$([^}]+)}/g;function bn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Yo(o)&&Yo(a)){if(!bn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Yo(n){return n!==null&&typeof n=="object"}/**
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
 */const Lh=1e3,Fh=2,Uh=14400*1e3,Bh=.5;function Jo(n,t=Lh,e=Fh){const r=t*Math.pow(e,n),s=Math.round(Bh*r*(Math.random()-.5)*2);return Math.min(Uh,r+s)}/**
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
 */function qt(n){return n&&n._delegate?n._delegate:n}class $t{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ee="[DEFAULT]";/**
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
 */class qh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new wh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jh(t))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ee){return this.instances.has(t)}getOptions(t=Ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$h(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ee){return this.component?this.component.multipleInstances?t:Ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $h(n){return n===Ee?void 0:n}function jh(n){return n.instantiationMode==="EAGER"}/**
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
 */class zh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Gh={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Hh=K.INFO,Kh={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Wh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Kh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ii{constructor(t){this.name=t,this._logLevel=Hh,this._logHandler=Wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Qh=(n,t)=>t.some(e=>n instanceof e);let Xo,Zo;function Yh(){return Xo||(Xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jh(){return Zo||(Zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,xs=new WeakMap,Ic=new WeakMap,vs=new WeakMap,oi=new WeakMap;function Xh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(te(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Tc.set(e,n)}).catch(()=>{}),oi.set(t,n),t}function Zh(n){if(xs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});xs.set(n,t)}let Os={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return xs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ic.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return te(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function td(n){Os=n(Os)}function ed(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ws(this),t,...e);return Ic.set(r,t.sort?t.sort():[t]),te(r)}:Jh().includes(n)?function(...t){return n.apply(ws(this),t),te(Tc.get(this))}:function(...t){return te(n.apply(ws(this),t))}}function nd(n){return typeof n=="function"?ed(n):(n instanceof IDBTransaction&&Zh(n),Qh(n,Yh())?new Proxy(n,Os):n)}function te(n){if(n instanceof IDBRequest)return Xh(n);if(vs.has(n))return vs.get(n);const t=nd(n);return t!==n&&(vs.set(n,t),oi.set(t,n)),t}const ws=n=>oi.get(n);function vc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=te(a);return r&&a.addEventListener("upgradeneeded",h=>{r(te(a.result),h.oldVersion,h.newVersion,te(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const rd=["get","getKey","getAll","getAllKeys","count"],sd=["put","add","delete","clear"],As=new Map;function ta(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=sd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rd.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return As.set(t,o),o}td(n=>({...n,get:(t,e,r)=>ta(t,e)||n.get(t,e,r),has:(t,e)=>!!ta(t,e)||n.has(t,e)}));/**
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
 */class id{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(od(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function od(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ms="@firebase/app",ea="0.14.8";/**
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
 */const jt=new ii("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ud="@firebase/analytics",ld="@firebase/app-check-compat",hd="@firebase/app-check",dd="@firebase/auth",fd="@firebase/auth-compat",md="@firebase/database",pd="@firebase/data-connect",gd="@firebase/database-compat",_d="@firebase/functions",yd="@firebase/functions-compat",Ed="@firebase/installations",Td="@firebase/installations-compat",Id="@firebase/messaging",vd="@firebase/messaging-compat",wd="@firebase/performance",Ad="@firebase/performance-compat",Rd="@firebase/remote-config",Sd="@firebase/remote-config-compat",bd="@firebase/storage",Cd="@firebase/storage-compat",Pd="@firebase/firestore",Vd="@firebase/ai",Dd="@firebase/firestore-compat",Nd="firebase",kd="12.9.0";/**
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
 */const Ls="[DEFAULT]",xd={[Ms]:"fire-core",[ad]:"fire-core-compat",[ud]:"fire-analytics",[cd]:"fire-analytics-compat",[hd]:"fire-app-check",[ld]:"fire-app-check-compat",[dd]:"fire-auth",[fd]:"fire-auth-compat",[md]:"fire-rtdb",[pd]:"fire-data-connect",[gd]:"fire-rtdb-compat",[_d]:"fire-fn",[yd]:"fire-fn-compat",[Ed]:"fire-iid",[Td]:"fire-iid-compat",[Id]:"fire-fcm",[vd]:"fire-fcm-compat",[wd]:"fire-perf",[Ad]:"fire-perf-compat",[Rd]:"fire-rc",[Sd]:"fire-rc-compat",[bd]:"fire-gcs",[Cd]:"fire-gcs-compat",[Pd]:"fire-fst",[Dd]:"fire-fst-compat",[Vd]:"fire-vertex","fire-js":"fire-js",[Nd]:"fire-js-all"};/**
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
 */const Er=new Map,Od=new Map,Fs=new Map;function na(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ie(n){const t=n.name;if(Fs.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Fs.set(t,n);for(const e of Er.values())na(e,n);for(const e of Od.values())na(e,n);return!0}function Mn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Md(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new xr("app","Firebase",Ld);/**
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
 */class Fd{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Ud=kd;function wc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ls,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ee.create("bad-app-name",{appName:String(s)});if(e||(e=_c()),!e)throw ee.create("no-options");const o=Er.get(s);if(o){if(bn(e,o.options)&&bn(r,o.config))return o;throw ee.create("duplicate-app",{appName:s})}const a=new zh(s);for(const h of Fs.values())a.addComponent(h);const l=new Fd(e,r,a);return Er.set(s,l),l}function Ac(n=Ls){const t=Er.get(n);if(!t&&n===Ls&&_c())return wc();if(!t)throw ee.create("no-app",{appName:n});return t}function Ot(n,t,e){let r=xd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}ie(new $t(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Bd="firebase-heartbeat-database",qd=1,Cn="firebase-heartbeat-store";let Rs=null;function Rc(){return Rs||(Rs=vc(Bd,qd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ee.create("idb-open",{originalErrorMessage:n.message})})),Rs}async function $d(n){try{const e=(await Rc()).transaction(Cn),r=await e.objectStore(Cn).get(Sc(n));return await e.done,r}catch(t){if(t instanceof de)jt.warn(t.message);else{const e=ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function ra(n,t){try{const r=(await Rc()).transaction(Cn,"readwrite");await r.objectStore(Cn).put(t,Sc(n)),await r.done}catch(e){if(e instanceof de)jt.warn(e.message);else{const r=ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function Sc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jd=1024,zd=30;class Gd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=sa();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>zd){const a=Wd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sa(),{heartbeatsToSend:r,unsentEntries:s}=Hd(this._heartbeatsCache.heartbeats),o=yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function sa(){return new Date().toISOString().substring(0,10)}function Hd(n,t=jd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ia(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ia(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Kd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yc()?Ec().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $d(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ra(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ra(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ia(n){return yr(JSON.stringify({version:2,heartbeats:n})).length}function Wd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Qd(n){ie(new $t("platform-logger",t=>new id(t),"PRIVATE")),ie(new $t("heartbeat",t=>new Gd(t),"PRIVATE")),Ot(Ms,ea,n),Ot(Ms,ea,"esm2020"),Ot("fire-js","")}Qd("");var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ne,bc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.F=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(I,y,A){for(var g=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)g[wt-2]=arguments[wt];return p.prototype[y].apply(I,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)I[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)I[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],y=T.g[2];let A=T.g[3],g;g=p+(A^_&(y^A))+I[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[2]+606105819&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[6]+2821735955&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[10]+4294925233&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(A^_&(y^A))+I[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(y^p&(_^y))+I[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=y+(_^A&(p^_))+I[14]+2792965006&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(p^y&(A^p))+I[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^A&(_^y))+I[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[11]+643717713&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[15]+3634488961&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[3]+4107603335&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^A&(_^y))+I[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(p^_))+I[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(A^p))+I[7]+1735328473&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(y^A))+I[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^A)+I[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[11]+1839030562&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[7]+4139469664&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[3]+3572445317&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^A)+I[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^y)+I[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=y+(A^p^_)+I[15]+530742520&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^p)+I[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~A))+I[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[14]+2878612391&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[10]+4293915773&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[6]+2734768916&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~A))+I[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~y))+I[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=y+(p^(A|~_))+I[2]+718787259&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,p){p===void 0&&(p=T.length);const _=p-this.blockSize,I=this.C;let y=this.h,A=0;for(;A<p;){if(y==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(I[y++]=T.charCodeAt(A++),y==this.blockSize){s(this,I),y=0;break}}else for(;A<p;)if(I[y++]=T[A++],y==this.blockSize){s(this,I),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)T[p++]=this.g[_]>>>I&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;const _=[];let I=!0;for(let y=T.length-1;y>=0;y--){const A=T[y]|0;I&&A==p||(_[y]=A,I=!1)}this.g=_}var l={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return E;if(T<0)return k(d(-T));const p=[];let _=1;for(let I=0;T>=_;I++)p[I]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return k(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(p,8));let I=E;for(let A=0;A<T.length;A+=8){var y=Math.min(8,T.length-A);const g=parseInt(T.substring(A,A+y),p);y<8?(y=d(Math.pow(p,y)),I=I.j(y).add(d(g))):(I=I.j(_),I=I.add(d(g)))}return I}var E=h(0),v=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-k(this).m();let T=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);T+=(I>=0?I:4294967296+I)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(x(this))return"-"+k(this).toString(T);const p=d(Math.pow(T,6));var _=this;let I="";for(;;){const y=M(_,p).g;_=W(_,y.j(p));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=y,N(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=W(this,T),x(T)?-1:N(T)?0:1};function k(T){const p=T.g.length,_=[];for(let I=0;I<p;I++)_[I]=~T.g[I];return new a(_,~T.h).add(v)}n.abs=function(){return x(this)?k(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),_=[];let I=0;for(let y=0;y<=p;y++){let A=I+(this.i(y)&65535)+(T.i(y)&65535),g=(A>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);I=g>>>16,A&=65535,g&=65535,_[y]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(T,p){return T.add(k(p))}n.j=function(T){if(N(this)||N(T))return E;if(x(this))return x(T)?k(this).j(k(T)):k(k(this).j(T));if(x(T))return k(this.j(k(T)));if(this.l(C)<0&&T.l(C)<0)return d(this.m()*T.m());const p=this.g.length+T.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let y=0;y<T.g.length;y++){const A=this.i(I)>>>16,g=this.i(I)&65535,wt=T.i(y)>>>16,fe=T.i(y)&65535;_[2*I+2*y]+=g*fe,G(_,2*I+2*y),_[2*I+2*y+1]+=A*fe,G(_,2*I+2*y+1),_[2*I+2*y+1]+=g*wt,G(_,2*I+2*y+1),_[2*I+2*y+2]+=A*wt,G(_,2*I+2*y+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function U(T,p){this.g=T,this.h=p}function M(T,p){if(N(p))throw Error("division by zero");if(N(T))return new U(E,E);if(x(T))return p=M(k(T),p),new U(k(p.g),k(p.h));if(x(p))return p=M(T,k(p)),new U(k(p.g),p.h);if(T.g.length>30){if(x(T)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=v,I=p;I.l(T)<=0;)_=q(_),I=q(I);var y=Q(_,1),A=Q(I,1);for(I=Q(I,2),_=Q(_,2);!N(I);){var g=A.add(I);g.l(T)<=0&&(y=y.add(_),A=g),I=Q(I,1),_=Q(_,1)}return p=W(T,y.j(p)),new U(y,p)}for(y=E;T.l(p)>=0;){for(_=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),g=A.j(p);x(g)||g.l(T)>0;)_-=I,A=d(_),g=A.j(p);N(A)&&(A=v),y=y.add(A),T=W(T,g)}return new U(y,T)}n.B=function(T){return M(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function q(T){const p=T.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function Q(T,p){const _=p>>5;p%=32;const I=T.g.length-_,y=[];for(let A=0;A<I;A++)y[A]=p>0?T.i(A+_)>>>p|T.i(A+_+1)<<32-p:T.i(A+_);return new a(y,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,bc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ne=a}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cc,En,Pc,dr,Us,Vc,Dc,Nc;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof or=="object"&&or];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break t;u=u[w]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function m(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function E(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,w,R){for(var P=Array(arguments.length-2),$=2;$<arguments.length;$++)P[$-2]=arguments[$];return c.prototype[w].apply(f,P)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function C(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function N(i,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=i.length||0;const R=w.length||0;i.length=u+R;for(let P=0;P<R;P++)i[u+P]=w[P]}else i.push(w)}}class x{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(i){a.setTimeout(()=>{throw i},0)}function W(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,u){const f=U.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var U=new x(()=>new M,i=>i.reset());class M{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let q,Q=!1,T=new G,p=()=>{const i=Promise.resolve(void 0);q=()=>{i.then(_)}};function _(){for(var i;i=W();){try{i.h.call(i.g)}catch(u){k(u)}var c=U;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}Q=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function wt(i,c){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}E(wt,y),wt.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&wt.Z.h.call(this)},wt.prototype.h=function(){wt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),Rl=0;function Sl(i,c,u,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++Rl,this.da=this.fa=!1}function jn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function zn(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function bl(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function zi(i){const c={};for(const u in i)c[u]=i[u];return c}const Gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hi(i,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let R=0;R<Gi.length;R++)u=Gi[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function Gn(i){this.src=i,this.g={},this.h=0}Gn.prototype.add=function(i,c,u,f,w){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const P=Zr(i,c,f,w);return P>-1?(c=i[P],u||(c.fa=!1)):(c=new Sl(c,this.src,R,!!f,w),c.fa=u,i.push(c)),c};function Xr(i,c){const u=c.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=w>=0)&&Array.prototype.splice.call(f,w,1),R&&(jn(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Zr(i,c,u,f){for(let w=0;w<i.length;++w){const R=i[w];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return w}return-1}var ts="closure_lm_"+(Math.random()*1e6|0),es={};function Ki(i,c,u,f,w){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Ki(i,c[R],u,f,w);return null}return u=Yi(u),i&&i[fe]?i.J(c,u,l(f)?!!f.capture:!1,w):Cl(i,c,u,!1,f,w)}function Cl(i,c,u,f,w,R){if(!c)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let $=rs(i);if($||(i[ts]=$=new Gn(i)),u=$.add(c,u,f,P,R),u.proxy)return u;if(f=Pl(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)A||(w=P),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(Qi(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Pl(){function i(u){return c.call(i.src,i.listener,u)}const c=Vl;return i}function Wi(i,c,u,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)Wi(i,c[R],u,f,w);else f=l(f)?!!f.capture:!!f,u=Yi(u),i&&i[fe]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],u=Zr(c,u,f,w),u>-1&&(jn(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=rs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Zr(c,u,f,w)),(u=i>-1?c[i]:null)&&ns(u))}function ns(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[fe])Xr(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(Qi(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=rs(c))?(Xr(u,i),u.h==0&&(u.src=null,c[ts]=null)):jn(i)}}}function Qi(i){return i in es?es[i]:es[i]="on"+i}function Vl(i,c){if(i.da)i=!0;else{c=new wt(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&ns(i),i=u.call(f,c)}return i}function rs(i){return i=i[ts],i instanceof Gn?i:null}var ss="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yi(i){return typeof i=="function"?i:(i[ss]||(i[ss]=function(c){return i.handleEvent(c)}),i[ss])}function gt(){I.call(this),this.i=new Gn(this),this.M=this,this.G=null}E(gt,I),gt.prototype[fe]=!0,gt.prototype.removeEventListener=function(i,c,u,f){Wi(this,i,c,u,f)};function Tt(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new y(c,i);else if(c instanceof y)c.target=c.target||i;else{var w=c;c=new y(f,i),Hi(c,w)}w=!0;let R,P;if(u)for(P=u.length-1;P>=0;P--)R=c.g=u[P],w=Hn(R,f,!0,c)&&w;if(R=c.g=i,w=Hn(R,f,!0,c)&&w,w=Hn(R,f,!1,c)&&w,u)for(P=0;P<u.length;P++)R=c.g=u[P],w=Hn(R,f,!1,c)&&w}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)jn(u[f]);delete i.g[c],i.h--}}this.G=null},gt.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},gt.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function Hn(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let R=0;R<c.length;++R){const P=c[R];if(P&&!P.da&&P.capture==u){const $=P.listener,ct=P.ha||P.src;P.fa&&Xr(i.i,P),w=$.call(ct,f)!==!1&&w}}return w&&!f.defaultPrevented}function Dl(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Ji(i){i.g=Dl(()=>{i.g=null,i.i&&(i.i=!1,Ji(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Nl extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(i){I.call(this),this.h=i,this.g={}}E(Ze,I);var Xi=[];function Zi(i){zn(i.g,function(c,u){this.g.hasOwnProperty(u)&&ns(c)},i),i.g={}}Ze.prototype.N=function(){Ze.Z.N.call(this),Zi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=a.JSON.stringify,kl=a.JSON.parse,xl=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function to(){}function eo(){}var tn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function os(){y.call(this,"d")}E(os,y);function as(){y.call(this,"c")}E(as,y);var me={},no=null;function Kn(){return no=no||new gt}me.Ia="serverreachability";function ro(i){y.call(this,me.Ia,i)}E(ro,y);function en(i){const c=Kn();Tt(c,new ro(c))}me.STAT_EVENT="statevent";function so(i,c){y.call(this,me.STAT_EVENT,i),this.stat=c}E(so,y);function It(i){const c=Kn();Tt(c,new so(c,i))}me.Ja="timingevent";function io(i,c){y.call(this,me.Ja,i),this.size=c}E(io,y);function nn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function rn(){this.g=!0}rn.prototype.ua=function(){this.g=!1};function Ol(i,c,u,f,w,R){i.info(function(){if(i.g)if(R){var P="",$=R.split("&");for(let J=0;J<$.length;J++){var ct=$[J].split("=");if(ct.length>1){const lt=ct[0];ct=ct[1];const kt=lt.split("_");P=kt.length>=2&&kt[1]=="type"?P+(lt+"="+ct+"&"):P+(lt+"=redacted&")}}}else P=null;else P=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+P})}function Ml(i,c,u,f,w,R,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+R+" "+P})}function De(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Fl(i,u)+(f?" "+f:"")})}function Ll(i,c){i.info(function(){return"TIMEOUT: "+c})}rn.prototype.info=function(){};function Fl(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var u=R[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return is(R)}catch{return c}}var Wn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},oo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ao;function cs(){}E(cs,to),cs.prototype.g=function(){return new XMLHttpRequest},ao=new cs;function sn(i){return encodeURIComponent(String(i))}function Ul(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function Ht(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new Ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}var uo={},us={};function ls(i,c,u){i.M=1,i.A=Yn(Nt(c)),i.u=u,i.R=!0,lo(i,null)}function lo(i,c){i.F=Date.now(),Qn(i),i.B=Nt(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Ao(u.i,"t",f),i.C=0,u=i.j.L,i.h=new co,i.g=$o(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Nl(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(Xi[0]=w.toString()),w=Xi);for(let R=0;R<w.length;R++){const P=Ki(u,w[R],f||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=i.J?zi(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),en(),Ol(i.i,i.v,i.B,i.l,i.S,i.u)}Ht.prototype.ba=function(i){i=i.target;const c=this.O;c&&Qt(i)==3?c.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const $=Qt(this.g),ct=this.g.ya(),J=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||Do(this.g)))){this.K||$!=4||ct==7||(ct==8||J<=0?en(3):en(2)),hs(this);var c=this.g.ca();this.X=c;var u=Bl(this);if(this.o=c==200,Ml(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var R=f;break e}}R=null}if(i=R)De(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ds(this,i);else{this.o=!1,this.m=3,It(12),pe(this),on(this);break t}}if(this.R){i=!0;let lt;for(;!this.K&&this.C<u.length;)if(lt=ql(this,u),lt==us){$==4&&(this.m=4,It(14),i=!1),De(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==uo){this.m=4,It(15),De(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else De(this.i,this.l,lt,null),ds(this,lt);if(ho(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||u.length!=0||this.h.h||(this.m=1,It(16),i=!1),this.o=this.o&&i,!i)De(this.i,this.l,u,"[Invalid Chunked Response]"),pe(this),on(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Ts(P),P.P=!0,It(11))}}else De(this.i,this.l,u,null),ds(this,u);$==4&&pe(this),this.o&&!this.K&&($==4?Fo(this.j,this):(this.o=!1,Qn(this)))}else eh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),pe(this),on(this)}}}catch{}finally{}};function Bl(i){if(!ho(i))return i.g.la();const c=Do(i.g);if(c==="")return"";let u="";const f=c.length,w=Qt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return pe(i),on(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,u+=i.h.i.decode(c[R],{stream:!(w&&R==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function ho(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ql(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?us:(u=Number(c.substring(u,f)),isNaN(u)?uo:(f+=1,f+u>c.length?us:(c=c.slice(f,f+u),i.C=f+u,c)))}Ht.prototype.cancel=function(){this.K=!0,pe(this)};function Qn(i){i.T=Date.now()+i.H,fo(i,i.H)}function fo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=nn(d(i.aa,i),c)}function hs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ht.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Ll(this.i,this.B),this.M!=2&&(en(),It(17)),pe(this),this.m=2,on(this)):fo(this,this.T-i)};function on(i){i.j.I==0||i.K||Fo(i.j,i)}function pe(i){hs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Zi(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function ds(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||fs(u.h,i))){if(!i.L&&fs(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)er(u),Zn(u);else break t;Es(u),It(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=nn(d(u.Va,u),6e3));go(u.h)<=1&&u.ta&&(u.ta=void 0)}else _e(u,11)}else if((i.L||u.g==i)&&er(u),!g(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let J=w[c];const lt=J[0];if(!(lt<=u.K))if(u.K=lt,J=J[1],u.I==2)if(J[0]=="c"){u.M=J[1],u.ba=J[2];const kt=J[3];kt!=null&&(u.ka=kt,u.j.info("VER="+u.ka));const ye=J[4];ye!=null&&(u.za=ye,u.j.info("SVER="+u.za));const Yt=J[5];Yt!=null&&typeof Yt=="number"&&Yt>0&&(f=1.5*Yt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Jt=i.g;if(Jt){const rr=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var R=f.h;R.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ms(R,R.h),R.h=null))}if(f.G){const Is=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(f.wa=Is,Z(f.J,f.G,Is))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var P=i;if(f.na=qo(f,f.L?f.ba:null,f.W),P.L){_o(f.h,P);var $=P,ct=f.O;ct&&($.H=ct),$.D&&(hs($),Qn($)),f.g=P}else Mo(f);u.i.length>0&&tr(u)}else J[0]!="stop"&&J[0]!="close"||_e(u,7);else u.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?_e(u,7):ys(u):J[0]!="noop"&&u.l&&u.l.qa(J),u.A=0)}}en(4)}catch{}}var $l=class{constructor(i,c){this.g=i,this.map=c}};function mo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function po(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function go(i){return i.h?1:i.g?i.g.size:0}function fs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ms(i,c){i.g?i.g.add(c):i.h=c}function _o(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}mo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function yo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return C(i.i)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jl(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let w,R=null;f>=0?(w=i[u].substring(0,f),R=i[u].substring(f+1)):w=i[u],c(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Kt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Kt?(this.l=i.l,an(this,i.j),this.o=i.o,this.g=i.g,cn(this,i.u),this.h=i.h,ps(this,Ro(i.i)),this.m=i.m):i&&(c=String(i).match(Eo))?(this.l=!1,an(this,c[1]||"",!0),this.o=un(c[2]||""),this.g=un(c[3]||"",!0),cn(this,c[4]),this.h=un(c[5]||"",!0),ps(this,c[6]||"",!0),this.m=un(c[7]||"")):(this.l=!1,this.i=new hn(null,this.l))}Kt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(ln(c,To,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(ln(c,To,!0),"@"),i.push(sn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(ln(u,u.charAt(0)=="/"?Hl:Gl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",ln(u,Wl)),i.join("")},Kt.prototype.resolve=function(i){const c=Nt(this);let u=!!i.j;u?an(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)cn(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let P=0;P<w.length;){const $=w[P++];$=="."?f&&P==w.length&&R.push(""):$==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&P==w.length&&R.push("")):(R.push($),f=!0)}f=R.join("/")}else f=w}return u?c.h=f:u=i.i.toString()!=="",u?ps(c,Ro(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Nt(i){return new Kt(i)}function an(i,c,u){i.j=u?un(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function cn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function ps(i,c,u){c instanceof hn?(i.i=c,Ql(i.i,i.l)):(u||(c=ln(c,Kl)),i.i=new hn(c,i.l))}function Z(i,c,u){i.i.set(c,u)}function Yn(i){return Z(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function un(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function ln(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,zl),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function zl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var To=/[#\/\?@]/g,Gl=/[#\?:]/g,Hl=/[#\?]/g,Kl=/[#\?@]/g,Wl=/#/g;function hn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ge(i){i.g||(i.g=new Map,i.h=0,i.i&&jl(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=hn.prototype,n.add=function(i,c){ge(this),this.i=null,i=Ne(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Io(i,c){ge(i),c=Ne(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function vo(i,c){return ge(i),c=Ne(i,c),i.g.has(c)}n.forEach=function(i,c){ge(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(c,w,f,this)},this)},this)};function wo(i,c){ge(i);let u=[];if(typeof c=="string")vo(i,c)&&(u=u.concat(i.g.get(Ne(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return ge(this),this.i=null,i=Ne(this,i),vo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=wo(this,i),i.length>0?String(i[0]):c):c};function Ao(i,c,u){Io(i,c),u.length>0&&(i.i=null,i.g.set(Ne(i,c),C(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const w=sn(u);u=wo(this,u);for(let R=0;R<u.length;R++){let P=w;u[R]!==""&&(P+="="+sn(u[R])),i.push(P)}}return this.i=i.join("&")};function Ro(i){const c=new hn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Ne(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Ql(i,c){c&&!i.j&&(ge(i),i.i=null,i.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(Io(this,f),Ao(this,w,u))},i)),i.j=c}function Yl(i,c){const u=new rn;if(a.Image){const f=new Image;f.onload=m(Wt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=m(Wt,u,"TestLoadImage: error",!1,c,f),f.onabort=m(Wt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(Wt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Jl(i,c){const u=new rn,f=new AbortController,w=setTimeout(()=>{f.abort(),Wt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?Wt(u,"TestPingServer: ok",!0,c):Wt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Wt(u,"TestPingServer: error",!1,c)})}function Wt(i,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function Xl(){this.g=new xl}function gs(i){this.i=i.Sb||null,this.h=i.ab||!1}E(gs,to),gs.prototype.g=function(){return new Jn(this.i,this.h)};function Jn(i,c){gt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(Jn,gt),n=Jn.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,fn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;So(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function So(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?dn(this):fn(this),this.readyState==3&&So(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,dn(this))},n.Na=function(i){this.g&&(this.response=i,dn(this))},n.ga=function(){this.g&&dn(this)};function dn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,fn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function fn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function bo(i){let c="";return zn(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function _s(i,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=bo(u),typeof i=="string"?u!=null&&sn(u):Z(i,c,u))}function nt(i){gt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(nt,gt);var Zl=/^https?$/i,th=["POST","PUT"];n=nt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ao.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Co(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(th,c,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,P]of u)this.g.setRequestHeader(R,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){Co(this,R)}};function Co(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Po(i),Xn(i)}function Po(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Tt(this,"complete"),Tt(this,"abort"),Xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xn(this,!0)),nt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vo(this):this.Xa())},n.Xa=function(){Vo(this)};function Vo(i){if(i.h&&typeof o<"u"){if(i.v&&Qt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Tt(i,"readystatechange"),Qt(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=R===0){let P=String(i.D).match(Eo)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!Zl.test(P?P.toLowerCase():"")}u=f}if(u)Tt(i,"complete"),Tt(i,"success");else{i.o=6;try{var w=Qt(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",Po(i)}}finally{Xn(i)}}}}function Xn(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Tt(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Qt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),kl(c)}};function Do(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function eh(i){const c={};i=(i.g&&Qt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var u=Ul(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[w]||[];c[w]=R,R.push(u)}bl(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function No(i){this.za=0,this.i=[],this.j=new rn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mn("baseRetryDelayMs",5e3,i),this.Za=mn("retryDelaySeedMs",1e4,i),this.Ta=mn("forwardChannelMaxRetries",2,i),this.va=mn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new mo(i&&i.concurrentRequestLimit),this.Ba=new Xl,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=No.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){It(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=qo(this,null,this.W),tr(this)};function ys(i){if(ko(i),i.I==3){var c=i.V++,u=Nt(i.J);if(Z(u,"SID",i.M),Z(u,"RID",c),Z(u,"TYPE","terminate"),pn(i,u),c=new Ht(i,i.j,c),c.M=2,c.A=Yn(Nt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=$o(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Qn(c)}Bo(i)}function Zn(i){i.g&&(Ts(i),i.g.cancel(),i.g=null)}function ko(i){Zn(i),i.v&&(a.clearTimeout(i.v),i.v=null),er(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function tr(i){if(!po(i.h)&&!i.m){i.m=!0;var c=i.Ea;q||p(),Q||(q(),Q=!0),T.add(c,i),i.D=0}}function nh(i,c){return go(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=nn(d(i.Ea,i,c),Uo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new Ht(this,this.j,i);let R=this.o;if(this.U&&(R?(R=zi(R),Hi(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=Oo(this,w,c),u=Nt(this.J),Z(u,"RID",i),Z(u,"CVER",22),this.G&&Z(u,"X-HTTP-Session-Id",this.G),pn(this,u),R&&(this.R?c="headers="+sn(bo(R))+"&"+c:this.u&&_s(u,this.u,R)),ms(this.h,w),this.Ra&&Z(u,"TYPE","init"),this.S?(Z(u,"$req",c),Z(u,"SID","null"),w.U=!0,ls(w,u,null)):ls(w,u,c),this.I=2}}else this.I==3&&(i?xo(this,i):this.i.length==0||po(this.h)||xo(this))};function xo(i,c){var u;c?u=c.l:u=i.V++;const f=Nt(i.J);Z(f,"SID",i.M),Z(f,"RID",u),Z(f,"AID",i.K),pn(i,f),i.u&&i.o&&_s(f,i.u,i.o),u=new Ht(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Oo(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ms(i.h,u),ls(u,f,c)}function pn(i,c){i.H&&zn(i.H,function(u,f){Z(c,f,u)}),i.l&&zn({},function(u,f){Z(c,f,u)})}function Oo(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var w=i.i;let $=-1;for(;;){const ct=["count="+u];$==-1?u>0?($=w[0].g,ct.push("ofs="+$)):$=0:ct.push("ofs="+$);let J=!0;for(let lt=0;lt<u;lt++){var R=w[lt].g;const kt=w[lt].map;if(R-=$,R<0)$=Math.max(0,w[lt].g-100),J=!1;else try{R="req"+R+"_"||"";try{var P=kt instanceof Map?kt:Object.entries(kt);for(const[ye,Yt]of P){let Jt=Yt;l(Yt)&&(Jt=is(Yt)),ct.push(R+ye+"="+encodeURIComponent(Jt))}}catch(ye){throw ct.push(R+"type="+encodeURIComponent("_badmap")),ye}}catch{f&&f(kt)}}if(J){P=ct.join("&");break t}}P=void 0}return i=i.i.splice(0,u),c.G=i,P}function Mo(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;q||p(),Q||(q(),Q=!0),T.add(c,i),i.A=0}}function Es(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=nn(d(i.Da,i),Uo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Lo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=nn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),Zn(this),Lo(this))};function Ts(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Lo(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Nt(i.na);Z(c,"RID","rpc"),Z(c,"SID",i.M),Z(c,"AID",i.K),Z(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Z(c,"TO",i.ia),Z(c,"TYPE","xmlhttp"),pn(i,c),i.u&&i.o&&_s(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=Yn(Nt(c)),u.u=null,u.R=!0,lo(u,i)}n.Va=function(){this.C!=null&&(this.C=null,Zn(this),Es(this),It(19))};function er(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Fo(i,c){var u=null;if(i.g==c){er(i),Ts(i),i.g=null;var f=2}else if(fs(i.h,c))u=c.G,_o(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=i.D;f=Kn(),Tt(f,new io(f,u)),tr(i)}else Mo(i);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&nh(i,c)||f==2&&Es(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),w){case 1:_e(i,5);break;case 4:_e(i,10);break;case 3:_e(i,6);break;default:_e(i,2)}}}function Uo(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function _e(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const w=!f;f=new Kt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||an(f,"https"),Yn(f),w?Yl(f.toString(),u):Jl(f.toString(),u)}else It(2);i.I=0,i.l&&i.l.pa(c),Bo(i),ko(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Bo(i){if(i.I=0,i.ja=[],i.l){const c=yo(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ja,c),N(i.ja,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.oa()}}function qo(i,c,u){var f=u instanceof Kt?Nt(u):new Kt(u);if(f.g!="")c&&(f.g=c+"."+f.g),cn(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const R=new Kt(null);f&&an(R,f),c&&(R.g=c),w&&cn(R,w),u&&(R.h=u),f=R}return u=i.G,c=i.wa,u&&c&&Z(f,u,c),Z(f,"VER",i.ka),pn(i,f),f}function $o(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new nt(new gs({ab:u})):new nt(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}n=jo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function nr(){}nr.prototype.g=function(i,c){return new Rt(i,c)};function Rt(i,c){gt.call(this),this.g=new No(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!g(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new ke(this)}E(Rt,gt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ys(this.g)},Rt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=is(i),i=u);c.i.push(new $l(c.Ya++,i)),c.I==3&&tr(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,Rt.Z.N.call(this)};function zo(i){os.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}E(zo,os);function Go(){as.call(this),this.status=1}E(Go,as);function ke(i){this.g=i}E(ke,jo),ke.prototype.ra=function(){Tt(this.g,"a")},ke.prototype.qa=function(i){Tt(this.g,new zo(i))},ke.prototype.pa=function(i){Tt(this.g,new Go)},ke.prototype.oa=function(){Tt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Nc=function(){return new nr},Dc=function(){return Kn()},Vc=me,Us={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,dr=Wn,oo.COMPLETE="complete",Pc=oo,eo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",gt.prototype.listen=gt.prototype.J,En=eo,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,Cc=nt}).apply(typeof or<"u"?or:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let We="12.9.0";function Yd(n){We=n}/**
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
 */const ve=new ii("@firebase/firestore");function xe(){return ve.logLevel}function V(n,...t){if(ve.logLevel<=K.DEBUG){const e=t.map(ai);ve.debug(`Firestore (${We}): ${n}`,...e)}}function zt(n,...t){if(ve.logLevel<=K.ERROR){const e=t.map(ai);ve.error(`Firestore (${We}): ${n}`,...e)}}function we(n,...t){if(ve.logLevel<=K.WARN){const e=t.map(ai);ve.warn(`Firestore (${We}): ${n}`,...e)}}function ai(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,kc(n,r,e)}function kc(n,t,e){let r=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw zt(r),new Error(r)}function Y(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||kc(t,s,r)}function B(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends de{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class re{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class xc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class Xd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zd{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new xc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class tf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ef{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new tf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class aa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Md(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new aa(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new aa(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ci{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function Bs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Ss(s)===Ss(o)?j(s,o):Ss(s)?1:-1}return j(n.length,t.length)}const sf=55296,of=57343;function Ss(n){const t=n.charCodeAt(0);return t>=sf&&t<=of}function je(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const ca="__name__";class xt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=xt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=xt.isNumericId(t),s=xt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?xt.extractNumericId(t).compare(xt.extractNumericId(e)):Bs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ne.fromString(t.substring(4,t.length-2))}}class X extends xt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const af=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends xt{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return af.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ca}static keyField(){return new mt([ca])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}/**
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
 */function Oc(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function cf(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ua(n){if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function la(n){if(O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Or(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Tr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Or(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function at(n,t){const e={typeString:n};return t&&(e.value=t),e}function Ln(n,t){if(!Mc(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
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
 */const ha=-62135596800,da=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*da);return new tt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ha)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/da}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ln(t,tt._jsonSchema))return new tt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ha;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:at("string",tt._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new tt(0,0))}static max(){return new F(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pn=-1;function uf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new tt(e+1,0):new tt(e,r));return new oe(s,O.empty(),t)}function lf(n){return new oe(n.readTime,n.key,Pn)}class oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new oe(F.min(),O.empty(),Pn)}static max(){return new oe(F.max(),O.empty(),Pn)}}function hf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const df="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ff{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Qe(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==df)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):b.reject(e)}static resolve(t){return new b(((e,r)=>{e(t)}))}static reject(t){return new b(((e,r)=>{r(t)}))}static waitFor(t){return new b(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next((s=>s?b.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new b(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new b(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function mf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ye(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Mr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Mr.ce=-1;/**
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
 */const ui=-1;function Lr(n){return n==null}function Ir(n){return n===0&&1/n==-1/0}function pf(n){return typeof n=="number"&&Number.isInteger(n)&&!Ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Lc="";function gf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=fa(t)),t=_f(n.get(e),t);return fa(t)}function _f(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Lc:e+="";break;default:e+=o}}return e}function fa(n){return n+Lc+""}/**
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
 */function ma(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function be(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Fc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class et{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ar(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ar(this.root,t,this.comparator,!1)}getReverseIterator(){return new ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ar(this.root,t,this.comparator,!0)}}class ar{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pa(this.data.getIterator())}getIteratorFrom(t){return new pa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class pa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ut(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Uc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Uc("Invalid base64 string: "+o):o}})(t);return new pt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const yf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=yf.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ce(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */const Bc="server_timestamp",qc="__type__",$c="__previous_value__",jc="__local_write_time__";function li(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[qc])==null?void 0:r.stringValue)===Bc}function Fr(n){const t=n.mapValue.fields[$c];return li(t)?Fr(t):t}function Vn(n){const t=ae(n.mapValue.fields[jc].timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class Ef{constructor(t,e,r,s,o,a,l,h,d,m,E){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=E}}const vr="(default)";class Dn{constructor(t,e){this.projectId=t,this.database=e||vr}static empty(){return new Dn("","")}get isDefaultDatabase(){return this.database===vr}isEqual(t){return t instanceof Dn&&t.projectId===this.projectId&&t.database===this.database}}function Tf(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dn(n.options.projectId,t)}/**
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
 */const zc="__type__",If="__max__",cr={mapValue:{}},Gc="__vector__",wr="value";function ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?li(n)?4:wf(n)?9007199254740991:vf(n)?10:11:L(28295,{value:n})}function Ut(n,t){if(n===t)return!0;const e=ue(n);if(e!==ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Vn(n).isEqual(Vn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ae(s.timestampValue),l=ae(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ce(s.bytesValue).isEqual(ce(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),l=st(o.doubleValue);return a===l?Ir(a)===Ir(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ma(a)!==ma(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ut(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Nn(n,t){return(n.values||[]).find((e=>Ut(e,t)))!==void 0}function ze(n,t){if(n===t)return 0;const e=ue(n),r=ue(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return ga(n.timestampValue,t.timestampValue);case 4:return ga(Vn(n),Vn(t));case 5:return Bs(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ce(o),h=ce(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=j(l[d],h[d]);if(m!==0)return m}return j(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=j(st(o.latitude),st(a.latitude));return l!==0?l:j(st(o.longitude),st(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return _a(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var v,C,N,x;const l=o.fields||{},h=a.fields||{},d=(v=l[wr])==null?void 0:v.arrayValue,m=(C=h[wr])==null?void 0:C.arrayValue,E=j(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((x=m==null?void 0:m.values)==null?void 0:x.length)||0);return E!==0?E:_a(d,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===cr.mapValue&&a===cr.mapValue)return 0;if(o===cr.mapValue)return 1;if(a===cr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const v=Bs(h[E],m[E]);if(v!==0)return v;const C=ze(l[h[E]],d[m[E]]);if(C!==0)return C}return j(h.length,m.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ga(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ae(n),r=ae(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function _a(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ze(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function Ge(n){return qs(n)}function qs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ce(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=qs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${qs(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function fr(n){switch(ue(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Fr(n);return t?16+fr(t):16;case 5:return 2*n.stringValue.length;case 6:return ce(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+fr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return be(r.fields,((o,a)=>{s+=o.length+fr(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function ya(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function $s(n){return!!n&&"integerValue"in n}function hi(n){return!!n&&"arrayValue"in n}function Ea(n){return!!n&&"nullValue"in n}function Ta(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mr(n){return!!n&&"mapValue"in n}function vf(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[zc])==null?void 0:r.stringValue)===Gc}function wn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return be(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=wn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wn(n.arrayValue.values[e]);return t}return{...n}}function wf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===If}/**
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
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(e)}setAll(t){let e=mt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=wn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];mr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){be(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new bt(wn(this.value))}}function Hc(n){const t=[];return be(n.fields,((e,r)=>{const s=new mt([e]);if(mr(r)){const o=Hc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Pt(t)}/**
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
 */class Et{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,F.min(),F.min(),F.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new Et(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new Et(t,2,e,F.min(),F.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,F.min(),F.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ar{constructor(t,e){this.position=t,this.inclusive=e}}function Ia(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function va(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Af(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Kc{}class ot extends Kc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Sf(t,e,r):e==="array-contains"?new Pf(t,r):e==="in"?new Vf(t,r):e==="not-in"?new Df(t,r):e==="array-contains-any"?new Nf(t,r):new ot(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bf(t,r):new Cf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ze(e,this.value)):e!==null&&ue(this.value)===ue(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Kc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Dt(t,e)}matches(t){return Wc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wc(n){return n.op==="and"}function Qc(n){return Rf(n)&&Wc(n)}function Rf(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function js(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+Ge(n.value);if(Qc(n))return n.filters.map((t=>js(t))).join(",");{const t=n.filters.map((e=>js(e))).join(",");return`${n.op}(${t})`}}function Yc(n,t){return n instanceof ot?(function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)})(n,t):n instanceof Dt?(function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&Yc(a,s.filters[l])),!0):!1})(n,t):void L(19439)}function Jc(n){return n instanceof ot?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`})(n):n instanceof Dt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Jc).join(" ,")+"}"})(n):"Filter"}class Sf extends ot{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class bf extends ot{constructor(t,e){super(t,"in",e),this.keys=Xc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Cf extends ot{constructor(t,e){super(t,"not-in",e),this.keys=Xc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xc(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class Pf extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&Nn(e.arrayValue,this.value)}}class Vf extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Nn(this.value.arrayValue,e)}}class Df extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Nn(this.value.arrayValue,e)}}class Nf extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Nn(this.value.arrayValue,r)))}}/**
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
 */class kf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function wa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new kf(n,t,e,r,s,o,a)}function di(n){const t=B(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>js(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ge(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ge(r))).join(",")),t.Te=e}return t.Te}function fi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Af(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Yc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!va(n.startAt,t.startAt)&&va(n.endAt,t.endAt)}function zs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fn{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function xf(n,t,e,r,s,o,a,l){return new Fn(n,t,e,r,s,o,a,l)}function Zc(n){return new Fn(n)}function Aa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Of(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function tu(n){return n.collectionGroup!==null}function An(n){const t=B(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ut(mt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Rr(o,r))})),e.has(mt.keyField().canonicalString())||t.Ie.push(new Rr(mt.keyField(),r))}return t.Ie}function Mt(n){const t=B(n);return t.Ee||(t.Ee=Mf(t,An(n))),t.Ee}function Mf(n,t){if(n.limitType==="F")return wa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Rr(s.field,o)}));const e=n.endAt?new Ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ar(n.startAt.position,n.startAt.inclusive):null;return wa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Gs(n,t){const e=n.filters.concat([t]);return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Hs(n,t,e){return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ur(n,t){return fi(Mt(n),Mt(t))&&n.limitType===t.limitType}function eu(n){return`${di(Mt(n))}|lt:${n.limitType}`}function Oe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Jc(s))).join(", ")}]`),Lr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Ge(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Ge(s))).join(",")),`Target(${r})`})(Mt(n))}; limitType=${n.limitType})`}function Br(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of An(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=Ia(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,An(r),s)||r.endAt&&!(function(a,l,h){const d=Ia(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,An(r),s))})(n,t)}function Lf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nu(n){return(t,e)=>{let r=!1;for(const s of An(n)){const o=Ff(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ff(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?ze(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){be(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Fc(this.inner)}size(){return this.innerSize}}/**
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
 */const Uf=new et(O.comparator);function Gt(){return Uf}const ru=new et(O.comparator);function Tn(...n){let t=ru;for(const e of n)t=t.insert(e.key,e);return t}function su(n){let t=ru;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Te(){return Rn()}function iu(){return Rn()}function Rn(){return new Ce((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Bf=new et(O.comparator),qf=new ut(O.comparator);function z(...n){let t=qf;for(const e of n)t=t.add(e);return t}const $f=new ut(j);function jf(){return $f}/**
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
 */function mi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function ou(n){return{integerValue:""+n}}function zf(n,t){return pf(t)?ou(t):mi(n,t)}/**
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
 */class qr{constructor(){this._=void 0}}function Gf(n,t,e){return n instanceof kn?(function(s,o){const a={fields:{[qc]:{stringValue:Bc},[jc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&li(o)&&(o=Fr(o)),o&&(a.fields[$c]=o),{mapValue:a}})(e,t):n instanceof xn?cu(n,t):n instanceof On?uu(n,t):(function(s,o){const a=au(s,o),l=Ra(a)+Ra(s.Ae);return $s(a)&&$s(s.Ae)?ou(l):mi(s.serializer,l)})(n,t)}function Hf(n,t,e){return n instanceof xn?cu(n,t):n instanceof On?uu(n,t):e}function au(n,t){return n instanceof Sr?(function(r){return $s(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class kn extends qr{}class xn extends qr{constructor(t){super(),this.elements=t}}function cu(n,t){const e=lu(t);for(const r of n.elements)e.some((s=>Ut(s,r)))||e.push(r);return{arrayValue:{values:e}}}class On extends qr{constructor(t){super(),this.elements=t}}function uu(n,t){let e=lu(t);for(const r of n.elements)e=e.filter((s=>!Ut(s,r)));return{arrayValue:{values:e}}}class Sr extends qr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ra(n){return st(n.integerValue||n.doubleValue)}function lu(n){return hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kf{constructor(t,e){this.field=t,this.transform=e}}function Wf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof xn&&s instanceof xn||r instanceof On&&s instanceof On?je(r.elements,s.elements,Ut):r instanceof Sr&&s instanceof Sr?Ut(r.Ae,s.Ae):r instanceof kn&&s instanceof kn})(n.transform,t.transform)}class Qf{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function pr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class $r{}function hu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new fu(n.key,Bt.none()):new Un(n.key,n.data,Bt.none());{const e=n.data,r=bt.empty();let s=new ut(mt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Pe(n.key,r,new Pt(s.toArray()),Bt.none())}}function Yf(n,t,e){n instanceof Un?(function(s,o,a){const l=s.value.clone(),h=ba(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof Pe?(function(s,o,a){if(!pr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ba(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(du(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Sn(n,t,e,r){return n instanceof Un?(function(o,a,l,h){if(!pr(o.precondition,a))return l;const d=o.value.clone(),m=Ca(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Pe?(function(o,a,l,h){if(!pr(o.precondition,a))return l;const d=Ca(o.fieldTransforms,h,a),m=a.data;return m.setAll(du(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(n,t,e,r):(function(o,a,l){return pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function Jf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=au(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function Sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&je(r,s,((o,a)=>Wf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Un extends $r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pe extends $r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function du(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function ba(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Hf(a,l,e[s]))}return r}function Ca(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Gf(o,a,t))}return r}class fu extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xf extends $r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Yf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=iu();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=hu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,((e,r)=>Sa(e,r)))&&je(this.baseMutations,t.baseMutations,((e,r)=>Sa(e,r)))}}class pi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return Bf})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new pi(t,e,r,s)}}/**
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
 */class tm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class em{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var it,H;function nm(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function mu(n){if(n===void 0)return zt("GRPC error has no .code"),S.UNKNOWN;switch(n){case it.OK:return S.OK;case it.CANCELLED:return S.CANCELLED;case it.UNKNOWN:return S.UNKNOWN;case it.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case it.INTERNAL:return S.INTERNAL;case it.UNAVAILABLE:return S.UNAVAILABLE;case it.UNAUTHENTICATED:return S.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case it.NOT_FOUND:return S.NOT_FOUND;case it.ALREADY_EXISTS:return S.ALREADY_EXISTS;case it.PERMISSION_DENIED:return S.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case it.ABORTED:return S.ABORTED;case it.OUT_OF_RANGE:return S.OUT_OF_RANGE;case it.UNIMPLEMENTED:return S.UNIMPLEMENTED;case it.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(H=it||(it={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rm(){return new TextEncoder}/**
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
 */const sm=new ne([4294967295,4294967295],0);function Pa(n){const t=rm().encode(n),e=new bc;return e.update(t),new Uint8Array(e.digest())}function Va(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ne([e,r],0),new ne([s,o],0)]}class gi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new In(`Invalid padding: ${e}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new In(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ne.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ne.fromNumber(r)));return s.compare(sm)===1&&(s=new ne([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Pa(t),[r,s]=Va(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new gi(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Pa(t),[r,s]=Va(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class In extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new jr(F.min(),s,new et(j),Gt(),z())}}class Bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Bn(r,e,z(),z(),z())}}/**
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
 */class gr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class pu{constructor(t,e){this.targetId=t,this.Ce=e}}class gu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Da{constructor(){this.ve=0,this.Fe=Na(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),r=z();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new Bn(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=Na()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class im{constructor(t){this.Ge=t,this.ze=new Map,this.je=Gt(),this.He=ur(),this.Je=ur(),this.Ze=new et(j)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(zs(o))if(r===0){const a=new O(o.path);this.et(e,a,Et.newNoDocument(a,F.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ce(r).toUint8Array()}catch(h){if(h instanceof Uc)return we("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new gi(a,s,o)}catch(h){return we(h instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&zs(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Et.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let r=z();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new jr(t,e,this.Ze,this.je,r);return this.je=Gt(),this.He=ur(),this.Je=ur(),this.Ze=new et(j),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Da,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new ut(j),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new ut(j),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Da),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ur(){return new et(O.comparator)}function Na(){return new et(O.comparator)}const om={asc:"ASCENDING",desc:"DESCENDING"},am={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cm={and:"AND",or:"OR"};class um{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ks(n,t){return n.useProto3Json||Lr(t)?t:{value:t}}function br(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _u(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function lm(n,t){return br(n,t.toTimestamp())}function Lt(n){return Y(!!n,49232),F.fromTimestamp((function(e){const r=ae(e);return new tt(r.seconds,r.nanos)})(n))}function _i(n,t){return Ws(n,t).canonicalString()}function Ws(n,t){const e=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function yu(n){const t=X.fromString(n);return Y(wu(t),10190,{key:t.toString()}),t}function Qs(n,t){return _i(n.databaseId,t.path)}function bs(n,t){const e=yu(t);if(e.get(1)!==n.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Tu(e))}function Eu(n,t){return _i(n.databaseId,t)}function hm(n){const t=yu(n);return t.length===4?X.emptyPath():Tu(t)}function Ys(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tu(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ka(n,t,e){return{name:Qs(n,t),fields:e.value.mapValue.fields}}function dm(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?S.UNKNOWN:mu(d.code);return new D(m,d.message||"")})(a);e=new gu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bs(n,r.document.name),o=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):F.min(),l=new bt({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new gr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bs(n,r.document),o=r.readTime?Lt(r.readTime):F.min(),a=Et.newNoDocument(s,o),l=r.removedTargetIds||[];e=new gr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bs(n,r.document),o=r.removedTargetIds||[];e=new gr([],o,s,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new em(s,o),l=r.targetId;e=new pu(l,a)}}return e}function fm(n,t){let e;if(t instanceof Un)e={update:ka(n,t.key,t.value)};else if(t instanceof fu)e={delete:Qs(n,t.key)};else if(t instanceof Pe)e={update:ka(n,t.key,t.data),updateMask:vm(t.fieldMask)};else{if(!(t instanceof Xf))return L(16599,{dt:t.type});e={verify:Qs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof kn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:lm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function mm(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Lt(s.updateTime):Lt(o);return a.isEqual(F.min())&&(a=Lt(o)),new Qf(a,s.transformResults||[])})(e,t)))):[]}function pm(n,t){return{documents:[Eu(n,t.path)]}}function gm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Eu(n,s);const o=(function(d){if(d.length!==0)return vu(Dt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(v){return{field:Me(v.field),direction:Em(v.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ks(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function _m(n){let t=hm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(E){const v=Iu(E);return v instanceof Dt&&Qc(v)?v.getFilters():[v]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((v=>(function(N){return new Rr(Le(N.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(v)))})(e.orderBy));let l=null;e.limit&&(l=(function(E){let v;return v=typeof E=="object"?E.value:E,Lr(v)?null:v})(e.limit));let h=null;e.startAt&&(h=(function(E){const v=!!E.before,C=E.values||[];return new Ar(C,v)})(e.startAt));let d=null;return e.endAt&&(d=(function(E){const v=!E.before,C=E.values||[];return new Ar(C,v)})(e.endAt)),xf(t,s,a,o,l,"F",h,d)}function ym(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Iu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Le(e.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Le(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Le(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Le(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ot.create(Le(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Dt.create(e.compositeFilter.filters.map((r=>Iu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Em(n){return om[n]}function Tm(n){return am[n]}function Im(n){return cm[n]}function Me(n){return{fieldPath:n.canonicalString()}}function Le(n){return mt.fromServerFormat(n.fieldPath)}function vu(n){return n instanceof ot?(function(e){if(e.op==="=="){if(Ta(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NAN"}};if(Ea(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ta(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NOT_NAN"}};if(Ea(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Me(e.field),op:Tm(e.op),value:e.value}}})(n):n instanceof Dt?(function(e){const r=e.getFilters().map((s=>vu(s)));return r.length===1?r[0]:{compositeFilter:{op:Im(e.op),filters:r}}})(n):L(54877,{filter:n})}function vm(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Au(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Zt{constructor(t,e,r,s,o=F.min(),a=F.min(),l=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class wm{constructor(t){this.yt=t}}function Am(n){const t=_m({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
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
 */class Rm{constructor(){this.Sn=new Sm}addToCollectionParentIndex(t,e){return this.Sn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(oe.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(oe.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Sm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(X.comparator)).toArray()}}/**
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
 */const xa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ru=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Ru,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class He{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new He(0)}static ar(){return new He(-1)}}/**
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
 */const Oa="LruGarbageCollector",bm=1048576;function Ma([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class Cm{constructor(t){this.Pr=t,this.buffer=new ut(Ma),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ma(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Pm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){V(Oa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ye(e)?V(Oa,"Ignoring IndexedDB error during garbage collection: ",e):await Qe(e)}await this.Ar(3e5)}))}}class Vm{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Mr.ce);const r=new Cm(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(xa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xa):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s)))).next((E=>(r=E,l=Date.now(),this.removeTargets(t,r,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((E=>(d=Date.now(),xe()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E}))))}}function Dm(n,t){return new Vm(n,t)}/**
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
 */class Nm{constructor(){this.changes=new Ce((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class km{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class xm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Sn(r.mutation,s,Pt.empty(),tt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,z()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=z()){const s=Te();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=Tn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Te();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,z())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=Gt();const a=Rn(),l=(function(){return Rn()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Pe)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Sn(m.mutation,d,m.mutation.getFieldMask(),tt.now())):a.set(d.key,Pt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>l.set(d,new km(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=Rn();let s=new et(((a,l)=>a-l)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Pt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const E=(s.get(l.batchId)||z()).add(h);s=s.insert(l.batchId,E)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,E=iu();m.forEach((v=>{if(!o.has(v)){const C=hu(e.get(v),r.get(v));C!==null&&E.set(v,C),o=o.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return b.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return Of(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):tu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(Te());let l=Pn,h=o;return a.next((d=>b.forEach(d,((m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next((v=>{h=h.insert(m,v)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,z()))).next((m=>({batchId:l,changes:su(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=Tn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Tn();return this.indexManager.getCollectionParents(t,o).next((l=>b.forEach(l,(h=>{const d=(function(E,v){return new Fn(v,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((E,v)=>{a=a.insert(E,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))}));let l=Tn();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Sn(m.mutation,d,Pt.empty(),tt.now()),Br(e,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class Om{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return b.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}})(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:Am(s.bundledQuery),readTime:Lt(s.readTime)}})(e)),b.resolve()}}/**
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
 */class Mm{constructor(){this.overlays=new et(O.comparator),this.Lr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Te();return b.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.bt(t,e,o)})),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=Te(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new et(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Te(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Te(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return b.resolve(l)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tm(e,r));let o=this.Lr.get(e);o===void 0&&(o=z(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class Lm{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class yi{constructor(){this.kr=new ut(ht.Kr),this.qr=new ut(ht.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ht(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ht(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new O(new X([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new X([])),r=new ht(e,t),s=new ht(e,t+1);let o=z();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ht(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return O.comparator(t.key,e.key)||j(t.Hr,e.Hr)}static Ur(t,e){return j(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class Fm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new ut(ht.Kr)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ht(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ui:this.Yn-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(j);return e.forEach((s=>{const o=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),b.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ht(new O(o),0);let l=new ut(j);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Hr)),!0)}),a),b.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Y(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return b.forEach(e.mutations,(s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new ht(e,0),s=this.Jr.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Um{constructor(t){this.ti=t,this.docs=(function(){return new et(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Et.newInvalidDocument(s))})),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Gt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||hf(lf(m),r)<=0||(s.has(m.key)||Br(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ni(t,e){return b.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Bm(this)}getSize(t){return b.resolve(this.size)}}class Bm extends Nm{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),b.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class qm{constructor(t){this.persistence=t,this.ri=new Ce((e=>di(e)),fi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ii=0,this.si=new yi,this.targetCount=0,this.oi=He._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),b.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new He(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.lr(e),b.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),b.waitFor(o).next((()=>s))}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.si.containsKey(e))}}/**
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
 */class Su{constructor(t,e){this._i={},this.overlays={},this.ai=new Mr(0),this.ui=!1,this.ui=!0,this.ci=new Lm,this.referenceDelegate=t(this),this.li=new qm(this),this.indexManager=new Rm,this.remoteDocumentCache=(function(s){return new Um(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new wm(e),this.Pi=new Om(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Fm(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new $m(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return b.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class $m extends ff{constructor(t){super(),this.currentSequenceNumber=t}}class Ei{constructor(t){this.persistence=t,this.Ri=new yi,this.Ai=null}static Vi(t){return new Ei(t)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.di,(r=>{const s=O.fromPath(r);return this.mi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Cr{constructor(t,e){this.persistence=t,this.fi=new Ce((r=>gf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Dm(this,e)}static Vi(t,e){return new Cr(t,e)}Ti(){}Ii(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return b.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((o=>o?b.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),b.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=fr(t.data.value)),e}wr(t,e,r){return b.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ti{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ti(t,e.fromCache,r,s)}}/**
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
 */class jm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class zm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Nh()?8:mf(Ph())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new jm;return this.ys(t,e,a).next((l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)}))})).next((()=>o.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(xe()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(xe()<=K.DEBUG&&V("QueryEngine","Query:",Oe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xe()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):b.resolve())}gs(t,e){if(Aa(e))return b.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Hs(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=z(...o);return this.fs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,l);return this.Ss(e,d,a,h.readTime)?this.gs(t,Hs(e,null,"F")):this.Ds(t,d,e,h)}))))})))))}ps(t,e,r,s){return Aa(e)||s.isEqual(F.min())?b.resolve(null):this.fs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?b.resolve(null):(xe()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oe(e)),this.Ds(t,a,e,uf(s,Pn)).next((l=>l)))}))}bs(t,e){let r=new ut(nu(t));return e.forEach(((s,o)=>{Br(t,o)&&(r=r.add(o))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return xe()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Oe(e)),this.fs.getDocumentsMatchingQuery(t,e,oe.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Ii="LocalStore",Gm=3e8;class Hm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new et(j),this.Fs=new Ce((o=>di(o)),fi),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Km(n,t,e,r){return new Hm(n,t,e,r)}async function bu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Wm(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,m){const E=d.batch,v=E.keys();let C=b.resolve();return v.forEach((N=>{C=C.next((()=>m.getEntry(h,N))).next((x=>{const k=d.docVersions.get(N);Y(k!==null,48541),x.version.compareTo(k)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))}))})),C.next((()=>l.mutationQueue.removeMutationBatch(h,E)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Cu(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Qm(n,t){const e=B(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const l=[];t.targetChanges.forEach(((m,E)=>{const v=s.get(E);if(!v)return;l.push(e.li.removeMatchingKeys(o,m.removedDocuments,E).next((()=>e.li.addMatchingKeys(o,m.addedDocuments,E))));let C=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?C=C.withResumeToken(pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(E,C),(function(x,k,W){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Gm?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(v,C,m)&&l.push(e.li.updateTargetData(o,C))}));let h=Gt(),d=z();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(Ym(o,a,t.documentUpdates).next((m=>{h=m.Bs,d=m.Ls}))),!r.isEqual(F.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next((E=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return b.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.vs=s,o)))}function Ym(n,t,e){let r=z(),s=z();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Gt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):V(Ii,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function Jm(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=ui),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Xm(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((o=>o?(s=o,b.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new Zt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}async function Js(n,t,e){const r=B(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ye(a))throw a;V(Ii,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function La(n,t,e){const r=B(n);let s=F.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const E=B(h),v=E.Fs.get(m);return v!==void 0?b.resolve(E.vs.get(v)):E.li.getTargetData(d,m)})(r,a,Mt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:z()))).next((l=>(Zm(r,Lf(t),l),{documents:l,ks:o})))))}function Zm(n,t,e){let r=n.Ms.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Ms.set(t,r)}class Fa{constructor(){this.activeTargetIds=jf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tp{constructor(){this.vo=new Fa,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Fa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ep{Mo(t){}shutdown(){}}/**
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
 */const Ua="ConnectivityMonitor";class Ba{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Ua,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){V(Ua,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lr=null;function Xs(){return lr===null?lr=(function(){return 268435456+Math.round(2147483648*Math.random())})():lr++,"0x"+lr.toString(16)}/**
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
 */const Cs="RestConnection",np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class rp{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===vr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Xs(),l=this.Qo(t,e.toUriEncodedString());V(Cs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(l),m=si(d);return this.zo(t,l,h,r,m).then((E=>(V(Cs,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw we(Cs,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",r),E}))}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+We})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const r=np[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class sp{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const _t="WebChannelConnection",yn=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Fe extends rp{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Fe.c_){const t=Dc();yn(t,Vc.STAT_EVENT,(e=>{e.stat===Us.PROXY?V(_t,"STAT_EVENT: detected buffering proxy"):e.stat===Us.NOPROXY&&V(_t,"STAT_EVENT: detected no buffering proxy")})),Fe.c_=!0}}zo(t,e,r,s,o){const a=Xs();return new Promise(((l,h)=>{const d=new Cc;d.setWithCredentials(!0),d.listenOnce(Pc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case dr.NO_ERROR:const E=d.getResponseJson();V(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case dr.TIMEOUT:V(_t,`RPC '${t}' ${a} timed out`),h(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:const v=d.getStatus();if(V(_t,`RPC '${t}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const x=(function(W){const G=W.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN})(N.status);h(new D(x,N.message))}else h(new D(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new D(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(_t,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);V(_t,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=Xs(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const d=o.join("");V(_t,`Creating RPC '${t}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);this.I_(m);let E=!1,v=!1;const C=new sp({Ho:N=>{v?V(_t,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(E||(V(_t,`Opening RPC '${t}' stream ${s} transport.`),m.open(),E=!0),V(_t,`RPC '${t}' stream ${s} sending:`,N),m.send(N))},Jo:()=>m.close()});return yn(m,En.EventType.OPEN,(()=>{v||(V(_t,`RPC '${t}' stream ${s} transport opened.`),C.i_())})),yn(m,En.EventType.CLOSE,(()=>{v||(v=!0,V(_t,`RPC '${t}' stream ${s} transport closed`),C.o_(),this.E_(m))})),yn(m,En.EventType.ERROR,(N=>{v||(v=!0,we(_t,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.o_(new D(S.UNAVAILABLE,"The operation could not be completed")))})),yn(m,En.EventType.MESSAGE,(N=>{var x;if(!v){const k=N.data[0];Y(!!k,16349);const W=k,G=(W==null?void 0:W.error)||((x=W[0])==null?void 0:x.error);if(G){V(_t,`RPC '${t}' stream ${s} received error:`,G);const U=G.status;let M=(function(T){const p=it[T];if(p!==void 0)return mu(p)})(U),q=G.message;U==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&we(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=S.INTERNAL,q="Unknown error status: "+U+" with message "+G.message),v=!0,C.o_(new D(M,q)),m.close()}else V(_t,`RPC '${t}' stream ${s} received:`,k),C.__(k)}})),Fe.u_(),setTimeout((()=>{C.s_()}),0),C}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Nc()}}/**
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
 */function ip(n){return new Fe(n)}function Ps(){return typeof document<"u"?document:null}/**
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
 */function zr(n){return new um(n,!0)}/**
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
 */Fe.c_=!1;class Pu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const qa="PersistentStream";class Vu{constructor(t,e,r,s,o,a,l,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Pu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(zt(e.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(qa,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(V(qa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class op extends Vu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=dm(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Lt(a.readTime):F.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Ys(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=zs(h)?{documents:pm(o,h)}:{query:gm(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=_u(o,a.resumeToken);const d=Ks(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=br(o,a.snapshotVersion.toTimestamp());const d=Ks(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=ym(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Ys(this.serializer),e.removeTarget=t,this.K_(e)}}class ap extends Vu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=mm(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ys(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>fm(this.serializer,r)))};this.K_(e)}}/**
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
 */class cp{}class up extends cp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Ws(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())}))}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(t,Ws(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function lp(n,t,e,r){return new up(n,t,e,r)}class hp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zt(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ae="RemoteStore";class dp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{Ve(this)&&(V(Ae,"Restarting streams for network reachability change."),await(async function(h){const d=B(h);d.Ea.add(4),await qn(d),d.Va.set("Unknown"),d.Ea.delete(4),await Gr(d)})(this))}))})),this.Va=new hp(r,s)}}async function Gr(n){if(Ve(n))for(const t of n.Ra)await t(!0)}async function qn(n){for(const t of n.Ra)await t(!1)}function Du(n,t){const e=B(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ri(e)?Ai(e):Je(e).O_()&&wi(e,t))}function vi(n,t){const e=B(n),r=Je(e);e.Ia.delete(t),r.O_()&&Nu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Ve(e)&&e.Va.set("Unknown"))}function wi(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Je(n).Z_(t)}function Nu(n,t){n.da.$e(t),Je(n).X_(t)}function Ai(n){n.da=new im({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Je(n).start(),n.Va.ua()}function Ri(n){return Ve(n)&&!Je(n).x_()&&n.Ia.size>0}function Ve(n){return B(n).Ea.size===0}function ku(n){n.da=void 0}async function fp(n){n.Va.set("Online")}async function mp(n){n.Ia.forEach(((t,e)=>{wi(n,t)}))}async function pp(n,t){ku(n),Ri(n)?(n.Va.ha(t),Ai(n)):n.Va.set("Unknown")}async function gp(n,t,e){if(n.Va.set("Online"),t instanceof gu&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))})(n,t)}catch(r){V(Ae,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Pr(n,r)}else if(t instanceof gr?n.da.Xe(t):t instanceof pu?n.da.st(t):n.da.tt(t),!e.isEqual(F.min()))try{const r=await Cu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Nu(o,h);const E=new Zt(m.target,h,d,m.sequenceNumber);wi(o,E)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){V(Ae,"Failed to raise snapshot:",r),await Pr(n,r)}}async function Pr(n,t,e){if(!Ye(t))throw t;n.Ea.add(1),await qn(n),n.Va.set("Offline"),e||(e=()=>Cu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(Ae,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Gr(n)}))}function xu(n,t){return t().catch((e=>Pr(n,e,t)))}async function Hr(n){const t=B(n),e=le(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ui;for(;_p(t);)try{const s=await Jm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,yp(t,s)}catch(s){await Pr(t,s)}Ou(t)&&Mu(t)}function _p(n){return Ve(n)&&n.Ta.length<10}function yp(n,t){n.Ta.push(t);const e=le(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Ou(n){return Ve(n)&&!le(n).x_()&&n.Ta.length>0}function Mu(n){le(n).start()}async function Ep(n){le(n).ra()}async function Tp(n){const t=le(n);for(const e of n.Ta)t.ea(e.mutations)}async function Ip(n,t,e){const r=n.Ta.shift(),s=pi.from(r,t,e);await xu(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hr(n)}async function vp(n,t){t&&le(n).Y_&&await(async function(r,s){if((function(a){return nm(a)&&a!==S.ABORTED})(s.code)){const o=r.Ta.shift();le(r).B_(),await xu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Hr(r)}})(n,t),Ou(n)&&Mu(n)}async function $a(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),V(Ae,"RemoteStore received new credentials");const r=Ve(e);e.Ea.add(3),await qn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Gr(e)}async function wp(n,t){const e=B(n);t?(e.Ea.delete(2),await Gr(e)):t||(e.Ea.add(2),await qn(e),e.Va.set("Unknown"))}function Je(n){return n.ma||(n.ma=(function(e,r,s){const o=B(e);return o.sa(),new op(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:fp.bind(null,n),Yo:mp.bind(null,n),t_:pp.bind(null,n),J_:gp.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),Ri(n)?Ai(n):n.Va.set("Unknown")):(await n.ma.stop(),ku(n))}))),n.ma}function le(n){return n.fa||(n.fa=(function(e,r,s){const o=B(e);return o.sa(),new ap(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ep.bind(null,n),t_:vp.bind(null,n),ta:Tp.bind(null,n),na:Ip.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Hr(n)):(await n.fa.stop(),n.Ta.length>0&&(V(Ae,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Si{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Si(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bi(n,t){if(zt("AsyncQueue",`${t}: ${n}`),Ye(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ue{static emptySet(t){return new Ue(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Tn(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ue)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ue;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ja{constructor(){this.ga=new et(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ke{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Ke(t,e,Ue.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ur(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ap{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class Rp{constructor(){this.queries=za(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=za(),o.forEach(((a,l)=>{for(const h of l.ba)h.onError(r)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function za(){return new Ce((n=>eu(n)),Ur)}async function Sp(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new Ap,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=bi(a,`Initialization of query '${Oe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Ci(e)}async function bp(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Cp(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&Ci(e)}function Pp(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function Ci(n){n.Ca.forEach((t=>{t.next()}))}var Zs,Ga;(Ga=Zs||(Zs={})).Ma="default",Ga.Cache="cache";class Vp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Zs.Cache}}/**
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
 */class Lu{constructor(t){this.key=t}}class Fu{constructor(t){this.key=t}}class Dp{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=z(),this.mutatedKeys=z(),this.eu=nu(t),this.tu=new Ue(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new ja,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,E)=>{const v=s.get(m),C=Br(this.query,E)?E:null,N=!!v&&this.mutatedKeys.has(v.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let k=!1;v&&C?v.data.isEqual(C.data)?N!==x&&(r.track({type:3,doc:C}),k=!0):this.su(v,C)||(r.track({type:2,doc:C}),k=!0,(h&&this.eu(C,h)>0||d&&this.eu(C,d)<0)&&(l=!0)):!v&&C?(r.track({type:0,doc:C}),k=!0):v&&!C&&(r.track({type:1,doc:v}),k=!0,(h||d)&&(l=!0)),k&&(C?(a=a.add(C),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,E)=>(function(C,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:k})}};return x(C)-x(N)})(m.type,E.type)||this.eu(m.doc,E.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new Ke(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ja,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=z(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new Fu(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new Lu(r))})),e}cu(t){this.Za=t.ks,this.Ya=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ke.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Pi="SyncEngine";class Np{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class kp{constructor(t){this.key=t,this.hu=!1}}class xp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ce((l=>eu(l)),Ur),this.Iu=new Map,this.Eu=new Set,this.Ru=new et(O.comparator),this.Au=new Map,this.Vu=new yi,this.du={},this.mu=new Map,this.fu=He.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Op(n,t,e=!0){const r=zu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Uu(r,t,e,!0),s}async function Mp(n,t){const e=zu(n);await Uu(e,t,!0,!1)}async function Uu(n,t,e,r){const s=await Xm(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Lp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Du(n.remoteStore,s),l}async function Lp(n,t,e,r,s){n.pu=(E,v,C)=>(async function(x,k,W,G){let U=k.view.ru(W);U.Ss&&(U=await La(x.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,U))));const M=G&&G.targetChanges.get(k.targetId),q=G&&G.targetMismatches.get(k.targetId)!=null,Q=k.view.applyChanges(U,x.isPrimaryClient,M,q);return Ka(x,k.targetId,Q.au),Q.snapshot})(n,E,v,C);const o=await La(n.localStore,t,!0),a=new Dp(t,o.ks),l=a.ru(o.documents),h=Bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Ka(n,e,d.au);const m=new Np(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Fp(n,t,e){const r=B(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Ur(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Js(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&vi(r.remoteStore,s.targetId),ti(r,s.targetId)})).catch(Qe)):(ti(r,s.targetId),await Js(r.localStore,s.targetId,!0))}async function Up(n,t){const e=B(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),vi(e.remoteStore,r.targetId))}async function Bp(n,t,e){const r=Kp(n);try{const s=await(function(a,l){const h=B(a),d=tt.now(),m=l.reduce(((C,N)=>C.add(N.key)),z());let E,v;return h.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let N=Gt(),x=z();return h.xs.getEntries(C,m).next((k=>{N=k,N.forEach(((W,G)=>{G.isValidDocument()||(x=x.add(W))}))})).next((()=>h.localDocuments.getOverlayedDocuments(C,N))).next((k=>{E=k;const W=[];for(const G of l){const U=Jf(G,E.get(G.key).overlayedDocument);U!=null&&W.push(new Pe(G.key,U,Hc(U.value.mapValue),Bt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,W,l)})).next((k=>{v=k;const W=k.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(C,k.batchId,W)}))})).then((()=>({batchId:v.batchId,changes:su(E)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.du[a.currentUser.toKey()];d||(d=new et(j)),d=d.insert(l,h),a.du[a.currentUser.toKey()]=d})(r,s.batchId,e),await $n(r,s.changes),await Hr(r.remoteStore)}catch(s){const o=bi(s,"Failed to persist write");e.reject(o)}}async function Bu(n,t){const e=B(n);try{const r=await Qm(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))})),await $n(e,r,t)}catch(r){await Qe(r)}}function Ha(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach(((m,E)=>{for(const v of E.ba)v.va(l)&&(d=!0)})),d&&Ci(h)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qp(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new et(O.comparator);a=a.insert(o,Et.newNoDocument(o,F.min()));const l=z().add(o),h=new jr(F.min(),new Map,new et(j),a,l);await Bu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),Vi(r)}else await Js(r.localStore,t,!1).then((()=>ti(r,t,e))).catch(Qe)}async function $p(n,t){const e=B(n),r=t.batch.batchId;try{const s=await Wm(e.localStore,t);$u(e,r,null),qu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await $n(e,s)}catch(s){await Qe(s)}}async function jp(n,t,e){const r=B(n);try{const s=await(function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next((E=>(Y(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);$u(r,t,e),qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await $n(r,s)}catch(s){await Qe(s)}}function qu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function $u(n,t,e){const r=B(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function ti(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||ju(n,r)}))}function ju(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(vi(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),Vi(n))}function Ka(n,t,e){for(const r of e)r instanceof Lu?(n.Vu.addReference(r.key,t),zp(n,r)):r instanceof Fu?(V(Pi,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||ju(n,r.key)):L(19791,{wu:r})}function zp(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(V(Pi,"New document in limbo: "+e),n.Eu.add(r),Vi(n))}function Vi(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(X.fromString(t)),r=n.fu.next();n.Au.set(r,new kp(e)),n.Ru=n.Ru.insert(e,r),Du(n.remoteStore,new Zt(Mt(Zc(e.path)),r,"TargetPurposeLimboResolution",Mr.ce))}}async function $n(n,t,e){const r=B(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Ti.Es(h.targetId,d);o.push(E)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>b.forEach(d,(v=>b.forEach(v.Ts,(C=>m.persistence.referenceDelegate.addReference(E,v.targetId,C))).next((()=>b.forEach(v.Is,(C=>m.persistence.referenceDelegate.removeReference(E,v.targetId,C)))))))))}catch(E){if(!Ye(E))throw E;V(Ii,"Failed to update sequence numbers: "+E)}for(const E of d){const v=E.targetId;if(!E.fromCache){const C=m.vs.get(v),N=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(N);m.vs=m.vs.insert(v,x)}}})(r.localStore,o))}async function Gp(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){V(Pi,"User change. New user:",t.toKey());const r=await bu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new D(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await $n(e,r.Ns)}}function Hp(n,t){const e=B(n),r=e.Au.get(t);if(r&&r.hu)return z().add(r.key);{let s=z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function zu(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qp.bind(null,t),t.Pu.J_=Cp.bind(null,t.eventManager),t.Pu.yu=Pp.bind(null,t.eventManager),t}function Kp(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$p.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jp.bind(null,t),t}class Vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Km(this.persistence,new zm,t.initialUser,this.serializer)}Cu(t){return new Su(Ei.Vi,this.serializer)}Du(t){return new tp}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vr.provider={build:()=>new Vr};class Wp extends Vr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof Cr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Su((r=>Cr.Vi(r,e)),this.serializer)}}class ei{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ha(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gp.bind(null,this.syncEngine),await wp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Rp})()}createDatastore(t){const e=zr(t.databaseInfo.databaseId),r=ip(t.databaseInfo);return lp(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new dp(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ha(this.syncEngine,e,0)),(function(){return Ba.v()?new Ba:new ep})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,m){const E=new xp(s,o,a,l,h,d);return m&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=B(s);V(Ae,"RemoteStore shutting down."),o.Ea.add(5),await qn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ei.provider={build:()=>new ei};/**
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
 */class Qp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):zt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const he="FirestoreClient";class Yp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=ci.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{V(he,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(V(he,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=bi(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Vs(n,t){n.asyncQueue.verifyOperationInProgress(),V(he,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await bu(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Wa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Jp(n);V(he,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>$a(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>$a(t.remoteStore,s))),n._onlineComponents=t}async function Jp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(he,"Using user provided OfflineComponentProvider");try{await Vs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;we("Error using user provided cache. Falling back to memory cache: "+e),await Vs(n,new Vr)}}else V(he,"Using default OfflineComponentProvider"),await Vs(n,new Wp(void 0));return n._offlineComponents}async function Gu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(he,"Using user provided OnlineComponentProvider"),await Wa(n,n._uninitializedComponentsProvider._online)):(V(he,"Using default OnlineComponentProvider"),await Wa(n,new ei))),n._onlineComponents}function Xp(n){return Gu(n).then((t=>t.syncEngine))}async function Zp(n){const t=await Gu(n),e=t.eventManager;return e.onListen=Op.bind(null,t.syncEngine),e.onUnlisten=Fp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Up.bind(null,t.syncEngine),e}function tg(n,t,e={}){const r=new re;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const m=new Qp({next:v=>{m.Nu(),a.enqueueAndForget((()=>bp(o,E))),v.fromCache&&h.source==="server"?d.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),E=new Vp(l,m,{includeMetadataChanges:!0,Ka:!0});return Sp(o,E)})(await Zp(n),n.asyncQueue,t,e,r))),r.promise}function eg(n,t){const e=new re;return n.asyncQueue.enqueueAndForget((async()=>Bp(await Xp(n),t,e))),e.promise}/**
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
 */function Hu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ng="ComponentProvider",Qa=new Map;function rg(n,t,e,r,s){return new Ef(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hu(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Ku="firestore.googleapis.com",Ya=!0;class Ja{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ku,this.ssl=Ya}else this.host=t.host,this.ssl=t.ssl??Ya;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ru;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bm)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Jd;switch(r.type){case"firstParty":return new ef(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Qa.get(e);r&&(V(ng,"Removing Datastore"),Qa.delete(e),r.terminate())})(this),Promise.resolve()}}function sg(n,t,e,r={}){var d;n=Tr(n,Kr);const s=si(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(Ah(`https://${l}`),Ch("Firestore",!0)),o.host!==Ku&&o.host!==l&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!bn(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=yt.MOCK_USER;else{m=Rh(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new yt(v)}n._authCredentials=new Xd(new xc(m,E))}}/**
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
 */class Xe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xe(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Ln(e,dt._jsonSchema))return new dt(t,r||null,new O(X.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:at("string",dt._jsonSchemaVersion),referencePath:at("string")};class se extends Xe{constructor(t,e,r){super(t,e,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new O(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function Xa(n,t,...e){if(n=qt(n),Oc("collection","path",t),n instanceof Kr){const r=X.fromString(t,...e);return la(r),new se(n,null,r)}{if(!(n instanceof dt||n instanceof se))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return la(r),new se(n.firestore,null,r)}}function ig(n,t,...e){if(n=qt(n),arguments.length===1&&(t=ci.newId()),Oc("doc","path",t),n instanceof Kr){const r=X.fromString(t,...e);return ua(r),new dt(n,null,new O(r))}{if(!(n instanceof dt||n instanceof se))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ua(r),new dt(n.firestore,n instanceof se?n.converter:null,new O(r))}}/**
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
 */const Za="AsyncQueue";class tc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pu(this,"async_queue_retry"),this._c=()=>{const r=Ps();r&&V(Za,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new re;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Ye(t))throw t;V(Za,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,zt("INTERNAL UNHANDLED ERROR: ",ec(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Si.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:ec(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ec(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Di extends Kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new tc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tc(t),this._firestoreClient=void 0,await t}}}function og(n,t){const e=typeof n=="object"?n:Ac(),r=typeof n=="string"?n:vr,s=Mn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=vh("firestore");o&&sg(s,...o)}return s}function Wu(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ag(n),n._firestoreClient}function ag(n){var r,s,o,a;const t=n._freezeSettings(),e=rg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Yp(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class Ct{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ct(pt.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ct(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ln(t,Ct._jsonSchema))return Ct.fromBase64String(t.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:at("string",Ct._jsonSchemaVersion),bytes:at("string")};/**
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
 */class Qu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ni{constructor(t){this._methodName=t}}/**
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
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(Ln(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:at("string",Ft._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
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
 */class Vt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ln(t,Vt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Vt(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vt._jsonSchemaVersion="firestore/vectorValue/1.0",Vt._jsonSchema={type:at("string",Vt._jsonSchemaVersion),vectorValues:at("object")};/**
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
 */const cg=/^__.*__$/;class ug{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Un(t,this.data,e,this.fieldTransforms)}}function Yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class ki{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new ki({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Dr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Yu(this.dataSource)&&cg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class lg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||zr(t)}createContext(t,e,r,s=!1){return new ki({dataSource:t,methodName:e,targetDoc:r,path:mt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ju(n){const t=n._freezeSettings(),e=zr(n._databaseId);return new lg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function hg(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);tl("Data must be an object, but it was:",a,r);const l=Xu(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const v=Wr(t,E,e);if(!a.contains(v))throw new D(S.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);pg(m,v)||m.push(v)}h=new Pt(m),d=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,d=a.fieldTransforms;return new ug(new bt(l),h,d)}class xi extends Ni{_toFieldTransform(t){return new Kf(t.path,new kn)}isEqual(t){return t instanceof xi}}function dg(n,t,e,r=!1){return Oi(e,n.createContext(r?4:3,t))}function Oi(n,t){if(Zu(n=qt(n)))return tl("Unsupported field value:",t,n),Xu(n,t);if(n instanceof Ni)return(function(r,s){if(!Yu(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=Oi(l,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=tt.fromDate(r);return{timestampValue:br(s.serializer,o)}}if(r instanceof tt){const o=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:br(s.serializer,o)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:_u(s.serializer,r._byteString)};if(r instanceof dt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:_i(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vt)return(function(a,l){const h=a instanceof Vt?a.toArray():a;return{mapValue:{fields:{[zc]:{stringValue:Gc},[wr]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw l.createError("VectorValues must only contain numeric values.");return mi(l.serializer,m)}))}}}}}})(r,s);if(Au(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Or(r)}`)})(n,t)}function Xu(n,t){const e={};return Fc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(n,((r,s)=>{const o=Oi(s,t.childContextForField(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Zu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Ft||n instanceof Ct||n instanceof dt||n instanceof Ni||n instanceof Vt||Au(n))}function tl(n,t,e){if(!Zu(e)||!Mc(e)){const r=Or(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Wr(n,t,e){if((t=qt(t))instanceof Qu)return t._internalPath;if(typeof t=="string")return mg(n,t);throw Dr("Field path arguments must be of type string or ",n,!1,void 0,e)}const fg=new RegExp("[~\\*/\\[\\]]");function mg(n,t,e){if(t.search(fg)>=0)throw Dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Qu(...t.split("."))._internalPath}catch{throw Dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Dr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new D(S.INVALID_ARGUMENT,l+n+h)}function pg(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class gg{convertValue(t,e="none"){switch(ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return be(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[wr].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>st(a.doubleValue)));return new Vt(e)}convertGeoPoint(t){return new Ft(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Fr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Vn(t));default:return null}}convertTimestamp(t){const e=ae(t);return new tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);Y(wu(r),9688,{name:t});const s=new Dn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||zt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class _g extends gg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ct(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function yg(){return new xi("serverTimestamp")}const nc="@firebase/firestore",rc="4.11.0";/**
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
 */class el{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Eg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Wr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Eg extends el{data(){return super.data()}}/**
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
 */function Tg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mi{}class Ig extends Mi{}function vg(n,t,...e){let r=[];t instanceof Mi&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof Li)).length,l=o.filter((h=>h instanceof Qr)).length;if(a>1||a>0&&l>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Qr extends Ig{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Qr(t,e,r)}_apply(t){const e=this._parse(t);return nl(t._query,e),new Xe(t.firestore,t.converter,Gs(t._query,e))}_parse(t){const e=Ju(t.firestore);return(function(o,a,l,h,d,m,E){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ic(E,m);const N=[];for(const x of E)N.push(sc(h,o,x));v={arrayValue:{values:N}}}else v=sc(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ic(E,m),v=dg(l,a,E,m==="in"||m==="not-in");return ot.create(d,m,v)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function wg(n,t,e){const r=t,s=Wr("where",n);return Qr._create(s,r,e)}class Li extends Mi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Li(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)nl(a,h),a=Gs(a,h)})(t._query,e),new Xe(t.firestore,t.converter,Gs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sc(n,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tu(t)&&e.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!O.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ya(n,new O(r))}if(e instanceof dt)return ya(n,e._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Or(e)}.`)}function ic(n,t){if(!Array.isArray(n)||n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function nl(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Ag(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class hr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Be extends el{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Wr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Be._jsonSchemaVersion="firestore/documentSnapshot/1.0",Be._jsonSchema={type:at("string",Be._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class _r extends Be{data(t={}){return super.data(t)}}class qe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new hr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new _r(this._firestore,this._userDataWriter,r.key,r,new hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new _r(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new _r(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Rg(l.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=qe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ci.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Rg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */qe._jsonSchemaVersion="firestore/querySnapshot/1.0",qe._jsonSchema={type:at("string",qe._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};function Sg(n){n=Tr(n,Xe);const t=Tr(n.firestore,Di),e=Wu(t),r=new _g(t);return Tg(n._query),tg(e,n._query).then((s=>new qe(t,r,n,s)))}function bg(n,t){const e=Tr(n.firestore,Di),r=ig(n),s=Ag(n.converter,t),o=Ju(n.firestore);return Cg(e,[hg(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then((()=>r))}function Cg(n,t){const e=Wu(n);return eg(e,t)}(function(t,e=!0){Yd(Ud),ie(new $t("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Di(new Zd(r.getProvider("auth-internal")),new nf(a,r.getProvider("app-check-internal")),Tf(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ot(nc,rc,t),Ot(nc,rc,"esm2020")})();var Pg="firebase",Vg="12.9.0";/**
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
 */Ot(Pg,Vg,"app");const rl="@firebase/installations",Fi="0.6.19";/**
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
 */const sl=1e4,il=`w:${Fi}`,ol="FIS_v2",Dg="https://firebaseinstallations.googleapis.com/v1",Ng=3600*1e3,kg="installations",xg="Installations";/**
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
 */const Og={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Re=new xr(kg,xg,Og);function al(n){return n instanceof de&&n.code.includes("request-failed")}/**
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
 */function cl({projectId:n}){return`${Dg}/projects/${n}/installations`}function ul(n){return{token:n.token,requestStatus:2,expiresIn:Lg(n.expiresIn),creationTime:Date.now()}}async function ll(n,t){const r=(await t.json()).error;return Re.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Mg(n,{refreshToken:t}){const e=hl(n);return e.append("Authorization",Fg(t)),e}async function dl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Lg(n){return Number(n.replace("s","000"))}function Fg(n){return`${ol} ${n}`}/**
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
 */async function Ug({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=cl(n),s=hl(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:ol,appId:n.appId,sdkVersion:il},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await dl(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:ul(d.authToken)}}else throw await ll("Create Installation",h)}/**
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
 */function fl(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Bg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qg=/^[cdef][\w-]{21}$/,ni="";function $g(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=jg(n);return qg.test(e)?e:ni}catch{return ni}}function jg(n){return Bg(n).substr(0,22)}/**
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
 */function Yr(n){return`${n.appName}!${n.appId}`}/**
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
 */const ml=new Map;function pl(n,t){const e=Yr(n);gl(e,t),zg(e,t)}function gl(n,t){const e=ml.get(n);if(e)for(const r of e)r(t)}function zg(n,t){const e=Gg();e&&e.postMessage({key:n,fid:t}),Hg()}let Ie=null;function Gg(){return!Ie&&"BroadcastChannel"in self&&(Ie=new BroadcastChannel("[Firebase] FID Change"),Ie.onmessage=n=>{gl(n.data.key,n.data.fid)}),Ie}function Hg(){ml.size===0&&Ie&&(Ie.close(),Ie=null)}/**
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
 */const Kg="firebase-installations-database",Wg=1,Se="firebase-installations-store";let Ds=null;function Ui(){return Ds||(Ds=vc(Kg,Wg,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Se)}}})),Ds}async function Nr(n,t){const e=Yr(n),s=(await Ui()).transaction(Se,"readwrite"),o=s.objectStore(Se),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&pl(n,t.fid),t}async function _l(n){const t=Yr(n),r=(await Ui()).transaction(Se,"readwrite");await r.objectStore(Se).delete(t),await r.done}async function Jr(n,t){const e=Yr(n),s=(await Ui()).transaction(Se,"readwrite"),o=s.objectStore(Se),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await s.done,l&&(!a||a.fid!==l.fid)&&pl(n,l.fid),l}/**
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
 */async function Bi(n){let t;const e=await Jr(n.appConfig,r=>{const s=Qg(r),o=Yg(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ni?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Qg(n){const t=n||{fid:$g(),registrationStatus:0};return yl(t)}function Yg(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Re.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Jg(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Xg(n)}:{installationEntry:t}}async function Jg(n,t){try{const e=await Ug(n,t);return Nr(n.appConfig,e)}catch(e){throw al(e)&&e.customData.serverCode===409?await _l(n.appConfig):await Nr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Xg(n){let t=await oc(n.appConfig);for(;t.registrationStatus===1;)await fl(100),t=await oc(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Bi(n);return r||e}return t}function oc(n){return Jr(n,t=>{if(!t)throw Re.create("installation-not-found");return yl(t)})}function yl(n){return Zg(n)?{fid:n.fid,registrationStatus:0}:n}function Zg(n){return n.registrationStatus===1&&n.registrationTime+sl<Date.now()}/**
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
 */async function t_({appConfig:n,heartbeatServiceProvider:t},e){const r=e_(n,e),s=Mg(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:il,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await dl(()=>fetch(r,l));if(h.ok){const d=await h.json();return ul(d)}else throw await ll("Generate Auth Token",h)}function e_(n,{fid:t}){return`${cl(n)}/${t}/authTokens:generate`}/**
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
 */async function qi(n,t=!1){let e;const r=await Jr(n.appConfig,o=>{if(!El(o))throw Re.create("not-registered");const a=o.authToken;if(!t&&s_(a))return o;if(a.requestStatus===1)return e=n_(n,t),o;{if(!navigator.onLine)throw Re.create("app-offline");const l=o_(o);return e=r_(n,l),l}});return e?await e:r.authToken}async function n_(n,t){let e=await ac(n.appConfig);for(;e.authToken.requestStatus===1;)await fl(100),e=await ac(n.appConfig);const r=e.authToken;return r.requestStatus===0?qi(n,t):r}function ac(n){return Jr(n,t=>{if(!El(t))throw Re.create("not-registered");const e=t.authToken;return a_(e)?{...t,authToken:{requestStatus:0}}:t})}async function r_(n,t){try{const e=await t_(n,t),r={...t,authToken:e};return await Nr(n.appConfig,r),e}catch(e){if(al(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await _l(n.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Nr(n.appConfig,r)}throw e}}function El(n){return n!==void 0&&n.registrationStatus===2}function s_(n){return n.requestStatus===2&&!i_(n)}function i_(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Ng}function o_(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function a_(n){return n.requestStatus===1&&n.requestTime+sl<Date.now()}/**
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
 */async function c_(n){const t=n,{installationEntry:e,registrationPromise:r}=await Bi(t);return r?r.catch(console.error):qi(t).catch(console.error),e.fid}/**
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
 */async function u_(n,t=!1){const e=n;return await l_(e),(await qi(e,t)).token}async function l_(n){const{registrationPromise:t}=await Bi(n);t&&await t}/**
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
 */function h_(n){if(!n||!n.options)throw Ns("App Configuration");if(!n.name)throw Ns("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ns(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ns(n){return Re.create("missing-app-config-values",{valueName:n})}/**
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
 */const Tl="installations",d_="installations-internal",f_=n=>{const t=n.getProvider("app").getImmediate(),e=h_(t),r=Mn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},m_=n=>{const t=n.getProvider("app").getImmediate(),e=Mn(t,Tl).getImmediate();return{getId:()=>c_(e),getToken:s=>u_(e,s)}};function p_(){ie(new $t(Tl,f_,"PUBLIC")),ie(new $t(d_,m_,"PRIVATE"))}p_();Ot(rl,Fi);Ot(rl,Fi,"esm2020");/**
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
 */const kr="analytics",g_="firebase_id",__="origin",y_=60*1e3,E_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$i="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new ii("@firebase/analytics");/**
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
 */const T_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new xr("analytics","Analytics",T_);/**
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
 */function I_(n){if(!n.startsWith($i)){const t=St.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(t.message),""}return n}function Il(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function v_(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function w_(n,t){const e=v_("firebase-js-sdk-policy",{createScriptURL:I_}),r=document.createElement("script"),s=`${$i}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function A_(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function R_(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Il(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(l){vt.error(l)}n("config",s,o)}async function S_(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Il(e);for(const h of a){const d=l.find(E=>E.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){vt.error(o)}}function b_(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[l,h]=a;await S_(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await R_(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){vt.error(l)}}return s}function C_(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=b_(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function P_(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes($i)&&e.src.includes(n))return e;return null}/**
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
 */const V_=30,D_=1e3;class N_{constructor(t={},e=D_){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const vl=new N_;function k_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function x_(n){var a;const{appId:t,apiKey:e}=n,r={method:"GET",headers:k_(e)},s=E_.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let l="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function O_(n,t=vl,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new F_;return setTimeout(async()=>{l.abort()},y_),wl({appId:r,apiKey:s,measurementId:o},a,l,t)}async function wl(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=vl){var l;const{appId:o,measurementId:a}=n;try{await M_(r,t)}catch(h){if(a)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await x_(n);return s.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!L_(d)){if(s.deleteThrottleMetadata(o),a)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const m=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?Jo(e,s.intervalMillis,V_):Jo(e,s.intervalMillis),E={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(o,E),vt.debug(`Calling attemptFetch again in ${m} millis`),wl(n,E,r,s)}}function M_(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function L_(n){if(!(n instanceof de)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class F_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function U_(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a={...r,send_to:o};n("event",e,a)}}async function B_(n,t,e,r){if(r&&r.global){const s={};for(const o of Object.keys(e))s[`user_properties.${o}`]=e[o];return n("set",s),Promise.resolve()}else{const s=await t;n("config",s,{update:!0,user_properties:e})}}/**
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
 */async function q_(){if(yc())try{await Ec()}catch(n){return vt.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $_(n,t,e,r,s,o,a){const l=O_(n);l.then(v=>{e[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>vt.error(v)),t.push(l);const h=q_().then(v=>{if(v)return r.getId()}),[d,m]=await Promise.all([l,h]);P_(o)||w_(o,d.measurementId),s("js",new Date);const E=(a==null?void 0:a.config)??{};return E[__]="firebase",E.update=!0,m!=null&&(E[g_]=m),s("config",d.measurementId,E),d.measurementId}/**
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
 */class j_{constructor(t){this.app=t}_delete(){return delete $e[this.app.options.appId],Promise.resolve()}}let $e={},cc=[];const uc={};let ks="dataLayer",z_="gtag",lc,ji,hc=!1;function G_(){const n=[];if(Dh()&&n.push("This is a browser extension environment."),kh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=St.create("invalid-analytics-context",{errorInfo:t});vt.warn(e.message)}}function H_(n,t,e){G_();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if($e[r]!=null)throw St.create("already-exists",{id:r});if(!hc){A_(ks);const{wrappedGtag:o,gtagCore:a}=C_($e,cc,uc,ks,z_);ji=o,lc=a,hc=!0}return $e[r]=$_(n,cc,uc,t,lc,ks,e),new j_(n)}function K_(n=Ac()){n=qt(n);const t=Mn(n,kr);return t.isInitialized()?t.getImmediate():W_(n)}function W_(n,t={}){const e=Mn(n,kr);if(e.isInitialized()){const s=e.getImmediate();if(bn(t,e.getOptions()))return s;throw St.create("already-initialized")}return e.initialize({options:t})}function Q_(n,t,e){n=qt(n),B_(ji,$e[n.app.options.appId],t,e).catch(r=>vt.error(r))}function Y_(n,t,e,r){n=qt(n),U_(ji,$e[n.app.options.appId],t,e,r).catch(s=>vt.error(s))}const dc="@firebase/analytics",fc="0.10.19";function J_(){ie(new $t(kr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return H_(r,s,e)},"PUBLIC")),ie(new $t("analytics-internal",n,"PRIVATE")),Ot(dc,fc),Ot(dc,fc,"esm2020");function n(t){try{const e=t.getProvider(kr).getImmediate();return{logEvent:(r,s,o)=>Y_(e,r,s,o),setUserProperties:(r,s)=>Q_(e,r,s)}}catch(e){throw St.create("interop-component-reg-failed",{reason:e})}}}J_();const X_={apiKey:"AIzaSyB8UQ5702asQU7SGyfGhTgfZBmLv5FjUbc",authDomain:"erc-booking.firebaseapp.com",projectId:"erc-booking",storageBucket:"erc-booking.firebasestorage.app",messagingSenderId:"69669577622",appId:"1:69669577622:web:ac786d4615a81b4507b3b7",measurementId:"G-XRHJRLPBR6"},Al=wc(X_);K_(Al);const mc=og(Al),Z_={id:"booking"},ty={class:"container"},ey={class:"booking-container"},ny=["min"],ry={class:"time-slots-grid"},sy={key:1,style:{"grid-column":"1/-1","text-align":"center",color:"red"}},iy=["disabled","title","onClick"],oy={class:"form-group"},ay={class:"form-group"},cy={class:"form-group"},uy=["disabled"],fy={__name:"PageBooking",setup(n){function t(U){const M=new Date(U),q=M.getDay();let Q=0;q===5?Q=0:q<5?Q=5-q:Q=5-q+7,M.setDate(M.getDate()+Q);const T=M.getFullYear(),p=String(M.getMonth()+1).padStart(2,"0"),_=String(M.getDate()).padStart(2,"0");return`${T}-${p}-${_}`}const e=new Date,r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,s=Xt(r),o=t(e),a=Xt(o),l=Xt(""),h=Xt([]),d=Xt(!1),m=Xt(!1),E=Xt(!1),v=Xt({name:"",phone:"",email:""});function C(){const U=[];for(let M=600;M<=1020;M+=30){const q=Math.floor(M/60),Q=M%60;U.push({time:`${String(q).padStart(2,"0")}:${String(Q).padStart(2,"0")}`,booked:!1})}return U}async function N(U){const M=vg(Xa(mc,"bookings"),wg("date","==",U)),q=await Sg(M),Q=new Set;return q.forEach(T=>Q.add(T.data().time)),Q}async function x(){const U=a.value;if(!U)return;if(new Date(U+"T00:00:00").getDay()!==5){m.value=!0,h.value=[],l.value="";return}m.value=!1,d.value=!0;const q=await N(U);h.value=C().map(Q=>({...Q,booked:q.has(Q.time)})),d.value=!1,l.value=""}function k(){l.value="",x()}function W(U){l.value=U}async function G(){if(!a.value||!l.value||!v.value.name||!v.value.phone||!v.value.email){alert("請填寫所有預約資訊並選擇時間！");return}E.value=!0;try{await bg(Xa(mc,"bookings"),{name:v.value.name,phone:v.value.phone,email:v.value.email,date:a.value,time:l.value,created_at:yg()});const U=`你好 ERC，我想預約體驗。

👤 *姓名:* ${v.value.name}
📱 *電話:* ${v.value.phone}
📧 *電郵:* ${v.value.email}
📅 *日期:* ${a.value}
⏰ *時間:* ${l.value}`;window.open(`https://wa.me/85255379080?text=${encodeURIComponent(U)}`,"_blank"),alert("資料已儲存！我們將轉至 WhatsApp 以便您發送預約詳情。"),v.value={name:"",phone:"",email:""},l.value="",x()}catch(U){console.error(U),alert("預約失敗，請檢查網絡連接。")}finally{E.value=!1}}return rh(x),(U,M)=>(gn(),_n("section",Z_,[sh(hh,{slides:["/images/logo.webp"],"hero-height":"40vh"},{default:ih(()=>[...M[4]||(M[4]=[rt("h1",null,"預約體驗",-1),rt("p",null,"選擇您方便的日期和時間，親身體驗 ERC 智能駕駛！",-1)])]),_:1}),rt("div",ty,[rt("div",ey,[M[9]||(M[9]=rt("h2",{style:{color:"var(--text-main)","margin-bottom":"20px"}},"預約 ERC 體驗館時間",-1)),M[10]||(M[10]=rt("label",{for:"booking-date"},"選擇日期：",-1)),sr(rt("input",{id:"booking-date","onUpdate:modelValue":M[0]||(M[0]=q=>a.value=q),type:"date",min:s.value,onChange:k},null,40,ny),[[ir,a.value]]),M[11]||(M[11]=rt("h3",{style:{color:"var(--electric-blue)","margin-top":"30px","margin-bottom":"15px"}},"可預約時段 (上午10:00 - 下午5:00)",-1)),rt("div",ry,[d.value?(gn(),_n(Ho,{key:0},[oh("正在檢查預約狀況...")],64)):m.value?(gn(),_n("p",sy,"預約只在星期五開放。請選擇一個星期五。")):(gn(!0),_n(Ho,{key:2},ah(h.value,q=>(gn(),_n("button",{key:q.time,type:"button",class:lh(["time-slot-btn",{active:l.value===q.time}]),disabled:q.booked,title:q.booked?"已預約":"",style:uh(q.booked?{backgroundColor:"#ccc",color:"#666",cursor:"not-allowed"}:{}),onClick:Q=>W(q.time)},Ko(q.time),15,iy))),128))]),rt("form",{class:"booking-form",onSubmit:ch(G,["prevent"])},[M[8]||(M[8]=rt("h3",{style:{color:"var(--text-main)","margin-bottom":"20px"}},"您的聯絡資料",-1)),rt("div",oy,[M[5]||(M[5]=rt("label",{for:"booking-name"},"姓名：",-1)),sr(rt("input",{id:"booking-name","onUpdate:modelValue":M[1]||(M[1]=q=>v.value.name=q),type:"text",placeholder:"請輸入您的姓名",required:""},null,512),[[ir,v.value.name]])]),rt("div",ay,[M[6]||(M[6]=rt("label",{for:"booking-phone"},"電話：",-1)),sr(rt("input",{id:"booking-phone","onUpdate:modelValue":M[2]||(M[2]=q=>v.value.phone=q),type:"tel",placeholder:"請輸入您的電話號碼",required:""},null,512),[[ir,v.value.phone]])]),rt("div",cy,[M[7]||(M[7]=rt("label",{for:"booking-email"},"電郵：",-1)),sr(rt("input",{id:"booking-email","onUpdate:modelValue":M[3]||(M[3]=q=>v.value.email=q),type:"email",placeholder:"請輸入您的電郵地址",required:""},null,512),[[ir,v.value.email]])]),rt("button",{type:"submit",class:"cta-button",disabled:E.value},[rt("span",null,Ko(E.value?"處理中...":"確認預約"),1)],8,uy)],32)])])]))}};export{fy as default};
