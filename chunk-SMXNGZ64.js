import{Aa as S,B as r,Ba as k,C,D as Te,E as Se,Ea as Ge,F as Z,G as Me,H as Ce,I as Ne,K as Oe,L as T,M as N,N as y,P as H,R as V,S as w,U as X,V as $,W as Ee,X as F,Y as O,Z as Re,a as P,b as J,c as pe,ca as E,d,da as x,e as _e,f as G,h as Y,ha as ke,ia as ee,j as m,ja as L,k as fe,ka as j,l as M,la as z,m as ge,n as I,na as Ae,oa as Pe,p as v,pa as te,q as me,qa as ie,r as be,ra as Ie,s as ve,sa as Fe,t as u,ta as xe,u as ye,w as q,wa as R,x as f,y as we,ya as Be,z as De,za as ne}from"./chunk-KWL76CSD.js";var re=["*"];var Ue=["dialog"];function Ke(i,s){if(i&1&&(E(0,"strong",3),Fe(1),x()),i&2){let e=L();H(),xe(e.header)}}function Qe(i,s){}function Je(i,s){if(i&1){let e=ke();E(0,"div",1),X(1,Qe,0,0,"ng-template",4),E(2,"button",5),ee("click",function(){Ce(e);let n=L();return Ne(n.hide())}),x()()}if(i&2){let e=L(),t=Ie(1);H(),Ee("ngTemplateOutlet",e.contentHeaderTpl||t)}}var He={animation:!0,transitionTimerDelayMs:5},le=(()=>{class i{constructor(){this.animation=He.animation}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ye(i){let{transitionDelay:s,transitionDuration:e}=window.getComputedStyle(i),t=parseFloat(s),n=parseFloat(e);return(t+n)*1e3}function ce(i){return typeof i=="string"}function A(i){return i!=null}function Ve(i){return i&&i.then}function B(i){return(i||document.body).getBoundingClientRect()}function qe(i){return s=>new pe(e=>{let t=a=>i.run(()=>e.next(a)),n=a=>i.run(()=>e.error(a)),o=()=>i.run(()=>e.complete());return s.subscribe({next:t,error:n,complete:o})})}var Ze=()=>{},{transitionTimerDelayMs:Xe}=He,W=new Map,_=(i,s,e,t)=>{let n=t.context||{},o=W.get(s);if(o)switch(t.runningTransition){case"continue":return _e;case"stop":i.run(()=>o.transition$.complete()),n=Object.assign(o.context,n),W.delete(s)}let a=e(s,t.animation,n)||Ze;if(!t.animation||window.getComputedStyle(s).transitionProperty==="none")return i.run(()=>a()),G(void 0).pipe(qe(i));let c=new d,l=new d,h=c.pipe(me(!0));W.set(s,{transition$:c,complete:()=>{l.next(),l.complete()},context:n});let g=Ye(s);return i.runOutsideAngular(()=>{let p=m(s,"transitionend").pipe(u(h),M(({target:je})=>je===s)),D=fe(g+Xe).pipe(u(h));ge(D,p,l).pipe(u(h)).subscribe(()=>{W.delete(s),i.run(()=>{a(),c.next(),c.complete()})})}),c.asObservable()};var Q=function(i){return i[i.Tab=9]="Tab",i[i.Enter=13]="Enter",i[i.Escape=27]="Escape",i[i.Space=32]="Space",i[i.PageUp=33]="PageUp",i[i.PageDown=34]="PageDown",i[i.End=35]="End",i[i.Home=36]="Home",i[i.ArrowLeft=37]="ArrowLeft",i[i.ArrowUp=38]="ArrowUp",i[i.ArrowRight=39]="ArrowRight",i[i.ArrowDown=40]="ArrowDown",i}(Q||{});var Ni=(()=>{let i=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,s=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(i()||s()):!1})();var et=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function de(i){let s=Array.from(i.querySelectorAll(et)).filter(e=>e.tabIndex!==-1);return[s[0],s[s.length-1]]}var $e=(i,s,e,t=!1)=>{i.runOutsideAngular(()=>{let n=m(s,"focusin").pipe(u(e),Y(o=>o.target));m(s,"keydown").pipe(u(e),M(o=>o.which===Q.Tab),q(n)).subscribe(([o,a])=>{let[c,l]=de(s);(a===c||a===s)&&o.shiftKey&&(l.focus(),o.preventDefault()),a===l&&!o.shiftKey&&(c.focus(),o.preventDefault())}),t&&m(s,"click").pipe(u(e),q(n),Y(o=>o[1])).subscribe(o=>o.focus())})};var Oi=new Date(1882,10,12),Ei=new Date(2174,10,25);var Ri=1e3*60*60*24;var he=1080,tt=24*he,it=12*he+793,ki=29*tt+it,Ai=11*he+204;var nt=(()=>{class i{constructor(){this._ngbConfig=r(le),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),b=class{constructor(s,e,t){this.nodes=s,this.viewRef=e,this.componentRef=t}};var Le=(()=>{class i{constructor(){this._document=r(k)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),t=this._document.body,n=t.style,{overflow:o,paddingRight:a}=n;if(e>0){let c=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${c+e}px`}return n.overflow="hidden",()=>{e>0&&(n.paddingRight=a),n.overflow=o}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),st=(()=>{class i{constructor(){this._nativeElement=r(N).nativeElement,this._zone=r(w)}ngOnInit(){this._zone.onStable.asObservable().pipe(v(1)).subscribe(()=>{_(this._zone,this._nativeElement,(e,t)=>{t&&B(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return _(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=C({type:i,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,n){t&2&&(O("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),F("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[R],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return i})(),U=class{update(s){}close(s){}dismiss(s){}},ot=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],at=["animation","backdropClass"],se=class{_applyWindowOptions(s,e){ot.forEach(t=>{A(e[t])&&(s[t]=e[t])})}_applyBackdropOptions(s,e){at.forEach(t=>{A(e[t])&&(s[t]=e[t])})}update(s){this._applyWindowOptions(this._windowCmptRef.instance,s),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,s)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(u(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(u(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(s,e,t,n){this._windowCmptRef=s,this._contentRef=e,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new d,this._dismissed=new d,this._hidden=new d,s.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,a)=>{this._resolve=o,this._reject=a}),this.result.then(null,()=>{})}close(s){this._windowCmptRef&&(this._closed.next(s),this._resolve(s),this._removeModalElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeModalElements()}dismiss(s){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let e=this._beforeDismiss();Ve(e)?e.then(t=>{t!==!1&&this._dismiss(s)},()=>{}):e!==!1&&this._dismiss(s)}}_removeModalElements(){let s=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():G(void 0);s.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),I(s,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},oe=function(i){return i[i.BACKDROP_CLICK=0]="BACKDROP_CLICK",i[i.ESC=1]="ESC",i}(oe||{}),rt=(()=>{class i{constructor(){this._document=r(k),this._elRef=r(N),this._zone=r(w),this._closed$=new d,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new y,this.shown=new d,this.hidden=new d}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":ce(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(v(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,t={animation:this.animation,runningTransition:"stop"},n=_(this._zone,e,()=>e.classList.remove("show"),t),o=_(this._zone,this._dialogEl.nativeElement,()=>{},t),a=I(n,o);return a.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),a}_show(){let e={animation:this.animation,runningTransition:"continue"},t=_(this._zone,this._elRef.nativeElement,(o,a)=>{a&&B(o),o.classList.add("show")},e),n=_(this._zone,this._dialogEl.nativeElement,()=>{},e);I(t,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{m(e,"keydown").pipe(u(this._closed$),M(n=>n.which===Q.Escape)).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(oe.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let t=!1;m(this._dialogEl.nativeElement,"mousedown").pipe(u(this._closed$),ye(()=>t=!1),ve(()=>m(e,"mouseup").pipe(u(this._closed$),v(1))),M(({target:n})=>e===n)).subscribe(()=>{t=!0}),m(e,"click").pipe(u(this._closed$)).subscribe(({target:n})=>{e===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!t&&this._zone.run(()=>this.dismiss(oe.BACKDROP_CLICK))),t=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let t=e.querySelector("[ngbAutofocus]"),n=de(e)[0];(t||n||e).focus()}}_restoreFocus(){let e=this._document.body,t=this._elWithFocus,n;t&&t.focus&&e.contains(t)?n=t:n=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&_(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=C({type:i,selectors:[["ngb-modal-window"]],viewQuery:function(t,n){if(t&1&&Pe(Ue,7),t&2){let o;te(o=ie())&&(n._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,n){t&2&&($("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),O("modal d-block"+(n.windowClass?" "+n.windowClass:"")),F("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[R],ngContentSelectors:re,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(t,n){t&1&&(j(),E(0,"div",1,0)(2,"div",2),z(3),x()()),t&2&&O("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2})}}return i})(),lt=(()=>{class i{constructor(){this._applicationRef=r(ne),this._injector=r(T),this._environmentInjector=r(Z),this._document=r(k),this._scrollBar=r(Le),this._activeWindowCmptHasChanged=new d,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new y;let e=r(w);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let t=this._windowCmpts[this._windowCmpts.length-1];$e(e,t.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(t.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,t,n){let o=n.container instanceof HTMLElement?n.container:A(n.container)?this._document.querySelector(n.container):this._document.body;if(!o)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let a=new U;e=n.injector||e;let c=e.get(Z,null)||this._environmentInjector,l=this._getContentRef(e,c,t,a,n),h=n.backdrop!==!1?this._attachBackdrop(o):void 0,g=this._attachWindowComponent(o,l.nodes),p=new se(g,l,h,n.beforeDismiss);return this._registerModalRef(p),this._registerWindowCmpt(g),p.hidden.pipe(v(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),a.close=D=>{p.close(D)},a.dismiss=D=>{p.dismiss(D)},a.update=D=>{p.update(D)},p.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),h&&h.instance&&h.changeDetectorRef.detectChanges(),g.changeDetectorRef.detectChanges(),p}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(t=>t.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let t=S(st,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),e.appendChild(t.location.nativeElement),t}_attachWindowComponent(e,t){let n=S(rt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_getContentRef(e,t,n,o,a){return n?n instanceof V?this._createFromTemplateRef(n,o):ce(n)?this._createFromString(n):this._createFromComponent(e,t,n,o,a):new b([])}_createFromTemplateRef(e,t){let n={$implicit:t,close(a){t.close(a)},dismiss(a){t.dismiss(a)}},o=e.createEmbeddedView(n);return this._applicationRef.attachView(o),new b([o.rootNodes],o)}_createFromString(e){let t=this._document.createTextNode(`${e}`);return new b([[t]])}_createFromComponent(e,t,n,o,a){let c=T.create({providers:[{provide:U,useValue:o}],parent:e}),l=S(n,{environmentInjector:t,elementInjector:c}),h=l.location.nativeElement;return a.scrollable&&h.classList.add("component-host-scrollable"),this._applicationRef.attachView(l.hostView),new b([[h]],l.hostView,l)}_setAriaHidden(e){let t=e.parentElement;t&&e!==this._document.body&&(Array.from(t.children).forEach(n=>{n!==e&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(t))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,t)=>{e?t.setAttribute("aria-hidden",e):t.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let t=()=>{let n=this._modalRefs.indexOf(e);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(t,t)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let t=this._windowCmpts.indexOf(e);t>-1&&(this._windowCmpts.splice(t,1),this._activeWindowCmptHasChanged.next())})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Pi=(()=>{class i{constructor(){this._injector=r(T),this._modalStack=r(lt),this._config=r(nt)}open(e,t={}){let n=P(J(P({},this._config),{animation:this._config.animation}),t);return this._modalStack.open(this._injector,e,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ct=(()=>{class i{constructor(){this._ngbConfig=r(le),this.autohide=!0,this.delay=5e3,this.ariaLive="polite"}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),dt=(i,s)=>{let{classList:e}=i;if(s)e.add("fade");else{e.add("show");return}return B(i),e.add("show","showing"),()=>{e.remove("showing")}},ht=({classList:i})=>(i.add("showing"),()=>{i.remove("show","showing")}),ut=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=Se({type:i,selectors:[["","ngbToastHeader",""]],standalone:!0})}}return i})(),Ii=(()=>{class i{constructor(e){this.ariaLive=e,this._config=r(ct),this._zone=r(w),this._element=r(N),this.animation=this._config.animation,this.delay=this._config.delay,this.autohide=this._config.autohide,this.contentHeaderTpl=null,this.shown=new y,this.hidden=new y,this.ariaLive??=this._config.ariaLive}ngAfterContentInit(){this._zone.onStable.asObservable().pipe(v(1)).subscribe(()=>{this._init(),this.show()})}ngOnChanges(e){"autohide"in e&&(this._clearTimeout(),this._init())}hide(){this._clearTimeout();let e=_(this._zone,this._element.nativeElement,ht,{animation:this.animation,runningTransition:"stop"});return e.subscribe(()=>{this.hidden.emit()}),e}show(){let e=_(this._zone,this._element.nativeElement,dt,{animation:this.animation,runningTransition:"continue"});return e.subscribe(()=>{this.shown.emit()}),e}_init(){this.autohide&&!this._timeoutID&&(this._timeoutID=setTimeout(()=>this.hide(),this.delay))}_clearTimeout(){this._timeoutID&&(clearTimeout(this._timeoutID),this._timeoutID=null)}static{this.\u0275fac=function(t){return new(t||i)(Oe("aria-live"))}}static{this.\u0275cmp=C({type:i,selectors:[["ngb-toast"]],contentQueries:function(t,n,o){if(t&1&&Ae(o,ut,7,V),t&2){let a;te(a=ie())&&(n.contentHeaderTpl=a.first)}},hostAttrs:["role","alert","aria-atomic","true",1,"toast"],hostVars:3,hostBindings:function(t,n){t&2&&($("aria-live",n.ariaLive),F("fade",n.animation))},inputs:{animation:"animation",delay:"delay",autohide:"autohide",header:"header"},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbToast"],standalone:!0,features:[Me,R],ngContentSelectors:re,decls:5,vars:1,consts:()=>{let e;return e=$localize`:@@ngb.toast.close-aria:Close`,[["headerTpl",""],[1,"toast-header"],[1,"toast-body"],[1,"me-auto"],[3,"ngTemplateOutlet"],["type","button","aria-label",e,1,"btn-close",3,"click"]]},template:function(t,n){t&1&&(j(),X(0,Ke,2,1,"ng-template",null,0,Be)(2,Je,3,1,"div",1),E(3,"div",2),z(4),x()),t&2&&(H(2),Re(2,n.contentHeaderTpl||n.header?2:-1))},dependencies:[Ge],styles:[`ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}
`],encapsulation:2})}}return i})(),Fi=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=Te({type:i})}static{this.\u0275inj=we({})}}return i})();var xi=new De("live announcer delay",{providedIn:"root",factory:()=>100});var pt=(()=>{class i{constructor(){this._ngbConfig=r(le),this.backdrop=!0,this.keyboard=!0,this.position="start",this.scroll=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),K=class{close(s){}dismiss(s){}},ae=class{get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(u(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(u(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._panelCmptRef.instance.shown.asObservable()}constructor(s,e,t,n){this._panelCmptRef=s,this._contentRef=e,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new d,this._dismissed=new d,this._hidden=new d,s.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),t&&t.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,a)=>{this._resolve=o,this._reject=a}),this.result.then(null,()=>{})}close(s){this._panelCmptRef&&(this._closed.next(s),this._resolve(s),this._removeOffcanvasElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeOffcanvasElements()}dismiss(s){if(this._panelCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let e=this._beforeDismiss();Ve(e)?e.then(t=>{t!==!1&&this._dismiss(s)},()=>{}):e!==!1&&this._dismiss(s)}}_removeOffcanvasElements(){let s=this._panelCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():G(void 0);s.subscribe(()=>{let{nativeElement:t}=this._panelCmptRef.location;t.parentNode.removeChild(t),this._panelCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._panelCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),I(s,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},ue=function(i){return i[i.BACKDROP_CLICK=0]="BACKDROP_CLICK",i[i.ESC=1]="ESC",i}(ue||{}),_t=(()=>{class i{constructor(){this._nativeElement=r(N).nativeElement,this._zone=r(w),this.dismissEvent=new y}ngOnInit(){this._zone.onStable.asObservable().pipe(v(1)).subscribe(()=>{_(this._zone,this._nativeElement,(e,t)=>{t&&B(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return _(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}dismiss(){this.static||this.dismissEvent.emit(ue.BACKDROP_CLICK)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=C({type:i,selectors:[["ngb-offcanvas-backdrop"]],hostVars:6,hostBindings:function(t,n){t&1&&ee("mousedown",function(){return n.dismiss()}),t&2&&(O("offcanvas-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),F("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass",static:"static"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[R],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return i})(),ft=(()=>{class i{constructor(){this._document=r(k),this._elRef=r(N),this._zone=r(w),this._closed$=new d,this._elWithFocus=null,this.keyboard=!0,this.position="start",this.dismissEvent=new y,this.shown=new d,this.hidden=new d}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(v(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let e={animation:this.animation,runningTransition:"stop"},t=_(this._zone,this._elRef.nativeElement,n=>(n.classList.remove("showing"),n.classList.add("hiding"),()=>n.classList.remove("show","hiding")),e);return t.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),t}_show(){let e={animation:this.animation,runningTransition:"continue"};_(this._zone,this._elRef.nativeElement,(n,o)=>(o&&B(n),n.classList.add("show","showing"),()=>n.classList.remove("showing")),e).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{m(e,"keydown").pipe(u(this._closed$),M(t=>t.which===Q.Escape)).subscribe(t=>{this.keyboard&&requestAnimationFrame(()=>{t.defaultPrevented||this._zone.run(()=>this.dismiss(ue.ESC))})})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let t=e.querySelector("[ngbAutofocus]"),n=de(e)[0];(t||n||e).focus()}}_restoreFocus(){let e=this._document.body,t=this._elWithFocus,n;t&&t.focus&&e.contains(t)?n=t:n=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=C({type:i,selectors:[["ngb-offcanvas-panel"]],hostAttrs:["role","dialog","tabindex","-1"],hostVars:5,hostBindings:function(t,n){t&2&&($("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),O("offcanvas offcanvas-"+n.position+(n.panelClass?" "+n.panelClass:"")))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",keyboard:"keyboard",panelClass:"panelClass",position:"position"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[R],ngContentSelectors:re,decls:1,vars:0,template:function(t,n){t&1&&(j(),z(0))},encapsulation:2})}}return i})(),gt=(()=>{class i{constructor(){this._applicationRef=r(ne),this._injector=r(T),this._document=r(k),this._scrollBar=r(Le),this._activePanelCmptHasChanged=new d,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._panelAttributes=["animation","ariaDescribedBy","ariaLabelledBy","keyboard","panelClass","position"],this._activeInstance=new y;let e=r(w);this._activePanelCmptHasChanged.subscribe(()=>{this._panelCmpt&&$e(e,this._panelCmpt.location.nativeElement,this._activePanelCmptHasChanged)})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,t,n){let o=n.container instanceof HTMLElement?n.container:A(n.container)?this._document.querySelector(n.container):this._document.body;if(!o)throw new Error(`The specified offcanvas container "${n.container||"body"}" was not found in the DOM.`);n.scroll||this._hideScrollBar();let a=new K,c=this._getContentRef(n.injector||e,t,a),l=n.backdrop!==!1?this._attachBackdrop(o):void 0,h=this._attachWindowComponent(o,c.nodes),g=new ae(h,c,l,n.beforeDismiss);return this._registerOffcanvasRef(g),this._registerPanelCmpt(h),g.hidden.pipe(be(()=>this._restoreScrollBar())).subscribe(),a.close=p=>{g.close(p)},a.dismiss=p=>{g.dismiss(p)},this._applyPanelOptions(h.instance,n),l&&l.instance&&(this._applyBackdropOptions(l.instance,n),l.changeDetectorRef.detectChanges()),h.changeDetectorRef.detectChanges(),g}get activeInstance(){return this._activeInstance}dismiss(e){this._offcanvasRef?.dismiss(e)}hasOpenOffcanvas(){return!!this._offcanvasRef}_attachBackdrop(e){let t=S(_t,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),e.appendChild(t.location.nativeElement),t}_attachWindowComponent(e,t){let n=S(ft,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_applyPanelOptions(e,t){this._panelAttributes.forEach(n=>{A(t[n])&&(e[n]=t[n])})}_applyBackdropOptions(e,t){this._backdropAttributes.forEach(n=>{A(t[n])&&(e[n]=t[n])}),e.static=t.backdrop==="static"}_getContentRef(e,t,n){return t?t instanceof V?this._createFromTemplateRef(t,n):ce(t)?this._createFromString(t):this._createFromComponent(e,t,n):new b([])}_createFromTemplateRef(e,t){let n={$implicit:t,close(a){t.close(a)},dismiss(a){t.dismiss(a)}},o=e.createEmbeddedView(n);return this._applicationRef.attachView(o),new b([o.rootNodes],o)}_createFromString(e){let t=this._document.createTextNode(`${e}`);return new b([[t]])}_createFromComponent(e,t,n){let o=T.create({providers:[{provide:K,useValue:n}],parent:e}),a=S(t,{environmentInjector:this._applicationRef.injector,elementInjector:o}),c=a.location.nativeElement;return this._applicationRef.attachView(a.hostView),new b([[c]],a.hostView,a)}_registerOffcanvasRef(e){let t=()=>{this._offcanvasRef=void 0,this._activeInstance.emit(this._offcanvasRef)};this._offcanvasRef=e,this._activeInstance.emit(this._offcanvasRef),e.result.then(t,t)}_registerPanelCmpt(e){this._panelCmpt=e,this._activePanelCmptHasChanged.next(),e.onDestroy(()=>{this._panelCmpt=void 0,this._activePanelCmptHasChanged.next()})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),Bi=(()=>{class i{constructor(){this._injector=r(T),this._offcanvasStack=r(gt),this._config=r(pt)}open(e,t={}){let n=P(J(P({},this._config),{animation:this._config.animation}),t);return this._offcanvasStack.open(this._injector,e,n)}get activeInstance(){return this._offcanvasStack.activeInstance}dismiss(e){this._offcanvasStack.dismiss(e)}hasOpenOffcanvas(){return this._offcanvasStack.hasOpenOffcanvas()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Vi=(()=>{class i{constructor(){this.toasts=[]}show(e){this.toasts.push(e),console.log(this.toasts,"sssssssssssssssss")}remove(e){this.toasts=this.toasts.filter(t=>t!==e)}clear(){this.toasts.splice(0,this.toasts.length)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{U as a,Pi as b,Ii as c,Fi as d,Bi as e,Vi as f};
