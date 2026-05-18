(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dv={exports:{}},fu={},jv={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),eI=Symbol.for("react.portal"),tI=Symbol.for("react.fragment"),nI=Symbol.for("react.strict_mode"),rI=Symbol.for("react.profiler"),sI=Symbol.for("react.provider"),iI=Symbol.for("react.context"),oI=Symbol.for("react.forward_ref"),aI=Symbol.for("react.suspense"),lI=Symbol.for("react.memo"),uI=Symbol.for("react.lazy"),bm=Symbol.iterator;function cI(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,Ov={};function pi(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Vv}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=pi.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Vv}var Uh=Fh.prototype=new Mv;Uh.constructor=Fh;Lv(Uh,pi.prototype);Uh.isPureReactComponent=!0;var Dm=Array.isArray,Fv=Object.prototype.hasOwnProperty,zh={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:$o,type:t,key:i,ref:o,props:s,_owner:zh.current}}function dI(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function hI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hI(""+t.key):e.toString(36)}function Za(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case eI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+wc(o,0):r,Dm(s)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),Za(s,e,n,"",function(c){return c})):s!=null&&(Bh(s)&&(s=dI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Dm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+wc(i,l);o+=Za(i,e,n,u,s)}else if(u=cI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+wc(i,l++),o+=Za(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],s=0;return Za(t,r,"","",function(i){return e.call(n,i,s++)}),r}function fI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},el={transition:null},pI={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:el,ReactCurrentOwner:zh};function Bv(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=pi;ne.Fragment=tI;ne.Profiler=rI;ne.PureComponent=Fh;ne.StrictMode=nI;ne.Suspense=aI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;ne.act=Bv;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=zh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!Uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$o,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:iI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sI,_context:t},t.Consumer=t};ne.createElement=zv;ne.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:oI,render:t}};ne.isValidElement=Bh;ne.lazy=function(t){return{$$typeof:uI,_payload:{_status:-1,_result:t},_init:fI}};ne.memo=function(t,e){return{$$typeof:lI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};ne.unstable_act=Bv;ne.useCallback=function(t,e){return dt.current.useCallback(t,e)};ne.useContext=function(t){return dt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return dt.current.useEffect(t,e)};ne.useId=function(){return dt.current.useId()};ne.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return dt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ne.useRef=function(t){return dt.current.useRef(t)};ne.useState=function(t){return dt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return dt.current.useTransition()};ne.version="18.3.1";jv.exports=ne;var j=jv.exports;const mI=Z0(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=j,yI=Symbol.for("react.element"),vI=Symbol.for("react.fragment"),_I=Object.prototype.hasOwnProperty,EI=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wI={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_I.call(e,r)&&!wI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:yI,type:t,key:i,ref:o,props:s,_owner:EI.current}}fu.Fragment=vI;fu.jsx=$v;fu.jsxs=$v;Dv.exports=fu;var d=Dv.exports,_d={},qv={exports:{}},At={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var O=$.length;$.push(K);e:for(;0<O;){var se=O-1>>>1,he=$[se];if(0<s(he,K))$[se]=K,$[O]=he,O=se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],O=$.pop();if(O!==K){$[0]=O;e:for(var se=0,he=$.length,Or=he>>>1;se<Or;){var xt=2*(se+1)-1,Mr=$[xt],Ut=xt+1,$n=$[Ut];if(0>s(Mr,O))Ut<he&&0>s($n,Mr)?($[se]=$n,$[Ut]=O,se=Ut):($[se]=Mr,$[xt]=O,se=xt);else if(Ut<he&&0>s($n,O))$[se]=$n,$[Ut]=O,se=Ut;else break e}}return K}function s($,K){var O=$.sortIndex-K.sortIndex;return O!==0?O:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,g=null,y=3,I=!1,A=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function V($){if(x=!1,T($),!A)if(n(u)!==null)A=!0,ot(P);else{var K=n(c);K!==null&&Ft(V,K.startTime-$)}}function P($,K){A=!1,x&&(x=!1,C(_),_=-1),I=!0;var O=y;try{for(T(K),g=n(u);g!==null&&(!(g.expirationTime>K)||$&&!R());){var se=g.callback;if(typeof se=="function"){g.callback=null,y=g.priorityLevel;var he=se(g.expirationTime<=K);K=t.unstable_now(),typeof he=="function"?g.callback=he:g===n(u)&&r(u),T(K)}else r(u);g=n(u)}if(g!==null)var Or=!0;else{var xt=n(c);xt!==null&&Ft(V,xt.startTime-K),Or=!1}return Or}finally{g=null,y=O,I=!1}}var F=!1,N=null,_=-1,m=5,E=-1;function R(){return!(t.unstable_now()-E<m)}function k(){if(N!==null){var $=t.unstable_now();E=$;var K=!0;try{K=N(!0,$)}finally{K?S():(F=!1,N=null)}}else F=!1}var S;if(typeof w=="function")S=function(){w(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,re=ue.port2;ue.port1.onmessage=k,S=function(){re.postMessage(null)}}else S=function(){b(k,0)};function ot($){N=$,F||(F=!0,S())}function Ft($,K){_=b(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,ot(P))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var O=y;y=K;try{return $()}finally{y=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=y;y=$;try{return K()}finally{y=O}},t.unstable_scheduleCallback=function($,K,O){var se=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?se+O:se):O=se,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=O+he,$={id:f++,callback:K,priorityLevel:$,startTime:O,expirationTime:he,sortIndex:-1},O>se?($.sortIndex=O,e(c,$),n(u)===null&&$===n(c)&&(x?(C(_),_=-1):x=!0,Ft(V,O-se))):($.sortIndex=he,e(u,$),A||I||(A=!0,ot(P))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var K=y;return function(){var O=y;y=K;try{return $.apply(this,arguments)}finally{y=O}}}})(Wv);Hv.exports=Wv;var TI=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var II=j,Ct=TI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gv=new Set,_o={};function ds(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(_o[t]=e,t=0;t<e.length;t++)Gv.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,SI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vm={},Lm={};function NI(t){return Ed.call(Lm,t)?!0:Ed.call(Vm,t)?!1:SI.test(t)?Lm[t]=!0:(Vm[t]=!0,!1)}function CI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AI(t,e,n,r){if(e===null||typeof e>"u"||CI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,qh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AI(e,n,s,r)&&(n=null),r||s===null?NI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=II.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),Om=Symbol.iterator;function Fi(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Tc;function Ki(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function Sc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function kI(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case xs:return"Portal";case wd:return"Profiler";case Wh:return"StrictMode";case Td:return"Suspense";case Id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Kv:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kh:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function xI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RI(t){var e=Jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=RI(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function Cd(t,e){Zv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qi=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Qi(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function e_(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PI=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){PI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function s_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var bI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(bI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,$s=null,qs=null;function Bm(t){if(t=Wo(t)){if(typeof Dd!="function")throw Error(z(280));var e=t.stateNode;e&&(e=vu(e),Dd(t.stateNode,t.type,e))}}function i_(t){$s?qs?qs.push(t):qs=[t]:$s=t}function o_(){if($s){var t=$s,e=qs;if(qs=$s=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function a_(t,e){return t(e)}function l_(){}var Nc=!1;function u_(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return a_(t,e,n)}finally{Nc=!1,($s!==null||qs!==null)&&(l_(),o_())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var jd=!1;if(xn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){jd=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{jd=!1}function DI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var io=!1,Tl=null,Il=!1,Vd=null,jI={onError:function(t){io=!0,Tl=t}};function VI(t,e,n,r,s,i,o,l,u){io=!1,Tl=null,DI.apply(jI,arguments)}function LI(t,e,n,r,s,i,o,l,u){if(VI.apply(this,arguments),io){if(io){var c=Tl;io=!1,Tl=null}else throw Error(z(198));Il||(Il=!0,Vd=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $m(t){if(hs(t)!==t)throw Error(z(188))}function OI(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $m(s),t;if(i===r)return $m(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function d_(t){return t=OI(t),t!==null?h_(t):null}function h_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h_(t);if(e!==null)return e;t=t.sibling}return null}var f_=Ct.unstable_scheduleCallback,qm=Ct.unstable_cancelCallback,MI=Ct.unstable_shouldYield,FI=Ct.unstable_requestPaint,xe=Ct.unstable_now,UI=Ct.unstable_getCurrentPriorityLevel,Yh=Ct.unstable_ImmediatePriority,p_=Ct.unstable_UserBlockingPriority,Sl=Ct.unstable_NormalPriority,zI=Ct.unstable_LowPriority,m_=Ct.unstable_IdlePriority,pu=null,ln=null;function BI(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HI,$I=Math.log,qI=Math.LN2;function HI(t){return t>>>=0,t===0?32:31-($I(t)/qI|0)|0}var Aa=64,ka=4194304;function Yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Yi(l):(i&=o,i!==0&&(r=Yi(i)))}else o=n&~s,o!==0?r=Yi(o):i!==0&&(r=Yi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),s=1<<n,r|=t[n],e&=~s;return r}function WI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Gt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=WI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function KI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Gt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v_,Xh,__,E_,w_,Od=!1,xa=[],lr=null,ur=null,cr=null,To=new Map,Io=new Map,er=[],QI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function zi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Wo(e),e!==null&&Xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function YI(t,e,n,r,s){switch(e){case"focusin":return lr=zi(lr,t,e,n,r,s),!0;case"dragenter":return ur=zi(ur,t,e,n,r,s),!0;case"mouseover":return cr=zi(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return To.set(i,zi(To.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Io.set(i,zi(Io.get(i)||null,t,e,n,r,s)),!0}return!1}function T_(t){var e=Gr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,w_(t.priority,function(){__(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=Wo(n),e!==null&&Xh(e),t.blockedOn=n,!1;e.shift()}return!0}function Wm(t,e,n){tl(t)&&n.delete(e)}function JI(){Od=!1,lr!==null&&tl(lr)&&(lr=null),ur!==null&&tl(ur)&&(ur=null),cr!==null&&tl(cr)&&(cr=null),To.forEach(Wm),Io.forEach(Wm)}function Bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,JI)))}function So(t){function e(s){return Bi(s,t)}if(0<xa.length){Bi(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Bi(lr,t),ur!==null&&Bi(ur,t),cr!==null&&Bi(cr,t),To.forEach(e),Io.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)T_(n),n.blockedOn===null&&er.shift()}var Hs=Fn.ReactCurrentBatchConfig,Cl=!0;function XI(t,e,n,r){var s=de,i=Hs.transition;Hs.transition=null;try{de=1,Zh(t,e,n,r)}finally{de=s,Hs.transition=i}}function ZI(t,e,n,r){var s=de,i=Hs.transition;Hs.transition=null;try{de=4,Zh(t,e,n,r)}finally{de=s,Hs.transition=i}}function Zh(t,e,n,r){if(Cl){var s=Md(t,e,n,r);if(s===null)Lc(t,e,r,Al,n),Hm(t,r);else if(YI(s,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<QI.indexOf(t)){for(;s!==null;){var i=Wo(s);if(i!==null&&v_(i),i=Md(t,e,n,r),i===null&&Lc(t,e,r,Al,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var Al=null;function Md(t,e,n,r){if(Al=null,t=Qh(r),t=Gr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UI()){case Yh:return 1;case p_:return 4;case Sl:case zI:return 16;case m_:return 536870912;default:return 16}default:return 16}}var or=null,ef=null,nl=null;function S_(){if(nl)return nl;var t,e=ef,n=e.length,r,s="value"in or?or.value:or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return nl=s.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Gm(){return!1}function kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ra:Gm,this.isPropagationStopped=Gm,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=kt(mi),Ho=Se({},mi,{view:0,detail:0}),eS=kt(Ho),Ac,kc,$i,mu=Se({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(Ac=t.screenX-$i.screenX,kc=t.screenY-$i.screenY):kc=Ac=0,$i=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Km=kt(mu),tS=Se({},mu,{dataTransfer:0}),nS=kt(tS),rS=Se({},Ho,{relatedTarget:0}),xc=kt(rS),sS=Se({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=kt(sS),oS=Se({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=kt(oS),lS=Se({},mi,{data:0}),Qm=kt(lS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dS[t])?!!e[t]:!1}function nf(){return hS}var fS=Se({},Ho,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=kt(fS),mS=Se({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=kt(mS),gS=Se({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),yS=kt(gS),vS=Se({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=kt(vS),ES=Se({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=kt(ES),TS=[9,13,27,32],rf=xn&&"CompositionEvent"in window,oo=null;xn&&"documentMode"in document&&(oo=document.documentMode);var IS=xn&&"TextEvent"in window&&!oo,N_=xn&&(!rf||oo&&8<oo&&11>=oo),Jm=" ",Xm=!1;function C_(t,e){switch(t){case"keyup":return TS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function SS(t,e){switch(t){case"compositionend":return A_(e);case"keypress":return e.which!==32?null:(Xm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Xm?null:t;default:return null}}function NS(t,e){if(Ps)return t==="compositionend"||!rf&&C_(t,e)?(t=S_(),nl=ef=or=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N_&&e.locale!=="ko"?null:e.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CS[t.type]:e==="textarea"}function k_(t,e,n,r){i_(r),e=kl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ao=null,No=null;function AS(t){F_(t,0)}function gu(t){var e=js(t);if(Xv(e))return t}function kS(t,e){if(t==="change")return e}var x_=!1;if(xn){var Rc;if(xn){var Pc="oninput"in document;if(!Pc){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Pc=typeof eg.oninput=="function"}Rc=Pc}else Rc=!1;x_=Rc&&(!document.documentMode||9<document.documentMode)}function tg(){ao&&(ao.detachEvent("onpropertychange",R_),No=ao=null)}function R_(t){if(t.propertyName==="value"&&gu(No)){var e=[];k_(e,No,t,Qh(t)),u_(AS,e)}}function xS(t,e,n){t==="focusin"?(tg(),ao=e,No=n,ao.attachEvent("onpropertychange",R_)):t==="focusout"&&tg()}function RS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(No)}function PS(t,e){if(t==="click")return gu(e)}function bS(t,e){if(t==="input"||t==="change")return gu(e)}function DS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:DS;function Co(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ed.call(e,s)||!Yt(t[s],e[s]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function P_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b_(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jS(t){var e=b_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P_(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=rg(n,i);var o=rg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VS=xn&&"documentMode"in document&&11>=document.documentMode,bs=null,Fd=null,lo=null,Ud=!1;function sg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||bs==null||bs!==wl(r)||(r=bs,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Co(lo,r)||(lo=r,r=kl(Fd,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},bc={},D_={};xn&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function yu(t){if(bc[t])return bc[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return bc[t]=e[n];return t}var j_=yu("animationend"),V_=yu("animationiteration"),L_=yu("animationstart"),O_=yu("transitionend"),M_=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){M_.set(t,e),ds(e,[t])}for(var Dc=0;Dc<ig.length;Dc++){var jc=ig[Dc],LS=jc.toLowerCase(),OS=jc[0].toUpperCase()+jc.slice(1);Rr(LS,"on"+OS)}Rr(j_,"onAnimationEnd");Rr(V_,"onAnimationIteration");Rr(L_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(O_,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LI(r,e,void 0,t),t.currentTarget=null}function F_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;og(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;og(s,l,c),i=u}}}if(Il)throw t=Vd,Il=!1,Vd=null,t}function ye(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var r=t+"__bubble";n.has(r)||(U_(e,t,2,!1),n.add(r))}function Vc(t,e,n){var r=0;e&&(r|=4),U_(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ba]){t[ba]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(MS.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Vc("selectionchange",!1,e))}}function U_(t,e,n,r){switch(I_(e)){case 1:var s=XI;break;case 4:s=ZI;break;default:s=Zh}n=s.bind(null,e,n,t),s=void 0,!jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}u_(function(){var c=i,f=Qh(n),g=[];e:{var y=M_.get(t);if(y!==void 0){var I=tf,A=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":I=pS;break;case"focusin":A="focus",I=xc;break;case"focusout":A="blur",I=xc;break;case"beforeblur":case"afterblur":I=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=yS;break;case j_:case V_:case L_:I=iS;break;case O_:I=_S;break;case"scroll":I=eS;break;case"wheel":I=wS;break;case"copy":case"cut":case"paste":I=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ym}var x=(e&4)!==0,b=!x&&t==="scroll",C=x?y!==null?y+"Capture":null:y;x=[];for(var w=c,T;w!==null;){T=w;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,C!==null&&(V=wo(w,C),V!=null&&x.push(ko(w,V,T)))),b)break;w=w.return}0<x.length&&(y=new I(y,A,null,n,f),g.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==bd&&(A=n.relatedTarget||n.fromElement)&&(Gr(A)||A[Rn]))break e;if((I||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=c,A=A?Gr(A):null,A!==null&&(b=hs(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=c),I!==A)){if(x=Km,V="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ym,V="onPointerLeave",C="onPointerEnter",w="pointer"),b=I==null?y:js(I),T=A==null?y:js(A),y=new x(V,w+"leave",I,n,f),y.target=b,y.relatedTarget=T,V=null,Gr(f)===c&&(x=new x(C,w+"enter",A,n,f),x.target=T,x.relatedTarget=b,V=x),b=V,I&&A)t:{for(x=I,C=A,w=0,T=x;T;T=Ts(T))w++;for(T=0,V=C;V;V=Ts(V))T++;for(;0<w-T;)x=Ts(x),w--;for(;0<T-w;)C=Ts(C),T--;for(;w--;){if(x===C||C!==null&&x===C.alternate)break t;x=Ts(x),C=Ts(C)}x=null}else x=null;I!==null&&ag(g,y,I,x,!1),A!==null&&b!==null&&ag(g,b,A,x,!0)}}e:{if(y=c?js(c):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var P=kS;else if(Zm(y))if(x_)P=bS;else{P=RS;var F=xS}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(P=PS);if(P&&(P=P(t,c))){k_(g,P,n,f);break e}F&&F(t,y,c),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Ad(y,"number",y.value)}switch(F=c?js(c):window,t){case"focusin":(Zm(F)||F.contentEditable==="true")&&(bs=F,Fd=c,lo=null);break;case"focusout":lo=Fd=bs=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,sg(g,n,f);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":sg(g,n,f)}var N;if(rf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ps?C_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(N_&&n.locale!=="ko"&&(Ps||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ps&&(N=S_()):(or=f,ef="value"in or?or.value:or.textContent,Ps=!0)),F=kl(c,_),0<F.length&&(_=new Qm(_,t,null,n,f),g.push({event:_,listeners:F}),N?_.data=N:(N=A_(n),N!==null&&(_.data=N)))),(N=IS?SS(t,n):NS(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(f=new Qm("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:c}),f.data=N))}F_(g,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=wo(t,n),i!=null&&r.unshift(ko(t,i,s)),i=wo(t,e),i!=null&&r.push(ko(t,i,s))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ag(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=wo(n,i),u!=null&&o.unshift(ko(n,u,l))):s||(u=wo(n,i),u!=null&&o.push(ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,US=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(US,"")}function Da(t,e,n){if(e=lg(e),lg(t)!==e&&n)throw Error(z(425))}function xl(){}var zd=null,Bd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch($S)}:qd;function $S(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);So(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),an="__reactFiber$"+gi,xo="__reactProps$"+gi,Rn="__reactContainer$"+gi,Hd="__reactEvents$"+gi,qS="__reactListeners$"+gi,HS="__reactHandles$"+gi;function Gr(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cg(t);t!==null;){if(n=t[an])return n;t=cg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[an]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function vu(t){return t[xo]||null}var Wd=[],Vs=-1;function Pr(t){return{current:t}}function _e(t){0>Vs||(t.current=Wd[Vs],Wd[Vs]=null,Vs--)}function me(t,e){Vs++,Wd[Vs]=t.current,t.current=e}var Tr={},rt=Pr(Tr),yt=Pr(!1),ts=Tr;function ei(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Rl(){_e(yt),_e(rt)}function dg(t,e,n){if(rt.current!==Tr)throw Error(z(168));me(rt,e),me(yt,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,xI(t)||"Unknown",s));return Se({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ts=rt.current,me(rt,t),me(yt,yt.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=z_(t,e,ts),r.__reactInternalMemoizedMergedChildContext=t,_e(yt),_e(rt),me(rt,t)):_e(yt),me(yt,n)}var En=null,_u=!1,Mc=!1;function B_(t){En===null?En=[t]:En.push(t)}function WS(t){_u=!0,B_(t)}function br(){if(!Mc&&En!==null){Mc=!0;var t=0,e=de;try{var n=En;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,_u=!1}catch(s){throw En!==null&&(En=En.slice(t+1)),f_(Yh,br),s}finally{de=e,Mc=!1}}return null}var Ls=[],Os=0,bl=null,Dl=0,Rt=[],Pt=0,ns=null,wn=1,Tn="";function qr(t,e){Ls[Os++]=Dl,Ls[Os++]=bl,bl=t,Dl=e}function $_(t,e,n){Rt[Pt++]=wn,Rt[Pt++]=Tn,Rt[Pt++]=ns,ns=t;var r=wn;t=Tn;var s=32-Gt(r)-1;r&=~(1<<s),n+=1;var i=32-Gt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wn=1<<32-Gt(e)+s|n<<s|r,Tn=i+t}else wn=1<<i|n<<s|r,Tn=t}function of(t){t.return!==null&&(qr(t,1),$_(t,1,0))}function af(t){for(;t===bl;)bl=Ls[--Os],Ls[Os]=null,Dl=Ls[--Os],Ls[Os]=null;for(;t===ns;)ns=Rt[--Pt],Rt[Pt]=null,Tn=Rt[--Pt],Rt[Pt]=null,wn=Rt[--Pt],Rt[Pt]=null}var Nt=null,It=null,Ee=!1,Ht=null;function q_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,It=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:wn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,It=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(Ee){var e=It;if(e){var n=e;if(!fg(t,e)){if(Gd(t))throw Error(z(418));e=dr(n.nextSibling);var r=Nt;e&&fg(t,e)?q_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Nt=t)}}else{if(Gd(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ee=!1,Nt=t}}}function pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function ja(t){if(t!==Nt)return!1;if(!Ee)return pg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=It)){if(Gd(t))throw H_(),Error(z(418));for(;e;)q_(t,e),e=dr(e.nextSibling)}if(pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Nt?dr(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=It;t;)t=dr(t.nextSibling)}function ti(){It=Nt=null,Ee=!1}function lf(t){Ht===null?Ht=[t]:Ht.push(t)}var GS=Fn.ReactCurrentBatchConfig;function qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function W_(t){function e(C,w){if(t){var T=C.deletions;T===null?(C.deletions=[w],C.flags|=16):T.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function s(C,w){return C=mr(C,w),C.index=0,C.sibling=null,C}function i(C,w,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<w?(C.flags|=2,w):T):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,w,T,V){return w===null||w.tag!==6?(w=Hc(T,C.mode,V),w.return=C,w):(w=s(w,T),w.return=C,w)}function u(C,w,T,V){var P=T.type;return P===Rs?f(C,w,T.props.children,V,T.key):w!==null&&(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xn&&mg(P)===w.type)?(V=s(w,T.props),V.ref=qi(C,w,T),V.return=C,V):(V=cl(T.type,T.key,T.props,null,C.mode,V),V.ref=qi(C,w,T),V.return=C,V)}function c(C,w,T,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Wc(T,C.mode,V),w.return=C,w):(w=s(w,T.children||[]),w.return=C,w)}function f(C,w,T,V,P){return w===null||w.tag!==7?(w=Xr(T,C.mode,V,P),w.return=C,w):(w=s(w,T),w.return=C,w)}function g(C,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Hc(""+w,C.mode,T),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Sa:return T=cl(w.type,w.key,w.props,null,C.mode,T),T.ref=qi(C,null,w),T.return=C,T;case xs:return w=Wc(w,C.mode,T),w.return=C,w;case Xn:var V=w._init;return g(C,V(w._payload),T)}if(Qi(w)||Fi(w))return w=Xr(w,C.mode,T,null),w.return=C,w;Va(C,w)}return null}function y(C,w,T,V){var P=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return P!==null?null:l(C,w,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Sa:return T.key===P?u(C,w,T,V):null;case xs:return T.key===P?c(C,w,T,V):null;case Xn:return P=T._init,y(C,w,P(T._payload),V)}if(Qi(T)||Fi(T))return P!==null?null:f(C,w,T,V,null);Va(C,T)}return null}function I(C,w,T,V,P){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(T)||null,l(w,C,""+V,P);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Sa:return C=C.get(V.key===null?T:V.key)||null,u(w,C,V,P);case xs:return C=C.get(V.key===null?T:V.key)||null,c(w,C,V,P);case Xn:var F=V._init;return I(C,w,T,F(V._payload),P)}if(Qi(V)||Fi(V))return C=C.get(T)||null,f(w,C,V,P,null);Va(w,V)}return null}function A(C,w,T,V){for(var P=null,F=null,N=w,_=w=0,m=null;N!==null&&_<T.length;_++){N.index>_?(m=N,N=null):m=N.sibling;var E=y(C,N,T[_],V);if(E===null){N===null&&(N=m);break}t&&N&&E.alternate===null&&e(C,N),w=i(E,w,_),F===null?P=E:F.sibling=E,F=E,N=m}if(_===T.length)return n(C,N),Ee&&qr(C,_),P;if(N===null){for(;_<T.length;_++)N=g(C,T[_],V),N!==null&&(w=i(N,w,_),F===null?P=N:F.sibling=N,F=N);return Ee&&qr(C,_),P}for(N=r(C,N);_<T.length;_++)m=I(N,C,_,T[_],V),m!==null&&(t&&m.alternate!==null&&N.delete(m.key===null?_:m.key),w=i(m,w,_),F===null?P=m:F.sibling=m,F=m);return t&&N.forEach(function(R){return e(C,R)}),Ee&&qr(C,_),P}function x(C,w,T,V){var P=Fi(T);if(typeof P!="function")throw Error(z(150));if(T=P.call(T),T==null)throw Error(z(151));for(var F=P=null,N=w,_=w=0,m=null,E=T.next();N!==null&&!E.done;_++,E=T.next()){N.index>_?(m=N,N=null):m=N.sibling;var R=y(C,N,E.value,V);if(R===null){N===null&&(N=m);break}t&&N&&R.alternate===null&&e(C,N),w=i(R,w,_),F===null?P=R:F.sibling=R,F=R,N=m}if(E.done)return n(C,N),Ee&&qr(C,_),P;if(N===null){for(;!E.done;_++,E=T.next())E=g(C,E.value,V),E!==null&&(w=i(E,w,_),F===null?P=E:F.sibling=E,F=E);return Ee&&qr(C,_),P}for(N=r(C,N);!E.done;_++,E=T.next())E=I(N,C,_,E.value,V),E!==null&&(t&&E.alternate!==null&&N.delete(E.key===null?_:E.key),w=i(E,w,_),F===null?P=E:F.sibling=E,F=E);return t&&N.forEach(function(k){return e(C,k)}),Ee&&qr(C,_),P}function b(C,w,T,V){if(typeof T=="object"&&T!==null&&T.type===Rs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Sa:e:{for(var P=T.key,F=w;F!==null;){if(F.key===P){if(P=T.type,P===Rs){if(F.tag===7){n(C,F.sibling),w=s(F,T.props.children),w.return=C,C=w;break e}}else if(F.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xn&&mg(P)===F.type){n(C,F.sibling),w=s(F,T.props),w.ref=qi(C,F,T),w.return=C,C=w;break e}n(C,F);break}else e(C,F);F=F.sibling}T.type===Rs?(w=Xr(T.props.children,C.mode,V,T.key),w.return=C,C=w):(V=cl(T.type,T.key,T.props,null,C.mode,V),V.ref=qi(C,w,T),V.return=C,C=V)}return o(C);case xs:e:{for(F=T.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(C,w.sibling),w=s(w,T.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=Wc(T,C.mode,V),w.return=C,C=w}return o(C);case Xn:return F=T._init,b(C,w,F(T._payload),V)}if(Qi(T))return A(C,w,T,V);if(Fi(T))return x(C,w,T,V);Va(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(C,w.sibling),w=s(w,T),w.return=C,C=w):(n(C,w),w=Hc(T,C.mode,V),w.return=C,C=w),o(C)):n(C,w)}return b}var ni=W_(!0),G_=W_(!1),jl=Pr(null),Vl=null,Ms=null,uf=null;function cf(){uf=Ms=Vl=null}function df(t){var e=jl.current;_e(jl),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Vl=t,uf=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Vl===null)throw Error(z(308));Ms=t,Vl.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Kr=null;function hf(t){Kr===null?Kr=[t]:Kr.push(t)}function K_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Pn(t,n)}return s=r.interleaved,s===null?(e.next=e,hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Pn(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}function gg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var s=t.updateQueue;Zn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=c=u=null,l=i;do{var y=l.lane,I=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,x=l;switch(y=e,I=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){g=A.call(I,g,y);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,y=typeof A=="function"?A.call(I,g,y):A,y==null)break e;g=Se({},g,y);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=g):f=f.next=I,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=g}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var Go={},un=Pr(Go),Ro=Pr(Go),Po=Pr(Go);function Qr(t){if(t===Go)throw Error(z(174));return t}function pf(t,e){switch(me(Po,e),me(Ro,t),me(un,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}_e(un),me(un,e)}function ri(){_e(un),_e(Ro),_e(Po)}function Y_(t){Qr(Po.current);var e=Qr(un.current),n=xd(e,t.type);e!==n&&(me(Ro,t),me(un,n))}function mf(t){Ro.current===t&&(_e(un),_e(Ro))}var Te=Pr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function gf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var il=Fn.ReactCurrentDispatcher,Uc=Fn.ReactCurrentBatchConfig,rs=0,Ie=null,Le=null,Be=null,Ml=!1,uo=!1,bo=0,KS=0;function Je(){throw Error(z(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,s,i){if(rs=i,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?XS:ZS,t=n(r,s),uo){i=0;do{if(uo=!1,bo=0,25<=i)throw Error(z(301));i+=1,Be=Le=null,e.updateQueue=null,il.current=eN,t=n(r,s)}while(uo)}if(il.current=Fl,e=Le!==null&&Le.next!==null,rs=0,Be=Le=Ie=null,Ml=!1,e)throw Error(z(300));return t}function _f(){var t=bo!==0;return bo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=t:Be=Be.next=t,Be}function Mt(){if(Le===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Be===null?Ie.memoizedState:Be.next;if(e!==null)Be=e,Le=t;else{if(t===null)throw Error(z(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Be===null?Ie.memoizedState=Be=t:Be=Be.next=t}return Be}function Do(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((rs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ie.lanes|=f,ss|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ie.lanes|=i,ss|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Yt(i,e.memoizedState)||(gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function J_(){}function X_(t,e){var n=Ie,r=Mt(),s=e(),i=!Yt(r.memoizedState,s);if(i&&(r.memoizedState=s,gt=!0),r=r.queue,Ef(tE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,jo(9,eE.bind(null,n,r,s,e),void 0,null),$e===null)throw Error(z(349));rs&30||Z_(n,e,s)}return s}function Z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eE(t,e,n,r){e.value=n,e.getSnapshot=r,nE(e)&&rE(t)}function tE(t,e,n){return n(function(){nE(e)&&rE(t)})}function nE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function rE(t){var e=Pn(t,1);e!==null&&Kt(e,t,1,-1)}function vg(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=JS.bind(null,Ie,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sE(){return Mt().memoizedState}function ol(t,e,n,r){var s=sn();Ie.flags|=t,s.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var s=Mt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&yf(r,o.deps)){s.memoizedState=jo(e,n,i,r);return}}Ie.flags|=t,s.memoizedState=jo(1|e,n,i,r)}function _g(t,e){return ol(8390656,8,t,e)}function Ef(t,e){return Eu(2048,8,t,e)}function iE(t,e){return Eu(4,2,t,e)}function oE(t,e){return Eu(4,4,t,e)}function aE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lE(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,aE.bind(null,e,t),n)}function wf(){}function uE(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cE(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dE(t,e,n){return rs&21?(Yt(n,e)||(n=g_(),Ie.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function QS(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Uc.transition;Uc.transition={};try{t(!1),e()}finally{de=n,Uc.transition=r}}function hE(){return Mt().memoizedState}function YS(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fE(t))pE(e,n);else if(n=K_(t,e,n,r),n!==null){var s=ct();Kt(n,t,r,s),mE(n,e,r)}}function JS(t,e,n){var r=pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fE(t))pE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(s.next=s,hf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=K_(t,e,s,r),n!==null&&(s=ct(),Kt(n,t,r,s),mE(n,e,r))}}function fE(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function pE(t,e){uo=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}var Fl={readContext:Ot,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},XS={readContext:Ot,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:_g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,aE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:wf,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=QS.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,s=sn();if(Ee){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),$e===null)throw Error(z(349));rs&30||Z_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,_g(tE.bind(null,r,i,t),[t]),r.flags|=2048,jo(9,eE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=sn(),e=$e.identifierPrefix;if(Ee){var n=Tn,r=wn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZS={readContext:Ot,useCallback:uE,useContext:Ot,useEffect:Ef,useImperativeHandle:lE,useInsertionEffect:iE,useLayoutEffect:oE,useMemo:cE,useReducer:zc,useRef:sE,useState:function(){return zc(Do)},useDebugValue:wf,useDeferredValue:function(t){var e=Mt();return dE(e,Le.memoizedState,t)},useTransition:function(){var t=zc(Do)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:X_,useId:hE,unstable_isNewReconciler:!1},eN={readContext:Ot,useCallback:uE,useContext:Ot,useEffect:Ef,useImperativeHandle:lE,useInsertionEffect:iE,useLayoutEffect:oE,useMemo:cE,useReducer:Bc,useRef:sE,useState:function(){return Bc(Do)},useDebugValue:wf,useDeferredValue:function(t){var e=Mt();return Le===null?e.memoizedState=t:dE(e,Le.memoizedState,t)},useTransition:function(){var t=Bc(Do)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:X_,useId:hE,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),s=pr(t),i=Cn(r,s);i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Kt(e,t,s,r),sl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),s=pr(t),i=Cn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Kt(e,t,s,r),sl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=pr(t),s=Cn(n,r);s.tag=2,e!=null&&(s.callback=e),e=hr(t,s,r),e!==null&&(Kt(e,t,r,n),sl(e,t,r))}};function Eg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(s,i):!0}function gE(t,e,n){var r=!1,s=Tr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(s=vt(e)?ts:rt.current,r=e.contextTypes,i=(r=r!=null)?ei(t,s):Tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ff(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ot(i):(i=vt(e)?ts:rt.current,s.context=ei(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&wu.enqueueReplaceState(s,s.state,null),Ll(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function si(t,e){try{var n="",r=e;do n+=kI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tN=typeof WeakMap=="function"?WeakMap:Map;function yE(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zl||(zl=!0,lh=r),Xd(t,e)},n}function vE(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Xd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=mN.bind(null,t,e,n),e.then(t,t))}function Ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var nN=Fn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?G_(e,null,n,r):ni(e,t.child,n,r)}function Ng(t,e,n,r,s){n=n.render;var i=e.ref;return Ws(e,s),r=vf(t,e,n,r,i,s),n=_f(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(Ee&&n&&of(e),e.flags|=1,ut(t,e,r,s),e.child)}function Cg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!xf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,_E(t,e,i,r,s)):(t=cl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=mr(i,r),t.ref=e.ref,t.return=e,e.child=t}function _E(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Co(i,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Zd(t,e,n,r,s)}function EE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Us,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Us,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Us,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(Us,Tt),Tt|=r;return ut(t,e,s,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,r,s){var i=vt(n)?ts:rt.current;return i=ei(e,i),Ws(e,s),n=vf(t,e,n,r,i,s),r=_f(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(Ee&&r&&of(e),e.flags|=1,ut(t,e,n,s),e.child)}function Ag(t,e,n,r,s){if(vt(n)){var i=!0;Pl(e)}else i=!1;if(Ws(e,s),e.stateNode===null)al(t,e),gE(e,n,r),Jd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=vt(n)?ts:rt.current,c=ei(e,c));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&wg(e,o,r,c),Zn=!1;var y=e.memoizedState;o.state=y,Ll(e,r,o,s),u=e.memoizedState,l!==r||y!==u||yt.current||Zn?(typeof f=="function"&&(Yd(e,n,f,r),u=e.memoizedState),(l=Zn||Eg(e,n,l,r,y,u,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=vt(n)?ts:rt.current,u=ei(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&wg(e,o,r,u),Zn=!1,y=e.memoizedState,o.state=y,Ll(e,r,o,s);var A=e.memoizedState;l!==g||y!==A||yt.current||Zn?(typeof I=="function"&&(Yd(e,n,I,r),A=e.memoizedState),(c=Zn||Eg(e,n,c,r,y,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return eh(t,e,n,r,i,s)}function eh(t,e,n,r,s,i){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&hg(e,n,!1),bn(t,e,i);r=e.stateNode,nN.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ni(e,t.child,null,i),e.child=ni(e,null,l,i)):ut(t,e,l,i),e.memoizedState=r.state,s&&hg(e,n,!0),e.child}function TE(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),pf(t,e.containerInfo)}function kg(t,e,n,r,s){return ti(),lf(s),e.flags|=256,ut(t,e,n,r),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function IE(t,e,n){var r=e.pendingProps,s=Te.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(Te,s&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Su(o,r,0,null),t=Xr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nh(n),e.memoizedState=th,t):Tf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return rN(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=mr(l,i):(i=Xr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=th,r}return i=t.child,t=i.sibling,r=mr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&lf(r),ni(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rN(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(z(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Su({mode:"visible",children:r.children},s,0,null),i=Xr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ni(e,t.child,null,o),e.child.memoizedState=nh(o),e.memoizedState=th,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=$c(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=$e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Pn(t,s),Kt(r,t,s,-1))}return kf(),r=$c(Error(z(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=gN.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,It=dr(s.nextSibling),Nt=e,Ee=!0,Ht=null,t!==null&&(Rt[Pt++]=wn,Rt[Pt++]=Tn,Rt[Pt++]=ns,wn=t.id,Tn=t.overflow,ns=e),e=Tf(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qd(t.return,e,n)}function qc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function SE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ut(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),qc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ol(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}qc(e,!0,n,null,i);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sN(t,e,n){switch(e.tag){case 3:TE(e),ti();break;case 5:Y_(e);break;case 1:vt(e.type)&&Pl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(jl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?IE(t,e,n):(me(Te,Te.current&1),t=bn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return SE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,EE(t,e,n)}return bn(t,e,n)}var NE,rh,CE,AE;NE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rh=function(){};CE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Qr(un.current);var i=null;switch(n){case"input":s=Nd(t,s),r=Nd(t,r),i=[];break;case"select":s=Se({},s,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":s=kd(t,s),r=kd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xl)}Rd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};AE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hi(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iN(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return vt(e.type)&&Rl(),Xe(e),null;case 3:return r=e.stateNode,ri(),_e(yt),_e(rt),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(dh(Ht),Ht=null))),rh(t,e),Xe(e),null;case 5:mf(e);var s=Qr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)CE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Xe(e),null}if(t=Qr(un.current),ja(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[an]=e,r[xo]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<Ji.length;s++)ye(Ji[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Mm(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Um(r,i),ye("invalid",r)}Rd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Na(r),Fm(r,i,!0);break;case"textarea":Na(r),zm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[xo]=r,NE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ji.length;s++)ye(Ji[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":Mm(t,r),s=Nd(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Se({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Um(t,r),s=kd(t,r),ye("invalid",t);break;default:s=r}Rd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?s_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Eo(t,u):typeof u=="number"&&Eo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_o.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",t):u!=null&&Hh(t,i,u,o))}switch(n){case"input":Na(t),Fm(t,r,!1);break;case"textarea":Na(t),zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)AE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Qr(Po.current),Qr(un.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(i=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return Xe(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&It!==null&&e.mode&1&&!(e.flags&128))H_(),ti(),e.flags|=98560,i=!1;else if(i=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[an]=e}else ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),i=!1}else Ht!==null&&(dh(Ht),Ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Oe===0&&(Oe=3):kf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return ri(),rh(t,e),t===null&&Ao(e.stateNode.containerInfo),Xe(e),null;case 10:return df(e.type._context),Xe(e),null;case 17:return vt(e.type)&&Rl(),Xe(e),null;case 19:if(_e(Te),i=e.memoizedState,i===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Hi(i,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,Hi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}i.tail!==null&&xe()>ii&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return Xe(e),null}else 2*xe()-i.renderingStartTime>ii&&n!==1073741824&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=xe(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function oN(t,e){switch(af(e),e.tag){case 1:return vt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ri(),_e(yt),_e(rt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return ri(),null;case 10:return df(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var Oa=!1,tt=!1,aN=typeof WeakSet=="function"?WeakSet:Set,W=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function sh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Rg=!1;function lN(t,e){if(zd=Cl,t=b_(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,g=t,y=null;t:for(;;){for(var I;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(I=g.firstChild)!==null;)y=g,g=I;for(;;){if(g===t)break t;if(y===n&&++c===s&&(l=o),y===i&&++f===r&&(u=o),(I=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Cl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,b=A.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?x:$t(e.type,x),b);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(V){Ce(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=Rg,Rg=!1,A}function co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sh(e,n,i)}s=s.next}while(s!==r)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kE(t){var e=t.alternate;e!==null&&(t.alternate=null,kE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[xo],delete e[Hd],delete e[qS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xE(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var qe=null,qt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)RE(t,e,n),n=n.sibling}function RE(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:tt||Fs(n,e);case 6:var r=qe,s=qt;qe=null,Yn(t,e,n),qe=r,qt=s,qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),So(t)):Oc(qe,n.stateNode));break;case 4:r=qe,s=qt,qe=n.stateNode.containerInfo,qt=!0,Yn(t,e,n),qe=r,qt=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sh(n,e,o),s=s.next}while(s!==r)}Yn(t,e,n);break;case 1:if(!tt&&(Fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Yn(t,e,n),tt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aN),e.forEach(function(r){var s=yN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,qt=!1;break e;case 3:qe=l.stateNode.containerInfo,qt=!0;break e;case 4:qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(qe===null)throw Error(z(160));RE(i,o,s),qe=null,qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ce(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PE(e,t),e=e.sibling}function PE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),rn(t),r&4){try{co(3,t,t.return),Tu(3,t)}catch(x){Ce(t,t.return,x)}try{co(5,t,t.return)}catch(x){Ce(t,t.return,x)}}break;case 1:zt(e,t),rn(t),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(zt(e,t),rn(t),r&512&&n!==null&&Fs(n,n.return),t.flags&32){var s=t.stateNode;try{Eo(s,"")}catch(x){Ce(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zv(s,i),Pd(l,o);var c=Pd(l,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?s_(s,g):f==="dangerouslySetInnerHTML"?n_(s,g):f==="children"?Eo(s,g):Hh(s,f,g,c)}switch(l){case"input":Cd(s,i);break;case"textarea":e_(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Bs(s,!!i.multiple,I,!1):y!==!!i.multiple&&(i.defaultValue!=null?Bs(s,!!i.multiple,i.defaultValue,!0):Bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[xo]=i}catch(x){Ce(t,t.return,x)}}break;case 6:if(zt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){Ce(t,t.return,x)}}break;case 3:if(zt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(x){Ce(t,t.return,x)}break;case 4:zt(e,t),rn(t);break;case 13:zt(e,t),rn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Nf=xe())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,zt(e,t),tt=c):zt(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(g=W=f;W!==null;){switch(y=W,I=y.child,y.tag){case 0:case 11:case 14:case 15:co(4,y,y.return);break;case 1:Fs(y,y.return);var A=y.stateNode;if(typeof A.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(x){Ce(r,n,x)}}break;case 5:Fs(y,y.return);break;case 22:if(y.memoizedState!==null){jg(g);continue}}I!==null?(I.return=y,W=I):jg(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r_("display",o))}catch(x){Ce(t,t.return,x)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(x){Ce(t,t.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:zt(e,t),rn(t),r&4&&bg(t);break;case 21:break;default:zt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xE(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Eo(s,""),r.flags&=-33);var i=Pg(t);ah(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pg(t);oh(t,l,o);break;default:throw Error(z(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uN(t,e,n){W=t,bE(t)}function bE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Oa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Oa;var c=tt;if(Oa=o,(tt=u)&&!c)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Vg(s):u!==null?(u.return=o,W=u):Vg(s);for(;i!==null;)W=i,bE(i),i=i.sibling;W=s,Oa=l,tt=c}Dg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Dg(t)}}function Dg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&yg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&So(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}tt||e.flags&512&&ih(e)}catch(y){Ce(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function jg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Vg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ce(e,s,u)}}var i=e.return;try{ih(e)}catch(u){Ce(e,i,u)}break;case 5:var o=e.return;try{ih(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var cN=Math.ceil,Ul=Fn.ReactCurrentDispatcher,If=Fn.ReactCurrentOwner,Vt=Fn.ReactCurrentBatchConfig,le=0,$e=null,Pe=null,Ge=0,Tt=0,Us=Pr(0),Oe=0,Vo=null,ss=0,Iu=0,Sf=0,ho=null,pt=null,Nf=0,ii=1/0,_n=null,zl=!1,lh=null,fr=null,Ma=!1,ar=null,Bl=0,fo=0,uh=null,ll=-1,ul=0;function ct(){return le&6?xe():ll!==-1?ll:ll=xe()}function pr(t){return t.mode&1?le&2&&Ge!==0?Ge&-Ge:GS.transition!==null?(ul===0&&(ul=g_()),ul):(t=de,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function Kt(t,e,n,r){if(50<fo)throw fo=0,uh=null,Error(z(185));qo(t,n,r),(!(le&2)||t!==$e)&&(t===$e&&(!(le&2)&&(Iu|=n),Oe===4&&tr(t,Ge)),_t(t,r),n===1&&le===0&&!(e.mode&1)&&(ii=xe()+500,_u&&br()))}function _t(t,e){var n=t.callbackNode;GI(t,e);var r=Nl(t,t===$e?Ge:0);if(r===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?WS(Lg.bind(null,t)):B_(Lg.bind(null,t)),BS(function(){!(le&6)&&br()}),n=null;else{switch(y_(r)){case 1:n=Yh;break;case 4:n=p_;break;case 16:n=Sl;break;case 536870912:n=m_;break;default:n=Sl}n=UE(n,DE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DE(t,e){if(ll=-1,ul=0,le&6)throw Error(z(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=Nl(t,t===$e?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$l(t,r);else{e=r;var s=le;le|=2;var i=VE();($e!==t||Ge!==e)&&(_n=null,ii=xe()+500,Jr(t,e));do try{fN();break}catch(l){jE(t,l)}while(!0);cf(),Ul.current=i,le=s,Pe!==null?e=0:($e=null,Ge=0,e=Oe)}if(e!==0){if(e===2&&(s=Ld(t),s!==0&&(r=s,e=ch(t,s))),e===1)throw n=Vo,Jr(t,0),tr(t,r),_t(t,xe()),n;if(e===6)tr(t,r);else{if(s=t.current.alternate,!(r&30)&&!dN(s)&&(e=$l(t,r),e===2&&(i=Ld(t),i!==0&&(r=i,e=ch(t,i))),e===1))throw n=Vo,Jr(t,0),tr(t,r),_t(t,xe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Hr(t,pt,_n);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=Nf+500-xe(),10<e)){if(Nl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qd(Hr.bind(null,t,pt,_n),e);break}Hr(t,pt,_n);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Gt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cN(r/1960))-r,10<r){t.timeoutHandle=qd(Hr.bind(null,t,pt,_n),r);break}Hr(t,pt,_n);break;case 5:Hr(t,pt,_n);break;default:throw Error(z(329))}}}return _t(t,xe()),t.callbackNode===n?DE.bind(null,t):null}function ch(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=$l(t,e),t!==2&&(e=pt,pt=n,e!==null&&dh(e)),t}function dh(t){pt===null?pt=t:pt.push.apply(pt,t)}function dN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Sf,e&=~Iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(le&6)throw Error(z(327));Gs();var e=Nl(t,0);if(!(e&1))return _t(t,xe()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=Ld(t);r!==0&&(e=r,n=ch(t,r))}if(n===1)throw n=Vo,Jr(t,0),tr(t,e),_t(t,xe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,pt,_n),_t(t,xe()),null}function Cf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ii=xe()+500,_u&&br())}}function is(t){ar!==null&&ar.tag===0&&!(le&6)&&Gs();var e=le;le|=1;var n=Vt.transition,r=de;try{if(Vt.transition=null,de=1,t)return t()}finally{de=r,Vt.transition=n,le=e,!(le&6)&&br()}}function Af(){Tt=Us.current,_e(Us)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:ri(),_e(yt),_e(rt),gf();break;case 5:mf(r);break;case 4:ri();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:df(r.type._context);break;case 22:case 23:Af()}n=n.return}if($e=t,Pe=t=mr(t.current,null),Ge=Tt=e,Oe=0,Vo=null,Sf=Iu=ss=0,pt=ho=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Kr=null}return t}function jE(t,e){do{var n=Pe;try{if(cf(),il.current=Fl,Ml){for(var r=Ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ml=!1}if(rs=0,Be=Le=Ie=null,uo=!1,bo=0,If.current=null,n===null||n.return===null){Oe=1,Vo=e,Pe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Ig(o);if(I!==null){I.flags&=-257,Sg(I,o,l,i,e),I.mode&1&&Tg(i,c,e),e=I,u=c;var A=e.updateQueue;if(A===null){var x=new Set;x.add(u),e.updateQueue=x}else A.add(u);break e}else{if(!(e&1)){Tg(i,c,e),kf();break e}u=Error(z(426))}}else if(Ee&&l.mode&1){var b=Ig(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Sg(b,o,l,i,e),lf(si(u,l));break e}}i=u=si(u,l),Oe!==4&&(Oe=2),ho===null?ho=[i]:ho.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=yE(i,u,e);gg(i,C);break e;case 1:l=u;var w=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fr===null||!fr.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=vE(i,l,e);gg(i,V);break e}}i=i.return}while(i!==null)}OE(n)}catch(P){e=P,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function VE(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function kf(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),$e===null||!(ss&268435455)&&!(Iu&268435455)||tr($e,Ge)}function $l(t,e){var n=le;le|=2;var r=VE();($e!==t||Ge!==e)&&(_n=null,Jr(t,e));do try{hN();break}catch(s){jE(t,s)}while(!0);if(cf(),le=n,Ul.current=r,Pe!==null)throw Error(z(261));return $e=null,Ge=0,Oe}function hN(){for(;Pe!==null;)LE(Pe)}function fN(){for(;Pe!==null&&!MI();)LE(Pe)}function LE(t){var e=FE(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?OE(t):Pe=e,If.current=null}function OE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oN(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=iN(n,e,Tt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Hr(t,e,n){var r=de,s=Vt.transition;try{Vt.transition=null,de=1,pN(t,e,n,r)}finally{Vt.transition=s,de=r}return null}function pN(t,e,n,r){do Gs();while(ar!==null);if(le&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(KI(t,i),t===$e&&(Pe=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,UE(Sl,function(){return Gs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Vt.transition,Vt.transition=null;var o=de;de=1;var l=le;le|=4,If.current=null,lN(t,n),PE(n,t),jS(Bd),Cl=!!zd,Bd=zd=null,t.current=n,uN(n),FI(),le=l,de=o,Vt.transition=i}else t.current=n;if(Ma&&(Ma=!1,ar=t,Bl=s),i=t.pendingLanes,i===0&&(fr=null),BI(n.stateNode),_t(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(zl)throw zl=!1,t=lh,lh=null,t;return Bl&1&&t.tag!==0&&Gs(),i=t.pendingLanes,i&1?t===uh?fo++:(fo=0,uh=t):fo=0,br(),null}function Gs(){if(ar!==null){var t=y_(Bl),e=Vt.transition,n=de;try{if(Vt.transition=null,de=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Bl=0,le&6)throw Error(z(331));var s=le;for(le|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:co(8,f,i)}var g=f.child;if(g!==null)g.return=f,W=g;else for(;W!==null;){f=W;var y=f.sibling,I=f.return;if(kE(f),f===c){W=null;break}if(y!==null){y.return=I,W=y;break}W=I}}}var A=i.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:co(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,W=C;break e}W=i.return}}var w=t.current;for(W=w;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tu(9,l)}}catch(P){Ce(l,l.return,P)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(le=s,br(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(pu,t)}catch{}r=!0}return r}finally{de=n,Vt.transition=e}}return!1}function Og(t,e,n){e=si(n,e),e=yE(t,e,1),t=hr(t,e,1),e=ct(),t!==null&&(qo(t,1,e),_t(t,e))}function Ce(t,e,n){if(t.tag===3)Og(t,t,n);else for(;e!==null;){if(e.tag===3){Og(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=si(n,t),t=vE(e,t,1),e=hr(e,t,1),t=ct(),e!==null&&(qo(e,1,t),_t(e,t));break}}e=e.return}}function mN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ge&n)===n&&(Oe===4||Oe===3&&(Ge&130023424)===Ge&&500>xe()-Nf?Jr(t,0):Sf|=n),_t(t,e)}function ME(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=ct();t=Pn(t,e),t!==null&&(qo(t,e,n),_t(t,n))}function gN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ME(t,n)}function yN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),ME(t,n)}var FE;FE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,sN(t,e,n);gt=!!(t.flags&131072)}else gt=!1,Ee&&e.flags&1048576&&$_(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var s=ei(e,rt.current);Ws(e,n),s=vf(null,e,r,t,s,n);var i=_f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,Pl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ff(e),s.updater=wu,e.stateNode=s,s._reactInternals=e,Jd(e,r,t,n),e=eh(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&of(e),ut(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=_N(r),t=$t(r,t),s){case 0:e=Zd(null,e,r,t,n);break e;case 1:e=Ag(null,e,r,t,n);break e;case 11:e=Ng(null,e,r,t,n);break e;case 14:e=Cg(null,e,r,$t(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Zd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Ag(t,e,r,s,n);case 3:e:{if(TE(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Q_(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=si(Error(z(423)),e),e=kg(t,e,r,n,s);break e}else if(r!==s){s=si(Error(z(424)),e),e=kg(t,e,r,n,s);break e}else for(It=dr(e.stateNode.containerInfo.firstChild),Nt=e,Ee=!0,Ht=null,n=G_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===s){e=bn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return Y_(e),t===null&&Kd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$d(r,s)?o=null:i!==null&&$d(r,i)&&(e.flags|=32),wE(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return IE(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ni(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Ng(t,e,r,s,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(jl,r._currentValue),r._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===s.children&&!yt.current){e=bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ut(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ws(e,n),s=Ot(s),r=r(s),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),Cg(t,e,r,s,n);case 15:return _E(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),al(t,e),e.tag=1,vt(r)?(t=!0,Pl(e)):t=!1,Ws(e,n),gE(e,r,s),Jd(e,r,s,n),eh(null,e,r,!0,t,n);case 19:return SE(t,e,n);case 22:return EE(t,e,n)}throw Error(z(156,e.tag))};function UE(t,e){return f_(t,e)}function vN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new vN(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _N(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Kh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return Xr(n.children,s,i,e);case Wh:o=8,s|=8;break;case wd:return t=jt(12,n,e,s|2),t.elementType=wd,t.lanes=i,t;case Td:return t=jt(13,n,e,s),t.elementType=Td,t.lanes=i,t;case Id:return t=jt(19,n,e,s),t.elementType=Id,t.lanes=i,t;case Yv:return Su(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kv:o=10;break e;case Qv:o=9;break e;case Gh:o=11;break e;case Kh:o=14;break e;case Xn:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Xr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=jt(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,r,s,i,o,l,u){return t=new EN(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(i),t}function wN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zE(t){if(!t)return Tr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(vt(n))return z_(t,n,e)}return e}function BE(t,e,n,r,s,i,o,l,u){return t=Rf(n,r,!0,t,s,i,o,l,u),t.context=zE(null),n=t.current,r=ct(),s=pr(n),i=Cn(r,s),i.callback=e??null,hr(n,i,s),t.current.lanes=s,qo(t,s,r),_t(t,r),t}function Nu(t,e,n,r){var s=e.current,i=ct(),o=pr(s);return n=zE(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(s,e,o),t!==null&&(Kt(t,s,o,i),sl(t,s,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function TN(){return null}var $E=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}Cu.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Nu(t,e,null,null)};Cu.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Nu(null,t,null,null)}),e[Rn]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=E_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&T_(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function IN(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=ql(o);i.call(c)}}var o=BE(e,r,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[Rn]=o.current,Ao(t.nodeType===8?t.parentNode:t),is(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=ql(u);l.call(c)}}var u=Rf(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=u,t[Rn]=u.current,Ao(t.nodeType===8?t.parentNode:t),is(function(){Nu(e,u,n,r)}),u}function ku(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=ql(o);l.call(u)}}Nu(e,o,t,s)}else o=IN(n,e,t,s,r);return ql(o)}v_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yi(e.pendingLanes);n!==0&&(Jh(e,n|1),_t(e,xe()),!(le&6)&&(ii=xe()+500,br()))}break;case 13:is(function(){var r=Pn(t,1);if(r!==null){var s=ct();Kt(r,t,1,s)}}),Pf(t,1)}};Xh=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ct();Kt(e,t,134217728,n)}Pf(t,134217728)}};__=function(t){if(t.tag===13){var e=pr(t),n=Pn(t,e);if(n!==null){var r=ct();Kt(n,t,e,r)}Pf(t,e)}};E_=function(){return de};w_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Dd=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=vu(r);if(!s)throw Error(z(90));Xv(r),Cd(r,s)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};a_=Cf;l_=is;var SN={usingClientEntryPoint:!1,Events:[Wo,js,vu,i_,o_,Cf]},Wi={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NN={bundleType:Wi.bundleType,version:Wi.version,rendererPackageName:Wi.rendererPackageName,rendererConfig:Wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:Wi.findFiberByHostInstance||TN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{pu=Fa.inject(NN),ln=Fa}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SN;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(z(200));return wN(t,e,null,n)};At.createRoot=function(t,e){if(!Df(t))throw Error(z(299));var n=!1,r="",s=$E;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,r,s),t[Rn]=e.current,Ao(t.nodeType===8?t.parentNode:t),new bf(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return is(t)};At.hydrate=function(t,e,n){if(!Au(e))throw Error(z(200));return ku(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=$E;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=BE(e,null,t,1,n??null,s,!1,i,o),t[Rn]=e.current,Ao(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Cu(e)};At.render=function(t,e,n){if(!Au(e))throw Error(z(200));return ku(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Au(t))throw Error(z(40));return t._reactRootContainer?(is(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};At.unstable_batchedUpdates=Cf;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Au(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return ku(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function qE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qE)}catch(t){console.error(t)}}qE(),qv.exports=At;var CN=qv.exports,Ug=CN;_d.createRoot=Ug.createRoot,_d.hydrateRoot=Ug.hydrateRoot;const AN=()=>{};var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},WE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(y=64)),r.push(n[f],n[g],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(HE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||g==null)throw new xN;const y=i<<2|l>>4;if(r.push(y),c!==64){const I=l<<4&240|c>>2;if(r.push(I),g!==64){const A=c<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RN=function(t){const e=HE(t);return WE.encodeByteArray(e,!0)},Hl=function(t){return RN(t).replace(/\./g,"")},GE=function(t){try{return WE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bN=()=>PN().__FIREBASE_DEFAULTS__,DN=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&GE(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return AN()||bN()||DN()||jN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},KE=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},VN=t=>{const e=KE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},QE=()=>{var t;return(t=xu())==null?void 0:t.config},YE=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ON(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function FN(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $N(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qN(){return!FN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HN(){try{return typeof indexedDB=="object"}catch{return!1}}function WN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GN,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?KN(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function KN(t,e){return t.replace(QN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QN=/\{\$([^}]+)}/g;function YN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bg(i)&&Bg(o)){if(!Dn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JN(t,e){const n=new XN(t,e);return n.subscribe.bind(n)}class XN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gc),s.error===void 0&&(s.error=Gc),s.complete===void 0&&(s.complete=Gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
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
 */function Yo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function JE(t){return(await fetch(t,{credentials:"include"})).ok}class os{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class e1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(n1(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t1(t){return t===Wr?void 0:t}function n1(t){return t.instantiationMode==="EAGER"}/**
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
 */class r1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new e1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const s1={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},i1=ie.INFO,o1={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},a1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=o1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=i1,this._logHandler=a1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const l1=(t,e)=>e.some(n=>t instanceof n);let $g,qg;function u1(){return $g||($g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c1(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XE=new WeakMap,hh=new WeakMap,ZE=new WeakMap,Kc=new WeakMap,Vf=new WeakMap;function d1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XE.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function h1(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ZE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function f1(t){fh=t(fh)}function p1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qc(this),e,...n);return ZE.set(r,e.sort?e.sort():[e]),gr(r)}:c1().includes(t)?function(...e){return t.apply(Qc(this),e),gr(XE.get(this))}:function(...e){return gr(t.apply(Qc(this),e))}}function m1(t){return typeof t=="function"?p1(t):(t instanceof IDBTransaction&&h1(t),l1(t,u1())?new Proxy(t,fh):t)}function gr(t){if(t instanceof IDBRequest)return d1(t);if(Kc.has(t))return Kc.get(t);const e=m1(t);return e!==t&&(Kc.set(t,e),Vf.set(e,t)),e}const Qc=t=>Vf.get(t);function g1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const y1=["get","getKey","getAll","getAllKeys","count"],v1=["put","add","delete","clear"],Yc=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=v1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||y1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Yc.set(e,i),i}f1(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
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
 */class _1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",Wg="0.14.12";/**
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
 */const jn=new jf("@firebase/app"),w1="@firebase/app-compat",T1="@firebase/analytics-compat",I1="@firebase/analytics",S1="@firebase/app-check-compat",N1="@firebase/app-check",C1="@firebase/auth",A1="@firebase/auth-compat",k1="@firebase/database",x1="@firebase/data-connect",R1="@firebase/database-compat",P1="@firebase/functions",b1="@firebase/functions-compat",D1="@firebase/installations",j1="@firebase/installations-compat",V1="@firebase/messaging",L1="@firebase/messaging-compat",O1="@firebase/performance",M1="@firebase/performance-compat",F1="@firebase/remote-config",U1="@firebase/remote-config-compat",z1="@firebase/storage",B1="@firebase/storage-compat",$1="@firebase/firestore",q1="@firebase/ai",H1="@firebase/firestore-compat",W1="firebase",G1="12.13.0";/**
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
 */const mh="[DEFAULT]",K1={[ph]:"fire-core",[w1]:"fire-core-compat",[I1]:"fire-analytics",[T1]:"fire-analytics-compat",[N1]:"fire-app-check",[S1]:"fire-app-check-compat",[C1]:"fire-auth",[A1]:"fire-auth-compat",[k1]:"fire-rtdb",[x1]:"fire-data-connect",[R1]:"fire-rtdb-compat",[P1]:"fire-fn",[b1]:"fire-fn-compat",[D1]:"fire-iid",[j1]:"fire-iid-compat",[V1]:"fire-fcm",[L1]:"fire-fcm-compat",[O1]:"fire-perf",[M1]:"fire-perf-compat",[F1]:"fire-rc",[U1]:"fire-rc-compat",[z1]:"fire-gcs",[B1]:"fire-gcs-compat",[$1]:"fire-fst",[H1]:"fire-fst-compat",[q1]:"fire-vertex","fire-js":"fire-js",[W1]:"fire-js-all"};/**
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
 */const Wl=new Map,Q1=new Map,gh=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(gh.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of Wl.values())Gg(n,t);for(const n of Q1.values())Gg(n,t);return!0}function Lf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Ko("app","Firebase",Y1);/**
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
 */class J1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=G1;function ew(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=QE()),!n)throw yr.create("no-options");const i=Wl.get(s);if(i){if(Dn(n,i.options)&&Dn(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new r1(s);for(const u of gh.values())o.addComponent(u);const l=new J1(n,r,o);return Wl.set(s,l),l}function tw(t=mh){const e=Wl.get(t);if(!e&&t===mh&&QE())return ew();if(!e)throw yr.create("no-app",{appName:t});return e}function vr(t,e,n){let r=K1[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}oi(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const X1="firebase-heartbeat-database",Z1=1,Lo="firebase-heartbeat-store";let Jc=null;function nw(){return Jc||(Jc=g1(X1,Z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Jc}async function eC(t){try{const n=(await nw()).transaction(Lo),r=await n.objectStore(Lo).get(rw(t));return await n.done,r}catch(e){if(e instanceof Un)jn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function Kg(t,e){try{const r=(await nw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,rw(t)),await r.done}catch(n){if(n instanceof Un)jn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function rw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tC=1024,nC=30;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>nC){const o=oC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qg(),{heartbeatsToSend:r,unsentEntries:s}=sC(this._heartbeatsCache.heartbeats),i=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return jn.warn(n),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function sC(t,e=tC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HN()?WN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function oC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function aC(t){oi(new os("platform-logger",e=>new _1(e),"PRIVATE")),oi(new os("heartbeat",e=>new rC(e),"PRIVATE")),vr(ph,Wg,t),vr(ph,Wg,"esm2020"),vr("fire-js","")}aC("");function sw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=sw,iw=new Ko("auth","Firebase",sw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new jf("@firebase/auth");function uC(t,...e){Gl.logLevel<=ie.WARN&&Gl.warn(`Auth (${yi}): ${t}`,...e)}function dl(t,...e){Gl.logLevel<=ie.ERROR&&Gl.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Of(t,...e)}function cn(t,...e){return Of(t,...e)}function ow(t,e,n){const r={...lC(),[e]:n};return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return ow(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iw.create(t,...e)}function Q(t,e,...n){if(!t)throw Of(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function Vn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function cC(){return Jg()==="http:"||Jg()==="https:"}function Jg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cC()||zN()||"connection"in navigator)?navigator.onLine:!0}function hC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=MN()||BN()}get(){return dC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mC=new Jo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function jr(t,e,n,r,s={}){return lw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Qo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return UN()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Yo(t.emulatorConfig.host)&&(c.credentials="include"),aw.fetch()(await uw(t,t.config.apiHost,n,l),c)})}async function lw(t,e,n){t._canInitEmulator=!1;const r={...fC,...e};try{const s=new yC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ow(t,f,c);Jt(t,f)}}catch(s){if(s instanceof Un)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function Xo(t,e,n,r,s={}){const i=await jr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function uw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mf(t.config,s):`${t.config.apiScheme}://${s}`;return pC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function gC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),mC.get())})}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function Xg(t){return t!==void 0&&t.enterprise!==void 0}class vC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _C(t,e){return jr(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function Kl(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wC(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Ff(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:po(Xc(s.auth_time)),issuedAtTime:po(Xc(s.iat)),expirationTime:po(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=GE(n);return s?JSON.parse(s):(dl("Failed to decode base64 JWT payload"),null)}catch(s){return dl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zg(t){const e=Ff(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&TC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ql(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Oo(t,Kl(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?cw(s.providerUserInfo):[],o=NC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function SC(t){const e=Fe(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){const n=await lw(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await uw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Yo(t.emulatorConfig.host)&&(u.credentials="include"),aw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AC(t,e){return jr(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new IC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wC(this,e)}reload(){return SC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Oo(this,EC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:I,providerData:A,stsTokenManager:x}=n;Q(g&&x,e,"internal-error");const b=Ks.fromJSON(this.name,x);Q(typeof g=="string",e,"internal-error"),Jn(r,e.name),Jn(s,e.name),Q(typeof y=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(l,e.name),Jn(u,e.name),Jn(c,e.name),Jn(f,e.name);const C=new Wt({uid:g,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return A&&Array.isArray(A)&&(C.providerData=A.map(w=>({...w}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ql(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ks;l.updateFromIdToken(r);const u=new Wt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function Sn(t){Vn(t instanceof Function,"Expected a class definition");let e=ey.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ey.set(t,e),e)}/**
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
 */class dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dw.type="NONE";const ty=dw;/**
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
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kl(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(Sn(ty),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Sn(ty);const o=hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let g;if(typeof f=="string"){const y=await Kl(e,{idToken:f}).catch(()=>{});if(!y)break;g=await Wt._fromGetAccountInfoResponse(e,y,f)}else g=Wt._fromJSON(e,f);c!==i&&(l=g),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(fw(e))return"Safari";if((e.includes("chrome/")||pw(e))&&!e.includes("edge/"))return"Chrome";if(gw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hw(t=st()){return/firefox\//i.test(t)}function fw(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pw(t=st()){return/crios\//i.test(t)}function mw(t=st()){return/iemobile/i.test(t)}function gw(t=st()){return/android/i.test(t)}function yw(t=st()){return/blackberry/i.test(t)}function vw(t=st()){return/webos/i.test(t)}function Uf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kC(t=st()){var e;return Uf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function xC(){return $N()&&document.documentMode===10}function _w(t=st()){return Uf(t)||gw(t)||vw(t)||yw(t)||/windows phone/i.test(t)||mw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e=[]){let n;switch(t){case"Browser":n=ny(st());break;case"Worker":n=`${ny(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class RC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PC(t,e={}){return jr(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const bC=6;class DC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new RC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kl(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(An(this));const n=e?Fe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PC(this),n=new DC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&uC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fs(t){return Fe(t)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=JN(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VC(t){Ru=t}function ww(t){return Ru.loadJS(t)}function LC(){return Ru.recaptchaEnterpriseScript}function OC(){return Ru.gapiScript}function MC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class FC{constructor(){this.enterprise=new UC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class UC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zC="recaptcha-enterprise",Tw="NO_RECAPTCHA";class BC{constructor(e){this.type=zC,this.auth=fs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_C(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new vC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Xg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Tw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Xg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=LC();u.length!==0&&(u+=l),ww(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function sy(t,e,n,r=!1,s=!1){const i=new BC(t);let o;if(s)o=Tw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _h(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e){const n=Lf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dn(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function qC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HC(t,e,n){const r=fs(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Iw(e),{host:o,port:l}=WC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Dn(c,r.config.emulator)&&Dn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yo(o)?JE(`${i}//${o}${u}`):GC()}function Iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WC(t){const e=Iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:iy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:iy(o)}}}function iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function KC(t,e){return jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function JC(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends zf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,n,"signInWithPassword",QC);case"emailLink":return YC(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,r,"signUpPassword",KC);case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="http://localhost";class as extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eA(t){const e=Xi(Zi(t)).link,n=e?Xi(Zi(e)).deep_link_id:null,r=Xi(Zi(t)).deep_link_id;return(r?Xi(Zi(r)).link:null)||r||n||e||t}class Bf{constructor(e){const n=Xi(Zi(e)),r=n.apiKey??null,s=n.oobCode??null,i=ZC(n.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=eA(e);try{return new Bf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bf.parseLink(n);return Q(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends Sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Zo{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Zo{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Zo{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return Xo(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=oy(r);return new ls({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=oy(r);return new ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yl(e,n,r,s)}}function Nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,i,e,r):i})}async function nA(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function rA(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await Oo(t,Nw(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Ff(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ls._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e,n=!1){if(bt(t.app))return Promise.reject(An(t));const r="signIn",s=await Nw(t,r,e),i=await ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function sA(t,e){return Cw(fs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t){const e=fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iA(t,e,n){if(bt(t.app))return Promise.reject(An(t));const r=fs(t),o=await _h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Aw(t),u}),l=await ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function oA(t,e,n){return bt(t.app)?Promise.reject(An(t)):sA(Fe(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Aw(t),r})}function aA(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function lA(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function uA(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function cA(t){return Fe(t).signOut()}const Jl="__sak";/**
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
 */class kw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=1e3,hA=10;class xw extends kw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xw.type="LOCAL";const fA=xw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends kw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rw.type="SESSION";const Pw=Rw;/**
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
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await pA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=$f("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function gA(t){dn().location.href=t}/**
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
 */function bw(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function yA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _A(){return bw()?self:null}/**
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
 */const Dw="firebaseLocalStorageDb",EA=1,Xl="firebaseLocalStorage",jw="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function wA(){const t=indexedDB.deleteDatabase(Dw);return new ea(t).toPromise()}function Eh(){const t=indexedDB.open(Dw,EA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xl,{keyPath:jw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xl)?e(r):(r.close(),await wA(),e(await Eh()))})})}async function ay(t,e,n){const r=bu(t,!0).put({[jw]:e,value:n});return new ea(r).toPromise()}async function TA(t,e){const n=bu(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function ly(t,e){const n=bu(t,!0).delete(e);return new ea(n).toPromise()}const IA=800,SA=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(_A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await yA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eh();return await ay(e,Jl,"1"),await ly(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bu(s,!1).getAll();return new ea(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const NA=Vw;new Jo(3e4,6e4);/**
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
 */function CA(t,e){return e?Sn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AA(t){return Cw(t.auth,new qf(t),t.bypassAuthState)}function kA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),rA(n,new qf(t),t.bypassAuthState)}async function xA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),nA(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AA;case"linkViaPopup":case"linkViaRedirect":return xA;case"reauthViaPopup":case"reauthViaRedirect":return kA;default:Jt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new Jo(2e3,1e4);class zs extends Lw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="pendingRedirect",fl=new Map;class bA extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await DA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DA(t,e){const n=LA(e),r=VA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jA(t,e){fl.set(t._key(),e)}function VA(t){return Sn(t._redirectPersistence)}function LA(t){return hl(PA,t.config.apiKey,t.name)}async function OA(t,e,n=!1){if(bt(t.app))return Promise.reject(An(t));const r=fs(t),s=CA(r,e),o=await new bA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ow(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MA&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ow({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ow(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$A=/^https?/;async function qA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zA(t);for(const n of e)try{if(HA(n))return}catch{}Jt(t,"unauthorized-domain")}function HA(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$A.test(n))return!1;if(BA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const WA=new Jo(3e4,6e4);function cy(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GA(t){return new Promise((e,n)=>{var s,i,o;function r(){cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cy(),n(cn(t,"network-request-failed"))},timeout:WA.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=MC("iframefcb");return dn()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},ww(`${OC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pl=null,e})}let pl=null;function KA(t){return pl=pl||GA(t),pl}/**
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
 */const QA=new Jo(5e3,15e3),YA="__/auth/iframe",JA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ek(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,JA):`https://${t.config.authDomain}/${YA}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=ZA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qo(r).slice(1)}`}async function tk(t){const e=await KA(t),n=dn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:ek(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},QA.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rk=500,sk=600,ik="_blank",ok="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ak(t,e,n,r=rk,s=sk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...nk,width:r.toString(),height:s.toString(),top:i,left:o},c=st().toLowerCase();n&&(l=pw(c)?ik:n),hw(c)&&(e=e||ok,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[I,A])=>`${y}${I}=${A},`,"");if(kC(c)&&l!=="_self")return lk(e||"",l),new dy(null);const g=window.open(e||"",l,f);Q(g,t,"popup-blocked");try{g.focus()}catch{}return new dy(g)}function lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uk="__/auth/handler",ck="emulator/auth/handler",dk=encodeURIComponent("fac");async function hy(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof Sw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Zo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${dk}=${encodeURIComponent(u)}`:"";return`${hk(t)}?${Qo(l).slice(1)}${c}`}function hk({config:t}){return t.emulator?Mf(t,ck):`https://${t.authDomain}/${uk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pw,this._completeRedirectFn=OA,this._overrideRedirectResult=jA}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await hy(e,n,r,yh(),s);return ak(e,i,$f())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hy(e,n,r,yh(),s);return gA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tk(e),r=new FA(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Zc];i!==void 0&&n(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _w()||fw()||Uf()}}const pk=fk;var fy="@firebase/auth",py="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(t){oi(new os("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(t)},c=new jC(r,s,i,u);return qC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new os("auth-internal",e=>{const n=fs(e.getProvider("auth").getImmediate());return(r=>new mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(fy,py,gk(t)),vr(fy,py,"esm2020")}/**
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
 */const vk=5*60,_k=YE("authIdTokenMaxAge")||vk;let my=null;const Ek=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_k)return;const s=n==null?void 0:n.token;my!==s&&(my=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wk(t=tw()){const e=Lf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$C(t,{popupRedirectResolver:pk,persistence:[NA,fA,Pw]}),r=YE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ek(i.toString());lA(n,o,()=>o(n.currentUser)),aA(n,l=>o(l))}}const s=KE("auth");return s&&HC(n,`http://${s}`),n}function Tk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}VC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Tk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");var Ik="firebase",Sk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(Ik,Sk,"app");var gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,Mw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,_){function m(){}m.prototype=_.prototype,N.F=_.prototype,N.prototype=new m,N.prototype.constructor=N,N.D=function(E,R,k){for(var S=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)S[ue-2]=arguments[ue];return _.prototype[R].apply(E,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,_,m){m||(m=0);const E=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)E[R]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(R=0;R<16;++R)E[R]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=N.g[0],m=N.g[1],R=N.g[2];let k=N.g[3],S;S=_+(k^m&(R^k))+E[0]+3614090360&4294967295,_=m+(S<<7&4294967295|S>>>25),S=k+(R^_&(m^R))+E[1]+3905402710&4294967295,k=_+(S<<12&4294967295|S>>>20),S=R+(m^k&(_^m))+E[2]+606105819&4294967295,R=k+(S<<17&4294967295|S>>>15),S=m+(_^R&(k^_))+E[3]+3250441966&4294967295,m=R+(S<<22&4294967295|S>>>10),S=_+(k^m&(R^k))+E[4]+4118548399&4294967295,_=m+(S<<7&4294967295|S>>>25),S=k+(R^_&(m^R))+E[5]+1200080426&4294967295,k=_+(S<<12&4294967295|S>>>20),S=R+(m^k&(_^m))+E[6]+2821735955&4294967295,R=k+(S<<17&4294967295|S>>>15),S=m+(_^R&(k^_))+E[7]+4249261313&4294967295,m=R+(S<<22&4294967295|S>>>10),S=_+(k^m&(R^k))+E[8]+1770035416&4294967295,_=m+(S<<7&4294967295|S>>>25),S=k+(R^_&(m^R))+E[9]+2336552879&4294967295,k=_+(S<<12&4294967295|S>>>20),S=R+(m^k&(_^m))+E[10]+4294925233&4294967295,R=k+(S<<17&4294967295|S>>>15),S=m+(_^R&(k^_))+E[11]+2304563134&4294967295,m=R+(S<<22&4294967295|S>>>10),S=_+(k^m&(R^k))+E[12]+1804603682&4294967295,_=m+(S<<7&4294967295|S>>>25),S=k+(R^_&(m^R))+E[13]+4254626195&4294967295,k=_+(S<<12&4294967295|S>>>20),S=R+(m^k&(_^m))+E[14]+2792965006&4294967295,R=k+(S<<17&4294967295|S>>>15),S=m+(_^R&(k^_))+E[15]+1236535329&4294967295,m=R+(S<<22&4294967295|S>>>10),S=_+(R^k&(m^R))+E[1]+4129170786&4294967295,_=m+(S<<5&4294967295|S>>>27),S=k+(m^R&(_^m))+E[6]+3225465664&4294967295,k=_+(S<<9&4294967295|S>>>23),S=R+(_^m&(k^_))+E[11]+643717713&4294967295,R=k+(S<<14&4294967295|S>>>18),S=m+(k^_&(R^k))+E[0]+3921069994&4294967295,m=R+(S<<20&4294967295|S>>>12),S=_+(R^k&(m^R))+E[5]+3593408605&4294967295,_=m+(S<<5&4294967295|S>>>27),S=k+(m^R&(_^m))+E[10]+38016083&4294967295,k=_+(S<<9&4294967295|S>>>23),S=R+(_^m&(k^_))+E[15]+3634488961&4294967295,R=k+(S<<14&4294967295|S>>>18),S=m+(k^_&(R^k))+E[4]+3889429448&4294967295,m=R+(S<<20&4294967295|S>>>12),S=_+(R^k&(m^R))+E[9]+568446438&4294967295,_=m+(S<<5&4294967295|S>>>27),S=k+(m^R&(_^m))+E[14]+3275163606&4294967295,k=_+(S<<9&4294967295|S>>>23),S=R+(_^m&(k^_))+E[3]+4107603335&4294967295,R=k+(S<<14&4294967295|S>>>18),S=m+(k^_&(R^k))+E[8]+1163531501&4294967295,m=R+(S<<20&4294967295|S>>>12),S=_+(R^k&(m^R))+E[13]+2850285829&4294967295,_=m+(S<<5&4294967295|S>>>27),S=k+(m^R&(_^m))+E[2]+4243563512&4294967295,k=_+(S<<9&4294967295|S>>>23),S=R+(_^m&(k^_))+E[7]+1735328473&4294967295,R=k+(S<<14&4294967295|S>>>18),S=m+(k^_&(R^k))+E[12]+2368359562&4294967295,m=R+(S<<20&4294967295|S>>>12),S=_+(m^R^k)+E[5]+4294588738&4294967295,_=m+(S<<4&4294967295|S>>>28),S=k+(_^m^R)+E[8]+2272392833&4294967295,k=_+(S<<11&4294967295|S>>>21),S=R+(k^_^m)+E[11]+1839030562&4294967295,R=k+(S<<16&4294967295|S>>>16),S=m+(R^k^_)+E[14]+4259657740&4294967295,m=R+(S<<23&4294967295|S>>>9),S=_+(m^R^k)+E[1]+2763975236&4294967295,_=m+(S<<4&4294967295|S>>>28),S=k+(_^m^R)+E[4]+1272893353&4294967295,k=_+(S<<11&4294967295|S>>>21),S=R+(k^_^m)+E[7]+4139469664&4294967295,R=k+(S<<16&4294967295|S>>>16),S=m+(R^k^_)+E[10]+3200236656&4294967295,m=R+(S<<23&4294967295|S>>>9),S=_+(m^R^k)+E[13]+681279174&4294967295,_=m+(S<<4&4294967295|S>>>28),S=k+(_^m^R)+E[0]+3936430074&4294967295,k=_+(S<<11&4294967295|S>>>21),S=R+(k^_^m)+E[3]+3572445317&4294967295,R=k+(S<<16&4294967295|S>>>16),S=m+(R^k^_)+E[6]+76029189&4294967295,m=R+(S<<23&4294967295|S>>>9),S=_+(m^R^k)+E[9]+3654602809&4294967295,_=m+(S<<4&4294967295|S>>>28),S=k+(_^m^R)+E[12]+3873151461&4294967295,k=_+(S<<11&4294967295|S>>>21),S=R+(k^_^m)+E[15]+530742520&4294967295,R=k+(S<<16&4294967295|S>>>16),S=m+(R^k^_)+E[2]+3299628645&4294967295,m=R+(S<<23&4294967295|S>>>9),S=_+(R^(m|~k))+E[0]+4096336452&4294967295,_=m+(S<<6&4294967295|S>>>26),S=k+(m^(_|~R))+E[7]+1126891415&4294967295,k=_+(S<<10&4294967295|S>>>22),S=R+(_^(k|~m))+E[14]+2878612391&4294967295,R=k+(S<<15&4294967295|S>>>17),S=m+(k^(R|~_))+E[5]+4237533241&4294967295,m=R+(S<<21&4294967295|S>>>11),S=_+(R^(m|~k))+E[12]+1700485571&4294967295,_=m+(S<<6&4294967295|S>>>26),S=k+(m^(_|~R))+E[3]+2399980690&4294967295,k=_+(S<<10&4294967295|S>>>22),S=R+(_^(k|~m))+E[10]+4293915773&4294967295,R=k+(S<<15&4294967295|S>>>17),S=m+(k^(R|~_))+E[1]+2240044497&4294967295,m=R+(S<<21&4294967295|S>>>11),S=_+(R^(m|~k))+E[8]+1873313359&4294967295,_=m+(S<<6&4294967295|S>>>26),S=k+(m^(_|~R))+E[15]+4264355552&4294967295,k=_+(S<<10&4294967295|S>>>22),S=R+(_^(k|~m))+E[6]+2734768916&4294967295,R=k+(S<<15&4294967295|S>>>17),S=m+(k^(R|~_))+E[13]+1309151649&4294967295,m=R+(S<<21&4294967295|S>>>11),S=_+(R^(m|~k))+E[4]+4149444226&4294967295,_=m+(S<<6&4294967295|S>>>26),S=k+(m^(_|~R))+E[11]+3174756917&4294967295,k=_+(S<<10&4294967295|S>>>22),S=R+(_^(k|~m))+E[2]+718787259&4294967295,R=k+(S<<15&4294967295|S>>>17),S=m+(k^(R|~_))+E[9]+3951481745&4294967295,N.g[0]=N.g[0]+_&4294967295,N.g[1]=N.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+R&4294967295,N.g[3]=N.g[3]+k&4294967295}r.prototype.v=function(N,_){_===void 0&&(_=N.length);const m=_-this.blockSize,E=this.C;let R=this.h,k=0;for(;k<_;){if(R==0)for(;k<=m;)s(this,N,k),k+=this.blockSize;if(typeof N=="string"){for(;k<_;)if(E[R++]=N.charCodeAt(k++),R==this.blockSize){s(this,E),R=0;break}}else for(;k<_;)if(E[R++]=N[k++],R==this.blockSize){s(this,E),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var _=1;_<N.length-8;++_)N[_]=0;_=this.o*8;for(var m=N.length-8;m<N.length;++m)N[m]=_&255,_/=256;for(this.v(N),N=Array(16),_=0,m=0;m<4;++m)for(let E=0;E<32;E+=8)N[_++]=this.g[m]>>>E&255;return N};function i(N,_){var m=l;return Object.prototype.hasOwnProperty.call(m,N)?m[N]:m[N]=_(N)}function o(N,_){this.h=_;const m=[];let E=!0;for(let R=N.length-1;R>=0;R--){const k=N[R]|0;E&&k==_||(m[R]=k,E=!1)}this.g=m}var l={};function u(N){return-128<=N&&N<128?i(N,function(_){return new o([_|0],_<0?-1:0)}):new o([N|0],N<0?-1:0)}function c(N){if(isNaN(N)||!isFinite(N))return g;if(N<0)return b(c(-N));const _=[];let m=1;for(let E=0;N>=m;E++)_[E]=N/m|0,m*=4294967296;return new o(_,0)}function f(N,_){if(N.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(N.charAt(0)=="-")return b(f(N.substring(1),_));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=c(Math.pow(_,8));let E=g;for(let k=0;k<N.length;k+=8){var R=Math.min(8,N.length-k);const S=parseInt(N.substring(k,k+R),_);R<8?(R=c(Math.pow(_,R)),E=E.j(R).add(c(S))):(E=E.j(m),E=E.add(c(S)))}return E}var g=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();let N=0,_=1;for(let m=0;m<this.g.length;m++){const E=this.i(m);N+=(E>=0?E:4294967296+E)*_,_*=4294967296}return N},t.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(A(this))return"0";if(x(this))return"-"+b(this).toString(N);const _=c(Math.pow(N,6));var m=this;let E="";for(;;){const R=V(m,_).g;m=C(m,R.j(_));let k=((m.g.length>0?m.g[0]:m.h)>>>0).toString(N);if(m=R,A(m))return k+E;for(;k.length<6;)k="0"+k;E=k+E}},t.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function A(N){if(N.h!=0)return!1;for(let _=0;_<N.g.length;_++)if(N.g[_]!=0)return!1;return!0}function x(N){return N.h==-1}t.l=function(N){return N=C(this,N),x(N)?-1:A(N)?0:1};function b(N){const _=N.g.length,m=[];for(let E=0;E<_;E++)m[E]=~N.g[E];return new o(m,~N.h).add(y)}t.abs=function(){return x(this)?b(this):this},t.add=function(N){const _=Math.max(this.g.length,N.g.length),m=[];let E=0;for(let R=0;R<=_;R++){let k=E+(this.i(R)&65535)+(N.i(R)&65535),S=(k>>>16)+(this.i(R)>>>16)+(N.i(R)>>>16);E=S>>>16,k&=65535,S&=65535,m[R]=S<<16|k}return new o(m,m[m.length-1]&-2147483648?-1:0)};function C(N,_){return N.add(b(_))}t.j=function(N){if(A(this)||A(N))return g;if(x(this))return x(N)?b(this).j(b(N)):b(b(this).j(N));if(x(N))return b(this.j(b(N)));if(this.l(I)<0&&N.l(I)<0)return c(this.m()*N.m());const _=this.g.length+N.g.length,m=[];for(var E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(let R=0;R<N.g.length;R++){const k=this.i(E)>>>16,S=this.i(E)&65535,ue=N.i(R)>>>16,re=N.i(R)&65535;m[2*E+2*R]+=S*re,w(m,2*E+2*R),m[2*E+2*R+1]+=k*re,w(m,2*E+2*R+1),m[2*E+2*R+1]+=S*ue,w(m,2*E+2*R+1),m[2*E+2*R+2]+=k*ue,w(m,2*E+2*R+2)}for(N=0;N<_;N++)m[N]=m[2*N+1]<<16|m[2*N];for(N=_;N<2*_;N++)m[N]=0;return new o(m,0)};function w(N,_){for(;(N[_]&65535)!=N[_];)N[_+1]+=N[_]>>>16,N[_]&=65535,_++}function T(N,_){this.g=N,this.h=_}function V(N,_){if(A(_))throw Error("division by zero");if(A(N))return new T(g,g);if(x(N))return _=V(b(N),_),new T(b(_.g),b(_.h));if(x(_))return _=V(N,b(_)),new T(b(_.g),_.h);if(N.g.length>30){if(x(N)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var m=y,E=_;E.l(N)<=0;)m=P(m),E=P(E);var R=F(m,1),k=F(E,1);for(E=F(E,2),m=F(m,2);!A(E);){var S=k.add(E);S.l(N)<=0&&(R=R.add(m),k=S),E=F(E,1),m=F(m,1)}return _=C(N,R.j(_)),new T(R,_)}for(R=g;N.l(_)>=0;){for(m=Math.max(1,Math.floor(N.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),k=c(m),S=k.j(_);x(S)||S.l(N)>0;)m-=E,k=c(m),S=k.j(_);A(k)&&(k=y),R=R.add(k),N=C(N,S)}return new T(R,N)}t.B=function(N){return V(this,N).h},t.and=function(N){const _=Math.max(this.g.length,N.g.length),m=[];for(let E=0;E<_;E++)m[E]=this.i(E)&N.i(E);return new o(m,this.h&N.h)},t.or=function(N){const _=Math.max(this.g.length,N.g.length),m=[];for(let E=0;E<_;E++)m[E]=this.i(E)|N.i(E);return new o(m,this.h|N.h)},t.xor=function(N){const _=Math.max(this.g.length,N.g.length),m=[];for(let E=0;E<_;E++)m[E]=this.i(E)^N.i(E);return new o(m,this.h^N.h)};function P(N){const _=N.g.length+1,m=[];for(let E=0;E<_;E++)m[E]=N.i(E)<<1|N.i(E-1)>>>31;return new o(m,N.h)}function F(N,_){const m=_>>5;_%=32;const E=N.g.length-m,R=[];for(let k=0;k<E;k++)R[k]=_>0?N.i(k+m)>>>_|N.i(k+m+1)<<32-_:N.i(k+m);return new o(R,N.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Mw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,_r=o}).apply(typeof gy<"u"?gy:typeof self<"u"?self:typeof window<"u"?window:{});var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fw,eo,Uw,ml,wh,zw,Bw,$w;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof za=="object"&&za];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in p))break e;p=p[D]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function g(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,D,L){for(var B=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)B[Z-2]=arguments[Z];return h.prototype[D].apply(v,B)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function A(a,h){for(let v=1;v<arguments.length;v++){const D=arguments[v];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const L=D.length||0;a.length=p+L;for(let B=0;B<L;B++)a[p+B]=D[B]}else a.push(D)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function C(){var a=N;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,p){const v=T.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var T=new x(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let P,F=!1,N=new w,_=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(m)}};function m(){for(var a;a=C();){try{a.h.call(a.g)}catch(p){b(p)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ue(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}g(ue,R),ue.prototype.init=function(a,h){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),ot=0;function Ft(a,h,p,v,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=D,this.key=++ot,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function O(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function se(a){const h={};for(const p in a)h[p]=a[p];return h}const he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(a,h){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)a[p]=v[p];for(let L=0;L<he.length;L++)p=he[L],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function xt(a){this.src=a,this.g={},this.h=0}xt.prototype.add=function(a,h,p,v,D){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const B=Ut(a,h,v,D);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new Ft(h,this.src,L,!!v,D),h.fa=p,a.push(h)),h};function Mr(a,h){const p=h.type;if(p in a.g){var v=a.g[p],D=Array.prototype.indexOf.call(v,h,void 0),L;(L=D>=0)&&Array.prototype.splice.call(v,D,1),L&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ut(a,h,p,v){for(let D=0;D<a.length;++D){const L=a[D];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==v)return D}return-1}var $n="closure_lm_"+(Math.random()*1e6|0),ec={};function jp(a,h,p,v,D){if(Array.isArray(h)){for(let L=0;L<h.length;L++)jp(a,h[L],p,v,D);return null}return p=Op(p),a&&a[re]?a.J(h,p,l(v)?!!v.capture:!1,D):S0(a,h,p,!1,v,D)}function S0(a,h,p,v,D,L){if(!h)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let Z=nc(a);if(Z||(a[$n]=Z=new xt(a)),p=Z.add(h,p,v,B,L),p.proxy)return p;if(v=N0(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)k||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),v,D);else if(a.attachEvent)a.attachEvent(Lp(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function N0(){function a(p){return h.call(a.src,a.listener,p)}const h=C0;return a}function Vp(a,h,p,v,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)Vp(a,h[L],p,v,D);else v=l(v)?!!v.capture:!!v,p=Op(p),a&&a[re]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Ut(h,p,v,D),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ut(h,p,v,D)),(p=a>-1?h[a]:null)&&tc(p))}function tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[re])Mr(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(Lp(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=nc(h))?(Mr(p,a),p.h==0&&(p.src=null,h[$n]=null)):$(a)}}}function Lp(a){return a in ec?ec[a]:ec[a]="on"+a}function C0(a,h){if(a.da)a=!0;else{h=new ue(h,this);const p=a.listener,v=a.ha||a.src;a.fa&&tc(a),a=p.call(v,h)}return a}function nc(a){return a=a[$n],a instanceof xt?a:null}var rc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Op(a){return typeof a=="function"?a:(a[rc]||(a[rc]=function(h){return a.handleEvent(h)}),a[rc])}function Ye(){E.call(this),this.i=new xt(this),this.M=this,this.G=null}g(Ye,E),Ye.prototype[re]=!0,Ye.prototype.removeEventListener=function(a,h,p,v){Vp(this,a,h,p,v)};function at(a,h){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var D=h;h=new R(v,a),Or(h,D)}D=!0;let L,B;if(p)for(B=p.length-1;B>=0;B--)L=h.g=p[B],D=da(L,v,!0,h)&&D;if(L=h.g=a,D=da(L,v,!0,h)&&D,D=da(L,v,!1,h)&&D,p)for(B=0;B<p.length;B++)L=h.g=p[B],D=da(L,v,!1,h)&&D}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let v=0;v<p.length;v++)$(p[v]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},Ye.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function da(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let L=0;L<h.length;++L){const B=h[L];if(B&&!B.da&&B.capture==p){const Z=B.listener,Ve=B.ha||B.src;B.fa&&Mr(a.i,B),D=Z.call(Ve,v)!==!1&&D}}return D&&!v.defaultPrevented}function A0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Mp(a){a.g=A0(()=>{a.g=null,a.i&&(a.i=!1,Mp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class k0 extends E{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Mp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(a){E.call(this),this.h=a,this.g={}}g(Ii,E);var Fp=[];function Up(a){K(a.g,function(h,p){this.g.hasOwnProperty(p)&&tc(h)},a),a.g={}}Ii.prototype.N=function(){Ii.Z.N.call(this),Up(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sc=o.JSON.stringify,x0=o.JSON.parse,R0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function zp(){}function Bp(){}var Si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ic(){R.call(this,"d")}g(ic,R);function oc(){R.call(this,"c")}g(oc,R);var Fr={},$p=null;function ha(){return $p=$p||new Ye}Fr.Ia="serverreachability";function qp(a){R.call(this,Fr.Ia,a)}g(qp,R);function Ni(a){const h=ha();at(h,new qp(h))}Fr.STAT_EVENT="statevent";function Hp(a,h){R.call(this,Fr.STAT_EVENT,a),this.stat=h}g(Hp,R);function lt(a){const h=ha();at(h,new Hp(h,a))}Fr.Ja="timingevent";function Wp(a,h){R.call(this,Fr.Ja,a),this.size=h}g(Wp,R);function Ci(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ai(){this.g=!0}Ai.prototype.ua=function(){this.g=!1};function P0(a,h,p,v,D,L){a.info(function(){if(a.g)if(L){var B="",Z=L.split("&");for(let fe=0;fe<Z.length;fe++){var Ve=Z[fe].split("=");if(Ve.length>1){const Ue=Ve[0];Ve=Ve[1];const nn=Ue.split("_");B=nn.length>=2&&nn[1]=="type"?B+(Ue+"="+Ve+"&"):B+(Ue+"=redacted&")}}}else B=null;else B=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+p+`
`+B})}function b0(a,h,p,v,D,L,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+p+`
`+L+" "+B})}function _s(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+j0(a,p)+(v?" "+v:"")})}function D0(a,h){a.info(function(){return"TIMEOUT: "+h})}Ai.prototype.info=function(){};function j0(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<v.length;B++)v[B]=""}}}}return sc(L)}catch{return h}}var fa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kp;function ac(){}g(ac,zp),ac.prototype.g=function(){return new XMLHttpRequest},Kp=new ac;function ki(a){return encodeURIComponent(String(a))}function V0(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function qn(a,h,p,v){this.j=a,this.i=h,this.l=p,this.S=v||1,this.V=new Ii(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var Yp={},lc={};function uc(a,h,p){a.M=1,a.A=ma(tn(h)),a.u=p,a.R=!0,Jp(a,null)}function Jp(a,h){a.F=Date.now(),pa(a),a.B=tn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),cm(p.i,"t",v),a.C=0,p=a.j.L,a.h=new Qp,a.g=km(a.j,p?h:null,!a.u),a.P>0&&(a.O=new k0(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Fp[0]=D.toString()),D=Fp);for(let L=0;L<D.length;L++){const B=jp(p,D[L],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?se(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ni(),P0(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Gn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Gn(this.g),Ve=this.g.ya(),fe=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||ym(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||fe<=0?Ni(3):Ni(2)),cc(this);var h=this.g.ca();this.X=h;var p=L0(this);if(this.o=h==200,b0(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(v)){var L=v;break t}}L=null}if(a=L)_s(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dc(this,a);else{this.o=!1,this.m=3,lt(12),Ur(this),xi(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<p.length;)if(Ue=O0(this,p),Ue==lc){Z==4&&(this.m=4,lt(14),a=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Yp){this.m=4,lt(15),_s(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else _s(this.i,this.l,Ue,null),dc(this,Ue);if(Xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||p.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)_s(this.i,this.l,p,"[Invalid Chunked Response]"),Ur(this),xi(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),_c(B),B.P=!0,lt(11))}}else _s(this.i,this.l,p,null),dc(this,p);Z==4&&Ur(this),this.o&&!this.K&&(Z==4?Sm(this.j,this):(this.o=!1,pa(this)))}else J0(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Ur(this),xi(this)}}}catch{}finally{}};function L0(a){if(!Xp(a))return a.g.la();const h=ym(a.g);if(h==="")return"";let p="";const v=h.length,D=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ur(a),xi(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<v;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(D&&L==v-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Xp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function O0(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?lc:(p=Number(h.substring(p,v)),isNaN(p)?Yp:(v+=1,v+p>h.length?lc:(h=h.slice(v,v+p),a.C=v+p,h)))}qn.prototype.cancel=function(){this.K=!0,Ur(this)};function pa(a){a.T=Date.now()+a.H,Zp(a,a.H)}function Zp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ci(c(a.aa,a),h)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(D0(this.i,this.B),this.M!=2&&(Ni(),lt(17)),Ur(this),this.m=2,xi(this)):Zp(this,this.T-a)};function xi(a){a.j.I==0||a.K||Sm(a.j,a)}function Ur(a){cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Up(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function dc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||hc(p.h,a))){if(!a.L&&hc(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ea(p),va(p);else break e;vc(p),lt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ci(c(p.Va,p),6e3));nm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Br(p,11)}else if((a.L||p.g==a)&&Ea(p),!S(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let fe=D[h];const Ue=fe[0];if(!(Ue<=p.K))if(p.K=Ue,fe=fe[1],p.I==2)if(fe[0]=="c"){p.M=fe[1],p.ba=fe[2];const nn=fe[3];nn!=null&&(p.ka=nn,p.j.info("VER="+p.ka));const $r=fe[4];$r!=null&&(p.za=$r,p.j.info("SVER="+p.za));const Kn=fe[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(v=1.5*Kn,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Qn=a.g;if(Qn){const Ta=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var L=v.h;L.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(fc(L,L.h),L.h=null))}if(v.G){const Ec=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(v.wa=Ec,ge(v.J,v.G,Ec))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var B=a;if(v.na=Am(v,v.L?v.ba:null,v.W),B.L){rm(v.h,B);var Z=B,Ve=v.O;Ve&&(Z.H=Ve),Z.D&&(cc(Z),pa(Z)),v.g=B}else Tm(v);p.i.length>0&&_a(p)}else fe[0]!="stop"&&fe[0]!="close"||Br(p,7);else p.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Br(p,7):yc(p):fe[0]!="noop"&&p.l&&p.l.qa(fe),p.A=0)}}Ni(4)}catch{}}var M0=class{constructor(a,h){this.g=a,this.map=h}};function em(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function hc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fc(a,h){a.g?a.g.add(h):a.h=h}function rm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}em.prototype.cancel=function(){if(this.i=sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return I(a.i)}var im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F0(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let D,L=null;v>=0?(D=a[p].substring(0,v),L=a[p].substring(v+1)):D=a[p],h(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Hn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Hn?(this.l=a.l,Ri(this,a.j),this.o=a.o,this.g=a.g,Pi(this,a.u),this.h=a.h,pc(this,dm(a.i)),this.m=a.m):a&&(h=String(a).match(im))?(this.l=!1,Ri(this,h[1]||"",!0),this.o=bi(h[2]||""),this.g=bi(h[3]||"",!0),Pi(this,h[4]),this.h=bi(h[5]||"",!0),pc(this,h[6]||"",!0),this.m=bi(h[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}Hn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Di(h,om,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Di(h,om,!0),"@"),a.push(ki(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Di(p,p.charAt(0)=="/"?B0:z0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Di(p,q0)),a.join("")},Hn.prototype.resolve=function(a){const h=tn(this);let p=!!a.j;p?Ri(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var v=a.h;if(p)Pi(h,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=h.h.lastIndexOf("/");D!=-1&&(v=h.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let B=0;B<D.length;){const Z=D[B++];Z=="."?v&&B==D.length&&L.push(""):Z==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&B==D.length&&L.push("")):(L.push(Z),v=!0)}v=L.join("/")}else v=D}return p?h.h=v:p=a.i.toString()!=="",p?pc(h,dm(a.i)):p=!!a.m,p&&(h.m=a.m),h};function tn(a){return new Hn(a)}function Ri(a,h,p){a.j=p?bi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Pi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function pc(a,h,p){h instanceof ji?(a.i=h,H0(a.i,a.l)):(p||(h=Di(h,$0)),a.i=new ji(h,a.l))}function ge(a,h,p){a.i.set(h,p)}function ma(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function bi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Di(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,U0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function U0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var om=/[#\/\?@]/g,z0=/[#\?:]/g,B0=/[#\?]/g,$0=/[#\?@]/g,q0=/#/g;function ji(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&F0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ji.prototype,t.add=function(a,h){zr(this),this.i=null,a=Es(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function am(a,h){zr(a),h=Es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lm(a,h){return zr(a),h=Es(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(p,v){p.forEach(function(D){a.call(h,D,v,this)},this)},this)};function um(a,h){zr(a);let p=[];if(typeof h=="string")lm(a,h)&&(p=p.concat(a.g.get(Es(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return zr(this),this.i=null,a=Es(this,a),lm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=um(this,a),a.length>0?String(a[0]):h):h};function cm(a,h,p){am(a,h),p.length>0&&(a.i=null,a.g.set(Es(a,h),I(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const D=ki(p);p=um(this,p);for(let L=0;L<p.length;L++){let B=D;p[L]!==""&&(B+="="+ki(p[L])),a.push(B)}}return this.i=a.join("&")};function dm(a){const h=new ji;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function H0(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(p,v){const D=v.toLowerCase();v!=D&&(am(this,v),cm(this,D,p))},a)),a.j=h}function W0(a,h){const p=new Ai;if(o.Image){const v=new Image;v.onload=f(Wn,p,"TestLoadImage: loaded",!0,h,v),v.onerror=f(Wn,p,"TestLoadImage: error",!1,h,v),v.onabort=f(Wn,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=f(Wn,p,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function G0(a,h){const p=new Ai,v=new AbortController,D=setTimeout(()=>{v.abort(),Wn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?Wn(p,"TestPingServer: ok",!0,h):Wn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Wn(p,"TestPingServer: error",!1,h)})}function Wn(a,h,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function K0(){this.g=new R0}function mc(a){this.i=a.Sb||null,this.h=a.ab||!1}g(mc,zp),mc.prototype.g=function(){return new ga(this.i,this.h)};function ga(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ga,Ye),t=ga.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vi(this):Li(this),this.readyState==3&&hm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Vi(this))},t.Na=function(a){this.g&&(this.response=a,Vi(this))},t.ga=function(){this.g&&Vi(this)};function Vi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Li(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fm(a){let h="";return K(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function gc(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=fm(p),typeof a=="string"?p!=null&&ki(p):ge(a,h,p))}function Ne(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ne,Ye);var Q0=/^https?$/i,Y0=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kp.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){pm(this,L);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())p.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Y0,h,void 0)>=0)||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){pm(this,L)}};function pm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,mm(a),ya(a)}function mm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gm(this):this.Xa())},t.Xa=function(){gm(this)};function gm(a){if(a.h&&typeof i<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=L===0){let B=String(a.D).match(im)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),v=!Q0.test(B?B.toLowerCase():"")}p=v}if(p)at(a,"complete"),at(a,"success");else{a.o=6;try{var D=Gn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",mm(a)}}finally{ya(a)}}}}function ya(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||at(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),x0(h)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function J0(a){const h={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(S(a[v]))continue;var p=V0(a[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[D]||[];h[D]=L,L.push(p)}O(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function vm(a){this.za=0,this.i=[],this.j=new Ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oi("baseRetryDelayMs",5e3,a),this.Za=Oi("retryDelaySeedMs",1e4,a),this.Ta=Oi("forwardChannelMaxRetries",2,a),this.va=Oi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new em(a&&a.concurrentRequestLimit),this.Ba=new K0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=vm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,v){lt(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=Am(this,null,this.W),_a(this)};function yc(a){if(_m(a),a.I==3){var h=a.V++,p=tn(a.J);if(ge(p,"SID",a.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),Mi(a,p),h=new qn(a,a.j,h),h.M=2,h.A=ma(tn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=km(h.j,null),h.g.ea(h.A)),h.F=Date.now(),pa(h)}Cm(a)}function va(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function _m(a){va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ea(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function _a(a){if(!tm(a.h)&&!a.m){a.m=!0;var h=a.Ea;P||_(),F||(P(),F=!0),N.add(h,a),a.D=0}}function X0(a,h){return nm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ci(c(a.Ea,a,h),Nm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new qn(this,this.j,a);let L=this.o;if(this.U&&(L?(L=se(L),Or(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=wm(this,D,h),p=tn(this.J),ge(p,"RID",a),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),Mi(this,p),L&&(this.R?h="headers="+ki(fm(L))+"&"+h:this.u&&gc(p,this.u,L)),fc(this.h,D),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),D.U=!0,uc(D,p,null)):uc(D,p,h),this.I=2}}else this.I==3&&(a?Em(this,a):this.i.length==0||tm(this.h)||Em(this))};function Em(a,h){var p;h?p=h.l:p=a.V++;const v=tn(a.J);ge(v,"SID",a.M),ge(v,"RID",p),ge(v,"AID",a.K),Mi(a,v),a.u&&a.o&&gc(v,a.u,a.o),p=new qn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=wm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fc(a.h,p),uc(p,v,h)}function Mi(a,h){a.H&&K(a.H,function(p,v){ge(h,v,p)}),a.l&&K({},function(p,v){ge(h,v,p)})}function wm(a,h,p){p=Math.min(a.i.length,p);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let Z=-1;for(;;){const Ve=["count="+p];Z==-1?p>0?(Z=D[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let fe=!0;for(let Ue=0;Ue<p;Ue++){var L=D[Ue].g;const nn=D[Ue].map;if(L-=Z,L<0)Z=Math.max(0,D[Ue].g-100),fe=!1;else try{L="req"+L+"_"||"";try{var B=nn instanceof Map?nn:Object.entries(nn);for(const[$r,Kn]of B){let Qn=Kn;l(Kn)&&(Qn=sc(Kn)),Ve.push(L+$r+"="+encodeURIComponent(Qn))}}catch($r){throw Ve.push(L+"type="+encodeURIComponent("_badmap")),$r}}catch{v&&v(nn)}}if(fe){B=Ve.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function Tm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;P||_(),F||(P(),F=!0),N.add(h,a),a.A=0}}function vc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ci(c(a.Da,a),Nm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Im(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ci(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),va(this),Im(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Im(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tn(a.na);ge(h,"RID","rpc"),ge(h,"SID",a.M),ge(h,"AID",a.K),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(h,"TO",a.ia),ge(h,"TYPE","xmlhttp"),Mi(a,h),a.u&&a.o&&gc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ma(tn(h)),p.u=null,p.R=!0,Jp(p,a)}t.Va=function(){this.C!=null&&(this.C=null,va(this),vc(this),lt(19))};function Ea(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sm(a,h){var p=null;if(a.g==h){Ea(a),_c(a),a.g=null;var v=2}else if(hc(a.h,h))p=h.G,rm(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;v=ha(),at(v,new Wp(v,p)),_a(a)}else Tm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(v==1&&X0(a,h)||v==2&&vc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function Nm(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),v=a.Ua;const D=!v;v=new Hn(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ri(v,"https"),ma(v),D?W0(v.toString(),p):G0(v.toString(),p)}else lt(2);a.I=0,a.l&&a.l.pa(h),Cm(a),_m(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Cm(a){if(a.I=0,a.ja=[],a.l){const h=sm(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Am(a,h,p){var v=p instanceof Hn?tn(p):new Hn(p);if(v.g!="")h&&(v.g=h+"."+v.g),Pi(v,v.u);else{var D=o.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const L=new Hn(null);v&&Ri(L,v),h&&(L.g=h),D&&Pi(L,D),p&&(L.h=p),v=L}return p=a.G,h=a.wa,p&&h&&ge(v,p,h),ge(v,"VER",a.ka),Mi(a,v),v}function km(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ne(new mc({ab:p})):new Ne(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wa(){}wa.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Ye.call(this),this.g=new vm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ws(this)}g(wt,Ye),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){yc(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=sc(a),a=p);h.i.push(new M0(h.Ya++,a)),h.I==3&&_a(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,wt.Z.N.call(this)};function Rm(a){ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}g(Rm,ic);function Pm(){oc.call(this),this.status=1}g(Pm,oc);function ws(a){this.g=a}g(ws,xm),ws.prototype.ra=function(){at(this.g,"a")},ws.prototype.qa=function(a){at(this.g,new Rm(a))},ws.prototype.pa=function(a){at(this.g,new Pm)},ws.prototype.oa=function(){at(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,$w=function(){return new wa},Bw=function(){return ha()},zw=Fr,wh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,ml=fa,Gp.COMPLETE="complete",Uw=Gp,Bp.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,eo=Bp,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,Fw=Ne}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let _i="12.13.0";function Nk(t){_i=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const us=new jf("@firebase/firestore");function Ns(){return us.logLevel}function q(t,...e){if(us.logLevel<=ie.DEBUG){const n=e.map(Hf);us.debug(`Firestore (${_i}): ${t}`,...n)}}function Ln(t,...e){if(us.logLevel<=ie.ERROR){const n=e.map(Hf);us.error(`Firestore (${_i}): ${t}`,...n)}}function cs(t,...e){if(us.logLevel<=ie.WARN){const n=e.map(Hf);us.warn(`Firestore (${_i}): ${t}`,...n)}}function Hf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,qw(t,r,n)}function qw(t,e,n){let r=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||qw(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Ak{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new Hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class xk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Rk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Th(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ed(s)===ed(i)?ee(s,i):ed(s)?1:-1}return ee(t.length,e.length)}const Dk=55296,jk=57343;function ed(t){const e=t.charCodeAt(0);return e>=Dk&&e<=jk}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ee(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):Th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class pe extends on{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const Vk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends on{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return Vk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vy}static keyField(){return new We([vy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lk(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _y(t){if(!G.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ey(t){if(G.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function ta(t,e){if(!Gw(t))throw new H(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=-62135596800,Ty=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ty);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wy)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ty}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ta(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:De("string",ve._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ve(0,0))}static max(){return new J(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fo=-1;function Ok(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Ir(s,G.empty(),e)}function Mk(t){return new Ir(t.readTime,t.key,Fo)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(J.min(),G.empty(),Fo)}static max(){return new Ir(J.max(),G.empty(),Fo)}}function Fk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Uk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Bk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ju.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=-1;function Vu(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function $k(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="";function qk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Iy(e)),e=Hk(t.get(n),e);return Iy(e)}function Hk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Kw:n+="";break;default:n+=i}}return n}function Iy(t){return t+Kw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new St([])}unionWith(e){let n=new Me(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yw("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Wk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=Wk.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="server_timestamp",Xw="__type__",Zw="__previous_value__",eT="__local_write_time__";function Kf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Xw])==null?void 0:r.stringValue)===Jw}function Lu(t){const e=t.mapValue.fields[Zw];return Kf(e)?Lu(e):e}function Uo(t){const e=Sr(t.mapValue.fields[eT].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r,s,i,o,l,u,c,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=g}}const eu="(default)";class zo{constructor(e,n){this.projectId=e,this.database=n||eu}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===eu}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}function Kk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="__type__",Qk="__max__",$a={mapValue:{}},nT="__vector__",tu="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kf(t)?4:Jk(t)?9007199254740991:Yk(t)?10:11:Y(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),l=Sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?Zl(o)===Zl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Sy(o)!==Sy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Uo(t),Uo(e));case 5:return Th(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Nr(i),u=Nr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ee(ke(i.latitude),ke(o.latitude));return l!==0?l:ee(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ay(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,I,A,x;const l=i.fields||{},u=o.fields||{},c=(y=l[tu])==null?void 0:y.arrayValue,f=(I=u[tu])==null?void 0:I.arrayValue,g=ee(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return g!==0?g:Ay(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=Th(u[g],f[g]);if(y!==0)return y;const I=li(l[u[g]],c[f[g]]);if(I!==0)return I}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Sr(t),r=Sr(e),s=ee(n.seconds,r.seconds);return s!==0?s:ee(n.nanos,r.nanos)}function Ay(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return ee(n.length,r.length)}function ui(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ih(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ih(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function gl(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lu(t);return e?16+gl(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+gl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vr(r.fields,(i,o)=>{s+=i.length+gl(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function ky(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sh(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function Ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yl(t){return!!t&&"mapValue"in t}function Yk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tT])==null?void 0:r.stringValue)===nT}function mo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return{...t}}function Jk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Qk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=mo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(mo(this.value))}}function rT(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new We([n]);if(yl(r)){const i=rT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nu{constructor(e,n){this.position=e,this.inclusive=n}}function Py(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function by(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ru{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sT{}class be extends sT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ex(e,n,r):n==="array-contains"?new rx(e,r):n==="in"?new sx(e,r):n==="not-in"?new ix(e,r):n==="array-contains-any"?new ox(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tx(e,r):new nx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(li(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends sT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return iT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iT(t){return t.op==="and"}function oT(t){return Zk(t)&&iT(t)}function Zk(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Nh(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ui(t.value);if(oT(t))return t.filters.map(e=>Nh(e)).join(",");{const e=t.filters.map(n=>Nh(n)).join(",");return`${t.op}(${e})`}}function aT(t,e){return t instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&aT(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function lT(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ui(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(lT).join(" ,")+"}"}(t):"Filter"}class ex extends be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class tx extends be{constructor(e,n){super(e,"in",n),this.keys=uT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nx extends be{constructor(e,n){super(e,"not-in",n),this.keys=uT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class rx extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&Bo(n.arrayValue,this.value)}}class sx extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class ix extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class ox extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
 */class ax{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Dy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ax(t,e,n,r,s,i,o)}function Yf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.Te=n}return e.Te}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!aT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!by(t.startAt,e.startAt)&&by(t.endAt,e.endAt)}function Ch(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function lx(t,e,n,r,s,i,o,l){return new na(t,e,n,r,s,i,o,l)}function Ou(t){return new na(t)}function jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ux(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cT(t){return t.collectionGroup!==null}function go(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ru(i,r))}),n.has(We.keyField().canonicalString())||e.Ie.push(new ru(We.keyField(),r))}return e.Ie}function hn(t){const e=X(t);return e.Ee||(e.Ee=cx(e,go(t))),e.Ee}function cx(t,e){if(t.limitType==="F")return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ru(s.field,i)});const n=t.endAt?new nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nu(t.startAt.position,t.startAt.inclusive):null;return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ah(t,e){const n=t.filters.concat([e]);return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kh(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return Jf(hn(t),hn(e))&&t.limitType===e.limitType}function dT(t){return`${Yf(hn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lT(s)).join(", ")}]`),Vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ui(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Py(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,go(r),s)||r.endAt&&!function(o,l,u){const c=Py(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,go(r),s))}(t,e)}function dx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hT(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=hx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hx(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?li(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new we(G.comparator);function On(){return fx}const fT=new we(G.comparator);function to(...t){let e=fT;for(const n of t)e=e.insert(n.key,n);return e}function pT(t){let e=fT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return yo()}function mT(){return yo()}function yo(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const px=new we(G.comparator),mx=new Me(G.comparator);function te(...t){let e=mx;for(const n of t)e=e.add(n);return e}const gx=new Me(ee);function yx(){return gx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function gT(t){return{integerValue:""+t}}function vx(t,e){return $k(e)?gT(e):Xf(t,e)}/**
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
 */class Uu{constructor(){this._=void 0}}function _x(t,e,n){return t instanceof su?function(s,i){const o={fields:{[Xw]:{stringValue:Jw},[eT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kf(i)&&(i=Lu(i)),i&&(o.fields[Zw]=i),{mapValue:o}}(n,e):t instanceof ci?vT(t,e):t instanceof di?_T(t,e):function(s,i){const o=yT(s,i),l=Vy(o)+Vy(s.Ae);return Sh(o)&&Sh(s.Ae)?gT(l):Xf(s.serializer,l)}(t,e)}function Ex(t,e,n){return t instanceof ci?vT(t,e):t instanceof di?_T(t,e):n}function yT(t,e){return t instanceof iu?function(r){return Sh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class su extends Uu{}class ci extends Uu{constructor(e){super(),this.elements=e}}function vT(t,e){const n=ET(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class di extends Uu{constructor(e){super(),this.elements=e}}function _T(t,e){let n=ET(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class iu extends Uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Vy(t){return ke(t.integerValue||t.doubleValue)}function ET(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n){this.field=e,this.transform=n}}function wx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ci&&s instanceof ci||r instanceof di&&s instanceof di?ai(r.elements,s.elements,mn):r instanceof iu&&s instanceof iu?mn(r.Ae,s.Ae):r instanceof su&&s instanceof su}(t.transform,e.transform)}class Tx{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function TT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zf(t.key,Lt.none()):new ra(t.key,t.data,Lt.none());{const n=t.data,r=mt.empty();let s=new Me(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new St(s.toArray()),Lt.none())}}function Ix(t,e,n){t instanceof ra?function(s,i,o){const l=s.value.clone(),u=Oy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!vl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Oy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(IT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof ra?function(i,o,l,u){if(!vl(i.precondition,o))return l;const c=i.value.clone(),f=My(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,l,u){if(!vl(i.precondition,o))return l;const c=My(i.fieldTransforms,u,o),f=o.data;return f.setAll(IT(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return vl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Sx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yT(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>wx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends zu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends zu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function IT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Oy(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Ex(o,l,n[s]))}return r}function My(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_x(i,o,e))}return r}class Zf extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nx extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ix(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=TT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>Ly(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>Ly(n,r))}}class ep{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return px}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ep(e,n,r,s)}}/**
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
 */class Ax{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ae;function xx(t){switch(t){case M.OK:return Y(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function ST(t){if(t===void 0)return Ln("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return Y(39323,{code:t})}}(ae=Re||(Re={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Rx(){return new TextEncoder}/**
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
 */const Px=new _r([4294967295,4294967295],0);function Fy(t){const e=Rx().encode(t),n=new Mw;return n.update(e),new Uint8Array(n.digest())}function Uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class tp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(r<0)throw new no(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(Px)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Fy(e),[r,s]=Uy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new tp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Fy(e),[r,s]=Uy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sa(J.min(),s,new we(ee),On(),te())}}class ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class NT{constructor(e,n){this.targetId=e,this.Ce=n}}class CT{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zy{constructor(){this.ve=0,this.Fe=By(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new ia(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=By()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bx{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=qa(),this.He=qa(),this.Ze=new we(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ch(i))if(r===0){const o=new G(i.path);this.et(n,o,nt.newNoDocument(o,J.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(u){if(u instanceof Yw)return cs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tp(o,s,i)}catch(u){return cs(u instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ch(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=te();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new sa(e,n,this.Ze,this.je,r);return this.je=On(),this.Je=qa(),this.He=qa(),this.Ze=new we(ee),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new zy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Me(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function qa(){return new we(G.comparator)}function By(){return new we(G.comparator)}const Dx={asc:"ASCENDING",desc:"DESCENDING"},jx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vx={and:"AND",or:"OR"};class Lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ox(t,e){return ou(t,e.toTimestamp())}function fn(t){return ce(!!t,49232),J.fromTimestamp(function(n){const r=Sr(n);return new ve(r.seconds,r.nanos)}(t))}function np(t,e){return Rh(t,e).canonicalString()}function Rh(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kT(t){const e=pe.fromString(t);return ce(DT(e),10190,{key:e.toString()}),e}function Ph(t,e){return np(t.databaseId,e.path)}function td(t,e){const n=kT(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(RT(n))}function xT(t,e){return np(t.databaseId,e)}function Mx(t){const e=kT(t);return e.length===4?pe.emptyPath():RT(e)}function bh(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RT(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $y(t,e,n){return{name:Ph(t,e),fields:n.value.mapValue.fields}}function Fx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:ST(c.code);return new H(f,c.message||"")}(o);n=new CT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=td(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new _l(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=td(t,r.document),i=r.readTime?fn(r.readTime):J.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=td(t,r.document),i=r.removedTargetIds||[];n=new _l([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kx(s,i),l=r.targetId;n=new NT(l,o)}}return n}function Ux(t,e){let n;if(e instanceof ra)n={update:$y(t,e.key,e.value)};else if(e instanceof Zf)n={delete:Ph(t,e.key)};else if(e instanceof Lr)n={update:$y(t,e.key,e.data),updateMask:Qx(e.fieldMask)};else{if(!(e instanceof Nx))return Y(16599,{dt:e.type});n={verify:Ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof su)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof iu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ox(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function zx(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(J.min())&&(o=fn(i)),new Tx(o,s.transformResults||[])}(n,e))):[]}function Bx(t,e){return{documents:[xT(t,e.path)]}}function $x(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xT(t,s);const i=function(c){if(c.length!==0)return bT(Xt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:As(y.field),direction:Wx(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function qx(t){let e=Mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const y=PT(g);return y instanceof Xt&&oT(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(A){return new ru(ks(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,Vu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,I=g.values||[];return new nu(I,y)}(n.startAt));let c=null;return n.endAt&&(c=function(g){const y=!g.before,I=g.values||[];return new nu(I,y)}(n.endAt)),lx(e,s,o,i,l,"F",u,c)}function Hx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>PT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function Wx(t){return Dx[t]}function Gx(t){return jx[t]}function Kx(t){return Vx[t]}function As(t){return{fieldPath:t.canonicalString()}}function ks(t){return We.fromServerFormat(t.fieldPath)}function bT(t){return t instanceof be?function(n){if(n.op==="=="){if(Ry(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ry(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:Gx(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>bT(s));return r.length===1?r[0]:{compositeFilter:{op:Kx(n.op),filters:r}}}(t):Y(54877,{filter:t})}function Qx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function jT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yx{constructor(e){this.yt=e}}function Jx(t){const e=qx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kh(e,e.limit,"L"):e}/**
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
 */class Xx{constructor(){this.bn=new Zx}addToCollectionParentIndex(e,n){return this.bn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ir.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class Zx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(pe.comparator)).toArray()}}/**
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
 */const qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VT=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(VT,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ar(0)}static ar(){return new Ar(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="LruGarbageCollector",eR=1048576;function Wy([t,e],[n,r]){const s=ee(t,n);return s===0?ee(e,r):s}class tR{constructor(e){this.Pr=e,this.buffer=new Me(Wy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Wy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Hy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?q(Hy,"Ignoring IndexedDB error during garbage collection: ",n):await Ei(n)}await this.Ar(3e5)})}}class rR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(ju.ce);const r=new tR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(qy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(c=Date.now(),Ns()<=ie.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function sR(t,e){return new rR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vo(r.mutation,s,St.empty(),ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=to();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=yo(),l=function(){return yo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),vo(f.mutation,c,f.mutation.getFieldMask(),ve.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new oR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new we((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(c,f),r.set(u,f);const g=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,g=mT();f.forEach(y=>{if(!i.has(y)){const I=TT(n.get(y),r.get(y));I!==null&&g.set(y,I),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,g))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return ux(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Yr());let l=Fo,u=i;return o.next(c=>U.forEach(c,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:pT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=to();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const c=function(g,y){return new na(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=to();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&vo(f.mutation,c,St.empty(),ve.now()),Fu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Jx(s.bundledQuery),readTime:fn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class uR{constructor(){this.overlays=new we(G.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Yr(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Yr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return U.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ax(n,r));let i=this.Lr.get(n);i===void 0&&(i=te(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class cR{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.kr=new Me(ze.Kr),this.qr=new Me(ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new pe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new pe([])),r=new ze(n,e),s=new ze(n,e+1);let i=te();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(ze.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cx(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Gf:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ee);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new ze(new G(i),0);let l=new Me(ee);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),U.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ze(n,0),s=this.Hr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.ti=e,this.docs=function(){return new we(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fk(Mk(f),r)<=0||(s.has(f.key)||Fu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fR(this)}getSize(e){return U.resolve(this.size)}}class fR extends iR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.persistence=e,this.ri=new ps(n=>Yf(n),Jf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new rp,this.targetCount=0,this.oi=Ar._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ar(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this._i={},this.overlays={},this.ai=new ju(0),this.ui=!1,this.ui=!0,this.ci=new cR,this.referenceDelegate=e(this),this.li=new pR(this),this.indexManager=new Xx,this.remoteDocumentCache=function(s){return new hR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Yx(n),this.Pi=new lR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new dR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new mR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class mR extends zk{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new rp,this.Ai=null}static Vi(e){return new sp(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class au{constructor(e,n){this.persistence=e,this.fi=new ps(r=>qk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=sR(this,n)}static Vi(e,n){return new au(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=gl(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ip(e,n.fromCache,r,s)}}/**
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
 */class gR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return qN()?8:Bk(st())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new gR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ns()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(Ns()<=ie.DEBUG&&q("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ns()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):U.resolve())}gs(e,n){if(jy(n))return U.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,kh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return jy(n)||s.isEqual(J.min())?U.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?U.resolve(null):(Ns()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.Ds(e,o,n,Ok(s,Fo)).next(l=>l))})}Ss(e,n){let r=new Me(hT(e));return n.forEach((s,i)=>{Fu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ns()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.fs.getDocumentsMatchingQuery(e,n,Ir.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="LocalStore",vR=3e8;class _R{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new we(ee),this.Fs=new ps(i=>Yf(i),Jf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function ER(t,e,n,r){return new _R(t,e,n,r)}async function OT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function wR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const g=c.batch,y=g.keys();let I=U.resolve();return y.forEach(A=>{I=I.next(()=>f.getEntry(u,A)).next(x=>{const b=c.docVersions.get(A);ce(b!==null,48541),x.version.compareTo(b)<0&&(g.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),f.addEntry(x)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function MT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function TR(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const y=s.get(g);if(!y)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let I=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(Qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(g,I),function(x,b,C){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=vR?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(y,I,f)&&l.push(n.li.updateTargetData(i,I))});let u=On(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(IR(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function IR(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(op,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function SR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Dh(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;q(op,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Gy(t,e,n){const r=X(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const g=X(u),y=g.Fs.get(f);return y!==void 0?U.resolve(g.vs.get(y)):g.li.getTargetData(c,f)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(l=>(CR(r,dx(e),l),{documents:l,ks:i})))}function CR(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ky{constructor(){this.activeTargetIds=yx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AR{constructor(){this.vo=new Ky,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kR{Mo(e){}shutdown(){}}/**
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
 */const Qy="ConnectivityMonitor";class Yy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Qy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Qy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ha=null;function jh(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="RestConnection",xR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class RR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===eu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=jh(),l=this.Qo(e,n.toUriEncodedString());q(nd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Yo(c);return this.zo(e,l,u,r,f).then(g=>(q(nd,`Received RPC '${e}' ${o}: `,g),g),g=>{throw cs(nd,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_i}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=xR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Gi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Js extends RR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Js.c_){const e=Bw();Gi(e,zw.STAT_EVENT,n=>{n.stat===wh.PROXY?q(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===wh.NOPROXY&&q(Ze,"STAT_EVENT: detected no buffering proxy")}),Js.c_=!0}}zo(e,n,r,s,i){const o=jh();return new Promise((l,u)=>{const c=new Fw;c.setWithCredentials(!0),c.listenOnce(Uw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ml.NO_ERROR:const g=c.getResponseJson();q(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case ml.TIMEOUT:q(Ze,`RPC '${e}' ${o} timed out`),u(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case ml.HTTP_ERROR:const y=c.getStatus();if(q(Ze,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const x=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(A.status);u(new H(x,A.message))}else u(new H(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(M.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(Ze,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=jh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");q(Ze,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let g=!1,y=!1;const I=new PR({Jo:A=>{y?q(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(g||(q(Ze,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),q(Ze,`RPC '${e}' stream ${s} sending:`,A),f.send(A))},Ho:()=>f.close()});return Gi(f,eo.EventType.OPEN,()=>{y||(q(Ze,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),Gi(f,eo.EventType.CLOSE,()=>{y||(y=!0,q(Ze,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(f))}),Gi(f,eo.EventType.ERROR,A=>{y||(y=!0,cs(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),I.o_(new H(M.UNAVAILABLE,"The operation could not be completed")))}),Gi(f,eo.EventType.MESSAGE,A=>{var x;if(!y){const b=A.data[0];ce(!!b,16349);const C=b,w=(C==null?void 0:C.error)||((x=C[0])==null?void 0:x.error);if(w){q(Ze,`RPC '${e}' stream ${s} received error:`,w);const T=w.status;let V=function(N){const _=Re[N];if(_!==void 0)return ST(_)}(T),P=w.message;T==="NOT_FOUND"&&P.includes("database")&&P.includes("does not exist")&&P.includes(this.databaseId.database)&&cs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=M.INTERNAL,P="Unknown error status: "+T+" with message "+w.message),y=!0,I.o_(new H(V,P)),f.close()}else q(Ze,`RPC '${e}' stream ${s} received:`,b),I.__(b)}}),Js.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $w()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){return new Js(t)}function rd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return new Lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js.c_=!1;class FT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="PersistentStream";class UT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new FT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(Jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(Jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DR extends UT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Fx(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?fn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=bh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ch(u)?{documents:Bx(i,u)}:{query:$x(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=AT(i,o.resumeToken);const c=xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ou(i,o.snapshotVersion.toTimestamp());const c=xh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Hx(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=bh(this.serializer),n.removeTarget=e,this.K_(n)}}class jR extends UT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=zx(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ux(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{}class LR extends VR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Rh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function OR(t,e,n,r){return new LR(t,e,n,r)}class MR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="RemoteStore";class FR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ar(1e3),this.Va=new Ar(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(q(gn,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.da.add(4),await oa(c),c.ga.set("Unknown"),c.da.delete(4),await $u(c)}(this))})}),this.ga=new MR(r,s)}}async function $u(t){if(ms(t))for(const e of t.ma)await e(!0)}async function oa(t){for(const e of t.ma)await e(!1)}function Vh(t,e){return t.Ea.get(e)||void 0}function zT(t,e){const n=X(t),r=Vh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=Vh(l,u);c!==void 0&&l.Ra.delete(c);const f=function(y,I){return I%2!=0?y.Va.next():y.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);q(gn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Nn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),cp(n)?up(n):Ti(n).O_()&&lp(n,i)}function ap(t,e){const n=X(t),r=Ti(n),s=Vh(n,e);q(gn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&BT(n,s),n.Ia.size===0&&(r.O_()?r.L_():ms(n)&&n.ga.set("Unknown"))}function lp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void q(gn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Ti(t).Z_(e)}function BT(t,e){t.pa.$e(e),Ti(t).X_(e)}function up(t){t.pa=new bx({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ti(t).start(),t.ga.ua()}function cp(t){return ms(t)&&!Ti(t).x_()&&t.Ia.size>0}function ms(t){return X(t).da.size===0}function $T(t){t.pa=void 0}async function UR(t){t.ga.set("Online")}async function zR(t){t.Ia.forEach((e,n)=>{lp(t,e)})}async function BR(t,e){$T(t),cp(t)?(t.ga.ha(e),up(t)):t.ga.set("Unknown")}async function $R(t,e,n){if(t.ga.set("Online"),e instanceof CT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){q(gn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(t,r)}else if(e instanceof _l?t.pa.Xe(e):e instanceof NT?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await MT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const g=i.Ia.get(f);g&&i.Ia.set(f,g.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const g=i.Ia.get(c);if(!g)return;i.Ia.set(c,g.withResumeToken(Qe.EMPTY_BYTE_STRING,g.snapshotVersion)),BT(i,c);const y=new Nn(g.target,c,f,g.sequenceNumber);lp(i,y)});const u=function(f,g){const y=new Map;g.targetChanges.forEach((A,x)=>{const b=f.Ra.get(x);b!==void 0&&y.set(b,A)});let I=new we(ee);return g.targetMismatches.forEach((A,x)=>{const b=f.Ra.get(A);b!==void 0&&(I=I.insert(b,x))}),new sa(g.snapshotVersion,y,I,g.documentUpdates,g.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){q(gn,"Failed to raise snapshot:",r),await lu(t,r)}}async function lu(t,e,n){if(!wi(e))throw e;t.da.add(1),await oa(t),t.ga.set("Offline"),n||(n=()=>MT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(gn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await $u(t)})}function qT(t,e){return e().catch(n=>lu(t,n,e))}async function qu(t){const e=X(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;qR(e);)try{const s=await SR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,HR(e,s)}catch(s){await lu(e,s)}HT(e)&&WT(e)}function qR(t){return ms(t)&&t.Ta.length<10}function HR(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function HT(t){return ms(t)&&!kr(t).x_()&&t.Ta.length>0}function WT(t){kr(t).start()}async function WR(t){kr(t).ra()}async function GR(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function KR(t,e,n){const r=t.Ta.shift(),s=ep.from(r,e,n);await qT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qu(t)}async function QR(t,e){e&&kr(t).Y_&&await async function(r,s){if(function(o){return xx(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();kr(r).B_(),await qT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qu(r)}}(t,e),HT(t)&&WT(t)}async function Xy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q(gn,"RemoteStore received new credentials");const r=ms(n);n.da.add(3),await oa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await $u(n)}async function YR(t,e){const n=X(t);e?(n.da.delete(2),await $u(n)):e||(n.da.add(2),await oa(n),n.ga.set("Unknown"))}function Ti(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.sa(),new DR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:UR.bind(null,t),Yo:zR.bind(null,t),t_:BR.bind(null,t),H_:$R.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),cp(t)?up(t):t.ga.set("Unknown")):(await t.ya.stop(),$T(t))})),t.ya}function kr(t){return t.wa||(t.wa=function(n,r,s){const i=X(n);return i.sa(),new jR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:WR.bind(null,t),t_:QR.bind(null,t),ta:GR.bind(null,t),na:KR.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await qu(t)):(await t.wa.stop(),t.Ta.length>0&&(q(gn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new dp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),wi(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static emptySet(e){return new Xs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=to(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.Sa=new we(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hi(e,n,Xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class XR{constructor(){this.queries=ev(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=ev(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function ev(){return new ps(t=>dT(t),Mu)}async function fp(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new JR,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=hp(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&mp(n)}async function pp(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZR(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&mp(n)}function eP(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function mp(t){t.xa.forEach(e=>{e.next()})}var Lh,tv;(tv=Lh||(Lh={})).Ba="default",tv.Cache="cache";class gp{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Lh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.key=e}}class KT{constructor(e){this.key=e}}class tP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=hT(e),this.su=new Xs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Zy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const y=s.get(f),I=Fu(this.query,g)?g:null,A=!!y&&this.mutatedKeys.has(y.key),x=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;y&&I?y.data.isEqual(I.data)?A!==x&&(r.track({type:3,doc:I}),b=!0):this.uu(y,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.iu(I,u)>0||c&&this.iu(I,c)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),b=!0):y&&!I&&(r.track({type:1,doc:y}),b=!0,(u||c)&&(l=!0)),b&&(I?(o=o.add(I),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,g)=>function(I,A){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:b})}};return x(I)-x(A)}(f.type,g.type)||this.iu(f.doc,g.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new hi(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Zy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new KT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new GT(r))}),n}Tu(e){this.tu=e.ks,this.ru=te();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return hi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const yp="SyncEngine";class nP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rP{constructor(e){this.key=e,this.Eu=!1}}class sP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new ps(l=>dT(l),Mu),this.Vu=new Map,this.du=new Set,this.mu=new we(G.comparator),this.fu=new Map,this.gu=new rp,this.pu={},this.yu=new Map,this.wu=Ar.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function iP(t,e,n=!0){const r=e0(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await QT(r,e,n,!0),s}async function oP(t,e){const n=e0(t);await QT(n,e,!0,!1)}async function QT(t,e,n,r){const s=await NR(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await aP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zT(t.remoteStore,s),l}async function aP(t,e,n,r,s){t.bu=(g,y,I)=>async function(x,b,C,w){let T=b.view._u(C);T.bs&&(T=await Gy(x.localStore,b.query,!1).then(({documents:N})=>b.view._u(N,T)));const V=w&&w.targetChanges.get(b.targetId),P=w&&w.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(T,x.isPrimaryClient,V,P);return rv(x,b.targetId,F.hu),F.snapshot}(t,g,y,I);const i=await Gy(t.localStore,e,!0),o=new tP(e,i.ks),l=o._u(i.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);rv(t,n,c.hu);const f=new nP(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function lP(t,e,n){const r=X(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!Mu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ap(r.remoteStore,s.targetId),Oh(r,s.targetId)}).catch(Ei)):(Oh(r,s.targetId),await Dh(r.localStore,s.targetId,!0))}async function uP(t,e){const n=X(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ap(n.remoteStore,r.targetId))}async function cP(t,e,n){const r=yP(t);try{const s=await function(o,l){const u=X(o),c=ve.now(),f=l.reduce((I,A)=>I.add(A.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=On(),x=te();return u.xs.getEntries(I,f).next(b=>{A=b,A.forEach((C,w)=>{w.isValidDocument()||(x=x.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(b=>{g=b;const C=[];for(const w of l){const T=Sx(w,g.get(w.key).overlayedDocument);T!=null&&C.push(new Lr(w.key,T,rT(T.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,C,l)}).next(b=>{y=b;const C=b.applyToLocalDocumentSet(g,x);return u.documentOverlayCache.saveOverlays(I,b.batchId,C)})}).then(()=>({batchId:y.batchId,changes:pT(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new we(ee)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await aa(r,s.changes),await qu(r.remoteStore)}catch(s){const i=hp(s,"Failed to persist write");n.reject(i)}}async function YT(t,e){const n=X(t);try{const r=await TR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?ce(o.Eu,14607):s.removedDocuments.size>0&&(ce(o.Eu,42227),o.Eu=!1))}),await aa(n,r,e)}catch(r){await Ei(r)}}function nv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,g)=>{for(const y of g.va)y.Oa(l)&&(c=!0)}),c&&mp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new we(G.comparator);o=o.insert(i,nt.newNoDocument(i,J.min()));const l=te().add(i),u=new sa(J.min(),new Map,new we(ee),o,l);await YT(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),vp(r)}else await Dh(r.localStore,e,!1).then(()=>Oh(r,e,n)).catch(Ei)}async function hP(t,e){const n=X(t),r=e.batch.batchId;try{const s=await wR(n.localStore,e);XT(n,r,null),JT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,s)}catch(s){await Ei(s)}}async function fP(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(g=>(ce(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(c,g))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);XT(r,e,n),JT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,s)}catch(s){await Ei(s)}}function JT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function XT(t,e,n){const r=X(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||ZT(t,r)})}function ZT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(ap(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),vp(t))}function rv(t,e,n){for(const r of n)r instanceof GT?(t.gu.addReference(r.key,e),pP(t,r)):r instanceof KT?(q(yp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||ZT(t,r.key)):Y(19791,{Cu:r})}function pP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(q(yp,"New document in limbo: "+n),t.du.add(r),vp(t))}function vp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(pe.fromString(e)),r=t.wu.next();t.fu.set(r,new rP(n)),t.mu=t.mu.insert(n,r),zT(t.remoteStore,new Nn(hn(Ou(n.path)),r,"TargetPurposeLimboResolution",ju.ce))}}async function aa(t,e,n){const r=X(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const g=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(c){s.push(c);const g=ip.Es(u.targetId,c);i.push(g)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(c,y=>U.forEach(y.Ts,I=>f.persistence.referenceDelegate.addReference(g,y.targetId,I)).next(()=>U.forEach(y.Is,I=>f.persistence.referenceDelegate.removeReference(g,y.targetId,I)))))}catch(g){if(!wi(g))throw g;q(op,"Failed to update sequence numbers: "+g)}for(const g of c){const y=g.targetId;if(!g.fromCache){const I=f.vs.get(y),A=I.snapshotVersion,x=I.withLastLimboFreeSnapshotVersion(A);f.vs=f.vs.insert(y,x)}}}(r.localStore,i))}async function mP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q(yp,"User change. New user:",e.toKey());const r=await OT(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.Ns)}}function gP(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let s=te();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function e0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dP.bind(null,e),e.Ru.H_=ZR.bind(null,e.eventManager),e.Ru.Du=eP.bind(null,e.eventManager),e}function yP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fP.bind(null,e),e}class uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return ER(this.persistence,new yR,e.initialUser,this.serializer)}xu(e){return new LT(sp.Vi,this.serializer)}Mu(e){return new AR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uu.provider={build:()=>new uu};class vP extends uu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){ce(this.persistence.referenceDelegate instanceof au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new LT(r=>au.Vi(r,n),this.serializer)}}class Mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mP.bind(null,this.syncEngine),await YR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XR}()}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=bR(e.databaseInfo);return OR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new FR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>nv(this.syncEngine,n,0),function(){return Yy.v()?new Yy:new kR}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const g=new sP(s,i,o,l,u,c);return f&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);q(gn,"RemoteStore shutting down."),i.da.add(5),await oa(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mh.provider={build:()=>new Mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _p{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class _P{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sd(t,e){t.asyncQueue.verifyOperationInProgress(),q(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await OT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EP(t);q(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xy(e.remoteStore,s)),t._onlineComponents=e}async function EP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(xr,"Using user provided OfflineComponentProvider");try{await sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await sd(t,new uu)}}else q(xr,"Using default OfflineComponentProvider"),await sd(t,new vP(void 0));return t._offlineComponents}async function t0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(xr,"Using user provided OnlineComponentProvider"),await sv(t,t._uninitializedComponentsProvider._online)):(q(xr,"Using default OnlineComponentProvider"),await sv(t,new Mh))),t._onlineComponents}function wP(t){return t0(t).then(e=>e.syncEngine)}async function cu(t){const e=await t0(t),n=e.eventManager;return n.onListen=iP.bind(null,e.syncEngine),n.onUnlisten=lP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uP.bind(null,e.syncEngine),n}function TP(t,e,n,r){const s=new _p(r),i=new gp(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>fp(await cu(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>pp(await cu(t),i))}}function IP(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new _p({next:y=>{f.Ku(),o.enqueueAndForget(()=>pp(i,g));const I=y.docs.has(l);!I&&y.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&y.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),g=new gp(Ou(l.path),f,{includeMetadataChanges:!0,Wa:!0});return fp(i,g)}(await cu(t),t.asyncQueue,e,n,r)),r.promise}function SP(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new _p({next:y=>{f.Ku(),o.enqueueAndForget(()=>pp(i,g)),y.fromCache&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),g=new gp(l,f,{includeMetadataChanges:!0,Wa:!0});return fp(i,g)}(await cu(t),t.asyncQueue,e,n,r)),r.promise}function NP(t,e){const n=new kn;return t.asyncQueue.enqueueAndForget(async()=>cP(await wP(t),e,n)),n.promise}/**
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
 */function n0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="ComponentProvider",iv=new Map;function AP(t,e,n,r,s){return new Gk(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,n0(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firestore.googleapis.com",ov=!0;class av{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=r0,this.ssl=ov}else this.host=e.host,this.ssl=e.ssl??ov;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eR)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new av({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new av(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ck;switch(r.type){case"firstParty":return new Rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=iv.get(n);r&&(q(CP,"Removing Datastore"),iv.delete(n),r.terminate())}(this),Promise.resolve()}}function kP(t,e,n,r={}){var c;t=Et(t,Hu);const s=Yo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&JE(`https://${l}`),i.host!==r0&&i.host!==l&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Dn(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=et.MOCK_USER;else{f=ON(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new et(y)}t._authCredentials=new Ak(new Hw(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ta(n,Ae._jsonSchema))return new Ae(e,r||null,new G(pe.fromString(n.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:De("string",Ae._jsonSchemaVersion),referencePath:De("string")};class Er extends gs{constructor(e,n,r){super(e,n,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new G(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function je(t,e,...n){if(t=Fe(t),Ww("collection","path",e),t instanceof Hu){const r=pe.fromString(e,...n);return Ey(r),new Er(t,null,r)}{if(!(t instanceof Ae||t instanceof Er))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ey(r),new Er(t.firestore,null,r)}}function it(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Wf.newId()),Ww("doc","path",e),t instanceof Hu){const r=pe.fromString(e,...n);return _y(r),new Ae(t,null,new G(r))}{if(!(t instanceof Ae||t instanceof Er))throw new H(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return _y(r),new Ae(t.firestore,t instanceof Er?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="AsyncQueue";class uv{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new FT(this,"async_queue_retry"),this.lc=()=>{const r=rd();r&&q(lv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=rd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new kn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!wi(e))throw e;q(lv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Ln("INTERNAL UNHANDLED ERROR: ",cv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=dp.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&Y(47125,{Rc:cv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function cv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Mn extends Hu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new uv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uv(e),this._firestoreClient=void 0,await e}}}function xP(t,e){const n=typeof t=="object"?t:tw(),r=typeof t=="string"?t:eu,s=Lf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VN("firestore");i&&kP(s,...i)}return s}function Wu(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RP(t),t._firestoreClient}function RP(t){var r,s,i,o;const e=t._freezeSettings(),n=AP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new _P(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(Qe.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ta(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:De("string",Dt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(ta(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:De("string",pn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class Qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ta(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Qt(e.vectorValues);throw new H(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:De("string",Qt._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^__.*__$/;class bP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class s0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function i0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class Gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Gu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return du(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(i0(this.dataSource)&&PP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class DP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bu(e)}V(e,n,r,s=!1){return new Gu({dataSource:e,methodName:n,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new DP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o0(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Ip("Data must be an object, but it was:",o,r);const l=l0(r,o);let u,c;if(i.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=fi(e,g,n);if(!o.contains(y))throw new H(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);d0(f,y)||f.push(y)}u=new St(f),c=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,c=o.fieldTransforms;return new bP(new mt(l),u,c)}class Qu extends la{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}function a0(t,e,n){return new Gu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wp extends la{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=a0(this,e,!0),r=this.vc.map(i=>ys(i,n)),s=new ci(r);return new wT(e.path,s)}isEqual(e){return e instanceof wp&&Dn(this.vc,e.vc)}}class Tp extends la{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=a0(this,e,!0),r=this.vc.map(i=>ys(i,n)),s=new di(r);return new wT(e.path,s)}isEqual(e){return e instanceof Tp&&Dn(this.vc,e.vc)}}function jP(t,e,n,r){const s=t.V(1,e,n);Ip("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();Vr(r,(u,c)=>{const f=c0(e,u,n);c=Fe(c);const g=s.Sc(f);if(c instanceof Qu)i.push(f);else{const y=ys(c,g);y!=null&&(i.push(f),o.set(f,y))}});const l=new St(i);return new s0(o,l,s.fieldTransforms)}function VP(t,e,n,r,s,i){const o=t.V(1,e,n),l=[fi(e,r,n)],u=[s];if(i.length%2!=0)throw new H(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(fi(e,i[y])),u.push(i[y+1]);const c=[],f=mt.empty();for(let y=l.length-1;y>=0;--y)if(!d0(c,l[y])){const I=l[y];let A=u[y];A=Fe(A);const x=o.Sc(I);if(A instanceof Qu)c.push(I);else{const b=ys(A,x);b!=null&&(c.push(I),f.set(I,b))}}const g=new St(c);return new s0(f,g,o.fieldTransforms)}function LP(t,e,n,r=!1){return ys(n,t.V(r?4:3,e))}function ys(t,e){if(u0(t=Fe(t)))return Ip("Unsupported field value:",e,t),l0(t,e);if(t instanceof la)return function(r,s){if(!i0(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ys(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:ou(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(s.serializer,i)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:AT(s.serializer,r._byteString)};if(r instanceof Ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:np(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return function(o,l){const u=o instanceof Qt?o.toArray():o;return{mapValue:{fields:{[tT]:{stringValue:nT},[tu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Xf(l.serializer,f)})}}}}}}(r,s);if(jT(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Du(r)}`)}(t,e)}function l0(t,e){const n={};return Qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=ys(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function u0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof pn||t instanceof Dt||t instanceof Ae||t instanceof la||t instanceof Qt||jT(t))}function Ip(t,e,n){if(!u0(n)||!Gw(n)){const r=Du(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function fi(t,e,n){if((e=Fe(e))instanceof Ep)return e._internalPath;if(typeof e=="string")return c0(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const OP=new RegExp("[~\\*/\\[\\]]");function c0(t,e,n){if(e.search(OP)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ep(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function d0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[tu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new Qt(n)}convertGeoPoint(e){return new pn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ce(DT(r),9688,{name:e});const s=new zo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Sp extends MP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function dv(...t){return new wp("arrayUnion",t)}function hv(...t){return new Tp("arrayRemove",t)}const fv="@firebase/firestore",pv="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FP extends h0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Np{}class UP extends Np{}function Zt(t,e,...n){let r=[];e instanceof Np&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Cp).length,l=i.filter(u=>u instanceof Yu).length;if(o>1||o>0&&l>0)throw new H(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Yu extends UP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yu(e,n,r)}_apply(e){const n=this._parse(e);return p0(e._query,n),new gs(e.firestore,e.converter,Ah(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(i,o,l,u,c,f,g){let y;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){yv(g,f);const A=[];for(const x of g)A.push(gv(u,i,x));y={arrayValue:{values:A}}}else y=gv(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||yv(g,f),y=LP(l,o,g,f==="in"||f==="not-in");return be.create(c,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function en(t,e,n){const r=e,s=fi("where",t);return Yu._create(s,r,n)}class Cp extends Np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)p0(o,u),o=Ah(o,u)}(e._query,n),new gs(e.firestore,e.converter,Ah(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gv(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new H(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cT(e)&&n.indexOf("/")!==-1)throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!G.isDocumentKey(r))throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ky(t,new G(r))}if(n instanceof Ae)return ky(t,n._key);throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function yv(t,e){if(!Array.isArray(t)||t.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function m0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends h0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new El(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:De("string",Zr._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class El extends Zr{data(e={}){return super.data(e)}}class es{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new El(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new El(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ro(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new El(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ro(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:zP(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:De("string",es._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){t=Et(t,Ae);const e=Et(t.firestore,Mn),n=Wu(e);return IP(n,t._key).then(r=>y0(e,t,r))}function BP(t){t=Et(t,gs);const e=Et(t.firestore,Mn),n=Wu(e),r=new Sp(e);return f0(t._query),SP(n,t._query).then(s=>new es(e,r,t,s))}function $P(t,e,n){t=Et(t,Ae);const r=Et(t.firestore,Mn),s=m0(t.converter,e),i=Ku(r);return Ju(r,[o0(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function ua(t,e,n,...r){t=Et(t,Ae);const s=Et(t.firestore,Mn),i=Ku(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof Ep?VP(i,"updateDoc",t._key,e,n,r):jP(i,"updateDoc",t._key,e),Ju(s,[o.toMutation(t._key,Lt.exists(!0))])}function zn(t){return Ju(Et(t.firestore,Mn),[new Zf(t._key,Lt.none())])}function Bn(t,e){const n=Et(t.firestore,Mn),r=it(t),s=m0(t.converter,e),i=Ku(t.firestore);return Ju(n,[o0(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function yn(t,...e){var c,f,g;t=Fe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||mv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(mv(e[r])){const y=e[r];e[r]=(c=y.next)==null?void 0:c.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(g=y.complete)==null?void 0:g.bind(y)}let i,o,l;if(t instanceof Ae)o=Et(t.firestore,Mn),l=Ou(t._key.path),i={next:y=>{e[r]&&e[r](y0(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Et(t,gs);o=Et(y.firestore,Mn),l=y._query;const I=new Sp(o);i={next:A=>{e[r]&&e[r](new es(o,I,y,A))},error:e[r+1],complete:e[r+2]},f0(t._query)}const u=Wu(o);return TP(u,l,s,i)}function Ju(t,e){const n=Wu(t);return NP(n,e)}function y0(t,e,n){const r=n.docs.get(e._key),s=new Sp(t);return new Zr(t,s,e._key,r,new ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Nk(yi),oi(new os("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mn(new kk(r.getProvider("auth-internal")),new Pk(o,r.getProvider("app-check-internal")),Kk(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),vr(fv,pv,e),vr(fv,pv,"esm2020")})();const qP={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},v0=ew(qP),oe=xP(v0),hu=wk(v0),_0=j.createContext(null);function HP({children:t}){const[e,n]=j.useState(null),[r,s]=j.useState(!0);j.useEffect(()=>uA(hu,l=>{n(l),s(!1)}),[]);const i=async()=>{await cA(hu)};return d.jsx(_0.Provider,{value:{user:e,loading:r,logout:i},children:t})}function vn(){const t=j.useContext(_0);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const WP=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
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
`,id="reply-ai-history";function GP(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const s=r.indexOf("=");if(s===-1)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim(),[l]=i.split(".");e[l]&&e[l].push(o)}return e}const vv=GP(WP);function KP(){const[t,e]=j.useState(""),[n,r]=j.useState("funny"),[s,i]=j.useState(""),[o,l]=j.useState(!1),[u,c]=j.useState(""),[f,g]=j.useState(()=>{const b=localStorage.getItem(id);return b?JSON.parse(b):[]}),y=j.useCallback(async b=>{if(!t.trim()){c("Pega un mensaje primero");return}l(!0),c("");const C=typeof b=="string"?b:n,w=vv[C]||vv.elegant,T=w[Math.floor(Math.random()*w.length)];await new Promise(F=>setTimeout(F,300)),i(T);const P=[{message:t,reply:T,mode:C,date:new Date().toISOString()},...f].slice(0,50);g(P),localStorage.setItem(id,JSON.stringify(P)),l(!1)},[t,n,f]),I=j.useCallback(()=>{s&&(e(s),y("funny"))},[s,y]),A=j.useCallback(b=>{const C=`https://wa.me/?text=${encodeURIComponent(b)}`;window.open(C,"_blank")},[]),x=j.useCallback(()=>{g([]),localStorage.removeItem(id)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:s,setResponse:i,loading:o,error:u,history:f,generate:y,makeFunnier:I,sendToWhatsApp:A,clearHistory:x}}const Ap="birthdays";function QP(t,e,n){const r=Zt(je(oe,Ap),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function YP({name:t,date:e,gender:n,phone:r},s){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:s,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,Ap),o)).id,...o}}async function JP(t){await zn(it(oe,Ap,t))}function XP(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function ZP(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState([]),[i,o]=j.useState("");j.useEffect(()=>t?(o(""),QP(t.uid,I=>{n(I)},I=>{o("Error al cargar amigos: "+od(I))})):void 0,[t]),j.useEffect(()=>{const y=XP(),I=e.filter(A=>A.date===y);s(I)},[e]);const l=100,u=j.useCallback(async(y,I,A,x)=>{if(t){if(o(""),e.length>=l){o(`Límite alcanzado: máximo ${l} cumpleaños. Elimina algunos para añadir más.`);return}try{await YP({name:y,date:I,gender:A,phone:x},t.uid)}catch(b){o("Error al añadir amigo: "+od(b))}}},[t,e.length]),c=j.useCallback(async y=>{o("");try{await JP(y)}catch(I){o("Error al eliminar amigo: "+od(I))}},[]),f=j.useCallback(y=>{let I;y.gender==="male"?I=`¡Feliz cumpleaños, amigo ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:y.gender==="female"?I=`¡Feliz cumpleaños, amiga ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:I=`¡Feliz cumpleaños, ${y.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const A=y.phone?y.phone.replace(/[^0-9]/g,""):"",x=A?`https://wa.me/${A}?text=${encodeURIComponent(I)}`:`https://wa.me/?text=${encodeURIComponent(I)}`;window.open(x,"_blank")},[]),g=j.useCallback(y=>{const I=y.gender==="male"?"lo":y.gender==="female"?"la":"le",A=`📅 Recordatorio: Hoy es el cumpleaños de ${y.name}! No olvides felicit${I}. 🎂🎉`,x=`https://wa.me/?text=${encodeURIComponent(A)}`;window.open(x,"_blank")},[]);return{friends:e,todayBirthdays:r,error:i,addFriend:u,removeFriend:c,sendGreeting:f,sendReminder:g}}function od(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const kp="contacts";function e2(t,e,n){const r=Zt(je(oe,kp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function t2({name:t,phone:e,email:n,city:r,webpage:s,occupation:i,rating:o},l){const u={name:t,phone:e||"",email:n||"",city:r||"",webpage:s||"",occupation:i||"",rating:o||1,userId:l,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,kp),u)).id,...u}}async function n2(t){await zn(it(oe,kp,t))}function r2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),e2(t.uid,c=>{n(c)},c=>{s("Error al cargar contactos: "+ad(c))})):void 0,[t]);const i=100,o=j.useCallback(async({name:u,phone:c,email:f,city:g,webpage:y,occupation:I,rating:A})=>{if(t){if(s(""),e.length>=i){s(`Límite alcanzado: máximo ${i} contactos. Elimina algunos para añadir más.`);return}try{await t2({name:u,phone:c,email:f,city:g,webpage:y,occupation:I,rating:A},t.uid)}catch(x){s("Error al añadir contacto: "+ad(x))}}},[t,e.length]),l=j.useCallback(async u=>{s("");try{await n2(u)}catch(c){s("Error al eliminar contacto: "+ad(c))}},[]);return{contacts:e,error:r,addContact:o,removeContact:l}}function ad(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const xp="favorites";function s2(t,e,n){const r=Zt(je(oe,xp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function i2({name:t,url:e,description:n},r){const s={name:t,url:e||"",description:n||"",userId:r,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,xp),s)).id,...s}}async function o2(t){await zn(it(oe,xp,t))}const _v=100;function a2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),s2(t.uid,n,u=>{s("Error al cargar favoritos: "+ld(u))})):void 0,[t]);const i=j.useCallback(async({name:l,url:u,description:c})=>{if(t){if(s(""),e.length>=_v){s(`Límite alcanzado: máximo ${_v} favoritos.`);return}try{await i2({name:l,url:u,description:c},t.uid)}catch(f){s("Error al añadir favorito: "+ld(f))}}},[t,e.length]),o=j.useCallback(async l=>{s("");try{await o2(l)}catch(u){s("Error al eliminar favorito: "+ld(u))}},[]);return{favorites:e,error:r,addFavorite:i,removeFavorite:o}}function ld(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}const vs="reminders",E0="users";function l2(t,e,n){const r=Zt(je(oe,vs),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}function u2(t,e,n){const r=Zt(je(oe,vs),en("sharedWithUids","array-contains",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data(),isShared:!0}));e(i)},s=>{console.error("Firestore shared subscribe error:",s),n&&n(s)})}async function c2(t,e,n){const r={...t,userId:e,ownerEmail:n,createdAt:new Date().toISOString(),lastFiredAt:null,sharedWithUids:[],sharedWithEmails:[]};return{id:(await Bn(je(oe,vs),r)).id,...r}}async function Ev(t,e){await ua(it(oe,vs,t),e)}async function d2(t){await zn(it(oe,vs,t))}async function h2(t,e,n){await ua(it(oe,vs,t),{sharedWithUids:dv(e),sharedWithEmails:dv(n)})}async function f2(t,e){var u;const n=it(oe,vs,t),s=(await g0(n)).data(),i=(s==null?void 0:s.sharedWithEmails)||[],o=((u=s==null?void 0:s.sharedWithUids)==null?void 0:u.indexOf(e))??-1,l=o>=0?i[o]:null;await ua(n,{sharedWithUids:hv(e),sharedWithEmails:l?hv(l):[]})}async function p2(t,e){const n=it(oe,E0,t);(await g0(n)).exists()||await $P(n,{email:e,uid:t})}async function m2(t){const e=Zt(je(oe,E0),en("email","==",t)),n=await BP(e);return n.empty?null:n.docs[0].id}const wv=5;let Wa=null;function w0(){if(Wa)return Wa;try{Wa=new(window.AudioContext||window.webkitAudioContext)}catch(t){console.warn("AudioContext not supported:",t)}return Wa}function Rp(){const t=w0();t&&t.state==="suspended"&&t.resume().catch(()=>{})}document.addEventListener("click",Rp);document.addEventListener("touchstart",Rp);document.addEventListener("keydown",Rp);async function g2(){try{const t=w0();if(!t||(t.state==="suspended"&&await t.resume(),t.state!=="running"))return;const e=(r,s,i)=>{const o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.setValueAtTime(r,s),l.gain.setValueAtTime(.35,s),l.gain.exponentialRampToValueAtTime(.01,s+i),o.connect(l),l.connect(t.destination),o.start(s),o.stop(s+i)},n=t.currentTime;e(523,n,.15),e(659,n+.15,.15),e(784,n+.3,.3)}catch(t){console.warn("Sound error:",t)}}function Is(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function y2(){const t=new Date;return{h:t.getHours(),dow:t.getDay(),day:t.getDate(),month:t.getMonth()+1}}function v2(t){if(!t.active)return!1;const e=y2();if(t.frequency!=="daily")if(t.frequency==="weekly"){if(t.weekday!==e.dow)return!1}else if(t.frequency==="monthly"){if(t.day!==e.day)return!1}else if(t.frequency==="once"){if(t.day!==e.day||t.month!==e.month)return!1}else return!1;const n=t.earlyBird?7:9;return!(e.h<n||t.lastFiredAt&&Date.now()-new Date(t.lastFiredAt).getTime()<55*60*1e3)}async function Tv(){if(!("Notification"in window))return"denied";if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return"denied"}}function _2(t){if("Notification"in window&&Notification.permission==="granted")try{const e=t.name+(t.note?" — "+t.note:"");new Notification("🔔 Toolbox AI",{body:e,icon:"./icons/icon-192.svg",tag:t.id,renotify:!0})}catch(e){console.warn("Notification error:",e)}}function E2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(null),l=j.useRef([]);l.current=e;const u=j.useRef(new Set);j.useEffect(()=>{if(!t)return;s(""),t.email&&p2(t.uid,t.email).catch(()=>{});let A=[],x=[];const b=()=>{const T=new Set,V=[];for(const P of[...A,...x])T.has(P.id)||(T.add(P.id),V.push(P));n(V)},C=l2(t.uid,T=>{A=T,b()},T=>s("Error al cargar recordatorios: "+Is(T))),w=u2(t.uid,T=>{x=T,b()},T=>console.error("Shared reminders error:",T));return()=>{C(),w()}},[t]),j.useEffect(()=>{!t||e.length===0||Tv().then(A=>{console.log("[Reminders] Notification permission:",A)})},[t,e.length>0]),j.useEffect(()=>{if(!t)return;const A=async w=>{if(!w.isShared&&v2(w)&&!u.current.has(w.id)){u.current.add(w.id);try{await Ev(w.id,{lastFiredAt:new Date().toISOString()}),await g2(),Notification.permission==="default"&&await Tv(),_2(w),o(w.id),setTimeout(()=>o(null),5e3)}catch(T){console.warn("Reminder fire error:",T)}finally{setTimeout(()=>u.current.delete(w.id),5e3)}}},x=()=>{l.current.forEach(A)};x();const b=setInterval(x,6e4),C=()=>{document.visibilityState==="visible"&&x()};return document.addEventListener("visibilitychange",C),()=>{clearInterval(b),document.removeEventListener("visibilitychange",C)}},[t]);const c=j.useCallback(async A=>{if(!t)return;if(s(""),l.current.filter(b=>!b.isShared).length>=wv){s(`Límite alcanzado: máximo ${wv} recordatorios.`);return}try{await c2(A,t.uid,t.email)}catch(b){s("Error al añadir recordatorio: "+Is(b))}},[t]),f=j.useCallback(async(A,x)=>{s("");try{await Ev(A,x)}catch(b){s("Error al actualizar recordatorio: "+Is(b))}},[]),g=j.useCallback(async A=>{s("");try{await d2(A)}catch(x){s("Error al eliminar recordatorio: "+Is(x))}},[]),y=j.useCallback(async(A,x)=>{if(s(""),!x||!x.includes("@")){s("Introduce un email válido.");return}try{const b=await m2(x);if(!b){s("Ese usuario no está registrado en Toolbox AI.");return}if(b===t.uid){s("No puedes compartir un recordatorio contigo mismo.");return}await h2(A,b,x)}catch(b){s("Error al compartir recordatorio: "+Is(b))}},[t]),I=j.useCallback(async(A,x,b)=>{s("");try{await f2(A,x,b)}catch(C){s("Error al eliminar uso compartido: "+Is(C))}},[]);return{reminders:e,error:r,justFired:i,userEmail:t==null?void 0:t.email,addReminder:c,updateReminder:f,removeReminder:g,shareReminder:y,unshareReminder:I}}const Xu="notes";function w2(t,e,n){const r=Zt(je(oe,Xu),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>o.pinned!==l.pinned?o.pinned?-1:1:new Date(l.updatedAt)-new Date(o.updatedAt)),e(i)},s=>{console.error("Firestore notes subscribe error:",s),n&&n(s)})}async function T2({title:t,body:e,color:n},r){const s=new Date().toISOString(),i={title:t||"",body:e||"",color:n||"#ffffff",pinned:!1,userId:r,createdAt:s,updatedAt:s};return{id:(await Bn(je(oe,Xu),i)).id,...i}}async function Iv(t,e){await ua(it(oe,Xu,t),{...e,updatedAt:new Date().toISOString()})}async function I2(t){await zn(it(oe,Xu,t))}const ud=6;function Ga(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function S2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState("");j.useEffect(()=>t?(s(""),w2(t.uid,f=>n(f),f=>s("Error al cargar notas: "+Ga(f)))):void 0,[t]);const i=j.useCallback(async({title:c,body:f,color:g})=>{if(t){if(s(""),e.length>=ud){s(`Límite alcanzado: máximo ${ud} notas.`);return}try{await T2({title:c,body:f,color:g},t.uid)}catch(y){s("Error al añadir nota: "+Ga(y))}}},[t,e.length]),o=j.useCallback(async(c,f)=>{s("");try{await Iv(c,f)}catch(g){s("Error al actualizar nota: "+Ga(g))}},[]),l=j.useCallback(async c=>{s("");try{await I2(c)}catch(f){s("Error al eliminar nota: "+Ga(f))}},[]),u=j.useCallback(async c=>{const f=e.find(g=>g.id===c);f&&await Iv(c,{pinned:!f.pinned})},[e]);return{notes:e,error:r,maxNotes:ud,addNote:i,updateNote:o,removeNote:l,togglePin:u}}const Pp="projects",bp="timeEntries";function N2(t,e,n){const r=Zt(je(oe,Pp),en("userId","==",t));return yn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("projects subscribe error:",s),n&&n(s)})}async function C2({name:t,clientName:e,rate:n,currency:r,color:s},i){const o={name:t,clientName:e||"",rate:parseFloat(n)||0,currency:r||"EUR",color:s||"#2d6a4f",userId:i,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,Pp),o)).id,...o}}async function A2(t){await zn(it(oe,Pp,t))}function k2(t,e,n){const r=Zt(je(oe,bp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>new Date(l.startedAt)-new Date(o.startedAt)),e(i)},s=>{console.error("entries subscribe error:",s),n&&n(s)})}async function x2({projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l},u){const c={projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l||"",userId:u,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,bp),c)).id,...c}}async function R2(t){await zn(it(oe,bp,t))}const cd=10;function Ss(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function P2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState([]),[i,o]=j.useState(""),[l,u]=j.useState(null),[c,f]=j.useState(null),[g,y]=j.useState(0),I=j.useRef(null);j.useEffect(()=>{if(!t)return;o("");const V=N2(t.uid,n,F=>o("Error al cargar proyectos: "+Ss(F))),P=k2(t.uid,s,F=>o("Error al cargar registros: "+Ss(F)));return()=>{V(),P()}},[t]),j.useEffect(()=>(l&&c?I.current=setInterval(()=>{y(Math.floor((Date.now()-c.getTime())/1e3))},1e3):(clearInterval(I.current),y(0)),()=>clearInterval(I.current)),[l,c]);const A=j.useCallback(async V=>{if(t){if(o(""),e.length>=cd){o(`Límite alcanzado: máximo ${cd} proyectos.`);return}try{await C2(V,t.uid)}catch(P){o("Error al añadir proyecto: "+Ss(P))}}},[t,e.length]),x=j.useCallback(async V=>{o(""),l===V&&C();try{await A2(V)}catch(P){o("Error al eliminar proyecto: "+Ss(P))}},[l]),b=j.useCallback(V=>{u(V),f(new Date),y(0)},[]),C=j.useCallback(async(V="")=>{if(!l||!c)return;const P=new Date,F=Math.floor((P-c)/1e3);if(F<5){u(null),f(null);return}const N=e.find(_=>_.id===l);u(null),f(null);try{await x2({projectId:l,projectName:(N==null?void 0:N.name)||"Sin proyecto",rate:(N==null?void 0:N.rate)||0,currency:(N==null?void 0:N.currency)||"EUR",startedAt:c.toISOString(),endedAt:P.toISOString(),durationSec:F,notes:V},t.uid)}catch(_){o("Error al guardar registro: "+Ss(_))}},[l,c,e,t]),w=j.useCallback(async V=>{o("");try{await R2(V)}catch(P){o("Error al eliminar registro: "+Ss(P))}},[]),T=e.reduce((V,P)=>(V[P.id]=r.filter(F=>F.projectId===P.id).reduce((F,N)=>F+(N.durationSec||0),0),V),{});return{projects:e,entries:r,error:i,maxProjects:cd,activeProjectId:l,elapsed:g,secondsByProject:T,addProject:A,removeProject:x,startTimer:b,stopTimer:C,removeEntry:w}}const Dp="finances";function b2(t,e,n){const r=Zt(je(oe,Dp),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>new Date(l.date)-new Date(o.date)),e(i)},s=>{console.error("finances subscribe error:",s),n&&n(s)})}async function D2({type:t,concept:e,clientOrProvider:n,amount:r,vatRate:s,irpfRate:i,date:o},l){const u=parseFloat(r)||0,c=parseFloat(s)||0,f=parseFloat(i)||0,g=parseFloat((u*c/100).toFixed(2)),y=parseFloat((u*f/100).toFixed(2)),I=parseFloat(t==="income"?(u+g-y).toFixed(2):(u+g).toFixed(2)),A={type:t,concept:e.trim(),clientOrProvider:n.trim()||"",amount:u,vatRate:c,vatAmount:g,irpfRate:f,irpfAmount:y,total:I,date:o,userId:l,createdAt:new Date().toISOString()};return{id:(await Bn(je(oe,Dp),A)).id,...A}}async function j2(t){await zn(it(oe,Dp,t))}const dd=150;function hd(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function V2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(!0);j.useEffect(()=>t?(s(""),o(!0),b2(t.uid,g=>{n(g),o(!1)},g=>{s("Error al cargar contabilidad: "+hd(g)),o(!1)})):void 0,[t]);const l=j.useCallback(async f=>{if(t){if(s(""),e.length>=dd){s(`Límite alcanzado: máximo ${dd} asientos contables.`);return}try{await D2(f,t.uid)}catch(g){s("Error al registrar asiento: "+hd(g))}}},[t,e.length]),u=j.useCallback(async f=>{s("");try{await j2(f)}catch(g){s("Error al eliminar asiento: "+hd(g))}},[]),c=j.useMemo(()=>{let f=0,g=0,y=0,I=0,A=0;e.forEach(C=>{C.type==="income"?(f+=C.amount||0,y+=C.vatAmount||0,A+=C.irpfAmount||0):(g+=C.amount||0,I+=C.vatAmount||0)});const x=f-g,b=y-I;return{totalIncomes:f,totalExpenses:g,vatRepercutido:y,vatSoportado:I,irpfRetained:A,netProfit:x,vatBalance:b}},[e]);return{entries:e,error:r,loading:i,maxEntries:dd,stats:c,addEntry:l,removeEntry:u}}const Zu="tasks";function L2(t,e,n){const r=Zt(je(oe,Zu),en("userId","==",t));return yn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>{if(o.status!==l.status)return o.status==="pending"?-1:1;const u={high:3,medium:2,low:1},c=u[o.priority]||1,f=u[l.priority]||1;return c!==f?f-c:o.dueDate&&l.dueDate?new Date(o.dueDate)-new Date(l.dueDate):o.dueDate?-1:l.dueDate?1:new Date(l.createdAt)-new Date(o.createdAt)}),e(i)},s=>{console.error("tasks subscribe error:",s),n&&n(s)})}async function O2({title:t,description:e,dueDate:n,priority:r,clientName:s},i){const o=new Date().toISOString(),l={title:t.trim(),description:(e==null?void 0:e.trim())||"",dueDate:n||"",priority:r||"medium",status:"pending",clientName:(s==null?void 0:s.trim())||"",userId:i,createdAt:o,updatedAt:o};return{id:(await Bn(je(oe,Zu),l)).id,...l}}async function M2(t,e){await ua(it(oe,Zu,t),{...e,updatedAt:new Date().toISOString()})}async function F2(t){await zn(it(oe,Zu,t))}const fd=50;function Ka(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function U2(){const{user:t}=vn(),[e,n]=j.useState([]),[r,s]=j.useState(""),[i,o]=j.useState(!0);j.useEffect(()=>t?(s(""),o(!0),L2(t.uid,y=>{n(y),o(!1)},y=>{s("Error al cargar tareas: "+Ka(y)),o(!1)})):void 0,[t]);const l=j.useCallback(async g=>{if(t){if(s(""),e.length>=fd){s(`Límite alcanzado: máximo ${fd} tareas.`);return}try{await O2(g,t.uid)}catch(y){s("Error al añadir tarea: "+Ka(y))}}},[t,e.length]),u=j.useCallback(async(g,y)=>{s("");try{await M2(g,y)}catch(I){s("Error al actualizar tarea: "+Ka(I))}},[]),c=j.useCallback(async g=>{const y=e.find(A=>A.id===g);if(!y)return;const I=y.status==="pending"?"completed":"pending";await u(g,{status:I})},[e,u]),f=j.useCallback(async g=>{s("");try{await F2(g)}catch(y){s("Error al eliminar tarea: "+Ka(y))}},[]);return{tasks:e,error:r,loading:i,maxTasks:fd,addTask:l,updateTask:u,toggleTaskStatus:c,removeTask:f}}function z2(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[s,i]=j.useState(!1),[o,l]=j.useState(""),[u,c]=j.useState(!1),f=async g=>{g.preventDefault(),l(""),c(!0);try{s?await iA(hu,t,n):await oA(hu,t,n)}catch(y){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[y.code]||y.code)}finally{c(!1)}};return d.jsx("div",{className:"login-screen",children:d.jsxs("div",{className:"login-card",children:[d.jsx("div",{className:"login-logo",children:"💬"}),d.jsx("h1",{className:"login-title",children:"Toolbox AI"}),d.jsx("p",{className:"login-subtitle",children:s?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),d.jsxs("form",{className:"login-form",onSubmit:f,children:[d.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:g=>e(g.target.value),required:!0}),d.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:g=>r(g.target.value),required:!0,minLength:6}),o&&d.jsx("p",{className:"error",children:o}),d.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?d.jsx("span",{className:"loading-spinner"}):s?"Crear cuenta":"Iniciar sesión"})]}),d.jsxs("p",{className:"login-toggle",children:[s?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",d.jsx("button",{className:"login-toggle-btn",onClick:()=>{i(!s),l("")},children:s?"Inicia sesión":"Regístrate"})]})]})})}function B2({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return d.jsxs("div",{className:"input-box",children:[d.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),d.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),d.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),d.jsx("path",{d:"M12 11h4"}),d.jsx("path",{d:"M12 16h4"}),d.jsx("path",{d:"M8 11h.01"}),d.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const $2=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function q2({selected:t,onSelect:e}){return d.jsx("div",{className:"modes",children:$2.map(n=>d.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[d.jsx("span",{className:"mode-emoji",children:n.icon}),d.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function H2({onClick:t,loading:e}){return d.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?d.jsx("span",{className:"loading-spinner"}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M12 3v18"}),d.jsx("path",{d:"M5 10l7-7 7 7"}),d.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const Sv={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function W2({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:s}){if(!t)return null;const i=Sv[e]||Sv.funny;return d.jsxs("div",{className:"response-card fade-in",children:[d.jsxs("div",{className:"response-header",children:[d.jsx("span",{className:"response-mode-icon",children:i.emoji}),d.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",i.label]})]}),d.jsx("p",{className:"response-text",children:t}),d.jsxs("div",{className:"response-actions",children:[d.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),d.jsxs("button",{className:"action-btn",onClick:r,children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"23 4 23 10 17 10"}),d.jsx("polyline",{points:"1 20 1 14 7 14"}),d.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),d.jsxs("button",{className:"action-btn",onClick:s,children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),d.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),d.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const T0=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function G2(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${T0[parseInt(n,10)-1]}`}function K2({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:s,onSendGreeting:i,onSendReminder:o}){const[l,u]=j.useState(""),[c,f]=j.useState(""),[g,y]=j.useState(""),[I,A]=j.useState(""),[x,b]=j.useState("male"),[C,w]=j.useState(!1),[T,V]=j.useState(""),P=m=>{if(m.preventDefault(),!l.trim()||!g||!I)return;const E=`${String(parseInt(g,10)).padStart(2,"0")}-${String(parseInt(I,10)).padStart(2,"0")}`;r(l.trim(),E,x,c.trim()),u(""),f(""),y(""),A(""),b("male"),w(!1)},F=T.toLowerCase(),_=[...t.filter(m=>m.name.toLowerCase().includes(F))].sort((m,E)=>{const[R,k]=m.date.split("-").map(Number),[S,ue]=E.date.split("-").map(Number);return k-ue||R-S});return d.jsxs("div",{className:"birthdays",children:[n&&d.jsx("p",{className:"error",children:n}),e.length>0&&d.jsxs("div",{className:"birthday-alert fade-in",children:[d.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),d.jsxs("div",{className:"birthday-alert-body",children:[d.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(m=>m.name).join(" y "),"!"]}),d.jsx("div",{className:"birthday-alert-actions",children:e.map(m=>d.jsxs("div",{className:"birthday-alert-row",children:[d.jsxs("button",{className:"action-btn primary",onClick:()=>i(m),children:["🎉 Felicitar a ",m.name]}),d.jsx("button",{className:"action-btn",onClick:()=>o(m),children:"🔔 Recordarme"}),m.phone&&d.jsx("a",{className:"action-btn",href:`tel:${m.phone}`,children:"📞 Llamar"})]},m.id))})]})]}),d.jsxs("div",{className:"birthdays-header",children:[d.jsxs("h3",{children:["Tus amigos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-friend-btn",onClick:()=>w(!C),children:C?"✕ Cerrar":"+ Añadir amigo"})]}),C&&d.jsxs("form",{className:"birthday-form fade-in",onSubmit:P,children:[d.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:m=>u(m.target.value),required:!0}),d.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:c,onChange:m=>f(m.target.value)}),d.jsxs("div",{className:"bf-row",children:[d.jsxs("select",{className:"bf-select",value:g,onChange:m=>y(m.target.value),required:!0,children:[d.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(m,E)=>E+1).map(m=>d.jsx("option",{value:m,children:m},m))]}),d.jsxs("select",{className:"bf-select",value:I,onChange:m=>A(m.target.value),required:!0,children:[d.jsx("option",{value:"",children:"Mes"}),T0.map((m,E)=>d.jsx("option",{value:E+1,children:m},E))]})]}),d.jsxs("div",{className:"bf-gender",children:[d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"male",checked:x==="male",onChange:()=>b("male")}),"Masculino"]}),d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"female",checked:x==="female",onChange:()=>b("female")}),"Femenino"]}),d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"gender",value:"other",checked:x==="other",onChange:()=>b("other")}),"Otro / No sé"]})]}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"M21 21l-4.35-4.35"})]}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar amigo...",value:T,onChange:m=>V(m.target.value)}),T&&d.jsx("button",{className:"search-clear",onClick:()=>V(""),children:"✕"})]}),_.length===0&&d.jsx("p",{className:"birthdays-empty",children:T?"No se encontraron amigos.":"No has añadido ningún cumpleaños todavía."}),d.jsx("div",{className:"birthdays-list",children:_.map(m=>d.jsxs("div",{className:"birthday-item fade-in",children:[d.jsxs("div",{className:"birthday-item-info",children:[d.jsxs("span",{className:"birthday-item-name",children:[m.name,m.gender==="male"&&" 👨",m.gender==="female"&&" 👩",m.gender==="other"&&" 🧑"]}),d.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",G2(m.date)]}),m.phone&&d.jsxs("span",{className:"birthday-item-phone",children:["📞 ",m.phone]})]}),d.jsxs("div",{className:"birthday-item-actions",children:[m.phone&&d.jsx("a",{className:"contact-action-btn",href:`tel:${m.phone}`,title:"Llamar",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:d.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),d.jsx("button",{className:"birthday-item-delete",onClick:()=>s(m.id),title:"Eliminar",children:"✕"})]})]},m.id))})]})}const Q2=["fontanero","electricista","pintor","informatico","medico","ingeniero","arquitecto","maestro","herrero","asesor","jardinero","comercial","agricultor","repuestos"];function pd(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function Y2({contacts:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,g]=j.useState(""),[y,I]=j.useState(""),[A,x]=j.useState(""),[b,C]=j.useState(3),[w,T]=j.useState(!1),[V,P]=j.useState(""),F=k=>{k.preventDefault(),s.trim()&&(n({name:s.trim(),phone:o.trim(),email:u.trim(),city:f.trim(),webpage:y.trim(),occupation:A,rating:b}),i(""),l(""),c(""),g(""),I(""),x(""),C(3),T(!1))};async function N(k){const S=[`*${k.name}*`];k.phone&&S.push(`📞 ${k.phone}`),k.email&&S.push(`✉️ ${k.email}`),k.city&&S.push(`📍 ${k.city}`),k.webpage&&S.push(`🌐 ${k.webpage}`),k.occupation&&S.push(`💼 ${pd(k.occupation)}`),S.push(`⭐ ${"★".repeat(k.rating)}${"☆".repeat(5-k.rating)}`);const ue=S.join(`
`);if(navigator.share)try{await navigator.share({title:k.name,text:ue});return}catch{}try{await navigator.clipboard.writeText(ue)}catch{}}const _=V.toLowerCase(),m=t.filter(k=>k.name.toLowerCase().includes(_)),E={};for(const k of m){const S=k.occupation||"sin ocupacion";E[S]||(E[S]=[]),E[S].push(k)}const R=Object.keys(E).sort((k,S)=>k==="sin ocupacion"?1:S==="sin ocupacion"?-1:k.localeCompare(S));return d.jsxs("div",{className:"contacts",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"contacts-header",children:[d.jsxs("h3",{children:["Contactos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-contact-btn",onClick:()=>T(!w),children:w?"✕ Cerrar":"+ Añadir contacto"})]}),w&&d.jsxs("form",{className:"contact-form fade-in",onSubmit:F,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:k=>i(k.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"tel",placeholder:"Teléfono",value:o,onChange:k=>l(k.target.value)}),d.jsx("input",{className:"cf-input",type:"email",placeholder:"Email",value:u,onChange:k=>c(k.target.value)}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Ciudad",value:f,onChange:k=>g(k.target.value)}),d.jsx("input",{className:"cf-input",type:"url",placeholder:"Web",value:y,onChange:k=>I(k.target.value)}),d.jsxs("select",{className:"cf-select",value:A,onChange:k=>x(k.target.value),children:[d.jsx("option",{value:"",children:"Selecciona ocupación"}),Q2.map(k=>d.jsx("option",{value:k,children:pd(k)},k))]}),d.jsxs("div",{className:"cf-rating",children:[d.jsx("span",{children:"Valoración:"}),d.jsx("div",{className:"stars",children:[1,2,3,4,5].map(k=>d.jsx("button",{type:"button",className:`star ${k<=b?"active":""}`,onClick:()=>C(k),children:k<=b?"★":"☆"},k))})]}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"M21 21l-4.35-4.35"})]}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar contacto...",value:V,onChange:k=>P(k.target.value)}),V&&d.jsx("button",{className:"search-clear",onClick:()=>P(""),children:"✕"})]}),m.length===0&&!w&&d.jsx("p",{className:"contacts-empty",children:V?"No se encontraron contactos.":"No has añadido ningún contacto todavía."}),d.jsx("div",{className:"contacts-list",children:R.map(k=>d.jsxs("div",{className:"contact-group",children:[d.jsx("h4",{className:"contact-group-title",children:k==="sin ocupacion"?"Otros":pd(k)}),E[k].map(S=>d.jsxs("div",{className:"contact-item fade-in",children:[d.jsxs("div",{className:"contact-item-info",children:[d.jsx("span",{className:"contact-item-name",children:S.name}),d.jsxs("div",{className:"contact-item-details",children:[S.phone&&d.jsxs("span",{children:["📞 ",S.phone]}),S.email&&d.jsxs("span",{children:["✉️ ",S.email]}),S.city&&d.jsxs("span",{children:["📍 ",S.city]}),S.webpage&&d.jsxs("span",{children:["🌐 ",S.webpage]}),d.jsxs("span",{className:"stars-small",children:["★".repeat(S.rating),"☆".repeat(5-S.rating)]})]}),(S.phone||S.email)&&d.jsxs("div",{className:"contact-actions",children:[S.phone&&d.jsx("a",{className:"contact-action-btn",href:`tel:${S.phone}`,title:"Llamar",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),S.email&&d.jsx("a",{className:"contact-action-btn",href:`mailto:${S.email}`,title:"Email",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),d.jsx("button",{className:"contact-action-btn",onClick:()=>N(S),title:"Compartir",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"18",cy:"5",r:"3"}),d.jsx("circle",{cx:"6",cy:"12",r:"3"}),d.jsx("circle",{cx:"18",cy:"19",r:"3"}),d.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),d.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})]})]}),d.jsx("button",{className:"contact-item-delete",onClick:()=>r(S.id),title:"Eliminar",children:"✕"})]},S.id))]},k))})]})}function J2({favorites:t,error:e,onAdd:n,onRemove:r}){const[s,i]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,g]=j.useState(!1),y=x=>{x.preventDefault(),s.trim()&&(n({name:s.trim(),url:o.trim(),description:u.trim()}),i(""),l(""),c(""),g(!1))},I=[...t].sort((x,b)=>x.name.localeCompare(b.name));async function A(x){const b=`${x.name}${x.url?`
`+x.url:""}${x.description?`
`+x.description:""}`;if(navigator.share)try{await navigator.share({title:x.name,text:b});return}catch{}try{await navigator.clipboard.writeText(b)}catch{}}return d.jsxs("div",{className:"favorites",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"favorites-header",children:[d.jsxs("h3",{children:["Favoritos ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-fav-btn",onClick:()=>g(!f),children:f?"✕ Cerrar":"+ Añadir favorito"})]}),f&&d.jsxs("form",{className:"fav-form fade-in",onSubmit:y,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:x=>i(x.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"url",placeholder:"URL (https://...)",value:o,onChange:x=>l(x.target.value)}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Descripción",value:u,onChange:x=>c(x.target.value)}),d.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),I.length===0&&!f&&d.jsx("p",{className:"favorites-empty",children:"No has añadido ningún favorito todavía."}),d.jsx("div",{className:"favorites-list",children:I.map(x=>d.jsxs("div",{className:"fav-item fade-in",children:[d.jsxs("div",{className:"fav-item-info",children:[d.jsx("a",{className:"fav-item-name",href:x.url,target:"_blank",rel:"noopener noreferrer",children:x.name}),x.description&&d.jsx("span",{className:"fav-item-desc",children:x.description}),x.url&&d.jsx("span",{className:"fav-item-url",children:x.url})]}),d.jsxs("div",{className:"fav-item-actions",children:[d.jsx("button",{className:"fav-action-btn",onClick:()=>A(x),title:"Compartir",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:[d.jsx("circle",{cx:"18",cy:"5",r:"3"}),d.jsx("circle",{cx:"6",cy:"12",r:"3"}),d.jsx("circle",{cx:"18",cy:"19",r:"3"}),d.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),d.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),d.jsx("button",{className:"fav-item-delete",onClick:()=>r(x.id),title:"Eliminar",children:"✕"})]})]},x.id))})]})}const X2=[{key:"length",label:"Longitud"},{key:"temp",label:"Temperatura"},{key:"weight",label:"Peso"},{key:"volume",label:"Volumen"},{key:"currency",label:"Moneda"}],Qa={length:[{key:"m",label:"Metro",toBase:1},{key:"km",label:"Kilómetro",toBase:1e3},{key:"cm",label:"Centímetro",toBase:.01},{key:"mm",label:"Milímetro",toBase:.001},{key:"mi",label:"Milla",toBase:1609.344},{key:"yd",label:"Yarda",toBase:.9144},{key:"ft",label:"Pie",toBase:.3048},{key:"in",label:"Pulgada",toBase:.0254}],weight:[{key:"kg",label:"Kilogramo",toBase:1},{key:"g",label:"Gramo",toBase:.001},{key:"mg",label:"Miligramo",toBase:1e-6},{key:"lb",label:"Libra",toBase:.453592},{key:"oz",label:"Onza",toBase:.0283495},{key:"t",label:"Tonelada",toBase:1e3}],volume:[{key:"l",label:"Litro",toBase:1},{key:"ml",label:"Mililitro",toBase:.001},{key:"gal",label:"Galón",toBase:3.78541},{key:"floz",label:"Onza líquida",toBase:.0295735},{key:"m3",label:"Metro cúbico",toBase:1e3}],currency:[{key:"eur",label:"Euro (EUR)",toBase:1},{key:"usd",label:"Dólar (USD)",toBase:.92},{key:"gbp",label:"Libra (GBP)",toBase:1.17},{key:"jpy",label:"Yen (JPY)",toBase:.0061},{key:"mxn",label:"Peso mexicano (MXN)",toBase:.045},{key:"ars",label:"Peso argentino (ARS)",toBase:95e-5}]};function Z2(t,e,n){let r;return e==="c"?r=t:e==="f"?r=(t-32)*5/9:r=t-273.15,n==="c"?r:n==="f"?r*9/5+32:r+273.15}const Nv=[{key:"c",label:"Celsius (°C)"},{key:"f",label:"Fahrenheit (°F)"},{key:"k",label:"Kelvin (K)"}];function Cv(t){if(!isFinite(t))return"—";const e=t.toPrecision(10),n=parseFloat(e);return n%1===0?n.toString():n.toFixed(4).replace(/\.?0+$/,"")}function eb(){var y,I;const[t,e]=j.useState("length"),[n,r]=j.useState(""),[s,i]=j.useState(""),[o,l]=j.useState(""),u=t==="temp",c=u?Nv:Qa[t],f=A=>{e(A),r(""),i(""),l("")},g=(()=>{const A=parseFloat(o);if(isNaN(A)||!n||!s)return null;if(u)return Cv(Z2(A,n,s));const x=Qa[t].find(C=>C.key===n),b=Qa[t].find(C=>C.key===s);return!x||!b?null:Cv(A*x.toBase/b.toBase)})();return d.jsxs("div",{className:"converter",children:[d.jsx("div",{className:"conv-cats",children:X2.map(A=>d.jsx("button",{className:`conv-cat ${t===A.key?"active":""}`,onClick:()=>f(A.key),children:A.label},A.key))}),d.jsxs("div",{className:"conv-form",children:[d.jsx("input",{className:"cf-input",type:"number",placeholder:"Valor",value:o,onChange:A=>l(A.target.value)}),d.jsxs("div",{className:"conv-row",children:[d.jsxs("select",{className:"cf-select",value:n,onChange:A=>r(A.target.value),children:[d.jsx("option",{value:"",children:"De"}),c.map(A=>d.jsx("option",{value:A.key,children:A.label},A.key))]}),d.jsx("span",{className:"conv-arrow",children:"→"}),d.jsxs("select",{className:"cf-select",value:s,onChange:A=>i(A.target.value),children:[d.jsx("option",{value:"",children:"A"}),c.map(A=>d.jsx("option",{value:A.key,children:A.label},A.key))]})]}),g!==null&&d.jsxs("div",{className:"conv-result fade-in",children:[d.jsx("span",{className:"conv-result-value",children:g}),d.jsx("span",{className:"conv-result-unit",children:u?(y=Nv.find(A=>A.key===s))==null?void 0:y.label:(I=Qa[t].find(A=>A.key===s))==null?void 0:I.label})]})]})]})}const Av=["¿Qué le dice un 0 a un 8? Bonito cinturón.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué hace una abeja en el gimnasio? Zumba.","—¡Ojalá fuera un chip! —Decía la patata.","¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.","—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.","¿Qué hace un pez en el cine? Nemo.","—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.","—Doctor, tengo 3 brazos. —Pues vístase y calle.","¿Qué hace una foca en una obra? Foca-pá.","—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.","—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.","Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?","¿Cómo se llama una italiana con bigote? Mafalda.","—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.","¿Qué le dice un jaguar a otro? Jaguar tú.","—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.","—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.","—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.","¿Cómo se llaman los primos de Tarzán? Los primos del monte.","—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.","—¿Qué es verde y habla por los codos? —Un perejil parlante.","—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.","¿Cómo se dice camarero en chino? Sumenú.","—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.","—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.","—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.","¿Qué hace un perro con un taladro? Taladrando.","—¿Qué son 50 caracoles? —Cincuenta centímetros.","Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien."],tb=["⚀","⚁","⚂","⚃","⚄","⚅"];function ca(t,e){return Math.floor(Math.random()*(e-t+1))+t}function nb({onSelect:t}){const e=[{key:"dice",label:"Dado",icon:"🎲"},{key:"coin",label:"Moneda",icon:"🪙"},{key:"rps",label:`Piedra,
Papel,
Tijera`,icon:"✂️"},{key:"random",label:`Número
al azar`,icon:"🔢"},{key:"joke",label:"Chiste",icon:"💡"},{key:"pepe",label:`Pepe
Game`,icon:"🎮"}];return d.jsxs("div",{className:"ent-hub",children:[d.jsx("h3",{className:"ent-hub-title",children:"Entretenimiento"}),d.jsx("div",{className:"ent-grid",children:e.map(n=>d.jsxs("button",{className:"ent-card",onClick:()=>t(n.key),children:[d.jsx("span",{className:"ent-card-icon",children:n.icon}),d.jsx("span",{className:"ent-card-label",children:n.label})]},n.key))})]})}function rb(){const[t,e]=j.useState(null),[n,r]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🎲 Dado"}),d.jsx("div",{className:"ent-result",children:t&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"ent-dice",children:t}),d.jsx("span",{className:"ent-big-num",children:n})]})}),d.jsx("button",{className:"generate-btn",onClick:()=>{const s=ca(1,6);e(tb[s-1]),r(s)},children:"Lanzar dado"})]})}function sb(){const[t,e]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🪙 Moneda"}),d.jsx("div",{className:"ent-result",children:t&&d.jsx("span",{className:"ent-coin",children:t==="cara"?"🪙 Cara":"🪙 Cruz"})}),d.jsx("button",{className:"generate-btn",onClick:()=>e(ca(0,1)?"cara":"cruz"),children:"Lanzar moneda"})]})}function ib(){const t=[{key:"rock",label:"Piedra",icon:"🪨",beats:"scissors"},{key:"paper",label:"Papel",icon:"📄",beats:"rock"},{key:"scissors",label:"Tijera",icon:"✂️",beats:"paper"}],[e,n]=j.useState(null),[r,s]=j.useState(null),[i,o]=j.useState(null),l=c=>{const f=t[ca(0,2)];n(c),s(f.key),c===f.key?o("🤝 Empate"):t.find(g=>g.key===c).beats===f.key?o("🎉 ¡Ganaste!"):o("😢 Perdiste")},u=()=>{n(null),s(null),o(null)};return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"✂️ Piedra, Papel o Tijera"}),e?d.jsxs("div",{className:"ent-rps-result",children:[d.jsxs("div",{className:"ent-rps-row",children:[d.jsxs("div",{className:"ent-rps-col",children:[d.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===e).icon}),d.jsx("span",{children:"Tú"})]}),d.jsx("span",{className:"ent-vs",children:"VS"}),d.jsxs("div",{className:"ent-rps-col",children:[d.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===r).icon}),d.jsx("span",{children:"App"})]})]}),d.jsx("div",{className:"ent-result",children:d.jsx("span",{className:"ent-rps-outcome",children:i})}),d.jsx("button",{className:"generate-btn",onClick:u,children:"Otra vez"})]}):d.jsx("div",{className:"ent-rps-btns",children:t.map(c=>d.jsxs("button",{className:"rps-btn",onClick:()=>l(c.key),children:[d.jsx("span",{className:"rps-icon",children:c.icon}),d.jsx("span",{children:c.label})]},c.key))})]})}function ob(){const[t,e]=j.useState("1"),[n,r]=j.useState("100"),[s,i]=j.useState(null);return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🔢 Número al azar"}),d.jsxs("div",{className:"conv-row",style:{marginTop:0},children:[d.jsx("input",{className:"cf-input",type:"number",placeholder:"Mín",value:t,onChange:o=>e(o.target.value)}),d.jsx("span",{className:"conv-arrow",children:"→"}),d.jsx("input",{className:"cf-input",type:"number",placeholder:"Máx",value:n,onChange:o=>r(o.target.value)})]}),d.jsx("div",{className:"ent-result",children:s!==null&&d.jsx("span",{className:"ent-big-num",children:s})}),d.jsx("button",{className:"generate-btn",onClick:()=>i(ca(parseInt(t)||0,parseInt(n)||100)),children:"Generar"})]})}function ab(){const[t,e]=j.useState("");return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"💡 Chiste"}),d.jsx("div",{className:"ent-joke-box",children:t&&d.jsx("p",{className:"ent-joke-text",children:t})}),d.jsx("button",{className:"generate-btn",onClick:()=>e(Av[ca(0,Av.length-1)]),children:"Nuevo chiste"})]})}function lb(){return d.jsxs("div",{className:"ent-sub",children:[d.jsx("h3",{children:"🎮 Pepe Game"}),d.jsx("p",{style:{color:"#64748b",fontSize:14,marginBottom:16,textAlign:"center"},children:"Abrir Pepe Game en nueva pestaña"}),d.jsx("a",{className:"generate-btn",href:"https://jlrmaster-creator.github.io/pepe_game/1.html",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex"},children:"Abrir juego"})]})}const ub={dice:rb,coin:sb,rps:ib,random:ob,joke:ab,pepe:lb};function cb(){const[t,e]=j.useState(null),n=t?ub[t]:null;return d.jsx("div",{className:"entertainment",children:t?d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"ent-back",onClick:()=>e(null),children:"← Volver"}),d.jsx(n,{})]}):d.jsx(nb,{onSelect:e})})}const db=[{key:"daily",label:"A diario"},{key:"weekly",label:"Semanal"},{key:"monthly",label:"Mensual"},{key:"once",label:"Una vez"}],I0=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function hb(t){return t.earlyBird?7:9}function fb(t){const e=hb(t);return t.frequency==="daily"?`A diario (${e}:00)`:t.frequency==="weekly"?`Cada ${I0[t.weekday]} (${e}:00)`:t.frequency==="monthly"?`Día ${t.day} de cada mes (${e}:00)`:t.frequency==="once"?`${t.day}/${String(t.month).padStart(2,"0")} (${e}:00)`:""}function pb(t){return t.lastFiredAt?Date.now()-new Date(t.lastFiredAt).getTime()<36e5:!1}function md(t){return(t?7:9)+":00"}const gd={name:"",note:"",frequency:"daily",weekday:1,day:1,month:1,earlyBird:!1};function mb({reminders:t,error:e,justFired:n,onAdd:r,onUpdate:s,onRemove:i,onShare:o,onUnshare:l}){const[u,c]=j.useState({...gd}),[f,g]=j.useState(!1),[y,I]=j.useState(null),[A,x]=j.useState(null),[b,C]=j.useState(""),w=(m,E)=>c(R=>({...R,[m]:E})),T=()=>{c({...gd}),I(null),g(!0)},V=m=>{c({name:m.name,note:m.note||"",frequency:m.frequency,weekday:m.weekday??1,day:m.day??1,month:m.month??1,earlyBird:m.earlyBird??!1}),I(m.id),g(!0)},P=m=>{if(m.preventDefault(),!u.name.trim())return;const E={name:u.name.trim(),note:u.note.trim(),frequency:u.frequency,active:!0,earlyBird:u.earlyBird};u.frequency==="weekly"?E.weekday=u.weekday:u.frequency==="monthly"?E.day=u.day:u.frequency==="once"&&(E.day=u.day,E.month=u.month),y?s(y,E):r(E),c({...gd}),I(null),g(!1)},F=m=>{!b.trim()||!b.includes("@")||(o(m,b.trim()),C(""),x(null))},N=t.filter(m=>!m.isShared).length,_=[...t].sort((m,E)=>m.active!==E.active?m.active?-1:1:m.name.localeCompare(E.name));return d.jsxs("div",{className:"reminders",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"reminders-header",children:[d.jsxs("h3",{children:["Recordatorios ",t.length>0&&d.jsx("span",{className:"count-badge",children:t.length})]}),d.jsx("button",{className:"add-reminder-btn",onClick:T,disabled:N>=5&&!y,children:"+ Añadir"})]}),f&&d.jsxs("form",{className:"reminder-form fade-in",onSubmit:P,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre (ej: Tomar pastillas)",value:u.name,onChange:m=>w("name",m.target.value),required:!0}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nota (opcional)",value:u.note,onChange:m=>w("note",m.target.value)}),d.jsx("select",{className:"cf-select",value:u.frequency,onChange:m=>w("frequency",m.target.value),children:db.map(m=>d.jsx("option",{value:m.key,children:m.label},m.key))}),u.frequency==="weekly"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día de la semana:"}),d.jsx("select",{className:"cf-select",value:u.weekday,onChange:m=>w("weekday",parseInt(m.target.value)),children:I0.map((m,E)=>d.jsx("option",{value:E,children:m},E))})]}),u.frequency==="monthly"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día del mes:"}),d.jsx("select",{className:"cf-select",value:u.day,onChange:m=>w("day",parseInt(m.target.value)),children:Array.from({length:28},(m,E)=>d.jsx("option",{value:E+1,children:E+1},E+1))})]}),u.frequency==="once"&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"reminder-label",children:"Día:"}),d.jsxs("div",{className:"reminder-row",children:[d.jsx("select",{className:"cf-select",value:u.day,onChange:m=>w("day",parseInt(m.target.value)),children:Array.from({length:31},(m,E)=>d.jsx("option",{value:E+1,children:E+1},E+1))}),d.jsx("span",{className:"reminder-colon",children:"/"}),d.jsx("select",{className:"cf-select",value:u.month,onChange:m=>w("month",parseInt(m.target.value)),children:Array.from({length:12},(m,E)=>d.jsx("option",{value:E+1,children:String(E+1).padStart(2,"0")},E+1))})]})]}),d.jsxs("label",{className:"reminder-checkbox-label",children:[d.jsx("input",{type:"checkbox",className:"reminder-checkbox",checked:u.earlyBird,onChange:m=>w("earlyBird",m.target.checked)}),d.jsxs("span",{children:["¿Eres madrugador? La primera notificación sonará a las ",d.jsx("strong",{children:md(u.earlyBird)})]})]}),d.jsxs("p",{className:"reminder-form-hint",children:["El aviso sonará cada hora desde las ",md(u.earlyBird)," hasta que lo desactives (🔔)."]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>{g(!1),I(null)},children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:y?"Guardar cambios":"Crear recordatorio"})]})]}),_.length===0&&!f&&d.jsx("p",{className:"reminders-empty",children:"No tienes recordatorios. ¡Añade uno!"}),d.jsx("div",{className:"reminders-list",children:_.map(m=>{const E=pb(m)||n===m.id;return d.jsxs("div",{className:`reminder-item fade-in ${E?"fired":""} ${m.active?"":"inactive"}`,children:[d.jsxs("div",{className:"reminder-item-left",children:[d.jsxs("div",{className:"reminder-item-header",children:[d.jsx("span",{className:"reminder-item-name",children:m.name}),E&&d.jsx("span",{className:"reminder-fired-badge",children:"✅ Ahora"})]}),m.note&&d.jsx("span",{className:"reminder-item-note",children:m.note}),d.jsx("span",{className:"reminder-item-time",children:fb(m)}),m.active&&d.jsxs("span",{className:"reminder-hourly-note",children:["Cada hora desde las ",md(m.earlyBird)," hasta desactivar (🔔)"]}),m.isShared&&m.ownerEmail&&d.jsxs("span",{className:"reminder-shared-from",children:["Compartido por ",m.ownerEmail]}),!m.isShared&&m.sharedWithEmails&&m.sharedWithEmails.length>0&&d.jsx("div",{className:"reminder-shared-with",children:m.sharedWithEmails.map((R,k)=>d.jsxs("span",{className:"reminder-shared-tag",children:[R,d.jsx("button",{className:"reminder-shared-remove",onClick:()=>l(m.id,m.sharedWithUids[k],R),title:"Eliminar",children:"✕"})]},R))})]}),d.jsx("div",{className:"reminder-item-actions",children:!m.isShared&&d.jsxs(d.Fragment,{children:[d.jsx("button",{className:`reminder-toggle-btn ${m.active?"on":"off"}`,onClick:()=>s(m.id,{active:!m.active}),title:m.active?"Desactivar":"Activar",children:m.active?"🔔":"🔕"}),d.jsx("button",{className:"reminder-edit-btn",onClick:()=>V(m),title:"Editar",children:"✏️"}),d.jsx("button",{className:"reminder-share-btn",onClick:()=>x(A===m.id?null:m.id),title:"Compartir",children:"📤"}),d.jsx("button",{className:"reminder-delete-btn",onClick:()=>i(m.id),title:"Eliminar",children:"🗑️"})]})}),A===m.id&&!m.isShared&&d.jsxs("div",{className:"reminder-share-form fade-in",children:[d.jsx("input",{className:"cf-input",type:"email",placeholder:"Email del usuario",value:b,onChange:R=>C(R.target.value)}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,padding:"8px 12px",fontSize:13},onClick:()=>F(m.id),children:"Compartir"})]})]},m.id)})}),N>=5&&!y&&d.jsx("p",{className:"reminders-limit",children:"Máximo 5 recordatorios propios permitidos."})]})}const gb=[{value:"#ffffff",label:"Blanco"},{value:"#fef9c3",label:"Amarillo"},{value:"#dcfce7",label:"Verde"},{value:"#dbeafe",label:"Azul"},{value:"#fce7f3",label:"Rosa"},{value:"#ede9fe",label:"Lila"}],Ya={title:"",body:"",color:"#fef9c3"};function yb({notes:t,error:e,maxNotes:n,onAdd:r,onUpdate:s,onRemove:i,onTogglePin:o}){const[l,u]=j.useState({...Ya}),[c,f]=j.useState(!1),[g,y]=j.useState(null),I=(T,V)=>u(P=>({...P,[T]:V})),A=()=>{u({...Ya}),y(null),f(!0)},x=T=>{u({title:T.title,body:T.body,color:T.color}),y(T.id),f(!0)},b=T=>{T.preventDefault(),!(!l.body.trim()&&!l.title.trim())&&(g?s(g,{title:l.title.trim(),body:l.body.trim(),color:l.color}):r({title:l.title.trim(),body:l.body.trim(),color:l.color}),u({...Ya}),y(null),f(!1))},C=()=>{u({...Ya}),y(null),f(!1)},w=t.length>=n&&!g;return d.jsxs("div",{className:"notes",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"notes-header",children:[d.jsxs("h3",{children:["Notas",t.length>0&&d.jsxs("span",{className:"count-badge",children:[t.length,"/",n]})]}),d.jsx("button",{className:"add-note-btn",onClick:A,disabled:w,children:"+ Añadir"})]}),c&&d.jsxs("form",{className:"note-form fade-in",onSubmit:b,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Título (opcional)",value:l.title,onChange:T=>I("title",T.target.value),maxLength:60}),d.jsx("textarea",{className:"note-form-textarea",placeholder:"Escribe tu nota aquí…",value:l.body,onChange:T=>I("body",T.target.value),rows:4,maxLength:500,required:!l.title.trim()}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Color:"}),d.jsx("div",{className:"note-color-swatches",children:gb.map(T=>d.jsx("button",{type:"button",title:T.label,className:`note-color-swatch ${l.color===T.value?"selected":""}`,style:{background:T.value},onClick:()=>I("color",T.value)},T.value))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:C,children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:g?"Guardar cambios":"Crear nota"})]})]}),t.length===0&&!c&&d.jsx("p",{className:"reminders-empty",children:"No tienes notas. ¡Añade una!"}),d.jsx("div",{className:"notes-grid",children:t.map(T=>d.jsxs("div",{className:`note-card fade-in ${T.pinned?"pinned":""}`,style:{background:T.color||"#ffffff"},children:[d.jsxs("div",{className:"note-card-top",children:[T.title&&d.jsx("p",{className:"note-card-title",children:T.title}),d.jsx("p",{className:"note-card-body",children:T.body})]}),d.jsxs("div",{className:"note-card-footer",children:[d.jsx("span",{className:"note-card-date",children:new Date(T.updatedAt).toLocaleDateString("es-ES",{day:"2-digit",month:"short"})}),d.jsxs("div",{className:"note-card-actions",children:[d.jsx("button",{className:`note-pin-btn ${T.pinned?"active":""}`,onClick:()=>o(T.id),title:T.pinned?"Desanclar":"Anclar",children:"📌"}),d.jsx("button",{className:"note-edit-btn",onClick:()=>x(T),title:"Editar",children:"✏️"}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(T.id),title:"Eliminar",children:"🗑️"})]})]})]},T.id))}),w&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," notas permitidas."]})]})}const vb=["#2d6a4f","#1d4ed8","#7c3aed","#b45309","#be185d","#0e7490","#4d7c0f","#9f1239"],_b=["EUR","USD","GBP"],kv={name:"",clientName:"",rate:"",currency:"EUR",color:"#2d6a4f"};function Ja(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}h ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(r).padStart(2,"0")}s`:`${r}s`}function Xa(t,e,n){return e?(t/3600*e).toLocaleString("es-ES",{style:"currency",currency:n,minimumFractionDigits:2}):null}function Eb(t){return new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"})}function xv(t){return new Date(t).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}function wb({projects:t,entries:e,error:n,maxProjects:r,activeProjectId:s,elapsed:i,secondsByProject:o,onAddProject:l,onRemoveProject:u,onStartTimer:c,onStopTimer:f,onRemoveEntry:g,contacts:y=[]}){var K;const[I,A]=j.useState(!1),[x,b]=j.useState({...kv}),[C,w]=j.useState(""),[T,V]=j.useState(!1),[P,F]=j.useState(null),[N,_]=j.useState(null),[m,E]=j.useState(!1),R=mI.useMemo(()=>{const O=(x.clientName||"").trim().toLowerCase();return O?y.filter(se=>se.name.toLowerCase().includes(O)):y.slice(0,10)},[y,x.clientName]),k=(O,se)=>b(he=>({...he,[O]:se})),S=O=>{O.preventDefault(),x.name.trim()&&(l({...x,rate:parseFloat(x.rate)||0}),b({...kv}),A(!1))},ue=async()=>{await f(C.trim()),w(""),V(!1)},re=t.find(O=>O.id===s),ot=t.length>=r,Ft=P?e.filter(O=>O.projectId===P):e,$=Ft.reduce((O,se)=>O+(se.durationSec||0),0);return d.jsxs("div",{className:"time-tracker",children:[n&&d.jsx("p",{className:"error",children:n}),s&&re&&d.jsxs("div",{className:"timer-banner fade-in",style:{borderColor:re.color},children:[d.jsxs("div",{className:"timer-banner-left",children:[d.jsx("span",{className:"timer-dot",style:{background:re.color}}),d.jsxs("div",{children:[d.jsx("p",{className:"timer-project-name",children:re.name}),re.clientName&&d.jsx("p",{className:"timer-client",children:re.clientName})]})]}),d.jsxs("div",{className:"timer-banner-right",children:[d.jsx("span",{className:"timer-elapsed",children:Ja(i)}),re.rate>0&&d.jsx("span",{className:"timer-earning",children:Xa(i,re.rate,re.currency)}),d.jsx("button",{className:"timer-stop-btn",onClick:()=>V(!0),children:"⏹ Parar"})]})]}),T&&d.jsx("div",{className:"modal-overlay fade-in",onClick:()=>V(!1),children:d.jsxs("div",{className:"modal-card",onClick:O=>O.stopPropagation(),children:[d.jsx("h4",{className:"modal-title",children:"Parar cronómetro"}),d.jsx("p",{className:"modal-subtitle",children:"¿Añadir una nota sobre lo trabajado? (opcional)"}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Ej: Reunión con cliente, diseño logo...",value:C,onChange:O=>w(O.target.value),autoFocus:!0}),d.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[d.jsx("button",{className:"reminder-cancel-btn",onClick:()=>V(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1},onClick:ue,children:"Guardar"})]})]})}),d.jsxs("div",{className:"time-section-header",children:[d.jsxs("h3",{children:["Proyectos ",d.jsxs("span",{className:"count-badge",children:[t.length,"/",r]})]}),d.jsx("button",{className:"add-note-btn",onClick:()=>A(!I),disabled:ot&&!I,children:"+ Añadir"})]}),I&&d.jsxs("form",{className:"note-form fade-in",onSubmit:S,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre del proyecto *",value:x.name,onChange:O=>k("name",O.target.value),required:!0}),d.jsxs("div",{className:"autocomplete-wrapper",children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Cliente (opcional)",value:x.clientName,onChange:O=>{k("clientName",O.target.value),E(!0)},onFocus:()=>E(!0),onBlur:()=>setTimeout(()=>E(!1),200)}),m&&R.length>0&&d.jsx("div",{className:"autocomplete-suggestions",children:R.map(O=>d.jsxs("button",{type:"button",className:"autocomplete-suggestion",onClick:()=>{k("clientName",O.name),E(!1)},children:["👤 ",O.name," ",O.occupation?`(${O.occupation})`:""]},O.id))})]}),d.jsxs("div",{className:"time-rate-row",children:[d.jsx("input",{className:"cf-input",type:"number",min:"0",step:"0.5",placeholder:"Tarifa €/h (opcional)",value:x.rate,onChange:O=>k("rate",O.target.value),style:{flex:2}}),d.jsx("select",{className:"cf-select",value:x.currency,onChange:O=>k("currency",O.target.value),style:{flex:1},children:_b.map(O=>d.jsx("option",{children:O},O))})]}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Color:"}),d.jsx("div",{className:"note-color-swatches",children:vb.map(O=>d.jsx("button",{type:"button",className:`note-color-swatch ${x.color===O?"selected":""}`,style:{background:O},onClick:()=>k("color",O)},O))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>A(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Crear proyecto"})]})]}),t.length===0&&!I&&d.jsx("p",{className:"reminders-empty",children:"No tienes proyectos. ¡Crea uno para empezar!"}),d.jsx("div",{className:"projects-list",children:t.map(O=>{const se=o[O.id]||0,he=s===O.id;return d.jsxs("div",{className:`project-card fade-in ${he?"project-active":""}`,style:{borderLeftColor:O.color},children:[d.jsxs("div",{className:"project-card-info",children:[d.jsx("span",{className:"project-card-name",children:O.name}),O.clientName&&d.jsx("span",{className:"project-card-client",children:O.clientName}),d.jsxs("div",{className:"project-card-stats",children:[d.jsxs("span",{className:"project-stat",children:["🕐 ",Ja(se)]}),O.rate>0&&d.jsxs("span",{className:"project-stat",children:["💰 ",Xa(se,O.rate,O.currency)]})]})]}),d.jsxs("div",{className:"project-card-actions",children:[he?d.jsx("button",{className:"timer-start-btn stop",onClick:()=>V(!0),children:"⏹"}):d.jsx("button",{className:"timer-start-btn",onClick:()=>c(O.id),disabled:!!s,title:"Iniciar cronómetro",children:"▶"}),d.jsx("button",{className:"note-delete-btn",onClick:()=>_(O.id),title:"Eliminar proyecto",style:{opacity:.6,fontSize:15},children:"🗑️"})]})]},O.id)})}),N&&d.jsx("div",{className:"modal-overlay fade-in",onClick:()=>_(null),children:d.jsxs("div",{className:"modal-card",onClick:O=>O.stopPropagation(),children:[d.jsx("h4",{className:"modal-title",children:"¿Eliminar proyecto?"}),d.jsx("p",{className:"modal-subtitle",children:"Se eliminarán también todos sus registros de horas."}),d.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[d.jsx("button",{className:"reminder-cancel-btn",onClick:()=>_(null),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1,background:"linear-gradient(135deg,#dc2626,#b91c1c)"},onClick:()=>{u(N),_(null)},children:"Eliminar"})]})]})}),e.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"time-section-header",style:{marginTop:20},children:[d.jsx("h3",{children:"Historial"}),t.length>0&&d.jsxs("select",{className:"cf-select",style:{fontSize:12,padding:"4px 8px"},value:P||"",onChange:O=>F(O.target.value||null),children:[d.jsx("option",{value:"",children:"Todos los proyectos"}),t.map(O=>d.jsx("option",{value:O.id,children:O.name},O.id))]})]}),$>0&&d.jsxs("div",{className:"time-total-bar",children:[d.jsxs("span",{children:["Total: ",d.jsx("strong",{children:Ja($)})]}),((K=Ft[0])==null?void 0:K.rate)>0&&d.jsxs("span",{children:["≈ ",d.jsx("strong",{children:Xa($,Ft[0].rate,Ft[0].currency)})]})]}),d.jsx("div",{className:"entries-list",children:Ft.slice(0,30).map(O=>{var se;return d.jsxs("div",{className:"entry-item fade-in",children:[d.jsx("div",{className:"entry-dot",style:{background:((se=t.find(he=>he.id===O.projectId))==null?void 0:se.color)||"#94a3b8"}}),d.jsxs("div",{className:"entry-info",children:[d.jsx("span",{className:"entry-project",children:O.projectName}),O.notes&&d.jsx("span",{className:"entry-notes",children:O.notes}),d.jsxs("span",{className:"entry-time",children:[Eb(O.startedAt)," · ",xv(O.startedAt)," – ",xv(O.endedAt)]})]}),d.jsxs("div",{className:"entry-right",children:[d.jsx("span",{className:"entry-duration",children:Ja(O.durationSec)}),O.rate>0&&d.jsx("span",{className:"entry-money",children:Xa(O.durationSec,O.rate,O.currency)}),d.jsx("button",{className:"note-delete-btn",onClick:()=>g(O.id),style:{opacity:.5,fontSize:13},title:"Eliminar registro",children:"🗑️"})]})]},O.id)})})]}),ot&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",r," proyectos permitidos."]})]})}const Tb=[21,10,4,0],Ib=[0,7,15],Rv={type:"income",concept:"",clientOrProvider:"",amount:"",vatRate:21,irpfRate:0,date:new Date().toISOString().split("T")[0]};function Bt(t,e="EUR"){return t.toLocaleString("es-ES",{style:"currency",currency:e,minimumFractionDigits:2})}function Sb(t){const e=new Date(t).getMonth();return e>=0&&e<=2?"Q1":e>=3&&e<=5?"Q2":e>=6&&e<=8?"Q3":"Q4"}function Nb({entries:t,error:e,maxEntries:n,stats:r,onAddEntry:s,onRemoveEntry:i,contacts:o=[]}){const[l,u]=j.useState(!1),[c,f]=j.useState({...Rv}),[g,y]=j.useState("ALL"),[I,A]=j.useState(new Date().getFullYear().toString()),[x,b]=j.useState(!1),C=j.useMemo(()=>{const m=(c.clientOrProvider||"").trim().toLowerCase();return m?o.filter(E=>E.name.toLowerCase().includes(m)):o.slice(0,10)},[o,c.clientOrProvider]),w=(m,E)=>f(R=>({...R,[m]:E})),T=m=>{m.preventDefault(),!(!c.concept.trim()||!c.amount)&&(s({type:c.type,concept:c.concept.trim(),clientOrProvider:c.clientOrProvider.trim(),amount:parseFloat(c.amount)||0,vatRate:parseInt(c.vatRate)||0,irpfRate:c.type==="income"&&parseInt(c.irpfRate)||0,date:c.date}),f({...Rv,type:c.type}),u(!1))},V=j.useMemo(()=>{const m=new Set([new Date().getFullYear().toString()]);return t.forEach(E=>{E.date&&m.add(E.date.split("-")[0])}),Array.from(m).sort((E,R)=>R-E)},[t]),P=j.useMemo(()=>t.filter(m=>{const E=m.date.split("-")[0],R=Sb(m.date);return E===I&&(g==="ALL"||R===g)}),[t,g,I]),F=j.useMemo(()=>{let m=0,E=0,R=0,k=0,S=0;P.forEach(ot=>{ot.type==="income"?(m+=ot.amount||0,R+=ot.vatAmount||0,S+=ot.irpfAmount||0):(E+=ot.amount||0,k+=ot.vatAmount||0)});const ue=m-E,re=R-k;return{incomes:m,expenses:E,vatRep:R,vatSop:k,irpf:S,profit:ue,vatBal:re}},[P]),N=()=>{if(P.length===0)return;const m=["Fecha","Tipo","Concepto","Cliente/Proveedor","Base Imponible (€)","IVA %","Cuota IVA (€)","IRPF %","Cuota IRPF (€)","Total (€)"],E=P.map(re=>[re.date,re.type==="income"?"Ingreso":"Gasto",re.concept.replace(/"/g,'""'),re.clientOrProvider.replace(/"/g,'""'),re.amount.toFixed(2),re.vatRate,re.vatAmount.toFixed(2),re.type==="income"?re.irpfRate:0,re.type==="income"?re.irpfAmount.toFixed(2):0,re.total.toFixed(2)]),R="\uFEFF"+[m.join(";"),...E.map(re=>re.join(";"))].join(`
`),k=new Blob([R],{type:"text/csv;charset=utf-8;"}),S=URL.createObjectURL(k),ue=document.createElement("a");ue.setAttribute("href",S),ue.setAttribute("download",`Contabilidad_${I}_${g==="ALL"?"Anual":g}.csv`),document.body.appendChild(ue),ue.click(),document.body.removeChild(ue)},_=t.length>=n&&!l;return d.jsxs("div",{className:"finance-tracker",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsxs("div",{className:"finance-stats-grid",children:[d.jsxs("div",{className:"finance-stat-card income",children:[d.jsx("span",{className:"finance-stat-title",children:"Ingresos (Bases)"}),d.jsx("span",{className:"finance-stat-value",children:Bt(F.incomes)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Repercutido: ",Bt(F.vatRep)]})]}),d.jsxs("div",{className:"finance-stat-card expense",children:[d.jsx("span",{className:"finance-stat-title",children:"Gastos (Bases)"}),d.jsx("span",{className:"finance-stat-value",children:Bt(F.expenses)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Soportado: ",Bt(F.vatSop)]})]}),d.jsxs("div",{className:"finance-stat-card profit",children:[d.jsx("span",{className:"finance-stat-title",children:"Rendimiento Neto"}),d.jsx("span",{className:"finance-stat-value",style:{color:F.profit>=0?"#2d6a4f":"#dc2626"},children:Bt(F.profit)}),d.jsxs("span",{className:"finance-stat-subtitle",children:["IRPF Retenido: ",Bt(F.irpf)]})]}),d.jsxs("div",{className:"finance-stat-card vat",children:[d.jsx("span",{className:"finance-stat-title",children:"Balance IVA (Hacienda)"}),d.jsx("span",{className:"finance-stat-value",style:{color:F.vatBal>=0?"#b45309":"#1d4ed8"},children:Bt(F.vatBal)}),d.jsx("span",{className:"finance-stat-subtitle",children:F.vatBal>=0?"A pagar":"A devolver"})]})]}),d.jsxs("div",{className:"finance-toolbar",children:[d.jsxs("div",{className:"finance-filters",children:[d.jsx("select",{className:"cf-select filter-select",value:I,onChange:m=>A(m.target.value),children:V.map(m=>d.jsx("option",{value:m,children:m},m))}),d.jsxs("select",{className:"cf-select filter-select",value:g,onChange:m=>y(m.target.value),children:[d.jsx("option",{value:"ALL",children:"Todo el año"}),d.jsx("option",{value:"Q1",children:"1º Trimestre (Ene-Mar)"}),d.jsx("option",{value:"Q2",children:"2º Trimestre (Abr-Jun)"}),d.jsx("option",{value:"Q3",children:"3º Trimestre (Jul-Sep)"}),d.jsx("option",{value:"Q4",children:"4º Trimestre (Oct-Dic)"})]})]}),d.jsxs("div",{className:"finance-actions-row",children:[d.jsx("button",{className:"add-note-btn",onClick:()=>u(!l),disabled:_,style:{flex:1},children:l?"Cerrar":"+ Añadir Asiento"}),P.length>0&&d.jsx("button",{className:"export-csv-btn",onClick:N,title:"Exportar a Excel / CSV",children:"📥 Exportar"})]})]}),l&&d.jsxs("form",{className:"note-form fade-in",onSubmit:T,children:[d.jsxs("div",{className:"finance-type-toggle",children:[d.jsx("button",{type:"button",className:`toggle-btn income ${c.type==="income"?"active":""}`,onClick:()=>w("type","income"),children:"🟢 Ingreso (Factura emitida)"}),d.jsx("button",{type:"button",className:`toggle-btn expense ${c.type==="expense"?"active":""}`,onClick:()=>w("type","expense"),children:"🔴 Gasto (Factura recibida)"})]}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"date",value:c.date,onChange:m=>w("date",m.target.value),required:!0,style:{flex:1}})}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Concepto (ej: Servicio consultoría, Alquiler local...)",value:c.concept,onChange:m=>w("concept",m.target.value),required:!0,maxLength:100}),d.jsxs("div",{className:"autocomplete-wrapper",children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:c.type==="income"?"Cliente (ej: ACME S.L.)":"Proveedor (ej: Iberdrola)",value:c.clientOrProvider,onChange:m=>{w("clientOrProvider",m.target.value),b(!0)},onFocus:()=>b(!0),onBlur:()=>setTimeout(()=>b(!1),200),maxLength:100}),x&&C.length>0&&d.jsx("div",{className:"autocomplete-suggestions",children:C.map(m=>d.jsxs("button",{type:"button",className:"autocomplete-suggestion",onClick:()=>{w("clientOrProvider",m.name),b(!1)},children:["👤 ",m.name," ",m.occupation?`(${m.occupation})`:""]},m.id))})]}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"number",min:"0.01",step:"0.01",placeholder:"Base imponible (€) *",value:c.amount,onChange:m=>w("amount",m.target.value),required:!0,style:{flex:1}})}),d.jsxs("div",{className:"finance-tax-selectors",children:[d.jsxs("div",{className:"tax-selector",children:[d.jsx("span",{className:"reminder-label",children:"IVA:"}),d.jsx("select",{className:"cf-select",value:c.vatRate,onChange:m=>w("vatRate",parseInt(m.target.value)),children:Tb.map(m=>d.jsxs("option",{value:m,children:[m,"%"]},m))})]}),c.type==="income"&&d.jsxs("div",{className:"tax-selector",children:[d.jsx("span",{className:"reminder-label",children:"Retención IRPF:"}),d.jsx("select",{className:"cf-select",value:c.irpfRate,onChange:m=>w("irpfRate",parseInt(m.target.value)),children:Ib.map(m=>d.jsxs("option",{value:m,children:[m,"%"]},m))})]})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>u(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Registrar Asiento"})]})]}),P.length===0&&!l&&d.jsx("p",{className:"reminders-empty",children:"No hay registros para este trimestre."}),d.jsx("div",{className:"finance-list",children:P.map(m=>{const E=m.type==="income";return d.jsxs("div",{className:`finance-item fade-in ${E?"income":"expense"}`,children:[d.jsxs("div",{className:"finance-item-left",children:[d.jsxs("div",{className:"finance-item-header",children:[d.jsx("span",{className:"finance-item-concept",children:m.concept}),d.jsx("span",{className:"finance-item-date",children:new Date(m.date).toLocaleDateString("es-ES")})]}),m.clientOrProvider&&d.jsxs("span",{className:"finance-item-client",children:[E?"Cliente: ":"Prov: "," ",m.clientOrProvider]}),d.jsxs("div",{className:"finance-item-tax-details",children:[d.jsxs("span",{children:["Base: ",Bt(m.amount)]}),d.jsx("span",{children:"·"}),d.jsxs("span",{children:["IVA (",m.vatRate,"%): ",Bt(m.vatAmount)]}),E&&m.irpfRate>0&&d.jsxs(d.Fragment,{children:[d.jsx("span",{children:"·"}),d.jsxs("span",{children:["IRPF (-",m.irpfRate,"%): ",Bt(m.irpfAmount)]})]})]})]}),d.jsxs("div",{className:"finance-item-right",children:[d.jsxs("span",{className:`finance-item-total ${E?"income":"expense"}`,children:[E?"+":"-"," ",Bt(m.total)]}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(m.id),title:"Eliminar asiento",style:{opacity:.5,fontSize:13},children:"🗑️"})]})]},m.id)})}),_&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," asientos permitidos."]})]})}const yd=[{value:"low",label:"Baja",color:"#3b82f6",bg:"#dbeafe"},{value:"medium",label:"Media",color:"#f59e0b",bg:"#fef3c7"},{value:"high",label:"Alta",color:"#ef4444",bg:"#fee2e2"}],Pv={title:"",description:"",dueDate:"",priority:"medium",clientName:""};function Cb(t){if(!t)return!1;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t);return n.setHours(0,0,0,0),n<e}function Ab(t){return t?new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"short"}):""}function kb({tasks:t,error:e,maxTasks:n,onAdd:r,onToggleStatus:s,onRemove:i}){const[o,l]=j.useState(!1),[u,c]=j.useState({...Pv}),[f,g]=j.useState(""),[y,I]=j.useState("all"),[A,x]=j.useState("pending"),b=(P,F)=>c(N=>({...N,[P]:F})),C=P=>{P.preventDefault(),u.title.trim()&&(r({title:u.title.trim(),description:u.description.trim(),dueDate:u.dueDate,priority:u.priority,clientName:u.clientName.trim()}),c({...Pv}),l(!1))},w=j.useMemo(()=>t.filter(P=>{const F=P.title.toLowerCase().includes(f.toLowerCase())||P.description.toLowerCase().includes(f.toLowerCase())||P.clientName.toLowerCase().includes(f.toLowerCase()),N=y==="all"||P.priority===y,_=A==="all"||P.status===A;return F&&N&&_}),[t,f,y,A]),T=t.length>=n&&!o,V=t.filter(P=>P.status==="pending").length;return d.jsxs("div",{className:"task-list-section",children:[e&&d.jsx("p",{className:"error",children:e}),d.jsx("div",{className:"task-overview",children:d.jsxs("span",{children:["Tienes ",d.jsx("strong",{children:V})," tareas pendientes"]})}),d.jsxs("div",{className:"task-toolbar",children:[d.jsxs("div",{className:"search-box",children:[d.jsx("svg",{className:"search-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),d.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar tarea, cliente...",value:f,onChange:P=>g(P.target.value)}),f&&d.jsx("button",{className:"search-clear",onClick:()=>g(""),children:"✕"})]}),d.jsxs("div",{className:"finance-filters",children:[d.jsxs("select",{className:"cf-select filter-select",value:A,onChange:P=>x(P.target.value),children:[d.jsx("option",{value:"pending",children:"Pendientes"}),d.jsx("option",{value:"completed",children:"Completadas"}),d.jsx("option",{value:"all",children:"Todas"})]}),d.jsxs("select",{className:"cf-select filter-select",value:y,onChange:P=>I(P.target.value),children:[d.jsx("option",{value:"all",children:"Cualquier prioridad"}),d.jsx("option",{value:"low",children:"Prioridad Baja"}),d.jsx("option",{value:"medium",children:"Prioridad Media"}),d.jsx("option",{value:"high",children:"Prioridad Alta"})]})]}),d.jsx("button",{className:"add-note-btn",onClick:()=>l(!o),disabled:T,style:{width:"100%"},children:o?"Cerrar formulario":"+ Nueva Tarea"})]}),o&&d.jsxs("form",{className:"note-form fade-in",onSubmit:C,children:[d.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre de la tarea *",value:u.title,onChange:P=>b("title",P.target.value),required:!0,maxLength:100}),d.jsx("textarea",{className:"note-form-textarea",placeholder:"Detalles / descripción de la tarea (opcional)",value:u.description,onChange:P=>b("description",P.target.value),rows:3,maxLength:300}),d.jsx("div",{className:"reminder-row",children:d.jsx("input",{className:"cf-input",type:"date",value:u.dueDate,onChange:P=>b("dueDate",P.target.value),style:{flex:1}})}),d.jsx("input",{className:"cf-input",type:"text",placeholder:"Cliente o Proyecto (ej: Proyecto Tienda)",value:u.clientName,onChange:P=>b("clientName",P.target.value),maxLength:50}),d.jsxs("div",{className:"note-color-row",children:[d.jsx("span",{className:"reminder-label",children:"Prioridad:"}),d.jsx("div",{className:"task-priority-toggle",children:yd.map(P=>d.jsx("button",{type:"button",className:`priority-btn ${u.priority===P.value?"active":""}`,style:{"--active-color":P.color,"--active-bg":P.bg},onClick:()=>b("priority",P.value),children:P.label},P.value))})]}),d.jsxs("div",{className:"reminder-form-actions",children:[d.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>l(!1),children:"Cancelar"}),d.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Guardar Tarea"})]})]}),w.length===0&&!o&&d.jsx("p",{className:"reminders-empty",children:"No hay tareas que coincidan con los filtros."}),d.jsx("div",{className:"tasks-container",children:w.map(P=>{const F=P.status==="pending"&&Cb(P.dueDate),N=yd.find(_=>_.value===P.priority)||yd[1];return d.jsxs("div",{className:`task-item fade-in ${P.status==="completed"?"completed":""}`,children:[d.jsxs("label",{className:"task-checkbox-container",children:[d.jsx("input",{type:"checkbox",checked:P.status==="completed",onChange:()=>s(P.id)}),d.jsx("span",{className:"task-checkmark"})]}),d.jsxs("div",{className:"task-body",children:[d.jsx("p",{className:"task-title",children:P.title}),P.description&&d.jsx("p",{className:"task-desc",children:P.description}),d.jsxs("div",{className:"task-badges",children:[P.clientName&&d.jsxs("span",{className:"task-badge client",children:["💼 ",P.clientName]}),P.dueDate&&d.jsxs("span",{className:`task-badge date ${F?"overdue":""}`,children:["📅 ",Ab(P.dueDate)," ",F&&" ⚠️ Retrasada"]}),d.jsx("span",{className:"task-badge priority",style:{background:N.bg,color:N.color},children:N.label})]})]}),d.jsx("button",{className:"note-delete-btn",onClick:()=>i(P.id),title:"Eliminar tarea",style:{opacity:.5,fontSize:13,alignSelf:"flex-start",marginTop:2},children:"🗑️"})]},P.id)})}),T&&d.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," tareas permitidas."]})]})}const xb=[{key:"reply",label:"Asistente AI",icon:"💬",desc:"Redacta respuestas profesionales con Inteligencia Artificial para tus clientes."},{key:"time",label:"Control de Horas",icon:"⏱️",desc:"Monitorea el tiempo dedicado a tus proyectos y calcula tus ingresos al instante."},{key:"finance",label:"Contabilidad",icon:"💰",desc:"Lleva el registro de tus facturas, gastos y previsión de IVA trimestral."},{key:"tasks",label:"Tareas",icon:"📋",desc:"Gestiona tu flujo de trabajo diario con prioridades y fechas límite."},{key:"notes",label:"Notas Rápidas",icon:"📝",desc:"Apunta ideas, tareas pendientes o datos breves en pósits de colores."},{key:"reminders",label:"Recordatorios",icon:"🔔",desc:"Programa alertas sonoras y notificaciones en segundo plano para tus citas."},{key:"contacts",label:"Contactos",icon:"👥",desc:"Organiza tu cartera de clientes, proveedores y colaboradores."},{key:"birthdays",label:"Cumpleaños",icon:"🎂",desc:"Fideliza a tus clientes felicitándolos en su día especial."},{key:"converter",label:"Conversor",icon:"🔄",desc:"Convierte divisas y unidades de forma rápida."},{key:"favorites",label:"Enlaces Favoritos",icon:"🔗",desc:"Accede con un clic a tus páginas web y portales más utilizados."},{key:"entertainment",label:"Zona Relax",icon:"🎮",desc:"Tómate un pequeño descanso para despejar la mente antes de continuar."}];function Rb({userEmail:t,onSelectTab:e}){const n=()=>{const i=new Date().getHours();return i<12?"¡Buenos días!":i<20?"¡Buenas tardes!":"¡Buenas noches!"},r=t?t.split("@")[0]:"autónomo",s=r.charAt(0).toUpperCase()+r.slice(1);return d.jsxs("div",{className:"dashboard-container fade-in",children:[d.jsxs("div",{className:"dashboard-hero",children:[d.jsxs("h2",{children:[n(),", ",s," 💼"]}),d.jsx("p",{className:"dashboard-subtitle",children:"Bienvenido a tu espacio de trabajo digital. ¿Con qué herramienta quieres trabajar hoy?"})]}),d.jsx("div",{className:"dashboard-grid",children:xb.map(i=>d.jsxs("button",{className:"dashboard-card",onClick:()=>e(i.key),children:[d.jsx("div",{className:"dashboard-card-icon",children:i.icon}),d.jsxs("div",{className:"dashboard-card-body",children:[d.jsx("h4",{className:"dashboard-card-title",children:i.label}),d.jsx("p",{className:"dashboard-card-desc",children:i.desc})]}),d.jsx("div",{className:"dashboard-card-arrow",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),d.jsx("polyline",{points:"12 5 19 12 12 19"})]})})]},i.key))})]})}const vd=[{key:"home",label:"Inicio",icon:"🏠"},{key:"reply",label:"Responder",icon:"💬"},{key:"birthdays",label:"Cumpleaños",icon:"🎂"},{key:"contacts",label:"Contactos",icon:"👥"},{key:"converter",label:"Conversor",icon:"🔄"},{key:"favorites",label:"Favoritos",icon:"🔗"},{key:"entertainment",label:"Entretenimiento",icon:"🎮"},{key:"reminders",label:"Recordatorios",icon:"🔔"},{key:"notes",label:"Notas",icon:"📝"},{key:"time",label:"Control de Horas",icon:"⏱️"},{key:"finance",label:"Contabilidad",icon:"💰"},{key:"tasks",label:"Tareas",icon:"📋"}];function Pb(){const[t,e]=j.useState("home"),[n,r]=j.useState(!1),s=j.useRef(null),{user:i,logout:o}=vn(),l=KP(),u=ZP(),c=r2(),f=a2(),g=E2(),y=S2(),I=P2(),A=V2(),x=U2();j.useEffect(()=>{const T=V=>{s.current&&!s.current.contains(V.target)&&r(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const b=T=>{const V=vd.find(P=>P.key===T);if(V!=null&&V.url){window.open(V.url,"_blank"),r(!1);return}e(T),r(!1)},C=vd.find(T=>T.key===t),w=C&&!C.url?C.label:"";return d.jsxs("div",{className:"container",children:[d.jsxs("header",{children:[d.jsxs("div",{className:"header-row",children:[d.jsxs("div",{className:"header-left",ref:s,children:[t!=="home"&&d.jsx("button",{className:"back-btn",onClick:()=>b("home"),title:"Volver al Inicio","aria-label":"Volver al Inicio",children:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"15 18 9 12 15 6"})})}),d.jsx("button",{className:"hamburger-btn",onClick:()=>r(!n),"aria-label":"Menú",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),n&&d.jsx("div",{className:"dropdown-menu",children:vd.map(T=>d.jsxs("button",{className:`dropdown-item ${t===T.key?"active":""}`,onClick:()=>b(T.key),children:[d.jsx("span",{className:"dropdown-icon",children:T.icon}),T.label]},T.key))})]}),d.jsx("h1",{children:"Toolbox AI"}),d.jsxs("div",{className:"header-user",children:[d.jsx("span",{className:"header-email",children:i.email}),d.jsx("button",{className:"logout-btn",onClick:o,title:"Cerrar sesión",children:d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),d.jsx("div",{className:"current-tab-label",children:w})]}),t!=="home"&&d.jsx("div",{className:"back-link-wrapper",children:d.jsxs("button",{className:"back-link-btn",onClick:()=>b("home"),children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),d.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Volver al Menú Principal"]})}),t==="home"?d.jsx(Rb,{userEmail:i.email,onSelectTab:b}):t==="reply"?d.jsxs("div",{className:"tab-content",children:[d.jsx(B2,{value:l.message,onChange:T=>l.setMessage(T.target.value)}),d.jsx(q2,{selected:l.mode,onSelect:l.setMode}),d.jsx(H2,{onClick:l.generate,loading:l.loading}),l.error&&d.jsx("p",{className:"error fade-in",children:l.error}),d.jsx(W2,{response:l.response,mode:l.mode,onSend:l.sendToWhatsApp,onRegenerate:l.generate,onMakeFunnier:l.makeFunnier}),l.history.length>0&&d.jsxs("section",{className:"history",children:[d.jsxs("div",{className:"history-header",children:[d.jsx("h3",{children:"Historial"}),d.jsx("button",{className:"history-clear",onClick:l.clearHistory,children:"Limpiar"})]}),l.history.slice(0,5).map((T,V)=>d.jsxs("div",{className:"history-item fade-in",children:[d.jsxs("div",{className:"history-item-header",children:[d.jsxs("span",{className:"history-mode-badge",children:[T.mode==="funny"?"😄":T.mode==="elegant"?"⭐":T.mode==="cold"?"❄️":"🔑"," ",T.mode]}),d.jsx("span",{className:"history-time",children:new Date(T.date).toLocaleTimeString()})]}),d.jsx("p",{className:"history-reply",children:T.reply})]},V))]})]}):t==="birthdays"?d.jsx("div",{className:"tab-content",children:d.jsx(K2,{friends:u.friends,todayBirthdays:u.todayBirthdays,error:u.error,onAdd:u.addFriend,onRemove:u.removeFriend,onSendGreeting:u.sendGreeting,onSendReminder:u.sendReminder})}):t==="contacts"?d.jsx("div",{className:"tab-content",children:d.jsx(Y2,{contacts:c.contacts,error:c.error,onAdd:c.addContact,onRemove:c.removeContact})}):t==="converter"?d.jsx("div",{className:"tab-content",children:d.jsx(eb,{})}):t==="entertainment"?d.jsx("div",{className:"tab-content",children:d.jsx(cb,{})}):t==="reminders"?d.jsx("div",{className:"tab-content",children:d.jsx(mb,{reminders:g.reminders,error:g.error,justFired:g.justFired,userEmail:g.userEmail,onAdd:g.addReminder,onUpdate:g.updateReminder,onRemove:g.removeReminder,onShare:g.shareReminder,onUnshare:g.unshareReminder})}):t==="notes"?d.jsx("div",{className:"tab-content",children:d.jsx(yb,{notes:y.notes,error:y.error,maxNotes:y.maxNotes,onAdd:y.addNote,onUpdate:y.updateNote,onRemove:y.removeNote,onTogglePin:y.togglePin})}):t==="time"?d.jsx("div",{className:"tab-content",children:d.jsx(wb,{projects:I.projects,entries:I.entries,error:I.error,maxProjects:I.maxProjects,activeProjectId:I.activeProjectId,elapsed:I.elapsed,secondsByProject:I.secondsByProject,onAddProject:I.addProject,onRemoveProject:I.removeProject,onStartTimer:I.startTimer,onStopTimer:I.stopTimer,onRemoveEntry:I.removeEntry,contacts:c.contacts})}):t==="finance"?d.jsx("div",{className:"tab-content",children:d.jsx(Nb,{entries:A.entries,error:A.error,maxEntries:A.maxEntries,stats:A.stats,onAddEntry:A.addEntry,onRemoveEntry:A.removeEntry,contacts:c.contacts})}):t==="tasks"?d.jsx("div",{className:"tab-content",children:d.jsx(kb,{tasks:x.tasks,error:x.error,maxTasks:x.maxTasks,onAdd:x.addTask,onToggleStatus:x.toggleTaskStatus,onRemove:x.removeTask})}):d.jsx("div",{className:"tab-content",children:d.jsx(J2,{favorites:f.favorites,error:f.error,onAdd:f.addFavorite,onRemove:f.removeFavorite})})]})}function bv({children:t}){return d.jsxs("div",{className:"app-shell",children:[t,d.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda © 2026"})]})}function bb(){return d.jsx("div",{className:"loading-screen",children:d.jsx("div",{className:"loading-spinner"})})}function Db(){const{user:t,loading:e}=vn();return e?d.jsx(bv,{children:d.jsx(bb,{})}):d.jsx(bv,{children:t?d.jsx(Pb,{}):d.jsx(z2,{})})}_d.createRoot(document.getElementById("root")).render(d.jsx(HP,{children:d.jsx(Db,{})}));
