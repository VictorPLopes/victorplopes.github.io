import{$ as K$1,$n as go$1,$r as vD,$t as Up,A as GE,An as Ze$3,Ar as po$2,At as Qe$3,B as HE,Bn as cy,Br as rg,Bt as S,C as Ch,Cn as YF,Cr as nh,Ct as Pp,D as Dv,Dn as ZF,Dt as QF,E as De$1,En as Yt$2,Er as or,Et as Q$1,F as Gg,Fn as _i$2,Fr as qi$1,Ft as Rf,G as Hp,Gn as em,Gr as t0,Gt as Tv,H as He$1,Hn as dh$1,Hr as rs$2,Ht as So$1,I as Gn$1,In as as$2,Ir as qn,It as Rg,Jn as fo$1,Jr as tl$1,Jt as UE,K as JE,Kn as es$2,Kr as tD,Kt as U,L as Gp,Ln as at$1,Lr as rD,Lt as Rh$1,M as GT,Mn as _,Mt as Qu,N as Gc$1,Nn as _D,Nr as qF,Nt as R0,O as Fu,Or as ph$1,Ot as QT,P as Gd$1,Pn as _e$1,Pr as qT,Pt as RD,Q as Jy,Qn as gi$3,Qt as Un$1,R as Gt$2,Rn as b$1,Rr as rd$1,Rt as Rp,S as Cg,Sn as YE,Sr as nd$2,St as Pm,T as Ct$2,Tn as Yp,Tr as on$2,Tt as Pu,U as Hg,Un as e0,Ur as sD,Ut as Sy,V as Hc$1,Vn as de$1,Vr as rh$1,Vt as Sn$3,W as Hi$2,Wn as eD,Wr as sf,Wt as T,X as Jo$1,Xn as gc$1,Xr as uh$1,Xt as UT,Y as Jc$1,Yn as g,Yr as ue$2,Yt as UF,Z as Jp,Zn as gg,Zr as ur$1,Zt as Ug,_ as B0,_r as lh$1,_t as Oh$1,a as $c$1,ai as xv,an as Vi$2,ar as il$1,at as LE,b as Bg,bn as Y0,br as mp,bt as Op,c as $n$1,ci as zD,cn as WF,cr as ji$2,ct as Lr$2,d as A0,dn as Wi$3,dr as kD,dt as Nn$3,ei as va$1,en as V0,er as he$1,et as KF,fn as Wn,fr as kg,ft as No$1,g as Av,gn as Xe$3,gr as le$2,gt as Og,h as Ap,hn as Xc$1,hr as kv,ht as OT,ii as xp,in as Vg,ir as ie,it as LD,j as GF,jn as Zu,jr as pt,jt as Qp,k as GD,kn as Zc$1,kr as pi$2,kt as Qc$1,l as $p,li as zc$1,ln as Wc$1,lr as jp,lt as Mf,m as Am,mn as XF,mr as km,mt as OD,n as $D,ni as wv,nn as VE,nr as ho$2,nt as Ke$2,o as $e$1,oi as yr$1,on as W,or as j$1,ot as Lg,p as Ag,pn as Wp,pr as kh$1,pt as O0,q as JF,qn as fi$2,qr as td$1,qt as U0,r as $E,ri as xn$3,rn as VI,rr as iD,rt as Kp,s as $g,si as z,sn as WD,sr as jg,st as Lm,t as $,ti as wt$3,tn as VD,tr as hg,u as $s$2,ui as zt$2,un as Wh$1,ur as k0,ut as Mr$1,v as BE,vn as Xp,vr as m0,vt as Om,w as Ci$2,wr as oD,wt as Pr$2,x as Bn$3,xn as YD,xr as mt,xt as Ov,y as Bc$1,yn as Y$1,yr as mh$1,yt as On$3,z as HD,zn as bE,zr as rf,zt as Rv}from"./chunk-CsfGjXga.js";var Rr$1=null;function V(){return Rr$1}function sn$1(r){Rr$1??=r}var We$1=class{};var ue$1=(()=>{class r{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:()=>g(Nr$1),providedIn:`platform`})}return r})();var hs$1=new T(``);var Nr$1=(()=>{class r extends ue$1{_location;_history;_doc=g(Gt$2);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return V().getBaseHref(this._doc)}onPopState(e){let n=V().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=V().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:()=>new r,providedIn:`platform`})}return r})();function Et(r,t){return r?t?r.endsWith(`/`)?t.startsWith(`/`)?r+t.slice(1):r+t:t.startsWith(`/`)?r+t:`${r}/${t}`:r:t}function Or$1(r){let t=r.search(/#|\?|$/);return r[t-1]===`/`?r.slice(0,t-1)+r.slice(t):r}function j(r){return r&&r[0]!==`?`?`?${r}`:r}var Me$1=(()=>{class r{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:()=>g(Lr$1),providedIn:`root`})}return r})();var bt=new T(``);var Lr$1=(()=>{class r extends Me$1{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(Gt$2).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Et(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+j(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,s){let o=this.prepareExternalUrl(i+j(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,i,s){let o=this.prepareExternalUrl(i+j(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||r)(z(ue$1),z(bt,8))};static ɵprov=Q$1({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var xr$1=(()=>{class r{_subject=new W;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=gs$1(Or$1(Pr$1(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+j(n))}normalize(e){return r.stripTrailingSlash(ps$1(this._basePath,Pr$1(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,i=null){this._locationStrategy.pushState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+j(n)),i)}replaceState(e,n=``,i=null){this._locationStrategy.replaceState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+j(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=j;static joinWithSlash=Et;static stripTrailingSlash=Or$1;static ɵfac=function(n){return new(n||r)(z(Me$1))};static ɵprov=Q$1({token:r,factory:()=>fs$1(),providedIn:`root`})}return r})();function fs$1(){return new xr$1(z(Me$1))}function ps$1(r,t){if(!r||!t.startsWith(r))return t;let e=t.substring(r.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:t}function Pr$1(r){return r.replace(/\/index\.html$/,``)}function gs$1(r){if(new RegExp(`^(https?:)?//`).test(r)){let[,e]=r.split(/\/\/[^\/]+/);return e}return r}var ms$1=(()=>{class r extends Me$1{_platformLocation;_baseHref=``;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??`#`;return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Et(this._baseHref,e);return n.length>0?`#`+n:n}pushState(e,n,i,s){let o=this.prepareExternalUrl(i+j(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,o)}replaceState(e,n,i,s){let o=this.prepareExternalUrl(i+j(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||r)(z(ue$1),z(bt,8))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();var ys$1=(()=>{class r{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=g(ue$2);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static ɵfac=function(n){return new(n||r)(He$1(Lr$2))};static ɵdir=Bc$1({type:r,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[Gd$1]})}return r})();function _s$1(r,t){return new S(2100,!1)}var on$1=class{createSubscription(t,e,n){return tl$1(()=>t.subscribe({next:e,error:n}))}dispose(t){tl$1(()=>t.unsubscribe())}};var an$1=class{createSubscription(t,e,n){return t.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(t){t.unsubscribe()}};var vs$1=new an$1;var Ds$1=new on$1;var Es$1=(()=>{class r{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=g(Qe$3);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Hc$1(e))return vs$1;if(xp(e))return Ds$1;throw _s$1(r,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(n){return new(n||r)(He$1(il$1,16))};static ɵpipe=$c$1({name:`async`,type:r,pure:!1})}return r})();function Ke$1(r,t){t=encodeURIComponent(t);for(let e of r.split(`;`)){let n=e.indexOf(`=`),[i,s]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var bs$1=(()=>{class r{build(){return new XMLHttpRequest}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var un$1=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=z(bs$1),i},providedIn:`root`})}return r})();var ln$1=`browser`;function Ur$1(r){return r===ln$1}var Ec$1=(()=>{class r{static ɵprov=Q$1({token:r,providedIn:`root`,factory:()=>new cn$1(g(Gt$2),window)})}return r})();var cn$1=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo(j$1(_({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let n=As$1(this.document,t);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch(e){console.warn(So$1(2400,!1))}}scrollToElement(t,e){let n=t.getBoundingClientRect(),i=n.left+this.window.pageXOffset,s=n.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(j$1(_({},e),{left:i-o[0],top:s-o[1]}))}};function As$1(r,t){let e=r.getElementById(t)||r.getElementsByName(t)[0];if(e)return e;if(typeof r.createTreeWalker==`function`&&r.body&&typeof r.body.attachShadow==`function`){let n=r.createTreeWalker(r.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(t)||s.querySelector(`[name="${CSS.escape(t)}"]`);if(o)return o}i=n.nextNode()}}return null}function kr$1(r){return r.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var jr$1=r=>r.src;var Ss$1=new T(``,{factory:()=>jr$1});var Vr$1=/^((\s*\d+w\s*(,|$)){1,})$/;var Ms$1=[1,2];var Ts$1=640;var Fs$1=1920;var Is$1=1080;var bc$1=(()=>{class r{imageLoader=g(Ss$1);config=Rs$1(g(Pm));renderer=g(gi$3);imgElement=g(mt).nativeElement;injector=g(ue$2);destroyRef=g(Y$1);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){Xe$3(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&Vr$1.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&n.width&&(n.height=Math.round(n.width/i)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=Vr$1.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(i=>i!==``).map(i=>{i=i.trim();let s=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:s})} ${i}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()===`100vw`&&(n=e.filter(s=>s>=Ts$1)),n.map(s=>`${this.callImageLoader({src:this.ngSrc,width:s})} ${s}w`).join(`, `)}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute(`src`,n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute(`srcset`,i),i}getFixedSrcset(){return Ms$1.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Fs$1||this.height>Is$1),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==jr$1&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${kr$1(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e==`string`?`url("${kr$1(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty(`blur`)?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let o=this.injector.get(il$1);i(),s(),this.placeholder=!1,o.markForCheck()},i=this.renderer.listen(e,`load`,n),s=this.renderer.listen(e,`error`,n);this.destroyRef.onDestroy(()=>{i(),s()}),Ns$1(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static ɵfac=function(n){return new(n||r)};static ɵdir=Bc$1({type:r,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(n,i){n&2&&nh(`position`,i.fill?`absolute`:null)(`width`,i.fill?`100%`:null)(`height`,i.fill?`100%`:null)(`inset`,i.fill?`0`:null)(`background-size`,i.placeholder?`cover`:null)(`background-position`,i.placeholder?`50% 50%`:null)(`background-repeat`,i.placeholder?`no-repeat`:null)(`background-image`,i.placeholder?i.generatePlaceholder(i.placeholder):null)(`filter`,i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,Os$1],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,KF],height:[2,`height`,`height`,KF],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,YF],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,YF],fill:[2,`fill`,`fill`,YF],placeholder:[2,`placeholder`,`placeholder`,Ps$1],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[Gd$1]})}return r})();function Rs$1(r){let t={};return r.breakpoints&&(t.breakpoints=r.breakpoints.sort((e,n)=>e-n)),Object.assign({},rd$1,r,t)}function Ns$1(r,t){r.complete&&r.naturalWidth&&t()}function Os$1(r){return typeof r==`string`?r:On$3(r)}function Ps$1(r){return typeof r==`string`&&r!==`true`&&r!==`false`&&r!==``?r:YF(r)}var Ze$2=class{_doc;constructor(t){this._doc=t}manager};var Ct$1=(()=>{class r extends Ze$2{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,s){return e.addEventListener(n,i,s),()=>this.removeEventListener(e,n,i,s)}removeEventListener(e,n,i,s){return e.removeEventListener(n,i,s)}static ɵfac=function(n){return new(n||r)(z(Gt$2))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();var St$2=new T(``);var pn$1=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let i=e.filter(o=>!(o instanceof Ct$1));this._plugins=i.slice().reverse();let s=e.find(o=>o instanceof Ct$1);s&&this._plugins.push(s)}addEventListener(e,n,i,s){return this._findPluginFor(n).addEventListener(e,n,i,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new S(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||r)(z(St$2),z(K$1))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();var dn$1=`ng-app-id`;function $r$1(r){for(let t of r)t.remove()}function Hr$1(r,t){let e=t.createElement(`style`);return e.textContent=r,e}function Ls$1(r,t,e,n){let i=r.head?.querySelectorAll(`style[${dn$1}="${t}"],link[${dn$1}="${t}"]`);if(!i||i.length===0)return!1;for(let s of i)s.removeAttribute(dn$1),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf(`/`)+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]});return!0}function fn$2(r,t){let e=t.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,r),e}var gn$2=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,s={}){this.doc=e,this.appId=n,this.nonce=i,Ls$1(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Hr$1);n?.forEach(i=>this.addUsage(i,this.external,fn$2))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&($r$1(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])$r$1(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Hr$1(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,fn$2(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let i=[];for(let s of n.elements)s.parentNode===e?s.remove():i.push(s);n.elements=i}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||r)(z(Gt$2),z(td$1),z(Lm,8),z(Om))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();var hn$1={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var mn$2=/%COMP%/g;var zr$1=`%COMP%`;var xs$1=`_nghost-${zr$1}`;var ks$1=`_ngcontent-${zr$1}`;var Vs$1=!0;var Bs$1=new T(``,{factory:()=>Vs$1});var Us$1=new T(``);function js$1(r){return ks$1.replace(mn$2,r)}function $s$1(r){return xs$1.replace(mn$2,r)}function Wr$1(r,t){return t.map(e=>e.replace(mn$2,r))}var yn$2=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,i,s,o,u,c=null,d=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=u,this.nonce=c,this.tracingService=d,this.cssVarNamespace=l??``,this.defaultRenderer=new Ye$1(e,o,u,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof At?i.applyToHost(e):i instanceof Xe$2&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,s=i.get(n.id);if(!s){let o=this.doc,u=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,v=this.tracingService;switch(n.encapsulation){case zt$2.Emulated:s=new At(c,d,n,this.appId,l,o,u,v,this.cssVarNamespace);break;case zt$2.ShadowDom:return new wt$2(c,e,n,o,u,this.nonce,v,this.cssVarNamespace,d);case zt$2.ExperimentalIsolatedShadowDom:return new wt$2(c,e,n,o,u,this.nonce,v,this.cssVarNamespace);default:s=new Xe$2(c,d,n,l,o,u,v,this.cssVarNamespace);break}i.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||r)(z(pn$1),z(mp),z(td$1),z(Bs$1),z(Gt$2),z(K$1),z(Lm),z(Yt$2,8),z(Us$1,8))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();var Ye$1=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,i,s=``){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=i,this.cssVarNamespace=s}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(hn$1[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Gr$1(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Gr$1(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t==`string`?this.doc.querySelector(t):t;if(!n)throw new S(-5104,!1);return e||(n.textContent=``),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,i){if(i){e=i+`:`+e;let s=hn$1[i];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let i=hn$1[n];i?t.removeAttributeNS(i,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,i){let s=e.startsWith(`--`);s&&(e=e.replace(`%NS%`,this.cssVarNamespace)),s||i&(pi$2.DashCase|pi$2.Important)?t.style.setProperty(e,n,i&pi$2.Important?`important`:``):t.style[e]=n}removeStyle(t,e,n){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||n&pi$2.DashCase?t.style.removeProperty(e):t.style[e]=``}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,i){if(typeof t==`string`&&(t=V().getGlobalEventTarget(this.doc,t),!t))throw new S(-5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(t,e,s)),this.eventManager.addEventListener(t,e,s,i)}decoratePreventDefault(t){return e=>{if(e===`__ngUnwrap__`)return t;t(e)===!1&&e.preventDefault()}}};function Gr$1(r){return r.tagName===`TEMPLATE`&&r.content!==void 0}var wt$2=class extends Ye$1{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,i,s,o,u,c,d){super(t,i,s,u,c),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=Wr$1(n.id,l).map(C=>C.replace(/%NS%/g,c));for(let C of l){let I=document.createElement(`style`);o&&I.setAttribute(`nonce`,o),I.textContent=C,this.shadowRoot.appendChild(I)}let v=n.getExternalStyles?.();if(v)for(let C of v){let I=fn$2(C,i);o&&I.setAttribute(`nonce`,o),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Xe$2=class extends Ye$1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,i,s,o,u,c,d){super(t,s,o,u,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=n.styles,v=d?Wr$1(d,l):l;this.styles=v.map(C=>C.replace(/%NS%/g,c)),this.styleUrls=n.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Sn$3.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var At=class extends Xe$2{contentAttr;hostAttr;constructor(t,e,n,i,s,o,u,c,d){let l=i+`-`+n.id;super(t,e,n,s,o,u,c,d,l),this.contentAttr=js$1(l),this.hostAttr=$s$1(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,``)}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,``),n}};var Mt$1=class r extends We$1{supportsDOMEvents=!0;static makeCurrent(){sn$1(new r)}onAndCancel(t,e,n,i){return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e===`window`?window:e===`document`?t:e===`body`?t.body:null}getBaseHref(t){let e=Gs$1();return e==null?null:zs$1(e)}resetBaseElement(){qe$2=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ke$1(document.cookie,t)}};var qe$2=null;function Gs$1(){return qe$2=qe$2||document.head.querySelector(`base`),qe$2?qe$2.getAttribute(`href`):null}function zs$1(r){return new URL(r,document.baseURI).pathname}var Kr$1=[`alt`,`control`,`meta`,`shift`];var Ws$1={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Ks$1={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey};var Zr$1=(()=>{class r extends Ze$2{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,i,s){let o=r.parseEventName(n),u=r.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>V().onAndCancel(e,o.domEventName,u,s))}static parseEventName(e){let n=e.toLowerCase().split(`.`),i=n.shift();if(n.length===0||!(i===`keydown`||i===`keyup`))return null;let s=r._normalizeKey(n.pop()),o=``,u=n.indexOf(`code`);if(u>-1&&(n.splice(u,1),o=`code.`),Kr$1.forEach(d=>{let l=n.indexOf(d);l>-1&&(n.splice(l,1),o+=d+`.`)}),o+=s,n.length!=0||s.length===0)return null;let c={};return c.domEventName=i,c.fullKey=o,c}static matchEventFullKeyCode(e,n){let i=Ws$1[e.key]||e.key,s=``;return n.indexOf(`code.`)>-1&&(i=e.code,s=`code.`),i==null||!i?!1:(i=i.toLowerCase(),i===` `?i=`space`:i===`.`&&(i=`dot`),Kr$1.forEach(o=>{if(o!==i){let u=Ks$1[o];u(e)&&(s+=o+`.`)}}),s+=i,s===n)}static eventCallback(e,n,i){return s=>{r.matchEventFullKeyCode(s,e)&&i.runGuarded(()=>n(s))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||r)(z(Gt$2))};static ɵprov=Q$1({token:r,factory:r.ɵfac})}return r})();function Zs$1(r,t,e){return Wi$3(this,null,function*(){return ZF(_({rootComponent:r},Ys$1(t,e)))})}function Ys$1(r,t){return{platformRef:t?.platformRef,appProviders:[...eo$1,...r?.providers??[]],platformProviders:Qs$1}}function Xs$1(){Mt$1.makeCurrent()}function qs$1(){return new at$1}function Js$1(){return Dv(document),document}var Qs$1=[{provide:Om,useValue:ln$1},{provide:nd$2,useValue:Xs$1,multi:!0},{provide:Gt$2,useFactory:Js$1}];var eo$1=[{provide:$s$2,useValue:`root`},{provide:at$1,useFactory:qs$1},{provide:St$2,useClass:Ct$1,multi:!0},{provide:St$2,useClass:Zr$1,multi:!0},yn$2,{provide:mp,useClass:gn$2},{provide:gn$2,useExisting:mp},pn$1,{provide:Mr$1,useExisting:yn$2},[]];var Z=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t==`string`?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let i=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<`u`&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:`a`})}set(t,e){return this.clone({name:t,value:e,op:`s`})}delete(t,e){return this.clone({name:t,value:e,op:`d`})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init();for(let[e,n]of t.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,t.normalizedNames.get(e))}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case`a`:case`s`:let n=t.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=t.op===`a`?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case`d`:let s=t.value;if(s===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(s)?s:[s],u=this.headers.get(e);if(!u)return;u=u.filter(c=>o.indexOf(c)===-1),u.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,u)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),i=t.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ft$1=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};var It=class{encodeKey(t){return Yr$1(t)}encodeValue(t){return Yr$1(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function to$1(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,``).split(`&`).forEach(i=>{let s=i.indexOf(`=`),[o,u]=s==-1?[t.decodeKey(i),``]:[t.decodeKey(i.slice(0,s)),t.decodeValue(i.slice(s+1))],c=e.get(o)||[];c.push(u),e.set(o,c)}),e}var no$1=/%(\d[a-f0-9])/gi;var ro$1={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function Yr$1(r){return encodeURIComponent(r).replace(no$1,(t,e)=>ro$1[e]??t)}function Tt(r){return`${r}`}var Q=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new It,t.fromString){if(t.fromObject)throw new S(2805,!1);this.map=to$1(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],i=Array.isArray(n)?n.map(Tt):[Tt(n)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:`a`})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let i=t[n];Array.isArray(i)?i.forEach(s=>{e.push({param:n,value:s,op:`a`})}):e.push({param:n,value:i,op:`a`})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:`s`})}delete(t,e){return this.clone({param:t,value:e,op:`d`})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(t=>t!==``).join(`&`)}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[t,e]of this.cloneFrom.map.entries())this.map.set(t,e);this.updates.forEach(t=>{switch(t.op){case`a`:case`s`:let e=t.op===`a`?(this.map.get(t.param)||[]).slice():[];e.push(Tt(t.value)),this.map.set(t.param,e);break;case`d`:if(t.value!==void 0){let n=(this.map.get(t.param)||[]).slice(),i=n.indexOf(Tt(t.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null}}};function io$1(r){switch(r){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function Xr$1(r){return typeof ArrayBuffer<`u`&&r instanceof ArrayBuffer}function qr$1(r){return typeof Blob<`u`&&r instanceof Blob}function Jr$1(r){return typeof FormData<`u`&&r instanceof FormData}function so$1(r){return typeof URLSearchParams<`u`&&r instanceof URLSearchParams}var Je$1=`Content-Type`;var Rt$1=`Accept`;var ei=`text/plain`;var ti$1=`application/json`;var ni$1=`${ti$1}, ${ei}, */*`;var Te$1=class r{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,i){this.url=e,this.method=t.toUpperCase();let s;if(io$1(this.method)||i?(this.body=n!==void 0?n:null,s=i):s=n,s){if(this.reportProgress=!!s.reportProgress,this.reportUploadProgress=!!s.reportUploadProgress,this.reportDownloadProgress=!!s.reportDownloadProgress,this.withCredentials=!!s.withCredentials,this.keepalive=!!s.keepalive,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),s.priority&&(this.priority=s.priority),s.cache&&(this.cache=s.cache),s.credentials&&(this.credentials=s.credentials),typeof s.timeout==`number`){if(s.timeout<1||!Number.isInteger(s.timeout))throw new S(2822,``);this.timeout=s.timeout}s.mode&&(this.mode=s.mode),s.redirect&&(this.redirect=s.redirect),s.integrity&&(this.integrity=s.integrity),s.referrer!==void 0&&(this.referrer=s.referrer),s.referrerPolicy&&(this.referrerPolicy=s.referrerPolicy),this.transferCache=s.transferCache}if(this.headers??=new Z,this.context??=new Ft$1,!this.params)this.params=new Q,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let u=e,c=``,d=e.indexOf(`#`);d!==-1&&(c=e.substring(d),u=e.substring(0,d));let l=u.indexOf(`?`),v=l===-1?`?`:l<u.length-1?`&`:``;this.urlWithParams=u+v+o+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||Xr$1(this.body)||qr$1(this.body)||Jr$1(this.body)||so$1(this.body)?this.body:this.body instanceof Q?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Jr$1(this.body)?null:qr$1(this.body)?this.body.type||null:Xr$1(this.body)?null:typeof this.body==`string`?ei:this.body instanceof Q?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?ti$1:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,s=t.keepalive??this.keepalive,o=t.priority||this.priority,u=t.cache||this.cache,c=t.mode||this.mode,d=t.redirect||this.redirect,l=t.credentials||this.credentials,v=t.referrer??this.referrer,C=t.integrity||this.integrity,I=t.referrerPolicy||this.referrerPolicy,U=t.transferCache??this.transferCache,R=t.timeout??this.timeout,w=t.body!==void 0?t.body:this.body,x=t.withCredentials??this.withCredentials,g=t.reportProgress??this.reportProgress,m=t.reportUploadProgress??this.reportUploadProgress,N=t.reportDownloadProgress??this.reportDownloadProgress,ne=t.headers||this.headers,b=t.params||this.params,re=t.context??this.context;return t.setHeaders!==void 0&&(ne=Object.keys(t.setHeaders).reduce((ie,X)=>ie.set(X,t.setHeaders[X]),ne)),t.setParams&&(b=Object.keys(t.setParams).reduce((ie,X)=>ie.set(X,t.setParams[X]),b)),new r(e,n,w,{params:b,headers:ne,context:re,reportProgress:g,reportUploadProgress:m,reportDownloadProgress:N,responseType:i,withCredentials:x,transferCache:U,keepalive:s,cache:u,priority:o,timeout:R,mode:c,redirect:d,credentials:l,referrer:v,integrity:C,referrerPolicy:I})}};var ee=(function(r){return r[r.Sent=0]=`Sent`,r[r.UploadProgress=1]=`UploadProgress`,r[r.ResponseHeader=2]=`ResponseHeader`,r[r.DownloadProgress=3]=`DownloadProgress`,r[r.Response=4]=`Response`,r[r.User=5]=`User`,r})(ee||{});var Fe$2=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n=`OK`){this.headers=t.headers||new Z,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}};var Qe$2=class r extends Fe$2{constructor(t={}){super(t)}type=ee.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}};var Ie$2=class r extends Fe$2{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=ee.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}};var K=class extends Fe$2{name=`HttpErrorResponse`;message;error;ok=!1;constructor(t){super(t,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||`(unknown url)`}`:this.message=`Http failure response for ${t.url||`(unknown url)`}: ${t.status} ${t.statusText}`,this.error=t.error||null}};var ri$1=200;var oo$1=204;var ao$1=/^\)\]\}',?\n/;var ii$1=new T(``,{factory:()=>null});var Nt$1=(()=>{class r{fetchImpl=g(vn$2,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=g(K$1);destroyRef=g(Y$1);maxResponseSize=g(ii$1);handle(e){return new b$1(n=>{let i=new AbortController;this.doRequest(e,i.signal,n).then(Dn$2,o=>n.error(new K({error:o})));let s;return e.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{s!==void 0&&clearTimeout(s),i.abort()}})}doRequest(e,n,i){return Wi$3(this,null,function*(){let s=this.createRequestInit(e),o;try{let w=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,_({signal:n},s)));uo$1(w),i.next({type:ee.Sent}),o=yield w}catch(w){i.error(new K({error:w,status:w.status??0,statusText:w.statusText,url:e.urlWithParams,headers:w.headers}));return}let u=new Z(o.headers),c=o.statusText,d=o.url||e.urlWithParams,l=o.status,v=null,C=e.reportProgress||e.reportDownloadProgress;if(C&&i.next(new Qe$2({headers:u,status:l,statusText:c,url:d})),o.body){let w=o.headers.get(`content-length`),x=w!==null?Number(w):NaN;this.maxResponseSize!==null&&Number.isFinite(x)&&x>this.maxResponseSize&&Qr$1(this.maxResponseSize);let g=[],m=o.body.getReader(),N=0,ne,b,re=typeof Zone<`u`&&Zone.current,ie=!1;if(yield this.ngZone.runOutsideAngular(()=>Wi$3(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield m.cancel(),ie=!0;break}let{done:ke,value:qt}=yield m.read();if(ke)break;if(g.push(qt),N+=qt.length,this.maxResponseSize!==null&&N>this.maxResponseSize&&(yield m.cancel(),Qr$1(this.maxResponseSize)),C){b=e.responseType===`text`?(b??``)+(ne??=new TextDecoder).decode(qt,{stream:!0}):void 0;let Wn=()=>i.next({type:ee.DownloadProgress,total:Number.isFinite(x)?x:void 0,loaded:N,partialText:b});re?re.run(Wn):Wn()}}})),ie){i.complete();return}let X=this.concatChunks(g,N);try{let ke=o.headers.get(Je$1)??``;v=this.parseBody(e,X,ke,l)}catch(ke){i.error(new K({error:ke,headers:new Z(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}l===0&&(l=v?ri$1:0);let I=l>=200&&l<300,U=o.redirected,R=o.type;I?(i.next(new Ie$2({body:v,headers:u,status:l,statusText:c,url:d,redirected:U,responseType:R})),i.complete()):i.error(new K({error:v,headers:u,status:l,statusText:c,url:d,redirected:U,responseType:R}))})}parseBody(e,n,i,s){switch(e.responseType){case`json`:let o=new TextDecoder().decode(n).replace(ao$1,``);if(o===``)return null;try{return JSON.parse(o)}catch(u){if(s<200||s>=300)return o;throw u}case`text`:return new TextDecoder().decode(n);case`blob`:return new Blob([n],{type:i});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new S(2824,!1);let n={},i;if(i=e.credentials,e.withCredentials&&(i=`include`),e.headers.forEach((s,o)=>n[s]=o.join(`,`)),e.headers.has(Rt$1)||(n[Rt$1]=ni$1),!e.headers.has(Je$1)){let s=e.detectContentTypeHeader();s!==null&&(n[Je$1]=s)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let i=new Uint8Array(n),s=0;for(let o of e)i.set(o,s),s+=o.length;return i}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var vn$2=class{};function Dn$2(){}function uo$1(r){r.then(Dn$2,Dn$2)}function Qr$1(r){throw new S(-2825,!1)}var co$1=new T(``,{factory:()=>!0});var lo$1=`XSRF-TOKEN`;var ho$1=new T(``,{factory:()=>lo$1});var fo=`X-XSRF-TOKEN`;var po$1=new T(``,{factory:()=>fo});var go=(()=>{class r{cookieName=g(ho$1);doc=g(Gt$2);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ke$1(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var si$1=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=z(go),i},providedIn:`root`})}return r})();function oi$1(r,t){if(!g(co$1)||r.method===`GET`||r.method===`HEAD`)return t(r);try{let i=g(ue$1).href,{origin:s}=new URL(i),{origin:o}=new URL(r.url,s);if(s!==o)return t(r)}catch(i){return t(r)}let e=g(si$1).getToken(),n=g(po$1);return e!=null&&!r.headers.has(n)&&(r=r.clone({headers:r.headers.set(n,e)})),t(r)}function mo(r,t){return t(r)}function yo(r,t,e){return(n,i)=>ur$1(e,()=>t(n,s=>r(s,i)))}var ai$1=new T(``,{factory:()=>[oi$1]});var ui$1=new T(``);var ci$1=new T(``,{factory:()=>!0});var Pt=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=z(Nt$1),i},providedIn:`root`})}return r})();var Ot=(()=>{class r{backend;injector;chain=null;pendingTasks=g(Jo$1);contributeToStability=g(ci$1);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(ai$1),...this.injector.get(ui$1,[])]));this.chain=i.reduceRight((s,o)=>yo(s,o,this.injector),mo)}let n=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return tl$1(()=>n(e,s=>this.backend.handle(s))).pipe(jg(i))}else return tl$1(()=>n(e,i=>this.backend.handle(i)))}static ɵfac=function(n){return new(n||r)(z(Pt),z(he$1))};static ɵprov=Q$1({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var bn$2=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=z(Ot),i},providedIn:`root`})}return r})();function _n$2(r,t){return _({body:t},r)}var li$1=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,i={}){let s;if(e instanceof Te$1)s=e;else{let c;i.headers instanceof Z?c=i.headers:c=new Z(i.headers);let d;i.params&&(i.params instanceof Q?d=i.params:d=new Q({fromObject:i.params})),s=new Te$1(e,n,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:d,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let o=Bn$3(s).pipe(Og(c=>this.handler.handle(c)));if(e instanceof Te$1||i.observe===`events`)return o;let u=o.pipe(qn(c=>c instanceof Ie$2));switch(i.observe||`body`){case`body`:switch(s.responseType){case`arraybuffer`:return u.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new S(2806,!1);return c.body}));case`blob`:return u.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new S(2807,!1);return c.body}));case`text`:return u.pipe(ie(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new S(2808,!1);return c.body}));default:return u.pipe(ie(c=>c.body))}case`response`:return u;default:throw new S(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new Q().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,i={}){return this.request(`PATCH`,e,_n$2(i,n))}post(e,n,i={}){return this.request(`POST`,e,_n$2(i,n))}put(e,n,i={}){return this.request(`PUT`,e,_n$2(i,n))}static ɵfac=function(n){return new(n||r)(z(bn$2))};static ɵprov=Q$1({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var _o=/^\)\]\}',?\n/;var En$2=(()=>{class r{xhrFactory;tracingService=g(Yt$2,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new S(-2800,!1);let n=this.xhrFactory;return Bn$3(null).pipe(Ct$2(()=>new b$1(s=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((g,m)=>o.setRequestHeader(g,m.join(`,`))),e.headers.has(Rt$1)||o.setRequestHeader(Rt$1,ni$1),!e.headers.has(Je$1)){let g=e.detectContentTypeHeader();g!==null&&o.setRequestHeader(Je$1,g)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();o.responseType=g!==`json`?g:`text`}let u=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let g=o.statusText||`OK`,m=new Z(o.getAllResponseHeaders()),N=o.responseURL||e.url;return c=new Qe$2({headers:m,status:o.status,statusText:g,url:N}),c},l=this.maybePropagateTrace(()=>{let{headers:g,status:m,statusText:N,url:ne}=d(),b=null;m!==oo$1&&(b=typeof o.response>`u`?o.responseText:o.response),m===0&&(m=b?ri$1:0);let re=m>=200&&m<300;if(e.responseType===`json`&&typeof b==`string`){let ie=b;b=b.replace(_o,``);try{b=b!==``?JSON.parse(b):null}catch(X){b=ie,re&&(re=!1,b={error:X,text:b})}}re?(s.next(new Ie$2({body:b,headers:g,status:m,statusText:N,url:ne||void 0})),s.complete()):s.error(new K({error:b,headers:g,status:m,statusText:N,url:ne||void 0}))}),v=this.maybePropagateTrace(g=>{let{url:m}=d(),N=new K({error:g,status:o.status||0,statusText:o.statusText||`Unknown Error`,url:m||void 0});s.error(N)}),C=v;e.timeout&&(C=this.maybePropagateTrace(g=>{let{url:m}=d(),N=new K({error:new DOMException(`Request timed out`,`TimeoutError`),status:o.status||0,statusText:o.statusText||`Request timeout`,url:m||void 0});s.error(N)}));let I=!1,U=this.maybePropagateTrace(g=>{I||(s.next(d()),I=!0);let m={type:ee.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(m.total=g.total),e.responseType===`text`&&o.responseText&&(m.partialText=o.responseText),s.next(m)}),R=this.maybePropagateTrace(g=>{let m={type:ee.UploadProgress,loaded:g.loaded};g.lengthComputable&&(m.total=g.total),s.next(m)});o.addEventListener(`load`,l),o.addEventListener(`error`,v),o.addEventListener(`timeout`,C),o.addEventListener(`abort`,v);let w=e.reportProgress||e.reportUploadProgress,x=e.reportProgress||e.reportDownloadProgress;return x&&o.addEventListener(`progress`,U),w&&u!==null&&o.upload&&o.upload.addEventListener(`progress`,R),o.send(u),s.next({type:ee.Sent}),()=>{o.removeEventListener(`error`,v),o.removeEventListener(`abort`,v),o.removeEventListener(`load`,l),o.removeEventListener(`timeout`,C),x&&o.removeEventListener(`progress`,U),w&&u!==null&&o.upload&&o.upload.removeEventListener(`progress`,R),o.readyState!==o.DONE&&o.abort()}})))}static ɵfac=function(n){return new(n||r)(z(un$1))};static ɵprov=Q$1({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Cn$2=(function(r){return r[r.Interceptors=0]=`Interceptors`,r[r.LegacyInterceptors=1]=`LegacyInterceptors`,r[r.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,r[r.NoXsrfProtection=3]=`NoXsrfProtection`,r[r.JsonpSupport=4]=`JsonpSupport`,r[r.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,r[r.Fetch=6]=`Fetch`,r[r.Xhr=7]=`Xhr`,r})(Cn$2||{});function vo(r,t){return{ɵkind:r,ɵproviders:t}}function Do(...r){let t=[li$1,Nt$1,Ot,{provide:bn$2,useExisting:Ot},{provide:Pt,useFactory:()=>g(Nt$1)},{provide:ai$1,useValue:oi$1,multi:!0}];for(let e of r)t.push(...e.ɵproviders);return de$1(t)}function Eo(){return vo(Cn$2.Xhr,[En$2,{provide:Pt,useExisting:En$2}])}var nd$1=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||r)(z(Gt$2))};static ɵprov=Q$1({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var wn$2=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=Q$1({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=z(bo),i},providedIn:`root`})}return r})();var bo=(()=>{class r extends wn$2{_doc=g(Gt$2);sanitize(e,n){if(n==null)return null;switch(e){case U.NONE:return n;case U.HTML:return _i$2(n,`HTML`)?On$3(n):Mf(this._doc,String(n)).toString();case U.STYLE:return _i$2(n,`Style`)?On$3(n):n;case U.SCRIPT:if(_i$2(n,`Script`))return On$3(n);throw new S(5200,!1);case U.URL:return _i$2(n,`URL`)?On$3(n):gc$1(String(n));case U.RESOURCE_URL:if(_i$2(n,`ResourceURL`))return On$3(n);throw new S(-5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return xv(e)}bypassSecurityTrustStyle(e){return Av(e)}bypassSecurityTrustScript(e){return Rv(e)}bypassSecurityTrustUrl(e){return Ov(e)}bypassSecurityTrustResourceUrl(e){return kv(e)}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var An$2;try{An$2=typeof Intl<`u`&&Intl.v8BreakIterator}catch(r){An$2=!1}var Y=(()=>{class r{_platformId=g(Om);isBrowser=this._platformId?Ur$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||An$2)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var Sn$2;function di$1(){if(Sn$2==null){let r=typeof document<`u`?document.head:null;Sn$2=!!(r&&(r.createShadowRoot||r.attachShadow))}return Sn$2}function Mn$2(r){if(di$1()){let t=r.getRootNode?r.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function te(r){if(r.composedPath)try{return r.composedPath()[0]}catch(t){}return r.target}var pe$1;function ld$1(){if(pe$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return pe$1=!1,pe$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)pe$1=!0;else{let r=Element.prototype.scrollTo;r?pe$1=!/\{\s*\[native code\]\s*\}/.test(r.toString()):pe$1=!1}}return pe$1}function hd$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var et;function hi$1(){if(et==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>et=!0}))}finally{et=et||!1}return et}function Re$2(r){return hi$1()?r:!!r.capture}var Lt$1=new WeakMap;var Tn$2=(()=>{class r{_appRef;_injector=g(ue$2);_environmentInjector=g(he$1);load(e){let n=this._appRef=this._appRef||this._injector.get(Pr$2),i=Lt$1.get(n);i||(i={loaders:new Set,refs:[]},Lt$1.set(n,i),n.onDestroy(()=>{Lt$1.get(n)?.refs.forEach(s=>s.destroy()),Lt$1.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(XF(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var Co=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵcmp=Op({type:r,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return r})();var xt;function wo(){if(xt===void 0&&(xt=null,typeof window<`u`)){let r=window;if(r.trustedTypes!==void 0)try{xt=r.trustedTypes.createPolicy(`angular#components`,{createHTML:t=>t})}catch(t){console.error(t)}}return xt}function Ao(r){return wo()?.createHTML(r)||r}function fi$1(r,t,e){r.innerHTML=Ao(e.sanitize(U.HTML,t)||``)}function So(r){if(r.type===`characterData`&&r.target instanceof Comment)return!0;if(r.type===`childList`){for(let t=0;t<r.addedNodes.length;t++)if(!(r.addedNodes[t]instanceof Comment))return!1;for(let t=0;t<r.removedNodes.length;t++)if(!(r.removedNodes[t]instanceof Comment))return!1;return!0}return!1}var pi$1=(()=>{class r{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var gi$2=(()=>{class r{_mutationObserverFactory=g(pi$1);_observedElements=new Map;_ngZone=g(K$1);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=qT(e);return new b$1(i=>{let o=this._observeElement(n).pipe(ie(u=>u.filter(c=>!So(c))),qn(u=>!!u.length)).subscribe(u=>{this._ngZone.run(()=>{i.next(u)})});return()=>{o.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new W,i=this._mutationObserverFactory.create(s=>n.next(s));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var kd=(()=>{class r{_contentObserver=g(gi$2);_elementRef=g(mt);event=new De$1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=GT(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(kg(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||r)};static ɵdir=Bc$1({type:r,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,YF],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return r})();var mi$1=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵmod=ji$2({type:r});static ɵinj=or({providers:[pi$1]})}return r})();function yi$1(r,...t){return t.length?t.some(e=>r[e]):r.altKey||r.shiftKey||r.ctrlKey||r.metaKey}var Mo=200;var kt=class{_letterKeyStream=new W;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new W;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:Mo;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(go$1(e=>this._pressedLetters.push(e)),kg(t),qn(()=>this._pressedLetters.length>0),ie(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,s=this._items[i];if(!this._skipPredicateFn?.(s)&&s.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(s);break}}this._pressedLetters=[]})}};var Ne$1=class{_items;_activeItemIndex=Ze$3(-1);_activeItem=Ze$3(null);_wrap=!1;_typeaheadSubscription=$.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof fi$2?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):yr$1(t)&&(this._effectRef=va$1(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new W;change=new W;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new kt(e,{debounceInterval:typeof t==`number`?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(s=>!t[s]||this._allowedModifierKeys.indexOf(s)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let s=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(s>0?s:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let s=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(s<o?s:o-1,-1);break}else return;default:(i||yi$1(t,`shiftKey`))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t==`number`?t:e.indexOf(t),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+t*n+e.length)%e.length,s=e[i];if(!this._skipPredicateFn(s)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return yr$1(this._items)?this._items():this._items instanceof fi$2?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Fn$1=class extends Ne$1{_origin=`program`;setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};function tt(r){return r.buttons===0||r.detail===0}function nt(r){let t=r.touches&&r.touches[0]||r.changedTouches&&r.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var _i$1=new T(`cdk-input-modality-detector-options`);var vi$1={ignoreKeys:[18,17,224,91,16]};var Di$1=650;var In$2={passive:!0,capture:!0};var Ei$1=(()=>{class r{_platform=g(Y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new wt$3(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=te(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Di$1||(this._modality.next(tt(e)?`keyboard`:`mouse`),this._mostRecentTarget=te(e))};_onTouchstart=e=>{if(nt(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=te(e)};constructor(){let e=g(K$1),n=g(Gt$2),i=g(_i$1,{optional:!0});if(this._options=_(_({},vi$1),i),this.modalityDetected=this._modality.pipe($g(1)),this.modalityChanged=this.modalityDetected.pipe(Lg()),this._platform.isBrowser){let s=g(Mr$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[s.listen(n,`keydown`,this._onKeydown,In$2),s.listen(n,`mousedown`,this._onMousedown,In$2),s.listen(n,`touchstart`,this._onTouchstart,In$2)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var rt=(function(r){return r[r.IMMEDIATE=0]=`IMMEDIATE`,r[r.EVENTUAL=1]=`EVENTUAL`,r})(rt||{});var bi$2=new T(`cdk-focus-monitor-default-options`);var Vt$1=Re$2({passive:!0,capture:!0});var To=(()=>{class r{_ngZone=g(K$1);_platform=g(Y);_inputModalityDetector=g(Ei$1);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g(Gt$2);_stopInputModalityDetector=new W;constructor(){let e=g(bi$2,{optional:!0});this._detectionMode=e?.detectionMode||rt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=te(e);for(let i=n;i;i=i.parentElement)e.type===`focus`?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=qT(e);if(!this._platform.isBrowser||i.nodeType!==1)return Bn$3();let s=Mn$2(i)||this._document,o=this._elementInfo.get(i);if(o)return n&&(o.checkChildren=!0),o.subject;let u={checkChildren:n,subject:new W,rootNode:s};return this._elementInfo.set(i,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(e){let n=qT(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let s=qT(e);s===this._document.activeElement?this._getClosestElementsInfo(s).forEach(([u,c])=>this._originChanged(u,n,c)):(this._setOrigin(n),typeof s.focus==`function`&&s.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===rt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===rt.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Di$1:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),s=te(e);!i||!i.checkChildren&&n!==s||this._originChanged(n,this._getFocusOrigin(s),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Vt$1),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Vt$1)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(es$2(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Vt$1),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Vt$1),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,s)=>{(s===e||i.checkChildren&&s.contains(e))&&n.push([s,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let s=e.labels;if(s){for(let o=0;o<s.length;o++)if(s[o].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var Ci$1=new Set;var ge$1;var Bt$1=(()=>{class r{_platform=g(Y);_nonce=g(Lm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Io}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Fo(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();function Fo(r,t){if(!Ci$1.has(r))try{ge$1||(ge$1=document.createElement(`style`),t&&ge$1.setAttribute(`nonce`,t),ge$1.setAttribute(`type`,`text/css`),document.head.appendChild(ge$1)),ge$1.sheet&&(ge$1.sheet.insertRule(`@media ${r.replace(/[{}]/g,``)} {body{ }}`,0),Ci$1.add(r))}catch(e){console.error(e)}}function Io(r){return{matches:r===`all`||r===``,media:r,addListener:()=>{},removeListener:()=>{}}}var Rn$2=(()=>{class r{_mediaMatcher=g(Bt$1);_zone=g(K$1);_queries=new Map;_destroySubject=new W;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return wi$1(V0(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let s=rs$2(wi$1(V0(e)).map(o=>this._registerQuery(o).observable));return s=fo$1(s.pipe(on$2(1)),s.pipe($g(1),kg(0))),s.pipe(ie(o=>{let u={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:d})=>{u.matches=u.matches||c,u.breakpoints[d]=c}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),s={observable:new b$1(o=>{let u=c=>this._zone.run(()=>o.next(c));return n.addListener(u),()=>{n.removeListener(u)}}).pipe(Ug(n),ie(({matches:o})=>({query:e,matches:o})),es$2(this._destroySubject)),mql:n};return this._queries.set(e,s),s}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();function wi$1(r){return r.map(t=>t.split(`,`)).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Mi$1=new T(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Ti$1=new T(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var No=0;var Oo=(()=>{class r{_ngZone=g(K$1);_defaultOptions=g(Ti$1,{optional:!0});_liveElement;_document=g(Gt$2);_sanitizer=g(wn$2);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=g(Mi$1,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,s,o;return n.length===1&&typeof n[0]==`number`?o=n[0]:[s,o]=n,this.clear(),clearTimeout(this._previousTimeout),s||(s=i&&i.politeness?i.politeness:`polite`),o==null&&i&&(o=i.duration),this._liveElement.setAttribute(`aria-live`,s),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(u=>this._currentResolve=u)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:fi$1(this._liveElement,e,this._sanitizer),typeof o==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),i=this._document.createElement(`div`);for(let s=0;s<n.length;s++)n[s].remove();return i.classList.add(e),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${No++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<n.length;i++){let s=n[i],o=s.getAttribute(`aria-owns`);o?o.indexOf(e)===-1&&s.setAttribute(`aria-owns`,o+` `+e):s.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var ce$2=(function(r){return r[r.NONE=0]=`NONE`,r[r.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,r[r.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,r})(ce$2||{});var Ai$1=`cdk-high-contrast-black-on-white`;var Si$1=`cdk-high-contrast-white-on-black`;var Nn$2=`cdk-high-contrast-active`;var Fi$1=(()=>{class r{_platform=g(Y);_hasCheckedHighContrastMode=!1;_document=g(Gt$2);_breakpointSubscription;constructor(){this._breakpointSubscription=g(Rn$2).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ce$2.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,s=(i&&i.backgroundColor||``).replace(/ /g,``);switch(e.remove(),s){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return ce$2.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return ce$2.BLACK_ON_WHITE}return ce$2.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Nn$2,Ai$1,Si$1),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===ce$2.BLACK_ON_WHITE?e.add(Nn$2,Ai$1):n===ce$2.WHITE_ON_BLACK&&e.add(Nn$2,Si$1)}}static ɵfac=function(n){return new(n||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})}return r})();var Po=(()=>{class r{constructor(){g(Fi$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||r)};static ɵmod=ji$2({type:r});static ɵinj=or({imports:[mi$1]})}return r})();var On$2=class extends Ne$1{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var Ii=new Map;var Pn$2=class r{_appId=g(td$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){this._appId!==`ng`&&(t+=this._appId);let n=Ii.get(t);return n===void 0?n=0:n++,Ii.set(t,n),`${t}${e?r._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||r)};static ɵprov=Ke$2({token:r,factory:r.ɵfac})};var Lo=new T(`MATERIAL_ANIMATIONS`);var Ri$1=null;function xo(){return g(Lo,{optional:!0})?.animationsDisabled||g(km,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ri$1??=g(Bt$1).matchMedia(`(prefers-reduced-motion)`).matches,Ri$1?`reduced-motion`:`enabled`)}function Ni$1(){return xo()!==`enabled`}var B=(function(r){return r[r.FADING_IN=0]=`FADING_IN`,r[r.VISIBLE=1]=`VISIBLE`,r[r.FADING_OUT=2]=`FADING_OUT`,r[r.HIDDEN=3]=`HIDDEN`,r})(B||{});var Ln$2=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=B.HIDDEN;constructor(t,e,n,i=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var Oi$1=Re$2({passive:!0,capture:!0});var xn$2=class{_events=new Map;addHandler(t,e,n,i){let s=this._events.get(e);if(s){let o=s.get(n);o?o.add(i):s.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Oi$1)})}removeHandler(t,e,n){let i=this._events.get(t);if(!i)return;let s=i.get(e);s&&(s.delete(n),s.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Oi$1)))}_delegateEventHandler=t=>{let e=te(t);e&&this._events.get(t.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(s=>s.handleEvent(t))})}};var Pi$1={enterDuration:225,exitDuration:150};var ko=800;var Li$1=Re$2({passive:!0,capture:!0});var xi$1=[`mousedown`,`touchstart`];var ki$1=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Vo=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵcmp=Op({type:r,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return r})();var kn$2=class r{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new xn$2;constructor(t,e,n,i,s){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=qT(n)),s&&s.get(Tn$2).load(Vo)}fadeInRipple(t,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=_(_({},Pi$1),n.animation);n.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let o=n.radius||Bo(t,e,i),u=t-i.left,c=e-i.top,d=s.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${u-o}px`,l.style.top=`${c-o}px`,l.style.height=`${o*2}px`,l.style.width=`${o*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(l);let v=window.getComputedStyle(l),C=v.transitionProperty,I=v.transitionDuration,U=C===`none`||I===`0s`||I===`0s, 0s`||i.width===0&&i.height===0,R=new Ln$2(this,l,n,U);l.style.transform=`scale3d(1, 1, 1)`,R.state=B.FADING_IN,n.persistent||(this._mostRecentTransientRipple=R);let w=null;return!U&&(d||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let x=()=>{w&&(w.fallbackTimer=null),clearTimeout(m),this._finishRippleTransition(R)},g=()=>this._destroyRipple(R),m=setTimeout(g,d+100);l.addEventListener(`transitionend`,x),l.addEventListener(`transitioncancel`,g),w={onTransitionEnd:x,onTransitionCancel:g,fallbackTimer:m}}),this._activeRipples.set(R,w),(U||!d)&&this._finishRippleTransition(R),R}fadeOutRipple(t){if(t.state===B.FADING_OUT||t.state===B.HIDDEN)return;let e=t.element,n=_(_({},Pi$1),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,t.state=B.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=qT(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,xi$1.forEach(n=>{r._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ki$1.forEach(e=>{this._triggerElement.addEventListener(e,this,Li$1)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===B.FADING_IN?this._startFadeOutTransition(t):t.state===B.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=B.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=B.HIDDEN,e!==null&&(t.element.removeEventListener(`transitionend`,e.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=tt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ko;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!nt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===B.VISIBLE||t.config.terminateOnPointerUp&&t.state===B.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(xi$1.forEach(e=>r._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(ki$1.forEach(e=>t.removeEventListener(e,this,Li$1)),this._pointerUpEventsRegistered=!1))}};function Bo(r,t,e){let n=Math.max(Math.abs(r-e.left),Math.abs(r-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+i*i)}var Uo=new T(`mat-ripple-global-options`);var Af=(()=>{class r{_elementRef=g(mt);_animationsDisabled=Ni$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=g(K$1),n=g(Y),i=g(Uo,{optional:!0}),s=g(ue$2);this._globalOptions=i||{},this._rippleRenderer=new kn$2(this,e,this._elementRef,n,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,_(_({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||r)};static ɵdir=Bc$1({type:r,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&rh$1(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return r})();var Tf=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵcmp=Op({type:r,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return r})();var zi$1=(()=>{class r{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(n){return new(n||r)(He$1(gi$3),He$1(mt))};static ɵdir=Bc$1({type:r})}return r})();var jo=(()=>{class r extends zi$1{static ɵfac=(()=>{let e;return function(i){return(e||(e=rf(r)))(i||r)}})();static ɵdir=Bc$1({type:r,features:[Pp]})}return r})();var Ho={provide:new T(``),useExisting:No$1(()=>Wi$2),multi:!0};function Go(){let r=V()?V().getUserAgent():``;return/android (\d+)/.test(r.toLowerCase())}var zo=new T(``);var Wi$2=(()=>{class r extends zi$1{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode??=!Go()}writeValue(e){let n=e??``;this.setProperty(`value`,n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(n){return new(n||r)(He$1(gi$3),He$1(mt),He$1(zo,8))};static ɵdir=Bc$1({type:r,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,i){n&1&&Qp(`input`,function(o){return i._handleInput(o.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[mh$1([Ho]),Pp]})}return r})();function jn(r){return r==null||$n(r)===0}function $n(r){return r==null?null:Array.isArray(r)||typeof r==`string`?r.length:r instanceof Set?r.size:null}var Hn=new T(``);var Ki=new T(``);var Wo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Vn=class{static min(t){return Ko(t)}static max(t){return Zo(t)}static required(t){return Zi(t)}static requiredTrue(t){return Yo(t)}static email(t){return Xo(t)}static minLength(t){return qo(t)}static maxLength(t){return Jo(t)}static pattern(t){return Qo(t)}static nullValidator(t){return jt$1()}static compose(t){return es$1(t)}static composeAsync(t){return ts$1(t)}};function Ko(r){return t=>{if(t.value==null||r==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<r?{min:{min:r,actual:t.value}}:null}}function Zo(r){return t=>{if(t.value==null||r==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>r?{max:{max:r,actual:t.value}}:null}}function Zi(r){return jn(r.value)?{required:!0}:null}function Yo(r){return r.value===!0?null:{required:!0}}function Xo(r){return jn(r.value)||Wo.test(r.value)?null:{email:!0}}function qo(r){return t=>{let e=t.value?.length??$n(t.value);return e===null||e===0?null:e<r?{minlength:{requiredLength:r,actualLength:e}}:null}}function Jo(r){return t=>{let e=t.value?.length??$n(t.value);return e!==null&&e>r?{maxlength:{requiredLength:r,actualLength:e}}:null}}function Qo(r){if(!r)return jt$1;let t,e;return typeof r==`string`?(e=``,r.charAt(0)!==`^`&&(e+=`^`),e+=r,r.charAt(r.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=r.toString(),t=r),n=>{if(jn(n.value))return null;let i=n.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function jt$1(r){return null}function Yi$1(r){return r!=null}function Xi(r){return Hc$1(r)?le$2(r):r}function qi(r){let t={};return r.forEach(e=>{t=e!=null?_(_({},t),e):t}),Object.keys(t).length===0?null:t}function Ji(r,t){return t.map(e=>e(r))}function ea$1(r){return!r.validate}function Qi(r){return r.map(t=>ea$1(t)?t:e=>t.validate(e))}function es$1(r){if(!r)return null;let t=r.filter(Yi$1);return t.length==0?null:function(e){return qi(Ji(e,t))}}function Gn(r){return r!=null?es$1(Qi(r)):null}function ts$1(r){if(!r)return null;let t=r.filter(Yi$1);return t.length==0?null:function(e){return po$2(Ji(e,t).map(Xi)).pipe(ie(qi))}}function zn$1(r){return r!=null?ts$1(Qi(r)):null}function Vi$1(r,t){return r===null?[t]:Array.isArray(r)?[...r,t]:[r,t]}function ns$1(r){return r._rawValidators}function rs$1(r){return r._rawAsyncValidators}function Bn$2(r){return r?Array.isArray(r)?r:[r]:[]}function $t$1(r,t){return Array.isArray(r)?r.includes(t):r===t}function Bi$1(r,t){let e=Bn$2(t);return Bn$2(r).forEach(i=>{$t$1(e,i)||e.push(i)}),e}function Ui$1(r,t){return Bn$2(t).filter(e=>!$t$1(r,e))}var Ht$1=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Gn(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=zn$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var Le=class extends Ht$1{name;get formDirective(){return null}get path(){return null}};var it=`VALID`;var Ut$1=`INVALID`;var Oe=`PENDING`;var st$1=`DISABLED`;var le$1=class{};var Gt$1=class extends le$1{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var at=class extends le$1{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var ut=class extends le$1{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var Pe=class extends le$1{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var zt$1=class extends le$1{source;constructor(t){super(),this.source=t}};var xe$1=class extends le$1{source;constructor(t){super(),this.source=t}};function is$1(r){return(Xt(r)?r.validators:r)||null}function ta$1(r){return Array.isArray(r)?Gn(r):r||null}function ss$1(r,t){return(Xt(t)?t.asyncValidators:r)||null}function na$1(r){return Array.isArray(r)?zn$1(r):r||null}function Xt(r){return r!=null&&!Array.isArray(r)&&typeof r==`object`}function ra(r,t,e){let n=r.controls;if(!(t?Object.keys(n):n).length)throw new S(1e3,``);if(!os$1(n,e))throw new S(1001,``)}function ia(r,t,e){r._forEachChild((n,i)=>{if(e[i]===void 0)throw new S(-1002,``)})}var Wt$1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ze$3(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return tl$1(this.statusReactive)}set status(t){tl$1(()=>this.statusReactive.set(t))}_status=Hi$2(()=>this.statusReactive());statusReactive=Ze$3(void 0);get valid(){return this.status===it}get invalid(){return this.status===Ut$1}get pending(){return this.status===Oe}get disabled(){return this.status===st$1}get enabled(){return this.status!==st$1}errors;get pristine(){return tl$1(this.pristineReactive)}set pristine(t){tl$1(()=>this.pristineReactive.set(t))}_pristine=Hi$2(()=>this.pristineReactive());pristineReactive=Ze$3(!0);get dirty(){return!this.pristine}get touched(){return tl$1(this.touchedReactive)}set touched(t){tl$1(()=>this.touchedReactive.set(t))}_touched=Hi$2(()=>this.touchedReactive());touchedReactive=Ze$3(!1);get untouched(){return!this.touched}_events=new W;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Bi$1(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Bi$1(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ui$1(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ui$1(t,this._rawAsyncValidators))}hasValidator(t){return $t$1(this._rawValidators,t)}hasAsyncValidator(t){return $t$1(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(j$1(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new ut(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new ut(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(j$1(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new at(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new at(!0,n))}markAsPending(t={}){this.status=Oe;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Pe(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(j$1(_({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=st$1,this.errors=null,this._forEachChild(i=>{i.disable(j$1(_({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Gt$1(this.value,n)),this._events.next(new Pe(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(j$1(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=it,this._forEachChild(n=>{n.enable(j$1(_({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(j$1(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===it||this.status===Oe)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Gt$1(this.value,e)),this._events.next(new Pe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(j$1(_({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?st$1:it}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Oe,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=Xi(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new Pe(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new De$1,this.statusChanges=new De$1}_calculateStatus(){return this._allControlsDisabled()?st$1:this.errors?Ut$1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Oe)?Oe:this._anyControlsHaveStatus(Ut$1)?Ut$1:it}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new at(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new ut(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Xt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ta$1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=na$1(this._rawAsyncValidators)}_updateHasRequiredValidator(){tl$1(()=>this._hasRequired.set(this.hasValidator(Vn.required)))}};function os$1(r,t){return Object.hasOwn(r,t)}function sa(r){return r.tagName===`INPUT`||r.tagName===`SELECT`||r.tagName===`TEXTAREA`}function oa(r,t,e,n){switch(e){case`name`:r.setAttribute(t,e,n);break;case`disabled`:case`readonly`:case`required`:n?r.setAttribute(t,e,``):r.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?r.setAttribute(t,e,n.toString()):r.removeAttribute(t,e);break}}var Un=class{kind;context;control;message;constructor({kind:t,context:e,control:n}){this.kind=t,this.context=e,this.control=n}};var aa$1=(()=>{class r{_validator=jt$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):jt$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(n){return new(n||r)};static ɵdir=Bc$1({type:r,features:[Gd$1]})}return r})();var ua={provide:Hn,useExisting:No$1(()=>as$1),multi:!0};var as$1=(()=>{class r extends aa$1{required;inputName=`required`;normalizeInput=YF;createValidator=e=>Zi;enabled(e){return e}static ɵfac=(()=>{let e;return function(i){return(e||(e=rf(r)))(i||r)}})();static ɵdir=Bc$1({type:r,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,i){n&2&&Gc$1(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[mh$1([ua]),Pp]})}return r})();var us$1=new T(``,{factory:()=>ca});var ca=`always`;function ji$1(r,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),Zt$1(r,t),r&&(t._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function Kt$1(r,t){r.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function cs$1(r,t){let e=ns$1(r);t.validator!==null?r.setValidators(Vi$1(e,t.validator)):typeof e==`function`&&r.setValidators([e]);let n=rs$1(r);t.asyncValidator!==null?r.setAsyncValidators(Vi$1(n,t.asyncValidator)):typeof n==`function`&&r.setAsyncValidators([n]);let i=()=>r.updateValueAndValidity();Kt$1(t._rawValidators,i),Kt$1(t._rawAsyncValidators,i)}function Zt$1(r,t){let e=!1;if(r!==null){if(t.validator!==null){let i=ns$1(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==t.validator);s.length!==i.length&&(e=!0,r.setValidators(s))}}if(t.asyncValidator!==null){let i=rs$1(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==t.asyncValidator);s.length!==i.length&&(e=!0,r.setAsyncValidators(s))}}}let n=()=>{};return Kt$1(t._rawValidators,n),Kt$1(t._rawAsyncValidators,n),e}function ls$1(r,t){cs$1(r,t)}function la(r,t){return Zt$1(r,t)}function da(r){return Object.getPrototypeOf(r.constructor)===jo}function ds$1(r,t){r._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn===`submit`&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ha(r,t){if(!t)return null;let e,n,i;return t.forEach(s=>{s.constructor===Wi$2?e=s:da(s)?n=s:i=s}),i||n||e||null}function fa(r,t){let e=r.indexOf(t);e>-1&&r.splice(e,1)}var $i$2=class extends Ht$1{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof xe$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ha(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,n){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(Y$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(il$1);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new $,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof xe$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=sa(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof as$1))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let n=this.control,i=this.customControlBindings;Object.is(i.value,n.value)||(i.value=n.value,t.setCustomControlModelInput(n.value)),this.bindControlProperty(t,i,`touched`,n.touched),this.bindControlProperty(t,i,`dirty`,n.dirty),this.bindControlProperty(t,i,`valid`,n.valid),this.bindControlProperty(t,i,`invalid`,n.invalid),this.bindControlProperty(t,i,`pending`,n.pending),this.bindControlProperty(t,i,`disabled`,n.disabled),this.shouldBindRequired&&this.bindControlProperty(t,i,`required`,this.isRequired);let s=n.errors;if(i.errors!==s){i.errors=s;let o=this._convertErrors(s);t.setInputOnDirectives(`errors`,o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,n,i){if(e[n]===i)return;e[n]=i;let s=t.setInputOnDirectives(n,i);this.isNativeFormElement&&!s&&(n===`disabled`||n===`required`)&&this.renderer&&oa(this.renderer,t.nativeElement,n,i)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([n,i])=>new Un({context:i,kind:n,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,n=Hi$2(()=>{let i=t();return i.length===0?null:i.reduce((s,o)=>(s[o.kind]=o,s),{})});this.parseErrorsValidator=(()=>e).bind(this),va$1(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var Yt$1=class extends Wt$1{constructor(t,e,n){super(is$1(e),ss$1(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){tl$1(()=>{ia(this,!0,t),Object.keys(t).forEach(n=>{ra(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let i=this._find(n);i&&i.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t?t[i]:null,j$1(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xe$1(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((i,s)=>{n=e(n,i,s)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return os$1(this.controls,t)?this.controls[t]:null}};var pa={provide:Le,useExisting:No$1(()=>ga)};var ot=Promise.resolve();var ga=(()=>{class r extends Le{callSetDisabledState;get submitted(){return tl$1(this.submittedReactive)}_submitted=Hi$2(()=>this.submittedReactive());submittedReactive=Ze$3(!1);_directives=new Set;form;ngSubmit=new De$1;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new Yt$1({},Gn(e),zn$1(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ot.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ot.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ot.then(()=>{let n=this._findContainer(e.path),i=new Yt$1({});ls$1(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ot.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){ot.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ds$1(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new zt$1(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(n){return new(n||r)(He$1(Hn,10),He$1(Ki,10),He$1(us$1,8))};static ɵdir=Bc$1({type:r,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(n,i){n&1&&Qp(`submit`,function(o){return i.onSubmit(o)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[mh$1([pa]),Pp]})}return r})();function Hi$1(r,t){let e=r.indexOf(t);e>-1&&r.splice(e,1)}function Gi$1(r){return typeof r==`object`&&r!==null&&Object.keys(r).length===2&&`value`in r&&`disabled`in r}var ma=class extends Wt$1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(is$1(e),ss$1(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Gi$1(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){tl$1(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new xe$1(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Hi$1(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Hi$1(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Gi$1(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var ya=r=>r instanceof ma;var _a=(()=>{class r extends Le{callSetDisabledState;get submitted(){return tl$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Hi$2(()=>this._submittedReactive());_submittedReactive=Ze$3(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Zt$1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){ji$1(e.control||null,e,!1),fa(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ds$1(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new zt$1(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(ji$1(n||null,e),ya(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);ls$1(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&la(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){cs$1(this.form,this),this._oldForm&&Zt$1(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(n){return new(n||r)(He$1(Hn,10),He$1(Ki,10),He$1(us$1,8))};static ɵdir=Bc$1({type:r,features:[Pp,Gd$1]})}return r})();var va={provide:Le,useExisting:No$1(()=>Da)};var Da=(()=>{class r extends _a{form=null;ngSubmit=new De$1;get control(){return this.form}static ɵfac=(()=>{let e;return function(i){return(e||(e=rf(r)))(i||r)}})();static ɵdir=Bc$1({type:r,selectors:[[``,`formGroup`,``]],hostBindings:function(n,i){n&1&&Qp(`submit`,function(o){return i.onSubmit(o)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[mh$1([va]),Pp]})}return r})();var Xf=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵmod=ji$2({type:r});static ɵinj=or({imports:[Y0]})}return r})();var i=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new W;bulk={select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)};constructor(e=!1,t,o=!0,n){this._multiple=e,this._emitChanges=o,this.compareWith=n,t&&t.length&&(e?t.forEach(s=>this._markSelected(s)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(o=>this._markSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(o=>this._unmarkSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);let t=this.selected,o=new Set(e.map(s=>this._getConcreteValue(s)));e.forEach(s=>this._markSelected(s)),t.filter(s=>!o.has(this._getConcreteValue(s,o))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let o of t)if(this.compareWith(e,o))return o;return e}else return e}};var x=(()=>{class c{_animationsDisabled=Ni$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(o){return new(o||c)};static ɵcmp=Op({type:c,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(o,n){o&2&&rh$1(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(o,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return c})();var u=(()=>{class t{get vertical(){return this._vertical}set vertical(i){this._vertical=U0(i)}_vertical=!1;get inset(){return this._inset}set inset(i){this._inset=U0(i)}_inset=!1;static ɵfac=function(e){return new(e||t)};static ɵcmp=Op({type:t,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(e,r){e&2&&(Gc$1(`aria-orientation`,r.vertical?`vertical`:`horizontal`),rh$1(`mat-divider-vertical`,r.vertical)(`mat-divider-horizontal`,!r.vertical)(`mat-divider-inset`,r.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(e,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})();var f=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=ji$2({type:t});static ɵinj=or({imports:[Y0]})}return t})();var Be$1=[`*`];var je$1=[[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],[[``,`mat-card-image`,``],[``,`matCardImage`,``],[``,`mat-card-sm-image`,``],[``,`matCardImageSmall`,``],[``,`mat-card-md-image`,``],[``,`matCardImageMedium`,``],[``,`mat-card-lg-image`,``],[``,`matCardImageLarge`,``],[``,`mat-card-xl-image`,``],[``,`matCardImageXLarge`,``]],`*`];var Ve=[`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`[mat-card-image], [matCardImage],
                    [mat-card-sm-image], [matCardImageSmall],
                    [mat-card-md-image], [matCardImageMedium],
                    [mat-card-lg-image], [matCardImageLarge],
                    [mat-card-xl-image], [matCardImageXLarge]`,`*`];var Ue$1=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var He=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var qe$1=new T(`MAT_CARD_CONFIG`);var Qn=(()=>{class a{appearance;constructor(){let t=g(qe$1,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(e,n){e&2&&rh$1(`mat-mdc-card-outlined`,n.appearance===`outlined`)(`mdc-card--outlined`,n.appearance===`outlined`)(`mat-mdc-card-filled`,n.appearance===`filled`)(`mdc-card--filled`,n.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:Be$1,decls:1,vars:0,template:function(e,n){e&1&&(eD(),tD(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return a})();var Zn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return a})();var Yn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`mat-card-title-group`]],hostAttrs:[1,`mat-mdc-card-title-group`],ngContentSelectors:Ve,decls:4,vars:0,template:function(e,n){e&1&&(eD(je$1),zc$1(0,`div`),tD(1),Qc$1(),tD(2,1),tD(3,2))},encapsulation:2})}return a})();var Xn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return a})();var Kn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return a})();var Jn=(()=>{class a{align=`start`;static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(e,n){e&2&&rh$1(`mat-mdc-card-actions-align-end`,n.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return a})();var ta=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:He,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(e,n){e&1&&(eD(Ue$1),tD(0),zc$1(1,`div`,0),tD(2,1),Qc$1(),tD(3,2))},encapsulation:2})}return a})();var ea=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-card-footer`]],hostAttrs:[1,`mat-mdc-card-footer`]})}return a})();var na=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[``,`mat-card-image`,``],[``,`matCardImage`,``]],hostAttrs:[1,`mat-mdc-card-image`,`mdc-card__media`]})}return a})();var aa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=ji$2({type:a});static ɵinj=or({imports:[Y0]})}return a})();var We={capture:!0};var $e=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var yt$1=`mat-ripple-loader-uninitialized`;var St$1=`mat-ripple-loader-class-name`;var le=`mat-ripple-loader-centered`;var dt$1=`mat-ripple-loader-disabled`;var ce$1=(()=>{class a{_document=g(Gt$2);_animationsDisabled=Ni$1();_globalRippleOptions=g(Uo,{optional:!0});_platform=g(Y);_ngZone=g(K$1);_injector=g(ue$2);_eventCleanups;_hosts=new Map;constructor(){let t=g(Mr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>$e.map(e=>t.listen(this._document,e,this._onInteraction,We)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(yt$1,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(St$1))&&t.setAttribute(St$1,e.className||``),e.centered&&t.setAttribute(le,``),e.disabled&&t.setAttribute(dt$1,``)}setDisabled(t,e){let n=this._hosts.get(t);n?(n.target.rippleDisabled=e,!e&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):e?t.setAttribute(dt$1,``):t.removeAttribute(dt$1)}_onInteraction=t=>{let e=te(t);if(e instanceof HTMLElement){let n=e.closest(`[${yt$1}="${this._globalRippleOptions?.namespace??``}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(St$1)),t.append(e);let n=this._globalRippleOptions,i=this._animationsDisabled?0:n?.animation?.enterDuration??Pi$1.enterDuration,o=this._animationsDisabled?0:n?.animation?.exitDuration??Pi$1.exitDuration,s={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(dt$1),rippleConfig:{centered:t.hasAttribute(le),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:o}}},_=new kn$2(s,this._ngZone,e,this._platform,this._injector),N=!s.rippleDisabled;N&&_.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:_,hasSetUpEvents:N}),t.removeAttribute(yt$1)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||a)};static ɵprov=Ke$2({token:a,factory:a.ɵfac})}return a})();var Ge=[`*`,[[``,`progressIndicator`,``]]];var Qe$1=[`*`,`[progressIndicator]`];function Ze$1(a,r){a&1&&(zc$1(0,`div`,1),tD(1,1),Qc$1())}var Ye=new T(`MAT_BUTTON_CONFIG`);function me(a){return a==null?void 0:KF(a)}var Nt=(()=>{class a{_elementRef=g(mt);_ngZone=g(K$1);_animationsDisabled=Ni$1();_config=g(Ye,{optional:!0});_focusMonitor=g(To);_cleanupClick;_renderer=g(gi$3);_rippleLoader=g(ce$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=GF(!1,{transform:YF});constructor(){g(Tn$2).load(Tf);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,n){e&2&&(Gc$1(`disabled`,n._getDisabledAttribute())(`aria-disabled`,n._getAriaDisabled())(`tabindex`,n._getTabIndex()),vD(n.color?`mat-`+n.color:``),rh$1(`mat-mdc-button-progress-indicator-shown`,n.showProgress())(`mat-mdc-button-disabled`,n.disabled)(`mat-mdc-button-disabled-interactive`,n.disabledInteractive)(`mat-unthemed`,!n.color)(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,YF],disabled:[2,`disabled`,`disabled`,YF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,YF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,YF],tabIndex:[2,`tabIndex`,`tabIndex`,me],_tabindex:[2,`tabindex`,`_tabindex`,me],showProgress:[1,`showProgress`]}})}return a})();var Xe$1=(()=>{class a extends Nt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Pp],ngContentSelectors:Qe$1,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,n){e&1&&(eD(Ge),Zc$1(0,`span`,0),tD(1),VE(2,Ze$1,2,0,`div`,1),Zc$1(3,`span`,2)(4,`span`,3)),e&2&&(Jy(2),HE(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();var Ke=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Je=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function tn(a,r){a&1&&(zc$1(0,`div`,2),tD(1,3),Qc$1())}var fe$1=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Ca=(()=>{class a extends Nt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=en(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,n=this._appearance?fe$1.get(this._appearance):null,i=fe$1.get(t);n&&e.remove(...n),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Pp],ngContentSelectors:Je,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,n){e&1&&(eD(Ke),Zc$1(0,`span`,0),tD(1),zc$1(2,`span`,1),tD(3,1),Qc$1(),tD(4,2),VE(5,tn,2,0,`div`,2),Zc$1(6,`span`,3)(7,`span`,4)),e&2&&(rh$1(`mdc-button__ripple`,!n._isFab)(`mdc-fab__ripple`,n._isFab),Jy(5),HE(n.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function en(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Fa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=ji$2({type:a});static ɵinj=or({imports:[Xf,Y0]})}return a})();function ue(a){return Error(`Unable to find icon with the name "${a}"`)}function nn(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function pe(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function be(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var I=class{url;svgText;options;svgElement=null;constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}};var ve=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new I(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let o=this._sanitizer.sanitize(U.HTML,n);if(!o)throw be(n);let s=Ao(o);return this._addSvgIconConfig(t,e,new I(``,s,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new I(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(U.HTML,e);if(!i)throw be(e);let o=Ao(i);return this._addSvgIconSetConfig(t,new I(``,o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(U.RESOURCE_URL,t);if(!e)throw pe(t);let n=this._cachedIconsByUrl.get(e);return n?Bn$3(st(n)):this._loadSvgIconFromConfig(new I(t,null)).pipe(go$1(i=>this._cachedIconsByUrl.set(e,i)),ie(i=>st(i)))}getNamedSvgIcon(t,e=``){let n=he(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):hg(ue(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Bn$3(st(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ie(e=>st(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return Bn$3(n);return po$2(e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(Wn(s=>{let N=`Loading icon set URL: ${this._sanitizer.sanitize(U.RESOURCE_URL,o.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(N)),Bn$3(null)})))).pipe(ie(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw ue(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(i),s=this._extractSvgIconFromSet(o,t,i.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(go$1(e=>t.svgText=e),ie(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Bn$3(null):this._fetchIcon(t).pipe(go$1(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute(`id`),o.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(o),n);let s=this._svgElementFromString(Ao(`<svg></svg>`));return s.appendChild(o),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(Ao(`<svg></svg>`)),n=t.attributes;for(let i=0;i<n.length;i++){let{name:o,value:s}=n[i];o!==`id`&&e.setAttribute(o,s)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw nn();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(U.RESOURCE_URL,e);if(!o)throw pe(e);let s=this._inProgressUrlFetches.get(o);if(s)return s;let _=this._httpClient.get(o,{responseType:`text`,withCredentials:i}).pipe(ie(N=>Ao(N)),jg(()=>this._inProgressUrlFetches.delete(o)),as$2());return this._inProgressUrlFetches.set(o,_),_}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(he(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return an(i)?new I(i.url,null,i.options):new I(i,null)}}static ɵfac=function(e){return new(e||a)(z(li$1,8),z(wn$2),z(Gt$2,8),z(at$1))};static ɵprov=Q$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a){return a.cloneNode(!0)}function he(a,r){return a+`:`+r}function an(a){return!!(a.url&&a.options)}var on=[`*`];var rn=new T(`MAT_ICON_DEFAULT_OPTIONS`);var dn=new T(`mat-icon-location`,{providedIn:`root`,factory:()=>{let a=g(Gt$2),r=a?a.location:null;return{getPathname:()=>r?r.pathname+r.search:``}}});var ge=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var sn=ge.map(a=>`[${a}]`).join(`, `);var ln=/^url\(['"]?#(.*?)['"]?\)$/;var Ga=(()=>{class a{_elementRef=g(mt);_iconRegistry=g(ve);_location=g(dn);_errorHandler=g(at$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=$.EMPTY;constructor(){let t=g(new Ch(`aria-hidden`),{optional:!0}),e=g(rn,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(sn),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)ge.forEach(o=>{let s=e[i],_=s.getAttribute(o),N=_?_.match(ln):null;if(N){let z=n.get(s);z||(z=[],n.set(s,z)),z.push({name:o,value:N[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(on$2(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(Gc$1(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),vD(n.color?`mat-`+n.color:``),rh$1(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,YF],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:on,decls:1,vars:0,template:function(e,n){e&1&&(eD(),tD(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return a})();var Qa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=ji$2({type:a});static ɵinj=or({imports:[Y0]})}return a})();var bi$1=new T(``);var gi$1=(()=>{class a{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}isSignalErrorState(t){if(!t)return!1;let e=t().invalid(),n=t().touched();return e&&n}static ɵfac=function(e){return new(e||a)};static ɵprov=Ke$2({token:a,factory:a.ɵfac})}return a})();var xe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(r,t,e,n,i){this._defaultMatcher=r,this._parentFormGroup=e,this._parentForm=n,this._stateChanges=i,t?yr$1(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let r=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==r&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(r){if(this.formField&&r?.isSignalErrorState)return r.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,e=this.ngControl?this.ngControl.control:null;return r?.isErrorState(e,t)??!1}};var wt$1=class{_box;_destroyed=new W;_resizeSubject=new W;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new b$1(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),e.unsubscribe(),this._elementObservables.delete(r)}}).pipe(qn(t=>t.some(e=>e.target===r)),ho$2({bufferSize:1,refCount:!0}),es$2(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var _e=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=g(K$1);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let n=e?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new wt$1(n)),this._observers.get(n).observe(t)}static ɵfac=function(e){return new(e||a)};static ɵprov=Ke$2({token:a,factory:a.ɵfac})}return a})();var cn=[`notch`];var mn$1=[`*`];var ye=[`iconPrefixContainer`];var Se$1=[`textPrefixContainer`];var Ne=[`iconSuffixContainer`];var we=[`textSuffixContainer`];var fn$1=[`textField`];var un=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var pn=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function bn$1(a,r){a&1&&Gp(0,`span`,21)}function hn(a,r){if(a&1&&(Ci$2(0,`label`,20),tD(1,1),VE(2,bn$1,1,0,`span`,21),Wc$1()),a&2){let t=JE(2);Up(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),Gc$1(`for`,t._control.disableAutomaticLabeling?null:t._control.id),Jy(2),HE(!t.hideRequiredMarker&&t._control.required?2:-1)}}function vn$1(a,r){if(a&1&&VE(0,hn,3,5,`label`,20),a&2)HE(JE()._hasFloatingLabel()?0:-1)}function gn$1(a,r){a&1&&Gp(0,`div`,7)}function xn$1(a,r){}function _n$1(a,r){if(a&1&&jp(0,xn$1,0,0,`ng-template`,13),a&2){JE(2);Up(`ngTemplateOutlet`,sD(1))}}function yn$1(a,r){if(a&1&&(Ci$2(0,`div`,9),VE(1,_n$1,1,1,null,13),Wc$1()),a&2){let t=JE();Up(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),Jy(),HE(t._forceDisplayInfixLabel()?-1:1)}}function Sn$1(a,r){a&1&&(Ci$2(0,`div`,10,2),tD(2,2),Wc$1())}function Nn$1(a,r){a&1&&(Ci$2(0,`div`,11,3),tD(2,3),Wc$1())}function wn$1(a,r){}function Cn$1(a,r){if(a&1&&jp(0,wn$1,0,0,`ng-template`,13),a&2){JE();Up(`ngTemplateOutlet`,sD(1))}}function Fn(a,r){a&1&&(Ci$2(0,`div`,14,4),tD(2,4),Wc$1())}function En$1(a,r){a&1&&(Ci$2(0,`div`,15,5),tD(2,5),Wc$1())}function Mn$1(a,r){a&1&&Gp(0,`div`,16)}function In$1(a,r){a&1&&(Ci$2(0,`div`,18),tD(1,6),Wc$1())}function Dn$1(a,r){if(a&1&&(Ci$2(0,`mat-hint`,22),_D(1),Wc$1()),a&2){let t=JE(2);Up(`id`,t._hintLabelId),Jy(),lh$1(t.hintLabel)}}function An$1(a,r){if(a&1&&(Ci$2(0,`div`,19),VE(1,Dn$1,2,2,`mat-hint`,22),tD(2,7),Gp(3,`div`,23),tD(4,8),Wc$1()),a&2){let t=JE();Jy(),HE(t.hintLabel?1:-1)}}var Ce$1=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-label`]]})}return a})();var Rn$1=new T(`MatError`);var Fe$1=(()=>{class a{align=`start`;id=g(Pn$2).getId(`mat-mdc-hint-`);static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(e,n){e&2&&(Jc$1(`id`,n.id),Gc$1(`align`,null),rh$1(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return a})();var kn$1=new T(`MatPrefix`);var ke=new T(`MatSuffix`);var Wi$1=(()=>{class a{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[mh$1([{provide:ke,useExisting:a}])]})}return a})();var Te=new T(`FloatingLabelParent`);var Ee=(()=>{class a{_elementRef=g(mt);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(_e);_ngZone=g(K$1);_parent=g(Te);_resizeSubscription=new $;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Tn$1(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(e,n){e&2&&rh$1(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return a})();function Tn$1(a){let r=a;if(r.offsetParent!==null)return r.scrollWidth;let t=r.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Me=`mdc-line-ripple--active`;var lt$1=`mdc-line-ripple--deactivating`;var Ie$1=(()=>{class a{_elementRef=g(mt);_cleanupTransitionEnd;constructor(){let t=g(K$1),e=g(gi$3);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(lt$1),t.add(Me)}deactivate(){this._elementRef.nativeElement.classList.add(lt$1)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,n=e.contains(lt$1);t.propertyName===`opacity`&&n&&e.remove(Me,lt$1)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return a})();var De=(()=>{class a{_elementRef=g(mt);_ngZone=g(K$1);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(`.mdc-floating-label`);e?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(e.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width=``:e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(e,n){if(e&1&&Kp(cn,5),e&2){let i;rD(i=oD())&&(n._notch=i.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(e,n){e&2&&rh$1(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:mn$1,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(e,n){e&1&&(eD(),Zc$1(0,`div`,1),zc$1(1,`div`,2,0),tD(3),Qc$1(),Zc$1(4,`div`,3))},encapsulation:2})}return a})();var zn=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(e){return new(e||a)};static ɵdir=Bc$1({type:a})}return a})();var Ln$1=new T(`MatFormField`);var On$1=new T(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Ae=`fill`;var Pn$1=`auto`;var Re$1=`fixed`;var Bn$1=`translateY(-50%)`;var $i$1=(()=>{class a{_elementRef=g(mt);_changeDetectorRef=g(il$1);_platform=g(Y);_idGenerator=g(Pn$2);_ngZone=g(K$1);_defaults=g(On$1,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=qF(`iconPrefixContainer`);_textPrefixContainerSignal=qF(`textPrefixContainer`);_iconSuffixContainerSignal=qF(`iconSuffixContainer`);_textSuffixContainerSignal=qF(`textSuffixContainer`);_prefixSuffixContainers=Hi$2(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=WF(Ce$1);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=U0(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Pn$1}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||Ae;this._appearanceSignal.set(e)}_appearanceSignal=Ze$3(Ae);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Re$1}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||Re$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new W;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ni$1();constructor(){let t=this._defaults,e=g(QT);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),va$1(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Hi$2(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let e=this._control,n=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(n+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(n+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Ug([void 0,void 0]),ie(()=>[e.errorState,e.userAriaDescribedBy]),Bg(),qn(([[i,o],[s,_]])=>i!==s||o!==_)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(es$2(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ag(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){JF({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Hi$2(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let i=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,o=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;i?t.push(i.id):this._hintLabel&&t.push(this._hintLabelId),o&&t.push(o.id)}else this._errorChildren&&t.push(...this._errorChildren.map(i=>i.id));let e=this._control.describedByIds,n;if(e){let i=this._describedByIds||t;n=t.concat(e.filter(o=>o&&!i.includes(o)))}else n=t;this._control.setDescribedByIds(n),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,i=this._textSuffixContainer?.nativeElement,o=t?.getBoundingClientRect().width??0,s=e?.getBoundingClientRect().width??0,_=n?.getBoundingClientRect().width??0,N=i?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Bn$1} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+s+_+N]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,n]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=Op({type:a,selectors:[[`mat-form-field`]],contentQueries:function(e,n,i){if(e&1&&(Jp(i,n._labelChild,Ce$1,5),Yp(i,zn,5)(i,kn$1,5)(i,ke,5)(i,Rn$1,5)(i,Fe$1,5)),e&2){iD();let o;rD(o=oD())&&(n._formFieldControl=o.first),rD(o=oD())&&(n._prefixChildren=o),rD(o=oD())&&(n._suffixChildren=o),rD(o=oD())&&(n._errorChildren=o),rD(o=oD())&&(n._hintChildren=o)}},viewQuery:function(e,n){if(e&1&&(Xp(n._iconPrefixContainerSignal,ye,5)(n._textPrefixContainerSignal,Se$1,5)(n._iconSuffixContainerSignal,Ne,5)(n._textSuffixContainerSignal,we,5),Kp(fn$1,5)(ye,5)(Se$1,5)(Ne,5)(we,5)(Ee,5)(De,5)(Ie$1,5)),e&2){iD(4);let i;rD(i=oD())&&(n._textField=i.first),rD(i=oD())&&(n._iconPrefixContainer=i.first),rD(i=oD())&&(n._textPrefixContainer=i.first),rD(i=oD())&&(n._iconSuffixContainer=i.first),rD(i=oD())&&(n._textSuffixContainer=i.first),rD(i=oD())&&(n._floatingLabel=i.first),rD(i=oD())&&(n._notchedOutline=i.first),rD(i=oD())&&(n._lineRipple=i.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(e,n){e&2&&rh$1(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[mh$1([{provide:Ln$1,useExisting:a},{provide:Te,useExisting:a}])],ngContentSelectors:pn,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(e,n){if(e&1&&(eD(un),jp(0,vn$1,1,1,`ng-template`,null,0,WD),Ci$2(2,`div`,6,1),Qp(`click`,function(o){return n._control.onContainerClick(o)}),VE(4,gn$1,1,0,`div`,7),Ci$2(5,`div`,8),VE(6,yn$1,2,2,`div`,9),VE(7,Sn$1,3,0,`div`,10),VE(8,Nn$1,3,0,`div`,11),Ci$2(9,`div`,12),VE(10,Cn$1,1,1,null,13),tD(11),Wc$1(),VE(12,Fn,3,0,`div`,14),VE(13,En$1,3,0,`div`,15),Wc$1(),VE(14,Mn$1,1,0,`div`,16),Wc$1(),Ci$2(15,`div`,17),VE(16,In$1,2,0,`div`,18)(17,An$1,5,1,`div`,19),Wc$1()),e&2){let i;Jy(2),rh$1(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),Jy(2),HE(!n._hasOutline()&&!n._control.disabled?4:-1),Jy(2),HE(n._hasOutline()?6:-1),Jy(),HE(n._hasIconPrefix?7:-1),Jy(),HE(n._hasTextPrefix?8:-1),Jy(2),HE(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),Jy(2),HE(n._hasTextSuffix?12:-1),Jy(),HE(n._hasIconSuffix?13:-1),Jy(),HE(n._hasOutline()?-1:14),Jy(),rh$1(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let o=n._getSubscriptMessageType();Jy(),HE((i=o)===`error`?16:i===`hint`?17:-1)}},dependencies:[Ee,De,ys$1,Ie$1,Fe$1],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return a})();var b=`primary`;var kn=Symbol(`RouteTitle`);var gr=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ct(n){return new gr(n)}function ur(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===`:`)e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Ja(n,i,e){let t=e.path.split(`/`),r=t.indexOf(`**`);if(r===-1){if(t.length>n.length||e.pathMatch===`full`&&(i.hasChildren()||t.length<n.length))return null;let s={},d=n.slice(0,t.length);return ur(t,d,s)?{consumed:d,posParams:s}:null}if(r!==t.lastIndexOf(`**`))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch===`full`&&i.hasChildren()&&e.path!==`**`)return null;let l={};return!ur(o,n.slice(0,o.length),l)||!ur(a,n.slice(n.length-a.length),l)?null:{consumed:n,posParams:l}}function ai(n){return new Promise((i,e)=>{n.pipe(Vg()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Vl(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Be(n[e],i[e]))return!1;return!0}function Be(n,i){let e=n?_r(n):void 0,t=i?_r(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!es(n[r],i[r]))return!1;return!0}function _r(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function es(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Gl(n){return n.length>0?n[n.length-1]:null}function St(n){return gg(n)?n:Hc$1(n)?le$2(Promise.resolve(n)):Bn$3(n)}function ts(n){return gg(n)?ai(n):Promise.resolve(n)}var Wl={exact:is,subset:rs};var ns={exact:$l,subset:Yl,ignored:()=>!0};var Or={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var jt={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Ir(n,i,e){let t=n instanceof ce?n:i.parseUrl(n);return Hi$2(()=>vr(i.lastSuccessfulNavigation()?.finalUrl??new ce,t,_(_({},jt),e)))}function vr(n,i,e){return Wl[e.paths](n.root,i.root,e.matrixParams)&&ns[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment===`exact`&&n.fragment!==i.fragment)}function $l(n,i){return Be(n,i)}function is(n,i,e){if(!yt(n.segments,i.segments)||!ii(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!is(n.children[t],i.children[t],e))return!1;return!0}function Yl(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>es(n[e],i[e]))}function rs(n,i,e){return os(n,i,i.segments,e)}function os(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!yt(r,e)||i.hasChildren()||!ii(r,e,t))}else if(n.segments.length===e.length){if(!yt(n.segments,e)||!ii(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!rs(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!yt(n.segments,r)||!ii(n.segments,r,t)||!n.children[b]?!1:os(n.children[b],i,o,t)}}function ii(n,i,e){return i.every((t,r)=>ns[e](n[r].parameters,t.parameters))}var ce=class{root;queryParams;fragment;_queryParamMap;constructor(i=new k([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Ct(this.queryParams),this._queryParamMap}toString(){return Zl.serialize(this)}};var k=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ri(this)}};var lt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Ct(this.parameters),this._parameterMap}toString(){return ss(this)}};function Kl(n,i){return yt(n,i)&&n.every((e,t)=>Be(e.parameters,i[t].parameters))}function yt(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function ql(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===b&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==b&&(e=e.concat(i(r,t)))}),e}var dt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:()=>new Ze})}return n})();var Ze=class{parse(i){let e=new yr(i);return new ce(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){return`${`/${mn(i.root,!0)}`}${Jl(i.queryParams)}${typeof i.fragment==`string`?`#${Xl(i.fragment)}`:``}`}};var Zl=new Ze;function ri(n){return n.segments.map(i=>ss(i)).join(`/`)}function mn(n,i){if(!n.hasChildren())return ri(n);if(i){let e=n.children[b]?mn(n.children[b],!1):``,t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==b&&t.push(`${r}:${mn(o,!1)}`)}),t.length>0?`${e}(${t.join(`//`)})`:e}else{let e=ql(n,(t,r)=>r===b?[mn(n.children[b],!1)]:[`${r}:${mn(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[b]!=null?`${ri(n)}/${e[0]}`:`${ri(n)}/(${e.join(`//`)})`}}function as(n){return encodeURIComponent(n).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function ti(n){return as(n).replace(/%3B/gi,`;`)}function Xl(n){return encodeURI(n)}function br(n){return as(n).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function oi(n){return decodeURIComponent(n)}function Wa(n){return oi(n.replace(/\+/g,`%20`))}function ss(n){return`${br(n.path)}${Ql(n.parameters)}`}function Ql(n){return Object.entries(n).map(([i,e])=>`;${br(i)}=${br(e)}`).join(``)}function Jl(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${ti(e)}=${ti(r)}`).join(`&`):`${ti(e)}=${ti(t)}`).filter(e=>e);return i.length?`?${i.join(`&`)}`:``}var ec=/^[^\/()?;#]+/;function pr(n){let i=n.match(ec);return i?i[0]:``}var tc=/^[^\/()?;=#]+/;function nc(n){let i=n.match(tc);return i?i[0]:``}var ic=/^[^=?&#]+/;function rc(n){let i=n.match(ic);return i?i[0]:``}var oc=/^[^&#]+/;function ac(n){let i=n.match(oc);return i?i[0]:``}var yr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new k([],{}):new k([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional(`?`))do this.parseQueryParam(i);while(this.consumeOptional(`&`));return i}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new S(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let t={};this.peekStartsWith(`/(`)&&(this.capture(`/`),t=this.parseParens(!0,i));let r={};return this.peekStartsWith(`(`)&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[b]=new k(e,t)),r}parseSegment(){let i=pr(this.remaining);if(i===``&&this.peekStartsWith(`;`))throw new S(4009,!1);return this.capture(i),new lt(oi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(`;`);)this.parseParam(i);return i}parseParam(i){let e=nc(this.remaining);if(!e)return;this.capture(e);let t=``;if(this.consumeOptional(`=`)){let r=pr(this.remaining);r&&(t=r,this.capture(t))}i[oi(e)]=oi(t)}parseQueryParam(i){let e=rc(this.remaining);if(!e)return;this.capture(e);let t=``;if(this.consumeOptional(`=`)){let a=ac(this.remaining);a&&(t=a,this.capture(t))}let r=Wa(e),o=Wa(t);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let r=pr(this.remaining),o=this.remaining[r.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new S(4010,!1);let a;r.indexOf(`:`)>-1?(a=r.slice(0,r.indexOf(`:`)),this.capture(a),this.capture(`:`)):i&&(a=b);let l=this.parseChildren(e+1);t[a??b]=Object.keys(l).length===1&&l[b]?l[b]:new k([],l),this.consumeOptional(`//`)}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new S(4011,!1)}};function ls(n){return n.segments.length>0?new k([],{[b]:n}):n}function cs(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=cs(r);if(t===b&&o.segments.length===0&&o.hasChildren())for(let[a,l]of Object.entries(o.children))i[a]=l;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}return sc(new k(n.segments,i))}function sc(n){if(n.numberOfChildren===1&&n.children[b]){let i=n.children[b];return new k(n.segments.concat(i.segments),i.children)}return n}function ct(n){return n instanceof ce}function ds(n,i,e=null,t=null,r=new Ze){return us(hs(n),i,e,t,r)}function hs(n){let i;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let l=new k(o.url,a);return o===n&&(i=l),l}let r=ls(e(n.root));return i??r}function us(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return mr(o,o,o,e,t,r);let a=lc(i);if(a.toRoot())return mr(o,o,new k([],{}),e,t,r);let l=cc(a,o,n),s=l.processChildren?gn(l.segmentGroup,l.index,a.commands):ms(l.segmentGroup,l.index,a.commands);return mr(o,l.segmentGroup,s,e,t,r)}function si(n){return typeof n==`object`&&n!=null&&!n.outlets&&!n.segmentPath}function vn(n){return typeof n==`object`&&n!=null&&n.outlets}function $a(n,i,e){n||=`ɵ`;let t=new ce;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function mr(n,i,e,t,r,o){let a={};for(let[d,h]of Object.entries(t??{}))a[d]=Array.isArray(h)?h.map(p=>$a(d,p,o)):$a(d,h,o);let l;n===i?l=e:l=ps(n,i,e);return new ce(ls(cs(l)),a,r)}function ps(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=ps(o,i,e)}),new k(n.segments,t)}var li=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&si(t[0]))throw new S(4003,!1);let r=t.find(vn);if(r&&r!==Gl(t))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function lc(n){if(typeof n[0]==`string`&&n.length===1&&n[0]===`/`)return new li(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([s,d])=>{l[s]=typeof d==`string`?d.split(`/`):d}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!=`string`?[...r,o]:a===0?(o.split(`/`).forEach((l,s)=>{s==0&&l===`.`||(s==0&&l===``?e=!0:l===`..`?i++:l!=``&&r.push(l))}),r):[...r,o]},[]);return new li(e,i,t)}var Bt=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function cc(n,i,e){if(n.isAbsolute)return new Bt(i,!0,0);if(!e)return new Bt(i,!1,NaN);if(e.parent===null)return new Bt(e,!0,0);let t=si(n.commands[0])?0:1;return dc(e,e.segments.length-1+t,n.numberOfDoubleDots)}function dc(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new S(4005,!1);r=t.segments.length}return new Bt(t,!1,r-o)}function hc(n){return vn(n[0])?n[0].outlets:{[b]:n}}function ms(n,i,e){if(n??=new k([],{}),n.segments.length===0&&n.hasChildren())return gn(n,i,e);let t=uc(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new k(n.segments.slice(0,t.pathIndex),{});return o.children[b]=new k(n.segments.slice(t.pathIndex),n.children),gn(o,0,r)}else return t.match&&r.length===0?new k(n.segments,{}):t.match&&!n.hasChildren()?Cr(n,i,e):t.match?gn(n,0,r):Cr(n,i,e)}function gn(n,i,e){if(e.length===0)return new k(n.segments,{});{let t=hc(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==b)&&n.children[b]&&n.numberOfChildren===1&&n.children[b].segments.length===0){let o=gn(n.children[b],i,e);return new k(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(r[o]=ms(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new k(n.segments,r)}}function uc(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],l=e[t];if(vn(l))break;let s=`${l}`,d=t<e.length-1?e[t+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d==`object`&&d.outlets===void 0){if(!Ka(s,d,a))return o;t+=2}else{if(!Ka(s,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Cr(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(vn(o))return new k(t,pc(o.outlets));if(r===0&&si(e[0])){let s=n.segments[i];t.push(new lt(s.path,Ya(e[0]))),r++;continue}let a=vn(o)?o.outlets[b]:`${o}`,l=r<e.length-1?e[r+1]:null;a&&l&&si(l)?(t.push(new lt(a,Ya(l))),r+=2):(t.push(new lt(a,{})),r++)}return new k(t,{})}function pc(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t==`string`&&(t=[t]),t!==null&&(i[e]=Cr(new k([],{}),0,t))}),i}function Ya(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Ka(n,i,e){return n==e.path&&Be(i,e.parameters)}var Ut=`imperative`;var G=(function(n){return n[n.NavigationStart=0]=`NavigationStart`,n[n.NavigationEnd=1]=`NavigationEnd`,n[n.NavigationCancel=2]=`NavigationCancel`,n[n.NavigationError=3]=`NavigationError`,n[n.RoutesRecognized=4]=`RoutesRecognized`,n[n.ResolveStart=5]=`ResolveStart`,n[n.ResolveEnd=6]=`ResolveEnd`,n[n.GuardsCheckStart=7]=`GuardsCheckStart`,n[n.GuardsCheckEnd=8]=`GuardsCheckEnd`,n[n.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,n[n.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,n[n.ChildActivationStart=11]=`ChildActivationStart`,n[n.ChildActivationEnd=12]=`ChildActivationEnd`,n[n.ActivationStart=13]=`ActivationStart`,n[n.ActivationEnd=14]=`ActivationEnd`,n[n.Scroll=15]=`Scroll`,n[n.NavigationSkipped=16]=`NavigationSkipped`,n})(G||{});var Se=class{id;url;constructor(i,e){this.id=i,this.url=e}};var Ue=class extends Se{type=G.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t=`imperative`,r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var de=class extends Se{urlAfterRedirects;type=G.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var re=(function(n){return n[n.Redirect=0]=`Redirect`,n[n.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,n[n.NoDataFromResolver=2]=`NoDataFromResolver`,n[n.GuardRejected=3]=`GuardRejected`,n[n.Aborted=4]=`Aborted`,n})(re||{});var Ht=(function(n){return n[n.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,n[n.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,n})(Ht||{});var fe=class extends Se{reason;code;type=G.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function fs(n){return n instanceof fe&&(n.code===re.Redirect||n.code===re.SupersededByNewNavigation)}var Fe=class extends Se{reason;code;type=G.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}};var Xe=class extends Se{error;target;type=G.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var bn=class extends Se{urlAfterRedirects;state;type=G.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ci=class extends Se{urlAfterRedirects;state;type=G.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var di=class extends Se{urlAfterRedirects;state;shouldActivate;type=G.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var hi=class extends Se{urlAfterRedirects;state;type=G.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ui=class extends Se{urlAfterRedirects;state;type=G.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pi=class{route;type=G.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var mi=class{route;type=G.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var fi=class{snapshot;type=G.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var gi=class{snapshot;type=G.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var _i=class{snapshot;type=G.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var vi=class{snapshot;type=G.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var zt=class{routerEvent;position;anchor;scrollBehavior;type=G.Scroll;constructor(i,e,t,r){this.routerEvent=i,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}};var Vt=class{};var yn=class{};var Gt=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function mc(n){return!(n instanceof Vt)&&!(n instanceof Gt)&&!(n instanceof yn)}var bi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Rt(this.rootInjector)}};var Rt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new bi(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(t){return new(t||n)(z(he$1))};static ɵprov=Q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var yi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Sr(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Sr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Rr(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Rr(i,this._root).map(e=>e.value)}};function Sr(n,i){if(n===i.value)return i;for(let e of i.children){let t=Sr(n,e);if(t)return t}return null}function Rr(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Rr(n,e);if(t.length)return t.unshift(i),t}return[]}var Ce=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Lt(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Cn=class extends yi{snapshot;constructor(i,e){super(i),this.snapshot=e,Nr(this,i)}toString(){return this.snapshot.toString()}};function gs(n,i){let e=fc(n,i),t=new wt$3([new lt(``,{})]),r=new wt$3({}),o=new wt$3({}),s=new je(t,r,new wt$3({}),new wt$3(``),o,b,n,e.root);return s.snapshot=e.root,new Cn(new Ce(s,[]),e)}function fc(n,i){return new Sn(``,new Ce(new Wt([],{},{},``,{},b,n,null,{},i),[]))}var je=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,t,r,o,a,l,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(ie(d=>d[kn]))??Bn$3(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ie(i=>Ct(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ie(i=>Ct(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};var gc=`always`;function Pr(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e===`always`||r?.path===``||!i.component&&!i.routeConfig?.loadComponent)?t={params:_(_({},i.params),n.params),data:_(_({},i.data),n.data),resolve:_(_(_(_({},n.data),i.data),r?.data),n._resolvedData)}:t={params:_({},n.params),data:_({},n.data),resolve:_(_({},n.data),n._resolvedData??{})},r&&vs(r)&&(t.resolve[kn]=r.title),t}var Wt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[kn]}constructor(i,e,t,r,o,a,l,s,d,h){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=l,this.routeConfig=s,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ct(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ct(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Sn=class extends yi{url;constructor(i,e){super(e),this.url=i,Nr(this,e)}toString(){return _s(this._root)}};function Nr(n,i){i.value._routerState=n,i.children.forEach(e=>Nr(n,e))}function _s(n){let i=n.children.length>0?` { ${n.children.map(_s).join(`, `)} } `:``;return`${n.value}${i}`}function fr(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Be(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Be(i.params,e.params)||n.paramsSubject.next(e.params),Vl(i.url,e.url)||n.urlSubject.next(e.url),Be(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function wr(n,i){let e=Be(n.params,i.params)&&Kl(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||wr(n.parent,i.parent))}function vs(n){return typeof n.title==`string`||n.title===null}var bs=new T(``);var Mn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=b;activateEvents=new De$1;deactivateEvents=new De$1;attachEvents=new De$1;detachEvents=new De$1;routerOutletData=GF();parentContexts=g(Rt);location=g(Lr$2);changeDetector=g(il$1);inputBinder=g(En,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new kr(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Gd$1]})}return n})();var kr=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===je?this.route:i===Rt?this.childContexts:i===bs?this.outletData:this.parent.get(i,e)}};var En=new T(``);var ys=(()=>{class n{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(e){this.options=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=rs$2([this.options.queryParams?t.queryParams:Bn$3({}),t.params,t.data]).pipe(Ct$2(([o,a,l],s)=>(l=_(_(_({},o),a),l),s===0?Bn$3(l):Promise.resolve(l)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=e0(t.component);if(!a){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=new Set,this.outletSeenKeys.set(e,l));for(let d of Object.keys(o))l.add(d);let s=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:d}of a.inputs){let h=o[d];(h!==void 0||s===`alwaysUndefined`||l.has(d))&&e.activatedComponentRef.setInput(d,h)}});this.outletDataSubscriptions.set(e,r)}static ɵfac=function(t){VI()};static ɵprov=Q$1({token:n,factory:n.ɵfac})}return n})();var Ar=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(t,r){t&1&&Gp(0,`router-outlet`)},dependencies:[Mn],encapsulation:2,changeDetection:1})}return n})();function Lr(n){let i=n.children&&n.children.map(Lr),e=i?j$1(_({},n),{children:i}):_({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==b&&(e.component=Ar),e}function _c(n,i,e){let t=new Set;return{newlyCreatedRoutes:t,state:new Cn(Rn(n,i._root,e?e._root:void 0,t),i)}}function Rn(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;return new Ce(r,vc(n,i,e,t))}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let l=a.route;return l.value._futureSnapshot=i.value,l.children=i.children.map(s=>Rn(n,s,void 0,t)),l}}let r=bc(i.value);t.add(r);return new Ce(r,i.children.map(a=>Rn(n,a,void 0,t)))}}function vc(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return Rn(n,r,o,t);return Rn(n,r,void 0,t)})}function bc(n){return new je(new wt$3(n.url),new wt$3(n.params),new wt$3(n.queryParams),new wt$3(n.fragment),new wt$3(n.data),n.outlet,n.component,n)}var $t=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}};var Cs=`ngNavigationCancelingError`;function Ci(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=ct(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Ss(!1,re.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Ss(n,i){let e=new Error(`NavigationCancelingError: ${n||``}`);return e[Cs]=!0,e.cancellationCode=i,e}function yc(n){return Rs(n)&&ct(n.url)}function Rs(n){return!!n&&n[Cs]}var Mr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),fr(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Lt(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Lt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Lt(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=Lt(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new vi(o.value.snapshot))}),i.children.length&&this.forwardEvent(new gi(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(fr(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),fr(l.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}};var Si=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}};var Ft=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Cc(n,i,e){let t=n._root;return fn(t,i?i._root:null,e,[t.value])}function Sc(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Kt(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n==`function`&&!em(n)?n:i.get(n):t}function fn(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Lt(i);return n.children.forEach(a=>{Rc(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,l])=>_n(l,e.getContext(a),r)),r}function Rc(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=wc(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Si(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?fn(n,i,l?l.children:null,t,r):fn(n,i,e,t,r),s&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new Ft(l.outlet.component,a))}else a&&_n(i,l,r),r.canActivateChecks.push(new Si(t)),o.component?fn(n,null,l?l.children:null,t,r):fn(n,null,e,t,r);return r}function wc(n,i,e){if(typeof e==`function`)return ur$1(i._environmentInjector,()=>e(n,i));switch(e){case`pathParamsChange`:return!yt(n.url,i.url);case`pathParamsOrQueryParamsChange`:return!yt(n.url,i.url)||!Be(n.queryParams,i.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!wr(n,i)||!Be(n.queryParams,i.queryParams);default:return!wr(n,i)}}function _n(n,i,e){let t=Lt(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?_n(a,i.children.getContext(o),e):_n(a,null,e):_n(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Ft(i.outlet.component,r)):e.canDeactivateChecks.push(new Ft(null,r)):e.canDeactivateChecks.push(new Ft(null,r))}function Dn(n){return typeof n==`function`}function kc(n){return typeof n==`boolean`}function Mc(n){return n&&Dn(n.canLoad)}function Ec(n){return n&&Dn(n.canActivate)}function Dc(n){return n&&Dn(n.canActivateChild)}function Tc(n){return n&&Dn(n.canDeactivate)}function xc(n){return n&&Dn(n.canMatch)}function ws(n){return n instanceof $n$1||n?.name===`EmptyError`}var ni=Symbol(`INITIAL_VALUE`);function Yt(){return Ct$2(n=>rs$2(n.map(i=>i.pipe(on$2(1),Ug(ni)))).pipe(ie(i=>{for(let e of i)if(e!==!0){if(e===ni)return ni;if(e===!1||Oc(e))return e}return!0}),qn(i=>i!==ni),on$2(1)))}function Oc(n){return ct(n)||n instanceof $t}function ks(n){return n.aborted?Bn$3(void 0).pipe(on$2(1)):new b$1(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener(`abort`,e),()=>n.removeEventListener(`abort`,e)})}function Ms(n){return es$2(ks(n))}function Ic(n){return $e$1(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?Bn$3(j$1(_({},i),{guardsResult:!0})):Pc(o,e,t).pipe($e$1(a=>a&&kc(a)?Nc(e,r,n):Bn$3(a)),ie(a=>j$1(_({},i),{guardsResult:a})))})}function Pc(n,i,e){return le$2(n).pipe($e$1(t=>Fc(t.component,t.route,e,i)),Vg(t=>t!==!0,!0))}function Nc(n,i,e){return le$2(i).pipe(Og(t=>fo$1(Lc(t.route.parent,e),Ac(t.route,e),Uc(n,t.path),Bc(n,t.route))),Vg(t=>t!==!0,!0))}function Ac(n,i){return n!==null&&i&&i(new _i(n)),Bn$3(!0)}function Lc(n,i){return n!==null&&i&&i(new fi(n)),Bn$3(!0)}function Bc(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return Bn$3(!0);return Bn$3(e.map(r=>Cg(()=>{let o=i._environmentInjector,a=Kt(r,o);return St(Ec(a)?a.canActivate(i,n):ur$1(o,()=>a(i,n))).pipe(Vg())}))).pipe(Yt())}function Uc(n,i){let e=i[i.length-1];return Bn$3(i.slice(0,i.length-1).reverse().map(o=>Sc(o)).filter(o=>o!==null).map(o=>Cg(()=>{return Bn$3(o.guards.map(l=>{let s=o.node._environmentInjector,d=Kt(l,s);return St(Dc(d)?d.canActivateChild(e,n):ur$1(s,()=>d(e,n))).pipe(Vg())})).pipe(Yt())}))).pipe(Yt())}function Fc(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return Bn$3(!0);return Bn$3(r.map(a=>{let l=i._environmentInjector,s=Kt(a,l);return St(Tc(s)?s.canDeactivate(n,i,e,t):ur$1(l,()=>s(n,i,e,t))).pipe(Vg())})).pipe(Yt())}function jc(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return Bn$3(!0);return Bn$3(o.map(l=>{let s=Kt(l,n),h=St(Mc(s)?s.canLoad(i,e):ur$1(n,()=>s(i,e)));return r?h.pipe(Ms(r)):h})).pipe(Yt(),Es(t))}function Es(n){return rg(go$1(i=>{if(typeof i!=`boolean`)throw Ci(n,i)}),ie(i=>i===!0))}function Hc(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return Bn$3(!0);return Bn$3(a.map(s=>{let d=Kt(s,n);return St(xc(d)?d.canMatch(i,e,r):ur$1(n,()=>d(i,e,r))).pipe(Ms(o))})).pipe(Yt(),Es(t))}var qe=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}};var wn=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function zc(n){throw new S(4e3,!1)}function Vc(n){throw Ss(!1,re.GuardRejected)}var Er=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return Wi$3(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[b])throw zc(`${i.redirectTo}`);r=r.children[b]}})}applyRedirectCommands(i,e,t,r,o){return Wi$3(this,null,function*(){let a=yield Gc(e,r,o);if(a instanceof ce)throw new wn(a);let l=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]===`/`)throw new wn(l);return l})}applyRedirectCreateUrlTree(i,e,t,r){return new ce(this.createSegmentGroup(i,e.root,t,r),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o==`string`&&o[0]===`:`){let l=o.substring(1);t[r]=e[l]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{a[l]=this.createSegmentGroup(i,s,t,r)}),new k(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===`:`?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new S(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Gc(n,i,e){if(typeof n==`string`)return Promise.resolve(n);let t=n;return ai(St(ur$1(e,()=>t(i))))}function Wc(n,i){return n.providers&&!n._injector&&(n._injector=Rp(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Ie(n){return n.outlet||b}function $c(n,i){let e=n.filter(t=>Ie(t)===i);return e.push(...n.filter(t=>Ie(t)!==i)),e}var Dr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ds(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Yc(n,i,e,t,r,o,a){let l=Ts(n,i,e);if(!l.matched)return Bn$3(l);let s=Ds(o(l));return t=Wc(i,t),Hc(t,i,e,r,s,a).pipe(ie(d=>d===!0?l:_({},Dr)))}function Ts(n,i,e){if(i.path===``)return i.pathMatch===`full`&&(n.hasChildren()||e.length>0)?_({},Dr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Ja)(e,n,i);if(!r)return _({},Dr);let o={};Object.entries(r.posParams??{}).forEach(([l,s])=>{o[l]=s.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function qa(n,i,e,t,r){return e.length>0&&Zc(n,e,t,r)?{segmentGroup:new k(i,qc(t,new k(e,n.children))),slicedSegments:[]}:e.length===0&&Xc(n,e,t)?{segmentGroup:new k(n.segments,Kc(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new k(n.segments,n.children),slicedSegments:e}}function Kc(n,i,e,t){let r={};for(let o of e)if(wi(n,i,o)&&!t[Ie(o)]){let a=new k([],{});r[Ie(o)]=a}return _(_({},t),r)}function qc(n,i){let e={};e[b]=i;for(let t of n)if(t.path===``&&Ie(t)!==b){let r=new k([],{});e[Ie(t)]=r}return e}function Zc(n,i,e,t){return e.some(r=>!wi(n,i,r)||!(Ie(r)!==b)?!1:!(t!==void 0&&Ie(r)===t))}function Xc(n,i,e){return e.some(t=>wi(n,i,t))}function wi(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Qc(n,i,e){return i.length===0&&!n.children[e]}var Tr=class{};function Jc(n,i,e,t,r,o,a,l){return Wi$3(this,null,function*(){return new xr(n,i,e,t,r,a,o,l).recognize()})}var ed=31;var xr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,l,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new Er(this.urlSerializer,this.urlTree)}noMatchError(i){return new S(4002,`'${i.segmentGroup}'`)}recognize(){return Wi$3(this,null,function*(){let i=qa(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),o=new Sn(``,new Ce(t,e)),a=ds(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(i){return Wi$3(this,null,function*(){let e=new Wt([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),b,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,b,e),rootSnapshot:e}}catch(t){if(t instanceof wn)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof qe?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return Wi$3(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=yield this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof Ce?[a]:[]})}processChildren(i,e,t,r){return Wi$3(this,null,function*(){let o=[];for(let s of Object.keys(t.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=t.children[s],h=$c(e,s),p=yield this.processSegmentGroup(i,h,d,s,r);a.push(...p)}let l=xs(a);return td(l),l})}processSegment(i,e,t,r,o,a,l){return Wi$3(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??i,e,s,t,r,o,a,l)}catch(d){if(d instanceof qe||ws(d))continue;throw d}if(Qc(t,r,o))return new Tr;throw new qe(t)})}processSegmentAgainstRoute(i,e,t,r,o,a,l,s){return Wi$3(this,null,function*(){if(Ie(t)!==a&&(a===b||!wi(r,o,t)))throw new qe(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,s);throw new qe(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,l){return Wi$3(this,null,function*(){let{matched:s,parameters:d,consumedSegments:h,positionalParamSegments:p,remainingSegments:g}=Ts(e,r,o);if(!s)throw new qe(e);typeof r.redirectTo==`string`&&r.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ed&&(this.allowRedirects=!1));let M=this.createSnapshot(i,r,o,d,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let T=yield this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,Ds(M),i),W=yield this.applyRedirects.lineralizeSegments(r,T);return this.processSegment(i,t,e,W.concat(g),a,!1,l)})}createSnapshot(i,e,t,r,o){let a=new Wt(t,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,id(e),Ie(e),e.component??e._loadedComponent??null,e,rd(e),i),l=Pr(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(l.params),a.data=Object.freeze(l.data),a}matchSegmentAgainstRoute(i,e,t,r,o,a){return Wi$3(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=pt=>this.createSnapshot(i,t,pt.consumedSegments,pt.parameters,a),s=yield ai(Yc(e,t,r,i,this.urlSerializer,l,this.abortSignal));if(t.path===`**`&&(e.children={}),!s?.matched)throw new qe(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),h=t._loadedInjector??i,{parameters:p,consumedSegments:g,remainingSegments:M}=s,T=this.createSnapshot(i,t,g,p,a),{segmentGroup:W,slicedSegments:Je}=qa(e,g,M,d,o);if(Je.length===0&&W.hasChildren())return new Ce(T,yield this.processChildren(h,d,W,T));if(d.length===0&&Je.length===0)return new Ce(T,[]);let qi=Ie(t)===o,Un=yield this.processSegment(h,d,W,Je,qi?b:o,!0,T);return new Ce(T,Un instanceof Ce?[Un]:[])})}getChildConfig(i,e,t){return Wi$3(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield ai(jc(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Vc(e)}return{routes:[],injector:i}})}};function td(n){n.sort((i,e)=>i.value.outlet===b?-1:e.value.outlet===b?1:i.value.outlet.localeCompare(e.value.outlet))}function nd(n){let i=n.value.routeConfig;return i&&i.path===``}function xs(n){let i=[],e=new Set;for(let t of n){if(!nd(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=xs(t.children);i.push(new Ce(t.value,r))}return i.filter(t=>!e.has(t))}function id(n){return n.data||{}}function rd(n){return n.resolve||{}}function od(n,i,e,t,r,o,a){return $e$1(l=>Wi$3(null,null,function*(){let{state:s,tree:d}=yield Jc(n,i,e,t,l.extractedUrl,r,o,a);return j$1(_({},l),{targetSnapshot:s,urlAfterRedirects:d})}))}function ad(n){return $e$1(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return Bn$3(i);let r=new Set(t.map(l=>l.route)),o=new Set;for(let l of r)if(!o.has(l))for(let s of Os(l))o.add(s);let a=0;return le$2(o).pipe(Og(l=>r.has(l)?sd(l,e,n):(l.data=Pr(l,l.parent,n).resolve,Bn$3(void 0))),go$1(()=>a++),Hg(1),$e$1(l=>a===o.size?Bn$3(i):_e$1))})}function Os(n){return[n,...n.children.map(e=>Os(e)).flat()]}function sd(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!vs(t)&&(r[kn]=t.title),Cg(()=>(n.data=Pr(n,n.parent,e).resolve,ld(r,n,i).pipe(ie(o=>(n._resolvedData=o,n.data=_(_({},n.data),o),null)))))}function ld(n,i,e){let t=_r(n);if(t.length===0)return Bn$3({});let r={};return le$2(t).pipe($e$1(o=>cd(n[o],i,e).pipe(Vg(),go$1(a=>{if(a instanceof $t)throw Ci(new Ze,a);r[o]=a}))),Hg(1),ie(()=>r),Wn(o=>ws(o)?_e$1:hg(o)))}function cd(n,i,e){let t=i._environmentInjector,r=Kt(n,t);return St(r.resolve?r.resolve(i,e):ur$1(t,()=>r(i,e)))}function Za(n){return Ct$2(i=>{let e=n(i);return e?le$2(e).pipe(ie(()=>i)):Bn$3(i)})}var Br=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===b);return t}getResolvedTitleForRoute(e){return e.data[kn]}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:()=>g(Is)})}return n})();var Is=(()=>{class n extends Br{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static ɵfac=function(t){return new(t||n)(z(nd$1))};static ɵprov=Q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var ht=new T(``,{factory:()=>({})});var wt=new T(``);var ki=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(zD);loadComponent(e,t){return Wi$3(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=Wi$3(this,null,function*(){try{let a=yield Ns(UF(yield ts(ur$1(e,()=>t.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=Wi$3(this,null,function*(){try{let o=yield Ps(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();function Ps(n,i,e,t){return Wi$3(this,null,function*(){let o=yield Ns(UF(yield ts(ur$1(e,()=>n.loadChildren())))),a;o instanceof Ap||Array.isArray(o)?a=o:a=yield i.compileModuleAsync(o),t&&t(n);let l,s,h;return Array.isArray(a)?s=a:(l=a.create(e).injector,h=a,s=l.get(wt,[],{optional:!0,self:!0}).flat()),{routes:s.map(Lr),injector:l,factory:h}})}function Ns(n){return Wi$3(this,null,function*(){return n})}var Mi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:()=>g(dd)})}return n})();var dd=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var Ur=new T(``);var Fr=new T(``);function As(n,i,e){let t=n.get(Fr),r=n.get(Gt$2);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),l=r.startViewTransition(()=>(o(),hd(n)));l.updateCallbackDone.catch(d=>{}),l.ready.catch(d=>{}),l.finished.catch(d=>{});let{onViewTransitionCreated:s}=t;return s&&ur$1(n,()=>s({transition:l,from:i,to:e})),a}function hd(n){return new Promise(i=>{Sy({read:()=>setTimeout(i)},{injector:n})})}var Ls=new T(``);var ud=()=>{};var jr=new T(``);var Ei=(()=>{class n{currentNavigation=Ze$3(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Ze$3(null);events=new W;transitionAbortWithErrorSubject=new W;configLoader=g(ki);environmentInjector=g(he$1);destroyRef=g(Y$1);urlSerializer=g(dt);rootContexts=g(Rt);location=g(xr$1);inputBindingEnabled=g(En,{optional:!0})!==null;titleStrategy=g(Br);options=g(ht,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||gc;urlHandlingStrategy=g(Mi);createViewTransition=g(Ur,{optional:!0});navigationErrorHandler=g(jr,{optional:!0});activatedRouteInjectorFeature=g(Ls,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Bn$3(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new pi(r)),t=r=>this.events.next(new mi(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;tl$1(()=>{this.transitions?.next(j$1(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new wt$3(null),this.transitions.pipe(qn(t=>t!==null),Ct$2(t=>{let r=!0,o=!1,a=new AbortController,l=()=>!o&&this.currentTransition?.id===t.id;return Bn$3(t).pipe(Ct$2(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,``,re.SupersededByNewNavigation),_e$1;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?j$1(_({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),p=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&p!==`reload`)return this.events.next(new Fe(s.id,this.urlSerializer.serialize(s.rawUrl),``,Ht.IgnoredSameUrlNavigation)),s.resolve(!1),_e$1;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Bn$3(s).pipe(Ct$2(g=>(this.events.next(new Ue(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?_e$1:Promise.resolve(g))),od(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),go$1(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=g.urlAfterRedirects,M)),this.events.next(new yn)}),Ct$2(g=>le$2(t.routesRecognizeHandler.deferredHandle??Bn$3(void 0)).pipe(ie(()=>g))),go$1(()=>{let g=new bn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:M,source:T,restoredState:W,extras:Je}=s,qi=new Ue(g,this.urlSerializer.serialize(M),T,W);this.events.next(qi);let Un=gs(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=j$1(_({},s),{targetSnapshot:Un,urlAfterRedirects:M,extras:j$1(_({},Je),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pt=>(pt.finalUrl=M,pt)),Bn$3(t)}else return this.events.next(new Fe(s.id,this.urlSerializer.serialize(s.extractedUrl),``,Ht.IgnoredByUrlHandlingStrategy)),s.resolve(!1),_e$1}),ie(s=>{let d=new ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=t=j$1(_({},s),{guards:Cc(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Ic(s=>this.events.next(s)),Ct$2(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Ci(this.urlSerializer,s.guardsResult);let d=new di(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!l())return _e$1;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,re.GuardRejected),_e$1;if(s.guards.canActivateChecks.length===0)return Bn$3(s);let h=new hi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!l())return _e$1;let p=!1;return Bn$3(s).pipe(ad(this.paramsInheritanceStrategy),go$1({next:()=>{p=!0;let g=new ui(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{p||this.cancelNavigationTransition(s,``,re.NoDataFromResolver)}}))}),Za(s=>{let d=p=>{let g=[];if(p.routeConfig?._loadedComponent)p.component=p.routeConfig?._loadedComponent;else if(p.routeConfig?.loadComponent){let M=p._environmentInjector;g.push(this.configLoader.loadComponent(M,p.routeConfig).then(T=>{p.component=T}))}for(let M of p.children)g.push(...d(M));return g},h=d(s.targetSnapshot.root);return h.length===0?Bn$3(s):le$2(Promise.all(h).then(()=>s))}),Ct$2(s=>{let{newlyCreatedRoutes:d,state:h}=_c(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=j$1(_({},s),{targetRouterState:h,newlyCreatedRoutes:d}),this.currentNavigation.update(p=>(p.targetRouterState=h,p)),Bn$3(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),Za(()=>this.afterPreactivation()),Ct$2(()=>{let{currentSnapshot:s,targetSnapshot:d}=t,h=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return h?le$2(h).pipe(ie(()=>t)):Bn$3(t)}),on$2(1),Ct$2(s=>{r=!1,this.events.next(new Vt);let d=t.beforeActivateHandler.deferredHandle;return d?le$2(d.then(()=>s)):Bn$3(s)}),go$1(s=>{new Mr(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(o=!0,this.currentNavigation.update(d=>(d.abort=ud,d)),this.lastSuccessfulNavigation.set(tl$1(this.currentNavigation)),this.events.next(new de(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),es$2(ks(a.signal).pipe(qn(()=>!o&&r),go$1(()=>{this.cancelNavigationTransition(t,a.signal.reason+``,re.Aborted)}))),go$1({complete:()=>{o=!0}}),es$2(this.transitionAbortWithErrorSubject.pipe(go$1(s=>{throw s}))),jg(()=>{a.abort(),o||this.cancelNavigationTransition(t,``,re.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Wn(s=>{if(o=!0,Xa(t),this.destroyed)return t.resolve(!1),_e$1;if(Rs(s))this.events.next(new fe(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),yc(s)?this.events.next(new Gt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let d=new Xe(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let h=ur$1(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(h instanceof $t){let{message:p,cancellationCode:g}=Ci(this.urlSerializer,h);this.events.next(new fe(t.id,this.urlSerializer.serialize(t.extractedUrl),p,g)),this.events.next(new Gt(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return _e$1}))}))}cancelNavigationTransition(e,t,r){Xa(e);let o=new fe(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=tl$1(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();function pd(n){return n!==Ut}function Xa(n){if(n.newlyCreatedRoutes)for(let i of n.newlyCreatedRoutes)i._localInjector?.destroy()}var Bs=new T(``);var Us=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:()=>g(md)})}return n})();var Ri=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}};var md=(()=>{class n extends Ri{static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var Di=(()=>{class n{urlSerializer=g(dt);options=g(ht,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=g(xr$1);urlHandlingStrategy=g(Mi);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new ce;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ce?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=gs(null,g(he$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:()=>g(fd)})}return n})();var fd=(()=>{class n extends Di{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type===`popstate`&&setTimeout(()=>{e(t.url,t.state,`popstate`,{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Ue?this.updateStateMemento():e instanceof Fe?this.commitTransition(t):e instanceof bn?this.urlUpdateStrategy===`eager`&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Vt?(this.commitTransition(t),this.urlUpdateStrategy===`deferred`&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof fe&&!fs(e)?this.restoreHistory(t):e instanceof Xe?this.restoreHistory(t,!0):e instanceof de&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=_(_({},l),this.generateNgRouterState(o,s,t));this.location.replaceState(e,``,d)}else{let s=_(_({},l),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,``,s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution===`computed`){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution===`computed`?_({navigationId:e,ɵrouterPageId:t},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();function Ti(n,i){n.events.pipe(qn(e=>e instanceof de||e instanceof fe||e instanceof Xe||e instanceof Fe),ie(e=>e instanceof de||e instanceof Fe?0:(e instanceof fe?e.code===re.Redirect||e.code===re.SupersededByNewNavigation:!1)?2:1),qn(e=>e!==2),on$2(1)).subscribe(()=>{i()})}var Re=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(LE);stateManager=g(Di);options=g(ht,{optional:!0})||{};pendingTasks=g(pt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=g(Ei);urlSerializer=g(dt);location=g(xr$1);urlHandlingStrategy=g(Mi);injector=g(he$1);_events=new W;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(Us);injectorCleanup=g(Bs,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=g(wt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(En,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new $;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=tl$1(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof fe&&t.code!==re.Redirect&&t.code!==re.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof de)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Gt){let a=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),s=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy===`eager`||pd(r.source)},a);this.scheduleNavigation(l,Ut,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}mc(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ut,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,l=r?.ɵrouterUrl??e;if(r?.ɵrouterUrl&&(o=j$1(_({},o),{browserUrl:e})),r){let d=_({},r);delete d.navigationId,delete d.ɵrouterPageId,delete d.ɵrouterUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(l);this.scheduleNavigation(s,t,a,o).catch(d=>{this.disposed||this.injector.get(Qe$3)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return tl$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Lr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:l,preserveFragment:s}=t,d=s?this.currentUrlTree.fragment:a,h=null;switch(l??this.options.defaultQueryParamsHandling){case`merge`:h=_(_({},this.currentUrlTree.queryParams),o);break;case`preserve`:h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{p=hs(r?r.snapshot:this.routerState.snapshot.root)}catch(g){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),p=this.currentUrlTree.root}return us(p,e,h,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=ct(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ut,null,t)}navigate(e,t={skipLocationChange:!1}){return gd(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(So$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,t){let r;if(t===!0?r=_({},Or):t===!1?r=_({},jt):r=_(_({},jt),t),ct(e))return vr(this.currentUrlTree,e,r);let o=this.parseUrl(e);return vr(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let l,s,d;a?(l=a.resolve,s=a.reject,d=a.promise):d=new Promise((p,g)=>{l=p,s=g});let h=this.pendingTasks.add();return Ti(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();function gd(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new S(4008,!1)}var _d=(()=>{class n{router=g(Re);stateManager=g(Di);fragment=Ze$3(``);queryParams=Ze$3({});path=Ze$3(``);serializer=g(dt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof de&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new ce(t)))}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var qt=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=g(new Ch(`href`),{optional:!0});reactiveHref=YD(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return tl$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return tl$1(this._target)}_target=Ze$3(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return tl$1(this._queryParams)}_queryParams=Ze$3(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return tl$1(this._fragment)}_fragment=Ze$3(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return tl$1(this._queryParamsHandling)}_queryParamsHandling=Ze$3(void 0);set state(e){this._state.set(e)}get state(){return tl$1(this._state)}_state=Ze$3(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return tl$1(this._info)}_info=Ze$3(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return tl$1(this._relativeTo)}_relativeTo=Ze$3(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return tl$1(this._preserveFragment)}_preserveFragment=Ze$3(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return tl$1(this._skipLocationChange)}_skipLocationChange=Ze$3(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return tl$1(this._replaceUrl)}_replaceUrl=Ze$3(!1);browserUrl=GF(void 0);isAnchorElement;onChanges=new W;applicationErrorHandler=g(Qe$3);options=g(ht,{optional:!0});reactiveRouterState=g(_d);constructor(e,t,r,o,a,l){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=l;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Ze$3(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ct(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,t,r,o,a){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),d=_({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,d)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=Hi$2(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:ct(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return tl$1(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(t){return new(t||n)(He$1(Re),He$1(je),sf(`tabindex`),He$1(gi$3),He$1(mt),He$1(Me$1))};static ɵdir=Bc$1({type:n,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(t,r){t&1&&Qp(`click`,function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Gc$1(`href`,r.reactiveHref(),cy)(`target`,r._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,YF],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,YF],replaceUrl:[2,`replaceUrl`,`replaceUrl`,YF],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Gd$1]})}return n})();var zr=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new De$1;link=g(qt,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof de&&this.update()})}ngAfterContentInit(){Bn$3(this.links.changes,Bn$3(null)).pipe(Un$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=le$2(e).pipe(Un$1()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let t=Array.isArray(e)?e:e.split(` `);this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=this.routerLinkActiveOptions;if(t===null)return()=>!1;let r;return t===void 0?r=_({},jt):vd(t)?r=t:t.exact??!1?r=_({},Or):r=_({},jt),o=>{let a=o.urlTree;return a?tl$1(Ir(a,e,r)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(t){return new(t||n)(He$1(Re),He$1(mt),He$1(gi$3),He$1(il$1))};static ɵdir=Bc$1({type:n,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(t,r,o){if(t&1&&Yp(o,qt,5),t&2){let a;rD(a=oD())&&(r.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Gd$1]})}return n})();function vd(n){let i=n;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var Tn=class{};var Fs=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(qn(e=>e instanceof de),Og(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=Rp(o.providers,e,``));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let l=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(l,o.children??o._loadedRoutes))}return le$2(r).pipe(Un$1())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return Bn$3(null);let r;t.loadChildren&&t.canLoad===void 0?r=le$2(this.loader.loadChildren(e,t)):r=Bn$3(null);let o=r.pipe($e$1(a=>a===null?Bn$3(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent)return le$2([o,this.loader.loadComponent(e,t)]).pipe(Un$1());else return o})}static ɵfac=function(t){return new(t||n)(z(Re),z(he$1),z(Tn),z(ki))};static ɵprov=Q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var js=new T(``);var bd=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ut;restoredId=0;store={};isHydrating=g(Tv,{optional:!0})??!1;urlSerializer=g(dt);zone=g(K$1);viewportScroller=g(Ec$1);transitions=g(Ei);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&g(Pr$2).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ue?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof de?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Fe&&e.code===Ht.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof zt)||e.scrollBehavior===`manual`)return;let t={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let r=tl$1(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Wi$3(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new zt(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,t,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(t){VI()};static ɵprov=Q$1({token:n,factory:n.ɵfac})}return n})();function Vr(n,...i){return de$1([{provide:wt,multi:!0,useValue:n},{provide:je,useFactory:Hs},{provide:Hp,multi:!0,useFactory:zs},i.map(e=>e.ɵproviders)])}function Hs(){return g(Re).routerState.root}function xn(n,i){return{ɵkind:n,ɵproviders:i}}function zs(){let n=g(ue$2);return i=>{let e=n.get(Pr$2);if(i!==e.components[0])return;let t=n.get(Re),r=n.get(Vs);n.get(Gr)===1&&t.initialNavigation(),n.get($s,null,{optional:!0})?.setUpPreloading(),n.get(js,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Vs=new T(``,{factory:()=>new W});var Gr=new T(``,{factory:()=>1});function Gs(){return xn(2,[{provide:wv,useValue:!0},{provide:Gr,useValue:0},bE(()=>{let i=g(ue$2);return i.get(hs$1,Promise.resolve()).then(()=>new Promise(t=>{let r=i.get(Re),o=i.get(Vs);Ti(r,()=>{t(!0)}),i.get(Ei).afterPreactivation=()=>(t(!0),o.closed?Bn$3(void 0):o),r.initialNavigation()}))})])}function Ws(){return xn(3,[bE(()=>{g(Re).setUpLocationChangeListener()}),{provide:Gr,useValue:2}])}var $s=new T(``);function Ys(n){return xn(0,[{provide:$s,useExisting:Fs},{provide:Tn,useExisting:n}])}function Ks(n={}){return xn(8,[{provide:En,useFactory:()=>new ys(n)}])}function qs(n){Xe$3(`NgRouterViewTransitions`);return xn(9,[{provide:Ur,useValue:As},{provide:Fr,useValue:_({skipNextTransition:!!n?.skipInitialTransition},n)}])}var Zs=[xr$1,{provide:dt,useClass:Ze},Re,Rt,{provide:je,useFactory:Hs},ki];var Wr=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[Zs,[],{provide:wt,multi:!0,useValue:e},[],t?.errorHandler?{provide:jr,useValue:t.errorHandler}:[],{provide:ht,useValue:t||{}},t?.useHash?Cd():Sd(),yd(),t?.preloadingStrategy?Ys(t.preloadingStrategy).ɵproviders:[],t?.initialNavigation?Rd(t):[],t?.bindToComponentInputs?Ks(typeof t.bindToComponentInputs==`object`?t.bindToComponentInputs:{}).ɵproviders:[],t?.enableViewTransitions?qs().ɵproviders:[],wd()]}}static forChild(e){return{ngModule:n,providers:[{provide:wt,multi:!0,useValue:e}]}}static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({})}return n})();function yd(){return{provide:js,useFactory:()=>{let n=g(Ec$1),i=g(ht);return i.scrollOffset&&n.setOffset(i.scrollOffset),new bd(i)}}}function Cd(){return{provide:Me$1,useClass:ms$1}}function Sd(){return{provide:Me$1,useClass:Lr$1}}function Rd(n){return[n.initialNavigation===`disabled`?Ws().ɵproviders:[],n.initialNavigation===`enabledBlocking`?Gs().ɵproviders:[]]}var Hr=new T(``);function wd(){return[{provide:Hr,useFactory:zs},{provide:Hp,multi:!0,useExisting:Hr}]}var Xs=[{path:`about`,loadComponent:()=>import(`./chunk-BW0DU6Wa.js`).then(n=>n.AboutComponent),providers:[O0(`about`)]},{path:`projects`,loadComponent:()=>import(`./chunk-DQ-jTaI5.js`).then(n=>n.ProjectsComponent),providers:[O0(`projects`)]},{path:`artwork`,loadComponent:()=>import(`./chunk-BEi_OjQx.js`).then(n=>n.ArtworkComponent),providers:[O0(`artwork`)]},{path:`contact`,loadComponent:()=>import(`./chunk-B5WEORAB.js`).then(n=>n.ContactComponent),providers:[O0(`contact`)]},{path:``,redirectTo:`about`,pathMatch:`full`}];var xi=class n{http=g(li$1);getTranslation(i){return this.http.get(`/i18n/${i}.json`)}static ɵfac=function(e){return new(e||n)};static ɵprov=Q$1({token:n,factory:n.ɵfac,providedIn:`root`})};function Md(n,i,e){let t=m0(n);return t!==null?new Intl.NumberFormat(i,e).format(t):``}function Ed(n,i,e){return Dd(n)?new Intl.DateTimeFormat(i,e).format(n):``}function Dd(n){return n instanceof Date&&!isNaN(n)}var xd={localeConfig:{global:{},localeBased:{}},defaultLocale:`en-US`,defaultCurrency:`USD`,localeToCurrencyMapping:{"aa-DJ":`DJF`,"aa-ER":`ERN`,"aa-ET":`ETB`,"ab-GE":`ETB`,"ab-TR":`ETB`,"af-BW":`ETB`,"af-NA":`ETB`,"af-ZA":`ZAR`,"ak-GH":`ZAR`,"am-ET":`ETB`,"am-IL":`ETB`,"ar-AE":`AED`,"ar-AR":`AED`,"ar-BH":`BHD`,"ar-CM":`BHD`,"ar-CY":`BHD`,"ar-DJ":`BHD`,"ar-DZ":`DZD`,"ar-EG":`EGP`,"ar-EH":`EGP`,"ar-ER":`EGP`,"ar-IL":`EGP`,"ar-IQ":`IQD`,"ar-IR":`IQD`,"ar-JO":`JOD`,"ar-KE":`JOD`,"ar-KM":`JOD`,"ar-KW":`KWD`,"ar-LB":`LBP`,"ar-LY":`LYD`,"ar-MA":`MAD`,"ar-ML":`MAD`,"ar-MR":`MAD`,"ar-NE":`MAD`,"ar-NG":`MAD`,"ar-OM":`OMR`,"ar-PS":`OMR`,"ar-QA":`QAR`,"ar-SA":`SAR`,"ar-SD":`SDD`,"ar-SS":`SDD`,"ar-SY":`SYP`,"ar-TD":`SYP`,"ar-TJ":`SYP`,"ar-TN":`TND`,"ar-TR":`TND`,"ar-YE":`YER`,"as-IN":`INR`,"av-RU":`INR`,"ay-BO":`INR`,"ay-PE":`INR`,"az-AZ":`AZM`,"ba-RU":`AZM`,"be-BY":`BYR`,"be-PL":`BYR`,"be-UA":`BYR`,"bg-BG":`BGN`,"bg-GR":`BGN`,"bg-MD":`BGN`,"bg-RO":`BGN`,"bg-TR":`BGN`,"bg-UA":`BGN`,"bi-VU":`BGN`,"bm-ML":`BGN`,"bn-BD":`BDT`,"bn-GB":`BDT`,"bn-IN":`INR`,"bn-NP":`INR`,"bo-CN":`CNY`,"bo-IN":`INR`,"bo-NP":`INR`,"br-FR":`EUR`,"bs-BA":`BAM`,"ca-AD":`EUR`,"ca-ES":`EUR`,"ca-FR":`EUR`,"ca-IT":`EUR`,"ce-RU":`EUR`,"ch-GU":`EUR`,"ch-MP":`EUR`,"co-FR":`EUR`,"cs-CZ":`CZK`,"cv-RU":`RUB`,"cy-AR":`RUB`,"cy-GB":`GBP`,"da-DE":`GBP`,"da-DK":`DKK`,"da-GL":`DKK`,"da-IS":`DKK`,"de-AT":`EUR`,"de-BE":`EUR`,"de-BR":`EUR`,"de-CA":`EUR`,"de-CH":`CHF`,"de-CZ":`CHF`,"de-DE":`EUR`,"de-DK":`EUR`,"de-HU":`EUR`,"de-IT":`EUR`,"de-KZ":`EUR`,"de-LI":`EUR`,"de-LU":`EUR`,"de-NA":`EUR`,"de-PL":`EUR`,"de-PY":`EUR`,"de-RO":`EUR`,"de-SK":`EUR`,"de-US":`EUR`,"dv-IN":`EUR`,"dv-MV":`MVR`,"dz-BT":`BTN`,"dz-IN":`BTN`,"ee-GH":`BTN`,"ee-TG":`BTN`,"el-AL":`BTN`,"el-CY":`EUR`,"el-DE":`EUR`,"el-EG":`EUR`,"el-GB":`EUR`,"el-GR":`EUR`,"el-IT":`EUR`,"el-RO":`EUR`,"el-TR":`EUR`,"el-UA":`EUR`,"en-AC":`EUR`,"en-AG":`XCD`,"en-AI":`XCD`,"en-AS":`XCD`,"en-AU":`AUD`,"en-AW":`AUD`,"en-BB":`AUD`,"en-BE":`AUD`,"en-BM":`AUD`,"en-BN":`AUD`,"en-BS":`AUD`,"en-BW":`BWP`,"en-BZ":`BWP`,"en-CA":`CAD`,"en-CC":`CAD`,"en-CK":`CAD`,"en-CM":`CAD`,"en-CN":`CAD`,"en-CX":`CAD`,"en-DE":`CAD`,"en-DG":`CAD`,"en-DM":`CAD`,"en-DO":`CAD`,"en-ES":`CAD`,"en-ET":`CAD`,"en-FI":`CAD`,"en-FJ":`CAD`,"en-FK":`CAD`,"en-FM":`CAD`,"en-FR":`CAD`,"en-GB":`GBP`,"en-GD":`GBP`,"en-GG":`GBP`,"en-GH":`GBP`,"en-GI":`GBP`,"en-GM":`GBP`,"en-GU":`GBP`,"en-GY":`GBP`,"en-HK":`HKD`,"en-HN":`HKD`,"en-IE":`EUR`,"en-IL":`EUR`,"en-IM":`EUR`,"en-IN":`INR`,"en-IO":`INR`,"en-IT":`INR`,"en-JE":`INR`,"en-JM":`INR`,"en-KE":`INR`,"en-KI":`INR`,"en-KN":`INR`,"en-KY":`INR`,"en-LB":`INR`,"en-LC":`INR`,"en-LK":`INR`,"en-LR":`INR`,"en-LS":`INR`,"en-MG":`INR`,"en-MH":`INR`,"en-MP":`INR`,"en-MS":`INR`,"en-MT":`INR`,"en-MU":`INR`,"en-MW":`INR`,"en-MY":`INR`,"en-NA":`INR`,"en-NF":`INR`,"en-NG":`NGN`,"en-NL":`NGN`,"en-NR":`NGN`,"en-NU":`NGN`,"en-NZ":`NZD`,"en-PA":`NZD`,"en-PG":`NZD`,"en-PH":`PHP`,"en-PI":`PHP`,"en-PK":`PHP`,"en-PM":`PHP`,"en-PN":`PHP`,"en-PR":`PHP`,"en-PW":`PHP`,"en-RW":`PHP`,"en-SB":`PHP`,"en-SC":`PHP`,"en-SG":`SGD`,"en-SH":`SGD`,"en-SL":`SGD`,"en-SS":`SGD`,"en-SZ":`SGD`,"en-TA":`SGD`,"en-TC":`SGD`,"en-TK":`SGD`,"en-TO":`SGD`,"en-TT":`SGD`,"en-TV":`SGD`,"en-TZ":`SGD`,"en-UD":`SGD`,"en-UG":`SGD`,"en-UM":`SGD`,"en-US":`USD`,"en-VC":`USD`,"en-VG":`USD`,"en-VI":`USD`,"en-VU":`USD`,"en-WS":`USD`,"en-ZA":`ZAR`,"en-ZM":`ZAR`,"en-ZW":`ZWD`,"eo-EO":`ZWD`,"eo-SM":`ZWD`,"es-AD":`ZWD`,"es-AR":`ARS`,"es-BO":`BOB`,"es-BZ":`BOB`,"es-CL":`CLP`,"es-CO":`COP`,"es-CR":`CRC`,"es-CU":`CRC`,"es-DE":`CRC`,"es-DO":`DOP`,"es-EA":`DOP`,"es-EC":`USD`,"es-ES":`EUR`,"es-GQ":`EUR`,"es-GT":`GTQ`,"es-HN":`HNL`,"es-IC":`HNL`,"es-LA":`HNL`,"es-MA":`HNL`,"es-MX":`MXN`,"es-NI":`NIO`,"es-PA":`PAB`,"es-PE":`PEN`,"es-PH":`PEN`,"es-PR":`USD`,"es-PY":`PYG`,"es-SV":`SVC`,"es-TT":`SVC`,"es-US":`USD`,"es-UY":`UYU`,"es-VE":`VEB`,"et-EE":`EEK`,"et-FI":`EEK`,"eu-ES":`EUR`,"eu-FR":`EUR`,"fa-AE":`EUR`,"fa-AF":`EUR`,"fa-IQ":`EUR`,"fa-IR":`IRR`,"fa-OM":`IRR`,"fa-PK":`IRR`,"fa-QA":`IRR`,"fa-TJ":`IRR`,"fb-LT":`IRR`,"ff-GN":`IRR`,"ff-MR":`IRR`,"ff-SN":`IRR`,"fi-FI":`EUR`,"fi-RU":`EUR`,"fi-SE":`EUR`,"fj-FJ":`EUR`,"fo-FO":`DKK`,"fr-AD":`DKK`,"fr-BE":`EUR`,"fr-BF":`EUR`,"fr-BI":`EUR`,"fr-BJ":`EUR`,"fr-BL":`EUR`,"fr-CA":`CAD`,"fr-CD":`CAD`,"fr-CF":`CAD`,"fr-CG":`CAD`,"fr-CH":`CHF`,"fr-CI":`CHF`,"fr-CM":`CHF`,"fr-CP":`CHF`,"fr-DJ":`CHF`,"fr-DZ":`CHF`,"fr-FR":`EUR`,"fr-GA":`EUR`,"fr-GB":`EUR`,"fr-GF":`EUR`,"fr-GN":`EUR`,"fr-GP":`EUR`,"fr-GQ":`EUR`,"fr-HT":`EUR`,"fr-IT":`EUR`,"fr-KM":`EUR`,"fr-LB":`EUR`,"fr-LU":`EUR`,"fr-MA":`EUR`,"fr-MC":`EUR`,"fr-MF":`EUR`,"fr-MG":`EUR`,"fr-ML":`EUR`,"fr-MQ":`EUR`,"fr-MR":`EUR`,"fr-MU":`EUR`,"fr-NC":`EUR`,"fr-NE":`EUR`,"fr-PF":`EUR`,"fr-PM":`EUR`,"fr-RE":`EUR`,"fr-RW":`EUR`,"fr-SC":`EUR`,"fr-SN":`EUR`,"fr-SY":`EUR`,"fr-TD":`EUR`,"fr-TF":`EUR`,"fr-TG":`EUR`,"fr-TN":`EUR`,"fr-US":`EUR`,"fr-VU":`EUR`,"fr-WF":`EUR`,"fr-YT":`EUR`,"fy-NL":`EUR`,"ga-GB":`EUR`,"ga-IE":`EUR`,"gd-GB":`GBP`,"gl-ES":`EUR`,"gl-PT":`EUR`,"gn-AR":`EUR`,"gn-BO":`EUR`,"gn-PY":`EUR`,"gu-IN":`INR`,"gu-KE":`INR`,"gv-IM":`INR`,"he-IL":`ILS`,"hi-FJ":`ILS`,"hi-IN":`INR`,"hi-NP":`INR`,"hi-UG":`INR`,"hi-ZA":`INR`,"ho-PG":`INR`,"hr-AT":`INR`,"hr-BA":`INR`,"hr-DE":`INR`,"hr-HR":`HRK`,"hr-HU":`HRK`,"hr-IT":`HRK`,"ht-HT":`HTG`,"hu-AT":`HTG`,"hu-HU":`HUF`,"hu-IL":`HUF`,"hu-RO":`HUF`,"hu-RS":`HUF`,"hu-SI":`HUF`,"hu-SK":`HUF`,"hu-UA":`HUF`,"hy-AM":`AMD`,"hy-CY":`AMD`,"hy-GE":`AMD`,"hy-IR":`AMD`,"hy-LB":`AMD`,"hy-SY":`AMD`,"hy-TR":`AMD`,"ia-SE":`AMD`,"id-ID":`IDR`,"id-NL":`IDR`,"ig-NG":`NGN`,"ii-CN":`NGN`,"ik-US":`NGN`,"is-IS":`ISK`,"it-AU":`ISK`,"it-BR":`ISK`,"it-CA":`ISK`,"it-CH":`CHF`,"it-DE":`CHF`,"it-FR":`CHF`,"it-GB":`CHF`,"it-HR":`CHF`,"it-IT":`EUR`,"it-SI":`EUR`,"it-SM":`EUR`,"it-US":`EUR`,"it-VA":`EUR`,"iu-GL":`EUR`,"ja-BR":`EUR`,"ja-JP":`JPY`,"jv-ID":`JPY`,"jv-MY":`JPY`,"ka-GE":`GEL`,"ka-IR":`GEL`,"ka-TR":`GEL`,"kg-CD":`GEL`,"ki-KE":`GEL`,"kj-NA":`GEL`,"kl-DK":`GEL`,"kl-GL":`DKK`,"km-KH":`KHR`,"kn-IN":`INR`,"ko-BR":`INR`,"ko-CN":`INR`,"ko-JP":`INR`,"ko-KP":`INR`,"ko-KR":`KRW`,"ko-US":`KRW`,"ks-GB":`KRW`,"ks-IN":`INR`,"ks-PK":`INR`,"ku-TR":`TRY`,"kw-GB":`GBP`,"la-VA":`GBP`,"lb-LU":`GBP`,"lg-UG":`UGX`,"li-NL":`EUR`,"ln-CD":`EUR`,"ln-CG":`EUR`,"lo-LA":`LAK`,"lt-LT":`LTL`,"lu-CD":`LTL`,"lv-LV":`LVL`,"mg-MG":`MGA`,"mh-MH":`MGA`,"mi-NZ":`NZD`,"mk-AL":`NZD`,"mk-GR":`NZD`,"mk-MK":`MKD`,"ml-AE":`MKD`,"ml-BH":`MKD`,"ml-GB":`MKD`,"ml-IL":`MKD`,"ml-IN":`INR`,"ml-MY":`INR`,"ml-QA":`INR`,"ml-SG":`INR`,"mr-IN":`INR`,"ms-BN":`INR`,"ms-CC":`INR`,"ms-ID":`INR`,"ms-MY":`MYR`,"ms-SG":`MYR`,"mt-MT":`EUR`,"my-BD":`EUR`,"my-MM":`MMK`,"na-NR":`MMK`,"nb-NO":`NOK`,"nb-SJ":`NOK`,"nd-ZW":`NOK`,"ne-BT":`NOK`,"ne-IN":`NOK`,"ne-NP":`INR`,"ng-NA":`INR`,"nl-AW":`AWG`,"nl-BE":`EUR`,"nl-DE":`EUR`,"nl-FR":`EUR`,"nl-NL":`EUR`,"nl-SR":`EUR`,"nn-NO":`NOK`,"nr-ZA":`ZAR`,"nv-US":`ZAR`,"ny-MW":`ZAR`,"ny-MZ":`ZAR`,"ny-ZM":`ZAR`,"ny-ZW":`ZAR`,"oc-FR":`EUR`,"om-ET":`ETB`,"om-KE":`KES`,"om-SO":`KES`,"or-IN":`INR`,"os-GE":`INR`,"pa-IN":`INR`,"pl-CZ":`INR`,"pl-DE":`INR`,"pl-IL":`INR`,"pl-PL":`PLN`,"pl-RO":`PLN`,"pl-SK":`PLN`,"pl-UA":`PLN`,"ps-AE":`PLN`,"ps-AF":`AFN`,"ps-IR":`AFN`,"ps-PK":`AFN`,"pt-AG":`AFN`,"pt-AO":`AFN`,"pt-BR":`BRL`,"pt-CV":`BRL`,"pt-FR":`BRL`,"pt-GW":`BRL`,"pt-MO":`BRL`,"pt-MZ":`BRL`,"pt-PT":`EUR`,"pt-ST":`EUR`,"pt-TL":`EUR`,"qu-BO":`EUR`,"qu-PE":`EUR`,"rm-CH":`EUR`,"rn-BI":`EUR`,"ro-HU":`EUR`,"ro-IL":`EUR`,"ro-MD":`EUR`,"ro-RO":`RON`,"ro-RS":`RON`,"ro-UA":`RON`,"ru-BY":`RON`,"ru-CN":`RON`,"ru-DE":`RON`,"ru-EE":`RON`,"ru-FI":`RON`,"ru-GE":`RON`,"ru-IL":`RON`,"ru-KG":`RON`,"ru-KZ":`RON`,"ru-LT":`RON`,"ru-LV":`RON`,"ru-MD":`RON`,"ru-MN":`RON`,"ru-RU":`RUB`,"ru-SJ":`RUB`,"ru-TM":`RUB`,"ru-UA":`UAH`,"ru-US":`UAH`,"ru-UZ":`UAH`,"rw-CD":`UAH`,"rw-RW":`RWF`,"rw-UG":`RWF`,"sa-IN":`INR`,"se-FI":`INR`,"se-NO":`NOK`,"se-SE":`NOK`,"sg-CF":`NOK`,"si-LK":`LKR`,"sk-HU":`LKR`,"sk-RS":`LKR`,"sk-SK":`EUR`,"sl-AT":`EUR`,"sl-HU":`EUR`,"sl-IT":`EUR`,"sl-SI":`EUR`,"sm-AS":`EUR`,"sm-WS":`EUR`,"sn-ZW":`EUR`,"so-DJ":`DJF`,"so-ET":`ETB`,"so-KE":`ETB`,"so-SO":`SOS`,"sq-AL":`ALL`,"sq-GR":`ALL`,"sq-ME":`ALL`,"sq-MK":`MKD`,"sq-RS":`MKD`,"sq-TR":`MKD`,"sr-RS":`RSD`,"ss-LS":`RSD`,"ss-SZ":`RSD`,"ss-ZA":`ZAR`,"st-LS":`ZAR`,"st-ZA":`ZAR`,"su-ID":`ZAR`,"sv-AX":`ZAR`,"sv-FI":`EUR`,"sv-SE":`SEK`,"sw-BI":`SEK`,"sw-CD":`SEK`,"sw-KE":`SEK`,"sw-MZ":`SEK`,"sw-SO":`SEK`,"sw-TZ":`SEK`,"sw-UG":`SEK`,"sw-YT":`SEK`,"sw-ZA":`SEK`,"ta-IN":`INR`,"ta-LK":`INR`,"ta-MU":`INR`,"ta-MY":`INR`,"ta-RE":`INR`,"ta-SG":`INR`,"te-IN":`INR`,"th-TH":`THB`,"ti-ER":`ERN`,"ti-ET":`ETB`,"ti-IL":`ETB`,"tk-AF":`ETB`,"tk-IR":`ETB`,"tk-TM":`TMM`,"tl-PH":`PHP`,"tl-US":`PHP`,"tn-BW":`PHP`,"tn-NA":`PHP`,"tn-ZA":`ZAR`,"tn-ZW":`ZAR`,"to-TO":`ZAR`,"tr-BG":`ZAR`,"tr-CY":`TRY`,"tr-DE":`TRY`,"tr-GR":`TRY`,"tr-MK":`TRY`,"tr-NL":`TRY`,"tr-RO":`TRY`,"tr-TR":`TRY`,"tr-UA":`TRY`,"tr-UZ":`TRY`,"ts-MZ":`TRY`,"ts-SZ":`TRY`,"ts-ZA":`ZAR`,"tt-RU":`RUB`,"ty-PF":`RUB`,"uk-PL":`RUB`,"uk-SK":`RUB`,"uk-UA":`UAH`,"ur-IN":`UAH`,"ur-MU":`UAH`,"ur-PK":`PKR`,"ve-ZA":`ZAR`,"ve-ZW":`ZAR`,"vi-CN":`ZAR`,"vi-US":`ZAR`,"vi-VN":`VND`,"wa-BE":`EUR`,"xh-LS":`EUR`,"xh-ZA":`ZAR`,"yi-UA":`ZAR`,"yo-BJ":`ZAR`,"yo-NG":`NGN`,"za-CN":`NGN`,"zh-CN":`CNY`,"zh-HK":`HKD`,"zh-TW":`TWD`,"zu-LS":`TWD`,"zu-MW":`TWD`,"zu-MZ":`TWD`,"zu-SZ":`TWD`,"zu-ZA":`ZAR`},langToLocaleMapping:{}};var Od=new T(``);var Id=new T(``);var Pd=new T(``);var Nd=new T(``);var Ad=new T(``);var Ld=new T(``);var Bd=new T(``);var $r=class{transform(i,e,t){return Ed(i,e,t)}};var Yr=class{transform(i,e,t,r){return Md(i,t,j$1(_({},r),{style:e}))}};function Qs(n){let i=_(_({},xd),n);return[Ud(i.localeConfig),Hd(i.defaultLocale),zd(i.defaultCurrency),Fd(i.langToLocaleMapping),jd(i.localeToCurrencyMapping),Vd($r),Gd(Yr)]}function Ud(n){return de$1([{provide:Nd,useValue:n}])}function Fd(n){return de$1([{provide:Pd,useValue:n}])}function jd(n){return de$1([{provide:Ad,useValue:n}])}function Hd(n){return de$1([{provide:Od,useValue:n}])}function zd(n){return de$1([{provide:Id,useValue:n}])}function Vd(n){return de$1([{provide:Ld,useClass:n}])}function Gd(n){return de$1([{provide:Bd,useClass:n}])}var Js=new T(``);var el=new T(``);var Wd=(()=>{class n{service=g(OT);storage=g(Js);config=g(el);subscription=null;storageKey=this.config.storageKey||`translocoLang`;constructor(){Wh$1()&&this.init()}getCachedLang(){return Wh$1()?this.storage.getItem(this.storageKey):null}clear(){Wh$1()&&this.storage.removeItem(this.storageKey)}updateStorageOnLangChange(){return this.service.langChanges$.pipe($g(1)).subscribe(e=>{this.save(e)})}init(){this.setActiveLang(),this.subscription?.unsubscribe(),this.subscription=this.updateStorageOnLangChange()}setActiveLang(){let e=this.storage.getItem(this.storageKey),t=this.service.config.defaultLang,r=e||t;if(kh$1(this.config.getLangFn)){let o=k0(),a=UT();r=this.config.getLangFn({browserLang:o,defaultLang:t,cultureLang:a,cachedLang:e})}r&&this.service.setActiveLang(r)}save(e){this.storage.setItem(this.storageKey,e)}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}static ɵfac=function(t){return new(t||n)};static ɵprov=Q$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var $d=36e5;var Yd=720;function tl(n=Yd){return{getItem(i){let e=encodeURIComponent(i),r=new RegExp(`(?:^`+e+`|;\\s*`+e+`)=(.*?)(?:;|$)`,`g`).exec(document.cookie);return r?decodeURIComponent(r[1]):null},setItem(i,e){let t=encodeURIComponent(i),r=new Date;r.setTime(r.getTime()+n*$d),document.cookie=`${t}=${encodeURIComponent(e)};expires=${r.toUTCString()};path=/`},removeItem(){}}}function Kd(){}function nl(e){var t=e,{storage:n}=t;return de$1([{provide:el,useValue:qi$1(t,[`storage`])??{}},{provide:Vi$2,useFactory:()=>Kd,multi:!0,deps:[Wd]},_({provide:Js},n)])}var il={providers:[Am(),QF({eventCoalescing:!0}),Vr(Xs),Do(Eo()),Do(Eo()),R0({config:{availableLangs:[`en`,`pt`],defaultLang:`en`,reRenderOnLangChange:!0,prodMode:!t0(),flatten:{aot:!t0()}},loader:xi}),Qs({langToLocaleMapping:{en:`en-US`,pt:`pt-BR`}}),nl({storage:{useValue:tl()}})]};var Zd=(n,i)=>i.id;function Xd(n,i){if(n&1&&Gp(0,`mat-icon`,13),n&2){let e=JE().$implicit;Up(`svgIcon`,e.id.toString()),Gc$1(`aria-label`,e.label+` icon`)}}function Qd(n,i){if(n&1&&Gp(0,`mat-icon`,14),n&2){let e=JE().$implicit;Gc$1(`aria-label`,e.label+` icon`)}}function Jd(n,i){if(n&1&&(Ci$2(0,`a`,12),VE(1,Xd,1,2,`mat-icon`,13)(2,Qd,1,1,`mat-icon`,14),Ci$2(3,`span`,15),_D(4),Wc$1()()),n&2){let e=i.$implicit,t=JE(3);Up(`href`,e.url,Rf)(`matButton`,e.style??t.socialButtonStyle()),Gc$1(`target`,`_blank`)(`aria-label`,e.label),Jy(),HE(e.icon?1:2),Jy(3),lh$1(e.label)}}function eh(n,i){if(n&1&&(Ci$2(0,`div`,11),UE(1,Jd,5,6,`a`,12,Zd),Wc$1()),n&2){let e=i.$implicit,t=i.$index;nh(`grid-template-columns`,`repeat(`+e.length+`, 1fr)`),Gc$1(`aria-label`,`Social row `+(t+1)),Jy(),GE(e)}}function th(n,i){if(n&1&&(Gp(0,`mat-divider`),Ci$2(1,`nav`,8)(2,`div`,9),UE(3,eh,3,3,`div`,10,BE),Wc$1()()),n&2){let e=JE();Jy(),rh$1(`many-links`,e.socialItems().length>e.maxExpandedLinks()),Jy(2),GE(e.socialRows())}}var Oi=class n{constructor(i,e){this.iconRegistry=i;this.sanitizer=e;va$1(()=>{let t=this.socialItems();for(let r of t){if(!r.icon)continue;let o=r.id?.toString()??r.url;if(this.registered.has(o))continue;let a=r.icon.endsWith(`.svg`)?r.icon:`${r.icon}.svg`;this.iconRegistry.addSvgIcon(o,this.sanitizer.bypassSecurityTrustResourceUrl(a)),this.registered.add(o)}})}iconRegistry;sanitizer;name=GF.required();avatarSrc=GF.required();nickname=GF.required();role=GF.required();bio=GF.required();maxExpandedLinks=GF(5);github=GF();twitter=GF();linkedin=GF();instagram=GF();facebook=GF();socialButtonStyle=GF(`filled`);customWebsites=GF([]);socialItems=Hi$2(()=>{let i=[];this.github()&&i.push({id:`github`,label:`GitHub`,url:`https://www.github.com/${this.github()}`,icon:`icons/github.svg`}),this.linkedin()&&i.push({id:`linkedin`,label:`LinkedIn`,url:`https://www.linkedin.com/in/${this.linkedin()}`,icon:`icons/linkedin.svg`}),this.twitter()&&i.push({id:`twitter`,label:`Twitter ("X")`,url:`https://www.x.com/${this.twitter()}`,icon:`icons/twitter.svg`}),this.instagram()&&i.push({id:`instagram`,label:`Instagram`,url:`https://www.instagram.com/${this.instagram()}`,icon:`icons/instagram.svg`}),this.facebook()&&i.push({id:`facebook`,label:`Facebook`,url:`https://www.facebook.com/${this.facebook()}`,icon:`icons/facebook.svg`});for(let e of this.customWebsites()??[])i.push({id:e.id??e.url,label:e.label,url:e.url,icon:e.icon,style:e.style});return i});socialRows=Hi$2(()=>{let i=this.socialItems(),e=i.length;if(e===0)return[];let r=Math.max(1,Math.ceil(e/3)),o=Math.floor(e/r),a=e%r,l=[],s=0;for(let d=0;d<r;d++){let h=o+(d<a?1:0);l.push(i.slice(s,s+h)),s+=h}return l});registered=new Set;static ɵfac=function(e){return new(e||n)(He$1(ve),He$1(wn$2))};static ɵcmp=Op({type:n,selectors:[[`pf-profile-sidebar`]],inputs:{name:[1,`name`],avatarSrc:[1,`avatarSrc`],nickname:[1,`nickname`],role:[1,`role`],bio:[1,`bio`],maxExpandedLinks:[1,`maxExpandedLinks`],github:[1,`github`],twitter:[1,`twitter`],linkedin:[1,`linkedin`],instagram:[1,`instagram`],facebook:[1,`facebook`],socialButtonStyle:[1,`socialButtonStyle`],customWebsites:[1,`customWebsites`]},decls:15,vars:11,consts:[[`role`,`complementary`,1,`card`,`sidebar-card`,3,`aria-label`],[1,`card-inner`],[1,`personal-data`],[1,`name`],[`width`,`512`,`height`,`512`,`priority`,``,1,`avatar`,3,`ngSrc`,`alt`],[1,`nickname`],[1,`role`],[1,`bio`],[`aria-label`,`Social links`,1,`social`],[1,`social-rows`],[`role`,`group`,1,`social-row`,3,`gridTemplateColumns`],[`role`,`group`,1,`social-row`],[`rel`,`noopener noreferrer`,1,`social-link`,3,`href`,`matButton`],[`aria-hidden`,`false`,3,`svgIcon`],[`fontIcon`,`open_in_new`,`aria-hidden`,`false`],[1,`social-label`]],template:function(e,t){e&1&&(Ci$2(0,`aside`,0),$D(1,`transloco`),Ci$2(2,`div`,1)(3,`div`,2)(4,`h1`,3),_D(5),Wc$1(),Gp(6,`img`,4),Ci$2(7,`h4`,5),_D(8),Wc$1(),Ci$2(9,`h3`,6),_D(10),Wc$1()(),Ci$2(11,`div`,7)(12,`p`),_D(13),Wc$1()(),VE(14,th,5,2),Wc$1()()),e&2&&($p(`aria-label`,LD(GD(1,9,`profile-summary`))),Jy(5),lh$1(t.name()),Jy(),Up(`ngSrc`,t.avatarSrc())(`alt`,t.name()),Jy(2),lh$1(t.nickname()),Jy(2),lh$1(t.role()),Jy(3),lh$1(t.bio()),Jy(),HE(t.socialItems()?14:-1))},dependencies:[bc$1,aa,f,u,Fa,Ca,Qa,Ga,A0],styles:[`.avatar[_ngcontent-%COMP%]{border-radius:100%;border:.075rem solid var(--%NS%mat-sys-outline-variant);object-fit:cover;width:75%;height:auto;margin:.75rem 0 .25rem}.social-rows[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;gap:.5rem}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:0}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{align-items:center;justify-content:center;gap:.5rem;padding:.5rem;width:100%;text-decoration:none;border-radius:8px}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-label[_ngcontent-%COMP%]{display:inline-block}@media(min-width:769px)and (min-height:501px){.many-links[_ngcontent-%COMP%]   .social-rows[_ngcontent-%COMP%]{flex-direction:column}.many-links[_ngcontent-%COMP%]   .social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:grid}.many-links[_ngcontent-%COMP%]   .social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{align-items:center;justify-content:center;gap:0;padding:.5rem;width:100%;text-decoration:none;border-radius:8px}.many-links[_ngcontent-%COMP%]   .social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-label[_ngcontent-%COMP%]{display:none}}.personal-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:center}.personal-data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .personal-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .personal-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .personal-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .personal-data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .personal-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.personal-data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1.5rem;margin-top:-.2rem}.sidebar-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-rows:auto 1fr auto;min-height:0;gap:.75rem}.sidebar-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{overflow-y:auto;min-height:0;max-height:100%;-webkit-overflow-scrolling:touch;text-align:justify;word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}@media((min-width:769px)and (max-width:1280px))or ((min-height:501px)and (max-height:800px)){.avatar[_ngcontent-%COMP%]{max-width:150px}.social-rows[_ngcontent-%COMP%]{flex-direction:column}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:grid}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{align-items:center;justify-content:center;gap:0;padding:.5rem;width:100%;text-decoration:none;border-radius:8px}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-label[_ngcontent-%COMP%]{display:none}}@media(max-height:500px){.avatar[_ngcontent-%COMP%]{max-width:120px}.social-rows[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:nowrap;gap:.25rem}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{gap:0}.social-rows[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-label[_ngcontent-%COMP%]{display:none}}`]})};var On=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var Kr=class extends On{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}};var In=class extends On{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var qr=class extends On{element;constructor(i){super(),this.element=i instanceof mt?i.nativeElement:i}};var Zr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Kr)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof In)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof qr)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Pi=class extends Zr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(xn$3,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||ue$2.NULL,o=r.get(he$1,t.injector);e=XF(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var al=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({})}return n})();var rh=20;var Xr=(()=>{class n{_ngZone=g(K$1);_platform=g(Y);_renderer=g(Mr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new W;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=rh){return this._platform.isBrowser?new b$1(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Rg(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Bn$3()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(qn(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=qT(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var oh=20;var Qe=(()=>{class n{_platform=g(Y);_listeners;_viewportSize=null;_change=new W;_document=g(Gt$2);constructor(){let e=g(K$1),t=g(Mr$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen(`window`,`resize`,r),t.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=oh){return e>0?this._change.pipe(Rg(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var Pn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({})}return n})();var Qr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({imports:[Y0,Pn,Y0,Pn]})}return n})();var to=[`*`];var ah=[`tabListContainer`];var sh=[`tabList`];var lh=[`tabListInner`];var ch=[`nextPaginator`];var dh=[`previousPaginator`];var Jr=`mdc-tab-indicator--active`;var sl=`mdc-tab-indicator--no-transition`;var eo=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}};var hh=(()=>{class n{_elementRef=g(mt);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Jr);return}let r=t.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;t.classList.add(sl),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${a}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(sl),t.classList.add(Jr),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Jr)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement(`span`),r=this._inkBarContentElement=e.createElement(`span`);t.className=`mdc-tab-indicator`,r.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,YF]}})}return n})();var ll={passive:!0};var uh=650;var ph=100;function mh(n){let i=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:``}var fh=(()=>{class n{_elementRef=g(mt);_changeDetectorRef=g(il$1);_viewportRuler=g(Qe);_dir=g(QT,{optional:!0});_ngZone=g(K$1);_platform=g(Y);_sharedResizeObserver=g(_e);_injector=g(ue$2);_renderer=g(gi$3);_animationsDisabled=Ni$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new W;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new W;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new De$1;indexFocused=new De$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ll),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ll))}ngAfterContentInit(){let e=this._dir?this._dir.change:Bn$3(`ltr`),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(kg(32),es$2(this._destroyed)),r=this._viewportRuler.change(150).pipe(es$2(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Fn$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Sy(o,{injector:this._injector}),Ag(e,r,t,this._items.changes,this._itemsResized()).pipe(es$2(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!=`function`?_e$1:this._items.changes.pipe(Ug(this._items),Ct$2(e=>new b$1(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>t.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),$g(1),qn(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!yi$1(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e==`before`?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=t.elementRef.nativeElement,l,s;this._getLayoutDirection()==`ltr`?(l=o,s=l+a):(s=this._tabListInner.nativeElement.offsetWidth-o,l=s-a);let d=this.scrollDistance,h=this.scrollDistance+r;l<d?this.scrollDistance-=d-l:s>h&&(this.scrollDistance+=Math.min(s-h,l-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let r=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Gn$1(uh,ph).pipe(es$2(Ag(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,YF],selectedIndex:[2,`selectedIndex`,`selectedIndex`,KF]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var gh=new T(`MAT_TABS_CONFIG`);var no=(()=>{class n extends fh{_focusedItem=Ze$3(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new wt$3(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ze$3(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=g(gh,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new eo(this._items),this._items.changes.pipe(Ug(null),es$2(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Ug(null),es$2(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(e){return this._keyManager?.activeItem===e}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(t,r,o){if(t&1&&Yp(o,io,5),t&2){let a;rD(a=oD())&&(r._items=a)}},viewQuery:function(t,r){if(t&1&&Kp(ah,7)(sh,7)(lh,7)(ch,5)(dh,5),t&2){let o;rD(o=oD())&&(r._tabListContainer=o.first),rD(o=oD())&&(r._tabList=o.first),rD(o=oD())&&(r._tabListInner=o.first),rD(o=oD())&&(r._nextPaginator=o.first),rD(o=oD())&&(r._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(t,r){t&2&&(Gc$1(`role`,r._getRole()),nh(`--%NS%mat-tab-header-animation-duration`,r.animationDuration),rh$1(`mat-mdc-tab-header-pagination-controls-enabled`,r._showPaginationControls)(`mat-mdc-tab-header-rtl`,r._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,r.stretchTabs)(`mat-primary`,r.color!==`warn`&&r.color!==`accent`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,YF],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,YF],animationDuration:[2,`animationDuration`,`animationDuration`,mh],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,YF],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[Pp],ngContentSelectors:to,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(t,r){t&1&&(eD(),Ci$2(0,`div`,5,0),Qp(`click`,function(){return r._handlePaginatorClick(`before`)})(`mousedown`,function(a){return r._handlePaginatorPress(`before`,a)})(`touchend`,function(){return r._stopInterval()}),Gp(2,`div`,6),Wc$1(),Ci$2(3,`div`,7,1),Qp(`keydown`,function(a){return r._handleKeydown(a)}),Ci$2(5,`div`,8,2),Qp(`cdkObserveContent`,function(){return r._onContentChanges()}),Ci$2(7,`div`,9,3),tD(9),Wc$1()()(),Ci$2(10,`div`,10,4),Qp(`mousedown`,function(a){return r._handlePaginatorPress(`after`,a)})(`click`,function(){return r._handlePaginatorClick(`after`)})(`touchend`,function(){return r._stopInterval()}),Gp(12,`div`,6),Wc$1()),t&2&&(rh$1(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollBefore),Up(`matRippleDisabled`,r._disableScrollBefore||r.disableRipple),Jy(10),rh$1(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollAfter),Up(`matRippleDisabled`,r._disableScrollAfter||r.disableRipple))},dependencies:[Af,kd],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return n})();var io=(()=>{class n extends hh{_tabNavBar=g(no);elementRef=g(mt);_focusMonitor=g(To);_destroyed=new W;_isActive=!1;_tabIndex=Hi$2(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ze$3(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=g(Pn$2).getId(`mat-tab-link-`);constructor(){super(),g(Tn$2).load(Tf);let e=g(Uo,{optional:!0}),t=g(new Ch(`tabindex`),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,Ni$1()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(es$2(this._destroyed)).subscribe(r=>{this.fitInkBarToContent=r})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(t,r){t&1&&Qp(`focus`,function(){return r._handleFocus()})(`keydown`,function(a){return r._handleKeydown(a)}),t&2&&(Gc$1(`aria-controls`,r._getAriaControls())(`aria-current`,r._getAriaCurrent())(`aria-disabled`,r.disabled)(`aria-selected`,r._getAriaSelected())(`id`,r.id)(`tabIndex`,r._tabIndex())(`role`,r._getRole()),rh$1(`mat-mdc-tab-disabled`,r.disabled)(`mdc-tab--active`,r.active))},inputs:{active:[2,`active`,`active`,YF],disabled:[2,`disabled`,`disabled`,YF],disableRipple:[2,`disableRipple`,`disableRipple`,YF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:KF(e)],id:`id`},exportAs:[`matTabLink`],features:[Pp],ngContentSelectors:to,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(t,r){t&1&&(eD(),Gp(0,`span`,0)(1,`div`,1),Ci$2(2,`span`,2)(3,`span`,3),tD(4),Wc$1()()),t&2&&(Jy(),Up(`matRippleTrigger`,r.elementRef.nativeElement)(`matRippleDisabled`,r.rippleDisabled))},dependencies:[Af],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return n})();var cl=(()=>{class n{id=g(Pn$2).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(t,r){t&2&&Gc$1(`aria-labelledby`,r._activeTabId)(`id`,r.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:to,decls:1,vars:0,template:function(t,r){t&1&&(eD(),tD(0))},encapsulation:2})}return n})();var dl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({imports:[Y0]})}return n})();var vh=n=>[`/`,n];var bh=()=>({exact:!1});function yh(n,i){if(n&1){let e=YE();Ci$2(0,`a`,7,1),Qp(`click`,function(){let r=Pu(e).$implicit,o=JE();return Fu(o.activeLink=r)}),_D(2),$D(3,`transloco`),Wc$1()}if(n&2){let e=i.$implicit,t=sD(1);Up(`routerLink`,HD(6,vh,e))(`routerLinkActiveOptions`,VD(8,bh))(`active`,t.isActive),Jy(2),Xc$1(` `,GD(3,4,e),` `)}}var Ni=class n{links=[`about`,`projects`,`artwork`,`contact`];activeLink=this.links[0];static ɵfac=function(e){return new(e||n)};static ɵcmp=Op({type:n,selectors:[[`pf-main-content`]],decls:8,vars:3,consts:[[`tabPanel`,``],[`rla`,`routerLinkActive`],[`role`,`main`,`aria-label`,`Main content`,1,`card`,`main-card`],[1,`card-inner`],[`mat-tab-nav-bar`,``,`stretchTabs`,``,`animationDuration`,`0ms`,3,`tabPanel`,`fitInkBarToContent`,`disableRipple`],[`mat-tab-link`,``,`routerLinkActive`,``,3,`routerLink`,`routerLinkActiveOptions`,`active`],[1,`tab-content`],[`mat-tab-link`,``,`routerLinkActive`,``,3,`click`,`routerLink`,`routerLinkActiveOptions`,`active`]],template:function(e,t){if(e&1&&(Ci$2(0,`section`,2)(1,`div`,3)(2,`nav`,4),UE(3,yh,4,9,`a`,5,$E),Wc$1(),Ci$2(5,`mat-tab-nav-panel`,6,0),Gp(7,`router-outlet`),Wc$1()()()),e&2){let r=sD(6);Jy(2),Up(`tabPanel`,r)(`fitInkBarToContent`,!0)(`disableRipple`,!0),Jy(),GE(t.links)}},dependencies:[dl,no,cl,io,Wr,Mn,qt,zr,A0],styles:[`.tab-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto;min-height:0;padding:1rem 0;-webkit-overflow-scrolling:touch;text-align:justify;scroll-behavior:smooth;scroll-snap-type:y mandatory;scroll-padding-top:var(--%NS%tab-scroll-padding-top, 1rem)}@media(max-width:768px){.tab-content[_ngcontent-%COMP%]{height:auto!important;min-height:0;display:block;overflow:overlay!important;padding:1rem 0 0}}`]})};var Ai=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({imports:[mi$1,$i$1,Y0]})}return n})();var hl=ld$1();function bl(n){return new Li(n.get(Qe),n.get(Gt$2))}var Li=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=B0(-this._previousScrollPosition.left),i.style.top=B0(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||``,a=r.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),hl&&(t.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),hl&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function yl(n,i){return new Bi(n.get(Xr),n.get(K$1),n.get(Qe),i)}var Bi=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(qn(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Nn=class{enable(){}disable(){}attach(){}};function ro(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function ul(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function Ln(n,i){return new Ui(n.get(Xr),n.get(Qe),n.get(K$1),i)}var Ui=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();ro(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Cl=(()=>{class n{_injector=g(ue$2);noop=()=>new Nn;close=e=>yl(this._injector,e);block=()=>bl(this._injector);reposition=e=>Ln(this._injector,e);static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var An=class{positionStrategy;scrollStrategy=new Nn;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Fi=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Sl=(()=>{class n{_attachedOverlays=[];_document=g(Gt$2);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var Rl=(()=>{class n extends Sl{_ngZone=g(K$1);_renderer=g(Mr$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var wl=(()=>{class n extends Sl{_platform=g(Y);_ngZone=g(K$1);_renderer=g(Mr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,`pointerdown`,this._pointerDownListener,r),o.listen(t,`click`,this._clickListener,r),o.listen(t,`auxclick`,this._clickListener,r),o.listen(t,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=te(e)};_clickListener=e=>{let t=te(e),r=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let l=o[a],s=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,s))){if(pl(l.overlayElement,t)||pl(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>s.next(e)):s.next(e)}}};static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();function pl(n,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var kl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Ml=(()=>{class n{_platform=g(Y);_containerElement;_document=g(Gt$2);_styleLoader=g(Tn$2);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||hd$1()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement(`div`);t.classList.add(e),hd$1()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(kl)}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var oo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ao(n){return n&&n.nodeType===1}var ji=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new W;_attachments=new W;_detachments=new W;_positionStrategy;_scrollStrategy;_locationChanges=$.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new W;_outsidePointerEvents=new W;_afterNextRenderRef;constructor(i,e,t,r,o,a,l,s,d,h=!1,p,g){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=l,this._location=s,this._outsideClickDispatcher=d,this._animationsDisabled=h,this._injector=p,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Sy(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=_(_({},this._config),i),this._updateElementSize()}setDirection(i){this._config=j$1(_({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=B0(this._config.width),i.height=B0(this._config.height),i.minWidth=B0(this._config.minWidth),i.minHeight=B0(this._config.minHeight),i.maxWidth=B0(this._config.maxWidth),i.maxHeight=B0(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ao(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new oo(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=V0(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Sy(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var ml=`cdk-overlay-connected-position-bounding-box`;var Sh=/([A-Za-z%]+)$/;function so(n,i){return new Hi(i,n.get(Qe),n.get(Gt$2),n.get(Y),n.get(Ml))}var Hi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new W;_resizeSubscription=$.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(ml),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let l of this._preferredPositions){let s=this._getOriginPoint(i,r,l),d=this._getOverlayPoint(s,e,l),h=this._getOverlayFit(d,e,t,l);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,s);return}if(this._canFitWithFlexibleDimensions(h,d,t)){o.push({position:l,origin:s,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(s,l)});continue}(!a||a.overlayFit.visibleArea<h.visibleArea)&&(a={overlayFit:h,overlayPoint:d,originPoint:s,position:l,overlayRect:e})}if(o.length){let l=null,s=-1;for(let d of o){let h=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);h>s&&(s=h,l=d)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Mt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ml),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof mt?this._origin.nativeElement:ao(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX==`center`)r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;r=t.originX==`start`?a:l}e.left<0&&(r-=e.left);let o;return t.originY==`center`?o=i.top+i.height/2:o=t.originY==`top`?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX==`center`?r=-e.width/2:t.overlayX===`start`?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY==`center`?o=-e.height/2:o=t.overlayY==`top`?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=gl(e),{x:a,y:l}=i,s=this._getOffset(r,`x`),d=this._getOffset(r,`y`);s&&(a+=s),d&&(l+=d);let h=0-a,p=a+o.width-t.width,g=0-l,M=l+o.height-t.height,T=this._subtractOverflows(o.width,h,p),W=this._subtractOverflows(o.height,g,M),Je=T*W;return{visibleArea:Je,isCompletelyWithinViewport:o.width*o.height===Je,fitsInViewportVertically:W===o.height,fitsInViewportHorizontally:T==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=fl(this._overlayRef.getConfig().minHeight),l=fl(this._overlayRef.getConfig().minWidth),s=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||l!=null&&l<=o;return s&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=gl(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),l=Math.max(i.y+r.height-o.height,0),s=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),h=0,p=0;return r.width<=o.width?h=d||-a:h=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?p=s||-l:p=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:h,y:p},{x:i.x+h,y:i.y+p}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Rh(this._lastScrollVisibility,t)){let r=new Fi(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,l;if(e.overlayY===`top`)a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-l+this._getViewportMarginTop();else{let M=Math.min(t.bottom-i.y+t.top,i.y),T=this._lastBoundingBoxSize.height;o=M*2,a=i.y-M,o>T&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-T/2)}let s=e.overlayX===`start`&&!r||e.overlayX===`end`&&r,d=e.overlayX===`end`&&!r||e.overlayX===`start`&&r,h,p,g;if(d)g=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=i.x-this._getViewportMarginStart();else if(s)p=i.x,h=t.right-i.x-this._getViewportMarginEnd();else{let M=Math.min(t.right-i.x+t.left,i.x),T=this._lastBoundingBoxSize.width;h=M*2,p=i.x-M,h>T&&!this._isInitialRender&&!this._growAfterOpen&&(p=i.x-T/2)}return{top:a,left:p,bottom:l,right:g,width:h,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=B0(t.width),r.height=B0(t.height),r.top=B0(t.top)||`auto`,r.bottom=B0(t.bottom)||`auto`,r.left=B0(t.left)||`auto`,r.right=B0(t.right)||`auto`,e.overlayX===`center`?r.alignItems=`center`:r.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=B0(o)),a&&(r.maxWidth=B0(a))}this._lastBoundingBoxSize=t,Mt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Mt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Mt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let h=this._viewportRuler.getViewportScrollPosition();Mt(t,this._getExactOverlayY(e,i,h)),Mt(t,this._getExactOverlayX(e,i,h))}else t.position=`static`;let l=``,s=this._getOffset(e,`x`),d=this._getOffset(e,`y`);s&&(l+=`translateX(${s}px) `),d&&(l+=`translateY(${d}px)`),t.transform=l.trim(),a.maxHeight&&(r?t.maxHeight=B0(a.maxHeight):o&&(t.maxHeight=``)),a.maxWidth&&(r?t.maxWidth=B0(a.maxWidth):o&&(t.maxWidth=``)),Mt(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=B0(o.y);return r}_getExactOverlayX(i,e,t){let r={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX===`end`?`left`:`right`:a=i.overlayX===`end`?`right`:`left`,a===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=B0(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ul(i,t),isOriginOutsideView:ro(i,t),isOverlayClipped:ul(e,t),isOverlayOutsideView:ro(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&V0(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof mt)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function Mt(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function fl(n){if(typeof n!=`number`&&n!=null){let[i,e]=n.split(Sh);return!e||e===`px`?parseFloat(i):null}return n||null}function gl(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Rh(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var _l=`cdk-global-overlay-wrapper`;function El(n){return new zi}var zi=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(_l),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:a,maxHeight:l}=this._overlayRef.getConfig(),s=(r===`100%`||r===`100vw`)&&(!a||a===`100%`||a===`100vw`),d=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),h=this._xPosition,p=this._xOffset,g=this._overlayRef.getConfig().direction===`rtl`,M=``,T=``,W=``;s?W=`flex-start`:h===`center`?(W=`center`,g?T=p:M=p):g?h===`left`||h===`end`?(W=`flex-end`,M=p):(h===`right`||h===`start`)&&(W=`flex-start`,T=p):h===`left`||h===`start`?(W=`flex-start`,M=p):(h===`right`||h===`end`)&&(W=`flex-end`,T=p),i.position=this._cssPosition,i.marginLeft=s?`0`:M,i.marginTop=d?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=s?`0`:T,e.justifyContent=W,e.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(_l),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Dl=(()=>{class n{_injector=g(ue$2);global(){return El()}flexibleConnectedTo(e){return so(this._injector,e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var Bn=new T(`OVERLAY_DEFAULT_CONFIG`);function lo(n,i){n.get(Tn$2).load(kl);let e=n.get(Ml),t=n.get(Gt$2),r=n.get(Pn$2),o=n.get(Pr$2),a=n.get(QT),l=n.get(gi$3,null,{optional:!0})||n.get(Mr$1).createRenderer(null,null),s=new An(i),d=n.get(Bn,null,{optional:!0})?.usePopover??!0;s.direction=s.direction||a.value,!t.body||!(`showPopover`in t.body)?s.usePopover=!1:s.usePopover=i?.usePopover??d;let h=t.createElement(`div`),p=t.createElement(`div`);h.id=r.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),p.appendChild(h),s.usePopover&&(p.setAttribute(`popover`,`manual`),p.classList.add(`cdk-overlay-popover`));let g=s.usePopover?s.positionStrategy?.getPopoverInsertionPoint?.():null;return ao(g)?g.after(p):g?.type===`parent`?g.element.appendChild(p):e.getContainerElement().appendChild(p),new ji(new Pi(h,o,n),p,h,s,n.get(K$1),n.get(Rl),t,n.get(xr$1),n.get(wl),i?.disableAnimations??n.get(km,null,{optional:!0})===`NoopAnimations`,n.get(he$1),l)}var Tl=(()=>{class n{scrollStrategies=g(Cl);_positionBuilder=g(Dl);_injector=g(ue$2);create(e){return lo(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||n)};static ɵprov=Ke$2({token:n,factory:n.ɵfac})}return n})();var wh=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var kh=new T(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(ue$2);return()=>Ln(n)}});var Zt=(()=>{class n{elementRef=g(mt);static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var xl=new T(`cdk-connected-overlay-default-config`);var Vi=(()=>{class n{_dir=g(QT,{optional:!0});_injector=g(ue$2);_overlayRef;_templatePortal;_backdropSubscription=$.EMPTY;_attachSubscription=$.EMPTY;_detachSubscription=$.EMPTY;_positionSubscription=$.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=g(kh);_ngZone=g(K$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new De$1;positionChange=new De$1;attach=new De$1;detach=new De$1;overlayKeydown=new De$1;overlayOutsideClick=new De$1;constructor(){let e=g(Nn$3),t=g(Lr$2),r=g(xl,{optional:!0}),o=g(Bn,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new In(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=wh);let e=this._overlayRef=lo(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!yi$1(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=te(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new An({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=so(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Zt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Zt?this.origin.elementRef.nativeElement:this.origin instanceof mt?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Gg(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,YF],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,YF],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,YF],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,YF],push:[2,`cdkConnectedOverlayPush`,`push`,YF],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,YF],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,YF],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Gd$1]})}return n})();var Gi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({providers:[Tl],imports:[Y0,al,Qr,Qr]})}return n})();var Mh=[`text`];var Eh=[[[`mat-icon`]],`*`];var Dh=[`mat-icon`,`*`];function Th(n,i){if(n&1&&Gp(0,`mat-pseudo-checkbox`,1),n&2){let e=JE();Up(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function xh(n,i){if(n&1&&Gp(0,`mat-pseudo-checkbox`,3),n&2)Up(`disabled`,JE().disabled)}function Oh(n,i){if(n&1&&(Ci$2(0,`span`,4),_D(1),Wc$1()),n&2){let e=JE();Jy(),Xc$1(`(`,e.group.label,`)`)}}var ho=new T(`MAT_OPTION_PARENT_COMPONENT`);var uo=new T(`MatOptgroup`);var co=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}};var Wi=(()=>{class n{_element=g(mt);_changeDetectorRef=g(il$1);_parent=g(ho,{optional:!0});group=g(uo,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g(Pn$2).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ze$3(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new De$1;_text;_stateChanges=new W;constructor(){let e=g(Tn$2);e.load(Tf),e.load(Co),this._signalDisableRipple=!!this._parent&&yr$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yi$1(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new co(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-option`]],viewQuery:function(t,r){if(t&1&&Kp(Mh,7),t&2){let o;rD(o=oD())&&(r._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,r){t&1&&Qp(`click`,function(){return r._selectViaInteraction()})(`keydown`,function(a){return r._handleKeydown(a)}),t&2&&(Jc$1(`id`,r.id),Gc$1(`aria-selected`,r.selected)(`aria-disabled`,r.disabled.toString()),rh$1(`mdc-list-item--selected`,r.selected)(`mat-mdc-option-multiple`,r.multiple)(`mat-mdc-option-active`,r.active)(`mdc-list-item--disabled`,r.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,YF]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:Dh,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,r){t&1&&(eD(Eh),VE(0,Th,1,2,`mat-pseudo-checkbox`,1),tD(1),Ci$2(2,`span`,2,0),tD(4,1),Wc$1(),VE(5,xh,1,1,`mat-pseudo-checkbox`,3),VE(6,Oh,2,1,`span`,4),Gp(7,`div`,5)),t&2&&(HE(r.multiple?0:-1),Jy(5),HE(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),Jy(),HE(r.group&&r.group._inert?6:-1),Jy(),Up(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disabled||r.disableRipple))},dependencies:[x,Af],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function Ol(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Il(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var Ah=[`trigger`];var Lh=[`panel`];var Bh=[[[`mat-select-trigger`]],`*`];var Uh=[`mat-select-trigger`,`*`];function Fh(n,i){if(n&1&&(Ci$2(0,`span`,4),_D(1),Wc$1()),n&2){let e=JE();Jy(),lh$1(e.placeholder)}}function jh(n,i){n&1&&tD(0)}function Hh(n,i){if(n&1&&(Ci$2(0,`span`,11),_D(1),Wc$1()),n&2){let e=JE(2);Jy(),lh$1(e.triggerValue)}}function zh(n,i){if(n&1&&(Ci$2(0,`span`,5),VE(1,jh,1,0)(2,Hh,2,1,`span`,11),Wc$1()),n&2){let e=JE();Jy(),HE(e.customTrigger?1:2)}}function Vh(n,i){if(n&1){let e=YE();Ci$2(0,`div`,12,1),Qp(`keydown`,function(r){Pu(e);return Fu(JE()._handleKeydown(r))}),tD(2,1),Wc$1()}if(n&2){let e=JE();vD(e.panelClass),rh$1(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Gc$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Gh=new T(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(ue$2);return()=>Ln(n)}});var Wh=new T(`MAT_SELECT_CONFIG`);var Al=new T(`MatSelectTrigger`);var po=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Ll=(()=>{class n{_viewportRuler=g(Qe);_changeDetectorRef=g(il$1);_elementRef=g(mt);_dir=g(QT,{optional:!0});_idGenerator=g(Pn$2);_renderer=g(gi$3);_parentFormField=g(Ln$1,{optional:!0});ngControl=g($i$2,{self:!0,optional:!0});_liveAnnouncer=g(Oo);_defaultOptions=g(Wh,{optional:!0});_animationsDisabled=Ni$1();_popoverLocation;_initialized=new W;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Ol(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Il(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new po(this,e)}_scrollStrategyFactory=g(Gh);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new W;_errorStateTracker;stateChanges=new W;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ze$3(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Vn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Cg(()=>{let e=this.options;return e?e.changes.pipe(Ug(e),Ct$2(()=>Ag(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ct$2(()=>this.optionSelectionChanges))});openedChange=new De$1;_openedStream=this.openedChange.pipe(qn(e=>e),ie(()=>{}));_closedStream=this.openedChange.pipe(qn(e=>!e),ie(()=>{}));selectionChange=new De$1;valueChange=new De$1;constructor(){let e=g(gi$1),t=g(ga,{optional:!0}),r=g(Da,{optional:!0}),o=g(new Ch(`tabindex`),{optional:!0}),a=g(Bn,{optional:!0}),l=g(bi$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new xe(e,l||this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new i(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(es$2(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(es$2(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ug(null),es$2(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(on$2(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!yi$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let s=this.selected;s&&l!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!yi$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(l?s.select():s.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yi$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new On$2(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ag(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(es$2(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ag(...this.options.map(t=>t._stateChanges)).pipe(es$2(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=te(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-select`]],contentQueries:function(t,r,o){if(t&1&&Yp(o,Al,5)(o,Wi,5)(o,uo,5),t&2){let a;rD(a=oD())&&(r.customTrigger=a.first),rD(a=oD())&&(r.options=a),rD(a=oD())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Kp(Ah,5)(Lh,5)(Vi,5),t&2){let o;rD(o=oD())&&(r.trigger=o.first),rD(o=oD())&&(r.panel=o.first),rD(o=oD())&&(r._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,r){t&1&&Qp(`keydown`,function(a){return r._handleKeydown(a)})(`focus`,function(){return r._onFocus()})(`blur`,function(){return r._onBlur()}),t&2&&(Gc$1(`id`,r.id)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r.panelOpen?r.id+`-panel`:null)(`aria-expanded`,r.panelOpen)(`aria-label`,r.ariaLabel||null)(`aria-required`,r.required.toString())(`aria-disabled`,r.disabled.toString())(`aria-invalid`,r.errorState)(`aria-activedescendant`,r._getAriaActiveDescendant()),rh$1(`mat-mdc-select-disabled`,r.disabled)(`mat-mdc-select-invalid`,r.errorState)(`mat-mdc-select-required`,r.required)(`mat-mdc-select-empty`,r.empty)(`mat-mdc-select-multiple`,r.multiple)(`mat-select-open`,r.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,YF],disableRipple:[2,`disableRipple`,`disableRipple`,YF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:KF(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,YF],placeholder:`placeholder`,required:[2,`required`,`required`,YF],multiple:[2,`multiple`,`multiple`,YF],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,YF],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,KF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,YF]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[mh$1([{provide:zn,useExisting:n},{provide:ho,useExisting:n}]),Gd$1],ngContentSelectors:Uh,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,r){if(t&1&&(eD(Bh),Ci$2(0,`div`,2,0),Qp(`click`,function(){return r.open()}),Ci$2(3,`div`,3),VE(4,Fh,2,1,`span`,4)(5,zh,3,1,`span`,5),Wc$1(),Ci$2(6,`div`,6)(7,`div`,7),Qu(),Ci$2(8,`svg`,8),Gp(9,`path`,9),Wc$1()()()(),jp(10,Vh,3,16,`ng-template`,10),Qp(`detach`,function(){return r.close()})(`backdropClick`,function(){return r.close()})(`overlayKeydown`,function(a){return r._handleOverlayKeydown(a)})),t&2){let o=sD(1);Jy(3),Gc$1(`id`,r._valueId),Jy(),HE(r.empty?4:5),Jy(6),Up(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,r._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,r._scrollStrategy)(`cdkConnectedOverlayOrigin`,r._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,r._positions)(`cdkConnectedOverlayWidth`,r._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,r._popoverLocation)}},dependencies:[Zt,Vi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Bl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Bc$1({type:n,selectors:[[`mat-select-trigger`]],features:[mh$1([{provide:Al,useExisting:n}])]})}return n})();var Ul=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({imports:[Po,Gi,Y0,Pn]})}return n})();function $h(n,i){n&1&&(Ci$2(0,`mat-icon`),_D(1,` light_mode `),Wc$1())}function Yh(n,i){n&1&&(Ci$2(0,`mat-icon`),_D(1,` dark_mode `),Wc$1())}var $i=class n{constructor(i){this.renderer=i;va$1(()=>{this.mode()==`dark`?this.renderer.setStyle(document.documentElement,`color-scheme`,`dark`):this.renderer.setStyle(document.documentElement,`color-scheme`,`light`)})}renderer;mode=Ze$3(`dark`);static storageKey=`docs-theme-storage-current-name`;ngOnInit(){let i=this.getStoredThemeName()??(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`);i&&this.mode.set(i),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{let t=e.matches?`dark`:`light`;this.mode.set(t)})}changeMode(){this.mode()==`dark`?this.mode.set(`light`):this.mode.set(`dark`),this.storeTheme(this.mode())}storeTheme(i){try{window.localStorage[n.storageKey]=i}catch(e){}}getStoredThemeName(){try{return window.localStorage[n.storageKey]||null}catch(i){return null}}clearStorage(){try{window.localStorage.removeItem(n.storageKey)}catch(i){}}static ɵfac=function(e){return new(e||n)(He$1(gi$3))};static ɵcmp=Op({type:n,selectors:[[`pf-theme-picker`]],decls:3,vars:1,consts:[[`mat-icon-button`,``,3,`click`]],template:function(e,t){e&1&&(Ci$2(0,`button`,0),Qp(`click`,function(){return t.changeMode()}),VE(1,$h,2,0,`mat-icon`)(2,Yh,2,0,`mat-icon`),Wc$1()),e&2&&(Jy(),HE(t.mode()==`dark`?1:2))},dependencies:[Fa,Xe$1,Ul,Qa,Ga],encapsulation:2})};var Fl={en:{label:`english-us`,icon:`icons/flags/us.svg`},pt:{label:`portuguese`,icon:`icons/flags/br.svg`}};function qh(n,i){if(n&1&&(Ci$2(0,`mat-option`,1),Gp(1,`mat-icon`,2),$D(2,`transloco`),_D(3),$D(4,`transloco`),Wc$1()),n&2){let e=i.$implicit;Up(`value`,e.id),Jy(),Up(`svgIcon`,e.id),Gc$1(`aria-label`,GD(2,4,e.label)),Jy(2),Xc$1(` `,GD(4,6,e.label))}}var Yi=class n{constructor(i,e,t){this.translocoService=t;this.selectedLanguage=this.translocoService.getActiveLang();let r=this.translocoService.getAvailableLangs(),o=new Set,a=s=>{let d=typeof s==`string`?s:s.id,h=typeof s==`string`?void 0:s.label,p=Fl[d];return{id:d,label:p?.label??h??d,icon:p?.icon}},l=r.map(a).map(s=>(s.icon&&!o.has(s.id)&&(i.addSvgIcon(s.id,e.bypassSecurityTrustResourceUrl(s.icon)),o.add(s.id)),s));this.languages=l,this.translocoLanguages=l.map(s=>s.id)}translocoService;selectedLanguage;languages=[];translocoLanguages=[];sub=new $;ngOnDestroy(){this.sub.unsubscribe()}onChange(i){let e=i.value;this.translocoService.setActiveLang(e),this.selectedLanguage=e}getSelectedLabel(){return this.languages.find(i=>i.id===this.selectedLanguage)?.label??this.selectedLanguage}static ɵfac=function(e){return new(e||n)(He$1(ve),He$1(wn$2),He$1(OT))};static ɵcmp=Op({type:n,selectors:[[`pf-options`]],decls:11,vars:7,consts:[[`disableRipple`,``,3,`valueChange`,`selectionChange`,`value`],[3,`value`],[`matSuffix`,``,`aria-hidden`,`false`,3,`svgIcon`]],template:function(e,t){e&1&&(Ci$2(0,`mat-form-field`)(1,`mat-label`),_D(2),$D(3,`transloco`),Wc$1(),Ci$2(4,`mat-select`,0),dh$1(`valueChange`,function(o){return RD(t.selectedLanguage,o)||(t.selectedLanguage=o),o}),Qp(`selectionChange`,function(o){return t.onChange(o)}),Ci$2(5,`mat-select-trigger`),_D(6),$D(7,`transloco`),Wc$1(),UE(8,qh,5,8,`mat-option`,1,$E),Wc$1()(),Gp(10,`pf-theme-picker`)),e&2&&(Jy(2),lh$1(GD(3,3,`language`)),Jy(2),uh$1(`value`,t.selectedLanguage),Jy(2),Xc$1(` `,GD(7,5,t.getSelectedLabel()),` `),Jy(2),GE(t.languages))},dependencies:[$i,Ai,$i$1,Ce$1,Wi$1,Ll,Wi,Ga,Bl,A0],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:row;column-gap:1rem;align-items:baseline;justify-content:space-between}`]})};var Zh=[`determinateSpinner`];function Xh(n,i){if(n&1&&(Qu(),Ci$2(0,`svg`,11),Gp(1,`circle`,12),Wc$1()),n&2){let e=JE();Gc$1(`viewBox`,e._viewBox()),Jy(),nh(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Gc$1(`r`,e._circleRadius())}}var Qh=new T(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:jl})});var jl=100;var Jh=10;var Hl=(()=>{class n{_elementRef=g(mt);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=g(Qh),t=xo(),r=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&r.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=jl;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Jh)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,r){if(t&1&&Kp(Zh,5),t&2){let o;rD(o=oD())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,r){t&2&&(Gc$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),vD(`mat-`+r.color),nh(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),rh$1(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,KF],diameter:[2,`diameter`,`diameter`,KF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,KF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,r){if(t&1&&(jp(0,Xh,2,8,`ng-template`,null,0,WD),Ci$2(2,`div`,2,1),Qu(),Ci$2(4,`svg`,3),Gp(5,`circle`,4),Wc$1()(),Zu(),Ci$2(6,`div`,5)(7,`div`,6)(8,`div`,7),Wp(9,8),Wc$1(),Ci$2(10,`div`,9),Wp(11,8),Wc$1(),Ci$2(12,`div`,10),Wp(13,8),Wc$1()()()),t&2){let o=sD(1);Jy(4),Gc$1(`viewBox`,r._viewBox()),Jy(),nh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Gc$1(`r`,r._circleRadius()),Jy(4),Up(`ngTemplateOutlet`,o),Jy(2),Up(`ngTemplateOutlet`,o),Jy(2),Up(`ngTemplateOutlet`,o)}},dependencies:[ys$1],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var zl=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$2({type:n});static ɵinj=or({imports:[Y0]})}return n})();var tu=()=>[];function nu(n,i){n&1&&Gp(0,`mat-spinner`)}function iu(n,i){if(n&1&&(Ci$2(0,`div`,0)(1,`div`,1)(2,`header`,2),Gp(3,`pf-options`,3),Wc$1(),Gp(4,`pf-profile-sidebar`,4),Wc$1(),Ci$2(5,`div`,5)(6,`header`)(7,`h1`),_D(8),$D(9,`transloco`),Wc$1(),Gp(10,`pf-options`,6),Wc$1(),Gp(11,`pf-main-content`,7),Ci$2(12,`footer`)(13,`p`)(14,`span`),_D(15),$D(16,`transloco`),Wc$1(),_D(17,`\xA0`),Ci$2(18,`a`,8),_D(19,`Angular`),Wc$1(),_D(20,` | `),Ci$2(21,`span`),_D(22),$D(23,`transloco`),Wc$1(),_D(24,`\xA0`),Ci$2(25,`a`,9),_D(26,`Icons8`),Wc$1(),_D(27),Ci$2(28,`b`),_D(29,`Victor Probio Lopes`),Wc$1()()()()()),n&2){let e=JE(),t=kD(0);Jy(4),Up(`name`,t.name)(`nickname`,t.nickname)(`avatarSrc`,t.avatarSrc)(`role`,t.role)(`bio`,t.bio)(`github`,t.github)(`twitter`,t.twitter)(`linkedin`,t.linkedin)(`customWebsites`,t.customWebsites??VD(21,tu))(`socialButtonStyle`,`tonal`)(`maxExpandedLinks`,6),Jy(4),lh$1(GD(9,15,`portfolio`)),Jy(7),lh$1(GD(16,17,`website-created-with`)),Jy(7),lh$1(GD(23,19,`icons-by`)),Jy(5),Xc$1(` | ©`,e.currentYear,` `)}}Zs$1(class n{#n=g(nd$1);#e=g(OT);#i=g(Re);currentYear=new Date().getFullYear();showInitialSpinner=Ze$3(!1);#t=!1;myProfile=Oh$1(this.#e.selectTranslation(`profile`));portfolioTitle=Oh$1(this.#e.selectTranslate(`portfolio`));constructor(){this.#i.events.pipe(Rh$1()).subscribe(i=>{i instanceof Ue?this.#t||this.showInitialSpinner.set(!0):(i instanceof de||i instanceof fe||i instanceof Xe)&&(this.#t=!0,this.showInitialSpinner.set(!1))}),va$1(()=>{let i=this.portfolioTitle();i&&this.#n.setTitle(i)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Op({type:n,selectors:[[`pf-root`]],hostAttrs:[1,`pf-root`],decls:3,vars:2,consts:[[1,`layout`],[1,`sidebar-cell`],[1,`mobile-header`],[`aria-hidden`,`true`],[1,`sidebar`,3,`name`,`nickname`,`avatarSrc`,`role`,`bio`,`github`,`twitter`,`linkedin`,`customWebsites`,`socialButtonStyle`,`maxExpandedLinks`],[1,`main-cell`],[1,`desktop-header`],[1,`main`],[`href`,`https://angular.dev/`],[`target`,`_blank`,`href`,`https://icons8.com`]],template:function(e,t){if(e&1&&(ph$1(0),VE(1,nu,1,0,`mat-spinner`)(2,iu,30,22,`div`,0)),e&2){let r=OD(t.myProfile());Jy(),HE(t.showInitialSpinner()||!r?1:2)}},dependencies:[Oi,Ni,Ai,Yi,zl,Hl,A0],styles:[`[_nghost-%COMP%]{display:block;height:100vh;max-width:calc(1440px + 2rem);justify-self:center;overflow:hidden;margin:0;padding:0;align-content:center}.layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 10fr;height:100%;min-height:0;gap:1rem;padding:1rem}.layout[_ngcontent-%COMP%]   .sidebar-cell[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%]{min-height:0}.layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr auto;height:100%}.layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:.5rem 0 0}.layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{height:100%;min-height:0;width:100%;min-width:0;display:flex;flex-direction:column}.mobile-header[_ngcontent-%COMP%]{display:none}.desktop-header[_ngcontent-%COMP%]{display:flex}@media(min-width:1920px){[_nghost-%COMP%]{max-width:calc(75% + 2rem)}}@media(min-width:769px)and (max-width:1280px){.layout[_ngcontent-%COMP%]{grid-template-columns:3fr 9fr}}@media(max-width:768px){[_nghost-%COMP%]{height:auto;min-height:100vh;overflow:visible}.layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;padding:1rem;height:auto;gap:1rem}.layout[_ngcontent-%COMP%]   .sidebar-cell[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .main-cell[_ngcontent-%COMP%]{min-height:0}.layout[_ngcontent-%COMP%]   .sidebar-cell[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;gap:.5rem}.layout[_ngcontent-%COMP%]   .sidebar-cell[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{justify-self:end}.mobile-header[_ngcontent-%COMP%]{display:flex;width:100%}.mobile-header[_ngcontent-%COMP%]   pf-options[_ngcontent-%COMP%]{width:100%}.desktop-header[_ngcontent-%COMP%]{display:none}}`]})},il).catch(n=>console.error(n));export{kd as A,Tf as C,Xf as D,Uo as E,Y as O,Pn$2 as S,To as T,u as _,Qn as a,Fn$1 as b,Yn as c,ce$1 as d,ea as f,f as g,ta as h,Kn as i,kn$2 as j,bc$1 as k,Zn as l,na as m,Ga as n,Xe$1 as o,gi$1 as p,Jn as r,Xn as s,Fa as t,aa as u,Co as v,Tn$2 as w,Ni$1 as x,Es$1 as y};