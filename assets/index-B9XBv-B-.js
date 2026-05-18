(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Rv={exports:{}},du={},xv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),J0=Symbol.for("react.portal"),X0=Symbol.for("react.fragment"),Z0=Symbol.for("react.strict_mode"),eI=Symbol.for("react.profiler"),tI=Symbol.for("react.provider"),nI=Symbol.for("react.context"),rI=Symbol.for("react.forward_ref"),sI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),oI=Symbol.for("react.lazy"),Rm=Symbol.iterator;function aI(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Dv={};function pi(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Pv}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vv(){}Vv.prototype=pi.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Pv}var Lh=Oh.prototype=new Vv;Lh.constructor=Oh;bv(Lh,pi.prototype);Lh.isPureReactComponent=!0;var xm=Array.isArray,Ov=Object.prototype.hasOwnProperty,jh={current:null},Lv={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ov.call(e,r)&&!Lv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Wo,type:t,key:i,ref:o,props:s,_owner:jh.current}}function lI(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function uI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uI(""+t.key):e.toString(36)}function Xa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case J0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+_c(o,0):r,xm(s)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Xa(s,e,n,"",function(c){return c})):s!=null&&(Mh(s)&&(s=lI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+_c(i,l);o+=Xa(i,e,n,u,s)}else if(u=aI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+_c(i,l++),o+=Xa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],s=0;return Xa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function cI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Za={transition:null},dI={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Za,ReactCurrentOwner:jh};function Mv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=pi;re.Fragment=X0;re.Profiler=eI;re.PureComponent=Oh;re.StrictMode=Z0;re.Suspense=sI;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dI;re.act=Mv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=jh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ov.call(e,u)&&!Lv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Wo,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:nI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tI,_context:t},t.Consumer=t};re.createElement=jv;re.createFactory=function(t){var e=jv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:rI,render:t}};re.isValidElement=Mh;re.lazy=function(t){return{$$typeof:oI,_payload:{_status:-1,_result:t},_init:cI}};re.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};re.unstable_act=Mv;re.useCallback=function(t,e){return ct.current.useCallback(t,e)};re.useContext=function(t){return ct.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};re.useEffect=function(t,e){return ct.current.useEffect(t,e)};re.useId=function(){return ct.current.useId()};re.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ct.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};re.useRef=function(t){return ct.current.useRef(t)};re.useState=function(t){return ct.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ct.current.useTransition()};re.version="18.3.1";xv.exports=re;var O=xv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hI=O,fI=Symbol.for("react.element"),pI=Symbol.for("react.fragment"),mI=Object.prototype.hasOwnProperty,gI=hI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yI={key:!0,ref:!0,__self:!0,__source:!0};function Fv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mI.call(e,r)&&!yI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:fI,type:t,key:i,ref:o,props:s,_owner:gI.current}}du.Fragment=pI;du.jsx=Fv;du.jsxs=Fv;Rv.exports=du;var h=Rv.exports,md={},Uv={exports:{}},Ct={},zv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,Ce=B[ve];if(0<s(Ce,Y))B[ve]=Y,B[Z]=Ce,Z=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var ve=0,Ce=B.length,Mr=Ce>>>1;ve<Mr;){var xt=2*(ve+1)-1,Fr=B[xt],Ut=xt+1,zn=B[Ut];if(0>s(Fr,Z))Ut<Ce&&0>s(zn,Fr)?(B[ve]=zn,B[Ut]=Z,ve=Ut):(B[ve]=Fr,B[xt]=Z,ve=xt);else if(Ut<Ce&&0>s(zn,Z))B[ve]=zn,B[Ut]=Z,ve=Ut;else break e}}return Y}function s(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,S=!1,N=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(B){if(x=!1,A(B),!N)if(n(u)!==null)N=!0,q(P);else{var Y=n(c);Y!==null&&it(V,Y.startTime-B)}}function P(B,Y){N=!1,x&&(x=!1,C(_),_=-1),S=!0;var Z=g;try{for(A(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||B&&!k());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,g=m.priorityLevel;var Ce=ve(m.expirationTime<=Y);Y=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(u)&&r(u),A(Y)}else r(u);m=n(u)}if(m!==null)var Mr=!0;else{var xt=n(c);xt!==null&&it(V,xt.startTime-Y),Mr=!1}return Mr}finally{m=null,g=Z,S=!1}}var j=!1,w=null,_=-1,y=5,I=-1;function k(){return!(t.unstable_now()-I<y)}function R(){if(w!==null){var B=t.unstable_now();I=B;var Y=!0;try{Y=w(!0,B)}finally{Y?T():(j=!1,w=null)}}else j=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Rt=de.port2;de.port1.onmessage=R,T=function(){Rt.postMessage(null)}}else T=function(){D(R,0)};function q(B){w=B,j||(j=!0,T())}function it(B,Y){_=D(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||S||(N=!0,q(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,B){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Z+Ce,B={id:p++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:Ce,sortIndex:-1},Z>ve?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(x?(C(_),_=-1):x=!0,it(V,Z-ve))):(B.sortIndex=Ce,e(u,B),N||S||(N=!0,q(P))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Y=g;return function(){var Z=g;g=Y;try{return B.apply(this,arguments)}finally{g=Z}}}})(Bv);zv.exports=Bv;var vI=zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=O,Nt=vI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,Eo={};function fs(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(Eo[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,EI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Dm={};function wI(t){return gd.call(Dm,t)?!0:gd.call(bm,t)?!1:EI.test(t)?Dm[t]=!0:(bm[t]=!0,!1)}function TI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function II(t,e,n,r){if(e===null||typeof e>"u"||TI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,Uh);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zh(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(II(e,n,s,r)&&(n=null),r||s===null?wI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Hv=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function Ui(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Ec;function Qi(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qi(t):""}function SI(t){switch(t.tag){case 5:return Qi(t.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case xs:return"Portal";case yd:return"Profiler";case Bh:return"StrictMode";case vd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wv:return(t.displayName||"Context")+".Consumer";case qv:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function AI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NI(t){var e=Gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=NI(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qv(t,e){e=e.checked,e!=null&&zh(t,"checked",e,!1)}function Td(t,e){Qv(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Id(t,e.type,n):e.hasOwnProperty("defaultValue")&&Id(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Id(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yi=Array.isArray;function $s(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Yi(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Yv(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CI=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){CI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function Zv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function e_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Zv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var kI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(kI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,qs=null,Ws=null;function Fm(t){if(t=Ko(t)){if(typeof Rd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=gu(e),Rd(t.stateNode,t.type,e))}}function t_(t){qs?Ws?Ws.push(t):Ws=[t]:qs=t}function n_(){if(qs){var t=qs,e=Ws;if(Ws=qs=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function r_(t,e){return t(e)}function s_(){}var Ic=!1;function i_(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return r_(t,e,n)}finally{Ic=!1,(qs!==null||Ws!==null)&&(s_(),n_())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var xd=!1;if(Cn)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){xd=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{xd=!1}function RI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var oo=!1,wl=null,Tl=!1,Pd=null,xI={onError:function(t){oo=!0,wl=t}};function PI(t,e,n,r,s,i,o,l,u){oo=!1,wl=null,RI.apply(xI,arguments)}function bI(t,e,n,r,s,i,o,l,u){if(PI.apply(this,arguments),oo){if(oo){var c=wl;oo=!1,wl=null}else throw Error(U(198));Tl||(Tl=!0,Pd=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Um(t){if(ps(t)!==t)throw Error(U(188))}function DI(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Um(s),t;if(i===r)return Um(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function a_(t){return t=DI(t),t!==null?l_(t):null}function l_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l_(t);if(e!==null)return e;t=t.sibling}return null}var u_=Nt.unstable_scheduleCallback,zm=Nt.unstable_cancelCallback,VI=Nt.unstable_shouldYield,OI=Nt.unstable_requestPaint,Re=Nt.unstable_now,LI=Nt.unstable_getCurrentPriorityLevel,Hh=Nt.unstable_ImmediatePriority,c_=Nt.unstable_UserBlockingPriority,Il=Nt.unstable_NormalPriority,jI=Nt.unstable_LowPriority,d_=Nt.unstable_IdlePriority,hu=null,on=null;function MI(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:zI,FI=Math.log,UI=Math.LN2;function zI(t){return t>>>=0,t===0?32:31-(FI(t)/UI|0)|0}var Ca=64,ka=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ji(l):(i&=o,i!==0&&(r=Ji(i)))}else o=n&~s,o!==0?r=Ji(o):i!==0&&(r=Ji(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),s=1<<n,r|=t[n],e&=~s;return r}function BI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Gt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=BI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h_(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function qI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Gt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ue=0;function f_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p_,Kh,m_,g_,y_,Dd=!1,Ra=[],or=null,ar=null,lr=null,Io=new Map,So=new Map,Xn=[],WI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Bi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ko(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function HI(t,e,n,r,s){switch(e){case"focusin":return or=Bi(or,t,e,n,r,s),!0;case"dragenter":return ar=Bi(ar,t,e,n,r,s),!0;case"mouseover":return lr=Bi(lr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Io.set(i,Bi(Io.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,So.set(i,Bi(So.get(i)||null,t,e,n,r,s)),!0}return!1}function v_(t){var e=Kr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){m_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kd=r,n.target.dispatchEvent(r),kd=null}else return e=Ko(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){el(t)&&n.delete(e)}function GI(){Dd=!1,or!==null&&el(or)&&(or=null),ar!==null&&el(ar)&&(ar=null),lr!==null&&el(lr)&&(lr=null),Io.forEach($m),So.forEach($m)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,GI)))}function Ao(t){function e(s){return $i(s,t)}if(0<Ra.length){$i(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&$i(or,t),ar!==null&&$i(ar,t),lr!==null&&$i(lr,t),Io.forEach(e),So.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)v_(n),n.blockedOn===null&&Xn.shift()}var Hs=jn.ReactCurrentBatchConfig,Al=!0;function KI(t,e,n,r){var s=ue,i=Hs.transition;Hs.transition=null;try{ue=1,Qh(t,e,n,r)}finally{ue=s,Hs.transition=i}}function QI(t,e,n,r){var s=ue,i=Hs.transition;Hs.transition=null;try{ue=4,Qh(t,e,n,r)}finally{ue=s,Hs.transition=i}}function Qh(t,e,n,r){if(Al){var s=Vd(t,e,n,r);if(s===null)Vc(t,e,r,Nl,n),Bm(t,r);else if(HI(s,t,e,n,r))r.stopPropagation();else if(Bm(t,r),e&4&&-1<WI.indexOf(t)){for(;s!==null;){var i=Ko(s);if(i!==null&&p_(i),i=Vd(t,e,n,r),i===null&&Vc(t,e,r,Nl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Vc(t,e,r,null,n)}}var Nl=null;function Vd(t,e,n,r){if(Nl=null,t=Wh(r),t=Kr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function __(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LI()){case Hh:return 1;case c_:return 4;case Il:case jI:return 16;case d_:return 536870912;default:return 16}default:return 16}}var sr=null,Yh=null,tl=null;function E_(){if(tl)return tl;var t,e=Yh,n=e.length,r,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return tl=s.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function qm(){return!1}function kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:qm,this.isPropagationStopped=qm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=kt(mi),Go=Ie({},mi,{view:0,detail:0}),YI=kt(Go),Ac,Nc,qi,fu=Ie({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(Ac=t.screenX-qi.screenX,Nc=t.screenY-qi.screenY):Nc=Ac=0,qi=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),Wm=kt(fu),JI=Ie({},fu,{dataTransfer:0}),XI=kt(JI),ZI=Ie({},Go,{relatedTarget:0}),Cc=kt(ZI),eS=Ie({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=kt(eS),nS=Ie({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=kt(nS),sS=Ie({},mi,{data:0}),Hm=kt(sS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function Xh(){return lS}var uS=Ie({},Go,{key:function(t){if(t.key){var e=iS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=kt(uS),dS=Ie({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=kt(dS),hS=Ie({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),fS=kt(hS),pS=Ie({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=kt(pS),gS=Ie({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=kt(gS),vS=[9,13,27,32],Zh=Cn&&"CompositionEvent"in window,ao=null;Cn&&"documentMode"in document&&(ao=document.documentMode);var _S=Cn&&"TextEvent"in window&&!ao,w_=Cn&&(!Zh||ao&&8<ao&&11>=ao),Km=" ",Qm=!1;function T_(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function ES(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:(Qm=!0,Km);case"textInput":return t=e.data,t===Km&&Qm?null:t;default:return null}}function wS(t,e){if(bs)return t==="compositionend"||!Zh&&T_(t,e)?(t=E_(),tl=Yh=sr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function S_(t,e,n,r){t_(r),e=Cl(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,No=null;function IS(t){O_(t,0)}function pu(t){var e=Os(t);if(Kv(e))return t}function SS(t,e){if(t==="change")return e}var A_=!1;if(Cn){var kc;if(Cn){var Rc="oninput"in document;if(!Rc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),Rc=typeof Jm.oninput=="function"}kc=Rc}else kc=!1;A_=kc&&(!document.documentMode||9<document.documentMode)}function Xm(){lo&&(lo.detachEvent("onpropertychange",N_),No=lo=null)}function N_(t){if(t.propertyName==="value"&&pu(No)){var e=[];S_(e,No,t,Wh(t)),i_(IS,e)}}function AS(t,e,n){t==="focusin"?(Xm(),lo=e,No=n,lo.attachEvent("onpropertychange",N_)):t==="focusout"&&Xm()}function NS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(No)}function CS(t,e){if(t==="click")return pu(e)}function kS(t,e){if(t==="input"||t==="change")return pu(e)}function RS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:RS;function Co(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gd.call(e,s)||!Yt(t[s],e[s]))return!1}return!0}function Zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Zm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zm(n)}}function C_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xS(t){var e=k_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C_(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=eg(n,i);var o=eg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=Cn&&"documentMode"in document&&11>=document.documentMode,Ds=null,Od=null,uo=null,Ld=!1;function tg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||Ds==null||Ds!==El(r)||(r=Ds,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Co(uo,r)||(uo=r,r=Cl(Od,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},xc={},R_={};Cn&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function mu(t){if(xc[t])return xc[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R_)return xc[t]=e[n];return t}var x_=mu("animationend"),P_=mu("animationiteration"),b_=mu("animationstart"),D_=mu("transitionend"),V_=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){V_.set(t,e),fs(e,[t])}for(var Pc=0;Pc<ng.length;Pc++){var bc=ng[Pc],bS=bc.toLowerCase(),DS=bc[0].toUpperCase()+bc.slice(1);kr(bS,"on"+DS)}kr(x_,"onAnimationEnd");kr(P_,"onAnimationIteration");kr(b_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(D_,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bI(r,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;rg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;rg(s,l,c),i=u}}}if(Tl)throw t=Pd,Tl=!1,Pd=null,t}function me(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var r=t+"__bubble";n.has(r)||(L_(e,t,2,!1),n.add(r))}function Dc(t,e,n){var r=0;e&&(r|=4),L_(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[ba]){t[ba]=!0,$v.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Dc("selectionchange",!1,e))}}function L_(t,e,n,r){switch(__(e)){case 1:var s=KI;break;case 4:s=QI;break;default:s=Qh}n=s.bind(null,e,n,t),s=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Vc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}i_(function(){var c=i,p=Wh(n),m=[];e:{var g=V_.get(t);if(g!==void 0){var S=Jh,N=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":S=cS;break;case"focusin":N="focus",S=Cc;break;case"focusout":N="blur",S=Cc;break;case"beforeblur":case"afterblur":S=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=XI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=fS;break;case x_:case P_:case b_:S=tS;break;case D_:S=mS;break;case"scroll":S=YI;break;case"wheel":S=yS;break;case"copy":case"cut":case"paste":S=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Gm}var x=(e&4)!==0,D=!x&&t==="scroll",C=x?g!==null?g+"Capture":null:g;x=[];for(var E=c,A;E!==null;){A=E;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,C!==null&&(V=To(E,C),V!=null&&x.push(Ro(E,V,A)))),D)break;E=E.return}0<x.length&&(g=new S(g,N,null,n,p),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==kd&&(N=n.relatedTarget||n.fromElement)&&(Kr(N)||N[kn]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=c,N=N?Kr(N):null,N!==null&&(D=ps(N),N!==D||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=c),S!==N)){if(x=Wm,V="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gm,V="onPointerLeave",C="onPointerEnter",E="pointer"),D=S==null?g:Os(S),A=N==null?g:Os(N),g=new x(V,E+"leave",S,n,p),g.target=D,g.relatedTarget=A,V=null,Kr(p)===c&&(x=new x(C,E+"enter",N,n,p),x.target=A,x.relatedTarget=D,V=x),D=V,S&&N)t:{for(x=S,C=N,E=0,A=x;A;A=Is(A))E++;for(A=0,V=C;V;V=Is(V))A++;for(;0<E-A;)x=Is(x),E--;for(;0<A-E;)C=Is(C),A--;for(;E--;){if(x===C||C!==null&&x===C.alternate)break t;x=Is(x),C=Is(C)}x=null}else x=null;S!==null&&sg(m,g,S,x,!1),N!==null&&D!==null&&sg(m,D,N,x,!0)}}e:{if(g=c?Os(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var P=SS;else if(Ym(g))if(A_)P=kS;else{P=NS;var j=AS}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=CS);if(P&&(P=P(t,c))){S_(m,P,n,p);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Id(g,"number",g.value)}switch(j=c?Os(c):window,t){case"focusin":(Ym(j)||j.contentEditable==="true")&&(Ds=j,Od=c,uo=null);break;case"focusout":uo=Od=Ds=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,tg(m,n,p);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":tg(m,n,p)}var w;if(Zh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bs?T_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(w_&&n.locale!=="ko"&&(bs||_!=="onCompositionStart"?_==="onCompositionEnd"&&bs&&(w=E_()):(sr=p,Yh="value"in sr?sr.value:sr.textContent,bs=!0)),j=Cl(c,_),0<j.length&&(_=new Hm(_,t,null,n,p),m.push({event:_,listeners:j}),w?_.data=w:(w=I_(n),w!==null&&(_.data=w)))),(w=_S?ES(t,n):wS(t,n))&&(c=Cl(c,"onBeforeInput"),0<c.length&&(p=new Hm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}O_(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=To(t,n),i!=null&&r.unshift(Ro(t,i,s)),i=To(t,e),i!=null&&r.push(Ro(t,i,s))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=To(n,i),u!=null&&o.unshift(Ro(n,u,l))):s||(u=To(n,i),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(LS,"")}function Da(t,e,n){if(e=ig(e),ig(t)!==e&&n)throw Error(U(425))}function kl(){}var jd=null,Md=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(FS)}:Ud;function FS(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ao(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),sn="__reactFiber$"+gi,xo="__reactProps$"+gi,kn="__reactContainer$"+gi,zd="__reactEvents$"+gi,US="__reactListeners$"+gi,zS="__reactHandles$"+gi;function Kr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[sn])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[sn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function gu(t){return t[xo]||null}var Bd=[],Ls=-1;function Rr(t){return{current:t}}function ye(t){0>Ls||(t.current=Bd[Ls],Bd[Ls]=null,Ls--)}function fe(t,e){Ls++,Bd[Ls]=t.current,t.current=e}var Er={},rt=Rr(Er),gt=Rr(!1),ns=Er;function ti(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function yt(t){return t=t.childContextTypes,t!=null}function Rl(){ye(gt),ye(rt)}function lg(t,e,n){if(rt.current!==Er)throw Error(U(168));fe(rt,e),fe(gt,n)}function j_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,AI(t)||"Unknown",s));return Ie({},n,r)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ns=rt.current,fe(rt,t),fe(gt,gt.current),!0}function ug(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=j_(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,ye(gt),ye(rt),fe(rt,t)):ye(gt),fe(gt,n)}var vn=null,yu=!1,Lc=!1;function M_(t){vn===null?vn=[t]:vn.push(t)}function BS(t){yu=!0,M_(t)}function xr(){if(!Lc&&vn!==null){Lc=!0;var t=0,e=ue;try{var n=vn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,yu=!1}catch(s){throw vn!==null&&(vn=vn.slice(t+1)),u_(Hh,xr),s}finally{ue=e,Lc=!1}}return null}var js=[],Ms=0,Pl=null,bl=0,Pt=[],bt=0,rs=null,_n=1,En="";function Wr(t,e){js[Ms++]=bl,js[Ms++]=Pl,Pl=t,bl=e}function F_(t,e,n){Pt[bt++]=_n,Pt[bt++]=En,Pt[bt++]=rs,rs=t;var r=_n;t=En;var s=32-Gt(r)-1;r&=~(1<<s),n+=1;var i=32-Gt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,_n=1<<32-Gt(e)+s|n<<s|r,En=i+t}else _n=1<<i|n<<s|r,En=t}function tf(t){t.return!==null&&(Wr(t,1),F_(t,1,0))}function nf(t){for(;t===Pl;)Pl=js[--Ms],js[Ms]=null,bl=js[--Ms],js[Ms]=null;for(;t===rs;)rs=Pt[--bt],Pt[bt]=null,En=Pt[--bt],Pt[bt]=null,_n=Pt[--bt],Pt[bt]=null}var At=null,It=null,_e=!1,Wt=null;function U_(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,It=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:_n,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,It=null,!0):!1;default:return!1}}function $d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(_e){var e=It;if(e){var n=e;if(!cg(t,e)){if($d(t))throw Error(U(418));e=ur(n.nextSibling);var r=At;e&&cg(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,_e=!1,At=t)}}else{if($d(t))throw Error(U(418));t.flags=t.flags&-4097|2,_e=!1,At=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Va(t){if(t!==At)return!1;if(!_e)return dg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=It)){if($d(t))throw z_(),Error(U(418));for(;e;)U_(t,e),e=ur(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=At?ur(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=It;t;)t=ur(t.nextSibling)}function ni(){It=At=null,_e=!1}function rf(t){Wt===null?Wt=[t]:Wt.push(t)}var $S=jn.ReactCurrentBatchConfig;function Wi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function B_(t){function e(C,E){if(t){var A=C.deletions;A===null?(C.deletions=[E],C.flags|=16):A.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function s(C,E){return C=fr(C,E),C.index=0,C.sibling=null,C}function i(C,E,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<E?(C.flags|=2,E):A):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,E,A,V){return E===null||E.tag!==6?(E=$c(A,C.mode,V),E.return=C,E):(E=s(E,A),E.return=C,E)}function u(C,E,A,V){var P=A.type;return P===Ps?p(C,E,A.props.children,V,A.key):E!==null&&(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Yn&&hg(P)===E.type)?(V=s(E,A.props),V.ref=Wi(C,E,A),V.return=C,V):(V=ul(A.type,A.key,A.props,null,C.mode,V),V.ref=Wi(C,E,A),V.return=C,V)}function c(C,E,A,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=qc(A,C.mode,V),E.return=C,E):(E=s(E,A.children||[]),E.return=C,E)}function p(C,E,A,V,P){return E===null||E.tag!==7?(E=Zr(A,C.mode,V,P),E.return=C,E):(E=s(E,A),E.return=C,E)}function m(C,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=$c(""+E,C.mode,A),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sa:return A=ul(E.type,E.key,E.props,null,C.mode,A),A.ref=Wi(C,null,E),A.return=C,A;case xs:return E=qc(E,C.mode,A),E.return=C,E;case Yn:var V=E._init;return m(C,V(E._payload),A)}if(Yi(E)||Ui(E))return E=Zr(E,C.mode,A,null),E.return=C,E;Oa(C,E)}return null}function g(C,E,A,V){var P=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return P!==null?null:l(C,E,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Sa:return A.key===P?u(C,E,A,V):null;case xs:return A.key===P?c(C,E,A,V):null;case Yn:return P=A._init,g(C,E,P(A._payload),V)}if(Yi(A)||Ui(A))return P!==null?null:p(C,E,A,V,null);Oa(C,A)}return null}function S(C,E,A,V,P){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(A)||null,l(E,C,""+V,P);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Sa:return C=C.get(V.key===null?A:V.key)||null,u(E,C,V,P);case xs:return C=C.get(V.key===null?A:V.key)||null,c(E,C,V,P);case Yn:var j=V._init;return S(C,E,A,j(V._payload),P)}if(Yi(V)||Ui(V))return C=C.get(A)||null,p(E,C,V,P,null);Oa(E,V)}return null}function N(C,E,A,V){for(var P=null,j=null,w=E,_=E=0,y=null;w!==null&&_<A.length;_++){w.index>_?(y=w,w=null):y=w.sibling;var I=g(C,w,A[_],V);if(I===null){w===null&&(w=y);break}t&&w&&I.alternate===null&&e(C,w),E=i(I,E,_),j===null?P=I:j.sibling=I,j=I,w=y}if(_===A.length)return n(C,w),_e&&Wr(C,_),P;if(w===null){for(;_<A.length;_++)w=m(C,A[_],V),w!==null&&(E=i(w,E,_),j===null?P=w:j.sibling=w,j=w);return _e&&Wr(C,_),P}for(w=r(C,w);_<A.length;_++)y=S(w,C,_,A[_],V),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?_:y.key),E=i(y,E,_),j===null?P=y:j.sibling=y,j=y);return t&&w.forEach(function(k){return e(C,k)}),_e&&Wr(C,_),P}function x(C,E,A,V){var P=Ui(A);if(typeof P!="function")throw Error(U(150));if(A=P.call(A),A==null)throw Error(U(151));for(var j=P=null,w=E,_=E=0,y=null,I=A.next();w!==null&&!I.done;_++,I=A.next()){w.index>_?(y=w,w=null):y=w.sibling;var k=g(C,w,I.value,V);if(k===null){w===null&&(w=y);break}t&&w&&k.alternate===null&&e(C,w),E=i(k,E,_),j===null?P=k:j.sibling=k,j=k,w=y}if(I.done)return n(C,w),_e&&Wr(C,_),P;if(w===null){for(;!I.done;_++,I=A.next())I=m(C,I.value,V),I!==null&&(E=i(I,E,_),j===null?P=I:j.sibling=I,j=I);return _e&&Wr(C,_),P}for(w=r(C,w);!I.done;_++,I=A.next())I=S(w,C,_,I.value,V),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),E=i(I,E,_),j===null?P=I:j.sibling=I,j=I);return t&&w.forEach(function(R){return e(C,R)}),_e&&Wr(C,_),P}function D(C,E,A,V){if(typeof A=="object"&&A!==null&&A.type===Ps&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Sa:e:{for(var P=A.key,j=E;j!==null;){if(j.key===P){if(P=A.type,P===Ps){if(j.tag===7){n(C,j.sibling),E=s(j,A.props.children),E.return=C,C=E;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Yn&&hg(P)===j.type){n(C,j.sibling),E=s(j,A.props),E.ref=Wi(C,j,A),E.return=C,C=E;break e}n(C,j);break}else e(C,j);j=j.sibling}A.type===Ps?(E=Zr(A.props.children,C.mode,V,A.key),E.return=C,C=E):(V=ul(A.type,A.key,A.props,null,C.mode,V),V.ref=Wi(C,E,A),V.return=C,C=V)}return o(C);case xs:e:{for(j=A.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(C,E.sibling),E=s(E,A.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=qc(A,C.mode,V),E.return=C,C=E}return o(C);case Yn:return j=A._init,D(C,E,j(A._payload),V)}if(Yi(A))return N(C,E,A,V);if(Ui(A))return x(C,E,A,V);Oa(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(C,E.sibling),E=s(E,A),E.return=C,C=E):(n(C,E),E=$c(A,C.mode,V),E.return=C,C=E),o(C)):n(C,E)}return D}var ri=B_(!0),$_=B_(!1),Dl=Rr(null),Vl=null,Fs=null,sf=null;function of(){sf=Fs=Vl=null}function af(t){var e=Dl.current;ye(Dl),t._currentValue=e}function Wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Vl=t,sf=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(sf!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Vl===null)throw Error(U(308));Fs=t,Vl.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Qr=null;function lf(t){Qr===null?Qr=[t]:Qr.push(t)}function q_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rn(t,n)}return s=r.interleaved,s===null?(e.next=e,lf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rn(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}function fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var s=t.updateQueue;Jn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,x=l;switch(g=e,S=n,x.tag){case 1:if(N=x.payload,typeof N=="function"){m=N.call(S,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=x.payload,g=typeof N=="function"?N.call(S,m,g):N,g==null)break e;m=Ie({},m,g);break e;case 2:Jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=S,u=m):p=p.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=m}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Qo={},an=Rr(Qo),Po=Rr(Qo),bo=Rr(Qo);function Yr(t){if(t===Qo)throw Error(U(174));return t}function cf(t,e){switch(fe(bo,e),fe(Po,t),fe(an,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}ye(an),fe(an,e)}function si(){ye(an),ye(Po),ye(bo)}function H_(t){Yr(bo.current);var e=Yr(an.current),n=Ad(e,t.type);e!==n&&(fe(Po,t),fe(an,n))}function df(t){Po.current===t&&(ye(an),ye(Po))}var we=Rr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function hf(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var sl=jn.ReactCurrentDispatcher,Mc=jn.ReactCurrentBatchConfig,ss=0,Te=null,Oe=null,ze=null,jl=!1,co=!1,Do=0,qS=0;function Je(){throw Error(U(321))}function ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function pf(t,e,n,r,s,i){if(ss=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?KS:QS,t=n(r,s),co){i=0;do{if(co=!1,Do=0,25<=i)throw Error(U(301));i+=1,ze=Oe=null,e.updateQueue=null,sl.current=YS,t=n(r,s)}while(co)}if(sl.current=Ml,e=Oe!==null&&Oe.next!==null,ss=0,ze=Oe=Te=null,jl=!1,e)throw Error(U(300));return t}function mf(){var t=Do!==0;return Do=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=t:ze=ze.next=t,ze}function Ft(){if(Oe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=ze===null?Te.memoizedState:ze.next;if(e!==null)ze=e,Oe=t;else{if(t===null)throw Error(U(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ze===null?Te.memoizedState=ze=t:ze=ze.next=t}return ze}function Vo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((ss&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=p,is|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Yt(i,e.memoizedState)||(mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function G_(){}function K_(t,e){var n=Te,r=Ft(),s=e(),i=!Yt(r.memoizedState,s);if(i&&(r.memoizedState=s,mt=!0),r=r.queue,gf(J_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Y_.bind(null,n,r,s,e),void 0,null),Be===null)throw Error(U(349));ss&30||Q_(n,e,s)}return s}function Q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&Z_(t)}function J_(t,e,n){return n(function(){X_(e)&&Z_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function Z_(t){var e=Rn(t,1);e!==null&&Kt(e,t,1,-1)}function mg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=GS.bind(null,Te,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eE(){return Ft().memoizedState}function il(t,e,n,r){var s=nn();Te.flags|=t,s.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var s=Ft();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var o=Oe.memoizedState;if(i=o.destroy,r!==null&&ff(r,o.deps)){s.memoizedState=Oo(e,n,i,r);return}}Te.flags|=t,s.memoizedState=Oo(1|e,n,i,r)}function gg(t,e){return il(8390656,8,t,e)}function gf(t,e){return vu(2048,8,t,e)}function tE(t,e){return vu(4,2,t,e)}function nE(t,e){return vu(4,4,t,e)}function rE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sE(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,rE.bind(null,e,t),n)}function yf(){}function iE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aE(t,e,n){return ss&21?(Yt(n,e)||(n=h_(),Te.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function WS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Mc.transition;Mc.transition={};try{t(!1),e()}finally{ue=n,Mc.transition=r}}function lE(){return Ft().memoizedState}function HS(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uE(t))cE(e,n);else if(n=q_(t,e,n,r),n!==null){var s=ut();Kt(n,t,r,s),dE(n,e,r)}}function GS(t,e,n){var r=hr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uE(t))cE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(s.next=s,lf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=q_(t,e,s,r),n!==null&&(s=ut(),Kt(n,t,r,s),dE(n,e,r))}}function uE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function cE(t,e){co=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}var Ml={readContext:Mt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},KS={readContext:Mt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,rE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:yf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=WS.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=nn();if(_e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));ss&30||Q_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,gg(J_.bind(null,r,i,t),[t]),r.flags|=2048,Oo(9,Y_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=nn(),e=Be.identifierPrefix;if(_e){var n=En,r=_n;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:Mt,useCallback:iE,useContext:Mt,useEffect:gf,useImperativeHandle:sE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:Fc,useRef:eE,useState:function(){return Fc(Vo)},useDebugValue:yf,useDeferredValue:function(t){var e=Ft();return aE(e,Oe.memoizedState,t)},useTransition:function(){var t=Fc(Vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:K_,useId:lE,unstable_isNewReconciler:!1},YS={readContext:Mt,useCallback:iE,useContext:Mt,useEffect:gf,useImperativeHandle:sE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:Uc,useRef:eE,useState:function(){return Uc(Vo)},useDebugValue:yf,useDeferredValue:function(t){var e=Ft();return Oe===null?e.memoizedState=t:aE(e,Oe.memoizedState,t)},useTransition:function(){var t=Uc(Vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:K_,useId:lE,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),s=hr(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(Kt(e,t,s,r),rl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),s=hr(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=cr(t,i,s),e!==null&&(Kt(e,t,s,r),rl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=hr(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=cr(t,s,r),e!==null&&(Kt(e,t,r,n),rl(e,t,r))}};function yg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(s,i):!0}function hE(t,e,n){var r=!1,s=Er,i=e.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(s=yt(e)?ns:rt.current,r=e.contextTypes,i=(r=r!=null)?ti(t,s):Er),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},uf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Mt(i):(i=yt(e)?ns:rt.current,s.context=ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Hd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&_u.enqueueReplaceState(s,s.state,null),Ol(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,e){try{var n="",r=e;do n+=SI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function fE(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,sh=r),Kd(t,e)},n}function pE(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=d1.bind(null,t,e,n),e.then(t,t))}function Eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var XS=jn.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?$_(e,null,n,r):ri(e,t.child,n,r)}function Tg(t,e,n,r,s){n=n.render;var i=e.ref;return Gs(e,s),r=pf(t,e,n,r,i,s),n=mf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(_e&&n&&tf(e),e.flags|=1,lt(t,e,r,s),e.child)}function Ig(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Af(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,mE(t,e,i,r,s)):(t=ul(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return xn(t,e,s)}return e.flags|=1,t=fr(i,r),t.ref=e.ref,t.return=e,e.child=t}function mE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Co(i,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,xn(t,e,s)}return Qd(t,e,n,r,s)}function gE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(zs,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(zs,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(zs,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(zs,Tt),Tt|=r;return lt(t,e,s,n),e.child}function yE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,r,s){var i=yt(n)?ns:rt.current;return i=ti(e,i),Gs(e,s),n=pf(t,e,n,r,i,s),r=mf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(_e&&r&&tf(e),e.flags|=1,lt(t,e,n,s),e.child)}function Sg(t,e,n,r,s){if(yt(n)){var i=!0;xl(e)}else i=!1;if(Gs(e,s),e.stateNode===null)ol(t,e),hE(e,n,r),Gd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mt(c):(c=yt(n)?ns:rt.current,c=ti(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&vg(e,o,r,c),Jn=!1;var g=e.memoizedState;o.state=g,Ol(e,r,o,s),u=e.memoizedState,l!==r||g!==u||gt.current||Jn?(typeof p=="function"&&(Hd(e,n,p,r),u=e.memoizedState),(l=Jn||yg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=yt(n)?ns:rt.current,u=ti(e,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&vg(e,o,r,u),Jn=!1,g=e.memoizedState,o.state=g,Ol(e,r,o,s);var N=e.memoizedState;l!==m||g!==N||gt.current||Jn?(typeof S=="function"&&(Hd(e,n,S,r),N=e.memoizedState),(c=Jn||yg(e,n,c,r,g,N,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yd(t,e,n,r,i,s)}function Yd(t,e,n,r,s,i){yE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ug(e,n,!1),xn(t,e,i);r=e.stateNode,XS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,i),e.child=ri(e,null,l,i)):lt(t,e,l,i),e.memoizedState=r.state,s&&ug(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),cf(t,e.containerInfo)}function Ag(t,e,n,r,s){return ni(),rf(s),e.flags|=256,lt(t,e,n,r),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function _E(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(we,s&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Tu(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Xd(n),e.memoizedState=Jd,t):vf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return ZS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=fr(l,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Jd,r}return i=t.child,t=i.sibling,r=fr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vf(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&rf(r),ri(e,t.child,null,n),t=vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=zc(Error(U(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Tu({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Jd,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=zc(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Be,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rn(t,s),Kt(r,t,s,-1))}return Sf(),r=zc(Error(U(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=h1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,It=ur(s.nextSibling),At=e,_e=!0,Wt=null,t!==null&&(Pt[bt++]=_n,Pt[bt++]=En,Pt[bt++]=rs,_n=t.id,En=t.overflow,rs=e),e=vf(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wd(t.return,e,n)}function Bc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function EE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(lt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Bc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ll(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Bc(e,!0,n,null,i);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function e1(t,e,n){switch(e.tag){case 3:vE(e),ni();break;case 5:H_(e);break;case 1:yt(e.type)&&xl(e);break;case 4:cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(Dl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?_E(t,e,n):(fe(we,we.current&1),t=xn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return EE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,gE(t,e,n)}return xn(t,e,n)}var wE,Zd,TE,IE;wE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zd=function(){};TE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Yr(an.current);var i=null;switch(n){case"input":s=wd(t,s),r=wd(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=Sd(t,s),r=Sd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}Nd(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};IE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hi(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function t1(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&Rl(),Xe(e),null;case 3:return r=e.stateNode,si(),ye(gt),ye(rt),hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(ah(Wt),Wt=null))),Zd(t,e),Xe(e),null;case 5:df(e);var s=Yr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)TE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Xe(e),null}if(t=Yr(an.current),Va(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[sn]=e,r[xo]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<Xi.length;s++)me(Xi[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Om(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":jm(r,i),me("invalid",r)}Nd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Aa(r),Lm(r,i,!0);break;case"textarea":Aa(r),Mm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[xo]=r,wE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<Xi.length;s++)me(Xi[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":Om(t,r),s=wd(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":jm(t,r),s=Sd(t,r),me("invalid",t);break;default:s=r}Nd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?e_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&zh(t,i,u,o))}switch(n){case"input":Aa(t),Lm(t,r,!1);break;case"textarea":Aa(t),Mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?$s(t,!!r.multiple,i,!1):r.defaultValue!=null&&$s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)IE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Yr(bo.current),Yr(an.current),Va(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(i=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Xe(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&It!==null&&e.mode&1&&!(e.flags&128))z_(),ni(),e.flags|=98560,i=!1;else if(i=Va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[sn]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),i=!1}else Wt!==null&&(ah(Wt),Wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return si(),Zd(t,e),t===null&&ko(e.stateNode.containerInfo),Xe(e),null;case 10:return af(e.type._context),Xe(e),null;case 17:return yt(e.type)&&Rl(),Xe(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Hi(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Hi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>oi&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return Xe(e),null}else 2*Re()-i.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Hi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return If(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function n1(t,e){switch(nf(e),e.tag){case 1:return yt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),ye(gt),ye(rt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return si(),null;case 10:return af(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var ja=!1,tt=!1,r1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function eh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Cg=!1;function s1(t,e){if(jd=Al,t=k_(),ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Al=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var x=N.memoizedProps,D=N.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?x:$t(e.type,x),D);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=Cg,Cg=!1,N}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&eh(e,n,i)}s=s.next}while(s!==r)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SE(t){var e=t.alternate;e!==null&&(t.alternate=null,SE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[xo],delete e[zd],delete e[US],delete e[zS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AE(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var qe=null,qt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)NE(t,e,n),n=n.sibling}function NE(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:tt||Us(n,e);case 6:var r=qe,s=qt;qe=null,Kn(t,e,n),qe=r,qt=s,qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Ao(t)):Oc(qe,n.stateNode));break;case 4:r=qe,s=qt,qe=n.stateNode.containerInfo,qt=!0,Kn(t,e,n),qe=r,qt=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&eh(n,e,o),s=s.next}while(s!==r)}Kn(t,e,n);break;case 1:if(!tt&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Kn(t,e,n),tt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new r1),e.forEach(function(r){var s=f1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,qt=!1;break e;case 3:qe=l.stateNode.containerInfo,qt=!0;break e;case 4:qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));NE(i,o,s),qe=null,qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ae(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CE(e,t),e=e.sibling}function CE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),tn(t),r&4){try{ho(3,t,t.return),Eu(3,t)}catch(x){Ae(t,t.return,x)}try{ho(5,t,t.return)}catch(x){Ae(t,t.return,x)}}break;case 1:zt(e,t),tn(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(zt(e,t),tn(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var s=t.stateNode;try{wo(s,"")}catch(x){Ae(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Qv(s,i),Cd(l,o);var c=Cd(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?e_(s,m):p==="dangerouslySetInnerHTML"?Xv(s,m):p==="children"?wo(s,m):zh(s,p,m,c)}switch(l){case"input":Td(s,i);break;case"textarea":Yv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?$s(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?$s(s,!!i.multiple,i.defaultValue,!0):$s(s,!!i.multiple,i.multiple?[]:"",!1))}s[xo]=i}catch(x){Ae(t,t.return,x)}}break;case 6:if(zt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){Ae(t,t.return,x)}}break;case 3:if(zt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(x){Ae(t,t.return,x)}break;case 4:zt(e,t),tn(t);break;case 13:zt(e,t),tn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(wf=Re())),r&4&&Rg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||p,zt(e,t),tt=c):zt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(g=H,S=g.child,g.tag){case 0:case 11:case 14:case 15:ho(4,g,g.return);break;case 1:Us(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(x){Ae(r,n,x)}}break;case 5:Us(g,g.return);break;case 22:if(g.memoizedState!==null){Pg(m);continue}}S!==null?(S.return=g,H=S):Pg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Zv("display",o))}catch(x){Ae(t,t.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){Ae(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:zt(e,t),tn(t),r&4&&Rg(t);break;case 21:break;default:zt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(wo(s,""),r.flags&=-33);var i=kg(t);rh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=kg(t);nh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i1(t,e,n){H=t,kE(t)}function kE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=ja;var c=tt;if(ja=o,(tt=u)&&!c)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?bg(s):u!==null?(u.return=o,H=u):bg(s);for(;i!==null;)H=i,kE(i),i=i.sibling;H=s,ja=l,tt=c}xg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):xg(t)}}function xg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&pg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ao(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&th(e)}catch(g){Ae(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Pg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function bg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{th(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{th(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var o1=Math.ceil,Fl=jn.ReactCurrentDispatcher,_f=jn.ReactCurrentOwner,Lt=jn.ReactCurrentBatchConfig,oe=0,Be=null,Pe=null,Ge=0,Tt=0,zs=Rr(0),Le=0,Lo=null,is=0,wu=0,Ef=0,fo=null,ft=null,wf=0,oi=1/0,yn=null,Ul=!1,sh=null,dr=null,Ma=!1,ir=null,zl=0,po=0,ih=null,al=-1,ll=0;function ut(){return oe&6?Re():al!==-1?al:al=Re()}function hr(t){return t.mode&1?oe&2&&Ge!==0?Ge&-Ge:$S.transition!==null?(ll===0&&(ll=h_()),ll):(t=ue,t!==0||(t=window.event,t=t===void 0?16:__(t.type)),t):1}function Kt(t,e,n,r){if(50<po)throw po=0,ih=null,Error(U(185));Ho(t,n,r),(!(oe&2)||t!==Be)&&(t===Be&&(!(oe&2)&&(wu|=n),Le===4&&Zn(t,Ge)),vt(t,r),n===1&&oe===0&&!(e.mode&1)&&(oi=Re()+500,yu&&xr()))}function vt(t,e){var n=t.callbackNode;$I(t,e);var r=Sl(t,t===Be?Ge:0);if(r===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?BS(Dg.bind(null,t)):M_(Dg.bind(null,t)),MS(function(){!(oe&6)&&xr()}),n=null;else{switch(f_(r)){case 1:n=Hh;break;case 4:n=c_;break;case 16:n=Il;break;case 536870912:n=d_;break;default:n=Il}n=LE(n,RE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RE(t,e){if(al=-1,ll=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Sl(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bl(t,r);else{e=r;var s=oe;oe|=2;var i=PE();(Be!==t||Ge!==e)&&(yn=null,oi=Re()+500,Xr(t,e));do try{u1();break}catch(l){xE(t,l)}while(!0);of(),Fl.current=i,oe=s,Pe!==null?e=0:(Be=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(s=bd(t),s!==0&&(r=s,e=oh(t,s))),e===1)throw n=Lo,Xr(t,0),Zn(t,r),vt(t,Re()),n;if(e===6)Zn(t,r);else{if(s=t.current.alternate,!(r&30)&&!a1(s)&&(e=Bl(t,r),e===2&&(i=bd(t),i!==0&&(r=i,e=oh(t,i))),e===1))throw n=Lo,Xr(t,0),Zn(t,r),vt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Hr(t,ft,yn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=wf+500-Re(),10<e)){if(Sl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ud(Hr.bind(null,t,ft,yn),e);break}Hr(t,ft,yn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Gt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o1(r/1960))-r,10<r){t.timeoutHandle=Ud(Hr.bind(null,t,ft,yn),r);break}Hr(t,ft,yn);break;case 5:Hr(t,ft,yn);break;default:throw Error(U(329))}}}return vt(t,Re()),t.callbackNode===n?RE.bind(null,t):null}function oh(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=ft,ft=n,e!==null&&ah(e)),t}function ah(t){ft===null?ft=t:ft.push.apply(ft,t)}function a1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Ef,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Dg(t){if(oe&6)throw Error(U(327));Ks();var e=Sl(t,0);if(!(e&1))return vt(t,Re()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var r=bd(t);r!==0&&(e=r,n=oh(t,r))}if(n===1)throw n=Lo,Xr(t,0),Zn(t,e),vt(t,Re()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,ft,yn),vt(t,Re()),null}function Tf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(oi=Re()+500,yu&&xr())}}function os(t){ir!==null&&ir.tag===0&&!(oe&6)&&Ks();var e=oe;oe|=1;var n=Lt.transition,r=ue;try{if(Lt.transition=null,ue=1,t)return t()}finally{ue=r,Lt.transition=n,oe=e,!(oe&6)&&xr()}}function If(){Tt=zs.current,ye(zs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:si(),ye(gt),ye(rt),hf();break;case 5:df(r);break;case 4:si();break;case 13:ye(we);break;case 19:ye(we);break;case 10:af(r.type._context);break;case 22:case 23:If()}n=n.return}if(Be=t,Pe=t=fr(t.current,null),Ge=Tt=e,Le=0,Lo=null,Ef=wu=is=0,ft=fo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Qr=null}return t}function xE(t,e){do{var n=Pe;try{if(of(),sl.current=Ml,jl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}jl=!1}if(ss=0,ze=Oe=Te=null,co=!1,Do=0,_f.current=null,n===null||n.return===null){Le=1,Lo=e,Pe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Eg(o);if(S!==null){S.flags&=-257,wg(S,o,l,i,e),S.mode&1&&_g(i,c,e),e=S,u=c;var N=e.updateQueue;if(N===null){var x=new Set;x.add(u),e.updateQueue=x}else N.add(u);break e}else{if(!(e&1)){_g(i,c,e),Sf();break e}u=Error(U(426))}}else if(_e&&l.mode&1){var D=Eg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),wg(D,o,l,i,e),rf(ii(u,l));break e}}i=u=ii(u,l),Le!==4&&(Le=2),fo===null?fo=[i]:fo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=fE(i,u,e);fg(i,C);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(dr===null||!dr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=pE(i,l,e);fg(i,V);break e}}i=i.return}while(i!==null)}DE(n)}catch(P){e=P,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function PE(){var t=Fl.current;return Fl.current=Ml,t===null?Ml:t}function Sf(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(is&268435455)&&!(wu&268435455)||Zn(Be,Ge)}function Bl(t,e){var n=oe;oe|=2;var r=PE();(Be!==t||Ge!==e)&&(yn=null,Xr(t,e));do try{l1();break}catch(s){xE(t,s)}while(!0);if(of(),oe=n,Fl.current=r,Pe!==null)throw Error(U(261));return Be=null,Ge=0,Le}function l1(){for(;Pe!==null;)bE(Pe)}function u1(){for(;Pe!==null&&!VI();)bE(Pe)}function bE(t){var e=OE(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?DE(t):Pe=e,_f.current=null}function DE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=n1(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Pe=null;return}}else if(n=t1(n,e,Tt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Le===0&&(Le=5)}function Hr(t,e,n){var r=ue,s=Lt.transition;try{Lt.transition=null,ue=1,c1(t,e,n,r)}finally{Lt.transition=s,ue=r}return null}function c1(t,e,n,r){do Ks();while(ir!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(qI(t,i),t===Be&&(Pe=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,LE(Il,function(){return Ks(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Lt.transition,Lt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,_f.current=null,s1(t,n),CE(n,t),xS(Md),Al=!!jd,Md=jd=null,t.current=n,i1(n),OI(),oe=l,ue=o,Lt.transition=i}else t.current=n;if(Ma&&(Ma=!1,ir=t,zl=s),i=t.pendingLanes,i===0&&(dr=null),MI(n.stateNode),vt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ul)throw Ul=!1,t=sh,sh=null,t;return zl&1&&t.tag!==0&&Ks(),i=t.pendingLanes,i&1?t===ih?po++:(po=0,ih=t):po=0,xr(),null}function Ks(){if(ir!==null){var t=f_(zl),e=Lt.transition,n=ue;try{if(Lt.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,zl=0,oe&6)throw Error(U(331));var s=oe;for(oe|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:ho(8,p,i)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var g=p.sibling,S=p.return;if(SE(p),p===c){H=null;break}if(g!==null){g.return=S,H=g;break}H=S}}}var N=i.alternate;if(N!==null){var x=N.child;if(x!==null){N.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ho(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,H=C;break e}H=i.return}}var E=t.current;for(H=E;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=E;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Eu(9,l)}}catch(P){Ae(l,l.return,P)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(oe=s,xr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ue=n,Lt.transition=e}}return!1}function Vg(t,e,n){e=ii(n,e),e=fE(t,e,1),t=cr(t,e,1),e=ut(),t!==null&&(Ho(t,1,e),vt(t,e))}function Ae(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=ii(n,t),t=pE(e,t,1),e=cr(e,t,1),t=ut(),e!==null&&(Ho(e,1,t),vt(e,t));break}}e=e.return}}function d1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>Re()-wf?Xr(t,0):Ef|=n),vt(t,e)}function VE(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=ut();t=Rn(t,e),t!==null&&(Ho(t,e,n),vt(t,n))}function h1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),VE(t,n)}function f1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),VE(t,n)}var OE;OE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,e1(t,e,n);mt=!!(t.flags&131072)}else mt=!1,_e&&e.flags&1048576&&F_(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ol(t,e),t=e.pendingProps;var s=ti(e,rt.current);Gs(e,n),s=pf(null,e,r,t,s,n);var i=mf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(i=!0,xl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,uf(e),s.updater=_u,e.stateNode=s,s._reactInternals=e,Gd(e,r,t,n),e=Yd(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&tf(e),lt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=m1(r),t=$t(r,t),s){case 0:e=Qd(null,e,r,t,n);break e;case 1:e=Sg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=Ig(null,e,r,$t(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Qd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Sg(t,e,r,s,n);case 3:e:{if(vE(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,W_(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ii(Error(U(423)),e),e=Ag(t,e,r,n,s);break e}else if(r!==s){s=ii(Error(U(424)),e),e=Ag(t,e,r,n,s);break e}else for(It=ur(e.stateNode.containerInfo.firstChild),At=e,_e=!0,Wt=null,n=$_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===s){e=xn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&qd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Fd(r,s)?o=null:i!==null&&Fd(r,i)&&(e.flags|=32),yE(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return _E(t,e,n);case 4:return cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Tg(t,e,r,s,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(Dl,r._currentValue),r._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===s.children&&!gt.current){e=xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Wd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}lt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Gs(e,n),s=Mt(s),r=r(s),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),Ig(t,e,r,s,n);case 15:return mE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),ol(t,e),e.tag=1,yt(r)?(t=!0,xl(e)):t=!1,Gs(e,n),hE(e,r,s),Gd(e,r,s,n),Yd(null,e,r,!0,t,n);case 19:return EE(t,e,n);case 22:return gE(t,e,n)}throw Error(U(156,e.tag))};function LE(t,e){return u_(t,e)}function p1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new p1(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function m1(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===qh)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Zr(n.children,s,i,e);case Bh:o=8,s|=8;break;case yd:return t=Ot(12,n,e,s|2),t.elementType=yd,t.lanes=i,t;case vd:return t=Ot(13,n,e,s),t.elementType=vd,t.lanes=i,t;case _d:return t=Ot(19,n,e,s),t.elementType=_d,t.lanes=i,t;case Hv:return Tu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qv:o=10;break e;case Wv:o=9;break e;case $h:o=11;break e;case qh:o=14;break e;case Yn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Tu(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=Hv,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function g1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,s,i,o,l,u){return t=new g1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ot(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(i),t}function y1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jE(t){if(!t)return Er;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(yt(n))return j_(t,n,e)}return e}function ME(t,e,n,r,s,i,o,l,u){return t=Nf(n,r,!0,t,s,i,o,l,u),t.context=jE(null),n=t.current,r=ut(),s=hr(n),i=Sn(r,s),i.callback=e??null,cr(n,i,s),t.current.lanes=s,Ho(t,s,r),vt(t,r),t}function Iu(t,e,n,r){var s=e.current,i=ut(),o=hr(s);return n=jE(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(s,e,o),t!==null&&(Kt(t,s,o,i),rl(t,s,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function v1(){return null}var FE=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Su.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Iu(t,e,null,null)};Su.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Iu(null,t,null,null)}),e[kn]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=g_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&v_(t)}};function Rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function _1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=$l(o);i.call(c)}}var o=ME(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[kn]=o.current,ko(t.nodeType===8?t.parentNode:t),os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=$l(u);l.call(c)}}var u=Nf(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=u,t[kn]=u.current,ko(t.nodeType===8?t.parentNode:t),os(function(){Iu(e,u,n,r)}),u}function Nu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=$l(o);l.call(u)}}Iu(e,o,t,s)}else o=_1(n,e,t,s,r);return $l(o)}p_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(Gh(e,n|1),vt(e,Re()),!(oe&6)&&(oi=Re()+500,xr()))}break;case 13:os(function(){var r=Rn(t,1);if(r!==null){var s=ut();Kt(r,t,1,s)}}),Cf(t,1)}};Kh=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=ut();Kt(e,t,134217728,n)}Cf(t,134217728)}};m_=function(t){if(t.tag===13){var e=hr(t),n=Rn(t,e);if(n!==null){var r=ut();Kt(n,t,e,r)}Cf(t,e)}};g_=function(){return ue};y_=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Rd=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=gu(r);if(!s)throw Error(U(90));Kv(r),Td(r,s)}}}break;case"textarea":Yv(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};r_=Tf;s_=os;var E1={usingClientEntryPoint:!1,Events:[Ko,Os,gu,t_,n_,Tf]},Gi={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w1={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||v1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{hu=Fa.inject(w1),on=Fa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(e))throw Error(U(200));return y1(t,e,null,n)};Ct.createRoot=function(t,e){if(!Rf(t))throw Error(U(299));var n=!1,r="",s=FE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,s),t[kn]=e.current,ko(t.nodeType===8?t.parentNode:t),new kf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return os(t)};Ct.hydrate=function(t,e,n){if(!Au(e))throw Error(U(200));return Nu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Rf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=FE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ME(e,null,t,1,n??null,s,!1,i,o),t[kn]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Su(e)};Ct.render=function(t,e,n){if(!Au(e))throw Error(U(200));return Nu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Au(t))throw Error(U(40));return t._reactRootContainer?(os(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Tf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Au(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Nu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function UE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UE)}catch(t){console.error(t)}}UE(),Uv.exports=Ct;var T1=Uv.exports,jg=T1;md.createRoot=jg.createRoot,md.hydrateRoot=jg.hydrateRoot;const I1=()=>{};var Mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},S1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},BE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[p],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new A1;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const N=c<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N1=function(t){const e=zE(t);return BE.encodeByteArray(e,!0)},ql=function(t){return N1(t).replace(/\./g,"")},$E=function(t){try{return BE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k1=()=>C1().__FIREBASE_DEFAULTS__,R1=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},x1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$E(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return I1()||k1()||R1()||x1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qE=t=>{var e,n;return(n=(e=Cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},P1=t=>{const e=qE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WE=()=>{var t;return(t=Cu())==null?void 0:t.config},HE=t=>{var e;return(e=Cu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function D1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ql(JSON.stringify(n)),ql(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function O1(){var e;const t=(e=Cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function j1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F1(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function U1(){return!O1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z1(){try{return typeof indexedDB=="object"}catch{return!1}}function B1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$1,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?q1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,l,r)}}function q1(t,e){return t.replace(W1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const W1=/\{\$([^}]+)}/g;function H1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fg(i)&&Fg(o)){if(!Pn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function G1(t,e){const n=new K1(t,e);return n.subscribe.bind(n)}class K1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Q1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
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
 */function Xo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function GE(t){return(await fetch(t,{credentials:"include"})).ok}class as{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new b1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===Gr?void 0:t}function X1(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const eA={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},tA=se.INFO,nA={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},rA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=tA,this._logHandler=rA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const sA=(t,e)=>e.some(n=>t instanceof n);let Ug,zg;function iA(){return Ug||(Ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oA(){return zg||(zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KE=new WeakMap,lh=new WeakMap,QE=new WeakMap,Hc=new WeakMap,Pf=new WeakMap;function aA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&KE.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function lA(t){if(lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lh.set(t,e)}let uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uA(t){uh=t(uh)}function cA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return QE.set(r,e.sort?e.sort():[e]),pr(r)}:oA().includes(t)?function(...e){return t.apply(Gc(this),e),pr(KE.get(this))}:function(...e){return pr(t.apply(Gc(this),e))}}function dA(t){return typeof t=="function"?cA(t):(t instanceof IDBTransaction&&lA(t),sA(t,iA())?new Proxy(t,uh):t)}function pr(t){if(t instanceof IDBRequest)return aA(t);if(Hc.has(t))return Hc.get(t);const e=dA(t);return e!==t&&(Hc.set(t,e),Pf.set(e,t)),e}const Gc=t=>Pf.get(t);function hA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const fA=["get","getKey","getAll","getAllKeys","count"],pA=["put","add","delete","clear"],Kc=new Map;function Bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Kc.set(e,i),i}uA(t=>({...t,get:(e,n,r)=>Bg(e,n)||t.get(e,n,r),has:(e,n)=>!!Bg(e,n)||t.has(e,n)}));/**
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
 */class mA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",$g="0.14.12";/**
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
 */const bn=new xf("@firebase/app"),yA="@firebase/app-compat",vA="@firebase/analytics-compat",_A="@firebase/analytics",EA="@firebase/app-check-compat",wA="@firebase/app-check",TA="@firebase/auth",IA="@firebase/auth-compat",SA="@firebase/database",AA="@firebase/data-connect",NA="@firebase/database-compat",CA="@firebase/functions",kA="@firebase/functions-compat",RA="@firebase/installations",xA="@firebase/installations-compat",PA="@firebase/messaging",bA="@firebase/messaging-compat",DA="@firebase/performance",VA="@firebase/performance-compat",OA="@firebase/remote-config",LA="@firebase/remote-config-compat",jA="@firebase/storage",MA="@firebase/storage-compat",FA="@firebase/firestore",UA="@firebase/ai",zA="@firebase/firestore-compat",BA="firebase",$A="12.13.0";/**
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
 */const dh="[DEFAULT]",qA={[ch]:"fire-core",[yA]:"fire-core-compat",[_A]:"fire-analytics",[vA]:"fire-analytics-compat",[wA]:"fire-app-check",[EA]:"fire-app-check-compat",[TA]:"fire-auth",[IA]:"fire-auth-compat",[SA]:"fire-rtdb",[AA]:"fire-data-connect",[NA]:"fire-rtdb-compat",[CA]:"fire-fn",[kA]:"fire-fn-compat",[RA]:"fire-iid",[xA]:"fire-iid-compat",[PA]:"fire-fcm",[bA]:"fire-fcm-compat",[DA]:"fire-perf",[VA]:"fire-perf-compat",[OA]:"fire-rc",[LA]:"fire-rc-compat",[jA]:"fire-gcs",[MA]:"fire-gcs-compat",[FA]:"fire-fst",[zA]:"fire-fst-compat",[UA]:"fire-vertex","fire-js":"fire-js",[BA]:"fire-js-all"};/**
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
 */const Wl=new Map,WA=new Map,hh=new Map;function qg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(hh.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;hh.set(e,t);for(const n of Wl.values())qg(n,t);for(const n of WA.values())qg(n,t);return!0}function bf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const HA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Yo("app","Firebase",HA);/**
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
 */class GA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=$A;function YE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=WE()),!n)throw mr.create("no-options");const i=Wl.get(s);if(i){if(Pn(n,i.options)&&Pn(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new Z1(s);for(const u of hh.values())o.addComponent(u);const l=new GA(n,r,o);return Wl.set(s,l),l}function JE(t=dh){const e=Wl.get(t);if(!e&&t===dh&&WE())return YE();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){let r=qA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(o.join(" "));return}ai(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const KA="firebase-heartbeat-database",QA=1,jo="firebase-heartbeat-store";let Qc=null;function XE(){return Qc||(Qc=hA(KA,QA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function YA(t){try{const n=(await XE()).transaction(jo),r=await n.objectStore(jo).get(ZE(t));return await n.done,r}catch(e){if(e instanceof Mn)bn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Wg(t,e){try{const r=(await XE()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,ZE(t)),await r.done}catch(n){if(n instanceof Mn)bn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function ZE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JA=1024,XA=30;class ZA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>XA){const o=nN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hg(),{heartbeatsToSend:r,unsentEntries:s}=eN(this._heartbeatsCache.heartbeats),i=ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Hg(){return new Date().toISOString().substring(0,10)}function eN(t,e=JA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z1()?B1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gg(t){return ql(JSON.stringify({version:2,heartbeats:t})).length}function nN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function rN(t){ai(new as("platform-logger",e=>new mA(e),"PRIVATE")),ai(new as("heartbeat",e=>new ZA(e),"PRIVATE")),gr(ch,$g,t),gr(ch,$g,"esm2020"),gr("fire-js","")}rN("");function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sN=ew,tw=new Yo("auth","Firebase",ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new xf("@firebase/auth");function iN(t,...e){Hl.logLevel<=se.WARN&&Hl.warn(`Auth (${yi}): ${t}`,...e)}function cl(t,...e){Hl.logLevel<=se.ERROR&&Hl.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Df(t,...e)}function ln(t,...e){return Df(t,...e)}function nw(t,e,n){const r={...sN(),[e]:n};return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return nw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tw.create(t,...e)}function K(t,e,...n){if(!t)throw Df(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function Dn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oN(){return Kg()==="http:"||Kg()==="https:"}function Kg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oN()||j1()||"connection"in navigator)?navigator.onLine:!0}function lN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=V1()||M1()}get(){return aN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dN=new Zo(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function br(t,e,n,r,s={}){return sw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Jo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return L1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Xo(t.emulatorConfig.host)&&(c.credentials="include"),rw.fetch()(await iw(t,t.config.apiHost,n,l),c)})}async function sw(t,e,n){t._canInitEmulator=!1;const r={...uN,...e};try{const s=new fN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nw(t,p,c);Jt(t,p)}}catch(s){if(s instanceof Mn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ea(t,e,n,r,s={}){const i=await br(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function iw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Vf(t.config,s):`${t.config.apiScheme}://${s}`;return cN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function hN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),dN.get())})}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Qg(t){return t!==void 0&&t.enterprise!==void 0}class pN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mN(t,e){return br(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function Gl(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yN(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Of(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mo(Yc(s.auth_time)),issuedAtTime:mo(Yc(s.iat)),expirationTime:mo(Yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function Of(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const s=$E(n);return s?JSON.parse(s):(cl("Failed to decode base64 JWT payload"),null)}catch(s){return cl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yg(t){const e=Of(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&vN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Mo(t,Gl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?ow(s.providerUserInfo):[],o=wN(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ph(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function EN(t){const e=Me(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ow(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){const n=await sw(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await iw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Xo(t.emulatorConfig.host)&&(u.credentials="include"),rw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IN(t,e){return br(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ph(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yN(this,e)}reload(){return EN(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Mo(this,gN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:N,stsTokenManager:x}=n;K(m&&x,e,"internal-error");const D=Qs.fromJSON(this.name,x);K(typeof m=="string",e,"internal-error"),Qn(r,e.name),Qn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),Qn(i,e.name),Qn(o,e.name),Qn(l,e.name),Qn(u,e.name),Qn(c,e.name),Qn(p,e.name);const C=new Ht({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:p});return N&&Array.isArray(N)&&(C.providerData=N.map(E=>({...E}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ow(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qs;l.updateFromIdToken(r);const u=new Ht({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ph(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;function Tn(t){Dn(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
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
 */class aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aw.type="NONE";const Xg=aw;/**
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
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=dl(this.userKey,s.apiKey,i),this.fullPersistenceKey=dl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gl(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(Tn(Xg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Tn(Xg);const o=dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await Gl(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Ht._fromGetAccountInfoResponse(e,g,p)}else m=Ht._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ys(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(pw(e))return"Webos";if(uw(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lw(t=st()){return/firefox\//i.test(t)}function uw(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(t=st()){return/crios\//i.test(t)}function dw(t=st()){return/iemobile/i.test(t)}function hw(t=st()){return/android/i.test(t)}function fw(t=st()){return/blackberry/i.test(t)}function pw(t=st()){return/webos/i.test(t)}function Lf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SN(t=st()){var e;return Lf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AN(){return F1()&&document.documentMode===10}function mw(t=st()){return Lf(t)||hw(t)||pw(t)||fw(t)||/windows phone/i.test(t)||dw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=Zg(st());break;case"Worker":n=`${Zg(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class NN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CN(t,e={}){return br(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const kN=6;class RN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new NN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gl(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(An(this));const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CN(this),n=new RN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&iN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ms(t){return Me(t)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PN(t){ku=t}function yw(t){return ku.loadJS(t)}function bN(){return ku.recaptchaEnterpriseScript}function DN(){return ku.gapiScript}function VN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ON{constructor(){this.enterprise=new LN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class LN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jN="recaptcha-enterprise",vw="NO_RECAPTCHA";class MN{constructor(e){this.type=jN,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{mN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new pN(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Qg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(vw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ON().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Qg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=bN();u.length!==0&&(u+=l),yw(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ty(t,e,n,r=!1,s=!1){const i=new MN(t);let o;if(s)o=vw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function mh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ty(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ty(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t,e){const n=bf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pn(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function UN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zN(t,e,n){const r=ms(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_w(e),{host:o,port:l}=BN(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Pn(c,r.config.emulator)&&Pn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Xo(o)?GE(`${i}//${o}${u}`):$N()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BN(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ny(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ny(o)}}}function ny(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $N(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function qN(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e){return ea(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function GN(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends jf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,n,"signInWithPassword",WN);case"emailLink":return HN(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,r,"signUpPassword",qN);case"emailLink":return GN(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="http://localhost";class ls extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:KN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YN(t){const e=Zi(eo(t)).link,n=e?Zi(eo(e)).deep_link_id:null,r=Zi(eo(t)).deep_link_id;return(r?Zi(eo(r)).link:null)||r||n||e||t}class Mf{constructor(e){const n=Zi(eo(e)),r=n.apiKey??null,s=n.oobCode??null,i=QN(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=YN(e);try{return new Mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mf.parseLink(n);return K(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends Ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ta{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ta{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ta{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return ea(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=ry(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ry(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ry(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ql(e,n,r,s)}}function ww(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,i,e,r):i})}async function XN(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function ZN(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await Mo(t,ww(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Of(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r="signIn",s=await ww(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function eC(t,e){return Tw(ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tC(t,e,n){if(Dt(t.app))return Promise.reject(An(t));const r=ms(t),o=await mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Iw(t),u}),l=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function nC(t,e,n){return Dt(t.app)?Promise.reject(An(t)):eC(Me(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Iw(t),r})}function rC(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function sC(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function iC(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function oC(t){return Me(t).signOut()}const Yl="__sak";/**
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
 */class Sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1e3,lC=10;class Aw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Aw.type="LOCAL";const uC=Aw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nw.type="SESSION";const Cw=Nw;/**
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
 */function cC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await cC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Ff("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function hC(t){un().location.href=t}/**
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
 */function kw(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function fC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function mC(){return kw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",gC=1,Jl="firebaseLocalStorage",xw="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function yC(){const t=indexedDB.deleteDatabase(Rw);return new na(t).toPromise()}function gh(){const t=indexedDB.open(Rw,gC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:xw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await yC(),e(await gh()))})})}async function sy(t,e,n){const r=xu(t,!0).put({[xw]:e,value:n});return new na(r).toPromise()}async function vC(t,e){const n=xu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function iy(t,e){const n=xu(t,!0).delete(e);return new na(n).toPromise()}const _C=800,EC=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new dC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gh();return await sy(e,Yl,"1"),await iy(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xu(s,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const wC=Pw;new Zo(3e4,6e4);/**
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
 */function TC(t,e){return e?Tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uf extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IC(t){return Tw(t.auth,new Uf(t),t.bypassAuthState)}function SC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ZN(n,new Uf(t),t.bypassAuthState)}async function AC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),XN(n,new Uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return AC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:Jt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Zo(2e3,1e4);class Bs extends bw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NC.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="pendingRedirect",hl=new Map;class kC extends bw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await RC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RC(t,e){const n=bC(e),r=PC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xC(t,e){hl.set(t._key(),e)}function PC(t){return Tn(t._redirectPersistence)}function bC(t){return dl(CC,t.config.apiKey,t.name)}async function DC(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r=ms(t),s=TC(r,e),o=await new kC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=10*60*1e3;class OC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VC&&this.cachedEventUids.clear(),this.cachedEventUids.has(oy(e))}saveEventToCache(e){this.cachedEventUids.add(oy(e)),this.lastProcessedEventTime=Date.now()}}function oy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e={}){return br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function UC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jC(t);for(const n of e)try{if(zC(n))return}catch{}Jt(t,"unauthorized-domain")}function zC(t){const e=fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FC.test(n))return!1;if(MC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const BC=new Zo(3e4,6e4);function ay(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $C(t){return new Promise((e,n)=>{var s,i,o;function r(){ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ay(),n(ln(t,"network-request-failed"))},timeout:BC.get()})}if((i=(s=un().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=un().gapi)!=null&&o.load)r();else{const l=VN("iframefcb");return un()[l]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},yw(`${DN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw fl=null,e})}let fl=null;function qC(t){return fl=fl||$C(t),fl}/**
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
 */const WC=new Zo(5e3,15e3),HC="__/auth/iframe",GC="emulator/auth/iframe",KC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vf(e,GC):`https://${t.config.authDomain}/${HC}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=QC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jo(r).slice(1)}`}async function JC(t){const e=await qC(t),n=un().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:YC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{i(o)},WC.get());function u(){un().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const XC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,ek=600,tk="_blank",nk="http://localhost";class ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rk(t,e,n,r=ZC,s=ek){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...XC,width:r.toString(),height:s.toString(),top:i,left:o},c=st().toLowerCase();n&&(l=cw(c)?tk:n),lw(c)&&(e=e||nk,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[S,N])=>`${g}${S}=${N},`,"");if(SN(c)&&l!=="_self")return sk(e||"",l),new ly(null);const m=window.open(e||"",l,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new ly(m)}function sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ik="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function uy(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof Ew){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ta){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${ak}=${encodeURIComponent(u)}`:"";return`${lk(t)}?${Jo(l).slice(1)}${c}`}function lk({config:t}){return t.emulator?Vf(t,ok):`https://${t.authDomain}/${ik}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cw,this._completeRedirectFn=DC,this._overrideRedirectResult=xC}async _openPopup(e,n,r,s){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await uy(e,n,r,fh(),s);return rk(e,i,Ff())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await uy(e,n,r,fh(),s);return hC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JC(e),r=new OC(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Jc];i!==void 0&&n(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||uw()||Lf()}}const ck=uk;var cy="@firebase/auth",dy="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fk(t){ai(new as("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},c=new xN(r,s,i,u);return UN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new as("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new dk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(cy,dy,hk(t)),gr(cy,dy,"esm2020")}/**
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
 */const pk=5*60,mk=HE("authIdTokenMaxAge")||pk;let hy=null;const gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mk)return;const s=n==null?void 0:n.token;hy!==s&&(hy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yk(t=JE()){const e=bf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FN(t,{popupRedirectResolver:ck,persistence:[wC,uC,Cw]}),r=HE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gk(i.toString());sC(n,o,()=>o(n.currentUser)),rC(n,l=>o(l))}}const s=qE("auth");return s&&zN(n,`http://${s}`),n}function vk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}PN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fk("Browser");var _k="firebase",Ek="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(_k,Ek,"app");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,Vw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function y(){}y.prototype=_.prototype,w.F=_.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(I,k,R){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return _.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,y){y||(y=0);const I=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)I[k]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(k=0;k<16;++k)I[k]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=w.g[0],y=w.g[1],k=w.g[2];let R=w.g[3],T;T=_+(R^y&(k^R))+I[0]+3614090360&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(k^_&(y^k))+I[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(y^R&(_^y))+I[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=y+(_^k&(R^_))+I[3]+3250441966&4294967295,y=k+(T<<22&4294967295|T>>>10),T=_+(R^y&(k^R))+I[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(k^_&(y^k))+I[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(y^R&(_^y))+I[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=y+(_^k&(R^_))+I[7]+4249261313&4294967295,y=k+(T<<22&4294967295|T>>>10),T=_+(R^y&(k^R))+I[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(k^_&(y^k))+I[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(y^R&(_^y))+I[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=y+(_^k&(R^_))+I[11]+2304563134&4294967295,y=k+(T<<22&4294967295|T>>>10),T=_+(R^y&(k^R))+I[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=R+(k^_&(y^k))+I[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(y^R&(_^y))+I[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=y+(_^k&(R^_))+I[15]+1236535329&4294967295,y=k+(T<<22&4294967295|T>>>10),T=_+(k^R&(y^k))+I[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^k&(_^y))+I[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^y&(R^_))+I[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(k^R))+I[0]+3921069994&4294967295,y=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(y^k))+I[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^k&(_^y))+I[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^y&(R^_))+I[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(k^R))+I[4]+3889429448&4294967295,y=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(y^k))+I[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^k&(_^y))+I[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^y&(R^_))+I[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(k^R))+I[8]+1163531501&4294967295,y=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(y^k))+I[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=R+(y^k&(_^y))+I[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^y&(R^_))+I[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=y+(R^_&(k^R))+I[12]+2368359562&4294967295,y=k+(T<<20&4294967295|T>>>12),T=_+(y^k^R)+I[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^k)+I[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^y)+I[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=y+(k^R^_)+I[14]+4259657740&4294967295,y=k+(T<<23&4294967295|T>>>9),T=_+(y^k^R)+I[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^k)+I[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^y)+I[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=y+(k^R^_)+I[10]+3200236656&4294967295,y=k+(T<<23&4294967295|T>>>9),T=_+(y^k^R)+I[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^k)+I[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^y)+I[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=y+(k^R^_)+I[6]+76029189&4294967295,y=k+(T<<23&4294967295|T>>>9),T=_+(y^k^R)+I[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=R+(_^y^k)+I[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^y)+I[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=y+(k^R^_)+I[2]+3299628645&4294967295,y=k+(T<<23&4294967295|T>>>9),T=_+(k^(y|~R))+I[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~k))+I[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~y))+I[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=y+(R^(k|~_))+I[5]+4237533241&4294967295,y=k+(T<<21&4294967295|T>>>11),T=_+(k^(y|~R))+I[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~k))+I[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~y))+I[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=y+(R^(k|~_))+I[1]+2240044497&4294967295,y=k+(T<<21&4294967295|T>>>11),T=_+(k^(y|~R))+I[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~k))+I[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~y))+I[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=y+(R^(k|~_))+I[13]+1309151649&4294967295,y=k+(T<<21&4294967295|T>>>11),T=_+(k^(y|~R))+I[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=R+(y^(_|~k))+I[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~y))+I[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=y+(R^(k|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const y=_-this.blockSize,I=this.C;let k=this.h,R=0;for(;R<_;){if(k==0)for(;R<=y;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<_;)if(I[k++]=w.charCodeAt(R++),k==this.blockSize){s(this,I),k=0;break}}else for(;R<_;)if(I[k++]=w[R++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)w[_++]=this.g[y]>>>I&255;return w};function i(w,_){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=_(w)}function o(w,_){this.h=_;const y=[];let I=!0;for(let k=w.length-1;k>=0;k--){const R=w[k]|0;I&&R==_||(y[k]=R,I=!1)}this.g=y}var l={};function u(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return D(c(-w));const _=[];let y=1;for(let I=0;w>=y;I++)_[I]=w/y|0,y*=4294967296;return new o(_,0)}function p(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(p(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=c(Math.pow(_,8));let I=m;for(let R=0;R<w.length;R+=8){var k=Math.min(8,w.length-R);const T=parseInt(w.substring(R,R+k),_);k<8?(k=c(Math.pow(_,k)),I=I.j(k).add(c(T))):(I=I.j(y),I=I.add(c(T)))}return I}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();let w=0,_=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(x(this))return"-"+D(this).toString(w);const _=c(Math.pow(w,6));var y=this;let I="";for(;;){const k=V(y,_).g;y=C(y,k.j(_));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=k,N(y))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=C(this,w),x(w)?-1:N(w)?0:1};function D(w){const _=w.g.length,y=[];for(let I=0;I<_;I++)y[I]=~w.g[I];return new o(y,~w.h).add(g)}t.abs=function(){return x(this)?D(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),y=[];let I=0;for(let k=0;k<=_;k++){let R=I+(this.i(k)&65535)+(w.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);I=T>>>16,R&=65535,T&=65535,y[k]=T<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function C(w,_){return w.add(D(_))}t.j=function(w){if(N(this)||N(w))return m;if(x(this))return x(w)?D(this).j(D(w)):D(D(this).j(w));if(x(w))return D(this.j(D(w)));if(this.l(S)<0&&w.l(S)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,y=[];for(var I=0;I<2*_;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<w.g.length;k++){const R=this.i(I)>>>16,T=this.i(I)&65535,de=w.i(k)>>>16,Rt=w.i(k)&65535;y[2*I+2*k]+=T*Rt,E(y,2*I+2*k),y[2*I+2*k+1]+=R*Rt,E(y,2*I+2*k+1),y[2*I+2*k+1]+=T*de,E(y,2*I+2*k+1),y[2*I+2*k+2]+=R*de,E(y,2*I+2*k+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function E(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function A(w,_){this.g=w,this.h=_}function V(w,_){if(N(_))throw Error("division by zero");if(N(w))return new A(m,m);if(x(w))return _=V(D(w),_),new A(D(_.g),D(_.h));if(x(_))return _=V(w,D(_)),new A(D(_.g),_.h);if(w.g.length>30){if(x(w)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=_;I.l(w)<=0;)y=P(y),I=P(I);var k=j(y,1),R=j(I,1);for(I=j(I,2),y=j(y,2);!N(I);){var T=R.add(I);T.l(w)<=0&&(k=k.add(y),R=T),I=j(I,1),y=j(y,1)}return _=C(w,k.j(_)),new A(k,_)}for(k=m;w.l(_)>=0;){for(y=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=c(y),T=R.j(_);x(T)||T.l(w)>0;)y-=I,R=c(y),T=R.j(_);N(R)&&(R=g),k=k.add(R),w=C(w,T)}return new A(k,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)&w.i(I);return new o(y,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)|w.i(I);return new o(y,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)^w.i(I);return new o(y,this.h^w.h)};function P(w){const _=w.g.length+1,y=[];for(let I=0;I<_;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(y,w.h)}function j(w,_){const y=_>>5;_%=32;const I=w.g.length-y,k=[];for(let R=0;R<I;R++)k[R]=_>0?w.i(R+y)>>>_|w.i(R+y+1)<<32-_:w.i(R+y);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Vw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,yr=o}).apply(typeof fy<"u"?fy:typeof self<"u"?self:typeof window<"u"?window:{});var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ow,to,Lw,pl,yh,jw,Mw,Fw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof za=="object"&&za];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var b=a[v];if(!(b in f))break e;f=f[b]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var f=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&f.push([v,d[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,f){return a.call.apply(a.bind,arguments)}function c(a,d,f){return c=u,c.apply(null,arguments)}function p(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(v,b,L){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return d.prototype[b].apply(v,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const d=a.length;if(d>0){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function N(a,d){for(let v=1;v<arguments.length;v++){const b=arguments[v];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const L=b.length||0;a.length=f+L;for(let z=0;z<L;z++)a[f+z]=b[z]}else a.push(b)}}class x{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function C(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class E{constructor(){this.h=this.g=null}add(d,f){const v=A.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var A=new x(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let P,j=!1,w=new E,_=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(y)}};function y(){for(var a;a=C();){try{a.h.call(a.g)}catch(f){D(f)}var d=A;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}j=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function de(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}m(de,k),de.prototype.init=function(a,d){const f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rt="closure_listenable_"+(Math.random()*1e6|0),q=0;function it(a,d,f,v,b){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=b,this.key=++q,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function Z(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function ve(a){const d={};for(const f in a)d[f]=a[f];return d}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mr(a,d){let f,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(f in v)a[f]=v[f];for(let L=0;L<Ce.length;L++)f=Ce[L],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function xt(a){this.src=a,this.g={},this.h=0}xt.prototype.add=function(a,d,f,v,b){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const z=Ut(a,d,v,b);return z>-1?(d=a[z],f||(d.fa=!1)):(d=new it(d,this.src,L,!!v,b),d.fa=f,a.push(d)),d};function Fr(a,d){const f=d.type;if(f in a.g){var v=a.g[f],b=Array.prototype.indexOf.call(v,d,void 0),L;(L=b>=0)&&Array.prototype.splice.call(v,b,1),L&&(B(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ut(a,d,f,v){for(let b=0;b<a.length;++b){const L=a[b];if(!L.da&&L.listener==d&&L.capture==!!f&&L.ha==v)return b}return-1}var zn="closure_lm_"+(Math.random()*1e6|0),Xu={};function Pp(a,d,f,v,b){if(Array.isArray(d)){for(let L=0;L<d.length;L++)Pp(a,d[L],f,v,b);return null}return f=Vp(f),a&&a[Rt]?a.J(d,f,l(v)?!!v.capture:!1,b):T0(a,d,f,!1,v,b)}function T0(a,d,f,v,b,L){if(!d)throw Error("Invalid event type");const z=l(b)?!!b.capture:!!b;let ee=ec(a);if(ee||(a[zn]=ee=new xt(a)),f=ee.add(d,f,v,z,L),f.proxy)return f;if(v=I0(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)R||(b=z),b===void 0&&(b=!1),a.addEventListener(d.toString(),v,b);else if(a.attachEvent)a.attachEvent(Dp(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function I0(){function a(f){return d.call(a.src,a.listener,f)}const d=S0;return a}function bp(a,d,f,v,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)bp(a,d[L],f,v,b);else v=l(v)?!!v.capture:!!v,f=Vp(f),a&&a[Rt]?(a=a.i,L=String(d).toString(),L in a.g&&(d=a.g[L],f=Ut(d,f,v,b),f>-1&&(B(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[L],a.h--)))):a&&(a=ec(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ut(d,f,v,b)),(f=a>-1?d[a]:null)&&Zu(f))}function Zu(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Rt])Fr(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(Dp(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=ec(d))?(Fr(f,a),f.h==0&&(f.src=null,d[zn]=null)):B(a)}}}function Dp(a){return a in Xu?Xu[a]:Xu[a]="on"+a}function S0(a,d){if(a.da)a=!0;else{d=new de(d,this);const f=a.listener,v=a.ha||a.src;a.fa&&Zu(a),a=f.call(v,d)}return a}function ec(a){return a=a[zn],a instanceof xt?a:null}var tc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vp(a){return typeof a=="function"?a:(a[tc]||(a[tc]=function(d){return a.handleEvent(d)}),a[tc])}function Ye(){I.call(this),this.i=new xt(this),this.M=this,this.G=null}m(Ye,I),Ye.prototype[Rt]=!0,Ye.prototype.removeEventListener=function(a,d,f,v){bp(this,a,d,f,v)};function ot(a,d){var f,v=a.G;if(v)for(f=[];v;v=v.G)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var b=d;d=new k(v,a),Mr(d,b)}b=!0;let L,z;if(f)for(z=f.length-1;z>=0;z--)L=d.g=f[z],b=da(L,v,!0,d)&&b;if(L=d.g=a,b=da(L,v,!0,d)&&b,b=da(L,v,!1,d)&&b,f)for(z=0;z<f.length;z++)L=d.g=f[z],b=da(L,v,!1,d)&&b}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let v=0;v<f.length;v++)B(f[v]);delete a.g[d],a.h--}}this.G=null},Ye.prototype.J=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},Ye.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function da(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let b=!0;for(let L=0;L<d.length;++L){const z=d[L];if(z&&!z.da&&z.capture==f){const ee=z.listener,Ve=z.ha||z.src;z.fa&&Fr(a.i,z),b=ee.call(Ve,v)!==!1&&b}}return b&&!v.defaultPrevented}function A0(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Op(a){a.g=A0(()=>{a.g=null,a.i&&(a.i=!1,Op(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class N0 extends I{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Op(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){I.call(this),this.h=a,this.g={}}m(Si,I);var Lp=[];function jp(a){Y(a.g,function(d,f){this.g.hasOwnProperty(f)&&Zu(d)},a),a.g={}}Si.prototype.N=function(){Si.Z.N.call(this),jp(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=o.JSON.stringify,C0=o.JSON.parse,k0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Mp(){}function Fp(){}var Ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rc(){k.call(this,"d")}m(rc,k);function sc(){k.call(this,"c")}m(sc,k);var Ur={},Up=null;function ha(){return Up=Up||new Ye}Ur.Ia="serverreachability";function zp(a){k.call(this,Ur.Ia,a)}m(zp,k);function Ni(a){const d=ha();ot(d,new zp(d))}Ur.STAT_EVENT="statevent";function Bp(a,d){k.call(this,Ur.STAT_EVENT,a),this.stat=d}m(Bp,k);function at(a){const d=ha();ot(d,new Bp(d,a))}Ur.Ja="timingevent";function $p(a,d){k.call(this,Ur.Ja,a),this.size=d}m($p,k);function Ci(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function ki(){this.g=!0}ki.prototype.ua=function(){this.g=!1};function R0(a,d,f,v,b,L){a.info(function(){if(a.g)if(L){var z="",ee=L.split("&");for(let ce=0;ce<ee.length;ce++){var Ve=ee[ce].split("=");if(Ve.length>1){const Fe=Ve[0];Ve=Ve[1];const en=Fe.split("_");z=en.length>=2&&en[1]=="type"?z+(Fe+"="+Ve+"&"):z+(Fe+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+d+`
`+f+`
`+z})}function x0(a,d,f,v,b,L,z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+d+`
`+f+`
`+L+" "+z})}function Es(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+b0(a,f)+(v?" "+v:"")})}function P0(a,d){a.info(function(){return"TIMEOUT: "+d})}ki.prototype.info=function(){};function b0(a,d){if(!a.g)return d;if(!d)return null;try{const L=JSON.parse(d);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var f=L[a];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var b=v[0];if(b!="noop"&&b!="stop"&&b!="close")for(let z=1;z<v.length;z++)v[z]=""}}}}return nc(L)}catch{return d}}var fa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wp;function ic(){}m(ic,Mp),ic.prototype.g=function(){return new XMLHttpRequest},Wp=new ic;function Ri(a){return encodeURIComponent(String(a))}function D0(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function Bn(a,d,f,v){this.j=a,this.i=d,this.l=f,this.S=v||1,this.V=new Si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var Gp={},oc={};function ac(a,d,f){a.M=1,a.A=ma(Zt(d)),a.u=f,a.R=!0,Kp(a,null)}function Kp(a,d){a.F=Date.now(),pa(a),a.B=Zt(a.A);var f=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),am(f.i,"t",v),a.C=0,f=a.j.L,a.h=new Hp,a.g=Am(a.j,f?d:null,!a.u),a.P>0&&(a.O=new N0(c(a.Y,a,a.g),a.P)),d=a.V,f=a.g,v=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Lp[0]=b.toString()),b=Lp);for(let L=0;L<b.length;L++){const z=Pp(f,b[L],v||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.J?ve(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Ni(),R0(a.i,a.v,a.B,a.l,a.S,a.u)}Bn.prototype.ba=function(a){a=a.target;const d=this.O;d&&Wn(a)==3?d.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Wn(this.g),Ve=this.g.ya(),ce=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||pm(this.g)))){this.K||ee!=4||Ve==7||(Ve==8||ce<=0?Ni(3):Ni(2)),lc(this);var d=this.g.ca();this.X=d;var f=V0(this);if(this.o=d==200,x0(this.i,this.v,this.B,this.l,this.S,ee,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,b=this.g;if((v=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var L=v;break t}}L=null}if(a=L)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uc(this,a);else{this.o=!1,this.m=3,at(12),zr(this),xi(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<f.length;)if(Fe=O0(this,f),Fe==oc){ee==4&&(this.m=4,at(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Gp){this.m=4,at(15),Es(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,Fe,null),uc(this,Fe);if(Qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,at(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,f,"[Invalid Chunked Response]"),zr(this),xi(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),yc(z),z.P=!0,at(11))}}else Es(this.i,this.l,f,null),uc(this,f);ee==4&&zr(this),this.o&&!this.K&&(ee==4?wm(this.j,this):(this.o=!1,pa(this)))}else Q0(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),zr(this),xi(this)}}}catch{}finally{}};function V0(a){if(!Qp(a))return a.g.la();const d=pm(a.g);if(d==="")return"";let f="";const v=d.length,b=Wn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zr(a),xi(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<v;L++)a.h.h=!0,f+=a.h.i.decode(d[L],{stream:!(b&&L==v-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function Qp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function O0(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?oc:(f=Number(d.substring(f,v)),isNaN(f)?Gp:(v+=1,v+f>d.length?oc:(d=d.slice(v,v+f),a.C=v+f,d)))}Bn.prototype.cancel=function(){this.K=!0,zr(this)};function pa(a){a.T=Date.now()+a.H,Yp(a,a.H)}function Yp(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ci(c(a.aa,a),d)}function lc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(P0(this.i,this.B),this.M!=2&&(Ni(),at(17)),zr(this),this.m=2,xi(this)):Yp(this,this.T-a)};function xi(a){a.j.I==0||a.K||wm(a.j,a)}function zr(a){lc(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,jp(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function uc(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||cc(f.h,a))){if(!a.L&&cc(f.h,a)&&f.I==3){try{var v=f.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ea(f),va(f);else break e;gc(f),at(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ci(c(f.Va,f),6e3));Zp(f.h)<=1&&f.ta&&(f.ta=void 0)}else $r(f,11)}else if((a.L||f.g==a)&&Ea(f),!T(d))for(b=f.Ba.g.parse(d),d=0;d<b.length;d++){let ce=b[d];const Fe=ce[0];if(!(Fe<=f.K))if(f.K=Fe,ce=ce[1],f.I==2)if(ce[0]=="c"){f.M=ce[1],f.ba=ce[2];const en=ce[3];en!=null&&(f.ka=en,f.j.info("VER="+f.ka));const qr=ce[4];qr!=null&&(f.za=qr,f.j.info("SVER="+f.za));const Hn=ce[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(v=1.5*Hn,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Gn=a.g;if(Gn){const Ta=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var L=v.h;L.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(dc(L,L.h),L.h=null))}if(v.G){const vc=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(v.wa=vc,pe(v.J,v.G,vc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var z=a;if(v.na=Sm(v,v.L?v.ba:null,v.W),z.L){em(v.h,z);var ee=z,Ve=v.O;Ve&&(ee.H=Ve),ee.D&&(lc(ee),pa(ee)),v.g=z}else _m(v);f.i.length>0&&_a(f)}else ce[0]!="stop"&&ce[0]!="close"||$r(f,7);else f.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?$r(f,7):mc(f):ce[0]!="noop"&&f.l&&f.l.qa(ce),f.A=0)}}Ni(4)}catch{}}var L0=class{constructor(a,d){this.g=a,this.map=d}};function Jp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zp(a){return a.h?1:a.g?a.g.size:0}function cc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dc(a,d){a.g?a.g.add(d):a.h=d}function em(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Jp.prototype.cancel=function(){if(this.i=tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return S(a.i)}var nm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j0(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const v=a[f].indexOf("=");let b,L=null;v>=0?(b=a[f].substring(0,v),L=a[f].substring(v+1)):b=a[f],d(b,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof $n?(this.l=a.l,Pi(this,a.j),this.o=a.o,this.g=a.g,bi(this,a.u),this.h=a.h,hc(this,lm(a.i)),this.m=a.m):a&&(d=String(a).match(nm))?(this.l=!1,Pi(this,d[1]||"",!0),this.o=Di(d[2]||""),this.g=Di(d[3]||"",!0),bi(this,d[4]),this.h=Di(d[5]||"",!0),hc(this,d[6]||"",!0),this.m=Di(d[7]||"")):(this.l=!1,this.i=new Oi(null,this.l))}$n.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Vi(d,rm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Vi(d,rm,!0),"@"),a.push(Ri(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vi(f,f.charAt(0)=="/"?U0:F0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vi(f,B0)),a.join("")},$n.prototype.resolve=function(a){const d=Zt(this);let f=!!a.j;f?Pi(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var v=a.h;if(f)bi(d,a.u);else if(f=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var b=d.h.lastIndexOf("/");b!=-1&&(v=d.h.slice(0,b+1)+v)}if(b=v,b==".."||b==".")v="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){v=b.lastIndexOf("/",0)==0,b=b.split("/");const L=[];for(let z=0;z<b.length;){const ee=b[z++];ee=="."?v&&z==b.length&&L.push(""):ee==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&z==b.length&&L.push("")):(L.push(ee),v=!0)}v=L.join("/")}else v=b}return f?d.h=v:f=a.i.toString()!=="",f?hc(d,lm(a.i)):f=!!a.m,f&&(d.m=a.m),d};function Zt(a){return new $n(a)}function Pi(a,d,f){a.j=f?Di(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function bi(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function hc(a,d,f){d instanceof Oi?(a.i=d,$0(a.i,a.l)):(f||(d=Vi(d,z0)),a.i=new Oi(d,a.l))}function pe(a,d,f){a.i.set(d,f)}function ma(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Di(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,M0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function M0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rm=/[#\/\?@]/g,F0=/[#\?:]/g,U0=/[#\?]/g,z0=/[#\?@]/g,B0=/#/g;function Oi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&j0(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Oi.prototype,t.add=function(a,d){Br(this),this.i=null,a=ws(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function sm(a,d){Br(a),d=ws(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function im(a,d){return Br(a),d=ws(a,d),a.g.has(d)}t.forEach=function(a,d){Br(this),this.g.forEach(function(f,v){f.forEach(function(b){a.call(d,b,v,this)},this)},this)};function om(a,d){Br(a);let f=[];if(typeof d=="string")im(a,d)&&(f=f.concat(a.g.get(ws(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}t.set=function(a,d){return Br(this),this.i=null,a=ws(this,a),im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=om(this,a),a.length>0?String(a[0]):d):d};function am(a,d,f){sm(a,d),f.length>0&&(a.i=null,a.g.set(ws(a,d),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var f=d[v];const b=Ri(f);f=om(this,f);for(let L=0;L<f.length;L++){let z=b;f[L]!==""&&(z+="="+Ri(f[L])),a.push(z)}}return this.i=a.join("&")};function lm(a){const d=new Oi;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function ws(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function $0(a,d){d&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(f,v){const b=v.toLowerCase();v!=b&&(sm(this,v),am(this,b,f))},a)),a.j=d}function q0(a,d){const f=new ki;if(o.Image){const v=new Image;v.onload=p(qn,f,"TestLoadImage: loaded",!0,d,v),v.onerror=p(qn,f,"TestLoadImage: error",!1,d,v),v.onabort=p(qn,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=p(qn,f,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function W0(a,d){const f=new ki,v=new AbortController,b=setTimeout(()=>{v.abort(),qn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(b),L.ok?qn(f,"TestPingServer: ok",!0,d):qn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),qn(f,"TestPingServer: error",!1,d)})}function qn(a,d,f,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(f)}catch{}}function H0(){this.g=new k0}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(fc,Mp),fc.prototype.g=function(){return new ga(this.i,this.h)};function ga(a,d){Ye.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ga,Ye),t=ga.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;um(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function um(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Li(this):ji(this),this.readyState==3&&um(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Li(this))},t.Na=function(a){this.g&&(this.response=a,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ji(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cm(a){let d="";return Y(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function pc(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=cm(f),typeof a=="string"?f!=null&&Ri(f):pe(a,d,f))}function Se(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Ye);var G0=/^https?$/i,K0=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){dm(this,L);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)f.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(K0,d,void 0)>=0)||v||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of f)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){dm(this,L)}};function dm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,hm(a),ya(a)}function hm(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ot(this,"complete"),ot(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?fm(this):this.Xa())},t.Xa=function(){fm(this)};function fm(a){if(a.h&&typeof i<"u"){if(a.v&&Wn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ot(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=L===0){let z=String(a.D).match(nm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),v=!G0.test(z?z.toLowerCase():"")}f=v}if(f)ot(a,"complete"),ot(a,"success");else{a.o=6;try{var b=Wn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",hm(a)}}finally{ya(a)}}}}function ya(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||ot(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Wn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),C0(d)}};function pm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Q0(a){const d={};a=(a.g&&Wn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var f=D0(a[v]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=d[b]||[];d[b]=L,L.push(f)}Z(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function mm(a){this.za=0,this.i=[],this.j=new ki,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mi("baseRetryDelayMs",5e3,a),this.Za=Mi("retryDelaySeedMs",1e4,a),this.Ta=Mi("forwardChannelMaxRetries",2,a),this.va=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Jp(a&&a.concurrentRequestLimit),this.Ba=new H0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=mm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,f,v){at(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=Sm(this,null,this.W),_a(this)};function mc(a){if(gm(a),a.I==3){var d=a.V++,f=Zt(a.J);if(pe(f,"SID",a.M),pe(f,"RID",d),pe(f,"TYPE","terminate"),Fi(a,f),d=new Bn(a,a.j,d),d.M=2,d.A=ma(Zt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=Am(d.j,null),d.g.ea(d.A)),d.F=Date.now(),pa(d)}Im(a)}function va(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function gm(a){va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ea(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function _a(a){if(!Xp(a.h)&&!a.m){a.m=!0;var d=a.Ea;P||_(),j||(P(),j=!0),w.add(d,a),a.D=0}}function Y0(a,d){return Zp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ci(c(a.Ea,a,d),Tm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new Bn(this,this.j,a);let L=this.o;if(this.U&&(L?(L=ve(L),Mr(L,this.U)):L=this.U),this.u!==null||this.R||(b.J=L,L=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=vm(this,b,d),f=Zt(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),Fi(this,f),L&&(this.R?d="headers="+Ri(cm(L))+"&"+d:this.u&&pc(f,this.u,L)),dc(this.h,b),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",d),pe(f,"SID","null"),b.U=!0,ac(b,f,null)):ac(b,f,d),this.I=2}}else this.I==3&&(a?ym(this,a):this.i.length==0||Xp(this.h)||ym(this))};function ym(a,d){var f;d?f=d.l:f=a.V++;const v=Zt(a.J);pe(v,"SID",a.M),pe(v,"RID",f),pe(v,"AID",a.K),Fi(a,v),a.u&&a.o&&pc(v,a.u,a.o),f=new Bn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=vm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),dc(a.h,f),ac(f,v,d)}function Fi(a,d){a.H&&Y(a.H,function(f,v){pe(d,v,f)}),a.l&&Y({},function(f,v){pe(d,v,f)})}function vm(a,d,f){f=Math.min(a.i.length,f);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let ee=-1;for(;;){const Ve=["count="+f];ee==-1?f>0?(ee=b[0].g,Ve.push("ofs="+ee)):ee=0:Ve.push("ofs="+ee);let ce=!0;for(let Fe=0;Fe<f;Fe++){var L=b[Fe].g;const en=b[Fe].map;if(L-=ee,L<0)ee=Math.max(0,b[Fe].g-100),ce=!1;else try{L="req"+L+"_"||"";try{var z=en instanceof Map?en:Object.entries(en);for(const[qr,Hn]of z){let Gn=Hn;l(Hn)&&(Gn=nc(Hn)),Ve.push(L+qr+"="+encodeURIComponent(Gn))}}catch(qr){throw Ve.push(L+"type="+encodeURIComponent("_badmap")),qr}}catch{v&&v(en)}}if(ce){z=Ve.join("&");break e}}z=void 0}return a=a.i.splice(0,f),d.G=a,z}function _m(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;P||_(),j||(P(),j=!0),w.add(d,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ci(c(a.Da,a),Tm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Em(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ci(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),va(this),Em(this))};function yc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Em(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Zt(a.na);pe(d,"RID","rpc"),pe(d,"SID",a.M),pe(d,"AID",a.K),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(d,"TO",a.ia),pe(d,"TYPE","xmlhttp"),Fi(a,d),a.u&&a.o&&pc(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ma(Zt(d)),f.u=null,f.R=!0,Kp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,va(this),gc(this),at(19))};function Ea(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wm(a,d){var f=null;if(a.g==d){Ea(a),yc(a),a.g=null;var v=2}else if(cc(a.h,d))f=d.G,em(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var b=a.D;v=ha(),ot(v,new $p(v,f)),_a(a)}else _m(a);else if(b=d.m,b==3||b==0&&d.X>0||!(v==1&&Y0(a,d)||v==2&&gc(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),b){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Tm(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function $r(a,d){if(a.j.info("Error code "+d),d==2){var f=c(a.bb,a),v=a.Ua;const b=!v;v=new $n(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Pi(v,"https"),ma(v),b?q0(v.toString(),f):W0(v.toString(),f)}else at(2);a.I=0,a.l&&a.l.pa(d),Im(a),gm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Im(a){if(a.I=0,a.ja=[],a.l){const d=tm(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ja,d),N(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Sm(a,d,f){var v=f instanceof $n?Zt(f):new $n(f);if(v.g!="")d&&(v.g=d+"."+v.g),bi(v,v.u);else{var b=o.location;v=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;const L=new $n(null);v&&Pi(L,v),d&&(L.g=d),b&&bi(L,b),f&&(L.h=f),v=L}return f=a.G,d=a.wa,f&&d&&pe(v,f,d),pe(v,"VER",a.ka),Fi(a,v),v}function Am(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Se(new fc({ab:f})):new Se(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wa(){}wa.prototype.g=function(a,d){return new wt(a,d)};function wt(a,d){Ye.call(this),this.g=new mm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ts(this)}m(wt,Ye),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){mc(this.g)},wt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=nc(a),a=f);d.i.push(new L0(d.Ya++,a)),d.I==3&&_a(d)},wt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,wt.Z.N.call(this)};function Cm(a){rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}m(Cm,rc);function km(){sc.call(this),this.status=1}m(km,sc);function Ts(a){this.g=a}m(Ts,Nm),Ts.prototype.ra=function(){ot(this.g,"a")},Ts.prototype.qa=function(a){ot(this.g,new Cm(a))},Ts.prototype.pa=function(a){ot(this.g,new km)},Ts.prototype.oa=function(){ot(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Fw=function(){return new wa},Mw=function(){return ha()},jw=Ur,yh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,pl=fa,qp.COMPLETE="complete",Lw=qp,Fp.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,to=Fp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Ow=Se}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let _i="12.13.0";function wk(t){_i=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cs=new xf("@firebase/firestore");function Ns(){return cs.logLevel}function W(t,...e){if(cs.logLevel<=se.DEBUG){const n=e.map(zf);cs.debug(`Firestore (${_i}): ${t}`,...n)}}function Vn(t,...e){if(cs.logLevel<=se.ERROR){const n=e.map(zf);cs.error(`Firestore (${_i}): ${t}`,...n)}}function ds(t,...e){if(cs.logLevel<=se.WARN){const n=e.map(zf);cs.warn(`Firestore (${_i}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Uw(t,r,n)}function Uw(t,e,n){let r=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function le(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Uw(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Ik{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new zw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class Ak{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ak(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ck{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new py(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new py(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function vh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xc(s)===Xc(i)?te(s,i):Xc(s)?1:-1}return te(t.length,e.length)}const Rk=55296,xk=57343;function Xc(t){const e=t.charCodeAt(0);return e>=Rk&&e<=xk}function li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):vh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yr.fromString(e.substring(4,e.length-2))}}class he extends rn{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const Pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends rn{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===my}static keyField(){return new He([my])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bw(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bk(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!G.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(G.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $w(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function _t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function ra(t,e){if(!$w(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=-62135596800,_y=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_y);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<vy)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_y}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ra(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:De("string",ge._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Uo=-1;function Dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new wr(s,G.empty(),e)}function Vk(t){return new wr(t.readTime,t.key,Uo)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(J.min(),G.empty(),Uo)}static max(){return new wr(J.max(),G.empty(),Uo)}}function Ok(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Lk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Mk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=-1;function Du(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function Fk(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="";function Uk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ey(e)),e=zk(t.get(n),e);return Ey(e)}function zk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case qw:n+="";break;default:n+=i}}return n}function Ey(t){return t+qw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new je(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hw("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Bk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=Bk.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="server_timestamp",Kw="__type__",Qw="__previous_value__",Yw="__local_write_time__";function qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Kw])==null?void 0:r.stringValue)===Gw}function Vu(t){const e=t.mapValue.fields[Qw];return qf(e)?Vu(e):e}function zo(t){const e=Tr(t.mapValue.fields[Yw].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,r,s,i,o,l,u,c,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p,this.apiKey=m}}const Zl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||Zl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===Zl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}function qk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="__type__",Wk="__max__",$a={mapValue:{}},Xw="__vector__",eu="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qf(t)?4:Gk(t)?9007199254740991:Hk(t)?10:11:Q(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),l=Tr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wy(o)!==wy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(zo(t),zo(e));case 5:return vh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ir(i),u=Ir(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=te(l[c],u[c]);if(p!==0)return p}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(ke(i.latitude),ke(o.latitude));return l!==0?l:te(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,S,N,x;const l=i.fields||{},u=o.fields||{},c=(g=l[eu])==null?void 0:g.arrayValue,p=(S=u[eu])==null?void 0:S.arrayValue,m=te(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return m!==0?m:Sy(c,p)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=vh(u[m],p[m]);if(g!==0)return g;const S=ui(l[u[m]],c[p[m]]);if(S!==0)return S}return te(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Tr(t),r=Tr(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function Sy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ui(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function ci(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_h(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_h(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function ml(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vu(t);return e?16+ml(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ml(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Dr(r.fields,(i,o)=>{s+=i.length+ml(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function Ay(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eh(t){return!!t&&"integerValue"in t}function Wf(t){return!!t&&"arrayValue"in t}function Ny(t){return!!t&&"nullValue"in t}function Cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function Hk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Jw])==null?void 0:r.stringValue)===Xw}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function Gk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Wk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(go(this.value))}}function Zw(t){const e=[];return Dr(t.fields,(n,r)=>{const s=new He([n]);if(gl(r)){const i=Zw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tu{constructor(e,n){this.position=e,this.inclusive=n}}function ky(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ry(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eT{}class be extends eT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yk(e,n,r):n==="array-contains"?new Zk(e,r):n==="in"?new eR(e,r):n==="not-in"?new tR(e,r):n==="array-contains-any"?new nR(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Jk(e,r):new Xk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ui(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends eT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return tT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tT(t){return t.op==="and"}function nT(t){return Qk(t)&&tT(t)}function Qk(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function wh(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(nT(t))return t.filters.map(e=>wh(e)).join(",");{const e=t.filters.map(n=>wh(n)).join(",");return`${t.op}(${e})`}}function rT(t,e){return t instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&rT(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function sT(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(sT).join(" ,")+"}"}(t):"Filter"}class Yk extends be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Jk extends be{constructor(e,n){super(e,"in",n),this.keys=iT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xk extends be{constructor(e,n){super(e,"not-in",n),this.keys=iT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class Zk extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wf(n)&&$o(n.arrayValue,this.value)}}class eR extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class tR extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class nR extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class rR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function xy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rR(t,e,n,r,s,i,o)}function Hf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.Te=n}return e.Te}function Gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ry(t.startAt,e.startAt)&&Ry(t.endAt,e.endAt)}function Th(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function sR(t,e,n,r,s,i,o,l){return new Ti(t,e,n,r,s,i,o,l)}function Ou(t){return new Ti(t)}function Py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iR(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function oT(t){return t.collectionGroup!==null}function yo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new qo(i,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new qo(He.keyField(),r))}return e.Ie}function cn(t){const e=X(t);return e.Ee||(e.Ee=oR(e,yo(t))),e.Ee}function oR(t,e){if(t.limitType==="F")return xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)});const n=t.endAt?new tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tu(t.startAt.position,t.startAt.inclusive):null;return xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ih(t,e){const n=t.filters.concat([e]);return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function aR(t,e){const n=t.explicitOrderBy.concat([e]);return new Ti(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Sh(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return Gf(cn(t),cn(e))&&t.limitType===e.limitType}function aT(t){return`${Hf(cn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>sT(s)).join(", ")}]`),Du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ci(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ci(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function ju(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of yo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),s)||r.endAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),s))}(t,e)}function lR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lT(t){return(e,n)=>{let r=!1;for(const s of yo(t)){const i=uR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uR(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?ui(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Ee(G.comparator);function On(){return cR}const uT=new Ee(G.comparator);function no(...t){let e=uT;for(const n of t)e=e.insert(n.key,n);return e}function cT(t){let e=uT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return vo()}function dT(){return vo()}function vo(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const dR=new Ee(G.comparator),hR=new je(G.comparator);function ne(...t){let e=hR;for(const n of t)e=e.add(n);return e}const fR=new je(te);function pR(){return fR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function hT(t){return{integerValue:""+t}}function mR(t,e){return Fk(e)?hT(e):Kf(t,e)}/**
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
 */class Mu{constructor(){this._=void 0}}function gR(t,e,n){return t instanceof nu?function(s,i){const o={fields:{[Kw]:{stringValue:Gw},[Yw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qf(i)&&(i=Vu(i)),i&&(o.fields[Qw]=i),{mapValue:o}}(n,e):t instanceof di?pT(t,e):t instanceof hi?mT(t,e):function(s,i){const o=fT(s,i),l=by(o)+by(s.Ae);return Eh(o)&&Eh(s.Ae)?hT(l):Kf(s.serializer,l)}(t,e)}function yR(t,e,n){return t instanceof di?pT(t,e):t instanceof hi?mT(t,e):n}function fT(t,e){return t instanceof ru?function(r){return Eh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nu extends Mu{}class di extends Mu{constructor(e){super(),this.elements=e}}function pT(t,e){const n=gT(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends Mu{constructor(e){super(),this.elements=e}}function mT(t,e){let n=gT(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class ru extends Mu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function by(t){return ke(t.integerValue||t.doubleValue)}function gT(t){return Wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.field=e,this.transform=n}}function vR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof hi&&s instanceof hi?li(r.elements,s.elements,fn):r instanceof ru&&s instanceof ru?fn(r.Ae,s.Ae):r instanceof nu&&s instanceof nu}(t.transform,e.transform)}class _R{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function vT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qf(t.key,jt.none()):new sa(t.key,t.data,jt.none());{const n=t.data,r=pt.empty();let s=new je(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(t.key,r,new St(s.toArray()),jt.none())}}function ER(t,e,n){t instanceof sa?function(s,i,o){const l=s.value.clone(),u=Vy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(s,i,o){if(!yl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Vy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(_T(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof sa?function(i,o,l,u){if(!yl(i.precondition,o))return l;const c=i.value.clone(),p=Oy(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,o,l,u){if(!yl(i.precondition,o))return l;const c=Oy(i.fieldTransforms,u,o),p=o.data;return p.setAll(_T(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return yl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fT(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&li(r,s,(i,o)=>vR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Fu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Fu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vy(t,e,n){const r=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,yR(o,l,n[s]))}return r}function Oy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gR(i,o,e))}return r}class Qf extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TR extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ER(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=vT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>Dy(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>Dy(n,r))}}class Yf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return dR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yf(e,n,r,s)}}/**
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
 */class SR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,ie;function NR(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function ET(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case xe.OK:return M.OK;case xe.CANCELLED:return M.CANCELLED;case xe.UNKNOWN:return M.UNKNOWN;case xe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case xe.INTERNAL:return M.INTERNAL;case xe.UNAVAILABLE:return M.UNAVAILABLE;case xe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case xe.NOT_FOUND:return M.NOT_FOUND;case xe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case xe.ABORTED:return M.ABORTED;case xe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case xe.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(ie=xe||(xe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CR(){return new TextEncoder}/**
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
 */const kR=new yr([4294967295,4294967295],0);function Ly(t){const e=CR().encode(t),n=new Vw;return n.update(e),new Uint8Array(n.digest())}function jy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([n,r],0),new yr([s,i],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=yr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(yr.fromNumber(r)));return s.compare(kR)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ly(e),[r,s]=jy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ly(e),[r,s]=jy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ia(J.min(),s,new Ee(te),On(),ne())}}class oa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class wT{constructor(e,n){this.targetId=e,this.Ce=n}}class TT{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class My{constructor(){this.ve=0,this.Fe=Fy(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new oa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Fy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class RR{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=qa(),this.He=qa(),this.Ze=new Ee(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Th(i))if(r===0){const o=new G(i.path);this.et(n,o,nt.newNoDocument(o,J.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ir(r).toUint8Array()}catch(u){if(u instanceof Hw)return ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,s,i)}catch(u){return ds(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Th(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ne();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ia(e,n,this.Ze,this.je,r);return this.je=On(),this.Je=qa(),this.He=qa(),this.Ze=new Ee(te),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new My,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new je(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new je(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new My),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function qa(){return new Ee(G.comparator)}function Fy(){return new Ee(G.comparator)}const xR={asc:"ASCENDING",desc:"DESCENDING"},PR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bR={and:"AND",or:"OR"};class DR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ah(t,e){return t.useProto3Json||Du(e)?e:{value:e}}function su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VR(t,e){return su(t,e.toTimestamp())}function dn(t){return le(!!t,49232),J.fromTimestamp(function(n){const r=Tr(n);return new ge(r.seconds,r.nanos)}(t))}function Xf(t,e){return Nh(t,e).canonicalString()}function Nh(t,e){const n=function(s){return new he(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ST(t){const e=he.fromString(t);return le(RT(e),10190,{key:e.toString()}),e}function Ch(t,e){return Xf(t.databaseId,e.path)}function Zc(t,e){const n=ST(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(NT(n))}function AT(t,e){return Xf(t.databaseId,e)}function OR(t){const e=ST(t);return e.length===4?he.emptyPath():NT(e)}function kh(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NT(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Uy(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function LR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,p){return c.useProto3Json?(le(p===void 0||typeof p=="string",58123),Qe.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Qe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?M.UNKNOWN:ET(c.code);return new $(p,c.message||"")}(o);n=new TT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zc(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):J.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new vl(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zc(t,r.document),i=r.readTime?dn(r.readTime):J.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new vl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zc(t,r.document),i=r.removedTargetIds||[];n=new vl([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AR(s,i),l=r.targetId;n=new wT(l,o)}}return n}function jR(t,e){let n;if(e instanceof sa)n={update:Uy(t,e.key,e.value)};else if(e instanceof Qf)n={delete:Ch(t,e.key)};else if(e instanceof Vr)n={update:Uy(t,e.key,e.data),updateMask:HR(e.fieldMask)};else{if(!(e instanceof TR))return Q(16599,{dt:e.type});n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ru)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function MR(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(J.min())&&(o=dn(i)),new _R(o,s.transformResults||[])}(n,e))):[]}function FR(t,e){return{documents:[AT(t,e.path)]}}function UR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=AT(t,s);const i=function(c){if(c.length!==0)return kT(Xt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:ks(g.field),direction:$R(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ah(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function zR(t){let e=OR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=CT(m);return g instanceof Xt&&nT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new qo(Rs(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Du(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new tu(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new tu(S,g)}(n.endAt)),sR(e,s,o,i,l,"F",u,c)}function BR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>CT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function $R(t){return xR[t]}function qR(t){return PR[t]}function WR(t){return bR[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Rs(t){return He.fromServerFormat(t.fieldPath)}function kT(t){return t instanceof be?function(n){if(n.op==="=="){if(Cy(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(Ny(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cy(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(Ny(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:qR(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>kT(s));return r.length===1?r[0]:{compositeFilter:{op:WR(n.op),filters:r}}}(t):Q(54877,{filter:t})}function HR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function xT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.yt=e}}function KR(t){const e=zR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
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
 */class QR{constructor(){this.bn=new YR}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(wr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class YR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new je(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(he.comparator)).toArray()}}/**
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
 */const zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PT=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(PT,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const By="LruGarbageCollector",JR=1048576;function $y([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class XR{constructor(e){this.Pr=e,this.buffer=new je($y),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$y(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(By,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?W(By,"Ignoring IndexedDB error during garbage collection: ",n):await Ei(n)}await this.Ar(3e5)})}}class ex{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(bu.ce);const r=new XR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(zy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Ns()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function tx(t,e){return new ex(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,St.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=no();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof Vr)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),_o(p.mutation,c,p.mutation.getFieldMask(),ge.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new rx(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=vo();let s=new Ee((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||St.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=dT();p.forEach(g=>{if(!i.has(g)){const S=vT(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return iR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Jr());let l=Uo,u=i;return o.next(c=>F.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ne())).next(p=>({batchId:l,changes:cT(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=no();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(m,g){return new Ti(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,nt.newInvalidDocument(p)))});let l=no();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&_o(p.mutation,c,St.empty(),ge.now()),ju(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:KR(s.bundledQuery),readTime:dn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class ox{constructor(){this.overlays=new Ee(G.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=Jr(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=Jr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SR(n,r));let i=this.Lr.get(n);i===void 0&&(i=ne(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class ax{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.kr=new je(Ue.Kr),this.qr=new je(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new he([])),r=new Ue(n,e),s=new Ue(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new he([])),r=new Ue(n,e),s=new Ue(n,e+1);let i=ne();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new je(Ue.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?$f:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),s=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(te);return n.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new G(i),0);let l=new je(te);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,s=>{const i=new Ue(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ue(n,0),s=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.ti=e,this.docs=function(){return new Ee(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ok(Vk(p),r)<=0||(s.has(p.key)||ju(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cx(this)}getSize(e){return F.resolve(this.size)}}class cx extends nx{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.persistence=e,this.ri=new gs(n=>Hf(n),Gf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Zf,this.targetCount=0,this.oi=Ar._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ar(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n){this._i={},this.overlays={},this.ai=new bu(0),this.ui=!1,this.ui=!0,this.ci=new ax,this.referenceDelegate=e(this),this.li=new dx(this),this.indexManager=new QR,this.remoteDocumentCache=function(s){return new ux(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new GR(n),this.Pi=new ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ox,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new lx(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new hx(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class hx extends jk{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Ri=new Zf,this.Ai=null}static Vi(e){return new ep(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class iu{constructor(e,n){this.persistence=e,this.fi=new gs(r=>Uk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=tx(this,n)}static Vi(e,n){return new iu(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ml(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tp(e,n.fromCache,r,s)}}/**
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
 */class fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class px{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return U1()?8:Mk(st())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fx;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ns()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Ns()<=se.DEBUG&&W("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ns()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):F.resolve())}gs(e,n){if(Py(n))return F.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Sh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Py(n)||s.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?F.resolve(null):(Ns()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.Ds(e,o,n,Dk(s,Uo)).next(l=>l))})}Ss(e,n){let r=new je(lT(e));return n.forEach((s,i)=>{ju(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ns()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.fs.getDocumentsMatchingQuery(e,n,wr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="LocalStore",mx=3e8;class gx{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ee(te),this.Fs=new gs(i=>Hf(i),Gf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function yx(t,e,n,r){return new gx(t,e,n,r)}async function DT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function vx(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let S=F.resolve();return g.forEach(N=>{S=S.next(()=>p.getEntry(u,N)).next(x=>{const D=c.docVersions.get(N);le(D!==null,48541),x.version.compareTo(D)<0&&(m.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),p.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function VT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function _x(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,p.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(m,S),function(x,D,C){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=mx?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,S,p)&&l.push(n.li.updateTargetData(i,S))});let u=On(),c=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(Ex(i,o,e.documentUpdates).next(p=>{u=p.Bs,c=p.Ls})),!r.isEqual(J.min())){const p=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function Ex(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(np,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function wx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$f),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new In(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Rh(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;W(np,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function qy(t,e,n){const r=X(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=X(u),g=m.Fs.get(p);return g!==void 0?F.resolve(m.vs.get(g)):m.li.getTargetData(c,p)}(r,o,cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(Ix(r,lR(e),l),{documents:l,ks:i})))}function Ix(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Wy{constructor(){this.activeTargetIds=pR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sx{constructor(){this.vo=new Wy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Wy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ax{Mo(e){}shutdown(){}}/**
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
 */const Hy="ConnectivityMonitor";class Gy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Hy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wa=null;function xh(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="RestConnection",Nx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Cx{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Zl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=xh(),l=this.Qo(e,n.toUriEncodedString());W(ed,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),p=Xo(c);return this.zo(e,l,u,r,p).then(m=>(W(ed,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ds(ed,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_i}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=Nx[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Ki=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xs extends Cx{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xs.c_){const e=Mw();Ki(e,jw.STAT_EVENT,n=>{n.stat===yh.PROXY?W(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===yh.NOPROXY&&W(Ze,"STAT_EVENT: detected no buffering proxy")}),Xs.c_=!0}}zo(e,n,r,s,i){const o=xh();return new Promise((l,u)=>{const c=new Ow;c.setWithCredentials(!0),c.listenOnce(Lw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pl.NO_ERROR:const m=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case pl.TIMEOUT:W(Ze,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const g=c.getStatus();if(W(Ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const x=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(N.status);u(new $(x,N.message))}else u(new $(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Ze,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);W(Ze,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",p,r,15)})}T_(e,n,r){const s=xh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");W(Ze,`Creating RPC '${e}' stream ${s}: ${c}`,l);const p=o.createWebChannel(c,l);this.I_(p);let m=!1,g=!1;const S=new kx({Jo:N=>{g?W(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(W(Ze,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),W(Ze,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Ho:()=>p.close()});return Ki(p,to.EventType.OPEN,()=>{g||(W(Ze,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Ki(p,to.EventType.CLOSE,()=>{g||(g=!0,W(Ze,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(p))}),Ki(p,to.EventType.ERROR,N=>{g||(g=!0,ds(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),S.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),Ki(p,to.EventType.MESSAGE,N=>{var x;if(!g){const D=N.data[0];le(!!D,16349);const C=D,E=(C==null?void 0:C.error)||((x=C[0])==null?void 0:x.error);if(E){W(Ze,`RPC '${e}' stream ${s} received error:`,E);const A=E.status;let V=function(w){const _=xe[w];if(_!==void 0)return ET(_)}(A),P=E.message;A==="NOT_FOUND"&&P.includes("database")&&P.includes("does not exist")&&P.includes(this.databaseId.database)&&ds(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=M.INTERNAL,P="Unknown error status: "+A+" with message "+E.message),g=!0,S.o_(new $(V,P)),p.close()}else W(Ze,`RPC '${e}' stream ${s} received:`,D),S.__(D)}}),Xs.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){return new Xs(t)}function td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){return new DR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.c_=!1;class OT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="PersistentStream";class LT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new OT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xx extends LT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=LR(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?dn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=kh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Th(u)?{documents:FR(i,u)}:{query:UR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=IT(i,o.resumeToken);const c=Ah(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=su(i,o.snapshotVersion.toTimestamp());const c=Ah(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=BR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.K_(n)}}class Px extends LT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=MR(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=kh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{}class Dx extends bx{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Nh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Nh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Vx(t,e,n,r){return new Dx(t,e,n,r)}class Ox{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="RemoteStore";class Lx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ar(1e3),this.Va=new Ar(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ys(this)&&(W(pn,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.da.add(4),await aa(c),c.ga.set("Unknown"),c.da.delete(4),await zu(c)}(this))})}),this.ga=new Ox(r,s)}}async function zu(t){if(ys(t))for(const e of t.ma)await e(!0)}async function aa(t){for(const e of t.ma)await e(!1)}function Ph(t,e){return t.Ea.get(e)||void 0}function jT(t,e){const n=X(t),r=Ph(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=Ph(l,u);c!==void 0&&l.Ra.delete(c);const p=function(g,S){return S%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,p),l.Ra.set(p,u),p}(n,e.targetId);W(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new In(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),op(n)?ip(n):Ii(n).O_()&&sp(n,i)}function rp(t,e){const n=X(t),r=Ii(n),s=Ph(n,e);W(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&MT(n,s),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.ga.set("Unknown"))}function sp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void W(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Ii(t).Z_(e)}function MT(t,e){t.pa.$e(e),Ii(t).X_(e)}function ip(t){t.pa=new RR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ii(t).start(),t.ga.ua()}function op(t){return ys(t)&&!Ii(t).x_()&&t.Ia.size>0}function ys(t){return X(t).da.size===0}function FT(t){t.pa=void 0}async function jx(t){t.ga.set("Online")}async function Mx(t){t.Ia.forEach((e,n)=>{sp(t,e)})}async function Fx(t,e){FT(t),op(t)?(t.ga.ha(e),ip(t)):t.ga.set("Unknown")}async function Ux(t,e,n){if(t.ga.set("Online"),e instanceof TT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){W(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(t,r)}else if(e instanceof vl?t.pa.Xe(e):e instanceof wT?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await VT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,p)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.Ia.get(p);m&&i.Ia.set(p,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,p)=>{const m=i.Ia.get(c);if(!m)return;i.Ia.set(c,m.withResumeToken(Qe.EMPTY_BYTE_STRING,m.snapshotVersion)),MT(i,c);const g=new In(m.target,c,p,m.sequenceNumber);sp(i,g)});const u=function(p,m){const g=new Map;m.targetChanges.forEach((N,x)=>{const D=p.Ra.get(x);D!==void 0&&g.set(D,N)});let S=new Ee(te);return m.targetMismatches.forEach((N,x)=>{const D=p.Ra.get(N);D!==void 0&&(S=S.insert(D,x))}),new ia(m.snapshotVersion,g,S,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){W(pn,"Failed to raise snapshot:",r),await ou(t,r)}}async function ou(t,e,n){if(!wi(e))throw e;t.da.add(1),await aa(t),t.ga.set("Offline"),n||(n=()=>VT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(pn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await zu(t)})}function UT(t,e){return e().catch(n=>ou(t,n,e))}async function Bu(t){const e=X(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$f;for(;zx(e);)try{const s=await wx(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Bx(e,s)}catch(s){await ou(e,s)}zT(e)&&BT(e)}function zx(t){return ys(t)&&t.Ta.length<10}function Bx(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function zT(t){return ys(t)&&!Nr(t).x_()&&t.Ta.length>0}function BT(t){Nr(t).start()}async function $x(t){Nr(t).ra()}async function qx(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Wx(t,e,n){const r=t.Ta.shift(),s=Yf.from(r,e,n);await UT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Bu(t)}async function Hx(t,e){e&&Nr(t).Y_&&await async function(r,s){if(function(o){return NR(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Nr(r).B_(),await UT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bu(r)}}(t,e),zT(t)&&BT(t)}async function Qy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W(pn,"RemoteStore received new credentials");const r=ys(n);n.da.add(3),await aa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await zu(n)}async function Gx(t,e){const n=X(t);e?(n.da.delete(2),await zu(n)):e||(n.da.add(2),await aa(n),n.ga.set("Unknown"))}function Ii(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.sa(),new xx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:jx.bind(null,t),Yo:Mx.bind(null,t),t_:Fx.bind(null,t),H_:Ux.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),op(t)?ip(t):t.ga.set("Unknown")):(await t.ya.stop(),FT(t))})),t.ya}function Nr(t){return t.wa||(t.wa=function(n,r,s){const i=X(n);return i.sa(),new Px(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:$x.bind(null,t),t_:Hx.bind(null,t),ta:qx.bind(null,t),na:Wx.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Bu(t)):(await t.wa.stop(),t.Ta.length>0&&(W(pn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ap(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),wi(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yy{constructor(){this.Sa=new Ee(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class fi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fi(e,n,Zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Qx{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=Jy(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function Jy(){return new gs(t=>aT(t),Lu)}async function up(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Kx,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=lp(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&dp(n)}async function cp(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Yx(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&dp(n)}function Jx(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function dp(t){t.xa.forEach(e=>{e.next()})}var bh,Xy;(Xy=bh||(bh={})).Ba="default",Xy.Cache="cache";class hp{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.key=e}}class qT{constructor(e){this.key=e}}class Xx{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=lT(e),this.su=new Zs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Yy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),S=ju(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;g&&S?g.data.isEqual(S.data)?N!==x&&(r.track({type:3,doc:S}),D=!0):this.uu(g,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.iu(S,u)>0||c&&this.iu(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),D=!0):g&&!S&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(S?(o=o.add(S),i=x?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((p,m)=>function(S,N){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:D})}};return x(S)-x(N)}(p.type,m.type)||this.iu(p.doc,m.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new fi(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Yy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new qT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new $T(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return fi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const fp="SyncEngine";class Zx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eP{constructor(e){this.key=e,this.Eu=!1}}class tP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new gs(l=>aT(l),Lu),this.Vu=new Map,this.du=new Set,this.mu=new Ee(G.comparator),this.fu=new Map,this.gu=new Zf,this.pu={},this.yu=new Map,this.wu=Ar.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function nP(t,e,n=!0){const r=YT(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await WT(r,e,n,!0),s}async function rP(t,e){const n=YT(t);await WT(n,e,!0,!1)}async function WT(t,e,n,r){const s=await Tx(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await sP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&jT(t.remoteStore,s),l}async function sP(t,e,n,r,s){t.bu=(m,g,S)=>async function(x,D,C,E){let A=D.view._u(C);A.bs&&(A=await qy(x.localStore,D.query,!1).then(({documents:w})=>D.view._u(w,A)));const V=E&&E.targetChanges.get(D.targetId),P=E&&E.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(A,x.isPrimaryClient,V,P);return ev(x,D.targetId,j.hu),j.snapshot}(t,m,g,S);const i=await qy(t.localStore,e,!0),o=new Xx(e,i.ks),l=o._u(i.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);ev(t,n,c.hu);const p=new Zx(e,n,o);return t.Au.set(e,p),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function iP(t,e,n){const r=X(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!Lu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rp(r.remoteStore,s.targetId),Dh(r,s.targetId)}).catch(Ei)):(Dh(r,s.targetId),await Rh(r.localStore,s.targetId,!0))}async function oP(t,e){const n=X(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rp(n.remoteStore,r.targetId))}async function aP(t,e,n){const r=pP(t);try{const s=await function(o,l){const u=X(o),c=ge.now(),p=l.reduce((S,N)=>S.add(N.key),ne());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=On(),x=ne();return u.xs.getEntries(S,p).next(D=>{N=D,N.forEach((C,E)=>{E.isValidDocument()||(x=x.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,N)).next(D=>{m=D;const C=[];for(const E of l){const A=wR(E,m.get(E.key).overlayedDocument);A!=null&&C.push(new Vr(E.key,A,Zw(A.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,C,l)}).next(D=>{g=D;const C=D.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(S,D.batchId,C)})}).then(()=>({batchId:g.batchId,changes:cT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Ee(te)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await la(r,s.changes),await Bu(r.remoteStore)}catch(s){const i=lp(s,"Failed to persist write");n.reject(i)}}async function HT(t,e){const n=X(t);try{const r=await _x(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?le(o.Eu,14607):s.removedDocuments.size>0&&(le(o.Eu,42227),o.Eu=!1))}),await la(n,r,e)}catch(r){await Ei(r)}}function Zy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.va)g.Oa(l)&&(c=!0)}),c&&dp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ee(G.comparator);o=o.insert(i,nt.newNoDocument(i,J.min()));const l=ne().add(i),u=new ia(J.min(),new Map,new Ee(te),o,l);await HT(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),pp(r)}else await Rh(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(Ei)}async function uP(t,e){const n=X(t),r=e.batch.batchId;try{const s=await vx(n.localStore,e);KT(n,r,null),GT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,s)}catch(s){await Ei(s)}}async function cP(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(le(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);KT(r,e,n),GT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,s)}catch(s){await Ei(s)}}function GT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function KT(t,e,n){const r=X(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||QT(t,r)})}function QT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(rp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),pp(t))}function ev(t,e,n){for(const r of n)r instanceof $T?(t.gu.addReference(r.key,e),dP(t,r)):r instanceof qT?(W(fp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||QT(t,r.key)):Q(19791,{Cu:r})}function dP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(W(fp,"New document in limbo: "+n),t.du.add(r),pp(t))}function pp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(he.fromString(e)),r=t.wu.next();t.fu.set(r,new eP(n)),t.mu=t.mu.insert(n,r),jT(t.remoteStore,new In(cn(Ou(n.path)),r,"TargetPurposeLimboResolution",bu.ce))}}async function la(t,e,n){const r=X(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=tp.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.Ts,S=>p.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>F.forEach(g.Is,S=>p.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!wi(m))throw m;W(np,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=p.vs.get(g),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);p.vs=p.vs.insert(g,x)}}}(r.localStore,i))}async function hP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W(fp,"User change. New user:",e.toKey());const r=await DT(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.Ns)}}function fP(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let s=ne();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function YT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lP.bind(null,e),e.Ru.H_=Yx.bind(null,e.eventManager),e.Ru.Du=Jx.bind(null,e.eventManager),e}function pP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cP.bind(null,e),e}class au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return yx(this.persistence,new px,e.initialUser,this.serializer)}xu(e){return new bT(ep.Vi,this.serializer)}Mu(e){return new Sx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}au.provider={build:()=>new au};class mP extends au{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){le(this.persistence.referenceDelegate instanceof iu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new bT(r=>iu.Vi(r,n),this.serializer)}}class Vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hP.bind(null,this.syncEngine),await Gx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qx}()}createDatastore(e){const n=Uu(e.databaseInfo.databaseId),r=Rx(e.databaseInfo);return Vx(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Lx(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zy(this.syncEngine,n,0),function(){return Gy.v()?new Gy:new Ax}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new tP(s,i,o,l,u,c);return p&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);W(pn,"RemoteStore shutting down."),i.da.add(5),await aa(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vh.provider={build:()=>new Vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="FirestoreClient";class gP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(Cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nd(t,e){t.asyncQueue.verifyOperationInProgress(),W(Cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await DT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yP(t);W(Cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qy(e.remoteStore,s)),t._onlineComponents=e}async function yP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Cr,"Using user provided OfflineComponentProvider");try{await nd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await nd(t,new au)}}else W(Cr,"Using default OfflineComponentProvider"),await nd(t,new mP(void 0));return t._offlineComponents}async function JT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Cr,"Using user provided OnlineComponentProvider"),await tv(t,t._uninitializedComponentsProvider._online)):(W(Cr,"Using default OnlineComponentProvider"),await tv(t,new Vh))),t._onlineComponents}function vP(t){return JT(t).then(e=>e.syncEngine)}async function lu(t){const e=await JT(t),n=e.eventManager;return n.onListen=nP.bind(null,e.syncEngine),n.onUnlisten=iP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oP.bind(null,e.syncEngine),n}function _P(t,e,n,r){const s=new mp(r),i=new hp(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>up(await lu(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>cp(await lu(t),i))}}function EP(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const p=new mp({next:g=>{p.Ku(),o.enqueueAndForget(()=>cp(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new hp(Ou(l.path),p,{includeMetadataChanges:!0,Wa:!0});return up(i,m)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}function wP(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const p=new mp({next:g=>{p.Ku(),o.enqueueAndForget(()=>cp(i,m)),g.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new hp(l,p,{includeMetadataChanges:!0,Wa:!0});return up(i,m)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}function TP(t,e){const n=new Nn;return t.asyncQueue.enqueueAndForget(async()=>aP(await vP(t),e,n)),n.promise}/**
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
 */function XT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="ComponentProvider",nv=new Map;function SP(t,e,n,r,s){return new $k(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,XT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firestore.googleapis.com",rv=!0;class sv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ZT,this.ssl=rv}else this.host=e.host,this.ssl=e.ssl??rv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JR)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $u{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tk;switch(r.type){case"firstParty":return new Nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nv.get(n);r&&(W(IP,"Removing Datastore"),nv.delete(n),r.terminate())}(this),Promise.resolve()}}function AP(t,e,n,r={}){var c;t=_t(t,$u);const s=Xo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&GE(`https://${l}`),i.host!==ZT&&i.host!==l&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Pn(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=et.MOCK_USER;else{p=D1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new et(g)}t._authCredentials=new Ik(new zw(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ra(n,Ne._jsonSchema))return new Ne(e,r||null,new G(he.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:De("string",Ne._jsonSchemaVersion),referencePath:De("string")};class vr extends Or{constructor(e,n,r){super(e,n,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new G(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function $e(t,e,...n){if(t=Me(t),Bw("collection","path",e),t instanceof $u){const r=he.fromString(e,...n);return yy(r),new vr(t,null,r)}{if(!(t instanceof Ne||t instanceof vr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return yy(r),new vr(t.firestore,null,r)}}function Et(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Bf.newId()),Bw("doc","path",e),t instanceof $u){const r=he.fromString(e,...n);return gy(r),new Ne(t,null,new G(r))}{if(!(t instanceof Ne||t instanceof vr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return gy(r),new Ne(t.firestore,t instanceof vr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="AsyncQueue";class ov{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new OT(this,"async_queue_retry"),this.lc=()=>{const r=td();r&&W(iv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=td();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=td();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Nn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!wi(e))throw e;W(iv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Vn("INTERNAL UNHANDLED ERROR: ",av(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=ap.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&Q(47125,{Rc:av(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function av(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ln extends $u{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ov,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ov(e),this._firestoreClient=void 0,await e}}}function NP(t,e){const n=typeof t=="object"?t:JE(),r=typeof t=="string"?t:Zl,s=bf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=P1("firestore");i&&AP(s,...i)}return s}function qu(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CP(t),t._firestoreClient}function CP(t){var r,s,i,o;const e=t._freezeSettings(),n=SP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new gP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(ra(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:De("string",hn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */const kP=/^__.*__$/;class RP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class e0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function t0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Wu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return uu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(t0(this.dataSource)&&kP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class xP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uu(e)}V(e,n,r,s=!1){return new Wu({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hu(t){const e=t._freezeSettings(),n=Uu(t._databaseId);return new xP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function n0(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);_p("Data must be an object, but it was:",o,r);const l=s0(r,o);let u,c;if(i.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=hs(e,m,n);if(!o.contains(g))throw new $(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);a0(p,g)||p.push(g)}u=new St(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new RP(new pt(l),u,c)}class Gu extends ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function r0(t,e,n){return new Wu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yp extends ua{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=r0(this,e,!0),r=this.vc.map(i=>vs(i,n)),s=new di(r);return new yT(e.path,s)}isEqual(e){return e instanceof yp&&Pn(this.vc,e.vc)}}class vp extends ua{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=r0(this,e,!0),r=this.vc.map(i=>vs(i,n)),s=new hi(r);return new yT(e.path,s)}isEqual(e){return e instanceof vp&&Pn(this.vc,e.vc)}}function PP(t,e,n,r){const s=t.V(1,e,n);_p("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Dr(r,(u,c)=>{const p=o0(e,u,n);c=Me(c);const m=s.Sc(p);if(c instanceof Gu)i.push(p);else{const g=vs(c,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new St(i);return new e0(o,l,s.fieldTransforms)}function bP(t,e,n,r,s,i){const o=t.V(1,e,n),l=[hs(e,r,n)],u=[s];if(i.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(hs(e,i[g])),u.push(i[g+1]);const c=[],p=pt.empty();for(let g=l.length-1;g>=0;--g)if(!a0(c,l[g])){const S=l[g];let N=u[g];N=Me(N);const x=o.Sc(S);if(N instanceof Gu)c.push(S);else{const D=vs(N,x);D!=null&&(c.push(S),p.set(S,D))}}const m=new St(c);return new e0(p,m,o.fieldTransforms)}function DP(t,e,n,r=!1){return vs(n,t.V(r?4:3,e))}function vs(t,e){if(i0(t=Me(t)))return _p("Unsupported field value:",e,t),s0(t,e);if(t instanceof ua)return function(r,s){if(!t0(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=vs(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:su(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:su(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:IT(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return function(o,l){const u=o instanceof Qt?o.toArray():o;return{mapValue:{fields:{[Jw]:{stringValue:Xw},[eu]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.Dc("VectorValues must only contain numeric values.");return Kf(l.serializer,p)})}}}}}}(r,s);if(xT(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Pu(r)}`)}(t,e)}function s0(t,e){const n={};return Ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,s)=>{const i=vs(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof hn||t instanceof Vt||t instanceof Ne||t instanceof ua||t instanceof Qt||xT(t))}function _p(t,e,n){if(!i0(n)||!$w(n)){const r=Pu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function hs(t,e,n){if((e=Me(e))instanceof gp)return e._internalPath;if(typeof e=="string")return o0(t,e);throw uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const VP=new RegExp("[~\\*/\\[\\]]");function o0(t,e,n){if(e.search(VP)>=0)throw uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gp(...e.split("."))._internalPath}catch{throw uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(M.INVALID_ARGUMENT,l+t+u)}function a0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[eu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new Qt(n)}convertGeoPoint(e){return new hn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);le(RT(r),9688,{name:e});const s=new Bo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ep extends OP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function lv(...t){return new yp("arrayUnion",t)}function uv(...t){return new vp("arrayRemove",t)}const cv="@firebase/firestore",dv="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(hs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LP extends l0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wp{}class c0 extends wp{}function mn(t,e,...n){let r=[];e instanceof wp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Tp).length,l=i.filter(u=>u instanceof Ku).length;if(o>1||o>0&&l>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ku extends c0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ku(e,n,r)}_apply(e){const n=this._parse(e);return h0(e._query,n),new Or(e.firestore,e.converter,Ih(e._query,n))}_parse(e){const n=Hu(e.firestore);return function(i,o,l,u,c,p,m){let g;if(c.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){pv(m,p);const N=[];for(const x of m)N.push(fv(u,i,x));g={arrayValue:{values:N}}}else g=fv(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||pv(m,p),g=DP(l,o,m,p==="in"||p==="not-in");return be.create(c,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gn(t,e,n){const r=e,s=hs("where",t);return Ku._create(s,r,n)}class Tp extends wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)h0(o,u),o=Ih(o,u)}(e._query,n),new Or(e.firestore,e.converter,Ih(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ip extends c0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ip(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(i,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,aR(e._query,n))}}function d0(t,e="asc"){const n=e,r=hs("orderBy",t);return Ip._create(r,n)}function fv(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oT(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!G.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ay(t,new G(r))}if(n instanceof Ne)return Ay(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(n)}.`)}function pv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function h0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function f0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class es extends l0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}es._jsonSchemaVersion="firestore/documentSnapshot/1.0",es._jsonSchema={type:De("string",es._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class _l extends es{data(e={}){return super.data(e)}}class ts{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new _l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new so(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new _l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new so(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:jP(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function p0(t){t=_t(t,Ne);const e=_t(t.firestore,Ln),n=qu(e);return EP(n,t._key).then(r=>m0(e,t,r))}function MP(t){t=_t(t,Or);const e=_t(t.firestore,Ln),n=qu(e),r=new Ep(e);return u0(t._query),wP(n,t._query).then(s=>new ts(e,r,t,s))}function FP(t,e,n){t=_t(t,Ne);const r=_t(t.firestore,Ln),s=f0(t.converter,e),i=Hu(r);return Yu(r,[n0(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function Qu(t,e,n,...r){t=_t(t,Ne);const s=_t(t.firestore,Ln),i=Hu(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof gp?bP(i,"updateDoc",t._key,e,n,r):PP(i,"updateDoc",t._key,e),Yu(s,[o.toMutation(t._key,jt.exists(!0))])}function Lr(t){return Yu(_t(t.firestore,Ln),[new Qf(t._key,jt.none())])}function jr(t,e){const n=_t(t.firestore,Ln),r=Et(t),s=f0(t.converter,e),i=Hu(t.firestore);return Yu(n,[n0(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Fn(t,...e){var c,p,m;t=Me(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||hv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(hv(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(p=g.error)==null?void 0:p.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let i,o,l;if(t instanceof Ne)o=_t(t.firestore,Ln),l=Ou(t._key.path),i={next:g=>{e[r]&&e[r](m0(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=_t(t,Or);o=_t(g.firestore,Ln),l=g._query;const S=new Ep(o);i={next:N=>{e[r]&&e[r](new ts(o,S,g,N))},error:e[r+1],complete:e[r+2]},u0(t._query)}const u=qu(o);return _P(u,l,s,i)}function Yu(t,e){const n=qu(t);return TP(n,e)}function m0(t,e,n){const r=n.docs.get(e._key),s=new Ep(t);return new es(t,s,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){wk(yi),ai(new as("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ln(new Sk(r.getProvider("auth-internal")),new Ck(o,r.getProvider("app-check-internal")),qk(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gr(cv,dv,e),gr(cv,dv,"esm2020")})();const UP={apiKey:"AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",authDomain:"reply-ai-234e7.firebaseapp.com",projectId:"reply-ai-234e7",storageBucket:"reply-ai-234e7.firebasestorage.app",messagingSenderId:"441084216440",appId:"1:441084216440:web:71081c40e21ee32937198d"},g0=YE(UP),ae=NP(g0),cu=yk(g0),y0=O.createContext(null);function zP({children:t}){const[e,n]=O.useState(null),[r,s]=O.useState(!0);O.useEffect(()=>iC(cu,l=>{n(l),s(!1)}),[]);const i=async()=>{await oC(cu)};return h.jsx(y0.Provider,{value:{user:e,loading:r,logout:i},children:t})}function Un(){const t=O.useContext(y0);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const BP=`funny.0=Buena pregunta, lástima que no tenga buena respuesta
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
`,rd="reply-ai-history";function $P(t){const e={funny:[],elegant:[],cold:[],excuse:[]},n=t.split(`
`).filter(r=>r.trim()&&!r.trim().startsWith("#"));for(const r of n){const s=r.indexOf("=");if(s===-1)continue;const i=r.slice(0,s).trim(),o=r.slice(s+1).trim(),[l]=i.split(".");e[l]&&e[l].push(o)}return e}const mv=$P(BP);function qP(){const[t,e]=O.useState(""),[n,r]=O.useState("funny"),[s,i]=O.useState(""),[o,l]=O.useState(!1),[u,c]=O.useState(""),[p,m]=O.useState(()=>{const D=localStorage.getItem(rd);return D?JSON.parse(D):[]}),g=O.useCallback(async D=>{if(!t.trim()){c("Pega un mensaje primero");return}l(!0),c("");const C=typeof D=="string"?D:n,E=mv[C]||mv.elegant,A=E[Math.floor(Math.random()*E.length)];await new Promise(j=>setTimeout(j,300)),i(A);const P=[{message:t,reply:A,mode:C,date:new Date().toISOString()},...p].slice(0,50);m(P),localStorage.setItem(rd,JSON.stringify(P)),l(!1)},[t,n,p]),S=O.useCallback(()=>{s&&(e(s),g("funny"))},[s,g]),N=O.useCallback(D=>{const C=`https://wa.me/?text=${encodeURIComponent(D)}`;window.open(C,"_blank")},[]),x=O.useCallback(()=>{m([]),localStorage.removeItem(rd)},[]);return{message:t,setMessage:e,mode:n,setMode:r,response:s,setResponse:i,loading:o,error:u,history:p,generate:g,makeFunnier:S,sendToWhatsApp:N,clearHistory:x}}const Sp="birthdays";function WP(t,e,n){const r=mn($e(ae,Sp),gn("userId","==",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function HP({name:t,date:e,gender:n,phone:r},s){const o={uuid:crypto.randomUUID(),name:t,date:e,gender:n,phone:r||"",userId:s,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,Sp),o)).id,...o}}async function GP(t){await Lr(Et(ae,Sp,t))}function KP(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}`}function QP(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState([]),[i,o]=O.useState("");O.useEffect(()=>t?(o(""),WP(t.uid,S=>{n(S)},S=>{o("Error al cargar amigos: "+sd(S))})):void 0,[t]),O.useEffect(()=>{const g=KP(),S=e.filter(N=>N.date===g);s(S)},[e]);const l=100,u=O.useCallback(async(g,S,N,x)=>{if(t){if(o(""),e.length>=l){o(`Límite alcanzado: máximo ${l} cumpleaños. Elimina algunos para añadir más.`);return}try{await HP({name:g,date:S,gender:N,phone:x},t.uid)}catch(D){o("Error al añadir amigo: "+sd(D))}}},[t,e.length]),c=O.useCallback(async g=>{o("");try{await GP(g)}catch(S){o("Error al eliminar amigo: "+sd(S))}},[]),p=O.useCallback(g=>{let S;g.gender==="male"?S=`¡Feliz cumpleaños, amigo ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:g.gender==="female"?S=`¡Feliz cumpleaños, amiga ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`:S=`¡Feliz cumpleaños, ${g.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;const N=g.phone?g.phone.replace(/[^0-9]/g,""):"",x=N?`https://wa.me/${N}?text=${encodeURIComponent(S)}`:`https://wa.me/?text=${encodeURIComponent(S)}`;window.open(x,"_blank")},[]),m=O.useCallback(g=>{const S=g.gender==="male"?"lo":g.gender==="female"?"la":"le",N=`📅 Recordatorio: Hoy es el cumpleaños de ${g.name}! No olvides felicit${S}. 🎂🎉`,x=`https://wa.me/?text=${encodeURIComponent(N)}`;window.open(x,"_blank")},[]);return{friends:e,todayBirthdays:r,error:i,addFriend:u,removeFriend:c,sendGreeting:p,sendReminder:m}}function sd(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible. Revisa los índices.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const Ap="contacts";function YP(t,e,n){const r=mn($e(ae,Ap),gn("userId","==",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function JP({name:t,phone:e,email:n,city:r,webpage:s,occupation:i,rating:o},l){const u={name:t,phone:e||"",email:n||"",city:r||"",webpage:s||"",occupation:i||"",rating:o||1,userId:l,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,Ap),u)).id,...u}}async function XP(t){await Lr(Et(ae,Ap,t))}function ZP(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState("");O.useEffect(()=>t?(s(""),YP(t.uid,c=>{n(c)},c=>{s("Error al cargar contactos: "+id(c))})):void 0,[t]);const i=100,o=O.useCallback(async({name:u,phone:c,email:p,city:m,webpage:g,occupation:S,rating:N})=>{if(t){if(s(""),e.length>=i){s(`Límite alcanzado: máximo ${i} contactos. Elimina algunos para añadir más.`);return}try{await JP({name:u,phone:c,email:p,city:m,webpage:g,occupation:S,rating:N},t.uid)}catch(x){s("Error al añadir contacto: "+id(x))}}},[t,e.length]),l=O.useCallback(async u=>{s("");try{await XP(u)}catch(c){s("Error al eliminar contacto: "+id(c))}},[]);return{contacts:e,error:r,addContact:o,removeContact:l}}function id(t){return t?t.code==="permission-denied"?"Permiso denegado. Revisa las reglas de Firestore.":t.code==="unavailable"?"Firestore no disponible.":t.code==="not-found"?"No encontrado":typeof t=="string"?t:t.message||"Error desconocido":"Error desconocido"}const Np="favorites";function e2(t,e,n){const r=mn($e(ae,Np),gn("userId","==",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}async function t2({name:t,url:e,description:n},r){const s={name:t,url:e||"",description:n||"",userId:r,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,Np),s)).id,...s}}async function n2(t){await Lr(Et(ae,Np,t))}const gv=100;function r2(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState("");O.useEffect(()=>t?(s(""),e2(t.uid,n,u=>{s("Error al cargar favoritos: "+od(u))})):void 0,[t]);const i=O.useCallback(async({name:l,url:u,description:c})=>{if(t){if(s(""),e.length>=gv){s(`Límite alcanzado: máximo ${gv} favoritos.`);return}try{await t2({name:l,url:u,description:c},t.uid)}catch(p){s("Error al añadir favorito: "+od(p))}}},[t,e.length]),o=O.useCallback(async l=>{s("");try{await n2(l)}catch(u){s("Error al eliminar favorito: "+od(u))}},[]);return{favorites:e,error:r,addFavorite:i,removeFavorite:o}}function od(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}const _s="reminders",v0="users";function s2(t,e,n){const r=mn($e(ae,_s),gn("userId","==",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)},s=>{console.error("Firestore subscribe error:",s),n&&n(s)})}function i2(t,e,n){const r=mn($e(ae,_s),gn("sharedWithUids","array-contains",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data(),isShared:!0}));e(i)},s=>{console.error("Firestore shared subscribe error:",s),n&&n(s)})}async function o2(t,e,n){const r={...t,userId:e,ownerEmail:n,createdAt:new Date().toISOString(),lastFiredAt:null,sharedWithUids:[],sharedWithEmails:[]};return{id:(await jr($e(ae,_s),r)).id,...r}}async function yv(t,e){await Qu(Et(ae,_s,t),e)}async function a2(t){await Lr(Et(ae,_s,t))}async function l2(t,e,n){await Qu(Et(ae,_s,t),{sharedWithUids:lv(e),sharedWithEmails:lv(n)})}async function u2(t,e){var u;const n=Et(ae,_s,t),s=(await p0(n)).data(),i=(s==null?void 0:s.sharedWithEmails)||[],o=((u=s==null?void 0:s.sharedWithUids)==null?void 0:u.indexOf(e))??-1,l=o>=0?i[o]:null;await Qu(n,{sharedWithUids:uv(e),sharedWithEmails:l?uv(l):[]})}async function c2(t,e){const n=Et(ae,v0,t);(await p0(n)).exists()||await FP(n,{email:e,uid:t})}async function d2(t){const e=mn($e(ae,v0),gn("email","==",t)),n=await MP(e);return n.empty?null:n.docs[0].id}const vv=5;let Ha=null;function _0(){if(Ha)return Ha;try{Ha=new(window.AudioContext||window.webkitAudioContext)}catch(t){console.warn("AudioContext not supported:",t)}return Ha}function Cp(){const t=_0();t&&t.state==="suspended"&&t.resume().catch(()=>{})}document.addEventListener("click",Cp);document.addEventListener("touchstart",Cp);document.addEventListener("keydown",Cp);async function h2(){try{const t=_0();if(!t||(t.state==="suspended"&&await t.resume(),t.state!=="running"))return;const e=(r,s,i)=>{const o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.setValueAtTime(r,s),l.gain.setValueAtTime(.35,s),l.gain.exponentialRampToValueAtTime(.01,s+i),o.connect(l),l.connect(t.destination),o.start(s),o.stop(s+i)},n=t.currentTime;e(523,n,.15),e(659,n+.15,.15),e(784,n+.3,.3)}catch(t){console.warn("Sound error:",t)}}function Ss(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function f2(){const t=new Date;return{h:t.getHours(),dow:t.getDay(),day:t.getDate(),month:t.getMonth()+1}}function p2(t){if(!t.active)return!1;const e=f2();if(t.frequency!=="daily")if(t.frequency==="weekly"){if(t.weekday!==e.dow)return!1}else if(t.frequency==="monthly"){if(t.day!==e.day)return!1}else if(t.frequency==="once"){if(t.day!==e.day||t.month!==e.month)return!1}else return!1;const n=t.earlyBird?7:9;return!(e.h<n||t.lastFiredAt&&Date.now()-new Date(t.lastFiredAt).getTime()<55*60*1e3)}async function _v(){if(!("Notification"in window))return"denied";if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return"denied"}}function m2(t){if("Notification"in window&&Notification.permission==="granted")try{const e=t.name+(t.note?" — "+t.note:"");new Notification("🔔 Toolbox AI",{body:e,icon:"./icons/icon-192.svg",tag:t.id,renotify:!0})}catch(e){console.warn("Notification error:",e)}}function g2(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState(""),[i,o]=O.useState(null),l=O.useRef([]);l.current=e;const u=O.useRef(new Set);O.useEffect(()=>{if(!t)return;s(""),t.email&&c2(t.uid,t.email).catch(()=>{});let N=[],x=[];const D=()=>{const A=new Set,V=[];for(const P of[...N,...x])A.has(P.id)||(A.add(P.id),V.push(P));n(V)},C=s2(t.uid,A=>{N=A,D()},A=>s("Error al cargar recordatorios: "+Ss(A))),E=i2(t.uid,A=>{x=A,D()},A=>console.error("Shared reminders error:",A));return()=>{C(),E()}},[t]),O.useEffect(()=>{!t||e.length===0||_v().then(N=>{console.log("[Reminders] Notification permission:",N)})},[t,e.length>0]),O.useEffect(()=>{if(!t)return;const N=async E=>{if(!E.isShared&&p2(E)&&!u.current.has(E.id)){u.current.add(E.id);try{await yv(E.id,{lastFiredAt:new Date().toISOString()}),await h2(),Notification.permission==="default"&&await _v(),m2(E),o(E.id),setTimeout(()=>o(null),5e3)}catch(A){console.warn("Reminder fire error:",A)}finally{setTimeout(()=>u.current.delete(E.id),5e3)}}},x=()=>{l.current.forEach(N)};x();const D=setInterval(x,6e4),C=()=>{document.visibilityState==="visible"&&x()};return document.addEventListener("visibilitychange",C),()=>{clearInterval(D),document.removeEventListener("visibilitychange",C)}},[t]);const c=O.useCallback(async N=>{if(!t)return;if(s(""),l.current.filter(D=>!D.isShared).length>=vv){s(`Límite alcanzado: máximo ${vv} recordatorios.`);return}try{await o2(N,t.uid,t.email)}catch(D){s("Error al añadir recordatorio: "+Ss(D))}},[t]),p=O.useCallback(async(N,x)=>{s("");try{await yv(N,x)}catch(D){s("Error al actualizar recordatorio: "+Ss(D))}},[]),m=O.useCallback(async N=>{s("");try{await a2(N)}catch(x){s("Error al eliminar recordatorio: "+Ss(x))}},[]),g=O.useCallback(async(N,x)=>{if(s(""),!x||!x.includes("@")){s("Introduce un email válido.");return}try{const D=await d2(x);if(!D){s("Ese usuario no está registrado en Toolbox AI.");return}if(D===t.uid){s("No puedes compartir un recordatorio contigo mismo.");return}await l2(N,D,x)}catch(D){s("Error al compartir recordatorio: "+Ss(D))}},[t]),S=O.useCallback(async(N,x,D)=>{s("");try{await u2(N,x,D)}catch(C){s("Error al eliminar uso compartido: "+Ss(C))}},[]);return{reminders:e,error:r,justFired:i,userEmail:t==null?void 0:t.email,addReminder:c,updateReminder:p,removeReminder:m,shareReminder:g,unshareReminder:S}}const Ju="notes";function y2(t,e,n){const r=mn($e(ae,Ju),gn("userId","==",t));return Fn(r,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));i.sort((o,l)=>o.pinned!==l.pinned?o.pinned?-1:1:new Date(l.updatedAt)-new Date(o.updatedAt)),e(i)},s=>{console.error("Firestore notes subscribe error:",s),n&&n(s)})}async function v2({title:t,body:e,color:n},r){const s=new Date().toISOString(),i={title:t||"",body:e||"",color:n||"#ffffff",pinned:!1,userId:r,createdAt:s,updatedAt:s};return{id:(await jr($e(ae,Ju),i)).id,...i}}async function Ev(t,e){await Qu(Et(ae,Ju,t),{...e,updatedAt:new Date().toISOString()})}async function _2(t){await Lr(Et(ae,Ju,t))}const ad=6;function Ga(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.message||"Error desconocido":"Error desconocido"}function E2(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState("");O.useEffect(()=>t?(s(""),y2(t.uid,p=>n(p),p=>s("Error al cargar notas: "+Ga(p)))):void 0,[t]);const i=O.useCallback(async({title:c,body:p,color:m})=>{if(t){if(s(""),e.length>=ad){s(`Límite alcanzado: máximo ${ad} notas.`);return}try{await v2({title:c,body:p,color:m},t.uid)}catch(g){s("Error al añadir nota: "+Ga(g))}}},[t,e.length]),o=O.useCallback(async(c,p)=>{s("");try{await Ev(c,p)}catch(m){s("Error al actualizar nota: "+Ga(m))}},[]),l=O.useCallback(async c=>{s("");try{await _2(c)}catch(p){s("Error al eliminar nota: "+Ga(p))}},[]),u=O.useCallback(async c=>{const p=e.find(m=>m.id===c);p&&await Ev(c,{pinned:!p.pinned})},[e]);return{notes:e,error:r,maxNotes:ad,addNote:i,updateNote:o,removeNote:l,togglePin:u}}const kp="projects",Rp="timeEntries";function w2(t,e,n){const r=mn($e(ae,kp),gn("userId","==",t));return Fn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("projects subscribe error:",s),n&&n(s)})}async function T2({name:t,clientName:e,rate:n,currency:r,color:s},i){const o={name:t,clientName:e||"",rate:parseFloat(n)||0,currency:r||"EUR",color:s||"#2d6a4f",userId:i,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,kp),o)).id,...o}}async function I2(t){await Lr(Et(ae,kp,t))}function S2(t,e,n){const r=mn($e(ae,Rp),gn("userId","==",t),d0("startedAt","desc"));return Fn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("entries subscribe error:",s),n&&n(s)})}async function A2({projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l},u){const c={projectId:t,projectName:e,rate:n,currency:r,startedAt:s,endedAt:i,durationSec:o,notes:l||"",userId:u,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,Rp),c)).id,...c}}async function N2(t){await Lr(Et(ae,Rp,t))}const ld=10;function As(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function C2(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState([]),[i,o]=O.useState(""),[l,u]=O.useState(null),[c,p]=O.useState(null),[m,g]=O.useState(0),S=O.useRef(null);O.useEffect(()=>{if(!t)return;o("");const V=w2(t.uid,n,j=>o("Error al cargar proyectos: "+As(j))),P=S2(t.uid,s,j=>o("Error al cargar registros: "+As(j)));return()=>{V(),P()}},[t]),O.useEffect(()=>(l&&c?S.current=setInterval(()=>{g(Math.floor((Date.now()-c.getTime())/1e3))},1e3):(clearInterval(S.current),g(0)),()=>clearInterval(S.current)),[l,c]);const N=O.useCallback(async V=>{if(t){if(o(""),e.length>=ld){o(`Límite alcanzado: máximo ${ld} proyectos.`);return}try{await T2(V,t.uid)}catch(P){o("Error al añadir proyecto: "+As(P))}}},[t,e.length]),x=O.useCallback(async V=>{o(""),l===V&&C();try{await I2(V)}catch(P){o("Error al eliminar proyecto: "+As(P))}},[l]),D=O.useCallback(V=>{u(V),p(new Date),g(0)},[]),C=O.useCallback(async(V="")=>{if(!l||!c)return;const P=new Date,j=Math.floor((P-c)/1e3);if(j<5){u(null),p(null);return}const w=e.find(_=>_.id===l);u(null),p(null);try{await A2({projectId:l,projectName:(w==null?void 0:w.name)||"Sin proyecto",rate:(w==null?void 0:w.rate)||0,currency:(w==null?void 0:w.currency)||"EUR",startedAt:c.toISOString(),endedAt:P.toISOString(),durationSec:j,notes:V},t.uid)}catch(_){o("Error al guardar registro: "+As(_))}},[l,c,e,t]),E=O.useCallback(async V=>{o("");try{await N2(V)}catch(P){o("Error al eliminar registro: "+As(P))}},[]),A=e.reduce((V,P)=>(V[P.id]=r.filter(j=>j.projectId===P.id).reduce((j,w)=>j+(w.durationSec||0),0),V),{});return{projects:e,entries:r,error:i,maxProjects:ld,activeProjectId:l,elapsed:m,secondsByProject:A,addProject:N,removeProject:x,startTimer:D,stopTimer:C,removeEntry:E}}const xp="finances";function k2(t,e,n){const r=mn($e(ae,xp),gn("userId","==",t),d0("date","desc"));return Fn(r,s=>e(s.docs.map(i=>({id:i.id,...i.data()}))),s=>{console.error("finances subscribe error:",s),n&&n(s)})}async function R2({type:t,concept:e,clientOrProvider:n,amount:r,vatRate:s,irpfRate:i,date:o},l){const u=parseFloat(r)||0,c=parseFloat(s)||0,p=parseFloat(i)||0,m=parseFloat((u*c/100).toFixed(2)),g=parseFloat((u*p/100).toFixed(2)),S=parseFloat(t==="income"?(u+m-g).toFixed(2):(u+m).toFixed(2)),N={type:t,concept:e.trim(),clientOrProvider:n.trim()||"",amount:u,vatRate:c,vatAmount:m,irpfRate:p,irpfAmount:g,total:S,date:o,userId:l,createdAt:new Date().toISOString()};return{id:(await jr($e(ae,xp),N)).id,...N}}async function x2(t){await Lr(Et(ae,xp,t))}const ud=150;function cd(t){return t?t.code==="permission-denied"?"Permiso denegado.":t.code==="unavailable"?"Firestore no disponible.":t.code==="failed-precondition"?"Índice de Firestore pendiente. Espera un momento.":t.message||"Error desconocido":"Error desconocido"}function P2(){const{user:t}=Un(),[e,n]=O.useState([]),[r,s]=O.useState(""),[i,o]=O.useState(!0);O.useEffect(()=>t?(s(""),o(!0),k2(t.uid,m=>{n(m),o(!1)},m=>{s("Error al cargar contabilidad: "+cd(m)),o(!1)})):void 0,[t]);const l=O.useCallback(async p=>{if(t){if(s(""),e.length>=ud){s(`Límite alcanzado: máximo ${ud} asientos contables.`);return}try{await R2(p,t.uid)}catch(m){s("Error al registrar asiento: "+cd(m))}}},[t,e.length]),u=O.useCallback(async p=>{s("");try{await x2(p)}catch(m){s("Error al eliminar asiento: "+cd(m))}},[]),c=O.useMemo(()=>{let p=0,m=0,g=0,S=0,N=0;e.forEach(C=>{C.type==="income"?(p+=C.amount||0,g+=C.vatAmount||0,N+=C.irpfAmount||0):(m+=C.amount||0,S+=C.vatAmount||0)});const x=p-m,D=g-S;return{totalIncomes:p,totalExpenses:m,vatRepercutido:g,vatSoportado:S,irpfRetained:N,netProfit:x,vatBalance:D}},[e]);return{entries:e,error:r,loading:i,maxEntries:ud,stats:c,addEntry:l,removeEntry:u}}function b2(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[s,i]=O.useState(!1),[o,l]=O.useState(""),[u,c]=O.useState(!1),p=async m=>{m.preventDefault(),l(""),c(!0);try{s?await tC(cu,t,n):await nC(cu,t,n)}catch(g){l({"auth/user-not-found":"No hay cuenta con ese email","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Email o contraseña inválidos","auth/email-already-in-use":"Ya existe una cuenta con ese email","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/invalid-email":"Email no válido","auth/too-many-requests":"Demasiados intentos. Intenta más tarde"}[g.code]||g.code)}finally{c(!1)}};return h.jsx("div",{className:"login-screen",children:h.jsxs("div",{className:"login-card",children:[h.jsx("div",{className:"login-logo",children:"💬"}),h.jsx("h1",{className:"login-title",children:"Toolbox AI"}),h.jsx("p",{className:"login-subtitle",children:s?"Crea tu cuenta para empezar":"Inicia sesión para continuar"}),h.jsxs("form",{className:"login-form",onSubmit:p,children:[h.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value),required:!0}),h.jsx("input",{className:"login-input",type:"password",placeholder:"Contraseña",value:n,onChange:m=>r(m.target.value),required:!0,minLength:6}),o&&h.jsx("p",{className:"error",children:o}),h.jsx("button",{className:"login-btn",type:"submit",disabled:u,children:u?h.jsx("span",{className:"loading-spinner"}):s?"Crear cuenta":"Iniciar sesión"})]}),h.jsxs("p",{className:"login-toggle",children:[s?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",h.jsx("button",{className:"login-toggle-btn",onClick:()=>{i(!s),l("")},children:s?"Inicia sesión":"Regístrate"})]})]})})}function D2({value:t,onChange:e}){const n=async()=>{try{const r=await navigator.clipboard.readText();e({target:{value:r}})}catch{}};return h.jsxs("div",{className:"input-box",children:[h.jsx("textarea",{placeholder:"Pega aquí el mensaje recibido...",value:t,onChange:e,rows:4}),h.jsxs("button",{className:"paste-btn",onClick:n,type:"button",title:"Pegar del portapapeles",children:[h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),h.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),h.jsx("path",{d:"M12 11h4"}),h.jsx("path",{d:"M12 16h4"}),h.jsx("path",{d:"M8 11h.01"}),h.jsx("path",{d:"M8 16h.01"})]}),"Pegar"]})]})}const V2=[{key:"funny",label:"Gracioso",icon:"😄"},{key:"elegant",label:"Elegante",icon:"⭐"},{key:"cold",label:"Frío",icon:"❄️"},{key:"excuse",label:"Excusa",icon:"🔑"}];function O2({selected:t,onSelect:e}){return h.jsx("div",{className:"modes",children:V2.map(n=>h.jsxs("button",{className:`mode-btn ${t===n.key?"active":""}`,onClick:()=>e(n.key),children:[h.jsx("span",{className:"mode-emoji",children:n.icon}),h.jsx("span",{className:"mode-label",children:n.label})]},n.key))})}function L2({onClick:t,loading:e}){return h.jsx("button",{className:"generate-btn",onClick:t,disabled:e,children:e?h.jsx("span",{className:"loading-spinner"}):h.jsxs(h.Fragment,{children:[h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M12 3v18"}),h.jsx("path",{d:"M5 10l7-7 7 7"}),h.jsx("path",{d:"M5 14l7 7 7-7"})]}),"Generar respuesta"]})})}const wv={funny:{label:"Gracioso",emoji:"😄"},elegant:{label:"Elegante",emoji:"⭐"},cold:{label:"Frío",emoji:"❄️"},excuse:{label:"Excusa",emoji:"🔑"}};function j2({response:t,mode:e,onSend:n,onRegenerate:r,onMakeFunnier:s}){if(!t)return null;const i=wv[e]||wv.funny;return h.jsxs("div",{className:"response-card fade-in",children:[h.jsxs("div",{className:"response-header",children:[h.jsx("span",{className:"response-mode-icon",children:i.emoji}),h.jsxs("span",{className:"response-mode-label",children:["Respuesta · ",i.label]})]}),h.jsx("p",{className:"response-text",children:t}),h.jsxs("div",{className:"response-actions",children:[h.jsxs("button",{className:"action-btn primary",onClick:()=>n(t),children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"WhatsApp"]}),h.jsxs("button",{className:"action-btn",onClick:r,children:[h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("polyline",{points:"23 4 23 10 17 10"}),h.jsx("polyline",{points:"1 20 1 14 7 14"}),h.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerar"]}),h.jsxs("button",{className:"action-btn",onClick:s,children:[h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),h.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),h.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),"Más gracioso"]})]})]})}const E0=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function M2(t){const[e,n]=t.split("-");return`${parseInt(e,10)} de ${E0[parseInt(n,10)-1]}`}function F2({friends:t,todayBirthdays:e,error:n,onAdd:r,onRemove:s,onSendGreeting:i,onSendReminder:o}){const[l,u]=O.useState(""),[c,p]=O.useState(""),[m,g]=O.useState(""),[S,N]=O.useState(""),[x,D]=O.useState("male"),[C,E]=O.useState(!1),[A,V]=O.useState(""),P=y=>{if(y.preventDefault(),!l.trim()||!m||!S)return;const I=`${String(parseInt(m,10)).padStart(2,"0")}-${String(parseInt(S,10)).padStart(2,"0")}`;r(l.trim(),I,x,c.trim()),u(""),p(""),g(""),N(""),D("male"),E(!1)},j=A.toLowerCase(),_=[...t.filter(y=>y.name.toLowerCase().includes(j))].sort((y,I)=>{const[k,R]=y.date.split("-").map(Number),[T,de]=I.date.split("-").map(Number);return R-de||k-T});return h.jsxs("div",{className:"birthdays",children:[n&&h.jsx("p",{className:"error",children:n}),e.length>0&&h.jsxs("div",{className:"birthday-alert fade-in",children:[h.jsx("div",{className:"birthday-alert-icon",children:"🎂"}),h.jsxs("div",{className:"birthday-alert-body",children:[h.jsxs("strong",{children:[(e.length===1,"¡Hoy es el cumpleaños de")," ",e.map(y=>y.name).join(" y "),"!"]}),h.jsx("div",{className:"birthday-alert-actions",children:e.map(y=>h.jsxs("div",{className:"birthday-alert-row",children:[h.jsxs("button",{className:"action-btn primary",onClick:()=>i(y),children:["🎉 Felicitar a ",y.name]}),h.jsx("button",{className:"action-btn",onClick:()=>o(y),children:"🔔 Recordarme"}),y.phone&&h.jsx("a",{className:"action-btn",href:`tel:${y.phone}`,children:"📞 Llamar"})]},y.id))})]})]}),h.jsxs("div",{className:"birthdays-header",children:[h.jsxs("h3",{children:["Tus amigos ",t.length>0&&h.jsx("span",{className:"count-badge",children:t.length})]}),h.jsx("button",{className:"add-friend-btn",onClick:()=>E(!C),children:C?"✕ Cerrar":"+ Añadir amigo"})]}),C&&h.jsxs("form",{className:"birthday-form fade-in",onSubmit:P,children:[h.jsx("input",{className:"bf-input",type:"text",placeholder:"Nombre",value:l,onChange:y=>u(y.target.value),required:!0}),h.jsx("input",{className:"bf-input",type:"tel",placeholder:"Teléfono (ej: 521234567890)",value:c,onChange:y=>p(y.target.value)}),h.jsxs("div",{className:"bf-row",children:[h.jsxs("select",{className:"bf-select",value:m,onChange:y=>g(y.target.value),required:!0,children:[h.jsx("option",{value:"",children:"Día"}),Array.from({length:31},(y,I)=>I+1).map(y=>h.jsx("option",{value:y,children:y},y))]}),h.jsxs("select",{className:"bf-select",value:S,onChange:y=>N(y.target.value),required:!0,children:[h.jsx("option",{value:"",children:"Mes"}),E0.map((y,I)=>h.jsx("option",{value:I+1,children:y},I))]})]}),h.jsxs("div",{className:"bf-gender",children:[h.jsxs("label",{children:[h.jsx("input",{type:"radio",name:"gender",value:"male",checked:x==="male",onChange:()=>D("male")}),"Masculino"]}),h.jsxs("label",{children:[h.jsx("input",{type:"radio",name:"gender",value:"female",checked:x==="female",onChange:()=>D("female")}),"Femenino"]}),h.jsxs("label",{children:[h.jsx("input",{type:"radio",name:"gender",value:"other",checked:x==="other",onChange:()=>D("other")}),"Otro / No sé"]})]}),h.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&h.jsxs("div",{className:"search-box",children:[h.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"11",cy:"11",r:"8"}),h.jsx("path",{d:"M21 21l-4.35-4.35"})]}),h.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar amigo...",value:A,onChange:y=>V(y.target.value)}),A&&h.jsx("button",{className:"search-clear",onClick:()=>V(""),children:"✕"})]}),_.length===0&&h.jsx("p",{className:"birthdays-empty",children:A?"No se encontraron amigos.":"No has añadido ningún cumpleaños todavía."}),h.jsx("div",{className:"birthdays-list",children:_.map(y=>h.jsxs("div",{className:"birthday-item fade-in",children:[h.jsxs("div",{className:"birthday-item-info",children:[h.jsxs("span",{className:"birthday-item-name",children:[y.name,y.gender==="male"&&" 👨",y.gender==="female"&&" 👩",y.gender==="other"&&" 🧑"]}),h.jsxs("span",{className:"birthday-item-date",children:["🗓️ ",M2(y.date)]}),y.phone&&h.jsxs("span",{className:"birthday-item-phone",children:["📞 ",y.phone]})]}),h.jsxs("div",{className:"birthday-item-actions",children:[y.phone&&h.jsx("a",{className:"contact-action-btn",href:`tel:${y.phone}`,title:"Llamar",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:h.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),h.jsx("button",{className:"birthday-item-delete",onClick:()=>s(y.id),title:"Eliminar",children:"✕"})]})]},y.id))})]})}const U2=["fontanero","electricista","pintor","informatico","medico","ingeniero","arquitecto","maestro","herrero","asesor","jardinero","comercial","agricultor","repuestos"];function dd(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function z2({contacts:t,error:e,onAdd:n,onRemove:r}){const[s,i]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),[p,m]=O.useState(""),[g,S]=O.useState(""),[N,x]=O.useState(""),[D,C]=O.useState(3),[E,A]=O.useState(!1),[V,P]=O.useState(""),j=R=>{R.preventDefault(),s.trim()&&(n({name:s.trim(),phone:o.trim(),email:u.trim(),city:p.trim(),webpage:g.trim(),occupation:N,rating:D}),i(""),l(""),c(""),m(""),S(""),x(""),C(3),A(!1))};async function w(R){const T=[`*${R.name}*`];R.phone&&T.push(`📞 ${R.phone}`),R.email&&T.push(`✉️ ${R.email}`),R.city&&T.push(`📍 ${R.city}`),R.webpage&&T.push(`🌐 ${R.webpage}`),R.occupation&&T.push(`💼 ${dd(R.occupation)}`),T.push(`⭐ ${"★".repeat(R.rating)}${"☆".repeat(5-R.rating)}`);const de=T.join(`
`);if(navigator.share)try{await navigator.share({title:R.name,text:de});return}catch{}try{await navigator.clipboard.writeText(de)}catch{}}const _=V.toLowerCase(),y=t.filter(R=>R.name.toLowerCase().includes(_)),I={};for(const R of y){const T=R.occupation||"sin ocupacion";I[T]||(I[T]=[]),I[T].push(R)}const k=Object.keys(I).sort((R,T)=>R==="sin ocupacion"?1:T==="sin ocupacion"?-1:R.localeCompare(T));return h.jsxs("div",{className:"contacts",children:[e&&h.jsx("p",{className:"error",children:e}),h.jsxs("div",{className:"contacts-header",children:[h.jsxs("h3",{children:["Contactos ",t.length>0&&h.jsx("span",{className:"count-badge",children:t.length})]}),h.jsx("button",{className:"add-contact-btn",onClick:()=>A(!E),children:E?"✕ Cerrar":"+ Añadir contacto"})]}),E&&h.jsxs("form",{className:"contact-form fade-in",onSubmit:j,children:[h.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:R=>i(R.target.value),required:!0}),h.jsx("input",{className:"cf-input",type:"tel",placeholder:"Teléfono",value:o,onChange:R=>l(R.target.value)}),h.jsx("input",{className:"cf-input",type:"email",placeholder:"Email",value:u,onChange:R=>c(R.target.value)}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Ciudad",value:p,onChange:R=>m(R.target.value)}),h.jsx("input",{className:"cf-input",type:"url",placeholder:"Web",value:g,onChange:R=>S(R.target.value)}),h.jsxs("select",{className:"cf-select",value:N,onChange:R=>x(R.target.value),children:[h.jsx("option",{value:"",children:"Selecciona ocupación"}),U2.map(R=>h.jsx("option",{value:R,children:dd(R)},R))]}),h.jsxs("div",{className:"cf-rating",children:[h.jsx("span",{children:"Valoración:"}),h.jsx("div",{className:"stars",children:[1,2,3,4,5].map(R=>h.jsx("button",{type:"button",className:`star ${R<=D?"active":""}`,onClick:()=>C(R),children:R<=D?"★":"☆"},R))})]}),h.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),t.length>0&&h.jsxs("div",{className:"search-box",children:[h.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"11",cy:"11",r:"8"}),h.jsx("path",{d:"M21 21l-4.35-4.35"})]}),h.jsx("input",{className:"search-input",type:"text",placeholder:"Buscar contacto...",value:V,onChange:R=>P(R.target.value)}),V&&h.jsx("button",{className:"search-clear",onClick:()=>P(""),children:"✕"})]}),y.length===0&&!E&&h.jsx("p",{className:"contacts-empty",children:V?"No se encontraron contactos.":"No has añadido ningún contacto todavía."}),h.jsx("div",{className:"contacts-list",children:k.map(R=>h.jsxs("div",{className:"contact-group",children:[h.jsx("h4",{className:"contact-group-title",children:R==="sin ocupacion"?"Otros":dd(R)}),I[R].map(T=>h.jsxs("div",{className:"contact-item fade-in",children:[h.jsxs("div",{className:"contact-item-info",children:[h.jsx("span",{className:"contact-item-name",children:T.name}),h.jsxs("div",{className:"contact-item-details",children:[T.phone&&h.jsxs("span",{children:["📞 ",T.phone]}),T.email&&h.jsxs("span",{children:["✉️ ",T.email]}),T.city&&h.jsxs("span",{children:["📍 ",T.city]}),T.webpage&&h.jsxs("span",{children:["🌐 ",T.webpage]}),h.jsxs("span",{className:"stars-small",children:["★".repeat(T.rating),"☆".repeat(5-T.rating)]})]}),(T.phone||T.email)&&h.jsxs("div",{className:"contact-actions",children:[T.phone&&h.jsx("a",{className:"contact-action-btn",href:`tel:${T.phone}`,title:"Llamar",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),T.email&&h.jsx("a",{className:"contact-action-btn",href:`mailto:${T.email}`,title:"Email",children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),h.jsx("button",{className:"contact-action-btn",onClick:()=>w(T),title:"Compartir",children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"18",cy:"5",r:"3"}),h.jsx("circle",{cx:"6",cy:"12",r:"3"}),h.jsx("circle",{cx:"18",cy:"19",r:"3"}),h.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),h.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})]})]}),h.jsx("button",{className:"contact-item-delete",onClick:()=>r(T.id),title:"Eliminar",children:"✕"})]},T.id))]},R))})]})}function B2({favorites:t,error:e,onAdd:n,onRemove:r}){const[s,i]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),[p,m]=O.useState(!1),g=x=>{x.preventDefault(),s.trim()&&(n({name:s.trim(),url:o.trim(),description:u.trim()}),i(""),l(""),c(""),m(!1))},S=[...t].sort((x,D)=>x.name.localeCompare(D.name));async function N(x){const D=`${x.name}${x.url?`
`+x.url:""}${x.description?`
`+x.description:""}`;if(navigator.share)try{await navigator.share({title:x.name,text:D});return}catch{}try{await navigator.clipboard.writeText(D)}catch{}}return h.jsxs("div",{className:"favorites",children:[e&&h.jsx("p",{className:"error",children:e}),h.jsxs("div",{className:"favorites-header",children:[h.jsxs("h3",{children:["Favoritos ",t.length>0&&h.jsx("span",{className:"count-badge",children:t.length})]}),h.jsx("button",{className:"add-fav-btn",onClick:()=>m(!p),children:p?"✕ Cerrar":"+ Añadir favorito"})]}),p&&h.jsxs("form",{className:"fav-form fade-in",onSubmit:g,children:[h.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre",value:s,onChange:x=>i(x.target.value),required:!0}),h.jsx("input",{className:"cf-input",type:"url",placeholder:"URL (https://...)",value:o,onChange:x=>l(x.target.value)}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Descripción",value:u,onChange:x=>c(x.target.value)}),h.jsx("button",{className:"generate-btn",type:"submit",children:"Guardar"})]}),S.length===0&&!p&&h.jsx("p",{className:"favorites-empty",children:"No has añadido ningún favorito todavía."}),h.jsx("div",{className:"favorites-list",children:S.map(x=>h.jsxs("div",{className:"fav-item fade-in",children:[h.jsxs("div",{className:"fav-item-info",children:[h.jsx("a",{className:"fav-item-name",href:x.url,target:"_blank",rel:"noopener noreferrer",children:x.name}),x.description&&h.jsx("span",{className:"fav-item-desc",children:x.description}),x.url&&h.jsx("span",{className:"fav-item-url",children:x.url})]}),h.jsxs("div",{className:"fav-item-actions",children:[h.jsx("button",{className:"fav-action-btn",onClick:()=>N(x),title:"Compartir",children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:[h.jsx("circle",{cx:"18",cy:"5",r:"3"}),h.jsx("circle",{cx:"6",cy:"12",r:"3"}),h.jsx("circle",{cx:"18",cy:"19",r:"3"}),h.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),h.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),h.jsx("button",{className:"fav-item-delete",onClick:()=>r(x.id),title:"Eliminar",children:"✕"})]})]},x.id))})]})}const $2=[{key:"length",label:"Longitud"},{key:"temp",label:"Temperatura"},{key:"weight",label:"Peso"},{key:"volume",label:"Volumen"},{key:"currency",label:"Moneda"}],Ka={length:[{key:"m",label:"Metro",toBase:1},{key:"km",label:"Kilómetro",toBase:1e3},{key:"cm",label:"Centímetro",toBase:.01},{key:"mm",label:"Milímetro",toBase:.001},{key:"mi",label:"Milla",toBase:1609.344},{key:"yd",label:"Yarda",toBase:.9144},{key:"ft",label:"Pie",toBase:.3048},{key:"in",label:"Pulgada",toBase:.0254}],weight:[{key:"kg",label:"Kilogramo",toBase:1},{key:"g",label:"Gramo",toBase:.001},{key:"mg",label:"Miligramo",toBase:1e-6},{key:"lb",label:"Libra",toBase:.453592},{key:"oz",label:"Onza",toBase:.0283495},{key:"t",label:"Tonelada",toBase:1e3}],volume:[{key:"l",label:"Litro",toBase:1},{key:"ml",label:"Mililitro",toBase:.001},{key:"gal",label:"Galón",toBase:3.78541},{key:"floz",label:"Onza líquida",toBase:.0295735},{key:"m3",label:"Metro cúbico",toBase:1e3}],currency:[{key:"eur",label:"Euro (EUR)",toBase:1},{key:"usd",label:"Dólar (USD)",toBase:.92},{key:"gbp",label:"Libra (GBP)",toBase:1.17},{key:"jpy",label:"Yen (JPY)",toBase:.0061},{key:"mxn",label:"Peso mexicano (MXN)",toBase:.045},{key:"ars",label:"Peso argentino (ARS)",toBase:95e-5}]};function q2(t,e,n){let r;return e==="c"?r=t:e==="f"?r=(t-32)*5/9:r=t-273.15,n==="c"?r:n==="f"?r*9/5+32:r+273.15}const Tv=[{key:"c",label:"Celsius (°C)"},{key:"f",label:"Fahrenheit (°F)"},{key:"k",label:"Kelvin (K)"}];function Iv(t){if(!isFinite(t))return"—";const e=t.toPrecision(10),n=parseFloat(e);return n%1===0?n.toString():n.toFixed(4).replace(/\.?0+$/,"")}function W2(){var g,S;const[t,e]=O.useState("length"),[n,r]=O.useState(""),[s,i]=O.useState(""),[o,l]=O.useState(""),u=t==="temp",c=u?Tv:Ka[t],p=N=>{e(N),r(""),i(""),l("")},m=(()=>{const N=parseFloat(o);if(isNaN(N)||!n||!s)return null;if(u)return Iv(q2(N,n,s));const x=Ka[t].find(C=>C.key===n),D=Ka[t].find(C=>C.key===s);return!x||!D?null:Iv(N*x.toBase/D.toBase)})();return h.jsxs("div",{className:"converter",children:[h.jsx("div",{className:"conv-cats",children:$2.map(N=>h.jsx("button",{className:`conv-cat ${t===N.key?"active":""}`,onClick:()=>p(N.key),children:N.label},N.key))}),h.jsxs("div",{className:"conv-form",children:[h.jsx("input",{className:"cf-input",type:"number",placeholder:"Valor",value:o,onChange:N=>l(N.target.value)}),h.jsxs("div",{className:"conv-row",children:[h.jsxs("select",{className:"cf-select",value:n,onChange:N=>r(N.target.value),children:[h.jsx("option",{value:"",children:"De"}),c.map(N=>h.jsx("option",{value:N.key,children:N.label},N.key))]}),h.jsx("span",{className:"conv-arrow",children:"→"}),h.jsxs("select",{className:"cf-select",value:s,onChange:N=>i(N.target.value),children:[h.jsx("option",{value:"",children:"A"}),c.map(N=>h.jsx("option",{value:N.key,children:N.label},N.key))]})]}),m!==null&&h.jsxs("div",{className:"conv-result fade-in",children:[h.jsx("span",{className:"conv-result-value",children:m}),h.jsx("span",{className:"conv-result-unit",children:u?(g=Tv.find(N=>N.key===s))==null?void 0:g.label:(S=Ka[t].find(N=>N.key===s))==null?void 0:S.label})]})]})]})}const Sv=["¿Qué le dice un 0 a un 8? Bonito cinturón.","¿Cómo se despiden los químicos? Ácido un placer.","¿Qué hace una abeja en el gimnasio? Zumba.","—¡Ojalá fuera un chip! —Decía la patata.","¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.","—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.","¿Qué hace un pez en el cine? Nemo.","—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.","—Doctor, tengo 3 brazos. —Pues vístase y calle.","¿Qué hace una foca en una obra? Foca-pá.","—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.","—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.","Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?","¿Cómo se llama una italiana con bigote? Mafalda.","—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.","¿Qué le dice un jaguar a otro? Jaguar tú.","—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.","—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.","—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.","¿Cómo se llaman los primos de Tarzán? Los primos del monte.","—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.","—¿Qué es verde y habla por los codos? —Un perejil parlante.","—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.","¿Cómo se dice camarero en chino? Sumenú.","—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.","—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.","—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.","¿Qué hace un perro con un taladro? Taladrando.","—¿Qué son 50 caracoles? —Cincuenta centímetros.","Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien."],H2=["⚀","⚁","⚂","⚃","⚄","⚅"];function ca(t,e){return Math.floor(Math.random()*(e-t+1))+t}function G2({onSelect:t}){const e=[{key:"dice",label:"Dado",icon:"🎲"},{key:"coin",label:"Moneda",icon:"🪙"},{key:"rps",label:`Piedra,
Papel,
Tijera`,icon:"✂️"},{key:"random",label:`Número
al azar`,icon:"🔢"},{key:"joke",label:"Chiste",icon:"💡"},{key:"pepe",label:`Pepe
Game`,icon:"🎮"}];return h.jsxs("div",{className:"ent-hub",children:[h.jsx("h3",{className:"ent-hub-title",children:"Entretenimiento"}),h.jsx("div",{className:"ent-grid",children:e.map(n=>h.jsxs("button",{className:"ent-card",onClick:()=>t(n.key),children:[h.jsx("span",{className:"ent-card-icon",children:n.icon}),h.jsx("span",{className:"ent-card-label",children:n.label})]},n.key))})]})}function K2(){const[t,e]=O.useState(null),[n,r]=O.useState(null);return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"🎲 Dado"}),h.jsx("div",{className:"ent-result",children:t&&h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"ent-dice",children:t}),h.jsx("span",{className:"ent-big-num",children:n})]})}),h.jsx("button",{className:"generate-btn",onClick:()=>{const s=ca(1,6);e(H2[s-1]),r(s)},children:"Lanzar dado"})]})}function Q2(){const[t,e]=O.useState(null);return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"🪙 Moneda"}),h.jsx("div",{className:"ent-result",children:t&&h.jsx("span",{className:"ent-coin",children:t==="cara"?"🪙 Cara":"🪙 Cruz"})}),h.jsx("button",{className:"generate-btn",onClick:()=>e(ca(0,1)?"cara":"cruz"),children:"Lanzar moneda"})]})}function Y2(){const t=[{key:"rock",label:"Piedra",icon:"🪨",beats:"scissors"},{key:"paper",label:"Papel",icon:"📄",beats:"rock"},{key:"scissors",label:"Tijera",icon:"✂️",beats:"paper"}],[e,n]=O.useState(null),[r,s]=O.useState(null),[i,o]=O.useState(null),l=c=>{const p=t[ca(0,2)];n(c),s(p.key),c===p.key?o("🤝 Empate"):t.find(m=>m.key===c).beats===p.key?o("🎉 ¡Ganaste!"):o("😢 Perdiste")},u=()=>{n(null),s(null),o(null)};return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"✂️ Piedra, Papel o Tijera"}),e?h.jsxs("div",{className:"ent-rps-result",children:[h.jsxs("div",{className:"ent-rps-row",children:[h.jsxs("div",{className:"ent-rps-col",children:[h.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===e).icon}),h.jsx("span",{children:"Tú"})]}),h.jsx("span",{className:"ent-vs",children:"VS"}),h.jsxs("div",{className:"ent-rps-col",children:[h.jsx("span",{className:"rps-icon",children:t.find(c=>c.key===r).icon}),h.jsx("span",{children:"App"})]})]}),h.jsx("div",{className:"ent-result",children:h.jsx("span",{className:"ent-rps-outcome",children:i})}),h.jsx("button",{className:"generate-btn",onClick:u,children:"Otra vez"})]}):h.jsx("div",{className:"ent-rps-btns",children:t.map(c=>h.jsxs("button",{className:"rps-btn",onClick:()=>l(c.key),children:[h.jsx("span",{className:"rps-icon",children:c.icon}),h.jsx("span",{children:c.label})]},c.key))})]})}function J2(){const[t,e]=O.useState("1"),[n,r]=O.useState("100"),[s,i]=O.useState(null);return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"🔢 Número al azar"}),h.jsxs("div",{className:"conv-row",style:{marginTop:0},children:[h.jsx("input",{className:"cf-input",type:"number",placeholder:"Mín",value:t,onChange:o=>e(o.target.value)}),h.jsx("span",{className:"conv-arrow",children:"→"}),h.jsx("input",{className:"cf-input",type:"number",placeholder:"Máx",value:n,onChange:o=>r(o.target.value)})]}),h.jsx("div",{className:"ent-result",children:s!==null&&h.jsx("span",{className:"ent-big-num",children:s})}),h.jsx("button",{className:"generate-btn",onClick:()=>i(ca(parseInt(t)||0,parseInt(n)||100)),children:"Generar"})]})}function X2(){const[t,e]=O.useState("");return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"💡 Chiste"}),h.jsx("div",{className:"ent-joke-box",children:t&&h.jsx("p",{className:"ent-joke-text",children:t})}),h.jsx("button",{className:"generate-btn",onClick:()=>e(Sv[ca(0,Sv.length-1)]),children:"Nuevo chiste"})]})}function Z2(){return h.jsxs("div",{className:"ent-sub",children:[h.jsx("h3",{children:"🎮 Pepe Game"}),h.jsx("p",{style:{color:"#64748b",fontSize:14,marginBottom:16,textAlign:"center"},children:"Abrir Pepe Game en nueva pestaña"}),h.jsx("a",{className:"generate-btn",href:"https://jlrmaster-creator.github.io/pepe_game/1.html",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",display:"flex"},children:"Abrir juego"})]})}const eb={dice:K2,coin:Q2,rps:Y2,random:J2,joke:X2,pepe:Z2};function tb(){const[t,e]=O.useState(null),n=t?eb[t]:null;return h.jsx("div",{className:"entertainment",children:t?h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"ent-back",onClick:()=>e(null),children:"← Volver"}),h.jsx(n,{})]}):h.jsx(G2,{onSelect:e})})}const nb=[{key:"daily",label:"A diario"},{key:"weekly",label:"Semanal"},{key:"monthly",label:"Mensual"},{key:"once",label:"Una vez"}],w0=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];function rb(t){return t.earlyBird?7:9}function sb(t){const e=rb(t);return t.frequency==="daily"?`A diario (${e}:00)`:t.frequency==="weekly"?`Cada ${w0[t.weekday]} (${e}:00)`:t.frequency==="monthly"?`Día ${t.day} de cada mes (${e}:00)`:t.frequency==="once"?`${t.day}/${String(t.month).padStart(2,"0")} (${e}:00)`:""}function ib(t){return t.lastFiredAt?Date.now()-new Date(t.lastFiredAt).getTime()<36e5:!1}function hd(t){return(t?7:9)+":00"}const fd={name:"",note:"",frequency:"daily",weekday:1,day:1,month:1,earlyBird:!1};function ob({reminders:t,error:e,justFired:n,onAdd:r,onUpdate:s,onRemove:i,onShare:o,onUnshare:l}){const[u,c]=O.useState({...fd}),[p,m]=O.useState(!1),[g,S]=O.useState(null),[N,x]=O.useState(null),[D,C]=O.useState(""),E=(y,I)=>c(k=>({...k,[y]:I})),A=()=>{c({...fd}),S(null),m(!0)},V=y=>{c({name:y.name,note:y.note||"",frequency:y.frequency,weekday:y.weekday??1,day:y.day??1,month:y.month??1,earlyBird:y.earlyBird??!1}),S(y.id),m(!0)},P=y=>{if(y.preventDefault(),!u.name.trim())return;const I={name:u.name.trim(),note:u.note.trim(),frequency:u.frequency,active:!0,earlyBird:u.earlyBird};u.frequency==="weekly"?I.weekday=u.weekday:u.frequency==="monthly"?I.day=u.day:u.frequency==="once"&&(I.day=u.day,I.month=u.month),g?s(g,I):r(I),c({...fd}),S(null),m(!1)},j=y=>{!D.trim()||!D.includes("@")||(o(y,D.trim()),C(""),x(null))},w=t.filter(y=>!y.isShared).length,_=[...t].sort((y,I)=>y.active!==I.active?y.active?-1:1:y.name.localeCompare(I.name));return h.jsxs("div",{className:"reminders",children:[e&&h.jsx("p",{className:"error",children:e}),h.jsxs("div",{className:"reminders-header",children:[h.jsxs("h3",{children:["Recordatorios ",t.length>0&&h.jsx("span",{className:"count-badge",children:t.length})]}),h.jsx("button",{className:"add-reminder-btn",onClick:A,disabled:w>=5&&!g,children:"+ Añadir"})]}),p&&h.jsxs("form",{className:"reminder-form fade-in",onSubmit:P,children:[h.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre (ej: Tomar pastillas)",value:u.name,onChange:y=>E("name",y.target.value),required:!0}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Nota (opcional)",value:u.note,onChange:y=>E("note",y.target.value)}),h.jsx("select",{className:"cf-select",value:u.frequency,onChange:y=>E("frequency",y.target.value),children:nb.map(y=>h.jsx("option",{value:y.key,children:y.label},y.key))}),u.frequency==="weekly"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"reminder-label",children:"Día de la semana:"}),h.jsx("select",{className:"cf-select",value:u.weekday,onChange:y=>E("weekday",parseInt(y.target.value)),children:w0.map((y,I)=>h.jsx("option",{value:I,children:y},I))})]}),u.frequency==="monthly"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"reminder-label",children:"Día del mes:"}),h.jsx("select",{className:"cf-select",value:u.day,onChange:y=>E("day",parseInt(y.target.value)),children:Array.from({length:28},(y,I)=>h.jsx("option",{value:I+1,children:I+1},I+1))})]}),u.frequency==="once"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"reminder-label",children:"Día:"}),h.jsxs("div",{className:"reminder-row",children:[h.jsx("select",{className:"cf-select",value:u.day,onChange:y=>E("day",parseInt(y.target.value)),children:Array.from({length:31},(y,I)=>h.jsx("option",{value:I+1,children:I+1},I+1))}),h.jsx("span",{className:"reminder-colon",children:"/"}),h.jsx("select",{className:"cf-select",value:u.month,onChange:y=>E("month",parseInt(y.target.value)),children:Array.from({length:12},(y,I)=>h.jsx("option",{value:I+1,children:String(I+1).padStart(2,"0")},I+1))})]})]}),h.jsxs("label",{className:"reminder-checkbox-label",children:[h.jsx("input",{type:"checkbox",className:"reminder-checkbox",checked:u.earlyBird,onChange:y=>E("earlyBird",y.target.checked)}),h.jsxs("span",{children:["¿Eres madrugador? La primera notificación sonará a las ",h.jsx("strong",{children:hd(u.earlyBird)})]})]}),h.jsxs("p",{className:"reminder-form-hint",children:["El aviso sonará cada hora desde las ",hd(u.earlyBird)," hasta que lo desactives (🔔)."]}),h.jsxs("div",{className:"reminder-form-actions",children:[h.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>{m(!1),S(null)},children:"Cancelar"}),h.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:g?"Guardar cambios":"Crear recordatorio"})]})]}),_.length===0&&!p&&h.jsx("p",{className:"reminders-empty",children:"No tienes recordatorios. ¡Añade uno!"}),h.jsx("div",{className:"reminders-list",children:_.map(y=>{const I=ib(y)||n===y.id;return h.jsxs("div",{className:`reminder-item fade-in ${I?"fired":""} ${y.active?"":"inactive"}`,children:[h.jsxs("div",{className:"reminder-item-left",children:[h.jsxs("div",{className:"reminder-item-header",children:[h.jsx("span",{className:"reminder-item-name",children:y.name}),I&&h.jsx("span",{className:"reminder-fired-badge",children:"✅ Ahora"})]}),y.note&&h.jsx("span",{className:"reminder-item-note",children:y.note}),h.jsx("span",{className:"reminder-item-time",children:sb(y)}),y.active&&h.jsxs("span",{className:"reminder-hourly-note",children:["Cada hora desde las ",hd(y.earlyBird)," hasta desactivar (🔔)"]}),y.isShared&&y.ownerEmail&&h.jsxs("span",{className:"reminder-shared-from",children:["Compartido por ",y.ownerEmail]}),!y.isShared&&y.sharedWithEmails&&y.sharedWithEmails.length>0&&h.jsx("div",{className:"reminder-shared-with",children:y.sharedWithEmails.map((k,R)=>h.jsxs("span",{className:"reminder-shared-tag",children:[k,h.jsx("button",{className:"reminder-shared-remove",onClick:()=>l(y.id,y.sharedWithUids[R],k),title:"Eliminar",children:"✕"})]},k))})]}),h.jsx("div",{className:"reminder-item-actions",children:!y.isShared&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:`reminder-toggle-btn ${y.active?"on":"off"}`,onClick:()=>s(y.id,{active:!y.active}),title:y.active?"Desactivar":"Activar",children:y.active?"🔔":"🔕"}),h.jsx("button",{className:"reminder-edit-btn",onClick:()=>V(y),title:"Editar",children:"✏️"}),h.jsx("button",{className:"reminder-share-btn",onClick:()=>x(N===y.id?null:y.id),title:"Compartir",children:"📤"}),h.jsx("button",{className:"reminder-delete-btn",onClick:()=>i(y.id),title:"Eliminar",children:"🗑️"})]})}),N===y.id&&!y.isShared&&h.jsxs("div",{className:"reminder-share-form fade-in",children:[h.jsx("input",{className:"cf-input",type:"email",placeholder:"Email del usuario",value:D,onChange:k=>C(k.target.value)}),h.jsx("button",{className:"generate-btn",style:{marginBottom:0,padding:"8px 12px",fontSize:13},onClick:()=>j(y.id),children:"Compartir"})]})]},y.id)})}),w>=5&&!g&&h.jsx("p",{className:"reminders-limit",children:"Máximo 5 recordatorios propios permitidos."})]})}const ab=[{value:"#ffffff",label:"Blanco"},{value:"#fef9c3",label:"Amarillo"},{value:"#dcfce7",label:"Verde"},{value:"#dbeafe",label:"Azul"},{value:"#fce7f3",label:"Rosa"},{value:"#ede9fe",label:"Lila"}],Qa={title:"",body:"",color:"#fef9c3"};function lb({notes:t,error:e,maxNotes:n,onAdd:r,onUpdate:s,onRemove:i,onTogglePin:o}){const[l,u]=O.useState({...Qa}),[c,p]=O.useState(!1),[m,g]=O.useState(null),S=(A,V)=>u(P=>({...P,[A]:V})),N=()=>{u({...Qa}),g(null),p(!0)},x=A=>{u({title:A.title,body:A.body,color:A.color}),g(A.id),p(!0)},D=A=>{A.preventDefault(),!(!l.body.trim()&&!l.title.trim())&&(m?s(m,{title:l.title.trim(),body:l.body.trim(),color:l.color}):r({title:l.title.trim(),body:l.body.trim(),color:l.color}),u({...Qa}),g(null),p(!1))},C=()=>{u({...Qa}),g(null),p(!1)},E=t.length>=n&&!m;return h.jsxs("div",{className:"notes",children:[e&&h.jsx("p",{className:"error",children:e}),h.jsxs("div",{className:"notes-header",children:[h.jsxs("h3",{children:["Notas",t.length>0&&h.jsxs("span",{className:"count-badge",children:[t.length,"/",n]})]}),h.jsx("button",{className:"add-note-btn",onClick:N,disabled:E,children:"+ Añadir"})]}),c&&h.jsxs("form",{className:"note-form fade-in",onSubmit:D,children:[h.jsx("input",{className:"cf-input",type:"text",placeholder:"Título (opcional)",value:l.title,onChange:A=>S("title",A.target.value),maxLength:60}),h.jsx("textarea",{className:"note-form-textarea",placeholder:"Escribe tu nota aquí…",value:l.body,onChange:A=>S("body",A.target.value),rows:4,maxLength:500,required:!l.title.trim()}),h.jsxs("div",{className:"note-color-row",children:[h.jsx("span",{className:"reminder-label",children:"Color:"}),h.jsx("div",{className:"note-color-swatches",children:ab.map(A=>h.jsx("button",{type:"button",title:A.label,className:`note-color-swatch ${l.color===A.value?"selected":""}`,style:{background:A.value},onClick:()=>S("color",A.value)},A.value))})]}),h.jsxs("div",{className:"reminder-form-actions",children:[h.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:C,children:"Cancelar"}),h.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:m?"Guardar cambios":"Crear nota"})]})]}),t.length===0&&!c&&h.jsx("p",{className:"reminders-empty",children:"No tienes notas. ¡Añade una!"}),h.jsx("div",{className:"notes-grid",children:t.map(A=>h.jsxs("div",{className:`note-card fade-in ${A.pinned?"pinned":""}`,style:{background:A.color||"#ffffff"},children:[h.jsxs("div",{className:"note-card-top",children:[A.title&&h.jsx("p",{className:"note-card-title",children:A.title}),h.jsx("p",{className:"note-card-body",children:A.body})]}),h.jsxs("div",{className:"note-card-footer",children:[h.jsx("span",{className:"note-card-date",children:new Date(A.updatedAt).toLocaleDateString("es-ES",{day:"2-digit",month:"short"})}),h.jsxs("div",{className:"note-card-actions",children:[h.jsx("button",{className:`note-pin-btn ${A.pinned?"active":""}`,onClick:()=>o(A.id),title:A.pinned?"Desanclar":"Anclar",children:"📌"}),h.jsx("button",{className:"note-edit-btn",onClick:()=>x(A),title:"Editar",children:"✏️"}),h.jsx("button",{className:"note-delete-btn",onClick:()=>i(A.id),title:"Eliminar",children:"🗑️"})]})]})]},A.id))}),E&&h.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," notas permitidas."]})]})}const ub=["#2d6a4f","#1d4ed8","#7c3aed","#b45309","#be185d","#0e7490","#4d7c0f","#9f1239"],cb=["EUR","USD","GBP"],Av={name:"",clientName:"",rate:"",currency:"EUR",color:"#2d6a4f"};function Ya(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}h ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(r).padStart(2,"0")}s`:`${r}s`}function Ja(t,e,n){return e?(t/3600*e).toLocaleString("es-ES",{style:"currency",currency:n,minimumFractionDigits:2}):null}function db(t){return new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"})}function Nv(t){return new Date(t).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}function hb({projects:t,entries:e,error:n,maxProjects:r,activeProjectId:s,elapsed:i,secondsByProject:o,onAddProject:l,onRemoveProject:u,onStartTimer:c,onStopTimer:p,onRemoveEntry:m}){var Rt;const[g,S]=O.useState(!1),[N,x]=O.useState({...Av}),[D,C]=O.useState(""),[E,A]=O.useState(!1),[V,P]=O.useState(null),[j,w]=O.useState(null),_=(q,it)=>x(B=>({...B,[q]:it})),y=q=>{q.preventDefault(),N.name.trim()&&(l({...N,rate:parseFloat(N.rate)||0}),x({...Av}),S(!1))},I=async()=>{await p(D.trim()),C(""),A(!1)},k=t.find(q=>q.id===s),R=t.length>=r,T=V?e.filter(q=>q.projectId===V):e,de=T.reduce((q,it)=>q+(it.durationSec||0),0);return h.jsxs("div",{className:"time-tracker",children:[n&&h.jsx("p",{className:"error",children:n}),s&&k&&h.jsxs("div",{className:"timer-banner fade-in",style:{borderColor:k.color},children:[h.jsxs("div",{className:"timer-banner-left",children:[h.jsx("span",{className:"timer-dot",style:{background:k.color}}),h.jsxs("div",{children:[h.jsx("p",{className:"timer-project-name",children:k.name}),k.clientName&&h.jsx("p",{className:"timer-client",children:k.clientName})]})]}),h.jsxs("div",{className:"timer-banner-right",children:[h.jsx("span",{className:"timer-elapsed",children:Ya(i)}),k.rate>0&&h.jsx("span",{className:"timer-earning",children:Ja(i,k.rate,k.currency)}),h.jsx("button",{className:"timer-stop-btn",onClick:()=>A(!0),children:"⏹ Parar"})]})]}),E&&h.jsx("div",{className:"modal-overlay fade-in",onClick:()=>A(!1),children:h.jsxs("div",{className:"modal-card",onClick:q=>q.stopPropagation(),children:[h.jsx("h4",{className:"modal-title",children:"Parar cronómetro"}),h.jsx("p",{className:"modal-subtitle",children:"¿Añadir una nota sobre lo trabajado? (opcional)"}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Ej: Reunión con cliente, diseño logo...",value:D,onChange:q=>C(q.target.value),autoFocus:!0}),h.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[h.jsx("button",{className:"reminder-cancel-btn",onClick:()=>A(!1),children:"Cancelar"}),h.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1},onClick:I,children:"Guardar"})]})]})}),h.jsxs("div",{className:"time-section-header",children:[h.jsxs("h3",{children:["Proyectos ",h.jsxs("span",{className:"count-badge",children:[t.length,"/",r]})]}),h.jsx("button",{className:"add-note-btn",onClick:()=>S(!g),disabled:R&&!g,children:"+ Añadir"})]}),g&&h.jsxs("form",{className:"note-form fade-in",onSubmit:y,children:[h.jsx("input",{className:"cf-input",type:"text",placeholder:"Nombre del proyecto *",value:N.name,onChange:q=>_("name",q.target.value),required:!0}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Cliente (opcional)",value:N.clientName,onChange:q=>_("clientName",q.target.value)}),h.jsxs("div",{className:"time-rate-row",children:[h.jsx("input",{className:"cf-input",type:"number",min:"0",step:"0.5",placeholder:"Tarifa €/h (opcional)",value:N.rate,onChange:q=>_("rate",q.target.value),style:{flex:2}}),h.jsx("select",{className:"cf-select",value:N.currency,onChange:q=>_("currency",q.target.value),style:{flex:1},children:cb.map(q=>h.jsx("option",{children:q},q))})]}),h.jsxs("div",{className:"note-color-row",children:[h.jsx("span",{className:"reminder-label",children:"Color:"}),h.jsx("div",{className:"note-color-swatches",children:ub.map(q=>h.jsx("button",{type:"button",className:`note-color-swatch ${N.color===q?"selected":""}`,style:{background:q},onClick:()=>_("color",q)},q))})]}),h.jsxs("div",{className:"reminder-form-actions",children:[h.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>S(!1),children:"Cancelar"}),h.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Crear proyecto"})]})]}),t.length===0&&!g&&h.jsx("p",{className:"reminders-empty",children:"No tienes proyectos. ¡Crea uno para empezar!"}),h.jsx("div",{className:"projects-list",children:t.map(q=>{const it=o[q.id]||0,B=s===q.id;return h.jsxs("div",{className:`project-card fade-in ${B?"project-active":""}`,style:{borderLeftColor:q.color},children:[h.jsxs("div",{className:"project-card-info",children:[h.jsx("span",{className:"project-card-name",children:q.name}),q.clientName&&h.jsx("span",{className:"project-card-client",children:q.clientName}),h.jsxs("div",{className:"project-card-stats",children:[h.jsxs("span",{className:"project-stat",children:["🕐 ",Ya(it)]}),q.rate>0&&h.jsxs("span",{className:"project-stat",children:["💰 ",Ja(it,q.rate,q.currency)]})]})]}),h.jsxs("div",{className:"project-card-actions",children:[B?h.jsx("button",{className:"timer-start-btn stop",onClick:()=>A(!0),children:"⏹"}):h.jsx("button",{className:"timer-start-btn",onClick:()=>c(q.id),disabled:!!s,title:"Iniciar cronómetro",children:"▶"}),h.jsx("button",{className:"note-delete-btn",onClick:()=>w(q.id),title:"Eliminar proyecto",style:{opacity:.6,fontSize:15},children:"🗑️"})]})]},q.id)})}),j&&h.jsx("div",{className:"modal-overlay fade-in",onClick:()=>w(null),children:h.jsxs("div",{className:"modal-card",onClick:q=>q.stopPropagation(),children:[h.jsx("h4",{className:"modal-title",children:"¿Eliminar proyecto?"}),h.jsx("p",{className:"modal-subtitle",children:"Se eliminarán también todos sus registros de horas."}),h.jsxs("div",{className:"reminder-form-actions",style:{marginTop:12},children:[h.jsx("button",{className:"reminder-cancel-btn",onClick:()=>w(null),children:"Cancelar"}),h.jsx("button",{className:"generate-btn",style:{marginBottom:0,flex:1,background:"linear-gradient(135deg,#dc2626,#b91c1c)"},onClick:()=>{u(j),w(null)},children:"Eliminar"})]})]})}),e.length>0&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"time-section-header",style:{marginTop:20},children:[h.jsx("h3",{children:"Historial"}),t.length>0&&h.jsxs("select",{className:"cf-select",style:{fontSize:12,padding:"4px 8px"},value:V||"",onChange:q=>P(q.target.value||null),children:[h.jsx("option",{value:"",children:"Todos los proyectos"}),t.map(q=>h.jsx("option",{value:q.id,children:q.name},q.id))]})]}),de>0&&h.jsxs("div",{className:"time-total-bar",children:[h.jsxs("span",{children:["Total: ",h.jsx("strong",{children:Ya(de)})]}),((Rt=T[0])==null?void 0:Rt.rate)>0&&h.jsxs("span",{children:["≈ ",h.jsx("strong",{children:Ja(de,T[0].rate,T[0].currency)})]})]}),h.jsx("div",{className:"entries-list",children:T.slice(0,30).map(q=>{var it;return h.jsxs("div",{className:"entry-item fade-in",children:[h.jsx("div",{className:"entry-dot",style:{background:((it=t.find(B=>B.id===q.projectId))==null?void 0:it.color)||"#94a3b8"}}),h.jsxs("div",{className:"entry-info",children:[h.jsx("span",{className:"entry-project",children:q.projectName}),q.notes&&h.jsx("span",{className:"entry-notes",children:q.notes}),h.jsxs("span",{className:"entry-time",children:[db(q.startedAt)," · ",Nv(q.startedAt)," – ",Nv(q.endedAt)]})]}),h.jsxs("div",{className:"entry-right",children:[h.jsx("span",{className:"entry-duration",children:Ya(q.durationSec)}),q.rate>0&&h.jsx("span",{className:"entry-money",children:Ja(q.durationSec,q.rate,q.currency)}),h.jsx("button",{className:"note-delete-btn",onClick:()=>m(q.id),style:{opacity:.5,fontSize:13},title:"Eliminar registro",children:"🗑️"})]})]},q.id)})})]}),R&&h.jsxs("p",{className:"reminders-limit",children:["Máximo ",r," proyectos permitidos."]})]})}const fb=[21,10,4,0],pb=[0,7,15],Cv={type:"income",concept:"",clientOrProvider:"",amount:"",vatRate:21,irpfRate:0,date:new Date().toISOString().split("T")[0]};function Bt(t,e="EUR"){return t.toLocaleString("es-ES",{style:"currency",currency:e,minimumFractionDigits:2})}function mb(t){const e=new Date(t).getMonth();return e>=0&&e<=2?"Q1":e>=3&&e<=5?"Q2":e>=6&&e<=8?"Q3":"Q4"}function gb({entries:t,error:e,maxEntries:n,stats:r,onAddEntry:s,onRemoveEntry:i}){const[o,l]=O.useState(!1),[u,c]=O.useState({...Cv}),[p,m]=O.useState("ALL"),[g,S]=O.useState(new Date().getFullYear().toString()),N=(P,j)=>c(w=>({...w,[P]:j})),x=P=>{P.preventDefault(),!(!u.concept.trim()||!u.amount)&&(s({type:u.type,concept:u.concept.trim(),clientOrProvider:u.clientOrProvider.trim(),amount:parseFloat(u.amount)||0,vatRate:parseInt(u.vatRate)||0,irpfRate:u.type==="income"&&parseInt(u.irpfRate)||0,date:u.date}),c({...Cv,type:u.type}),l(!1))},D=O.useMemo(()=>{const P=new Set([new Date().getFullYear().toString()]);return t.forEach(j=>{j.date&&P.add(j.date.split("-")[0])}),Array.from(P).sort((j,w)=>w-j)},[t]),C=O.useMemo(()=>t.filter(P=>{const j=P.date.split("-")[0],w=mb(P.date);return j===g&&(p==="ALL"||w===p)}),[t,p,g]),E=O.useMemo(()=>{let P=0,j=0,w=0,_=0,y=0;C.forEach(R=>{R.type==="income"?(P+=R.amount||0,w+=R.vatAmount||0,y+=R.irpfAmount||0):(j+=R.amount||0,_+=R.vatAmount||0)});const I=P-j,k=w-_;return{incomes:P,expenses:j,vatRep:w,vatSop:_,irpf:y,profit:I,vatBal:k}},[C]),A=()=>{if(C.length===0)return;const P=["Fecha","Tipo","Concepto","Cliente/Proveedor","Base Imponible (€)","IVA %","Cuota IVA (€)","IRPF %","Cuota IRPF (€)","Total (€)"],j=C.map(k=>[k.date,k.type==="income"?"Ingreso":"Gasto",k.concept.replace(/"/g,'""'),k.clientOrProvider.replace(/"/g,'""'),k.amount.toFixed(2),k.vatRate,k.vatAmount.toFixed(2),k.type==="income"?k.irpfRate:0,k.type==="income"?k.irpfAmount.toFixed(2):0,k.total.toFixed(2)]),w="\uFEFF"+[P.join(";"),...j.map(k=>k.join(";"))].join(`
`),_=new Blob([w],{type:"text/csv;charset=utf-8;"}),y=URL.createObjectURL(_),I=document.createElement("a");I.setAttribute("href",y),I.setAttribute("download",`Contabilidad_${g}_${p==="ALL"?"Anual":p}.csv`),document.body.appendChild(I),I.click(),document.body.removeChild(I)},V=t.length>=n&&!o;return h.jsxs("div",{className:"finance-tracker",children:[e&&h.jsx("p",{className:"error",children:e}),h.jsxs("div",{className:"finance-stats-grid",children:[h.jsxs("div",{className:"finance-stat-card income",children:[h.jsx("span",{className:"finance-stat-title",children:"Ingresos (Bases)"}),h.jsx("span",{className:"finance-stat-value",children:Bt(E.incomes)}),h.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Repercutido: ",Bt(E.vatRep)]})]}),h.jsxs("div",{className:"finance-stat-card expense",children:[h.jsx("span",{className:"finance-stat-title",children:"Gastos (Bases)"}),h.jsx("span",{className:"finance-stat-value",children:Bt(E.expenses)}),h.jsxs("span",{className:"finance-stat-subtitle",children:["IVA Soportado: ",Bt(E.vatSop)]})]}),h.jsxs("div",{className:"finance-stat-card profit",children:[h.jsx("span",{className:"finance-stat-title",children:"Rendimiento Neto"}),h.jsx("span",{className:"finance-stat-value",style:{color:E.profit>=0?"#2d6a4f":"#dc2626"},children:Bt(E.profit)}),h.jsxs("span",{className:"finance-stat-subtitle",children:["IRPF Retenido: ",Bt(E.irpf)]})]}),h.jsxs("div",{className:"finance-stat-card vat",children:[h.jsx("span",{className:"finance-stat-title",children:"Balance IVA (Hacienda)"}),h.jsx("span",{className:"finance-stat-value",style:{color:E.vatBal>=0?"#b45309":"#1d4ed8"},children:Bt(E.vatBal)}),h.jsx("span",{className:"finance-stat-subtitle",children:E.vatBal>=0?"A pagar":"A devolver"})]})]}),h.jsxs("div",{className:"finance-toolbar",children:[h.jsxs("div",{className:"finance-filters",children:[h.jsx("select",{className:"cf-select filter-select",value:g,onChange:P=>S(P.target.value),children:D.map(P=>h.jsx("option",{value:P,children:P},P))}),h.jsxs("select",{className:"cf-select filter-select",value:p,onChange:P=>m(P.target.value),children:[h.jsx("option",{value:"ALL",children:"Todo el año"}),h.jsx("option",{value:"Q1",children:"1º Trimestre (Ene-Mar)"}),h.jsx("option",{value:"Q2",children:"2º Trimestre (Abr-Jun)"}),h.jsx("option",{value:"Q3",children:"3º Trimestre (Jul-Sep)"}),h.jsx("option",{value:"Q4",children:"4º Trimestre (Oct-Dic)"})]})]}),h.jsxs("div",{className:"finance-actions-row",children:[h.jsx("button",{className:"add-note-btn",onClick:()=>l(!o),disabled:V,style:{flex:1},children:o?"Cerrar":"+ Añadir Asiento"}),C.length>0&&h.jsx("button",{className:"export-csv-btn",onClick:A,title:"Exportar a Excel / CSV",children:"📥 Exportar"})]})]}),o&&h.jsxs("form",{className:"note-form fade-in",onSubmit:x,children:[h.jsxs("div",{className:"finance-type-toggle",children:[h.jsx("button",{type:"button",className:`toggle-btn income ${u.type==="income"?"active":""}`,onClick:()=>N("type","income"),children:"🟢 Ingreso (Factura emitida)"}),h.jsx("button",{type:"button",className:`toggle-btn expense ${u.type==="expense"?"active":""}`,onClick:()=>N("type","expense"),children:"🔴 Gasto (Factura recibida)"})]}),h.jsx("div",{className:"reminder-row",children:h.jsx("input",{className:"cf-input",type:"date",value:u.date,onChange:P=>N("date",P.target.value),required:!0,style:{flex:1}})}),h.jsx("input",{className:"cf-input",type:"text",placeholder:"Concepto (ej: Servicio consultoría, Alquiler local...)",value:u.concept,onChange:P=>N("concept",P.target.value),required:!0,maxLength:100}),h.jsx("input",{className:"cf-input",type:"text",placeholder:u.type==="income"?"Cliente (ej: ACME S.L.)":"Proveedor (ej: Iberdrola)",value:u.clientOrProvider,onChange:P=>N("clientOrProvider",P.target.value),maxLength:100}),h.jsx("div",{className:"reminder-row",children:h.jsx("input",{className:"cf-input",type:"number",min:"0.01",step:"0.01",placeholder:"Base imponible (€) *",value:u.amount,onChange:P=>N("amount",P.target.value),required:!0,style:{flex:1}})}),h.jsxs("div",{className:"finance-tax-selectors",children:[h.jsxs("div",{className:"tax-selector",children:[h.jsx("span",{className:"reminder-label",children:"IVA:"}),h.jsx("select",{className:"cf-select",value:u.vatRate,onChange:P=>N("vatRate",parseInt(P.target.value)),children:fb.map(P=>h.jsxs("option",{value:P,children:[P,"%"]},P))})]}),u.type==="income"&&h.jsxs("div",{className:"tax-selector",children:[h.jsx("span",{className:"reminder-label",children:"Retención IRPF:"}),h.jsx("select",{className:"cf-select",value:u.irpfRate,onChange:P=>N("irpfRate",parseInt(P.target.value)),children:pb.map(P=>h.jsxs("option",{value:P,children:[P,"%"]},P))})]})]}),h.jsxs("div",{className:"reminder-form-actions",children:[h.jsx("button",{type:"button",className:"reminder-cancel-btn",onClick:()=>l(!1),children:"Cancelar"}),h.jsx("button",{className:"generate-btn",type:"submit",style:{marginBottom:0,flex:1},children:"Registrar Asiento"})]})]}),C.length===0&&!o&&h.jsx("p",{className:"reminders-empty",children:"No hay registros para este trimestre."}),h.jsx("div",{className:"finance-list",children:C.map(P=>{const j=P.type==="income";return h.jsxs("div",{className:`finance-item fade-in ${j?"income":"expense"}`,children:[h.jsxs("div",{className:"finance-item-left",children:[h.jsxs("div",{className:"finance-item-header",children:[h.jsx("span",{className:"finance-item-concept",children:P.concept}),h.jsx("span",{className:"finance-item-date",children:new Date(P.date).toLocaleDateString("es-ES")})]}),P.clientOrProvider&&h.jsxs("span",{className:"finance-item-client",children:[j?"Cliente: ":"Prov: "," ",P.clientOrProvider]}),h.jsxs("div",{className:"finance-item-tax-details",children:[h.jsxs("span",{children:["Base: ",Bt(P.amount)]}),h.jsx("span",{children:"·"}),h.jsxs("span",{children:["IVA (",P.vatRate,"%): ",Bt(P.vatAmount)]}),j&&P.irpfRate>0&&h.jsxs(h.Fragment,{children:[h.jsx("span",{children:"·"}),h.jsxs("span",{children:["IRPF (-",P.irpfRate,"%): ",Bt(P.irpfAmount)]})]})]})]}),h.jsxs("div",{className:"finance-item-right",children:[h.jsxs("span",{className:`finance-item-total ${j?"income":"expense"}`,children:[j?"+":"-"," ",Bt(P.total)]}),h.jsx("button",{className:"note-delete-btn",onClick:()=>i(P.id),title:"Eliminar asiento",style:{opacity:.5,fontSize:13},children:"🗑️"})]})]},P.id)})}),V&&h.jsxs("p",{className:"reminders-limit",children:["Máximo ",n," asientos permitidos."]})]})}const pd=[{key:"reply",label:"Responder",icon:"💬"},{key:"birthdays",label:"Cumpleaños",icon:"🎂"},{key:"contacts",label:"Contactos",icon:"👥"},{key:"converter",label:"Conversor",icon:"🔄"},{key:"favorites",label:"Favoritos",icon:"🔗"},{key:"entertainment",label:"Entretenimiento",icon:"🎮"},{key:"reminders",label:"Recordatorios",icon:"🔔"},{key:"notes",label:"Notas",icon:"📝"},{key:"time",label:"Control de Horas",icon:"⏱️"},{key:"finance",label:"Contabilidad",icon:"💰"}];function yb(){const[t,e]=O.useState("reply"),[n,r]=O.useState(!1),s=O.useRef(null),{user:i,logout:o}=Un(),l=qP(),u=QP(),c=ZP(),p=r2(),m=g2(),g=E2(),S=C2(),N=P2();O.useEffect(()=>{const E=A=>{s.current&&!s.current.contains(A.target)&&r(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);const x=E=>{const A=pd.find(V=>V.key===E);if(A!=null&&A.url){window.open(A.url,"_blank"),r(!1);return}e(E),r(!1)},D=pd.find(E=>E.key===t),C=D&&!D.url?D.label:"";return h.jsxs("div",{className:"container",children:[h.jsxs("header",{children:[h.jsxs("div",{className:"header-row",children:[h.jsxs("div",{className:"header-left",ref:s,children:[h.jsx("button",{className:"hamburger-btn",onClick:()=>r(!n),"aria-label":"Menú",children:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),h.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),h.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),n&&h.jsx("div",{className:"dropdown-menu",children:pd.map(E=>h.jsxs("button",{className:`dropdown-item ${t===E.key?"active":""}`,onClick:()=>x(E.key),children:[h.jsx("span",{className:"dropdown-icon",children:E.icon}),E.label]},E.key))})]}),h.jsx("h1",{children:"Toolbox AI"}),h.jsxs("div",{className:"header-user",children:[h.jsx("span",{className:"header-email",children:i.email}),h.jsx("button",{className:"logout-btn",onClick:o,title:"Cerrar sesión",children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),h.jsx("polyline",{points:"16 17 21 12 16 7"}),h.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})})]})]}),h.jsx("div",{className:"current-tab-label",children:C})]}),t==="reply"?h.jsxs("div",{className:"tab-content",children:[h.jsx(D2,{value:l.message,onChange:E=>l.setMessage(E.target.value)}),h.jsx(O2,{selected:l.mode,onSelect:l.setMode}),h.jsx(L2,{onClick:l.generate,loading:l.loading}),l.error&&h.jsx("p",{className:"error fade-in",children:l.error}),h.jsx(j2,{response:l.response,mode:l.mode,onSend:l.sendToWhatsApp,onRegenerate:l.generate,onMakeFunnier:l.makeFunnier}),l.history.length>0&&h.jsxs("section",{className:"history",children:[h.jsxs("div",{className:"history-header",children:[h.jsx("h3",{children:"Historial"}),h.jsx("button",{className:"history-clear",onClick:l.clearHistory,children:"Limpiar"})]}),l.history.slice(0,5).map((E,A)=>h.jsxs("div",{className:"history-item fade-in",children:[h.jsxs("div",{className:"history-item-header",children:[h.jsxs("span",{className:"history-mode-badge",children:[E.mode==="funny"?"😄":E.mode==="elegant"?"⭐":E.mode==="cold"?"❄️":"🔑"," ",E.mode]}),h.jsx("span",{className:"history-time",children:new Date(E.date).toLocaleTimeString()})]}),h.jsx("p",{className:"history-reply",children:E.reply})]},A))]})]}):t==="birthdays"?h.jsx("div",{className:"tab-content",children:h.jsx(F2,{friends:u.friends,todayBirthdays:u.todayBirthdays,error:u.error,onAdd:u.addFriend,onRemove:u.removeFriend,onSendGreeting:u.sendGreeting,onSendReminder:u.sendReminder})}):t==="contacts"?h.jsx("div",{className:"tab-content",children:h.jsx(z2,{contacts:c.contacts,error:c.error,onAdd:c.addContact,onRemove:c.removeContact})}):t==="converter"?h.jsx("div",{className:"tab-content",children:h.jsx(W2,{})}):t==="entertainment"?h.jsx("div",{className:"tab-content",children:h.jsx(tb,{})}):t==="reminders"?h.jsx("div",{className:"tab-content",children:h.jsx(ob,{reminders:m.reminders,error:m.error,justFired:m.justFired,userEmail:m.userEmail,onAdd:m.addReminder,onUpdate:m.updateReminder,onRemove:m.removeReminder,onShare:m.shareReminder,onUnshare:m.unshareReminder})}):t==="notes"?h.jsx("div",{className:"tab-content",children:h.jsx(lb,{notes:g.notes,error:g.error,maxNotes:g.maxNotes,onAdd:g.addNote,onUpdate:g.updateNote,onRemove:g.removeNote,onTogglePin:g.togglePin})}):t==="time"?h.jsx("div",{className:"tab-content",children:h.jsx(hb,{projects:S.projects,entries:S.entries,error:S.error,maxProjects:S.maxProjects,activeProjectId:S.activeProjectId,elapsed:S.elapsed,secondsByProject:S.secondsByProject,onAddProject:S.addProject,onRemoveProject:S.removeProject,onStartTimer:S.startTimer,onStopTimer:S.stopTimer,onRemoveEntry:S.removeEntry})}):t==="finance"?h.jsx("div",{className:"tab-content",children:h.jsx(gb,{entries:N.entries,error:N.error,maxEntries:N.maxEntries,stats:N.stats,onAddEntry:N.addEntry,onRemoveEntry:N.removeEntry})}):h.jsx("div",{className:"tab-content",children:h.jsx(B2,{favorites:p.favorites,error:p.error,onAdd:p.addFavorite,onRemove:p.removeFavorite})})]})}function kv({children:t}){return h.jsxs("div",{className:"app-shell",children:[t,h.jsx("footer",{className:"app-footer",children:"Created by: José López-Romero Moraleda © 2026"})]})}function vb(){return h.jsx("div",{className:"loading-screen",children:h.jsx("div",{className:"loading-spinner"})})}function _b(){const{user:t,loading:e}=Un();return e?h.jsx(kv,{children:h.jsx(vb,{})}):h.jsx(kv,{children:t?h.jsx(yb,{}):h.jsx(b2,{})})}md.createRoot(document.getElementById("root")).render(h.jsx(zP,{children:h.jsx(_b,{})}));
