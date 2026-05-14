(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var _y={exports:{}},zl={},vy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),OT=Symbol.for("react.portal"),LT=Symbol.for("react.fragment"),MT=Symbol.for("react.strict_mode"),bT=Symbol.for("react.profiler"),FT=Symbol.for("react.provider"),UT=Symbol.for("react.context"),jT=Symbol.for("react.forward_ref"),zT=Symbol.for("react.suspense"),BT=Symbol.for("react.memo"),$T=Symbol.for("react.lazy"),xp=Symbol.iterator;function HT(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Ty={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Ey}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iy(){}Iy.prototype=Ki.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Ey}var Qh=Gh.prototype=new Iy;Qh.constructor=Gh;wy(Qh,Ki.prototype);Qh.isPureReactComponent=!0;var Dp=Array.isArray,Sy=Object.prototype.hasOwnProperty,Yh={current:null},Ay={key:!0,ref:!0,__self:!0,__source:!0};function Ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sy.call(e,r)&&!Ay.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:Yh.current}}function qT(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function WT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WT(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case OT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),Pa(i,e,n,"",function(h){return h})):i!=null&&(Jh(i)&&(i=qT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bu(s,l);o+=Pa(s,e,n,u,i)}else if(u=HT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bu(s,l++),o+=Pa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},ka={transition:null},GT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:ka,ReactCurrentOwner:Yh};function Cy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ki;ne.Fragment=LT;ne.Profiler=bT;ne.PureComponent=Gh;ne.StrictMode=MT;ne.Suspense=zT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GT;ne.act=Cy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Sy.call(e,u)&&!Ay.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:UT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FT,_context:t},t.Consumer=t};ne.createElement=Ry;ne.createFactory=function(t){var e=Ry.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:jT,render:t}};ne.isValidElement=Jh;ne.lazy=function(t){return{$$typeof:$T,_payload:{_status:-1,_result:t},_init:KT}};ne.memo=function(t,e){return{$$typeof:BT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};ne.unstable_act=Cy;ne.useCallback=function(t,e){return ot.current.useCallback(t,e)};ne.useContext=function(t){return ot.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ot.current.useEffect(t,e)};ne.useId=function(){return ot.current.useId()};ne.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ot.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};ne.useRef=function(t){return ot.current.useRef(t)};ne.useState=function(t){return ot.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ot.current.useTransition()};ne.version="18.3.1";vy.exports=ne;var Z=vy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=Z,YT=Symbol.for("react.element"),JT=Symbol.for("react.fragment"),XT=Object.prototype.hasOwnProperty,ZT=QT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eI={key:!0,ref:!0,__self:!0,__source:!0};function Py(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XT.call(e,r)&&!eI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YT,type:t,key:s,ref:o,props:i,_owner:ZT.current}}zl.Fragment=JT;zl.jsx=Py;zl.jsxs=Py;_y.exports=zl;var x=_y.exports,Pc={},ky={exports:{}},vt={},Ny={exports:{}},xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var me=J-1>>>1,Ie=B[me];if(0<i(Ie,G))B[me]=G,B[J]=Ie,J=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var me=0,Ie=B.length,vr=Ie>>>1;me<vr;){var wt=2*(me+1)-1,Er=B[wt],xt=wt+1,Cn=B[xt];if(0>i(Er,J))xt<Ie&&0>i(Cn,Er)?(B[me]=Cn,B[xt]=J,me=xt):(B[me]=Er,B[wt]=J,me=wt);else if(xt<Ie&&0>i(Cn,J))B[me]=Cn,B[xt]=J,me=xt;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,k=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function M(B){if(D=!1,R(B),!k)if(n(u)!==null)k=!0,rs(V);else{var G=n(h);G!==null&&is(M,G.startTime-B)}}function V(B,G){k=!1,D&&(D=!1,I(y),y=-1),A=!0;var J=g;try{for(R(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!S());){var me=p.callback;if(typeof me=="function"){p.callback=null,g=p.priorityLevel;var Ie=me(p.expirationTime<=G);G=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),R(G)}else r(u);p=n(u)}if(p!==null)var vr=!0;else{var wt=n(h);wt!==null&&is(M,wt.startTime-G),vr=!1}return vr}finally{p=null,g=J,A=!1}}var U=!1,_=null,y=-1,v=5,T=-1;function S(){return!(t.unstable_now()-T<v)}function C(){if(_!==null){var B=t.unstable_now();T=B;var G=!0;try{G=_(!0,B)}finally{G?w():(U=!1,_=null)}}else U=!1}var w;if(typeof E=="function")w=function(){E(C)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,an=Ue.port2;Ue.port1.onmessage=C,w=function(){an.postMessage(null)}}else w=function(){b(C,0)};function rs(B){_=B,U||(U=!0,w())}function is(B,G){y=b(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||A||(k=!0,rs(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function(B,G,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,B){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,B={id:f++,callback:G,priorityLevel:B,startTime:J,expirationTime:Ie,sortIndex:-1},J>me?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(D?(I(y),y=-1):D=!0,is(M,J-me))):(B.sortIndex=Ie,e(u,B),k||A||(k=!0,rs(V))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var G=g;return function(){var J=g;g=G;try{return B.apply(this,arguments)}finally{g=J}}}})(xy);Ny.exports=xy;var tI=Ny.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI=Z,_t=tI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,eo={};function Gr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(eo[t]=e,t=0;t<e.length;t++)Dy.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,rI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Lp={};function iI(t){return kc.call(Lp,t)?!0:kc.call(Op,t)?!1:rI.test(t)?Lp[t]=!0:(Op[t]=!0,!1)}function sI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oI(t,e,n,r){if(e===null||typeof e>"u"||sI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Zh);He[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Zh);He[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Zh);He[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oI(e,n,i,r)&&(n=null),r||i===null?iI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=nI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),Ly=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,$u;function Ns(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function aI(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case Nc:return"Profiler";case td:return"StrictMode";case xc:return"Suspense";case Dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oy:return(t.displayName||"Context")+".Consumer";case Vy:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function lI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function My(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uI(t){var e=My(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=uI(t))}function by(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=My(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fy(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function Lc(t,e){Fy(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mc(t,e,n){(e!=="number"||Ya(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xs=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(xs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function Uy(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cI=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){cI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function By(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function $y(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=By(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(t,e){if(e){if(hI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bc=null,Ii=null,Si=null;function zp(t){if(t=xo(t)){if(typeof Bc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Wl(e),Bc(t.stateNode,t.type,e))}}function Hy(t){Ii?Si?Si.push(t):Si=[t]:Ii=t}function qy(){if(Ii){var t=Ii,e=Si;if(Si=Ii=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function Wy(t,e){return t(e)}function Ky(){}var Wu=!1;function Gy(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Wy(t,e,n)}finally{Wu=!1,(Ii!==null||Si!==null)&&(Ky(),qy())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var $c=!1;if(yn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{$c=!1}function dI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var zs=!1,Ja=null,Xa=!1,Hc=null,fI={onError:function(t){zs=!0,Ja=t}};function pI(t,e,n,r,i,s,o,l,u){zs=!1,Ja=null,dI.apply(fI,arguments)}function mI(t,e,n,r,i,s,o,l,u){if(pI.apply(this,arguments),zs){if(zs){var h=Ja;zs=!1,Ja=null}else throw Error(F(198));Xa||(Xa=!0,Hc=h)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Qr(t)!==t)throw Error(F(188))}function gI(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Yy(t){return t=gI(t),t!==null?Jy(t):null}function Jy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=_t.unstable_scheduleCallback,$p=_t.unstable_cancelCallback,yI=_t.unstable_shouldYield,_I=_t.unstable_requestPaint,Ae=_t.unstable_now,vI=_t.unstable_getCurrentPriorityLevel,sd=_t.unstable_ImmediatePriority,Zy=_t.unstable_UserBlockingPriority,Za=_t.unstable_NormalPriority,EI=_t.unstable_LowPriority,e_=_t.unstable_IdlePriority,Bl=null,Yt=null;function wI(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:SI,TI=Math.log,II=Math.LN2;function SI(t){return t>>>=0,t===0?32:31-(TI(t)/II|0)|0}var ua=64,ca=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ds(l):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function AI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=AI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t_(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function n_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r_,ad,i_,s_,o_,Wc=!1,ha=[],Wn=null,Kn=null,Gn=null,ro=new Map,io=new Map,Fn=[],PI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kI(t,e,n,r,i){switch(e){case"focusin":return Wn=Is(Wn,t,e,n,r,i),!0;case"dragenter":return Kn=Is(Kn,t,e,n,r,i),!0;case"mouseover":return Gn=Is(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,Is(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,Is(io.get(s)||null,t,e,n,r,i)),!0}return!1}function a_(t){var e=kr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qy(n),e!==null){t.blockedOn=e,o_(t.priority,function(){i_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zc=r,n.target.dispatchEvent(r),zc=null}else return e=xo(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Na(t)&&n.delete(e)}function NI(){Wc=!1,Wn!==null&&Na(Wn)&&(Wn=null),Kn!==null&&Na(Kn)&&(Kn=null),Gn!==null&&Na(Gn)&&(Gn=null),ro.forEach(qp),io.forEach(qp)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,NI)))}function so(t){function e(i){return Ss(i,t)}if(0<ha.length){Ss(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&Ss(Wn,t),Kn!==null&&Ss(Kn,t),Gn!==null&&Ss(Gn,t),ro.forEach(e),io.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)a_(n),n.blockedOn===null&&Fn.shift()}var Ai=An.ReactCurrentBatchConfig,tl=!0;function xI(t,e,n,r){var i=ae,s=Ai.transition;Ai.transition=null;try{ae=1,ld(t,e,n,r)}finally{ae=i,Ai.transition=s}}function DI(t,e,n,r){var i=ae,s=Ai.transition;Ai.transition=null;try{ae=4,ld(t,e,n,r)}finally{ae=i,Ai.transition=s}}function ld(t,e,n,r){if(tl){var i=Kc(t,e,n,r);if(i===null)rc(t,e,r,nl,n),Hp(t,r);else if(kI(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<PI.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&r_(s),s=Kc(t,e,n,r),s===null&&rc(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var nl=null;function Kc(t,e,n,r){if(nl=null,t=id(r),t=kr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function l_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vI()){case sd:return 1;case Zy:return 4;case Za:case EI:return 16;case e_:return 536870912;default:return 16}default:return 16}}var Hn=null,ud=null,xa=null;function u_(){if(xa)return xa;var t,e=ud,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xa=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Wp(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:Wp,this.isPropagationStopped=Wp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=Et(Gi),No=Ee({},Gi,{view:0,detail:0}),VI=Et(No),Gu,Qu,As,$l=Ee({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Gu=t.screenX-As.screenX,Qu=t.screenY-As.screenY):Qu=Gu=0,As=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Kp=Et($l),OI=Ee({},$l,{dataTransfer:0}),LI=Et(OI),MI=Ee({},No,{relatedTarget:0}),Yu=Et(MI),bI=Ee({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),FI=Et(bI),UI=Ee({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jI=Et(UI),zI=Ee({},Gi,{data:0}),Gp=Et(zI),BI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$I={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HI[t])?!!e[t]:!1}function hd(){return qI}var WI=Ee({},No,{key:function(t){if(t.key){var e=BI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$I[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KI=Et(WI),GI=Ee({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Et(GI),QI=Ee({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),YI=Et(QI),JI=Ee({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),XI=Et(JI),ZI=Ee({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Et(ZI),t0=[9,13,27,32],dd=yn&&"CompositionEvent"in window,Bs=null;yn&&"documentMode"in document&&(Bs=document.documentMode);var n0=yn&&"TextEvent"in window&&!Bs,c_=yn&&(!dd||Bs&&8<Bs&&11>=Bs),Yp=" ",Jp=!1;function h_(t,e){switch(t){case"keyup":return t0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function r0(t,e){switch(t){case"compositionend":return d_(e);case"keypress":return e.which!==32?null:(Jp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Jp?null:t;default:return null}}function i0(t,e){if(hi)return t==="compositionend"||!dd&&h_(t,e)?(t=u_(),xa=ud=Hn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c_&&e.locale!=="ko"?null:e.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!s0[t.type]:e==="textarea"}function f_(t,e,n,r){Hy(r),e=rl(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,oo=null;function o0(t){S_(t,0)}function Hl(t){var e=pi(t);if(by(e))return t}function a0(t,e){if(t==="change")return e}var p_=!1;if(yn){var Ju;if(yn){var Xu="oninput"in document;if(!Xu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Xu=typeof Zp.oninput=="function"}Ju=Xu}else Ju=!1;p_=Ju&&(!document.documentMode||9<document.documentMode)}function em(){$s&&($s.detachEvent("onpropertychange",m_),oo=$s=null)}function m_(t){if(t.propertyName==="value"&&Hl(oo)){var e=[];f_(e,oo,t,id(t)),Gy(o0,e)}}function l0(t,e,n){t==="focusin"?(em(),$s=e,oo=n,$s.attachEvent("onpropertychange",m_)):t==="focusout"&&em()}function u0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(oo)}function c0(t,e){if(t==="click")return Hl(e)}function h0(t,e){if(t==="input"||t==="change")return Hl(e)}function d0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:d0;function ao(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function g_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y_(){for(var t=window,e=Ya();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ya(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function f0(t){var e=y_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g_(n.ownerDocument.documentElement,n)){if(r!==null&&fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var p0=yn&&"documentMode"in document&&11>=document.documentMode,di=null,Gc=null,Hs=null,Qc=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||di==null||di!==Ya(r)||(r=di,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&ao(Hs,r)||(Hs=r,r=rl(Gc,"onSelect"),0<r.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Zu={},__={};yn&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function ql(t){if(Zu[t])return Zu[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in __)return Zu[t]=e[n];return t}var v_=ql("animationend"),E_=ql("animationiteration"),w_=ql("animationstart"),T_=ql("transitionend"),I_=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){I_.set(t,e),Gr(e,[t])}for(var ec=0;ec<im.length;ec++){var tc=im[ec],m0=tc.toLowerCase(),g0=tc[0].toUpperCase()+tc.slice(1);pr(m0,"on"+g0)}pr(v_,"onAnimationEnd");pr(E_,"onAnimationIteration");pr(w_,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(T_,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mI(r,e,void 0,t),t.currentTarget=null}function S_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}}}if(Xa)throw t=Hc,Xa=!1,Hc=null,t}function de(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var r=t+"__bubble";n.has(r)||(A_(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),A_(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[pa]){t[pa]=!0,Dy.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,nc("selectionchange",!1,e))}}function A_(t,e,n,r){switch(l_(e)){case 1:var i=xI;break;case 4:i=DI;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Gy(function(){var h=s,f=id(n),p=[];e:{var g=I_.get(t);if(g!==void 0){var A=cd,k=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":A=KI;break;case"focusin":k="focus",A=Yu;break;case"focusout":k="blur",A=Yu;break;case"beforeblur":case"afterblur":A=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=LI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=YI;break;case v_:case E_:case w_:A=FI;break;case T_:A=XI;break;case"scroll":A=VI;break;case"wheel":A=e0;break;case"copy":case"cut":case"paste":A=jI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Qp}var D=(e&4)!==0,b=!D&&t==="scroll",I=D?g!==null?g+"Capture":null:g;D=[];for(var E=h,R;E!==null;){R=E;var M=R.stateNode;if(R.tag===5&&M!==null&&(R=M,I!==null&&(M=no(E,I),M!=null&&D.push(uo(E,M,R)))),b)break;E=E.return}0<D.length&&(g=new A(g,k,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==zc&&(k=n.relatedTarget||n.fromElement)&&(kr(k)||k[_n]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=h,k=k?kr(k):null,k!==null&&(b=Qr(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=h),A!==k)){if(D=Kp,M="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Qp,M="onPointerLeave",I="onPointerEnter",E="pointer"),b=A==null?g:pi(A),R=k==null?g:pi(k),g=new D(M,E+"leave",A,n,f),g.target=b,g.relatedTarget=R,M=null,kr(f)===h&&(D=new D(I,E+"enter",k,n,f),D.target=R,D.relatedTarget=b,M=D),b=M,A&&k)t:{for(D=A,I=k,E=0,R=D;R;R=ii(R))E++;for(R=0,M=I;M;M=ii(M))R++;for(;0<E-R;)D=ii(D),E--;for(;0<R-E;)I=ii(I),R--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=ii(D),I=ii(I)}D=null}else D=null;A!==null&&om(p,g,A,D,!1),k!==null&&b!==null&&om(p,b,k,D,!0)}}e:{if(g=h?pi(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var V=a0;else if(Xp(g))if(p_)V=h0;else{V=u0;var U=l0}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=c0);if(V&&(V=V(t,h))){f_(p,V,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Mc(g,"number",g.value)}switch(U=h?pi(h):window,t){case"focusin":(Xp(U)||U.contentEditable==="true")&&(di=U,Gc=h,Hs=null);break;case"focusout":Hs=Gc=di=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,rm(p,n,f);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":rm(p,n,f)}var _;if(dd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else hi?h_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(c_&&n.locale!=="ko"&&(hi||y!=="onCompositionStart"?y==="onCompositionEnd"&&hi&&(_=u_()):(Hn=f,ud="value"in Hn?Hn.value:Hn.textContent,hi=!0)),U=rl(h,y),0<U.length&&(y=new Gp(y,t,null,n,f),p.push({event:y,listeners:U}),_?y.data=_:(_=d_(n),_!==null&&(y.data=_)))),(_=n0?r0(t,n):i0(t,n))&&(h=rl(h,"onBeforeInput"),0<h.length&&(f=new Gp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}S_(p,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(uo(t,s,i)),s=no(t,e),s!=null&&r.push(uo(t,s,i))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=no(n,s),u!=null&&o.unshift(uo(n,u,l))):i||(u=no(n,s),u!=null&&o.push(uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(_0,`
`).replace(v0,"")}function ma(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(F(425))}function il(){}var Yc=null,Jc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(T0)}:Zc;function T0(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Qi,co="__reactProps$"+Qi,_n="__reactContainer$"+Qi,eh="__reactEvents$"+Qi,I0="__reactListeners$"+Qi,S0="__reactHandles$"+Qi;function kr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Qt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[Qt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Wl(t){return t[co]||null}var th=[],mi=-1;function mr(t){return{current:t}}function pe(t){0>mi||(t.current=th[mi],th[mi]=null,mi--)}function ce(t,e){mi++,th[mi]=t.current,t.current=e}var or={},Ze=mr(or),ht=mr(!1),br=or;function Mi(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function sl(){pe(ht),pe(Ze)}function cm(t,e,n){if(Ze.current!==or)throw Error(F(168));ce(Ze,e),ce(ht,n)}function R_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,lI(t)||"Unknown",i));return Ee({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,br=Ze.current,ce(Ze,t),ce(ht,ht.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=R_(t,e,br),r.__reactInternalMemoizedMergedChildContext=t,pe(ht),pe(Ze),ce(Ze,t)):pe(ht),ce(ht,n)}var un=null,Kl=!1,sc=!1;function C_(t){un===null?un=[t]:un.push(t)}function A0(t){Kl=!0,C_(t)}function gr(){if(!sc&&un!==null){sc=!0;var t=0,e=ae;try{var n=un;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Kl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Xy(sd,gr),i}finally{ae=e,sc=!1}}return null}var gi=[],yi=0,al=null,ll=0,Tt=[],It=0,Fr=null,cn=1,hn="";function Rr(t,e){gi[yi++]=ll,gi[yi++]=al,al=t,ll=e}function P_(t,e,n){Tt[It++]=cn,Tt[It++]=hn,Tt[It++]=Fr,Fr=t;var r=cn;t=hn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Ft(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function pd(t){t.return!==null&&(Rr(t,1),P_(t,1,0))}function md(t){for(;t===al;)al=gi[--yi],gi[yi]=null,ll=gi[--yi],gi[yi]=null;for(;t===Fr;)Fr=Tt[--It],Tt[It]=null,hn=Tt[--It],Tt[It]=null,cn=Tt[--It],Tt[It]=null}var yt=null,gt=null,ge=!1,Lt=null;function k_(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(ge){var e=gt;if(e){var n=e;if(!dm(t,e)){if(nh(t))throw Error(F(418));e=Qn(n.nextSibling);var r=yt;e&&dm(t,e)?k_(r,n):(t.flags=t.flags&-4097|2,ge=!1,yt=t)}}else{if(nh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,yt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function ga(t){if(t!==yt)return!1;if(!ge)return fm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=gt)){if(nh(t))throw N_(),Error(F(418));for(;e;)k_(t,e),e=Qn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?Qn(t.stateNode.nextSibling):null;return!0}function N_(){for(var t=gt;t;)t=Qn(t.nextSibling)}function bi(){gt=yt=null,ge=!1}function gd(t){Lt===null?Lt=[t]:Lt.push(t)}var R0=An.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function x_(t){function e(I,E){if(t){var R=I.deletions;R===null?(I.deletions=[E],I.flags|=16):R.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Zn(I,E),I.index=0,I.sibling=null,I}function s(I,E,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<E?(I.flags|=2,E):R):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,R,M){return E===null||E.tag!==6?(E=dc(R,I.mode,M),E.return=I,E):(E=i(E,R),E.return=I,E)}function u(I,E,R,M){var V=R.type;return V===ci?f(I,E,R.props.children,M,R.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&pm(V)===E.type)?(M=i(E,R.props),M.ref=Rs(I,E,R),M.return=I,M):(M=Ua(R.type,R.key,R.props,null,I.mode,M),M.ref=Rs(I,E,R),M.return=I,M)}function h(I,E,R,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=fc(R,I.mode,M),E.return=I,E):(E=i(E,R.children||[]),E.return=I,E)}function f(I,E,R,M,V){return E===null||E.tag!==7?(E=Or(R,I.mode,M,V),E.return=I,E):(E=i(E,R),E.return=I,E)}function p(I,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return E=dc(""+E,I.mode,R),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oa:return R=Ua(E.type,E.key,E.props,null,I.mode,R),R.ref=Rs(I,null,E),R.return=I,R;case ui:return E=fc(E,I.mode,R),E.return=I,E;case Mn:var M=E._init;return p(I,M(E._payload),R)}if(xs(E)||ws(E))return E=Or(E,I.mode,R,null),E.return=I,E;ya(I,E)}return null}function g(I,E,R,M){var V=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return V!==null?null:l(I,E,""+R,M);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case oa:return R.key===V?u(I,E,R,M):null;case ui:return R.key===V?h(I,E,R,M):null;case Mn:return V=R._init,g(I,E,V(R._payload),M)}if(xs(R)||ws(R))return V!==null?null:f(I,E,R,M,null);ya(I,R)}return null}function A(I,E,R,M,V){if(typeof M=="string"&&M!==""||typeof M=="number")return I=I.get(R)||null,l(E,I,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case oa:return I=I.get(M.key===null?R:M.key)||null,u(E,I,M,V);case ui:return I=I.get(M.key===null?R:M.key)||null,h(E,I,M,V);case Mn:var U=M._init;return A(I,E,R,U(M._payload),V)}if(xs(M)||ws(M))return I=I.get(R)||null,f(E,I,M,V,null);ya(E,M)}return null}function k(I,E,R,M){for(var V=null,U=null,_=E,y=E=0,v=null;_!==null&&y<R.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var T=g(I,_,R[y],M);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(I,_),E=s(T,E,y),U===null?V=T:U.sibling=T,U=T,_=v}if(y===R.length)return n(I,_),ge&&Rr(I,y),V;if(_===null){for(;y<R.length;y++)_=p(I,R[y],M),_!==null&&(E=s(_,E,y),U===null?V=_:U.sibling=_,U=_);return ge&&Rr(I,y),V}for(_=r(I,_);y<R.length;y++)v=A(_,I,y,R[y],M),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?y:v.key),E=s(v,E,y),U===null?V=v:U.sibling=v,U=v);return t&&_.forEach(function(S){return e(I,S)}),ge&&Rr(I,y),V}function D(I,E,R,M){var V=ws(R);if(typeof V!="function")throw Error(F(150));if(R=V.call(R),R==null)throw Error(F(151));for(var U=V=null,_=E,y=E=0,v=null,T=R.next();_!==null&&!T.done;y++,T=R.next()){_.index>y?(v=_,_=null):v=_.sibling;var S=g(I,_,T.value,M);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(I,_),E=s(S,E,y),U===null?V=S:U.sibling=S,U=S,_=v}if(T.done)return n(I,_),ge&&Rr(I,y),V;if(_===null){for(;!T.done;y++,T=R.next())T=p(I,T.value,M),T!==null&&(E=s(T,E,y),U===null?V=T:U.sibling=T,U=T);return ge&&Rr(I,y),V}for(_=r(I,_);!T.done;y++,T=R.next())T=A(_,I,y,T.value,M),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),E=s(T,E,y),U===null?V=T:U.sibling=T,U=T);return t&&_.forEach(function(C){return e(I,C)}),ge&&Rr(I,y),V}function b(I,E,R,M){if(typeof R=="object"&&R!==null&&R.type===ci&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case oa:e:{for(var V=R.key,U=E;U!==null;){if(U.key===V){if(V=R.type,V===ci){if(U.tag===7){n(I,U.sibling),E=i(U,R.props.children),E.return=I,I=E;break e}}else if(U.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&pm(V)===U.type){n(I,U.sibling),E=i(U,R.props),E.ref=Rs(I,U,R),E.return=I,I=E;break e}n(I,U);break}else e(I,U);U=U.sibling}R.type===ci?(E=Or(R.props.children,I.mode,M,R.key),E.return=I,I=E):(M=Ua(R.type,R.key,R.props,null,I.mode,M),M.ref=Rs(I,E,R),M.return=I,I=M)}return o(I);case ui:e:{for(U=R.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(I,E.sibling),E=i(E,R.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=fc(R,I.mode,M),E.return=I,I=E}return o(I);case Mn:return U=R._init,b(I,E,U(R._payload),M)}if(xs(R))return k(I,E,R,M);if(ws(R))return D(I,E,R,M);ya(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,R),E.return=I,I=E):(n(I,E),E=dc(R,I.mode,M),E.return=I,I=E),o(I)):n(I,E)}return b}var Fi=x_(!0),D_=x_(!1),ul=mr(null),cl=null,_i=null,yd=null;function _d(){yd=_i=cl=null}function vd(t){var e=ul.current;pe(ul),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){cl=t,yd=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(cl===null)throw Error(F(308));_i=t,cl.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Nr=null;function Ed(t){Nr===null?Nr=[t]:Nr.push(t)}function V_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bn=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(g=e,A=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){p=k.call(A,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,g=typeof k=="function"?k.call(A,p,g):k,g==null)break e;p=Ee({},p,g);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=p}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Do={},Jt=mr(Do),ho=mr(Do),fo=mr(Do);function xr(t){if(t===Do)throw Error(F(174));return t}function Td(t,e){switch(ce(fo,e),ce(ho,t),ce(Jt,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fc(e,t)}pe(Jt),ce(Jt,e)}function Ui(){pe(Jt),pe(ho),pe(fo)}function L_(t){xr(fo.current);var e=xr(Jt.current),n=Fc(e,t.type);e!==n&&(ce(ho,t),ce(Jt,n))}function Id(t){ho.current===t&&(pe(Jt),pe(ho))}var _e=mr(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Sd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Oa=An.ReactCurrentDispatcher,ac=An.ReactCurrentBatchConfig,Ur=0,ve=null,xe=null,be=null,fl=!1,qs=!1,po=0,C0=0;function Ke(){throw Error(F(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Rd(t,e,n,r,i,s){if(Ur=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?x0:D0,t=n(r,i),qs){s=0;do{if(qs=!1,po=0,25<=s)throw Error(F(301));s+=1,be=xe=null,e.updateQueue=null,Oa.current=V0,t=n(r,i)}while(qs)}if(Oa.current=pl,e=xe!==null&&xe.next!==null,Ur=0,be=xe=ve=null,fl=!1,e)throw Error(F(300));return t}function Cd(){var t=po!==0;return po=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ve.memoizedState=be=t:be=be.next=t,be}function Nt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=be===null?ve.memoizedState:be.next;if(e!==null)be=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?ve.memoizedState=be=t:be=be.next=t}return be}function mo(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ur&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,jr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function M_(){}function b_(t,e){var n=ve,r=Nt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,Pd(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,go(9,U_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(F(349));Ur&30||F_(n,e,i)}return i}function F_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U_(t,e,n,r){e.value=n,e.getSnapshot=r,z_(e)&&B_(t)}function j_(t,e,n){return n(function(){z_(e)&&B_(t)})}function z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function B_(t){var e=vn(t,1);e!==null&&Ut(e,t,1,-1)}function ym(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=N0.bind(null,ve,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $_(){return Nt().memoizedState}function La(t,e,n,r){var i=Kt();ve.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function Gl(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Ad(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}ve.flags|=t,i.memoizedState=go(1|e,n,s,r)}function _m(t,e){return La(8390656,8,t,e)}function Pd(t,e){return Gl(2048,8,t,e)}function H_(t,e){return Gl(4,2,t,e)}function q_(t,e){return Gl(4,4,t,e)}function W_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K_(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,W_.bind(null,e,t),n)}function kd(){}function G_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Y_(t,e,n){return Ur&21?(zt(n,e)||(n=t_(),ve.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function P0(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{ae=n,ac.transition=r}}function J_(){return Nt().memoizedState}function k0(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X_(t))Z_(e,n);else if(n=V_(t,e,n,r),n!==null){var i=st();Ut(n,t,r,i),ev(n,e,r)}}function N0(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X_(t))Z_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,Ed(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=V_(t,e,i,r),n!==null&&(i=st(),Ut(n,t,r,i),ev(n,e,r))}}function X_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Z_(t,e){qs=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ev(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}var pl={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},x0={readContext:kt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,W_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=k0.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:kd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=P0.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Kt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Fe===null)throw Error(F(349));Ur&30||F_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_m(j_.bind(null,r,s,t),[t]),r.flags|=2048,go(9,U_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Fe.identifierPrefix;if(ge){var n=hn,r=cn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=C0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},D0={readContext:kt,useCallback:G_,useContext:kt,useEffect:Pd,useImperativeHandle:K_,useInsertionEffect:H_,useLayoutEffect:q_,useMemo:Q_,useReducer:lc,useRef:$_,useState:function(){return lc(mo)},useDebugValue:kd,useDeferredValue:function(t){var e=Nt();return Y_(e,xe.memoizedState,t)},useTransition:function(){var t=lc(mo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:b_,useId:J_,unstable_isNewReconciler:!1},V0={readContext:kt,useCallback:G_,useContext:kt,useEffect:Pd,useImperativeHandle:K_,useInsertionEffect:H_,useLayoutEffect:q_,useMemo:Q_,useReducer:uc,useRef:$_,useState:function(){return uc(mo)},useDebugValue:kd,useDeferredValue:function(t){var e=Nt();return xe===null?e.memoizedState=t:Y_(e,xe.memoizedState,t)},useTransition:function(){var t=uc(mo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:b_,useId:J_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Xn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Ut(e,t,i,r),Va(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Xn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Ut(e,t,i,r),Va(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Xn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Ut(e,t,r,n),Va(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function tv(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=dt(e)?br:Ze.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=dt(e)?br:Ze.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=aI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,yh=r),ah(t,e)},n}function rv(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ah(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new O0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=G0.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var L0=An.ReactCurrentOwner,ct=!1;function it(t,e,n,r){e.child=t===null?D_(e,null,n,r):Fi(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=Rd(t,e,n,r,s,i),n=Cd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ge&&n&&pd(e),e.flags|=1,it(t,e,r,i),e.child)}function Am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,r,i)):(t=Ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,En(t,e,i)}return lh(t,e,n,r,i)}function sv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ei,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ei,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ei,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ei,mt),mt|=r;return it(t,e,i,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lh(t,e,n,r,i){var s=dt(n)?br:Ze.current;return s=Mi(e,s),Ri(e,i),n=Rd(t,e,n,r,s,i),r=Cd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ge&&r&&pd(e),e.flags|=1,it(t,e,n,i),e.child)}function Rm(t,e,n,r,i){if(dt(n)){var s=!0;ol(e)}else s=!1;if(Ri(e,i),e.stateNode===null)Ma(t,e),tv(e,n,r),oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=dt(n)?br:Ze.current,h=Mi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Em(e,o,r,h),bn=!1;var g=e.memoizedState;o.state=g,hl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ht.current||bn?(typeof f=="function"&&(sh(e,n,f,r),u=e.memoizedState),(l=bn||vm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,O_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=dt(n)?br:Ze.current,u=Mi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Em(e,o,r,u),bn=!1,g=e.memoizedState,o.state=g,hl(e,r,o,i);var k=e.memoizedState;l!==p||g!==k||ht.current||bn?(typeof A=="function"&&(sh(e,n,A,r),k=e.memoizedState),(h=bn||vm(e,n,h,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return uh(t,e,n,r,s,i)}function uh(t,e,n,r,i,s){ov(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),En(t,e,s);r=e.stateNode,L0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Td(t,e.containerInfo)}function Cm(t,e,n,r,i){return bi(),gd(i),e.flags|=256,it(t,e,n,r),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,r,0,null),t=Or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=ch,t):Nd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return M0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Zn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ch,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nd(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&gd(r),Fi(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(F(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xl({mode:"visible",children:r.children},i,0,null),s=Or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=hh(o),e.memoizedState=ch,s);if(!(e.mode&1))return _a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=cc(s,r,void 0),_a(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Ut(r,t,i,-1))}return Md(),r=cc(Error(F(421))),_a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Q0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Qn(i.nextSibling),yt=e,ge=!0,Lt=null,t!==null&&(Tt[It++]=cn,Tt[It++]=hn,Tt[It++]=Fr,cn=t.id,hn=t.overflow,Fr=e),e=Nd(e,r.children),e.flags|=4096,e)}function Pm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ih(t.return,e,n)}function hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,n,e);else if(t.tag===19)Pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b0(t,e,n){switch(e.tag){case 3:av(e),bi();break;case 5:L_(e);break;case 1:dt(e.type)&&ol(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?lv(t,e,n):(ce(_e,_e.current&1),t=En(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return En(t,e,n)}var cv,dh,hv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(Jt.current);var s=null;switch(n){case"input":i=Oc(t,i),r=Oc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=bc(t,i),r=bc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}Uc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(eo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(eo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};dv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function F0(t,e,n){var r=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return dt(e.type)&&sl(),Ge(e),null;case 3:return r=e.stateNode,Ui(),pe(ht),pe(Ze),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(Eh(Lt),Lt=null))),dh(t,e),Ge(e),null;case 5:Id(e);var i=xr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ge(e),null}if(t=xr(Jt.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)de(Vs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":bp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Up(r,s),de("invalid",r)}Uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",""+l]):eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":aa(r),Fp(r,s,!0);break;case"textarea":aa(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[co]=r,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=jc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)de(Vs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":bp(t,r),i=Oc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Up(t,r),i=bc(t,r),de("invalid",t);break;default:i=r}Uc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?$y(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&zy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&to(t,u):typeof u=="number"&&to(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&ed(t,s,u,o))}switch(n){case"input":aa(t),Fp(t,r,!1);break;case"textarea":aa(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=xr(fo.current),xr(Jt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&gt!==null&&e.mode&1&&!(e.flags&128))N_(),bi(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Qt]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Lt!==null&&(Eh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?De===0&&(De=3):Md())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ui(),dh(t,e),t===null&&lo(e.stateNode.containerInfo),Ge(e),null;case 10:return vd(e.type._context),Ge(e),null;case 17:return dt(e.type)&&sl(),Ge(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>zi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ge(e),null}else 2*Ae()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function U0(t,e){switch(md(e),e.tag){case 1:return dt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),pe(ht),pe(Ze),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Ui(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var va=!1,Je=!1,j0=typeof WeakSet=="function"?WeakSet:Set,H=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function fh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var km=!1;function z0(t,e){if(Yc=tl,t=y_(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:t,selectionRange:n},tl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,b=k.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),b);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(M){Te(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return k=km,km=!1,k}function Ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fh(e,n,s)}i=i.next}while(i!==r)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[co],delete e[eh],delete e[I0],delete e[S0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}var je=null,Ot=!1;function On(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Je||vi(n,e);case 6:var r=je,i=Ot;je=null,On(t,e,n),je=r,Ot=i,je!==null&&(Ot?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ot?(t=je,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),so(t)):ic(je,n.stateNode));break;case 4:r=je,i=Ot,je=n.stateNode.containerInfo,Ot=!0,On(t,e,n),je=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!Je&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,On(t,e,n),Je=r):On(t,e,n);break;default:On(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j0),e.forEach(function(r){var i=Y0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ot=!1;break e;case 3:je=l.stateNode.containerInfo,Ot=!0;break e;case 4:je=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(je===null)throw Error(F(160));mv(s,o,i),je=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Wt(t),r&4){try{Ws(3,t,t.return),Yl(3,t)}catch(D){Te(t,t.return,D)}try{Ws(5,t,t.return)}catch(D){Te(t,t.return,D)}}break;case 1:Dt(e,t),Wt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Dt(e,t),Wt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(D){Te(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fy(i,s),jc(l,o);var h=jc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?$y(i,p):f==="dangerouslySetInnerHTML"?zy(i,p):f==="children"?to(i,p):ed(i,f,p,h)}switch(l){case"input":Lc(i,s);break;case"textarea":Uy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ti(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ti(i,!!s.multiple,s.defaultValue,!0):Ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(D){Te(t,t.return,D)}}break;case 6:if(Dt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Te(t,t.return,D)}}break;case 3:if(Dt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(D){Te(t,t.return,D)}break;case 4:Dt(e,t),Wt(t);break;case 13:Dt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vd=Ae())),r&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),Wt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(g=H,A=g.child,g.tag){case 0:case 11:case 14:case 15:Ws(4,g,g.return);break;case 1:vi(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){Te(r,n,D)}}break;case 5:vi(g,g.return);break;case 22:if(g.memoizedState!==null){Vm(p);continue}}A!==null?(A.return=g,H=A):Vm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=By("display",o))}catch(D){Te(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Te(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dt(e,t),Wt(t),r&4&&xm(t);break;case 21:break;default:Dt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=Nm(t);gh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);mh(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B0(t,e,n){H=t,yv(t)}function yv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=va;var h=Je;if(va=o,(Je=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Om(i):u!==null?(u.return=o,H=u):Om(i);for(;s!==null;)H=s,yv(s),s=s.sibling;H=i,va=l,Je=h}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Dm(t)}}function Dm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&ph(e)}catch(g){Te(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Vm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Om(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{ph(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{ph(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var $0=Math.ceil,ml=An.ReactCurrentDispatcher,xd=An.ReactCurrentOwner,Pt=An.ReactCurrentBatchConfig,se=0,Fe=null,Ce=null,$e=0,mt=0,Ei=mr(0),De=0,yo=null,jr=0,Jl=0,Dd=0,Ks=null,ut=null,Vd=0,zi=1/0,ln=null,gl=!1,yh=null,Jn=null,Ea=!1,qn=null,yl=0,Gs=0,_h=null,ba=-1,Fa=0;function st(){return se&6?Ae():ba!==-1?ba:ba=Ae()}function Xn(t){return t.mode&1?se&2&&$e!==0?$e&-$e:R0.transition!==null?(Fa===0&&(Fa=t_()),Fa):(t=ae,t!==0||(t=window.event,t=t===void 0?16:l_(t.type)),t):1}function Ut(t,e,n,r){if(50<Gs)throw Gs=0,_h=null,Error(F(185));ko(t,n,r),(!(se&2)||t!==Fe)&&(t===Fe&&(!(se&2)&&(Jl|=n),De===4&&Un(t,$e)),ft(t,r),n===1&&se===0&&!(e.mode&1)&&(zi=Ae()+500,Kl&&gr()))}function ft(t,e){var n=t.callbackNode;RI(t,e);var r=el(t,t===Fe?$e:0);if(r===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?A0(Lm.bind(null,t)):C_(Lm.bind(null,t)),w0(function(){!(se&6)&&gr()}),n=null;else{switch(n_(r)){case 1:n=sd;break;case 4:n=Zy;break;case 16:n=Za;break;case 536870912:n=e_;break;default:n=Za}n=Av(n,_v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _v(t,e){if(ba=-1,Fa=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=el(t,t===Fe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_l(t,r);else{e=r;var i=se;se|=2;var s=Ev();(Fe!==t||$e!==e)&&(ln=null,zi=Ae()+500,Vr(t,e));do try{W0();break}catch(l){vv(t,l)}while(!0);_d(),ml.current=s,se=i,Ce!==null?e=0:(Fe=null,$e=0,e=De)}if(e!==0){if(e===2&&(i=qc(t),i!==0&&(r=i,e=vh(t,i))),e===1)throw n=yo,Vr(t,0),Un(t,r),ft(t,Ae()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!H0(i)&&(e=_l(t,r),e===2&&(s=qc(t),s!==0&&(r=s,e=vh(t,s))),e===1))throw n=yo,Vr(t,0),Un(t,r),ft(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Cr(t,ut,ln);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Vd+500-Ae(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zc(Cr.bind(null,t,ut,ln),e);break}Cr(t,ut,ln);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){t.timeoutHandle=Zc(Cr.bind(null,t,ut,ln),r);break}Cr(t,ut,ln);break;case 5:Cr(t,ut,ln);break;default:throw Error(F(329))}}}return ft(t,Ae()),t.callbackNode===n?_v.bind(null,t):null}function vh(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=ut,ut=n,e!==null&&Eh(e)),t}function Eh(t){ut===null?ut=t:ut.push.apply(ut,t)}function H0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Dd,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(se&6)throw Error(F(327));Ci();var e=el(t,0);if(!(e&1))return ft(t,Ae()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var r=qc(t);r!==0&&(e=r,n=vh(t,r))}if(n===1)throw n=yo,Vr(t,0),Un(t,e),ft(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,ut,ln),ft(t,Ae()),null}function Od(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(zi=Ae()+500,Kl&&gr())}}function zr(t){qn!==null&&qn.tag===0&&!(se&6)&&Ci();var e=se;se|=1;var n=Pt.transition,r=ae;try{if(Pt.transition=null,ae=1,t)return t()}finally{ae=r,Pt.transition=n,se=e,!(se&6)&&gr()}}function Ld(){mt=Ei.current,pe(Ei)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E0(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Ui(),pe(ht),pe(Ze),Sd();break;case 5:Id(r);break;case 4:Ui();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:vd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(Fe=t,Ce=t=Zn(t.current,null),$e=mt=e,De=0,yo=null,Dd=Jl=jr=0,ut=Ks=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function vv(t,e){do{var n=Ce;try{if(_d(),Oa.current=pl,fl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Ur=0,be=xe=ve=null,qs=!1,po=0,xd.current=null,n===null||n.return===null){De=1,yo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Tm(o);if(A!==null){A.flags&=-257,Im(A,o,l,s,e),A.mode&1&&wm(s,h,e),e=A,u=h;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){wm(s,h,e),Md();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var b=Tm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Im(b,o,l,s,e),gd(ji(u,l));break e}}s=u=ji(u,l),De!==4&&(De=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=nv(s,u,e);mm(s,I);break e;case 1:l=u;var E=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Jn===null||!Jn.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=rv(s,l,e);mm(s,M);break e}}s=s.return}while(s!==null)}Tv(n)}catch(V){e=V,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Ev(){var t=ml.current;return ml.current=pl,t===null?pl:t}function Md(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(jr&268435455)&&!(Jl&268435455)||Un(Fe,$e)}function _l(t,e){var n=se;se|=2;var r=Ev();(Fe!==t||$e!==e)&&(ln=null,Vr(t,e));do try{q0();break}catch(i){vv(t,i)}while(!0);if(_d(),se=n,ml.current=r,Ce!==null)throw Error(F(261));return Fe=null,$e=0,De}function q0(){for(;Ce!==null;)wv(Ce)}function W0(){for(;Ce!==null&&!yI();)wv(Ce)}function wv(t){var e=Sv(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Tv(t):Ce=e,xd.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U0(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ce=null;return}}else if(n=F0(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);De===0&&(De=5)}function Cr(t,e,n){var r=ae,i=Pt.transition;try{Pt.transition=null,ae=1,K0(t,e,n,r)}finally{Pt.transition=i,ae=r}return null}function K0(t,e,n,r){do Ci();while(qn!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CI(t,s),t===Fe&&(Ce=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Av(Za,function(){return Ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=ae;ae=1;var l=se;se|=4,xd.current=null,z0(t,n),gv(n,t),f0(Jc),tl=!!Yc,Jc=Yc=null,t.current=n,B0(n),_I(),se=l,ae=o,Pt.transition=s}else t.current=n;if(Ea&&(Ea=!1,qn=t,yl=i),s=t.pendingLanes,s===0&&(Jn=null),wI(n.stateNode),ft(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=yh,yh=null,t;return yl&1&&t.tag!==0&&Ci(),s=t.pendingLanes,s&1?t===_h?Gs++:(Gs=0,_h=t):Gs=0,gr(),null}function Ci(){if(qn!==null){var t=n_(yl),e=Pt.transition,n=ae;try{if(Pt.transition=null,ae=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,yl=0,se&6)throw Error(F(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ws(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var g=f.sibling,A=f.return;if(fv(f),f===h){H=null;break}if(g!==null){g.return=A,H=g;break}H=A}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var E=t.current;for(H=E;H!==null;){o=H;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,H=R;else e:for(o=E;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yl(9,l)}}catch(V){Te(l,l.return,V)}if(l===o){H=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,H=M;break e}H=l.return}}if(se=i,gr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{ae=n,Pt.transition=e}}return!1}function Mm(t,e,n){e=ji(n,e),e=nv(t,e,1),t=Yn(t,e,1),e=st(),t!==null&&(ko(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=ji(n,t),t=rv(e,t,1),e=Yn(e,t,1),t=st(),e!==null&&(ko(e,1,t),ft(e,t));break}}e=e.return}}function G0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&($e&n)===n&&(De===4||De===3&&($e&130023424)===$e&&500>Ae()-Vd?Vr(t,0):Dd|=n),ft(t,e)}function Iv(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=st();t=vn(t,e),t!==null&&(ko(t,e,n),ft(t,n))}function Q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function Y0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Iv(t,n)}var Sv;Sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,b0(t,e,n);ct=!!(t.flags&131072)}else ct=!1,ge&&e.flags&1048576&&P_(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=Mi(e,Ze.current);Ri(e,n),i=Rd(null,e,r,t,i,n);var s=Cd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wd(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,oh(e,r,t,n),e=uh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&pd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=X0(r),t=Vt(r,t),i){case 0:e=lh(null,e,r,t,n);break e;case 1:e=Rm(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=Am(null,e,r,Vt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Rm(t,e,r,i,n);case 3:e:{if(av(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,O_(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(F(423)),e),e=Cm(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(F(424)),e),e=Cm(t,e,r,n,i);break e}else for(gt=Qn(e.stateNode.containerInfo.firstChild),yt=e,ge=!0,Lt=null,n=D_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=En(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return L_(e),t===null&&rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xc(r,i)?o=null:s!==null&&Xc(r,s)&&(e.flags|=32),ov(t,e),it(t,e,o,n),e.child;case 6:return t===null&&rh(e),null;case 13:return lv(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Sm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(ul,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!ht.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ih(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=kt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Am(t,e,r,i,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ma(t,e),e.tag=1,dt(r)?(t=!0,ol(e)):t=!1,Ri(e,n),tv(e,r,i),oh(e,r,i,n),uh(null,e,r,!0,t,n);case 19:return uv(t,e,n);case 22:return sv(t,e,n)}throw Error(F(156,e.tag))};function Av(t,e){return Xy(t,e)}function J0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new J0(t,e,n,r)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X0(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===rd)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Or(n.children,i,s,e);case td:o=8,i|=8;break;case Nc:return t=Ct(12,n,e,i|2),t.elementType=Nc,t.lanes=s,t;case xc:return t=Ct(13,n,e,i),t.elementType=xc,t.lanes=s,t;case Dc:return t=Ct(19,n,e,i),t.elementType=Dc,t.lanes=s,t;case Ly:return Xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vy:o=10;break e;case Oy:o=9;break e;case nd:o=11;break e;case rd:o=14;break e;case Mn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Or(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function Xl(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=Ly,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Z0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,l,u){return t=new Z0(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function eS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return or;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(dt(n))return R_(t,n,e)}return e}function Cv(t,e,n,r,i,s,o,l,u){return t=Fd(n,r,!0,t,i,s,o,l,u),t.context=Rv(null),n=t.current,r=st(),i=Xn(n),s=mn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,ko(t,i,r),ft(t,r),t}function Zl(t,e,n,r){var i=e.current,s=st(),o=Xn(i);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Ut(t,i,o,s),Va(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function tS(){return null}var Pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}eu.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Zl(t,e,null,null)};eu.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Zl(null,t,null,null)}),e[_n]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=s_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&a_(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function nS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=vl(o);s.call(h)}}var o=Cv(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[_n]=o.current,lo(t.nodeType===8?t.parentNode:t),zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=vl(u);l.call(h)}}var u=Fd(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[_n]=u.current,lo(t.nodeType===8?t.parentNode:t),zr(function(){Zl(e,u,n,r)}),u}function nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vl(o);l.call(u)}}Zl(e,o,t,i)}else o=nS(n,e,t,i,r);return vl(o)}r_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(od(e,n|1),ft(e,Ae()),!(se&6)&&(zi=Ae()+500,gr()))}break;case 13:zr(function(){var r=vn(t,1);if(r!==null){var i=st();Ut(r,t,1,i)}}),Ud(t,1)}};ad=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=st();Ut(e,t,134217728,n)}Ud(t,134217728)}};i_=function(t){if(t.tag===13){var e=Xn(t),n=vn(t,e);if(n!==null){var r=st();Ut(n,t,e,r)}Ud(t,e)}};s_=function(){return ae};o_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Bc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wl(r);if(!i)throw Error(F(90));by(r),Lc(r,i)}}}break;case"textarea":Uy(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};Wy=Od;Ky=zr;var rS={usingClientEntryPoint:!1,Events:[xo,pi,Wl,Hy,qy,Od]},Ps={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Bl=wa.inject(iS),Yt=wa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(F(200));return eS(t,e,null,n)};vt.createRoot=function(t,e){if(!zd(t))throw Error(F(299));var n=!1,r="",i=Pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,lo(t.nodeType===8?t.parentNode:t),new jd(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Yy(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return zr(t)};vt.hydrate=function(t,e,n){if(!tu(e))throw Error(F(200));return nu(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eu(e)};vt.render=function(t,e,n){if(!tu(e))throw Error(F(200));return nu(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!tu(t))throw Error(F(40));return t._reactRootContainer?(zr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};vt.unstable_batchedUpdates=Od;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return nu(t,e,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),ky.exports=vt;var sS=ky.exports,Um=sS;Pc.createRoot=Um.createRoot,Pc.hydrateRoot=Um.hydrateRoot;const oS=()=>{};var jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new lS;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uS=function(t){const e=Nv(t);return xv.encodeByteArray(e,!0)},El=function(t){return uS(t).replace(/\./g,"")},Dv=function(t){try{return xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hS=()=>cS().__FIREBASE_DEFAULTS__,dS=()=>{if(typeof process>"u"||typeof jm>"u")return;const t=jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dv(t[1]);return e&&JSON.parse(e)},ru=()=>{try{return oS()||hS()||dS()||fS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vv=t=>{var e,n;return(n=(e=ru())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},pS=t=>{const e=Vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ov=()=>{var t;return(t=ru())==null?void 0:t.config},Lv=t=>{var e;return(e=ru())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function _S(){var e;const t=(e=ru())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ES(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TS(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IS(){return!_S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SS(){try{return typeof indexedDB=="object"}catch{return!1}}function AS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RS,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function CS(t,e){return t.replace(PS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PS=/\{\$([^}]+)}/g;function kS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zm(s)&&zm(o)){if(!Br(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NS(t,e){const n=new xS(t,e);return n.subscribe.bind(n)}class xS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Lo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mv(t){return(await fetch(t,{credentials:"include"})).ok}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class VS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LS(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OS(t){return t===Pr?void 0:t}function LS(t){return t.instantiationMode==="EAGER"}/**
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
 */class MS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const bS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},FS=re.INFO,US={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},jS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=US[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=FS,this._logHandler=jS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const zS=(t,e)=>e.some(n=>t instanceof n);let Bm,$m;function BS(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $S(){return $m||($m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,wh=new WeakMap,Fv=new WeakMap,mc=new WeakMap,$d=new WeakMap;function HS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bv.set(n,t)}).catch(()=>{}),$d.set(e,t),e}function qS(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WS(t){Th=t(Th)}function KS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return Fv.set(r,e.sort?e.sort():[e]),er(r)}:$S().includes(t)?function(...e){return t.apply(gc(this),e),er(bv.get(this))}:function(...e){return er(t.apply(gc(this),e))}}function GS(t){return typeof t=="function"?KS(t):(t instanceof IDBTransaction&&qS(t),zS(t,BS())?new Proxy(t,Th):t)}function er(t){if(t instanceof IDBRequest)return HS(t);if(mc.has(t))return mc.get(t);const e=GS(t);return e!==t&&(mc.set(t,e),$d.set(e,t)),e}const gc=t=>$d.get(t);function QS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const YS=["get","getKey","getAll","getAllKeys","count"],JS=["put","add","delete","clear"],yc=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return yc.set(e,s),s}WS(t=>({...t,get:(e,n,r)=>Hm(e,n)||t.get(e,n,r),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
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
 */class XS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",qm="0.14.12";/**
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
 */const wn=new Bd("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",sA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/data-connect",uA="@firebase/database-compat",cA="@firebase/functions",hA="@firebase/functions-compat",dA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",_A="@firebase/remote-config",vA="@firebase/remote-config-compat",EA="@firebase/storage",wA="@firebase/storage-compat",TA="@firebase/firestore",IA="@firebase/ai",SA="@firebase/firestore-compat",AA="firebase",RA="12.13.0";/**
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
 */const Sh="[DEFAULT]",CA={[Ih]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[sA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[cA]:"fire-fn",[hA]:"fire-fn-compat",[dA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[_A]:"fire-rc",[vA]:"fire-rc-compat",[EA]:"fire-gcs",[wA]:"fire-gcs-compat",[TA]:"fire-fst",[SA]:"fire-fst-compat",[IA]:"fire-vertex","fire-js":"fire-js",[AA]:"fire-js-all"};/**
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
 */const wl=new Map,PA=new Map,Ah=new Map;function Wm(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(Ah.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ah.set(e,t);for(const n of wl.values())Wm(n,t);for(const n of PA.values())Wm(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function St(t){return t==null?!1:t.settings!==void 0}/**
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
 */const kA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Vo("app","Firebase",kA);/**
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
 */class NA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=RA;function Uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=Ov()),!n)throw tr.create("no-options");const s=wl.get(i);if(s){if(Br(n,s.options)&&Br(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new MS(i);for(const u of Ah.values())o.addComponent(u);const l=new NA(n,r,o);return wl.set(i,l),l}function jv(t=Sh){const e=wl.get(t);if(!e&&t===Sh&&Ov())return Uv();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=CA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}Bi(new $r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xA="firebase-heartbeat-database",DA=1,_o="firebase-heartbeat-store";let _c=null;function zv(){return _c||(_c=QS(xA,DA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),_c}async function VA(t){try{const n=(await zv()).transaction(_o),r=await n.objectStore(_o).get(Bv(t));return await n.done,r}catch(e){if(e instanceof Rn)wn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Km(t,e){try{const r=(await zv()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,Bv(t)),await r.done}catch(n){if(n instanceof Rn)wn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Bv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OA=1024,LA=30;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>LA){const o=UA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gm(),{heartbeatsToSend:r,unsentEntries:i}=bA(this._heartbeatsCache.heartbeats),s=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Gm(){return new Date().toISOString().substring(0,10)}function bA(t,e=OA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SS()?AS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return El(JSON.stringify({version:2,heartbeats:t})).length}function UA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jA(t){Bi(new $r("platform-logger",e=>new XS(e),"PRIVATE")),Bi(new $r("heartbeat",e=>new MA(e),"PRIVATE")),nr(Ih,qm,t),nr(Ih,qm,"esm2020"),nr("fire-js","")}jA("");function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=$v,Hv=new Vo("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Bd("@firebase/auth");function BA(t,...e){Tl.logLevel<=re.WARN&&Tl.warn(`Auth (${Yi}): ${t}`,...e)}function ja(t,...e){Tl.logLevel<=re.ERROR&&Tl.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw qd(t,...e)}function Xt(t,...e){return qd(t,...e)}function qv(t,e,n){const r={...zA(),[e]:n};return new Vo("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return qv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hv.create(t,...e)}function W(t,e,...n){if(!t)throw qd(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $A(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($A()||ES()||"connection"in navigator)?navigator.onLine:!0}function qA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=yS()||wS()}get(){return HA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GA=new Mo(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _r(t,e,n,r,i={}){return Kv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Oo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return vS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Lo(t.emulatorConfig.host)&&(h.credentials="include"),Wv.fetch()(await Gv(t,t.config.apiHost,n,l),h)})}async function Kv(t,e,n){t._canInitEmulator=!1;const r={...WA,...e};try{const i=new YA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ta(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw qv(t,f,h);Bt(t,f)}}catch(i){if(i instanceof Rn)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function bo(t,e,n,r,i={}){const s=await _r(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Gv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Wd(t.config,i):`${t.config.apiScheme}://${i}`;return KA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),GA.get())})}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}function Jm(t){return t!==void 0&&t.enterprise!==void 0}class JA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XA(t,e){return _r(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function Il(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eR(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Kd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(vc(i.auth_time)),issuedAtTime:Qs(vc(i.iat)),expirationTime:Qs(vc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dv(n);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xm(t){const e=Kd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&tR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await vo(t,Il(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Qv(i.providerUserInfo):[],o=iR(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function rR(t){const e=tt(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){const n=await Kv(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Gv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Lo(t.emulatorConfig.host)&&(u.credentials="include"),Wv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oR(t,e){return _r(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Xm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new nR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ch(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eR(this,e)}reload(){return rR(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await vo(this,ZA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:k,stsTokenManager:D}=n;W(p&&D,e,"internal-error");const b=Pi.fromJSON(this.name,D);W(typeof p=="string",e,"internal-error"),Ln(r,e.name),Ln(i,e.name),W(typeof g=="boolean",e,"internal-error"),W(typeof A=="boolean",e,"internal-error"),Ln(s,e.name),Ln(o,e.name),Ln(l,e.name),Ln(u,e.name),Ln(h,e.name),Ln(f,e.name);const I=new Mt({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(I.providerData=k.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pi;l.updateFromIdToken(r);const u=new Mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Map;function fn(t){Tn(t instanceof Function,"Expected a class definition");let e=Zm.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zm.set(t,e),e)}/**
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
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const eg=Yv;/**
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
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Il(this.auth,{idToken:e}).catch(()=>{});return n?Mt._fromGetAccountInfoResponse(this.auth,n,e):null}return Mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(fn(eg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(eg);const o=za(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Il(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Mt._fromGetAccountInfoResponse(e,g,f)}else p=Mt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ki(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nE(e))return"Blackberry";if(rE(e))return"Webos";if(Xv(e))return"Safari";if((e.includes("chrome/")||Zv(e))&&!e.includes("edge/"))return"Chrome";if(tE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jv(t=et()){return/firefox\//i.test(t)}function Xv(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zv(t=et()){return/crios\//i.test(t)}function eE(t=et()){return/iemobile/i.test(t)}function tE(t=et()){return/android/i.test(t)}function nE(t=et()){return/blackberry/i.test(t)}function rE(t=et()){return/webos/i.test(t)}function Gd(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aR(t=et()){var e;return Gd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lR(){return TS()&&document.documentMode===10}function iE(t=et()){return Gd(t)||tE(t)||rE(t)||nE(t)||/windows phone/i.test(t)||eE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=tg(et());break;case"Worker":n=`${tg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class uR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cR(t,e={}){return _r(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
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
 */const hR=6;class dR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new uR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Il(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(St(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(gn(this));const n=e?tt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cR(this),n=new dR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&BA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yr(t){return tt(t)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=NS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pR(t){iu=t}function oE(t){return iu.loadJS(t)}function mR(){return iu.recaptchaEnterpriseScript}function gR(){return iu.gapiScript}function yR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _R{constructor(){this.enterprise=new vR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class vR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ER="recaptcha-enterprise",aE="NO_RECAPTCHA";class wR{constructor(e){this.type=ER,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{XA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new JA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Jm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(aE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _R().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Jm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=mR();u.length!==0&&(u+=l),oE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function rg(t,e,n,r=!1,i=!1){const s=new wR(t);let o;if(i)o=aE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ph(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Br(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function IR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SR(t,e,n){const r=Yr(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lE(e),{host:o,port:l}=AR(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Br(h,r.config.emulator)&&Br(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Lo(o)?Mv(`${s}//${o}${u}`):RR()}function lE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AR(t){const e=lE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ig(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function CR(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){return bo(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function NR(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Qd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ph(e,n,"signInWithPassword",PR);case"emailLink":return kR(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ph(e,r,"signUpPassword",CR);case"emailLink":return NR(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return bo(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="http://localhost";class Hr extends Qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:xR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VR(t){const e=Os(Ls(t)).link,n=e?Os(Ls(e)).deep_link_id:null,r=Os(Ls(t)).deep_link_id;return(r?Os(Ls(r)).link:null)||r||n||e||t}class Yd{constructor(e){const n=Os(Ls(e)),r=n.apiKey??null,i=n.oobCode??null,s=DR(n.mode??null);W(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VR(e);try{return new Yd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return Eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yd.parseLink(n);return W(r,"argument-error"),Eo._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends uE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Fo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Fo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Fo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return bo(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mt._fromIdTokenResponse(e,r,i),o=sg(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sg(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Rn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function cE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function LR(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function MR(t,e,n=!1){const{auth:r}=t;if(St(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await vo(t,cE(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Kd(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e,n=!1){if(St(t.app))return Promise.reject(gn(t));const r="signIn",i=await cE(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bR(t,e){return hE(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FR(t,e,n){if(St(t.app))return Promise.reject(gn(t));const r=Yr(t),o=await Ph(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dE(t),u}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UR(t,e,n){return St(t.app)?Promise.reject(gn(t)):bR(tt(t),Ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dE(t),r})}function jR(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function zR(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function BR(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function $R(t){return tt(t).signOut()}const Rl="__sak";/**
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
 */class fE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=1e3,qR=10;class pE extends fE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pE.type="LOCAL";const WR=pE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends fE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mE.type="SESSION";const gE=mE;/**
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
 */function KR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await KR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Jd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function QR(t){Zt().location.href=t}/**
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
 */function yE(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function YR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function XR(){return yE()?self:null}/**
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
 */const _E="firebaseLocalStorageDb",ZR=1,Cl="firebaseLocalStorage",vE="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ou(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function e1(){const t=indexedDB.deleteDatabase(_E);return new Uo(t).toPromise()}function kh(){const t=indexedDB.open(_E,ZR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:vE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await e1(),e(await kh()))})})}async function og(t,e,n){const r=ou(t,!0).put({[vE]:e,value:n});return new Uo(r).toPromise()}async function t1(t,e){const n=ou(t,!1).get(e),r=await new Uo(n).toPromise();return r===void 0?null:r.value}function ag(t,e){const n=ou(t,!0).delete(e);return new Uo(n).toPromise()}const n1=800,r1=3;class EE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>r1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(XR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await YR(),!this.activeServiceWorker)return;this.sender=new GR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await og(e,Rl,"1"),await ag(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>t1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ou(i,!1).getAll();return new Uo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}EE.type="LOCAL";const i1=EE;new Mo(3e4,6e4);/**
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
 */function s1(t,e){return e?fn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xd extends Qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o1(t){return hE(t.auth,new Xd(t),t.bypassAuthState)}function a1(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),MR(n,new Xd(t),t.bypassAuthState)}async function l1(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),LR(n,new Xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o1;case"linkViaPopup":case"linkViaRedirect":return l1;case"reauthViaPopup":case"reauthViaRedirect":return a1;default:Bt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new Mo(2e3,1e4);class wi extends wE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u1.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="pendingRedirect",Ba=new Map;class h1 extends wE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await d1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d1(t,e){const n=m1(e),r=p1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function f1(t,e){Ba.set(t._key(),e)}function p1(t){return fn(t._redirectPersistence)}function m1(t){return za(c1,t.config.apiKey,t.name)}async function g1(t,e,n=!1){if(St(t.app))return Promise.reject(gn(t));const r=Yr(t),i=s1(r,e),o=await new h1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=10*60*1e3;class _1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y1&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T1=/^https?/;async function I1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E1(t);for(const n of e)try{if(S1(n))return}catch{}Bt(t,"unauthorized-domain")}function S1(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T1.test(n))return!1;if(w1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const A1=new Mo(3e4,6e4);function ug(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R1(t){return new Promise((e,n)=>{var i,s,o;function r(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(Xt(t,"network-request-failed"))},timeout:A1.get()})}if((s=(i=Zt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Zt().gapi)!=null&&o.load)r();else{const l=yR("iframefcb");return Zt()[l]=()=>{gapi.load?r():n(Xt(t,"network-request-failed"))},oE(`${gR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $a=null,e})}let $a=null;function C1(t){return $a=$a||R1(t),$a}/**
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
 */const P1=new Mo(5e3,15e3),k1="__/auth/iframe",N1="emulator/auth/iframe",x1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wd(e,N1):`https://${t.config.authDomain}/${k1}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=D1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function O1(t){const e=await C1(t),n=Zt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:V1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=Zt().setTimeout(()=>{s(o)},P1.get());function u(){Zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const L1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M1=500,b1=600,F1="_blank",U1="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j1(t,e,n,r=M1,i=b1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...L1,width:r.toString(),height:i.toString(),top:s,left:o},h=et().toLowerCase();n&&(l=Zv(h)?F1:n),Jv(h)&&(e=e||U1,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,k])=>`${g}${A}=${k},`,"");if(aR(h)&&l!=="_self")return z1(e||"",l),new cg(null);const p=window.open(e||"",l,f);W(p,t,"popup-blocked");try{p.focus()}catch{}return new cg(p)}function z1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const B1="__/auth/handler",$1="emulator/auth/handler",H1=encodeURIComponent("fac");async function hg(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof uE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${H1}=${encodeURIComponent(u)}`:"";return`${q1(t)}?${Oo(l).slice(1)}${h}`}function q1({config:t}){return t.emulator?Wd(t,$1):`https://${t.authDomain}/${B1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gE,this._completeRedirectFn=g1,this._overrideRedirectResult=f1}async _openPopup(e,n,r,i){var o;Tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await hg(e,n,r,Rh(),i);return j1(e,s,Jd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hg(e,n,r,Rh(),i);return QR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O1(e),r=new _1(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ec];s!==void 0&&n(!!s),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iE()||Xv()||Gd()}}const K1=W1;var dg="@firebase/auth",fg="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y1(t){Bi(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},h=new fR(r,i,s,u);return IR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new $r("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new G1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(dg,fg,Q1(t)),nr(dg,fg,"esm2020")}/**
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
 */const J1=5*60,X1=Lv("authIdTokenMaxAge")||J1;let pg=null;const Z1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>X1)return;const i=n==null?void 0:n.token;pg!==i&&(pg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eC(t=jv()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TR(t,{popupRedirectResolver:K1,persistence:[i1,WR,gE]}),r=Lv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Z1(s.toString());zR(n,o,()=>o(n.currentUser)),jR(n,l=>o(l))}}const i=Vv("auth");return i&&SR(n,`http://${i}`),n}function tC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}pR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y1("Browser");var nC="firebase",rC="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(nC,rC,"app");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,IE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(T,S,C){for(var w=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)w[Ue-2]=arguments[Ue];return y.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;S<16;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],S=_.g[2];let C=_.g[3],w;w=y+(C^v&(S^C))+T[0]+3614090360&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[1]+3905402710&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[2]+606105819&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[5]+1200080426&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[6]+2821735955&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[9]+2336552879&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[10]+4294925233&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[13]+4254626195&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[14]+2792965006&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(S^C&(v^S))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[6]+3225465664&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[11]+643717713&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[10]+38016083&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[15]+3634488961&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[14]+3275163606&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[3]+4107603335&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[2]+4243563512&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[7]+1735328473&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(v^S^C)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[8]+2272392833&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[11]+1839030562&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[4]+1272893353&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[7]+4139469664&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[0]+3936430074&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[3]+3572445317&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[12]+3873151461&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[15]+530742520&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(S^(v|~C))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[7]+1126891415&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[14]+2878612391&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[3]+2399980690&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[10]+4293915773&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[15]+4264355552&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[6]+2734768916&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[11]+3174756917&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[2]+718787259&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,T=this.C;let S=this.h,C=0;for(;C<y;){if(S==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<y;)if(T[S++]=_.charCodeAt(C++),S==this.blockSize){i(this,T),S=0;break}}else for(;C<y;)if(T[S++]=_[C++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)_[y++]=this.g[v]>>>T&255;return _};function s(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function o(_,y){this.h=y;const v=[];let T=!0;for(let S=_.length-1;S>=0;S--){const C=_[S]|0;T&&C==y||(v[S]=C,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return b(h(-_));const y=[];let v=1;for(let T=0;_>=v;T++)y[T]=_/v|0,v*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return b(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=p;for(let C=0;C<_.length;C+=8){var S=Math.min(8,_.length-C);const w=parseInt(_.substring(C,C+S),y);S<8?(S=h(Math.pow(y,S)),T=T.j(S).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(D(this))return"-"+b(this).toString(_);const y=h(Math.pow(_,6));var v=this;let T="";for(;;){const S=M(v,y).g;v=I(v,S.j(y));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=S,k(v))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=I(this,_),D(_)?-1:k(_)?0:1};function b(_){const y=_.g.length,v=[];for(let T=0;T<y;T++)v[T]=~_.g[T];return new o(v,~_.h).add(g)}t.abs=function(){return D(this)?b(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let T=0;for(let S=0;S<=y;S++){let C=T+(this.i(S)&65535)+(_.i(S)&65535),w=(C>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);T=w>>>16,C&=65535,w&=65535,v[S]=w<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(b(y))}t.j=function(_){if(k(this)||k(_))return p;if(D(this))return D(_)?b(this).j(b(_)):b(b(this).j(_));if(D(_))return b(this.j(b(_)));if(this.l(A)<0&&_.l(A)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<_.g.length;S++){const C=this.i(T)>>>16,w=this.i(T)&65535,Ue=_.i(S)>>>16,an=_.i(S)&65535;v[2*T+2*S]+=w*an,E(v,2*T+2*S),v[2*T+2*S+1]+=C*an,E(v,2*T+2*S+1),v[2*T+2*S+1]+=w*Ue,E(v,2*T+2*S+1),v[2*T+2*S+2]+=C*Ue,E(v,2*T+2*S+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new o(v,0)};function E(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function R(_,y){this.g=_,this.h=y}function M(_,y){if(k(y))throw Error("division by zero");if(k(_))return new R(p,p);if(D(_))return y=M(b(_),y),new R(b(y.g),b(y.h));if(D(y))return y=M(_,b(y)),new R(b(y.g),y.h);if(_.g.length>30){if(D(_)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;T.l(_)<=0;)v=V(v),T=V(T);var S=U(v,1),C=U(T,1);for(T=U(T,2),v=U(v,2);!k(T);){var w=C.add(T);w.l(_)<=0&&(S=S.add(v),C=w),T=U(T,1),v=U(v,1)}return y=I(_,S.j(y)),new R(S,y)}for(S=p;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=h(v),w=C.j(y);D(w)||w.l(_)>0;)v-=T,C=h(v),w=C.j(y);k(C)&&(C=g),S=S.add(C),_=I(_,w)}return new R(S,_)}t.B=function(_){return M(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&_.i(T);return new o(v,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|_.i(T);return new o(v,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^_.i(T);return new o(v,this.h^_.h)};function V(_){const y=_.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(v,_.h)}function U(_,y){const v=y>>5;y%=32;const T=_.g.length-v,S=[];for(let C=0;C<T;C++)S[C]=y>0?_.i(C+v)>>>y|_.i(C+v+1)<<32-y:_.i(C+v);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,IE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,rr=o}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var SE,Ms,AE,Ha,Nh,RE,CE,PE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ia=="object"&&Ia];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var j=Array(arguments.length-2),X=2;X<arguments.length;X++)j[X-2]=arguments[X];return c.prototype[P].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function k(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let j=0;j<N;j++)a[d+j]=P[j]}else a.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(a){o.setTimeout(()=>{throw a},0)}function I(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const m=R.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var R=new D(()=>new M,a=>a.reset());class M{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,U=!1,_=new E,y=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(v)}};function v(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){b(d)}var c=R;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Ue,S),Ue.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(Math.random()*1e6|0),rs=0;function is(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++rs,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function J(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function me(a){const c={};for(const d in a)c[d]=a[d];return c}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vr(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<Ie.length;N++)d=Ie[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function wt(a){this.src=a,this.g={},this.h=0}wt.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const j=xt(a,c,m,P);return j>-1?(c=a[j],d||(c.fa=!1)):(c=new is(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function Er(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xt(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var Cn="closure_lm_"+(Math.random()*1e6|0),wu={};function Vf(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)Vf(a,c[N],d,m,P);return null}return d=Mf(d),a&&a[an]?a.J(c,d,l(m)?!!m.capture:!1,P):sT(a,c,d,!1,m,P)}function sT(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const j=l(P)?!!P.capture:!!P;let X=Iu(a);if(X||(a[Cn]=X=new wt(a)),d=X.add(c,d,m,j,N),d.proxy)return d;if(m=oT(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)C||(P=j),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(Lf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function oT(){function a(d){return c.call(a.src,a.listener,d)}const c=aT;return a}function Of(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Of(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=Mf(d),a&&a[an]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=xt(c,d,m,P),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=Iu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=xt(c,d,m,P)),(d=a>-1?c[a]:null)&&Tu(d))}function Tu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[an])Er(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Lf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Iu(c))?(Er(d,a),d.h==0&&(d.src=null,c[Cn]=null)):B(a)}}}function Lf(a){return a in wu?wu[a]:wu[a]="on"+a}function aT(a,c){if(a.da)a=!0;else{c=new Ue(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Tu(a),a=d.call(m,c)}return a}function Iu(a){return a=a[Cn],a instanceof wt?a:null}var Su="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mf(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(c){return a.handleEvent(c)}),a[Su])}function We(){T.call(this),this.i=new wt(this),this.M=this,this.G=null}p(We,T),We.prototype[an]=!0,We.prototype.removeEventListener=function(a,c,d,m){Of(this,a,c,d,m)};function nt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var P=c;c=new S(m,a),vr(c,P)}P=!0;let N,j;if(d)for(j=d.length-1;j>=0;j--)N=c.g=d[j],P=Ko(N,m,!0,c)&&P;if(N=c.g=a,P=Ko(N,m,!0,c)&&P,P=Ko(N,m,!1,c)&&P,d)for(j=0;j<d.length;j++)N=c.g=d[j],P=Ko(N,m,!1,c)&&P}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)B(d[m]);delete a.g[c],a.h--}}this.G=null},We.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},We.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ko(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const j=c[N];if(j&&!j.da&&j.capture==d){const X=j.listener,Ne=j.ha||j.src;j.fa&&Er(a.i,j),P=X.call(Ne,m)!==!1&&P}}return P&&!m.defaultPrevented}function lT(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function bf(a){a.g=lT(()=>{a.g=null,a.i&&(a.i=!1,bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class uT extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(a){T.call(this),this.h=a,this.g={}}p(ss,T);var Ff=[];function Uf(a){G(a.g,function(c,d){this.g.hasOwnProperty(d)&&Tu(c)},a),a.g={}}ss.prototype.N=function(){ss.Z.N.call(this),Uf(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Au=o.JSON.stringify,cT=o.JSON.parse,hT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jf(){}function zf(){}var os={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ru(){S.call(this,"d")}p(Ru,S);function Cu(){S.call(this,"c")}p(Cu,S);var wr={},Bf=null;function Go(){return Bf=Bf||new We}wr.Ia="serverreachability";function $f(a){S.call(this,wr.Ia,a)}p($f,S);function as(a){const c=Go();nt(c,new $f(c))}wr.STAT_EVENT="statevent";function Hf(a,c){S.call(this,wr.STAT_EVENT,a),this.stat=c}p(Hf,S);function rt(a){const c=Go();nt(c,new Hf(c,a))}wr.Ja="timingevent";function qf(a,c){S.call(this,wr.Ja,a),this.size=c}p(qf,S);function ls(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function us(){this.g=!0}us.prototype.ua=function(){this.g=!1};function dT(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var j="",X=N.split("&");for(let le=0;le<X.length;le++){var Ne=X[le].split("=");if(Ne.length>1){const Le=Ne[0];Ne=Ne[1];const qt=Le.split("_");j=qt.length>=2&&qt[1]=="type"?j+(Le+"="+Ne+"&"):j+(Le+"=redacted&")}}}else j=null;else j=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+j})}function fT(a,c,d,m,P,N,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+j})}function ti(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+mT(a,d)+(m?" "+m:"")})}function pT(a,c){a.info(function(){return"TIMEOUT: "+c})}us.prototype.info=function(){};function mT(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return Au(N)}catch{return c}}var Qo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kf;function Pu(){}p(Pu,jf),Pu.prototype.g=function(){return new XMLHttpRequest},Kf=new Pu;function cs(a){return encodeURIComponent(String(a))}function gT(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Pn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Qf={},ku={};function Nu(a,c,d){a.M=1,a.A=Jo(Ht(c)),a.u=d,a.R=!0,Yf(a,null)}function Yf(a,c){a.F=Date.now(),Yo(a),a.B=Ht(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),up(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Gf,a.g=Cp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new uT(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ff[0]=P.toString()),P=Ff);for(let N=0;N<P.length;N++){const j=Vf(d,P[N],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),as(),dT(a.i,a.v,a.B,a.l,a.S,a.u)}Pn.prototype.ba=function(a){a=a.target;const c=this.O;c&&xn(a)==3?c.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const X=xn(this.g),Ne=this.g.ya(),le=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||gp(this.g)))){this.K||X!=4||Ne==7||(Ne==8||le<=0?as(3):as(2)),xu(this);var c=this.g.ca();this.X=c;var d=yT(this);if(this.o=c==200,fT(this.i,this.v,this.B,this.l,this.S,X,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var N=m;break t}}N=null}if(a=N)ti(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Du(this,a);else{this.o=!1,this.m=3,rt(12),Tr(this),hs(this);break e}}if(this.R){a=!0;let Le;for(;!this.K&&this.C<d.length;)if(Le=_T(this,d),Le==ku){X==4&&(this.m=4,rt(14),a=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Qf){this.m=4,rt(15),ti(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ti(this.i,this.l,Le,null),Du(this,Le);if(Jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||d.length!=0||this.h.h||(this.m=1,rt(16),a=!1),this.o=this.o&&a,!a)ti(this.i,this.l,d,"[Invalid Chunked Response]"),Tr(this),hs(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ju(j),j.P=!0,rt(11))}}else ti(this.i,this.l,d,null),Du(this,d);X==4&&Tr(this),this.o&&!this.K&&(X==4?Ip(this.j,this):(this.o=!1,Yo(this)))}else DT(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),Tr(this),hs(this)}}}catch{}finally{}};function yT(a){if(!Jf(a))return a.g.la();const c=gp(a.g);if(c==="")return"";let d="";const m=c.length,P=xn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tr(a),hs(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Jf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function _T(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?ku:(d=Number(c.substring(d,m)),isNaN(d)?Qf:(m+=1,m+d>c.length?ku:(c=c.slice(m,m+d),a.C=m+d,c)))}Pn.prototype.cancel=function(){this.K=!0,Tr(this)};function Yo(a){a.T=Date.now()+a.H,Xf(a,a.H)}function Xf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ls(h(a.aa,a),c)}function xu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Pn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(pT(this.i,this.B),this.M!=2&&(as(),rt(17)),Tr(this),this.m=2,hs(this)):Xf(this,this.T-a)};function hs(a){a.j.I==0||a.K||Ip(a.j,a)}function Tr(a){xu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Uf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Du(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Vu(d.h,a))){if(!a.L&&Vu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)na(d),ea(d);else break e;Uu(d),rt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ls(h(d.Va,d),6e3));tp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Sr(d,11)}else if((a.L||d.g==a)&&na(d),!w(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let le=P[c];const Le=le[0];if(!(Le<=d.K))if(d.K=Le,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const qt=le[3];qt!=null&&(d.ka=qt,d.j.info("VER="+d.ka));const Ar=le[4];Ar!=null&&(d.za=Ar,d.j.info("SVER="+d.za));const Dn=le[5];Dn!=null&&typeof Dn=="number"&&Dn>0&&(m=1.5*Dn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Vn=a.g;if(Vn){const ia=Vn.g?Vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var N=m.h;N.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ou(N,N.h),N.h=null))}if(m.G){const zu=Vn.g?Vn.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(m.wa=zu,he(m.J,m.G,zu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=Rp(m,m.L?m.ba:null,m.W),j.L){np(m.h,j);var X=j,Ne=m.O;Ne&&(X.H=Ne),X.D&&(xu(X),Yo(X)),m.g=j}else wp(m);d.i.length>0&&ta(d)}else le[0]!="stop"&&le[0]!="close"||Sr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Sr(d,7):Fu(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}as(4)}catch{}}var vT=class{constructor(a,c){this.g=a,this.map=c}};function Zf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ep(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tp(a){return a.h?1:a.g?a.g.size:0}function Vu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ou(a,c){a.g?a.g.add(c):a.h=c}function np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Zf.prototype.cancel=function(){if(this.i=rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof kn?(this.l=a.l,ds(this,a.j),this.o=a.o,this.g=a.g,fs(this,a.u),this.h=a.h,Lu(this,cp(a.i)),this.m=a.m):a&&(c=String(a).match(ip))?(this.l=!1,ds(this,c[1]||"",!0),this.o=ps(c[2]||""),this.g=ps(c[3]||"",!0),fs(this,c[4]),this.h=ps(c[5]||"",!0),Lu(this,c[6]||"",!0),this.m=ps(c[7]||"")):(this.l=!1,this.i=new gs(null,this.l))}kn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ms(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ms(c,sp,!0),"@"),a.push(cs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ms(d,d.charAt(0)=="/"?IT:TT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ms(d,AT)),a.join("")},kn.prototype.resolve=function(a){const c=Ht(this);let d=!!a.j;d?ds(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)fs(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let j=0;j<P.length;){const X=P[j++];X=="."?m&&j==P.length&&N.push(""):X==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&j==P.length&&N.push("")):(N.push(X),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?Lu(c,cp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ht(a){return new kn(a)}function ds(a,c,d){a.j=d?ps(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fs(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Lu(a,c,d){c instanceof gs?(a.i=c,RT(a.i,a.l)):(d||(c=ms(c,ST)),a.i=new gs(c,a.l))}function he(a,c,d){a.i.set(c,d)}function Jo(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ps(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ms(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,wT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,TT=/[#\?:]/g,IT=/[#\?]/g,ST=/[#\?@]/g,AT=/#/g;function gs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&ET(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=gs.prototype,t.add=function(a,c){Ir(this),this.i=null,a=ni(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function op(a,c){Ir(a),c=ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ap(a,c){return Ir(a),c=ni(a,c),a.g.has(c)}t.forEach=function(a,c){Ir(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function lp(a,c){Ir(a);let d=[];if(typeof c=="string")ap(a,c)&&(d=d.concat(a.g.get(ni(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ir(this),this.i=null,a=ni(this,a),ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=lp(this,a),a.length>0?String(a[0]):c):c};function up(a,c,d){op(a,c),d.length>0&&(a.i=null,a.g.set(ni(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=cs(d);d=lp(this,d);for(let N=0;N<d.length;N++){let j=P;d[N]!==""&&(j+="="+cs(d[N])),a.push(j)}}return this.i=a.join("&")};function cp(a){const c=new gs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function RT(a,c){c&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(op(this,m),up(this,P,d))},a)),a.j=c}function CT(a,c){const d=new us;if(o.Image){const m=new Image;m.onload=f(Nn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Nn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Nn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Nn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function PT(a,c){const d=new us,m=new AbortController,P=setTimeout(()=>{m.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function kT(){this.g=new hT}function Mu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Mu,jf),Mu.prototype.g=function(){return new Xo(this.i,this.h)};function Xo(a,c){We.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Xo,We),t=Xo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,_s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ys(this):_s(this),this.readyState==3&&hp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ys(this))},t.Na=function(a){this.g&&(this.response=a,ys(this))},t.ga=function(){this.g&&ys(this)};function ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_s(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function _s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dp(a){let c="";return G(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function bu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=dp(d),typeof a=="string"?d!=null&&cs(d):he(a,c,d))}function we(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,We);var NT=/^https?$/i,xT=["POST","PUT"];t=we.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){fp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(xT,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){fp(this,N)}};function fp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,pp(a),Zo(a)}function pp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,nt(this,"complete"),nt(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),we.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mp(this):this.Xa())},t.Xa=function(){mp(this)};function mp(a){if(a.h&&typeof s<"u"){if(a.v&&xn(a)==4)setTimeout(a.Ca.bind(a),0);else if(nt(a,"readystatechange"),xn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let j=String(a.D).match(ip)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!NT.test(j?j.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.o=6;try{var P=xn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",pp(a)}}finally{Zo(a)}}}}function Zo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||nt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return xn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),cT(c)}};function gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(a){const c={};a=(a.g&&xn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(w(a[m]))continue;var d=gT(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}J(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function yp(a){this.za=0,this.i=[],this.j=new us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vs("baseRetryDelayMs",5e3,a),this.Za=vs("retryDelaySeedMs",1e4,a),this.Ta=vs("forwardChannelMaxRetries",2,a),this.va=vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zf(a&&a.concurrentRequestLimit),this.Ba=new kT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=yp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){rt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Rp(this,null,this.W),ta(this)};function Fu(a){if(_p(a),a.I==3){var c=a.V++,d=Ht(a.J);if(he(d,"SID",a.M),he(d,"RID",c),he(d,"TYPE","terminate"),Es(a,d),c=new Pn(a,a.j,c),c.M=2,c.A=Jo(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Cp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Yo(c)}Ap(a)}function ea(a){a.g&&(ju(a),a.g.cancel(),a.g=null)}function _p(a){ea(a),a.v&&(o.clearTimeout(a.v),a.v=null),na(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ta(a){if(!ep(a.h)&&!a.m){a.m=!0;var c=a.Ea;V||y(),U||(V(),U=!0),_.add(c,a),a.D=0}}function VT(a,c){return tp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ls(h(a.Ea,a,c),Sp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Pn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=me(N),vr(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ep(this,P,c),d=Ht(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Es(this,d),N&&(this.R?c="headers="+cs(dp(N))+"&"+c:this.u&&bu(d,this.u,N)),Ou(this.h,P),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",c),he(d,"SID","null"),P.U=!0,Nu(P,d,null)):Nu(P,d,c),this.I=2}}else this.I==3&&(a?vp(this,a):this.i.length==0||ep(this.h)||vp(this))};function vp(a,c){var d;c?d=c.l:d=a.V++;const m=Ht(a.J);he(m,"SID",a.M),he(m,"RID",d),he(m,"AID",a.K),Es(a,m),a.u&&a.o&&bu(m,a.u,a.o),d=new Pn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ep(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ou(a.h,d),Nu(d,m,c)}function Es(a,c){a.H&&G(a.H,function(d,m){he(c,m,d)}),a.l&&G({},function(d,m){he(c,m,d)})}function Ep(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let X=-1;for(;;){const Ne=["count="+d];X==-1?d>0?(X=P[0].g,Ne.push("ofs="+X)):X=0:Ne.push("ofs="+X);let le=!0;for(let Le=0;Le<d;Le++){var N=P[Le].g;const qt=P[Le].map;if(N-=X,N<0)X=Math.max(0,P[Le].g-100),le=!1;else try{N="req"+N+"_"||"";try{var j=qt instanceof Map?qt:Object.entries(qt);for(const[Ar,Dn]of j){let Vn=Dn;l(Dn)&&(Vn=Au(Dn)),Ne.push(N+Ar+"="+encodeURIComponent(Vn))}}catch(Ar){throw Ne.push(N+"type="+encodeURIComponent("_badmap")),Ar}}catch{m&&m(qt)}}if(le){j=Ne.join("&");break e}}j=void 0}return a=a.i.splice(0,d),c.G=a,j}function wp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;V||y(),U||(V(),U=!0),_.add(c,a),a.A=0}}function Uu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ls(h(a.Da,a),Sp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Tp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ls(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),ea(this),Tp(this))};function ju(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tp(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ht(a.na);he(c,"RID","rpc"),he(c,"SID",a.M),he(c,"AID",a.K),he(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(c,"TO",a.ia),he(c,"TYPE","xmlhttp"),Es(a,c),a.u&&a.o&&bu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Jo(Ht(c)),d.u=null,d.R=!0,Yf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ea(this),Uu(this),rt(19))};function na(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ip(a,c){var d=null;if(a.g==c){na(a),ju(a),a.g=null;var m=2}else if(Vu(a.h,c))d=c.G,np(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=Go(),nt(m,new qf(m,d)),ta(a)}else wp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&VT(a,c)||m==2&&Uu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function Sp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Sr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new kn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ds(m,"https"),Jo(m),P?CT(m.toString(),d):PT(m.toString(),d)}else rt(2);a.I=0,a.l&&a.l.pa(c),Ap(a),_p(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ap(a){if(a.I=0,a.ja=[],a.l){const c=rp(a.h);(c.length!=0||a.i.length!=0)&&(k(a.ja,c),k(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Rp(a,c,d){var m=d instanceof kn?Ht(d):new kn(d);if(m.g!="")c&&(m.g=c+"."+m.g),fs(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new kn(null);m&&ds(N,m),c&&(N.g=c),P&&fs(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&he(m,d,c),he(m,"VER",a.ka),Es(a,m),m}function Cp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new we(new Mu({ab:d})):new we(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pp(){}t=Pp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ra(){}ra.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){We.call(this),this.g=new yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ri(this)}p(pt,We),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Fu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Au(a),a=d);c.i.push(new vT(c.Ya++,a)),c.I==3&&ta(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Fu(this.g),delete this.g,pt.Z.N.call(this)};function kp(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(kp,Ru);function Np(){Cu.call(this),this.status=1}p(Np,Cu);function ri(a){this.g=a}p(ri,Pp),ri.prototype.ra=function(){nt(this.g,"a")},ri.prototype.qa=function(a){nt(this.g,new kp(a))},ri.prototype.pa=function(a){nt(this.g,new Np)},ri.prototype.oa=function(){nt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,PE=function(){return new ra},CE=function(){return Go()},RE=wr,Nh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,Ha=Qo,Wf.COMPLETE="complete",AE=Wf,zf.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",We.prototype.listen=We.prototype.J,Ms=zf,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,SE=we}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="12.13.0";function iC(t){Xi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wr=new Bd("@firebase/firestore");function si(){return Wr.logLevel}function z(t,...e){if(Wr.logLevel<=re.DEBUG){const n=e.map(Zd);Wr.debug(`Firestore (${Xi}): ${t}`,...n)}}function In(t,...e){if(Wr.logLevel<=re.ERROR){const n=e.map(Zd);Wr.error(`Firestore (${Xi}): ${t}`,...n)}}function Kr(t,...e){if(Wr.logLevel<=re.WARN){const n=e.map(Zd);Wr.warn(`Firestore (${Xi}): ${t}`,...n)}}function Zd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,kE(t,r,n)}function kE(t,e,n){let r=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw In(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||kE(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new NE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,St(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function xh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return wc(i)===wc(s)?ee(i,s):wc(i)?1:-1}return ee(t.length,e.length)}const dC=55296,fC=57343;function wc(t){const e=t.charCodeAt(0);return e>=dC&&e<=fC}function $i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),i=Gt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class ue extends Gt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Gt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yg}static keyField(){return new Be([yg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(q.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function DE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function xi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function jo(t,e){if(!DE(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=-62135596800,wg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*wg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Eg)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wg}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jo(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:ke("string",fe._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new fe(0,0))}static max(){return new Q(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wo=-1;function gC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new ar(i,q.empty(),e)}function yC(t){return new ar(t.readTime,t.key,wo)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(Q.min(),q.empty(),wo)}static max(){return new ar(Q.max(),q.empty(),wo)}}function _C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==vC)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function es(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=-1;function uu(t){return t==null}function Pl(t){return t===0&&1/t==-1/0}function TC(t){return typeof t=="number"&&Number.isInteger(t)&&!Pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="";function IC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tg(e)),e=SC(t.get(n),e);return Tg(e)}function SC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case VE:n+="";break;default:n+=s}}return n}function Tg(t){return t+VE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Oe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class LE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LE("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=AC.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="server_timestamp",bE="__type__",FE="__previous_value__",UE="__local_write_time__";function nf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bE])==null?void 0:r.stringValue)===ME}function cu(t){const e=t.mapValue.fields[FE];return nf(e)?cu(e):e}function To(t){const e=lr(t.mapValue.fields[UE].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const kl="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||kl}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===kl}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}function CC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="__type__",PC="__max__",Aa={mapValue:{}},zE="__vector__",Nl="value";function cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nf(t)?4:NC(t)?9007199254740991:kC(t)?10:11:K(28295,{value:t})}function sn(t,e){if(t===e)return!0;const n=cr(t);if(n!==cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=lr(i.timestampValue),l=lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ur(i.bytesValue).isEqual(ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Pl(o)===Pl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ig(o)!==Ig(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!sn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function So(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=cr(t),r=cr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ag(t.timestampValue,e.timestampValue);case 4:return Ag(To(t),To(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ur(s),u=ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ee(l[h],u[h]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Se(s.latitude),Se(o.latitude));return l!==0?l:ee(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,k,D;const l=s.fields||{},u=o.fields||{},h=(g=l[Nl])==null?void 0:g.arrayValue,f=(A=u[Nl])==null?void 0:A.arrayValue,p=ee(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Rg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Aa.mapValue&&o===Aa.mapValue)return 0;if(s===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=xh(u[p],f[p]);if(g!==0)return g;const A=Hi(l[u[p]],h[f[p]]);if(A!==0)return A}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=lr(t),r=lr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Rg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Hi(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function qi(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dh(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function qa(t){switch(cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(t);return e?16+qa(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+qa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Jr(r.fields,(s,o)=>{i+=s.length+qa(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Cg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vh(t){return!!t&&"integerValue"in t}function rf(t){return!!t&&"arrayValue"in t}function Pg(t){return!!t&&"nullValue"in t}function kg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function kC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[jE])==null?void 0:r.stringValue)===zE}function Ys(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return{...t}}function NC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Ys(this.value))}}function BE(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new Be([n]);if(Wa(r)){const s=BE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,Q.min(),Q.min(),Q.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,Q.min(),Q.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Q.min(),Q.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xl{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $E{}class Pe extends $E{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VC(e,n,r):n==="array-contains"?new MC(e,r):n==="in"?new bC(e,r):n==="not-in"?new FC(e,r):n==="array-contains-any"?new UC(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OC(e,r):new LC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Hi(n,this.value)):n!==null&&cr(this.value)===cr(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends $E{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new $t(e,n)}matches(e){return HE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function HE(t){return t.op==="and"}function qE(t){return DC(t)&&HE(t)}function DC(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Oh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+qi(t.value);if(qE(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function WE(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof $t?function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&WE(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function KE(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${qi(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(KE).join(" ,")+"}"}(t):"Filter"}class VC extends Pe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class OC extends Pe{constructor(e,n){super(e,"in",n),this.keys=GE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LC extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=GE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class MC extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rf(n)&&So(n.arrayValue,this.value)}}class bC extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class FC extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class UC extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
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
 */class jC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jC(t,e,n,r,i,s,o)}function sf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qi(r)).join(",")),e.Te=n}return e.Te}function of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function Lh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function zC(t,e,n,r,i,s,o,l){return new zo(t,e,n,r,i,s,o,l)}function af(t){return new zo(t)}function Vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BC(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function QE(t){return t.collectionGroup!==null}function Js(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Dl(s,r))}),n.has(Be.keyField().canonicalString())||e.Ie.push(new Dl(Be.keyField(),r))}return e.Ie}function en(t){const e=Y(t);return e.Ee||(e.Ee=$C(e,Js(t))),e.Ee}function $C(t,e){if(t.limitType==="F")return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Dl(i.field,s)});const n=t.endAt?new xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xl(t.startAt.position,t.startAt.inclusive):null;return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mh(t,e){const n=t.filters.concat([e]);return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bh(t,e,n){return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hu(t,e){return of(en(t),en(e))&&t.limitType===e.limitType}function YE(t){return`${sf(en(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>KE(i)).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Js(r),i))}(t,e)}function HC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JE(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=qC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Hi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new ye(q.comparator);function Sn(){return WC}const XE=new ye(q.comparator);function bs(...t){let e=XE;for(const n of t)e=e.insert(n.key,n);return e}function ZE(t){let e=XE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Xs()}function ew(){return Xs()}function Xs(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const KC=new ye(q.comparator),GC=new Oe(q.comparator);function te(...t){let e=GC;for(const n of t)e=e.add(n);return e}const QC=new Oe(ee);function YC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pl(e)?"-0":e}}function tw(t){return{integerValue:""+t}}function JC(t,e){return TC(e)?tw(e):lf(t,e)}/**
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
 */class fu{constructor(){this._=void 0}}function XC(t,e,n){return t instanceof Vl?function(i,s){const o={fields:{[bE]:{stringValue:ME},[UE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nf(s)&&(s=cu(s)),s&&(o.fields[FE]=s),{mapValue:o}}(n,e):t instanceof Ao?rw(t,e):t instanceof Ro?iw(t,e):function(i,s){const o=nw(i,s),l=Og(o)+Og(i.Ae);return Vh(o)&&Vh(i.Ae)?tw(l):lf(i.serializer,l)}(t,e)}function ZC(t,e,n){return t instanceof Ao?rw(t,e):t instanceof Ro?iw(t,e):n}function nw(t,e){return t instanceof Ol?function(r){return Vh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vl extends fu{}class Ao extends fu{constructor(e){super(),this.elements=e}}function rw(t,e){const n=sw(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends fu{constructor(e){super(),this.elements=e}}function iw(t,e){let n=sw(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Ol extends fu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Og(t){return Se(t.integerValue||t.doubleValue)}function sw(t){return rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ao&&i instanceof Ao||r instanceof Ro&&i instanceof Ro?$i(r.elements,i.elements,sn):r instanceof Ol&&i instanceof Ol?sn(r.Ae,i.Ae):r instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class tP{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pu{}function ow(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uf(t.key,tn.none()):new Bo(t.key,t.data,tn.none());{const n=t.data,r=At.empty();let i=new Oe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new bt(i.toArray()),tn.none())}}function nP(t,e,n){t instanceof Bo?function(i,s,o){const l=i.value.clone(),u=Mg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(i,s,o){if(!Ka(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Bo?function(s,o,l,u){if(!Ka(s.precondition,o))return l;const h=s.value.clone(),f=bg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(s,o,l,u){if(!Ka(s.precondition,o))return l;const h=bg(s.fieldTransforms,u,o),f=o.data;return f.setAll(aw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ka(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nw(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function Lg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$i(r,i,(s,o)=>eP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ZC(o,l,n[i]))}return r}function bg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XC(s,o,e))}return r}class uf extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iP extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ew();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ow(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>Lg(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>Lg(n,r))}}class cf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return KC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cf(e,n,r,i)}}/**
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
 */class oP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ie;function lP(t){switch(t){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function lw(t){if(t===void 0)return In("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Re||(Re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uP(){return new TextEncoder}/**
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
 */const cP=new rr([4294967295,4294967295],0);function Fg(t){const e=uP().encode(t),n=new IE;return n.update(e),new Uint8Array(n.digest())}function Ug(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new rr([n,r],0),new rr([i,s],0)]}class hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(rr.fromNumber(r)));return i.compare(cP)===1&&(i=new rr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Fg(e),[r,i]=Ug(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Fg(e),[r,i]=Ug(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $o(Q.min(),i,new ye(ee),Sn(),te())}}class Ho{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ho(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class uw{constructor(e,n){this.targetId=e,this.Ce=n}}class cw{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jg{constructor(){this.ve=0,this.Fe=zg(),this.Me=qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Ho(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=zg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=Ra(),this.He=Ra(),this.Ze=new ye(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Lh(s))if(r===0){const o=new q(s.path);this.et(n,o,Xe.newNoDocument(o,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ur(r).toUint8Array()}catch(u){if(u instanceof LE)return Kr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hf(o,i,s)}catch(u){return Kr(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Lh(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Xe.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=te();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new $o(e,n,this.Ze,this.je,r);return this.je=Sn(),this.Je=Ra(),this.He=Ra(),this.Ze=new ye(ee),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new jg,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Oe(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Oe(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new jg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ra(){return new ye(q.comparator)}function zg(){return new ye(q.comparator)}const dP={asc:"ASCENDING",desc:"DESCENDING"},fP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pP={and:"AND",or:"OR"};class mP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fh(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gP(t,e){return Ll(t,e.toTimestamp())}function nn(t){return oe(!!t,49232),Q.fromTimestamp(function(n){const r=lr(n);return new fe(r.seconds,r.nanos)}(t))}function df(t,e){return Uh(t,e).canonicalString()}function Uh(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dw(t){const e=ue.fromString(t);return oe(yw(e),10190,{key:e.toString()}),e}function jh(t,e){return df(t.databaseId,e.path)}function Tc(t,e){const n=dw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(pw(n))}function fw(t,e){return df(t.databaseId,e)}function yP(t){const e=dw(t);return e.length===4?ue.emptyPath():pw(e)}function zh(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Bg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function _P(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),qe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:lw(h.code);return new $(f,h.message||"")}(o);n=new cw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tc(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Q.min(),l=new At({mapValue:{fields:r.document.fields}}),u=Xe.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ga(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tc(t,r.document),s=r.readTime?nn(r.readTime):Q.min(),o=Xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ga([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tc(t,r.document),s=r.removedTargetIds||[];n=new Ga([],s,i,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aP(i,s),l=r.targetId;n=new uw(l,o)}}return n}function vP(t,e){let n;if(e instanceof Bo)n={update:Bg(t,e.key,e.value)};else if(e instanceof uf)n={delete:jh(t,e.key)};else if(e instanceof Zr)n={update:Bg(t,e.key,e.data),updateMask:PP(e.fieldMask)};else{if(!(e instanceof iP))return K(16599,{dt:e.type});n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function EP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(Q.min())&&(o=nn(s)),new tP(o,i.transformResults||[])}(n,e))):[]}function wP(t,e){return{documents:[fw(t,e.path)]}}function TP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fw(t,i);const s=function(h){if(h.length!==0)return gw($t.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ai(g.field),direction:AP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Fh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function IP(t){let e=yP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=mw(p);return g instanceof $t&&qE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Dl(li(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,uu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new xl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new xl(A,g)}(n.endAt)),zC(e,i,o,s,l,"F",u,h)}function SP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=li(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=li(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>mw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function AP(t){return dP[t]}function RP(t){return fP[t]}function CP(t){return pP[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return Be.fromServerFormat(t.fieldPath)}function gw(t){return t instanceof Pe?function(n){if(n.op==="=="){if(kg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(Pg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(Pg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:RP(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(i=>gw(i));return r.length===1?r[0]:{compositeFilter:{op:CP(n.op),filters:r}}}(t):K(54877,{filter:t})}function PP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function _w(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.yt=e}}function NP(t){const e=IP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
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
 */class xP{constructor(){this.bn=new DP}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class DP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ue.comparator)).toArray()}}/**
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
 */const $g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vw=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(vw,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new hr(0)}static ar(){return new hr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="LruGarbageCollector",VP=1048576;function qg([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class OP{constructor(e){this.Pr=e,this.buffer=new Oe(qg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){z(Hg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){es(n)?z(Hg,"Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Ar(3e5)})}}class MP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(lu.ce);const r=new OP(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve($g)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$g):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),si()<=re.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function bP(t,e){return new MP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,bt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Sn();const o=Xs(),l=function(){return Xs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Zr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Zs(f.mutation,h,f.mutation.getFieldMask(),fe.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new UP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new ye((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=ew();f.forEach(g=>{if(!s.has(g)){const A=ow(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return BC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Dr());let l=wo,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:ZE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=bs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new zo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Xe.newInvalidDocument(f)))});let l=bs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Zs(f.mutation,h,bt.empty(),fe.now()),du(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:NP(i.bundledQuery),readTime:nn(i.readTime)}}(n)),L.resolve()}}/**
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
 */class BP{constructor(){this.overlays=new ye(q.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Dr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oP(n,r));let s=this.Lr.get(n);s===void 0&&(s=te(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class $P{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.kr=new Oe(Me.Kr),this.qr=new Oe(Me.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Me(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new ue([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new ue([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return q.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Oe(Me.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?tf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(ee);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new q(s),0);let l=new Oe(ee);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Me(n,0),i=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.ti=e,this.docs=function(){return new ye(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_C(yC(f),r)<=0||(i.has(f.key)||du(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WP(this)}getSize(e){return L.resolve(this.size)}}class WP extends FP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.persistence=e,this.ri=new Xr(n=>sf(n),of),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new ff,this.targetCount=0,this.oi=hr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new hr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this._i={},this.overlays={},this.ai=new lu(0),this.ui=!1,this.ui=!0,this.ci=new $P,this.referenceDelegate=e(this),this.li=new KP(this),this.indexManager=new xP,this.remoteDocumentCache=function(i){return new qP(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new kP(n),this.Pi=new zP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new HP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new GP(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class GP extends EC{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Ri=new ff,this.Ai=null}static Vi(e){return new pf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ml{constructor(e,n){this.persistence=e,this.fi=new Xr(r=>IC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=bP(this,n)}static Vi(e,n){return new Ml(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qa(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mf(e,n.fromCache,r,i)}}/**
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
 */class QP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return IS()?8:wC(et())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QP;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(si()<=re.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(si()<=re.DEBUG&&z("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(si()<=re.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):L.resolve())}gs(e,n){if(Vg(n))return L.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bh(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,bh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Vg(n)||i.isEqual(Q.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?L.resolve(null):(si()<=re.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oi(n)),this.Ds(e,o,n,gC(i,wo)).next(l=>l))})}Ss(e,n){let r=new Oe(JE(e));return n.forEach((i,s)=>{du(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return si()<=re.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",oi(n)),this.fs.getDocumentsMatchingQuery(e,n,ar.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LocalStore",JP=3e8;class XP{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ye(ee),this.Fs=new Xr(s=>sf(s),of),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function ZP(t,e,n,r){return new XP(t,e,n,r)}async function ww(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function ek(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=L.resolve();return g.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(D=>{const b=h.docVersions.get(k);oe(b!==null,48541),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Tw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function tk(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(qe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(D,b,I){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=JP?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.li.updateTargetData(s,A))});let u=Sn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(nk(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Q.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function nk(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(gf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function rk(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=tf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ik(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Bh(t,e,n){const r=Y(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!es(o))throw o;z(gf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Wg(t,e,n){const r=Y(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),g=p.Fs.get(f);return g!==void 0?L.resolve(p.vs.get(g)):p.li.getTargetData(h,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(l=>(sk(r,HC(e),l),{documents:l,ks:s})))}function sk(t,e,n){let r=t.Ms.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Kg{constructor(){this.activeTargetIds=YC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ok{constructor(){this.vo=new Kg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ak{Mo(e){}shutdown(){}}/**
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
 */const Gg="ConnectivityMonitor";class Qg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){z(Gg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){z(Gg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ca=null;function $h(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="RestConnection",lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uk{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===kl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=$h(),l=this.Qo(e,n.toUriEncodedString());z(Ic,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=Lo(h);return this.zo(e,l,u,r,f).then(p=>(z(Ic,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Kr(Ic,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=lk[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection",ks=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Di extends uk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Di.c_){const e=CE();ks(e,RE.STAT_EVENT,n=>{n.stat===Nh.PROXY?z(Qe,"STAT_EVENT: detected buffering proxy"):n.stat===Nh.NOPROXY&&z(Qe,"STAT_EVENT: detected no buffering proxy")}),Di.c_=!0}}zo(e,n,r,i,s){const o=$h();return new Promise((l,u)=>{const h=new SE;h.setWithCredentials(!0),h.listenOnce(AE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ha.NO_ERROR:const p=h.getResponseJson();z(Qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ha.TIMEOUT:z(Qe,`RPC '${e}' ${o} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const g=h.getStatus();if(z(Qe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const D=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(k.status);u(new $(D,k.message))}else u(new $(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(Qe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(Qe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=$h(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");z(Qe,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,g=!1;const A=new ck({Jo:k=>{g?z(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(z(Qe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),z(Qe,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ho:()=>f.close()});return ks(f,Ms.EventType.OPEN,()=>{g||(z(Qe,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),ks(f,Ms.EventType.CLOSE,()=>{g||(g=!0,z(Qe,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(f))}),ks(f,Ms.EventType.ERROR,k=>{g||(g=!0,Kr(Qe,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),A.o_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),ks(f,Ms.EventType.MESSAGE,k=>{var D;if(!g){const b=k.data[0];oe(!!b,16349);const I=b,E=(I==null?void 0:I.error)||((D=I[0])==null?void 0:D.error);if(E){z(Qe,`RPC '${e}' stream ${i} received error:`,E);const R=E.status;let M=function(_){const y=Re[_];if(y!==void 0)return lw(y)}(R),V=E.message;R==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Kr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=O.INTERNAL,V="Unknown error status: "+R+" with message "+E.message),g=!0,A.o_(new $(M,V)),f.close()}else z(Qe,`RPC '${e}' stream ${i} received:`,b),A.__(b)}}),Di.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return PE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return new Di(t)}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){return new mP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.c_=!1;class Iw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="PersistentStream";class Sw{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Iw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return z(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(z(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends Sw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_P(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?nn(o.readTime):Q.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=zh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Lh(u)?{documents:wP(s,u)}:{query:TP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hw(s,o.resumeToken);const h=Fh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ll(s,o.snapshotVersion.toTimestamp());const h=Fh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=SP(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=zh(this.serializer),n.removeTarget=e,this.K_(n)}}class fk extends Sw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=EP(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=zh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vP(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{}class mk extends pk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Uh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Uh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gk(t,e,n,r){return new mk(t,e,n,r)}class yk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(In(n),this.aa=!1):z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="RemoteStore";class _k{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new hr(1e3),this.Va=new hr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ei(this)&&(z(on,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.da.add(4),await qo(h),h.ga.set("Unknown"),h.da.delete(4),await gu(h)}(this))})}),this.ga=new yk(r,i)}}async function gu(t){if(ei(t))for(const e of t.ma)await e(!0)}async function qo(t){for(const e of t.ma)await e(!1)}function Hh(t,e){return t.Ea.get(e)||void 0}function Aw(t,e){const n=Y(t),r=Hh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const h=Hh(l,u);h!==void 0&&l.Ra.delete(h);const f=function(g,A){return A%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);z(on,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new pn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Ef(n)?vf(n):ts(n).O_()&&_f(n,s)}function yf(t,e){const n=Y(t),r=ts(n),i=Hh(n,e);z(on,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&Rw(n,i),n.Ia.size===0&&(r.O_()?r.L_():ei(n)&&n.ga.set("Unknown"))}function _f(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void z(on,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ts(t).Z_(e)}function Rw(t,e){t.pa.$e(e),ts(t).X_(e)}function vf(t){t.pa=new hP({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.ga.ua()}function Ef(t){return ei(t)&&!ts(t).x_()&&t.Ia.size>0}function ei(t){return Y(t).da.size===0}function Cw(t){t.pa=void 0}async function vk(t){t.ga.set("Online")}async function Ek(t){t.Ia.forEach((e,n)=>{_f(t,e)})}async function wk(t,e){Cw(t),Ef(t)?(t.ga.ha(e),vf(t)):t.ga.set("Unknown")}async function Tk(t,e,n){if(t.ga.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){z(on,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ga?t.pa.Xe(e):e instanceof uw?t.pa.st(e):t.pa.tt(e),!n.isEqual(Q.min()))try{const r=await Tw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.Ia.get(f);p&&s.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=s.Ia.get(h);if(!p)return;s.Ia.set(h,p.withResumeToken(qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Rw(s,h);const g=new pn(p.target,h,f,p.sequenceNumber);_f(s,g)});const u=function(f,p){const g=new Map;p.targetChanges.forEach((k,D)=>{const b=f.Ra.get(D);b!==void 0&&g.set(b,k)});let A=new ye(ee);return p.targetMismatches.forEach((k,D)=>{const b=f.Ra.get(k);b!==void 0&&(A=A.insert(b,D))}),new $o(p.snapshotVersion,g,A,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){z(on,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!es(e))throw e;t.da.add(1),await qo(t),t.ga.set("Offline"),n||(n=()=>Tw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(on,"Retrying IndexedDB access"),await n(),t.da.delete(1),await gu(t)})}function Pw(t,e){return e().catch(n=>bl(t,n,e))}async function yu(t){const e=Y(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:tf;for(;Ik(e);)try{const i=await rk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Sk(e,i)}catch(i){await bl(e,i)}kw(e)&&Nw(e)}function Ik(t){return ei(t)&&t.Ta.length<10}function Sk(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function kw(t){return ei(t)&&!dr(t).x_()&&t.Ta.length>0}function Nw(t){dr(t).start()}async function Ak(t){dr(t).ra()}async function Rk(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Ck(t,e,n){const r=t.Ta.shift(),i=cf.from(r,e,n);await Pw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yu(t)}async function Pk(t,e){e&&dr(t).Y_&&await async function(r,i){if(function(o){return lP(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();dr(r).B_(),await Pw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yu(r)}}(t,e),kw(t)&&Nw(t)}async function Jg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),z(on,"RemoteStore received new credentials");const r=ei(n);n.da.add(3),await qo(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await gu(n)}async function kk(t,e){const n=Y(t);e?(n.da.delete(2),await gu(n)):e||(n.da.add(2),await qo(n),n.ga.set("Unknown"))}function ts(t){return t.ya||(t.ya=function(n,r,i){const s=Y(n);return s.sa(),new dk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:vk.bind(null,t),Yo:Ek.bind(null,t),t_:wk.bind(null,t),H_:Tk.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Ef(t)?vf(t):t.ga.set("Unknown")):(await t.ya.stop(),Cw(t))})),t.ya}function dr(t){return t.wa||(t.wa=function(n,r,i){const s=Y(n);return s.sa(),new fk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ak.bind(null,t),t_:Pk.bind(null,t),ta:Rk.bind(null,t),na:Ck.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await yu(t)):(await t.wa.stop(),t.Ta.length>0&&(z(on,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new wf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(In("AsyncQueue",`${e}: ${t}`),es(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{static emptySet(e){return new Vi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=bs(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.Sa=new ye(q.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Wi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Wi(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class xk{constructor(){this.queries=Zg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Zg(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function Zg(){return new Xr(t=>YE(t),hu)}async function Dk(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new Nk,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tf(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&If(n)}async function Vk(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ok(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&If(n)}function Lk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function If(t){t.xa.forEach(e=>{e.next()})}var qh,ey;(ey=qh||(qh={})).Ba="default",ey.Cache="cache";class Mk{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==qh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class bk{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=JE(e),this.su=new Vi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Xg,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=du(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;g&&A?g.data.isEqual(A.data)?k!==D&&(r.track({type:3,doc:A}),b=!0):this.uu(g,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.iu(A,u)>0||h&&this.iu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),b=!0):g&&!A&&(r.track({type:1,doc:g}),b=!0,(u||h)&&(l=!0)),b&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(A,k){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:b})}};return D(A)-D(k)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new Wi(this.query,e.su,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Xg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new Dw(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new xw(r))}),n}Tu(e){this.tu=e.ks,this.ru=te();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Wi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Sf="SyncEngine";class Fk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Uk{constructor(e){this.key=e,this.Eu=!1}}class jk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Xr(l=>YE(l),hu),this.Vu=new Map,this.du=new Set,this.mu=new ye(q.comparator),this.fu=new Map,this.gu=new ff,this.pu={},this.yu=new Map,this.wu=hr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function zk(t,e,n=!0){const r=Fw(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await Vw(r,e,n,!0),i}async function Bk(t,e){const n=Fw(t);await Vw(n,e,!0,!1)}async function Vw(t,e,n,r){const i=await ik(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await $k(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Aw(t.remoteStore,i),l}async function $k(t,e,n,r,i){t.bu=(p,g,A)=>async function(D,b,I,E){let R=b.view._u(I);R.bs&&(R=await Wg(D.localStore,b.query,!1).then(({documents:_})=>b.view._u(_,R)));const M=E&&E.targetChanges.get(b.targetId),V=E&&E.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(R,D.isPrimaryClient,M,V);return ny(D,b.targetId,U.hu),U.snapshot}(t,p,g,A);const s=await Wg(t.localStore,e,!0),o=new bk(e,s.ks),l=o._u(s.documents),u=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ny(t,n,h.hu);const f=new Fk(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function Hk(t,e,n){const r=Y(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!hu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yf(r.remoteStore,i.targetId),Wh(r,i.targetId)}).catch(Zi)):(Wh(r,i.targetId),await Bh(r.localStore,i.targetId,!0))}async function qk(t,e){const n=Y(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yf(n.remoteStore,r.targetId))}async function Wk(t,e,n){const r=Zk(t);try{const i=await function(o,l){const u=Y(o),h=fe.now(),f=l.reduce((A,k)=>A.add(k.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=Sn(),D=te();return u.xs.getEntries(A,f).next(b=>{k=b,k.forEach((I,E)=>{E.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(b=>{p=b;const I=[];for(const E of l){const R=rP(E,p.get(E.key).overlayedDocument);R!=null&&I.push(new Zr(E.key,R,BE(R.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(b=>{g=b;const I=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(A,b.batchId,I)})}).then(()=>({batchId:g.batchId,changes:ZE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new ye(ee)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Wo(r,i.changes),await yu(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function Ow(t,e){const n=Y(t);try{const r=await tk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?oe(o.Eu,14607):i.removedDocuments.size>0&&(oe(o.Eu,42227),o.Eu=!1))}),await Wo(n,r,e)}catch(r){await Zi(r)}}function ty(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.va)g.Oa(l)&&(h=!0)}),h&&If(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new ye(q.comparator);o=o.insert(s,Xe.newNoDocument(s,Q.min()));const l=te().add(s),u=new $o(Q.min(),new Map,new ye(ee),o,l);await Ow(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),Af(r)}else await Bh(r.localStore,e,!1).then(()=>Wh(r,e,n)).catch(Zi)}async function Gk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ek(n.localStore,e);Mw(n,r,null),Lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await Zi(i)}}async function Qk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Mw(r,e,n),Lw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await Zi(i)}}function Lw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function Mw(t,e,n){const r=Y(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||bw(t,r)})}function bw(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(yf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Af(t))}function ny(t,e,n){for(const r of n)r instanceof xw?(t.gu.addReference(r.key,e),Yk(t,r)):r instanceof Dw?(z(Sf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||bw(t,r.key)):K(19791,{Cu:r})}function Yk(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(z(Sf,"New document in limbo: "+n),t.du.add(r),Af(t))}function Af(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new q(ue.fromString(e)),r=t.wu.next();t.fu.set(r,new Uk(n)),t.mu=t.mu.insert(n,r),Aw(t.remoteStore,new pn(en(af(n.path)),r,"TargetPurposeLimboResolution",lu.ce))}}async function Wo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=mf.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Ts,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>L.forEach(g.Is,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!es(p))throw p;z(gf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.vs.get(g),k=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(g,D)}}}(r.localStore,s))}async function Jk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){z(Sf,"User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.Ns)}}function Xk(t,e){const n=Y(t),r=n.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let i=te();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function Fw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kk.bind(null,e),e.Ru.H_=Ok.bind(null,e.eventManager),e.Ru.Du=Lk.bind(null,e.eventManager),e}function Zk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qk.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return ZP(this.persistence,new YP,e.initialUser,this.serializer)}xu(e){return new Ew(pf.Vi,this.serializer)}Mu(e){return new ok}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class eN extends Fl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){oe(this.persistence.referenceDelegate instanceof Ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LP(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Ew(r=>Ml.Vi(r,n),this.serializer)}}class Kh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ty(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jk.bind(null,this.syncEngine),await kk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xk}()}createDatastore(e){const n=mu(e.databaseInfo.databaseId),r=hk(e.databaseInfo);return gk(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _k(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ty(this.syncEngine,n,0),function(){return Qg.v()?new Qg:new ak}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new jk(i,s,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);z(on,"RemoteStore shutting down."),s.da.add(5),await qo(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Kh.provider={build:()=>new Kh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="FirestoreClient";class nN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ac(t,e){t.asyncQueue.verifyOperationInProgress(),z(fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rN(t);z(fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jg(e.remoteStore,i)),t._onlineComponents=e}async function rN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(fr,"Using user provided OfflineComponentProvider");try{await Ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await Ac(t,new Fl)}}else z(fr,"Using default OfflineComponentProvider"),await Ac(t,new eN(void 0));return t._offlineComponents}async function Uw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(fr,"Using user provided OnlineComponentProvider"),await ry(t,t._uninitializedComponentsProvider._online)):(z(fr,"Using default OnlineComponentProvider"),await ry(t,new Kh))),t._onlineComponents}function iN(t){return Uw(t).then(e=>e.syncEngine)}async function iy(t){const e=await Uw(t),n=e.eventManager;return n.onListen=zk.bind(null,e.syncEngine),n.onUnlisten=Hk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Bk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qk.bind(null,e.syncEngine),n}function sN(t,e,n,r){const i=new tN(r),s=new Mk(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Dk(await iy(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>Vk(await iy(t),s))}}function oN(t,e){const n=new Lr;return t.asyncQueue.enqueueAndForget(async()=>Wk(await iN(t),e,n)),n.promise}/**
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
 */function jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="ComponentProvider",sy=new Map;function lN(t,e,n,r,i){return new RC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,jw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",oy=!0;class ay{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=oy}else this.host=e.host,this.ssl=e.ssl??oy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VP)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sC;switch(r.type){case"firstParty":return new uC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sy.get(n);r&&(z(aN,"Removing Datastore"),sy.delete(n),r.terminate())}(this),Promise.resolve()}}function uN(t,e,n,r={}){var h;t=xi(t,_u);const i=Lo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Mv(`https://${l}`),s.host!==zw&&s.host!==l&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Br(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ye.MOCK_USER;else{f=gS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(g)}t._authCredentials=new oC(new NE(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(jo(n,Ve._jsonSchema))return new Ve(e,r||null,new q(ue.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:ke("string",Ve._jsonSchemaVersion),referencePath:ke("string")};class ir extends ns{constructor(e,n,r){super(e,n,af(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new q(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Bw(t,e,...n){if(t=tt(t),xE("collection","path",e),t instanceof _u){const r=ue.fromString(e,...n);return vg(r),new ir(t,null,r)}{if(!(t instanceof Ve||t instanceof ir))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return vg(r),new ir(t.firestore,null,r)}}function $w(t,e,...n){if(t=tt(t),arguments.length===1&&(e=ef.newId()),xE("doc","path",e),t instanceof _u){const r=ue.fromString(e,...n);return _g(r),new Ve(t,null,new q(r))}{if(!(t instanceof Ve||t instanceof ir))throw new $(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return _g(r),new Ve(t.firestore,t instanceof ir?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="AsyncQueue";class uy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Iw(this,"async_queue_retry"),this.lc=()=>{const r=Sc();r&&z(ly,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Lr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!es(e))throw e;z(ly,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,In("INTERNAL UNHANDLED ERROR: ",cy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=wf.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&K(47125,{Rc:cy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function cy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Co extends _u{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uy(e),this._firestoreClient=void 0,await e}}}function cN(t,e){const n=typeof t=="object"?t:jv(),r=typeof t=="string"?t:kl,i=Hd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=pS("firestore");s&&uN(i,...s)}return i}function Hw(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hN(t),t._firestoreClient}function hN(t){var r,i,s,o;const e=t._freezeSettings(),n=lN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(qe.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jo(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:ke("string",Rt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(jo(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:ke("string",rn._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class jt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jo(e,jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new jt(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:ke("string",jt._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=/^__.*__$/;class fN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}function Kw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class Rf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Rf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ul(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Kw(this.dataSource)&&dN.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class pN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mu(e)}V(e,n,r,i=!1){return new Rf({dataSource:e,methodName:n,targetDoc:r,path:Be.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gw(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new pN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mN(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Jw("Data must be an object, but it was:",o,r);const l=Qw(r,o);let u,h;if(s.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=vu(e,p,n);if(!o.contains(g))throw new $(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);vN(f,g)||f.push(g)}u=new bt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new fN(new At(l),u,h)}function gN(t,e,n,r=!1){return Cf(n,t.V(r?4:3,e))}function Cf(t,e){if(Yw(t=tt(t)))return Jw("Unsupported field value:",e,t),Qw(t,e);if(t instanceof Ww)return function(r,i){if(!Kw(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Cf(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Ll(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(i.serializer,s)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:hw(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:df(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jt)return function(o,l){const u=o instanceof jt?o.toArray():o;return{mapValue:{fields:{[jE]:{stringValue:zE},[Nl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return lf(l.serializer,f)})}}}}}}(r,i);if(_w(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${au(r)}`)}(t,e)}function Qw(t,e){const n={};return OE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=Cf(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Yw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof rn||t instanceof Rt||t instanceof Ve||t instanceof Ww||t instanceof jt||_w(t))}function Jw(t,e,n){if(!Yw(n)||!DE(n)){const r=au(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function vu(t,e,n){if((e=tt(e))instanceof qw)return e._internalPath;if(typeof e=="string")return _N(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const yN=new RegExp("[~\\*/\\[\\]]");function _N(t,e,n){if(e.search(yN)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qw(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function vN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{convertValue(e,n="none"){switch(cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Nl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Se(o.doubleValue));return new jt(n)}convertGeoPoint(e){return new rn(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=lr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(yw(r),9688,{name:e});const i=new Io(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||In(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Xw extends EN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}const hy="@firebase/firestore",dy="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wN extends Zw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class IN extends Pf{}function SN(t,e,...n){let r=[];e instanceof Pf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof kf).length,l=s.filter(u=>u instanceof Eu).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Eu extends IN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eu(e,n,r)}_apply(e){const n=this._parse(e);return eT(e._query,n),new ns(e.firestore,e.converter,Mh(e._query,n))}_parse(e){const n=Gw(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){my(p,f);const k=[];for(const D of p)k.push(py(u,s,D));g={arrayValue:{values:k}}}else g=py(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||my(p,f),g=gN(l,o,p,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function AN(t,e,n){const r=e,i=vu("where",t);return Eu._create(i,r,n)}class kf extends Pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)eT(o,u),o=Mh(o,u)}(e._query,n),new ns(e.firestore,e.converter,Mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function py(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QE(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!q.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cg(t,new q(r))}if(n instanceof Ve)return Cg(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function my(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function RN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mr extends Zw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mr._jsonSchema={type:ke("string",Mr._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Qa extends Mr{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:ke("string",Oi._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};function PN(t){return tT(xi(t.firestore,Co),[new uf(t._key,tn.none())])}function kN(t,e){const n=xi(t.firestore,Co),r=$w(t),i=RN(t.converter,e),s=Gw(t.firestore);return tT(n,[mN(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function NN(t,...e){var h,f,p;t=tt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||fy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(fy(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,l;if(t instanceof Ve)o=xi(t.firestore,Co),l=af(t._key.path),s={next:g=>{e[r]&&e[r](xN(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=xi(t,ns);o=xi(g.firestore,Co),l=g._query;const A=new Xw(o);s={next:k=>{e[r]&&e[r](new Oi(o,A,g,k))},error:e[r+1],complete:e[r+2]},TN(t._query)}const u=Hw(o);return sN(u,l,i,s)}function tT(t,e){const n=Hw(t);return oN(n,e)}function xN(t,e,n){const r=n.docs.get(e._key),i=new Xw(t);return new Mr(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){iC(Yi),Bi(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Co(new aC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),CC(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(hy,dy,e),nr(hy,dy,"esm2020")})();const DN={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},nT=Uv(DN),Nf=cN(nT),jl=eC(nT),rT=Z.createContext(null);function VN({children:t}){const[e,n]=Z.useState(null),[r,i]=Z.useState(!0);Z.useEffect(()=>BR(jl,l=>{n(l),i(!1)}),[]);const s=async()=>{await $R(jl)};return x.jsx(rT.Provider,{value:{user:e,loading:r,logout:s},children:t})}function xf(){const t=Z.useContext(rT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const ON=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
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
`,Rc="reply-ai-history";function LN(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const i=r.indexOf("=");if(i===-1)continue;const s=r.slice(0,i).trim(),o=r.slice(i+1).trim(),[l]=s.split(".");e[l]&&e[l].push(o)}return e}const gy=LN(ON);function MN(){const[t,e]=Z.useState(""),[n,r]=Z.useState("funny"),[i,s]=Z.useState(""),[o,l]=Z.useState(!1),[u,h]=Z.useState(""),[f,p]=Z.useState(()=>{const b=localStorage.getItem(Rc);return b?JSON.parse(b):[]}),g=Z.useCallback(async b=>{if(!t.trim()){h("Pega un mensaje primero");return}l(!0),h("");const I=typeof b=="string"?b:n,E=gy[I]||gy.elegant,R=E[Math.floor(Math.random()*E.length)];await new Promise(U=>setTimeout(U,300)),s(R);const V=[{message:t,reply:R,mode:I,date:new Date().toISOString()},...f].slice(0,50);p(V),localStorage.setItem(Rc,JSON.stringify(V)),l(!1)},[t,n,f]),A=Z.useCallback(()=>{i&&(e(i),g("funny"))},[i,g]),k=Z.useCallback(b=>{const I=`https://wa.me/?text=${encodeURIComponent(b)}`;window.open(I,"_blank")},[]),D=Z.useCallback(()=>{p([]),localStorage.removeItem(Rc)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:i,setResponse:s,loading:o,error:u,history:f,generate:g,makeFunnier:A,sendToWhatsApp:k,clearHistory:D}}const Df="birthdays";function bN(t,e,n){const r=SN(Bw(Nf,Df),AN("userId","==",t));return NN(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));e(s)},i=>{console.error("Firestore subscribe error:",i),n&&n(i)})}async function FN({name:t,date:e,gender:n,phone:r},i){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:i,createdAt:new Date().toISOString()};return{id:(await kN(Bw(Nf,Df),o)).id,...o}}async function UN(t){await PN($w(Nf,Df,t))}function jN(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function zN(){const{user:t}=xf(),[e,n]=Z.useState([]),[r,i]=Z.useState([]),[s,o]=Z.useState("");Z.useEffect(()=>t?(o(""),bN(t.uid,g=>{n(g)},g=>{o("Error al cargar amigos: "+Cc(g))})):void 0,[t]),Z.useEffect(()=>{const p=jN(),g=e.filter(A=>A.date===p);i(g)},[e]);const l=Z.useCallback(async(p,g,A,k)=>{if(t){o("");try{await FN({name:p,date:g,gender:A,phone:k},t.uid)}catch(D){o("Error al añadir amigo: "+Cc(D))}}},[t]),u=Z.useCallback(async p=>{o("");try{await UN(p)}catch(g){o("Error al eliminar amigo: "+Cc(g))}},[]),h=Z.useCallback(p=>{let g;p.gender==="male"?g=`¡Feliz cumpleaños, amigo ${p.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:p.gender==="female"?g=`¡Feliz cumpleaños, amiga ${p.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:g=`¡Feliz cumpleaños, ${p.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const A=p.phone?p.phone.replace(/[^0-9]/g,""):"",k=A?`https://wa.me/${A}?text=${encodeURIComponent(g)}`:`https://wa.me/?text=${encodeURIComponent(g)}`;window.open(k,"_blank")},[]),f=Z.useCallback(p=>{const g=p.gender==="male"?"lo":p.gender==="female"?"la":"le",A=`📅 Recordatorio: Hoy es el cumpleaños de ${p.name}! No olvides felicit${g}. 🎂🎉`,k=`https://wa.me/?text=${encodeURIComponent(A)}`;window.open(k,"_blank")},[]);return{friends:e,todayBirthdays:r,error:s,addFriend:l,removeFriend:u,sendGreeting:h,sendReminder:f}}function Cc(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}function BN(){const[t,e]=Z.useState(""),[n,r]=Z.useState(""),[i,s]=Z.useState(!1),[o,l]=Z.useState(""),[u,h]=Z.useState(!1),f=async p=>{p.preventDefault(),l(""),h(!0);try{i?await FR(jl,t,n):await UR(jl,t,n)}catch(g){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[g.code]||g.code)}finally{h(!1)}};return x.jsx("div",{className:"login-screen",children:x.jsxs("div",{className:"login-card",children:[x.jsx("div",{className:"login-logo",children:"💬"}),x.jsx("h1",{className:"login-title",children:"Reply AI"}),x.jsx("p",{className:"login-subtitle",children:i?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),x.jsxs("form",{className:"login-form",onSubmit:f,children:[x.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:p=>e(p.target.value),required:!0}),x.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:p=>r(p.target.value),required:!0,minLength:6}),o&&x.jsx("p",{className:"error",children:o}),x.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?x.jsx("span",{className:"loading-spinner"}):i?"Crear cuenta":"Iniciar sesión"})]}),x.jsxs("p",{className:"login-toggle",children:[i?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",x.jsx("button",{className:"login-toggle-btn",onClick:()=>{s(!i),l("")},children:i?"Inicia sesión":"Regístrate"})]})]})})}function $N({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return x.jsxs("div",{className:"input-box",children:[x.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),x.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),x.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),x.jsx("path",{d:"M12 11h4"}),x.jsx("path",{d:"M12 16h4"}),x.jsx("path",{d:"M8 11h.01"}),x.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const HN=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function qN({selected:t,onSelect:e}){return x.jsx("div",{className:"modes",children:HN.map(n=>x.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[x.jsx("span",{className:"mode-emoji",children:n.icon}),x.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function WN({onClick:t,loading:e}){return x.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?x.jsx("span",{className:"loading-spinner"}):x.jsxs(x.Fragment,{children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("path",{d:"M12 3v18"}),x.jsx("path",{d:"M5 10l7-7 7 7"}),x.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const yy={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function KN({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:i}){if(!t)return null;const s=yy[e]||yy.funny;return x.jsxs("div",{className:"response-card fade-in",children:[x.jsxs("div",{className:"response-header",children:[x.jsx("span",{className:"response-mode-icon",children:s.emoji}),x.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",s.label]})]}),x.jsx("p",{className:"response-text",children:t}),x.jsxs("div",{className:"response-actions",children:[x.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[x.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:x.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),x.jsxs("button",{className:"action-btn",onClick:r,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("polyline",{points:"23 4 23 10 17 10"}),x.jsx("polyline",{points:"1 20 1 14 7 14"}),x.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),x.jsxs("button",{className:"action-btn",onClick:i,children:[x.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("circle",{cx:"12",cy:"12",r:"10"}),x.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),x.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),x.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const iT=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function GN(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${iT[parseInt(n,10)-1]}`}function QN({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:i,onSendGreeting:s,onSendReminder:o}){const[l,u]=Z.useState(""),[h,f]=Z.useState(""),[p,g]=Z.useState(""),[A,k]=Z.useState(""),[D,b]=Z.useState("male"),[I,E]=Z.useState(!1),R=V=>{if(V.preventDefault(),!l.trim()||!p||!A)return;const U=`${String(parseInt(p,10)).padStart(2,"0")}-${String(parseInt(A,10)).padStart(2,"0")}`;r(l.trim(),U,D,h.trim()),u(""),f(""),g(""),k(""),b("male"),E(!1)},M=[...t].sort((V,U)=>{const[_,y]=V.date.split("-").map(Number),[v,T]=U.date.split("-").map(Number);return y-T||_-v});return x.jsxs("div",{className:"birthdays",children:[n&&x.jsx("p",{className:"error",children:n}),e.length>0&&x.jsxs("div",{className:"birthday-alert fade-in",children:[x.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),x.jsxs("div",{className:"birthday-alert-body",children:[x.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(V=>V.name).join(" y "),"!"]}),x.jsx("div",{className:"birthday-alert-actions",children:e.map(V=>x.jsxs("div",{className:"birthday-alert-row",children:[x.jsxs("button",{className:"action-btn primary",onClick:()=>s(V),children:["🎉 Felicitar a ",V.name]}),x.jsx("button",{className:"action-btn",onClick:()=>o(V),children:"🔔 Recordarme"})]},V.id))})]})]}),x.jsxs("div",{className:"birthdays-header",children:[x.jsx("h3",{children:"Tus amigos"}),x.jsx("button",{className:"add-friend-btn",onClick:()=>E(!I),children:I?"✕ Cerrar":"+ Añadir amigo"})]}),I&&x.jsxs("form",{className:"birthday-form fade-in",onSubmit:R,children:[x.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:V=>u(V.target.value),required:!0}),x.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:h,onChange:V=>f(V.target.value)}),x.jsxs("div",{className:"bf-row",children:[x.jsxs("select",{className:"bf-select",value:p,onChange:V=>g(V.target.value),required:!0,children:[x.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(V,U)=>U+1).map(V=>x.jsx("option",{value:V,children:V},V))]}),x.jsxs("select",{className:"bf-select",value:A,onChange:V=>k(V.target.value),required:!0,children:[x.jsx("option",{value:"",children:"Mes"}),iT.map((V,U)=>x.jsx("option",{value:U+1,children:V},U))]})]}),x.jsxs("div",{className:"bf-gender",children:[x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"gender",value:"male",checked:D==="male",onChange:()=>b("male")}),"Masculino"]}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"gender",value:"female",checked:D==="female",onChange:()=>b("female")}),"Femenino"]}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"gender",value:"other",checked:D==="other",onChange:()=>b("other")}),"Otro / No sé"]})]}),x.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),M.length===0&&x.jsx("p",{className:"birthdays-empty",children:"No has añadido ningún cumpleaños todavía."}),x.jsx("div",{className:"birthdays-list",children:M.map(V=>x.jsxs("div",{className:"birthday-item fade-in",children:[x.jsxs("div",{className:"birthday-item-info",children:[x.jsxs("span",{className:"birthday-item-name",children:[V.name,V.gender==="male"&&" 👨",V.gender==="female"&&" 👩",V.gender==="other"&&" 🧑"]}),x.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",GN(V.date)]}),V.phone&&x.jsxs("span",{className:"birthday-item-phone",children:["📞 ",V.phone]})]}),x.jsx("button",{className:"birthday-item-delete",onClick:()=>i(V.id),title:"Eliminar",children:"✕"})]},V.id))})]})}function YN(){const[t,e]=Z.useState("reply"),{user:n,logout:r}=xf(),i=MN(),s=zN();return x.jsxs("div",{className:"container",children:[x.jsxs("header",{children:[x.jsxs("div",{className:"header-row",children:[x.jsx("h1",{children:"Reply AI 💬"}),x.jsxs("div",{className:"header-user",children:[x.jsx("span",{className:"header-email",children:n.email}),x.jsx("button",{className:"logout-btn",onClick:r,title:"Cerrar sesión",children:x.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),x.jsx("polyline",{points:"16 17 21 12 16 7"}),x.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),x.jsxs("div",{className:"tabs",children:[x.jsxs("button",{className:`tab ${t==="reply"?"active":""}`,onClick:()=>e("reply"),children:[x.jsx("svg",{className:"tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:x.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Responder"]}),x.jsxs("button",{className:`tab ${t==="birthdays"?"active":""}`,onClick:()=>e("birthdays"),children:[x.jsxs("svg",{className:"tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),x.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Cumpleaños"]})]})]}),t==="reply"?x.jsxs("div",{className:"tab-content",children:[x.jsx($N,{value:i.message,onChange:o=>i.setMessage(o.target.value)}),x.jsx(qN,{selected:i.mode,onSelect:i.setMode}),x.jsx(WN,{onClick:i.generate,loading:i.loading}),i.error&&x.jsx("p",{className:"error fade-in",children:i.error}),x.jsx(KN,{response:i.response,mode:i.mode,onSend:i.sendToWhatsApp,onRegenerate:i.generate,onMakeFunnier:i.makeFunnier}),i.history.length>0&&x.jsxs("section",{className:"history",children:[x.jsxs("div",{className:"history-header",children:[x.jsx("h3",{children:"Historial"}),x.jsx("button",{className:"history-clear",onClick:i.clearHistory,children:"Limpiar"})]}),i.history.slice(0,5).map((o,l)=>x.jsxs("div",{className:"history-item fade-in",children:[x.jsxs("div",{className:"history-item-header",children:[x.jsxs("span",{className:"history-mode-badge",children:[o.mode==="funny"?"😄":o.mode==="elegant"?"⭐":o.mode==="cold"?"❄️":"🔑"," ",o.mode]}),x.jsx("span",{className:"history-time",children:new Date(o.date).toLocaleTimeString()})]}),x.jsx("p",{className:"history-reply",children:o.reply})]},l))]})]}):x.jsx("div",{className:"tab-content",children:x.jsx(QN,{friends:s.friends,todayBirthdays:s.todayBirthdays,error:s.error,onAdd:s.addFriend,onRemove:s.removeFriend,onSendGreeting:s.sendGreeting,onSendReminder:s.sendReminder})}),x.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda"})]})}function JN(){const{user:t,loading:e}=xf();return e?x.jsx("div",{className:"loading-screen",children:x.jsx("div",{className:"loading-spinner"})}):t?x.jsx(YN,{}):x.jsx(BN,{})}Pc.createRoot(document.getElementById("root")).render(x.jsx(VN,{children:x.jsx(JN,{})}));
