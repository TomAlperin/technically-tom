"use strict";(self.webpackChunktechnically_tom=self.webpackChunktechnically_tom||[]).push([[429],{8332:()=>{!function(e){const n=e.performance;function s(B){n&&n.mark&&n.mark(B)}function i(B,b){n&&n.measure&&n.measure(B,b)}s("Zone");const u=e.__Zone_symbol_prefix||"__zone_symbol__";function h(B){return u+B}const m=!0===e[h("forceDuplicateZoneCheck")];if(e.Zone){if(m||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let k=(()=>{class B{static assertZonePatched(){if(e.Promise!==Ee.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=B.current;for(;t.parent;)t=t.parent;return t}static get current(){return K.zone}static get currentTask(){return _e}static __load_patch(t,c,C=!1){if(Ee.hasOwnProperty(t)){if(!C&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const Z="Zone:"+t;s(Z),Ee[t]=c(e,B,te),i(Z,Z)}}get parent(){return this._parent}get name(){return this._name}constructor(t,c){this._parent=t,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new O(this,this._parent&&this._parent._zoneDelegate,c)}get(t){const c=this.getZoneWith(t);if(c)return c._properties[t]}getZoneWith(t){let c=this;for(;c;){if(c._properties.hasOwnProperty(t))return c;c=c._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,c){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const C=this._zoneDelegate.intercept(this,t,c),Z=this;return function(){return Z.runGuarded(C,this,arguments,c)}}run(t,c,C,Z){K={parent:K,zone:this};try{return this._zoneDelegate.invoke(this,t,c,C,Z)}finally{K=K.parent}}runGuarded(t,c=null,C,Z){K={parent:K,zone:this};try{try{return this._zoneDelegate.invoke(this,t,c,C,Z)}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne}}finally{K=K.parent}}runTask(t,c,C){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||re).name+"; Execution: "+this.name+")");if(t.state===z&&(t.type===se||t.type===N))return;const Z=t.state!=w;Z&&t._transitionTo(w,V),t.runCount++;const ne=_e;_e=t,K={parent:K,zone:this};try{t.type==N&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,c,C)}catch(d){if(this._zoneDelegate.handleError(this,d))throw d}}finally{t.state!==z&&t.state!==y&&(t.type==se||t.data&&t.data.isPeriodic?Z&&t._transitionTo(V,w):(t.runCount=0,this._updateTaskCount(t,-1),Z&&t._transitionTo(z,w,z))),K=K.parent,_e=ne}}scheduleTask(t){if(t.zone&&t.zone!==this){let C=this;for(;C;){if(C===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);C=C.parent}}t._transitionTo(ee,z);const c=[];t._zoneDelegates=c,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(C){throw t._transitionTo(y,ee,z),this._zoneDelegate.handleError(this,C),C}return t._zoneDelegates===c&&this._updateTaskCount(t,1),t.state==ee&&t._transitionTo(V,ee),t}scheduleMicroTask(t,c,C,Z){return this.scheduleTask(new g(H,t,c,C,Z,void 0))}scheduleMacroTask(t,c,C,Z,ne){return this.scheduleTask(new g(N,t,c,C,Z,ne))}scheduleEventTask(t,c,C,Z,ne){return this.scheduleTask(new g(se,t,c,C,Z,ne))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||re).name+"; Execution: "+this.name+")");if(t.state===V||t.state===w){t._transitionTo(W,V,w);try{this._zoneDelegate.cancelTask(this,t)}catch(c){throw t._transitionTo(y,W),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(t,-1),t._transitionTo(z,W),t.runCount=0,t}}_updateTaskCount(t,c){const C=t._zoneDelegates;-1==c&&(t._zoneDelegates=null);for(let Z=0;Z<C.length;Z++)C[Z]._updateTaskCount(t.type,c)}}return B.__symbol__=h,B})();const P={name:"",onHasTask:(B,b,t,c)=>B.hasTask(t,c),onScheduleTask:(B,b,t,c)=>B.scheduleTask(t,c),onInvokeTask:(B,b,t,c,C,Z)=>B.invokeTask(t,c,C,Z),onCancelTask:(B,b,t,c)=>B.cancelTask(t,c)};class O{constructor(b,t,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=b,this._parentDelegate=t,this._forkZS=c&&(c&&c.onFork?c:t._forkZS),this._forkDlgt=c&&(c.onFork?t:t._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:t._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:t._interceptZS),this._interceptDlgt=c&&(c.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:t._invokeZS),this._invokeDlgt=c&&(c.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:t._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:t._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:t._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:t._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const C=c&&c.onHasTask;(C||t&&t._hasTaskZS)&&(this._hasTaskZS=C?c:P,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=b,c.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(b,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,b,t):new k(b,t)}intercept(b,t,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,b,t,c):t}invoke(b,t,c,C,Z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,b,t,c,C,Z):t.apply(c,C)}handleError(b,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,b,t)}scheduleTask(b,t){let c=t;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,b,t),c||(c=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=H)throw new Error("Task is missing scheduleFn.");D(t)}return c}invokeTask(b,t,c,C){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,b,t,c,C):t.callback.apply(c,C)}cancelTask(b,t){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,b,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");c=t.cancelFn(t)}return c}hasTask(b,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,b,t)}catch(c){this.handleError(b,c)}}_updateTaskCount(b,t){const c=this._taskCounts,C=c[b],Z=c[b]=C+t;if(Z<0)throw new Error("More tasks executed then were scheduled.");0!=C&&0!=Z||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:b})}}class g{constructor(b,t,c,C,Z,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=b,this.source=t,this.data=C,this.scheduleFn=Z,this.cancelFn=ne,!c)throw new Error("callback is not defined");this.callback=c;const d=this;this.invoke=b===se&&C&&C.useG?g.invokeTask:function(){return g.invokeTask.call(e,d,this,arguments)}}static invokeTask(b,t,c){b||(b=this),ce++;try{return b.runCount++,b.zone.runTask(b,t,c)}finally{1==ce&&v(),ce--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(z,ee)}_transitionTo(b,t,c){if(this._state!==t&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${b}', expecting state '${t}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=b,b==z&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=h("setTimeout"),L=h("Promise"),$=h("then");let oe,F=[],G=!1;function Q(B){if(oe||e[L]&&(oe=e[L].resolve(0)),oe){let b=oe[$];b||(b=oe.then),b.call(oe,B)}else e[A](B,0)}function D(B){0===ce&&0===F.length&&Q(v),B&&F.push(B)}function v(){if(!G){for(G=!0;F.length;){const B=F;F=[];for(let b=0;b<B.length;b++){const t=B[b];try{t.zone.runTask(t,null,null)}catch(c){te.onUnhandledError(c)}}}te.microtaskDrainDone(),G=!1}}const re={name:"NO ZONE"},z="notScheduled",ee="scheduling",V="scheduled",w="running",W="canceling",y="unknown",H="microTask",N="macroTask",se="eventTask",Ee={},te={symbol:h,currentZoneFrame:()=>K,onUnhandledError:J,microtaskDrainDone:J,scheduleMicroTask:D,showUncaughtError:()=>!k[h("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:J,patchMethod:()=>J,bindArguments:()=>[],patchThen:()=>J,patchMacroTask:()=>J,patchEventPrototype:()=>J,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>J,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>J,wrapWithCurrentZone:()=>J,filterProperties:()=>[],attachOriginToPatched:()=>J,_redefineProperty:()=>J,patchCallbacks:()=>J,nativeScheduleMicroTask:Q};let K={parent:null,zone:new k(null,null)},_e=null,ce=0;function J(){}i("Zone","Zone"),e.Zone=k}(typeof window<"u"&&window||typeof self<"u"&&self||global);const le=Object.getOwnPropertyDescriptor,ye=Object.defineProperty,Pe=Object.getPrototypeOf,xe=Object.create,me=Array.prototype.slice,Ne="addEventListener",je="removeEventListener",ke=Zone.__symbol__(Ne),qe=Zone.__symbol__(je),he="true",Te="false",Se=Zone.__symbol__("");function $e(e,n){return Zone.current.wrap(e,n)}function He(e,n,s,i,u){return Zone.current.scheduleMacroTask(e,n,s,i,u)}const U=Zone.__symbol__,Ie=typeof window<"u",ve=Ie?window:void 0,Y=Ie&&ve||"object"==typeof self&&self||global,it="removeAttribute";function De(e,n){for(let s=e.length-1;s>=0;s--)"function"==typeof e[s]&&(e[s]=$e(e[s],n+"_"+s));return e}function Be(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ue=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Oe=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),ue=!Oe&&!Ue&&!(!Ie||!ve.HTMLElement),Ve=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Ue&&!(!Ie||!ve.HTMLElement),Ze={},Me=function(e){if(!(e=e||Y.event))return;let n=Ze[e.type];n||(n=Ze[e.type]=U("ON_PROPERTY"+e.type));const s=this||e.target||Y,i=s[n];let u;return ue&&s===ve&&"error"===e.type?(u=i&&i.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===u&&e.preventDefault()):(u=i&&i.apply(this,arguments),null!=u&&!u&&e.preventDefault()),u};function Ye(e,n,s){let i=le(e,n);if(!i&&s&&le(s,n)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;const u=U("on"+n+"patched");if(e.hasOwnProperty(u)&&e[u])return;delete i.writable,delete i.value;const h=i.get,m=i.set,k=n.slice(2);let P=Ze[k];P||(P=Ze[k]=U("ON_PROPERTY"+k)),i.set=function(O){let g=this;!g&&e===Y&&(g=Y),g&&("function"==typeof g[P]&&g.removeEventListener(k,Me),m&&m.call(g,null),g[P]=O,"function"==typeof O&&g.addEventListener(k,Me,!1))},i.get=function(){let O=this;if(!O&&e===Y&&(O=Y),!O)return null;const g=O[P];if(g)return g;if(h){let A=h.call(this);if(A)return i.set.call(this,A),"function"==typeof O[it]&&O.removeAttribute(n),A}return null},ye(e,n,i),e[u]=!0}function Ke(e,n,s){if(n)for(let i=0;i<n.length;i++)Ye(e,"on"+n[i],s);else{const i=[];for(const u in e)"on"==u.slice(0,2)&&i.push(u);for(let u=0;u<i.length;u++)Ye(e,i[u],s)}}const ie=U("originalInstance");function Re(e){const n=Y[e];if(!n)return;Y[U(e)]=n,Y[e]=function(){const u=De(arguments,e);switch(u.length){case 0:this[ie]=new n;break;case 1:this[ie]=new n(u[0]);break;case 2:this[ie]=new n(u[0],u[1]);break;case 3:this[ie]=new n(u[0],u[1],u[2]);break;case 4:this[ie]=new n(u[0],u[1],u[2],u[3]);break;default:throw new Error("Arg list too long.")}},de(Y[e],n);const s=new n(function(){});let i;for(i in s)"XMLHttpRequest"===e&&"responseBlob"===i||function(u){"function"==typeof s[u]?Y[e].prototype[u]=function(){return this[ie][u].apply(this[ie],arguments)}:ye(Y[e].prototype,u,{set:function(h){"function"==typeof h?(this[ie][u]=$e(h,e+"."+u),de(this[ie][u],h)):this[ie][u]=h},get:function(){return this[ie][u]}})}(i);for(i in n)"prototype"!==i&&n.hasOwnProperty(i)&&(Y[e][i]=n[i])}function fe(e,n,s){let i=e;for(;i&&!i.hasOwnProperty(n);)i=Pe(i);!i&&e[n]&&(i=e);const u=U(n);let h=null;if(i&&(!(h=i[u])||!i.hasOwnProperty(u))&&(h=i[u]=i[n],Be(i&&le(i,n)))){const k=s(h,u,n);i[n]=function(){return k(this,arguments)},de(i[n],h)}return h}function ct(e,n,s){let i=null;function u(h){const m=h.data;return m.args[m.cbIdx]=function(){h.invoke.apply(this,arguments)},i.apply(m.target,m.args),h}i=fe(e,n,h=>function(m,k){const P=s(m,k);return P.cbIdx>=0&&"function"==typeof k[P.cbIdx]?He(P.name,k[P.cbIdx],P,u):h.apply(m,k)})}function de(e,n){e[U("OriginalDelegate")]=n}let Je=!1,Ge=!1;function at(){if(Je)return Ge;Je=!0;try{const e=ve.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ge=!0)}catch{}return Ge}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{const i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,m=s.symbol,k=[],P=!0===e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],O=m("Promise"),g=m("then"),A="__creationTrace__";s.onUnhandledError=d=>{if(s.showUncaughtError()){const _=d&&d.rejection;_?console.error("Unhandled Promise rejection:",_ instanceof Error?_.message:_,"; Zone:",d.zone.name,"; Task:",d.task&&d.task.source,"; Value:",_,_ instanceof Error?_.stack:void 0):console.error(d)}},s.microtaskDrainDone=()=>{for(;k.length;){const d=k.shift();try{d.zone.runGuarded(()=>{throw d.throwOriginal?d.rejection:d})}catch(_){$(_)}}};const L=m("unhandledPromiseRejectionHandler");function $(d){s.onUnhandledError(d);try{const _=n[L];"function"==typeof _&&_.call(this,d)}catch{}}function F(d){return d&&d.then}function G(d){return d}function oe(d){return t.reject(d)}const Q=m("state"),D=m("value"),v=m("finally"),re=m("parentPromiseValue"),z=m("parentPromiseState"),ee="Promise.then",V=null,w=!0,W=!1,y=0;function H(d,_){return l=>{try{te(d,_,l)}catch(T){te(d,!1,T)}}}const N=function(){let d=!1;return function(l){return function(){d||(d=!0,l.apply(null,arguments))}}},se="Promise resolved with itself",Ee=m("currentTaskTrace");function te(d,_,l){const T=N();if(d===l)throw new TypeError(se);if(d[Q]===V){let R=null;try{("object"==typeof l||"function"==typeof l)&&(R=l&&l.then)}catch(I){return T(()=>{te(d,!1,I)})(),d}if(_!==W&&l instanceof t&&l.hasOwnProperty(Q)&&l.hasOwnProperty(D)&&l[Q]!==V)_e(l),te(d,l[Q],l[D]);else if(_!==W&&"function"==typeof R)try{R.call(l,T(H(d,_)),T(H(d,!1)))}catch(I){T(()=>{te(d,!1,I)})()}else{d[Q]=_;const I=d[D];if(d[D]=l,d[v]===v&&_===w&&(d[Q]=d[z],d[D]=d[re]),_===W&&l instanceof Error){const S=n.currentTask&&n.currentTask.data&&n.currentTask.data[A];S&&u(l,Ee,{configurable:!0,enumerable:!1,writable:!0,value:S})}for(let S=0;S<I.length;)ce(d,I[S++],I[S++],I[S++],I[S++]);if(0==I.length&&_==W){d[Q]=y;let S=l;try{throw new Error("Uncaught (in promise): "+function h(d){return d&&d.toString===Object.prototype.toString?(d.constructor&&d.constructor.name||"")+": "+JSON.stringify(d):d?d.toString():Object.prototype.toString.call(d)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(M){S=M}P&&(S.throwOriginal=!0),S.rejection=l,S.promise=d,S.zone=n.current,S.task=n.currentTask,k.push(S),s.scheduleMicroTask()}}}return d}const K=m("rejectionHandledHandler");function _e(d){if(d[Q]===y){try{const _=n[K];_&&"function"==typeof _&&_.call(this,{rejection:d[D],promise:d})}catch{}d[Q]=W;for(let _=0;_<k.length;_++)d===k[_].promise&&k.splice(_,1)}}function ce(d,_,l,T,R){_e(d);const I=d[Q],S=I?"function"==typeof T?T:G:"function"==typeof R?R:oe;_.scheduleMicroTask(ee,()=>{try{const M=d[D],x=!!l&&v===l[v];x&&(l[re]=M,l[z]=I);const j=_.run(S,void 0,x&&S!==oe&&S!==G?[]:[M]);te(l,!0,j)}catch(M){te(l,!1,M)}},l)}const B=function(){},b=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(_){return te(new this(null),w,_)}static reject(_){return te(new this(null),W,_)}static any(_){if(!_||"function"!=typeof _[Symbol.iterator])return Promise.reject(new b([],"All promises were rejected"));const l=[];let T=0;try{for(let S of _)T++,l.push(t.resolve(S))}catch{return Promise.reject(new b([],"All promises were rejected"))}if(0===T)return Promise.reject(new b([],"All promises were rejected"));let R=!1;const I=[];return new t((S,M)=>{for(let x=0;x<l.length;x++)l[x].then(j=>{R||(R=!0,S(j))},j=>{I.push(j),T--,0===T&&(R=!0,M(new b(I,"All promises were rejected")))})})}static race(_){let l,T,R=new this((M,x)=>{l=M,T=x});function I(M){l(M)}function S(M){T(M)}for(let M of _)F(M)||(M=this.resolve(M)),M.then(I,S);return R}static all(_){return t.allWithCallback(_)}static allSettled(_){return(this&&this.prototype instanceof t?this:t).allWithCallback(_,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(_,l){let T,R,I=new this((j,q)=>{T=j,R=q}),S=2,M=0;const x=[];for(let j of _){F(j)||(j=this.resolve(j));const q=M;try{j.then(X=>{x[q]=l?l.thenCallback(X):X,S--,0===S&&T(x)},X=>{l?(x[q]=l.errorCallback(X),S--,0===S&&T(x)):R(X)})}catch(X){R(X)}S++,M++}return S-=2,0===S&&T(x),I}constructor(_){const l=this;if(!(l instanceof t))throw new Error("Must be an instanceof Promise.");l[Q]=V,l[D]=[];try{const T=N();_&&_(T(H(l,w)),T(H(l,W)))}catch(T){te(l,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(_,l){let T=this.constructor?.[Symbol.species];(!T||"function"!=typeof T)&&(T=this.constructor||t);const R=new T(B),I=n.current;return this[Q]==V?this[D].push(I,R,_,l):ce(this,I,R,_,l),R}catch(_){return this.then(null,_)}finally(_){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=t);const T=new l(B);T[v]=v;const R=n.current;return this[Q]==V?this[D].push(R,T,_,_):ce(this,R,T,_,_),T}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const c=e[O]=e.Promise;e.Promise=t;const C=m("thenPatched");function Z(d){const _=d.prototype,l=i(_,"then");if(l&&(!1===l.writable||!l.configurable))return;const T=_.then;_[g]=T,d.prototype.then=function(R,I){return new t((M,x)=>{T.call(this,M,x)}).then(R,I)},d[C]=!0}return s.patchThen=Z,c&&(Z(c),fe(e,"fetch",d=>function ne(d){return function(_,l){let T=d.apply(_,l);if(T instanceof t)return T;let R=T.constructor;return R[C]||Z(R),T}}(d))),Promise[n.__symbol__("uncaughtPromiseErrors")]=k,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,s=U("OriginalDelegate"),i=U("Promise"),u=U("Error"),h=function(){if("function"==typeof this){const O=this[s];if(O)return"function"==typeof O?n.call(O):Object.prototype.toString.call(O);if(this===Promise){const g=e[i];if(g)return n.call(g)}if(this===Error){const g=e[u];if(g)return n.call(g)}}return n.call(this)};h[s]=n,Function.prototype.toString=h;const m=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":m.call(this)}});let pe=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{pe=!1}const lt={useG:!0},ae={},et={},tt=new RegExp("^"+Se+"(\\w+)(true|false)$"),ut=U("propagationStopped");function ze(e,n){const s=(n?n(e):e)+Te,i=(n?n(e):e)+he,u=Se+s,h=Se+i;ae[e]={},ae[e][Te]=u,ae[e][he]=h}function nt(e,n,s,i){const u=i&&i.add||Ne,h=i&&i.rm||je,m=i&&i.listeners||"eventListeners",k=i&&i.rmAll||"removeAllListeners",P=U(u),O="."+u+":",g="prependListener",A="."+g+":",L=function(D,v,re){if(D.isRemoved)return;const z=D.callback;let ee;"object"==typeof z&&z.handleEvent&&(D.callback=w=>z.handleEvent(w),D.originalDelegate=z);try{D.invoke(D,v,[re])}catch(w){ee=w}const V=D.options;return V&&"object"==typeof V&&V.once&&v[h].call(v,re.type,D.originalDelegate?D.originalDelegate:D.callback,V),ee};function $(D,v,re){if(!(v=v||e.event))return;const z=D||v.target||e,ee=z[ae[v.type][re?he:Te]];if(ee){const V=[];if(1===ee.length){const w=L(ee[0],z,v);w&&V.push(w)}else{const w=ee.slice();for(let W=0;W<w.length&&(!v||!0!==v[ut]);W++){const y=L(w[W],z,v);y&&V.push(y)}}if(1===V.length)throw V[0];for(let w=0;w<V.length;w++){const W=V[w];n.nativeScheduleMicroTask(()=>{throw W})}}}const F=function(D){return $(this,D,!1)},G=function(D){return $(this,D,!0)};function oe(D,v){if(!D)return!1;let re=!0;v&&void 0!==v.useG&&(re=v.useG);const z=v&&v.vh;let ee=!0;v&&void 0!==v.chkDup&&(ee=v.chkDup);let V=!1;v&&void 0!==v.rt&&(V=v.rt);let w=D;for(;w&&!w.hasOwnProperty(u);)w=Pe(w);if(!w&&D[u]&&(w=D),!w||w[P])return!1;const W=v&&v.eventNameToString,y={},H=w[P]=w[u],N=w[U(h)]=w[h],se=w[U(m)]=w[m],Ee=w[U(k)]=w[k];let te;v&&v.prepend&&(te=w[U(v.prepend)]=w[v.prepend]);const t=re?function(l){if(!y.isExisting)return H.call(y.target,y.eventName,y.capture?G:F,y.options)}:function(l){return H.call(y.target,y.eventName,l.invoke,y.options)},c=re?function(l){if(!l.isRemoved){const T=ae[l.eventName];let R;T&&(R=T[l.capture?he:Te]);const I=R&&l.target[R];if(I)for(let S=0;S<I.length;S++)if(I[S]===l){I.splice(S,1),l.isRemoved=!0,0===I.length&&(l.allRemoved=!0,l.target[R]=null);break}}if(l.allRemoved)return N.call(l.target,l.eventName,l.capture?G:F,l.options)}:function(l){return N.call(l.target,l.eventName,l.invoke,l.options)},Z=v&&v.diff?v.diff:function(l,T){const R=typeof T;return"function"===R&&l.callback===T||"object"===R&&l.originalDelegate===T},ne=Zone[U("UNPATCHED_EVENTS")],d=e[U("PASSIVE_EVENTS")],_=function(l,T,R,I,S=!1,M=!1){return function(){const x=this||e;let j=arguments[0];v&&v.transferEventName&&(j=v.transferEventName(j));let q=arguments[1];if(!q)return l.apply(this,arguments);if(Oe&&"uncaughtException"===j)return l.apply(this,arguments);let X=!1;if("function"!=typeof q){if(!q.handleEvent)return l.apply(this,arguments);X=!0}if(z&&!z(l,q,x,arguments))return;const we=pe&&!!d&&-1!==d.indexOf(j),ge=function K(l,T){return!pe&&"object"==typeof l&&l?!!l.capture:pe&&T?"boolean"==typeof l?{capture:l,passive:!0}:l?"object"==typeof l&&!1!==l.passive?{...l,passive:!0}:l:{passive:!0}:l}(arguments[2],we);if(ne)for(let Ce=0;Ce<ne.length;Ce++)if(j===ne[Ce])return we?l.call(x,j,q,ge):l.apply(this,arguments);const dt=!!ge&&("boolean"==typeof ge||ge.capture),Et=!(!ge||"object"!=typeof ge)&&ge.once,kt=Zone.current;let _t=ae[j];_t||(ze(j,W),_t=ae[j]);const gt=_t[dt?he:Te];let st,Le=x[gt],pt=!1;if(Le){if(pt=!0,ee)for(let Ce=0;Ce<Le.length;Ce++)if(Z(Le[Ce],q))return}else Le=x[gt]=[];const yt=x.constructor.name,mt=et[yt];mt&&(st=mt[j]),st||(st=yt+T+(W?W(j):j)),y.options=ge,Et&&(y.options.once=!1),y.target=x,y.capture=dt,y.eventName=j,y.isExisting=pt;const We=re?lt:void 0;We&&(We.taskData=y);const be=kt.scheduleEventTask(st,q,We,R,I);return y.target=null,We&&(We.taskData=null),Et&&(ge.once=!0),!pe&&"boolean"==typeof be.options||(be.options=ge),be.target=x,be.capture=dt,be.eventName=j,X&&(be.originalDelegate=q),M?Le.unshift(be):Le.push(be),S?x:void 0}};return w[u]=_(H,O,t,c,V),te&&(w[g]=_(te,A,function(l){return te.call(y.target,y.eventName,l.invoke,y.options)},c,V,!0)),w[h]=function(){const l=this||e;let T=arguments[0];v&&v.transferEventName&&(T=v.transferEventName(T));const R=arguments[2],I=!!R&&("boolean"==typeof R||R.capture),S=arguments[1];if(!S)return N.apply(this,arguments);if(z&&!z(N,S,l,arguments))return;const M=ae[T];let x;M&&(x=M[I?he:Te]);const j=x&&l[x];if(j)for(let q=0;q<j.length;q++){const X=j[q];if(Z(X,S))return j.splice(q,1),X.isRemoved=!0,0===j.length&&(X.allRemoved=!0,l[x]=null,"string"==typeof T)&&(l[Se+"ON_PROPERTY"+T]=null),X.zone.cancelTask(X),V?l:void 0}return N.apply(this,arguments)},w[m]=function(){const l=this||e;let T=arguments[0];v&&v.transferEventName&&(T=v.transferEventName(T));const R=[],I=ft(l,W?W(T):T);for(let S=0;S<I.length;S++){const M=I[S];R.push(M.originalDelegate?M.originalDelegate:M.callback)}return R},w[k]=function(){const l=this||e;let T=arguments[0];if(T){v&&v.transferEventName&&(T=v.transferEventName(T));const R=ae[T];if(R){const M=l[R[Te]],x=l[R[he]];if(M){const j=M.slice();for(let q=0;q<j.length;q++){const X=j[q];this[h].call(this,T,X.originalDelegate?X.originalDelegate:X.callback,X.options)}}if(x){const j=x.slice();for(let q=0;q<j.length;q++){const X=j[q];this[h].call(this,T,X.originalDelegate?X.originalDelegate:X.callback,X.options)}}}}else{const R=Object.keys(l);for(let I=0;I<R.length;I++){const M=tt.exec(R[I]);let x=M&&M[1];x&&"removeListener"!==x&&this[k].call(this,x)}this[k].call(this,"removeListener")}if(V)return this},de(w[u],H),de(w[h],N),Ee&&de(w[k],Ee),se&&de(w[m],se),!0}let Q=[];for(let D=0;D<s.length;D++)Q[D]=oe(s[D],i);return Q}function ft(e,n){if(!n){const h=[];for(let m in e){const k=tt.exec(m);let P=k&&k[1];if(P&&(!n||P===n)){const O=e[m];if(O)for(let g=0;g<O.length;g++)h.push(O[g])}}return h}let s=ae[n];s||(ze(n),s=ae[n]);const i=e[s[Te]],u=e[s[he]];return i?u?i.concat(u):i.slice():u?u.slice():[]}function Tt(e,n){const s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",i=>function(u,h){u[ut]=!0,i&&i.apply(u,h)})}function ht(e,n,s,i,u){const h=Zone.__symbol__(i);if(n[h])return;const m=n[h]=n[i];n[i]=function(k,P,O){return P&&P.prototype&&u.forEach(function(g){const A=`${s}.${i}::`+g,L=P.prototype;try{if(L.hasOwnProperty(g)){const $=e.ObjectGetOwnPropertyDescriptor(L,g);$&&$.value?($.value=e.wrapWithCurrentZone($.value,A),e._redefineProperty(P.prototype,g,$)):L[g]&&(L[g]=e.wrapWithCurrentZone(L[g],A))}else L[g]&&(L[g]=e.wrapWithCurrentZone(L[g],A))}catch{}}),m.call(n,k,P,O)},e.attachOriginToPatched(n[i],m)}function rt(e,n,s){if(!s||0===s.length)return n;const i=s.filter(h=>h.target===e);if(!i||0===i.length)return n;const u=i[0].ignoreProperties;return n.filter(h=>-1===u.indexOf(h))}function Ae(e,n,s,i){e&&Ke(e,rt(e,n,s),i)}function Fe(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,s)=>{const i=Fe(e);s.patchOnProperties=Ke,s.patchMethod=fe,s.bindArguments=De,s.patchMacroTask=ct;const u=n.__symbol__("BLACK_LISTED_EVENTS"),h=n.__symbol__("UNPATCHED_EVENTS");e[h]&&(e[u]=e[h]),e[u]&&(n[u]=n[h]=e[u]),s.patchEventPrototype=Tt,s.patchEventTarget=nt,s.isIEOrEdge=at,s.ObjectDefineProperty=ye,s.ObjectGetOwnPropertyDescriptor=le,s.ObjectCreate=xe,s.ArraySlice=me,s.patchClass=Re,s.wrapWithCurrentZone=$e,s.filterProperties=rt,s.attachOriginToPatched=de,s._redefineProperty=Object.defineProperty,s.patchCallbacks=ht,s.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:ae,eventNames:i,isBrowser:ue,isMix:Ve,isNode:Oe,TRUE_STR:he,FALSE_STR:Te,ZONE_SYMBOL_PREFIX:Se,ADD_EVENT_LISTENER_STR:Ne,REMOVE_EVENT_LISTENER_STR:je})});const r=U("zoneTask");function a(e,n,s,i){let u=null,h=null;s+=i;const m={};function k(O){const g=O.data;return g.args[0]=function(){return O.invoke.apply(this,arguments)},g.handleId=u.apply(e,g.args),O}function P(O){return h.call(e,O.data.handleId)}u=fe(e,n+=i,O=>function(g,A){if("function"==typeof A[0]){const L={isPeriodic:"Interval"===i,delay:"Timeout"===i||"Interval"===i?A[1]||0:void 0,args:A},$=A[0];A[0]=function(){try{return $.apply(this,arguments)}finally{L.isPeriodic||("number"==typeof L.handleId?delete m[L.handleId]:L.handleId&&(L.handleId[r]=null))}};const F=He(n,A[0],L,k,P);if(!F)return F;const G=F.data.handleId;return"number"==typeof G?m[G]=F:G&&(G[r]=F),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(F.ref=G.ref.bind(G),F.unref=G.unref.bind(G)),"number"==typeof G||G?G:F}return O.apply(e,A)}),h=fe(e,s,O=>function(g,A){const L=A[0];let $;"number"==typeof L?$=m[L]:($=L&&L[r],$||($=L)),$&&"string"==typeof $.type?"notScheduled"!==$.state&&($.cancelFn&&$.data.isPeriodic||0===$.runCount)&&("number"==typeof L?delete m[L]:L&&(L[r]=null),$.zone.cancelTask($)):O.apply(e,A)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",s="clear";a(e,n,s,"Timeout"),a(e,n,s,"Interval"),a(e,n,s,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{a(e,"request","cancel","AnimationFrame"),a(e,"mozRequest","mozCancel","AnimationFrame"),a(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const s=["alert","prompt","confirm"];for(let i=0;i<s.length;i++)fe(e,s[i],(h,m,k)=>function(P,O){return n.current.run(h,e,O,k)})}),Zone.__load_patch("EventTarget",(e,n,s)=>{(function p(e,n){n.patchEventPrototype(e,n)})(e,s),function E(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:s,zoneSymbolEventNames:i,TRUE_STR:u,FALSE_STR:h,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let P=0;P<s.length;P++){const O=s[P],L=m+(O+h),$=m+(O+u);i[O]={},i[O][h]=L,i[O][u]=$}const k=e.EventTarget;k&&k.prototype&&n.patchEventTarget(e,n,[k&&k.prototype])}(e,s);const i=e.XMLHttpRequestEventTarget;i&&i.prototype&&s.patchEventTarget(e,s,[i.prototype])}),Zone.__load_patch("MutationObserver",(e,n,s)=>{Re("MutationObserver"),Re("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,s)=>{Re("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,s)=>{Re("FileReader")}),Zone.__load_patch("on_property",(e,n,s)=>{!function ot(e,n){if(Oe&&!Ve||Zone[e.symbol("patchEvents")])return;const s=n.__Zone_ignore_on_properties;let i=[];if(ue){const u=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const h=function Qe(){try{const e=ve.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:u,ignoreProperties:["error"]}]:[];Ae(u,Fe(u),s&&s.concat(h),Pe(u))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let u=0;u<i.length;u++){const h=n[i[u]];h&&h.prototype&&Ae(h.prototype,Fe(h.prototype),s)}}(s,e)}),Zone.__load_patch("customElements",(e,n,s)=>{!function f(e,n){const{isBrowser:s,isMix:i}=n.getGlobalObjects();(s||i)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,s)}),Zone.__load_patch("XHR",(e,n)=>{!function P(O){const g=O.XMLHttpRequest;if(!g)return;const A=g.prototype;let $=A[ke],F=A[qe];if(!$){const y=O.XMLHttpRequestEventTarget;if(y){const H=y.prototype;$=H[ke],F=H[qe]}}const G="readystatechange",oe="scheduled";function Q(y){const H=y.data,N=H.target;N[h]=!1,N[k]=!1;const se=N[u];$||($=N[ke],F=N[qe]),se&&F.call(N,G,se);const Ee=N[u]=()=>{if(N.readyState===N.DONE)if(!H.aborted&&N[h]&&y.state===oe){const K=N[n.__symbol__("loadfalse")];if(0!==N.status&&K&&K.length>0){const _e=y.invoke;y.invoke=function(){const ce=N[n.__symbol__("loadfalse")];for(let J=0;J<ce.length;J++)ce[J]===y&&ce.splice(J,1);!H.aborted&&y.state===oe&&_e.call(y)},K.push(y)}else y.invoke()}else!H.aborted&&!1===N[h]&&(N[k]=!0)};return $.call(N,G,Ee),N[s]||(N[s]=y),w.apply(N,H.args),N[h]=!0,y}function D(){}function v(y){const H=y.data;return H.aborted=!0,W.apply(H.target,H.args)}const re=fe(A,"open",()=>function(y,H){return y[i]=0==H[2],y[m]=H[1],re.apply(y,H)}),ee=U("fetchTaskAborting"),V=U("fetchTaskScheduling"),w=fe(A,"send",()=>function(y,H){if(!0===n.current[V]||y[i])return w.apply(y,H);{const N={target:y,url:y[m],isPeriodic:!1,args:H,aborted:!1},se=He("XMLHttpRequest.send",D,N,Q,v);y&&!0===y[k]&&!N.aborted&&se.state===oe&&se.invoke()}}),W=fe(A,"abort",()=>function(y,H){const N=function L(y){return y[s]}(y);if(N&&"string"==typeof N.type){if(null==N.cancelFn||N.data&&N.data.aborted)return;N.zone.cancelTask(N)}else if(!0===n.current[ee])return W.apply(y,H)})}(e);const s=U("xhrTask"),i=U("xhrSync"),u=U("xhrListener"),h=U("xhrScheduled"),m=U("xhrURL"),k=U("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function Xe(e,n){const s=e.constructor.name;for(let i=0;i<n.length;i++){const u=n[i],h=e[u];if(h){if(!Be(le(e,u)))continue;e[u]=(k=>{const P=function(){return k.apply(this,De(arguments,s+"."+u))};return de(P,k),P})(h)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(i){return function(u){ft(e,i).forEach(m=>{const k=e.PromiseRejectionEvent;if(k){const P=new k(i,{promise:u.promise,reason:u.rejection});m.invoke(P)}})}}e.PromiseRejectionEvent&&(n[U("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[U("rejectionHandledHandler")]=s("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,s)=>{!function o(e,n){n.patchMethod(e,"queueMicrotask",s=>function(i,u){Zone.current.scheduleMicroTask("queueMicrotask",u[0])})}(e,s)})},2614:()=>{const le=":";const Ae=function(o,...r){if(Ae.translate){const f=Ae.translate(o,r);o=f[0],r=f[1]}let a=ot(o[0],o.raw[0]);for(let f=1;f<o.length;f++)a+=r[f-1]+ot(o[f],o.raw[f]);return a},Fe=":";function ot(o,r){return r.charAt(0)===Fe?o.substring(function pe(o,r){for(let a=1,f=1;a<o.length;a++,f++)if("\\"===r[f])f++;else if(o[a]===le)return a;throw new Error(`Unterminated $localize metadata block in "${r}".`)}(o,r)+1):o}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Ae}},le=>{var ye=xe=>le(le.s=xe);ye(8332),ye(2614)}]);