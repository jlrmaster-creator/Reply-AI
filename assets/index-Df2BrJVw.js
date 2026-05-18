(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var m_={exports:{}},au={},g_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),O0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),$0=Symbol.for("react.memo"),q0=Symbol.for("react.lazy"),_m=Symbol.iterator;function W0(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,v_={};function ai(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||y_}ai.prototype.isReactComponent={};ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E_(){}E_.prototype=ai.prototype;function Nd(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||y_}var Rd=Nd.prototype=new E_;Rd.constructor=Nd;__(Rd,ai.prototype);Rd.isPureReactComponent=!0;var vm=Array.isArray,w_=Object.prototype.hasOwnProperty,Pd={current:null},T_={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)w_.call(e,r)&&!T_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Fo,type:t,key:i,ref:o,props:s,_owner:Pd.current}}function H0(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function G0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Em=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G0(""+t.key):e.toString(36)}function Ga(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case O0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+mc(o,0):r,vm(s)?(n="",t!=null&&(n=t.replace(Em,"$&/")+"/"),Ga(s,e,n,"",function(c){return c})):s!=null&&(xd(s)&&(s=H0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Em,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",vm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+mc(i,l);o+=Ga(i,e,n,u,s)}else if(u=W0(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+mc(i,l++),o+=Ga(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],s=0;return Ga(t,r,"","",function(i){return e.call(n,i,s++)}),r}function K0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ka={transition:null},Q0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Pd};function S_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ai;ne.Fragment=L0;ne.Profiler=j0;ne.PureComponent=Nd;ne.StrictMode=M0;ne.Suspense=B0;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;ne.act=S_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=__({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Pd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)w_.call(e,u)&&!T_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Fo,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:U0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:F0,_context:t},t.Consumer=t};ne.createElement=I_;ne.createFactory=function(t){var e=I_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:z0,render:t}};ne.isValidElement=xd;ne.lazy=function(t){return{$$typeof:q0,_payload:{_status:-1,_result:t},_init:K0}};ne.memo=function(t,e){return{$$typeof:$0,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ne.unstable_act=S_;ne.useCallback=function(t,e){return at.current.useCallback(t,e)};ne.useContext=function(t){return at.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ne.useEffect=function(t,e){return at.current.useEffect(t,e)};ne.useId=function(){return at.current.useId()};ne.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return at.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ne.useRef=function(t){return at.current.useRef(t)};ne.useState=function(t){return at.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return at.current.useTransition()};ne.version="18.3.1";g_.exports=ne;var M=g_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=M,J0=Symbol.for("react.element"),X0=Symbol.for("react.fragment"),Z0=Object.prototype.hasOwnProperty,eI=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tI={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Z0.call(e,r)&&!tI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:J0,type:t,key:i,ref:o,props:s,_owner:eI.current}}au.Fragment=X0;au.jsx=A_;au.jsxs=A_;m_.exports=au;var p=m_.exports,lh={},C_={exports:{}},It={},k_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Q){var X=q.length;q.push(Q);e:for(;0<X;){var me=X-1>>>1,Ce=q[me];if(0<s(Ce,Q))q[me]=Q,q[X]=Ce,X=me;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Q=q[0],X=q.pop();if(X!==Q){q[0]=X;e:for(var me=0,Ce=q.length,Nr=Ce>>>1;me<Nr;){var At=2*(me+1)-1,Rr=q[At],Lt=At+1,Vn=q[Lt];if(0>s(Rr,X))Lt<Ce&&0>s(Vn,Rr)?(q[me]=Vn,q[Lt]=X,me=Lt):(q[me]=Rr,q[At]=X,me=At);else if(Lt<Ce&&0>s(Vn,X))q[me]=Vn,q[Lt]=X,me=Lt;else break e}}return Q}function s(q,Q){var X=q.sortIndex-Q.sortIndex;return X!==0?X:q.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,y=3,C=!1,k=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=q)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V(q){if(P=!1,S(q),!k)if(n(u)!==null)k=!0,yi(j);else{var Q=n(c);Q!==null&&_i(V,Q.startTime-q)}}function j(q,Q){k=!1,P&&(P=!1,A(v),v=-1),C=!0;var X=y;try{for(S(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||q&&!R());){var me=m.callback;if(typeof me=="function"){m.callback=null,y=m.priorityLevel;var Ce=me(m.expirationTime<=Q);Q=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(u)&&r(u),S(Q)}else r(u);m=n(u)}if(m!==null)var Nr=!0;else{var At=n(c);At!==null&&_i(V,At.startTime-Q),Nr=!1}return Nr}finally{m=null,y=X,C=!1}}var U=!1,I=null,v=-1,g=5,T=-1;function R(){return!(t.unstable_now()-T<g)}function N(){if(I!==null){var q=t.unstable_now();T=q;var Q=!0;try{Q=I(!0,q)}finally{Q?E():(U=!1,I=null)}}else U=!1}var E;if(typeof w=="function")E=function(){w(N)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,hn=we.port2;we.port1.onmessage=N,E=function(){hn.postMessage(null)}}else E=function(){x(N,0)};function yi(q){I=q,U||(U=!0,E())}function _i(q,Q){v=x(function(){q(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){k||C||(k=!0,yi(j))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var X=y;y=Q;try{return q()}finally{y=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Q){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var X=y;y=q;try{return Q()}finally{y=X}},t.unstable_scheduleCallback=function(q,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,q){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=X+Ce,q={id:f++,callback:Q,priorityLevel:q,startTime:X,expirationTime:Ce,sortIndex:-1},X>me?(q.sortIndex=X,e(c,q),n(u)===null&&q===n(c)&&(P?(A(v),v=-1):P=!0,_i(V,X-me))):(q.sortIndex=Ce,e(u,q),k||C||(k=!0,yi(j))),q},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(q){var Q=y;return function(){var X=y;y=Q;try{return q.apply(this,arguments)}finally{y=X}}}})(N_);k_.exports=N_;var nI=k_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI=M,Tt=nI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,mo={};function ns(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(mo[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,sI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Tm={};function iI(t){return uh.call(Tm,t)?!0:uh.call(wm,t)?!1:sI.test(t)?Tm[t]=!0:(wm[t]=!0,!1)}function oI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aI(t,e,n,r){if(e===null||typeof e>"u"||oI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Dd);He[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Dd);He[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Dd);He[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var s=He.hasOwnProperty(e)?He[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aI(e,n,s,r)&&(n=null),r||s===null?iI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=rI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),b_=Symbol.for("react.offscreen"),Im=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,gc;function qi(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var yc=!1;function _c(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function lI(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ts:return"Portal";case ch:return"Profiler";case Od:return"StrictMode";case hh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x_:return(t.displayName||"Context")+".Consumer";case P_:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function uI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cI(t){var e=D_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=cI(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O_(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function mh(t,e){O_(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wi=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Wi(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function L_(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,j_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hI=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){hI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function F_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function U_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=F_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var dI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(t,e){if(e){if(dI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Th=null,Ls=null,Ms=null;function Nm(t){if(t=Bo(t)){if(typeof Th!="function")throw Error(F(280));var e=t.stateNode;e&&(e=du(e),Th(t.stateNode,t.type,e))}}function z_(t){Ls?Ms?Ms.push(t):Ms=[t]:Ls=t}function B_(){if(Ls){var t=Ls,e=Ms;if(Ms=Ls=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function $_(t,e){return t(e)}function q_(){}var vc=!1;function W_(t,e,n){if(vc)return t(e,n);vc=!0;try{return $_(t,e,n)}finally{vc=!1,(Ls!==null||Ms!==null)&&(q_(),B_())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var r=du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ih=!1;if(Tn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Ih=!1}function fI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,gl=null,yl=!1,Sh=null,pI={onError:function(t){to=!0,gl=t}};function mI(t,e,n,r,s,i,o,l,u){to=!1,gl=null,fI.apply(pI,arguments)}function gI(t,e,n,r,s,i,o,l,u){if(mI.apply(this,arguments),to){if(to){var c=gl;to=!1,gl=null}else throw Error(F(198));yl||(yl=!0,Sh=c)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(rs(t)!==t)throw Error(F(188))}function yI(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Rm(s),t;if(i===r)return Rm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function G_(t){return t=yI(t),t!==null?K_(t):null}function K_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K_(t);if(e!==null)return e;t=t.sibling}return null}var Q_=Tt.unstable_scheduleCallback,Pm=Tt.unstable_cancelCallback,_I=Tt.unstable_shouldYield,vI=Tt.unstable_requestPaint,Ne=Tt.unstable_now,EI=Tt.unstable_getCurrentPriorityLevel,Fd=Tt.unstable_ImmediatePriority,Y_=Tt.unstable_UserBlockingPriority,_l=Tt.unstable_NormalPriority,wI=Tt.unstable_LowPriority,J_=Tt.unstable_IdlePriority,lu=null,tn=null;function TI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:AI,II=Math.log,SI=Math.LN2;function AI(t){return t>>>=0,t===0?32:31-(II(t)/SI|0)|0}var Sa=64,Aa=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Hi(l):(i&=o,i!==0&&(r=Hi(i)))}else o=n&~s,o!==0?r=Hi(o):i!==0&&(r=Hi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),s=1<<n,r|=t[n],e&=~s;return r}function CI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Bt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=CI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X_(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function NI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Bt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ev,zd,tv,nv,rv,Ch=!1,Ca=[],Zn=null,er=null,tr=null,_o=new Map,vo=new Map,Wn=[],RI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Mi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Bo(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function PI(t,e,n,r,s){switch(e){case"focusin":return Zn=Mi(Zn,t,e,n,r,s),!0;case"dragenter":return er=Mi(er,t,e,n,r,s),!0;case"mouseover":return tr=Mi(tr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return _o.set(i,Mi(_o.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,vo.set(i,Mi(vo.get(i)||null,t,e,n,r,s)),!0}return!1}function sv(t){var e=jr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=H_(n),e!==null){t.blockedOn=e,rv(t.priority,function(){tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=Bo(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){Qa(t)&&n.delete(e)}function xI(){Ch=!1,Zn!==null&&Qa(Zn)&&(Zn=null),er!==null&&Qa(er)&&(er=null),tr!==null&&Qa(tr)&&(tr=null),_o.forEach(bm),vo.forEach(bm)}function ji(t,e){t.blockedOn===e&&(t.blockedOn=null,Ch||(Ch=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,xI)))}function Eo(t){function e(s){return ji(s,t)}if(0<Ca.length){ji(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&ji(Zn,t),er!==null&&ji(er,t),tr!==null&&ji(tr,t),_o.forEach(e),vo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)sv(n),n.blockedOn===null&&Wn.shift()}var js=bn.ReactCurrentBatchConfig,El=!0;function bI(t,e,n,r){var s=ae,i=js.transition;js.transition=null;try{ae=1,Bd(t,e,n,r)}finally{ae=s,js.transition=i}}function DI(t,e,n,r){var s=ae,i=js.transition;js.transition=null;try{ae=4,Bd(t,e,n,r)}finally{ae=s,js.transition=i}}function Bd(t,e,n,r){if(El){var s=kh(t,e,n,r);if(s===null)Pc(t,e,r,wl,n),xm(t,r);else if(PI(s,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<RI.indexOf(t)){for(;s!==null;){var i=Bo(s);if(i!==null&&ev(i),i=kh(t,e,n,r),i===null&&Pc(t,e,r,wl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Pc(t,e,r,null,n)}}var wl=null;function kh(t,e,n,r){if(wl=null,t=jd(r),t=jr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EI()){case Fd:return 1;case Y_:return 4;case _l:case wI:return 16;case J_:return 536870912;default:return 16}default:return 16}}var Jn=null,$d=null,Ya=null;function ov(){if(Ya)return Ya;var t,e=$d,n=e.length,r,s="value"in Jn?Jn.value:Jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ya=s.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Dm(){return!1}function St(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ka:Dm,this.isPropagationStopped=Dm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=St(li),zo=Ee({},li,{view:0,detail:0}),VI=St(zo),wc,Tc,Fi,uu=Ee({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(wc=t.screenX-Fi.screenX,Tc=t.screenY-Fi.screenY):Tc=wc=0,Fi=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Vm=St(uu),OI=Ee({},uu,{dataTransfer:0}),LI=St(OI),MI=Ee({},zo,{relatedTarget:0}),Ic=St(MI),jI=Ee({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),FI=St(jI),UI=Ee({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zI=St(UI),BI=Ee({},li,{data:0}),Om=St(BI),$I={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WI[t])?!!e[t]:!1}function Wd(){return HI}var GI=Ee({},zo,{key:function(t){if(t.key){var e=$I[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KI=St(GI),QI=Ee({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=St(QI),YI=Ee({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),JI=St(YI),XI=Ee({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZI=St(XI),eS=Ee({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=St(eS),nS=[9,13,27,32],Hd=Tn&&"CompositionEvent"in window,no=null;Tn&&"documentMode"in document&&(no=document.documentMode);var rS=Tn&&"TextEvent"in window&&!no,av=Tn&&(!Hd||no&&8<no&&11>=no),Mm=" ",jm=!1;function lv(t,e){switch(t){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function sS(t,e){switch(t){case"compositionend":return uv(e);case"keypress":return e.which!==32?null:(jm=!0,Mm);case"textInput":return t=e.data,t===Mm&&jm?null:t;default:return null}}function iS(t,e){if(Ss)return t==="compositionend"||!Hd&&lv(t,e)?(t=ov(),Ya=$d=Jn=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function cv(t,e,n,r){z_(r),e=Tl(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,wo=null;function aS(t){wv(t,0)}function cu(t){var e=ks(t);if(V_(e))return t}function lS(t,e){if(t==="change")return e}var hv=!1;if(Tn){var Sc;if(Tn){var Ac="oninput"in document;if(!Ac){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),Ac=typeof Um.oninput=="function"}Sc=Ac}else Sc=!1;hv=Sc&&(!document.documentMode||9<document.documentMode)}function zm(){ro&&(ro.detachEvent("onpropertychange",dv),wo=ro=null)}function dv(t){if(t.propertyName==="value"&&cu(wo)){var e=[];cv(e,wo,t,jd(t)),W_(aS,e)}}function uS(t,e,n){t==="focusin"?(zm(),ro=e,wo=n,ro.attachEvent("onpropertychange",dv)):t==="focusout"&&zm()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(wo)}function hS(t,e){if(t==="click")return cu(e)}function dS(t,e){if(t==="input"||t==="change")return cu(e)}function fS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:fS;function To(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!uh.call(e,s)||!Wt(t[s],e[s]))return!1}return!0}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,e){var n=Bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bm(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pv(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=$m(n,i);var o=$m(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mS=Tn&&"documentMode"in document&&11>=document.documentMode,As=null,Nh=null,so=null,Rh=!1;function qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||As==null||As!==ml(r)||(r=As,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&To(so,r)||(so=r,r=Tl(Nh,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Cc={},mv={};Tn&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function hu(t){if(Cc[t])return Cc[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return Cc[t]=e[n];return t}var gv=hu("animationend"),yv=hu("animationiteration"),_v=hu("animationstart"),vv=hu("transitionend"),Ev=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Ev.set(t,e),ns(e,[t])}for(var kc=0;kc<Wm.length;kc++){var Nc=Wm[kc],gS=Nc.toLowerCase(),yS=Nc[0].toUpperCase()+Nc.slice(1);wr(gS,"on"+yS)}wr(gv,"onAnimationEnd");wr(yv,"onAnimationIteration");wr(_v,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(vv,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gI(r,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Hm(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Hm(s,l,c),i=u}}}if(yl)throw t=Sh,yl=!1,Sh=null,t}function de(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(Tv(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),Tv(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[Ra]){t[Ra]=!0,R_.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Rc("selectionchange",!1,e))}}function Tv(t,e,n,r){switch(iv(e)){case 1:var s=bI;break;case 4:s=DI;break;default:s=Bd}n=s.bind(null,e,n,t),s=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Pc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}W_(function(){var c=i,f=jd(n),m=[];e:{var y=Ev.get(t);if(y!==void 0){var C=qd,k=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":C=KI;break;case"focusin":k="focus",C=Ic;break;case"focusout":k="blur",C=Ic;break;case"beforeblur":case"afterblur":C=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=LI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=JI;break;case gv:case yv:case _v:C=FI;break;case vv:C=ZI;break;case"scroll":C=VI;break;case"wheel":C=tS;break;case"copy":case"cut":case"paste":C=zI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Lm}var P=(e&4)!==0,x=!P&&t==="scroll",A=P?y!==null?y+"Capture":null:y;P=[];for(var w=c,S;w!==null;){S=w;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,A!==null&&(V=yo(w,A),V!=null&&P.push(So(w,V,S)))),x)break;w=w.return}0<P.length&&(y=new C(y,k,null,n,f),m.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",y&&n!==wh&&(k=n.relatedTarget||n.fromElement)&&(jr(k)||k[In]))break e;if((C||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,C?(k=n.relatedTarget||n.toElement,C=c,k=k?jr(k):null,k!==null&&(x=rs(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(C=null,k=c),C!==k)){if(P=Vm,V="onMouseLeave",A="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Lm,V="onPointerLeave",A="onPointerEnter",w="pointer"),x=C==null?y:ks(C),S=k==null?y:ks(k),y=new P(V,w+"leave",C,n,f),y.target=x,y.relatedTarget=S,V=null,jr(f)===c&&(P=new P(A,w+"enter",k,n,f),P.target=S,P.relatedTarget=x,V=P),x=V,C&&k)t:{for(P=C,A=k,w=0,S=P;S;S=gs(S))w++;for(S=0,V=A;V;V=gs(V))S++;for(;0<w-S;)P=gs(P),w--;for(;0<S-w;)A=gs(A),S--;for(;w--;){if(P===A||A!==null&&P===A.alternate)break t;P=gs(P),A=gs(A)}P=null}else P=null;C!==null&&Gm(m,y,C,P,!1),k!==null&&x!==null&&Gm(m,x,k,P,!0)}}e:{if(y=c?ks(c):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var j=lS;else if(Fm(y))if(hv)j=dS;else{j=cS;var U=uS}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=hS);if(j&&(j=j(t,c))){cv(m,j,n,f);break e}U&&U(t,y,c),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&gh(y,"number",y.value)}switch(U=c?ks(c):window,t){case"focusin":(Fm(U)||U.contentEditable==="true")&&(As=U,Nh=c,so=null);break;case"focusout":so=Nh=As=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,qm(m,n,f);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":qm(m,n,f)}var I;if(Hd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ss?lv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(av&&n.locale!=="ko"&&(Ss||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ss&&(I=ov()):(Jn=f,$d="value"in Jn?Jn.value:Jn.textContent,Ss=!0)),U=Tl(c,v),0<U.length&&(v=new Om(v,t,null,n,f),m.push({event:v,listeners:U}),I?v.data=I:(I=uv(n),I!==null&&(v.data=I)))),(I=rS?sS(t,n):iS(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(f=new Om("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=I))}wv(m,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=yo(t,n),i!=null&&r.unshift(So(t,i,s)),i=yo(t,e),i!=null&&r.push(So(t,i,s))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=yo(n,i),u!=null&&o.unshift(So(n,u,l))):s||(u=yo(n,i),u!=null&&o.push(So(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function Km(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(ES,"")}function Pa(t,e,n){if(e=Km(e),Km(t)!==e&&n)throw Error(F(425))}function Il(){}var Ph=null,xh=null;function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(IS)}:Dh;function IS(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Eo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),en="__reactFiber$"+ui,Ao="__reactProps$"+ui,In="__reactContainer$"+ui,Vh="__reactEvents$"+ui,SS="__reactListeners$"+ui,AS="__reactHandles$"+ui;function jr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ym(t);t!==null;){if(n=t[en])return n;t=Ym(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[en]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function du(t){return t[Ao]||null}var Oh=[],Ns=-1;function Tr(t){return{current:t}}function pe(t){0>Ns||(t.current=Oh[Ns],Oh[Ns]=null,Ns--)}function ce(t,e){Ns++,Oh[Ns]=t.current,t.current=e}var fr={},tt=Tr(fr),ft=Tr(!1),Hr=fr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function pt(t){return t=t.childContextTypes,t!=null}function Sl(){pe(ft),pe(tt)}function Jm(t,e,n){if(tt.current!==fr)throw Error(F(168));ce(tt,e),ce(ft,n)}function Iv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,uI(t)||"Unknown",s));return Ee({},n,r)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Hr=tt.current,ce(tt,t),ce(ft,ft.current),!0}function Xm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Iv(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(tt),ce(tt,t)):pe(ft),ce(ft,n)}var fn=null,fu=!1,bc=!1;function Sv(t){fn===null?fn=[t]:fn.push(t)}function CS(t){fu=!0,Sv(t)}function Ir(){if(!bc&&fn!==null){bc=!0;var t=0,e=ae;try{var n=fn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,fu=!1}catch(s){throw fn!==null&&(fn=fn.slice(t+1)),Q_(Fd,Ir),s}finally{ae=e,bc=!1}}return null}var Rs=[],Ps=0,Cl=null,kl=0,Ct=[],kt=0,Gr=null,pn=1,mn="";function Or(t,e){Rs[Ps++]=kl,Rs[Ps++]=Cl,Cl=t,kl=e}function Av(t,e,n){Ct[kt++]=pn,Ct[kt++]=mn,Ct[kt++]=Gr,Gr=t;var r=pn;t=mn;var s=32-Bt(r)-1;r&=~(1<<s),n+=1;var i=32-Bt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,pn=1<<32-Bt(e)+s|n<<s|r,mn=i+t}else pn=1<<i|n<<s|r,mn=t}function Kd(t){t.return!==null&&(Or(t,1),Av(t,1,0))}function Qd(t){for(;t===Cl;)Cl=Rs[--Ps],Rs[Ps]=null,kl=Rs[--Ps],Rs[Ps]=null;for(;t===Gr;)Gr=Ct[--kt],Ct[kt]=null,mn=Ct[--kt],Ct[kt]=null,pn=Ct[--kt],Ct[kt]=null}var wt=null,vt=null,ge=!1,Ut=null;function Cv(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function Lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(ge){var e=vt;if(e){var n=e;if(!Zm(t,e)){if(Lh(t))throw Error(F(418));e=nr(n.nextSibling);var r=wt;e&&Zm(t,e)?Cv(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(Lh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function xa(t){if(t!==wt)return!1;if(!ge)return eg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bh(t.type,t.memoizedProps)),e&&(e=vt)){if(Lh(t))throw kv(),Error(F(418));for(;e;)Cv(t,e),e=nr(e.nextSibling)}if(eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?nr(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=vt;t;)t=nr(t.nextSibling)}function Ks(){vt=wt=null,ge=!1}function Yd(t){Ut===null?Ut=[t]:Ut.push(t)}var kS=bn.ReactCurrentBatchConfig;function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tg(t){var e=t._init;return e(t._payload)}function Nv(t){function e(A,w){if(t){var S=A.deletions;S===null?(A.deletions=[w],A.flags|=16):S.push(w)}}function n(A,w){if(!t)return null;for(;w!==null;)e(A,w),w=w.sibling;return null}function r(A,w){for(A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function s(A,w){return A=or(A,w),A.index=0,A.sibling=null,A}function i(A,w,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<w?(A.flags|=2,w):S):(A.flags|=2,w)):(A.flags|=1048576,w)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,w,S,V){return w===null||w.tag!==6?(w=Fc(S,A.mode,V),w.return=A,w):(w=s(w,S),w.return=A,w)}function u(A,w,S,V){var j=S.type;return j===Is?f(A,w,S.props.children,V,S.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&tg(j)===w.type)?(V=s(w,S.props),V.ref=Ui(A,w,S),V.return=A,V):(V=sl(S.type,S.key,S.props,null,A.mode,V),V.ref=Ui(A,w,S),V.return=A,V)}function c(A,w,S,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Uc(S,A.mode,V),w.return=A,w):(w=s(w,S.children||[]),w.return=A,w)}function f(A,w,S,V,j){return w===null||w.tag!==7?(w=$r(S,A.mode,V,j),w.return=A,w):(w=s(w,S),w.return=A,w)}function m(A,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Fc(""+w,A.mode,S),w.return=A,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wa:return S=sl(w.type,w.key,w.props,null,A.mode,S),S.ref=Ui(A,null,w),S.return=A,S;case Ts:return w=Uc(w,A.mode,S),w.return=A,w;case $n:var V=w._init;return m(A,V(w._payload),S)}if(Wi(w)||Oi(w))return w=$r(w,A.mode,S,null),w.return=A,w;ba(A,w)}return null}function y(A,w,S,V){var j=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(A,w,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:return S.key===j?u(A,w,S,V):null;case Ts:return S.key===j?c(A,w,S,V):null;case $n:return j=S._init,y(A,w,j(S._payload),V)}if(Wi(S)||Oi(S))return j!==null?null:f(A,w,S,V,null);ba(A,S)}return null}function C(A,w,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(S)||null,l(w,A,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case wa:return A=A.get(V.key===null?S:V.key)||null,u(w,A,V,j);case Ts:return A=A.get(V.key===null?S:V.key)||null,c(w,A,V,j);case $n:var U=V._init;return C(A,w,S,U(V._payload),j)}if(Wi(V)||Oi(V))return A=A.get(S)||null,f(w,A,V,j,null);ba(w,V)}return null}function k(A,w,S,V){for(var j=null,U=null,I=w,v=w=0,g=null;I!==null&&v<S.length;v++){I.index>v?(g=I,I=null):g=I.sibling;var T=y(A,I,S[v],V);if(T===null){I===null&&(I=g);break}t&&I&&T.alternate===null&&e(A,I),w=i(T,w,v),U===null?j=T:U.sibling=T,U=T,I=g}if(v===S.length)return n(A,I),ge&&Or(A,v),j;if(I===null){for(;v<S.length;v++)I=m(A,S[v],V),I!==null&&(w=i(I,w,v),U===null?j=I:U.sibling=I,U=I);return ge&&Or(A,v),j}for(I=r(A,I);v<S.length;v++)g=C(I,A,v,S[v],V),g!==null&&(t&&g.alternate!==null&&I.delete(g.key===null?v:g.key),w=i(g,w,v),U===null?j=g:U.sibling=g,U=g);return t&&I.forEach(function(R){return e(A,R)}),ge&&Or(A,v),j}function P(A,w,S,V){var j=Oi(S);if(typeof j!="function")throw Error(F(150));if(S=j.call(S),S==null)throw Error(F(151));for(var U=j=null,I=w,v=w=0,g=null,T=S.next();I!==null&&!T.done;v++,T=S.next()){I.index>v?(g=I,I=null):g=I.sibling;var R=y(A,I,T.value,V);if(R===null){I===null&&(I=g);break}t&&I&&R.alternate===null&&e(A,I),w=i(R,w,v),U===null?j=R:U.sibling=R,U=R,I=g}if(T.done)return n(A,I),ge&&Or(A,v),j;if(I===null){for(;!T.done;v++,T=S.next())T=m(A,T.value,V),T!==null&&(w=i(T,w,v),U===null?j=T:U.sibling=T,U=T);return ge&&Or(A,v),j}for(I=r(A,I);!T.done;v++,T=S.next())T=C(I,A,v,T.value,V),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),w=i(T,w,v),U===null?j=T:U.sibling=T,U=T);return t&&I.forEach(function(N){return e(A,N)}),ge&&Or(A,v),j}function x(A,w,S,V){if(typeof S=="object"&&S!==null&&S.type===Is&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:e:{for(var j=S.key,U=w;U!==null;){if(U.key===j){if(j=S.type,j===Is){if(U.tag===7){n(A,U.sibling),w=s(U,S.props.children),w.return=A,A=w;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&tg(j)===U.type){n(A,U.sibling),w=s(U,S.props),w.ref=Ui(A,U,S),w.return=A,A=w;break e}n(A,U);break}else e(A,U);U=U.sibling}S.type===Is?(w=$r(S.props.children,A.mode,V,S.key),w.return=A,A=w):(V=sl(S.type,S.key,S.props,null,A.mode,V),V.ref=Ui(A,w,S),V.return=A,A=V)}return o(A);case Ts:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(A,w.sibling),w=s(w,S.children||[]),w.return=A,A=w;break e}else{n(A,w);break}else e(A,w);w=w.sibling}w=Uc(S,A.mode,V),w.return=A,A=w}return o(A);case $n:return U=S._init,x(A,w,U(S._payload),V)}if(Wi(S))return k(A,w,S,V);if(Oi(S))return P(A,w,S,V);ba(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(A,w.sibling),w=s(w,S),w.return=A,A=w):(n(A,w),w=Fc(S,A.mode,V),w.return=A,A=w),o(A)):n(A,w)}return x}var Qs=Nv(!0),Rv=Nv(!1),Nl=Tr(null),Rl=null,xs=null,Jd=null;function Xd(){Jd=xs=Rl=null}function Zd(t){var e=Nl.current;pe(Nl),t._currentValue=e}function jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Rl=t,Jd=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Rl===null)throw Error(F(308));xs=t,Rl.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Fr=null;function ef(t){Fr===null?Fr=[t]:Fr.push(t)}function Pv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,ef(e)):(n.next=s.next,s.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Sn(t,n)}return s=r.interleaved,s===null?(e.next=e,ef(r)):(e.next=s.next,s.next=e),r.interleaved=e,Sn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}function ng(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var s=t.updateQueue;qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var y=l.lane,C=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(y=e,C=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(C,m,y);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,y=typeof k=="function"?k.call(C,m,y):k,y==null)break e;m=Ee({},m,y);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=C,u=m):f=f.next=C,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=m}}function rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var $o={},nn=Tr($o),Co=Tr($o),ko=Tr($o);function Ur(t){if(t===$o)throw Error(F(174));return t}function nf(t,e){switch(ce(ko,e),ce(Co,t),ce(nn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}pe(nn),ce(nn,e)}function Ys(){pe(nn),pe(Co),pe(ko)}function bv(t){Ur(ko.current);var e=Ur(nn.current),n=_h(e,t.type);e!==n&&(ce(Co,t),ce(nn,n))}function rf(t){Co.current===t&&(pe(nn),pe(Co))}var _e=Tr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function sf(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Za=bn.ReactCurrentDispatcher,Vc=bn.ReactCurrentBatchConfig,Kr=0,ve=null,Ve=null,Ue=null,bl=!1,io=!1,No=0,NS=0;function Qe(){throw Error(F(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function af(t,e,n,r,s,i){if(Kr=i,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?bS:DS,t=n(r,s),io){i=0;do{if(io=!1,No=0,25<=i)throw Error(F(301));i+=1,Ue=Ve=null,e.updateQueue=null,Za.current=VS,t=n(r,s)}while(io)}if(Za.current=Dl,e=Ve!==null&&Ve.next!==null,Kr=0,Ue=Ve=ve=null,bl=!1,e)throw Error(F(300));return t}function lf(){var t=No!==0;return No=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Vt(){if(Ve===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ue===null?ve.memoizedState:Ue.next;if(e!==null)Ue=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Ro(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Kr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ve.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ve.lanes|=i,Qr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Wt(i,e.memoizedState)||(dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Dv(){}function Vv(t,e){var n=ve,r=Vt(),s=e(),i=!Wt(r.memoizedState,s);if(i&&(r.memoizedState=s,dt=!0),r=r.queue,uf(Mv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Po(9,Lv.bind(null,n,r,s,e),void 0,null),ze===null)throw Error(F(349));Kr&30||Ov(n,e,s)}return s}function Ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lv(t,e,n,r){e.value=n,e.getSnapshot=r,jv(e)&&Fv(t)}function Mv(t,e,n){return n(function(){jv(e)&&Fv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Fv(t){var e=Sn(t,1);e!==null&&$t(e,t,1,-1)}function sg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,ve,t),[e.memoizedState,t]}function Po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Uv(){return Vt().memoizedState}function el(t,e,n,r){var s=Xt();ve.flags|=t,s.memoizedState=Po(1|e,n,void 0,r===void 0?null:r)}function pu(t,e,n,r){var s=Vt();r=r===void 0?null:r;var i=void 0;if(Ve!==null){var o=Ve.memoizedState;if(i=o.destroy,r!==null&&of(r,o.deps)){s.memoizedState=Po(e,n,i,r);return}}ve.flags|=t,s.memoizedState=Po(1|e,n,i,r)}function ig(t,e){return el(8390656,8,t,e)}function uf(t,e){return pu(2048,8,t,e)}function zv(t,e){return pu(4,2,t,e)}function Bv(t,e){return pu(4,4,t,e)}function $v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qv(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,$v.bind(null,e,t),n)}function cf(){}function Wv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gv(t,e,n){return Kr&21?(Wt(n,e)||(n=X_(),ve.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function RS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Vc.transition;Vc.transition={};try{t(!1),e()}finally{ae=n,Vc.transition=r}}function Kv(){return Vt().memoizedState}function PS(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qv(t))Yv(e,n);else if(n=Pv(t,e,n,r),n!==null){var s=ot();$t(n,t,r,s),Jv(n,e,r)}}function xS(t,e,n){var r=ir(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qv(t))Yv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(s.next=s,ef(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Pv(t,e,s,r),n!==null&&(s=ot(),$t(n,t,r,s),Jv(n,e,r))}}function Qv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Yv(t,e){io=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}var Dl={readContext:Dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},bS={readContext:Dt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,$v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:sg,useDebugValue:cf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=sg(!1),e=t[0];return t=RS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,s=Xt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));Kr&30||Ov(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ig(Mv.bind(null,r,i,t),[t]),r.flags|=2048,Po(9,Lv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(ge){var n=mn,r=pn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:Dt,useCallback:Wv,useContext:Dt,useEffect:uf,useImperativeHandle:qv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Hv,useReducer:Oc,useRef:Uv,useState:function(){return Oc(Ro)},useDebugValue:cf,useDeferredValue:function(t){var e=Vt();return Gv(e,Ve.memoizedState,t)},useTransition:function(){var t=Oc(Ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Vv,useId:Kv,unstable_isNewReconciler:!1},VS={readContext:Dt,useCallback:Wv,useContext:Dt,useEffect:uf,useImperativeHandle:qv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Hv,useReducer:Lc,useRef:Uv,useState:function(){return Lc(Ro)},useDebugValue:cf,useDeferredValue:function(t){var e=Vt();return Ve===null?e.memoizedState=t:Gv(e,Ve.memoizedState,t)},useTransition:function(){var t=Lc(Ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Vv,useId:Kv,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),s=ir(t),i=vn(r,s);i.payload=e,n!=null&&(i.callback=n),e=rr(t,i,s),e!==null&&($t(e,t,s,r),Xa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),s=ir(t),i=vn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=rr(t,i,s),e!==null&&($t(e,t,s,r),Xa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=ir(t),s=vn(n,r);s.tag=2,e!=null&&(s.callback=e),e=rr(t,s,r),e!==null&&($t(e,t,r,n),Xa(e,t,r))}};function og(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,r)||!To(s,i):!0}function Xv(t,e,n){var r=!1,s=fr,i=e.contextType;return typeof i=="object"&&i!==null?i=Dt(i):(s=pt(e)?Hr:tt.current,r=e.contextTypes,i=(r=r!=null)?Gs(t,s):fr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ag(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Uh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},tf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Dt(i):(i=pt(e)?Hr:tt.current,s.context=Gs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Fh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&mu.enqueueReplaceState(s,s.state,null),Pl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=lI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function Zv(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Jh=r),zh(t,e)},n}function eE(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){zh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=QS.bind(null,t,e,n),e.then(t,t))}function ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var LS=bn.ReactCurrentOwner,dt=!1;function it(t,e,n,r){e.child=t===null?Rv(e,null,n,r):Qs(e,t.child,n,r)}function hg(t,e,n,r,s){n=n.render;var i=e.ref;return Fs(e,s),r=af(t,e,n,r,i,s),n=lf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,An(t,e,s)):(ge&&n&&Kd(e),e.flags|=1,it(t,e,r,s),e.child)}function dg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!_f(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,tE(t,e,i,r,s)):(t=sl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,r)&&t.ref===e.ref)return An(t,e,s)}return e.flags|=1,t=or(i,r),t.ref=e.ref,t.return=e,e.child=t}function tE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(To(i,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,An(t,e,s)}return Bh(t,e,n,r,s)}function nE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ds,_t),_t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ds,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(Ds,_t),_t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ce(Ds,_t),_t|=r;return it(t,e,s,n),e.child}function rE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bh(t,e,n,r,s){var i=pt(n)?Hr:tt.current;return i=Gs(e,i),Fs(e,s),n=af(t,e,n,r,i,s),r=lf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,An(t,e,s)):(ge&&r&&Kd(e),e.flags|=1,it(t,e,n,s),e.child)}function fg(t,e,n,r,s){if(pt(n)){var i=!0;Al(e)}else i=!1;if(Fs(e,s),e.stateNode===null)tl(t,e),Xv(e,n,r),Uh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(n)?Hr:tt.current,c=Gs(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ag(e,o,r,c),qn=!1;var y=e.memoizedState;o.state=y,Pl(e,r,o,s),u=e.memoizedState,l!==r||y!==u||ft.current||qn?(typeof f=="function"&&(Fh(e,n,f,r),u=e.memoizedState),(l=qn||og(e,n,l,r,y,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:jt(e.type,l),o.props=c,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=pt(n)?Hr:tt.current,u=Gs(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&ag(e,o,r,u),qn=!1,y=e.memoizedState,o.state=y,Pl(e,r,o,s);var k=e.memoizedState;l!==m||y!==k||ft.current||qn?(typeof C=="function"&&(Fh(e,n,C,r),k=e.memoizedState),(c=qn||og(e,n,c,r,y,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return $h(t,e,n,r,i,s)}function $h(t,e,n,r,s,i){rE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Xm(e,n,!1),An(t,e,i);r=e.stateNode,LS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):it(t,e,l,i),e.memoizedState=r.state,s&&Xm(e,n,!0),e.child}function sE(t){var e=t.stateNode;e.pendingContext?Jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jm(t,e.context,!1),nf(t,e.containerInfo)}function pg(t,e,n,r,s){return Ks(),Yd(s),e.flags|=256,it(t,e,n,r),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iE(t,e,n){var r=e.pendingProps,s=_e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ce(_e,s&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_u(o,r,0,null),t=$r(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Wh(n),e.memoizedState=qh,t):hf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return MS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=or(l,i):(i=$r(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=qh,r}return i=t.child,t=i.sibling,r=or(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,r){return r!==null&&Yd(r),Qs(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Mc(Error(F(422))),Da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=_u({mode:"visible",children:r.children},s,0,null),i=$r(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Wh(o),e.memoizedState=qh,i);if(!(e.mode&1))return Da(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Mc(i,r,void 0),Da(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Sn(t,s),$t(r,t,s,-1))}return yf(),r=Mc(Error(F(421))),Da(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,vt=nr(s.nextSibling),wt=e,ge=!0,Ut=null,t!==null&&(Ct[kt++]=pn,Ct[kt++]=mn,Ct[kt++]=Gr,pn=t.id,mn=t.overflow,Gr=e),e=hf(e,r.children),e.flags|=4096,e)}function mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jh(t.return,e,n)}function jc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function oE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(it(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,n,e);else if(t.tag===19)mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),jc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&xl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}jc(e,!0,n,null,i);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:sE(e),Ks();break;case 5:bv(e);break;case 1:pt(e.type)&&Al(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ce(Nl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?iE(t,e,n):(ce(_e,_e.current&1),t=An(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,nE(t,e,n)}return An(t,e,n)}var aE,Hh,lE,uE;aE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};lE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ur(nn.current);var i=null;switch(n){case"input":s=ph(t,s),r=ph(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=yh(t,s),r=yh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}vh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};uE=function(t,e,n,r){n!==r&&(e.flags|=4)};function zi(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FS(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return pt(e.type)&&Sl(),Ye(e),null;case 3:return r=e.stateNode,Ys(),pe(ft),pe(tt),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(ed(Ut),Ut=null))),Hh(t,e),Ye(e),null;case 5:rf(e);var s=Ur(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)lE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=Ur(nn.current),xa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[en]=e,r[Ao]=i,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(s=0;s<Gi.length;s++)de(Gi[s],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Sm(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":Cm(r,i),de("invalid",r)}vh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),s=["children",""+l]):mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ta(r),Am(r,i,!0);break;case"textarea":Ta(r),km(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Il)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[Ao]=r,aE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":de("cancel",t),de("close",t),s=r;break;case"iframe":case"object":case"embed":de("load",t),s=r;break;case"video":case"audio":for(s=0;s<Gi.length;s++)de(Gi[s],t);s=r;break;case"source":de("error",t),s=r;break;case"img":case"image":case"link":de("error",t),de("load",t),s=r;break;case"details":de("toggle",t),s=r;break;case"input":Sm(t,r),s=ph(t,r),de("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Cm(t,r),s=yh(t,r),de("invalid",t);break;default:s=r}vh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?U_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&j_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&go(t,u):typeof u=="number"&&go(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(mo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&de("scroll",t):u!=null&&Vd(t,i,u,o))}switch(n){case"input":Ta(t),Am(t,r,!1);break;case"textarea":Ta(t),km(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Os(t,!!r.multiple,i,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)uE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ur(ko.current),Ur(nn.current),xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(i=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))kv(),Ks(),e.flags|=98560,i=!1;else if(i=xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[en]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),i=!1}else Ut!==null&&(ed(Ut),Ut=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):yf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ys(),Hh(t,e),t===null&&Io(e.stateNode.containerInfo),Ye(e),null;case 10:return Zd(e.type._context),Ye(e),null;case 17:return pt(e.type)&&Sl(),Ye(e),null;case 19:if(pe(_e),i=e.memoizedState,i===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)zi(i,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,zi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>Xs&&(e.flags|=128,r=!0,zi(i,!1),e.lanes=4194304)}else{if(!r)if(t=xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Ne()-i.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,zi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function US(t,e){switch(Qd(e),e.tag){case 1:return pt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),pe(ft),pe(tt),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Ys(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Va=!1,Ze=!1,zS=typeof WeakSet=="function"?WeakSet:Set,W=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Gh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var gg=!1;function BS(t,e){if(Ph=El,t=pv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,y=null;t:for(;;){for(var C;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(C=m.firstChild)!==null;)y=m,m=C;for(;;){if(m===t)break t;if(y===n&&++c===s&&(l=o),y===i&&++f===r&&(u=o),(C=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},El=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,x=k.memoizedState,A=e.stateNode,w=A.getSnapshotBeforeUpdate(e.elementType===e.type?P:jt(e.type,P),x);A.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return k=gg,gg=!1,k}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Gh(e,n,i)}s=s.next}while(s!==r)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cE(t){var e=t.alternate;e!==null&&(t.alternate=null,cE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[Ao],delete e[Vh],delete e[SS],delete e[AS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hE(t){return t.tag===5||t.tag===3||t.tag===4}function yg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Be=null,Ft=!1;function zn(t,e,n){for(n=n.child;n!==null;)dE(t,e,n),n=n.sibling}function dE(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:Ze||bs(n,e);case 6:var r=Be,s=Ft;Be=null,zn(t,e,n),Be=r,Ft=s,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),Eo(t)):xc(Be,n.stateNode));break;case 4:r=Be,s=Ft,Be=n.stateNode.containerInfo,Ft=!0,zn(t,e,n),Be=r,Ft=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Gh(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!Ze&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,zn(t,e,n),Ze=r):zn(t,e,n);break;default:zn(t,e,n)}}function _g(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(r){var s=JS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(F(160));dE(i,o,s),Be=null,Ft=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ie(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fE(e,t),e=e.sibling}function fE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Jt(t),r&4){try{oo(3,t,t.return),gu(3,t)}catch(P){Ie(t,t.return,P)}try{oo(5,t,t.return)}catch(P){Ie(t,t.return,P)}}break;case 1:Mt(e,t),Jt(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Mt(e,t),Jt(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{go(s,"")}catch(P){Ie(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&O_(s,i),Eh(l,o);var c=Eh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?U_(s,m):f==="dangerouslySetInnerHTML"?j_(s,m):f==="children"?go(s,m):Vd(s,f,m,c)}switch(l){case"input":mh(s,i);break;case"textarea":L_(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?Os(s,!!i.multiple,C,!1):y!==!!i.multiple&&(i.defaultValue!=null?Os(s,!!i.multiple,i.defaultValue,!0):Os(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ao]=i}catch(P){Ie(t,t.return,P)}}break;case 6:if(Mt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ie(t,t.return,P)}}break;case 3:if(Mt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(P){Ie(t,t.return,P)}break;case 4:Mt(e,t),Jt(t);break;case 13:Mt(e,t),Jt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(pf=Ne())),r&4&&_g(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,Mt(e,t),Ze=c):Mt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(y=W,C=y.child,y.tag){case 0:case 11:case 14:case 15:oo(4,y,y.return);break;case 1:bs(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Ie(r,n,P)}}break;case 5:bs(y,y.return);break;case 22:if(y.memoizedState!==null){Eg(m);continue}}C!==null?(C.return=y,W=C):Eg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=F_("display",o))}catch(P){Ie(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ie(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(e,t),Jt(t),r&4&&_g(t);break;case 21:break;default:Mt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(go(s,""),r.flags&=-33);var i=yg(t);Yh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=yg(t);Qh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $S(t,e,n){W=t,pE(t)}function pE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Va;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Va;var c=Ze;if(Va=o,(Ze=u)&&!c)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?wg(s):u!==null?(u.return=o,W=u):wg(s);for(;i!==null;)W=i,pE(i),i=i.sibling;W=s,Va=l,Ze=c}vg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):vg(t)}}function vg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&rg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Eo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&Kh(e)}catch(y){Ie(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Eg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function wg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ie(e,s,u)}}var i=e.return;try{Kh(e)}catch(u){Ie(e,i,u)}break;case 5:var o=e.return;try{Kh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var qS=Math.ceil,Vl=bn.ReactCurrentDispatcher,df=bn.ReactCurrentOwner,xt=bn.ReactCurrentBatchConfig,ie=0,ze=null,Pe=null,We=0,_t=0,Ds=Tr(0),Oe=0,xo=null,Qr=0,yu=0,ff=0,ao=null,ct=null,pf=0,Xs=1/0,dn=null,Ol=!1,Jh=null,sr=null,Oa=!1,Xn=null,Ll=0,lo=0,Xh=null,nl=-1,rl=0;function ot(){return ie&6?Ne():nl!==-1?nl:nl=Ne()}function ir(t){return t.mode&1?ie&2&&We!==0?We&-We:kS.transition!==null?(rl===0&&(rl=X_()),rl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:iv(t.type)),t):1}function $t(t,e,n,r){if(50<lo)throw lo=0,Xh=null,Error(F(185));Uo(t,n,r),(!(ie&2)||t!==ze)&&(t===ze&&(!(ie&2)&&(yu|=n),Oe===4&&Hn(t,We)),mt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Xs=Ne()+500,fu&&Ir()))}function mt(t,e){var n=t.callbackNode;kI(t,e);var r=vl(t,t===ze?We:0);if(r===0)n!==null&&Pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pm(n),e===1)t.tag===0?CS(Tg.bind(null,t)):Sv(Tg.bind(null,t)),TS(function(){!(ie&6)&&Ir()}),n=null;else{switch(Z_(r)){case 1:n=Fd;break;case 4:n=Y_;break;case 16:n=_l;break;case 536870912:n=J_;break;default:n=_l}n=TE(n,mE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mE(t,e){if(nl=-1,rl=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=vl(t,t===ze?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var s=ie;ie|=2;var i=yE();(ze!==t||We!==e)&&(dn=null,Xs=Ne()+500,Br(t,e));do try{GS();break}catch(l){gE(t,l)}while(!0);Xd(),Vl.current=i,ie=s,Pe!==null?e=0:(ze=null,We=0,e=Oe)}if(e!==0){if(e===2&&(s=Ah(t),s!==0&&(r=s,e=Zh(t,s))),e===1)throw n=xo,Br(t,0),Hn(t,r),mt(t,Ne()),n;if(e===6)Hn(t,r);else{if(s=t.current.alternate,!(r&30)&&!WS(s)&&(e=Ml(t,r),e===2&&(i=Ah(t),i!==0&&(r=i,e=Zh(t,i))),e===1))throw n=xo,Br(t,0),Hn(t,r),mt(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Lr(t,ct,dn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=pf+500-Ne(),10<e)){if(vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Dh(Lr.bind(null,t,ct,dn),e);break}Lr(t,ct,dn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Bt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qS(r/1960))-r,10<r){t.timeoutHandle=Dh(Lr.bind(null,t,ct,dn),r);break}Lr(t,ct,dn);break;case 5:Lr(t,ct,dn);break;default:throw Error(F(329))}}}return mt(t,Ne()),t.callbackNode===n?mE.bind(null,t):null}function Zh(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=ct,ct=n,e!==null&&ed(e)),t}function ed(t){ct===null?ct=t:ct.push.apply(ct,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Wt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~ff,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Tg(t){if(ie&6)throw Error(F(327));Us();var e=vl(t,0);if(!(e&1))return mt(t,Ne()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Ah(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=xo,Br(t,0),Hn(t,e),mt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,ct,dn),mt(t,Ne()),null}function mf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Xs=Ne()+500,fu&&Ir())}}function Yr(t){Xn!==null&&Xn.tag===0&&!(ie&6)&&Us();var e=ie;ie|=1;var n=xt.transition,r=ae;try{if(xt.transition=null,ae=1,t)return t()}finally{ae=r,xt.transition=n,ie=e,!(ie&6)&&Ir()}}function gf(){_t=Ds.current,pe(Ds)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Ys(),pe(ft),pe(tt),sf();break;case 5:rf(r);break;case 4:Ys();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(ze=t,Pe=t=or(t.current,null),We=_t=e,Oe=0,xo=null,ff=yu=Qr=0,ct=ao=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Fr=null}return t}function gE(t,e){do{var n=Pe;try{if(Xd(),Za.current=Dl,bl){for(var r=ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}bl=!1}if(Kr=0,Ue=Ve=ve=null,io=!1,No=0,df.current=null,n===null||n.return===null){Oe=1,xo=e,Pe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=ug(o);if(C!==null){C.flags&=-257,cg(C,o,l,i,e),C.mode&1&&lg(i,c,e),e=C,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){lg(i,c,e),yf();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var x=ug(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),cg(x,o,l,i,e),Yd(Js(u,l));break e}}i=u=Js(u,l),Oe!==4&&(Oe=2),ao===null?ao=[i]:ao.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=Zv(i,u,e);ng(i,A);break e;case 1:l=u;var w=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(sr===null||!sr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=eE(i,l,e);ng(i,V);break e}}i=i.return}while(i!==null)}vE(n)}catch(j){e=j,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function yE(){var t=Vl.current;return Vl.current=Dl,t===null?Dl:t}function yf(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),ze===null||!(Qr&268435455)&&!(yu&268435455)||Hn(ze,We)}function Ml(t,e){var n=ie;ie|=2;var r=yE();(ze!==t||We!==e)&&(dn=null,Br(t,e));do try{HS();break}catch(s){gE(t,s)}while(!0);if(Xd(),ie=n,Vl.current=r,Pe!==null)throw Error(F(261));return ze=null,We=0,Oe}function HS(){for(;Pe!==null;)_E(Pe)}function GS(){for(;Pe!==null&&!_I();)_E(Pe)}function _E(t){var e=wE(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?vE(t):Pe=e,df.current=null}function vE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=US(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=FS(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Lr(t,e,n){var r=ae,s=xt.transition;try{xt.transition=null,ae=1,KS(t,e,n,r)}finally{xt.transition=s,ae=r}return null}function KS(t,e,n,r){do Us();while(Xn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(NI(t,i),t===ze&&(Pe=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,TE(_l,function(){return Us(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xt.transition,xt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,df.current=null,BS(t,n),fE(n,t),pS(xh),El=!!Ph,xh=Ph=null,t.current=n,$S(n),vI(),ie=l,ae=o,xt.transition=i}else t.current=n;if(Oa&&(Oa=!1,Xn=t,Ll=s),i=t.pendingLanes,i===0&&(sr=null),TI(n.stateNode),mt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ol)throw Ol=!1,t=Jh,Jh=null,t;return Ll&1&&t.tag!==0&&Us(),i=t.pendingLanes,i&1?t===Xh?lo++:(lo=0,Xh=t):lo=0,Ir(),null}function Us(){if(Xn!==null){var t=Z_(Ll),e=xt.transition,n=ae;try{if(xt.transition=null,ae=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Ll=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:oo(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var y=f.sibling,C=f.return;if(cE(f),f===c){W=null;break}if(y!==null){y.return=C,W=y;break}W=C}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,W=A;break e}W=i.return}}var w=t.current;for(W=w;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gu(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(ie=s,Ir(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(lu,t)}catch{}r=!0}return r}finally{ae=n,xt.transition=e}}return!1}function Ig(t,e,n){e=Js(n,e),e=Zv(t,e,1),t=rr(t,e,1),e=ot(),t!==null&&(Uo(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)Ig(t,t,n);else for(;e!==null;){if(e.tag===3){Ig(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Js(n,t),t=eE(e,t,1),e=rr(e,t,1),t=ot(),e!==null&&(Uo(e,1,t),mt(e,t));break}}e=e.return}}function QS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Ne()-pf?Br(t,0):ff|=n),mt(t,e)}function EE(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ot();t=Sn(t,e),t!==null&&(Uo(t,e,n),mt(t,n))}function YS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),EE(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),EE(t,n)}var wE;wE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,jS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ge&&e.flags&1048576&&Av(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var s=Gs(e,tt.current);Fs(e,n),s=af(null,e,r,t,s,n);var i=lf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(i=!0,Al(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,tf(e),s.updater=mu,e.stateNode=s,s._reactInternals=e,Uh(e,r,t,n),e=$h(null,e,r,!0,i,n)):(e.tag=0,ge&&i&&Kd(e),it(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ZS(r),t=jt(r,t),s){case 0:e=Bh(null,e,r,t,n);break e;case 1:e=fg(null,e,r,t,n);break e;case 11:e=hg(null,e,r,t,n);break e;case 14:e=dg(null,e,r,jt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jt(r,s),Bh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jt(r,s),fg(t,e,r,s,n);case 3:e:{if(sE(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,xv(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Js(Error(F(423)),e),e=pg(t,e,r,n,s);break e}else if(r!==s){s=Js(Error(F(424)),e),e=pg(t,e,r,n,s);break e}else for(vt=nr(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ut=null,n=Rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===s){e=An(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return bv(e),t===null&&Mh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,bh(r,s)?o=null:i!==null&&bh(r,i)&&(e.flags|=32),rE(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return iE(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jt(r,s),hg(t,e,r,s,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ce(Nl,r._currentValue),r._currentValue=o,i!==null)if(Wt(i.value,o)){if(i.children===s.children&&!ft.current){e=An(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=vn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),jh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}it(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fs(e,n),s=Dt(s),r=r(s),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,s=jt(r,e.pendingProps),s=jt(r.type,s),dg(t,e,r,s,n);case 15:return tE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:jt(r,s),tl(t,e),e.tag=1,pt(r)?(t=!0,Al(e)):t=!1,Fs(e,n),Xv(e,r,s),Uh(e,r,s,n),$h(null,e,r,!0,t,n);case 19:return oE(t,e,n);case 22:return nE(t,e,n)}throw Error(F(156,e.tag))};function TE(t,e){return Q_(t,e)}function XS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new XS(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Md)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return $r(n.children,s,i,e);case Od:o=8,s|=8;break;case ch:return t=Pt(12,n,e,s|2),t.elementType=ch,t.lanes=i,t;case hh:return t=Pt(13,n,e,s),t.elementType=hh,t.lanes=i,t;case dh:return t=Pt(19,n,e,s),t.elementType=dh,t.lanes=i,t;case b_:return _u(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P_:o=10;break e;case x_:o=9;break e;case Ld:o=11;break e;case Md:o=14;break e;case $n:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function $r(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=b_,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function e1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,s,i,o,l,u){return t=new e1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Pt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(i),t}function t1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function IE(t){if(!t)return fr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return Iv(t,n,e)}return e}function SE(t,e,n,r,s,i,o,l,u){return t=vf(n,r,!0,t,s,i,o,l,u),t.context=IE(null),n=t.current,r=ot(),s=ir(n),i=vn(r,s),i.callback=e??null,rr(n,i,s),t.current.lanes=s,Uo(t,s,r),mt(t,r),t}function vu(t,e,n,r){var s=e.current,i=ot(),o=ir(s);return n=IE(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(s,e,o),t!==null&&($t(t,s,o,i),Xa(t,s,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){Sg(t,e),(t=t.alternate)&&Sg(t,e)}function n1(){return null}var AE=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Eu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));vu(t,e,null,null)};Eu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){vu(null,t,null,null)}),e[In]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&sv(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function r1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=jl(o);i.call(c)}}var o=SE(e,r,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[In]=o.current,Io(t.nodeType===8?t.parentNode:t),Yr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=jl(u);l.call(c)}}var u=vf(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=u,t[In]=u.current,Io(t.nodeType===8?t.parentNode:t),Yr(function(){vu(e,u,n,r)}),u}function Tu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=jl(o);l.call(u)}}vu(e,o,t,s)}else o=r1(n,e,t,s,r);return jl(o)}ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(Ud(e,n|1),mt(e,Ne()),!(ie&6)&&(Xs=Ne()+500,Ir()))}break;case 13:Yr(function(){var r=Sn(t,1);if(r!==null){var s=ot();$t(r,t,1,s)}}),Ef(t,1)}};zd=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ot();$t(e,t,134217728,n)}Ef(t,134217728)}};tv=function(t){if(t.tag===13){var e=ir(t),n=Sn(t,e);if(n!==null){var r=ot();$t(n,t,e,r)}Ef(t,e)}};nv=function(){return ae};rv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Th=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=du(r);if(!s)throw Error(F(90));V_(r),mh(r,s)}}}break;case"textarea":L_(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};$_=mf;q_=Yr;var s1={usingClientEntryPoint:!1,Events:[Bo,ks,du,z_,B_,mf]},Bi={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i1={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G_(t),t===null?null:t.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{lu=La.inject(i1),tn=La}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(F(200));return t1(t,e,null,n)};It.createRoot=function(t,e){if(!Tf(t))throw Error(F(299));var n=!1,r="",s=AE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,s),t[In]=e.current,Io(t.nodeType===8?t.parentNode:t),new wf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=G_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Yr(t)};It.hydrate=function(t,e,n){if(!wu(e))throw Error(F(200));return Tu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Tf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=AE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=SE(e,null,t,1,n??null,s,!1,i,o),t[In]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Eu(e)};It.render=function(t,e,n){if(!wu(e))throw Error(F(200));return Tu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!wu(t))throw Error(F(40));return t._reactRootContainer?(Yr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};It.unstable_batchedUpdates=mf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Tu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function CE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CE)}catch(t){console.error(t)}}CE(),C_.exports=It;var o1=C_.exports,Cg=o1;lh.createRoot=Cg.createRoot,lh.hydrateRoot=Cg.hydrateRoot;const a1=()=>{};var kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},l1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|c>>6,C=c&63;u||(C=64,o||(y=64)),r.push(n[f],n[m],n[y],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new u1;const y=i<<2|l>>4;if(r.push(y),c!==64){const C=l<<4&240|c>>2;if(r.push(C),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c1=function(t){const e=kE(t);return NE.encodeByteArray(e,!0)},Fl=function(t){return c1(t).replace(/\./g,"")},RE=function(t){try{return NE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d1=()=>h1().__FIREBASE_DEFAULTS__,f1=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},p1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RE(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return a1()||d1()||f1()||p1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PE=t=>{var e,n;return(n=(e=Iu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},m1=t=>{const e=PE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xE=()=>{var t;return(t=Iu())==null?void 0:t.config},bE=t=>{var e;return(e=Iu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function y1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function v1(){var e;const t=(e=Iu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function E1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I1(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S1(){return!v1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A1(){try{return typeof indexedDB=="object"}catch{return!1}}function C1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=k1,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?N1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,l,r)}}function N1(t,e){return t.replace(R1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const R1=/\{\$([^}]+)}/g;function P1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ng(i)&&Ng(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function x1(t,e){const n=new b1(t,e);return n.subscribe.bind(n)}class b1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");D1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zc),s.error===void 0&&(s.error=zc),s.complete===void 0&&(s.complete=zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ho(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function DE(t){return(await fetch(t,{credentials:"include"})).ok}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class V1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new g1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L1(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:O1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function O1(t){return t===Mr?void 0:t}function L1(t){return t.instantiationMode==="EAGER"}/**
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
 */class M1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const j1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},F1=re.INFO,U1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},z1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=U1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class If{constructor(e){this.name=e,this._logLevel=F1,this._logHandler=z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const B1=(t,e)=>e.some(n=>t instanceof n);let Rg,Pg;function $1(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q1(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VE=new WeakMap,td=new WeakMap,OE=new WeakMap,Bc=new WeakMap,Sf=new WeakMap;function W1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VE.set(n,t)}).catch(()=>{}),Sf.set(e,t),e}function H1(t){if(td.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||OE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G1(t){nd=t(nd)}function K1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return OE.set(r,e.sort?e.sort():[e]),ar(r)}:q1().includes(t)?function(...e){return t.apply($c(this),e),ar(VE.get(this))}:function(...e){return ar(t.apply($c(this),e))}}function Q1(t){return typeof t=="function"?K1(t):(t instanceof IDBTransaction&&H1(t),B1(t,$1())?new Proxy(t,nd):t)}function ar(t){if(t instanceof IDBRequest)return W1(t);if(Bc.has(t))return Bc.get(t);const e=Q1(t);return e!==t&&(Bc.set(t,e),Sf.set(e,t)),e}const $c=t=>Sf.get(t);function Y1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const J1=["get","getKey","getAll","getAllKeys","count"],X1=["put","add","delete","clear"],qc=new Map;function xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=X1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||J1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return qc.set(e,i),i}G1(t=>({...t,get:(e,n,r)=>xg(e,n)||t.get(e,n,r),has:(e,n)=>!!xg(e,n)||t.has(e,n)}));/**
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
 */class Z1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",bg="0.14.12";/**
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
 */const kn=new If("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",rA="@firebase/analytics",sA="@firebase/app-check-compat",iA="@firebase/app-check",oA="@firebase/auth",aA="@firebase/auth-compat",lA="@firebase/database",uA="@firebase/data-connect",cA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",yA="@firebase/performance",_A="@firebase/performance-compat",vA="@firebase/remote-config",EA="@firebase/remote-config-compat",wA="@firebase/storage",TA="@firebase/storage-compat",IA="@firebase/firestore",SA="@firebase/ai",AA="@firebase/firestore-compat",CA="firebase",kA="12.13.0";/**
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
 */const sd="[DEFAULT]",NA={[rd]:"fire-core",[tA]:"fire-core-compat",[rA]:"fire-analytics",[nA]:"fire-analytics-compat",[iA]:"fire-app-check",[sA]:"fire-app-check-compat",[oA]:"fire-auth",[aA]:"fire-auth-compat",[lA]:"fire-rtdb",[uA]:"fire-data-connect",[cA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[yA]:"fire-perf",[_A]:"fire-perf-compat",[vA]:"fire-rc",[EA]:"fire-rc-compat",[wA]:"fire-gcs",[TA]:"fire-gcs-compat",[IA]:"fire-fst",[AA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[CA]:"fire-js-all"};/**
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
 */const Ul=new Map,RA=new Map,id=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(id.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of Ul.values())Dg(n,t);for(const n of RA.values())Dg(n,t);return!0}function Af(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new qo("app","Firebase",PA);/**
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
 */class xA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=kA;function LE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:sd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw lr.create("bad-app-name",{appName:String(s)});if(n||(n=xE()),!n)throw lr.create("no-options");const i=Ul.get(s);if(i){if(Cn(n,i.options)&&Cn(r,i.config))return i;throw lr.create("duplicate-app",{appName:s})}const o=new M1(s);for(const u of id.values())o.addComponent(u);const l=new xA(n,r,o);return Ul.set(s,l),l}function ME(t=sd){const e=Ul.get(t);if(!e&&t===sd&&xE())return LE();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){let r=NA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}Zs(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bA="firebase-heartbeat-database",DA=1,bo="firebase-heartbeat-store";let Wc=null;function jE(){return Wc||(Wc=Y1(bA,DA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function VA(t){try{const n=(await jE()).transaction(bo),r=await n.objectStore(bo).get(FE(t));return await n.done,r}catch(e){if(e instanceof Dn)kn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Vg(t,e){try{const r=(await jE()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,FE(t)),await r.done}catch(n){if(n instanceof Dn)kn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function FE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OA=1024,LA=30;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Og();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LA){const o=UA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Og(),{heartbeatsToSend:r,unsentEntries:s}=jA(this._heartbeatsCache.heartbeats),i=Fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function Og(){return new Date().toISOString().substring(0,10)}function jA(t,e=OA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A1()?C1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lg(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}function UA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zA(t){Zs(new Jr("platform-logger",e=>new Z1(e),"PRIVATE")),Zs(new Jr("heartbeat",e=>new MA(e),"PRIVATE")),ur(rd,bg,t),ur(rd,bg,"esm2020"),ur("fire-js","")}zA("");function UE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=UE,zE=new qo("auth","Firebase",UE());/**
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
 */const zl=new If("@firebase/auth");function $A(t,...e){zl.logLevel<=re.WARN&&zl.warn(`Auth (${ci}): ${t}`,...e)}function il(t,...e){zl.logLevel<=re.ERROR&&zl.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw Cf(t,...e)}function rn(t,...e){return Cf(t,...e)}function BE(t,e,n){const r={...BA(),[e]:n};return new qo("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return BE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zE.create(t,...e)}function G(t,e,...n){if(!t)throw Cf(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function Nn(t,e){t||gn(e)}/**
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
 */function od(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qA(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qA()||w1()||"connection"in navigator)?navigator.onLine:!0}function HA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=_1()||T1()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $E{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QA=new Go(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return qE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Wo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return E1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ho(t.emulatorConfig.host)&&(c.credentials="include"),$E.fetch()(await WE(t,t.config.apiHost,n,l),c)})}async function qE(t,e,n){t._canInitEmulator=!1;const r={...GA,...e};try{const s=new JA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw BE(t,f,c);Ht(t,f)}}catch(s){if(s instanceof Dn)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function Ko(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function WE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?kf(t.config,s):`${t.config.apiScheme}://${s}`;return KA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function YA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),QA.get())})}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function jg(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZA(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
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
 */async function eC(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function Bl(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tC(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Nf(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:uo(Hc(s.auth_time)),issuedAtTime:uo(Hc(s.iat)),expirationTime:uo(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=RE(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fg(t){const e=Nf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&nC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $l(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Do(t,Bl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?HE(s.providerUserInfo):[],o=iC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ad(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function sC(t){const e=Me(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function HE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function oC(t,e){const n=await qE(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await WE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ho(t.emulatorConfig.host)&&(u.credentials="include"),$E.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aC(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Fg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ad(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tC(this,e)}reload(){return sC(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Do(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:k,stsTokenManager:P}=n;G(m&&P,e,"internal-error");const x=zs.fromJSON(this.name,P);G(typeof m=="string",e,"internal-error"),Bn(r,e.name),Bn(s,e.name),G(typeof y=="boolean",e,"internal-error"),G(typeof C=="boolean",e,"internal-error"),Bn(i,e.name),Bn(o,e.name),Bn(l,e.name),Bn(u,e.name),Bn(c,e.name),Bn(f,e.name);const A=new zt({uid:m,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:c,lastLoginAt:f});return k&&Array.isArray(k)&&(A.providerData=k.map(w=>({...w}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new zs;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $l(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?HE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zs;l.updateFromIdToken(r);const u=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ad(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Ug=new Map;function yn(t){Nn(t instanceof Function,"Expected a class definition");let e=Ug.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ug.set(t,e),e)}/**
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
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const zg=GE;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bl(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(yn(zg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||yn(zg);const o=ol(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const y=await Bl(e,{idToken:f}).catch(()=>{});if(!y)break;m=await zt._fromGetAccountInfoResponse(e,y,f)}else m=zt._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Bs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Bs(i,e,r))}}/**
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
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(ew(e))return"Webos";if(QE(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(XE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KE(t=nt()){return/firefox\//i.test(t)}function QE(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=nt()){return/crios\//i.test(t)}function JE(t=nt()){return/iemobile/i.test(t)}function XE(t=nt()){return/android/i.test(t)}function ZE(t=nt()){return/blackberry/i.test(t)}function ew(t=nt()){return/webos/i.test(t)}function Rf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lC(t=nt()){var e;return Rf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uC(){return I1()&&document.documentMode===10}function tw(t=nt()){return Rf(t)||XE(t)||ew(t)||ZE(t)||/windows phone/i.test(t)||JE(t)}/**
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
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=Bg(nt());break;case"Worker":n=`${Bg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class cC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hC(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const dC=6;class fC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new cC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bl(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(En(this));const n=e?Me(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new fC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$A(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ss(t){return Me(t)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=x1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mC(t){Su=t}function rw(t){return Su.loadJS(t)}function gC(){return Su.recaptchaEnterpriseScript}function yC(){return Su.gapiScript}function _C(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vC{constructor(){this.enterprise=new EC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class EC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wC="recaptcha-enterprise",sw="NO_RECAPTCHA";class TC{constructor(e){this.type=wC,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new XA(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(sw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&jg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gC();u.length!==0&&(u+=l),rw(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function qg(t,e,n,r=!1,s=!1){const i=new TC(t);let o;if(s)o=sw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ld(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await qg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function IC(t,e){const n=Af(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cn(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function SC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AC(t,e,n){const r=ss(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=iw(e),{host:o,port:l}=CC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Cn(c,r.config.emulator)&&Cn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ho(o)?DE(`${i}//${o}${u}`):kC()}function iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CC(t){const e=iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wg(o)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function NC(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RC(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
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
 */async function PC(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function xC(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
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
 */class Vo extends Pf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,n,"signInWithPassword",RC);case"emailLink":return PC(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,r,"signUpPassword",NC);case"emailLink":return xC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $s(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
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
 */const bC="http://localhost";class Xr extends Pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:bC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
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
 */function DC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VC(t){const e=Ki(Qi(t)).link,n=e?Ki(Qi(e)).deep_link_id:null,r=Ki(Qi(t)).deep_link_id;return(r?Ki(Qi(r)).link:null)||r||n||e||t}class xf{constructor(e){const n=Ki(Qi(e)),r=n.apiKey??null,s=n.oobCode??null,i=DC(n.mode??null);G(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VC(e);try{return new xf(n)}catch{return null}}}/**
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
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xf.parseLink(n);return G(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Qo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Qo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Qo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function OC(t,e){return Ko(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
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
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=Hg(r);return new Zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hg(r);return new Zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ql extends Dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function LC(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
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
 */async function MC(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Do(t,aw(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Nf(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Zr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function lw(t,e,n=!1){if(Nt(t.app))return Promise.reject(En(t));const r="signIn",s=await aw(t,r,e),i=await Zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jC(t,e){return lw(ss(t),e)}/**
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
 */async function uw(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FC(t,e,n){if(Nt(t.app))return Promise.reject(En(t));const r=ss(t),o=await ld(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&uw(t),u}),l=await Zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UC(t,e,n){return Nt(t.app)?Promise.reject(En(t)):jC(Me(t),hi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uw(t),r})}function zC(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function BC(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function $C(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function qC(t){return Me(t).signOut()}const Wl="__sak";/**
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
 */class cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WC=1e3,HC=10;class hw extends cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hw.type="LOCAL";const GC=hw;/**
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
 */class dw extends cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dw.type="SESSION";const fw=dw;/**
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
 */function KC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await KC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
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
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=bf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function YC(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function JC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZC(){return pw()?self:null}/**
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
 */const mw="firebaseLocalStorageDb",ek=1,Hl="firebaseLocalStorage",gw="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function tk(){const t=indexedDB.deleteDatabase(mw);return new Yo(t).toPromise()}function ud(){const t=indexedDB.open(mw,ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:gw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await tk(),e(await ud()))})})}async function Gg(t,e,n){const r=Cu(t,!0).put({[gw]:e,value:n});return new Yo(r).toPromise()}async function nk(t,e){const n=Cu(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function Kg(t,e){const n=Cu(t,!0).delete(e);return new Yo(n).toPromise()}const rk=800,sk=3;class yw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(ZC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await JC(),!this.activeServiceWorker)return;this.sender=new QC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await Gg(e,Wl,"1"),await Kg(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cu(s,!1).getAll();return new Yo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yw.type="LOCAL";const ik=yw;new Go(3e4,6e4);/**
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
 */function ok(t,e){return e?yn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Df extends Pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ak(t){return lw(t.auth,new Df(t),t.bypassAuthState)}function lk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),MC(n,new Df(t),t.bypassAuthState)}async function uk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),LC(n,new Df(t),t.bypassAuthState)}/**
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
 */class _w{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ak;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:Ht(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ck=new Go(2e3,1e4);class Vs extends _w{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}Vs.currentPopupAction=null;/**
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
 */const hk="pendingRedirect",al=new Map;class dk extends _w{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fk(t,e){const n=gk(e),r=mk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pk(t,e){al.set(t._key(),e)}function mk(t){return yn(t._redirectPersistence)}function gk(t){return ol(hk,t.config.apiKey,t.name)}async function yk(t,e,n=!1){if(Nt(t.app))return Promise.reject(En(t));const r=ss(t),s=ok(r,e),o=await new dk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _k=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_k&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vw(t);default:return!1}}/**
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
 */async function wk(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ik=/^https?/;async function Sk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ak(n))return}catch{}Ht(t,"unauthorized-domain")}function Ak(t){const e=od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ik.test(n))return!1;if(Tk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new Go(3e4,6e4);function Yg(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kk(t){return new Promise((e,n)=>{var s,i,o;function r(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(rn(t,"network-request-failed"))},timeout:Ck.get()})}if((i=(s=sn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=sn().gapi)!=null&&o.load)r();else{const l=_C("iframefcb");return sn()[l]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},rw(`${yC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ll=null,e})}let ll=null;function Nk(t){return ll=ll||kk(t),ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Go(5e3,15e3),Pk="__/auth/iframe",xk="emulator/auth/iframe",bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kf(e,xk):`https://${t.config.authDomain}/${Pk}`,r={apiKey:e.apiKey,appName:t.name,v:ci},s=Dk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wo(r).slice(1)}`}async function Ok(t){const e=await Nk(t),n=sn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Vk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(o)},Rk.get());function u(){sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mk=500,jk=600,Fk="_blank",Uk="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(t,e,n,r=Mk,s=jk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Lk,width:r.toString(),height:s.toString(),top:i,left:o},c=nt().toLowerCase();n&&(l=YE(c)?Fk:n),KE(c)&&(e=e||Uk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[C,k])=>`${y}${C}=${k},`,"");if(lC(c)&&l!=="_self")return Bk(e||"",l),new Jg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new Jg(m)}function Bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $k="__/auth/handler",qk="emulator/auth/handler",Wk=encodeURIComponent("fac");async function Xg(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:s};if(e instanceof ow){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",P1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Qo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Wk}=${encodeURIComponent(u)}`:"";return`${Hk(t)}?${Wo(l).slice(1)}${c}`}function Hk({config:t}){return t.emulator?kf(t,qk):`https://${t.authDomain}/${$k}`}/**
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
 */const Gc="webStorageSupport";class Gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fw,this._completeRedirectFn=yk,this._overrideRedirectResult=pk}async _openPopup(e,n,r,s){var o;Nn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Xg(e,n,r,od(),s);return zk(e,i,bf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xg(e,n,r,od(),s);return YC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ok(e),r=new vk(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Gc];i!==void 0&&n(!!i),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tw()||QE()||Rf()}}const Kk=Gk;var Zg="@firebase/auth",ey="1.13.1";/**
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
 */class Qk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Yk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jk(t){Zs(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},c=new pC(r,s,i,u);return SC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zs(new Jr("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new Qk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(Zg,ey,Yk(t)),ur(Zg,ey,"esm2020")}/**
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
 */const Xk=5*60,Zk=bE("authIdTokenMaxAge")||Xk;let ty=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zk)return;const s=n==null?void 0:n.token;ty!==s&&(ty=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tN(t=ME()){const e=Af(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IC(t,{popupRedirectResolver:Kk,persistence:[ik,GC,fw]}),r=bE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eN(i.toString());BC(n,o,()=>o(n.currentUser)),zC(n,l=>o(l))}}const s=PE("auth");return s&&AC(n,`http://${s}`),n}function nN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jk("Browser");var rN="firebase",sN="12.13.0";/**
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
 */ur(rN,sN,"app");var ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,Ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function g(){}g.prototype=v.prototype,I.F=v.prototype,I.prototype=new g,I.prototype.constructor=I,I.D=function(T,R,N){for(var E=Array(arguments.length-2),we=2;we<arguments.length;we++)E[we-2]=arguments[we];return v.prototype[R].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,g){g||(g=0);const T=Array(16);if(typeof v=="string")for(var R=0;R<16;++R)T[R]=v.charCodeAt(g++)|v.charCodeAt(g++)<<8|v.charCodeAt(g++)<<16|v.charCodeAt(g++)<<24;else for(R=0;R<16;++R)T[R]=v[g++]|v[g++]<<8|v[g++]<<16|v[g++]<<24;v=I.g[0],g=I.g[1],R=I.g[2];let N=I.g[3],E;E=v+(N^g&(R^N))+T[0]+3614090360&4294967295,v=g+(E<<7&4294967295|E>>>25),E=N+(R^v&(g^R))+T[1]+3905402710&4294967295,N=v+(E<<12&4294967295|E>>>20),E=R+(g^N&(v^g))+T[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=g+(v^R&(N^v))+T[3]+3250441966&4294967295,g=R+(E<<22&4294967295|E>>>10),E=v+(N^g&(R^N))+T[4]+4118548399&4294967295,v=g+(E<<7&4294967295|E>>>25),E=N+(R^v&(g^R))+T[5]+1200080426&4294967295,N=v+(E<<12&4294967295|E>>>20),E=R+(g^N&(v^g))+T[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=g+(v^R&(N^v))+T[7]+4249261313&4294967295,g=R+(E<<22&4294967295|E>>>10),E=v+(N^g&(R^N))+T[8]+1770035416&4294967295,v=g+(E<<7&4294967295|E>>>25),E=N+(R^v&(g^R))+T[9]+2336552879&4294967295,N=v+(E<<12&4294967295|E>>>20),E=R+(g^N&(v^g))+T[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=g+(v^R&(N^v))+T[11]+2304563134&4294967295,g=R+(E<<22&4294967295|E>>>10),E=v+(N^g&(R^N))+T[12]+1804603682&4294967295,v=g+(E<<7&4294967295|E>>>25),E=N+(R^v&(g^R))+T[13]+4254626195&4294967295,N=v+(E<<12&4294967295|E>>>20),E=R+(g^N&(v^g))+T[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=g+(v^R&(N^v))+T[15]+1236535329&4294967295,g=R+(E<<22&4294967295|E>>>10),E=v+(R^N&(g^R))+T[1]+4129170786&4294967295,v=g+(E<<5&4294967295|E>>>27),E=N+(g^R&(v^g))+T[6]+3225465664&4294967295,N=v+(E<<9&4294967295|E>>>23),E=R+(v^g&(N^v))+T[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=g+(N^v&(R^N))+T[0]+3921069994&4294967295,g=R+(E<<20&4294967295|E>>>12),E=v+(R^N&(g^R))+T[5]+3593408605&4294967295,v=g+(E<<5&4294967295|E>>>27),E=N+(g^R&(v^g))+T[10]+38016083&4294967295,N=v+(E<<9&4294967295|E>>>23),E=R+(v^g&(N^v))+T[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=g+(N^v&(R^N))+T[4]+3889429448&4294967295,g=R+(E<<20&4294967295|E>>>12),E=v+(R^N&(g^R))+T[9]+568446438&4294967295,v=g+(E<<5&4294967295|E>>>27),E=N+(g^R&(v^g))+T[14]+3275163606&4294967295,N=v+(E<<9&4294967295|E>>>23),E=R+(v^g&(N^v))+T[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=g+(N^v&(R^N))+T[8]+1163531501&4294967295,g=R+(E<<20&4294967295|E>>>12),E=v+(R^N&(g^R))+T[13]+2850285829&4294967295,v=g+(E<<5&4294967295|E>>>27),E=N+(g^R&(v^g))+T[2]+4243563512&4294967295,N=v+(E<<9&4294967295|E>>>23),E=R+(v^g&(N^v))+T[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=g+(N^v&(R^N))+T[12]+2368359562&4294967295,g=R+(E<<20&4294967295|E>>>12),E=v+(g^R^N)+T[5]+4294588738&4294967295,v=g+(E<<4&4294967295|E>>>28),E=N+(v^g^R)+T[8]+2272392833&4294967295,N=v+(E<<11&4294967295|E>>>21),E=R+(N^v^g)+T[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=g+(R^N^v)+T[14]+4259657740&4294967295,g=R+(E<<23&4294967295|E>>>9),E=v+(g^R^N)+T[1]+2763975236&4294967295,v=g+(E<<4&4294967295|E>>>28),E=N+(v^g^R)+T[4]+1272893353&4294967295,N=v+(E<<11&4294967295|E>>>21),E=R+(N^v^g)+T[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=g+(R^N^v)+T[10]+3200236656&4294967295,g=R+(E<<23&4294967295|E>>>9),E=v+(g^R^N)+T[13]+681279174&4294967295,v=g+(E<<4&4294967295|E>>>28),E=N+(v^g^R)+T[0]+3936430074&4294967295,N=v+(E<<11&4294967295|E>>>21),E=R+(N^v^g)+T[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=g+(R^N^v)+T[6]+76029189&4294967295,g=R+(E<<23&4294967295|E>>>9),E=v+(g^R^N)+T[9]+3654602809&4294967295,v=g+(E<<4&4294967295|E>>>28),E=N+(v^g^R)+T[12]+3873151461&4294967295,N=v+(E<<11&4294967295|E>>>21),E=R+(N^v^g)+T[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=g+(R^N^v)+T[2]+3299628645&4294967295,g=R+(E<<23&4294967295|E>>>9),E=v+(R^(g|~N))+T[0]+4096336452&4294967295,v=g+(E<<6&4294967295|E>>>26),E=N+(g^(v|~R))+T[7]+1126891415&4294967295,N=v+(E<<10&4294967295|E>>>22),E=R+(v^(N|~g))+T[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=g+(N^(R|~v))+T[5]+4237533241&4294967295,g=R+(E<<21&4294967295|E>>>11),E=v+(R^(g|~N))+T[12]+1700485571&4294967295,v=g+(E<<6&4294967295|E>>>26),E=N+(g^(v|~R))+T[3]+2399980690&4294967295,N=v+(E<<10&4294967295|E>>>22),E=R+(v^(N|~g))+T[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=g+(N^(R|~v))+T[1]+2240044497&4294967295,g=R+(E<<21&4294967295|E>>>11),E=v+(R^(g|~N))+T[8]+1873313359&4294967295,v=g+(E<<6&4294967295|E>>>26),E=N+(g^(v|~R))+T[15]+4264355552&4294967295,N=v+(E<<10&4294967295|E>>>22),E=R+(v^(N|~g))+T[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=g+(N^(R|~v))+T[13]+1309151649&4294967295,g=R+(E<<21&4294967295|E>>>11),E=v+(R^(g|~N))+T[4]+4149444226&4294967295,v=g+(E<<6&4294967295|E>>>26),E=N+(g^(v|~R))+T[11]+3174756917&4294967295,N=v+(E<<10&4294967295|E>>>22),E=R+(v^(N|~g))+T[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=g+(N^(R|~v))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const g=v-this.blockSize,T=this.C;let R=this.h,N=0;for(;N<v;){if(R==0)for(;N<=g;)s(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(T[R++]=I.charCodeAt(N++),R==this.blockSize){s(this,T),R=0;break}}else for(;N<v;)if(T[R++]=I[N++],R==this.blockSize){s(this,T),R=0;break}}this.h=R,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)I[v++]=this.g[g]>>>T&255;return I};function i(I,v){var g=l;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=v(I)}function o(I,v){this.h=v;const g=[];let T=!0;for(let R=I.length-1;R>=0;R--){const N=I[R]|0;T&&N==v||(g[R]=N,T=!1)}this.g=g}var l={};function u(I){return-128<=I&&I<128?i(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return x(c(-I));const v=[];let g=1;for(let T=0;I>=g;T++)v[T]=I/g|0,g*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return x(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=c(Math.pow(v,8));let T=m;for(let N=0;N<I.length;N+=8){var R=Math.min(8,I.length-N);const E=parseInt(I.substring(N,N+R),v);R<8?(R=c(Math.pow(v,R)),T=T.j(R).add(c(E))):(T=T.j(g),T=T.add(c(E)))}return T}var m=u(0),y=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();let I=0,v=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);I+=(T>=0?T:4294967296+T)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(P(this))return"-"+x(this).toString(I);const v=c(Math.pow(I,6));var g=this;let T="";for(;;){const R=V(g,v).g;g=A(g,R.j(v));let N=((g.g.length>0?g.g[0]:g.h)>>>0).toString(I);if(g=R,k(g))return N+T;for(;N.length<6;)N="0"+N;T=N+T}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=A(this,I),P(I)?-1:k(I)?0:1};function x(I){const v=I.g.length,g=[];for(let T=0;T<v;T++)g[T]=~I.g[T];return new o(g,~I.h).add(y)}t.abs=function(){return P(this)?x(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),g=[];let T=0;for(let R=0;R<=v;R++){let N=T+(this.i(R)&65535)+(I.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);T=E>>>16,N&=65535,E&=65535,g[R]=E<<16|N}return new o(g,g[g.length-1]&-2147483648?-1:0)};function A(I,v){return I.add(x(v))}t.j=function(I){if(k(this)||k(I))return m;if(P(this))return P(I)?x(this).j(x(I)):x(x(this).j(I));if(P(I))return x(this.j(x(I)));if(this.l(C)<0&&I.l(C)<0)return c(this.m()*I.m());const v=this.g.length+I.g.length,g=[];for(var T=0;T<2*v;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let R=0;R<I.g.length;R++){const N=this.i(T)>>>16,E=this.i(T)&65535,we=I.i(R)>>>16,hn=I.i(R)&65535;g[2*T+2*R]+=E*hn,w(g,2*T+2*R),g[2*T+2*R+1]+=N*hn,w(g,2*T+2*R+1),g[2*T+2*R+1]+=E*we,w(g,2*T+2*R+1),g[2*T+2*R+2]+=N*we,w(g,2*T+2*R+2)}for(I=0;I<v;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=v;I<2*v;I++)g[I]=0;return new o(g,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function S(I,v){this.g=I,this.h=v}function V(I,v){if(k(v))throw Error("division by zero");if(k(I))return new S(m,m);if(P(I))return v=V(x(I),v),new S(x(v.g),x(v.h));if(P(v))return v=V(I,x(v)),new S(x(v.g),v.h);if(I.g.length>30){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var g=y,T=v;T.l(I)<=0;)g=j(g),T=j(T);var R=U(g,1),N=U(T,1);for(T=U(T,2),g=U(g,2);!k(T);){var E=N.add(T);E.l(I)<=0&&(R=R.add(g),N=E),T=U(T,1),g=U(g,1)}return v=A(I,R.j(v)),new S(R,v)}for(R=m;I.l(v)>=0;){for(g=Math.max(1,Math.floor(I.m()/v.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),N=c(g),E=N.j(v);P(E)||E.l(I)>0;)g-=T,N=c(g),E=N.j(v);k(N)&&(N=y),R=R.add(N),I=A(I,E)}return new S(R,I)}t.B=function(I){return V(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)&I.i(T);return new o(g,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)|I.i(T);return new o(g,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)^I.i(T);return new o(g,this.h^I.h)};function j(I){const v=I.g.length+1,g=[];for(let T=0;T<v;T++)g[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(g,I.h)}function U(I,v){const g=v>>5;v%=32;const T=I.g.length-g,R=[];for(let N=0;N<T;N++)R[N]=v>0?I.i(N+g)>>>v|I.i(N+g+1)<<32-v:I.i(N+g);return new o(R,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ew=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,cr=o}).apply(typeof ny<"u"?ny:typeof self<"u"?self:typeof window<"u"?window:{});var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ww,Yi,Tw,ul,cd,Iw,Sw,Aw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ja=="object"&&ja];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in d))break e;d=d[b]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,b,D){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[b].apply(_,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const D=b.length||0;a.length=d+D;for(let z=0;z<D;z++)a[d+z]=b[z]}else a.push(b)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){o.setTimeout(()=>{throw a},0)}function A(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,d){const _=S.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var S=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,I=new w,v=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(g)}};function g(){for(var a;a=A();){try{a.h.call(a.g)}catch(d){x(d)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function we(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(we,R),we.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(Math.random()*1e6|0),yi=0;function _i(a,h,d,_,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=b,this.key=++yi,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(a,h){let d,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(d in _)a[d]=_[d];for(let D=0;D<Ce.length;D++)d=Ce[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,_,b){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=Lt(a,h,_,b);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new _i(h,this.src,D,!!_,b),h.fa=d,a.push(h)),h};function Rr(a,h){const d=h.type;if(d in a.g){var _=a.g[d],b=Array.prototype.indexOf.call(_,h,void 0),D;(D=b>=0)&&Array.prototype.splice.call(_,b,1),D&&(q(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Lt(a,h,d,_){for(let b=0;b<a.length;++b){const D=a[b];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==_)return b}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),Ku={};function Ep(a,h,d,_,b){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Ep(a,h[D],d,_,b);return null}return d=Ip(d),a&&a[hn]?a.J(h,d,l(_)?!!_.capture:!1,b):o0(a,h,d,!1,_,b)}function o0(a,h,d,_,b,D){if(!h)throw Error("Invalid event type");const z=l(b)?!!b.capture:!!b;let Z=Yu(a);if(Z||(a[Vn]=Z=new At(a)),d=Z.add(h,d,_,z,D),d.proxy)return d;if(_=a0(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)N||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),_,b);else if(a.attachEvent)a.attachEvent(Tp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function a0(){function a(d){return h.call(a.src,a.listener,d)}const h=l0;return a}function wp(a,h,d,_,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)wp(a,h[D],d,_,b);else _=l(_)?!!_.capture:!!_,d=Ip(d),a&&a[hn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=Lt(h,d,_,b),d>-1&&(q(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Yu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Lt(h,d,_,b)),(d=a>-1?h[a]:null)&&Qu(d))}function Qu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[hn])Rr(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(Tp(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=Yu(h))?(Rr(d,a),d.h==0&&(d.src=null,h[Vn]=null)):q(a)}}}function Tp(a){return a in Ku?Ku[a]:Ku[a]="on"+a}function l0(a,h){if(a.da)a=!0;else{h=new we(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&Qu(a),a=d.call(_,h)}return a}function Yu(a){return a=a[Vn],a instanceof At?a:null}var Ju="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ip(a){return typeof a=="function"?a:(a[Ju]||(a[Ju]=function(h){return a.handleEvent(h)}),a[Ju])}function Ke(){T.call(this),this.i=new At(this),this.M=this,this.G=null}m(Ke,T),Ke.prototype[hn]=!0,Ke.prototype.removeEventListener=function(a,h,d,_){wp(this,a,h,d,_)};function rt(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var b=h;h=new R(_,a),Nr(h,b)}b=!0;let D,z;if(d)for(z=d.length-1;z>=0;z--)D=h.g=d[z],b=la(D,_,!0,h)&&b;if(D=h.g=a,b=la(D,_,!0,h)&&b,b=la(D,_,!1,h)&&b,d)for(z=0;z<d.length;z++)D=h.g=d[z],b=la(D,_,!1,h)&&b}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)q(d[_]);delete a.g[h],a.h--}}this.G=null},Ke.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Ke.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function la(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let D=0;D<h.length;++D){const z=h[D];if(z&&!z.da&&z.capture==d){const Z=z.listener,De=z.ha||z.src;z.fa&&Rr(a.i,z),b=Z.call(De,_)!==!1&&b}}return b&&!_.defaultPrevented}function u0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Sp(a){a.g=u0(()=>{a.g=null,a.i&&(a.i=!1,Sp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class c0 extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(a){T.call(this),this.h=a,this.g={}}m(vi,T);var Ap=[];function Cp(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&Qu(h)},a),a.g={}}vi.prototype.N=function(){vi.Z.N.call(this),Cp(this)},vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=o.JSON.stringify,h0=o.JSON.parse,d0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kp(){}function Np(){}var Ei={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zu(){R.call(this,"d")}m(Zu,R);function ec(){R.call(this,"c")}m(ec,R);var Pr={},Rp=null;function ua(){return Rp=Rp||new Ke}Pr.Ia="serverreachability";function Pp(a){R.call(this,Pr.Ia,a)}m(Pp,R);function wi(a){const h=ua();rt(h,new Pp(h))}Pr.STAT_EVENT="statevent";function xp(a,h){R.call(this,Pr.STAT_EVENT,a),this.stat=h}m(xp,R);function st(a){const h=ua();rt(h,new xp(h,a))}Pr.Ja="timingevent";function bp(a,h){R.call(this,Pr.Ja,a),this.size=h}m(bp,R);function Ti(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ii(){this.g=!0}Ii.prototype.ua=function(){this.g=!1};function f0(a,h,d,_,b,D){a.info(function(){if(a.g)if(D){var z="",Z=D.split("&");for(let le=0;le<Z.length;le++){var De=Z[le].split("=");if(De.length>1){const je=De[0];De=De[1];const Yt=je.split("_");z=Yt.length>=2&&Yt[1]=="type"?z+(je+"="+De+"&"):z+(je+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function p0(a,h,d,_,b,D,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+d+`
`+D+" "+z})}function fs(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+g0(a,d)+(_?" "+_:"")})}function m0(a,h){a.info(function(){return"TIMEOUT: "+h})}Ii.prototype.info=function(){};function g0(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return Xu(D)}catch{return h}}var ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Dp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vp;function tc(){}m(tc,kp),tc.prototype.g=function(){return new XMLHttpRequest},Vp=new tc;function Si(a){return encodeURIComponent(String(a))}function y0(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function On(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new vi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Op}function Op(){this.i=null,this.g="",this.h=!1}var Lp={},nc={};function rc(a,h,d){a.M=1,a.A=da(Qt(h)),a.u=d,a.R=!0,Mp(a,null)}function Mp(a,h){a.F=Date.now(),ha(a),a.B=Qt(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Yp(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Op,a.g=pm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new c0(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Ap[0]=b.toString()),b=Ap);for(let D=0;D<b.length;D++){const z=Ep(d,b[D],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),wi(),f0(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const h=this.O;h&&jn(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Z=jn(this.g),De=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||rm(this.g)))){this.K||Z!=4||De==7||(De==8||le<=0?wi(3):wi(2)),sc(this);var h=this.g.ca();this.X=h;var d=_0(this);if(this.o=h==200,p0(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(_)){var D=_;break t}}D=null}if(a=D)fs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ic(this,a);else{this.o=!1,this.m=3,st(12),xr(this),Ai(this);break e}}if(this.R){a=!0;let je;for(;!this.K&&this.C<d.length;)if(je=v0(this,d),je==nc){Z==4&&(this.m=4,st(14),a=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Lp){this.m=4,st(15),fs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else fs(this.i,this.l,je,null),ic(this,je);if(jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)fs(this.i,this.l,d,"[Invalid Chunked Response]"),xr(this),Ai(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),fc(z),z.P=!0,st(11))}}else fs(this.i,this.l,d,null),ic(this,d);Z==4&&xr(this),this.o&&!this.K&&(Z==4?cm(this.j,this):(this.o=!1,ha(this)))}else D0(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),xr(this),Ai(this)}}}catch{}finally{}};function _0(a){if(!jp(a))return a.g.la();const h=rm(a.g);if(h==="")return"";let d="";const _=h.length,b=jn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return xr(a),Ai(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<_;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(b&&D==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function v0(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?nc:(d=Number(h.substring(d,_)),isNaN(d)?Lp:(_+=1,_+d>h.length?nc:(h=h.slice(_,_+d),a.C=_+d,h)))}On.prototype.cancel=function(){this.K=!0,xr(this)};function ha(a){a.T=Date.now()+a.H,Fp(a,a.H)}function Fp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ti(c(a.aa,a),h)}function sc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(m0(this.i,this.B),this.M!=2&&(wi(),st(17)),xr(this),this.m=2,Ai(this)):Fp(this,this.T-a)};function Ai(a){a.j.I==0||a.K||cm(a.j,a)}function xr(a){sc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Cp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ic(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||oc(d.h,a))){if(!a.L&&oc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;dc(d),st(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ti(c(d.Va,d),6e3));Bp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Dr(d,11)}else if((a.L||d.g==a)&&ya(d),!E(h))for(b=d.Ba.g.parse(h),h=0;h<b.length;h++){let le=b[h];const je=le[0];if(!(je<=d.K))if(d.K=je,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Yt=le[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Vr=le[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const Fn=le[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(_=1.5*Fn,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Un=a.g;if(Un){const va=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var D=_.h;D.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ac(D,D.h),D.h=null))}if(_.G){const pc=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(_.wa=pc,he(_.J,_.G,pc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var z=a;if(_.na=fm(_,_.L?_.ba:null,_.W),z.L){$p(_.h,z);var Z=z,De=_.O;De&&(Z.H=De),Z.D&&(sc(Z),ha(Z)),_.g=z}else lm(_);d.i.length>0&&ga(d)}else le[0]!="stop"&&le[0]!="close"||Dr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Dr(d,7):hc(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}wi(4)}catch{}}var E0=class{constructor(a,h){this.g=a,this.map=h}};function Up(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bp(a){return a.h?1:a.g?a.g.size:0}function oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ac(a,h){a.g?a.g.add(h):a.h=h}function $p(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Up.prototype.cancel=function(){if(this.i=qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return C(a.i)}var Wp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w0(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let b,D=null;_>=0?(b=a[d].substring(0,_),D=a[d].substring(_+1)):b=a[d],h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ln?(this.l=a.l,Ci(this,a.j),this.o=a.o,this.g=a.g,ki(this,a.u),this.h=a.h,lc(this,Jp(a.i)),this.m=a.m):a&&(h=String(a).match(Wp))?(this.l=!1,Ci(this,h[1]||"",!0),this.o=Ni(h[2]||""),this.g=Ni(h[3]||"",!0),ki(this,h[4]),this.h=Ni(h[5]||"",!0),lc(this,h[6]||"",!0),this.m=Ni(h[7]||"")):(this.l=!1,this.i=new Pi(null,this.l))}Ln.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ri(h,Hp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ri(h,Hp,!0),"@"),a.push(Si(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ri(d,d.charAt(0)=="/"?S0:I0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ri(d,C0)),a.join("")},Ln.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?Ci(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)ki(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const D=[];for(let z=0;z<b.length;){const Z=b[z++];Z=="."?_&&z==b.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),_&&z==b.length&&D.push("")):(D.push(Z),_=!0)}_=D.join("/")}else _=b}return d?h.h=_:d=a.i.toString()!=="",d?lc(h,Jp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new Ln(a)}function Ci(a,h,d){a.j=d?Ni(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ki(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function lc(a,h,d){h instanceof Pi?(a.i=h,k0(a.i,a.l)):(d||(h=Ri(h,A0)),a.i=new Pi(h,a.l))}function he(a,h,d){a.i.set(h,d)}function da(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ni(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ri(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,T0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function T0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hp=/[#\/\?@]/g,I0=/[#\?:]/g,S0=/[#\?]/g,A0=/[#\?@]/g,C0=/#/g;function Pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&w0(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Pi.prototype,t.add=function(a,h){br(this),this.i=null,a=ps(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Gp(a,h){br(a),h=ps(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Kp(a,h){return br(a),h=ps(a,h),a.g.has(h)}t.forEach=function(a,h){br(this),this.g.forEach(function(d,_){d.forEach(function(b){a.call(h,b,_,this)},this)},this)};function Qp(a,h){br(a);let d=[];if(typeof h=="string")Kp(a,h)&&(d=d.concat(a.g.get(ps(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return br(this),this.i=null,a=ps(this,a),Kp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Qp(this,a),a.length>0?String(a[0]):h):h};function Yp(a,h,d){Gp(a,h),d.length>0&&(a.i=null,a.g.set(ps(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const b=Si(d);d=Qp(this,d);for(let D=0;D<d.length;D++){let z=b;d[D]!==""&&(z+="="+Si(d[D])),a.push(z)}}return this.i=a.join("&")};function Jp(a){const h=new Pi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ps(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function k0(a,h){h&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,_){const b=_.toLowerCase();_!=b&&(Gp(this,_),Yp(this,b,d))},a)),a.j=h}function N0(a,h){const d=new Ii;if(o.Image){const _=new Image;_.onload=f(Mn,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Mn,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Mn,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Mn,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function R0(a,h){const d=new Ii,_=new AbortController,b=setTimeout(()=>{_.abort(),Mn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(b),D.ok?Mn(d,"TestPingServer: ok",!0,h):Mn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Mn(d,"TestPingServer: error",!1,h)})}function Mn(a,h,d,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(d)}catch{}}function P0(){this.g=new d0}function uc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(uc,kp),uc.prototype.g=function(){return new fa(this.i,this.h)};function fa(a,h){Ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(fa,Ke),t=fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xi(this):bi(this),this.readyState==3&&Xp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Na=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,bi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zp(a){let h="";return Q(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function cc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Zp(d),typeof a=="string"?d!=null&&Si(d):he(a,h,d))}function Te(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Te,Ke);var x0=/^https?$/i,b0=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vp.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){em(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)d.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(b0,h,void 0)>=0)||_||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){em(this,D)}};function em(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,tm(a),pa(a)}function tm(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?nm(this):this.Xa())},t.Xa=function(){nm(this)};function nm(a){if(a.h&&typeof i<"u"){if(a.v&&jn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),jn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=D===0){let z=String(a.D).match(Wp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!x0.test(z?z.toLowerCase():"")}d=_}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var b=jn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",tm(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),h0(h)}};function rm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function D0(a){const h={};a=(a.g&&jn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(E(a[_]))continue;var d=y0(a[_]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[b]||[];h[b]=D,D.push(d)}X(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function sm(a){this.za=0,this.i=[],this.j=new Ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Di("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Di("baseRetryDelayMs",5e3,a),this.Za=Di("retryDelaySeedMs",1e4,a),this.Ta=Di("forwardChannelMaxRetries",2,a),this.va=Di("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Up(a&&a.concurrentRequestLimit),this.Ba=new P0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=sm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){st(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=fm(this,null,this.W),ga(this)};function hc(a){if(im(a),a.I==3){var h=a.V++,d=Qt(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),Vi(a,d),h=new On(a,a.j,h),h.M=2,h.A=da(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=pm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ha(h)}dm(a)}function ma(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function im(a){ma(a),a.v&&(o.clearTimeout(a.v),a.v=null),ya(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ga(a){if(!zp(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||v(),U||(j(),U=!0),I.add(h,a),a.D=0}}function V0(a,h){return Bp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ti(c(a.Ea,a,h),hm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new On(this,this.j,a);let D=this.o;if(this.U&&(D?(D=me(D),Nr(D,this.U)):D=this.U),this.u!==null||this.R||(b.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=am(this,b,h),d=Qt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Vi(this,d),D&&(this.R?h="headers="+Si(Zp(D))+"&"+h:this.u&&cc(d,this.u,D)),ac(this.h,b),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),b.U=!0,rc(b,d,null)):rc(b,d,h),this.I=2}}else this.I==3&&(a?om(this,a):this.i.length==0||zp(this.h)||om(this))};function om(a,h){var d;h?d=h.l:d=a.V++;const _=Qt(a.J);he(_,"SID",a.M),he(_,"RID",d),he(_,"AID",a.K),Vi(a,_),a.u&&a.o&&cc(_,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=am(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ac(a.h,d),rc(d,_,h)}function Vi(a,h){a.H&&Q(a.H,function(d,_){he(h,_,d)}),a.l&&Q({},function(d,_){he(h,_,d)})}function am(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=b[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let le=!0;for(let je=0;je<d;je++){var D=b[je].g;const Yt=b[je].map;if(D-=Z,D<0)Z=Math.max(0,b[je].g-100),le=!1;else try{D="req"+D+"_"||"";try{var z=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Vr,Fn]of z){let Un=Fn;l(Fn)&&(Un=Xu(Fn)),De.push(D+Vr+"="+encodeURIComponent(Un))}}catch(Vr){throw De.push(D+"type="+encodeURIComponent("_badmap")),Vr}}catch{_&&_(Yt)}}if(le){z=De.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function lm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||v(),U||(j(),U=!0),I.add(h,a),a.A=0}}function dc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ti(c(a.Da,a),hm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,um(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ti(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),ma(this),um(this))};function fc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function um(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Vi(a,h),a.u&&a.o&&cc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=da(Qt(h)),d.u=null,d.R=!0,Mp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ma(this),dc(this),st(19))};function ya(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function cm(a,h){var d=null;if(a.g==h){ya(a),fc(a),a.g=null;var _=2}else if(oc(a.h,h))d=h.G,$p(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;_=ua(),rt(_,new bp(_,d)),ga(a)}else lm(a);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&V0(a,h)||_==2&&dc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function hm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const b=!_;_=new Ln(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ci(_,"https"),da(_),b?N0(_.toString(),d):R0(_.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(h),dm(a),im(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function dm(a){if(a.I=0,a.ja=[],a.l){const h=qp(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function fm(a,h,d){var _=d instanceof Ln?Qt(d):new Ln(d);if(_.g!="")h&&(_.g=h+"."+_.g),ki(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const D=new Ln(null);_&&Ci(D,_),h&&(D.g=h),b&&ki(D,b),d&&(D.h=d),_=D}return d=a.G,h=a.wa,d&&h&&he(_,d,h),he(_,"VER",a.ka),Vi(a,_),_}function pm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new uc({ab:d})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mm(){}t=mm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _a(){}_a.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ke.call(this),this.g=new sm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ms(this)}m(yt,Ke),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){hc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Xu(a),a=d);h.i.push(new E0(h.Ya++,a)),h.I==3&&ga(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,yt.Z.N.call(this)};function gm(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(gm,Zu);function ym(){ec.call(this),this.status=1}m(ym,ec);function ms(a){this.g=a}m(ms,mm),ms.prototype.ra=function(){rt(this.g,"a")},ms.prototype.qa=function(a){rt(this.g,new gm(a))},ms.prototype.pa=function(a){rt(this.g,new ym)},ms.prototype.oa=function(){rt(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Aw=function(){return new _a},Sw=function(){return ua()},Iw=Pr,cd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,ul=ca,Dp.COMPLETE="complete",Tw=Dp,Np.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Yi=Np,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,ww=Te}).apply(typeof ja<"u"?ja:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="12.13.0";function iN(t){di=t}/**
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
 */const es=new If("@firebase/firestore");function _s(){return es.logLevel}function B(t,...e){if(es.logLevel<=re.DEBUG){const n=e.map(Vf);es.debug(`Firestore (${di}): ${t}`,...n)}}function Rn(t,...e){if(es.logLevel<=re.ERROR){const n=e.map(Vf);es.error(`Firestore (${di}): ${t}`,...n)}}function ts(t,...e){if(es.logLevel<=re.WARN){const n=e.map(Vf);es.warn(`Firestore (${di}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cw(t,r,n)}function Cw(t,e,n){let r=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Cw(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class aN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lN{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new kw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class uN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class cN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new uN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ry(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ry(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function hd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Kc(s)===Kc(i)?ee(s,i):Kc(s)?1:-1}return ee(t.length,e.length)}const fN=55296,pN=57343;function Kc(t){const e=t.charCodeAt(0);return e>=fN&&e<=pN}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ee(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):hd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class ue extends Zt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const mN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Zt{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return mN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sy}static keyField(){return new qe([sy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ue.fromString(e))}static fromName(e){return new H(ue.fromString(e).popFirst(5))}static empty(){return new H(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gN(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iy(t){if(!H.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function oy(t){if(H.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!Rw(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=-62135596800,ly=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ly);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ay)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ly}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ay;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:be("string",fe._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function yN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new pr(s,H.empty(),e)}function _N(t){return new pr(t.readTime,t.key,Oo)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Y.min(),H.empty(),Oo)}static max(){return new pr(Y.max(),H.empty(),Oo)}}function vN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const EN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==EN)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function TN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=-1;function Ru(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function IN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="";function SN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=uy(e)),e=AN(t.get(n),e);return uy(e)}function AN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Pw:n+="";break;default:n+=i}}return n}function uy(t){return t+Pw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Le(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bw("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const CN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=CN.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */const Dw="server_timestamp",Vw="__type__",Ow="__previous_value__",Lw="__local_write_time__";function Mf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Vw])==null?void 0:r.stringValue)===Dw}function Pu(t){const e=t.mapValue.fields[Ow];return Mf(e)?Pu(e):e}function Lo(t){const e=mr(t.mapValue.fields[Lw].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Kl="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||Kl}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===Kl}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}function NN(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(t.options.projectId,e)}/**
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
 */const Mw="__type__",RN="__max__",Ua={mapValue:{}},jw="__vector__",Ql="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:xN(t)?9007199254740991:PN(t)?10:11:K(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lo(t).isEqual(Lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),l=mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(cy(o)!==cy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function jo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return dy(t.timestampValue,e.timestampValue);case 4:return dy(Lo(t),Lo(e));case 5:return hd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=gr(i),u=gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ee(ke(i.latitude),ke(o.latitude));return l!==0?l:ee(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,C,k,P;const l=i.fields||{},u=o.fields||{},c=(y=l[Ql])==null?void 0:y.arrayValue,f=(C=u[Ql])==null?void 0:C.arrayValue,m=ee(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:fy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ua.mapValue&&o===Ua.mapValue)return 0;if(i===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=hd(u[m],f[m]);if(y!==0)return y;const C=ti(l[u[m]],c[f[m]]);if(C!==0)return C}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function dy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=mr(t),r=mr(e),s=ee(n.seconds,r.seconds);return s!==0?s:ee(n.nanos,r.nanos)}function fy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return ee(n.length,r.length)}function ni(t){return dd(t)}function dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${dd(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function cl(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+cl(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+cl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,o)=>{s+=i.length+cl(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function py(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fd(t){return!!t&&"integerValue"in t}function jf(t){return!!t&&"arrayValue"in t}function my(t){return!!t&&"nullValue"in t}function gy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function PN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Mw])==null?void 0:r.stringValue)===jw}function co(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return{...t}}function xN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(co(this.value))}}function Fw(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new qe([n]);if(hl(r)){const i=Fw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function yy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function bN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Uw{}class xe extends Uw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VN(e,n,r):n==="array-contains"?new MN(e,r):n==="in"?new jN(e,r):n==="not-in"?new FN(e,r):n==="array-contains-any"?new UN(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ON(e,r):new LN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ti(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Uw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gt(e,n)}matches(e){return zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zw(t){return t.op==="and"}function Bw(t){return DN(t)&&zw(t)}function DN(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function pd(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(Bw(t))return t.filters.map(e=>pd(e)).join(",");{const e=t.filters.map(n=>pd(n)).join(",");return`${t.op}(${e})`}}function $w(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&$w(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function qw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(qw).join(" ,")+"}"}(t):"Filter"}class VN extends xe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class ON extends xe{constructor(e,n){super(e,"in",n),this.keys=Ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LN extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ww(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class MN extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jf(n)&&jo(n.arrayValue,this.value)}}class jN extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class FN extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jo(this.value.arrayValue,n)}}class UN extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
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
 */class zN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function vy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zN(t,e,n,r,s,i,o)}function Ff(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.Te=n}return e.Te}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$w(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_y(t.startAt,e.startAt)&&_y(t.endAt,e.endAt)}function md(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function BN(t,e,n,r,s,i,o,l){return new Xo(t,e,n,r,s,i,o,l)}function xu(t){return new Xo(t)}function Ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $N(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Hw(t){return t.collectionGroup!==null}function ho(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Jl(i,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new Jl(qe.keyField(),r))}return e.Ie}function on(t){const e=J(t);return e.Ee||(e.Ee=qN(e,ho(t))),e.Ee}function qN(t,e){if(t.limitType==="F")return vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jl(s.field,i)});const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gd(t,e){const n=t.filters.concat([e]);return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yd(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return Uf(on(t),on(e))&&t.limitType===e.limitType}function Gw(t){return`${Ff(on(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qw(s)).join(", ")}]`),Ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ho(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=yy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ho(r),s)||r.endAt&&!function(o,l,u){const c=yy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ho(r),s))}(t,e)}function WN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kw(t){return(e,n)=>{let r=!1;for(const s of ho(t)){const i=HN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HN(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?ti(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new ye(H.comparator);function Pn(){return GN}const Qw=new ye(H.comparator);function Ji(...t){let e=Qw;for(const n of t)e=e.insert(n.key,n);return e}function Yw(t){let e=Qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return fo()}function Jw(){return fo()}function fo(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new ye(H.comparator),QN=new Le(H.comparator);function te(...t){let e=QN;for(const n of t)e=e.add(n);return e}const YN=new Le(ee);function JN(){return YN}/**
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
 */function zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function Xw(t){return{integerValue:""+t}}function XN(t,e){return IN(e)?Xw(e):zf(t,e)}/**
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
 */class Vu{constructor(){this._=void 0}}function ZN(t,e,n){return t instanceof Xl?function(s,i){const o={fields:{[Vw]:{stringValue:Dw},[Lw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mf(i)&&(i=Pu(i)),i&&(o.fields[Ow]=i),{mapValue:o}}(n,e):t instanceof ri?eT(t,e):t instanceof si?tT(t,e):function(s,i){const o=Zw(s,i),l=wy(o)+wy(s.Ae);return fd(o)&&fd(s.Ae)?Xw(l):zf(s.serializer,l)}(t,e)}function eR(t,e,n){return t instanceof ri?eT(t,e):t instanceof si?tT(t,e):n}function Zw(t,e){return t instanceof Zl?function(r){return fd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xl extends Vu{}class ri extends Vu{constructor(e){super(),this.elements=e}}function eT(t,e){const n=nT(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class si extends Vu{constructor(e){super(),this.elements=e}}function tT(t,e){let n=nT(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class Zl extends Vu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wy(t){return ke(t.integerValue||t.doubleValue)}function nT(t){return jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.field=e,this.transform=n}}function tR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ri&&s instanceof ri||r instanceof si&&s instanceof si?ei(r.elements,s.elements,un):r instanceof Zl&&s instanceof Zl?un(r.Ae,s.Ae):r instanceof Xl&&s instanceof Xl}(t.transform,e.transform)}class nR{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function sT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bf(t.key,bt.none()):new Zo(t.key,t.data,bt.none());{const n=t.data,r=ht.empty();let s=new Le(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new Et(s.toArray()),bt.none())}}function rR(t,e,n){t instanceof Zo?function(s,i,o){const l=s.value.clone(),u=Iy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!dl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Iy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(iT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof Zo?function(i,o,l,u){if(!dl(i.precondition,o))return l;const c=i.value.clone(),f=Sy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,l,u){if(!dl(i.precondition,o))return l;const c=Sy(i.fieldTransforms,u,o),f=o.data;return f.setAll(iT(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zw(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function Ty(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>tR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends Ou{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends Ou{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eR(o,l,n[s]))}return r}function Sy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZN(i,o,e))}return r}class Bf extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=sT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>Ty(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>Ty(n,r))}}class $f{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $f(e,n,r,s)}}/**
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
 */class aR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,se;function uR(t){switch(t){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function oT(t){if(t===void 0)return Rn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:t})}}(se=Re||(Re={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cR(){return new TextEncoder}/**
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
 */const hR=new cr([4294967295,4294967295],0);function Ay(t){const e=cR().encode(t),n=new Ew;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cr([n,r],0),new cr([s,i],0)]}class qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xi(`Invalid padding: ${n}`);if(r<0)throw new Xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=cr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(cr.fromNumber(r)));return s.compare(hR)===1&&(s=new cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ay(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ay(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ea(Y.min(),s,new ye(ee),Pn(),te())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class aT{constructor(e,n){this.targetId=e,this.Ce=n}}class lT{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ky{constructor(){this.ve=0,this.Fe=Ny(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new ta(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ny()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class dR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pn(),this.Je=za(),this.He=za(),this.Ze=new ye(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(md(i))if(r===0){const o=new H(i.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(u){if(u instanceof bw)return ts("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qf(o,s,i)}catch(u){return ts(u instanceof Xi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&md(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=te();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ea(e,n,this.Ze,this.je,r);return this.je=Pn(),this.Je=za(),this.He=za(),this.Ze=new ye(ee),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ky,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Le(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ky),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function za(){return new ye(H.comparator)}function Ny(){return new ye(H.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},pR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mR={and:"AND",or:"OR"};class gR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return eu(t,e.toTimestamp())}function an(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=mr(n);return new fe(r.seconds,r.nanos)}(t))}function Wf(t,e){return vd(t,e).canonicalString()}function vd(t,e){const n=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cT(t){const e=ue.fromString(t);return oe(mT(e),10190,{key:e.toString()}),e}function Ed(t,e){return Wf(t.databaseId,e.path)}function Qc(t,e){const n=cT(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(dT(n))}function hT(t,e){return Wf(t.databaseId,e)}function _R(t){const e=cT(t);return e.length===4?ue.emptyPath():dT(e)}function wd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dT(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ry(t,e,n){return{name:Ed(t,e),fields:n.value.mapValue.fields}}function vR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ge.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:oT(c.code);return new $(f,c.message||"")}(o);n=new lT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new fl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qc(t,r.document),i=r.readTime?an(r.readTime):Y.min(),o=et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qc(t,r.document),i=r.removedTargetIds||[];n=new fl([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),l=r.targetId;n=new aT(l,o)}}return n}function ER(t,e){let n;if(e instanceof Zo)n={update:Ry(t,e.key,e.value)};else if(e instanceof Bf)n={delete:Ed(t,e.key)};else if(e instanceof kr)n={update:Ry(t,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof iR))return K(16599,{dt:e.type});n={verify:Ed(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function wR(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(Y.min())&&(o=an(i)),new nR(o,s.transformResults||[])}(n,e))):[]}function TR(t,e){return{documents:[hT(t,e.path)]}}function IR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hT(t,s);const i=function(c){if(c.length!==0)return pT(Gt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:Es(y.field),direction:CR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=_d(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function SR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const y=fT(m);return y instanceof Gt&&Bw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(k){return new Jl(ws(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Ru(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,C=m.values||[];return new Yl(C,y)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const y=!m.before,C=m.values||[];return new Yl(C,y)}(n.endAt)),BN(e,s,o,i,l,"F",u,c)}function AR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>fT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function CR(t){return fR[t]}function kR(t){return pR[t]}function NR(t){return mR[t]}function Es(t){return{fieldPath:t.canonicalString()}}function ws(t){return qe.fromServerFormat(t.fieldPath)}function pT(t){return t instanceof xe?function(n){if(n.op==="=="){if(gy(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(my(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gy(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(my(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:kR(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(s=>pT(s));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):K(54877,{filter:t})}function RR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function gT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.yt=e}}function xR(t){const e=SR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
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
 */class bR{constructor(){this.bn=new DR}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(pr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(ue.comparator)).toArray()}}/**
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
 */const Py={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yT=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(yT,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _r(0)}static ar(){return new _r(-1)}}/**
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
 */const xy="LruGarbageCollector",VR=1048576;function by([t,e],[n,r]){const s=ee(t,n);return s===0?ee(e,r):s}class OR{constructor(e){this.Pr=e,this.buffer=new Le(by),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();by(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(xy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){pi(n)?B(xy,"Ignoring IndexedDB error during garbage collection: ",n):await fi(n)}await this.Ar(3e5)})}}class MR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Nu.ce);const r=new OR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Py)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Py):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),_s()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function jR(t,e){return new MR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&po(r.mutation,s,Et.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ji();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pn();const o=fo(),l=function(){return fo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof kr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),po(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new UR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=fo();let s=new ye((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=Jw();f.forEach(y=>{if(!i.has(y)){const C=sT(n.get(y),r.get(y));C!==null&&m.set(y,C),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return $N(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(zr());let l=Oo,u=i;return o.next(c=>L.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:Yw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ji();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ji();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const c=function(m,y){return new Xo(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Ji();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&po(f.mutation,c,Et.empty(),fe.now()),Du(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class BR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:xR(s.bundledQuery),readTime:an(s.readTime)}}(n)),L.resolve()}}/**
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
 */class $R{constructor(){this.overlays=new ye(H.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ye((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=zr(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=zr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aR(n,r));let i=this.Lr.get(n);i===void 0&&(i=te(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class qR{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.kr=new Le(Fe.Kr),this.qr=new Le(Fe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Fe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new ue([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new ue([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=te();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return H.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Le(Fe.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Lf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ee);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new H(i),0);let l=new Le(ee);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.ti=e,this.docs=function(){return new ye(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vN(_N(f),r)<=0||(s.has(f.key)||Du(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GR(this)}getSize(e){return L.resolve(this.size)}}class GR extends FR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.persistence=e,this.ri=new is(n=>Ff(n),Uf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Hf,this.targetCount=0,this.oi=_r._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new _r(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this._i={},this.overlays={},this.ai=new Nu(0),this.ui=!1,this.ui=!0,this.ci=new qR,this.referenceDelegate=e(this),this.li=new KR(this),this.indexManager=new bR,this.remoteDocumentCache=function(s){return new HR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new PR(n),this.Pi=new BR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $R,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new WR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new QR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class QR extends wN{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Ri=new Hf,this.Ai=null}static Vi(e){return new Gf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=H.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class tu{constructor(e,n){this.persistence=e,this.fi=new is(r=>SN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jR(this,n)}static Vi(e,n){return new tu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kf(e,n.fromCache,r,s)}}/**
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
 */class YR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return S1()?8:TN(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(_s()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(_s()<=re.DEBUG&&B("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(_s()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):L.resolve())}gs(e,n){if(Ey(n))return L.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=yd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,yd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Ey(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(_s()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.Ds(e,o,n,yN(s,Oo)).next(l=>l))})}Ss(e,n){let r=new Le(Kw(e));return n.forEach((s,i)=>{Du(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return _s()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",vs(n)),this.fs.getDocumentsMatchingQuery(e,n,pr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Qf="LocalStore",XR=3e8;class ZR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ye(ee),this.Fs=new is(i=>Ff(i),Uf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function eP(t,e,n,r){return new ZR(t,e,n,r)}async function vT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function tP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,y=m.keys();let C=L.resolve();return y.forEach(k=>{C=C.next(()=>f.getEntry(u,k)).next(P=>{const x=c.docVersions.get(k);oe(x!==null,48541),P.version.compareTo(x)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ET(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function nP(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let C=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),s=s.insert(m,C),function(P,x,A){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=XR?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(y,C,f)&&l.push(n.li.updateTargetData(i,C))});let u=Pn(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(rP(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function rP(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Qf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function sP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new _n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Td(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pi(o))throw o;B(Qf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Dy(t,e,n){const r=J(t);let s=Y.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),y=m.Fs.get(f);return y!==void 0?L.resolve(m.vs.get(y)):m.li.getTargetData(c,f)}(r,o,on(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:te())).next(l=>(oP(r,WN(e),l),{documents:l,ks:i})))}function oP(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Vy{constructor(){this.activeTargetIds=JN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.vo=new Vy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lP{Mo(e){}shutdown(){}}/**
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
 */const Oy="ConnectivityMonitor";class Ly{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Oy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Oy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ba=null;function Id(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
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
 */const Yc="RestConnection",uP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Kl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Id(),l=this.Qo(e,n.toUriEncodedString());B(Yc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Ho(c);return this.zo(e,l,u,r,f).then(m=>(B(Yc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ts(Yc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=uP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection",$i=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class qs extends cP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qs.c_){const e=Sw();$i(e,Iw.STAT_EVENT,n=>{n.stat===cd.PROXY?B(Je,"STAT_EVENT: detected buffering proxy"):n.stat===cd.NOPROXY&&B(Je,"STAT_EVENT: detected no buffering proxy")}),qs.c_=!0}}zo(e,n,r,s,i){const o=Id();return new Promise((l,u)=>{const c=new ww;c.setWithCredentials(!0),c.listenOnce(Tw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ul.NO_ERROR:const m=c.getResponseJson();B(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ul.TIMEOUT:B(Je,`RPC '${e}' ${o} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const y=c.getStatus();if(B(Je,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let C=c.getResponseJson();Array.isArray(C)&&(C=C[0]);const k=C==null?void 0:C.error;if(k&&k.status&&k.message){const P=function(A){const w=A.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(k.status);u(new $(P,k.message))}else u(new $(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);B(Je,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Id(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");B(Je,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,y=!1;const C=new hP({Jo:k=>{y?B(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(B(Je,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),B(Je,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Ho:()=>f.close()});return $i(f,Yi.EventType.OPEN,()=>{y||(B(Je,`RPC '${e}' stream ${s} transport opened.`),C.i_())}),$i(f,Yi.EventType.CLOSE,()=>{y||(y=!0,B(Je,`RPC '${e}' stream ${s} transport closed`),C.o_(),this.E_(f))}),$i(f,Yi.EventType.ERROR,k=>{y||(y=!0,ts(Je,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.o_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),$i(f,Yi.EventType.MESSAGE,k=>{var P;if(!y){const x=k.data[0];oe(!!x,16349);const A=x,w=(A==null?void 0:A.error)||((P=A[0])==null?void 0:P.error);if(w){B(Je,`RPC '${e}' stream ${s} received error:`,w);const S=w.status;let V=function(I){const v=Re[I];if(v!==void 0)return oT(v)}(S),j=w.message;S==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ts(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=O.INTERNAL,j="Unknown error status: "+S+" with message "+w.message),y=!0,C.o_(new $(V,j)),f.close()}else B(Je,`RPC '${e}' stream ${s} received:`,x),C.__(x)}}),qs.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Aw()}}/**
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
 */function dP(t){return new qs(t)}function Jc(){return typeof document<"u"?document:null}/**
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
 */function Lu(t){return new gR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs.c_=!1;class wT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="PersistentStream";class TT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(My,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(My,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fP extends TT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=vR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=wd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=md(u)?{documents:TR(i,u)}:{query:IR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=uT(i,o.resumeToken);const c=_d(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=eu(i,o.snapshotVersion.toTimestamp());const c=_d(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=AR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=wd(this.serializer),n.removeTarget=e,this.K_(n)}}class pP extends TT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=wd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ER(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{}class gP extends mP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,vd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,vd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function yP(t,e,n,r){return new gP(t,e,n,r)}class _P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class vP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new _r(1e3),this.Va=new _r(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{os(this)&&(B(cn,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.da.add(4),await na(c),c.ga.set("Unknown"),c.da.delete(4),await Mu(c)}(this))})}),this.ga=new _P(r,s)}}async function Mu(t){if(os(t))for(const e of t.ma)await e(!0)}async function na(t){for(const e of t.ma)await e(!1)}function Sd(t,e){return t.Ea.get(e)||void 0}function IT(t,e){const n=J(t),r=Sd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=Sd(l,u);c!==void 0&&l.Ra.delete(c);const f=function(y,C){return C%2!=0?y.Va.next():y.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);B(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new _n(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Zf(n)?Xf(n):mi(n).O_()&&Jf(n,i)}function Yf(t,e){const n=J(t),r=mi(n),s=Sd(n,e);B(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&ST(n,s),n.Ia.size===0&&(r.O_()?r.L_():os(n)&&n.ga.set("Unknown"))}function Jf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void B(cn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}mi(t).Z_(e)}function ST(t,e){t.pa.$e(e),mi(t).X_(e)}function Xf(t){t.pa=new dR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mi(t).start(),t.ga.ua()}function Zf(t){return os(t)&&!mi(t).x_()&&t.Ia.size>0}function os(t){return J(t).da.size===0}function AT(t){t.pa=void 0}async function EP(t){t.ga.set("Online")}async function wP(t){t.Ia.forEach((e,n)=>{Jf(t,e)})}async function TP(t,e){AT(t),Zf(t)?(t.ga.ha(e),Xf(t)):t.ga.set("Unknown")}async function IP(t,e,n){if(t.ga.set("Online"),e instanceof lT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){B(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nu(t,r)}else if(e instanceof fl?t.pa.Xe(e):e instanceof aT?t.pa.st(e):t.pa.tt(e),!n.isEqual(Y.min()))try{const r=await ET(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const m=i.Ia.get(c);if(!m)return;i.Ia.set(c,m.withResumeToken(Ge.EMPTY_BYTE_STRING,m.snapshotVersion)),ST(i,c);const y=new _n(m.target,c,f,m.sequenceNumber);Jf(i,y)});const u=function(f,m){const y=new Map;m.targetChanges.forEach((k,P)=>{const x=f.Ra.get(P);x!==void 0&&y.set(x,k)});let C=new ye(ee);return m.targetMismatches.forEach((k,P)=>{const x=f.Ra.get(k);x!==void 0&&(C=C.insert(x,P))}),new ea(m.snapshotVersion,y,C,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(cn,"Failed to raise snapshot:",r),await nu(t,r)}}async function nu(t,e,n){if(!pi(e))throw e;t.da.add(1),await na(t),t.ga.set("Offline"),n||(n=()=>ET(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(cn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Mu(t)})}function CT(t,e){return e().catch(n=>nu(t,n,e))}async function ju(t){const e=J(t),n=vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Lf;for(;SP(e);)try{const s=await sP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,AP(e,s)}catch(s){await nu(e,s)}kT(e)&&NT(e)}function SP(t){return os(t)&&t.Ta.length<10}function AP(t,e){t.Ta.push(e);const n=vr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function kT(t){return os(t)&&!vr(t).x_()&&t.Ta.length>0}function NT(t){vr(t).start()}async function CP(t){vr(t).ra()}async function kP(t){const e=vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function NP(t,e,n){const r=t.Ta.shift(),s=$f.from(r,e,n);await CT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ju(t)}async function RP(t,e){e&&vr(t).Y_&&await async function(r,s){if(function(o){return uR(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();vr(r).B_(),await CT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ju(r)}}(t,e),kT(t)&&NT(t)}async function jy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B(cn,"RemoteStore received new credentials");const r=os(n);n.da.add(3),await na(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Mu(n)}async function PP(t,e){const n=J(t);e?(n.da.delete(2),await Mu(n)):e||(n.da.add(2),await na(n),n.ga.set("Unknown"))}function mi(t){return t.ya||(t.ya=function(n,r,s){const i=J(n);return i.sa(),new fP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:EP.bind(null,t),Yo:wP.bind(null,t),t_:TP.bind(null,t),H_:IP.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Zf(t)?Xf(t):t.ga.set("Unknown")):(await t.ya.stop(),AT(t))})),t.ya}function vr(t){return t.wa||(t.wa=function(n,r,s){const i=J(n);return i.sa(),new pP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:CP.bind(null,t),t_:RP.bind(null,t),ta:kP.bind(null,t),na:NP.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await ju(t)):(await t.wa.stop(),t.Ta.length>0&&(B(cn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ep(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),pi(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{static emptySet(e){return new Ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ji(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.Sa=new ye(H.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ii{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ii(e,n,Ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class bP{constructor(){this.queries=Uy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=Uy(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function Uy(){return new is(t=>Gw(t),bu)}async function np(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new xP,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=tp(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&sp(n)}async function rp(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DP(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&sp(n)}function VP(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function sp(t){t.xa.forEach(e=>{e.next()})}var Ad,zy;(zy=Ad||(Ad={})).Ba="default",zy.Cache="cache";class ip{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.key=e}}class PT{constructor(e){this.key=e}}class OP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=Kw(e),this.su=new Ws(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Fy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),C=Du(this.query,m)?m:null,k=!!y&&this.mutatedKeys.has(y.key),P=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let x=!1;y&&C?y.data.isEqual(C.data)?k!==P&&(r.track({type:3,doc:C}),x=!0):this.uu(y,C)||(r.track({type:2,doc:C}),x=!0,(u&&this.iu(C,u)>0||c&&this.iu(C,c)<0)&&(l=!0)):!y&&C?(r.track({type:0,doc:C}),x=!0):y&&!C&&(r.track({type:1,doc:y}),x=!0,(u||c)&&(l=!0)),x&&(C?(o=o.add(C),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,m)=>function(C,k){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:x})}};return P(C)-P(k)}(f.type,m.type)||this.iu(f.doc,m.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new ii(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Fy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new PT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new RT(r))}),n}Tu(e){this.tu=e.ks,this.ru=te();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return ii.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const op="SyncEngine";class LP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MP{constructor(e){this.key=e,this.Eu=!1}}class jP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new is(l=>Gw(l),bu),this.Vu=new Map,this.du=new Set,this.mu=new ye(H.comparator),this.fu=new Map,this.gu=new Hf,this.pu={},this.yu=new Map,this.wu=_r.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function FP(t,e,n=!0){const r=LT(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await xT(r,e,n,!0),s}async function UP(t,e){const n=LT(t);await xT(n,e,!0,!1)}async function xT(t,e,n,r){const s=await iP(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&IT(t.remoteStore,s),l}async function zP(t,e,n,r,s){t.bu=(m,y,C)=>async function(P,x,A,w){let S=x.view._u(A);S.bs&&(S=await Dy(P.localStore,x.query,!1).then(({documents:I})=>x.view._u(I,S)));const V=w&&w.targetChanges.get(x.targetId),j=w&&w.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges(S,P.isPrimaryClient,V,j);return $y(P,x.targetId,U.hu),U.snapshot}(t,m,y,C);const i=await Dy(t.localStore,e,!0),o=new OP(e,i.ks),l=o._u(i.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);$y(t,n,c.hu);const f=new LP(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function BP(t,e,n){const r=J(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!bu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Td(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yf(r.remoteStore,s.targetId),Cd(r,s.targetId)}).catch(fi)):(Cd(r,s.targetId),await Td(r.localStore,s.targetId,!0))}async function $P(t,e){const n=J(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yf(n.remoteStore,r.targetId))}async function qP(t,e,n){const r=JP(t);try{const s=await function(o,l){const u=J(o),c=fe.now(),f=l.reduce((C,k)=>C.add(k.key),te());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Pn(),P=te();return u.xs.getEntries(C,f).next(x=>{k=x,k.forEach((A,w)=>{w.isValidDocument()||(P=P.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,k)).next(x=>{m=x;const A=[];for(const w of l){const S=sR(w,m.get(w.key).overlayedDocument);S!=null&&A.push(new kr(w.key,S,Fw(S.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,c,A,l)}).next(x=>{y=x;const A=x.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(C,x.batchId,A)})}).then(()=>({batchId:y.batchId,changes:Yw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await ra(r,s.changes),await ju(r.remoteStore)}catch(s){const i=tp(s,"Failed to persist write");n.reject(i)}}async function bT(t,e){const n=J(t);try{const r=await nP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?oe(o.Eu,14607):s.removedDocuments.size>0&&(oe(o.Eu,42227),o.Eu=!1))}),await ra(n,r,e)}catch(r){await fi(r)}}function By(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const y of m.va)y.Oa(l)&&(c=!0)}),c&&sp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new ye(H.comparator);o=o.insert(i,et.newNoDocument(i,Y.min()));const l=te().add(i),u=new ea(Y.min(),new Map,new ye(ee),o,l);await bT(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),ap(r)}else await Td(r.localStore,e,!1).then(()=>Cd(r,e,n)).catch(fi)}async function HP(t,e){const n=J(t),r=e.batch.batchId;try{const s=await tP(n.localStore,e);VT(n,r,null),DT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await fi(s)}}async function GP(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);VT(r,e,n),DT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await fi(s)}}function DT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function VT(t,e,n){const r=J(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Cd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||OT(t,r)})}function OT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Yf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),ap(t))}function $y(t,e,n){for(const r of n)r instanceof RT?(t.gu.addReference(r.key,e),KP(t,r)):r instanceof PT?(B(op,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||OT(t,r.key)):K(19791,{Cu:r})}function KP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(B(op,"New document in limbo: "+n),t.du.add(r),ap(t))}function ap(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new H(ue.fromString(e)),r=t.wu.next();t.fu.set(r,new MP(n)),t.mu=t.mu.insert(n,r),IT(t.remoteStore,new _n(on(xu(n.path)),r,"TargetPurposeLimboResolution",Nu.ce))}}async function ra(t,e,n){const r=J(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Kf.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(c,y=>L.forEach(y.Ts,C=>f.persistence.referenceDelegate.addReference(m,y.targetId,C)).next(()=>L.forEach(y.Is,C=>f.persistence.referenceDelegate.removeReference(m,y.targetId,C)))))}catch(m){if(!pi(m))throw m;B(Qf,"Failed to update sequence numbers: "+m)}for(const m of c){const y=m.targetId;if(!m.fromCache){const C=f.vs.get(y),k=C.snapshotVersion,P=C.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(y,P)}}}(r.localStore,i))}async function QP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B(op,"User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.Ns)}}function YP(t,e){const n=J(t),r=n.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let s=te();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function LT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WP.bind(null,e),e.Ru.H_=DP.bind(null,e.eventManager),e.Ru.Du=VP.bind(null,e.eventManager),e}function JP(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GP.bind(null,e),e}class ru{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return eP(this.persistence,new JR,e.initialUser,this.serializer)}xu(e){return new _T(Gf.Vi,this.serializer)}Mu(e){return new aP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ru.provider={build:()=>new ru};class XP extends ru{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){oe(this.persistence.referenceDelegate instanceof tu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new _T(r=>tu.Vi(r,n),this.serializer)}}class kd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QP.bind(null,this.syncEngine),await PP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bP}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=dP(e.databaseInfo);return yP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new vP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Ly.v()?new Ly:new lP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new jP(s,i,o,l,u,c);return f&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);B(cn,"RemoteStore shutting down."),i.da.add(5),await na(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}kd.provider={build:()=>new kd};/**
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
 */class lp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="FirestoreClient";class ZP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ex(t);B(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jy(e.remoteStore,s)),t._onlineComponents=e}async function ex(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Er,"Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new ru)}}else B(Er,"Using default OfflineComponentProvider"),await Xc(t,new XP(void 0));return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Er,"Using user provided OnlineComponentProvider"),await qy(t,t._uninitializedComponentsProvider._online)):(B(Er,"Using default OnlineComponentProvider"),await qy(t,new kd))),t._onlineComponents}function tx(t){return MT(t).then(e=>e.syncEngine)}async function su(t){const e=await MT(t),n=e.eventManager;return n.onListen=FP.bind(null,e.syncEngine),n.onUnlisten=BP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$P.bind(null,e.syncEngine),n}function nx(t,e,n,r){const s=new lp(r),i=new ip(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>np(await su(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>rp(await su(t),i))}}function rx(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new lp({next:y=>{f.Ku(),o.enqueueAndForget(()=>rp(i,m));const C=y.docs.has(l);!C&&y.fromCache?c.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&y.fromCache&&u&&u.source==="server"?c.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new ip(xu(l.path),f,{includeMetadataChanges:!0,Wa:!0});return np(i,m)}(await su(t),t.asyncQueue,e,n,r)),r.promise}function sx(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new lp({next:y=>{f.Ku(),o.enqueueAndForget(()=>rp(i,m)),y.fromCache&&u.source==="server"?c.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),m=new ip(l,f,{includeMetadataChanges:!0,Wa:!0});return np(i,m)}(await su(t),t.asyncQueue,e,n,r)),r.promise}function ix(t,e){const n=new wn;return t.asyncQueue.enqueueAndForget(async()=>qP(await tx(t),e,n)),n.promise}/**
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
 */function jT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ox="ComponentProvider",Wy=new Map;function ax(t,e,n,r,s){return new kN(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,jT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const FT="firestore.googleapis.com",Hy=!0;class Gy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=FT,this.ssl=Hy}else this.host=e.host,this.ssl=e.ssl??Hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VR)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oN;switch(r.type){case"firstParty":return new cN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wy.get(n);r&&(B(ox,"Removing Datastore"),Wy.delete(n),r.terminate())}(this),Promise.resolve()}}function lx(t,e,n,r={}){var c;t=gt(t,Fu);const s=Ho(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&DE(`https://${l}`),i.host!==FT&&i.host!==l&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Cn(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Xe.MOCK_USER;else{f=y1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Xe(y)}t._authCredentials=new aN(new kw(f,m))}}/**
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
 */class as{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new as(this.firestore,e,this._query)}}class Se{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Jo(n,Se._jsonSchema))return new Se(e,r||null,new H(ue.fromString(n.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:be("string",Se._jsonSchemaVersion),referencePath:be("string")};class hr extends as{constructor(e,n,r){super(e,n,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new H(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function Ot(t,e,...n){if(t=Me(t),Nw("collection","path",e),t instanceof Fu){const r=ue.fromString(e,...n);return oy(r),new hr(t,null,r)}{if(!(t instanceof Se||t instanceof hr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return oy(r),new hr(t.firestore,null,r)}}function Kt(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Of.newId()),Nw("doc","path",e),t instanceof Fu){const r=ue.fromString(e,...n);return iy(r),new Se(t,null,new H(r))}{if(!(t instanceof Se||t instanceof hr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return iy(r),new Se(t.firestore,t instanceof hr?t.converter:null,new H(r))}}/**
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
 */const Ky="AsyncQueue";class Qy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new wT(this,"async_queue_retry"),this.lc=()=>{const r=Jc();r&&B(Ky,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new wn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!pi(e))throw e;B(Ky,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Rn("INTERNAL UNHANDLED ERROR: ",Yy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=ep.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&K(47125,{Rc:Yy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xn extends Fu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qy(e),this._firestoreClient=void 0,await e}}}function ux(t,e){const n=typeof t=="object"?t:ME(),r=typeof t=="string"?t:Kl,s=Af(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=m1("firestore");i&&lx(s,...i)}return s}function Uu(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cx(t),t._firestoreClient}function cx(t){var r,s,i,o;const e=t._freezeSettings(),n=ax(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ge.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:be("string",Rt._jsonSchemaVersion),bytes:be("string")};/**
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
 */class up{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:be("string",ln._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
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
 */class qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qt(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:be("string",qt._jsonSchemaVersion),vectorValues:be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=/^__.*__$/;class dx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class zu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return iu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(zT(this.dataSource)&&hx.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class fx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lu(e)}V(e,n,r,s=!1){return new zu({dataSource:e,methodName:n,targetDoc:r,path:qe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bu(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new fx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BT(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);dp("Data must be an object, but it was:",o,r);const l=qT(r,o);let u,c;if(i.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=oi(e,m,n);if(!o.contains(y))throw new $(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);GT(f,y)||f.push(y)}u=new Et(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new dx(new ht(l),u,c)}class $u extends sa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}function $T(t,e,n){return new zu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class cp extends sa{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=$T(this,e,!0),r=this.vc.map(i=>ls(i,n)),s=new ri(r);return new rT(e.path,s)}isEqual(e){return e instanceof cp&&Cn(this.vc,e.vc)}}class hp extends sa{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=$T(this,e,!0),r=this.vc.map(i=>ls(i,n)),s=new si(r);return new rT(e.path,s)}isEqual(e){return e instanceof hp&&Cn(this.vc,e.vc)}}function px(t,e,n,r){const s=t.V(1,e,n);dp("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();Cr(r,(u,c)=>{const f=HT(e,u,n);c=Me(c);const m=s.Sc(f);if(c instanceof $u)i.push(f);else{const y=ls(c,m);y!=null&&(i.push(f),o.set(f,y))}});const l=new Et(i);return new UT(o,l,s.fieldTransforms)}function mx(t,e,n,r,s,i){const o=t.V(1,e,n),l=[oi(e,r,n)],u=[s];if(i.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(oi(e,i[y])),u.push(i[y+1]);const c=[],f=ht.empty();for(let y=l.length-1;y>=0;--y)if(!GT(c,l[y])){const C=l[y];let k=u[y];k=Me(k);const P=o.Sc(C);if(k instanceof $u)c.push(C);else{const x=ls(k,P);x!=null&&(c.push(C),f.set(C,x))}}const m=new Et(c);return new UT(f,m,o.fieldTransforms)}function gx(t,e,n,r=!1){return ls(n,t.V(r?4:3,e))}function ls(t,e){if(WT(t=Me(t)))return dp("Unsupported field value:",e,t),qT(t,e);if(t instanceof sa)return function(r,s){if(!zT(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ls(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:eu(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eu(s.serializer,i)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:uT(s.serializer,r._byteString)};if(r instanceof Se){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qt)return function(o,l){const u=o instanceof qt?o.toArray():o;return{mapValue:{fields:{[Mw]:{stringValue:jw},[Ql]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return zf(l.serializer,f)})}}}}}}(r,s);if(gT(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${ku(r)}`)}(t,e)}function qT(t,e){const n={};return xw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=ls(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function WT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ln||t instanceof Rt||t instanceof Se||t instanceof sa||t instanceof qt||gT(t))}function dp(t,e,n){if(!WT(n)||!Rw(n)){const r=ku(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function oi(t,e,n){if((e=Me(e))instanceof up)return e._internalPath;if(typeof e=="string")return HT(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const yx=new RegExp("[~\\*/\\[\\]]");function HT(t,e,n){if(e.search(yx)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new up(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function GT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _x{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ql].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new qt(n)}convertGeoPoint(e){return new ln(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lo(e));default:return null}}convertTimestamp(e){const n=mr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(mT(r),9688,{name:e});const s=new Mo(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class fp extends _x{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function Jy(...t){return new cp("arrayUnion",t)}function Xy(...t){return new hp("arrayRemove",t)}const Zy="@firebase/firestore",e_="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class KT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(oi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vx extends KT{data(){return super.data()}}/**
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
 */function QT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pp{}class Ex extends pp{}function us(t,e,...n){let r=[];e instanceof pp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof mp).length,l=i.filter(u=>u instanceof qu).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class qu extends Ex{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qu(e,n,r)}_apply(e){const n=this._parse(e);return YT(e._query,n),new as(e.firestore,e.converter,gd(e._query,n))}_parse(e){const n=Bu(e.firestore);return function(i,o,l,u,c,f,m){let y;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){r_(m,f);const k=[];for(const P of m)k.push(n_(u,i,P));y={arrayValue:{values:k}}}else y=n_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||r_(m,f),y=gx(l,o,m,f==="in"||f==="not-in");return xe.create(c,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cs(t,e,n){const r=e,s=oi("where",t);return qu._create(s,r,n)}class mp extends pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)YT(o,u),o=gd(o,u)}(e._query,n),new as(e.firestore,e.converter,gd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function n_(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hw(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return py(t,new H(r))}if(n instanceof Se)return py(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ku(n)}.`)}function r_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends KT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:be("string",qr._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class pl extends qr{data(e={}){return super.data(e)}}class Wr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:wx(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:be("string",Wr._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};/**
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
 */function XT(t){t=gt(t,Se);const e=gt(t.firestore,xn),n=Uu(e);return rx(n,t._key).then(r=>ZT(e,t,r))}function Tx(t){t=gt(t,as);const e=gt(t.firestore,xn),n=Uu(e),r=new fp(e);return QT(t._query),sx(n,t._query).then(s=>new Wr(e,r,t,s))}function Ix(t,e,n){t=gt(t,Se);const r=gt(t.firestore,xn),s=JT(t.converter,e),i=Bu(r);return Hu(r,[BT(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bt.none())])}function Wu(t,e,n,...r){t=gt(t,Se);const s=gt(t.firestore,xn),i=Bu(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof up?mx(i,"updateDoc",t._key,e,n,r):px(i,"updateDoc",t._key,e),Hu(s,[o.toMutation(t._key,bt.exists(!0))])}function ia(t){return Hu(gt(t.firestore,xn),[new Bf(t._key,bt.none())])}function oa(t,e){const n=gt(t.firestore,xn),r=Kt(t),s=JT(t.converter,e),i=Bu(t.firestore);return Hu(n,[BT(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function gi(t,...e){var c,f,m;t=Me(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||t_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(t_(e[r])){const y=e[r];e[r]=(c=y.next)==null?void 0:c.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let i,o,l;if(t instanceof Se)o=gt(t.firestore,xn),l=xu(t._key.path),i={next:y=>{e[r]&&e[r](ZT(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=gt(t,as);o=gt(y.firestore,xn),l=y._query;const C=new fp(o);i={next:k=>{e[r]&&e[r](new Wr(o,C,y,k))},error:e[r+1],complete:e[r+2]},QT(t._query)}const u=Uu(o);return nx(u,l,s,i)}function Hu(t,e){const n=Uu(t);return ix(n,e)}function ZT(t,e,n){const r=n.docs.get(e._key),s=new fp(t);return new qr(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){iN(ci),Zs(new Jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xn(new lN(r.getProvider("auth-internal")),new hN(o,r.getProvider("app-check-internal")),NN(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ur(Zy,e_,e),ur(Zy,e_,"esm2020")})();const Sx={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},e0=LE(Sx),Ae=ux(e0),ou=tN(e0),t0=M.createContext(null);function Ax({children:t}){const[e,n]=M.useState(null),[r,s]=M.useState(!0);M.useEffect(()=>$C(ou,l=>{n(l),s(!1)}),[]);const i=async()=>{await qC(ou)};return p.jsx(t0.Provider,{value:{user:e,loading:r,logout:i},children:t})}function hs(){const t=M.useContext(t0);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const Cx=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
funny.1=Estoy trabajando en parecer que sé la respuesta
funny.2=Eso suena como un problema del "yo del futuro"
funny.3=Depende… ¿quieres la verdad o una historia bonita?
funny.4=Me niego a responder sin café
funny.5=Esa pregunta vino sin manual de instrucciones
funny.6=Mi cerebro se fue a por snacks
funny.7=Te contesto mañana, hoy soy decorativo
funny.8=Estoy improvisando con confianza
funny.9=Eso no venía en el examen
funny.10=Estoy en modo ahorro de neuronas
funny.11=¿Esto puntúa?
funny.12=Lo pensé… y luego lo olvidé
funny.13=Necesito un comodín del público
funny.14=Estoy entre "sí" y "qué"
funny.15=Mi respuesta oficial es: ups
funny.16=Dame un segundo… o diez
funny.17=Estoy haciendo teatro ahora mismo
funny.18=Eso suena a responsabilidad
funny.19=Me encanta cuando fingimos que sé cosas
funny.20=No estoy listo emocionalmente para eso
funny.21=Lo haría, pero soy feliz así
funny.22=Estoy consultando a mi yo interior… está ocupado
funny.23=No es un no, es un "me lo pienso nunca"
funny.24=Lo intenté en mi mente, salió mal
funny.25=Eso requiere pantalones serios
funny.26=Estoy en pausa mental
funny.27=Me niego por razones dramáticas
funny.28=Eso es información premium
funny.29=Estoy esperando inspiración divina
funny.30=Lo haré cuando deje de procrastinar… nunca
funny.31=Estoy negociando conmigo mismo
funny.32=Esa pregunta tiene demasiadas letras
funny.33=No me representa esa duda
funny.34=Estoy en modo avión emocional
funny.35=Eso es contenido avanzado
funny.36=Lo guardé en el cajón del olvido
funny.37=Necesito más contexto… y snacks
funny.38=Estoy ocupado no haciendo eso
funny.39=Eso suena a esfuerzo
funny.40=Lo tengo… pero no aquí
funny.41=Estoy en mantenimiento
funny.42=Eso es un misterio sin resolver
funny.43=Mi respuesta está en beta
funny.44=Estoy procesando… lentamente
funny.45=Eso me supera con elegancia
funny.46=Hoy no soy esa persona
funny.47=Estoy fuera de servicio
funny.48=Eso es para adultos responsables
funny.49=Estoy en huelga de respuestas
funny.50=Eso requiere ganas
funny.51=Me encantaría… pero no
funny.52=Estoy confundido con estilo
funny.53=Eso no estaba en mi guion
funny.54=Estoy en modo espectador
funny.55=Eso es una trampa
funny.56=Lo haría, pero respeto mi pereza
funny.57=Estoy reflexionando… sin resultados
funny.58=Eso es nivel experto
funny.59=Estoy improvisando con clase
funny.60=No confirmo ni desmiento
funny.61=Estoy pensando en comida
funny.62=Eso es opcional, ¿no?
funny.63=Estoy en fase experimental
funny.64=Eso suena a trabajo
funny.65=Estoy revisando mis excusas
funny.66=Eso es un "yo veré"
funny.67=Estoy ocupado siendo icónico
funny.68=Eso es sospechoso
funny.69=Estoy analizando… superficialmente
funny.70=Eso necesita otro yo
funny.71=Estoy en modo ahorro
funny.72=Eso es una sugerencia fuerte
funny.73=Estoy pensando… no prometo nada
funny.74=Eso es ciencia ficción
funny.75=Estoy en modo supervivencia
funny.76=Eso me pilla sin preparación
funny.77=Estoy evaluando huir
funny.78=Eso es mucho texto
funny.79=Estoy en pausa dramática
funny.80=Eso es ambicioso
funny.81=Estoy negociando con la realidad
funny.82=Eso suena a error
funny.83=Estoy en versión demo
funny.84=Eso requiere fe
funny.85=Estoy en modo "ya veremos"
funny.86=Eso es un reto innecesario
funny.87=Estoy en observación
funny.88=Eso es un experimento
funny.89=Estoy en mantenimiento emocional
funny.90=Eso no es prioritario para mi yo actual
funny.91=Estoy pensando en retirarme
funny.92=Eso es muy 2024
funny.93=Estoy reconsiderando todo
funny.94=Eso es una ilusión
funny.95=Estoy fuera de cobertura mental
funny.96=Eso es opcional en mi universo
funny.97=Estoy en modo ahorro de energía
funny.98=Eso es un problema creativo
funny.99=Estoy fingiendo normalidad
cold.0=No
cold.1=Sí
cold.2=Puede ser
cold.3=No lo sé
cold.4=Depende
cold.5=No aplica
cold.6=No es relevante
cold.7=Es posible
cold.8=No necesariamente
cold.9=No tengo información
cold.10=No corresponde
cold.11=No procede
cold.12=No es correcto
cold.13=Es incorrecto
cold.14=No es preciso
cold.15=No es viable
cold.16=No es adecuado
cold.17=No es necesario
cold.18=No es conveniente
cold.19=No es el momento
cold.20=No es prioridad
cold.21=No es mi área
cold.22=No tengo opinión
cold.23=No puedo confirmar
cold.24=No puedo negar
cold.25=No hay datos
cold.26=No hay evidencia
cold.27=No es concluyente
cold.28=No es definitivo
cold.29=No es seguro
cold.30=No es claro
cold.31=No es exacto
cold.32=No es suficiente
cold.33=No es válido
cold.34=No es pertinente
cold.35=No es relevante ahora
cold.36=No es útil
cold.37=No es práctico
cold.38=No es razonable
cold.39=No es lógico
cold.40=No es consistente
cold.41=No es necesario ahora
cold.42=No es prioridad actual
cold.43=No es recomendable
cold.44=No es adecuado en este contexto
cold.45=No es oportuno
cold.46=No es coherente
cold.47=No es eficiente
cold.48=No es viable actualmente
cold.49=No es aceptable
cold.50=No es correcto ahora
cold.51=No es una opción
cold.52=No es una solución
cold.53=No es suficiente información
cold.54=No es el enfoque correcto
cold.55=No es el momento adecuado
cold.56=No es el canal adecuado
cold.57=No es necesario discutirlo
cold.58=No es relevante discutirlo
cold.59=No es mi decisión
cold.60=No es mi responsabilidad
cold.61=No es competencia mía
cold.62=No es necesario intervenir
cold.63=No es un problema ahora
cold.64=No es un tema urgente
cold.65=No es crítico
cold.66=No es prioritario
cold.67=No es una preocupación
cold.68=No es significativo
cold.69=No es determinante
cold.70=No es concluyente aún
cold.71=No es verificable
cold.72=No es medible
cold.73=No es aplicable aquí
cold.74=No es comparable
cold.75=No es equivalente
cold.76=No es necesario aclararlo
cold.77=No es relevante aclararlo
cold.78=No es un riesgo
cold.79=No es una amenaza
cold.80=No es un error
cold.81=No es una falla
cold.82=No es un problema real
cold.83=No es necesario actuar
cold.84=No es necesario responder
cold.85=No es necesario justificar
cold.86=No es necesario explicar
cold.87=No es necesario insistir
cold.88=No es necesario continuar
cold.89=No es necesario cambiar
cold.90=No es necesario revisar
cold.91=No es necesario ajustar
cold.92=No es necesario confirmar
cold.93=No es necesario validar
cold.94=No es necesario evaluar
cold.95=No es necesario comparar
cold.96=No es necesario analizar
cold.97=No es necesario discutir
cold.98=No es necesario considerar
cold.99=No es necesario proceder
elegant.0=Interesante cuestión
elegant.1=Permíteme considerarlo
elegant.2=Es un punto digno de análisis
elegant.3=Me parece una idea sugerente
elegant.4=Tiene mérito lo que planteas
elegant.5=Es una perspectiva válida
elegant.6=Resulta estimulante reflexionar sobre ello
elegant.7=Aprecio la sutileza de la pregunta
elegant.8=Es un enfoque interesante
elegant.9=Conviene matizar algunos aspectos
elegant.10=Podría abordarse desde varios ángulos
elegant.11=Es un asunto complejo
elegant.12=Invita a una reflexión más profunda
elegant.13=Tiene implicaciones interesantes
elegant.14=Merece una revisión cuidadosa
elegant.15=Es una cuestión delicada
elegant.16=Hay múltiples interpretaciones posibles
elegant.17=Es un planteamiento razonable
elegant.18=Podría considerarse adecuado
elegant.19=Es un punto relevante
elegant.20=Se presta a debate
elegant.21=Es digno de consideración
elegant.22=Sugiere varias lecturas
elegant.23=Tiene cierta elegancia conceptual
elegant.24=Resulta convincente en parte
elegant.25=Podría perfeccionarse
elegant.26=Es un argumento sólido
elegant.27=Tiene coherencia interna
elegant.28=Es una propuesta refinada
elegant.29=Invita a profundizar
elegant.30=Es un razonamiento interesante
elegant.31=Tiene valor analítico
elegant.32=Resulta pertinente
elegant.33=Es una aportación valiosa
elegant.34=Tiene matices importantes
elegant.35=Conviene examinarlo con detalle
elegant.36=Es una hipótesis plausible
elegant.37=Tiene consistencia
elegant.38=Es una línea de pensamiento válida
elegant.39=Podría ampliarse
elegant.40=Tiene potencial
elegant.41=Es una idea bien estructurada
elegant.42=Resulta sugestiva
elegant.43=Es digna de estudio
elegant.44=Tiene elegancia argumentativa
elegant.45=Es un planteamiento sofisticado
elegant.46=Tiene profundidad conceptual
elegant.47=Es un enfoque distinguido
elegant.48=Resulta apropiado
elegant.49=Tiene cierta fineza
elegant.50=Es un análisis acertado
elegant.51=Tiene valor estratégico
elegant.52=Es una observación aguda
elegant.53=Tiene equilibrio
elegant.54=Es una propuesta sólida
elegant.55=Tiene consistencia lógica
elegant.56=Resulta enriquecedor
elegant.57=Es una reflexión valiosa
elegant.58=Tiene claridad conceptual
elegant.59=Es un enfoque coherente
elegant.60=Resulta elegante
elegant.61=Tiene fundamento
elegant.62=Es una idea destacable
elegant.63=Tiene rigor
elegant.64=Es una línea prometedora
elegant.65=Resulta bien planteado
elegant.66=Tiene sentido
elegant.67=Es un argumento interesante
elegant.68=Tiene solidez
elegant.69=Es un enfoque pertinente
elegant.70=Resulta convincente
elegant.71=Tiene orden lógico
elegant.72=Es una propuesta cuidada
elegant.73=Tiene claridad
elegant.74=Es una reflexión refinada
elegant.75=Resulta equilibrado
elegant.76=Tiene coherencia
elegant.77=Es una idea consistente
elegant.78=Tiene buen criterio
elegant.79=Es una propuesta interesante
elegant.80=Tiene estructura
elegant.81=Es una línea clara
elegant.82=Resulta bien argumentado
elegant.83=Tiene elegancia formal
elegant.84=Es un planteamiento correcto
elegant.85=Tiene calidad
elegant.86=Es una observación pertinente
elegant.87=Tiene valor
elegant.88=Es una idea válida
elegant.89=Tiene fundamento sólido
elegant.90=Es un análisis interesante
elegant.91=Tiene precisión
elegant.92=Es una reflexión adecuada
elegant.93=Tiene lógica
elegant.94=Es un enfoque razonable
elegant.95=Tiene coherencia interna
elegant.96=Es una idea aceptable
elegant.97=Tiene consistencia argumental
elegant.98=Es una propuesta sensata
elegant.99=Tiene mérito
excuse.0=No tuve tiempo
excuse.1=Se me pasó
excuse.2=No lo vi
excuse.3=Me surgió algo
excuse.4=No dependía de mí
excuse.5=Hubo un error
excuse.6=No estaba claro
excuse.7=Me confundí
excuse.8=Lo interpreté mal
excuse.9=No tenía la información
excuse.10=Nadie me avisó
excuse.11=Pensé que no era urgente
excuse.12=Estaba ocupado
excuse.13=Surgió un imprevisto
excuse.14=Tuve un problema técnico
excuse.15=No funcionaba
excuse.16=No cargaba
excuse.17=Se cayó el sistema
excuse.18=No tenía acceso
excuse.19=No encontraba el archivo
excuse.20=No llegó el mensaje
excuse.21=Hubo un retraso
excuse.22=Se complicó
excuse.23=No era mi responsabilidad
excuse.24=Pensé que ya estaba hecho
excuse.25=Creí que lo habías hecho tú
excuse.26=No lo entendí bien
excuse.27=Me faltaban datos
excuse.28=No estaba completo
excuse.29=No estaba listo
excuse.30=No era prioritario
excuse.31=Se me olvidó
excuse.32=Me distraje
excuse.33=Tenía otras tareas
excuse.34=No lo confirmé
excuse.35=No lo revisé
excuse.36=No lo validé
excuse.37=No lo comprobé
excuse.38=No lo actualicé
excuse.39=No lo guardé
excuse.40=Se perdió
excuse.41=Se borró
excuse.42=No se sincronizó
excuse.43=No se envió
excuse.44=No se guardó
excuse.45=No se registró
excuse.46=No se procesó
excuse.47=No se ejecutó
excuse.48=No se completó
excuse.49=No se terminó
excuse.50=No se pudo hacer
excuse.51=No se pudo acceder
excuse.52=No se pudo resolver
excuse.53=No se pudo verificar
excuse.54=No se pudo confirmar
excuse.55=No se pudo validar
excuse.56=No se pudo revisar
excuse.57=No se pudo actualizar
excuse.58=No se pudo entregar
excuse.59=No se pudo enviar
excuse.60=No se pudo finalizar
excuse.61=No se pudo cerrar
excuse.62=No se pudo completar a tiempo
excuse.63=No se pudo coordinar
excuse.64=No se pudo gestionar
excuse.65=No se pudo organizar
excuse.66=No se pudo planificar
excuse.67=No se pudo preparar
excuse.68=No se pudo anticipar
excuse.69=No se pudo evitar
excuse.70=No se pudo prever
excuse.71=No se pudo solucionar
excuse.72=No se pudo corregir
excuse.73=No se pudo ajustar
excuse.74=No se pudo modificar
excuse.75=No se pudo mejorar
excuse.76=No se pudo optimizar
excuse.77=No se pudo implementar
excuse.78=No se pudo aplicar
excuse.79=No se pudo ejecutar correctamente
excuse.80=No se pudo completar correctamente
excuse.81=No se pudo entregar correctamente
excuse.82=No se pudo resolver a tiempo
excuse.83=No se pudo gestionar a tiempo
excuse.84=No se pudo coordinar a tiempo
excuse.85=No se pudo preparar a tiempo
excuse.86=No se pudo revisar a tiempo
excuse.87=No se pudo validar a tiempo
excuse.88=No se pudo confirmar a tiempo
excuse.89=No se pudo actualizar a tiempo
excuse.90=No se pudo cerrar a tiempo
excuse.91=No se pudo finalizar a tiempo
excuse.92=No se pudo completar el proceso
excuse.93=No se pudo continuar
excuse.94=No se pudo avanzar
excuse.95=No se pudo completar el ciclo
excuse.96=No se pudo cerrar el tema
excuse.97=No se pudo concluir
excuse.98=No se pudo terminar
excuse.99=No se pudo completar
`,Zc="reply-ai-history";function kx(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const s=r.indexOf("=");if(s===-1)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim(),[l]=i.split(".");e[l]&&e[l].push(o)}return e}const s_=kx(Cx);function Nx(){const[t,e]=M.useState(""),[n,r]=M.useState("funny"),[s,i]=M.useState(""),[o,l]=M.useState(!1),[u,c]=M.useState(""),[f,m]=M.useState(()=>{const x=localStorage.getItem(Zc);return x?JSON.parse(x):[]}),y=M.useCallback(async x=>{if(!t.trim()){c("Pega un mensaje primero");return}l(!0),c("");const A=typeof x=="string"?x:n,w=s_[A]||s_.elegant,S=w[Math.floor(Math.random()*w.length)];await new Promise(U=>setTimeout(U,300)),i(S);const j=[{message:t,reply:S,mode:A,date:new Date().toISOString()},...f].slice(0,50);m(j),localStorage.setItem(Zc,JSON.stringify(j)),l(!1)},[t,n,f]),C=M.useCallback(()=>{s&&(e(s),y("funny"))},[s,y]),k=M.useCallback(x=>{const A=`https://wa.me/?text=${encodeURIComponent(x)}`;window.open(A,"_blank")},[]),P=M.useCallback(()=>{m([]),localStorage.removeItem(Zc)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:s,setResponse:i,loading:o,error:u,history:f,generate:y,makeFunnier:C,sendToWhatsApp:k,clearHistory:P}}const gp="birthdays";function Rx(t,e,n){const r=us(Ot(Ae,gp),cs("userId","==",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function Px({name:t,date:e,gender:n,phone:r},s){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:s,createdAt:new Date().toISOString()};return{id:(await oa(Ot(Ae,gp),o)).id,...o}}async function xx(t){await ia(Kt(Ae,gp,t))}function bx(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function Dx(){const{user:t}=hs(),[e,n]=M.useState([]),[r,s]=M.useState([]),[i,o]=M.useState("");M.useEffect(()=>t?(o(""),Rx(t.uid,C=>{n(C)},C=>{o("Error al cargar amigos: "+eh(C))})):void 0,[t]),M.useEffect(()=>{const y=bx(),C=e.filter(k=>k.date===y);s(C)},[e]);const l=100,u=M.useCallback(async(y,C,k,P)=>{if(t){if(o(""),e.length>=l){o(`Límite alcanzado: máximo ${l} cumpleaños. Elimina algunos para añadir más.`);return}try{await Px({name:y,date:C,gender:k,phone:P},t.uid)}catch(x){o("Error al añadir amigo: "+eh(x))}}},[t,e.length]),c=M.useCallback(async y=>{o("");try{await xx(y)}catch(C){o("Error al eliminar amigo: "+eh(C))}},[]),f=M.useCallback(y=>{let C;y.gender==="male"?C=`¡Feliz cumpleaños, amigo ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:y.gender==="female"?C=`¡Feliz cumpleaños, amiga ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:C=`¡Feliz cumpleaños, ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const k=y.phone?y.phone.replace(/[^0-9]/g,""):"",P=k?`https://wa.me/${k}?text=${encodeURIComponent(C)}`:`https://wa.me/?text=${encodeURIComponent(C)}`;window.open(P,"_blank")},[]),m=M.useCallback(y=>{const C=y.gender==="male"?"lo":y.gender==="female"?"la":"le",k=`📅 Recordatorio: Hoy es el cumpleaños de ${y.name}! No olvides felicit${C}. 🎂🎉`,P=`https://wa.me/?text=${encodeURIComponent(k)}`;window.open(P,"_blank")},[]);return{friends:e,todayBirthdays:r,error:i,addFriend:u,removeFriend:c,sendGreeting:f,sendReminder:m}}function eh(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const yp="contacts";function Vx(t,e,n){const r=us(Ot(Ae,yp),cs("userId","==",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function Ox({name:t,phone:e,email:n,city:r,webpage:s,occupation:i,rating:o},l){const u={name:t,phone:e||"",email:n||"",city:r||"",webpage:s||"",occupation:i||"",rating:o||1,userId:l,createdAt:new Date().toISOString()};return{id:(await oa(Ot(Ae,yp),u)).id,...u}}async function Lx(t){await ia(Kt(Ae,yp,t))}function Mx(){const{user:t}=hs(),[e,n]=M.useState([]),[r,s]=M.useState("");M.useEffect(()=>t?(s(""),Vx(t.uid,c=>{n(c)},c=>{s("Error al cargar contactos: "+th(c))})):void 0,[t]);const i=100,o=M.useCallback(async({name:u,phone:c,email:f,city:m,webpage:y,occupation:C,rating:k})=>{if(t){if(s(""),e.length>=i){s(`Límite alcanzado: máximo ${i} contactos. Elimina algunos para añadir más.`);return}try{await Ox({name:u,phone:c,email:f,city:m,webpage:y,occupation:C,rating:k},t.uid)}catch(P){s("Error al añadir contacto: "+th(P))}}},[t,e.length]),l=M.useCallback(async u=>{s("");try{await Lx(u)}catch(c){s("Error al eliminar contacto: "+th(c))}},[]);return{contacts:e,error:r,addContact:o,removeContact:l}}function th(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const _p="favorites";function jx(t,e,n){const r=us(Ot(Ae,_p),cs("userId","==",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function Fx({name:t,url:e,description:n},r){const s={name:t,url:e||"",description:n||"",userId:r,createdAt:new Date().toISOString()};return{id:(await oa(Ot(Ae,_p),s)).id,...s}}async function Ux(t){await ia(Kt(Ae,_p,t))}const i_=100;function zx(){const{user:t}=hs(),[e,n]=M.useState([]),[r,s]=M.useState("");M.useEffect(()=>t?(s(""),jx(t.uid,n,u=>{s("Error al cargar favoritos: "+nh(u))})):void 0,[t]);const i=M.useCallback(async({name:l,url:u,description:c})=>{if(t){if(s(""),e.length>=i_){s(`Límite alcanzado: máximo ${i_} favoritos.`);return}try{await Fx({name:l,url:u,description:c},t.uid)}catch(f){s("Error al añadir favorito: "+nh(f))}}},[t,e.length]),o=M.useCallback(async l=>{s("");try{await Ux(l)}catch(u){s("Error al eliminar favorito: "+nh(u))}},[]);return{favorites:e,error:r,addFavorite:i,removeFavorite:o}}function nh(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}const ds="reminders",n0="users";function Bx(t,e,n){const r=us(Ot(Ae,ds),cs("userId","==",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}function $x(t,e,n){const r=us(Ot(Ae,ds),cs("sharedWithUids","array-contains",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data(),isShared:!0}));e(i)},s=>{console.error("Firestore shared subscribe error:",s),n&&n(s)})}async function qx(t,e,n){const r={...t,userId:e,ownerEmail:n,createdAt:new Date().toISOString(),lastFiredAt:null,sharedWithUids:[],sharedWithEmails:[]};return{id:(await oa(Ot(Ae,ds),r)).id,...r}}async function o_(t,e){await Wu(Kt(Ae,ds,t),e)}async function Wx(t){await ia(Kt(Ae,ds,t))}async function Hx(t,e,n){await Wu(Kt(Ae,ds,t),{sharedWithUids:Jy(e),sharedWithEmails:Jy(n)})}async function Gx(t,e){var u;const n=Kt(Ae,ds,t),s=(await XT(n)).data(),i=(s==null?void 0:s.sharedWithEmails)||[],o=((u=s==null?void 0:s.sharedWithUids)==null?void 0:u.indexOf(e))??-1,l=o>=0?i[o]:null;await Wu(n,{sharedWithUids:Xy(e),sharedWithEmails:l?Xy(l):[]})}async function Kx(t,e){const n=Kt(Ae,n0,t);(await XT(n)).exists()||await Ix(n,{email:e,uid:t})}async function Qx(t){const e=us(Ot(Ae,n0),cs("email","==",t)),n=await Tx(e);return n.empty?null:n.docs[0].id}const a_=5;let $a=null;function r0(){if($a)return $a;try{$a=new(window.AudioContext||window.webkitAudioContext)}catch(t){console.warn("AudioContext not supported:",t)}return $a}function vp(){const t=r0();t&&t.state==="suspended"&&t.resume().catch(()=>{})}document.addEventListener("click",vp);document.addEventListener("touchstart",vp);document.addEventListener("keydown",vp);async function Yx(){try{const t=r0();if(!t||(t.state==="suspended"&&await t.resume(),t.state!=="running"))return;const e=(r,s,i)=>{const o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.setValueAtTime(r,s),l.gain.setValueAtTime(.35,s),l.gain.exponentialRampToValueAtTime(.01,s+i),o.connect(l),l.connect(t.destination),o.start(s),o.stop(s+i)},n=t.currentTime;e(523,n,.15),e(659,n+.15,.15),e(784,n+.3,.3)}catch(t){console.warn("Sound error:",t)}}function ys(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function Jx(){const t=new Date;return{h:t.getHours(),dow:t.getDay(),day:t.getDate(),month:t.getMonth()+1}}function Xx(t){if(!t.active)return!1;const e=Jx();if(t.frequency!=="daily")if(t.frequency==="weekly"){if(t.weekday!==e.dow)return!1}else if(t.frequency==="monthly"){if(t.day!==e.day)return!1}else if(t.frequency==="once"){if(t.day!==e.day||t.month!==e.month)return!1}else return!1;const n=t.earlyBird?7:9;return!(e.h<n||t.lastFiredAt&&Date.now()-new Date(t.lastFiredAt).getTime()<55*60*1e3)}async function l_(){if(!("Notification"in window))return"denied";if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return"denied"}}function Zx(t){if("Notification"in window&&Notification.permission==="granted")try{const e=t.name+(t.note?" — "+t.note:"");new Notification("🔔 Toolbox AI",{body:e,icon:"./icons/icon-192.svg",tag:t.id,renotify:!0})}catch(e){console.warn("Notification error:",e)}}function e2(){const{user:t}=hs(),[e,n]=M.useState([]),[r,s]=M.useState(""),[i,o]=M.useState(null),l=M.useRef([]);l.current=e;const u=M.useRef(new Set);M.useEffect(()=>{if(!t)return;s(""),t.email&&Kx(t.uid,t.email).catch(()=>{});let k=[],P=[];const x=()=>{const S=new Set,V=[];for(const j of[...k,...P])S.has(j.id)||(S.add(j.id),V.push(j));n(V)},A=Bx(t.uid,S=>{k=S,x()},S=>s("Error al cargar recordatorios: "+ys(S))),w=$x(t.uid,S=>{P=S,x()},S=>console.error("Shared reminders error:",S));return()=>{A(),w()}},[t]),M.useEffect(()=>{!t||e.length===0||l_().then(k=>{console.log("[Reminders] Notification permission:",k)})},[t,e.length>0]),M.useEffect(()=>{if(!t)return;const k=async w=>{if(!w.isShared&&Xx(w)&&!u.current.has(w.id)){u.current.add(w.id);try{await o_(w.id,{lastFiredAt:new Date().toISOString()}),await Yx(),Notification.permission==="default"&&await l_(),Zx(w),o(w.id),setTimeout(()=>o(null),5e3)}catch(S){console.warn("Reminder fire error:",S)}finally{setTimeout(()=>u.current.delete(w.id),5e3)}}},P=()=>{l.current.forEach(k)};P();const x=setInterval(P,6e4),A=()=>{document.visibilityState==="visible"&&P()};return document.addEventListener("visibilitychange",A),()=>{clearInterval(x),document.removeEventListener("visibilitychange",A)}},[t]);const c=M.useCallback(async k=>{if(!t)return;if(s(""),l.current.filter(x=>!x.isShared).length>=a_){s(`Límite alcanzado: máximo ${a_} recordatorios.`);return}try{await qx(k,t.uid,t.email)}catch(x){s("Error al añadir recordatorio: "+ys(x))}},[t]),f=M.useCallback(async(k,P)=>{s("");try{await o_(k,P)}catch(x){s("Error al actualizar recordatorio: "+ys(x))}},[]),m=M.useCallback(async k=>{s("");try{await Wx(k)}catch(P){s("Error al eliminar recordatorio: "+ys(P))}},[]),y=M.useCallback(async(k,P)=>{if(s(""),!P||!P.includes("@")){s("Introduce un email válido.");return}try{const x=await Qx(P);if(!x){s("Ese usuario no está registrado en Toolbox AI.");return}if(x===t.uid){s("No puedes compartir un recordatorio contigo mismo.");return}await Hx(k,x,P)}catch(x){s("Error al compartir recordatorio: "+ys(x))}},[t]),C=M.useCallback(async(k,P,x)=>{s("");try{await Gx(k,P,x)}catch(A){s("Error al eliminar uso compartido: "+ys(A))}},[]);return{reminders:e,error:r,justFired:i,userEmail:t==null?void 0:t.email,addReminder:c,updateReminder:f,removeReminder:m,shareReminder:y,unshareReminder:C}}const Gu="notes";function t2(t,e,n){const r=us(Ot(Ae,Gu),cs("userId","==",t));return gi(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>o.pinned!==l.pinned?o.pinned?-1:1:new Date(l.updatedAt)-new Date(o.updatedAt)),e(i)},s=>{console.error("Firestore notes subscribe error:",s),n&&n(s)})}async function n2({title:t,body:e,color:n},r){const s=new Date().toISOString(),i={title:t||"",body:e||"",color:n||"#ffffff",pinned:!1,userId:r,createdAt:s,updatedAt:s};return{id:(await oa(Ot(Ae,Gu),i)).id,...i}}async function u_(t,e){await Wu(Kt(Ae,Gu,t),{...e,updatedAt:new Date().toISOString()})}async function r2(t){await ia(Kt(Ae,Gu,t))}const rh=6;function qa(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function s2(){const{user:t}=hs(),[e,n]=M.useState([]),[r,s]=M.useState("");M.useEffect(()=>t?(s(""),t2(t.uid,f=>n(f),f=>s("Error al cargar notas: "+qa(f)))):void 0,[t]);const i=M.useCallback(async({title:c,body:f,color:m})=>{if(t){if(s(""),e.length>=rh){s(`Límite alcanzado: máximo ${rh} notas.`);return}try{await n2({title:c,body:f,color:m},t.uid)}catch(y){s("Error al añadir nota: "+qa(y))}}},[t,e.length]),o=M.useCallback(async(c,f)=>{s("");try{await u_(c,f)}catch(m){s("Error al actualizar nota: "+qa(m))}},[]),l=M.useCallback(async c=>{s("");try{await r2(c)}catch(f){s("Error al eliminar nota: "+qa(f))}},[]),u=M.useCallback(async c=>{const f=e.find(m=>m.id===c);f&&await u_(c,{pinned:!f.pinned})},[e]);return{notes:e,error:r,maxNotes:rh,addNote:i,updateNote:o,removeNote:l,togglePin:u}}function i2(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[s,i]=M.useState(!1),[o,l]=M.useState(""),[u,c]=M.useState(!1),f=async m=>{m.preventDefault(),l(""),c(!0);try{s?await FC(ou,t,n):await UC(ou,t,n)}catch(y){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[y.code]||y.code)}finally{c(!1)}};return p.jsx("div",{className:"login-screen",children:p.jsxs("div",{className:"login-card",children:[p.jsx("div",{className:"login-logo",children:"💬"}),p.jsx("h1",{className:"login-title",children:"Toolbox AI"}),p.jsx("p",{className:"login-subtitle",children:s?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),p.jsxs("form",{className:"login-form",onSubmit:f,children:[p.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value),required:!0}),p.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:m=>r(m.target.value),required:!0,minLength:6}),o&&p.jsx("p",{className:"error",children:o}),p.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?p.jsx("span",{className:"loading-spinner"}):s?"Crear cuenta":"Iniciar sesión"})]}),p.jsxs("p",{className:"login-toggle",children:[s?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",p.jsx("button",{className:"login-toggle-btn",onClick:()=>{i(!s),l("")},children:s?"Inicia sesión":"Regístrate"})]})]})})}function o2({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return p.jsxs("div",{className:"input-box",children:[p.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),p.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),p.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),p.jsx("path",{d:"M12 11h4"}),p.jsx("path",{d:"M12 16h4"}),p.jsx("path",{d:"M8 11h.01"}),p.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const a2=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function l2({selected:t,onSelect:e}){return p.jsx("div",{className:"modes",children:a2.map(n=>p.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[p.jsx("span",{className:"mode-emoji",children:n.icon}),p.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function u2({onClick:t,loading:e}){return p.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?p.jsx("span",{className:"loading-spinner"}):p.jsxs(p.Fragment,{children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M12 3v18"}),p.jsx("path",{d:"M5 10l7-7 7 7"}),p.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const c_={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function c2({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:s}){if(!t)return null;const i=c_[e]||c_.funny;return p.jsxs("div",{className:"response-card fade-in",children:[p.jsxs("div",{className:"response-header",children:[p.jsx("span",{className:"response-mode-icon",children:i.emoji}),p.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",i.label]})]}),p.jsx("p",{className:"response-text",children:t}),p.jsxs("div",{className:"response-actions",children:[p.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),p.jsxs("button",{className:"action-btn",onClick:r,children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("polyline",{points:"23 4 23 10 17 10"}),p.jsx("polyline",{points:"1 20 1 14 7 14"}),p.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),p.jsxs("button",{className:"action-btn",onClick:s,children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"12",cy:"12",r:"10"}),p.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),p.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),p.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const s0=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function h2(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${s0[parseInt(n,10)-1]}`}function d2({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:s,onSendGreeting:i,onSendReminder:o}){const[l,u]=M.useState(""),[c,f]=M.useState(""),[m,y]=M.useState(""),[C,k]=M.useState(""),[P,x]=M.useState("male"),[A,w]=M.useState(!1),[S,V]=M.useState(""),j=g=>{if(g.preventDefault(),!l.trim()||!m||!C)return;const T=`${String(parseInt(m,10)).padStart(2,"0")}-${String(parseInt(C,10)).padStart(2,"0")}`;r(l.trim(),T,P,c.trim()),u(""),f(""),y(""),k(""),x("male"),w(!1)},U=S.toLowerCase(),v=[...t.filter(g=>g.name.toLowerCase().includes(U))].sort((g,T)=>{const[R,N]=g.date.split("-").map(Number),[E,we]=T.date.split("-").map(Number);return N-we||R-E});return p.jsxs("div",{className:"birthdays",children:[n&&p.jsx("p",{className:"error",children:n}),e.length>0&&p.jsxs("div",{className:"birthday-alert fade-in",children:[p.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),p.jsxs("div",{className:"birthday-alert-body",children:[p.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(g=>g.name).join(" y "),"!"]}),p.jsx("div",{className:"birthday-alert-actions",children:e.map(g=>p.jsxs("div",{className:"birthday-alert-row",children:[p.jsxs("button",{className:"action-btn primary",onClick:()=>i(g),children:["🎉 Felicitar a ",g.name]}),p.jsx("button",{className:"action-btn",onClick:()=>o(g),children:"🔔 Recordarme"}),g.phone&&p.jsx("a",{className:"action-btn",href:`tel:${g.phone}`,children:"📞 Llamar"})]},g.id))})]})]}),p.jsxs("div",{className:"birthdays-header",children:[p.jsxs("h3",{children:["Tus amigos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-friend-btn",onClick:()=>w(!A),children:A?"✕ Cerrar":"+ Añadir amigo"})]}),A&&p.jsxs("form",{className:"birthday-form fade-in",onSubmit:j,children:[p.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:g=>u(g.target.value),required:!0}),p.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:c,onChange:g=>f(g.target.value)}),p.jsxs("div",{className:"bf-row",children:[p.jsxs("select",{className:"bf-select",value:m,onChange:g=>y(g.target.value),required:!0,children:[p.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(g,T)=>T+1).map(g=>p.jsx("option",{value:g,children:g},g))]}),p.jsxs("select",{className:"bf-select",value:C,onChange:g=>k(g.target.value),required:!0,children:[p.jsx("option",{value:"",children:"Mes"}),s0.map((g,T)=>p.jsx("option",{value:T+1,children:g},T))]})]}),p.jsxs("div",{className:"bf-gender",children:[p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"male",checked:P==="male",onChange:()=>x("male")}),"Masculino"]}),p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"female",checked:P==="female",onChange:()=>x("female")}),"Femenino"]}),p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"other",checked:P==="other",onChange:()=>x("other")}),"Otro / No sé"]})]}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&p.jsxs("div",{className:"search-box",children:[p.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("path",{d:"M21 21l-4.35-4.35"})]}),p.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar amigo...",value:S,onChange:g=>V(g.target.value)}),S&&p.jsx("button",{className:"search-clear",onClick:()=>V(""),children:"✕"})]}),v.length===0&&p.jsx("p",{className:"birthdays-empty",children:S?"No se encontraron amigos.":"No has añadido ningún cumpleaños todavía."}),p.jsx("div",{className:"birthdays-list",children:v.map(g=>p.jsxs("div",{className:"birthday-item fade-in",children:[p.jsxs("div",{className:"birthday-item-info",children:[p.jsxs("span",{className:"birthday-item-name",children:[g.name,g.gender==="male"&&" 👨",g.gender==="female"&&" 👩",g.gender==="other"&&" 🧑"]}),p.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",h2(g.date)]}),g.phone&&p.jsxs("span",{className:"birthday-item-phone",children:["📞 ",g.phone]})]}),p.jsxs("div",{className:"birthday-item-actions",children:[g.phone&&p.jsx("a",{className:"contact-action-btn",href:`tel:${g.phone}`,title:"Llamar",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),p.jsx("button",{className:"birthday-item-delete",onClick:()=>s(g.id),title:"Eliminar",children:"✕"})]})]},g.id))})]})}const f2=["fontanero","electricista","pintor","informatico","medico","ingeniero","arquitecto","maestro","herrero","asesor","jardinero","comercial","agricultor","repuestos"];function sh(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function p2({contacts:t,error:e,onAdd:n,onRemove:r}){const[s,i]=M.useState(""),[o,l]=M.useState(""),[u,c]=M.useState(""),[f,m]=M.useState(""),[y,C]=M.useState(""),[k,P]=M.useState(""),[x,A]=M.useState(3),[w,S]=M.useState(!1),[V,j]=M.useState(""),U=N=>{N.preventDefault(),s.trim()&&(n({name:s.trim(),phone:o.trim(),email:u.trim(),city:f.trim(),webpage:y.trim(),occupation:k,rating:x}),i(""),l(""),c(""),m(""),C(""),P(""),A(3),S(!1))};async function I(N){const E=[`*${N.name}*`];N.phone&&E.push(`📞 ${N.phone}`),N.email&&E.push(`✉️ ${N.email}`),N.city&&E.push(`📍 ${N.city}`),N.webpage&&E.push(`🌐 ${N.webpage}`),N.occupation&&E.push(`💼 ${sh(N.occupation)}`),E.push(`⭐ ${"★".repeat(N.rating)}${"☆".repeat(5-N.rating)}`);const we=E.join(`
`);if(navigator.share)try{await navigator.share({title:N.name,text:we});return}catch{}try{await navigator.clipboard.writeText(we)}catch{}}const v=V.toLowerCase(),g=t.filter(N=>N.name.toLowerCase().includes(v)),T={};for(const N of g){const E=N.occupation||"sin ocupacion";T[E]||(T[E]=[]),T[E].push(N)}const R=Object.keys(T).sort((N,E)=>N==="sin ocupacion"?1:E==="sin ocupacion"?-1:N.localeCompare(E));return p.jsxs("div",{className:"contacts",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"contacts-header",children:[p.jsxs("h3",{children:["Contactos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-contact-btn",onClick:()=>S(!w),children:w?"✕ Cerrar":"+ Añadir contacto"})]}),w&&p.jsxs("form",{className:"contact-form fade-in",onSubmit:U,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:N=>i(N.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"tel",placeholder:"Teléfono",value:o,onChange:N=>l(N.target.value)}),p.jsx("input",{className:"cf-input",type:"email",placeholder:"Email",value:u,onChange:N=>c(N.target.value)}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Ciudad",value:f,onChange:N=>m(N.target.value)}),p.jsx("input",{className:"cf-input",type:"url",placeholder:"Web",value:y,onChange:N=>C(N.target.value)}),p.jsxs("select",{className:"cf-select",value:k,onChange:N=>P(N.target.value),children:[p.jsx("option",{value:"",children:"Selecciona ocupación"}),f2.map(N=>p.jsx("option",{value:N,children:sh(N)},N))]}),p.jsxs("div",{className:"cf-rating",children:[p.jsx("span",{children:"Valoración:"}),p.jsx("div",{className:"stars",children:[1,2,3,4,5].map(N=>p.jsx("button",{type:"button",className:`star ${N<=x?"active":""}`,onClick:()=>A(N),children:N<=x?"★":"☆"},N))})]}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&p.jsxs("div",{className:"search-box",children:[p.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("path",{d:"M21 21l-4.35-4.35"})]}),p.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar contacto...",value:V,onChange:N=>j(N.target.value)}),V&&p.jsx("button",{className:"search-clear",onClick:()=>j(""),children:"✕"})]}),g.length===0&&!w&&p.jsx("p",{className:"contacts-empty",children:V?"No se encontraron contactos.":"No has añadido ningún contacto todavía."}),p.jsx("div",{className:"contacts-list",children:R.map(N=>p.jsxs("div",{className:"contact-group",children:[p.jsx("h4",{className:"contact-group-title",children:N==="sin ocupacion"?"Otros":sh(N)}),T[N].map(E=>p.jsxs("div",{className:"contact-item fade-in",children:[p.jsxs("div",{className:"contact-item-info",children:[p.jsx("span",{className:"contact-item-name",children:E.name}),p.jsxs("div",{className:"contact-item-details",children:[E.phone&&p.jsxs("span",{children:["📞 ",E.phone]}),E.email&&p.jsxs("span",{children:["✉️ ",E.email]}),E.city&&p.jsxs("span",{children:["📍 ",E.city]}),E.webpage&&p.jsxs("span",{children:["🌐 ",E.webpage]}),p.jsxs("span",{className:"stars-small",children:["★".repeat(E.rating),"☆".repeat(5-E.rating)]})]}),(E.phone||E.email)&&p.jsxs("div",{className:"contact-actions",children:[E.phone&&p.jsx("a",{className:"contact-action-btn",href:`tel:${E.phone}`,title:"Llamar",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),E.email&&p.jsx("a",{className:"contact-action-btn",href:`mailto:${E.email}`,title:"Email",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),p.jsx("button",{className:"contact-action-btn",onClick:()=>I(E),title:"Compartir",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"18",cy:"5",r:"3"}),p.jsx("circle",{cx:"6",cy:"12",r:"3"}),p.jsx("circle",{cx:"18",cy:"19",r:"3"}),p.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),p.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})]})]}),p.jsx("button",{className:"contact-item-delete",onClick:()=>r(E.id),title:"Eliminar",children:"✕"})]},E.id))]},N))})]})}function m2({favorites:t,error:e,onAdd:n,onRemove:r}){const[s,i]=M.useState(""),[o,l]=M.useState(""),[u,c]=M.useState(""),[f,m]=M.useState(!1),y=P=>{P.preventDefault(),s.trim()&&(n({name:s.trim(),url:o.trim(),description:u.trim()}),i(""),l(""),c(""),m(!1))},C=[...t].sort((P,x)=>P.name.localeCompare(x.name));async function k(P){const x=`${P.name}${P.url?`
`+P.url:""}${P.description?`
`+P.description:""}`;if(navigator.share)try{await navigator.share({title:P.name,text:x});return}catch{}try{await navigator.clipboard.writeText(x)}catch{}}return p.jsxs("div",{className:"favorites",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"favorites-header",children:[p.jsxs("h3",{children:["Favoritos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-fav-btn",onClick:()=>m(!f),children:f?"✕ Cerrar":"+ Añadir favorito"})]}),f&&p.jsxs("form",{className:"fav-form fade-in",onSubmit:y,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:P=>i(P.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"url",placeholder:"URL (https://...)",value:o,onChange:P=>l(P.target.value)}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Descripción",value:u,onChange:P=>c(P.target.value)}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),C.length===0&&!f&&p.jsx("p",{className:"favorites-empty",children:"No has añadido ningún favorito todavía."}),p.jsx("div",{className:"favorites-list",children:C.map(P=>p.jsxs("div",{className:"fav-item fade-in",children:[p.jsxs("div",{className:"fav-item-info",children:[p.jsx("a",{className:"fav-item-name",href:P.url,target:"_blank",rel:"noopener noreferrer",children:P.name}),P.description&&p.jsx("span",{className:"fav-item-desc",children:P.description}),P.url&&p.jsx("span",{className:"fav-item-url",children:P.url})]}),p.jsxs("div",{className:"fav-item-actions",children:[p.jsx("button",{className:"fav-action-btn",onClick:()=>k(P),title:"Compartir",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:[p.jsx("circle",{cx:"18",cy:"5",r:"3"}),p.jsx("circle",{cx:"6",cy:"12",r:"3"}),p.jsx("circle",{cx:"18",cy:"19",r:"3"}),p.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),p.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),p.jsx("button",{className:"fav-item-delete",onClick:()=>r(P.id),title:"Eliminar",children:"✕"})]})]},P.id))})]})}const g2=[{key:"length",label:"Longitud"},{key:"temp",label:"Temperatura"},{key:"weight",label:"Peso"},{key:"volume",label:"Volumen"},{key:"currency",label:"Moneda"}],Wa={length:[{key:"m",label:"Metro",toBase:1},{key:"km",label:"Kilómetro",toBase:1e3},{key:"cm",label:"Centímetro",toBase:.01},{key:"mm",label:"Milímetro",toBase:.001},{key:"mi",label:"Milla",toBase:1609.344},{key:"yd",label:"Yarda",toBase:.9144},{key:"ft",label:"Pie",toBase:.3048},{key:"in",label:"Pulgada",toBase:.0254}],weight:[{key:"kg",label:"Kilogramo",toBase:1},{key:"g",label:"Gramo",toBase:.001},{key:"mg",label:"Miligramo",toBase:1e-6},{key:"lb",label:"Libra",toBase:.453592},{key:"oz",label:"Onza",toBase:.0283495},{key:"t",label:"Tonelada",toBase:1e3}],volume:[{key:"l",label:"Litro",toBase:1},{key:"ml",label:"Mililitro",toBase:.001},{key:"gal",label:"Galón",toBase:3.78541},{key:"floz",label:"Onza líquida",toBase:.0295735},{key:"m3",label:"Metro cúbico",toBase:1e3}],currency:[{key:"eur",label:"Euro (EUR)",toBase:1},{key:"usd",label:"Dólar (USD)",toBase:.92},{key:"gbp",label:"Libra (GBP)",toBase:1.17},{key:"jpy",label:"Yen (JPY)",toBase:.0061},{key:"mxn",label:"Peso mexicano (MXN)",toBase:.045},{key:"ars",label:"Peso argentino (ARS)",toBase:95e-5}]};function y2(t,e,n){let r;return e==="c"?r=t:e==="f"?r=(t-32)*5/9:r=t-273.15,n==="c"?r:n==="f"?r*9/5+32:r+273.15}const h_=[{key:"c",label:"Celsius (°C)"},{key:"f",label:"Fahrenheit (°F)"},{key:"k",label:"Kelvin (K)"}];function d_(t){if(!isFinite(t))return"—";const e=t.toPrecision(10),n=parseFloat(e);return n%1===0?n.toString():n.toFixed(4).replace(/\.?0+$/,"")}function _2(){var y,C;const[t,e]=M.useState("length"),[n,r]=M.useState(""),[s,i]=M.useState(""),[o,l]=M.useState(""),u=t==="temp",c=u?h_:Wa[t],f=k=>{e(k),r(""),i(""),l("")},m=(()=>{const k=parseFloat(o);if(isNaN(k)||!n||!s)return null;if(u)return d_(y2(k,n,s));const P=Wa[t].find(A=>A.key===n),x=Wa[t].find(A=>A.key===s);return!P||!x?null:d_(k*P.toBase/x.toBase)})();return p.jsxs("div",{className:"converter",children:[p.jsx("div",{className:"conv-cats",children:g2.map(k=>p.jsx("button",{className:`conv-cat ${t===k.key?"active":""}`,onClick:()=>f(k.key),children:k.label},k.key))}),p.jsxs("div",{className:"conv-form",children:[p.jsx("input",{className:"cf-input",type:"number",placeholder:"Valor",value:o,onChange:k=>l(k.target.value)}),p.jsxs("div",{className:"conv-row",children:[p.jsxs("select",{className:"cf-select",value:n,onChange:k=>r(k.target.value),children:[p.jsx("option",{value:"",children:"De"}),c.map(k=>p.jsx("option",{value:k.key,children:k.label},k.key))]}),p.jsx("span",{className:"conv-arrow",children:"→"}),p.jsxs("select",{className:"cf-select",value:s,onChange:k=>i(k.target.value),children:[p.jsx("option",{value:"",children:"A"}),c.map(k=>p.jsx("option",{value:k.key,children:k.label},k.key))]})]}),m!==null&&p.jsxs("div",{className:"conv-result fade-in",children:[p.jsx("span",{className:"conv-result-value",children:m}),p.jsx("span",{className:"conv-result-unit",children:u?(y=h_.find(k=>k.key===s))==null?void 0:y.label:(C=Wa[t].find(k=>k.key===s))==null?void 0:C.label})]})]})]})}const f_=["¿Qué le dice un 0 a un 8? Bonito cinturón.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué hace una abeja en el gimnasio? Zumba.","—¡Ojalá fuera un chip! —Decía la patata.","¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.","—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.","¿Qué hace un pez en el cine? Nemo.","—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.","—Doctor, tengo 3 brazos. —Pues vístase y calle.","¿Qué hace una foca en una obra? Foca-pá.","—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.","—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.","Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?","¿Cómo se llama una italiana con bigote? Mafalda.","—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.","¿Qué le dice un jaguar a otro? Jaguar tú.","—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.","—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.","—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.","¿Cómo se llaman los primos de Tarzán? Los primos del monte.","—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.","—¿Qué es verde y habla por los codos? —Un perejil parlante.","—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.","¿Cómo se dice camarero en chino? Sumenú.","—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.","—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.","—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.","¿Qué hace un perro con un taladro? Taladrando.","—¿Qué son 50 caracoles? —Cincuenta centímetros.","Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien."],v2=["⚀","⚁","⚂","⚃","⚄","⚅"];function aa(t,e){return Math.floor(Math.random()*(e-t+1))+t}function E2({onSelect:t}){const e=[{key:"dice",label:"Dado",icon:"🎲"},{key:"coin",label:"Moneda",icon:"🪙"},{key:"rps",label:`Piedra,
Papel,
Tijera`,icon:"✂️"},{key:"random",label:`Número
al azar`,icon:"🔢"},{key:"joke",label:"Chiste",icon:"💡"},{key:"pepe",label:`Pepe
Game`,icon:"🎮"}];return p.jsxs("div",{className:"ent-hub",children:[p.jsx("h3",{className:"ent-hub-title",children:"Entretenimiento"}),p.jsx("div",{className:"ent-grid",children:e.map(n=>p.jsxs("button",{className:"ent-card",onClick:()=>t(n.key),children:[p.jsx("span",{className:"ent-card-icon",children:n.icon}),p.jsx("span",{className:"ent-card-label",children:n.label})]},n.key))})]})}function w2(){const[t,e]=M.useState(null),[n,r]=M.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🎲 Dado"}),p.jsx("div",{className:"ent-result",children:t&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"ent-dice",children:t}),p.jsx("span",{className:"ent-big-num",children:n})]})}),p.jsx("button",{className:"generate-btn",onClick:()=>{const s=aa(1,6);e(v2[s-1]),r(s)},children:"Lanzar dado"})]})}function T2(){const[t,e]=M.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🪙 Moneda"}),p.jsx("div",{className:"ent-result",children:t&&p.jsx("span",{className:"ent-coin",children:t==="cara"?"🪙 Cara":"🪙 Cruz"})}),p.jsx("button",{className:"generate-btn",onClick:()=>e(aa(0,1)?"cara":"cruz"),children:"Lanzar moneda"})]})}function I2(){const t=[{key:"rock",label:"Piedra",icon:"🪨",beats:"scissors"},{key:"paper",label:"Papel",icon:"📄",beats:"rock"},{key:"scissors",label:"Tijera",icon:"✂️",beats:"paper"}],[e,n]=M.useState(null),[r,s]=M.useState(null),[i,o]=M.useState(null),l=c=>{const f=t[aa(0,2)];n(c),s(f.key),c===f.key?o("🤝 Empate"):t.find(m=>m.key===c).beats===f.key?o("🎉 ¡Ganaste!"):o("😢 Perdiste")},u=()=>{n(null),s(null),o(null)};return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"✂️ Piedra, Papel o Tijera"}),e?p.jsxs("div",{className:"ent-rps-result",children:[p.jsxs("div",{className:"ent-rps-row",children:[p.jsxs("div",{className:"ent-rps-col",children:[p.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===e).icon}),p.jsx("span",{children:"Tú"})]}),p.jsx("span",{className:"ent-vs",children:"VS"}),p.jsxs("div",{className:"ent-rps-col",children:[p.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===r).icon}),p.jsx("span",{children:"App"})]})]}),p.jsx("div",{className:"ent-result",children:p.jsx("span",{className:"ent-rps-outcome",children:i})}),p.jsx("button",{className:"generate-btn",onClick:u,children:"Otra vez"})]}):p.jsx("div",{className:"ent-rps-btns",children:t.map(c=>p.jsxs("button",{className:"rps-btn",onClick:()=>l(c.key),children:[p.jsx("span",{className:"rps-icon",children:c.icon}),p.jsx("span",{children:c.label})]},c.key))})]})}function S2(){const[t,e]=M.useState("1"),[n,r]=M.useState("100"),[s,i]=M.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🔢 Número al azar"}),p.jsxs("div",{className:"conv-row",style:{marginTop:0},children:[p.jsx("input",{className:"cf-input",type:"number",placeholder:"Mín",value:t,onChange:o=>e(o.target.value)}),p.jsx("span",{className:"conv-arrow",children:"→"}),p.jsx("input",{className:"cf-input",type:"number",placeholder:"Máx",value:n,onChange:o=>r(o.target.value)})]}),p.jsx("div",{className:"ent-result",children:s!==null&&p.jsx("span",{className:"ent-big-num",children:s})}),p.jsx("button",{className:"generate-btn",onClick:()=>i(aa(parseInt(t)||0,parseInt(n)||100)),children:"Generar"})]})}function A2(){const[t,e]=M.useState("");return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"💡 Chiste"}),p.jsx("div",{className:"ent-joke-box",children:t&&p.jsx("p",{className:"ent-joke-text",children:t})}),p.jsx("button",{className:"generate-btn",onClick:()=>e(f_[aa(0,f_.length-1)]),children:"Nuevo chiste"})]})}function C2(){return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🎮 Pepe Game"}),p.jsx("p",{style:{color:"#64748b",fontSize:14,marginBottom:16,textAlign:"center"},children:"Abrir Pepe Game en nueva pestaña"}),p.jsx("a",{className:"generate-btn",href:"https://jlrmaster-creator.github.io/pepe_game/1.html",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex"},children:"Abrir juego"})]})}const k2={dice:w2,coin:T2,rps:I2,random:S2,joke:A2,pepe:C2};function N2(){const[t,e]=M.useState(null),n=t?k2[t]:null;return p.jsx("div",{className:"entertainment",children:t?p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"ent-back",onClick:()=>e(null),children:"← Volver"}),p.jsx(n,{})]}):p.jsx(E2,{onSelect:e})})}const R2=[{key:"daily",label:"A diario"},{key:"weekly",label:"Semanal"},{key:"monthly",label:"Mensual"},{key:"once",label:"Una vez"}],i0=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function P2(t){return t.earlyBird?7:9}function x2(t){const e=P2(t);return t.frequency==="daily"?`A diario (${e}:00)`:t.frequency==="weekly"?`Cada ${i0[t.weekday]} (${e}:00)`:t.frequency==="monthly"?`Día ${t.day} de cada mes (${e}:00)`:t.frequency==="once"?`${t.day}/${String(t.month).padStart(2,"0")} (${e}:00)`:""}function b2(t){return t.lastFiredAt?Date.now()-new Date(t.lastFiredAt).getTime()<36e5:!1}function ih(t){return(t?7:9)+":00"}const oh={name:"",note:"",frequency:"daily",weekday:1,day:1,month:1,earlyBird:!1};function D2({reminders:t,error:e,justFired:n,onAdd:r,onUpdate:s,onRemove:i,onShare:o,onUnshare:l}){const[u,c]=M.useState({...oh}),[f,m]=M.useState(!1),[y,C]=M.useState(null),[k,P]=M.useState(null),[x,A]=M.useState(""),w=(g,T)=>c(R=>({...R,[g]:T})),S=()=>{c({...oh}),C(null),m(!0)},V=g=>{c({name:g.name,note:g.note||"",frequency:g.frequency,weekday:g.weekday??1,day:g.day??1,month:g.month??1,earlyBird:g.earlyBird??!1}),C(g.id),m(!0)},j=g=>{if(g.preventDefault(),!u.name.trim())return;const T={name:u.name.trim(),note:u.note.trim(),frequency:u.frequency,active:!0,earlyBird:u.earlyBird};u.frequency==="weekly"?T.weekday=u.weekday:u.frequency==="monthly"?T.day=u.day:u.frequency==="once"&&(T.day=u.day,T.month=u.month),y?s(y,T):r(T),c({...oh}),C(null),m(!1)},U=g=>{!x.trim()||!x.includes("@")||(o(g,x.trim()),A(""),P(null))},I=t.filter(g=>!g.isShared).length,v=[...t].sort((g,T)=>g.active!==T.active?g.active?-1:1:g.name.localeCompare(T.name));return p.jsxs("div",{className:"reminders",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"reminders-header",children:[p.jsxs("h3",{children:["Recordatorios ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-reminder-btn",onClick:S,disabled:I>=5&&!y,children:"+ Añadir"})]}),f&&p.jsxs("form",{className:"reminder-form fade-in",onSubmit:j,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre (ej: Tomar pastillas)",value:u.name,onChange:g=>w("name",g.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nota (opcional)",value:u.note,onChange:g=>w("note",g.target.value)}),p.jsx("select",{className:"cf-select",value:u.frequency,onChange:g=>w("frequency",g.target.value),children:R2.map(g=>p.jsx("option",{value:g.key,children:g.label},g.key))}),u.frequency==="weekly"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"reminder-label",children:"Día de la semana:"}),p.jsx("select",{className:"cf-select",value:u.weekday,onChange:g=>w("weekday",parseInt(g.target.value)),children:i0.map((g,T)=>p.jsx("option",{value:T,children:g},T))})]}),u.frequency==="monthly"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"reminder-label",children:"Día del mes:"}),p.jsx("select",{className:"cf-select",value:u.day,onChange:g=>w("day",parseInt(g.target.value)),children:Array.from({length:28},(g,T)=>p.jsx("option",{value:T+1,children:T+1},T+1))})]}),u.frequency==="once"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"reminder-label",children:"Día:"}),p.jsxs("div",{className:"reminder-row",children:[p.jsx("select",{className:"cf-select",value:u.day,onChange:g=>w("day",parseInt(g.target.value)),children:Array.from({length:31},(g,T)=>p.jsx("option",{value:T+1,children:T+1},T+1))}),p.jsx("span",{className:"reminder-colon",children:"/"}),p.jsx("select",{className:"cf-select",value:u.month,onChange:g=>w("month",parseInt(g.target.value)),children:Array.from({length:12},(g,T)=>p.jsx("option",{value:T+1,children:String(T+1).padStart(2,"0")},T+1))})]})]}),p.jsxs("label",{className:"reminder-checkbox-label",children:[p.jsx("input",{type:"checkbox",className:"reminder-checkbox",checked:u.earlyBird,onChange:g=>w("earlyBird",g.target.checked)}),p.jsxs("span",{children:["¿Eres madrugador? La primera notificación sonará a las ",p.jsx("strong",{children:ih(u.earlyBird)})]})]}),p.jsxs("p",{className:"reminder-form-hint",children:["El aviso sonará cada hora desde las ",ih(u.earlyBird)," hasta que lo desactives (🔔)."]}),p.jsxs("div",{className:"reminder-form-actions",children:[p.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>{m(!1),C(null)},children:"Cancelar"}),p.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:y?"Guardar cambios":"Crear recordatorio"})]})]}),v.length===0&&!f&&p.jsx("p",{className:"reminders-empty",children:"No tienes recordatorios. ¡Añade uno!"}),p.jsx("div",{className:"reminders-list",children:v.map(g=>{const T=b2(g)||n===g.id;return p.jsxs("div",{className:`reminder-item fade-in ${T?"fired":""} ${g.active?"":"inactive"}`,children:[p.jsxs("div",{className:"reminder-item-left",children:[p.jsxs("div",{className:"reminder-item-header",children:[p.jsx("span",{className:"reminder-item-name",children:g.name}),T&&p.jsx("span",{className:"reminder-fired-badge",children:"✅ Ahora"})]}),g.note&&p.jsx("span",{className:"reminder-item-note",children:g.note}),p.jsx("span",{className:"reminder-item-time",children:x2(g)}),g.active&&p.jsxs("span",{className:"reminder-hourly-note",children:["Cada hora desde las ",ih(g.earlyBird)," hasta desactivar (🔔)"]}),g.isShared&&g.ownerEmail&&p.jsxs("span",{className:"reminder-shared-from",children:["Compartido por ",g.ownerEmail]}),!g.isShared&&g.sharedWithEmails&&g.sharedWithEmails.length>0&&p.jsx("div",{className:"reminder-shared-with",children:g.sharedWithEmails.map((R,N)=>p.jsxs("span",{className:"reminder-shared-tag",children:[R,p.jsx("button",{className:"reminder-shared-remove",onClick:()=>l(g.id,g.sharedWithUids[N],R),title:"Eliminar",children:"✕"})]},R))})]}),p.jsx("div",{className:"reminder-item-actions",children:!g.isShared&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:`reminder-toggle-btn ${g.active?"on":"off"}`,onClick:()=>s(g.id,{active:!g.active}),title:g.active?"Desactivar":"Activar",children:g.active?"🔔":"🔕"}),p.jsx("button",{className:"reminder-edit-btn",onClick:()=>V(g),title:"Editar",children:"✏️"}),p.jsx("button",{className:"reminder-share-btn",onClick:()=>P(k===g.id?null:g.id),title:"Compartir",children:"📤"}),p.jsx("button",{className:"reminder-delete-btn",onClick:()=>i(g.id),title:"Eliminar",children:"🗑️"})]})}),k===g.id&&!g.isShared&&p.jsxs("div",{className:"reminder-share-form fade-in",children:[p.jsx("input",{className:"cf-input",type:"email",placeholder:"Email del usuario",value:x,onChange:R=>A(R.target.value)}),p.jsx("button",{className:"generate-btn",style:{marginBottom:0,padding:"8px 12px",fontSize:13},onClick:()=>U(g.id),children:"Compartir"})]})]},g.id)})}),I>=5&&!y&&p.jsx("p",{className:"reminders-limit",children:"Máximo 5 recordatorios propios permitidos."})]})}const V2=[{value:"#ffffff",label:"Blanco"},{value:"#fef9c3",label:"Amarillo"},{value:"#dcfce7",label:"Verde"},{value:"#dbeafe",label:"Azul"},{value:"#fce7f3",label:"Rosa"},{value:"#ede9fe",label:"Lila"}],Ha={title:"",body:"",color:"#fef9c3"};function O2({notes:t,error:e,maxNotes:n,onAdd:r,onUpdate:s,onRemove:i,onTogglePin:o}){const[l,u]=M.useState({...Ha}),[c,f]=M.useState(!1),[m,y]=M.useState(null),C=(S,V)=>u(j=>({...j,[S]:V})),k=()=>{u({...Ha}),y(null),f(!0)},P=S=>{u({title:S.title,body:S.body,color:S.color}),y(S.id),f(!0)},x=S=>{S.preventDefault(),!(!l.body.trim()&&!l.title.trim())&&(m?s(m,{title:l.title.trim(),body:l.body.trim(),color:l.color}):r({title:l.title.trim(),body:l.body.trim(),color:l.color}),u({...Ha}),y(null),f(!1))},A=()=>{u({...Ha}),y(null),f(!1)},w=t.length>=n&&!m;return p.jsxs("div",{className:"notes",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"notes-header",children:[p.jsxs("h3",{children:["Notas",t.length>0&&p.jsxs("span",{className:"count-badge",children:[t.length,"/",n]})]}),p.jsx("button",{className:"add-note-btn",onClick:k,disabled:w,children:"+ Añadir"})]}),c&&p.jsxs("form",{className:"note-form fade-in",onSubmit:x,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Título (opcional)",value:l.title,onChange:S=>C("title",S.target.value),maxLength:60}),p.jsx("textarea",{className:"note-form-textarea",placeholder:"Escribe tu nota aquí…",value:l.body,onChange:S=>C("body",S.target.value),rows:4,maxLength:500,required:!l.title.trim()}),p.jsxs("div",{className:"note-color-row",children:[p.jsx("span",{className:"reminder-label",children:"Color:"}),p.jsx("div",{className:"note-color-swatches",children:V2.map(S=>p.jsx("button",{type:"button",title:S.label,className:`note-color-swatch ${l.color===S.value?"selected":""}`,style:{background:S.value},onClick:()=>C("color",S.value)},S.value))})]}),p.jsxs("div",{className:"reminder-form-actions",children:[p.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:A,children:"Cancelar"}),p.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:m?"Guardar cambios":"Crear nota"})]})]}),t.length===0&&!c&&p.jsx("p",{className:"reminders-empty",children:"No tienes notas. ¡Añade una!"}),p.jsx("div",{className:"notes-grid",children:t.map(S=>p.jsxs("div",{className:`note-card fade-in ${S.pinned?"pinned":""}`,style:{background:S.color||"#ffffff"},children:[p.jsxs("div",{className:"note-card-top",children:[S.title&&p.jsx("p",{className:"note-card-title",children:S.title}),p.jsx("p",{className:"note-card-body",children:S.body})]}),p.jsxs("div",{className:"note-card-footer",children:[p.jsx("span",{className:"note-card-date",children:new Date(S.updatedAt).toLocaleDateString("es-ES",{day:"2-digit",month:"short"})}),p.jsxs("div",{className:"note-card-actions",children:[p.jsx("button",{className:`note-pin-btn ${S.pinned?"active":""}`,onClick:()=>o(S.id),title:S.pinned?"Desanclar":"Anclar",children:"📌"}),p.jsx("button",{className:"note-edit-btn",onClick:()=>P(S),title:"Editar",children:"✏️"}),p.jsx("button",{className:"note-delete-btn",onClick:()=>i(S.id),title:"Eliminar",children:"🗑️"})]})]})]},S.id))}),w&&p.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," notas permitidas."]})]})}const ah=[{key:"reply",label:"Responder",icon:"💬"},{key:"birthdays",label:"Cumpleaños",icon:"🎂"},{key:"contacts",label:"Contactos",icon:"👥"},{key:"converter",label:"Conversor",icon:"🔄"},{key:"favorites",label:"Favoritos",icon:"🔗"},{key:"entertainment",label:"Entretenimiento",icon:"🎮"},{key:"reminders",label:"Recordatorios",icon:"🔔"},{key:"notes",label:"Notas",icon:"📝"}];function L2(){const[t,e]=M.useState("reply"),[n,r]=M.useState(!1),s=M.useRef(null),{user:i,logout:o}=hs(),l=Nx(),u=Dx(),c=Mx(),f=zx(),m=e2(),y=s2();M.useEffect(()=>{const x=A=>{s.current&&!s.current.contains(A.target)&&r(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const C=x=>{const A=ah.find(w=>w.key===x);if(A!=null&&A.url){window.open(A.url,"_blank"),r(!1);return}e(x),r(!1)},k=ah.find(x=>x.key===t),P=k&&!k.url?k.label:"";return p.jsxs("div",{className:"container",children:[p.jsxs("header",{children:[p.jsxs("div",{className:"header-row",children:[p.jsxs("div",{className:"header-left",ref:s,children:[p.jsx("button",{className:"hamburger-btn",onClick:()=>r(!n),"aria-label":"Menú",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),n&&p.jsx("div",{className:"dropdown-menu",children:ah.map(x=>p.jsxs("button",{className:`dropdown-item ${t===x.key?"active":""}`,onClick:()=>C(x.key),children:[p.jsx("span",{className:"dropdown-icon",children:x.icon}),x.label]},x.key))})]}),p.jsx("h1",{children:"Toolbox AI"}),p.jsxs("div",{className:"header-user",children:[p.jsx("span",{className:"header-email",children:i.email}),p.jsx("button",{className:"logout-btn",onClick:o,title:"Cerrar sesión",children:p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),p.jsx("polyline",{points:"16 17 21 12 16 7"}),p.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),p.jsx("div",{className:"current-tab-label",children:P})]}),t==="reply"?p.jsxs("div",{className:"tab-content",children:[p.jsx(o2,{value:l.message,onChange:x=>l.setMessage(x.target.value)}),p.jsx(l2,{selected:l.mode,onSelect:l.setMode}),p.jsx(u2,{onClick:l.generate,loading:l.loading}),l.error&&p.jsx("p",{className:"error fade-in",children:l.error}),p.jsx(c2,{response:l.response,mode:l.mode,onSend:l.sendToWhatsApp,onRegenerate:l.generate,onMakeFunnier:l.makeFunnier}),l.history.length>0&&p.jsxs("section",{className:"history",children:[p.jsxs("div",{className:"history-header",children:[p.jsx("h3",{children:"Historial"}),p.jsx("button",{className:"history-clear",onClick:l.clearHistory,children:"Limpiar"})]}),l.history.slice(0,5).map((x,A)=>p.jsxs("div",{className:"history-item fade-in",children:[p.jsxs("div",{className:"history-item-header",children:[p.jsxs("span",{className:"history-mode-badge",children:[x.mode==="funny"?"😄":x.mode==="elegant"?"⭐":x.mode==="cold"?"❄️":"🔑"," ",x.mode]}),p.jsx("span",{className:"history-time",children:new Date(x.date).toLocaleTimeString()})]}),p.jsx("p",{className:"history-reply",children:x.reply})]},A))]})]}):t==="birthdays"?p.jsx("div",{className:"tab-content",children:p.jsx(d2,{friends:u.friends,todayBirthdays:u.todayBirthdays,error:u.error,onAdd:u.addFriend,onRemove:u.removeFriend,onSendGreeting:u.sendGreeting,onSendReminder:u.sendReminder})}):t==="contacts"?p.jsx("div",{className:"tab-content",children:p.jsx(p2,{contacts:c.contacts,error:c.error,onAdd:c.addContact,onRemove:c.removeContact})}):t==="converter"?p.jsx("div",{className:"tab-content",children:p.jsx(_2,{})}):t==="entertainment"?p.jsx("div",{className:"tab-content",children:p.jsx(N2,{})}):t==="reminders"?p.jsx("div",{className:"tab-content",children:p.jsx(D2,{reminders:m.reminders,error:m.error,justFired:m.justFired,userEmail:m.userEmail,onAdd:m.addReminder,onUpdate:m.updateReminder,onRemove:m.removeReminder,onShare:m.shareReminder,onUnshare:m.unshareReminder})}):t==="notes"?p.jsx("div",{className:"tab-content",children:p.jsx(O2,{notes:y.notes,error:y.error,maxNotes:y.maxNotes,onAdd:y.addNote,onUpdate:y.updateNote,onRemove:y.removeNote,onTogglePin:y.togglePin})}):p.jsx("div",{className:"tab-content",children:p.jsx(m2,{favorites:f.favorites,error:f.error,onAdd:f.addFavorite,onRemove:f.removeFavorite})})]})}function p_({children:t}){return p.jsxs("div",{className:"app-shell",children:[t,p.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda © 2026"})]})}function M2(){return p.jsx("div",{className:"loading-screen",children:p.jsx("div",{className:"loading-spinner"})})}function j2(){const{user:t,loading:e}=hs();return e?p.jsx(p_,{children:p.jsx(M2,{})}):p.jsx(p_,{children:t?p.jsx(L2,{}):p.jsx(i2,{})})}lh.createRoot(document.getElementById("root")).render(p.jsx(Ax,{children:p.jsx(j2,{})}));
