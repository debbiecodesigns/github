_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/kxI":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),p=n("33Jr"),f={tag:p.c,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,s=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.b)(u()(t,"card-body"),n);return i.a.createElement(s,Object(r.a)({},c,{className:l,ref:a}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},"3OM0":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),p=n("33Jr"),f=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.c,className:c.a.string,cssModule:c.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,a=e.hidden,s=e.widths,c=e.tag,l=e.check,f=e.size,d=e.for,m=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];s.forEach((function(t,r){var o=e[t];if(delete m[t],o||""===o){var a,i=!r;if(Object(p.a)(o)){var s,c=i?"-":"-"+t+"-";a=g(i,t,o.size),b.push(Object(p.b)(u()(((s={})[a]=o.size||""===o.size,s["order"+c+o.order]=o.order||0===o.order,s["offset"+c+o.offset]=o.offset||0===o.offset,s))),n)}else a=g(i,t,o),b.push(a)}}));var y=Object(p.b)(u()(t,!!a&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),n);return i.a.createElement(c,Object(r.a)({htmlFor:d},m,{className:y}))};y.propTypes=m,y.defaultProps=b,t.a=y},BLzl:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),p=n("33Jr"),f={tag:p.c,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,n=e.cssModule,a=e.color,s=e.body,c=e.inverse,l=e.outline,f=e.tag,d=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(p.b)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!a&&(l?"border":"bg")+"-"+a),n);return i.a.createElement(f,Object(r.a)({},m,{className:b,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},ChEw:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),p=n("33Jr"),f={tag:p.c,className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),c=Object(p.b)(u()(t,"card-title"),n);return i.a.createElement(a,Object(r.a)({},s,{className:c}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},FbcN:function(e,t,n){"use strict";(function(e){var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("rePB"),s=n("MX0m"),c=n.n(s),l=n("q1tI"),u=n.n(l),p=n("jrRI"),f=n("3OM0"),d=n("L3zb"),m=n("LpSC"),b=n.n(m),g=n("eWwy"),y=n("x0hB"),h=n("JDnx"),x=n("p46w"),v=n.n(x),w=u.a.createElement;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var t=Object(l.useState)({address:"",city:"",state:"",stripe_id:""}),n=t[0],r=t[1],i=Object(l.useState)(""),s=i[0],u=i[1],m=Object(g.useStripe)(),x=Object(g.useElements)(),j=Object(l.useContext)(h.a);function E(e){var t=n[e.target.name]=e.target.value;r(O(O({},n),{},{updateItem:t}))}function k(){return(k=Object(a.a)(o.a.mark((function t(){var r,a,i,s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=x.getElement(g.CardElement),a=e.env.NEXT_PUBLIC_API_URL||"http://localhost:1337",t.next=4,m.createToken(r);case 4:return i=t.sent,s=v.a.get("token"),t.next=8,b()("".concat(a,"/orders"),{method:"POST",headers:s&&{Authorization:"Bearer ".concat(s)},body:JSON.stringify({amount:Number(Math.round(j.cart.total+"e2")+"e-2"),dishes:j.cart.items,address:n.address,city:n.city,state:n.state,token:i.token.id})});case 8:(c=t.sent).ok||(u(c.statusText),console.log("SUCCESS"));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return w("div",{className:"jsx-1630660198 paper"},w("h5",{className:"jsx-1630660198"},"Your information:"),w("hr",{className:"jsx-1630660198"}),w(p.a,{style:{display:"flex"}},w("div",{style:{flex:"0.90",marginRight:10},className:"jsx-1630660198"},w(f.a,null,"Address"),w(d.a,{name:"address",onChange:E}))),w(p.a,{style:{display:"flex"}},w("div",{style:{flex:"0.65",marginRight:"6%"},className:"jsx-1630660198"},w(f.a,null,"City"),w(d.a,{name:"city",onChange:E})),w("div",{style:{flex:"0.25",marginRight:0},className:"jsx-1630660198"},w(f.a,null,"State"),w(d.a,{name:"state",onChange:E}))),w(y.a,{data:n,stripeError:s,submitOrder:function(){return k.apply(this,arguments)}}),w(c.a,{id:"1630660198"},[".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}",".form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}","*{box-sizing:border-box;}","body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}","h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}",".Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}","label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}","button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}","form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}","button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}",'input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:"Source Code Pro",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}',"input::-webkit-input-placeholder{color:#aab7c4;}","input::-moz-placeholder{color:#aab7c4;}","input:-ms-input-placeholder{color:#aab7c4;}","input::placeholder{color:#aab7c4;}","input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}",".StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}"]))}}).call(this,n("8oxB"))},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return o}))},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)},QCli:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return n("fdRS")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),s=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,p={};var f=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],l=o[1],m=(0,c.useRouter)(),b=m&&m.pathname||"/",g=i.default.useMemo((function(){var t=(0,s.resolveHref)(b,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,s.resolveHref)(b,e.as):a||o}}),[b,e.href,e.as]),y=g.href,h=g.as;i.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,s.isLocalURL)(y)&&!p[y+"%"+h])return f(a,(function(){d(m,y,h)}))}),[t,a,y,h,m]);var x=e.children,v=e.replace,w=e.shallow,j=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var O=i.Children.only(x),E={ref:function(e){e&&l(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,y,h,v,w,j)}};return t&&(E.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(m,y,h,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(E.href=(0,s.addBasePath)((0,s.addLocale)(h,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(O,E)};t.default=m},eWwy:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function a(e,t){return i(e)||s(e,t)||c()}function i(e){if(Array.isArray(e))return e}function s(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&t.hasOwnProperty("default")?t.default:t;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function p(){}function f(){}f.resetWarningCache=p;var d=function(){function e(e,t,n,r,o,a){if(a!==u){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:f,resetWarningCache:p};return n.PropTypes=n,n},m=l((function(e){e.exports=d()})),b=function(e){return null!==e&&"object"===n(e)},g=function(e){return b(e)&&"function"===typeof e.then},y=function(e){return b(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},h="[object Object]",x=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===h;if(o!==(Object.prototype.toString.call(n)===h))return!1;if(!o&&!r)return!1;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var l=0;l<i.length;l+=1)s[i[l]]=!0;var u=Object.keys(s);if(u.length!==a.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return u.every(d)},v=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},w="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",j=function(e){if(null===e||y(e))return e;throw new Error(w)},O=function(e){if(g(e))return{tag:"async",stripePromise:Promise.resolve(e).then(j)};var t=j(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},E=t.createContext(null);E.displayName="ElementsContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},N=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useRef(!1),s=t.useRef(!0),c=t.useMemo((function(){return O(n)}),[n]),l=a(t.useState((function(){return{stripe:null,elements:null}})),2),u=l[0],p=l[1],f=v(n),d=v(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),x(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),i.current||("sync"===c.tag&&(i.current=!0,p({stripe:c.stripe,elements:c.stripe.elements(r)})),"async"===c.tag&&(i.current=!0,c.stripePromise.then((function(e){e&&s.current&&p({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){s.current=!1}}),[]),t.useEffect((function(){var e=u.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[u.stripe]),t.createElement(E.Provider,{value:u},o)};N.propTypes={stripe:m.any,options:m.object};var S=function(e){var n=t.useContext(E);return k(n,e)},C=function(){return S("calls useElements()").elements},R=function(){return S("calls useStripe()").stripe},P=function(e){return(0,e.children)(S("mounts <ElementsConsumer>"))};P.propTypes={children:m.func.isRequired};var T=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},I=function(e){return b(e)?(e.paymentRequest,o(e,["paymentRequest"])):{}},_=function(){},z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},L=function(e,n){var r="".concat(z(e),"Element"),o=n?function(e){S("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,a=n.className,i=n.options,s=void 0===i?{}:i,c=n.onBlur,l=void 0===c?_:c,u=n.onFocus,p=void 0===u?_:u,f=n.onReady,d=void 0===f?_:f,m=n.onChange,b=void 0===m?_:m,g=n.onEscape,y=void 0===g?_:g,h=n.onClick,v=void 0===h?_:h,w=S("mounts <".concat(r,">")).elements,j=t.useRef(null),O=t.useRef(null),E=T(d),k=T(l),N=T(p),C=T(v),R=T(b),P=T(y);t.useLayoutEffect((function(){if(null==j.current&&w&&null!=O.current){var t=w.create(e,s);j.current=t,t.mount(O.current),t.on("ready",(function(){return E(t)})),t.on("change",R),t.on("blur",k),t.on("focus",N),t.on("escape",P),t.on("click",C)}}));var z=t.useRef(s);return t.useEffect((function(){z.current&&z.current.paymentRequest!==s.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=I(s);0===Object.keys(e).length||x(e,I(z.current))||j.current&&(j.current.update(e),z.current=s)}),[s]),t.useEffect((function(){return function(){j.current&&j.current.destroy()}}),[]),t.createElement("div",{id:o,className:a,ref:O})};return o.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onClick:m.func,options:m.object},o.displayName=r,o.__elementType=e,o},q="undefined"===typeof window,M=L("auBankAccount",q),B=L("card",q),A=L("cardNumber",q),J=L("cardExpiry",q),U=L("cardCvc",q),D=L("fpxBank",q),Y=L("iban",q),H=L("idealBank",q),F=L("paymentRequestButton",q);e.AuBankAccountElement=M,e.CardCvcElement=U,e.CardElement=B,e.CardExpiryElement=J,e.CardNumberElement=A,e.Elements=N,e.ElementsConsumer=P,e.FpxBankElement=D,e.IbanElement=Y,e.IdealBankElement=H,e.PaymentRequestButtonElement=F,e.useElements=C,e.useStripe=R,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))},f1Oq:function(e,t,n){"use strict";var r=n("MX0m"),o=n.n(r),a=n("q1tI"),i=n.n(a),s=n("nOHt"),c=n("sOKU"),l=n("wx14"),u=n("zLVn"),p=n("17x9"),f=n.n(p),d=n("TSYQ"),m=n.n(d),b=n("33Jr"),g={color:f.a.string,pill:f.a.bool,tag:b.c,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),children:f.a.node,className:f.a.string,cssModule:f.a.object},y=function(e){var t=e.className,n=e.cssModule,r=e.color,o=e.innerRef,a=e.pill,s=e.tag,c=Object(u.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(b.b)(m()(t,"badge","badge-"+r,!!a&&"badge-pill"),n);return c.href&&"span"===s&&(s="a"),i.a.createElement(s,Object(l.a)({},c,{className:p,ref:o}))};y.propTypes=g,y.defaultProps={color:"secondary",pill:!1,tag:"span"};var h=y,x=n("BLzl"),v=n("ChEw"),w=n("/kxI"),j=n("JDnx"),O=n("YFqc"),E=n.n(O),k=i.a.createElement;t.a=function(){var e=Object(a.useContext)(j.a),t=e.cart,n=e.addItem,r=e.removeItem;console.log("in CART: ".concat(JSON.stringify(t)));var i=Object(s.useRouter)();return console.log("Router Path: ".concat(JSON.stringify(i))),k("div",{className:"jsx-3161218026"},k("h1",{className:"jsx-3161218026"}," Cart"),k(x.a,{style:{padding:"10px 5px"},className:"cart"},k(v.a,{style:{margin:10}},"Your Order:"),k("hr",{className:"jsx-3161218026"}),k(w.a,{style:{padding:10}},k("div",{style:{marginBottom:6},className:"jsx-3161218026"},k("small",{className:"jsx-3161218026"},"Items:")),k("div",{className:"jsx-3161218026"},function(){var e=t.items;return console.log("items: ".concat(JSON.stringify(e))),e&&e.length?t.items.map((function(e){if(e.quantity>0)return k("div",{className:"items-one",style:{marginBottom:15},key:e.id},k("div",null,k("span",{id:"item-price"},"\xa0 $",e.price),k("span",{id:"item-name"},"\xa0 ",e.name)),k("div",null,k(c.a,{style:{height:25,padding:0,width:15,marginRight:5,marginLeft:10},onClick:function(){return n(e)},color:"link"},"+"),k(c.a,{style:{height:25,padding:0,width:15,marginRight:10},onClick:function(){return r(e)},color:"link"},"-"),k("span",{style:{marginLeft:5},id:"item-quantity"},e.quantity,"x")))})):k("div",null)}()),k("div",{className:"jsx-3161218026"},k("div",null,k(h,{style:{width:200,padding:10},color:"light"},k("h5",{style:{fontWeight:100,color:"gray"}},"Total:"),k("h3",null,"$",t.total)),k(E.a,{href:"/checkout/"},k(c.a,{style:{width:"60%"},color:"primary"},k("a",null,"Order"))))),console.log("Router Path: ".concat(i.asPath)))),k(o.a,{id:"3161218026"},["#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}","#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}","#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}"]))}},fdRS:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("ok1R"),i=n("rhny"),s="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,p=function(e){return null!==u?u:u=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(l),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(s,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null}();r&&e?console.warn(l):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(s).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))},f=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.10.0",startTime:t})}(r,n),r},d=Promise.resolve().then((function(){return p(null)})),m=!1;d.catch((function(e){m||console.warn(e)}));var b=n("eWwy"),g=n("FbcN"),y=n("JDnx"),h=n("f1Oq"),x=o.a.createElement;t.default=function(){var e=Object(r.useContext)(y.a).isAuthenticated,t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var r=Date.now();return d.then((function(e){return f(e,t,r)}))}("pk_test_51HaLhVGgpfLkdZwmHVQcCOdUzwLWqV7umg9EbicemJqLOcLBPDrPtszruyxf4UzqH0lKwaNj5se3tHldNx92nPjI00Zoi8VgBN");return x(a.a,null,x(i.a,{style:{paddingRight:0},sm:{size:3,order:1,offset:2}},x("h1",{style:{margin:20}},"Checkout"),x(h.a,{isAuthenticated:e})),x(i.a,{style:{paddingLeft:5},sm:{size:6,order:2}},x(b.Elements,{stripe:t},x(g.a,null))))}},jrRI:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),p=n("33Jr"),f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.c,className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.row,s=e.disabled,c=e.check,l=e.inline,f=e.tag,d=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(p.b)(u()(t,!!a&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===f&&(d.disabled=s),i.a.createElement(f,Object(r.a)({},d,{className:m}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},p46w:function(e,t,n){var r,o;!function(a){if(void 0===(o="function"===typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var i=window.Cookies,s=window.Cookies=a();s.noConflict=function(){return window.Cookies=i,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in a)a[c]&&(s+="; "+c,!0!==a[c]&&(s+="="+a[c].split(";")[0]));return document.cookie=t+"="+n+s}}function i(e,n){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var s=a[i].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(o[l]=c,e===l)break}catch(u){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,n){a(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},x0hB:function(e,t,n){"use strict";var r=n("MX0m"),o=n.n(r),a=n("q1tI"),i=n.n(a),s=n("eWwy"),c=i.a.createElement;t.a=function(e){return c("div",{className:"jsx-3705738115"},c("div",{className:"jsx-3705738115"},c("label",{htmlFor:"card-element",className:"jsx-3705738115"},"Credit or debit card"),c("div",{className:"jsx-3705738115"},c("fieldset",{style:{border:"none"},className:"jsx-3705738115"},c("div",{className:"jsx-3705738115 form-row"},c("div",{id:"card-element",style:{width:"100%"},className:"jsx-3705738115"},c(s.CardElement,{options:{style:{width:"100%",base:{fontSize:"18px"}}}})),c("br",{className:"jsx-3705738115"}),c("div",{className:"jsx-3705738115 order-button-wrapper"},c("button",{onClick:e.submitOrder,className:"jsx-3705738115"},"Confirm order")),e.stripeError?c("div",{className:"jsx-3705738115"},e.stripeError.toString()):null,c("div",{id:"card-errors",role:"alert",className:"jsx-3705738115"}))))),c(o.a,{id:"3705738115"},[".order-button-wrapper.jsx-3705738115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]))}}},[["QCli",0,1,2,3]]]);