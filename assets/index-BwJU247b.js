(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vv={exports:{}},fu={},jv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),nI=Symbol.for("react.portal"),rI=Symbol.for("react.fragment"),sI=Symbol.for("react.strict_mode"),iI=Symbol.for("react.profiler"),oI=Symbol.for("react.provider"),aI=Symbol.for("react.context"),lI=Symbol.for("react.forward_ref"),uI=Symbol.for("react.suspense"),cI=Symbol.for("react.memo"),dI=Symbol.for("react.lazy"),Dm=Symbol.iterator;function hI(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,Mv={};function pi(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Ov}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=pi.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Ov}var Uh=Fh.prototype=new Fv;Uh.constructor=Fh;Lv(Uh,pi.prototype);Uh.isPureReactComponent=!0;var Vm=Array.isArray,Uv=Object.prototype.hasOwnProperty,zh={current:null},zv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Uv.call(e,r)&&!zv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Wo,type:t,key:i,ref:o,props:s,_owner:zh.current}}function fI(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function pI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pI(""+t.key):e.toString(36)}function el(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case nI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+wc(o,0):r,Vm(s)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),el(s,e,n,"",function(c){return c})):s!=null&&(Bh(s)&&(s=fI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+wc(i,l);o+=el(i,e,n,u,s)}else if(u=hI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+wc(i,l++),o+=el(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],s=0;return el(t,r,"","",function(i){return e.call(n,i,s++)}),r}function mI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},tl={transition:null},gI={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:zh};function $v(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=pi;re.Fragment=rI;re.Profiler=iI;re.PureComponent=Fh;re.StrictMode=sI;re.Suspense=uI;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gI;re.act=$v;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=zh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Uv.call(e,u)&&!zv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Wo,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:aI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oI,_context:t},t.Consumer=t};re.createElement=Bv;re.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:lI,render:t}};re.isValidElement=Bh;re.lazy=function(t){return{$$typeof:dI,_payload:{_status:-1,_result:t},_init:mI}};re.memo=function(t,e){return{$$typeof:cI,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};re.unstable_act=$v;re.useCallback=function(t,e){return dt.current.useCallback(t,e)};re.useContext=function(t){return dt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};re.useEffect=function(t,e){return dt.current.useEffect(t,e)};re.useId=function(){return dt.current.useId()};re.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return dt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};re.useRef=function(t){return dt.current.useRef(t)};re.useState=function(t){return dt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return dt.current.useTransition()};re.version="18.3.1";jv.exports=re;var j=jv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=j,vI=Symbol.for("react.element"),_I=Symbol.for("react.fragment"),EI=Object.prototype.hasOwnProperty,wI=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TI={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EI.call(e,r)&&!TI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:vI,type:t,key:i,ref:o,props:s,_owner:wI.current}}fu.Fragment=_I;fu.jsx=qv;fu.jsxs=qv;Vv.exports=fu;var d=Vv.exports,_d={},Wv={exports:{}},Ct={},Hv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,Ce=B[ve];if(0<s(Ce,Y))B[ve]=Y,B[Z]=Ce,Z=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var ve=0,Ce=B.length,Mr=Ce>>>1;ve<Mr;){var Rt=2*(ve+1)-1,Fr=B[Rt],Ut=Rt+1,$n=B[Ut];if(0>s(Fr,Z))Ut<Ce&&0>s($n,Fr)?(B[ve]=$n,B[Ut]=Z,ve=Ut):(B[ve]=Fr,B[Rt]=Z,ve=Rt);else if(Ut<Ce&&0>s($n,Z))B[ve]=$n,B[Ut]=Z,ve=Ut;else break e}}return Y}function s(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,S=!1,A=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(B){if(P=!1,T(B),!A)if(n(u)!==null)A=!0,q(R);else{var Y=n(c);Y!==null&&ot(V,Y.startTime-B)}}function R(B,Y){A=!1,P&&(P=!1,C(v),v=-1),S=!0;var Z=g;try{for(T(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||B&&!k());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,g=m.priorityLevel;var Ce=ve(m.expirationTime<=Y);Y=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(u)&&r(u),T(Y)}else r(u);m=n(u)}if(m!==null)var Mr=!0;else{var Rt=n(c);Rt!==null&&ot(V,Rt.startTime-Y),Mr=!1}return Mr}finally{m=null,g=Z,S=!1}}var L=!1,E=null,v=-1,y=5,N=-1;function k(){return!(t.unstable_now()-N<y)}function x(){if(E!==null){var B=t.unstable_now();N=B;var Y=!0;try{Y=E(!0,B)}finally{Y?I():(L=!1,E=null)}}else L=!1}var I;if(typeof w=="function")I=function(){w(x)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,xt=de.port2;de.port1.onmessage=x,I=function(){xt.postMessage(null)}}else I=function(){b(x,0)};function q(B){E=B,L||(L=!0,I())}function ot(B,Y){v=b(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||S||(A=!0,q(R))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,B){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Z+Ce,B={id:f++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:Ce,sortIndex:-1},Z>ve?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(P?(C(v),v=-1):P=!0,ot(V,Z-ve))):(B.sortIndex=Ce,e(u,B),A||S||(A=!0,q(R))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Y=g;return function(){var Z=g;g=Y;try{return B.apply(this,arguments)}finally{g=Z}}}})(Gv);Hv.exports=Gv;var II=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SI=j,At=II;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,Eo={};function fs(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,NI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Lm={};function AI(t){return Ed.call(Lm,t)?!0:Ed.call(Om,t)?!1:NI.test(t)?Lm[t]=!0:(Om[t]=!0,!1)}function CI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kI(t,e,n,r){if(e===null||typeof e>"u"||CI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kI(e,n,s,r)&&(n=null),r||s===null?AI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=SI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Ui(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Tc;function Qi(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function Sc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qi(t):""}function xI(t){switch(t.tag){case 5:return Qi(t.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Rs:return"Portal";case wd:return"Profiler";case Hh:return"StrictMode";case Td:return"Suspense";case Id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Qv:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kh:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function RI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PI(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=PI(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e_(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function Ad(t,e){e_(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yi=Array.isArray;function $s(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Yi(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function t_(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bI=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){bI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var DI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(DI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,qs=null,Ws=null;function $m(t){if(t=Ko(t)){if(typeof Dd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=vu(e),Dd(t.stateNode,t.type,e))}}function o_(t){qs?Ws?Ws.push(t):Ws=[t]:qs=t}function a_(){if(qs){var t=qs,e=Ws;if(Ws=qs=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function l_(t,e){return t(e)}function u_(){}var Nc=!1;function c_(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return l_(t,e,n)}finally{Nc=!1,(qs!==null||Ws!==null)&&(u_(),a_())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Vd=!1;if(xn)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Vd=!1}function VI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oo=!1,Il=null,Sl=!1,jd=null,jI={onError:function(t){oo=!0,Il=t}};function OI(t,e,n,r,s,i,o,l,u){oo=!1,Il=null,VI.apply(jI,arguments)}function LI(t,e,n,r,s,i,o,l,u){if(OI.apply(this,arguments),oo){if(oo){var c=Il;oo=!1,Il=null}else throw Error(U(198));Sl||(Sl=!0,jd=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(ps(t)!==t)throw Error(U(188))}function MI(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return qm(s),t;if(i===r)return qm(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function h_(t){return t=MI(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var p_=At.unstable_scheduleCallback,Wm=At.unstable_cancelCallback,FI=At.unstable_shouldYield,UI=At.unstable_requestPaint,xe=At.unstable_now,zI=At.unstable_getCurrentPriorityLevel,Yh=At.unstable_ImmediatePriority,m_=At.unstable_UserBlockingPriority,Nl=At.unstable_NormalPriority,BI=At.unstable_LowPriority,g_=At.unstable_IdlePriority,pu=null,ln=null;function $I(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HI,qI=Math.log,WI=Math.LN2;function HI(t){return t>>>=0,t===0?32:31-(qI(t)/WI|0)|0}var ka=64,xa=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ji(l):(i&=o,i!==0&&(r=Ji(i)))}else o=n&~s,o!==0?r=Ji(o):i!==0&&(r=Ji(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),s=1<<n,r|=t[n],e&=~s;return r}function GI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Gt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=GI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y_(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function QI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Gt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ue=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var __,Xh,E_,w_,T_,Ld=!1,Ra=[],lr=null,ur=null,cr=null,Io=new Map,So=new Map,er=[],YI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Bi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ko(e),e!==null&&Xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function JI(t,e,n,r,s){switch(e){case"focusin":return lr=Bi(lr,t,e,n,r,s),!0;case"dragenter":return ur=Bi(ur,t,e,n,r,s),!0;case"mouseover":return cr=Bi(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Io.set(i,Bi(Io.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,So.set(i,Bi(So.get(i)||null,t,e,n,r,s)),!0}return!1}function I_(t){var e=Kr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,T_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=Ko(n),e!==null&&Xh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){nl(t)&&n.delete(e)}function XI(){Ld=!1,lr!==null&&nl(lr)&&(lr=null),ur!==null&&nl(ur)&&(ur=null),cr!==null&&nl(cr)&&(cr=null),Io.forEach(Gm),So.forEach(Gm)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Ld||(Ld=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,XI)))}function No(t){function e(s){return $i(s,t)}if(0<Ra.length){$i(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&$i(lr,t),ur!==null&&$i(ur,t),cr!==null&&$i(cr,t),Io.forEach(e),So.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&er.shift()}var Hs=Fn.ReactCurrentBatchConfig,Cl=!0;function ZI(t,e,n,r){var s=ue,i=Hs.transition;Hs.transition=null;try{ue=1,Zh(t,e,n,r)}finally{ue=s,Hs.transition=i}}function eS(t,e,n,r){var s=ue,i=Hs.transition;Hs.transition=null;try{ue=4,Zh(t,e,n,r)}finally{ue=s,Hs.transition=i}}function Zh(t,e,n,r){if(Cl){var s=Md(t,e,n,r);if(s===null)Oc(t,e,r,kl,n),Hm(t,r);else if(JI(s,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<YI.indexOf(t)){for(;s!==null;){var i=Ko(s);if(i!==null&&__(i),i=Md(t,e,n,r),i===null&&Oc(t,e,r,kl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var kl=null;function Md(t,e,n,r){if(kl=null,t=Qh(r),t=Kr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function S_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zI()){case Yh:return 1;case m_:return 4;case Nl:case BI:return 16;case g_:return 536870912;default:return 16}default:return 16}}var or=null,ef=null,rl=null;function N_(){if(rl)return rl;var t,e=ef,n=e.length,r,s="value"in or?or.value:or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return rl=s.slice(t,1<r?1-r:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function Km(){return!1}function kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pa:Km,this.isPropagationStopped=Km,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=kt(mi),Go=Ie({},mi,{view:0,detail:0}),tS=kt(Go),Cc,kc,qi,mu=Ie({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(Cc=t.screenX-qi.screenX,kc=t.screenY-qi.screenY):kc=Cc=0,qi=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Qm=kt(mu),nS=Ie({},mu,{dataTransfer:0}),rS=kt(nS),sS=Ie({},Go,{relatedTarget:0}),xc=kt(sS),iS=Ie({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=kt(iS),aS=Ie({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=kt(aS),uS=Ie({},mi,{data:0}),Ym=kt(uS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function nf(){return fS}var pS=Ie({},Go,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=kt(pS),gS=Ie({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=kt(gS),yS=Ie({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),vS=kt(yS),_S=Ie({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=kt(_S),wS=Ie({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=kt(wS),IS=[9,13,27,32],rf=xn&&"CompositionEvent"in window,ao=null;xn&&"documentMode"in document&&(ao=document.documentMode);var SS=xn&&"TextEvent"in window&&!ao,A_=xn&&(!rf||ao&&8<ao&&11>=ao),Xm=" ",Zm=!1;function C_(t,e){switch(t){case"keyup":return IS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function NS(t,e){switch(t){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(Zm=!0,Xm);case"textInput":return t=e.data,t===Xm&&Zm?null:t;default:return null}}function AS(t,e){if(bs)return t==="compositionend"||!rf&&C_(t,e)?(t=N_(),rl=ef=or=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A_&&e.locale!=="ko"?null:e.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CS[t.type]:e==="textarea"}function x_(t,e,n,r){o_(r),e=xl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Ao=null;function kS(t){U_(t,0)}function gu(t){var e=js(t);if(Zv(e))return t}function xS(t,e){if(t==="change")return e}var R_=!1;if(xn){var Rc;if(xn){var Pc="oninput"in document;if(!Pc){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),Pc=typeof tg.oninput=="function"}Rc=Pc}else Rc=!1;R_=Rc&&(!document.documentMode||9<document.documentMode)}function ng(){lo&&(lo.detachEvent("onpropertychange",P_),Ao=lo=null)}function P_(t){if(t.propertyName==="value"&&gu(Ao)){var e=[];x_(e,Ao,t,Qh(t)),c_(kS,e)}}function RS(t,e,n){t==="focusin"?(ng(),lo=e,Ao=n,lo.attachEvent("onpropertychange",P_)):t==="focusout"&&ng()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Ao)}function bS(t,e){if(t==="click")return gu(e)}function DS(t,e){if(t==="input"||t==="change")return gu(e)}function VS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:VS;function Co(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ed.call(e,s)||!Yt(t[s],e[s]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D_(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jS(t){var e=D_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=sg(n,i);var o=sg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OS=xn&&"documentMode"in document&&11>=document.documentMode,Ds=null,Fd=null,uo=null,Ud=!1;function ig(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Ds==null||Ds!==Tl(r)||(r=Ds,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Co(uo,r)||(uo=r,r=xl(Fd,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},bc={},V_={};xn&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function yu(t){if(bc[t])return bc[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V_)return bc[t]=e[n];return t}var j_=yu("animationend"),O_=yu("animationiteration"),L_=yu("animationstart"),M_=yu("transitionend"),F_=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){F_.set(t,e),fs(e,[t])}for(var Dc=0;Dc<og.length;Dc++){var Vc=og[Dc],LS=Vc.toLowerCase(),MS=Vc[0].toUpperCase()+Vc.slice(1);Rr(LS,"on"+MS)}Rr(j_,"onAnimationEnd");Rr(O_,"onAnimationIteration");Rr(L_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(M_,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LI(r,e,void 0,t),t.currentTarget=null}function U_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;ag(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;ag(s,l,c),i=u}}}if(Sl)throw t=jd,Sl=!1,jd=null,t}function me(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var r=t+"__bubble";n.has(r)||(z_(e,t,2,!1),n.add(r))}function jc(t,e,n){var r=0;e&&(r|=4),z_(n,t,r,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Da]){t[Da]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,jc("selectionchange",!1,e))}}function z_(t,e,n,r){switch(S_(e)){case 1:var s=ZI;break;case 4:s=eS;break;default:s=Zh}n=s.bind(null,e,n,t),s=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}c_(function(){var c=i,f=Qh(n),m=[];e:{var g=F_.get(t);if(g!==void 0){var S=tf,A=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":S=mS;break;case"focusin":A="focus",S=xc;break;case"focusout":A="blur",S=xc;break;case"beforeblur":case"afterblur":S=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=vS;break;case j_:case O_:case L_:S=oS;break;case M_:S=ES;break;case"scroll":S=tS;break;case"wheel":S=TS;break;case"copy":case"cut":case"paste":S=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Jm}var P=(e&4)!==0,b=!P&&t==="scroll",C=P?g!==null?g+"Capture":null:g;P=[];for(var w=c,T;w!==null;){T=w;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,C!==null&&(V=To(w,C),V!=null&&P.push(xo(w,V,T)))),b)break;w=w.return}0<P.length&&(g=new S(g,A,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==bd&&(A=n.relatedTarget||n.fromElement)&&(Kr(A)||A[Rn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(A=n.relatedTarget||n.toElement,S=c,A=A?Kr(A):null,A!==null&&(b=ps(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(S=null,A=c),S!==A)){if(P=Qm,V="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Jm,V="onPointerLeave",C="onPointerEnter",w="pointer"),b=S==null?g:js(S),T=A==null?g:js(A),g=new P(V,w+"leave",S,n,f),g.target=b,g.relatedTarget=T,V=null,Kr(f)===c&&(P=new P(C,w+"enter",A,n,f),P.target=T,P.relatedTarget=b,V=P),b=V,S&&A)t:{for(P=S,C=A,w=0,T=P;T;T=Is(T))w++;for(T=0,V=C;V;V=Is(V))T++;for(;0<w-T;)P=Is(P),w--;for(;0<T-w;)C=Is(C),T--;for(;w--;){if(P===C||C!==null&&P===C.alternate)break t;P=Is(P),C=Is(C)}P=null}else P=null;S!==null&&lg(m,g,S,P,!1),A!==null&&b!==null&&lg(m,b,A,P,!0)}}e:{if(g=c?js(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var R=xS;else if(eg(g))if(R_)R=DS;else{R=PS;var L=RS}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=bS);if(R&&(R=R(t,c))){x_(m,R,n,f);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Cd(g,"number",g.value)}switch(L=c?js(c):window,t){case"focusin":(eg(L)||L.contentEditable==="true")&&(Ds=L,Fd=c,uo=null);break;case"focusout":uo=Fd=Ds=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,ig(m,n,f);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":ig(m,n,f)}var E;if(rf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else bs?C_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(A_&&n.locale!=="ko"&&(bs||v!=="onCompositionStart"?v==="onCompositionEnd"&&bs&&(E=N_()):(or=f,ef="value"in or?or.value:or.textContent,bs=!0)),L=xl(c,v),0<L.length&&(v=new Ym(v,t,null,n,f),m.push({event:v,listeners:L}),E?v.data=E:(E=k_(n),E!==null&&(v.data=E)))),(E=SS?NS(t,n):AS(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(f=new Ym("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=E))}U_(m,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=To(t,n),i!=null&&r.unshift(xo(t,i,s)),i=To(t,e),i!=null&&r.push(xo(t,i,s))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=To(n,i),u!=null&&o.unshift(xo(n,u,l))):s||(u=To(n,i),u!=null&&o.push(xo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,zS=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(zS,"")}function Va(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(U(425))}function Rl(){}var zd=null,Bd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(qS)}:qd;function qS(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);No(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),an="__reactFiber$"+gi,Ro="__reactProps$"+gi,Rn="__reactContainer$"+gi,Wd="__reactEvents$"+gi,WS="__reactListeners$"+gi,HS="__reactHandles$"+gi;function Kr(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[an])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[an]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function vu(t){return t[Ro]||null}var Hd=[],Os=-1;function Pr(t){return{current:t}}function ye(t){0>Os||(t.current=Hd[Os],Hd[Os]=null,Os--)}function fe(t,e){Os++,Hd[Os]=t.current,t.current=e}var Tr={},rt=Pr(Tr),yt=Pr(!1),ns=Tr;function ti(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Pl(){ye(yt),ye(rt)}function hg(t,e,n){if(rt.current!==Tr)throw Error(U(168));fe(rt,e),fe(yt,n)}function B_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,RI(t)||"Unknown",s));return Ie({},n,r)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ns=rt.current,fe(rt,t),fe(yt,yt.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=B_(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,ye(yt),ye(rt),fe(rt,t)):ye(yt),fe(yt,n)}var En=null,_u=!1,Mc=!1;function $_(t){En===null?En=[t]:En.push(t)}function GS(t){_u=!0,$_(t)}function br(){if(!Mc&&En!==null){Mc=!0;var t=0,e=ue;try{var n=En;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,_u=!1}catch(s){throw En!==null&&(En=En.slice(t+1)),p_(Yh,br),s}finally{ue=e,Mc=!1}}return null}var Ls=[],Ms=0,Dl=null,Vl=0,Pt=[],bt=0,rs=null,wn=1,Tn="";function Wr(t,e){Ls[Ms++]=Vl,Ls[Ms++]=Dl,Dl=t,Vl=e}function q_(t,e,n){Pt[bt++]=wn,Pt[bt++]=Tn,Pt[bt++]=rs,rs=t;var r=wn;t=Tn;var s=32-Gt(r)-1;r&=~(1<<s),n+=1;var i=32-Gt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wn=1<<32-Gt(e)+s|n<<s|r,Tn=i+t}else wn=1<<i|n<<s|r,Tn=t}function of(t){t.return!==null&&(Wr(t,1),q_(t,1,0))}function af(t){for(;t===Dl;)Dl=Ls[--Ms],Ls[Ms]=null,Vl=Ls[--Ms],Ls[Ms]=null;for(;t===rs;)rs=Pt[--bt],Pt[bt]=null,Tn=Pt[--bt],Pt[bt]=null,wn=Pt[--bt],Pt[bt]=null}var Nt=null,It=null,_e=!1,Wt=null;function W_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,It=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:wn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,It=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(_e){var e=It;if(e){var n=e;if(!pg(t,e)){if(Gd(t))throw Error(U(418));e=dr(n.nextSibling);var r=Nt;e&&pg(t,e)?W_(r,n):(t.flags=t.flags&-4097|2,_e=!1,Nt=t)}}else{if(Gd(t))throw Error(U(418));t.flags=t.flags&-4097|2,_e=!1,Nt=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function ja(t){if(t!==Nt)return!1;if(!_e)return mg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=It)){if(Gd(t))throw H_(),Error(U(418));for(;e;)W_(t,e),e=dr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Nt?dr(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=It;t;)t=dr(t.nextSibling)}function ni(){It=Nt=null,_e=!1}function lf(t){Wt===null?Wt=[t]:Wt.push(t)}var KS=Fn.ReactCurrentBatchConfig;function Wi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function G_(t){function e(C,w){if(t){var T=C.deletions;T===null?(C.deletions=[w],C.flags|=16):T.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function s(C,w){return C=mr(C,w),C.index=0,C.sibling=null,C}function i(C,w,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<w?(C.flags|=2,w):T):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,w,T,V){return w===null||w.tag!==6?(w=Wc(T,C.mode,V),w.return=C,w):(w=s(w,T),w.return=C,w)}function u(C,w,T,V){var R=T.type;return R===Ps?f(C,w,T.props.children,V,T.key):w!==null&&(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xn&&gg(R)===w.type)?(V=s(w,T.props),V.ref=Wi(C,w,T),V.return=C,V):(V=dl(T.type,T.key,T.props,null,C.mode,V),V.ref=Wi(C,w,T),V.return=C,V)}function c(C,w,T,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Hc(T,C.mode,V),w.return=C,w):(w=s(w,T.children||[]),w.return=C,w)}function f(C,w,T,V,R){return w===null||w.tag!==7?(w=Zr(T,C.mode,V,R),w.return=C,w):(w=s(w,T),w.return=C,w)}function m(C,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Wc(""+w,C.mode,T),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Na:return T=dl(w.type,w.key,w.props,null,C.mode,T),T.ref=Wi(C,null,w),T.return=C,T;case Rs:return w=Hc(w,C.mode,T),w.return=C,w;case Xn:var V=w._init;return m(C,V(w._payload),T)}if(Yi(w)||Ui(w))return w=Zr(w,C.mode,T,null),w.return=C,w;Oa(C,w)}return null}function g(C,w,T,V){var R=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return R!==null?null:l(C,w,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Na:return T.key===R?u(C,w,T,V):null;case Rs:return T.key===R?c(C,w,T,V):null;case Xn:return R=T._init,g(C,w,R(T._payload),V)}if(Yi(T)||Ui(T))return R!==null?null:f(C,w,T,V,null);Oa(C,T)}return null}function S(C,w,T,V,R){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(T)||null,l(w,C,""+V,R);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Na:return C=C.get(V.key===null?T:V.key)||null,u(w,C,V,R);case Rs:return C=C.get(V.key===null?T:V.key)||null,c(w,C,V,R);case Xn:var L=V._init;return S(C,w,T,L(V._payload),R)}if(Yi(V)||Ui(V))return C=C.get(T)||null,f(w,C,V,R,null);Oa(w,V)}return null}function A(C,w,T,V){for(var R=null,L=null,E=w,v=w=0,y=null;E!==null&&v<T.length;v++){E.index>v?(y=E,E=null):y=E.sibling;var N=g(C,E,T[v],V);if(N===null){E===null&&(E=y);break}t&&E&&N.alternate===null&&e(C,E),w=i(N,w,v),L===null?R=N:L.sibling=N,L=N,E=y}if(v===T.length)return n(C,E),_e&&Wr(C,v),R;if(E===null){for(;v<T.length;v++)E=m(C,T[v],V),E!==null&&(w=i(E,w,v),L===null?R=E:L.sibling=E,L=E);return _e&&Wr(C,v),R}for(E=r(C,E);v<T.length;v++)y=S(E,C,v,T[v],V),y!==null&&(t&&y.alternate!==null&&E.delete(y.key===null?v:y.key),w=i(y,w,v),L===null?R=y:L.sibling=y,L=y);return t&&E.forEach(function(k){return e(C,k)}),_e&&Wr(C,v),R}function P(C,w,T,V){var R=Ui(T);if(typeof R!="function")throw Error(U(150));if(T=R.call(T),T==null)throw Error(U(151));for(var L=R=null,E=w,v=w=0,y=null,N=T.next();E!==null&&!N.done;v++,N=T.next()){E.index>v?(y=E,E=null):y=E.sibling;var k=g(C,E,N.value,V);if(k===null){E===null&&(E=y);break}t&&E&&k.alternate===null&&e(C,E),w=i(k,w,v),L===null?R=k:L.sibling=k,L=k,E=y}if(N.done)return n(C,E),_e&&Wr(C,v),R;if(E===null){for(;!N.done;v++,N=T.next())N=m(C,N.value,V),N!==null&&(w=i(N,w,v),L===null?R=N:L.sibling=N,L=N);return _e&&Wr(C,v),R}for(E=r(C,E);!N.done;v++,N=T.next())N=S(E,C,v,N.value,V),N!==null&&(t&&N.alternate!==null&&E.delete(N.key===null?v:N.key),w=i(N,w,v),L===null?R=N:L.sibling=N,L=N);return t&&E.forEach(function(x){return e(C,x)}),_e&&Wr(C,v),R}function b(C,w,T,V){if(typeof T=="object"&&T!==null&&T.type===Ps&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Na:e:{for(var R=T.key,L=w;L!==null;){if(L.key===R){if(R=T.type,R===Ps){if(L.tag===7){n(C,L.sibling),w=s(L,T.props.children),w.return=C,C=w;break e}}else if(L.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xn&&gg(R)===L.type){n(C,L.sibling),w=s(L,T.props),w.ref=Wi(C,L,T),w.return=C,C=w;break e}n(C,L);break}else e(C,L);L=L.sibling}T.type===Ps?(w=Zr(T.props.children,C.mode,V,T.key),w.return=C,C=w):(V=dl(T.type,T.key,T.props,null,C.mode,V),V.ref=Wi(C,w,T),V.return=C,C=V)}return o(C);case Rs:e:{for(L=T.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(C,w.sibling),w=s(w,T.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=Hc(T,C.mode,V),w.return=C,C=w}return o(C);case Xn:return L=T._init,b(C,w,L(T._payload),V)}if(Yi(T))return A(C,w,T,V);if(Ui(T))return P(C,w,T,V);Oa(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(C,w.sibling),w=s(w,T),w.return=C,C=w):(n(C,w),w=Wc(T,C.mode,V),w.return=C,C=w),o(C)):n(C,w)}return b}var ri=G_(!0),K_=G_(!1),jl=Pr(null),Ol=null,Fs=null,uf=null;function cf(){uf=Fs=Ol=null}function df(t){var e=jl.current;ye(jl),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Ol=t,uf=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Ol===null)throw Error(U(308));Fs=t,Ol.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Qr=null;function hf(t){Qr===null?Qr=[t]:Qr.push(t)}function Q_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Pn(t,n)}return s=r.interleaved,s===null?(e.next=e,hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Pn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}function yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var s=t.updateQueue;Zn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(g=e,S=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){m=A.call(S,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,g=typeof A=="function"?A.call(S,m,g):A,g==null)break e;m=Ie({},m,g);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=m}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Qo={},un=Pr(Qo),Po=Pr(Qo),bo=Pr(Qo);function Yr(t){if(t===Qo)throw Error(U(174));return t}function pf(t,e){switch(fe(bo,e),fe(Po,t),fe(un,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}ye(un),fe(un,e)}function si(){ye(un),ye(Po),ye(bo)}function J_(t){Yr(bo.current);var e=Yr(un.current),n=xd(e,t.type);e!==n&&(fe(Po,t),fe(un,n))}function mf(t){Po.current===t&&(ye(un),ye(Po))}var we=Pr(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function gf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var ol=Fn.ReactCurrentDispatcher,Uc=Fn.ReactCurrentBatchConfig,ss=0,Te=null,Oe=null,Be=null,Fl=!1,co=!1,Do=0,QS=0;function Je(){throw Error(U(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,s,i){if(ss=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?ZS:eN,t=n(r,s),co){i=0;do{if(co=!1,Do=0,25<=i)throw Error(U(301));i+=1,Be=Oe=null,e.updateQueue=null,ol.current=tN,t=n(r,s)}while(co)}if(ol.current=Ul,e=Oe!==null&&Oe.next!==null,ss=0,Be=Oe=Te=null,Fl=!1,e)throw Error(U(300));return t}function _f(){var t=Do!==0;return Do=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function Ft(){if(Oe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Oe=t;else{if(t===null)throw Error(U(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function Vo(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((ss&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,is|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Yt(i,e.memoizedState)||(gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function X_(){}function Z_(t,e){var n=Te,r=Ft(),s=e(),i=!Yt(r.memoizedState,s);if(i&&(r.memoizedState=s,gt=!0),r=r.queue,Ef(nE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,jo(9,tE.bind(null,n,r,s,e),void 0,null),$e===null)throw Error(U(349));ss&30||eE(n,e,s)}return s}function eE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tE(t,e,n,r){e.value=n,e.getSnapshot=r,rE(e)&&sE(t)}function nE(t,e,n){return n(function(){rE(e)&&sE(t)})}function rE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function sE(t){var e=Pn(t,1);e!==null&&Kt(e,t,1,-1)}function _g(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=XS.bind(null,Te,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iE(){return Ft().memoizedState}function al(t,e,n,r){var s=sn();Te.flags|=t,s.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var s=Ft();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var o=Oe.memoizedState;if(i=o.destroy,r!==null&&yf(r,o.deps)){s.memoizedState=jo(e,n,i,r);return}}Te.flags|=t,s.memoizedState=jo(1|e,n,i,r)}function Eg(t,e){return al(8390656,8,t,e)}function Ef(t,e){return Eu(2048,8,t,e)}function oE(t,e){return Eu(4,2,t,e)}function aE(t,e){return Eu(4,4,t,e)}function lE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uE(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,lE.bind(null,e,t),n)}function wf(){}function cE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hE(t,e,n){return ss&21?(Yt(n,e)||(n=y_(),Te.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function YS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Uc.transition;Uc.transition={};try{t(!1),e()}finally{ue=n,Uc.transition=r}}function fE(){return Ft().memoizedState}function JS(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pE(t))mE(e,n);else if(n=Q_(t,e,n,r),n!==null){var s=ct();Kt(n,t,r,s),gE(n,e,r)}}function XS(t,e,n){var r=pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pE(t))mE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(s.next=s,hf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Q_(t,e,s,r),n!==null&&(s=ct(),Kt(n,t,r,s),gE(n,e,r))}}function pE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function mE(t,e){co=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}var Ul={readContext:Mt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ZS={readContext:Mt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,lE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:_g,useDebugValue:wf,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=_g(!1),e=t[0];return t=YS.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=sn();if(_e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),$e===null)throw Error(U(349));ss&30||eE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Eg(nE.bind(null,r,i,t),[t]),r.flags|=2048,jo(9,tE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=sn(),e=$e.identifierPrefix;if(_e){var n=Tn,r=wn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eN={readContext:Mt,useCallback:cE,useContext:Mt,useEffect:Ef,useImperativeHandle:uE,useInsertionEffect:oE,useLayoutEffect:aE,useMemo:dE,useReducer:zc,useRef:iE,useState:function(){return zc(Vo)},useDebugValue:wf,useDeferredValue:function(t){var e=Ft();return hE(e,Oe.memoizedState,t)},useTransition:function(){var t=zc(Vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:Z_,useId:fE,unstable_isNewReconciler:!1},tN={readContext:Mt,useCallback:cE,useContext:Mt,useEffect:Ef,useImperativeHandle:uE,useInsertionEffect:oE,useLayoutEffect:aE,useMemo:dE,useReducer:Bc,useRef:iE,useState:function(){return Bc(Vo)},useDebugValue:wf,useDeferredValue:function(t){var e=Ft();return Oe===null?e.memoizedState=t:hE(e,Oe.memoizedState,t)},useTransition:function(){var t=Bc(Vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:Z_,useId:fE,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),s=pr(t),i=An(r,s);i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Kt(e,t,s,r),il(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),s=pr(t),i=An(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Kt(e,t,s,r),il(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=pr(t),s=An(n,r);s.tag=2,e!=null&&(s.callback=e),e=hr(t,s,r),e!==null&&(Kt(e,t,r,n),il(e,t,r))}};function wg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(s,i):!0}function yE(t,e,n){var r=!1,s=Tr,i=e.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(s=vt(e)?ns:rt.current,r=e.contextTypes,i=(r=r!=null)?ti(t,s):Tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ff(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Mt(i):(i=vt(e)?ns:rt.current,s.context=ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&wu.enqueueReplaceState(s,s.state,null),Ll(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,e){try{var n="",r=e;do n+=xI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nN=typeof WeakMap=="function"?WeakMap:Map;function vE(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bl||(Bl=!0,lh=r),Xd(t,e)},n}function _E(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Xd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=gN.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ng(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var rN=Fn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?K_(e,null,n,r):ri(e,t.child,n,r)}function Ag(t,e,n,r,s){n=n.render;var i=e.ref;return Gs(e,s),r=vf(t,e,n,r,i,s),n=_f(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(_e&&n&&of(e),e.flags|=1,ut(t,e,r,s),e.child)}function Cg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!xf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,EE(t,e,i,r,s)):(t=dl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=mr(i,r),t.ref=e.ref,t.return=e,e.child=t}function EE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Co(i,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Zd(t,e,n,r,s)}function wE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(zs,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(zs,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(zs,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(zs,Tt),Tt|=r;return ut(t,e,s,n),e.child}function TE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,r,s){var i=vt(n)?ns:rt.current;return i=ti(e,i),Gs(e,s),n=vf(t,e,n,r,i,s),r=_f(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(_e&&r&&of(e),e.flags|=1,ut(t,e,n,s),e.child)}function kg(t,e,n,r,s){if(vt(n)){var i=!0;bl(e)}else i=!1;if(Gs(e,s),e.stateNode===null)ll(t,e),yE(e,n,r),Jd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mt(c):(c=vt(n)?ns:rt.current,c=ti(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tg(e,o,r,c),Zn=!1;var g=e.memoizedState;o.state=g,Ll(e,r,o,s),u=e.memoizedState,l!==r||g!==u||yt.current||Zn?(typeof f=="function"&&(Yd(e,n,f,r),u=e.memoizedState),(l=Zn||wg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=vt(n)?ns:rt.current,u=ti(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Tg(e,o,r,u),Zn=!1,g=e.memoizedState,o.state=g,Ll(e,r,o,s);var A=e.memoizedState;l!==m||g!==A||yt.current||Zn?(typeof S=="function"&&(Yd(e,n,S,r),A=e.memoizedState),(c=Zn||wg(e,n,c,r,g,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return eh(t,e,n,r,i,s)}function eh(t,e,n,r,s,i){TE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&fg(e,n,!1),bn(t,e,i);r=e.stateNode,rN.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,i),e.child=ri(e,null,l,i)):ut(t,e,l,i),e.memoizedState=r.state,s&&fg(e,n,!0),e.child}function IE(t){var e=t.stateNode;e.pendingContext?hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hg(t,e.context,!1),pf(t,e.containerInfo)}function xg(t,e,n,r,s){return ni(),lf(s),e.flags|=256,ut(t,e,n,r),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function SE(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(we,s&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Su(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nh(n),e.memoizedState=th,t):Tf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return sN(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=mr(l,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=th,r}return i=t.child,t=i.sibling,r=mr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&lf(r),ri(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sN(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(U(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Su({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=nh(o),e.memoizedState=th,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=$c(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=$e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Pn(t,s),Kt(r,t,s,-1))}return kf(),r=$c(Error(U(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=yN.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,It=dr(s.nextSibling),Nt=e,_e=!0,Wt=null,t!==null&&(Pt[bt++]=wn,Pt[bt++]=Tn,Pt[bt++]=rs,wn=t.id,Tn=t.overflow,rs=e),e=Tf(e,r.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qd(t.return,e,n)}function qc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function NE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),qc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ml(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}qc(e,!0,n,null,i);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iN(t,e,n){switch(e.tag){case 3:IE(e),ni();break;case 5:J_(e);break;case 1:vt(e.type)&&bl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(jl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?SE(t,e,n):(fe(we,we.current&1),t=bn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,wE(t,e,n)}return bn(t,e,n)}var AE,rh,CE,kE;AE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rh=function(){};CE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Yr(un.current);var i=null;switch(n){case"input":s=Nd(t,s),r=Nd(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=kd(t,s),r=kd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}Rd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};kE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hi(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oN(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return vt(e.type)&&Pl(),Xe(e),null;case 3:return r=e.stateNode,si(),ye(yt),ye(rt),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(dh(Wt),Wt=null))),rh(t,e),Xe(e),null;case 5:mf(e);var s=Yr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)CE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Xe(e),null}if(t=Yr(un.current),ja(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[an]=e,r[Ro]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<Xi.length;s++)me(Xi[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Fm(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":zm(r,i),me("invalid",r)}Rd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),s=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Aa(r),Um(r,i,!0);break;case"textarea":Aa(r),Bm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Rl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[Ro]=r,AE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pd(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<Xi.length;s++)me(Xi[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":Fm(t,r),s=Nd(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":zm(t,r),s=kd(t,r),me("invalid",t);break;default:s=r}Rd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?i_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&r_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&Wh(t,i,u,o))}switch(n){case"input":Aa(t),Um(t,r,!1);break;case"textarea":Aa(t),Bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?$s(t,!!r.multiple,i,!1):r.defaultValue!=null&&$s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)kE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Yr(bo.current),Yr(un.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(i=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return Xe(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&It!==null&&e.mode&1&&!(e.flags&128))H_(),ni(),e.flags|=98560,i=!1;else if(i=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[an]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),i=!1}else Wt!==null&&(dh(Wt),Wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):kf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return si(),rh(t,e),t===null&&ko(e.stateNode.containerInfo),Xe(e),null;case 10:return df(e.type._context),Xe(e),null;case 17:return vt(e.type)&&Pl(),Xe(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Hi(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=128,Hi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&xe()>oi&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return Xe(e),null}else 2*xe()-i.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xe(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Cf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function aN(t,e){switch(af(e),e.tag){case 1:return vt(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),ye(yt),ye(rt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return si(),null;case 10:return df(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Ma=!1,tt=!1,lN=typeof WeakSet=="function"?WeakSet:Set,H=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function sh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Pg=!1;function uN(t,e){if(zd=Cl,t=D_(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Cl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,b=A.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?P:$t(e.type,P),b);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ne(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=Pg,Pg=!1,A}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sh(e,n,i)}s=s.next}while(s!==r)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xE(t){var e=t.alternate;e!==null&&(t.alternate=null,xE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[Ro],delete e[Wd],delete e[WS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function RE(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||RE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var qe=null,qt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)PE(t,e,n),n=n.sibling}function PE(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:tt||Us(n,e);case 6:var r=qe,s=qt;qe=null,Yn(t,e,n),qe=r,qt=s,qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),No(t)):Lc(qe,n.stateNode));break;case 4:r=qe,s=qt,qe=n.stateNode.containerInfo,qt=!0,Yn(t,e,n),qe=r,qt=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sh(n,e,o),s=s.next}while(s!==r)}Yn(t,e,n);break;case 1:if(!tt&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Yn(t,e,n),tt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lN),e.forEach(function(r){var s=vN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,qt=!1;break e;case 3:qe=l.stateNode.containerInfo,qt=!0;break e;case 4:qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));PE(i,o,s),qe=null,qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ne(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bE(e,t),e=e.sibling}function bE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),rn(t),r&4){try{ho(3,t,t.return),Tu(3,t)}catch(P){Ne(t,t.return,P)}try{ho(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:zt(e,t),rn(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(zt(e,t),rn(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var s=t.stateNode;try{wo(s,"")}catch(P){Ne(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&e_(s,i),Pd(l,o);var c=Pd(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?i_(s,m):f==="dangerouslySetInnerHTML"?r_(s,m):f==="children"?wo(s,m):Wh(s,f,m,c)}switch(l){case"input":Ad(s,i);break;case"textarea":t_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?$s(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?$s(s,!!i.multiple,i.defaultValue,!0):$s(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ro]=i}catch(P){Ne(t,t.return,P)}}break;case 6:if(zt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ne(t,t.return,P)}}break;case 3:if(zt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:zt(e,t),rn(t);break;case 13:zt(e,t),rn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Nf=xe())),r&4&&Dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,zt(e,t),tt=c):zt(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,S=g.child,g.tag){case 0:case 11:case 14:case 15:ho(4,g,g.return);break;case 1:Us(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Ne(r,n,P)}}break;case 5:Us(g,g.return);break;case 22:if(g.memoizedState!==null){jg(m);continue}}S!==null?(S.return=g,H=S):jg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=s_("display",o))}catch(P){Ne(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:zt(e,t),rn(t),r&4&&Dg(t);break;case 21:break;default:zt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(RE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(wo(s,""),r.flags&=-33);var i=bg(t);ah(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(t);oh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cN(t,e,n){H=t,DE(t)}function DE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ma;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Ma;var c=tt;if(Ma=o,(tt=u)&&!c)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Og(s):u!==null?(u.return=o,H=u):Og(s);for(;i!==null;)H=i,DE(i),i=i.sibling;H=s,Ma=l,tt=c}Vg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Vg(t)}}function Vg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&vg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&No(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&ih(e)}catch(g){Ne(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function jg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Og(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{ih(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{ih(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var dN=Math.ceil,zl=Fn.ReactCurrentDispatcher,If=Fn.ReactCurrentOwner,Ot=Fn.ReactCurrentBatchConfig,ae=0,$e=null,Pe=null,Ge=0,Tt=0,zs=Pr(0),Le=0,Oo=null,is=0,Iu=0,Sf=0,fo=null,pt=null,Nf=0,oi=1/0,_n=null,Bl=!1,lh=null,fr=null,Fa=!1,ar=null,$l=0,po=0,uh=null,ul=-1,cl=0;function ct(){return ae&6?xe():ul!==-1?ul:ul=xe()}function pr(t){return t.mode&1?ae&2&&Ge!==0?Ge&-Ge:KS.transition!==null?(cl===0&&(cl=y_()),cl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:S_(t.type)),t):1}function Kt(t,e,n,r){if(50<po)throw po=0,uh=null,Error(U(185));Ho(t,n,r),(!(ae&2)||t!==$e)&&(t===$e&&(!(ae&2)&&(Iu|=n),Le===4&&tr(t,Ge)),_t(t,r),n===1&&ae===0&&!(e.mode&1)&&(oi=xe()+500,_u&&br()))}function _t(t,e){var n=t.callbackNode;KI(t,e);var r=Al(t,t===$e?Ge:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?GS(Lg.bind(null,t)):$_(Lg.bind(null,t)),$S(function(){!(ae&6)&&br()}),n=null;else{switch(v_(r)){case 1:n=Yh;break;case 4:n=m_;break;case 16:n=Nl;break;case 536870912:n=g_;break;default:n=Nl}n=zE(n,VE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function VE(t,e){if(ul=-1,cl=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Al(t,t===$e?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var s=ae;ae|=2;var i=OE();($e!==t||Ge!==e)&&(_n=null,oi=xe()+500,Xr(t,e));do try{pN();break}catch(l){jE(t,l)}while(!0);cf(),zl.current=i,ae=s,Pe!==null?e=0:($e=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(s=Od(t),s!==0&&(r=s,e=ch(t,s))),e===1)throw n=Oo,Xr(t,0),tr(t,r),_t(t,xe()),n;if(e===6)tr(t,r);else{if(s=t.current.alternate,!(r&30)&&!hN(s)&&(e=ql(t,r),e===2&&(i=Od(t),i!==0&&(r=i,e=ch(t,i))),e===1))throw n=Oo,Xr(t,0),tr(t,r),_t(t,xe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Hr(t,pt,_n);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=Nf+500-xe(),10<e)){if(Al(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qd(Hr.bind(null,t,pt,_n),e);break}Hr(t,pt,_n);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Gt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dN(r/1960))-r,10<r){t.timeoutHandle=qd(Hr.bind(null,t,pt,_n),r);break}Hr(t,pt,_n);break;case 5:Hr(t,pt,_n);break;default:throw Error(U(329))}}}return _t(t,xe()),t.callbackNode===n?VE.bind(null,t):null}function ch(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=pt,pt=n,e!==null&&dh(e)),t}function dh(t){pt===null?pt=t:pt.push.apply(pt,t)}function hN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Sf,e&=~Iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(ae&6)throw Error(U(327));Ks();var e=Al(t,0);if(!(e&1))return _t(t,xe()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Od(t);r!==0&&(e=r,n=ch(t,r))}if(n===1)throw n=Oo,Xr(t,0),tr(t,e),_t(t,xe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,pt,_n),_t(t,xe()),null}function Af(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(oi=xe()+500,_u&&br())}}function os(t){ar!==null&&ar.tag===0&&!(ae&6)&&Ks();var e=ae;ae|=1;var n=Ot.transition,r=ue;try{if(Ot.transition=null,ue=1,t)return t()}finally{ue=r,Ot.transition=n,ae=e,!(ae&6)&&br()}}function Cf(){Tt=zs.current,ye(zs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:si(),ye(yt),ye(rt),gf();break;case 5:mf(r);break;case 4:si();break;case 13:ye(we);break;case 19:ye(we);break;case 10:df(r.type._context);break;case 22:case 23:Cf()}n=n.return}if($e=t,Pe=t=mr(t.current,null),Ge=Tt=e,Le=0,Oo=null,Sf=Iu=is=0,pt=fo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Qr=null}return t}function jE(t,e){do{var n=Pe;try{if(cf(),ol.current=Ul,Fl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Fl=!1}if(ss=0,Be=Oe=Te=null,co=!1,Do=0,If.current=null,n===null||n.return===null){Le=1,Oo=e,Pe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Sg(o);if(S!==null){S.flags&=-257,Ng(S,o,l,i,e),S.mode&1&&Ig(i,c,e),e=S,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){Ig(i,c,e),kf();break e}u=Error(U(426))}}else if(_e&&l.mode&1){var b=Sg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ng(b,o,l,i,e),lf(ii(u,l));break e}}i=u=ii(u,l),Le!==4&&(Le=2),fo===null?fo=[i]:fo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=vE(i,u,e);yg(i,C);break e;case 1:l=u;var w=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fr===null||!fr.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=_E(i,l,e);yg(i,V);break e}}i=i.return}while(i!==null)}ME(n)}catch(R){e=R,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function OE(){var t=zl.current;return zl.current=Ul,t===null?Ul:t}function kf(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(is&268435455)&&!(Iu&268435455)||tr($e,Ge)}function ql(t,e){var n=ae;ae|=2;var r=OE();($e!==t||Ge!==e)&&(_n=null,Xr(t,e));do try{fN();break}catch(s){jE(t,s)}while(!0);if(cf(),ae=n,zl.current=r,Pe!==null)throw Error(U(261));return $e=null,Ge=0,Le}function fN(){for(;Pe!==null;)LE(Pe)}function pN(){for(;Pe!==null&&!FI();)LE(Pe)}function LE(t){var e=UE(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?ME(t):Pe=e,If.current=null}function ME(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aN(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Pe=null;return}}else if(n=oN(n,e,Tt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Le===0&&(Le=5)}function Hr(t,e,n){var r=ue,s=Ot.transition;try{Ot.transition=null,ue=1,mN(t,e,n,r)}finally{Ot.transition=s,ue=r}return null}function mN(t,e,n,r){do Ks();while(ar!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(QI(t,i),t===$e&&(Pe=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,zE(Nl,function(){return Ks(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var o=ue;ue=1;var l=ae;ae|=4,If.current=null,uN(t,n),bE(n,t),jS(Bd),Cl=!!zd,Bd=zd=null,t.current=n,cN(n),UI(),ae=l,ue=o,Ot.transition=i}else t.current=n;if(Fa&&(Fa=!1,ar=t,$l=s),i=t.pendingLanes,i===0&&(fr=null),$I(n.stateNode),_t(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Bl)throw Bl=!1,t=lh,lh=null,t;return $l&1&&t.tag!==0&&Ks(),i=t.pendingLanes,i&1?t===uh?po++:(po=0,uh=t):po=0,br(),null}function Ks(){if(ar!==null){var t=v_($l),e=Ot.transition,n=ue;try{if(Ot.transition=null,ue=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,$l=0,ae&6)throw Error(U(331));var s=ae;for(ae|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:ho(8,f,i)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,S=f.return;if(xE(f),f===c){H=null;break}if(g!==null){g.return=S,H=g;break}H=S}}}var A=i.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ho(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,H=C;break e}H=i.return}}var w=t.current;for(H=w;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tu(9,l)}}catch(R){Ne(l,l.return,R)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(ae=s,br(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(pu,t)}catch{}r=!0}return r}finally{ue=n,Ot.transition=e}}return!1}function Mg(t,e,n){e=ii(n,e),e=vE(t,e,1),t=hr(t,e,1),e=ct(),t!==null&&(Ho(t,1,e),_t(t,e))}function Ne(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=ii(n,t),t=_E(e,t,1),e=hr(e,t,1),t=ct(),e!==null&&(Ho(e,1,t),_t(e,t));break}}e=e.return}}function gN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>xe()-Nf?Xr(t,0):Sf|=n),_t(t,e)}function FE(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=ct();t=Pn(t,e),t!==null&&(Ho(t,e,n),_t(t,n))}function yN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FE(t,n)}function vN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),FE(t,n)}var UE;UE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,iN(t,e,n);gt=!!(t.flags&131072)}else gt=!1,_e&&e.flags&1048576&&q_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var s=ti(e,rt.current);Gs(e,n),s=vf(null,e,r,t,s,n);var i=_f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,bl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ff(e),s.updater=wu,e.stateNode=s,s._reactInternals=e,Jd(e,r,t,n),e=eh(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&of(e),ut(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=EN(r),t=$t(r,t),s){case 0:e=Zd(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Ag(null,e,r,t,n);break e;case 14:e=Cg(null,e,r,$t(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Zd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),kg(t,e,r,s,n);case 3:e:{if(IE(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Y_(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ii(Error(U(423)),e),e=xg(t,e,r,n,s);break e}else if(r!==s){s=ii(Error(U(424)),e),e=xg(t,e,r,n,s);break e}else for(It=dr(e.stateNode.containerInfo.firstChild),Nt=e,_e=!0,Wt=null,n=K_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===s){e=bn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return J_(e),t===null&&Kd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$d(r,s)?o=null:i!==null&&$d(r,i)&&(e.flags|=32),TE(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return SE(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Ag(t,e,r,s,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(jl,r._currentValue),r._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===s.children&&!yt.current){e=bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=An(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ut(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Gs(e,n),s=Mt(s),r=r(s),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),Cg(t,e,r,s,n);case 15:return EE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),ll(t,e),e.tag=1,vt(r)?(t=!0,bl(e)):t=!1,Gs(e,n),yE(e,r,s),Jd(e,r,s,n),eh(null,e,r,!0,t,n);case 19:return NE(t,e,n);case 22:return wE(t,e,n)}throw Error(U(156,e.tag))};function zE(t,e){return p_(t,e)}function _N(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new _N(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function EN(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Kh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Zr(n.children,s,i,e);case Hh:o=8,s|=8;break;case wd:return t=jt(12,n,e,s|2),t.elementType=wd,t.lanes=i,t;case Td:return t=jt(13,n,e,s),t.elementType=Td,t.lanes=i,t;case Id:return t=jt(19,n,e,s),t.elementType=Id,t.lanes=i,t;case Jv:return Su(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qv:o=10;break e;case Yv:o=9;break e;case Gh:o=11;break e;case Kh:o=14;break e;case Xn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=jt(22,t,r,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,r,s,i,o,l,u){return t=new wN(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(i),t}function TN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function BE(t){if(!t)return Tr;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(vt(n))return B_(t,n,e)}return e}function $E(t,e,n,r,s,i,o,l,u){return t=Rf(n,r,!0,t,s,i,o,l,u),t.context=BE(null),n=t.current,r=ct(),s=pr(n),i=An(r,s),i.callback=e??null,hr(n,i,s),t.current.lanes=s,Ho(t,s,r),_t(t,r),t}function Nu(t,e,n,r){var s=e.current,i=ct(),o=pr(s);return n=BE(n),e.context===null?e.context=n:e.pendingContext=n,e=An(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(s,e,o),t!==null&&(Kt(t,s,o,i),il(t,s,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){Fg(t,e),(t=t.alternate)&&Fg(t,e)}function IN(){return null}var qE=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}Au.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Nu(t,e,null,null)};Au.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Nu(null,t,null,null)}),e[Rn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&I_(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function SN(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Wl(o);i.call(c)}}var o=$E(e,r,t,0,null,!1,!1,"",Ug);return t._reactRootContainer=o,t[Rn]=o.current,ko(t.nodeType===8?t.parentNode:t),os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Wl(u);l.call(c)}}var u=Rf(t,0,!1,null,null,!1,!1,"",Ug);return t._reactRootContainer=u,t[Rn]=u.current,ko(t.nodeType===8?t.parentNode:t),os(function(){Nu(e,u,n,r)}),u}function ku(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Wl(o);l.call(u)}}Nu(e,o,t,s)}else o=SN(n,e,t,s,r);return Wl(o)}__=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(Jh(e,n|1),_t(e,xe()),!(ae&6)&&(oi=xe()+500,br()))}break;case 13:os(function(){var r=Pn(t,1);if(r!==null){var s=ct();Kt(r,t,1,s)}}),Pf(t,1)}};Xh=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ct();Kt(e,t,134217728,n)}Pf(t,134217728)}};E_=function(t){if(t.tag===13){var e=pr(t),n=Pn(t,e);if(n!==null){var r=ct();Kt(n,t,e,r)}Pf(t,e)}};w_=function(){return ue};T_=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Dd=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=vu(r);if(!s)throw Error(U(90));Zv(r),Ad(r,s)}}}break;case"textarea":t_(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};l_=Af;u_=os;var NN={usingClientEntryPoint:!1,Events:[Ko,js,vu,o_,a_,Af]},Gi={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AN={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||IN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{pu=Ua.inject(AN),ln=Ua}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NN;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(U(200));return TN(t,e,null,n)};Ct.createRoot=function(t,e){if(!Df(t))throw Error(U(299));var n=!1,r="",s=qE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,r,s),t[Rn]=e.current,ko(t.nodeType===8?t.parentNode:t),new bf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return os(t)};Ct.hydrate=function(t,e,n){if(!Cu(e))throw Error(U(200));return ku(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=qE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$E(e,null,t,1,n??null,s,!1,i,o),t[Rn]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Au(e)};Ct.render=function(t,e,n){if(!Cu(e))throw Error(U(200));return ku(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(U(40));return t._reactRootContainer?(os(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Af;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return ku(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function WE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(WE)}catch(t){console.error(t)}}WE(),Wv.exports=Ct;var CN=Wv.exports,zg=CN;_d.createRoot=zg.createRoot,_d.hydrateRoot=zg.hydrateRoot;const kN=()=>{};var Bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(HE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new RN;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const A=c<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PN=function(t){const e=HE(t);return GE.encodeByteArray(e,!0)},Hl=function(t){return PN(t).replace(/\./g,"")},KE=function(t){try{return GE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DN=()=>bN().__FIREBASE_DEFAULTS__,VN=()=>{if(typeof process>"u"||typeof Bg>"u")return;const t=Bg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&KE(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return kN()||DN()||VN()||jN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},QE=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ON=t=>{const e=QE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},YE=()=>{var t;return(t=xu())==null?void 0:t.config},JE=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function MN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function UN(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $N(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qN(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WN(){return!UN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HN(){try{return typeof indexedDB=="object"}catch{return!1}}function GN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KN,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QN(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function QN(t,e){return t.replace(YN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YN=/\{\$([^}]+)}/g;function JN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($g(i)&&$g(o)){if(!Dn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XN(t,e){const n=new ZN(t,e);return n.subscribe.bind(n)}class ZN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gc),s.error===void 0&&(s.error=Gc),s.complete===void 0&&(s.complete=Gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Xo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function XE(t){return(await fetch(t,{credentials:"include"})).ok}class as{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class t1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r1(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n1(t){return t===Gr?void 0:t}function r1(t){return t.instantiationMode==="EAGER"}/**
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
 */class s1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const i1={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},o1=se.INFO,a1={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},l1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=a1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vf{constructor(e){this.name=e,this._logLevel=o1,this._logHandler=l1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const u1=(t,e)=>e.some(n=>t instanceof n);let qg,Wg;function c1(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d1(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,hh=new WeakMap,ew=new WeakMap,Kc=new WeakMap,jf=new WeakMap;function h1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function f1(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ew.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p1(t){fh=t(fh)}function m1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qc(this),e,...n);return ew.set(r,e.sort?e.sort():[e]),gr(r)}:d1().includes(t)?function(...e){return t.apply(Qc(this),e),gr(ZE.get(this))}:function(...e){return gr(t.apply(Qc(this),e))}}function g1(t){return typeof t=="function"?m1(t):(t instanceof IDBTransaction&&f1(t),u1(t,c1())?new Proxy(t,fh):t)}function gr(t){if(t instanceof IDBRequest)return h1(t);if(Kc.has(t))return Kc.get(t);const e=g1(t);return e!==t&&(Kc.set(t,e),jf.set(e,t)),e}const Qc=t=>jf.get(t);function y1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const v1=["get","getKey","getAll","getAllKeys","count"],_1=["put","add","delete","clear"],Yc=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||v1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Yc.set(e,i),i}p1(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
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
 */class E1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",Gg="0.14.12";/**
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
 */const Vn=new Vf("@firebase/app"),T1="@firebase/app-compat",I1="@firebase/analytics-compat",S1="@firebase/analytics",N1="@firebase/app-check-compat",A1="@firebase/app-check",C1="@firebase/auth",k1="@firebase/auth-compat",x1="@firebase/database",R1="@firebase/data-connect",P1="@firebase/database-compat",b1="@firebase/functions",D1="@firebase/functions-compat",V1="@firebase/installations",j1="@firebase/installations-compat",O1="@firebase/messaging",L1="@firebase/messaging-compat",M1="@firebase/performance",F1="@firebase/performance-compat",U1="@firebase/remote-config",z1="@firebase/remote-config-compat",B1="@firebase/storage",$1="@firebase/storage-compat",q1="@firebase/firestore",W1="@firebase/ai",H1="@firebase/firestore-compat",G1="firebase",K1="12.13.0";/**
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
 */const mh="[DEFAULT]",Q1={[ph]:"fire-core",[T1]:"fire-core-compat",[S1]:"fire-analytics",[I1]:"fire-analytics-compat",[A1]:"fire-app-check",[N1]:"fire-app-check-compat",[C1]:"fire-auth",[k1]:"fire-auth-compat",[x1]:"fire-rtdb",[R1]:"fire-data-connect",[P1]:"fire-rtdb-compat",[b1]:"fire-fn",[D1]:"fire-fn-compat",[V1]:"fire-iid",[j1]:"fire-iid-compat",[O1]:"fire-fcm",[L1]:"fire-fcm-compat",[M1]:"fire-perf",[F1]:"fire-perf-compat",[U1]:"fire-rc",[z1]:"fire-rc-compat",[B1]:"fire-gcs",[$1]:"fire-gcs-compat",[q1]:"fire-fst",[H1]:"fire-fst-compat",[W1]:"fire-vertex","fire-js":"fire-js",[G1]:"fire-js-all"};/**
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
 */const Gl=new Map,Y1=new Map,gh=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(gh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of Gl.values())Kg(n,t);for(const n of Y1.values())Kg(n,t);return!0}function Of(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Yo("app","Firebase",J1);/**
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
 */class X1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=K1;function tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=YE()),!n)throw yr.create("no-options");const i=Gl.get(s);if(i){if(Dn(n,i.options)&&Dn(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new s1(s);for(const u of gh.values())o.addComponent(u);const l=new X1(n,r,o);return Gl.set(s,l),l}function nw(t=mh){const e=Gl.get(t);if(!e&&t===mh&&YE())return tw();if(!e)throw yr.create("no-app",{appName:t});return e}function vr(t,e,n){let r=Q1[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}ai(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Z1="firebase-heartbeat-database",eA=1,Lo="firebase-heartbeat-store";let Jc=null;function rw(){return Jc||(Jc=y1(Z1,eA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Jc}async function tA(t){try{const n=(await rw()).transaction(Lo),r=await n.objectStore(Lo).get(sw(t));return await n.done,r}catch(e){if(e instanceof Un)Vn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Qg(t,e){try{const r=(await rw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,sw(t)),await r.done}catch(n){if(n instanceof Un)Vn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,rA=30;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rA){const o=aA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yg(),{heartbeatsToSend:r,unsentEntries:s}=iA(this._heartbeatsCache.heartbeats),i=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function Yg(){return new Date().toISOString().substring(0,10)}function iA(t,e=nA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HN()?GN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jg(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function aA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function lA(t){ai(new as("platform-logger",e=>new E1(e),"PRIVATE")),ai(new as("heartbeat",e=>new sA(e),"PRIVATE")),vr(ph,Gg,t),vr(ph,Gg,"esm2020"),vr("fire-js","")}lA("");function iw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uA=iw,ow=new Yo("auth","Firebase",iw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Vf("@firebase/auth");function cA(t,...e){Kl.logLevel<=se.WARN&&Kl.warn(`Auth (${yi}): ${t}`,...e)}function hl(t,...e){Kl.logLevel<=se.ERROR&&Kl.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Lf(t,...e)}function cn(t,...e){return Lf(t,...e)}function aw(t,e,n){const r={...uA(),[e]:n};return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return aw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ow.create(t,...e)}function K(t,e,...n){if(!t)throw Lf(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function jn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dA(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||BN()||"connection"in navigator)?navigator.onLine:!0}function fA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=FN()||$N()}get(){return hA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gA=new Zo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vr(t,e,n,r,s={}){return uw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Jo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return zN()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Xo(t.emulatorConfig.host)&&(c.credentials="include"),lw.fetch()(await cw(t,t.config.apiHost,n,l),c)})}async function uw(t,e,n){t._canInitEmulator=!1;const r={...pA,...e};try{const s=new vA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw aw(t,f,c);Jt(t,f)}}catch(s){if(s instanceof Un)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ea(t,e,n,r,s={}){const i=await Vr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mf(t.config,s):`${t.config.apiScheme}://${s}`;return mA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function yA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),gA.get())})}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function Zg(t){return t!==void 0&&t.enterprise!==void 0}class _A{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EA(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function Ql(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TA(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Ff(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mo(Xc(s.auth_time)),issuedAtTime:mo(Xc(s.iat)),expirationTime:mo(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const s=KE(n);return s?JSON.parse(s):(hl("Failed to decode base64 JWT payload"),null)}catch(s){return hl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ey(t){const e=Ff(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&IA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Mo(t,Ql(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?dw(s.providerUserInfo):[],o=AA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function NA(t){const e=Fe(t);await Yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){const n=await uw(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Xo(t.emulatorConfig.host)&&(u.credentials="include"),lw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kA(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=ey(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TA(this,e)}reload(){return NA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Mo(this,wA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:A,stsTokenManager:P}=n;K(m&&P,e,"internal-error");const b=Qs.fromJSON(this.name,P);K(typeof m=="string",e,"internal-error"),Jn(r,e.name),Jn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(l,e.name),Jn(u,e.name),Jn(c,e.name),Jn(f,e.name);const C=new Ht({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return A&&Array.isArray(A)&&(C.providerData=A.map(w=>({...w}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qs;l.updateFromIdToken(r);const u=new Ht({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function Sn(t){jn(t instanceof Function,"Expected a class definition");let e=ty.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ty.set(t,e),e)}/**
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
 */class hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hw.type="NONE";const ny=hw;/**
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
 */function fl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fl(this.userKey,s.apiKey,i),this.fullPersistenceKey=fl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ql(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(Sn(ny),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Sn(ny);const o=fl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await Ql(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Ht._fromGetAccountInfoResponse(e,g,f)}else m=Ht._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ys(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vw(e))return"Blackberry";if(_w(e))return"Webos";if(pw(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fw(t=st()){return/firefox\//i.test(t)}function pw(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=st()){return/crios\//i.test(t)}function gw(t=st()){return/iemobile/i.test(t)}function yw(t=st()){return/android/i.test(t)}function vw(t=st()){return/blackberry/i.test(t)}function _w(t=st()){return/webos/i.test(t)}function Uf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xA(t=st()){var e;return Uf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function RA(){return qN()&&document.documentMode===10}function Ew(t=st()){return Uf(t)||yw(t)||_w(t)||vw(t)||/windows phone/i.test(t)||gw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e=[]){let n;switch(t){case"Browser":n=ry(st());break;case"Worker":n=`${ry(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class PA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bA(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const DA=6;class VA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??DA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new PA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ql(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Cn(this));const n=e?Fe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bA(this),n=new VA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&cA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ms(t){return Fe(t)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XN(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OA(t){Ru=t}function Tw(t){return Ru.loadJS(t)}function LA(){return Ru.recaptchaEnterpriseScript}function MA(){return Ru.gapiScript}function FA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class UA{constructor(){this.enterprise=new zA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const BA="recaptcha-enterprise",Iw="NO_RECAPTCHA";class $A{constructor(e){this.type=BA,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{EA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new _A(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Zg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Iw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Zg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=LA();u.length!==0&&(u+=l),Tw(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function iy(t,e,n,r=!1,s=!1){const i=new $A(t);let o;if(s)o=Iw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _h(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await iy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await iy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e){const n=Of(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dn(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function WA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HA(t,e,n){const r=ms(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sw(e),{host:o,port:l}=GA(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Dn(c,r.config.emulator)&&Dn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Xo(o)?XE(`${i}//${o}${u}`):KA()}function Sw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GA(t){const e=Sw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oy(o)}}}function oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function QA(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return ea(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function XA(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends zf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,n,"signInWithPassword",YA);case"emailLink":return JA(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,r,"signUpPassword",QA);case"emailLink":return XA(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="http://localhost";class ls extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:ZA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tC(t){const e=Zi(eo(t)).link,n=e?Zi(eo(e)).deep_link_id:null,r=Zi(eo(t)).deep_link_id;return(r?Zi(eo(r)).link:null)||r||n||e||t}class Bf{constructor(e){const n=Zi(eo(e)),r=n.apiKey??null,s=n.oobCode??null,i=eC(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tC(e);try{return new Bf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bf.parseLink(n);return K(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ta{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ta{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ta{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return ea(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=ay(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ay(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jl(e,n,r,s)}}function Aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(t,i,e,r):i})}async function rC(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function sC(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await Mo(t,Aw(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Ff(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e,n=!1){if(Dt(t.app))return Promise.reject(Cn(t));const r="signIn",s=await Aw(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function iC(t,e){return Cw(ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oC(t,e,n){if(Dt(t.app))return Promise.reject(Cn(t));const r=ms(t),o=await _h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kw(t),u}),l=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function aC(t,e,n){return Dt(t.app)?Promise.reject(Cn(t)):iC(Fe(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kw(t),r})}function lC(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function uC(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function cC(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function dC(t){return Fe(t).signOut()}const Xl="__sak";/**
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
 */class xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=1e3,fC=10;class Rw extends xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);RA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const pC=Rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pw.type="SESSION";const bw=Pw;/**
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
 */function mC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await mC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=$f("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function yC(t){dn().location.href=t}/**
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
 */function Dw(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function vC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _C(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function EC(){return Dw()?self:null}/**
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
 */const Vw="firebaseLocalStorageDb",wC=1,Zl="firebaseLocalStorage",jw="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function TC(){const t=indexedDB.deleteDatabase(Vw);return new na(t).toPromise()}function Eh(){const t=indexedDB.open(Vw,wC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:jw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await TC(),e(await Eh()))})})}async function ly(t,e,n){const r=bu(t,!0).put({[jw]:e,value:n});return new na(r).toPromise()}async function IC(t,e){const n=bu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function uy(t,e){const n=bu(t,!0).delete(e);return new na(n).toPromise()}const SC=800,NC=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(EC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await vC(),!this.activeServiceWorker)return;this.sender=new gC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_C()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eh();return await ly(e,Xl,"1"),await uy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ly(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bu(s,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const AC=Ow;new Zo(3e4,6e4);/**
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
 */function CC(t,e){return e?Sn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kC(t){return Cw(t.auth,new qf(t),t.bypassAuthState)}function xC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),sC(n,new qf(t),t.bypassAuthState)}async function RC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),rC(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kC;case"linkViaPopup":case"linkViaRedirect":return RC;case"reauthViaPopup":case"reauthViaRedirect":return xC;default:Jt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Zo(2e3,1e4);class Bs extends Lw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PC.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="pendingRedirect",pl=new Map;class DC extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pl.get(this.auth._key());if(!e){try{const r=await VC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pl.set(this.auth._key(),e)}return this.bypassAuthState||pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VC(t,e){const n=LC(e),r=OC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jC(t,e){pl.set(t._key(),e)}function OC(t){return Sn(t._redirectPersistence)}function LC(t){return fl(bC,t.config.apiKey,t.name)}async function MC(t,e,n=!1){if(Dt(t.app))return Promise.reject(Cn(t));const r=ms(t),s=CC(r,e),o=await new DC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=10*60*1e3;class UC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FC&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qC=/^https?/;async function WC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BC(t);for(const n of e)try{if(HC(n))return}catch{}Jt(t,"unauthorized-domain")}function HC(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qC.test(n))return!1;if($C.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const GC=new Zo(3e4,6e4);function dy(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KC(t){return new Promise((e,n)=>{var s,i,o;function r(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),n(cn(t,"network-request-failed"))},timeout:GC.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=FA("iframefcb");return dn()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},Tw(`${MA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ml=null,e})}let ml=null;function QC(t){return ml=ml||KC(t),ml}/**
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
 */const YC=new Zo(5e3,15e3),JC="__/auth/iframe",XC="emulator/auth/iframe",ZC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,XC):`https://${t.config.authDomain}/${JC}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=ek.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jo(r).slice(1)}`}async function nk(t){const e=await QC(t),n=dn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:tk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},YC.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ik=600,ok="_blank",ak="http://localhost";class hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(t,e,n,r=sk,s=ik){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...rk,width:r.toString(),height:s.toString(),top:i,left:o},c=st().toLowerCase();n&&(l=mw(c)?ok:n),fw(c)&&(e=e||ak,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,A])=>`${g}${S}=${A},`,"");if(xA(c)&&l!=="_self")return uk(e||"",l),new hy(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new hy(m)}function uk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ck="__/auth/handler",dk="emulator/auth/handler",hk=encodeURIComponent("fac");async function fy(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof Nw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ta){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${hk}=${encodeURIComponent(u)}`:"";return`${fk(t)}?${Jo(l).slice(1)}${c}`}function fk({config:t}){return t.emulator?Mf(t,dk):`https://${t.authDomain}/${ck}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bw,this._completeRedirectFn=MC,this._overrideRedirectResult=jC}async _openPopup(e,n,r,s){var o;jn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await fy(e,n,r,yh(),s);return lk(e,i,$f())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fy(e,n,r,yh(),s);return yC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nk(e),r=new UC(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Zc];i!==void 0&&n(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ew()||pw()||Uf()}}const mk=pk;var py="@firebase/auth",my="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vk(t){ai(new as("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ww(t)},c=new jA(r,s,i,u);return WA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new as("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new gk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(py,my,yk(t)),vr(py,my,"esm2020")}/**
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
 */const _k=5*60,Ek=JE("authIdTokenMaxAge")||_k;let gy=null;const wk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ek)return;const s=n==null?void 0:n.token;gy!==s&&(gy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tk(t=nw()){const e=Of(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qA(t,{popupRedirectResolver:mk,persistence:[AC,pC,bw]}),r=JE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wk(i.toString());uC(n,o,()=>o(n.currentUser)),lC(n,l=>o(l))}}const s=QE("auth");return s&&HA(n,`http://${s}`),n}function Ik(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}OA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ik().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vk("Browser");var Sk="firebase",Nk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(Sk,Nk,"app");var yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,Fw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function y(){}y.prototype=v.prototype,E.F=v.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(N,k,x){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return v.prototype[k].apply(N,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,y){y||(y=0);const N=Array(16);if(typeof v=="string")for(var k=0;k<16;++k)N[k]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(k=0;k<16;++k)N[k]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=E.g[0],y=E.g[1],k=E.g[2];let x=E.g[3],I;I=v+(x^y&(k^x))+N[0]+3614090360&4294967295,v=y+(I<<7&4294967295|I>>>25),I=x+(k^v&(y^k))+N[1]+3905402710&4294967295,x=v+(I<<12&4294967295|I>>>20),I=k+(y^x&(v^y))+N[2]+606105819&4294967295,k=x+(I<<17&4294967295|I>>>15),I=y+(v^k&(x^v))+N[3]+3250441966&4294967295,y=k+(I<<22&4294967295|I>>>10),I=v+(x^y&(k^x))+N[4]+4118548399&4294967295,v=y+(I<<7&4294967295|I>>>25),I=x+(k^v&(y^k))+N[5]+1200080426&4294967295,x=v+(I<<12&4294967295|I>>>20),I=k+(y^x&(v^y))+N[6]+2821735955&4294967295,k=x+(I<<17&4294967295|I>>>15),I=y+(v^k&(x^v))+N[7]+4249261313&4294967295,y=k+(I<<22&4294967295|I>>>10),I=v+(x^y&(k^x))+N[8]+1770035416&4294967295,v=y+(I<<7&4294967295|I>>>25),I=x+(k^v&(y^k))+N[9]+2336552879&4294967295,x=v+(I<<12&4294967295|I>>>20),I=k+(y^x&(v^y))+N[10]+4294925233&4294967295,k=x+(I<<17&4294967295|I>>>15),I=y+(v^k&(x^v))+N[11]+2304563134&4294967295,y=k+(I<<22&4294967295|I>>>10),I=v+(x^y&(k^x))+N[12]+1804603682&4294967295,v=y+(I<<7&4294967295|I>>>25),I=x+(k^v&(y^k))+N[13]+4254626195&4294967295,x=v+(I<<12&4294967295|I>>>20),I=k+(y^x&(v^y))+N[14]+2792965006&4294967295,k=x+(I<<17&4294967295|I>>>15),I=y+(v^k&(x^v))+N[15]+1236535329&4294967295,y=k+(I<<22&4294967295|I>>>10),I=v+(k^x&(y^k))+N[1]+4129170786&4294967295,v=y+(I<<5&4294967295|I>>>27),I=x+(y^k&(v^y))+N[6]+3225465664&4294967295,x=v+(I<<9&4294967295|I>>>23),I=k+(v^y&(x^v))+N[11]+643717713&4294967295,k=x+(I<<14&4294967295|I>>>18),I=y+(x^v&(k^x))+N[0]+3921069994&4294967295,y=k+(I<<20&4294967295|I>>>12),I=v+(k^x&(y^k))+N[5]+3593408605&4294967295,v=y+(I<<5&4294967295|I>>>27),I=x+(y^k&(v^y))+N[10]+38016083&4294967295,x=v+(I<<9&4294967295|I>>>23),I=k+(v^y&(x^v))+N[15]+3634488961&4294967295,k=x+(I<<14&4294967295|I>>>18),I=y+(x^v&(k^x))+N[4]+3889429448&4294967295,y=k+(I<<20&4294967295|I>>>12),I=v+(k^x&(y^k))+N[9]+568446438&4294967295,v=y+(I<<5&4294967295|I>>>27),I=x+(y^k&(v^y))+N[14]+3275163606&4294967295,x=v+(I<<9&4294967295|I>>>23),I=k+(v^y&(x^v))+N[3]+4107603335&4294967295,k=x+(I<<14&4294967295|I>>>18),I=y+(x^v&(k^x))+N[8]+1163531501&4294967295,y=k+(I<<20&4294967295|I>>>12),I=v+(k^x&(y^k))+N[13]+2850285829&4294967295,v=y+(I<<5&4294967295|I>>>27),I=x+(y^k&(v^y))+N[2]+4243563512&4294967295,x=v+(I<<9&4294967295|I>>>23),I=k+(v^y&(x^v))+N[7]+1735328473&4294967295,k=x+(I<<14&4294967295|I>>>18),I=y+(x^v&(k^x))+N[12]+2368359562&4294967295,y=k+(I<<20&4294967295|I>>>12),I=v+(y^k^x)+N[5]+4294588738&4294967295,v=y+(I<<4&4294967295|I>>>28),I=x+(v^y^k)+N[8]+2272392833&4294967295,x=v+(I<<11&4294967295|I>>>21),I=k+(x^v^y)+N[11]+1839030562&4294967295,k=x+(I<<16&4294967295|I>>>16),I=y+(k^x^v)+N[14]+4259657740&4294967295,y=k+(I<<23&4294967295|I>>>9),I=v+(y^k^x)+N[1]+2763975236&4294967295,v=y+(I<<4&4294967295|I>>>28),I=x+(v^y^k)+N[4]+1272893353&4294967295,x=v+(I<<11&4294967295|I>>>21),I=k+(x^v^y)+N[7]+4139469664&4294967295,k=x+(I<<16&4294967295|I>>>16),I=y+(k^x^v)+N[10]+3200236656&4294967295,y=k+(I<<23&4294967295|I>>>9),I=v+(y^k^x)+N[13]+681279174&4294967295,v=y+(I<<4&4294967295|I>>>28),I=x+(v^y^k)+N[0]+3936430074&4294967295,x=v+(I<<11&4294967295|I>>>21),I=k+(x^v^y)+N[3]+3572445317&4294967295,k=x+(I<<16&4294967295|I>>>16),I=y+(k^x^v)+N[6]+76029189&4294967295,y=k+(I<<23&4294967295|I>>>9),I=v+(y^k^x)+N[9]+3654602809&4294967295,v=y+(I<<4&4294967295|I>>>28),I=x+(v^y^k)+N[12]+3873151461&4294967295,x=v+(I<<11&4294967295|I>>>21),I=k+(x^v^y)+N[15]+530742520&4294967295,k=x+(I<<16&4294967295|I>>>16),I=y+(k^x^v)+N[2]+3299628645&4294967295,y=k+(I<<23&4294967295|I>>>9),I=v+(k^(y|~x))+N[0]+4096336452&4294967295,v=y+(I<<6&4294967295|I>>>26),I=x+(y^(v|~k))+N[7]+1126891415&4294967295,x=v+(I<<10&4294967295|I>>>22),I=k+(v^(x|~y))+N[14]+2878612391&4294967295,k=x+(I<<15&4294967295|I>>>17),I=y+(x^(k|~v))+N[5]+4237533241&4294967295,y=k+(I<<21&4294967295|I>>>11),I=v+(k^(y|~x))+N[12]+1700485571&4294967295,v=y+(I<<6&4294967295|I>>>26),I=x+(y^(v|~k))+N[3]+2399980690&4294967295,x=v+(I<<10&4294967295|I>>>22),I=k+(v^(x|~y))+N[10]+4293915773&4294967295,k=x+(I<<15&4294967295|I>>>17),I=y+(x^(k|~v))+N[1]+2240044497&4294967295,y=k+(I<<21&4294967295|I>>>11),I=v+(k^(y|~x))+N[8]+1873313359&4294967295,v=y+(I<<6&4294967295|I>>>26),I=x+(y^(v|~k))+N[15]+4264355552&4294967295,x=v+(I<<10&4294967295|I>>>22),I=k+(v^(x|~y))+N[6]+2734768916&4294967295,k=x+(I<<15&4294967295|I>>>17),I=y+(x^(k|~v))+N[13]+1309151649&4294967295,y=k+(I<<21&4294967295|I>>>11),I=v+(k^(y|~x))+N[4]+4149444226&4294967295,v=y+(I<<6&4294967295|I>>>26),I=x+(y^(v|~k))+N[11]+3174756917&4294967295,x=v+(I<<10&4294967295|I>>>22),I=k+(v^(x|~y))+N[2]+718787259&4294967295,k=x+(I<<15&4294967295|I>>>17),I=y+(x^(k|~v))+N[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const y=v-this.blockSize,N=this.C;let k=this.h,x=0;for(;x<v;){if(k==0)for(;x<=y;)s(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(N[k++]=E.charCodeAt(x++),k==this.blockSize){s(this,N),k=0;break}}else for(;x<v;)if(N[k++]=E[x++],k==this.blockSize){s(this,N),k=0;break}}this.h=k,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,y=0;y<4;++y)for(let N=0;N<32;N+=8)E[v++]=this.g[y]>>>N&255;return E};function i(E,v){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=v(E)}function o(E,v){this.h=v;const y=[];let N=!0;for(let k=E.length-1;k>=0;k--){const x=E[k]|0;N&&x==v||(y[k]=x,N=!1)}this.g=y}var l={};function u(E){return-128<=E&&E<128?i(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return b(c(-E));const v=[];let y=1;for(let N=0;E>=y;N++)v[N]=E/y|0,y*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return b(f(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=c(Math.pow(v,8));let N=m;for(let x=0;x<E.length;x+=8){var k=Math.min(8,E.length-x);const I=parseInt(E.substring(x,x+k),v);k<8?(k=c(Math.pow(v,k)),N=N.j(k).add(c(I))):(N=N.j(y),N=N.add(c(I)))}return N}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();let E=0,v=1;for(let y=0;y<this.g.length;y++){const N=this.i(y);E+=(N>=0?N:4294967296+N)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(P(this))return"-"+b(this).toString(E);const v=c(Math.pow(E,6));var y=this;let N="";for(;;){const k=V(y,v).g;y=C(y,k.j(v));let x=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=k,A(y))return x+N;for(;x.length<6;)x="0"+x;N=x+N}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=C(this,E),P(E)?-1:A(E)?0:1};function b(E){const v=E.g.length,y=[];for(let N=0;N<v;N++)y[N]=~E.g[N];return new o(y,~E.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),y=[];let N=0;for(let k=0;k<=v;k++){let x=N+(this.i(k)&65535)+(E.i(k)&65535),I=(x>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);N=I>>>16,x&=65535,I&=65535,y[k]=I<<16|x}return new o(y,y[y.length-1]&-2147483648?-1:0)};function C(E,v){return E.add(b(v))}t.j=function(E){if(A(this)||A(E))return m;if(P(this))return P(E)?b(this).j(b(E)):b(b(this).j(E));if(P(E))return b(this.j(b(E)));if(this.l(S)<0&&E.l(S)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,y=[];for(var N=0;N<2*v;N++)y[N]=0;for(N=0;N<this.g.length;N++)for(let k=0;k<E.g.length;k++){const x=this.i(N)>>>16,I=this.i(N)&65535,de=E.i(k)>>>16,xt=E.i(k)&65535;y[2*N+2*k]+=I*xt,w(y,2*N+2*k),y[2*N+2*k+1]+=x*xt,w(y,2*N+2*k+1),y[2*N+2*k+1]+=I*de,w(y,2*N+2*k+1),y[2*N+2*k+2]+=x*de,w(y,2*N+2*k+2)}for(E=0;E<v;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=v;E<2*v;E++)y[E]=0;return new o(y,0)};function w(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function T(E,v){this.g=E,this.h=v}function V(E,v){if(A(v))throw Error("division by zero");if(A(E))return new T(m,m);if(P(E))return v=V(b(E),v),new T(b(v.g),b(v.h));if(P(v))return v=V(E,b(v)),new T(b(v.g),v.h);if(E.g.length>30){if(P(E)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,N=v;N.l(E)<=0;)y=R(y),N=R(N);var k=L(y,1),x=L(N,1);for(N=L(N,2),y=L(y,2);!A(N);){var I=x.add(N);I.l(E)<=0&&(k=k.add(y),x=I),N=L(N,1),y=L(y,1)}return v=C(E,k.j(v)),new T(k,v)}for(k=m;E.l(v)>=0;){for(y=Math.max(1,Math.floor(E.m()/v.m())),N=Math.ceil(Math.log(y)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),x=c(y),I=x.j(v);P(I)||I.l(E)>0;)y-=N,x=c(y),I=x.j(v);A(x)&&(x=g),k=k.add(x),E=C(E,I)}return new T(k,E)}t.B=function(E){return V(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),y=[];for(let N=0;N<v;N++)y[N]=this.i(N)&E.i(N);return new o(y,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),y=[];for(let N=0;N<v;N++)y[N]=this.i(N)|E.i(N);return new o(y,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),y=[];for(let N=0;N<v;N++)y[N]=this.i(N)^E.i(N);return new o(y,this.h^E.h)};function R(E){const v=E.g.length+1,y=[];for(let N=0;N<v;N++)y[N]=E.i(N)<<1|E.i(N-1)>>>31;return new o(y,E.h)}function L(E,v){const y=v>>5;v%=32;const N=E.g.length-y,k=[];for(let x=0;x<N;x++)k[x]=v>0?E.i(x+y)>>>v|E.i(x+y+1)<<32-v:E.i(x+y);return new o(k,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Fw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,_r=o}).apply(typeof yy<"u"?yy:typeof self<"u"?self:typeof window<"u"?window:{});var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uw,to,zw,gl,wh,Bw,$w,qw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ba=="object"&&Ba];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,O){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return h.prototype[D].apply(_,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function A(a,h){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const O=D.length||0;a.length=p+O;for(let z=0;z<O;z++)a[p+z]=D[z]}else a.push(D)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function C(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,p){const _=T.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var T=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let R,L=!1,E=new w,v=()=>{const a=Promise.resolve(void 0);R=()=>{a.then(y)}};function y(){for(var a;a=C();){try{a.h.call(a.g)}catch(p){b(p)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}L=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function de(a,h){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(de,k),de.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),q=0;function ot(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++q,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ve(a){const h={};for(const p in a)h[p]=a[p];return h}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mr(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let O=0;O<Ce.length;O++)p=Ce[O],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function Rt(a){this.src=a,this.g={},this.h=0}Rt.prototype.add=function(a,h,p,_,D){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const z=Ut(a,h,_,D);return z>-1?(h=a[z],p||(h.fa=!1)):(h=new ot(h,this.src,O,!!_,D),h.fa=p,a.push(h)),h};function Fr(a,h){const p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(_,D,1),O&&(B(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ut(a,h,p,_){for(let D=0;D<a.length;++D){const O=a[D];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==_)return D}return-1}var $n="closure_lm_"+(Math.random()*1e6|0),ec={};function jp(a,h,p,_,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)jp(a,h[O],p,_,D);return null}return p=Mp(p),a&&a[xt]?a.J(h,p,l(_)?!!_.capture:!1,D):C0(a,h,p,!1,_,D)}function C0(a,h,p,_,D,O){if(!h)throw Error("Invalid event type");const z=l(D)?!!D.capture:!!D;let ee=nc(a);if(ee||(a[$n]=ee=new Rt(a)),p=ee.add(h,p,_,z,O),p.proxy)return p;if(_=k0(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)x||(D=z),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(Lp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function k0(){function a(p){return h.call(a.src,a.listener,p)}const h=x0;return a}function Op(a,h,p,_,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)Op(a,h[O],p,_,D);else _=l(_)?!!_.capture:!!_,p=Mp(p),a&&a[xt]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],p=Ut(h,p,_,D),p>-1&&(B(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ut(h,p,_,D)),(p=a>-1?h[a]:null)&&tc(p))}function tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[xt])Fr(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Lp(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=nc(h))?(Fr(p,a),p.h==0&&(p.src=null,h[$n]=null)):B(a)}}}function Lp(a){return a in ec?ec[a]:ec[a]="on"+a}function x0(a,h){if(a.da)a=!0;else{h=new de(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&tc(a),a=p.call(_,h)}return a}function nc(a){return a=a[$n],a instanceof Rt?a:null}var rc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mp(a){return typeof a=="function"?a:(a[rc]||(a[rc]=function(h){return a.handleEvent(h)}),a[rc])}function Ye(){N.call(this),this.i=new Rt(this),this.M=this,this.G=null}m(Ye,N),Ye.prototype[xt]=!0,Ye.prototype.removeEventListener=function(a,h,p,_){Op(this,a,h,p,_)};function at(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new k(h,a);else if(h instanceof k)h.target=h.target||a;else{var D=h;h=new k(_,a),Mr(h,D)}D=!0;let O,z;if(p)for(z=p.length-1;z>=0;z--)O=h.g=p[z],D=ha(O,_,!0,h)&&D;if(O=h.g=a,D=ha(O,_,!0,h)&&D,D=ha(O,_,!1,h)&&D,p)for(z=0;z<p.length;z++)O=h.g=p[z],D=ha(O,_,!1,h)&&D}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)B(p[_]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},Ye.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function ha(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const z=h[O];if(z&&!z.da&&z.capture==p){const ee=z.listener,je=z.ha||z.src;z.fa&&Fr(a.i,z),D=ee.call(je,_)!==!1&&D}}return D&&!_.defaultPrevented}function R0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Fp(a){a.g=R0(()=>{a.g=null,a.i&&(a.i=!1,Fp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class P0 extends N{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){N.call(this),this.h=a,this.g={}}m(Si,N);var Up=[];function zp(a){Y(a.g,function(h,p){this.g.hasOwnProperty(p)&&tc(h)},a),a.g={}}Si.prototype.N=function(){Si.Z.N.call(this),zp(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sc=o.JSON.stringify,b0=o.JSON.parse,D0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bp(){}function $p(){}var Ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ic(){k.call(this,"d")}m(ic,k);function oc(){k.call(this,"c")}m(oc,k);var Ur={},qp=null;function fa(){return qp=qp||new Ye}Ur.Ia="serverreachability";function Wp(a){k.call(this,Ur.Ia,a)}m(Wp,k);function Ai(a){const h=fa();at(h,new Wp(h))}Ur.STAT_EVENT="statevent";function Hp(a,h){k.call(this,Ur.STAT_EVENT,a),this.stat=h}m(Hp,k);function lt(a){const h=fa();at(h,new Hp(h,a))}Ur.Ja="timingevent";function Gp(a,h){k.call(this,Ur.Ja,a),this.size=h}m(Gp,k);function Ci(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ki(){this.g=!0}ki.prototype.ua=function(){this.g=!1};function V0(a,h,p,_,D,O){a.info(function(){if(a.g)if(O){var z="",ee=O.split("&");for(let ce=0;ce<ee.length;ce++){var je=ee[ce].split("=");if(je.length>1){const Ue=je[0];je=je[1];const nn=Ue.split("_");z=nn.length>=2&&nn[1]=="type"?z+(Ue+"="+je+"&"):z+(Ue+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+z})}function j0(a,h,p,_,D,O,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+O+" "+z})}function Es(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+L0(a,p)+(_?" "+_:"")})}function O0(a,h){a.info(function(){return"TIMEOUT: "+h})}ki.prototype.info=function(){};function L0(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var p=O[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return sc(O)}catch{return h}}var pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qp;function ac(){}m(ac,Bp),ac.prototype.g=function(){return new XMLHttpRequest},Qp=new ac;function xi(a){return encodeURIComponent(String(a))}function M0(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function qn(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new Si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Jp={},lc={};function uc(a,h,p){a.M=1,a.A=ga(tn(h)),a.u=p,a.R=!0,Xp(a,null)}function Xp(a,h){a.F=Date.now(),ma(a),a.B=tn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),dm(p.i,"t",_),a.C=0,p=a.j.L,a.h=new Yp,a.g=xm(a.j,p?h:null,!a.u),a.P>0&&(a.O=new P0(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Up[0]=D.toString()),D=Up);for(let O=0;O<D.length;O++){const z=jp(p,D[O],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?ve(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ai(),V0(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Gn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Gn(this.g),je=this.g.ya(),ce=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||vm(this.g)))){this.K||ee!=4||je==7||(je==8||ce<=0?Ai(3):Ai(2)),cc(this);var h=this.g.ca();this.X=h;var p=F0(this);if(this.o=h==200,j0(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_)){var O=_;break t}}O=null}if(a=O)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dc(this,a);else{this.o=!1,this.m=3,lt(12),zr(this),Ri(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<p.length;)if(Ue=U0(this,p),Ue==lc){ee==4&&(this.m=4,lt(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Jp){this.m=4,lt(15),Es(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,Ue,null),dc(this,Ue);if(Zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,p,"[Invalid Chunked Response]"),zr(this),Ri(this);else if(p.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),_c(z),z.P=!0,lt(11))}}else Es(this.i,this.l,p,null),dc(this,p);ee==4&&zr(this),this.o&&!this.K&&(ee==4?Nm(this.j,this):(this.o=!1,ma(this)))}else eI(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),zr(this),Ri(this)}}}catch{}finally{}};function F0(a){if(!Zp(a))return a.g.la();const h=vm(a.g);if(h==="")return"";let p="";const _=h.length,D=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zr(a),Ri(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<_;O++)a.h.h=!0,p+=a.h.i.decode(h[O],{stream:!(D&&O==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Zp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function U0(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?lc:(p=Number(h.substring(p,_)),isNaN(p)?Jp:(_+=1,_+p>h.length?lc:(h=h.slice(_,_+p),a.C=_+p,h)))}qn.prototype.cancel=function(){this.K=!0,zr(this)};function ma(a){a.T=Date.now()+a.H,em(a,a.H)}function em(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ci(c(a.aa,a),h)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(O0(this.i,this.B),this.M!=2&&(Ai(),lt(17)),zr(this),this.m=2,Ri(this)):em(this,this.T-a)};function Ri(a){a.j.I==0||a.K||Nm(a.j,a)}function zr(a){cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,zp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function dc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||hc(p.h,a))){if(!a.L&&hc(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)wa(p),_a(p);else break e;vc(p),lt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ci(c(p.Va,p),6e3));rm(p.h)<=1&&p.ta&&(p.ta=void 0)}else $r(p,11)}else if((a.L||p.g==a)&&wa(p),!I(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let ce=D[h];const Ue=ce[0];if(!(Ue<=p.K))if(p.K=Ue,ce=ce[1],p.I==2)if(ce[0]=="c"){p.M=ce[1],p.ba=ce[2];const nn=ce[3];nn!=null&&(p.ka=nn,p.j.info("VER="+p.ka));const qr=ce[4];qr!=null&&(p.za=qr,p.j.info("SVER="+p.za));const Kn=ce[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(_=1.5*Kn,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Qn=a.g;if(Qn){const Ia=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var O=_.h;O.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(fc(O,O.h),O.h=null))}if(_.G){const Ec=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(_.wa=Ec,pe(_.J,_.G,Ec))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var z=a;if(_.na=km(_,_.L?_.ba:null,_.W),z.L){sm(_.h,z);var ee=z,je=_.O;je&&(ee.H=je),ee.D&&(cc(ee),ma(ee)),_.g=z}else Im(_);p.i.length>0&&Ea(p)}else ce[0]!="stop"&&ce[0]!="close"||$r(p,7);else p.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?$r(p,7):yc(p):ce[0]!="noop"&&p.l&&p.l.qa(ce),p.A=0)}}Ai(4)}catch{}}var z0=class{constructor(a,h){this.g=a,this.map=h}};function tm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rm(a){return a.h?1:a.g?a.g.size:0}function hc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fc(a,h){a.g?a.g.add(h):a.h=h}function sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tm.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return S(a.i)}var om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B0(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,O=null;_>=0?(D=a[p].substring(0,_),O=a[p].substring(_+1)):D=a[p],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wn?(this.l=a.l,Pi(this,a.j),this.o=a.o,this.g=a.g,bi(this,a.u),this.h=a.h,pc(this,hm(a.i)),this.m=a.m):a&&(h=String(a).match(om))?(this.l=!1,Pi(this,h[1]||"",!0),this.o=Di(h[2]||""),this.g=Di(h[3]||"",!0),bi(this,h[4]),this.h=Di(h[5]||"",!0),pc(this,h[6]||"",!0),this.m=Di(h[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}Wn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Vi(h,am,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vi(h,am,!0),"@"),a.push(xi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Vi(p,p.charAt(0)=="/"?W0:q0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Vi(p,G0)),a.join("")},Wn.prototype.resolve=function(a){const h=tn(this);let p=!!a.j;p?Pi(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)bi(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=h.h.lastIndexOf("/");D!=-1&&(_=h.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let z=0;z<D.length;){const ee=D[z++];ee=="."?_&&z==D.length&&O.push(""):ee==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),_&&z==D.length&&O.push("")):(O.push(ee),_=!0)}_=O.join("/")}else _=D}return p?h.h=_:p=a.i.toString()!=="",p?pc(h,hm(a.i)):p=!!a.m,p&&(h.m=a.m),h};function tn(a){return new Wn(a)}function Pi(a,h,p){a.j=p?Di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function pc(a,h,p){h instanceof ji?(a.i=h,K0(a.i,a.l)):(p||(h=Vi(h,H0)),a.i=new ji(h,a.l))}function pe(a,h,p){a.i.set(h,p)}function ga(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,$0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var am=/[#\/\?@]/g,q0=/[#\?:]/g,W0=/[#\?]/g,H0=/[#\?@]/g,G0=/#/g;function ji(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&B0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ji.prototype,t.add=function(a,h){Br(this),this.i=null,a=ws(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function lm(a,h){Br(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function um(a,h){return Br(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)};function cm(a,h){Br(a);let p=[];if(typeof h=="string")um(a,h)&&(p=p.concat(a.g.get(ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Br(this),this.i=null,a=ws(this,a),um(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=cm(this,a),a.length>0?String(a[0]):h):h};function dm(a,h,p){lm(a,h),p.length>0&&(a.i=null,a.g.set(ws(a,h),S(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const D=xi(p);p=cm(this,p);for(let O=0;O<p.length;O++){let z=D;p[O]!==""&&(z+="="+xi(p[O])),a.push(z)}}return this.i=a.join("&")};function hm(a){const h=new ji;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function K0(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(lm(this,_),dm(this,D,p))},a)),a.j=h}function Q0(a,h){const p=new ki;if(o.Image){const _=new Image;_.onload=f(Hn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Hn,p,"TestLoadImage: error",!1,h,_),_.onabort=f(Hn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Hn,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Y0(a,h){const p=new ki,_=new AbortController,D=setTimeout(()=>{_.abort(),Hn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(D),O.ok?Hn(p,"TestPingServer: ok",!0,h):Hn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Hn(p,"TestPingServer: error",!1,h)})}function Hn(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function J0(){this.g=new D0}function mc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(mc,Bp),mc.prototype.g=function(){return new ya(this.i,this.h)};function ya(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ya,Ye),t=ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Oi(this):Li(this),this.readyState==3&&fm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Oi(this))},t.Na=function(a){this.g&&(this.response=a,Oi(this))},t.ga=function(){this.g&&Oi(this)};function Oi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Li(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pm(a){let h="";return Y(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function gc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=pm(p),typeof a=="string"?p!=null&&xi(p):pe(a,h,p))}function Se(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Ye);var X0=/^https?$/i,Z0=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){mm(this,O);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Z0,h,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){mm(this,O)}};function mm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gm(a),va(a)}function gm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ym(this):this.Xa())},t.Xa=function(){ym(this)};function ym(a){if(a.h&&typeof i<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=O===0){let z=String(a.D).match(om)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!X0.test(z?z.toLowerCase():"")}p=_}if(p)at(a,"complete"),at(a,"success");else{a.o=6;try{var D=Gn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",gm(a)}}finally{va(a)}}}}function va(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||at(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),b0(h)}};function vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eI(a){const h={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(I(a[_]))continue;var p=M0(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[D]||[];h[D]=O,O.push(p)}Z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function _m(a){this.za=0,this.i=[],this.j=new ki,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mi("baseRetryDelayMs",5e3,a),this.Za=Mi("retryDelaySeedMs",1e4,a),this.Ta=Mi("forwardChannelMaxRetries",2,a),this.va=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tm(a&&a.concurrentRequestLimit),this.Ba=new J0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=_m.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){lt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=km(this,null,this.W),Ea(this)};function yc(a){if(Em(a),a.I==3){var h=a.V++,p=tn(a.J);if(pe(p,"SID",a.M),pe(p,"RID",h),pe(p,"TYPE","terminate"),Fi(a,p),h=new qn(a,a.j,h),h.M=2,h.A=ga(tn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=xm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ma(h)}Cm(a)}function _a(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Em(a){_a(a),a.v&&(o.clearTimeout(a.v),a.v=null),wa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ea(a){if(!nm(a.h)&&!a.m){a.m=!0;var h=a.Ea;R||v(),L||(R(),L=!0),E.add(h,a),a.D=0}}function tI(a,h){return rm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ci(c(a.Ea,a,h),Am(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new qn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ve(O),Mr(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Tm(this,D,h),p=tn(this.J),pe(p,"RID",a),pe(p,"CVER",22),this.G&&pe(p,"X-HTTP-Session-Id",this.G),Fi(this,p),O&&(this.R?h="headers="+xi(pm(O))+"&"+h:this.u&&gc(p,this.u,O)),fc(this.h,D),this.Ra&&pe(p,"TYPE","init"),this.S?(pe(p,"$req",h),pe(p,"SID","null"),D.U=!0,uc(D,p,null)):uc(D,p,h),this.I=2}}else this.I==3&&(a?wm(this,a):this.i.length==0||nm(this.h)||wm(this))};function wm(a,h){var p;h?p=h.l:p=a.V++;const _=tn(a.J);pe(_,"SID",a.M),pe(_,"RID",p),pe(_,"AID",a.K),Fi(a,_),a.u&&a.o&&gc(_,a.u,a.o),p=new qn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fc(a.h,p),uc(p,_,h)}function Fi(a,h){a.H&&Y(a.H,function(p,_){pe(h,_,p)}),a.l&&Y({},function(p,_){pe(h,_,p)})}function Tm(a,h,p){p=Math.min(a.i.length,p);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const je=["count="+p];ee==-1?p>0?(ee=D[0].g,je.push("ofs="+ee)):ee=0:je.push("ofs="+ee);let ce=!0;for(let Ue=0;Ue<p;Ue++){var O=D[Ue].g;const nn=D[Ue].map;if(O-=ee,O<0)ee=Math.max(0,D[Ue].g-100),ce=!1;else try{O="req"+O+"_"||"";try{var z=nn instanceof Map?nn:Object.entries(nn);for(const[qr,Kn]of z){let Qn=Kn;l(Kn)&&(Qn=sc(Kn)),je.push(O+qr+"="+encodeURIComponent(Qn))}}catch(qr){throw je.push(O+"type="+encodeURIComponent("_badmap")),qr}}catch{_&&_(nn)}}if(ce){z=je.join("&");break e}}z=void 0}return a=a.i.splice(0,p),h.G=a,z}function Im(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;R||v(),L||(R(),L=!0),E.add(h,a),a.A=0}}function vc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ci(c(a.Da,a),Am(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Sm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ci(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),_a(this),Sm(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sm(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tn(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),Fi(a,h),a.u&&a.o&&gc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ga(tn(h)),p.u=null,p.R=!0,Xp(p,a)}t.Va=function(){this.C!=null&&(this.C=null,_a(this),vc(this),lt(19))};function wa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Nm(a,h){var p=null;if(a.g==h){wa(a),_c(a),a.g=null;var _=2}else if(hc(a.h,h))p=h.G,sm(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;_=fa(),at(_,new Gp(_,p)),Ea(a)}else Im(a);else if(D=h.m,D==3||D==0&&h.X>0||!(_==1&&tI(a,h)||_==2&&vc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Am(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),_=a.Ua;const D=!_;_=new Wn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Pi(_,"https"),ga(_),D?Q0(_.toString(),p):Y0(_.toString(),p)}else lt(2);a.I=0,a.l&&a.l.pa(h),Cm(a),Em(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Cm(a){if(a.I=0,a.ja=[],a.l){const h=im(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function km(a,h,p){var _=p instanceof Wn?tn(p):new Wn(p);if(_.g!="")h&&(_.g=h+"."+_.g),bi(_,_.u);else{var D=o.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new Wn(null);_&&Pi(O,_),h&&(O.g=h),D&&bi(O,D),p&&(O.h=p),_=O}return p=a.G,h=a.wa,p&&h&&pe(_,p,h),pe(_,"VER",a.ka),Fi(a,_),_}function xm(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new mc({ab:p})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rm(){}t=Rm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ta(){}Ta.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Ye.call(this),this.g=new _m(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}m(wt,Ye),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){yc(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=sc(a),a=p);h.i.push(new z0(h.Ya++,a)),h.I==3&&Ea(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,wt.Z.N.call(this)};function Pm(a){ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Pm,ic);function bm(){oc.call(this),this.status=1}m(bm,oc);function Ts(a){this.g=a}m(Ts,Rm),Ts.prototype.ra=function(){at(this.g,"a")},Ts.prototype.qa=function(a){at(this.g,new Pm(a))},Ts.prototype.pa=function(a){at(this.g,new bm)},Ts.prototype.oa=function(){at(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,qw=function(){return new Ta},$w=function(){return fa()},Bw=Ur,wh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,gl=pa,Kp.COMPLETE="complete",zw=Kp,$p.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,to=$p,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Uw=Se}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="12.13.0";function Ak(t){_i=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cs=new Vf("@firebase/firestore");function As(){return cs.logLevel}function W(t,...e){if(cs.logLevel<=se.DEBUG){const n=e.map(Wf);cs.debug(`Firestore (${_i}): ${t}`,...n)}}function On(t,...e){if(cs.logLevel<=se.ERROR){const n=e.map(Wf);cs.error(`Firestore (${_i}): ${t}`,...n)}}function ds(t,...e){if(cs.logLevel<=se.WARN){const n=e.map(Wf);cs.warn(`Firestore (${_i}): ${t}`,...n)}}function Wf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ww(t,r,n)}function Ww(t,e,n){let r=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function le(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ww(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class kk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new Hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class Rk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Pk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Rk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Th(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ed(s)===ed(i)?te(s,i):ed(s)?1:-1}return te(t.length,e.length)}const Vk=55296,jk=57343;function ed(t){const e=t.charCodeAt(0);return e>=Vk&&e<=jk}function li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):Th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class he extends on{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const Ok=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends on{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Ok.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_y}static keyField(){return new He([_y])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lk(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ey(t){if(!G.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wy(t){if(G.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function ra(t,e){if(!Kw(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=-62135596800,Iy=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Iy);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ty)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iy}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ra(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:De("string",ge._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ge(0,0))}static max(){return new J(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function Mk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Ir(s,G.empty(),e)}function Fk(t){return new Ir(t.readTime,t.key,Uo)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(J.min(),G.empty(),Uo)}static max(){return new Ir(J.max(),G.empty(),Uo)}}function Uk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==zk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $k(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=-1;function ju(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function qk(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="";function Wk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sy(e)),e=Hk(t.get(n),e);return Sy(e)}function Hk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Qw:n+="";break;default:n+=i}}return n}function Sy(t){return t+Qw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Jw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jw("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=Gk.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="server_timestamp",Zw="__type__",eT="__previous_value__",tT="__local_write_time__";function Kf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Zw])==null?void 0:r.stringValue)===Xw}function Ou(t){const e=t.mapValue.fields[eT];return Kf(e)?Ou(e):e}function zo(t){const e=Sr(t.mapValue.fields[tT].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const tu="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||tu}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===tu}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}function Qk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="__type__",Yk="__max__",qa={mapValue:{}},rT="__vector__",nu="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kf(t)?4:Xk(t)?9007199254740991:Jk(t)?10:11:Q(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?eu(o)===eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ny(o)!==Ny(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(zo(t),zo(e));case 5:return Th(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Nr(i),u=Nr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=te(l[c],u[c]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(ke(i.latitude),ke(o.latitude));return l!==0?l:te(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ky(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,S,A,P;const l=i.fields||{},u=o.fields||{},c=(g=l[nu])==null?void 0:g.arrayValue,f=(S=u[nu])==null?void 0:S.arrayValue,m=te(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:ky(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qa.mapValue&&o===qa.mapValue)return 0;if(i===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Th(u[m],f[m]);if(g!==0)return g;const S=ui(l[u[m]],c[f[m]]);if(S!==0)return S}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Sr(t),r=Sr(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function ky(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ui(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function ci(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ih(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ih(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function yl(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ou(t);return e?16+yl(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+yl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return jr(r.fields,(i,o)=>{s+=i.length+yl(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function xy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Ry(t){return!!t&&"nullValue"in t}function Py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vl(t){return!!t&&"mapValue"in t}function Jk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[nT])==null?void 0:r.stringValue)===rT}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function Xk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Yk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(go(this.value))}}function sT(t){const e=[];return jr(t.fields,(n,r)=>{const s=new He([n]);if(vl(r)){const i=sT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function by(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iT{}class be extends iT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tx(e,n,r):n==="array-contains"?new sx(e,r):n==="in"?new ix(e,r):n==="not-in"?new ox(e,r):n==="array-contains-any"?new ax(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nx(e,r):new rx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ui(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends iT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return oT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oT(t){return t.op==="and"}function aT(t){return ex(t)&&oT(t)}function ex(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Nh(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(aT(t))return t.filters.map(e=>Nh(e)).join(",");{const e=t.filters.map(n=>Nh(n)).join(",");return`${t.op}(${e})`}}function lT(t,e){return t instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&lT(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function uT(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(uT).join(" ,")+"}"}(t):"Filter"}class tx extends be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class nx extends be{constructor(e,n){super(e,"in",n),this.keys=cT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rx extends be{constructor(e,n){super(e,"not-in",n),this.keys=cT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class sx extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&$o(n.arrayValue,this.value)}}class ix extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class ox extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class ax extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class lx{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Vy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new lx(t,e,n,r,s,i,o)}function Yf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.Te=n}return e.Te}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dy(t.startAt,e.startAt)&&Dy(t.endAt,e.endAt)}function Ah(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ux(t,e,n,r,s,i,o,l){return new Ti(t,e,n,r,s,i,o,l)}function Lu(t){return new Ti(t)}function jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cx(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function dT(t){return t.collectionGroup!==null}function yo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new qo(i,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new qo(He.keyField(),r))}return e.Ie}function hn(t){const e=X(t);return e.Ee||(e.Ee=dx(e,yo(t))),e.Ee}function dx(t,e){if(t.limitType==="F")return Vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return Vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ch(t,e){const n=t.filters.concat([e]);return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hx(t,e){const n=t.explicitOrderBy.concat([e]);return new Ti(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function kh(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return Jf(hn(t),hn(e))&&t.limitType===e.limitType}function hT(t){return`${Yf(hn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>uT(s)).join(", ")}]`),ju(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ci(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ci(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of yo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=by(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),s)||r.endAt&&!function(o,l,u){const c=by(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),s))}(t,e)}function fx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let r=!1;for(const s of yo(t)){const i=px(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function px(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?ui(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new Ee(G.comparator);function Ln(){return mx}const pT=new Ee(G.comparator);function no(...t){let e=pT;for(const n of t)e=e.insert(n.key,n);return e}function mT(t){let e=pT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return vo()}function gT(){return vo()}function vo(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const gx=new Ee(G.comparator),yx=new Me(G.comparator);function ne(...t){let e=yx;for(const n of t)e=e.add(n);return e}const vx=new Me(te);function _x(){return vx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function yT(t){return{integerValue:""+t}}function Ex(t,e){return qk(e)?yT(e):Xf(t,e)}/**
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
 */class Uu{constructor(){this._=void 0}}function wx(t,e,n){return t instanceof su?function(s,i){const o={fields:{[Zw]:{stringValue:Xw},[tT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kf(i)&&(i=Ou(i)),i&&(o.fields[eT]=i),{mapValue:o}}(n,e):t instanceof di?_T(t,e):t instanceof hi?ET(t,e):function(s,i){const o=vT(s,i),l=Oy(o)+Oy(s.Ae);return Sh(o)&&Sh(s.Ae)?yT(l):Xf(s.serializer,l)}(t,e)}function Tx(t,e,n){return t instanceof di?_T(t,e):t instanceof hi?ET(t,e):n}function vT(t,e){return t instanceof iu?function(r){return Sh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class su extends Uu{}class di extends Uu{constructor(e){super(),this.elements=e}}function _T(t,e){const n=wT(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends Uu{constructor(e){super(),this.elements=e}}function ET(t,e){let n=wT(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class iu extends Uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Oy(t){return ke(t.integerValue||t.doubleValue)}function wT(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){this.field=e,this.transform=n}}function Ix(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof hi&&s instanceof hi?li(r.elements,s.elements,mn):r instanceof iu&&s instanceof iu?mn(r.Ae,s.Ae):r instanceof su&&s instanceof su}(t.transform,e.transform)}class Sx{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function IT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zf(t.key,Lt.none()):new sa(t.key,t.data,Lt.none());{const n=t.data,r=mt.empty();let s=new Me(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Or(t.key,r,new St(s.toArray()),Lt.none())}}function Nx(t,e,n){t instanceof sa?function(s,i,o){const l=s.value.clone(),u=My(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(s,i,o){if(!_l(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=My(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ST(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof sa?function(i,o,l,u){if(!_l(i.precondition,o))return l;const c=i.value.clone(),f=Fy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,o,l,u){if(!_l(i.precondition,o))return l;const c=Fy(i.fieldTransforms,u,o),f=o.data;return f.setAll(ST(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return _l(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ax(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vT(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&li(r,s,(i,o)=>Ix(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends zu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends zu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ST(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function My(t,e,n){const r=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Tx(o,l,n[s]))}return r}function Fy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,wx(i,o,e))}return r}class Zf extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cx extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Nx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=IT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>Ly(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>Ly(n,r))}}class ep{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return gx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ep(e,n,r,s)}}/**
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
 */class xx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Rx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,oe;function Px(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function NT(t){if(t===void 0)return On("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=Re||(Re={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bx(){return new TextEncoder}/**
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
 */const Dx=new _r([4294967295,4294967295],0);function Uy(t){const e=bx().encode(t),n=new Fw;return n.update(e),new Uint8Array(n.digest())}function zy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class tp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(Dx)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Uy(e),[r,s]=zy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new tp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Uy(e),[r,s]=zy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ia(J.min(),s,new Ee(te),Ln(),ne())}}class oa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class AT{constructor(e,n){this.targetId=e,this.Ce=n}}class CT{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class By{constructor(){this.ve=0,this.Fe=$y(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new oa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=$y()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Vx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.Je=Wa(),this.He=Wa(),this.Ze=new Ee(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ah(i))if(r===0){const o=new G(i.path);this.et(n,o,nt.newNoDocument(o,J.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(u){if(u instanceof Jw)return ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tp(o,s,i)}catch(u){return ds(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ah(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ne();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ia(e,n,this.Ze,this.je,r);return this.je=Ln(),this.Je=Wa(),this.He=Wa(),this.Ze=new Ee(te),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new By,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Me(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new By),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Wa(){return new Ee(G.comparator)}function $y(){return new Ee(G.comparator)}const jx={asc:"ASCENDING",desc:"DESCENDING"},Ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lx={and:"AND",or:"OR"};class Mx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(t,e){return t.useProto3Json||ju(e)?e:{value:e}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fx(t,e){return ou(t,e.toTimestamp())}function fn(t){return le(!!t,49232),J.fromTimestamp(function(n){const r=Sr(n);return new ge(r.seconds,r.nanos)}(t))}function np(t,e){return Rh(t,e).canonicalString()}function Rh(t,e){const n=function(s){return new he(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xT(t){const e=he.fromString(t);return le(VT(e),10190,{key:e.toString()}),e}function Ph(t,e){return np(t.databaseId,e.path)}function td(t,e){const n=xT(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(PT(n))}function RT(t,e){return np(t.databaseId,e)}function Ux(t){const e=xT(t);return e.length===4?he.emptyPath():PT(e)}function bh(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PT(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qy(t,e,n){return{name:Ph(t,e),fields:n.value.mapValue.fields}}function zx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(le(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:NT(c.code);return new $(f,c.message||"")}(o);n=new CT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=td(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new El(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=td(t,r.document),i=r.readTime?fn(r.readTime):J.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new El([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=td(t,r.document),i=r.removedTargetIds||[];n=new El([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Rx(s,i),l=r.targetId;n=new AT(l,o)}}return n}function Bx(t,e){let n;if(e instanceof sa)n={update:qy(t,e.key,e.value)};else if(e instanceof Zf)n={delete:Ph(t,e.key)};else if(e instanceof Or)n={update:qy(t,e.key,e.data),updateMask:Jx(e.fieldMask)};else{if(!(e instanceof Cx))return Q(16599,{dt:e.type});n={verify:Ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof su)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof iu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function $x(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(J.min())&&(o=fn(i)),new Sx(o,s.transformResults||[])}(n,e))):[]}function qx(t,e){return{documents:[RT(t,e.path)]}}function Wx(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RT(t,s);const i=function(c){if(c.length!==0)return DT(Xt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ks(g.field),direction:Kx(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function Hx(t){let e=Ux(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=bT(m);return g instanceof Xt&&aT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new qo(xs(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ju(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new ru(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new ru(S,g)}(n.endAt)),ux(e,s,o,i,l,"F",u,c)}function Gx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(n.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>bT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function Kx(t){return jx[t]}function Qx(t){return Ox[t]}function Yx(t){return Lx[t]}function ks(t){return{fieldPath:t.canonicalString()}}function xs(t){return He.fromServerFormat(t.fieldPath)}function DT(t){return t instanceof be?function(n){if(n.op==="=="){if(Py(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Py(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:Qx(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>DT(s));return r.length===1?r[0]:{compositeFilter:{op:Yx(n.op),filters:r}}}(t):Q(54877,{filter:t})}function Jx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function jT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.yt=e}}function Zx(t){const e=Hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kh(e,e.limit,"L"):e}/**
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
 */class eR{constructor(){this.bn=new tR}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Ir.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class tR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(he.comparator)).toArray()}}/**
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
 */const Wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},OT=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(OT,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Cr(0)}static ar(){return new Cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="LruGarbageCollector",nR=1048576;function Gy([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class rR{constructor(e){this.Pr=e,this.buffer=new Me(Gy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Hy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?W(Hy,"Ignoring IndexedDB error during garbage collection: ",n):await Ei(n)}await this.Ar(3e5)})}}class iR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Vu.ce);const r=new rR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Wy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),As()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function oR(t,e){return new iR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,St.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=no();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Ln();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Or)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),_o(f.mutation,c,f.mutation.getFieldMask(),ge.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new lR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=vo();let s=new Ee((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=gT();f.forEach(g=>{if(!i.has(g)){const S=IT(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return cx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Jr());let l=Uo,u=i;return o.next(c=>F.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:mT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=no();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(m,g){return new Ti(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=no();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&_o(f.mutation,c,St.empty(),ge.now()),Fu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Zx(s.bundledQuery),readTime:fn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class dR{constructor(){this.overlays=new Ee(G.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Jr(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Jr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xx(n,r));let i=this.Lr.get(n);i===void 0&&(i=ne(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class hR{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.kr=new Me(ze.Kr),this.qr=new Me(ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new he([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new he([])),r=new ze(n,e),s=new ze(n,e+1);let i=ne();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(ze.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kx(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Gf:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(te);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new ze(new G(i),0);let l=new Me(te);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ze(n,0),s=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.ti=e,this.docs=function(){return new Ee(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Uk(Fk(f),r)<=0||(s.has(f.key)||Fu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mR(this)}getSize(e){return F.resolve(this.size)}}class mR extends aR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.persistence=e,this.ri=new gs(n=>Yf(n),Jf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new rp,this.targetCount=0,this.oi=Cr._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this._i={},this.overlays={},this.ai=new Vu(0),this.ui=!1,this.ui=!0,this.ci=new hR,this.referenceDelegate=e(this),this.li=new gR(this),this.indexManager=new eR,this.remoteDocumentCache=function(s){return new pR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Xx(n),this.Pi=new cR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new fR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new yR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class yR extends Bk{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new rp,this.Ai=null}static Vi(e){return new sp(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class au{constructor(e,n){this.persistence=e,this.fi=new gs(r=>Wk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=oR(this,n)}static Vi(e,n){return new au(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=yl(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ip(e,n.fromCache,r,s)}}/**
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
 */class vR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _R{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return WN()?8:$k(st())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(As()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(As()<=se.DEBUG&&W("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(As()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):F.resolve())}gs(e,n){if(jy(n))return F.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,kh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return jy(n)||s.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?F.resolve(null):(As()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.Ds(e,o,n,Mk(s,Uo)).next(l=>l))})}Ss(e,n){let r=new Me(fT(e));return n.forEach((s,i)=>{Fu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return As()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.fs.getDocumentsMatchingQuery(e,n,Ir.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="LocalStore",ER=3e8;class wR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ee(te),this.Fs=new gs(i=>Yf(i),Jf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function TR(t,e,n,r){return new wR(t,e,n,r)}async function MT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function IR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let S=F.resolve();return g.forEach(A=>{S=S.next(()=>f.getEntry(u,A)).next(P=>{const b=c.docVersions.get(A);le(b!==null,48541),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function FT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function SR(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(m,S),function(P,b,C){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ER?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,S,f)&&l.push(n.li.updateTargetData(i,S))});let u=Ln(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(NR(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function NR(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(op,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function AR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Dh(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;W(op,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ky(t,e,n){const r=X(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=X(u),g=m.Fs.get(f);return g!==void 0?F.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(kR(r,fx(e),l),{documents:l,ks:i})))}function kR(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Qy{constructor(){this.activeTargetIds=_x()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xR{constructor(){this.vo=new Qy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RR{Mo(e){}shutdown(){}}/**
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
 */const Yy="ConnectivityMonitor";class Jy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Yy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Yy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ha=null;function Vh(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="RestConnection",PR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===tu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Vh(),l=this.Qo(e,n.toUriEncodedString());W(nd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Xo(c);return this.zo(e,l,u,r,f).then(m=>(W(nd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ds(nd,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_i}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=PR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Ki=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xs extends bR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xs.c_){const e=$w();Ki(e,Bw.STAT_EVENT,n=>{n.stat===wh.PROXY?W(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===wh.NOPROXY&&W(Ze,"STAT_EVENT: detected no buffering proxy")}),Xs.c_=!0}}zo(e,n,r,s,i){const o=Vh();return new Promise((l,u)=>{const c=new Uw;c.setWithCredentials(!0),c.listenOnce(zw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gl.NO_ERROR:const m=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case gl.TIMEOUT:W(Ze,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case gl.HTTP_ERROR:const g=c.getStatus();if(W(Ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const A=S==null?void 0:S.error;if(A&&A.status&&A.message){const P=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(A.status);u(new $(P,A.message))}else u(new $(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W(Ze,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Vh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");W(Ze,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const S=new DR({Jo:A=>{g?W(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||(W(Ze,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),W(Ze,`RPC '${e}' stream ${s} sending:`,A),f.send(A))},Ho:()=>f.close()});return Ki(f,to.EventType.OPEN,()=>{g||(W(Ze,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Ki(f,to.EventType.CLOSE,()=>{g||(g=!0,W(Ze,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(f))}),Ki(f,to.EventType.ERROR,A=>{g||(g=!0,ds(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),S.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),Ki(f,to.EventType.MESSAGE,A=>{var P;if(!g){const b=A.data[0];le(!!b,16349);const C=b,w=(C==null?void 0:C.error)||((P=C[0])==null?void 0:P.error);if(w){W(Ze,`RPC '${e}' stream ${s} received error:`,w);const T=w.status;let V=function(E){const v=Re[E];if(v!==void 0)return NT(v)}(T),R=w.message;T==="NOT_FOUND"&&R.includes("database")&&R.includes("does not exist")&&R.includes(this.databaseId.database)&&ds(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=M.INTERNAL,R="Unknown error status: "+T+" with message "+w.message),g=!0,S.o_(new $(V,R)),f.close()}else W(Ze,`RPC '${e}' stream ${s} received:`,b),S.__(b)}}),Xs.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return qw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return new Xs(t)}function rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return new Mx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.c_=!1;class UT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="PersistentStream";class zT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new UT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Xy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Xy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jR extends zT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zx(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?fn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=bh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ah(u)?{documents:qx(i,u)}:{query:Wx(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kT(i,o.resumeToken);const c=xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ou(i,o.snapshotVersion.toTimestamp());const c=xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Gx(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=bh(this.serializer),n.removeTarget=e,this.K_(n)}}class OR extends zT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=$x(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Bx(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{}class MR extends LR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Rh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function FR(t,e,n,r){return new MR(t,e,n,r)}class UR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="RemoteStore";class zR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Cr(1e3),this.Va=new Cr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ys(this)&&(W(gn,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.da.add(4),await aa(c),c.ga.set("Unknown"),c.da.delete(4),await $u(c)}(this))})}),this.ga=new UR(r,s)}}async function $u(t){if(ys(t))for(const e of t.ma)await e(!0)}async function aa(t){for(const e of t.ma)await e(!1)}function jh(t,e){return t.Ea.get(e)||void 0}function BT(t,e){const n=X(t),r=jh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=jh(l,u);c!==void 0&&l.Ra.delete(c);const f=function(g,S){return S%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);W(gn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Nn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),cp(n)?up(n):Ii(n).O_()&&lp(n,i)}function ap(t,e){const n=X(t),r=Ii(n),s=jh(n,e);W(gn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&$T(n,s),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.ga.set("Unknown"))}function lp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void W(gn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Ii(t).Z_(e)}function $T(t,e){t.pa.$e(e),Ii(t).X_(e)}function up(t){t.pa=new Vx({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ii(t).start(),t.ga.ua()}function cp(t){return ys(t)&&!Ii(t).x_()&&t.Ia.size>0}function ys(t){return X(t).da.size===0}function qT(t){t.pa=void 0}async function BR(t){t.ga.set("Online")}async function $R(t){t.Ia.forEach((e,n)=>{lp(t,e)})}async function qR(t,e){qT(t),cp(t)?(t.ga.ha(e),up(t)):t.ga.set("Unknown")}async function WR(t,e,n){if(t.ga.set("Online"),e instanceof CT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){W(gn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(t,r)}else if(e instanceof El?t.pa.Xe(e):e instanceof AT?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await FT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const m=i.Ia.get(c);if(!m)return;i.Ia.set(c,m.withResumeToken(Qe.EMPTY_BYTE_STRING,m.snapshotVersion)),$T(i,c);const g=new Nn(m.target,c,f,m.sequenceNumber);lp(i,g)});const u=function(f,m){const g=new Map;m.targetChanges.forEach((A,P)=>{const b=f.Ra.get(P);b!==void 0&&g.set(b,A)});let S=new Ee(te);return m.targetMismatches.forEach((A,P)=>{const b=f.Ra.get(A);b!==void 0&&(S=S.insert(b,P))}),new ia(m.snapshotVersion,g,S,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){W(gn,"Failed to raise snapshot:",r),await lu(t,r)}}async function lu(t,e,n){if(!wi(e))throw e;t.da.add(1),await aa(t),t.ga.set("Offline"),n||(n=()=>FT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(gn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await $u(t)})}function WT(t,e){return e().catch(n=>lu(t,n,e))}async function qu(t){const e=X(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;HR(e);)try{const s=await AR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,GR(e,s)}catch(s){await lu(e,s)}HT(e)&&GT(e)}function HR(t){return ys(t)&&t.Ta.length<10}function GR(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function HT(t){return ys(t)&&!kr(t).x_()&&t.Ta.length>0}function GT(t){kr(t).start()}async function KR(t){kr(t).ra()}async function QR(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function YR(t,e,n){const r=t.Ta.shift(),s=ep.from(r,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qu(t)}async function JR(t,e){e&&kr(t).Y_&&await async function(r,s){if(function(o){return Px(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();kr(r).B_(),await WT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qu(r)}}(t,e),HT(t)&&GT(t)}async function Zy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W(gn,"RemoteStore received new credentials");const r=ys(n);n.da.add(3),await aa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await $u(n)}async function XR(t,e){const n=X(t);e?(n.da.delete(2),await $u(n)):e||(n.da.add(2),await aa(n),n.ga.set("Unknown"))}function Ii(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.sa(),new jR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:BR.bind(null,t),Yo:$R.bind(null,t),t_:qR.bind(null,t),H_:WR.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),cp(t)?up(t):t.ga.set("Unknown")):(await t.ya.stop(),qT(t))})),t.ya}function kr(t){return t.wa||(t.wa=function(n,r,s){const i=X(n);return i.sa(),new OR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:KR.bind(null,t),t_:JR.bind(null,t),ta:QR.bind(null,t),na:YR.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await qu(t)):(await t.wa.stop(),t.Ta.length>0&&(W(gn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new dp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(On("AsyncQueue",`${e}: ${t}`),wi(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{static emptySet(e){return new Zs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.Sa=new Ee(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class fi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fi(e,n,Zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class eP{constructor(){this.queries=tv(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=tv(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function tv(){return new gs(t=>hT(t),Mu)}async function fp(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new ZR,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=hp(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&mp(n)}async function pp(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tP(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&mp(n)}function nP(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function mp(t){t.xa.forEach(e=>{e.next()})}var Oh,nv;(nv=Oh||(Oh={})).Ba="default",nv.Cache="cache";class gp{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Oh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.key=e}}class QT{constructor(e){this.key=e}}class rP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=fT(e),this.su=new Zs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new ev,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),S=Fu(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?A!==P&&(r.track({type:3,doc:S}),b=!0):this.uu(g,S)||(r.track({type:2,doc:S}),b=!0,(u&&this.iu(S,u)>0||c&&this.iu(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(S?(o=o.add(S),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,m)=>function(S,A){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:b})}};return P(S)-P(A)}(f.type,m.type)||this.iu(f.doc,m.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new fi(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new ev,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new QT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new KT(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return fi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const yp="SyncEngine";class sP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iP{constructor(e){this.key=e,this.Eu=!1}}class oP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new gs(l=>hT(l),Mu),this.Vu=new Map,this.du=new Set,this.mu=new Ee(G.comparator),this.fu=new Map,this.gu=new rp,this.pu={},this.yu=new Map,this.wu=Cr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function aP(t,e,n=!0){const r=t0(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await YT(r,e,n,!0),s}async function lP(t,e){const n=t0(t);await YT(n,e,!0,!1)}async function YT(t,e,n,r){const s=await CR(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await uP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&BT(t.remoteStore,s),l}async function uP(t,e,n,r,s){t.bu=(m,g,S)=>async function(P,b,C,w){let T=b.view._u(C);T.bs&&(T=await Ky(P.localStore,b.query,!1).then(({documents:E})=>b.view._u(E,T)));const V=w&&w.targetChanges.get(b.targetId),R=w&&w.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(T,P.isPrimaryClient,V,R);return sv(P,b.targetId,L.hu),L.snapshot}(t,m,g,S);const i=await Ky(t.localStore,e,!0),o=new rP(e,i.ks),l=o._u(i.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);sv(t,n,c.hu);const f=new sP(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function cP(t,e,n){const r=X(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!Mu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ap(r.remoteStore,s.targetId),Lh(r,s.targetId)}).catch(Ei)):(Lh(r,s.targetId),await Dh(r.localStore,s.targetId,!0))}async function dP(t,e){const n=X(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ap(n.remoteStore,r.targetId))}async function hP(t,e,n){const r=_P(t);try{const s=await function(o,l){const u=X(o),c=ge.now(),f=l.reduce((S,A)=>S.add(A.key),ne());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let A=Ln(),P=ne();return u.xs.getEntries(S,f).next(b=>{A=b,A.forEach((C,w)=>{w.isValidDocument()||(P=P.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,A)).next(b=>{m=b;const C=[];for(const w of l){const T=Ax(w,m.get(w.key).overlayedDocument);T!=null&&C.push(new Or(w.key,T,sT(T.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,C,l)}).next(b=>{g=b;const C=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(S,b.batchId,C)})}).then(()=>({batchId:g.batchId,changes:mT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Ee(te)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await la(r,s.changes),await qu(r.remoteStore)}catch(s){const i=hp(s,"Failed to persist write");n.reject(i)}}async function JT(t,e){const n=X(t);try{const r=await SR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?le(o.Eu,14607):s.removedDocuments.size>0&&(le(o.Eu,42227),o.Eu=!1))}),await la(n,r,e)}catch(r){await Ei(r)}}function rv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.va)g.Oa(l)&&(c=!0)}),c&&mp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ee(G.comparator);o=o.insert(i,nt.newNoDocument(i,J.min()));const l=ne().add(i),u=new ia(J.min(),new Map,new Ee(te),o,l);await JT(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),vp(r)}else await Dh(r.localStore,e,!1).then(()=>Lh(r,e,n)).catch(Ei)}async function pP(t,e){const n=X(t),r=e.batch.batchId;try{const s=await IR(n.localStore,e);ZT(n,r,null),XT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,s)}catch(s){await Ei(s)}}async function mP(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);ZT(r,e,n),XT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,s)}catch(s){await Ei(s)}}function XT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function ZT(t,e,n){const r=X(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||e0(t,r)})}function e0(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(ap(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),vp(t))}function sv(t,e,n){for(const r of n)r instanceof KT?(t.gu.addReference(r.key,e),gP(t,r)):r instanceof QT?(W(yp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||e0(t,r.key)):Q(19791,{Cu:r})}function gP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(W(yp,"New document in limbo: "+n),t.du.add(r),vp(t))}function vp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(he.fromString(e)),r=t.wu.next();t.fu.set(r,new iP(n)),t.mu=t.mu.insert(n,r),BT(t.remoteStore,new Nn(hn(Lu(n.path)),r,"TargetPurposeLimboResolution",Vu.ce))}}async function la(t,e,n){const r=X(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=ip.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.Ts,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>F.forEach(g.Is,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!wi(m))throw m;W(op,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=f.vs.get(g),A=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(A);f.vs=f.vs.insert(g,P)}}}(r.localStore,i))}async function yP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W(yp,"User change. New user:",e.toKey());const r=await MT(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.Ns)}}function vP(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let s=ne();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function t0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fP.bind(null,e),e.Ru.H_=tP.bind(null,e.eventManager),e.Ru.Du=nP.bind(null,e.eventManager),e}function _P(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mP.bind(null,e),e}class uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return TR(this.persistence,new _R,e.initialUser,this.serializer)}xu(e){return new LT(sp.Vi,this.serializer)}Mu(e){return new xR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uu.provider={build:()=>new uu};class EP extends uu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){le(this.persistence.referenceDelegate instanceof au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new LT(r=>au.Vi(r,n),this.serializer)}}class Mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yP.bind(null,this.syncEngine),await XR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eP}()}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=VR(e.databaseInfo);return FR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new zR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>rv(this.syncEngine,n,0),function(){return Jy.v()?new Jy:new RR}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new oP(s,i,o,l,u,c);return f&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);W(gn,"RemoteStore shutting down."),i.da.add(5),await aa(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mh.provider={build:()=>new Mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _p{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class wP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sd(t,e){t.asyncQueue.verifyOperationInProgress(),W(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await MT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TP(t);W(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zy(e.remoteStore,s)),t._onlineComponents=e}async function TP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(xr,"Using user provided OfflineComponentProvider");try{await sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await sd(t,new uu)}}else W(xr,"Using default OfflineComponentProvider"),await sd(t,new EP(void 0));return t._offlineComponents}async function n0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(xr,"Using user provided OnlineComponentProvider"),await iv(t,t._uninitializedComponentsProvider._online)):(W(xr,"Using default OnlineComponentProvider"),await iv(t,new Mh))),t._onlineComponents}function IP(t){return n0(t).then(e=>e.syncEngine)}async function cu(t){const e=await n0(t),n=e.eventManager;return n.onListen=aP.bind(null,e.syncEngine),n.onUnlisten=cP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dP.bind(null,e.syncEngine),n}function SP(t,e,n,r){const s=new _p(r),i=new gp(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>fp(await cu(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>pp(await cu(t),i))}}function NP(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new _p({next:g=>{f.Ku(),o.enqueueAndForget(()=>pp(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new gp(Lu(l.path),f,{includeMetadataChanges:!0,Wa:!0});return fp(i,m)}(await cu(t),t.asyncQueue,e,n,r)),r.promise}function AP(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new _p({next:g=>{f.Ku(),o.enqueueAndForget(()=>pp(i,m)),g.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new gp(l,f,{includeMetadataChanges:!0,Wa:!0});return fp(i,m)}(await cu(t),t.asyncQueue,e,n,r)),r.promise}function CP(t,e){const n=new kn;return t.asyncQueue.enqueueAndForget(async()=>hP(await IP(t),e,n)),n.promise}/**
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
 */function r0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="ComponentProvider",ov=new Map;function xP(t,e,n,r,s){return new Kk(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,r0(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firestore.googleapis.com",av=!0;class lv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=s0,this.ssl=av}else this.host=e.host,this.ssl=e.ssl??av;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=OT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nR)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=r0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ck;switch(r.type){case"firstParty":return new Pk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ov.get(n);r&&(W(kP,"Removing Datastore"),ov.delete(n),r.terminate())}(this),Promise.resolve()}}function RP(t,e,n,r={}){var c;t=Et(t,Wu);const s=Xo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&XE(`https://${l}`),i.host!==s0&&i.host!==l&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Dn(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=et.MOCK_USER;else{f=MN(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new et(g)}t._authCredentials=new kk(new Hw(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class Ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ra(n,Ae._jsonSchema))return new Ae(e,r||null,new G(he.fromString(n.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:De("string",Ae._jsonSchemaVersion),referencePath:De("string")};class Er extends Lr{constructor(e,n,r){super(e,n,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new G(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Ve(t,e,...n){if(t=Fe(t),Gw("collection","path",e),t instanceof Wu){const r=he.fromString(e,...n);return wy(r),new Er(t,null,r)}{if(!(t instanceof Ae||t instanceof Er))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return wy(r),new Er(t.firestore,null,r)}}function it(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Hf.newId()),Gw("doc","path",e),t instanceof Wu){const r=he.fromString(e,...n);return Ey(r),new Ae(t,null,new G(r))}{if(!(t instanceof Ae||t instanceof Er))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Ey(r),new Ae(t.firestore,t instanceof Er?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="AsyncQueue";class cv{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new UT(this,"async_queue_retry"),this.lc=()=>{const r=rd();r&&W(uv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=rd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new kn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!wi(e))throw e;W(uv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,On("INTERNAL UNHANDLED ERROR: ",dv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=dp.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&Q(47125,{Rc:dv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function dv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Mn extends Wu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cv(e),this._firestoreClient=void 0,await e}}}function PP(t,e){const n=typeof t=="object"?t:nw(),r=typeof t=="string"?t:tu,s=Of(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ON("firestore");i&&RP(s,...i)}return s}function Hu(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bP(t),t._firestoreClient}function bP(t){var r,s,i,o;const e=t._freezeSettings(),n=xP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new wP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Qe.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ra(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:De("string",Vt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(ra(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:De("string",pn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class Qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ra(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Qt(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:De("string",Qt._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/^__.*__$/;class VP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class i0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function o0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Gu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return du(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(o0(this.dataSource)&&DP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class jP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bu(e)}V(e,n,r,s=!1){return new Gu({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new jP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function a0(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Ip("Data must be an object, but it was:",o,r);const l=u0(r,o);let u,c;if(i.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=hs(e,m,n);if(!o.contains(g))throw new $(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);h0(f,g)||f.push(g)}u=new St(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new VP(new mt(l),u,c)}class Qu extends ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}function l0(t,e,n){return new Gu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wp extends ua{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=l0(this,e,!0),r=this.vc.map(i=>vs(i,n)),s=new di(r);return new TT(e.path,s)}isEqual(e){return e instanceof wp&&Dn(this.vc,e.vc)}}class Tp extends ua{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=l0(this,e,!0),r=this.vc.map(i=>vs(i,n)),s=new hi(r);return new TT(e.path,s)}isEqual(e){return e instanceof Tp&&Dn(this.vc,e.vc)}}function OP(t,e,n,r){const s=t.V(1,e,n);Ip("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();jr(r,(u,c)=>{const f=d0(e,u,n);c=Fe(c);const m=s.Sc(f);if(c instanceof Qu)i.push(f);else{const g=vs(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new St(i);return new i0(o,l,s.fieldTransforms)}function LP(t,e,n,r,s,i){const o=t.V(1,e,n),l=[hs(e,r,n)],u=[s];if(i.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(hs(e,i[g])),u.push(i[g+1]);const c=[],f=mt.empty();for(let g=l.length-1;g>=0;--g)if(!h0(c,l[g])){const S=l[g];let A=u[g];A=Fe(A);const P=o.Sc(S);if(A instanceof Qu)c.push(S);else{const b=vs(A,P);b!=null&&(c.push(S),f.set(S,b))}}const m=new St(c);return new i0(f,m,o.fieldTransforms)}function MP(t,e,n,r=!1){return vs(n,t.V(r?4:3,e))}function vs(t,e){if(c0(t=Fe(t)))return Ip("Unsupported field value:",e,t),u0(t,e);if(t instanceof ua)return function(r,s){if(!o0(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=vs(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ex(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:ou(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(s.serializer,i)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:kT(s.serializer,r._byteString)};if(r instanceof Ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:np(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return function(o,l){const u=o instanceof Qt?o.toArray():o;return{mapValue:{fields:{[nT]:{stringValue:rT},[nu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Xf(l.serializer,f)})}}}}}}(r,s);if(jT(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Du(r)}`)}(t,e)}function u0(t,e){const n={};return Yw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,s)=>{const i=vs(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function c0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof pn||t instanceof Vt||t instanceof Ae||t instanceof ua||t instanceof Qt||jT(t))}function Ip(t,e,n){if(!c0(n)||!Kw(n)){const r=Du(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function hs(t,e,n){if((e=Fe(e))instanceof Ep)return e._internalPath;if(typeof e=="string")return d0(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const FP=new RegExp("[~\\*/\\[\\]]");function d0(t,e,n){if(e.search(FP)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ep(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(M.INVALID_ARGUMENT,l+t+u)}function h0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[nu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new Qt(n)}convertGeoPoint(e){return new pn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);le(VT(r),9688,{name:e});const s=new Bo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Sp extends UP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function hv(...t){return new wp("arrayUnion",t)}function fv(...t){return new Tp("arrayRemove",t)}const pv="@firebase/firestore",mv="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(hs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zP extends f0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Np{}class m0 extends Np{}function Zt(t,e,...n){let r=[];e instanceof Np&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Ap).length,l=i.filter(u=>u instanceof Yu).length;if(o>1||o>0&&l>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Yu extends m0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yu(e,n,r)}_apply(e){const n=this._parse(e);return y0(e._query,n),new Lr(e.firestore,e.converter,Ch(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vv(m,f);const A=[];for(const P of m)A.push(yv(u,i,P));g={arrayValue:{values:A}}}else g=yv(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vv(m,f),g=MP(l,o,m,f==="in"||f==="not-in");return be.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function en(t,e,n){const r=e,s=hs("where",t);return Yu._create(s,r,n)}class Ap extends Np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ap(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)y0(o,u),o=Ch(o,u)}(e._query,n),new Lr(e.firestore,e.converter,Ch(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends m0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(i,o)}(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,hx(e._query,n))}}function g0(t,e="asc"){const n=e,r=hs("orderBy",t);return Cp._create(r,n)}function yv(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dT(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!G.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xy(t,new G(r))}if(n instanceof Ae)return xy(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function vv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function v0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class es extends f0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}es._jsonSchemaVersion="firestore/documentSnapshot/1.0",es._jsonSchema={type:De("string",es._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class wl extends es{data(e={}){return super.data(e)}}class ts{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wl(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new so(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new so(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:BP(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */ts._jsonSchemaVersion="firestore/querySnapshot/1.0",ts._jsonSchema={type:De("string",ts._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){t=Et(t,Ae);const e=Et(t.firestore,Mn),n=Hu(e);return NP(n,t._key).then(r=>E0(e,t,r))}function $P(t){t=Et(t,Lr);const e=Et(t.firestore,Mn),n=Hu(e),r=new Sp(e);return p0(t._query),AP(n,t._query).then(s=>new ts(e,r,t,s))}function qP(t,e,n){t=Et(t,Ae);const r=Et(t.firestore,Mn),s=v0(t.converter,e),i=Ku(r);return Ju(r,[a0(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function ca(t,e,n,...r){t=Et(t,Ae);const s=Et(t.firestore,Mn),i=Ku(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof Ep?LP(i,"updateDoc",t._key,e,n,r):OP(i,"updateDoc",t._key,e),Ju(s,[o.toMutation(t._key,Lt.exists(!0))])}function zn(t){return Ju(Et(t.firestore,Mn),[new Zf(t._key,Lt.none())])}function Bn(t,e){const n=Et(t.firestore,Mn),r=it(t),s=v0(t.converter,e),i=Ku(t.firestore);return Ju(n,[a0(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function yn(t,...e){var c,f,m;t=Fe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||gv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(gv(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let i,o,l;if(t instanceof Ae)o=Et(t.firestore,Mn),l=Lu(t._key.path),i={next:g=>{e[r]&&e[r](E0(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Et(t,Lr);o=Et(g.firestore,Mn),l=g._query;const S=new Sp(o);i={next:A=>{e[r]&&e[r](new ts(o,S,g,A))},error:e[r+1],complete:e[r+2]},p0(t._query)}const u=Hu(o);return SP(u,l,s,i)}function Ju(t,e){const n=Hu(t);return CP(n,e)}function E0(t,e,n){const r=n.docs.get(e._key),s=new Sp(t);return new es(t,s,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Ak(yi),ai(new as("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mn(new xk(r.getProvider("auth-internal")),new bk(o,r.getProvider("app-check-internal")),Qk(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),vr(pv,mv,e),vr(pv,mv,"esm2020")})();const WP={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},w0=tw(WP),ie=PP(w0),hu=Tk(w0),T0=j.createContext(null);function HP({children:t}){const[e,n]=j.useState(null),[r,s]=j.useState(!0);j.useEffect(()=>cC(hu,l=>{n(l),s(!1)}),[]);const i=async()=>{await dC(hu)};return d.jsx(T0.Provider,{value:{user:e,loading:r,logout:i},children:t})}function vn(){const t=j.useContext(T0);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const GP=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
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
`,id="reply-ai-history";function KP(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const s=r.indexOf("=");if(s===-1)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim(),[l]=i.split(".");e[l]&&e[l].push(o)}return e}const _v=KP(GP);function QP(){const[t,e]=j.useState(""),[n,r]=j.useState("funny"),[s,i]=j.useState(""),[o,l]=j.useState(!1),[u,c]=j.useState(""),[f,m]=j.useState(()=>{const b=localStorage.getItem(id);return b?JSON.parse(b):[]}),g=j.useCallback(async b=>{if(!t.trim()){c("Pega un mensaje primero");return}l(!0),c("");const C=typeof b=="string"?b:n,w=_v[C]||_v.elegant,T=w[Math.floor(Math.random()*w.length)];await new Promise(L=>setTimeout(L,300)),i(T);const R=[{message:t,reply:T,mode:C,date:new Date().toISOString()},...f].slice(0,50);m(R),localStorage.setItem(id,JSON.stringify(R)),l(!1)},[t,n,f]),S=j.useCallback(()=>{s&&(e(s),g("funny"))},[s,g]),A=j.useCallback(b=>{const C=`https://wa.me/?text=${encodeURIComponent(b)}`;window.open(C,"_blank")},[]),P=j.useCallback(()=>{m([]),localStorage.removeItem(id)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:s,setResponse:i,loading:o,error:u,history:f,generate:g,makeFunnier:S,sendToWhatsApp:A,clearHistory:P}}const kp="birthdays";function YP(t,e,n){const r=Zt(Ve(ie,kp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function JP({name:t,date:e,gender:n,phone:r},s){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:s,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,kp),o)).id,...o}}async function XP(t){await zn(it(ie,kp,t))}function ZP(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function e2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState([]),[i,o]=j.useState("");j.useEffect(()=>t?(o(""),YP(t.uid,S=>{n(S)},S=>{o("Error al cargar amigos: "+od(S))})):void 0,[t]),j.useEffect(()=>{const g=ZP(),S=e.filter(A=>A.date===g);s(S)},[e]);const l=100,u=j.useCallback(async(g,S,A,P)=>{if(t){if(o(""),e.length>=l){o(`Límite alcanzado: máximo ${l} cumpleaños. Elimina algunos para añadir más.`);return}try{await JP({name:g,date:S,gender:A,phone:P},t.uid)}catch(b){o("Error al añadir amigo: "+od(b))}}},[t,e.length]),c=j.useCallback(async g=>{o("");try{await XP(g)}catch(S){o("Error al eliminar amigo: "+od(S))}},[]),f=j.useCallback(g=>{let S;g.gender==="male"?S=`¡Feliz cumpleaños, amigo ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:g.gender==="female"?S=`¡Feliz cumpleaños, amiga ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:S=`¡Feliz cumpleaños, ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const A=g.phone?g.phone.replace(/[^0-9]/g,""):"",P=A?`https://wa.me/${A}?text=${encodeURIComponent(S)}`:`https://wa.me/?text=${encodeURIComponent(S)}`;window.open(P,"_blank")},[]),m=j.useCallback(g=>{const S=g.gender==="male"?"lo":g.gender==="female"?"la":"le",A=`📅 Recordatorio: Hoy es el cumpleaños de ${g.name}! No olvides felicit${S}. 🎂🎉`,P=`https://wa.me/?text=${encodeURIComponent(A)}`;window.open(P,"_blank")},[]);return{friends:e,todayBirthdays:r,error:i,addFriend:u,removeFriend:c,sendGreeting:f,sendReminder:m}}function od(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const xp="contacts";function t2(t,e,n){const r=Zt(Ve(ie,xp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function n2({name:t,phone:e,email:n,city:r,webpage:s,occupation:i,rating:o},l){const u={name:t,phone:e||"",email:n||"",city:r||"",webpage:s||"",occupation:i||"",rating:o||1,userId:l,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,xp),u)).id,...u}}async function r2(t){await zn(it(ie,xp,t))}function s2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),t2(t.uid,c=>{n(c)},c=>{s("Error al cargar contactos: "+ad(c))})):void 0,[t]);const i=100,o=j.useCallback(async({name:u,phone:c,email:f,city:m,webpage:g,occupation:S,rating:A})=>{if(t){if(s(""),e.length>=i){s(`Límite alcanzado: máximo ${i} contactos. Elimina algunos para añadir más.`);return}try{await n2({name:u,phone:c,email:f,city:m,webpage:g,occupation:S,rating:A},t.uid)}catch(P){s("Error al añadir contacto: "+ad(P))}}},[t,e.length]),l=j.useCallback(async u=>{s("");try{await r2(u)}catch(c){s("Error al eliminar contacto: "+ad(c))}},[]);return{contacts:e,error:r,addContact:o,removeContact:l}}function ad(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const Rp="favorites";function i2(t,e,n){const r=Zt(Ve(ie,Rp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function o2({name:t,url:e,description:n},r){const s={name:t,url:e||"",description:n||"",userId:r,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,Rp),s)).id,...s}}async function a2(t){await zn(it(ie,Rp,t))}const Ev=100;function l2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),i2(t.uid,n,u=>{s("Error al cargar favoritos: "+ld(u))})):void 0,[t]);const i=j.useCallback(async({name:l,url:u,description:c})=>{if(t){if(s(""),e.length>=Ev){s(`Límite alcanzado: máximo ${Ev} favoritos.`);return}try{await o2({name:l,url:u,description:c},t.uid)}catch(f){s("Error al añadir favorito: "+ld(f))}}},[t,e.length]),o=j.useCallback(async l=>{s("");try{await a2(l)}catch(u){s("Error al eliminar favorito: "+ld(u))}},[]);return{favorites:e,error:r,addFavorite:i,removeFavorite:o}}function ld(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}const _s="reminders",I0="users";function u2(t,e,n){const r=Zt(Ve(ie,_s),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}function c2(t,e,n){const r=Zt(Ve(ie,_s),en("sharedWithUids","array-contains",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data(),isShared:!0}));e(i)},s=>{console.error("Firestore shared subscribe error:",s),n&&n(s)})}async function d2(t,e,n){const r={...t,userId:e,ownerEmail:n,createdAt:new Date().toISOString(),lastFiredAt:null,sharedWithUids:[],sharedWithEmails:[]};return{id:(await Bn(Ve(ie,_s),r)).id,...r}}async function wv(t,e){await ca(it(ie,_s,t),e)}async function h2(t){await zn(it(ie,_s,t))}async function f2(t,e,n){await ca(it(ie,_s,t),{sharedWithUids:hv(e),sharedWithEmails:hv(n)})}async function p2(t,e){var u;const n=it(ie,_s,t),s=(await _0(n)).data(),i=(s==null?void 0:s.sharedWithEmails)||[],o=((u=s==null?void 0:s.sharedWithUids)==null?void 0:u.indexOf(e))??-1,l=o>=0?i[o]:null;await ca(n,{sharedWithUids:fv(e),sharedWithEmails:l?fv(l):[]})}async function m2(t,e){const n=it(ie,I0,t);(await _0(n)).exists()||await qP(n,{email:e,uid:t})}async function g2(t){const e=Zt(Ve(ie,I0),en("email","==",t)),n=await $P(e);return n.empty?null:n.docs[0].id}const Tv=5;let Ga=null;function S0(){if(Ga)return Ga;try{Ga=new(window.AudioContext||window.webkitAudioContext)}catch(t){console.warn("AudioContext not supported:",t)}return Ga}function Pp(){const t=S0();t&&t.state==="suspended"&&t.resume().catch(()=>{})}document.addEventListener("click",Pp);document.addEventListener("touchstart",Pp);document.addEventListener("keydown",Pp);async function y2(){try{const t=S0();if(!t||(t.state==="suspended"&&await t.resume(),t.state!=="running"))return;const e=(r,s,i)=>{const o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.setValueAtTime(r,s),l.gain.setValueAtTime(.35,s),l.gain.exponentialRampToValueAtTime(.01,s+i),o.connect(l),l.connect(t.destination),o.start(s),o.stop(s+i)},n=t.currentTime;e(523,n,.15),e(659,n+.15,.15),e(784,n+.3,.3)}catch(t){console.warn("Sound error:",t)}}function Ss(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function v2(){const t=new Date;return{h:t.getHours(),dow:t.getDay(),day:t.getDate(),month:t.getMonth()+1}}function _2(t){if(!t.active)return!1;const e=v2();if(t.frequency!=="daily")if(t.frequency==="weekly"){if(t.weekday!==e.dow)return!1}else if(t.frequency==="monthly"){if(t.day!==e.day)return!1}else if(t.frequency==="once"){if(t.day!==e.day||t.month!==e.month)return!1}else return!1;const n=t.earlyBird?7:9;return!(e.h<n||t.lastFiredAt&&Date.now()-new Date(t.lastFiredAt).getTime()<55*60*1e3)}async function Iv(){if(!("Notification"in window))return"denied";if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return"denied"}}function E2(t){if("Notification"in window&&Notification.permission==="granted")try{const e=t.name+(t.note?" — "+t.note:"");new Notification("🔔 Toolbox AI",{body:e,icon:"./icons/icon-192.svg",tag:t.id,renotify:!0})}catch(e){console.warn("Notification error:",e)}}function w2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(null),l=j.useRef([]);l.current=e;const u=j.useRef(new Set);j.useEffect(()=>{if(!t)return;s(""),t.email&&m2(t.uid,t.email).catch(()=>{});let A=[],P=[];const b=()=>{const T=new Set,V=[];for(const R of[...A,...P])T.has(R.id)||(T.add(R.id),V.push(R));n(V)},C=u2(t.uid,T=>{A=T,b()},T=>s("Error al cargar recordatorios: "+Ss(T))),w=c2(t.uid,T=>{P=T,b()},T=>console.error("Shared reminders error:",T));return()=>{C(),w()}},[t]),j.useEffect(()=>{!t||e.length===0||Iv().then(A=>{console.log("[Reminders] Notification permission:",A)})},[t,e.length>0]),j.useEffect(()=>{if(!t)return;const A=async w=>{if(!w.isShared&&_2(w)&&!u.current.has(w.id)){u.current.add(w.id);try{await wv(w.id,{lastFiredAt:new Date().toISOString()}),await y2(),Notification.permission==="default"&&await Iv(),E2(w),o(w.id),setTimeout(()=>o(null),5e3)}catch(T){console.warn("Reminder fire error:",T)}finally{setTimeout(()=>u.current.delete(w.id),5e3)}}},P=()=>{l.current.forEach(A)};P();const b=setInterval(P,6e4),C=()=>{document.visibilityState==="visible"&&P()};return document.addEventListener("visibilitychange",C),()=>{clearInterval(b),document.removeEventListener("visibilitychange",C)}},[t]);const c=j.useCallback(async A=>{if(!t)return;if(s(""),l.current.filter(b=>!b.isShared).length>=Tv){s(`Límite alcanzado: máximo ${Tv} recordatorios.`);return}try{await d2(A,t.uid,t.email)}catch(b){s("Error al añadir recordatorio: "+Ss(b))}},[t]),f=j.useCallback(async(A,P)=>{s("");try{await wv(A,P)}catch(b){s("Error al actualizar recordatorio: "+Ss(b))}},[]),m=j.useCallback(async A=>{s("");try{await h2(A)}catch(P){s("Error al eliminar recordatorio: "+Ss(P))}},[]),g=j.useCallback(async(A,P)=>{if(s(""),!P||!P.includes("@")){s("Introduce un email válido.");return}try{const b=await g2(P);if(!b){s("Ese usuario no está registrado en Toolbox AI.");return}if(b===t.uid){s("No puedes compartir un recordatorio contigo mismo.");return}await f2(A,b,P)}catch(b){s("Error al compartir recordatorio: "+Ss(b))}},[t]),S=j.useCallback(async(A,P,b)=>{s("");try{await p2(A,P,b)}catch(C){s("Error al eliminar uso compartido: "+Ss(C))}},[]);return{reminders:e,error:r,justFired:i,userEmail:t==null?void 0:t.email,addReminder:c,updateReminder:f,removeReminder:m,shareReminder:g,unshareReminder:S}}const Xu="notes";function T2(t,e,n){const r=Zt(Ve(ie,Xu),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>o.pinned!==l.pinned?o.pinned?-1:1:new Date(l.updatedAt)-new Date(o.updatedAt)),e(i)},s=>{console.error("Firestore notes subscribe error:",s),n&&n(s)})}async function I2({title:t,body:e,color:n},r){const s=new Date().toISOString(),i={title:t||"",body:e||"",color:n||"#ffffff",pinned:!1,userId:r,createdAt:s,updatedAt:s};return{id:(await Bn(Ve(ie,Xu),i)).id,...i}}async function Sv(t,e){await ca(it(ie,Xu,t),{...e,updatedAt:new Date().toISOString()})}async function S2(t){await zn(it(ie,Xu,t))}const ud=6;function Ka(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function N2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),T2(t.uid,f=>n(f),f=>s("Error al cargar notas: "+Ka(f)))):void 0,[t]);const i=j.useCallback(async({title:c,body:f,color:m})=>{if(t){if(s(""),e.length>=ud){s(`Límite alcanzado: máximo ${ud} notas.`);return}try{await I2({title:c,body:f,color:m},t.uid)}catch(g){s("Error al añadir nota: "+Ka(g))}}},[t,e.length]),o=j.useCallback(async(c,f)=>{s("");try{await Sv(c,f)}catch(m){s("Error al actualizar nota: "+Ka(m))}},[]),l=j.useCallback(async c=>{s("");try{await S2(c)}catch(f){s("Error al eliminar nota: "+Ka(f))}},[]),u=j.useCallback(async c=>{const f=e.find(m=>m.id===c);f&&await Sv(c,{pinned:!f.pinned})},[e]);return{notes:e,error:r,maxNotes:ud,addNote:i,updateNote:o,removeNote:l,togglePin:u}}const bp="projects",Dp="timeEntries";function A2(t,e,n){const r=Zt(Ve(ie,bp),en("userId","==",t));return yn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("projects subscribe error:",s),n&&n(s)})}async function C2({name:t,clientName:e,rate:n,currency:r,color:s},i){const o={name:t,clientName:e||"",rate:parseFloat(n)||0,currency:r||"EUR",color:s||"#2d6a4f",userId:i,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,bp),o)).id,...o}}async function k2(t){await zn(it(ie,bp,t))}function x2(t,e,n){const r=Zt(Ve(ie,Dp),en("userId","==",t),g0("startedAt","desc"));return yn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("entries subscribe error:",s),n&&n(s)})}async function R2({projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l},u){const c={projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l||"",userId:u,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,Dp),c)).id,...c}}async function P2(t){await zn(it(ie,Dp,t))}const cd=10;function Ns(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function b2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState([]),[i,o]=j.useState(""),[l,u]=j.useState(null),[c,f]=j.useState(null),[m,g]=j.useState(0),S=j.useRef(null);j.useEffect(()=>{if(!t)return;o("");const V=A2(t.uid,n,L=>o("Error al cargar proyectos: "+Ns(L))),R=x2(t.uid,s,L=>o("Error al cargar registros: "+Ns(L)));return()=>{V(),R()}},[t]),j.useEffect(()=>(l&&c?S.current=setInterval(()=>{g(Math.floor((Date.now()-c.getTime())/1e3))},1e3):(clearInterval(S.current),g(0)),()=>clearInterval(S.current)),[l,c]);const A=j.useCallback(async V=>{if(t){if(o(""),e.length>=cd){o(`Límite alcanzado: máximo ${cd} proyectos.`);return}try{await C2(V,t.uid)}catch(R){o("Error al añadir proyecto: "+Ns(R))}}},[t,e.length]),P=j.useCallback(async V=>{o(""),l===V&&C();try{await k2(V)}catch(R){o("Error al eliminar proyecto: "+Ns(R))}},[l]),b=j.useCallback(V=>{u(V),f(new Date),g(0)},[]),C=j.useCallback(async(V="")=>{if(!l||!c)return;const R=new Date,L=Math.floor((R-c)/1e3);if(L<5){u(null),f(null);return}const E=e.find(v=>v.id===l);u(null),f(null);try{await R2({projectId:l,projectName:(E==null?void 0:E.name)||"Sin proyecto",rate:(E==null?void 0:E.rate)||0,currency:(E==null?void 0:E.currency)||"EUR",startedAt:c.toISOString(),endedAt:R.toISOString(),durationSec:L,notes:V},t.uid)}catch(v){o("Error al guardar registro: "+Ns(v))}},[l,c,e,t]),w=j.useCallback(async V=>{o("");try{await P2(V)}catch(R){o("Error al eliminar registro: "+Ns(R))}},[]),T=e.reduce((V,R)=>(V[R.id]=r.filter(L=>L.projectId===R.id).reduce((L,E)=>L+(E.durationSec||0),0),V),{});return{projects:e,entries:r,error:i,maxProjects:cd,activeProjectId:l,elapsed:m,secondsByProject:T,addProject:A,removeProject:P,startTimer:b,stopTimer:C,removeEntry:w}}const Vp="finances";function D2(t,e,n){const r=Zt(Ve(ie,Vp),en("userId","==",t),g0("date","desc"));return yn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("finances subscribe error:",s),n&&n(s)})}async function V2({type:t,concept:e,clientOrProvider:n,amount:r,vatRate:s,irpfRate:i,date:o},l){const u=parseFloat(r)||0,c=parseFloat(s)||0,f=parseFloat(i)||0,m=parseFloat((u*c/100).toFixed(2)),g=parseFloat((u*f/100).toFixed(2)),S=parseFloat(t==="income"?(u+m-g).toFixed(2):(u+m).toFixed(2)),A={type:t,concept:e.trim(),clientOrProvider:n.trim()||"",amount:u,vatRate:c,vatAmount:m,irpfRate:f,irpfAmount:g,total:S,date:o,userId:l,createdAt:new Date().toISOString()};return{id:(await Bn(Ve(ie,Vp),A)).id,...A}}async function j2(t){await zn(it(ie,Vp,t))}const dd=150;function hd(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function O2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(!0);j.useEffect(()=>t?(s(""),o(!0),D2(t.uid,m=>{n(m),o(!1)},m=>{s("Error al cargar contabilidad: "+hd(m)),o(!1)})):void 0,[t]);const l=j.useCallback(async f=>{if(t){if(s(""),e.length>=dd){s(`Límite alcanzado: máximo ${dd} asientos contables.`);return}try{await V2(f,t.uid)}catch(m){s("Error al registrar asiento: "+hd(m))}}},[t,e.length]),u=j.useCallback(async f=>{s("");try{await j2(f)}catch(m){s("Error al eliminar asiento: "+hd(m))}},[]),c=j.useMemo(()=>{let f=0,m=0,g=0,S=0,A=0;e.forEach(C=>{C.type==="income"?(f+=C.amount||0,g+=C.vatAmount||0,A+=C.irpfAmount||0):(m+=C.amount||0,S+=C.vatAmount||0)});const P=f-m,b=g-S;return{totalIncomes:f,totalExpenses:m,vatRepercutido:g,vatSoportado:S,irpfRetained:A,netProfit:P,vatBalance:b}},[e]);return{entries:e,error:r,loading:i,maxEntries:dd,stats:c,addEntry:l,removeEntry:u}}const Zu="tasks";function L2(t,e,n){const r=Zt(Ve(ie,Zu),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>{if(o.status!==l.status)return o.status==="pending"?-1:1;const u={high:3,medium:2,low:1},c=u[o.priority]||1,f=u[l.priority]||1;return c!==f?f-c:o.dueDate&&l.dueDate?new Date(o.dueDate)-new Date(l.dueDate):o.dueDate?-1:l.dueDate?1:new Date(l.createdAt)-new Date(o.createdAt)}),e(i)},s=>{console.error("tasks subscribe error:",s),n&&n(s)})}async function M2({title:t,description:e,dueDate:n,priority:r,clientName:s},i){const o=new Date().toISOString(),l={title:t.trim(),description:(e==null?void 0:e.trim())||"",dueDate:n||"",priority:r||"medium",status:"pending",clientName:(s==null?void 0:s.trim())||"",userId:i,createdAt:o,updatedAt:o};return{id:(await Bn(Ve(ie,Zu),l)).id,...l}}async function F2(t,e){await ca(it(ie,Zu,t),{...e,updatedAt:new Date().toISOString()})}async function U2(t){await zn(it(ie,Zu,t))}const fd=50;function Qa(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function z2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(!0);j.useEffect(()=>t?(s(""),o(!0),L2(t.uid,g=>{n(g),o(!1)},g=>{s("Error al cargar tareas: "+Qa(g)),o(!1)})):void 0,[t]);const l=j.useCallback(async m=>{if(t){if(s(""),e.length>=fd){s(`Límite alcanzado: máximo ${fd} tareas.`);return}try{await M2(m,t.uid)}catch(g){s("Error al añadir tarea: "+Qa(g))}}},[t,e.length]),u=j.useCallback(async(m,g)=>{s("");try{await F2(m,g)}catch(S){s("Error al actualizar tarea: "+Qa(S))}},[]),c=j.useCallback(async m=>{const g=e.find(A=>A.id===m);if(!g)return;const S=g.status==="pending"?"completed":"pending";await u(m,{status:S})},[e,u]),f=j.useCallback(async m=>{s("");try{await U2(m)}catch(g){s("Error al eliminar tarea: "+Qa(g))}},[]);return{tasks:e,error:r,loading:i,maxTasks:fd,addTask:l,updateTask:u,toggleTaskStatus:c,removeTask:f}}function B2(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[s,i]=j.useState(!1),[o,l]=j.useState(""),[u,c]=j.useState(!1),f=async m=>{m.preventDefault(),l(""),c(!0);try{s?await oC(hu,t,n):await aC(hu,t,n)}catch(g){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[g.code]||g.code)}finally{c(!1)}};return d.jsx("div",{className:"login-screen",children:d.jsxs("div",{className:"login-card",children:[d.jsx("div",{className:"login-logo",children:"💬"}),d.jsx("h1",{className:"login-title",children:"Toolbox AI"}),d.jsx("p",{className:"login-subtitle",children:s?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),d.jsxs("form",{className:"login-form",onSubmit:f,children:[d.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value),required:!0}),d.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:m=>r(m.target.value),required:!0,minLength:6}),o&&d.jsx("p",{className:"error",children:o}),d.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?d.jsx("span",{className:"loading-spinner"}):s?"Crear cuenta":"Iniciar sesión"})]}),d.jsxs("p",{className:"login-toggle",children:[s?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",d.jsx("button",{className:"login-toggle-btn",onClick:()=>{i(!s),l("")},children:s?"Inicia sesión":"Regístrate"})]})]})})}function $2({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return d.jsxs("div",{className:"input-box",children:[d.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),d.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),d.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),d.jsx("path",{d:"M12 11h4"}),d.jsx("path",{d:"M12 16h4"}),d.jsx("path",{d:"M8 11h.01"}),d.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const q2=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function W2({selected:t,onSelect:e}){return d.jsx("div",{className:"modes",children:q2.map(n=>d.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[d.jsx("span",{className:"mode-emoji",children:n.icon}),d.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function H2({onClick:t,loading:e}){return d.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?d.jsx("span",{className:"loading-spinner"}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M12 3v18"}),d.jsx("path",{d:"M5 10l7-7 7 7"}),d.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const Nv={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function G2({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:s}){if(!t)return null;const i=Nv[e]||Nv.funny;return d.jsxs("div",{className:"response-card fade-in",children:[d.jsxs("div",{className:"response-header",children:[d.jsx("span",{className:"response-mode-icon",children:i.emoji}),d.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",i.label]})]}),d.jsx("p",{className:"response-text",children:t}),d.jsxs("div",{className:"response-actions",children:[d.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),d.jsxs("button",{className:"action-btn",onClick:r,children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"23 4 23 10 17 10"}),d.jsx("polyline",{points:"1 20 1 14 7 14"}),d.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),d.jsxs("button",{className:"action-btn",onClick:s,children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),d.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),d.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const N0=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function K2(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${N0[parseInt(n,10)-1]}`}function Q2({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:s,onSendGreeting:i,onSendReminder:o}){const[l,u]=j.useState(""),[c,f]=j.useState(""),[m,g]=j.useState(""),[S,A]=j.useState(""),[P,b]=j.useState("male"),[C,w]=j.useState(!1),[T,V]=j.useState(""),R=y=>{if(y.preventDefault(),!l.trim()||!m||!S)return;const N=`${String(parseInt(m,10)).padStart(2,"0")}-${String(parseInt(S,10)).padStart(2,"0")}`;r(l.trim(),N,P,c.trim()),u(""),f(""),g(""),A(""),b("male"),w(!1)},L=T.toLowerCase(),v=[...t.filter(y=>y.name.toLowerCase().includes(L))].sort((y,N)=>{const[k,x]=y.date.split("-").map(Number),[I,de]=N.date.split("-").map(Number);return x-de||k-I});return d.jsxs("div",{className:"birthdays",children:[n&&d.jsx("p",{className:"error",children:n}),e.length>0&&d.jsxs("div",{className:"birthday-alert fade-in",children:[d.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),d.jsxs("div",{className:"birthday-alert-body",children:[d.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(y=>y.name).join(" y "),"!"]}),d.jsx("div",{className:"birthday-alert-actions",children:e.map(y=>d.jsxs("div",{className:"birthday-alert-row",children:[d.jsxs("button",{className:"action-btn primary",onClick:()=>i(y),children:["🎉 Felicitar a ",y.name]}),d.jsx("button",{className:"action-btn",onClick:()=>o(y),children:"🔔 Recordarme"}),y.phone&&d.jsx("a",{className:"action-btn",href:`tel:${y.phone}`,children:"📞 Llamar"})]},y.id))})]})]}),d.jsxs("div",{className:"birthdays-header",children:[d.jsxs("h3",{children:["Tus amigos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-friend-btn",onClick:()=>w(!C),children:C?"✕ Cerrar":"+ Añadir amigo"})]}),C&&d.jsxs("form",{className:"birthday-form fade-in",onSubmit:R,children:[d.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:y=>u(y.target.value),required:!0}),d.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:c,onChange:y=>f(y.target.value)}),d.jsxs("div",{className:"bf-row",children:[d.jsxs("select",{className:"bf-select",value:m,onChange:y=>g(y.target.value),required:!0,children:[d.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(y,N)=>N+1).map(y=>d.jsx("option",{value:y,children:y},y))]}),d.jsxs("select",{className:"bf-select",value:S,onChange:y=>A(y.target.value),required:!0,children:[d.jsx("option",{value:"",children:"Mes"}),N0.map((y,N)=>d.jsx("option",{value:N+1,children:y},N))]})]}),d.jsxs("div",{className:"bf-gender",children:[d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"male",checked:P==="male",onChange:()=>b("male")}),"Masculino"]}),d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"female",checked:P==="female",onChange:()=>b("female")}),"Femenino"]}),d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"other",checked:P==="other",onChange:()=>b("other")}),"Otro / No sé"]})]}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"M21 21l-4.35-4.35"})]}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar amigo...",value:T,onChange:y=>V(y.target.value)}),T&&d.jsx("button",{className:"search-clear",onClick:()=>V(""),children:"✕"})]}),v.length===0&&d.jsx("p",{className:"birthdays-empty",children:T?"No se encontraron amigos.":"No has añadido ningún cumpleaños todavía."}),d.jsx("div",{className:"birthdays-list",children:v.map(y=>d.jsxs("div",{className:"birthday-item fade-in",children:[d.jsxs("div",{className:"birthday-item-info",children:[d.jsxs("span",{className:"birthday-item-name",children:[y.name,y.gender==="male"&&" 👨",y.gender==="female"&&" 👩",y.gender==="other"&&" 🧑"]}),d.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",K2(y.date)]}),y.phone&&d.jsxs("span",{className:"birthday-item-phone",children:["📞 ",y.phone]})]}),d.jsxs("div",{className:"birthday-item-actions",children:[y.phone&&d.jsx("a",{className:"contact-action-btn",href:`tel:${y.phone}`,title:"Llamar",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:d.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),d.jsx("button",{className:"birthday-item-delete",onClick:()=>s(y.id),title:"Eliminar",children:"✕"})]})]},y.id))})]})}const Y2=["fontanero","electricista","pintor","informatico","medico","ingeniero","arquitecto","maestro","herrero","asesor","jardinero","comercial","agricultor","repuestos"];function pd(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function J2({contacts:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,m]=j.useState(""),[g,S]=j.useState(""),[A,P]=j.useState(""),[b,C]=j.useState(3),[w,T]=j.useState(!1),[V,R]=j.useState(""),L=x=>{x.preventDefault(),s.trim()&&(n({name:s.trim(),phone:o.trim(),email:u.trim(),city:f.trim(),webpage:g.trim(),occupation:A,rating:b}),i(""),l(""),c(""),m(""),S(""),P(""),C(3),T(!1))};async function E(x){const I=[`*${x.name}*`];x.phone&&I.push(`📞 ${x.phone}`),x.email&&I.push(`✉️ ${x.email}`),x.city&&I.push(`📍 ${x.city}`),x.webpage&&I.push(`🌐 ${x.webpage}`),x.occupation&&I.push(`💼 ${pd(x.occupation)}`),I.push(`⭐ ${"★".repeat(x.rating)}${"☆".repeat(5-x.rating)}`);const de=I.join(`
`);if(navigator.share)try{await navigator.share({title:x.name,text:de});return}catch{}try{await navigator.clipboard.writeText(de)}catch{}}const v=V.toLowerCase(),y=t.filter(x=>x.name.toLowerCase().includes(v)),N={};for(const x of y){const I=x.occupation||"sin ocupacion";N[I]||(N[I]=[]),N[I].push(x)}const k=Object.keys(N).sort((x,I)=>x==="sin ocupacion"?1:I==="sin ocupacion"?-1:x.localeCompare(I));return d.jsxs("div",{className:"contacts",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"contacts-header",children:[d.jsxs("h3",{children:["Contactos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-contact-btn",onClick:()=>T(!w),children:w?"✕ Cerrar":"+ Añadir contacto"})]}),w&&d.jsxs("form",{className:"contact-form fade-in",onSubmit:L,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:x=>i(x.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"tel",placeholder:"Teléfono",value:o,onChange:x=>l(x.target.value)}),d.jsx("input",{className:"cf-input",type:"email",placeholder:"Email",value:u,onChange:x=>c(x.target.value)}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Ciudad",value:f,onChange:x=>m(x.target.value)}),d.jsx("input",{className:"cf-input",type:"url",placeholder:"Web",value:g,onChange:x=>S(x.target.value)}),d.jsxs("select",{className:"cf-select",value:A,onChange:x=>P(x.target.value),children:[d.jsx("option",{value:"",children:"Selecciona ocupación"}),Y2.map(x=>d.jsx("option",{value:x,children:pd(x)},x))]}),d.jsxs("div",{className:"cf-rating",children:[d.jsx("span",{children:"Valoración:"}),d.jsx("div",{className:"stars",children:[1,2,3,4,5].map(x=>d.jsx("button",{type:"button",className:`star ${x<=b?"active":""}`,onClick:()=>C(x),children:x<=b?"★":"☆"},x))})]}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"M21 21l-4.35-4.35"})]}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar contacto...",value:V,onChange:x=>R(x.target.value)}),V&&d.jsx("button",{className:"search-clear",onClick:()=>R(""),children:"✕"})]}),y.length===0&&!w&&d.jsx("p",{className:"contacts-empty",children:V?"No se encontraron contactos.":"No has añadido ningún contacto todavía."}),d.jsx("div",{className:"contacts-list",children:k.map(x=>d.jsxs("div",{className:"contact-group",children:[d.jsx("h4",{className:"contact-group-title",children:x==="sin ocupacion"?"Otros":pd(x)}),N[x].map(I=>d.jsxs("div",{className:"contact-item fade-in",children:[d.jsxs("div",{className:"contact-item-info",children:[d.jsx("span",{className:"contact-item-name",children:I.name}),d.jsxs("div",{className:"contact-item-details",children:[I.phone&&d.jsxs("span",{children:["📞 ",I.phone]}),I.email&&d.jsxs("span",{children:["✉️ ",I.email]}),I.city&&d.jsxs("span",{children:["📍 ",I.city]}),I.webpage&&d.jsxs("span",{children:["🌐 ",I.webpage]}),d.jsxs("span",{className:"stars-small",children:["★".repeat(I.rating),"☆".repeat(5-I.rating)]})]}),(I.phone||I.email)&&d.jsxs("div",{className:"contact-actions",children:[I.phone&&d.jsx("a",{className:"contact-action-btn",href:`tel:${I.phone}`,title:"Llamar",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),I.email&&d.jsx("a",{className:"contact-action-btn",href:`mailto:${I.email}`,title:"Email",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),d.jsx("button",{className:"contact-action-btn",onClick:()=>E(I),title:"Compartir",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"18",cy:"5",r:"3"}),d.jsx("circle",{cx:"6",cy:"12",r:"3"}),d.jsx("circle",{cx:"18",cy:"19",r:"3"}),d.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),d.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})]})]}),d.jsx("button",{className:"contact-item-delete",onClick:()=>r(I.id),title:"Eliminar",children:"✕"})]},I.id))]},x))})]})}function X2({favorites:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,m]=j.useState(!1),g=P=>{P.preventDefault(),s.trim()&&(n({name:s.trim(),url:o.trim(),description:u.trim()}),i(""),l(""),c(""),m(!1))},S=[...t].sort((P,b)=>P.name.localeCompare(b.name));async function A(P){const b=`${P.name}${P.url?`
`+P.url:""}${P.description?`
`+P.description:""}`;if(navigator.share)try{await navigator.share({title:P.name,text:b});return}catch{}try{await navigator.clipboard.writeText(b)}catch{}}return d.jsxs("div",{className:"favorites",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"favorites-header",children:[d.jsxs("h3",{children:["Favoritos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-fav-btn",onClick:()=>m(!f),children:f?"✕ Cerrar":"+ Añadir favorito"})]}),f&&d.jsxs("form",{className:"fav-form fade-in",onSubmit:g,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:P=>i(P.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"url",placeholder:"URL (https://...)",value:o,onChange:P=>l(P.target.value)}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Descripción",value:u,onChange:P=>c(P.target.value)}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),S.length===0&&!f&&d.jsx("p",{className:"favorites-empty",children:"No has añadido ningún favorito todavía."}),d.jsx("div",{className:"favorites-list",children:S.map(P=>d.jsxs("div",{className:"fav-item fade-in",children:[d.jsxs("div",{className:"fav-item-info",children:[d.jsx("a",{className:"fav-item-name",href:P.url,target:"_blank",rel:"noopener noreferrer",children:P.name}),P.description&&d.jsx("span",{className:"fav-item-desc",children:P.description}),P.url&&d.jsx("span",{className:"fav-item-url",children:P.url})]}),d.jsxs("div",{className:"fav-item-actions",children:[d.jsx("button",{className:"fav-action-btn",onClick:()=>A(P),title:"Compartir",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:[d.jsx("circle",{cx:"18",cy:"5",r:"3"}),d.jsx("circle",{cx:"6",cy:"12",r:"3"}),d.jsx("circle",{cx:"18",cy:"19",r:"3"}),d.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),d.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),d.jsx("button",{className:"fav-item-delete",onClick:()=>r(P.id),title:"Eliminar",children:"✕"})]})]},P.id))})]})}const Z2=[{key:"length",label:"Longitud"},{key:"temp",label:"Temperatura"},{key:"weight",label:"Peso"},{key:"volume",label:"Volumen"},{key:"currency",label:"Moneda"}],Ya={length:[{key:"m",label:"Metro",toBase:1},{key:"km",label:"Kilómetro",toBase:1e3},{key:"cm",label:"Centímetro",toBase:.01},{key:"mm",label:"Milímetro",toBase:.001},{key:"mi",label:"Milla",toBase:1609.344},{key:"yd",label:"Yarda",toBase:.9144},{key:"ft",label:"Pie",toBase:.3048},{key:"in",label:"Pulgada",toBase:.0254}],weight:[{key:"kg",label:"Kilogramo",toBase:1},{key:"g",label:"Gramo",toBase:.001},{key:"mg",label:"Miligramo",toBase:1e-6},{key:"lb",label:"Libra",toBase:.453592},{key:"oz",label:"Onza",toBase:.0283495},{key:"t",label:"Tonelada",toBase:1e3}],volume:[{key:"l",label:"Litro",toBase:1},{key:"ml",label:"Mililitro",toBase:.001},{key:"gal",label:"Galón",toBase:3.78541},{key:"floz",label:"Onza líquida",toBase:.0295735},{key:"m3",label:"Metro cúbico",toBase:1e3}],currency:[{key:"eur",label:"Euro (EUR)",toBase:1},{key:"usd",label:"Dólar (USD)",toBase:.92},{key:"gbp",label:"Libra (GBP)",toBase:1.17},{key:"jpy",label:"Yen (JPY)",toBase:.0061},{key:"mxn",label:"Peso mexicano (MXN)",toBase:.045},{key:"ars",label:"Peso argentino (ARS)",toBase:95e-5}]};function eb(t,e,n){let r;return e==="c"?r=t:e==="f"?r=(t-32)*5/9:r=t-273.15,n==="c"?r:n==="f"?r*9/5+32:r+273.15}const Av=[{key:"c",label:"Celsius (°C)"},{key:"f",label:"Fahrenheit (°F)"},{key:"k",label:"Kelvin (K)"}];function Cv(t){if(!isFinite(t))return"—";const e=t.toPrecision(10),n=parseFloat(e);return n%1===0?n.toString():n.toFixed(4).replace(/\.?0+$/,"")}function tb(){var g,S;const[t,e]=j.useState("length"),[n,r]=j.useState(""),[s,i]=j.useState(""),[o,l]=j.useState(""),u=t==="temp",c=u?Av:Ya[t],f=A=>{e(A),r(""),i(""),l("")},m=(()=>{const A=parseFloat(o);if(isNaN(A)||!n||!s)return null;if(u)return Cv(eb(A,n,s));const P=Ya[t].find(C=>C.key===n),b=Ya[t].find(C=>C.key===s);return!P||!b?null:Cv(A*P.toBase/b.toBase)})();return d.jsxs("div",{className:"converter",children:[d.jsx("div",{className:"conv-cats",children:Z2.map(A=>d.jsx("button",{className:`conv-cat ${t===A.key?"active":""}`,onClick:()=>f(A.key),children:A.label},A.key))}),d.jsxs("div",{className:"conv-form",children:[d.jsx("input",{className:"cf-input",type:"number",placeholder:"Valor",value:o,onChange:A=>l(A.target.value)}),d.jsxs("div",{className:"conv-row",children:[d.jsxs("select",{className:"cf-select",value:n,onChange:A=>r(A.target.value),children:[d.jsx("option",{value:"",children:"De"}),c.map(A=>d.jsx("option",{value:A.key,children:A.label},A.key))]}),d.jsx("span",{className:"conv-arrow",children:"→"}),d.jsxs("select",{className:"cf-select",value:s,onChange:A=>i(A.target.value),children:[d.jsx("option",{value:"",children:"A"}),c.map(A=>d.jsx("option",{value:A.key,children:A.label},A.key))]})]}),m!==null&&d.jsxs("div",{className:"conv-result fade-in",children:[d.jsx("span",{className:"conv-result-value",children:m}),d.jsx("span",{className:"conv-result-unit",children:u?(g=Av.find(A=>A.key===s))==null?void 0:g.label:(S=Ya[t].find(A=>A.key===s))==null?void 0:S.label})]})]})]})}const kv=["¿Qué le dice un 0 a un 8? Bonito cinturón.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué hace una abeja en el gimnasio? Zumba.","—¡Ojalá fuera un chip! —Decía la patata.","¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.","—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.","¿Qué hace un pez en el cine? Nemo.","—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.","—Doctor, tengo 3 brazos. —Pues vístase y calle.","¿Qué hace una foca en una obra? Foca-pá.","—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.","—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.","Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?","¿Cómo se llama una italiana con bigote? Mafalda.","—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.","¿Qué le dice un jaguar a otro? Jaguar tú.","—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.","—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.","—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.","¿Cómo se llaman los primos de Tarzán? Los primos del monte.","—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.","—¿Qué es verde y habla por los codos? —Un perejil parlante.","—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.","¿Cómo se dice camarero en chino? Sumenú.","—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.","—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.","—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.","¿Qué hace un perro con un taladro? Taladrando.","—¿Qué son 50 caracoles? —Cincuenta centímetros.","Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien."],nb=["⚀","⚁","⚂","⚃","⚄","⚅"];function da(t,e){return Math.floor(Math.random()*(e-t+1))+t}function rb({onSelect:t}){const e=[{key:"dice",label:"Dado",icon:"🎲"},{key:"coin",label:"Moneda",icon:"🪙"},{key:"rps",label:`Piedra,
Papel,
Tijera`,icon:"✂️"},{key:"random",label:`Número
al azar`,icon:"🔢"},{key:"joke",label:"Chiste",icon:"💡"},{key:"pepe",label:`Pepe
Game`,icon:"🎮"}];return d.jsxs("div",{className:"ent-hub",children:[d.jsx("h3",{className:"ent-hub-title",children:"Entretenimiento"}),d.jsx("div",{className:"ent-grid",children:e.map(n=>d.jsxs("button",{className:"ent-card",onClick:()=>t(n.key),children:[d.jsx("span",{className:"ent-card-icon",children:n.icon}),d.jsx("span",{className:"ent-card-label",children:n.label})]},n.key))})]})}function sb(){const[t,e]=j.useState(null),[n,r]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🎲 Dado"}),d.jsx("div",{className:"ent-result",children:t&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"ent-dice",children:t}),d.jsx("span",{className:"ent-big-num",children:n})]})}),d.jsx("button",{className:"generate-btn",onClick:()=>{const s=da(1,6);e(nb[s-1]),r(s)},children:"Lanzar dado"})]})}function ib(){const[t,e]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🪙 Moneda"}),d.jsx("div",{className:"ent-result",children:t&&d.jsx("span",{className:"ent-coin",children:t==="cara"?"🪙 Cara":"🪙 Cruz"})}),d.jsx("button",{className:"generate-btn",onClick:()=>e(da(0,1)?"cara":"cruz"),children:"Lanzar moneda"})]})}function ob(){const t=[{key:"rock",label:"Piedra",icon:"🪨",beats:"scissors"},{key:"paper",label:"Papel",icon:"📄",beats:"rock"},{key:"scissors",label:"Tijera",icon:"✂️",beats:"paper"}],[e,n]=j.useState(null),[r,s]=j.useState(null),[i,o]=j.useState(null),l=c=>{const f=t[da(0,2)];n(c),s(f.key),c===f.key?o("🤝 Empate"):t.find(m=>m.key===c).beats===f.key?o("🎉 ¡Ganaste!"):o("😢 Perdiste")},u=()=>{n(null),s(null),o(null)};return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"✂️ Piedra, Papel o Tijera"}),e?d.jsxs("div",{className:"ent-rps-result",children:[d.jsxs("div",{className:"ent-rps-row",children:[d.jsxs("div",{className:"ent-rps-col",children:[d.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===e).icon}),d.jsx("span",{children:"Tú"})]}),d.jsx("span",{className:"ent-vs",children:"VS"}),d.jsxs("div",{className:"ent-rps-col",children:[d.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===r).icon}),d.jsx("span",{children:"App"})]})]}),d.jsx("div",{className:"ent-result",children:d.jsx("span",{className:"ent-rps-outcome",children:i})}),d.jsx("button",{className:"generate-btn",onClick:u,children:"Otra vez"})]}):d.jsx("div",{className:"ent-rps-btns",children:t.map(c=>d.jsxs("button",{className:"rps-btn",onClick:()=>l(c.key),children:[d.jsx("span",{className:"rps-icon",children:c.icon}),d.jsx("span",{children:c.label})]},c.key))})]})}function ab(){const[t,e]=j.useState("1"),[n,r]=j.useState("100"),[s,i]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🔢 Número al azar"}),d.jsxs("div",{className:"conv-row",style:{marginTop:0},children:[d.jsx("input",{className:"cf-input",type:"number",placeholder:"Mín",value:t,onChange:o=>e(o.target.value)}),d.jsx("span",{className:"conv-arrow",children:"→"}),d.jsx("input",{className:"cf-input",type:"number",placeholder:"Máx",value:n,onChange:o=>r(o.target.value)})]}),d.jsx("div",{className:"ent-result",children:s!==null&&d.jsx("span",{className:"ent-big-num",children:s})}),d.jsx("button",{className:"generate-btn",onClick:()=>i(da(parseInt(t)||0,parseInt(n)||100)),children:"Generar"})]})}function lb(){const[t,e]=j.useState("");return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"💡 Chiste"}),d.jsx("div",{className:"ent-joke-box",children:t&&d.jsx("p",{className:"ent-joke-text",children:t})}),d.jsx("button",{className:"generate-btn",onClick:()=>e(kv[da(0,kv.length-1)]),children:"Nuevo chiste"})]})}function ub(){return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🎮 Pepe Game"}),d.jsx("p",{style:{color:"#64748b",fontSize:14,marginBottom:16,textAlign:"center"},children:"Abrir Pepe Game en nueva pestaña"}),d.jsx("a",{className:"generate-btn",href:"https://jlrmaster-creator.github.io/pepe_game/1.html",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex"},children:"Abrir juego"})]})}const cb={dice:sb,coin:ib,rps:ob,random:ab,joke:lb,pepe:ub};function db(){const[t,e]=j.useState(null),n=t?cb[t]:null;return d.jsx("div",{className:"entertainment",children:t?d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"ent-back",onClick:()=>e(null),children:"← Volver"}),d.jsx(n,{})]}):d.jsx(rb,{onSelect:e})})}const hb=[{key:"daily",label:"A diario"},{key:"weekly",label:"Semanal"},{key:"monthly",label:"Mensual"},{key:"once",label:"Una vez"}],A0=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function fb(t){return t.earlyBird?7:9}function pb(t){const e=fb(t);return t.frequency==="daily"?`A diario (${e}:00)`:t.frequency==="weekly"?`Cada ${A0[t.weekday]} (${e}:00)`:t.frequency==="monthly"?`Día ${t.day} de cada mes (${e}:00)`:t.frequency==="once"?`${t.day}/${String(t.month).padStart(2,"0")} (${e}:00)`:""}function mb(t){return t.lastFiredAt?Date.now()-new Date(t.lastFiredAt).getTime()<36e5:!1}function md(t){return(t?7:9)+":00"}const gd={name:"",note:"",frequency:"daily",weekday:1,day:1,month:1,earlyBird:!1};function gb({reminders:t,error:e,justFired:n,onAdd:r,onUpdate:s,onRemove:i,onShare:o,onUnshare:l}){const[u,c]=j.useState({...gd}),[f,m]=j.useState(!1),[g,S]=j.useState(null),[A,P]=j.useState(null),[b,C]=j.useState(""),w=(y,N)=>c(k=>({...k,[y]:N})),T=()=>{c({...gd}),S(null),m(!0)},V=y=>{c({name:y.name,note:y.note||"",frequency:y.frequency,weekday:y.weekday??1,day:y.day??1,month:y.month??1,earlyBird:y.earlyBird??!1}),S(y.id),m(!0)},R=y=>{if(y.preventDefault(),!u.name.trim())return;const N={name:u.name.trim(),note:u.note.trim(),frequency:u.frequency,active:!0,earlyBird:u.earlyBird};u.frequency==="weekly"?N.weekday=u.weekday:u.frequency==="monthly"?N.day=u.day:u.frequency==="once"&&(N.day=u.day,N.month=u.month),g?s(g,N):r(N),c({...gd}),S(null),m(!1)},L=y=>{!b.trim()||!b.includes("@")||(o(y,b.trim()),C(""),P(null))},E=t.filter(y=>!y.isShared).length,v=[...t].sort((y,N)=>y.active!==N.active?y.active?-1:1:y.name.localeCompare(N.name));return d.jsxs("div",{className:"reminders",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"reminders-header",children:[d.jsxs("h3",{children:["Recordatorios ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-reminder-btn",onClick:T,disabled:E>=5&&!g,children:"+ Añadir"})]}),f&&d.jsxs("form",{className:"reminder-form fade-in",onSubmit:R,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre (ej: Tomar pastillas)",value:u.name,onChange:y=>w("name",y.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nota (opcional)",value:u.note,onChange:y=>w("note",y.target.value)}),d.jsx("select",{className:"cf-select",value:u.frequency,onChange:y=>w("frequency",y.target.value),children:hb.map(y=>d.jsx("option",{value:y.key,children:y.label},y.key))}),u.frequency==="weekly"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día de la semana:"}),d.jsx("select",{className:"cf-select",value:u.weekday,onChange:y=>w("weekday",parseInt(y.target.value)),children:A0.map((y,N)=>d.jsx("option",{value:N,children:y},N))})]}),u.frequency==="monthly"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día del mes:"}),d.jsx("select",{className:"cf-select",value:u.day,onChange:y=>w("day",parseInt(y.target.value)),children:Array.from({length:28},(y,N)=>d.jsx("option",{value:N+1,children:N+1},N+1))})]}),u.frequency==="once"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día:"}),d.jsxs("div",{className:"reminder-row",children:[d.jsx("select",{className:"cf-select",value:u.day,onChange:y=>w("day",parseInt(y.target.value)),children:Array.from({length:31},(y,N)=>d.jsx("option",{value:N+1,children:N+1},N+1))}),d.jsx("span",{className:"reminder-colon",children:"/"}),d.jsx("select",{className:"cf-select",value:u.month,onChange:y=>w("month",parseInt(y.target.value)),children:Array.from({length:12},(y,N)=>d.jsx("option",{value:N+1,children:String(N+1).padStart(2,"0")},N+1))})]})]}),d.jsxs("label",{className:"reminder-checkbox-label",children:[d.jsx("input",{type:"checkbox",className:"reminder-checkbox",checked:u.earlyBird,onChange:y=>w("earlyBird",y.target.checked)}),d.jsxs("span",{children:["¿Eres madrugador? La primera notificación sonará a las ",d.jsx("strong",{children:md(u.earlyBird)})]})]}),d.jsxs("p",{className:"reminder-form-hint",children:["El aviso sonará cada hora desde las ",md(u.earlyBird)," hasta que lo desactives (🔔)."]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>{m(!1),S(null)},children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:g?"Guardar cambios":"Crear recordatorio"})]})]}),v.length===0&&!f&&d.jsx("p",{className:"reminders-empty",children:"No tienes recordatorios. ¡Añade uno!"}),d.jsx("div",{className:"reminders-list",children:v.map(y=>{const N=mb(y)||n===y.id;return d.jsxs("div",{className:`reminder-item fade-in ${N?"fired":""} ${y.active?"":"inactive"}`,children:[d.jsxs("div",{className:"reminder-item-left",children:[d.jsxs("div",{className:"reminder-item-header",children:[d.jsx("span",{className:"reminder-item-name",children:y.name}),N&&d.jsx("span",{className:"reminder-fired-badge",children:"✅ Ahora"})]}),y.note&&d.jsx("span",{className:"reminder-item-note",children:y.note}),d.jsx("span",{className:"reminder-item-time",children:pb(y)}),y.active&&d.jsxs("span",{className:"reminder-hourly-note",children:["Cada hora desde las ",md(y.earlyBird)," hasta desactivar (🔔)"]}),y.isShared&&y.ownerEmail&&d.jsxs("span",{className:"reminder-shared-from",children:["Compartido por ",y.ownerEmail]}),!y.isShared&&y.sharedWithEmails&&y.sharedWithEmails.length>0&&d.jsx("div",{className:"reminder-shared-with",children:y.sharedWithEmails.map((k,x)=>d.jsxs("span",{className:"reminder-shared-tag",children:[k,d.jsx("button",{className:"reminder-shared-remove",onClick:()=>l(y.id,y.sharedWithUids[x],k),title:"Eliminar",children:"✕"})]},k))})]}),d.jsx("div",{className:"reminder-item-actions",children:!y.isShared&&d.jsxs(d.Fragment,{children:[d.jsx("button",{className:`reminder-toggle-btn ${y.active?"on":"off"}`,onClick:()=>s(y.id,{active:!y.active}),title:y.active?"Desactivar":"Activar",children:y.active?"🔔":"🔕"}),d.jsx("button",{className:"reminder-edit-btn",onClick:()=>V(y),title:"Editar",children:"✏️"}),d.jsx("button",{className:"reminder-share-btn",onClick:()=>P(A===y.id?null:y.id),title:"Compartir",children:"📤"}),d.jsx("button",{className:"reminder-delete-btn",onClick:()=>i(y.id),title:"Eliminar",children:"🗑️"})]})}),A===y.id&&!y.isShared&&d.jsxs("div",{className:"reminder-share-form fade-in",children:[d.jsx("input",{className:"cf-input",type:"email",placeholder:"Email del usuario",value:b,onChange:k=>C(k.target.value)}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,padding:"8px 12px",fontSize:13},onClick:()=>L(y.id),children:"Compartir"})]})]},y.id)})}),E>=5&&!g&&d.jsx("p",{className:"reminders-limit",children:"Máximo 5 recordatorios propios permitidos."})]})}const yb=[{value:"#ffffff",label:"Blanco"},{value:"#fef9c3",label:"Amarillo"},{value:"#dcfce7",label:"Verde"},{value:"#dbeafe",label:"Azul"},{value:"#fce7f3",label:"Rosa"},{value:"#ede9fe",label:"Lila"}],Ja={title:"",body:"",color:"#fef9c3"};function vb({notes:t,error:e,maxNotes:n,onAdd:r,onUpdate:s,onRemove:i,onTogglePin:o}){const[l,u]=j.useState({...Ja}),[c,f]=j.useState(!1),[m,g]=j.useState(null),S=(T,V)=>u(R=>({...R,[T]:V})),A=()=>{u({...Ja}),g(null),f(!0)},P=T=>{u({title:T.title,body:T.body,color:T.color}),g(T.id),f(!0)},b=T=>{T.preventDefault(),!(!l.body.trim()&&!l.title.trim())&&(m?s(m,{title:l.title.trim(),body:l.body.trim(),color:l.color}):r({title:l.title.trim(),body:l.body.trim(),color:l.color}),u({...Ja}),g(null),f(!1))},C=()=>{u({...Ja}),g(null),f(!1)},w=t.length>=n&&!m;return d.jsxs("div",{className:"notes",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"notes-header",children:[d.jsxs("h3",{children:["Notas",t.length>0&&d.jsxs("span",{className:"count-badge",children:[t.length,"/",n]})]}),d.jsx("button",{className:"add-note-btn",onClick:A,disabled:w,children:"+ Añadir"})]}),c&&d.jsxs("form",{className:"note-form fade-in",onSubmit:b,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Título (opcional)",value:l.title,onChange:T=>S("title",T.target.value),maxLength:60}),d.jsx("textarea",{className:"note-form-textarea",placeholder:"Escribe tu nota aquí…",value:l.body,onChange:T=>S("body",T.target.value),rows:4,maxLength:500,required:!l.title.trim()}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Color:"}),d.jsx("div",{className:"note-color-swatches",children:yb.map(T=>d.jsx("button",{type:"button",title:T.label,className:`note-color-swatch ${l.color===T.value?"selected":""}`,style:{background:T.value},onClick:()=>S("color",T.value)},T.value))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:C,children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:m?"Guardar cambios":"Crear nota"})]})]}),t.length===0&&!c&&d.jsx("p",{className:"reminders-empty",children:"No tienes notas. ¡Añade una!"}),d.jsx("div",{className:"notes-grid",children:t.map(T=>d.jsxs("div",{className:`note-card fade-in ${T.pinned?"pinned":""}`,style:{background:T.color||"#ffffff"},children:[d.jsxs("div",{className:"note-card-top",children:[T.title&&d.jsx("p",{className:"note-card-title",children:T.title}),d.jsx("p",{className:"note-card-body",children:T.body})]}),d.jsxs("div",{className:"note-card-footer",children:[d.jsx("span",{className:"note-card-date",children:new Date(T.updatedAt).toLocaleDateString("es-ES",{day:"2-digit",month:"short"})}),d.jsxs("div",{className:"note-card-actions",children:[d.jsx("button",{className:`note-pin-btn ${T.pinned?"active":""}`,onClick:()=>o(T.id),title:T.pinned?"Desanclar":"Anclar",children:"📌"}),d.jsx("button",{className:"note-edit-btn",onClick:()=>P(T),title:"Editar",children:"✏️"}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(T.id),title:"Eliminar",children:"🗑️"})]})]})]},T.id))}),w&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," notas permitidas."]})]})}const _b=["#2d6a4f","#1d4ed8","#7c3aed","#b45309","#be185d","#0e7490","#4d7c0f","#9f1239"],Eb=["EUR","USD","GBP"],xv={name:"",clientName:"",rate:"",currency:"EUR",color:"#2d6a4f"};function Xa(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}h ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(r).padStart(2,"0")}s`:`${r}s`}function Za(t,e,n){return e?(t/3600*e).toLocaleString("es-ES",{style:"currency",currency:n,minimumFractionDigits:2}):null}function wb(t){return new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"})}function Rv(t){return new Date(t).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}function Tb({projects:t,entries:e,error:n,maxProjects:r,activeProjectId:s,elapsed:i,secondsByProject:o,onAddProject:l,onRemoveProject:u,onStartTimer:c,onStopTimer:f,onRemoveEntry:m}){var xt;const[g,S]=j.useState(!1),[A,P]=j.useState({...xv}),[b,C]=j.useState(""),[w,T]=j.useState(!1),[V,R]=j.useState(null),[L,E]=j.useState(null),v=(q,ot)=>P(B=>({...B,[q]:ot})),y=q=>{q.preventDefault(),A.name.trim()&&(l({...A,rate:parseFloat(A.rate)||0}),P({...xv}),S(!1))},N=async()=>{await f(b.trim()),C(""),T(!1)},k=t.find(q=>q.id===s),x=t.length>=r,I=V?e.filter(q=>q.projectId===V):e,de=I.reduce((q,ot)=>q+(ot.durationSec||0),0);return d.jsxs("div",{className:"time-tracker",children:[n&&d.jsx("p",{className:"error",children:n}),s&&k&&d.jsxs("div",{className:"timer-banner fade-in",style:{borderColor:k.color},children:[d.jsxs("div",{className:"timer-banner-left",children:[d.jsx("span",{className:"timer-dot",style:{background:k.color}}),d.jsxs("div",{children:[d.jsx("p",{className:"timer-project-name",children:k.name}),k.clientName&&d.jsx("p",{className:"timer-client",children:k.clientName})]})]}),d.jsxs("div",{className:"timer-banner-right",children:[d.jsx("span",{className:"timer-elapsed",children:Xa(i)}),k.rate>0&&d.jsx("span",{className:"timer-earning",children:Za(i,k.rate,k.currency)}),d.jsx("button",{className:"timer-stop-btn",onClick:()=>T(!0),children:"⏹ Parar"})]})]}),w&&d.jsx("div",{className:"modal-overlay fade-in",onClick:()=>T(!1),children:d.jsxs("div",{className:"modal-card",onClick:q=>q.stopPropagation(),children:[d.jsx("h4",{className:"modal-title",children:"Parar cronómetro"}),d.jsx("p",{className:"modal-subtitle",children:"¿Añadir una nota sobre lo trabajado? (opcional)"}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Ej: Reunión con cliente, diseño logo...",value:b,onChange:q=>C(q.target.value),autoFocus:!0}),d.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[d.jsx("button",{className:"reminder-cancel-btn",onClick:()=>T(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1},onClick:N,children:"Guardar"})]})]})}),d.jsxs("div",{className:"time-section-header",children:[d.jsxs("h3",{children:["Proyectos ",d.jsxs("span",{className:"count-badge",children:[t.length,"/",r]})]}),d.jsx("button",{className:"add-note-btn",onClick:()=>S(!g),disabled:x&&!g,children:"+ Añadir"})]}),g&&d.jsxs("form",{className:"note-form fade-in",onSubmit:y,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre del proyecto *",value:A.name,onChange:q=>v("name",q.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Cliente (opcional)",value:A.clientName,onChange:q=>v("clientName",q.target.value)}),d.jsxs("div",{className:"time-rate-row",children:[d.jsx("input",{className:"cf-input",type:"number",min:"0",step:"0.5",placeholder:"Tarifa €/h (opcional)",value:A.rate,onChange:q=>v("rate",q.target.value),style:{flex:2}}),d.jsx("select",{className:"cf-select",value:A.currency,onChange:q=>v("currency",q.target.value),style:{flex:1},children:Eb.map(q=>d.jsx("option",{children:q},q))})]}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Color:"}),d.jsx("div",{className:"note-color-swatches",children:_b.map(q=>d.jsx("button",{type:"button",className:`note-color-swatch ${A.color===q?"selected":""}`,style:{background:q},onClick:()=>v("color",q)},q))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>S(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Crear proyecto"})]})]}),t.length===0&&!g&&d.jsx("p",{className:"reminders-empty",children:"No tienes proyectos. ¡Crea uno para empezar!"}),d.jsx("div",{className:"projects-list",children:t.map(q=>{const ot=o[q.id]||0,B=s===q.id;return d.jsxs("div",{className:`project-card fade-in ${B?"project-active":""}`,style:{borderLeftColor:q.color},children:[d.jsxs("div",{className:"project-card-info",children:[d.jsx("span",{className:"project-card-name",children:q.name}),q.clientName&&d.jsx("span",{className:"project-card-client",children:q.clientName}),d.jsxs("div",{className:"project-card-stats",children:[d.jsxs("span",{className:"project-stat",children:["🕐 ",Xa(ot)]}),q.rate>0&&d.jsxs("span",{className:"project-stat",children:["💰 ",Za(ot,q.rate,q.currency)]})]})]}),d.jsxs("div",{className:"project-card-actions",children:[B?d.jsx("button",{className:"timer-start-btn stop",onClick:()=>T(!0),children:"⏹"}):d.jsx("button",{className:"timer-start-btn",onClick:()=>c(q.id),disabled:!!s,title:"Iniciar cronómetro",children:"▶"}),d.jsx("button",{className:"note-delete-btn",onClick:()=>E(q.id),title:"Eliminar proyecto",style:{opacity:.6,fontSize:15},children:"🗑️"})]})]},q.id)})}),L&&d.jsx("div",{className:"modal-overlay fade-in",onClick:()=>E(null),children:d.jsxs("div",{className:"modal-card",onClick:q=>q.stopPropagation(),children:[d.jsx("h4",{className:"modal-title",children:"¿Eliminar proyecto?"}),d.jsx("p",{className:"modal-subtitle",children:"Se eliminarán también todos sus registros de horas."}),d.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[d.jsx("button",{className:"reminder-cancel-btn",onClick:()=>E(null),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1,background:"linear-gradient(135deg,#dc2626,#b91c1c)"},onClick:()=>{u(L),E(null)},children:"Eliminar"})]})]})}),e.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"time-section-header",style:{marginTop:20},children:[d.jsx("h3",{children:"Historial"}),t.length>0&&d.jsxs("select",{className:"cf-select",style:{fontSize:12,padding:"4px 8px"},value:V||"",onChange:q=>R(q.target.value||null),children:[d.jsx("option",{value:"",children:"Todos los proyectos"}),t.map(q=>d.jsx("option",{value:q.id,children:q.name},q.id))]})]}),de>0&&d.jsxs("div",{className:"time-total-bar",children:[d.jsxs("span",{children:["Total: ",d.jsx("strong",{children:Xa(de)})]}),((xt=I[0])==null?void 0:xt.rate)>0&&d.jsxs("span",{children:["≈ ",d.jsx("strong",{children:Za(de,I[0].rate,I[0].currency)})]})]}),d.jsx("div",{className:"entries-list",children:I.slice(0,30).map(q=>{var ot;return d.jsxs("div",{className:"entry-item fade-in",children:[d.jsx("div",{className:"entry-dot",style:{background:((ot=t.find(B=>B.id===q.projectId))==null?void 0:ot.color)||"#94a3b8"}}),d.jsxs("div",{className:"entry-info",children:[d.jsx("span",{className:"entry-project",children:q.projectName}),q.notes&&d.jsx("span",{className:"entry-notes",children:q.notes}),d.jsxs("span",{className:"entry-time",children:[wb(q.startedAt)," · ",Rv(q.startedAt)," – ",Rv(q.endedAt)]})]}),d.jsxs("div",{className:"entry-right",children:[d.jsx("span",{className:"entry-duration",children:Xa(q.durationSec)}),q.rate>0&&d.jsx("span",{className:"entry-money",children:Za(q.durationSec,q.rate,q.currency)}),d.jsx("button",{className:"note-delete-btn",onClick:()=>m(q.id),style:{opacity:.5,fontSize:13},title:"Eliminar registro",children:"🗑️"})]})]},q.id)})})]}),x&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",r," proyectos permitidos."]})]})}const Ib=[21,10,4,0],Sb=[0,7,15],Pv={type:"income",concept:"",clientOrProvider:"",amount:"",vatRate:21,irpfRate:0,date:new Date().toISOString().split("T")[0]};function Bt(t,e="EUR"){return t.toLocaleString("es-ES",{style:"currency",currency:e,minimumFractionDigits:2})}function Nb(t){const e=new Date(t).getMonth();return e>=0&&e<=2?"Q1":e>=3&&e<=5?"Q2":e>=6&&e<=8?"Q3":"Q4"}function Ab({entries:t,error:e,maxEntries:n,stats:r,onAddEntry:s,onRemoveEntry:i}){const[o,l]=j.useState(!1),[u,c]=j.useState({...Pv}),[f,m]=j.useState("ALL"),[g,S]=j.useState(new Date().getFullYear().toString()),A=(R,L)=>c(E=>({...E,[R]:L})),P=R=>{R.preventDefault(),!(!u.concept.trim()||!u.amount)&&(s({type:u.type,concept:u.concept.trim(),clientOrProvider:u.clientOrProvider.trim(),amount:parseFloat(u.amount)||0,vatRate:parseInt(u.vatRate)||0,irpfRate:u.type==="income"&&parseInt(u.irpfRate)||0,date:u.date}),c({...Pv,type:u.type}),l(!1))},b=j.useMemo(()=>{const R=new Set([new Date().getFullYear().toString()]);return t.forEach(L=>{L.date&&R.add(L.date.split("-")[0])}),Array.from(R).sort((L,E)=>E-L)},[t]),C=j.useMemo(()=>t.filter(R=>{const L=R.date.split("-")[0],E=Nb(R.date);return L===g&&(f==="ALL"||E===f)}),[t,f,g]),w=j.useMemo(()=>{let R=0,L=0,E=0,v=0,y=0;C.forEach(x=>{x.type==="income"?(R+=x.amount||0,E+=x.vatAmount||0,y+=x.irpfAmount||0):(L+=x.amount||0,v+=x.vatAmount||0)});const N=R-L,k=E-v;return{incomes:R,expenses:L,vatRep:E,vatSop:v,irpf:y,profit:N,vatBal:k}},[C]),T=()=>{if(C.length===0)return;const R=["Fecha","Tipo","Concepto","Cliente/Proveedor","Base Imponible (€)","IVA %","Cuota IVA (€)","IRPF %","Cuota IRPF (€)","Total (€)"],L=C.map(k=>[k.date,k.type==="income"?"Ingreso":"Gasto",k.concept.replace(/"/g,'""'),k.clientOrProvider.replace(/"/g,'""'),k.amount.toFixed(2),k.vatRate,k.vatAmount.toFixed(2),k.type==="income"?k.irpfRate:0,k.type==="income"?k.irpfAmount.toFixed(2):0,k.total.toFixed(2)]),E="\uFEFF"+[R.join(";"),...L.map(k=>k.join(";"))].join(`
`),v=new Blob([E],{type:"text/csv;charset=utf-8;"}),y=URL.createObjectURL(v),N=document.createElement("a");N.setAttribute("href",y),N.setAttribute("download",`Contabilidad_${g}_${f==="ALL"?"Anual":f}.csv`),document.body.appendChild(N),N.click(),document.body.removeChild(N)},V=t.length>=n&&!o;return d.jsxs("div",{className:"finance-tracker",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"finance-stats-grid",children:[d.jsxs("div",{className:"finance-stat-card income",children:[d.jsx("span",{className:"finance-stat-title",children:"Ingresos (Bases)"}),d.jsx("span",{className:"finance-stat-value",children:Bt(w.incomes)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Repercutido: ",Bt(w.vatRep)]})]}),d.jsxs("div",{className:"finance-stat-card expense",children:[d.jsx("span",{className:"finance-stat-title",children:"Gastos (Bases)"}),d.jsx("span",{className:"finance-stat-value",children:Bt(w.expenses)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Soportado: ",Bt(w.vatSop)]})]}),d.jsxs("div",{className:"finance-stat-card profit",children:[d.jsx("span",{className:"finance-stat-title",children:"Rendimiento Neto"}),d.jsx("span",{className:"finance-stat-value",style:{color:w.profit>=0?"#2d6a4f":"#dc2626"},children:Bt(w.profit)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IRPF Retenido: ",Bt(w.irpf)]})]}),d.jsxs("div",{className:"finance-stat-card vat",children:[d.jsx("span",{className:"finance-stat-title",children:"Balance IVA (Hacienda)"}),d.jsx("span",{className:"finance-stat-value",style:{color:w.vatBal>=0?"#b45309":"#1d4ed8"},children:Bt(w.vatBal)}),d.jsx("span",{className:"finance-stat-subtitle",children:w.vatBal>=0?"A pagar":"A devolver"})]})]}),d.jsxs("div",{className:"finance-toolbar",children:[d.jsxs("div",{className:"finance-filters",children:[d.jsx("select",{className:"cf-select filter-select",value:g,onChange:R=>S(R.target.value),children:b.map(R=>d.jsx("option",{value:R,children:R},R))}),d.jsxs("select",{className:"cf-select filter-select",value:f,onChange:R=>m(R.target.value),children:[d.jsx("option",{value:"ALL",children:"Todo el año"}),d.jsx("option",{value:"Q1",children:"1º Trimestre (Ene-Mar)"}),d.jsx("option",{value:"Q2",children:"2º Trimestre (Abr-Jun)"}),d.jsx("option",{value:"Q3",children:"3º Trimestre (Jul-Sep)"}),d.jsx("option",{value:"Q4",children:"4º Trimestre (Oct-Dic)"})]})]}),d.jsxs("div",{className:"finance-actions-row",children:[d.jsx("button",{className:"add-note-btn",onClick:()=>l(!o),disabled:V,style:{flex:1},children:o?"Cerrar":"+ Añadir Asiento"}),C.length>0&&d.jsx("button",{className:"export-csv-btn",onClick:T,title:"Exportar a Excel / CSV",children:"📥 Exportar"})]})]}),o&&d.jsxs("form",{className:"note-form fade-in",onSubmit:P,children:[d.jsxs("div",{className:"finance-type-toggle",children:[d.jsx("button",{type:"button",className:`toggle-btn income ${u.type==="income"?"active":""}`,onClick:()=>A("type","income"),children:"🟢 Ingreso (Factura emitida)"}),d.jsx("button",{type:"button",className:`toggle-btn expense ${u.type==="expense"?"active":""}`,onClick:()=>A("type","expense"),children:"🔴 Gasto (Factura recibida)"})]}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"date",value:u.date,onChange:R=>A("date",R.target.value),required:!0,style:{flex:1}})}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Concepto (ej: Servicio consultoría, Alquiler local...)",value:u.concept,onChange:R=>A("concept",R.target.value),required:!0,maxLength:100}),d.jsx("input",{className:"cf-input",type:"text",placeholder:u.type==="income"?"Cliente (ej: ACME S.L.)":"Proveedor (ej: Iberdrola)",value:u.clientOrProvider,onChange:R=>A("clientOrProvider",R.target.value),maxLength:100}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"number",min:"0.01",step:"0.01",placeholder:"Base imponible (€) *",value:u.amount,onChange:R=>A("amount",R.target.value),required:!0,style:{flex:1}})}),d.jsxs("div",{className:"finance-tax-selectors",children:[d.jsxs("div",{className:"tax-selector",children:[d.jsx("span",{className:"reminder-label",children:"IVA:"}),d.jsx("select",{className:"cf-select",value:u.vatRate,onChange:R=>A("vatRate",parseInt(R.target.value)),children:Ib.map(R=>d.jsxs("option",{value:R,children:[R,"%"]},R))})]}),u.type==="income"&&d.jsxs("div",{className:"tax-selector",children:[d.jsx("span",{className:"reminder-label",children:"Retención IRPF:"}),d.jsx("select",{className:"cf-select",value:u.irpfRate,onChange:R=>A("irpfRate",parseInt(R.target.value)),children:Sb.map(R=>d.jsxs("option",{value:R,children:[R,"%"]},R))})]})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>l(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Registrar Asiento"})]})]}),C.length===0&&!o&&d.jsx("p",{className:"reminders-empty",children:"No hay registros para este trimestre."}),d.jsx("div",{className:"finance-list",children:C.map(R=>{const L=R.type==="income";return d.jsxs("div",{className:`finance-item fade-in ${L?"income":"expense"}`,children:[d.jsxs("div",{className:"finance-item-left",children:[d.jsxs("div",{className:"finance-item-header",children:[d.jsx("span",{className:"finance-item-concept",children:R.concept}),d.jsx("span",{className:"finance-item-date",children:new Date(R.date).toLocaleDateString("es-ES")})]}),R.clientOrProvider&&d.jsxs("span",{className:"finance-item-client",children:[L?"Cliente: ":"Prov: "," ",R.clientOrProvider]}),d.jsxs("div",{className:"finance-item-tax-details",children:[d.jsxs("span",{children:["Base: ",Bt(R.amount)]}),d.jsx("span",{children:"·"}),d.jsxs("span",{children:["IVA (",R.vatRate,"%): ",Bt(R.vatAmount)]}),L&&R.irpfRate>0&&d.jsxs(d.Fragment,{children:[d.jsx("span",{children:"·"}),d.jsxs("span",{children:["IRPF (-",R.irpfRate,"%): ",Bt(R.irpfAmount)]})]})]})]}),d.jsxs("div",{className:"finance-item-right",children:[d.jsxs("span",{className:`finance-item-total ${L?"income":"expense"}`,children:[L?"+":"-"," ",Bt(R.total)]}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(R.id),title:"Eliminar asiento",style:{opacity:.5,fontSize:13},children:"🗑️"})]})]},R.id)})}),V&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," asientos permitidos."]})]})}const yd=[{value:"low",label:"Baja",color:"#3b82f6",bg:"#dbeafe"},{value:"medium",label:"Media",color:"#f59e0b",bg:"#fef3c7"},{value:"high",label:"Alta",color:"#ef4444",bg:"#fee2e2"}],bv={title:"",description:"",dueDate:"",priority:"medium",clientName:""};function Cb(t){if(!t)return!1;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t);return n.setHours(0,0,0,0),n<e}function kb(t){return t?new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"short"}):""}function xb({tasks:t,error:e,maxTasks:n,onAdd:r,onToggleStatus:s,onRemove:i}){const[o,l]=j.useState(!1),[u,c]=j.useState({...bv}),[f,m]=j.useState(""),[g,S]=j.useState("all"),[A,P]=j.useState("pending"),b=(R,L)=>c(E=>({...E,[R]:L})),C=R=>{R.preventDefault(),u.title.trim()&&(r({title:u.title.trim(),description:u.description.trim(),dueDate:u.dueDate,priority:u.priority,clientName:u.clientName.trim()}),c({...bv}),l(!1))},w=j.useMemo(()=>t.filter(R=>{const L=R.title.toLowerCase().includes(f.toLowerCase())||R.description.toLowerCase().includes(f.toLowerCase())||R.clientName.toLowerCase().includes(f.toLowerCase()),E=g==="all"||R.priority===g,v=A==="all"||R.status===A;return L&&E&&v}),[t,f,g,A]),T=t.length>=n&&!o,V=t.filter(R=>R.status==="pending").length;return d.jsxs("div",{className:"task-list-section",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsx("div",{className:"task-overview",children:d.jsxs("span",{children:["Tienes ",d.jsx("strong",{children:V})," tareas pendientes"]})}),d.jsxs("div",{className:"task-toolbar",children:[d.jsxs("div",{className:"search-box",children:[d.jsx("svg",{className:"search-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar tarea, cliente...",value:f,onChange:R=>m(R.target.value)}),f&&d.jsx("button",{className:"search-clear",onClick:()=>m(""),children:"✕"})]}),d.jsxs("div",{className:"finance-filters",children:[d.jsxs("select",{className:"cf-select filter-select",value:A,onChange:R=>P(R.target.value),children:[d.jsx("option",{value:"pending",children:"Pendientes"}),d.jsx("option",{value:"completed",children:"Completadas"}),d.jsx("option",{value:"all",children:"Todas"})]}),d.jsxs("select",{className:"cf-select filter-select",value:g,onChange:R=>S(R.target.value),children:[d.jsx("option",{value:"all",children:"Cualquier prioridad"}),d.jsx("option",{value:"low",children:"Prioridad Baja"}),d.jsx("option",{value:"medium",children:"Prioridad Media"}),d.jsx("option",{value:"high",children:"Prioridad Alta"})]})]}),d.jsx("button",{className:"add-note-btn",onClick:()=>l(!o),disabled:T,style:{width:"100%"},children:o?"Cerrar formulario":"+ Nueva Tarea"})]}),o&&d.jsxs("form",{className:"note-form fade-in",onSubmit:C,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre de la tarea *",value:u.title,onChange:R=>b("title",R.target.value),required:!0,maxLength:100}),d.jsx("textarea",{className:"note-form-textarea",placeholder:"Detalles / descripción de la tarea (opcional)",value:u.description,onChange:R=>b("description",R.target.value),rows:3,maxLength:300}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"date",value:u.dueDate,onChange:R=>b("dueDate",R.target.value),style:{flex:1}})}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Cliente o Proyecto (ej: Proyecto Tienda)",value:u.clientName,onChange:R=>b("clientName",R.target.value),maxLength:50}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Prioridad:"}),d.jsx("div",{className:"task-priority-toggle",children:yd.map(R=>d.jsx("button",{type:"button",className:`priority-btn ${u.priority===R.value?"active":""}`,style:{"--active-color":R.color,"--active-bg":R.bg},onClick:()=>b("priority",R.value),children:R.label},R.value))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>l(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Guardar Tarea"})]})]}),w.length===0&&!o&&d.jsx("p",{className:"reminders-empty",children:"No hay tareas que coincidan con los filtros."}),d.jsx("div",{className:"tasks-container",children:w.map(R=>{const L=R.status==="pending"&&Cb(R.dueDate),E=yd.find(v=>v.value===R.priority)||yd[1];return d.jsxs("div",{className:`task-item fade-in ${R.status==="completed"?"completed":""}`,children:[d.jsxs("label",{className:"task-checkbox-container",children:[d.jsx("input",{type:"checkbox",checked:R.status==="completed",onChange:()=>s(R.id)}),d.jsx("span",{className:"task-checkmark"})]}),d.jsxs("div",{className:"task-body",children:[d.jsx("p",{className:"task-title",children:R.title}),R.description&&d.jsx("p",{className:"task-desc",children:R.description}),d.jsxs("div",{className:"task-badges",children:[R.clientName&&d.jsxs("span",{className:"task-badge client",children:["💼 ",R.clientName]}),R.dueDate&&d.jsxs("span",{className:`task-badge date ${L?"overdue":""}`,children:["📅 ",kb(R.dueDate)," ",L&&" ⚠️ Retrasada"]}),d.jsx("span",{className:"task-badge priority",style:{background:E.bg,color:E.color},children:E.label})]})]}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(R.id),title:"Eliminar tarea",style:{opacity:.5,fontSize:13,alignSelf:"flex-start",marginTop:2},children:"🗑️"})]},R.id)})}),T&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," tareas permitidas."]})]})}const vd=[{key:"reply",label:"Responder",icon:"💬"},{key:"birthdays",label:"Cumpleaños",icon:"🎂"},{key:"contacts",label:"Contactos",icon:"👥"},{key:"converter",label:"Conversor",icon:"🔄"},{key:"favorites",label:"Favoritos",icon:"🔗"},{key:"entertainment",label:"Entretenimiento",icon:"🎮"},{key:"reminders",label:"Recordatorios",icon:"🔔"},{key:"notes",label:"Notas",icon:"📝"},{key:"time",label:"Control de Horas",icon:"⏱️"},{key:"finance",label:"Contabilidad",icon:"💰"},{key:"tasks",label:"Tareas",icon:"📋"}];function Rb(){const[t,e]=j.useState("reply"),[n,r]=j.useState(!1),s=j.useRef(null),{user:i,logout:o}=vn(),l=QP(),u=e2(),c=s2(),f=l2(),m=w2(),g=N2(),S=b2(),A=O2(),P=z2();j.useEffect(()=>{const T=V=>{s.current&&!s.current.contains(V.target)&&r(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const b=T=>{const V=vd.find(R=>R.key===T);if(V!=null&&V.url){window.open(V.url,"_blank"),r(!1);return}e(T),r(!1)},C=vd.find(T=>T.key===t),w=C&&!C.url?C.label:"";return d.jsxs("div",{className:"container",children:[d.jsxs("header",{children:[d.jsxs("div",{className:"header-row",children:[d.jsxs("div",{className:"header-left",ref:s,children:[d.jsx("button",{className:"hamburger-btn",onClick:()=>r(!n),"aria-label":"Menú",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),n&&d.jsx("div",{className:"dropdown-menu",children:vd.map(T=>d.jsxs("button",{className:`dropdown-item ${t===T.key?"active":""}`,onClick:()=>b(T.key),children:[d.jsx("span",{className:"dropdown-icon",children:T.icon}),T.label]},T.key))})]}),d.jsx("h1",{children:"Toolbox AI"}),d.jsxs("div",{className:"header-user",children:[d.jsx("span",{className:"header-email",children:i.email}),d.jsx("button",{className:"logout-btn",onClick:o,title:"Cerrar sesión",children:d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),d.jsx("div",{className:"current-tab-label",children:w})]}),t==="reply"?d.jsxs("div",{className:"tab-content",children:[d.jsx($2,{value:l.message,onChange:T=>l.setMessage(T.target.value)}),d.jsx(W2,{selected:l.mode,onSelect:l.setMode}),d.jsx(H2,{onClick:l.generate,loading:l.loading}),l.error&&d.jsx("p",{className:"error fade-in",children:l.error}),d.jsx(G2,{response:l.response,mode:l.mode,onSend:l.sendToWhatsApp,onRegenerate:l.generate,onMakeFunnier:l.makeFunnier}),l.history.length>0&&d.jsxs("section",{className:"history",children:[d.jsxs("div",{className:"history-header",children:[d.jsx("h3",{children:"Historial"}),d.jsx("button",{className:"history-clear",onClick:l.clearHistory,children:"Limpiar"})]}),l.history.slice(0,5).map((T,V)=>d.jsxs("div",{className:"history-item fade-in",children:[d.jsxs("div",{className:"history-item-header",children:[d.jsxs("span",{className:"history-mode-badge",children:[T.mode==="funny"?"😄":T.mode==="elegant"?"⭐":T.mode==="cold"?"❄️":"🔑"," ",T.mode]}),d.jsx("span",{className:"history-time",children:new Date(T.date).toLocaleTimeString()})]}),d.jsx("p",{className:"history-reply",children:T.reply})]},V))]})]}):t==="birthdays"?d.jsx("div",{className:"tab-content",children:d.jsx(Q2,{friends:u.friends,todayBirthdays:u.todayBirthdays,error:u.error,onAdd:u.addFriend,onRemove:u.removeFriend,onSendGreeting:u.sendGreeting,onSendReminder:u.sendReminder})}):t==="contacts"?d.jsx("div",{className:"tab-content",children:d.jsx(J2,{contacts:c.contacts,error:c.error,onAdd:c.addContact,onRemove:c.removeContact})}):t==="converter"?d.jsx("div",{className:"tab-content",children:d.jsx(tb,{})}):t==="entertainment"?d.jsx("div",{className:"tab-content",children:d.jsx(db,{})}):t==="reminders"?d.jsx("div",{className:"tab-content",children:d.jsx(gb,{reminders:m.reminders,error:m.error,justFired:m.justFired,userEmail:m.userEmail,onAdd:m.addReminder,onUpdate:m.updateReminder,onRemove:m.removeReminder,onShare:m.shareReminder,onUnshare:m.unshareReminder})}):t==="notes"?d.jsx("div",{className:"tab-content",children:d.jsx(vb,{notes:g.notes,error:g.error,maxNotes:g.maxNotes,onAdd:g.addNote,onUpdate:g.updateNote,onRemove:g.removeNote,onTogglePin:g.togglePin})}):t==="time"?d.jsx("div",{className:"tab-content",children:d.jsx(Tb,{projects:S.projects,entries:S.entries,error:S.error,maxProjects:S.maxProjects,activeProjectId:S.activeProjectId,elapsed:S.elapsed,secondsByProject:S.secondsByProject,onAddProject:S.addProject,onRemoveProject:S.removeProject,onStartTimer:S.startTimer,onStopTimer:S.stopTimer,onRemoveEntry:S.removeEntry})}):t==="finance"?d.jsx("div",{className:"tab-content",children:d.jsx(Ab,{entries:A.entries,error:A.error,maxEntries:A.maxEntries,stats:A.stats,onAddEntry:A.addEntry,onRemoveEntry:A.removeEntry})}):t==="tasks"?d.jsx("div",{className:"tab-content",children:d.jsx(xb,{tasks:P.tasks,error:P.error,maxTasks:P.maxTasks,onAdd:P.addTask,onToggleStatus:P.toggleTaskStatus,onRemove:P.removeTask})}):d.jsx("div",{className:"tab-content",children:d.jsx(X2,{favorites:f.favorites,error:f.error,onAdd:f.addFavorite,onRemove:f.removeFavorite})})]})}function Dv({children:t}){return d.jsxs("div",{className:"app-shell",children:[t,d.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda © 2026"})]})}function Pb(){return d.jsx("div",{className:"loading-screen",children:d.jsx("div",{className:"loading-spinner"})})}function bb(){const{user:t,loading:e}=vn();return e?d.jsx(Dv,{children:d.jsx(Pb,{})}):d.jsx(Dv,{children:t?d.jsx(Rb,{}):d.jsx(B2,{})})}_d.createRoot(document.getElementById("root")).render(d.jsx(HP,{children:d.jsx(bb,{})}));
