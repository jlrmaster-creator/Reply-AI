(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Zy={exports:{}},tu={},e_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),p0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),w0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),im=Symbol.iterator;function S0(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,r_={};function ri(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s_(){}s_.prototype=ri.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}var yd=gd.prototype=new s_;yd.constructor=gd;n_(yd,ri.prototype);yd.isPureReactComponent=!0;var om=Array.isArray,i_=Object.prototype.hasOwnProperty,_d={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)i_.call(e,r)&&!o_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Lo,type:t,key:i,ref:o,props:s,_owner:_d.current}}function A0(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function C0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C0(""+t.key):e.toString(36)}function Ba(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case p0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ic(o,0):r,om(s)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),Ba(s,e,n,"",function(c){return c})):s!=null&&(vd(s)&&(s=A0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(am,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",om(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+ic(i,l);o+=Ba(i,e,n,u,s)}else if(u=S0(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+ic(i,l++),o+=Ba(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var r=[],s=0;return Ba(t,r,"","",function(i){return e.call(n,i,s++)}),r}function k0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},$a={transition:null},R0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:$a,ReactCurrentOwner:_d};function l_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ri;ne.Fragment=m0;ne.Profiler=y0;ne.PureComponent=gd;ne.StrictMode=g0;ne.Suspense=w0;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;ne.act=l_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=_d.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)i_.call(e,u)&&!o_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Lo,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:v0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_0,_context:t},t.Consumer=t};ne.createElement=a_;ne.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:E0,render:t}};ne.isValidElement=vd;ne.lazy=function(t){return{$$typeof:I0,_payload:{_status:-1,_result:t},_init:k0}};ne.memo=function(t,e){return{$$typeof:T0,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};ne.unstable_act=l_;ne.useCallback=function(t,e){return at.current.useCallback(t,e)};ne.useContext=function(t){return at.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ne.useEffect=function(t,e){return at.current.useEffect(t,e)};ne.useId=function(){return at.current.useId()};ne.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return at.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ne.useRef=function(t){return at.current.useRef(t)};ne.useState=function(t){return at.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return at.current.useTransition()};ne.version="18.3.1";e_.exports=ne;var j=e_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=j,P0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,b0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)D0.call(e,r)&&!V0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:P0,type:t,key:i,ref:o,props:s,_owner:b0.current}}tu.Fragment=x0;tu.jsx=u_;tu.jsxs=u_;Zy.exports=tu;var p=Zy.exports,Yc={},c_={exports:{}},Tt={},h_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var X=$.length;$.push(Q);e:for(;0<X;){var me=X-1>>>1,Se=$[me];if(0<s(Se,Q))$[me]=Q,$[X]=Se,X=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],X=$.pop();if(X!==Q){$[0]=X;e:for(var me=0,Se=$.length,Cr=Se>>>1;me<Cr;){var St=2*(me+1)-1,kr=$[St],bt=St+1,Pn=$[bt];if(0>s(kr,X))bt<Se&&0>s(Pn,kr)?($[me]=Pn,$[bt]=X,me=bt):($[me]=kr,$[St]=X,me=St);else if(bt<Se&&0>s(Pn,X))$[me]=Pn,$[bt]=X,me=bt;else break e}}return Q}function s($,Q){var X=$.sortIndex-Q.sortIndex;return X!==0?X:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,A=!1,R=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V($){if(N=!1,P($),!R)if(n(u)!==null)R=!0,pi(M);else{var Q=n(c);Q!==null&&mi(V,Q.startTime-$)}}function M($,Q){R=!1,N&&(N=!1,C(v),v=-1),A=!0;var X=g;try{for(P(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||$&&!S());){var me=m.callback;if(typeof me=="function"){m.callback=null,g=m.priorityLevel;var Se=me(m.expirationTime<=Q);Q=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(u)&&r(u),P(Q)}else r(u);m=n(u)}if(m!==null)var Cr=!0;else{var St=n(c);St!==null&&mi(V,St.startTime-Q),Cr=!1}return Cr}finally{m=null,g=X,A=!1}}var U=!1,T=null,v=-1,E=5,y=-1;function S(){return!(t.unstable_now()-y<E)}function k(){if(T!==null){var $=t.unstable_now();y=$;var Q=!0;try{Q=T(!0,$)}finally{Q?w():(U=!1,T=null)}}else U=!1}var w;if(typeof I=="function")w=function(){I(k)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ln=we.port2;we.port1.onmessage=k,w=function(){ln.postMessage(null)}}else w=function(){D(k,0)};function pi($){T=$,U||(U=!0,w())}function mi($,Q){v=D(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,pi(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return $()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=g;g=$;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function($,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,$){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=X+Se,$={id:f++,callback:Q,priorityLevel:$,startTime:X,expirationTime:Se,sortIndex:-1},X>me?($.sortIndex=X,e(c,$),n(u)===null&&$===n(c)&&(N?(C(v),v=-1):N=!0,mi(V,X-me))):($.sortIndex=Se,e(u,$),R||A||(R=!0,pi(M))),$},t.unstable_shouldYield=S,t.unstable_wrapCallback=function($){var Q=g;return function(){var X=g;g=Q;try{return $.apply(this,arguments)}finally{g=X}}}})(d_);h_.exports=d_;var O0=h_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=j,wt=O0;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f_=new Set,ho={};function es(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ho[t]=e,t=0;t<e.length;t++)f_.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,M0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},um={};function j0(t){return Jc.call(um,t)?!0:Jc.call(lm,t)?!1:M0.test(t)?um[t]=!0:(lm[t]=!0,!1)}function F0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U0(t,e,n,r){if(e===null||typeof e>"u"||F0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,wd);We[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,wd);We[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,wd);We[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,r){var s=We.hasOwnProperty(e)?We[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U0(e,n,s,r)&&(n=null),r||s===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),cm=Symbol.iterator;function Di(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,oc;function zi(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var ac=!1;function lc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function z0(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case Xc:return"Profiler";case Id:return"StrictMode";case Zc:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m_:return(t.displayName||"Context")+".Consumer";case p_:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function B0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $0(t){var e=y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=$0(t))}function __(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v_(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function rh(t,e){v_(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Bi(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function E_(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(t){q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ji[e]=Ji[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ji.hasOwnProperty(t)&&Ji[t]?(""+e).trim():e+"px"}function S_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var W0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(W0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,Ps=null,xs=null;function mm(t){if(t=Fo(t)){if(typeof ch!="function")throw Error(F(280));var e=t.stateNode;e&&(e=ou(e),ch(t.stateNode,t.type,e))}}function A_(t){Ps?xs?xs.push(t):xs=[t]:Ps=t}function C_(){if(Ps){var t=Ps,e=xs;if(xs=Ps=null,mm(t),e)for(t=0;t<e.length;t++)mm(e[t])}}function k_(t,e){return t(e)}function R_(){}var uc=!1;function N_(t,e,n){if(uc)return t(e,n);uc=!0;try{return k_(t,e,n)}finally{uc=!1,(Ps!==null||xs!==null)&&(R_(),C_())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var hh=!1;if(_n)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){hh=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{hh=!1}function H0(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xi=!1,hl=null,dl=!1,dh=null,G0={onError:function(t){Xi=!0,hl=t}};function K0(t,e,n,r,s,i,o,l,u){Xi=!1,hl=null,H0.apply(G0,arguments)}function Q0(t,e,n,r,s,i,o,l,u){if(K0.apply(this,arguments),Xi){if(Xi){var c=hl;Xi=!1,hl=null}else throw Error(F(198));dl||(dl=!0,dh=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(ts(t)!==t)throw Error(F(188))}function Y0(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return gm(s),t;if(i===r)return gm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function x_(t){return t=Y0(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var b_=wt.unstable_scheduleCallback,ym=wt.unstable_cancelCallback,J0=wt.unstable_shouldYield,X0=wt.unstable_requestPaint,Ce=wt.unstable_now,Z0=wt.unstable_getCurrentPriorityLevel,kd=wt.unstable_ImmediatePriority,V_=wt.unstable_UserBlockingPriority,fl=wt.unstable_NormalPriority,eI=wt.unstable_LowPriority,O_=wt.unstable_IdlePriority,nu=null,Xt=null;function tI(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:sI,nI=Math.log,rI=Math.LN2;function sI(t){return t>>>=0,t===0?32:31-(nI(t)/rI|0)|0}var Ta=64,Ia=4194304;function $i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=$i(l):(i&=o,i!==0&&(r=$i(i)))}else o=n&~s,o!==0?r=$i(o):i!==0&&(r=$i(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),s=1<<n,r|=t[n],e&=~s;return r}function iI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Ft(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=iI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L_(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function aI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Ft(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function M_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,Nd,F_,U_,z_,ph=!1,Sa=[],Qn=null,Yn=null,Jn=null,mo=new Map,go=new Map,zn=[],lI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Vi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Fo(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function uI(t,e,n,r,s){switch(e){case"focusin":return Qn=Vi(Qn,t,e,n,r,s),!0;case"dragenter":return Yn=Vi(Yn,t,e,n,r,s),!0;case"mouseover":return Jn=Vi(Jn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return mo.set(i,Vi(mo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,go.set(i,Vi(go.get(i)||null,t,e,n,r,s)),!0}return!1}function B_(t){var e=Lr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=P_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return e=Fo(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){qa(t)&&n.delete(e)}function cI(){ph=!1,Qn!==null&&qa(Qn)&&(Qn=null),Yn!==null&&qa(Yn)&&(Yn=null),Jn!==null&&qa(Jn)&&(Jn=null),mo.forEach(vm),go.forEach(vm)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,cI)))}function yo(t){function e(s){return Oi(s,t)}if(0<Sa.length){Oi(Sa[0],t);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&Oi(Qn,t),Yn!==null&&Oi(Yn,t),Jn!==null&&Oi(Jn,t),mo.forEach(e),go.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&zn.shift()}var Ds=kn.ReactCurrentBatchConfig,ml=!0;function hI(t,e,n,r){var s=ae,i=Ds.transition;Ds.transition=null;try{ae=1,Pd(t,e,n,r)}finally{ae=s,Ds.transition=i}}function dI(t,e,n,r){var s=ae,i=Ds.transition;Ds.transition=null;try{ae=4,Pd(t,e,n,r)}finally{ae=s,Ds.transition=i}}function Pd(t,e,n,r){if(ml){var s=mh(t,e,n,r);if(s===null)Ec(t,e,r,gl,n),_m(t,r);else if(uI(s,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<lI.indexOf(t)){for(;s!==null;){var i=Fo(s);if(i!==null&&j_(i),i=mh(t,e,n,r),i===null&&Ec(t,e,r,gl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var gl=null;function mh(t,e,n,r){if(gl=null,t=Cd(r),t=Lr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function $_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case kd:return 1;case V_:return 4;case fl:case eI:return 16;case O_:return 536870912;default:return 16}default:return 16}}var Gn=null,xd=null,Wa=null;function q_(){if(Wa)return Wa;var t,e=xd,n=e.length,r,s="value"in Gn?Gn.value:Gn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Wa=s.slice(t,1<r?1-r:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function Em(){return!1}function It(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Aa:Em,this.isPropagationStopped=Em,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=It(si),jo=Ee({},si,{view:0,detail:0}),fI=It(jo),hc,dc,Li,ru=Ee({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Li&&(Li&&t.type==="mousemove"?(hc=t.screenX-Li.screenX,dc=t.screenY-Li.screenY):dc=hc=0,Li=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),wm=It(ru),pI=Ee({},ru,{dataTransfer:0}),mI=It(pI),gI=Ee({},jo,{relatedTarget:0}),fc=It(gI),yI=Ee({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),_I=It(yI),vI=Ee({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EI=It(vI),wI=Ee({},si,{data:0}),Tm=It(wI),TI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},II={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SI[t])?!!e[t]:!1}function bd(){return AI}var CI=Ee({},jo,{key:function(t){if(t.key){var e=TI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?II[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kI=It(CI),RI=Ee({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=It(RI),NI=Ee({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),PI=It(NI),xI=Ee({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),DI=It(xI),bI=Ee({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=It(bI),OI=[9,13,27,32],Vd=_n&&"CompositionEvent"in window,Zi=null;_n&&"documentMode"in document&&(Zi=document.documentMode);var LI=_n&&"TextEvent"in window&&!Zi,W_=_n&&(!Vd||Zi&&8<Zi&&11>=Zi),Sm=" ",Am=!1;function H_(t,e){switch(t){case"keyup":return OI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function MI(t,e){switch(t){case"compositionend":return G_(e);case"keypress":return e.which!==32?null:(Am=!0,Sm);case"textInput":return t=e.data,t===Sm&&Am?null:t;default:return null}}function jI(t,e){if(_s)return t==="compositionend"||!Vd&&H_(t,e)?(t=q_(),Wa=xd=Gn=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var FI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FI[t.type]:e==="textarea"}function K_(t,e,n,r){A_(r),e=yl(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,_o=null;function UI(t){iv(t,0)}function su(t){var e=ws(t);if(__(e))return t}function zI(t,e){if(t==="change")return e}var Q_=!1;if(_n){var pc;if(_n){var mc="oninput"in document;if(!mc){var km=document.createElement("div");km.setAttribute("oninput","return;"),mc=typeof km.oninput=="function"}pc=mc}else pc=!1;Q_=pc&&(!document.documentMode||9<document.documentMode)}function Rm(){eo&&(eo.detachEvent("onpropertychange",Y_),_o=eo=null)}function Y_(t){if(t.propertyName==="value"&&su(_o)){var e=[];K_(e,_o,t,Cd(t)),N_(UI,e)}}function BI(t,e,n){t==="focusin"?(Rm(),eo=e,_o=n,eo.attachEvent("onpropertychange",Y_)):t==="focusout"&&Rm()}function $I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(_o)}function qI(t,e){if(t==="click")return su(e)}function WI(t,e){if(t==="input"||t==="change")return su(e)}function HI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:HI;function vo(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jc.call(e,s)||!$t(t[s],e[s]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X_(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GI(t){var e=X_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Pm(n,i);var o=Pm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KI=_n&&"documentMode"in document&&11>=document.documentMode,vs=null,gh=null,to=null,yh=!1;function xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||vs==null||vs!==cl(r)||(r=vs,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&vo(to,r)||(to=r,r=yl(gh,"onSelect"),0<r.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},gc={},Z_={};_n&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function iu(t){if(gc[t])return gc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z_)return gc[t]=e[n];return t}var ev=iu("animationend"),tv=iu("animationiteration"),nv=iu("animationstart"),rv=iu("transitionend"),sv=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){sv.set(t,e),es(e,[t])}for(var yc=0;yc<Dm.length;yc++){var _c=Dm[yc],QI=_c.toLowerCase(),YI=_c[0].toUpperCase()+_c.slice(1);_r(QI,"on"+YI)}_r(ev,"onAnimationEnd");_r(tv,"onAnimationIteration");_r(nv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(rv,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Q0(r,e,void 0,t),t.currentTarget=null}function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;bm(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;bm(s,l,c),i=u}}}if(dl)throw t=dh,dl=!1,dh=null,t}function de(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(ov(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),ov(n,t,r,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ka]){t[ka]=!0,f_.forEach(function(n){n!=="selectionchange"&&(JI.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,vc("selectionchange",!1,e))}}function ov(t,e,n,r){switch($_(e)){case 1:var s=hI;break;case 4:s=dI;break;default:s=Pd}n=s.bind(null,e,n,t),s=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var c=i,f=Cd(n),m=[];e:{var g=sv.get(t);if(g!==void 0){var A=Dd,R=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":A=kI;break;case"focusin":R="focus",A=fc;break;case"focusout":R="blur",A=fc;break;case"beforeblur":case"afterblur":A=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=mI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=PI;break;case ev:case tv:case nv:A=_I;break;case rv:A=DI;break;case"scroll":A=fI;break;case"wheel":A=VI;break;case"copy":case"cut":case"paste":A=EI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Im}var N=(e&4)!==0,D=!N&&t==="scroll",C=N?g!==null?g+"Capture":null:g;N=[];for(var I=c,P;I!==null;){P=I;var V=P.stateNode;if(P.tag===5&&V!==null&&(P=V,C!==null&&(V=po(I,C),V!=null&&N.push(wo(I,V,P)))),D)break;I=I.return}0<N.length&&(g=new A(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==uh&&(R=n.relatedTarget||n.fromElement)&&(Lr(R)||R[vn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=c,R=R?Lr(R):null,R!==null&&(D=ts(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=c),A!==R)){if(N=wm,V="onMouseLeave",C="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(N=Im,V="onPointerLeave",C="onPointerEnter",I="pointer"),D=A==null?g:ws(A),P=R==null?g:ws(R),g=new N(V,I+"leave",A,n,f),g.target=D,g.relatedTarget=P,V=null,Lr(f)===c&&(N=new N(C,I+"enter",R,n,f),N.target=P,N.relatedTarget=D,V=N),D=V,A&&R)t:{for(N=A,C=R,I=0,P=N;P;P=cs(P))I++;for(P=0,V=C;V;V=cs(V))P++;for(;0<I-P;)N=cs(N),I--;for(;0<P-I;)C=cs(C),P--;for(;I--;){if(N===C||C!==null&&N===C.alternate)break t;N=cs(N),C=cs(C)}N=null}else N=null;A!==null&&Vm(m,g,A,N,!1),R!==null&&D!==null&&Vm(m,D,R,N,!0)}}e:{if(g=c?ws(c):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var M=zI;else if(Cm(g))if(Q_)M=WI;else{M=$I;var U=BI}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=qI);if(M&&(M=M(t,c))){K_(m,M,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&sh(g,"number",g.value)}switch(U=c?ws(c):window,t){case"focusin":(Cm(U)||U.contentEditable==="true")&&(vs=U,gh=c,to=null);break;case"focusout":to=gh=vs=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,xm(m,n,f);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":xm(m,n,f)}var T;if(Vd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else _s?H_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(W_&&n.locale!=="ko"&&(_s||v!=="onCompositionStart"?v==="onCompositionEnd"&&_s&&(T=q_()):(Gn=f,xd="value"in Gn?Gn.value:Gn.textContent,_s=!0)),U=yl(c,v),0<U.length&&(v=new Tm(v,t,null,n,f),m.push({event:v,listeners:U}),T?v.data=T:(T=G_(n),T!==null&&(v.data=T)))),(T=LI?MI(t,n):jI(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(f=new Tm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}iv(m,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=po(t,n),i!=null&&r.unshift(wo(t,i,s)),i=po(t,e),i!=null&&r.push(wo(t,i,s))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=po(n,i),u!=null&&o.unshift(wo(n,u,l))):s||(u=po(n,i),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XI=/\r\n?/g,ZI=/\u0000|\uFFFD/g;function Om(t){return(typeof t=="string"?t:""+t).replace(XI,`
`).replace(ZI,"")}function Ra(t,e,n){if(e=Om(e),Om(t)!==e&&n)throw Error(F(425))}function _l(){}var _h=null,vh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(nS)}:wh;function nS(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);yo(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ii,To="__reactProps$"+ii,vn="__reactContainer$"+ii,Th="__reactEvents$"+ii,rS="__reactListeners$"+ii,sS="__reactHandles$"+ii;function Lr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[Jt])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Jt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function ou(t){return t[To]||null}var Ih=[],Ts=-1;function vr(t){return{current:t}}function pe(t){0>Ts||(t.current=Ih[Ts],Ih[Ts]=null,Ts--)}function ce(t,e){Ts++,Ih[Ts]=t.current,t.current=e}var cr={},et=vr(cr),ft=vr(!1),qr=cr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function pt(t){return t=t.childContextTypes,t!=null}function vl(){pe(ft),pe(et)}function jm(t,e,n){if(et.current!==cr)throw Error(F(168));ce(et,e),ce(ft,n)}function av(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,B0(t)||"Unknown",s));return Ee({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,qr=et.current,ce(et,t),ce(ft,ft.current),!0}function Fm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=av(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(et),ce(et,t)):pe(ft),ce(ft,n)}var cn=null,au=!1,Tc=!1;function lv(t){cn===null?cn=[t]:cn.push(t)}function iS(t){au=!0,lv(t)}function Er(){if(!Tc&&cn!==null){Tc=!0;var t=0,e=ae;try{var n=cn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,au=!1}catch(s){throw cn!==null&&(cn=cn.slice(t+1)),b_(kd,Er),s}finally{ae=e,Tc=!1}}return null}var Is=[],Ss=0,wl=null,Tl=0,At=[],Ct=0,Wr=null,hn=1,dn="";function br(t,e){Is[Ss++]=Tl,Is[Ss++]=wl,wl=t,Tl=e}function uv(t,e,n){At[Ct++]=hn,At[Ct++]=dn,At[Ct++]=Wr,Wr=t;var r=hn;t=dn;var s=32-Ft(r)-1;r&=~(1<<s),n+=1;var i=32-Ft(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,hn=1<<32-Ft(e)+s|n<<s|r,dn=i+t}else hn=1<<i|n<<s|r,dn=t}function Ld(t){t.return!==null&&(br(t,1),uv(t,1,0))}function Md(t){for(;t===wl;)wl=Is[--Ss],Is[Ss]=null,Tl=Is[--Ss],Is[Ss]=null;for(;t===Wr;)Wr=At[--Ct],At[Ct]=null,dn=At[--Ct],At[Ct]=null,hn=At[--Ct],At[Ct]=null}var Et=null,_t=null,ge=!1,Mt=null;function cv(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(ge){var e=_t;if(e){var n=e;if(!Um(t,e)){if(Sh(t))throw Error(F(418));e=Xn(n.nextSibling);var r=Et;e&&Um(t,e)?cv(r,n):(t.flags=t.flags&-4097|2,ge=!1,Et=t)}}else{if(Sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,Et=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Na(t){if(t!==Et)return!1;if(!ge)return zm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=_t)){if(Sh(t))throw hv(),Error(F(418));for(;e;)cv(t,e),e=Xn(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?Xn(t.stateNode.nextSibling):null;return!0}function hv(){for(var t=_t;t;)t=Xn(t.nextSibling)}function $s(){_t=Et=null,ge=!1}function jd(t){Mt===null?Mt=[t]:Mt.push(t)}var oS=kn.ReactCurrentBatchConfig;function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bm(t){var e=t._init;return e(t._payload)}function dv(t){function e(C,I){if(t){var P=C.deletions;P===null?(C.deletions=[I],C.flags|=16):P.push(I)}}function n(C,I){if(!t)return null;for(;I!==null;)e(C,I),I=I.sibling;return null}function r(C,I){for(C=new Map;I!==null;)I.key!==null?C.set(I.key,I):C.set(I.index,I),I=I.sibling;return C}function s(C,I){return C=nr(C,I),C.index=0,C.sibling=null,C}function i(C,I,P){return C.index=P,t?(P=C.alternate,P!==null?(P=P.index,P<I?(C.flags|=2,I):P):(C.flags|=2,I)):(C.flags|=1048576,I)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,I,P,V){return I===null||I.tag!==6?(I=Nc(P,C.mode,V),I.return=C,I):(I=s(I,P),I.return=C,I)}function u(C,I,P,V){var M=P.type;return M===ys?f(C,I,P.props.children,V,P.key):I!==null&&(I.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fn&&Bm(M)===I.type)?(V=s(I,P.props),V.ref=Mi(C,I,P),V.return=C,V):(V=Za(P.type,P.key,P.props,null,C.mode,V),V.ref=Mi(C,I,P),V.return=C,V)}function c(C,I,P,V){return I===null||I.tag!==4||I.stateNode.containerInfo!==P.containerInfo||I.stateNode.implementation!==P.implementation?(I=Pc(P,C.mode,V),I.return=C,I):(I=s(I,P.children||[]),I.return=C,I)}function f(C,I,P,V,M){return I===null||I.tag!==7?(I=zr(P,C.mode,V,M),I.return=C,I):(I=s(I,P),I.return=C,I)}function m(C,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Nc(""+I,C.mode,P),I.return=C,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case va:return P=Za(I.type,I.key,I.props,null,C.mode,P),P.ref=Mi(C,null,I),P.return=C,P;case gs:return I=Pc(I,C.mode,P),I.return=C,I;case Fn:var V=I._init;return m(C,V(I._payload),P)}if(Bi(I)||Di(I))return I=zr(I,C.mode,P,null),I.return=C,I;Pa(C,I)}return null}function g(C,I,P,V){var M=I!==null?I.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return M!==null?null:l(C,I,""+P,V);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case va:return P.key===M?u(C,I,P,V):null;case gs:return P.key===M?c(C,I,P,V):null;case Fn:return M=P._init,g(C,I,M(P._payload),V)}if(Bi(P)||Di(P))return M!==null?null:f(C,I,P,V,null);Pa(C,P)}return null}function A(C,I,P,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(P)||null,l(I,C,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case va:return C=C.get(V.key===null?P:V.key)||null,u(I,C,V,M);case gs:return C=C.get(V.key===null?P:V.key)||null,c(I,C,V,M);case Fn:var U=V._init;return A(C,I,P,U(V._payload),M)}if(Bi(V)||Di(V))return C=C.get(P)||null,f(I,C,V,M,null);Pa(I,V)}return null}function R(C,I,P,V){for(var M=null,U=null,T=I,v=I=0,E=null;T!==null&&v<P.length;v++){T.index>v?(E=T,T=null):E=T.sibling;var y=g(C,T,P[v],V);if(y===null){T===null&&(T=E);break}t&&T&&y.alternate===null&&e(C,T),I=i(y,I,v),U===null?M=y:U.sibling=y,U=y,T=E}if(v===P.length)return n(C,T),ge&&br(C,v),M;if(T===null){for(;v<P.length;v++)T=m(C,P[v],V),T!==null&&(I=i(T,I,v),U===null?M=T:U.sibling=T,U=T);return ge&&br(C,v),M}for(T=r(C,T);v<P.length;v++)E=A(T,C,v,P[v],V),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?v:E.key),I=i(E,I,v),U===null?M=E:U.sibling=E,U=E);return t&&T.forEach(function(S){return e(C,S)}),ge&&br(C,v),M}function N(C,I,P,V){var M=Di(P);if(typeof M!="function")throw Error(F(150));if(P=M.call(P),P==null)throw Error(F(151));for(var U=M=null,T=I,v=I=0,E=null,y=P.next();T!==null&&!y.done;v++,y=P.next()){T.index>v?(E=T,T=null):E=T.sibling;var S=g(C,T,y.value,V);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(C,T),I=i(S,I,v),U===null?M=S:U.sibling=S,U=S,T=E}if(y.done)return n(C,T),ge&&br(C,v),M;if(T===null){for(;!y.done;v++,y=P.next())y=m(C,y.value,V),y!==null&&(I=i(y,I,v),U===null?M=y:U.sibling=y,U=y);return ge&&br(C,v),M}for(T=r(C,T);!y.done;v++,y=P.next())y=A(T,C,v,y.value,V),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?v:y.key),I=i(y,I,v),U===null?M=y:U.sibling=y,U=y);return t&&T.forEach(function(k){return e(C,k)}),ge&&br(C,v),M}function D(C,I,P,V){if(typeof P=="object"&&P!==null&&P.type===ys&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case va:e:{for(var M=P.key,U=I;U!==null;){if(U.key===M){if(M=P.type,M===ys){if(U.tag===7){n(C,U.sibling),I=s(U,P.props.children),I.return=C,C=I;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fn&&Bm(M)===U.type){n(C,U.sibling),I=s(U,P.props),I.ref=Mi(C,U,P),I.return=C,C=I;break e}n(C,U);break}else e(C,U);U=U.sibling}P.type===ys?(I=zr(P.props.children,C.mode,V,P.key),I.return=C,C=I):(V=Za(P.type,P.key,P.props,null,C.mode,V),V.ref=Mi(C,I,P),V.return=C,C=V)}return o(C);case gs:e:{for(U=P.key;I!==null;){if(I.key===U)if(I.tag===4&&I.stateNode.containerInfo===P.containerInfo&&I.stateNode.implementation===P.implementation){n(C,I.sibling),I=s(I,P.children||[]),I.return=C,C=I;break e}else{n(C,I);break}else e(C,I);I=I.sibling}I=Pc(P,C.mode,V),I.return=C,C=I}return o(C);case Fn:return U=P._init,D(C,I,U(P._payload),V)}if(Bi(P))return R(C,I,P,V);if(Di(P))return N(C,I,P,V);Pa(C,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,I!==null&&I.tag===6?(n(C,I.sibling),I=s(I,P),I.return=C,C=I):(n(C,I),I=Nc(P,C.mode,V),I.return=C,C=I),o(C)):n(C,I)}return D}var qs=dv(!0),fv=dv(!1),Il=vr(null),Sl=null,As=null,Fd=null;function Ud(){Fd=As=Sl=null}function zd(t){var e=Il.current;pe(Il),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Sl=t,Fd=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Sl===null)throw Error(F(308));As=t,Sl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Mr=null;function Bd(t){Mr===null?Mr=[t]:Mr.push(t)}function pv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Bd(e)):(n.next=s.next,s.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,En(t,n)}return s=r.interleaved,s===null?(e.next=e,Bd(r)):(e.next=s.next,s.next=e),r.interleaved=e,En(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}function $m(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var s=t.updateQueue;Un=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,A=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(A,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(A,m,g):R,g==null)break e;m=Ee({},m,g);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=m}}function qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Uo={},Zt=vr(Uo),Io=vr(Uo),So=vr(Uo);function jr(t){if(t===Uo)throw Error(F(174));return t}function qd(t,e){switch(ce(So,e),ce(Io,t),ce(Zt,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}pe(Zt),ce(Zt,e)}function Ws(){pe(Zt),pe(Io),pe(So)}function gv(t){jr(So.current);var e=jr(Zt.current),n=oh(e,t.type);e!==n&&(ce(Io,t),ce(Zt,n))}function Wd(t){Io.current===t&&(pe(Zt),pe(Io))}var _e=vr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Hd(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ka=kn.ReactCurrentDispatcher,Sc=kn.ReactCurrentBatchConfig,Hr=0,ve=null,be=null,Fe=null,kl=!1,no=!1,Ao=0,aS=0;function Ke(){throw Error(F(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,s,i){if(Hr=i,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?hS:dS,t=n(r,s),no){i=0;do{if(no=!1,Ao=0,25<=i)throw Error(F(301));i+=1,Fe=be=null,e.updateQueue=null,Ka.current=fS,t=n(r,s)}while(no)}if(Ka.current=Rl,e=be!==null&&be.next!==null,Hr=0,Fe=be=ve=null,kl=!1,e)throw Error(F(300));return t}function Qd(){var t=Ao!==0;return Ao=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Dt(){if(be===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Fe===null?ve.memoizedState:Fe.next;if(e!==null)Fe=e,be=t;else{if(t===null)throw Error(F(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Co(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Hr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ve.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ve.lanes|=i,Gr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);$t(i,e.memoizedState)||(dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function yv(){}function _v(t,e){var n=ve,r=Dt(),s=e(),i=!$t(r.memoizedState,s);if(i&&(r.memoizedState=s,dt=!0),r=r.queue,Yd(wv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ko(9,Ev.bind(null,n,r,s,e),void 0,null),Ue===null)throw Error(F(349));Hr&30||vv(n,e,s)}return s}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,r){e.value=n,e.getSnapshot=r,Tv(e)&&Iv(t)}function wv(t,e,n){return n(function(){Tv(e)&&Iv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function Iv(t){var e=En(t,1);e!==null&&Ut(e,t,1,-1)}function Wm(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=cS.bind(null,ve,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sv(){return Dt().memoizedState}function Qa(t,e,n,r){var s=Qt();ve.flags|=t,s.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function lu(t,e,n,r){var s=Dt();r=r===void 0?null:r;var i=void 0;if(be!==null){var o=be.memoizedState;if(i=o.destroy,r!==null&&Gd(r,o.deps)){s.memoizedState=ko(e,n,i,r);return}}ve.flags|=t,s.memoizedState=ko(1|e,n,i,r)}function Hm(t,e){return Qa(8390656,8,t,e)}function Yd(t,e){return lu(2048,8,t,e)}function Av(t,e){return lu(4,2,t,e)}function Cv(t,e){return lu(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rv(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,kv.bind(null,e,t),n)}function Jd(){}function Nv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xv(t,e,n){return Hr&21?($t(n,e)||(n=L_(),ve.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function lS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Sc.transition;Sc.transition={};try{t(!1),e()}finally{ae=n,Sc.transition=r}}function Dv(){return Dt().memoizedState}function uS(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bv(t))Vv(e,n);else if(n=pv(t,e,n,r),n!==null){var s=ot();Ut(n,t,r,s),Ov(n,e,r)}}function cS(t,e,n){var r=tr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bv(t))Vv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(s.next=s,Bd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=pv(t,e,s,r),n!==null&&(s=ot(),Ut(n,t,r,s),Ov(n,e,r))}}function bv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Vv(t,e){no=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}var Rl={readContext:xt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},hS={readContext:xt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:Hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:Jd,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=lS.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,s=Qt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));Hr&30||vv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Hm(wv.bind(null,r,i,t),[t]),r.flags|=2048,ko(9,Ev.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ue.identifierPrefix;if(ge){var n=dn,r=hn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:xt,useCallback:Nv,useContext:xt,useEffect:Yd,useImperativeHandle:Rv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Pv,useReducer:Ac,useRef:Sv,useState:function(){return Ac(Co)},useDebugValue:Jd,useDeferredValue:function(t){var e=Dt();return xv(e,be.memoizedState,t)},useTransition:function(){var t=Ac(Co)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:yv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1},fS={readContext:xt,useCallback:Nv,useContext:xt,useEffect:Yd,useImperativeHandle:Rv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Pv,useReducer:Cc,useRef:Sv,useState:function(){return Cc(Co)},useDebugValue:Jd,useDeferredValue:function(t){var e=Dt();return be===null?e.memoizedState=t:xv(e,be.memoizedState,t)},useTransition:function(){var t=Cc(Co)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:yv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),s=tr(t),i=gn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Zn(t,i,s),e!==null&&(Ut(e,t,s,r),Ga(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),s=tr(t),i=gn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Zn(t,i,s),e!==null&&(Ut(e,t,s,r),Ga(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=tr(t),s=gn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Zn(t,s,r),e!==null&&(Ut(e,t,r,n),Ga(e,t,r))}};function Gm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(s,i):!0}function Lv(t,e,n){var r=!1,s=cr,i=e.contextType;return typeof i=="object"&&i!==null?i=xt(i):(s=pt(e)?qr:et.current,r=e.contextTypes,i=(r=r!=null)?Bs(t,s):cr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},$d(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=xt(i):(i=pt(e)?qr:et.current,s.context=Bs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(kh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&uu.enqueueReplaceState(s,s.state,null),Al(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=z0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function Mv(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pl||(Pl=!0,Fh=r),Nh(t,e)},n}function jv(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=RS.bind(null,t,e,n),e.then(t,t))}function Ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var mS=kn.ReactCurrentOwner,dt=!1;function it(t,e,n,r){e.child=t===null?fv(e,null,n,r):qs(e,t.child,n,r)}function Xm(t,e,n,r,s){n=n.render;var i=e.ref;return bs(e,s),r=Kd(t,e,n,r,i,s),n=Qd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,wn(t,e,s)):(ge&&n&&Ld(e),e.flags|=1,it(t,e,r,s),e.child)}function Zm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Fv(t,e,i,r,s)):(t=Za(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return wn(t,e,s)}return e.flags|=1,t=nr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(vo(i,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,wn(t,e,s)}return Ph(t,e,n,r,s)}function Uv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ks,yt),yt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ks,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(ks,yt),yt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ce(ks,yt),yt|=r;return it(t,e,s,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,r,s){var i=pt(n)?qr:et.current;return i=Bs(e,i),bs(e,s),n=Kd(t,e,n,r,i,s),r=Qd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,wn(t,e,s)):(ge&&r&&Ld(e),e.flags|=1,it(t,e,n,s),e.child)}function eg(t,e,n,r,s){if(pt(n)){var i=!0;El(e)}else i=!1;if(bs(e,s),e.stateNode===null)Ya(t,e),Lv(e,n,r),Rh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xt(c):(c=pt(n)?qr:et.current,c=Bs(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Km(e,o,r,c),Un=!1;var g=e.memoizedState;o.state=g,Al(e,r,o,s),u=e.memoizedState,l!==r||g!==u||ft.current||Un?(typeof f=="function"&&(kh(e,n,f,r),u=e.memoizedState),(l=Un||Gm(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ot(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=pt(n)?qr:et.current,u=Bs(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Km(e,o,r,u),Un=!1,g=e.memoizedState,o.state=g,Al(e,r,o,s);var R=e.memoizedState;l!==m||g!==R||ft.current||Un?(typeof A=="function"&&(kh(e,n,A,r),R=e.memoizedState),(c=Un||Gm(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,i,s)}function xh(t,e,n,r,s,i){zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Fm(e,n,!1),wn(t,e,i);r=e.stateNode,mS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,i),e.child=qs(e,null,l,i)):it(t,e,l,i),e.memoizedState=r.state,s&&Fm(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),qd(t,e.containerInfo)}function tg(t,e,n,r,s){return $s(),jd(s),e.flags|=256,it(t,e,n,r),e.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $v(t,e,n){var r=e.pendingProps,s=_e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ce(_e,s&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=du(o,r,0,null),t=zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=bh(n),e.memoizedState=Dh,t):Xd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return gS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=nr(l,i):(i=zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Dh,r}return i=t.child,t=i.sibling,r=nr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,r){return r!==null&&jd(r),qs(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(F(422))),xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=du({mode:"visible",children:r.children},s,0,null),i=zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Dh,i);if(!(e.mode&1))return xa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=kc(i,r,void 0),xa(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=Ue,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,En(t,s),Ut(r,t,s,-1))}return sf(),r=kc(Error(F(421))),xa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=NS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,_t=Xn(s.nextSibling),Et=e,ge=!0,Mt=null,t!==null&&(At[Ct++]=hn,At[Ct++]=dn,At[Ct++]=Wr,hn=t.id,dn=t.overflow,Wr=e),e=Xd(e,r.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ch(t.return,e,n)}function Rc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function qv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(it(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Rc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Cl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Rc(e,!0,n,null,i);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:Bv(e),$s();break;case 5:gv(e);break;case 1:pt(e.type)&&El(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ce(Il,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?$v(t,e,n):(ce(_e,_e.current&1),t=wn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return wn(t,e,n)}var Wv,Vh,Hv,Gv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};Hv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,jr(Zt.current);var i=null;switch(n){case"input":s=nh(t,s),r=nh(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=ih(t,s),r=ih(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}ah(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _S(t,e,n){var r=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&vl(),Qe(e),null;case 3:return r=e.stateNode,Ws(),pe(ft),pe(et),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Bh(Mt),Mt=null))),Vh(t,e),Qe(e),null;case 5:Wd(e);var s=jr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=jr(Zt.current),Na(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Jt]=e,r[To]=i,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(s=0;s<qi.length;s++)de(qi[s],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":hm(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":fm(r,i),de("invalid",r)}ah(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ra(r.textContent,l,t),s=["children",""+l]):ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ea(r),dm(r,i,!0);break;case"textarea":Ea(r),pm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=_l)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[To]=r,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,r),n){case"dialog":de("cancel",t),de("close",t),s=r;break;case"iframe":case"object":case"embed":de("load",t),s=r;break;case"video":case"audio":for(s=0;s<qi.length;s++)de(qi[s],t);s=r;break;case"source":de("error",t),s=r;break;case"img":case"image":case"link":de("error",t),de("load",t),s=r;break;case"details":de("toggle",t),s=r;break;case"input":hm(t,r),s=nh(t,r),de("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":fm(t,r),s=ih(t,r),de("invalid",t);break;default:s=r}ah(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?S_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&T_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fo(t,u):typeof u=="number"&&fo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ho.hasOwnProperty(i)?u!=null&&i==="onScroll"&&de("scroll",t):u!=null&&Td(t,i,u,o))}switch(n){case"input":Ea(t),dm(t,r,!1);break;case"textarea":Ea(t),pm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ns(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=jr(So.current),jr(Zt.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(i=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&_t!==null&&e.mode&1&&!(e.flags&128))hv(),$s(),e.flags|=98560,i=!1;else if(i=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Jt]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),i=!1}else Mt!==null&&(Bh(Mt),Mt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):sf())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ws(),Vh(t,e),t===null&&Eo(e.stateNode.containerInfo),Qe(e),null;case 10:return zd(e.type._context),Qe(e),null;case 17:return pt(e.type)&&vl(),Qe(e),null;case 19:if(pe(_e),i=e.memoizedState,i===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ji(i,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,ji(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>Gs&&(e.flags|=128,r=!0,ji(i,!1),e.lanes=4194304)}else{if(!r)if(t=Cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ge)return Qe(e),null}else 2*Ce()-i.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,r=!0,ji(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function vS(t,e){switch(Md(e),e.tag){case 1:return pt(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),pe(ft),pe(et),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Ws(),null;case 10:return zd(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Da=!1,Xe=!1,ES=typeof WeakSet=="function"?WeakSet:Set,W=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Oh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var rg=!1;function wS(t,e){if(_h=ml,t=X_(),Od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},ml=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,D=R.memoizedState,C=e.stateNode,I=C.getSnapshotBeforeUpdate(e.elementType===e.type?N:Ot(e.type,N),D);C.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=rg,rg=!1,R}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Oh(e,n,i)}s=s.next}while(s!==r)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[To],delete e[Th],delete e[rS],delete e[sS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qv(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var ze=null,Lt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:Xe||Cs(n,e);case 6:var r=ze,s=Lt;ze=null,Mn(t,e,n),ze=r,Lt=s,ze!==null&&(Lt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Lt?(t=ze,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),yo(t)):wc(ze,n.stateNode));break;case 4:r=ze,s=Lt,ze=n.stateNode.containerInfo,Lt=!0,Mn(t,e,n),ze=r,Lt=s;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Oh(n,e,o),s=s.next}while(s!==r)}Mn(t,e,n);break;case 1:if(!Xe&&(Cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Mn(t,e,n),Xe=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(r){var s=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Lt=!1;break e;case 3:ze=l.stateNode.containerInfo,Lt=!0;break e;case 4:ze=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(ze===null)throw Error(F(160));Yv(i,o,s),ze=null,Lt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ie(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jv(e,t),e=e.sibling}function Jv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Kt(t),r&4){try{ro(3,t,t.return),cu(3,t)}catch(N){Ie(t,t.return,N)}try{ro(5,t,t.return)}catch(N){Ie(t,t.return,N)}}break;case 1:Vt(e,t),Kt(t),r&512&&n!==null&&Cs(n,n.return);break;case 5:if(Vt(e,t),Kt(t),r&512&&n!==null&&Cs(n,n.return),t.flags&32){var s=t.stateNode;try{fo(s,"")}catch(N){Ie(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&v_(s,i),lh(l,o);var c=lh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?S_(s,m):f==="dangerouslySetInnerHTML"?T_(s,m):f==="children"?fo(s,m):Td(s,f,m,c)}switch(l){case"input":rh(s,i);break;case"textarea":E_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ns(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ns(s,!!i.multiple,i.defaultValue,!0):Ns(s,!!i.multiple,i.multiple?[]:"",!1))}s[To]=i}catch(N){Ie(t,t.return,N)}}break;case 6:if(Vt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ie(t,t.return,N)}}break;case 3:if(Vt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(N){Ie(t,t.return,N)}break;case 4:Vt(e,t),Kt(t);break;case 13:Vt(e,t),Kt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(tf=Ce())),r&4&&ig(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(c=Xe)||f,Vt(e,t),Xe=c):Vt(e,t),Kt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,A=g.child,g.tag){case 0:case 11:case 14:case 15:ro(4,g,g.return);break;case 1:Cs(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ie(r,n,N)}}break;case 5:Cs(g,g.return);break;case 22:if(g.memoizedState!==null){ag(m);continue}}A!==null?(A.return=g,W=A):ag(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=I_("display",o))}catch(N){Ie(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Ie(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vt(e,t),Kt(t),r&4&&ig(t);break;case 21:break;default:Vt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fo(s,""),r.flags&=-33);var i=sg(t);jh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sg(t);Mh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TS(t,e,n){W=t,Xv(t)}function Xv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Da;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=Da;var c=Xe;if(Da=o,(Xe=u)&&!c)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?lg(s):u!==null?(u.return=o,W=u):lg(s);for(;i!==null;)W=i,Xv(i),i=i.sibling;W=s,Da=l,Xe=c}og(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):og(t)}}function og(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&qm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&yo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Xe||e.flags&512&&Lh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function ag(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function lg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ie(e,s,u)}}var i=e.return;try{Lh(e)}catch(u){Ie(e,i,u)}break;case 5:var o=e.return;try{Lh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var IS=Math.ceil,Nl=kn.ReactCurrentDispatcher,Zd=kn.ReactCurrentOwner,Pt=kn.ReactCurrentBatchConfig,ie=0,Ue=null,Re=null,qe=0,yt=0,ks=vr(0),Ve=0,Ro=null,Gr=0,hu=0,ef=0,so=null,ct=null,tf=0,Gs=1/0,un=null,Pl=!1,Fh=null,er=null,ba=!1,Kn=null,xl=0,io=0,Uh=null,Ja=-1,Xa=0;function ot(){return ie&6?Ce():Ja!==-1?Ja:Ja=Ce()}function tr(t){return t.mode&1?ie&2&&qe!==0?qe&-qe:oS.transition!==null?(Xa===0&&(Xa=L_()),Xa):(t=ae,t!==0||(t=window.event,t=t===void 0?16:$_(t.type)),t):1}function Ut(t,e,n,r){if(50<io)throw io=0,Uh=null,Error(F(185));Mo(t,n,r),(!(ie&2)||t!==Ue)&&(t===Ue&&(!(ie&2)&&(hu|=n),Ve===4&&Bn(t,qe)),mt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Gs=Ce()+500,au&&Er()))}function mt(t,e){var n=t.callbackNode;oI(t,e);var r=pl(t,t===Ue?qe:0);if(r===0)n!==null&&ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ym(n),e===1)t.tag===0?iS(ug.bind(null,t)):lv(ug.bind(null,t)),tS(function(){!(ie&6)&&Er()}),n=null;else{switch(M_(r)){case 1:n=kd;break;case 4:n=V_;break;case 16:n=fl;break;case 536870912:n=O_;break;default:n=fl}n=oE(n,Zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zv(t,e){if(Ja=-1,Xa=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=pl(t,t===Ue?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var s=ie;ie|=2;var i=tE();(Ue!==t||qe!==e)&&(un=null,Gs=Ce()+500,Ur(t,e));do try{CS();break}catch(l){eE(t,l)}while(!0);Ud(),Nl.current=i,ie=s,Re!==null?e=0:(Ue=null,qe=0,e=Ve)}if(e!==0){if(e===2&&(s=fh(t),s!==0&&(r=s,e=zh(t,s))),e===1)throw n=Ro,Ur(t,0),Bn(t,r),mt(t,Ce()),n;if(e===6)Bn(t,r);else{if(s=t.current.alternate,!(r&30)&&!SS(s)&&(e=Dl(t,r),e===2&&(i=fh(t),i!==0&&(r=i,e=zh(t,i))),e===1))throw n=Ro,Ur(t,0),Bn(t,r),mt(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Vr(t,ct,un);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=tf+500-Ce(),10<e)){if(pl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=wh(Vr.bind(null,t,ct,un),e);break}Vr(t,ct,un);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Ft(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IS(r/1960))-r,10<r){t.timeoutHandle=wh(Vr.bind(null,t,ct,un),r);break}Vr(t,ct,un);break;case 5:Vr(t,ct,un);break;default:throw Error(F(329))}}}return mt(t,Ce()),t.callbackNode===n?Zv.bind(null,t):null}function zh(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=ct,ct=n,e!==null&&Bh(e)),t}function Bh(t){ct===null?ct=t:ct.push.apply(ct,t)}function SS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!$t(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~ef,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function ug(t){if(ie&6)throw Error(F(327));Vs();var e=pl(t,0);if(!(e&1))return mt(t,Ce()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=fh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=Ro,Ur(t,0),Bn(t,e),mt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,ct,un),mt(t,Ce()),null}function nf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Gs=Ce()+500,au&&Er())}}function Kr(t){Kn!==null&&Kn.tag===0&&!(ie&6)&&Vs();var e=ie;ie|=1;var n=Pt.transition,r=ae;try{if(Pt.transition=null,ae=1,t)return t()}finally{ae=r,Pt.transition=n,ie=e,!(ie&6)&&Er()}}function rf(){yt=ks.current,pe(ks)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:Ws(),pe(ft),pe(et),Hd();break;case 5:Wd(r);break;case 4:Ws();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:zd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ue=t,Re=t=nr(t.current,null),qe=yt=e,Ve=0,Ro=null,ef=hu=Gr=0,ct=so=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Mr=null}return t}function eE(t,e){do{var n=Re;try{if(Ud(),Ka.current=Rl,kl){for(var r=ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}kl=!1}if(Hr=0,Fe=be=ve=null,no=!1,Ao=0,Zd.current=null,n===null||n.return===null){Ve=1,Ro=e,Re=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Ym(o);if(A!==null){A.flags&=-257,Jm(A,o,l,i,e),A.mode&1&&Qm(i,c,e),e=A,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Qm(i,c,e),sf();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var D=Ym(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Jm(D,o,l,i,e),jd(Hs(u,l));break e}}i=u=Hs(u,l),Ve!==4&&(Ve=2),so===null?so=[i]:so.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=Mv(i,u,e);$m(i,C);break e;case 1:l=u;var I=i.type,P=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(er===null||!er.has(P)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=jv(i,l,e);$m(i,V);break e}}i=i.return}while(i!==null)}rE(n)}catch(M){e=M,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function tE(){var t=Nl.current;return Nl.current=Rl,t===null?Rl:t}function sf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ue===null||!(Gr&268435455)&&!(hu&268435455)||Bn(Ue,qe)}function Dl(t,e){var n=ie;ie|=2;var r=tE();(Ue!==t||qe!==e)&&(un=null,Ur(t,e));do try{AS();break}catch(s){eE(t,s)}while(!0);if(Ud(),ie=n,Nl.current=r,Re!==null)throw Error(F(261));return Ue=null,qe=0,Ve}function AS(){for(;Re!==null;)nE(Re)}function CS(){for(;Re!==null&&!J0();)nE(Re)}function nE(t){var e=iE(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?rE(t):Re=e,Zd.current=null}function rE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vS(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Re=null;return}}else if(n=_S(n,e,yt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ve===0&&(Ve=5)}function Vr(t,e,n){var r=ae,s=Pt.transition;try{Pt.transition=null,ae=1,kS(t,e,n,r)}finally{Pt.transition=s,ae=r}return null}function kS(t,e,n,r){do Vs();while(Kn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(aI(t,i),t===Ue&&(Re=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,oE(fl,function(){return Vs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pt.transition,Pt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Zd.current=null,wS(t,n),Jv(n,t),GI(vh),ml=!!_h,vh=_h=null,t.current=n,TS(n),X0(),ie=l,ae=o,Pt.transition=i}else t.current=n;if(ba&&(ba=!1,Kn=t,xl=s),i=t.pendingLanes,i===0&&(er=null),tI(n.stateNode),mt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Pl)throw Pl=!1,t=Fh,Fh=null,t;return xl&1&&t.tag!==0&&Vs(),i=t.pendingLanes,i&1?t===Uh?io++:(io=0,Uh=t):io=0,Er(),null}function Vs(){if(Kn!==null){var t=M_(xl),e=Pt.transition,n=ae;try{if(Pt.transition=null,ae=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,xl=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ro(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,A=f.return;if(Kv(f),f===c){W=null;break}if(g!==null){g.return=A,W=g;break}W=A}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ro(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,W=C;break e}W=i.return}}var I=t.current;for(W=I;W!==null;){o=W;var P=o.child;if(o.subtreeFlags&2064&&P!==null)P.return=o,W=P;else e:for(o=I;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cu(9,l)}}catch(M){Ie(l,l.return,M)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(ie=s,Er(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(nu,t)}catch{}r=!0}return r}finally{ae=n,Pt.transition=e}}return!1}function cg(t,e,n){e=Hs(n,e),e=Mv(t,e,1),t=Zn(t,e,1),e=ot(),t!==null&&(Mo(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)cg(t,t,n);else for(;e!==null;){if(e.tag===3){cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Hs(n,t),t=jv(e,t,1),e=Zn(e,t,1),t=ot(),e!==null&&(Mo(e,1,t),mt(e,t));break}}e=e.return}}function RS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(qe&n)===n&&(Ve===4||Ve===3&&(qe&130023424)===qe&&500>Ce()-tf?Ur(t,0):ef|=n),mt(t,e)}function sE(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=ot();t=En(t,e),t!==null&&(Mo(t,e,n),mt(t,n))}function NS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sE(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),sE(t,n)}var iE;iE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,yS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ge&&e.flags&1048576&&uv(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ya(t,e),t=e.pendingProps;var s=Bs(e,et.current);bs(e,n),s=Kd(null,e,r,t,s,n);var i=Qd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(i=!0,El(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$d(e),s.updater=uu,e.stateNode=s,s._reactInternals=e,Rh(e,r,t,n),e=xh(null,e,r,!0,i,n)):(e.tag=0,ge&&i&&Ld(e),it(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=DS(r),t=Ot(r,t),s){case 0:e=Ph(null,e,r,t,n);break e;case 1:e=eg(null,e,r,t,n);break e;case 11:e=Xm(null,e,r,t,n);break e;case 14:e=Zm(null,e,r,Ot(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Ph(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),eg(t,e,r,s,n);case 3:e:{if(Bv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,mv(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Hs(Error(F(423)),e),e=tg(t,e,r,n,s);break e}else if(r!==s){s=Hs(Error(F(424)),e),e=tg(t,e,r,n,s);break e}else for(_t=Xn(e.stateNode.containerInfo.firstChild),Et=e,ge=!0,Mt=null,n=fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===s){e=wn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return gv(e),t===null&&Ah(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Eh(r,s)?o=null:i!==null&&Eh(r,i)&&(e.flags|=32),zv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return $v(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Xm(t,e,r,s,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ce(Il,r._currentValue),r._currentValue=o,i!==null)if($t(i.value,o)){if(i.children===s.children&&!ft.current){e=wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ch(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ch(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}it(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,bs(e,n),s=xt(s),r=r(s),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,s=Ot(r,e.pendingProps),s=Ot(r.type,s),Zm(t,e,r,s,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Ya(t,e),e.tag=1,pt(r)?(t=!0,El(e)):t=!1,bs(e,n),Lv(e,r,s),Rh(e,r,s,n),xh(null,e,r,!0,t,n);case 19:return qv(t,e,n);case 22:return Uv(t,e,n)}throw Error(F(156,e.tag))};function oE(t,e){return b_(t,e)}function xS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new xS(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DS(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Ad)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return zr(n.children,s,i,e);case Id:o=8,s|=8;break;case Xc:return t=Nt(12,n,e,s|2),t.elementType=Xc,t.lanes=i,t;case Zc:return t=Nt(13,n,e,s),t.elementType=Zc,t.lanes=i,t;case eh:return t=Nt(19,n,e,s),t.elementType=eh,t.lanes=i,t;case g_:return du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case Sd:o=11;break e;case Ad:o=14;break e;case Fn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function zr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function du(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,s,i,o,l,u){return t=new bS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Nt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(i),t}function VS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aE(t){if(!t)return cr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return av(t,n,e)}return e}function lE(t,e,n,r,s,i,o,l,u){return t=af(n,r,!0,t,s,i,o,l,u),t.context=aE(null),n=t.current,r=ot(),s=tr(n),i=gn(r,s),i.callback=e??null,Zn(n,i,s),t.current.lanes=s,Mo(t,s,r),mt(t,r),t}function fu(t,e,n,r){var s=e.current,i=ot(),o=tr(s);return n=aE(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(s,e,o),t!==null&&(Ut(t,s,o,i),Ga(t,s,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function OS(){return null}var uE=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}pu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));fu(t,e,null,null)};pu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){fu(null,t,null,null)}),e[vn]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=U_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&B_(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dg(){}function LS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=bl(o);i.call(c)}}var o=lE(e,r,t,0,null,!1,!1,"",dg);return t._reactRootContainer=o,t[vn]=o.current,Eo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=bl(u);l.call(c)}}var u=af(t,0,!1,null,null,!1,!1,"",dg);return t._reactRootContainer=u,t[vn]=u.current,Eo(t.nodeType===8?t.parentNode:t),Kr(function(){fu(e,u,n,r)}),u}function gu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=bl(o);l.call(u)}}fu(e,o,t,s)}else o=LS(n,e,t,s,r);return bl(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$i(e.pendingLanes);n!==0&&(Rd(e,n|1),mt(e,Ce()),!(ie&6)&&(Gs=Ce()+500,Er()))}break;case 13:Kr(function(){var r=En(t,1);if(r!==null){var s=ot();Ut(r,t,1,s)}}),lf(t,1)}};Nd=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=ot();Ut(e,t,134217728,n)}lf(t,134217728)}};F_=function(t){if(t.tag===13){var e=tr(t),n=En(t,e);if(n!==null){var r=ot();Ut(n,t,e,r)}lf(t,e)}};U_=function(){return ae};z_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};ch=function(t,e,n){switch(e){case"input":if(rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ou(r);if(!s)throw Error(F(90));__(r),rh(r,s)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};k_=nf;R_=Kr;var MS={usingClientEntryPoint:!1,Events:[Fo,ws,ou,A_,C_,nf]},Fi={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jS={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x_(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{nu=Va.inject(jS),Xt=Va}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(F(200));return VS(t,e,null,n)};Tt.createRoot=function(t,e){if(!cf(t))throw Error(F(299));var n=!1,r="",s=uE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,s),t[vn]=e.current,Eo(t.nodeType===8?t.parentNode:t),new uf(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=x_(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Kr(t)};Tt.hydrate=function(t,e,n){if(!mu(e))throw Error(F(200));return gu(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=uE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lE(e,null,t,1,n??null,s,!1,i,o),t[vn]=e.current,Eo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new pu(e)};Tt.render=function(t,e,n){if(!mu(e))throw Error(F(200));return gu(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!mu(t))throw Error(F(40));return t._reactRootContainer?(Kr(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Tt.unstable_batchedUpdates=nf;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return gu(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function cE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cE)}catch(t){console.error(t)}}cE(),c_.exports=Tt;var FS=c_.exports,fg=FS;Yc.createRoot=fg.createRoot,Yc.hydrateRoot=fg.hydrateRoot;const US=()=>{};var pg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new BS;const g=i<<2|l>>4;if(r.push(g),c!==64){const A=l<<4&240|c>>2;if(r.push(A),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $S=function(t){const e=hE(t);return dE.encodeByteArray(e,!0)},Vl=function(t){return $S(t).replace(/\./g,"")},fE=function(t){try{return dE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WS=()=>qS().__FIREBASE_DEFAULTS__,HS=()=>{if(typeof process>"u"||typeof pg>"u")return;const t=pg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fE(t[1]);return e&&JSON.parse(e)},yu=()=>{try{return US()||WS()||HS()||GS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pE=t=>{var e,n;return(n=(e=yu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},KS=t=>{const e=pE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mE=()=>{var t;return(t=yu())==null?void 0:t.config},gE=t=>{var e;return(e=yu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function YS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function XS(){var e;const t=(e=yu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n1(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r1(){return!XS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s1(){try{return typeof indexedDB=="object"}catch{return!1}}function i1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o1,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?a1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,l,r)}}function a1(t,e){return t.replace(l1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const l1=/\{\$([^}]+)}/g;function u1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(mg(i)&&mg(o)){if(!Tn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function c1(t,e){const n=new h1(t,e);return n.subscribe.bind(n)}class h1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}/**
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
 */function $o(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yE(t){return(await fetch(t,{credentials:"include"})).ok}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m1(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(t){return t===Or?void 0:t}function m1(t){return t.instantiationMode==="EAGER"}/**
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
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const y1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},_1=re.INFO,v1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},E1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=v1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=_1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const w1=(t,e)=>e.some(n=>t instanceof n);let gg,yg;function T1(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I1(){return yg||(yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,$h=new WeakMap,vE=new WeakMap,Dc=new WeakMap,df=new WeakMap;function S1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_E.set(n,t)}).catch(()=>{}),df.set(e,t),e}function A1(t){if($h.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C1(t){qh=t(qh)}function k1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return vE.set(r,e.sort?e.sort():[e]),rr(r)}:I1().includes(t)?function(...e){return t.apply(bc(this),e),rr(_E.get(this))}:function(...e){return rr(t.apply(bc(this),e))}}function R1(t){return typeof t=="function"?k1(t):(t instanceof IDBTransaction&&A1(t),w1(t,T1())?new Proxy(t,qh):t)}function rr(t){if(t instanceof IDBRequest)return S1(t);if(Dc.has(t))return Dc.get(t);const e=R1(t);return e!==t&&(Dc.set(t,e),df.set(e,t)),e}const bc=t=>df.get(t);function N1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(rr(o.result),u.oldVersion,u.newVersion,rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const P1=["get","getKey","getAll","getAllKeys","count"],x1=["put","add","delete","clear"],Vc=new Map;function _g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=x1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||P1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Vc.set(e,i),i}C1(t=>({...t,get:(e,n,r)=>_g(e,n)||t.get(e,n,r),has:(e,n)=>!!_g(e,n)||t.has(e,n)}));/**
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
 */class D1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",vg="0.14.12";/**
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
 */const In=new hf("@firebase/app"),V1="@firebase/app-compat",O1="@firebase/analytics-compat",L1="@firebase/analytics",M1="@firebase/app-check-compat",j1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",z1="@firebase/database",B1="@firebase/data-connect",$1="@firebase/database-compat",q1="@firebase/functions",W1="@firebase/functions-compat",H1="@firebase/installations",G1="@firebase/installations-compat",K1="@firebase/messaging",Q1="@firebase/messaging-compat",Y1="@firebase/performance",J1="@firebase/performance-compat",X1="@firebase/remote-config",Z1="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",rA="@firebase/ai",sA="@firebase/firestore-compat",iA="firebase",oA="12.13.0";/**
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
 */const Hh="[DEFAULT]",aA={[Wh]:"fire-core",[V1]:"fire-core-compat",[L1]:"fire-analytics",[O1]:"fire-analytics-compat",[j1]:"fire-app-check",[M1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[z1]:"fire-rtdb",[B1]:"fire-data-connect",[$1]:"fire-rtdb-compat",[q1]:"fire-fn",[W1]:"fire-fn-compat",[H1]:"fire-iid",[G1]:"fire-iid-compat",[K1]:"fire-fcm",[Q1]:"fire-fcm-compat",[Y1]:"fire-perf",[J1]:"fire-perf-compat",[X1]:"fire-rc",[Z1]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[sA]:"fire-fst-compat",[rA]:"fire-vertex","fire-js":"fire-js",[iA]:"fire-js-all"};/**
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
 */const Ol=new Map,lA=new Map,Gh=new Map;function Eg(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Gh.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Ol.values())Eg(n,t);for(const n of lA.values())Eg(n,t);return!0}function ff(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new zo("app","Firebase",uA);/**
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
 */class cA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=oA;function EE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Hh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=mE()),!n)throw sr.create("no-options");const i=Ol.get(s);if(i){if(Tn(n,i.options)&&Tn(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new g1(s);for(const u of Gh.values())o.addComponent(u);const l=new cA(n,r,o);return Ol.set(s,l),l}function wE(t=Hh){const e=Ol.get(t);if(!e&&t===Hh&&mE())return EE();if(!e)throw sr.create("no-app",{appName:t});return e}function ir(t,e,n){let r=aA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(o.join(" "));return}Ks(new Qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hA="firebase-heartbeat-database",dA=1,No="firebase-heartbeat-store";let Oc=null;function TE(){return Oc||(Oc=N1(hA,dA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function fA(t){try{const n=(await TE()).transaction(No),r=await n.objectStore(No).get(IE(t));return await n.done,r}catch(e){if(e instanceof Rn)In.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function wg(t,e){try{const r=(await TE()).transaction(No,"readwrite");await r.objectStore(No).put(e,IE(t)),await r.done}catch(n){if(n instanceof Rn)In.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function IE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pA=1024,mA=30;class gA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mA){const o=vA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tg(),{heartbeatsToSend:r,unsentEntries:s}=yA(this._heartbeatsCache.heartbeats),i=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Tg(){return new Date().toISOString().substring(0,10)}function yA(t,e=pA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ig(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s1()?i1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ig(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}function vA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EA(t){Ks(new Qr("platform-logger",e=>new D1(e),"PRIVATE")),Ks(new Qr("heartbeat",e=>new gA(e),"PRIVATE")),ir(Wh,vg,t),ir(Wh,vg,"esm2020"),ir("fire-js","")}EA("");function SE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wA=SE,AE=new zo("auth","Firebase",SE());/**
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
 */const Ll=new hf("@firebase/auth");function TA(t,...e){Ll.logLevel<=re.WARN&&Ll.warn(`Auth (${oi}): ${t}`,...e)}function el(t,...e){Ll.logLevel<=re.ERROR&&Ll.error(`Auth (${oi}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw pf(t,...e)}function en(t,...e){return pf(t,...e)}function CE(t,e,n){const r={...wA(),[e]:n};return new zo("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return CE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return AE.create(t,...e)}function G(t,e,...n){if(!t)throw pf(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw el(e),new Error(e)}function Sn(t,e){t||fn(e)}/**
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
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function IA(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function SA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IA()||e1()||"connection"in navigator)?navigator.onLine:!0}function AA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=JS()||t1()}get(){return SA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mf(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RA=new qo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Tr(t,e,n,r,s={}){return RE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return ZS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&$o(t.emulatorConfig.host)&&(c.credentials="include"),kE.fetch()(await NE(t,t.config.apiHost,n,l),c)})}async function RE(t,e,n){t._canInitEmulator=!1;const r={...CA,...e};try{const s=new PA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw CE(t,f,c);qt(t,f)}}catch(s){if(s instanceof Rn)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function Wo(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function NE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mf(t.config,s):`${t.config.apiScheme}://${s}`;return kA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function NA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),RA.get())})}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}function Ag(t){return t!==void 0&&t.enterprise!==void 0}class xA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DA(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
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
 */async function bA(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function Ml(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=gf(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oo(Lc(s.auth_time)),issuedAtTime:oo(Lc(s.iat)),expirationTime:oo(Lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return el("JWT malformed, contained fewer than 3 sections"),null;try{const s=fE(n);return s?JSON.parse(s):(el("Failed to decode base64 JWT payload"),null)}catch(s){return el("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cg(t){const e=gf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&OA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Po(t,Ml(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?PE(s.providerUserInfo):[],o=jA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function MA(t){const e=Le(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FA(t,e){const n=await RE(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await NE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&$o(t.emulatorConfig.host)&&(u.credentials="include"),kE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UA(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Os;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function jn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new LA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return MA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await Po(this,bA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:A,providerData:R,stsTokenManager:N}=n;G(m&&N,e,"internal-error");const D=Os.fromJSON(this.name,N);G(typeof m=="string",e,"internal-error"),jn(r,e.name),jn(s,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof A=="boolean",e,"internal-error"),jn(i,e.name),jn(o,e.name),jn(l,e.name),jn(u,e.name),jn(c,e.name),jn(f,e.name);const C=new jt({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(C.providerData=R.map(I=>({...I}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Os;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?PE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Os;l.updateFromIdToken(r);const u=new jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const kg=new Map;function pn(t){Sn(t instanceof Function,"Expected a class definition");let e=kg.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kg.set(t,e),e)}/**
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
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xE.type="NONE";const Rg=xE;/**
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
 */function tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tl(this.userKey,s.apiKey,i),this.fullPersistenceKey=tl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ml(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(pn(Rg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||pn(Rg);const o=tl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await Ml(e,{idToken:f}).catch(()=>{});if(!g)break;m=await jt._fromGetAccountInfoResponse(e,g,f)}else m=jt._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ls(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ls(i,e,r))}}/**
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
 */function Ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(jE(e))return"Webos";if(bE(e))return"Safari";if((e.includes("chrome/")||VE(e))&&!e.includes("edge/"))return"Chrome";if(LE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DE(t=tt()){return/firefox\//i.test(t)}function bE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VE(t=tt()){return/crios\//i.test(t)}function OE(t=tt()){return/iemobile/i.test(t)}function LE(t=tt()){return/android/i.test(t)}function ME(t=tt()){return/blackberry/i.test(t)}function jE(t=tt()){return/webos/i.test(t)}function yf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zA(t=tt()){var e;return yf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function BA(){return n1()&&document.documentMode===10}function FE(t=tt()){return yf(t)||LE(t)||jE(t)||ME(t)||/windows phone/i.test(t)||OE(t)}/**
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
 */function UE(t,e=[]){let n;switch(t){case"Browser":n=Ng(tt());break;case"Worker":n=`${Ng(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class $A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qA(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
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
 */const WA=6;class HA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??WA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new $A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ml(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(yn(this));const n=e?Le(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qA(this),n=new HA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&TA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ns(t){return Le(t)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KA(t){_u=t}function zE(t){return _u.loadJS(t)}function QA(){return _u.recaptchaEnterpriseScript}function YA(){return _u.gapiScript}function JA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XA{constructor(){this.enterprise=new ZA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eC="recaptcha-enterprise",BE="NO_RECAPTCHA";class tC{constructor(e){this.type=eC,this.auth=ns(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{DA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new xA(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Ag(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(BE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ag(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QA();u.length!==0&&(u+=l),zE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function xg(t,e,n,r=!1,s=!1){const i=new tC(t);let o;if(s)o=BE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await xg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function nC(t,e){const n=ff(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tn(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function rC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const r=ns(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$E(e),{host:o,port:l}=iC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Tn(c,r.config.emulator)&&Tn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$o(o)?yE(`${i}//${o}${u}`):oC()}function $E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iC(t){const e=$E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dg(o)}}}function Dg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function aC(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lC(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
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
 */async function uC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function cC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
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
 */class xo extends _f{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yh(e,n,"signInWithPassword",lC);case"emailLink":return uC(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yh(e,r,"signUpPassword",aC);case"emailLink":return cC(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
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
 */const hC="http://localhost";class Yr extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:hC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */function dC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fC(t){const e=Wi(Hi(t)).link,n=e?Wi(Hi(e)).deep_link_id:null,r=Wi(Hi(t)).deep_link_id;return(r?Wi(Hi(r)).link:null)||r||n||e||t}class vf{constructor(e){const n=Wi(Hi(e)),r=n.apiKey??null,s=n.oobCode??null,i=dC(n.mode??null);G(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fC(e);try{return new vf(n)}catch{return null}}}/**
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
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vf.parseLink(n);return G(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ho extends qE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends Ho{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class qn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Wn extends Ho{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Hn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function pC(t,e){return Wo(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),o=bg(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bg(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fl extends Rn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fl(e,n,r,s)}}function WE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,i,e,r):i})}async function mC(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function gC(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(yn(r));const s="reauthenticate";try{const i=await Po(t,WE(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=gf(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function HE(t,e,n=!1){if(kt(t.app))return Promise.reject(yn(t));const r="signIn",s=await WE(t,r,e),i=await Jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yC(t,e){return HE(ns(t),e)}/**
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
 */async function GE(t){const e=ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _C(t,e,n){if(kt(t.app))return Promise.reject(yn(t));const r=ns(t),o=await Yh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&GE(t),u}),l=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function vC(t,e,n){return kt(t.app)?Promise.reject(yn(t)):yC(Le(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GE(t),r})}function EC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function wC(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function TC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function IC(t){return Le(t).signOut()}const Ul="__sak";/**
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
 */class KE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SC=1e3,AC=10;class QE extends KE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QE.type="LOCAL";const CC=QE;/**
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
 */class YE extends KE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YE.type="SESSION";const JE=YE;/**
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
 */function kC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await kC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function Ef(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Ef("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function NC(t){tn().location.href=t}/**
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
 */function XE(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function DC(){return XE()?self:null}/**
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
 */const ZE="firebaseLocalStorageDb",bC=1,zl="firebaseLocalStorage",ew="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eu(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function VC(){const t=indexedDB.deleteDatabase(ZE);return new Go(t).toPromise()}function Jh(){const t=indexedDB.open(ZE,bC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:ew})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await VC(),e(await Jh()))})})}async function Vg(t,e,n){const r=Eu(t,!0).put({[ew]:e,value:n});return new Go(r).toPromise()}async function OC(t,e){const n=Eu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=Eu(t,!0).delete(e);return new Go(n).toPromise()}const LC=800,MC=3;class tw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(DC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await Vg(e,Ul,"1"),await Og(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Eu(s,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tw.type="LOCAL";const jC=tw;new qo(3e4,6e4);/**
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
 */function FC(t,e){return e?pn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wf extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return HE(t.auth,new wf(t),t.bypassAuthState)}function zC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),gC(n,new wf(t),t.bypassAuthState)}async function BC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),mC(n,new wf(t),t.bypassAuthState)}/**
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
 */class nw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return BC;case"reauthViaPopup":case"reauthViaRedirect":return zC;default:qt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $C=new qo(2e3,1e4);class Rs extends nw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$C.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const qC="pendingRedirect",nl=new Map;class WC extends nw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=QC(e),r=KC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GC(t,e){nl.set(t._key(),e)}function KC(t){return pn(t._redirectPersistence)}function QC(t){return tl(qC,t.config.apiKey,t.name)}async function YC(t,e,n=!1){if(kt(t.app))return Promise.reject(yn(t));const r=ns(t),s=FC(r,e),o=await new WC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const JC=10*60*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lg(e))}saveEventToCache(e){this.cachedEventUids.add(Lg(e)),this.lastProcessedEventTime=Date.now()}}function Lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rw(t);default:return!1}}/**
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
 */async function ek(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
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
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ek(t);for(const n of e)try{if(sk(n))return}catch{}qt(t,"unauthorized-domain")}function sk(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nk.test(n))return!1;if(tk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ik=new qo(3e4,6e4);function Mg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ok(t){return new Promise((e,n)=>{var s,i,o;function r(){Mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mg(),n(en(t,"network-request-failed"))},timeout:ik.get()})}if((i=(s=tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=tn().gapi)!=null&&o.load)r();else{const l=JA("iframefcb");return tn()[l]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},zE(`${YA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw rl=null,e})}let rl=null;function ak(t){return rl=rl||ok(t),rl}/**
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
 */const lk=new qo(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fk(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mf(e,ck):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:oi},s=dk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function pk(t){const e=await ak(t),n=tn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:fk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{i(o)},lk.get());function u(){tn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,yk=600,_k="_blank",vk="http://localhost";class jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(t,e,n,r=gk,s=yk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...mk,width:r.toString(),height:s.toString(),top:i,left:o},c=tt().toLowerCase();n&&(l=VE(c)?_k:n),DE(c)&&(e=e||vk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,R])=>`${g}${A}=${R},`,"");if(zA(c)&&l!=="_self")return wk(e||"",l),new jg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new jg(m)}function wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tk="__/auth/handler",Ik="emulator/auth/handler",Sk=encodeURIComponent("fac");async function Fg(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:s};if(e instanceof qE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ho){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Sk}=${encodeURIComponent(u)}`:"";return`${Ak(t)}?${Bo(l).slice(1)}${c}`}function Ak({config:t}){return t.emulator?mf(t,Ik):`https://${t.authDomain}/${Tk}`}/**
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
 */const Mc="webStorageSupport";class Ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JE,this._completeRedirectFn=YC,this._overrideRedirectResult=GC}async _openPopup(e,n,r,s){var o;Sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fg(e,n,r,Kh(),s);return Ek(e,i,Ef())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fg(e,n,r,Kh(),s);return NC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pk(e),r=new XC(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Mc];i!==void 0&&n(!!i),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FE()||bE()||yf()}}const kk=Ck;var Ug="@firebase/auth",zg="1.13.1";/**
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
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(t){Ks(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(t)},c=new GA(r,s,i,u);return rC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ks(new Qr("auth-internal",e=>{const n=ns(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Ug,zg,Nk(t)),ir(Ug,zg,"esm2020")}/**
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
 */const xk=5*60,Dk=gE("authIdTokenMaxAge")||xk;let Bg=null;const bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dk)return;const s=n==null?void 0:n.token;Bg!==s&&(Bg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vk(t=wE()){const e=ff(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nC(t,{popupRedirectResolver:kk,persistence:[jC,CC,JE]}),r=gE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bk(i.toString());wC(n,o,()=>o(n.currentUser)),EC(n,l=>o(l))}}const s=pE("auth");return s&&sC(n,`http://${s}`),n}function Ok(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");var Lk="firebase",Mk="12.13.0";/**
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
 */ir(Lk,Mk,"app");var $g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,sw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function E(){}E.prototype=v.prototype,T.F=v.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(y,S,k){for(var w=Array(arguments.length-2),we=2;we<arguments.length;we++)w[we-2]=arguments[we];return v.prototype[S].apply(y,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,E){E||(E=0);const y=Array(16);if(typeof v=="string")for(var S=0;S<16;++S)y[S]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(S=0;S<16;++S)y[S]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=T.g[0],E=T.g[1],S=T.g[2];let k=T.g[3],w;w=v+(k^E&(S^k))+y[0]+3614090360&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+y[1]+3905402710&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+y[2]+606105819&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+y[3]+3250441966&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+y[4]+4118548399&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+y[5]+1200080426&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+y[6]+2821735955&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+y[7]+4249261313&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+y[8]+1770035416&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+y[9]+2336552879&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+y[10]+4294925233&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+y[11]+2304563134&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(k^E&(S^k))+y[12]+1804603682&4294967295,v=E+(w<<7&4294967295|w>>>25),w=k+(S^v&(E^S))+y[13]+4254626195&4294967295,k=v+(w<<12&4294967295|w>>>20),w=S+(E^k&(v^E))+y[14]+2792965006&4294967295,S=k+(w<<17&4294967295|w>>>15),w=E+(v^S&(k^v))+y[15]+1236535329&4294967295,E=S+(w<<22&4294967295|w>>>10),w=v+(S^k&(E^S))+y[1]+4129170786&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+y[6]+3225465664&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+y[11]+643717713&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+y[0]+3921069994&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+y[5]+3593408605&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+y[10]+38016083&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+y[15]+3634488961&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+y[4]+3889429448&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+y[9]+568446438&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+y[14]+3275163606&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+y[3]+4107603335&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+y[8]+1163531501&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(S^k&(E^S))+y[13]+2850285829&4294967295,v=E+(w<<5&4294967295|w>>>27),w=k+(E^S&(v^E))+y[2]+4243563512&4294967295,k=v+(w<<9&4294967295|w>>>23),w=S+(v^E&(k^v))+y[7]+1735328473&4294967295,S=k+(w<<14&4294967295|w>>>18),w=E+(k^v&(S^k))+y[12]+2368359562&4294967295,E=S+(w<<20&4294967295|w>>>12),w=v+(E^S^k)+y[5]+4294588738&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+y[8]+2272392833&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+y[11]+1839030562&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+y[14]+4259657740&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+y[1]+2763975236&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+y[4]+1272893353&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+y[7]+4139469664&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+y[10]+3200236656&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+y[13]+681279174&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+y[0]+3936430074&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+y[3]+3572445317&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+y[6]+76029189&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(E^S^k)+y[9]+3654602809&4294967295,v=E+(w<<4&4294967295|w>>>28),w=k+(v^E^S)+y[12]+3873151461&4294967295,k=v+(w<<11&4294967295|w>>>21),w=S+(k^v^E)+y[15]+530742520&4294967295,S=k+(w<<16&4294967295|w>>>16),w=E+(S^k^v)+y[2]+3299628645&4294967295,E=S+(w<<23&4294967295|w>>>9),w=v+(S^(E|~k))+y[0]+4096336452&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+y[7]+1126891415&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+y[14]+2878612391&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+y[5]+4237533241&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+y[12]+1700485571&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+y[3]+2399980690&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+y[10]+4293915773&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+y[1]+2240044497&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+y[8]+1873313359&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+y[15]+4264355552&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+y[6]+2734768916&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+y[13]+1309151649&4294967295,E=S+(w<<21&4294967295|w>>>11),w=v+(S^(E|~k))+y[4]+4149444226&4294967295,v=E+(w<<6&4294967295|w>>>26),w=k+(E^(v|~S))+y[11]+3174756917&4294967295,k=v+(w<<10&4294967295|w>>>22),w=S+(v^(k|~E))+y[2]+718787259&4294967295,S=k+(w<<15&4294967295|w>>>17),w=E+(k^(S|~v))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.v=function(T,v){v===void 0&&(v=T.length);const E=v-this.blockSize,y=this.C;let S=this.h,k=0;for(;k<v;){if(S==0)for(;k<=E;)s(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<v;)if(y[S++]=T.charCodeAt(k++),S==this.blockSize){s(this,y),S=0;break}}else for(;k<v;)if(y[S++]=T[k++],S==this.blockSize){s(this,y),S=0;break}}this.h=S,this.o+=v},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,E=0;E<4;++E)for(let y=0;y<32;y+=8)T[v++]=this.g[E]>>>y&255;return T};function i(T,v){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=v(T)}function o(T,v){this.h=v;const E=[];let y=!0;for(let S=T.length-1;S>=0;S--){const k=T[S]|0;y&&k==v||(E[S]=k,y=!1)}this.g=E}var l={};function u(T){return-128<=T&&T<128?i(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return D(c(-T));const v=[];let E=1;for(let y=0;T>=E;y++)v[y]=T/E|0,E*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return D(f(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(v,8));let y=m;for(let k=0;k<T.length;k+=8){var S=Math.min(8,T.length-k);const w=parseInt(T.substring(k,k+S),v);S<8?(S=c(Math.pow(v,S)),y=y.j(S).add(c(w))):(y=y.j(E),y=y.add(c(w)))}return y}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let T=0,v=1;for(let E=0;E<this.g.length;E++){const y=this.i(E);T+=(y>=0?y:4294967296+y)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+D(this).toString(T);const v=c(Math.pow(T,6));var E=this;let y="";for(;;){const S=V(E,v).g;E=C(E,S.j(v));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=S,R(E))return k+y;for(;k.length<6;)k="0"+k;y=k+y}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=C(this,T),N(T)?-1:R(T)?0:1};function D(T){const v=T.g.length,E=[];for(let y=0;y<v;y++)E[y]=~T.g[y];return new o(E,~T.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(T){const v=Math.max(this.g.length,T.g.length),E=[];let y=0;for(let S=0;S<=v;S++){let k=y+(this.i(S)&65535)+(T.i(S)&65535),w=(k>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);y=w>>>16,k&=65535,w&=65535,E[S]=w<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(T,v){return T.add(D(v))}t.j=function(T){if(R(this)||R(T))return m;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(this.l(A)<0&&T.l(A)<0)return c(this.m()*T.m());const v=this.g.length+T.g.length,E=[];for(var y=0;y<2*v;y++)E[y]=0;for(y=0;y<this.g.length;y++)for(let S=0;S<T.g.length;S++){const k=this.i(y)>>>16,w=this.i(y)&65535,we=T.i(S)>>>16,ln=T.i(S)&65535;E[2*y+2*S]+=w*ln,I(E,2*y+2*S),E[2*y+2*S+1]+=k*ln,I(E,2*y+2*S+1),E[2*y+2*S+1]+=w*we,I(E,2*y+2*S+1),E[2*y+2*S+2]+=k*we,I(E,2*y+2*S+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new o(E,0)};function I(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function P(T,v){this.g=T,this.h=v}function V(T,v){if(R(v))throw Error("division by zero");if(R(T))return new P(m,m);if(N(T))return v=V(D(T),v),new P(D(v.g),D(v.h));if(N(v))return v=V(T,D(v)),new P(D(v.g),v.h);if(T.g.length>30){if(N(T)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,y=v;y.l(T)<=0;)E=M(E),y=M(y);var S=U(E,1),k=U(y,1);for(y=U(y,2),E=U(E,2);!R(y);){var w=k.add(y);w.l(T)<=0&&(S=S.add(E),k=w),y=U(y,1),E=U(E,1)}return v=C(T,S.j(v)),new P(S,v)}for(S=m;T.l(v)>=0;){for(E=Math.max(1,Math.floor(T.m()/v.m())),y=Math.ceil(Math.log(E)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),k=c(E),w=k.j(v);N(w)||w.l(T)>0;)E-=y,k=c(E),w=k.j(v);R(k)&&(k=g),S=S.add(k),T=C(T,w)}return new P(S,T)}t.B=function(T){return V(this,T).h},t.and=function(T){const v=Math.max(this.g.length,T.g.length),E=[];for(let y=0;y<v;y++)E[y]=this.i(y)&T.i(y);return new o(E,this.h&T.h)},t.or=function(T){const v=Math.max(this.g.length,T.g.length),E=[];for(let y=0;y<v;y++)E[y]=this.i(y)|T.i(y);return new o(E,this.h|T.h)},t.xor=function(T){const v=Math.max(this.g.length,T.g.length),E=[];for(let y=0;y<v;y++)E[y]=this.i(y)^T.i(y);return new o(E,this.h^T.h)};function M(T){const v=T.g.length+1,E=[];for(let y=0;y<v;y++)E[y]=T.i(y)<<1|T.i(y-1)>>>31;return new o(E,T.h)}function U(T,v){const E=v>>5;v%=32;const y=T.g.length-E,S=[];for(let k=0;k<y;k++)S[k]=v>0?T.i(k+E)>>>v|T.i(k+E+1)<<32-v:T.i(k+E);return new o(S,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,sw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,or=o}).apply(typeof $g<"u"?$g:typeof self<"u"?self:typeof window<"u"?window:{});var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,Gi,ow,sl,Xh,aw,lw,uw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof La=="object"&&La];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var x=a[_];if(!(x in d))break e;d=d[x]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,x,b){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[x].apply(_,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function R(a,h){for(let _=1;_<arguments.length;_++){const x=arguments[_];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const b=x.length||0;a.length=d+b;for(let z=0;z<b;z++)a[d+z]=x[z]}else a.push(x)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function C(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class I{constructor(){this.h=this.g=null}add(h,d){const _=P.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var P=new N(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,T=new I,v=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=C();){try{a.h.call(a.g)}catch(d){D(d)}var h=P;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function we(a,h){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(we,S),we.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),pi=0;function mi(a,h,d,_,x){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=x,this.key=++pi,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cr(a,h){let d,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(d in _)a[d]=_[d];for(let b=0;b<Se.length;b++)d=Se[b],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,h,d,_,x){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=bt(a,h,_,x);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new mi(h,this.src,b,!!_,x),h.fa=d,a.push(h)),h};function kr(a,h){const d=h.type;if(d in a.g){var _=a.g[d],x=Array.prototype.indexOf.call(_,h,void 0),b;(b=x>=0)&&Array.prototype.splice.call(_,x,1),b&&($(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function bt(a,h,d,_){for(let x=0;x<a.length;++x){const b=a[x];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==_)return x}return-1}var Pn="closure_lm_"+(Math.random()*1e6|0),ju={};function ap(a,h,d,_,x){if(Array.isArray(h)){for(let b=0;b<h.length;b++)ap(a,h[b],d,_,x);return null}return d=cp(d),a&&a[ln]?a.J(h,d,l(_)?!!_.capture:!1,x):FT(a,h,d,!1,_,x)}function FT(a,h,d,_,x,b){if(!h)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let Z=Uu(a);if(Z||(a[Pn]=Z=new St(a)),d=Z.add(h,d,_,z,b),d.proxy)return d;if(_=UT(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)k||(x=z),x===void 0&&(x=!1),a.addEventListener(h.toString(),_,x);else if(a.attachEvent)a.attachEvent(up(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function UT(){function a(d){return h.call(a.src,a.listener,d)}const h=zT;return a}function lp(a,h,d,_,x){if(Array.isArray(h))for(var b=0;b<h.length;b++)lp(a,h[b],d,_,x);else _=l(_)?!!_.capture:!!_,d=cp(d),a&&a[ln]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],d=bt(h,d,_,x),d>-1&&($(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Uu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=bt(h,d,_,x)),(d=a>-1?h[a]:null)&&Fu(d))}function Fu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ln])kr(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(up(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=Uu(h))?(kr(d,a),d.h==0&&(d.src=null,h[Pn]=null)):$(a)}}}function up(a){return a in ju?ju[a]:ju[a]="on"+a}function zT(a,h){if(a.da)a=!0;else{h=new we(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&Fu(a),a=d.call(_,h)}return a}function Uu(a){return a=a[Pn],a instanceof St?a:null}var zu="__closure_events_fn_"+(Math.random()*1e9>>>0);function cp(a){return typeof a=="function"?a:(a[zu]||(a[zu]=function(h){return a.handleEvent(h)}),a[zu])}function Ge(){y.call(this),this.i=new St(this),this.M=this,this.G=null}m(Ge,y),Ge.prototype[ln]=!0,Ge.prototype.removeEventListener=function(a,h,d,_){lp(this,a,h,d,_)};function rt(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new S(h,a);else if(h instanceof S)h.target=h.target||a;else{var x=h;h=new S(_,a),Cr(h,x)}x=!0;let b,z;if(d)for(z=d.length-1;z>=0;z--)b=h.g=d[z],x=oa(b,_,!0,h)&&x;if(b=h.g=a,x=oa(b,_,!0,h)&&x,x=oa(b,_,!1,h)&&x,d)for(z=0;z<d.length;z++)b=h.g=d[z],x=oa(b,_,!1,h)&&x}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)$(d[_]);delete a.g[h],a.h--}}this.G=null},Ge.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Ge.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function oa(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let b=0;b<h.length;++b){const z=h[b];if(z&&!z.da&&z.capture==d){const Z=z.listener,De=z.ha||z.src;z.fa&&kr(a.i,z),x=Z.call(De,_)!==!1&&x}}return x&&!_.defaultPrevented}function BT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function hp(a){a.g=BT(()=>{a.g=null,a.i&&(a.i=!1,hp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $T extends y{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(a){y.call(this),this.h=a,this.g={}}m(gi,y);var dp=[];function fp(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&Fu(h)},a),a.g={}}gi.prototype.N=function(){gi.Z.N.call(this),fp(this)},gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bu=o.JSON.stringify,qT=o.JSON.parse,WT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function pp(){}function mp(){}var yi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $u(){S.call(this,"d")}m($u,S);function qu(){S.call(this,"c")}m(qu,S);var Rr={},gp=null;function aa(){return gp=gp||new Ge}Rr.Ia="serverreachability";function yp(a){S.call(this,Rr.Ia,a)}m(yp,S);function _i(a){const h=aa();rt(h,new yp(h))}Rr.STAT_EVENT="statevent";function _p(a,h){S.call(this,Rr.STAT_EVENT,a),this.stat=h}m(_p,S);function st(a){const h=aa();rt(h,new _p(h,a))}Rr.Ja="timingevent";function vp(a,h){S.call(this,Rr.Ja,a),this.size=h}m(vp,S);function vi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ei(){this.g=!0}Ei.prototype.ua=function(){this.g=!1};function HT(a,h,d,_,x,b){a.info(function(){if(a.g)if(b){var z="",Z=b.split("&");for(let le=0;le<Z.length;le++){var De=Z[le].split("=");if(De.length>1){const Me=De[0];De=De[1];const Gt=Me.split("_");z=Gt.length>=2&&Gt[1]=="type"?z+(Me+"="+De+"&"):z+(Me+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+h+`
`+d+`
`+z})}function GT(a,h,d,_,x,b,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+h+`
`+d+`
`+b+" "+z})}function as(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+QT(a,d)+(_?" "+_:"")})}function KT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ei.prototype.info=function(){};function QT(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var x=_[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return Bu(b)}catch{return h}}var la={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ep={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wp;function Wu(){}m(Wu,pp),Wu.prototype.g=function(){return new XMLHttpRequest},wp=new Wu;function wi(a){return encodeURIComponent(String(a))}function YT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function xn(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new gi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tp}function Tp(){this.i=null,this.g="",this.h=!1}var Ip={},Hu={};function Gu(a,h,d){a.M=1,a.A=ca(Ht(h)),a.u=d,a.R=!0,Sp(a,null)}function Sp(a,h){a.F=Date.now(),ua(a),a.B=Ht(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Mp(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Tp,a.g=tm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new $T(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(dp[0]=x.toString()),x=dp);for(let b=0;b<x.length;b++){const z=ap(d,x[b],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),_i(),HT(a.i,a.v,a.B,a.l,a.S,a.u)}xn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Vn(a)==3?h.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Vn(this.g),De=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||qp(this.g)))){this.K||Z!=4||De==7||(De==8||le<=0?_i(3):_i(2)),Ku(this);var h=this.g.ca();this.X=h;var d=JT(this);if(this.o=h==200,GT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,x=this.g;if((_=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_)){var b=_;break t}}b=null}if(a=b)as(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qu(this,a);else{this.o=!1,this.m=3,st(12),Nr(this),Ti(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=XT(this,d),Me==Hu){Z==4&&(this.m=4,st(14),a=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Ip){this.m=4,st(15),as(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else as(this.i,this.l,Me,null),Qu(this,Me);if(Ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)as(this.i,this.l,d,"[Invalid Chunked Response]"),Nr(this),Ti(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),rc(z),z.P=!0,st(11))}}else as(this.i,this.l,d,null),Qu(this,d);Z==4&&Nr(this),this.o&&!this.K&&(Z==4?Jp(this.j,this):(this.o=!1,ua(this)))}else d0(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Nr(this),Ti(this)}}}catch{}finally{}};function JT(a){if(!Ap(a))return a.g.la();const h=qp(a.g);if(h==="")return"";let d="";const _=h.length,x=Vn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),Ti(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<_;b++)a.h.h=!0,d+=a.h.i.decode(h[b],{stream:!(x&&b==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Ap(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function XT(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?Hu:(d=Number(h.substring(d,_)),isNaN(d)?Ip:(_+=1,_+d>h.length?Hu:(h=h.slice(_,_+d),a.C=_+d,h)))}xn.prototype.cancel=function(){this.K=!0,Nr(this)};function ua(a){a.T=Date.now()+a.H,Cp(a,a.H)}function Cp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=vi(c(a.aa,a),h)}function Ku(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(KT(this.i,this.B),this.M!=2&&(_i(),st(17)),Nr(this),this.m=2,Ti(this)):Cp(this,this.T-a)};function Ti(a){a.j.I==0||a.K||Jp(a.j,a)}function Nr(a){Ku(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,fp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Qu(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Yu(d.h,a))){if(!a.L&&Yu(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ma(d),fa(d);else break e;nc(d),st(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=vi(c(d.Va,d),6e3));Np(d.h)<=1&&d.ta&&(d.ta=void 0)}else xr(d,11)}else if((a.L||d.g==a)&&ma(d),!w(h))for(x=d.Ba.g.parse(h),h=0;h<x.length;h++){let le=x[h];const Me=le[0];if(!(Me<=d.K))if(d.K=Me,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Gt=le[3];Gt!=null&&(d.ka=Gt,d.j.info("VER="+d.ka));const Dr=le[4];Dr!=null&&(d.za=Dr,d.j.info("SVER="+d.za));const On=le[5];On!=null&&typeof On=="number"&&On>0&&(_=1.5*On,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Ln=a.g;if(Ln){const ya=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ya){var b=_.h;b.g||ya.indexOf("spdy")==-1&&ya.indexOf("quic")==-1&&ya.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ju(b,b.h),b.h=null))}if(_.G){const sc=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(_.wa=sc,he(_.J,_.G,sc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var z=a;if(_.na=em(_,_.L?_.ba:null,_.W),z.L){Pp(_.h,z);var Z=z,De=_.O;De&&(Z.H=De),Z.D&&(Ku(Z),ua(Z)),_.g=z}else Qp(_);d.i.length>0&&pa(d)}else le[0]!="stop"&&le[0]!="close"||xr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?xr(d,7):tc(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}_i(4)}catch{}}var ZT=class{constructor(a,h){this.g=a,this.map=h}};function kp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Np(a){return a.h?1:a.g?a.g.size:0}function Yu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ju(a,h){a.g?a.g.add(h):a.h=h}function Pp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kp.prototype.cancel=function(){if(this.i=xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return A(a.i)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e0(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let x,b=null;_>=0?(x=a[d].substring(0,_),b=a[d].substring(_+1)):x=a[d],h(x,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Dn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Dn?(this.l=a.l,Ii(this,a.j),this.o=a.o,this.g=a.g,Si(this,a.u),this.h=a.h,Xu(this,jp(a.i)),this.m=a.m):a&&(h=String(a).match(Dp))?(this.l=!1,Ii(this,h[1]||"",!0),this.o=Ai(h[2]||""),this.g=Ai(h[3]||"",!0),Si(this,h[4]),this.h=Ai(h[5]||"",!0),Xu(this,h[6]||"",!0),this.m=Ai(h[7]||"")):(this.l=!1,this.i=new ki(null,this.l))}Dn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ci(h,bp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ci(h,bp,!0),"@"),a.push(wi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ci(d,d.charAt(0)=="/"?r0:n0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ci(d,i0)),a.join("")},Dn.prototype.resolve=function(a){const h=Ht(this);let d=!!a.j;d?Ii(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)Si(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var x=h.h.lastIndexOf("/");x!=-1&&(_=h.h.slice(0,x+1)+_)}if(x=_,x==".."||x==".")_="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){_=x.lastIndexOf("/",0)==0,x=x.split("/");const b=[];for(let z=0;z<x.length;){const Z=x[z++];Z=="."?_&&z==x.length&&b.push(""):Z==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),_&&z==x.length&&b.push("")):(b.push(Z),_=!0)}_=b.join("/")}else _=x}return d?h.h=_:d=a.i.toString()!=="",d?Xu(h,jp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Ht(a){return new Dn(a)}function Ii(a,h,d){a.j=d?Ai(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Si(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Xu(a,h,d){h instanceof ki?(a.i=h,o0(a.i,a.l)):(d||(h=Ci(h,s0)),a.i=new ki(h,a.l))}function he(a,h,d){a.i.set(h,d)}function ca(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ai(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ci(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,t0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function t0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bp=/[#\/\?@]/g,n0=/[#\?:]/g,r0=/[#\?]/g,s0=/[#\?@]/g,i0=/#/g;function ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Pr(a){a.g||(a.g=new Map,a.h=0,a.i&&e0(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ki.prototype,t.add=function(a,h){Pr(this),this.i=null,a=ls(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Vp(a,h){Pr(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Op(a,h){return Pr(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){Pr(this),this.g.forEach(function(d,_){d.forEach(function(x){a.call(h,x,_,this)},this)},this)};function Lp(a,h){Pr(a);let d=[];if(typeof h=="string")Op(a,h)&&(d=d.concat(a.g.get(ls(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Pr(this),this.i=null,a=ls(this,a),Op(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Lp(this,a),a.length>0?String(a[0]):h):h};function Mp(a,h,d){Vp(a,h),d.length>0&&(a.i=null,a.g.set(ls(a,h),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const x=wi(d);d=Lp(this,d);for(let b=0;b<d.length;b++){let z=x;d[b]!==""&&(z+="="+wi(d[b])),a.push(z)}}return this.i=a.join("&")};function jp(a){const h=new ki;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function o0(a,h){h&&!a.j&&(Pr(a),a.i=null,a.g.forEach(function(d,_){const x=_.toLowerCase();_!=x&&(Vp(this,_),Mp(this,x,d))},a)),a.j=h}function a0(a,h){const d=new Ei;if(o.Image){const _=new Image;_.onload=f(bn,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(bn,d,"TestLoadImage: error",!1,h,_),_.onabort=f(bn,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(bn,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function l0(a,h){const d=new Ei,_=new AbortController,x=setTimeout(()=>{_.abort(),bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(b=>{clearTimeout(x),b.ok?bn(d,"TestPingServer: ok",!0,h):bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),bn(d,"TestPingServer: error",!1,h)})}function bn(a,h,d,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(d)}catch{}}function u0(){this.g=new WT}function Zu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Zu,pp),Zu.prototype.g=function(){return new ha(this.i,this.h)};function ha(a,h){Ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ha,Ge),t=ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ri(this):Ni(this),this.readyState==3&&Fp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ri(this))},t.Na=function(a){this.g&&(this.response=a,Ri(this))},t.ga=function(){this.g&&Ri(this)};function Ri(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ni(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Up(a){let h="";return Q(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function ec(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Up(d),typeof a=="string"?d!=null&&wi(d):he(a,h,d))}function Te(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Te,Ge);var c0=/^https?$/i,h0=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){zp(this,b);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)d.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const b of _.keys())d.set(b,_.get(b));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(h0,h,void 0)>=0)||_||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of d)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){zp(this,b)}};function zp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Bp(a),da(a)}function Bp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),da(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$p(this):this.Xa())},t.Xa=function(){$p(this)};function $p(a){if(a.h&&typeof i<"u"){if(a.v&&Vn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=b===0){let z=String(a.D).match(Dp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!c0.test(z?z.toLowerCase():"")}d=_}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var x=Vn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Bp(a)}}finally{da(a)}}}}function da(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qT(h)}};function qp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function d0(a){const h={};a=(a.g&&Vn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var d=YT(a[_]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[x]||[];h[x]=b,b.push(d)}X(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Wp(a){this.za=0,this.i=[],this.j=new Ei,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pi("baseRetryDelayMs",5e3,a),this.Za=Pi("retryDelaySeedMs",1e4,a),this.Ta=Pi("forwardChannelMaxRetries",2,a),this.va=Pi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new kp(a&&a.concurrentRequestLimit),this.Ba=new u0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Wp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){st(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=em(this,null,this.W),pa(this)};function tc(a){if(Hp(a),a.I==3){var h=a.V++,d=Ht(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),xi(a,d),h=new xn(a,a.j,h),h.M=2,h.A=ca(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=tm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ua(h)}Zp(a)}function fa(a){a.g&&(rc(a),a.g.cancel(),a.g=null)}function Hp(a){fa(a),a.v&&(o.clearTimeout(a.v),a.v=null),ma(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function pa(a){if(!Rp(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||v(),U||(M(),U=!0),T.add(h,a),a.D=0}}function f0(a,h){return Np(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=vi(c(a.Ea,a,h),Xp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new xn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=me(b),Cr(b,this.U)):b=this.U),this.u!==null||this.R||(x.J=b,b=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Kp(this,x,h),d=Ht(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),xi(this,d),b&&(this.R?h="headers="+wi(Up(b))+"&"+h:this.u&&ec(d,this.u,b)),Ju(this.h,x),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),x.U=!0,Gu(x,d,null)):Gu(x,d,h),this.I=2}}else this.I==3&&(a?Gp(this,a):this.i.length==0||Rp(this.h)||Gp(this))};function Gp(a,h){var d;h?d=h.l:d=a.V++;const _=Ht(a.J);he(_,"SID",a.M),he(_,"RID",d),he(_,"AID",a.K),xi(a,_),a.u&&a.o&&ec(_,a.u,a.o),d=new xn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Kp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ju(a.h,d),Gu(d,_,h)}function xi(a,h){a.H&&Q(a.H,function(d,_){he(h,_,d)}),a.l&&Q({},function(d,_){he(h,_,d)})}function Kp(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=x[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let le=!0;for(let Me=0;Me<d;Me++){var b=x[Me].g;const Gt=x[Me].map;if(b-=Z,b<0)Z=Math.max(0,x[Me].g-100),le=!1;else try{b="req"+b+"_"||"";try{var z=Gt instanceof Map?Gt:Object.entries(Gt);for(const[Dr,On]of z){let Ln=On;l(On)&&(Ln=Bu(On)),De.push(b+Dr+"="+encodeURIComponent(Ln))}}catch(Dr){throw De.push(b+"type="+encodeURIComponent("_badmap")),Dr}}catch{_&&_(Gt)}}if(le){z=De.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function Qp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||v(),U||(M(),U=!0),T.add(h,a),a.A=0}}function nc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=vi(c(a.Da,a),Xp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Yp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=vi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),fa(this),Yp(this))};function rc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Yp(a){a.g=new xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ht(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),xi(a,h),a.u&&a.o&&ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ca(Ht(h)),d.u=null,d.R=!0,Sp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,fa(this),nc(this),st(19))};function ma(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Jp(a,h){var d=null;if(a.g==h){ma(a),rc(a),a.g=null;var _=2}else if(Yu(a.h,h))d=h.G,Pp(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;_=aa(),rt(_,new vp(_,d)),pa(a)}else Qp(a);else if(x=h.m,x==3||x==0&&h.X>0||!(_==1&&f0(a,h)||_==2&&nc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),x){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function Xp(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function xr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const x=!_;_=new Dn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ii(_,"https"),ca(_),x?a0(_.toString(),d):l0(_.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(h),Zp(a),Hp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Zp(a){if(a.I=0,a.ja=[],a.l){const h=xp(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function em(a,h,d){var _=d instanceof Dn?Ht(d):new Dn(d);if(_.g!="")h&&(_.g=h+"."+_.g),Si(_,_.u);else{var x=o.location;_=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const b=new Dn(null);_&&Ii(b,_),h&&(b.g=h),x&&Si(b,x),d&&(b.h=d),_=b}return d=a.G,h=a.wa,d&&h&&he(_,d,h),he(_,"VER",a.ka),xi(a,_),_}function tm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new Zu({ab:d})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nm(){}t=nm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ga(){}ga.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){Ge.call(this),this.g=new Wp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}m(gt,Ge),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){tc(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Bu(a),a=d);h.i.push(new ZT(h.Ya++,a)),h.I==3&&pa(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,tc(this.g),delete this.g,gt.Z.N.call(this)};function rm(a){$u.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(rm,$u);function sm(){qu.call(this),this.status=1}m(sm,qu);function us(a){this.g=a}m(us,nm),us.prototype.ra=function(){rt(this.g,"a")},us.prototype.qa=function(a){rt(this.g,new rm(a))},us.prototype.pa=function(a){rt(this.g,new sm)},us.prototype.oa=function(){rt(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,uw=function(){return new ga},lw=function(){return aa()},aw=Rr,Xh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},la.NO_ERROR=0,la.TIMEOUT=8,la.HTTP_ERROR=6,sl=la,Ep.COMPLETE="complete",ow=Ep,mp.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,Gi=mp,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,iw=Te}).apply(typeof La<"u"?La:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li="12.13.0";function jk(t){li=t}/**
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
 */const Xr=new hf("@firebase/firestore");function ds(){return Xr.logLevel}function B(t,...e){if(Xr.logLevel<=re.DEBUG){const n=e.map(Tf);Xr.debug(`Firestore (${li}): ${t}`,...n)}}function An(t,...e){if(Xr.logLevel<=re.ERROR){const n=e.map(Tf);Xr.error(`Firestore (${li}): ${t}`,...n)}}function Zr(t,...e){if(Xr.logLevel<=re.WARN){const n=e.map(Tf);Xr.warn(`Firestore (${li}): ${t}`,...n)}}function Tf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,cw(t,r,n)}function cw(t,e,n){let r=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||cw(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class Uk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zk{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class Bk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class $k{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Bk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Wk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Zh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return jc(s)===jc(i)?ee(s,i):jc(s)?1:-1}return ee(t.length,e.length)}const Hk=55296,Gk=57343;function jc(t){const e=t.charCodeAt(0);return e>=Hk&&e<=Gk}function Qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ee(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),s=Yt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):Zh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class ue extends Yt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Yt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return Kk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wg}static keyField(){return new $e([Wg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dw(t,e,n){if(!n)throw new q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qk(t,e,n,r){if(e===!0&&r===!0)throw new q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hg(t){if(!H.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gg(t){if(H.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(t);throw new q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ko(t,e){if(!fw(t))throw new q(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-62135596800,Qg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Qg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kg)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qg}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ko(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Pe("string",fe._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Do=-1;function Yk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new hr(s,H.empty(),e)}function Jk(t){return new hr(t.readTime,t.key,Do)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(Y.min(),H.empty(),Do)}static max(){return new hr(Y.max(),H.empty(),Do)}}function Xk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Zk)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ci(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Tu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=-1;function Iu(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function nR(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="";function rR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yg(e)),e=sR(t.get(n),e);return Yg(e)}function sR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pw:n+="";break;default:n+=i}}return n}function Yg(t){return t+pw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Oe($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gw("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=iR.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */const yw="server_timestamp",_w="__type__",vw="__previous_value__",Ew="__local_write_time__";function Af(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_w])==null?void 0:r.stringValue)===yw}function Su(t){const e=t.mapValue.fields[vw];return Af(e)?Su(e):e}function bo(t){const e=dr(t.mapValue.fields[Ew].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const $l="(default)";class Vo{constructor(e,n){this.projectId=e,this.database=n||$l}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===$l}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}function aR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(t.options.projectId,e)}/**
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
 */const ww="__type__",lR="__max__",ja={mapValue:{}},Tw="__vector__",ql="value";function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Af(t)?4:cR(t)?9007199254740991:uR(t)?10:11:K(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dr(s.timestampValue),l=dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ae(s.doubleValue),l=Ae(i.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jg(o)!==Jg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Oo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ae(i.integerValue||i.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Zg(t.timestampValue,e.timestampValue);case 4:return Zg(bo(t),bo(e));case 5:return Zh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=fr(i),u=fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ee(Ae(i.latitude),Ae(o.latitude));return l!==0?l:ee(Ae(i.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ey(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,A,R,N;const l=i.fields||{},u=o.fields||{},c=(g=l[ql])==null?void 0:g.arrayValue,f=(A=u[ql])==null?void 0:A.arrayValue,m=ee(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:ey(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ja.mapValue&&o===ja.mapValue)return 0;if(i===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Zh(u[m],f[m]);if(g!==0)return g;const A=Ys(l[u[m]],c[f[m]]);if(A!==0)return A}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=dr(t),r=dr(e),s=ee(n.seconds,r.seconds);return s!==0?s:ee(n.nanos,r.nanos)}function ey(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ys(n[s],r[s]);if(i)return i}return ee(n.length,r.length)}function Js(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ed(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ed(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function il(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Su(t);return e?16+il(e):16;case 5:return 2*t.stringValue.length;case 6:return fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+il(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ir(r.fields,(i,o)=>{s+=i.length+il(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function ty(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function td(t){return!!t&&"integerValue"in t}function Cf(t){return!!t&&"arrayValue"in t}function ny(t){return!!t&&"nullValue"in t}function ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function uR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ww])==null?void 0:r.stringValue)===Tw}function ao(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return{...t}}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ao(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ol(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(ao(this.value))}}function Iw(t){const e=[];return Ir(t.fields,(n,r)=>{const s=new $e([n]);if(ol(r)){const i=Iw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function sy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sw{}class Ne extends Sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fR(e,n,r):n==="array-contains"?new gR(e,r):n==="in"?new yR(e,r):n==="not-in"?new _R(e,r):n==="array-contains-any"?new vR(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pR(e,r):new mR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ys(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Sw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Wt(e,n)}matches(e){return Aw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Aw(t){return t.op==="and"}function Cw(t){return dR(t)&&Aw(t)}function dR(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function nd(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(Cw(t))return t.filters.map(e=>nd(e)).join(",");{const e=t.filters.map(n=>nd(n)).join(",");return`${t.op}(${e})`}}function kw(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&kw(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function Rw(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Rw).join(" ,")+"}"}(t):"Filter"}class fR extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class pR extends Ne{constructor(e,n){super(e,"in",n),this.keys=Nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mR extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=Nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class gR extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cf(n)&&Oo(n.arrayValue,this.value)}}class yR extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class _R extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oo(this.value.arrayValue,n)}}class vR extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}/**
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
 */class ER{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function oy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ER(t,e,n,r,s,i,o)}function kf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.Te=n}return e.Te}function Rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iy(t.startAt,e.startAt)&&iy(t.endAt,e.endAt)}function rd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wR(t,e,n,r,s,i,o,l){return new Qo(t,e,n,r,s,i,o,l)}function Nf(t){return new Qo(t)}function ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TR(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Pw(t){return t.collectionGroup!==null}function lo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Hl(i,r))}),n.has($e.keyField().canonicalString())||e.Ie.push(new Hl($e.keyField(),r))}return e.Ie}function nn(t){const e=J(t);return e.Ee||(e.Ee=IR(e,lo(t))),e.Ee}function IR(t,e){if(t.limitType==="F")return oy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hl(s.field,i)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return oy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e){const n=t.filters.concat([e]);return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function id(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Au(t,e){return Rf(nn(t),nn(e))&&t.limitType===e.limitType}function xw(t){return`${kf(nn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rw(s)).join(", ")}]`),Iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Js(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Js(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of lo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=sy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),s)||r.endAt&&!function(o,l,u){const c=sy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),s))}(t,e)}function SR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const s of lo(t)){const i=AR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Ys(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new ye(H.comparator);function Cn(){return CR}const bw=new ye(H.comparator);function Ki(...t){let e=bw;for(const n of t)e=e.insert(n.key,n);return e}function Vw(t){let e=bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return uo()}function Ow(){return uo()}function uo(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const kR=new ye(H.comparator),RR=new Oe(H.comparator);function te(...t){let e=RR;for(const n of t)e=e.add(n);return e}const NR=new Oe(ee);function PR(){return NR}/**
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
 */function Pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function Lw(t){return{integerValue:""+t}}function xR(t,e){return nR(e)?Lw(e):Pf(t,e)}/**
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
 */class ku{constructor(){this._=void 0}}function DR(t,e,n){return t instanceof Gl?function(s,i){const o={fields:{[_w]:{stringValue:yw},[Ew]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Af(i)&&(i=Su(i)),i&&(o.fields[vw]=i),{mapValue:o}}(n,e):t instanceof Xs?jw(t,e):t instanceof Zs?Fw(t,e):function(s,i){const o=Mw(s,i),l=ly(o)+ly(s.Ae);return td(o)&&td(s.Ae)?Lw(l):Pf(s.serializer,l)}(t,e)}function bR(t,e,n){return t instanceof Xs?jw(t,e):t instanceof Zs?Fw(t,e):n}function Mw(t,e){return t instanceof Kl?function(r){return td(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Gl extends ku{}class Xs extends ku{constructor(e){super(),this.elements=e}}function jw(t,e){const n=Uw(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends ku{constructor(e){super(),this.elements=e}}function Fw(t,e){let n=Uw(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Kl extends ku{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ly(t){return Ae(t.integerValue||t.doubleValue)}function Uw(t){return Cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.field=e,this.transform=n}}function VR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xs&&s instanceof Xs||r instanceof Zs&&s instanceof Zs?Qs(r.elements,s.elements,on):r instanceof Kl&&s instanceof Kl?on(r.Ae,s.Ae):r instanceof Gl&&s instanceof Gl}(t.transform,e.transform)}class OR{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function Bw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xf(t.key,zt.none()):new Yo(t.key,t.data,zt.none());{const n=t.data,r=ht.empty();let s=new Oe($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new vt(s.toArray()),zt.none())}}function LR(t,e,n){t instanceof Yo?function(s,i,o){const l=s.value.clone(),u=cy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!al(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=cy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll($w(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof Yo?function(i,o,l,u){if(!al(i.precondition,o))return l;const c=i.value.clone(),f=hy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,u){if(!al(i.precondition,o))return l;const c=hy(i.fieldTransforms,u,o),f=o.data;return f.setAll($w(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return al(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Mw(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,(i,o)=>VR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Ru{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Ru{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,bR(o,l,n[s]))}return r}function hy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DR(i,o,e))}return r}class xf extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jR extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ow();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Bw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>uy(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>uy(n,r))}}class Df{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return kR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Df(e,n,r,s)}}/**
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
 */class UR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function BR(t){switch(t){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function qw(t){if(t===void 0)return An("GRPC error has no .code"),O.UNKNOWN;switch(t){case ke.OK:return O.OK;case ke.CANCELLED:return O.CANCELLED;case ke.UNKNOWN:return O.UNKNOWN;case ke.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ke.INTERNAL:return O.INTERNAL;case ke.UNAVAILABLE:return O.UNAVAILABLE;case ke.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ke.NOT_FOUND:return O.NOT_FOUND;case ke.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ke.ABORTED:return O.ABORTED;case ke.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ke.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:t})}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $R(){return new TextEncoder}/**
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
 */const qR=new or([4294967295,4294967295],0);function dy(t){const e=$R().encode(t),n=new sw;return n.update(e),new Uint8Array(n.digest())}function fy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qi(`Invalid padding: ${n}`);if(r<0)throw new Qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=or.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(or.fromNumber(r)));return s.compare(qR)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=dy(e),[r,s]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=dy(e),[r,s]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jo(Y.min(),s,new ye(ee),Cn(),te())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Ww{constructor(e,n){this.targetId=e,this.Ce=n}}class Hw{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class py{constructor(){this.ve=0,this.Fe=my(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new Xo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=my()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cn(),this.Je=Fa(),this.He=Fa(),this.Ze=new ye(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(rd(i))if(r===0){const o=new H(i.path);this.et(n,o,Ze.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=fr(r).toUint8Array()}catch(u){if(u instanceof gw)return Zr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bf(o,s,i)}catch(u){return Zr(u instanceof Qi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&rd(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ze.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=te();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Jo(e,n,this.Ze,this.je,r);return this.je=Cn(),this.Je=Fa(),this.He=Fa(),this.Ze=new ye(ee),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new py,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Oe(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Oe(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new py),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fa(){return new ye(H.comparator)}function my(){return new ye(H.comparator)}const HR={asc:"ASCENDING",desc:"DESCENDING"},GR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KR={and:"AND",or:"OR"};class QR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function od(t,e){return t.useProto3Json||Iu(e)?e:{value:e}}function Ql(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YR(t,e){return Ql(t,e.toTimestamp())}function rn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=dr(n);return new fe(r.seconds,r.nanos)}(t))}function Vf(t,e){return ad(t,e).canonicalString()}function ad(t,e){const n=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kw(t){const e=ue.fromString(t);return oe(Zw(e),10190,{key:e.toString()}),e}function ld(t,e){return Vf(t.databaseId,e.path)}function Fc(t,e){const n=Kw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Yw(n))}function Qw(t,e){return Vf(t.databaseId,e)}function JR(t){const e=Kw(t);return e.length===4?ue.emptyPath():Yw(e)}function ud(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gy(t,e,n){return{name:ld(t,e),fields:n.value.mapValue.fields}}function XR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),He.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:qw(c.code);return new q(f,c.message||"")}(o);n=new Hw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):Y.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ll(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fc(t,r.document),i=r.readTime?rn(r.readTime):Y.min(),o=Ze.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fc(t,r.document),i=r.removedTargetIds||[];n=new ll([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zR(s,i),l=r.targetId;n=new Ww(l,o)}}return n}function ZR(t,e){let n;if(e instanceof Yo)n={update:gy(t,e.key,e.value)};else if(e instanceof xf)n={delete:ld(t,e.key)};else if(e instanceof Sr)n={update:gy(t,e.key,e.data),updateMask:lN(e.fieldMask)};else{if(!(e instanceof jR))return K(16599,{dt:e.type});n={verify:ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function eN(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(Y.min())&&(o=rn(i)),new OR(o,s.transformResults||[])}(n,e))):[]}function tN(t,e){return{documents:[Qw(t,e.path)]}}function nN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qw(t,s);const i=function(c){if(c.length!==0)return Xw(Wt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ps(g.field),direction:iN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=od(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function rN(t){let e=JR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Jw(m);return g instanceof Wt&&Cw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Hl(ms(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Iu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new Wl(A,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,A=m.values||[];return new Wl(A,g)}(n.endAt)),wR(e,s,o,i,l,"F",u,c)}function sN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Jw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function iN(t){return HR[t]}function oN(t){return GR[t]}function aN(t){return KR[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return $e.fromServerFormat(t.fieldPath)}function Xw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(ry(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(ny(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ry(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(ny(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:oN(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>Xw(s));return r.length===1?r[0]:{compositeFilter:{op:aN(n.op),filters:r}}}(t):K(54877,{filter:t})}function lN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function eT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.yt=e}}function cN(t){const e=rN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
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
 */class hN{constructor(){this.bn=new dN}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(hr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class dN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Oe(ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Oe(ue.comparator)).toArray()}}/**
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
 */const yy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tT=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(tT,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new mr(0)}static ar(){return new mr(-1)}}/**
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
 */const _y="LruGarbageCollector",fN=1048576;function vy([t,e],[n,r]){const s=ee(t,n);return s===0?ee(e,r):s}class pN{constructor(e){this.Pr=e,this.buffer=new Oe(vy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(_y,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ci(n)?B(_y,"Ignoring IndexedDB error during garbage collection: ",n):await ui(n)}await this.Ar(3e5)})}}class gN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Tu.ce);const r=new pN(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(yy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),ds()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function yN(t,e){return new gN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&co(r.mutation,s,vt.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ki();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Cn();const o=uo(),l=function(){return uo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Sr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),co(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new vN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=uo();let s=new ye((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=Ow();f.forEach(g=>{if(!i.has(g)){const A=Bw(n.get(g),r.get(g));A!==null&&m.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return TR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Fr());let l=Do,u=i;return o.next(c=>L.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:Vw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ki();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const c=function(m,g){return new Qo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Ki();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&co(f.mutation,c,vt.empty(),fe.now()),Cu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class wN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:cN(s.bundledQuery),readTime:rn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class TN{constructor(){this.overlays=new ye(H.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ye((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Fr(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Fr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UR(n,r));let i=this.Lr.get(n);i===void 0&&(i=te(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class IN{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.kr=new Oe(je.Kr),this.qr=new Oe(je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new je(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new ue([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new ue([])),r=new je(n,e),s=new je(n,e+1);let i=te();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return H.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Oe(je.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Sf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(ee);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new je(new H(i),0);let l=new Oe(ee);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new je(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.ti=e,this.docs=function(){return new ye(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Xk(Jk(f),r)<=0||(s.has(f.key)||Cu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CN(this)}getSize(e){return L.resolve(this.size)}}class CN extends _N{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.persistence=e,this.ri=new rs(n=>kf(n),Rf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Of,this.targetCount=0,this.oi=mr._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new mr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this._i={},this.overlays={},this.ai=new Tu(0),this.ui=!1,this.ui=!0,this.ci=new IN,this.referenceDelegate=e(this),this.li=new kN(this),this.indexManager=new hN,this.remoteDocumentCache=function(s){return new AN(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new uN(n),this.Pi=new wN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new SN(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new RN(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class RN extends eR{constructor(e){super(),this.currentSequenceNumber=e}}class Lf{constructor(e){this.persistence=e,this.Ri=new Of,this.Ai=null}static Vi(e){return new Lf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=H.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Yl{constructor(e,n){this.persistence=e,this.fi=new rs(r=>rR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=yN(this,n)}static Vi(e,n){return new Yl(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=il(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mf(e,n.fromCache,r,s)}}/**
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
 */class NN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return r1()?8:tR(tt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new NN;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ds()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ds()<=re.DEBUG&&B("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ds()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):L.resolve())}gs(e,n){if(ay(n))return L.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=id(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,id(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return ay(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(ds()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.Ds(e,o,n,Yk(s,Do)).next(l=>l))})}Ss(e,n){let r=new Oe(Dw(e));return n.forEach((s,i)=>{Cu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ds()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",fs(n)),this.fs.getDocumentsMatchingQuery(e,n,hr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const jf="LocalStore",xN=3e8;class DN{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ye(ee),this.Fs=new rs(i=>kf(i),Rf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function bN(t,e,n,r){return new DN(t,e,n,r)}async function rT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function VN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let A=L.resolve();return g.forEach(R=>{A=A.next(()=>f.getEntry(u,R)).next(N=>{const D=c.docVersions.get(R);oe(D!==null,48541),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function ON(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(He.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(N,D,C){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=xN?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,A,f)&&l.push(n.li.updateTargetData(i,A))});let u=Cn(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(LN(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function LN(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(jf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function MN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Sf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function cd(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ci(o))throw o;B(jf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ey(t,e,n){const r=J(t);let s=Y.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),g=m.Fs.get(f);return g!==void 0?L.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,nn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:te())).next(l=>(FN(r,SR(e),l),{documents:l,ks:i})))}function FN(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class wy{constructor(){this.activeTargetIds=PR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UN{constructor(){this.vo=new wy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new wy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zN{Mo(e){}shutdown(){}}/**
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
 */const Ty="ConnectivityMonitor";class Iy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Ty,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ua=null;function hd(){return Ua===null?Ua=function(){return 268435456+Math.round(2147483648*Math.random())}():Ua++,"0x"+Ua.toString(16)}/**
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
 */const Uc="RestConnection",BN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $N{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===$l?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=hd(),l=this.Qo(e,n.toUriEncodedString());B(Uc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=$o(c);return this.zo(e,l,u,r,f).then(m=>(B(Uc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Zr(Uc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+li}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=BN[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection",Ui=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class js extends $N{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!js.c_){const e=lw();Ui(e,aw.STAT_EVENT,n=>{n.stat===Xh.PROXY?B(Ye,"STAT_EVENT: detected buffering proxy"):n.stat===Xh.NOPROXY&&B(Ye,"STAT_EVENT: detected no buffering proxy")}),js.c_=!0}}zo(e,n,r,s,i){const o=hd();return new Promise((l,u)=>{const c=new iw;c.setWithCredentials(!0),c.listenOnce(ow.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sl.NO_ERROR:const m=c.getResponseJson();B(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case sl.TIMEOUT:B(Ye,`RPC '${e}' ${o} timed out`),u(new q(O.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const g=c.getStatus();if(B(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const N=function(C){const I=C.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(R.status);u(new q(N,R.message))}else u(new q(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);B(Ye,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=hd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");B(Ye,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const A=new qN({Jo:R=>{g?B(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||(B(Ye,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),B(Ye,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Ho:()=>f.close()});return Ui(f,Gi.EventType.OPEN,()=>{g||(B(Ye,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),Ui(f,Gi.EventType.CLOSE,()=>{g||(g=!0,B(Ye,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.E_(f))}),Ui(f,Gi.EventType.ERROR,R=>{g||(g=!0,Zr(Ye,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),A.o_(new q(O.UNAVAILABLE,"The operation could not be completed")))}),Ui(f,Gi.EventType.MESSAGE,R=>{var N;if(!g){const D=R.data[0];oe(!!D,16349);const C=D,I=(C==null?void 0:C.error)||((N=C[0])==null?void 0:N.error);if(I){B(Ye,`RPC '${e}' stream ${s} received error:`,I);const P=I.status;let V=function(T){const v=ke[T];if(v!==void 0)return qw(v)}(P),M=I.message;P==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Zr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=O.INTERNAL,M="Unknown error status: "+P+" with message "+I.message),g=!0,A.o_(new q(V,M)),f.close()}else B(Ye,`RPC '${e}' stream ${s} received:`,D),A.__(D)}}),js.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uw()}}/**
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
 */function WN(t){return new js(t)}function zc(){return typeof document<"u"?document:null}/**
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
 */function Nu(t){return new QR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */js.c_=!1;class iT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="PersistentStream";class oT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(Sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HN extends oT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=XR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?rn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=ud(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=rd(u)?{documents:tN(i,u)}:{query:nN(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Gw(i,o.resumeToken);const c=od(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ql(i,o.snapshotVersion.toTimestamp());const c=od(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=sN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=ud(this.serializer),n.removeTarget=e,this.K_(n)}}class GN extends oT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=eN(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ud(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{}class QN extends KN{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,ad(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,ad(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function YN(t,e,n,r){return new QN(t,e,n,r)}class JN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="RemoteStore";class XN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new mr(1e3),this.Va=new mr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(B(an,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.da.add(4),await Zo(c),c.ga.set("Unknown"),c.da.delete(4),await Pu(c)}(this))})}),this.ga=new JN(r,s)}}async function Pu(t){if(ss(t))for(const e of t.ma)await e(!0)}async function Zo(t){for(const e of t.ma)await e(!1)}function dd(t,e){return t.Ea.get(e)||void 0}function aT(t,e){const n=J(t),r=dd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=dd(l,u);c!==void 0&&l.Ra.delete(c);const f=function(g,A){return A%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);B(an,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new mn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Bf(n)?zf(n):hi(n).O_()&&Uf(n,i)}function Ff(t,e){const n=J(t),r=hi(n),s=dd(n,e);B(an,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&lT(n,s),n.Ia.size===0&&(r.O_()?r.L_():ss(n)&&n.ga.set("Unknown"))}function Uf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void B(an,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}hi(t).Z_(e)}function lT(t,e){t.pa.$e(e),hi(t).X_(e)}function zf(t){t.pa=new WR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.ga.ua()}function Bf(t){return ss(t)&&!hi(t).x_()&&t.Ia.size>0}function ss(t){return J(t).da.size===0}function uT(t){t.pa=void 0}async function ZN(t){t.ga.set("Online")}async function eP(t){t.Ia.forEach((e,n)=>{Uf(t,e)})}async function tP(t,e){uT(t),Bf(t)?(t.ga.ha(e),zf(t)):t.ga.set("Unknown")}async function nP(t,e,n){if(t.ga.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){B(an,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof ll?t.pa.Xe(e):e instanceof Ww?t.pa.st(e):t.pa.tt(e),!n.isEqual(Y.min()))try{const r=await sT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const m=i.Ia.get(c);if(!m)return;i.Ia.set(c,m.withResumeToken(He.EMPTY_BYTE_STRING,m.snapshotVersion)),lT(i,c);const g=new mn(m.target,c,f,m.sequenceNumber);Uf(i,g)});const u=function(f,m){const g=new Map;m.targetChanges.forEach((R,N)=>{const D=f.Ra.get(N);D!==void 0&&g.set(D,R)});let A=new ye(ee);return m.targetMismatches.forEach((R,N)=>{const D=f.Ra.get(R);D!==void 0&&(A=A.insert(D,N))}),new Jo(m.snapshotVersion,g,A,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(an,"Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!ci(e))throw e;t.da.add(1),await Zo(t),t.ga.set("Offline"),n||(n=()=>sT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(an,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Pu(t)})}function cT(t,e){return e().catch(n=>Jl(t,n,e))}async function xu(t){const e=J(t),n=gr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Sf;for(;rP(e);)try{const s=await MN(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,sP(e,s)}catch(s){await Jl(e,s)}hT(e)&&dT(e)}function rP(t){return ss(t)&&t.Ta.length<10}function sP(t,e){t.Ta.push(e);const n=gr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function hT(t){return ss(t)&&!gr(t).x_()&&t.Ta.length>0}function dT(t){gr(t).start()}async function iP(t){gr(t).ra()}async function oP(t){const e=gr(t);for(const n of t.Ta)e.ea(n.mutations)}async function aP(t,e,n){const r=t.Ta.shift(),s=Df.from(r,e,n);await cT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xu(t)}async function lP(t,e){e&&gr(t).Y_&&await async function(r,s){if(function(o){return BR(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();gr(r).B_(),await cT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xu(r)}}(t,e),hT(t)&&dT(t)}async function Ay(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B(an,"RemoteStore received new credentials");const r=ss(n);n.da.add(3),await Zo(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Pu(n)}async function uP(t,e){const n=J(t);e?(n.da.delete(2),await Pu(n)):e||(n.da.add(2),await Zo(n),n.ga.set("Unknown"))}function hi(t){return t.ya||(t.ya=function(n,r,s){const i=J(n);return i.sa(),new HN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:ZN.bind(null,t),Yo:eP.bind(null,t),t_:tP.bind(null,t),H_:nP.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Bf(t)?zf(t):t.ga.set("Unknown")):(await t.ya.stop(),uT(t))})),t.ya}function gr(t){return t.wa||(t.wa=function(n,r,s){const i=J(n);return i.sa(),new GN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:iP.bind(null,t),t_:lP.bind(null,t),ta:oP.bind(null,t),na:aP.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await xu(t)):(await t.wa.stop(),t.Ta.length>0&&(B(an,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new $f(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qf(t,e){if(An("AsyncQueue",`${e}: ${t}`),ci(t))return new q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{static emptySet(e){return new Fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ki(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.Sa=new ye(H.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ei{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ei(e,n,Fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class hP{constructor(){this.queries=ky(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=ky(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new q(O.ABORTED,"Firestore shutting down"))}}function ky(){return new rs(t=>xw(t),Au)}async function dP(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new cP,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=qf(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&Wf(n)}async function fP(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pP(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&Wf(n)}function mP(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function Wf(t){t.xa.forEach(e=>{e.next()})}var fd,Ry;(Ry=fd||(fd={})).Ba="default",Ry.Cache="cache";class gP{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.key=e}}class pT{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=Dw(e),this.su=new Fs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Cy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),A=Cu(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;g&&A?g.data.isEqual(A.data)?R!==N&&(r.track({type:3,doc:A}),D=!0):this.uu(g,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.iu(A,u)>0||c&&this.iu(A,c)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),D=!0):g&&!A&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(A?(o=o.add(A),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,m)=>function(A,R){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:D})}};return N(A)-N(R)}(f.type,m.type)||this.iu(f.doc,m.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new ei(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Cy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new pT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new fT(r))}),n}Tu(e){this.tu=e.ks,this.ru=te();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return ei.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Hf="SyncEngine";class _P{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vP{constructor(e){this.key=e,this.Eu=!1}}class EP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new rs(l=>xw(l),Au),this.Vu=new Map,this.du=new Set,this.mu=new ye(H.comparator),this.fu=new Map,this.gu=new Of,this.pu={},this.yu=new Map,this.wu=mr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function wP(t,e,n=!0){const r=ET(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await mT(r,e,n,!0),s}async function TP(t,e){const n=ET(t);await mT(n,e,!0,!1)}async function mT(t,e,n,r){const s=await jN(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await IP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&aT(t.remoteStore,s),l}async function IP(t,e,n,r,s){t.bu=(m,g,A)=>async function(N,D,C,I){let P=D.view._u(C);P.bs&&(P=await Ey(N.localStore,D.query,!1).then(({documents:T})=>D.view._u(T,P)));const V=I&&I.targetChanges.get(D.targetId),M=I&&I.targetMismatches.get(D.targetId)!=null,U=D.view.applyChanges(P,N.isPrimaryClient,V,M);return Py(N,D.targetId,U.hu),U.snapshot}(t,m,g,A);const i=await Ey(t.localStore,e,!0),o=new yP(e,i.ks),l=o._u(i.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Py(t,n,c.hu);const f=new _P(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function SP(t,e,n){const r=J(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!Au(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ff(r.remoteStore,s.targetId),pd(r,s.targetId)}).catch(ui)):(pd(r,s.targetId),await cd(r.localStore,s.targetId,!0))}async function AP(t,e){const n=J(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function CP(t,e,n){const r=bP(t);try{const s=await function(o,l){const u=J(o),c=fe.now(),f=l.reduce((A,R)=>A.add(R.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=Cn(),N=te();return u.xs.getEntries(A,f).next(D=>{R=D,R.forEach((C,I)=>{I.isValidDocument()||(N=N.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(D=>{m=D;const C=[];for(const I of l){const P=MR(I,m.get(I.key).overlayedDocument);P!=null&&C.push(new Sr(I.key,P,Iw(P.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,C,l)}).next(D=>{g=D;const C=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(A,D.batchId,C)})}).then(()=>({batchId:g.batchId,changes:Vw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await ea(r,s.changes),await xu(r.remoteStore)}catch(s){const i=qf(s,"Failed to persist write");n.reject(i)}}async function gT(t,e){const n=J(t);try{const r=await ON(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?oe(o.Eu,14607):s.removedDocuments.size>0&&(oe(o.Eu,42227),o.Eu=!1))}),await ea(n,r,e)}catch(r){await ui(r)}}function Ny(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.va)g.Oa(l)&&(c=!0)}),c&&Wf(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new ye(H.comparator);o=o.insert(i,Ze.newNoDocument(i,Y.min()));const l=te().add(i),u=new Jo(Y.min(),new Map,new ye(ee),o,l);await gT(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Gf(r)}else await cd(r.localStore,e,!1).then(()=>pd(r,e,n)).catch(ui)}async function RP(t,e){const n=J(t),r=e.batch.batchId;try{const s=await VN(n.localStore,e);_T(n,r,null),yT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,s)}catch(s){await ui(s)}}async function NP(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);_T(r,e,n),yT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,s)}catch(s){await ui(s)}}function yT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function _T(t,e,n){const r=J(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||vT(t,r)})}function vT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Ff(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Gf(t))}function Py(t,e,n){for(const r of n)r instanceof fT?(t.gu.addReference(r.key,e),PP(t,r)):r instanceof pT?(B(Hf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||vT(t,r.key)):K(19791,{Cu:r})}function PP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(B(Hf,"New document in limbo: "+n),t.du.add(r),Gf(t))}function Gf(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new H(ue.fromString(e)),r=t.wu.next();t.fu.set(r,new vP(n)),t.mu=t.mu.insert(n,r),aT(t.remoteStore,new mn(nn(Nf(n.path)),r,"TargetPurposeLimboResolution",Tu.ce))}}async function ea(t,e,n){const r=J(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Mf.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(c,g=>L.forEach(g.Ts,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>L.forEach(g.Is,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!ci(m))throw m;B(jf,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const A=f.vs.get(g),R=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function xP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B(Hf,"User change. New user:",e.toKey());const r=await rT(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new q(O.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.Ns)}}function DP(t,e){const n=J(t),r=n.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let s=te();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function ET(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kP.bind(null,e),e.Ru.H_=pP.bind(null,e.eventManager),e.Ru.Du=mP.bind(null,e.eventManager),e}function bP(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,e),e}class Xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return bN(this.persistence,new PN,e.initialUser,this.serializer)}xu(e){return new nT(Lf.Vi,this.serializer)}Mu(e){return new UN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xl.provider={build:()=>new Xl};class VP extends Xl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){oe(this.persistence.referenceDelegate instanceof Yl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mN(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new nT(r=>Yl.Vi(r,n),this.serializer)}}class md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xP.bind(null,this.syncEngine),await uP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hP}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=WN(e.databaseInfo);return YN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new XN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ny(this.syncEngine,n,0),function(){return Iy.v()?new Iy:new zN}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new EP(s,i,o,l,u,c);return f&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);B(an,"RemoteStore shutting down."),i.da.add(5),await Zo(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}md.provider={build:()=>new md};/**
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
 */class OP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class LP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=If.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),B(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MP(t);B(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ay(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ay(e.remoteStore,s)),t._onlineComponents=e}async function MP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(yr,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zr("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new Xl)}}else B(yr,"Using default OfflineComponentProvider"),await Bc(t,new VP(void 0));return t._offlineComponents}async function wT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(yr,"Using user provided OnlineComponentProvider"),await xy(t,t._uninitializedComponentsProvider._online)):(B(yr,"Using default OnlineComponentProvider"),await xy(t,new md))),t._onlineComponents}function jP(t){return wT(t).then(e=>e.syncEngine)}async function Dy(t){const e=await wT(t),n=e.eventManager;return n.onListen=wP.bind(null,e.syncEngine),n.onUnlisten=SP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AP.bind(null,e.syncEngine),n}function FP(t,e,n,r){const s=new OP(r),i=new gP(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>dP(await Dy(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>fP(await Dy(t),i))}}function UP(t,e){const n=new Br;return t.asyncQueue.enqueueAndForget(async()=>CP(await jP(t),e,n)),n.promise}/**
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
 */function TT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zP="ComponentProvider",by=new Map;function BP(t,e,n,r,s){return new oR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,TT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const IT="firestore.googleapis.com",Vy=!0;class Oy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IT,this.ssl=Vy}else this.host=e.host,this.ssl=e.ssl??Vy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fN)throw new q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Du{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fk;switch(r.type){case"firstParty":return new $k(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(B(zP,"Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function $P(t,e,n,r={}){var c;t=ar(t,Du);const s=$o(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&yE(`https://${l}`),i.host!==IT&&i.host!==l&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Tn(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Je.MOCK_USER;else{f=YS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Je(g)}t._authCredentials=new Uk(new hw(f,m))}}/**
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
 */class di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ko(n,xe._jsonSchema))return new xe(e,r||null,new H(ue.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Pe("string",xe._jsonSchemaVersion),referencePath:Pe("string")};class lr extends di{constructor(e,n,r){super(e,n,Nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new H(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Nn(t,e,...n){if(t=Le(t),dw("collection","path",e),t instanceof Du){const r=ue.fromString(e,...n);return Gg(r),new lr(t,null,r)}{if(!(t instanceof xe||t instanceof lr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Gg(r),new lr(t.firestore,null,r)}}function Ar(t,e,...n){if(t=Le(t),arguments.length===1&&(e=If.newId()),dw("doc","path",e),t instanceof Du){const r=ue.fromString(e,...n);return Hg(r),new xe(t,null,new H(r))}{if(!(t instanceof xe||t instanceof lr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Hg(r),new xe(t.firestore,t instanceof lr?t.converter:null,new H(r))}}/**
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
 */const Ly="AsyncQueue";class My{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new iT(this,"async_queue_retry"),this.lc=()=>{const r=zc();r&&B(Ly,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Br;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ci(e))throw e;B(Ly,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,An("INTERNAL UNHANDLED ERROR: ",jy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=$f.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&K(47125,{Rc:jy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function jy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ti extends Du{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new My,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}function qP(t,e){const n=typeof t=="object"?t:wE(),r=typeof t=="string"?t:$l,s=ff(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KS("firestore");i&&$P(s,...i)}return s}function ST(t){if(t._terminated)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WP(t),t._firestoreClient}function WP(t){var r,s,i,o;const e=t._freezeSettings(),n=BP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new LP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(He.fromBase64String(e))}catch(n){throw new q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ko(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Pe("string",Rt._jsonSchemaVersion),bytes:Pe("string")};/**
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
 */class Kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Ko(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Pe("string",sn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
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
 */class Bt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ko(e,Bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Bt(e.vectorValues);throw new q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:Pe("string",Bt._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^__.*__$/;class GP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class AT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new bu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Zl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(CT(this.dataSource)&&HP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}V(e,n,r,s=!1){return new bu({dataSource:e,methodName:n,targetDoc:r,path:$e.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QP(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Xf("Data must be an object, but it was:",o,r);const l=RT(r,o);let u,c;if(i.merge)u=new vt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ni(e,m,n);if(!o.contains(g))throw new q(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);xT(f,g)||f.push(g)}u=new vt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new GP(new ht(l),u,c)}class Vu extends ta{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}function kT(t,e,n){return new bu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Yf extends ta{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.vc.map(i=>is(i,n)),s=new Xs(r);return new zw(e.path,s)}isEqual(e){return e instanceof Yf&&Tn(this.vc,e.vc)}}class Jf extends ta{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.vc.map(i=>is(i,n)),s=new Zs(r);return new zw(e.path,s)}isEqual(e){return e instanceof Jf&&Tn(this.vc,e.vc)}}function YP(t,e,n,r){const s=t.V(1,e,n);Xf("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();Ir(r,(u,c)=>{const f=PT(e,u,n);c=Le(c);const m=s.Sc(f);if(c instanceof Vu)i.push(f);else{const g=is(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new vt(i);return new AT(o,l,s.fieldTransforms)}function JP(t,e,n,r,s,i){const o=t.V(1,e,n),l=[ni(e,r,n)],u=[s];if(i.length%2!=0)throw new q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ni(e,i[g])),u.push(i[g+1]);const c=[],f=ht.empty();for(let g=l.length-1;g>=0;--g)if(!xT(c,l[g])){const A=l[g];let R=u[g];R=Le(R);const N=o.Sc(A);if(R instanceof Vu)c.push(A);else{const D=is(R,N);D!=null&&(c.push(A),f.set(A,D))}}const m=new vt(c);return new AT(f,m,o.fieldTransforms)}function XP(t,e,n,r=!1){return is(n,t.V(r?4:3,e))}function is(t,e){if(NT(t=Le(t)))return Xf("Unsupported field value:",e,t),RT(t,e);if(t instanceof ta)return function(r,s){if(!CT(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=is(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:Ql(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ql(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Gw(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return function(o,l){const u=o instanceof Bt?o.toArray():o;return{mapValue:{fields:{[ww]:{stringValue:Tw},[ql]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Pf(l.serializer,f)})}}}}}}(r,s);if(eT(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${wu(r)}`)}(t,e)}function RT(t,e){const n={};return mw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,(r,s)=>{const i=is(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function NT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof sn||t instanceof Rt||t instanceof xe||t instanceof ta||t instanceof Bt||eT(t))}function Xf(t,e,n){if(!NT(n)||!fw(n)){const r=wu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function ni(t,e,n){if((e=Le(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return PT(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZP=new RegExp("[~\\*/\\[\\]]");function PT(t,e,n){if(e.search(ZP)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kf(...e.split("."))._internalPath}catch{throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(O.INVALID_ARGUMENT,l+t+u)}function xT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ex{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ql].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ae(o.doubleValue));return new Bt(n)}convertGeoPoint(e){return new sn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Su(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=dr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(Zw(r),9688,{name:e});const s=new Vo(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class DT extends ex{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function tx(...t){return new Yf("arrayUnion",t)}function nx(...t){return new Jf("arrayRemove",t)}const Fy="@firebase/firestore",Uy="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class bT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ni("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rx extends bT{data(){return super.data()}}/**
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
 */function sx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zf{}class ix extends Zf{}function na(t,e,...n){let r=[];e instanceof Zf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof ep).length,l=i.filter(u=>u instanceof Ou).length;if(o>1||o>0&&l>0)throw new q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ou extends ix{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ou(e,n,r)}_apply(e){const n=this._parse(e);return VT(e._query,n),new di(e.firestore,e.converter,sd(e._query,n))}_parse(e){const n=Qf(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$y(m,f);const R=[];for(const N of m)R.push(By(u,i,N));g={arrayValue:{values:R}}}else g=By(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$y(m,f),g=XP(l,o,m,f==="in"||f==="not-in");return Ne.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ra(t,e,n){const r=e,s=ni("where",t);return Ou._create(s,r,n)}class ep extends Zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ep(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)VT(o,u),o=sd(o,u)}(e._query,n),new di(e.firestore,e.converter,sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function By(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pw(e)&&n.indexOf("/")!==-1)throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ty(t,new H(r))}if(n instanceof xe)return ty(t,n._key);throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wu(n)}.`)}function $y(t,e){if(!Array.isArray(t)||t.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ox(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $r extends bT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ni("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$r._jsonSchemaVersion="firestore/documentSnapshot/1.0",$r._jsonSchema={type:Pe("string",$r._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class ul extends $r{data(e={}){return super.data(e)}}class Us{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ul(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ul(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ul(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ax(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=If.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ax(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:Pe("string",Us._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};function tp(t,e,n,...r){t=ar(t,xe);const s=ar(t.firestore,ti),i=Qf(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof Kf?JP(i,"updateDoc",t._key,e,n,r):YP(i,"updateDoc",t._key,e),np(s,[o.toMutation(t._key,zt.exists(!0))])}function Lu(t){return np(ar(t.firestore,ti),[new xf(t._key,zt.none())])}function Mu(t,e){const n=ar(t.firestore,ti),r=Ar(t),s=ox(t.converter,e),i=Qf(t.firestore);return np(n,[QP(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function sa(t,...e){var c,f,m;t=Le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||zy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(zy(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let i,o,l;if(t instanceof xe)o=ar(t.firestore,ti),l=Nf(t._key.path),i={next:g=>{e[r]&&e[r](lx(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=ar(t,di);o=ar(g.firestore,ti),l=g._query;const A=new DT(o);i={next:R=>{e[r]&&e[r](new Us(o,A,g,R))},error:e[r+1],complete:e[r+2]},sx(t._query)}const u=ST(o);return FP(u,l,s,i)}function np(t,e){const n=ST(t);return UP(n,e)}function lx(t,e,n){const r=n.docs.get(e._key),s=new DT(t);return new $r(t,s,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){jk(oi),Ks(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ti(new zk(r.getProvider("auth-internal")),new qk(o,r.getProvider("app-check-internal")),aR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ir(Fy,Uy,e),ir(Fy,Uy,"esm2020")})();const ux={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},OT=EE(ux),nt=qP(OT),eu=Vk(OT),LT=j.createContext(null);function cx({children:t}){const[e,n]=j.useState(null),[r,s]=j.useState(!0);j.useEffect(()=>TC(eu,l=>{n(l),s(!1)}),[]);const i=async()=>{await IC(eu)};return p.jsx(LT.Provider,{value:{user:e,loading:r,logout:i},children:t})}function fi(){const t=j.useContext(LT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const hx=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
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
`,$c="reply-ai-history";function dx(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const s=r.indexOf("=");if(s===-1)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim(),[l]=i.split(".");e[l]&&e[l].push(o)}return e}const qy=dx(hx);function fx(){const[t,e]=j.useState(""),[n,r]=j.useState("funny"),[s,i]=j.useState(""),[o,l]=j.useState(!1),[u,c]=j.useState(""),[f,m]=j.useState(()=>{const D=localStorage.getItem($c);return D?JSON.parse(D):[]}),g=j.useCallback(async D=>{if(!t.trim()){c("Pega un mensaje primero");return}l(!0),c("");const C=typeof D=="string"?D:n,I=qy[C]||qy.elegant,P=I[Math.floor(Math.random()*I.length)];await new Promise(U=>setTimeout(U,300)),i(P);const M=[{message:t,reply:P,mode:C,date:new Date().toISOString()},...f].slice(0,50);m(M),localStorage.setItem($c,JSON.stringify(M)),l(!1)},[t,n,f]),A=j.useCallback(()=>{s&&(e(s),g("funny"))},[s,g]),R=j.useCallback(D=>{const C=`https://wa.me/?text=${encodeURIComponent(D)}`;window.open(C,"_blank")},[]),N=j.useCallback(()=>{m([]),localStorage.removeItem($c)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:s,setResponse:i,loading:o,error:u,history:f,generate:g,makeFunnier:A,sendToWhatsApp:R,clearHistory:N}}const rp="birthdays";function px(t,e,n){const r=na(Nn(nt,rp),ra("userId","==",t));return sa(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function mx({name:t,date:e,gender:n,phone:r},s){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:s,createdAt:new Date().toISOString()};return{id:(await Mu(Nn(nt,rp),o)).id,...o}}async function gx(t){await Lu(Ar(nt,rp,t))}function yx(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function _x(){const{user:t}=fi(),[e,n]=j.useState([]),[r,s]=j.useState([]),[i,o]=j.useState("");j.useEffect(()=>t?(o(""),px(t.uid,A=>{n(A)},A=>{o("Error al cargar amigos: "+qc(A))})):void 0,[t]),j.useEffect(()=>{const g=yx(),A=e.filter(R=>R.date===g);s(A)},[e]);const l=100,u=j.useCallback(async(g,A,R,N)=>{if(t){if(o(""),e.length>=l){o(`Límite alcanzado: máximo ${l} cumpleaños. Elimina algunos para añadir más.`);return}try{await mx({name:g,date:A,gender:R,phone:N},t.uid)}catch(D){o("Error al añadir amigo: "+qc(D))}}},[t,e.length]),c=j.useCallback(async g=>{o("");try{await gx(g)}catch(A){o("Error al eliminar amigo: "+qc(A))}},[]),f=j.useCallback(g=>{let A;g.gender==="male"?A=`¡Feliz cumpleaños, amigo ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:g.gender==="female"?A=`¡Feliz cumpleaños, amiga ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:A=`¡Feliz cumpleaños, ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const R=g.phone?g.phone.replace(/[^0-9]/g,""):"",N=R?`https://wa.me/${R}?text=${encodeURIComponent(A)}`:`https://wa.me/?text=${encodeURIComponent(A)}`;window.open(N,"_blank")},[]),m=j.useCallback(g=>{const A=g.gender==="male"?"lo":g.gender==="female"?"la":"le",R=`📅 Recordatorio: Hoy es el cumpleaños de ${g.name}! No olvides felicit${A}. 🎂🎉`,N=`https://wa.me/?text=${encodeURIComponent(R)}`;window.open(N,"_blank")},[]);return{friends:e,todayBirthdays:r,error:i,addFriend:u,removeFriend:c,sendGreeting:f,sendReminder:m}}function qc(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const sp="contacts";function vx(t,e,n){const r=na(Nn(nt,sp),ra("userId","==",t));return sa(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function Ex({name:t,phone:e,email:n,city:r,webpage:s,occupation:i,rating:o},l){const u={name:t,phone:e||"",email:n||"",city:r||"",webpage:s||"",occupation:i||"",rating:o||1,userId:l,createdAt:new Date().toISOString()};return{id:(await Mu(Nn(nt,sp),u)).id,...u}}async function wx(t){await Lu(Ar(nt,sp,t))}function Tx(){const{user:t}=fi(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),vx(t.uid,c=>{n(c)},c=>{s("Error al cargar contactos: "+Wc(c))})):void 0,[t]);const i=100,o=j.useCallback(async({name:u,phone:c,email:f,city:m,webpage:g,occupation:A,rating:R})=>{if(t){if(s(""),e.length>=i){s(`Límite alcanzado: máximo ${i} contactos. Elimina algunos para añadir más.`);return}try{await Ex({name:u,phone:c,email:f,city:m,webpage:g,occupation:A,rating:R},t.uid)}catch(N){s("Error al añadir contacto: "+Wc(N))}}},[t,e.length]),l=j.useCallback(async u=>{s("");try{await wx(u)}catch(c){s("Error al eliminar contacto: "+Wc(c))}},[]);return{contacts:e,error:r,addContact:o,removeContact:l}}function Wc(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const ip="favorites";function Ix(t,e,n){const r=na(Nn(nt,ip),ra("userId","==",t));return sa(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function Sx({name:t,url:e,description:n},r){const s={name:t,url:e||"",description:n||"",userId:r,createdAt:new Date().toISOString()};return{id:(await Mu(Nn(nt,ip),s)).id,...s}}async function Ax(t){await Lu(Ar(nt,ip,t))}const Wy=100;function Cx(){const{user:t}=fi(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),Ix(t.uid,n,u=>{s("Error al cargar favoritos: "+Hc(u))})):void 0,[t]);const i=j.useCallback(async({name:l,url:u,description:c})=>{if(t){if(s(""),e.length>=Wy){s(`Límite alcanzado: máximo ${Wy} favoritos.`);return}try{await Sx({name:l,url:u,description:c},t.uid)}catch(f){s("Error al añadir favorito: "+Hc(f))}}},[t,e.length]),o=j.useCallback(async l=>{s("");try{await Ax(l)}catch(u){s("Error al eliminar favorito: "+Hc(u))}},[]);return{favorites:e,error:r,addFavorite:i,removeFavorite:o}}function Hc(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}const os="reminders";function kx(t,e,n){const r=na(Nn(nt,os),ra("userId","==",t));return sa(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}function Rx(t,e,n){const r=na(Nn(nt,os),ra("sharedWith","array-contains",t));return sa(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data(),isShared:!0}));e(i)},s=>{console.error("Firestore shared subscribe error:",s),n&&n(s)})}async function Nx(t,e,n){const r={...t,userId:e,ownerEmail:n,createdAt:new Date().toISOString(),lastFiredAt:null,sharedWith:[]};return{id:(await Mu(Nn(nt,os),r)).id,...r}}async function Hy(t,e){await tp(Ar(nt,os,t),e)}async function Px(t){await Lu(Ar(nt,os,t))}async function xx(t,e){await tp(Ar(nt,os,t),{sharedWith:tx(e)})}async function Dx(t,e){await tp(Ar(nt,os,t),{sharedWith:nx(e)})}const Gy=5;function hs(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function op(){const t=new Date;return{h:t.getHours(),m:t.getMinutes(),dow:t.getDay(),day:t.getDate(),month:t.getMonth()+1,dateStr:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}}function bx(t){if(!t.active)return!1;const e=op();return t.hour!==e.h||t.minute!==e.m?!1:t.frequency==="daily"?!0:t.frequency==="weekly"?t.weekday===e.dow:t.frequency==="monthly"?t.day===e.day:t.frequency==="once"?t.day===e.day&&t.month===e.month:!1}function Vx(t){const e=op(),n=new Date;let r=new Date(n.getFullYear(),n.getMonth(),n.getDate(),t.hour||0,t.minute||0);if(!t.active)return null;if(t.frequency==="daily")r<=n&&r.setDate(r.getDate()+1);else if(t.frequency==="weekly"){const s=(t.weekday-e.dow+7)%7;r.setDate(r.getDate()+(s===0&&r<=n?7:s))}else if(t.frequency==="monthly")r.setDate(t.day),r<=n&&r.setMonth(r.getMonth()+1);else if(t.frequency==="once"&&(r.setMonth(t.month-1),r.setDate(t.day),r<=n))return null;return r}function Ox(t){const e=String(t.hour||0).padStart(2,"0"),n=String(t.minute||0).padStart(2,"0");let r=`${e}:${n}`;return t.frequency==="daily"?r+=" (a diario)":t.frequency==="weekly"?r+=` (cada ${["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"][t.weekday]})`:t.frequency==="monthly"?r+=` (día ${t.day})`:t.frequency==="once"&&(r+=` (${t.day}/${t.month})`),r}function Lx(t){if(!t.lastFiredAt)return!1;const e=new Date(t.lastFiredAt),n=new Date;return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}function Mx(){const{user:t}=fi(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(null),l=j.useRef(null),u=j.useRef(!1);j.useEffect(()=>t?(s(""),(()=>{let D={},C=null;const I=()=>{if(C){s("Error al cargar recordatorios: "+hs(C));return}const M=D._owned||[],U=D._shared||[],T=new Set,v=[];for(const E of[...M,...U])T.has(E.id)||(T.add(E.id),v.push(E));n(v)},P=kx(t.uid,M=>{D._owned=M,I()},M=>{C=M,I()}),V=t.email?Rx(t.email,M=>{D._shared=M,I()},M=>{C=M,I()}):null;return()=>{P(),V&&V()}})()):void 0,[t]),j.useEffect(()=>{if(!(!t||e.length===0))return!u.current&&"Notification"in window&&Notification.permission==="default"&&(Notification.requestPermission(),u.current=!0),l.current=setInterval(async()=>{for(const R of e){if(R.isShared||!bx(R))continue;const N=op();if(R.lastFiredAt){const D=new Date(R.lastFiredAt);if(D.getDate()===N.day&&D.getMonth()+1===N.month&&D.getFullYear()===new Date().getFullYear())continue}try{await Hy(R.id,{lastFiredAt:new Date().toISOString()}),o(R.id),setTimeout(()=>o(null),5e3),"Notification"in window&&Notification.permission==="granted"&&new Notification("🔔 Toolbox AI",{body:R.name+(R.note?" — "+R.note:""),icon:"./icons/icon-192.svg",tag:R.id})}catch{}}},3e4),()=>clearInterval(l.current)},[t,e]);const c=j.useCallback(async R=>{if(!t)return;if(s(""),e.filter(D=>!D.isShared).length>=Gy){s(`Límite alcanzado: máximo ${Gy} recordatorios.`);return}try{await Nx(R,t.uid,t.email)}catch(D){s("Error al añadir recordatorio: "+hs(D))}},[t,e]),f=j.useCallback(async(R,N)=>{s("");try{await Hy(R,N)}catch(D){s("Error al actualizar recordatorio: "+hs(D))}},[]),m=j.useCallback(async R=>{s("");try{await Px(R)}catch(N){s("Error al eliminar recordatorio: "+hs(N))}},[]),g=j.useCallback(async(R,N)=>{if(s(""),!N||!N.includes("@")){s("Introduce un email válido.");return}try{await xx(R,N)}catch(D){s("Error al compartir recordatorio: "+hs(D))}},[]),A=j.useCallback(async(R,N)=>{s("");try{await Dx(R,N)}catch(D){s("Error al eliminar uso compartido: "+hs(D))}},[]);return{reminders:e,error:r,justFired:i,userEmail:t==null?void 0:t.email,addReminder:c,updateReminder:f,removeReminder:m,shareReminder:g,unshareReminder:A,firedToday:Lx,formatFireTime:Ox,getNextFire:Vx}}function jx(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[s,i]=j.useState(!1),[o,l]=j.useState(""),[u,c]=j.useState(!1),f=async m=>{m.preventDefault(),l(""),c(!0);try{s?await _C(eu,t,n):await vC(eu,t,n)}catch(g){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[g.code]||g.code)}finally{c(!1)}};return p.jsx("div",{className:"login-screen",children:p.jsxs("div",{className:"login-card",children:[p.jsx("div",{className:"login-logo",children:"💬"}),p.jsx("h1",{className:"login-title",children:"Toolbox AI"}),p.jsx("p",{className:"login-subtitle",children:s?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),p.jsxs("form",{className:"login-form",onSubmit:f,children:[p.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value),required:!0}),p.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:m=>r(m.target.value),required:!0,minLength:6}),o&&p.jsx("p",{className:"error",children:o}),p.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?p.jsx("span",{className:"loading-spinner"}):s?"Crear cuenta":"Iniciar sesión"})]}),p.jsxs("p",{className:"login-toggle",children:[s?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",p.jsx("button",{className:"login-toggle-btn",onClick:()=>{i(!s),l("")},children:s?"Inicia sesión":"Regístrate"})]})]})})}function Fx({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return p.jsxs("div",{className:"input-box",children:[p.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),p.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),p.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),p.jsx("path",{d:"M12 11h4"}),p.jsx("path",{d:"M12 16h4"}),p.jsx("path",{d:"M8 11h.01"}),p.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const Ux=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function zx({selected:t,onSelect:e}){return p.jsx("div",{className:"modes",children:Ux.map(n=>p.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[p.jsx("span",{className:"mode-emoji",children:n.icon}),p.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function Bx({onClick:t,loading:e}){return p.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?p.jsx("span",{className:"loading-spinner"}):p.jsxs(p.Fragment,{children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M12 3v18"}),p.jsx("path",{d:"M5 10l7-7 7 7"}),p.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const Ky={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function $x({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:s}){if(!t)return null;const i=Ky[e]||Ky.funny;return p.jsxs("div",{className:"response-card fade-in",children:[p.jsxs("div",{className:"response-header",children:[p.jsx("span",{className:"response-mode-icon",children:i.emoji}),p.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",i.label]})]}),p.jsx("p",{className:"response-text",children:t}),p.jsxs("div",{className:"response-actions",children:[p.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),p.jsxs("button",{className:"action-btn",onClick:r,children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("polyline",{points:"23 4 23 10 17 10"}),p.jsx("polyline",{points:"1 20 1 14 7 14"}),p.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),p.jsxs("button",{className:"action-btn",onClick:s,children:[p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"12",cy:"12",r:"10"}),p.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),p.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),p.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const MT=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function qx(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${MT[parseInt(n,10)-1]}`}function Wx({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:s,onSendGreeting:i,onSendReminder:o}){const[l,u]=j.useState(""),[c,f]=j.useState(""),[m,g]=j.useState(""),[A,R]=j.useState(""),[N,D]=j.useState("male"),[C,I]=j.useState(!1),[P,V]=j.useState(""),M=E=>{if(E.preventDefault(),!l.trim()||!m||!A)return;const y=`${String(parseInt(m,10)).padStart(2,"0")}-${String(parseInt(A,10)).padStart(2,"0")}`;r(l.trim(),y,N,c.trim()),u(""),f(""),g(""),R(""),D("male"),I(!1)},U=P.toLowerCase(),v=[...t.filter(E=>E.name.toLowerCase().includes(U))].sort((E,y)=>{const[S,k]=E.date.split("-").map(Number),[w,we]=y.date.split("-").map(Number);return k-we||S-w});return p.jsxs("div",{className:"birthdays",children:[n&&p.jsx("p",{className:"error",children:n}),e.length>0&&p.jsxs("div",{className:"birthday-alert fade-in",children:[p.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),p.jsxs("div",{className:"birthday-alert-body",children:[p.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(E=>E.name).join(" y "),"!"]}),p.jsx("div",{className:"birthday-alert-actions",children:e.map(E=>p.jsxs("div",{className:"birthday-alert-row",children:[p.jsxs("button",{className:"action-btn primary",onClick:()=>i(E),children:["🎉 Felicitar a ",E.name]}),p.jsx("button",{className:"action-btn",onClick:()=>o(E),children:"🔔 Recordarme"}),E.phone&&p.jsx("a",{className:"action-btn",href:`tel:${E.phone}`,children:"📞 Llamar"})]},E.id))})]})]}),p.jsxs("div",{className:"birthdays-header",children:[p.jsxs("h3",{children:["Tus amigos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-friend-btn",onClick:()=>I(!C),children:C?"✕ Cerrar":"+ Añadir amigo"})]}),C&&p.jsxs("form",{className:"birthday-form fade-in",onSubmit:M,children:[p.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:E=>u(E.target.value),required:!0}),p.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:c,onChange:E=>f(E.target.value)}),p.jsxs("div",{className:"bf-row",children:[p.jsxs("select",{className:"bf-select",value:m,onChange:E=>g(E.target.value),required:!0,children:[p.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(E,y)=>y+1).map(E=>p.jsx("option",{value:E,children:E},E))]}),p.jsxs("select",{className:"bf-select",value:A,onChange:E=>R(E.target.value),required:!0,children:[p.jsx("option",{value:"",children:"Mes"}),MT.map((E,y)=>p.jsx("option",{value:y+1,children:E},y))]})]}),p.jsxs("div",{className:"bf-gender",children:[p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"male",checked:N==="male",onChange:()=>D("male")}),"Masculino"]}),p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"female",checked:N==="female",onChange:()=>D("female")}),"Femenino"]}),p.jsxs("label",{children:[p.jsx("input",{type:"radio",name:"gender",value:"other",checked:N==="other",onChange:()=>D("other")}),"Otro / No sé"]})]}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&p.jsxs("div",{className:"search-box",children:[p.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("path",{d:"M21 21l-4.35-4.35"})]}),p.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar amigo...",value:P,onChange:E=>V(E.target.value)}),P&&p.jsx("button",{className:"search-clear",onClick:()=>V(""),children:"✕"})]}),v.length===0&&p.jsx("p",{className:"birthdays-empty",children:P?"No se encontraron amigos.":"No has añadido ningún cumpleaños todavía."}),p.jsx("div",{className:"birthdays-list",children:v.map(E=>p.jsxs("div",{className:"birthday-item fade-in",children:[p.jsxs("div",{className:"birthday-item-info",children:[p.jsxs("span",{className:"birthday-item-name",children:[E.name,E.gender==="male"&&" 👨",E.gender==="female"&&" 👩",E.gender==="other"&&" 🧑"]}),p.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",qx(E.date)]}),E.phone&&p.jsxs("span",{className:"birthday-item-phone",children:["📞 ",E.phone]})]}),p.jsxs("div",{className:"birthday-item-actions",children:[E.phone&&p.jsx("a",{className:"contact-action-btn",href:`tel:${E.phone}`,title:"Llamar",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),p.jsx("button",{className:"birthday-item-delete",onClick:()=>s(E.id),title:"Eliminar",children:"✕"})]})]},E.id))})]})}const Hx=["fontanero","electricista","pintor","informatico","medico","ingeniero","arquitecto","maestro","herrero","asesor","jardinero","comercial","agricultor","repuestos"];function Gc(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function Gx({contacts:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,m]=j.useState(""),[g,A]=j.useState(""),[R,N]=j.useState(""),[D,C]=j.useState(3),[I,P]=j.useState(!1),[V,M]=j.useState(""),U=k=>{k.preventDefault(),s.trim()&&(n({name:s.trim(),phone:o.trim(),email:u.trim(),city:f.trim(),webpage:g.trim(),occupation:R,rating:D}),i(""),l(""),c(""),m(""),A(""),N(""),C(3),P(!1))};async function T(k){const w=[`*${k.name}*`];k.phone&&w.push(`📞 ${k.phone}`),k.email&&w.push(`✉️ ${k.email}`),k.city&&w.push(`📍 ${k.city}`),k.webpage&&w.push(`🌐 ${k.webpage}`),k.occupation&&w.push(`💼 ${Gc(k.occupation)}`),w.push(`⭐ ${"★".repeat(k.rating)}${"☆".repeat(5-k.rating)}`);const we=w.join(`
`);if(navigator.share)try{await navigator.share({title:k.name,text:we});return}catch{}try{await navigator.clipboard.writeText(we)}catch{}}const v=V.toLowerCase(),E=t.filter(k=>k.name.toLowerCase().includes(v)),y={};for(const k of E){const w=k.occupation||"sin ocupacion";y[w]||(y[w]=[]),y[w].push(k)}const S=Object.keys(y).sort((k,w)=>k==="sin ocupacion"?1:w==="sin ocupacion"?-1:k.localeCompare(w));return p.jsxs("div",{className:"contacts",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"contacts-header",children:[p.jsxs("h3",{children:["Contactos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-contact-btn",onClick:()=>P(!I),children:I?"✕ Cerrar":"+ Añadir contacto"})]}),I&&p.jsxs("form",{className:"contact-form fade-in",onSubmit:U,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:k=>i(k.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"tel",placeholder:"Teléfono",value:o,onChange:k=>l(k.target.value)}),p.jsx("input",{className:"cf-input",type:"email",placeholder:"Email",value:u,onChange:k=>c(k.target.value)}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Ciudad",value:f,onChange:k=>m(k.target.value)}),p.jsx("input",{className:"cf-input",type:"url",placeholder:"Web",value:g,onChange:k=>A(k.target.value)}),p.jsxs("select",{className:"cf-select",value:R,onChange:k=>N(k.target.value),children:[p.jsx("option",{value:"",children:"Selecciona ocupación"}),Hx.map(k=>p.jsx("option",{value:k,children:Gc(k)},k))]}),p.jsxs("div",{className:"cf-rating",children:[p.jsx("span",{children:"Valoración:"}),p.jsx("div",{className:"stars",children:[1,2,3,4,5].map(k=>p.jsx("button",{type:"button",className:`star ${k<=D?"active":""}`,onClick:()=>C(k),children:k<=D?"★":"☆"},k))})]}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&p.jsxs("div",{className:"search-box",children:[p.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"11",cy:"11",r:"8"}),p.jsx("path",{d:"M21 21l-4.35-4.35"})]}),p.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar contacto...",value:V,onChange:k=>M(k.target.value)}),V&&p.jsx("button",{className:"search-clear",onClick:()=>M(""),children:"✕"})]}),E.length===0&&!I&&p.jsx("p",{className:"contacts-empty",children:V?"No se encontraron contactos.":"No has añadido ningún contacto todavía."}),p.jsx("div",{className:"contacts-list",children:S.map(k=>p.jsxs("div",{className:"contact-group",children:[p.jsx("h4",{className:"contact-group-title",children:k==="sin ocupacion"?"Otros":Gc(k)}),y[k].map(w=>p.jsxs("div",{className:"contact-item fade-in",children:[p.jsxs("div",{className:"contact-item-info",children:[p.jsx("span",{className:"contact-item-name",children:w.name}),p.jsxs("div",{className:"contact-item-details",children:[w.phone&&p.jsxs("span",{children:["📞 ",w.phone]}),w.email&&p.jsxs("span",{children:["✉️ ",w.email]}),w.city&&p.jsxs("span",{children:["📍 ",w.city]}),w.webpage&&p.jsxs("span",{children:["🌐 ",w.webpage]}),p.jsxs("span",{className:"stars-small",children:["★".repeat(w.rating),"☆".repeat(5-w.rating)]})]}),(w.phone||w.email)&&p.jsxs("div",{className:"contact-actions",children:[w.phone&&p.jsx("a",{className:"contact-action-btn",href:`tel:${w.phone}`,title:"Llamar",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),w.email&&p.jsx("a",{className:"contact-action-btn",href:`mailto:${w.email}`,title:"Email",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),p.jsx("button",{className:"contact-action-btn",onClick:()=>T(w),title:"Compartir",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("circle",{cx:"18",cy:"5",r:"3"}),p.jsx("circle",{cx:"6",cy:"12",r:"3"}),p.jsx("circle",{cx:"18",cy:"19",r:"3"}),p.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),p.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})]})]}),p.jsx("button",{className:"contact-item-delete",onClick:()=>r(w.id),title:"Eliminar",children:"✕"})]},w.id))]},k))})]})}function Kx({favorites:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,m]=j.useState(!1),g=N=>{N.preventDefault(),s.trim()&&(n({name:s.trim(),url:o.trim(),description:u.trim()}),i(""),l(""),c(""),m(!1))},A=[...t].sort((N,D)=>N.name.localeCompare(D.name));async function R(N){const D=`${N.name}${N.url?`
`+N.url:""}${N.description?`
`+N.description:""}`;if(navigator.share)try{await navigator.share({title:N.name,text:D});return}catch{}try{await navigator.clipboard.writeText(D)}catch{}}return p.jsxs("div",{className:"favorites",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"favorites-header",children:[p.jsxs("h3",{children:["Favoritos ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-fav-btn",onClick:()=>m(!f),children:f?"✕ Cerrar":"+ Añadir favorito"})]}),f&&p.jsxs("form",{className:"fav-form fade-in",onSubmit:g,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:N=>i(N.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"url",placeholder:"URL (https://...)",value:o,onChange:N=>l(N.target.value)}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Descripción",value:u,onChange:N=>c(N.target.value)}),p.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),A.length===0&&!f&&p.jsx("p",{className:"favorites-empty",children:"No has añadido ningún favorito todavía."}),p.jsx("div",{className:"favorites-list",children:A.map(N=>p.jsxs("div",{className:"fav-item fade-in",children:[p.jsxs("div",{className:"fav-item-info",children:[p.jsx("a",{className:"fav-item-name",href:N.url,target:"_blank",rel:"noopener noreferrer",children:N.name}),N.description&&p.jsx("span",{className:"fav-item-desc",children:N.description}),N.url&&p.jsx("span",{className:"fav-item-url",children:N.url})]}),p.jsxs("div",{className:"fav-item-actions",children:[p.jsx("button",{className:"fav-action-btn",onClick:()=>R(N),title:"Compartir",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:[p.jsx("circle",{cx:"18",cy:"5",r:"3"}),p.jsx("circle",{cx:"6",cy:"12",r:"3"}),p.jsx("circle",{cx:"18",cy:"19",r:"3"}),p.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),p.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),p.jsx("button",{className:"fav-item-delete",onClick:()=>r(N.id),title:"Eliminar",children:"✕"})]})]},N.id))})]})}const Qx=[{key:"length",label:"Longitud"},{key:"temp",label:"Temperatura"},{key:"weight",label:"Peso"},{key:"volume",label:"Volumen"},{key:"currency",label:"Moneda"}],za={length:[{key:"m",label:"Metro",toBase:1},{key:"km",label:"Kilómetro",toBase:1e3},{key:"cm",label:"Centímetro",toBase:.01},{key:"mm",label:"Milímetro",toBase:.001},{key:"mi",label:"Milla",toBase:1609.344},{key:"yd",label:"Yarda",toBase:.9144},{key:"ft",label:"Pie",toBase:.3048},{key:"in",label:"Pulgada",toBase:.0254}],weight:[{key:"kg",label:"Kilogramo",toBase:1},{key:"g",label:"Gramo",toBase:.001},{key:"mg",label:"Miligramo",toBase:1e-6},{key:"lb",label:"Libra",toBase:.453592},{key:"oz",label:"Onza",toBase:.0283495},{key:"t",label:"Tonelada",toBase:1e3}],volume:[{key:"l",label:"Litro",toBase:1},{key:"ml",label:"Mililitro",toBase:.001},{key:"gal",label:"Galón",toBase:3.78541},{key:"floz",label:"Onza líquida",toBase:.0295735},{key:"m3",label:"Metro cúbico",toBase:1e3}],currency:[{key:"eur",label:"Euro (EUR)",toBase:1},{key:"usd",label:"Dólar (USD)",toBase:.92},{key:"gbp",label:"Libra (GBP)",toBase:1.17},{key:"jpy",label:"Yen (JPY)",toBase:.0061},{key:"mxn",label:"Peso mexicano (MXN)",toBase:.045},{key:"ars",label:"Peso argentino (ARS)",toBase:95e-5}]};function Yx(t,e,n){let r;return e==="c"?r=t:e==="f"?r=(t-32)*5/9:r=t-273.15,n==="c"?r:n==="f"?r*9/5+32:r+273.15}const Qy=[{key:"c",label:"Celsius (°C)"},{key:"f",label:"Fahrenheit (°F)"},{key:"k",label:"Kelvin (K)"}];function Yy(t){if(!isFinite(t))return"—";const e=t.toPrecision(10),n=parseFloat(e);return n%1===0?n.toString():n.toFixed(4).replace(/\.?0+$/,"")}function Jx(){var g,A;const[t,e]=j.useState("length"),[n,r]=j.useState(""),[s,i]=j.useState(""),[o,l]=j.useState(""),u=t==="temp",c=u?Qy:za[t],f=R=>{e(R),r(""),i(""),l("")},m=(()=>{const R=parseFloat(o);if(isNaN(R)||!n||!s)return null;if(u)return Yy(Yx(R,n,s));const N=za[t].find(C=>C.key===n),D=za[t].find(C=>C.key===s);return!N||!D?null:Yy(R*N.toBase/D.toBase)})();return p.jsxs("div",{className:"converter",children:[p.jsx("div",{className:"conv-cats",children:Qx.map(R=>p.jsx("button",{className:`conv-cat ${t===R.key?"active":""}`,onClick:()=>f(R.key),children:R.label},R.key))}),p.jsxs("div",{className:"conv-form",children:[p.jsx("input",{className:"cf-input",type:"number",placeholder:"Valor",value:o,onChange:R=>l(R.target.value)}),p.jsxs("div",{className:"conv-row",children:[p.jsxs("select",{className:"cf-select",value:n,onChange:R=>r(R.target.value),children:[p.jsx("option",{value:"",children:"De"}),c.map(R=>p.jsx("option",{value:R.key,children:R.label},R.key))]}),p.jsx("span",{className:"conv-arrow",children:"→"}),p.jsxs("select",{className:"cf-select",value:s,onChange:R=>i(R.target.value),children:[p.jsx("option",{value:"",children:"A"}),c.map(R=>p.jsx("option",{value:R.key,children:R.label},R.key))]})]}),m!==null&&p.jsxs("div",{className:"conv-result fade-in",children:[p.jsx("span",{className:"conv-result-value",children:m}),p.jsx("span",{className:"conv-result-unit",children:u?(g=Qy.find(R=>R.key===s))==null?void 0:g.label:(A=za[t].find(R=>R.key===s))==null?void 0:A.label})]})]})]})}const Jy=["¿Qué le dice un 0 a un 8? Bonito cinturón.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué hace una abeja en el gimnasio? Zumba.","—¡Ojalá fuera un chip! —Decía la patata.","¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.","—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.","¿Qué hace un pez en el cine? Nemo.","—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.","—Doctor, tengo 3 brazos. —Pues vístase y calle.","¿Qué hace una foca en una obra? Foca-pá.","—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.","—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.","Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?","¿Cómo se llama una italiana con bigote? Mafalda.","—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.","¿Qué le dice un jaguar a otro? Jaguar tú.","—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.","—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.","—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.","¿Cómo se llaman los primos de Tarzán? Los primos del monte.","—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.","—¿Qué es verde y habla por los codos? —Un perejil parlante.","—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.","¿Cómo se dice camarero en chino? Sumenú.","—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.","—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.","—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.","¿Qué hace un perro con un taladro? Taladrando.","—¿Qué son 50 caracoles? —Cincuenta centímetros.","Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien."],Xx=["⚀","⚁","⚂","⚃","⚄","⚅"];function ia(t,e){return Math.floor(Math.random()*(e-t+1))+t}function Zx({onSelect:t}){const e=[{key:"dice",label:"Dado",icon:"🎲"},{key:"coin",label:"Moneda",icon:"🪙"},{key:"rps",label:`Piedra,
Papel,
Tijera`,icon:"✂️"},{key:"random",label:`Número
al azar`,icon:"🔢"},{key:"joke",label:"Chiste",icon:"💡"},{key:"pepe",label:`Pepe
Game`,icon:"🎮"}];return p.jsxs("div",{className:"ent-hub",children:[p.jsx("h3",{className:"ent-hub-title",children:"Entretenimiento"}),p.jsx("div",{className:"ent-grid",children:e.map(n=>p.jsxs("button",{className:"ent-card",onClick:()=>t(n.key),children:[p.jsx("span",{className:"ent-card-icon",children:n.icon}),p.jsx("span",{className:"ent-card-label",children:n.label})]},n.key))})]})}function e2(){const[t,e]=j.useState(null),[n,r]=j.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🎲 Dado"}),p.jsx("div",{className:"ent-result",children:t&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"ent-dice",children:t}),p.jsx("span",{className:"ent-big-num",children:n})]})}),p.jsx("button",{className:"generate-btn",onClick:()=>{const s=ia(1,6);e(Xx[s-1]),r(s)},children:"Lanzar dado"})]})}function t2(){const[t,e]=j.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🪙 Moneda"}),p.jsx("div",{className:"ent-result",children:t&&p.jsx("span",{className:"ent-coin",children:t==="cara"?"🪙 Cara":"🪙 Cruz"})}),p.jsx("button",{className:"generate-btn",onClick:()=>e(ia(0,1)?"cara":"cruz"),children:"Lanzar moneda"})]})}function n2(){const t=[{key:"rock",label:"Piedra",icon:"🪨",beats:"scissors"},{key:"paper",label:"Papel",icon:"📄",beats:"rock"},{key:"scissors",label:"Tijera",icon:"✂️",beats:"paper"}],[e,n]=j.useState(null),[r,s]=j.useState(null),[i,o]=j.useState(null),l=c=>{const f=t[ia(0,2)];n(c),s(f.key),c===f.key?o("🤝 Empate"):t.find(m=>m.key===c).beats===f.key?o("🎉 ¡Ganaste!"):o("😢 Perdiste")},u=()=>{n(null),s(null),o(null)};return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"✂️ Piedra, Papel o Tijera"}),e?p.jsxs("div",{className:"ent-rps-result",children:[p.jsxs("div",{className:"ent-rps-row",children:[p.jsxs("div",{className:"ent-rps-col",children:[p.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===e).icon}),p.jsx("span",{children:"Tú"})]}),p.jsx("span",{className:"ent-vs",children:"VS"}),p.jsxs("div",{className:"ent-rps-col",children:[p.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===r).icon}),p.jsx("span",{children:"App"})]})]}),p.jsx("div",{className:"ent-result",children:p.jsx("span",{className:"ent-rps-outcome",children:i})}),p.jsx("button",{className:"generate-btn",onClick:u,children:"Otra vez"})]}):p.jsx("div",{className:"ent-rps-btns",children:t.map(c=>p.jsxs("button",{className:"rps-btn",onClick:()=>l(c.key),children:[p.jsx("span",{className:"rps-icon",children:c.icon}),p.jsx("span",{children:c.label})]},c.key))})]})}function r2(){const[t,e]=j.useState("1"),[n,r]=j.useState("100"),[s,i]=j.useState(null);return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🔢 Número al azar"}),p.jsxs("div",{className:"conv-row",style:{marginTop:0},children:[p.jsx("input",{className:"cf-input",type:"number",placeholder:"Mín",value:t,onChange:o=>e(o.target.value)}),p.jsx("span",{className:"conv-arrow",children:"→"}),p.jsx("input",{className:"cf-input",type:"number",placeholder:"Máx",value:n,onChange:o=>r(o.target.value)})]}),p.jsx("div",{className:"ent-result",children:s!==null&&p.jsx("span",{className:"ent-big-num",children:s})}),p.jsx("button",{className:"generate-btn",onClick:()=>i(ia(parseInt(t)||0,parseInt(n)||100)),children:"Generar"})]})}function s2(){const[t,e]=j.useState("");return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"💡 Chiste"}),p.jsx("div",{className:"ent-joke-box",children:t&&p.jsx("p",{className:"ent-joke-text",children:t})}),p.jsx("button",{className:"generate-btn",onClick:()=>e(Jy[ia(0,Jy.length-1)]),children:"Nuevo chiste"})]})}function i2(){return p.jsxs("div",{className:"ent-sub",children:[p.jsx("h3",{children:"🎮 Pepe Game"}),p.jsx("p",{style:{color:"#64748b",fontSize:14,marginBottom:16,textAlign:"center"},children:"Abrir Pepe Game en nueva pestaña"}),p.jsx("a",{className:"generate-btn",href:"https://jlrmaster-creator.github.io/pepe_game/1.html",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex"},children:"Abrir juego"})]})}const o2={dice:e2,coin:t2,rps:n2,random:r2,joke:s2,pepe:i2};function a2(){const[t,e]=j.useState(null),n=t?o2[t]:null;return p.jsx("div",{className:"entertainment",children:t?p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"ent-back",onClick:()=>e(null),children:"← Volver"}),p.jsx(n,{})]}):p.jsx(Zx,{onSelect:e})})}const l2=[{key:"daily",label:"A diario"},{key:"weekly",label:"Semanal"},{key:"monthly",label:"Mensual"},{key:"once",label:"Una vez"}],jT=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function u2(t){const e=String(t.hour||0).padStart(2,"0"),n=String(t.minute||0).padStart(2,"0");let r=`${e}:${n}`;return t.frequency==="daily"?r+=" (a diario)":t.frequency==="weekly"?r+=` (cada ${jT[t.weekday]})`:t.frequency==="monthly"?r+=` (día ${t.day})`:t.frequency==="once"&&(r+=` (${t.day}/${String(t.month).padStart(2,"0")})`),r}function c2(t){if(!t.lastFiredAt)return!1;const e=new Date(t.lastFiredAt),n=new Date;return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}const Kc={name:"",note:"",frequency:"daily",hour:8,minute:0,weekday:1,day:1,month:1};function h2({reminders:t,error:e,justFired:n,userEmail:r,onAdd:s,onUpdate:i,onRemove:o,onShare:l,onUnshare:u}){const[c,f]=j.useState({...Kc}),[m,g]=j.useState(!1),[A,R]=j.useState(null),[N,D]=j.useState(null),[C,I]=j.useState(""),P=(y,S)=>f(k=>({...k,[y]:S})),V=()=>{f({...Kc}),R(null),g(!0)},M=y=>{f({name:y.name,note:y.note||"",frequency:y.frequency,hour:y.hour,minute:y.minute,weekday:y.weekday??1,day:y.day??1,month:y.month??1}),R(y.id),g(!0)},U=y=>{if(y.preventDefault(),!c.name.trim())return;const S={name:c.name.trim(),note:c.note.trim(),frequency:c.frequency,hour:c.hour,minute:c.minute,active:!0};c.frequency==="weekly"?S.weekday=c.weekday:c.frequency==="monthly"?S.day=c.day:c.frequency==="once"&&(S.day=c.day,S.month=c.month),A?i(A,S):s(S),f({...Kc}),R(null),g(!1)},T=y=>{!C.trim()||!C.includes("@")||(l(y,C.trim()),I(""),D(null))},v=t.filter(y=>!y.isShared).length,E=[...t].sort((y,S)=>y.active!==S.active?y.active?-1:1:(y.hour||0)-(S.hour||0)||(y.minute||0)-(S.minute||0));return p.jsxs("div",{className:"reminders",children:[e&&p.jsx("p",{className:"error",children:e}),p.jsxs("div",{className:"reminders-header",children:[p.jsxs("h3",{children:["Recordatorios ",t.length>0&&p.jsx("span",{className:"count-badge",children:t.length})]}),p.jsx("button",{className:"add-reminder-btn",onClick:V,disabled:v>=5&&!A,children:"+ Añadir"})]}),m&&p.jsxs("form",{className:"reminder-form fade-in",onSubmit:U,children:[p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre (ej: Tomar pastillas)",value:c.name,onChange:y=>P("name",y.target.value),required:!0}),p.jsx("input",{className:"cf-input",type:"text",placeholder:"Nota (opcional)",value:c.note,onChange:y=>P("note",y.target.value)}),p.jsx("select",{className:"cf-select",value:c.frequency,onChange:y=>P("frequency",y.target.value),children:l2.map(y=>p.jsx("option",{value:y.key,children:y.label},y.key))}),p.jsxs("div",{className:"reminder-row",children:[p.jsx("select",{className:"cf-select",value:c.hour,onChange:y=>P("hour",parseInt(y.target.value)),children:Array.from({length:24},(y,S)=>p.jsx("option",{value:S,children:String(S).padStart(2,"0")},S))}),p.jsx("span",{className:"reminder-colon",children:":"}),p.jsx("select",{className:"cf-select",value:c.minute,onChange:y=>P("minute",parseInt(y.target.value)),children:Array.from({length:60},(y,S)=>p.jsx("option",{value:S,children:String(S).padStart(2,"0")},S))})]}),c.frequency==="weekly"&&p.jsx("select",{className:"cf-select",value:c.weekday,onChange:y=>P("weekday",parseInt(y.target.value)),children:jT.map((y,S)=>p.jsx("option",{value:S,children:y},S))}),c.frequency==="monthly"&&p.jsx("select",{className:"cf-select",value:c.day,onChange:y=>P("day",parseInt(y.target.value)),children:Array.from({length:28},(y,S)=>p.jsx("option",{value:S+1,children:S+1},S+1))}),c.frequency==="once"&&p.jsxs("div",{className:"reminder-row",children:[p.jsx("select",{className:"cf-select",value:c.day,onChange:y=>P("day",parseInt(y.target.value)),children:Array.from({length:31},(y,S)=>p.jsx("option",{value:S+1,children:S+1},S+1))}),p.jsx("span",{className:"reminder-colon",children:"/"}),p.jsx("select",{className:"cf-select",value:c.month,onChange:y=>P("month",parseInt(y.target.value)),children:Array.from({length:12},(y,S)=>p.jsx("option",{value:S+1,children:String(S+1).padStart(2,"0")},S+1))})]}),p.jsxs("div",{className:"reminder-form-actions",children:[p.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>{g(!1),R(null)},children:"Cancelar"}),p.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:A?"Guardar cambios":"Crear recordatorio"})]})]}),E.length===0&&!m&&p.jsx("p",{className:"reminders-empty",children:"No tienes recordatorios. ¡Añade uno!"}),p.jsx("div",{className:"reminders-list",children:E.map(y=>{const S=c2(y)||n===y.id;return p.jsxs("div",{className:`reminder-item fade-in ${S?"fired":""} ${y.active?"":"inactive"}`,children:[p.jsxs("div",{className:"reminder-item-left",children:[p.jsxs("div",{className:"reminder-item-header",children:[p.jsx("span",{className:"reminder-item-name",children:y.name}),S&&p.jsx("span",{className:"reminder-fired-badge",children:"✅ Hoy"})]}),y.note&&p.jsx("span",{className:"reminder-item-note",children:y.note}),p.jsx("span",{className:"reminder-item-time",children:u2(y)}),y.isShared&&y.ownerEmail&&p.jsxs("span",{className:"reminder-shared-from",children:["Compartido por ",y.ownerEmail]}),!y.isShared&&y.sharedWith&&y.sharedWith.length>0&&p.jsx("div",{className:"reminder-shared-with",children:y.sharedWith.map(k=>p.jsxs("span",{className:"reminder-shared-tag",children:[k,p.jsx("button",{className:"reminder-shared-remove",onClick:()=>u(y.id,k),title:"Eliminar",children:"✕"})]},k))})]}),p.jsx("div",{className:"reminder-item-actions",children:!y.isShared&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:`reminder-toggle-btn ${y.active?"on":"off"}`,onClick:()=>i(y.id,{active:!y.active}),title:y.active?"Desactivar":"Activar",children:y.active?"🔔":"🔕"}),p.jsx("button",{className:"reminder-edit-btn",onClick:()=>M(y),title:"Editar",children:"✏️"}),p.jsx("button",{className:"reminder-share-btn",onClick:()=>D(N===y.id?null:y.id),title:"Compartir",children:"📤"}),p.jsx("button",{className:"reminder-delete-btn",onClick:()=>o(y.id),title:"Eliminar",children:"🗑️"})]})}),N===y.id&&!y.isShared&&p.jsxs("div",{className:"reminder-share-form fade-in",children:[p.jsx("input",{className:"cf-input",type:"email",placeholder:"Email del usuario",value:C,onChange:k=>I(k.target.value)}),p.jsx("button",{className:"generate-btn",style:{marginBottom:0,padding:"8px 12px",fontSize:13},onClick:()=>T(y.id),children:"Compartir"})]})]},y.id)})}),v>=5&&!A&&p.jsx("p",{className:"reminders-limit",children:"Máximo 5 recordatorios propios permitidos."})]})}const Qc=[{key:"reply",label:"Responder",icon:"💬"},{key:"birthdays",label:"Cumpleaños",icon:"🎂"},{key:"contacts",label:"Contactos",icon:"👥"},{key:"converter",label:"Conversor",icon:"🔄"},{key:"favorites",label:"Favoritos",icon:"🔗"},{key:"entertainment",label:"Entretenimiento",icon:"🎮"},{key:"reminders",label:"Recordatorios",icon:"🔔"}];function d2(){const[t,e]=j.useState("reply"),[n,r]=j.useState(!1),s=j.useRef(null),{user:i,logout:o}=fi(),l=fx(),u=_x(),c=Tx(),f=Cx(),m=Mx();j.useEffect(()=>{const N=D=>{s.current&&!s.current.contains(D.target)&&r(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);const g=N=>{const D=Qc.find(C=>C.key===N);if(D!=null&&D.url){window.open(D.url,"_blank"),r(!1);return}e(N),r(!1)},A=Qc.find(N=>N.key===t),R=A&&!A.url?A.label:"";return p.jsxs("div",{className:"container",children:[p.jsxs("header",{children:[p.jsxs("div",{className:"header-row",children:[p.jsxs("div",{className:"header-left",ref:s,children:[p.jsx("button",{className:"hamburger-btn",onClick:()=>r(!n),"aria-label":"Menú",children:p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),n&&p.jsx("div",{className:"dropdown-menu",children:Qc.map(N=>p.jsxs("button",{className:`dropdown-item ${t===N.key?"active":""}`,onClick:()=>g(N.key),children:[p.jsx("span",{className:"dropdown-icon",children:N.icon}),N.label]},N.key))})]}),p.jsx("h1",{children:"Toolbox AI"}),p.jsxs("div",{className:"header-user",children:[p.jsx("span",{className:"header-email",children:i.email}),p.jsx("button",{className:"logout-btn",onClick:o,title:"Cerrar sesión",children:p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),p.jsx("polyline",{points:"16 17 21 12 16 7"}),p.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),p.jsx("div",{className:"current-tab-label",children:R})]}),t==="reply"?p.jsxs("div",{className:"tab-content",children:[p.jsx(Fx,{value:l.message,onChange:N=>l.setMessage(N.target.value)}),p.jsx(zx,{selected:l.mode,onSelect:l.setMode}),p.jsx(Bx,{onClick:l.generate,loading:l.loading}),l.error&&p.jsx("p",{className:"error fade-in",children:l.error}),p.jsx($x,{response:l.response,mode:l.mode,onSend:l.sendToWhatsApp,onRegenerate:l.generate,onMakeFunnier:l.makeFunnier}),l.history.length>0&&p.jsxs("section",{className:"history",children:[p.jsxs("div",{className:"history-header",children:[p.jsx("h3",{children:"Historial"}),p.jsx("button",{className:"history-clear",onClick:l.clearHistory,children:"Limpiar"})]}),l.history.slice(0,5).map((N,D)=>p.jsxs("div",{className:"history-item fade-in",children:[p.jsxs("div",{className:"history-item-header",children:[p.jsxs("span",{className:"history-mode-badge",children:[N.mode==="funny"?"😄":N.mode==="elegant"?"⭐":N.mode==="cold"?"❄️":"🔑"," ",N.mode]}),p.jsx("span",{className:"history-time",children:new Date(N.date).toLocaleTimeString()})]}),p.jsx("p",{className:"history-reply",children:N.reply})]},D))]})]}):t==="birthdays"?p.jsx("div",{className:"tab-content",children:p.jsx(Wx,{friends:u.friends,todayBirthdays:u.todayBirthdays,error:u.error,onAdd:u.addFriend,onRemove:u.removeFriend,onSendGreeting:u.sendGreeting,onSendReminder:u.sendReminder})}):t==="contacts"?p.jsx("div",{className:"tab-content",children:p.jsx(Gx,{contacts:c.contacts,error:c.error,onAdd:c.addContact,onRemove:c.removeContact})}):t==="converter"?p.jsx("div",{className:"tab-content",children:p.jsx(Jx,{})}):t==="entertainment"?p.jsx("div",{className:"tab-content",children:p.jsx(a2,{})}):t==="reminders"?p.jsx("div",{className:"tab-content",children:p.jsx(h2,{reminders:m.reminders,error:m.error,justFired:m.justFired,userEmail:m.userEmail,onAdd:m.addReminder,onUpdate:m.updateReminder,onRemove:m.removeReminder,onShare:m.shareReminder,onUnshare:m.unshareReminder})}):p.jsx("div",{className:"tab-content",children:p.jsx(Kx,{favorites:f.favorites,error:f.error,onAdd:f.addFavorite,onRemove:f.removeFavorite})})]})}function Xy({children:t}){return p.jsxs("div",{className:"app-shell",children:[t,p.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda © 2026"})]})}function f2(){return p.jsx("div",{className:"loading-screen",children:p.jsx("div",{className:"loading-spinner"})})}function p2(){const{user:t,loading:e}=fi();return e?p.jsx(Xy,{children:p.jsx(f2,{})}):p.jsx(Xy,{children:t?p.jsx(d2,{}):p.jsx(jx,{})})}Yc.createRoot(document.getElementById("root")).render(p.jsx(cx,{children:p.jsx(p2,{})}));
