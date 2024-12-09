import{a as L,b as N,e as H,f as x}from"./chunk-SMXNGZ64.js";import{a as h}from"./chunk-G2EOSV57.js";import{A as le,B as c,C as S,Ca as be,D as M,Da as we,E as ae,Fa as ye,G as ce,Ga as _e,H as I,I as k,J as de,M as me,N as R,Na as B,O as _,Oa as Ue,P as d,Pa as $,Q as K,Qa as Ce,Ra as Te,S as pe,Sa as xe,T as U,Ta as Y,U as O,Ua as De,Va as Ee,W as C,Wa as Me,Xa as Ie,Z as z,_ as ue,a as Q,aa as fe,b as ee,ba as he,ca as s,da as l,ea as f,f as te,h as j,ha as ge,i as ie,ia as m,j as ne,ja as v,l as re,ma as T,sa as a,ta as F,u as W,v as oe,va as Se,wa as A,x as se,xa as ve,y as E}from"./chunk-KWL76CSD.js";var b=(()=>{class e{constructor(t){this.HttpClient=t}getLsitOFUsers(t){return this.HttpClient.get(h.BaseURL+h.users+`?page=${t}`)}getUserDetails(t){return this.HttpClient.get(h.BaseURL+h.users+`/${t}`)}createUser(t){return this.HttpClient.post(h.BaseURL+h.users,t)}eidtUser(t,i){return this.HttpClient.put(h.BaseURL+h.users+`/${i}`,t)}deleteUsers(t){return this.HttpClient.delete(h.BaseURL+h.users+`/${t}`)}static{this.\u0275fac=function(i){return new(i||e)(le(_e))}}static{this.\u0275prov=se({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var P=(()=>{class e{constructor(){this.activeModal=c(L),this.UsersService=c(b),this.name=""}ngOnInit(){console.log("Received content:",this.name)}dismiss(){this.activeModal.dismiss()}confirm(){this.activeModal.close("Delete")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-delete-modal"]],inputs:{name:"name"},standalone:!0,features:[A],decls:10,vars:1,consts:[[1,"modal-body","text-center"],[1,"text-secondary"],[1,"text-dark"],[1,"mt-3"],["type","button",1,"btn","text-primary","rounded-5","border-1","solid","border-primary",3,"click"],["type","button",1,"btn","bg-primary","text-white","rounded-5","me-1",3,"click"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"p",1),a(2,"Are you sure you want to delete"),l(),s(3,"p",2),a(4),l(),s(5,"div",3)(6,"button",4),m("click",function(){return r.dismiss()}),a(7," No "),l(),s(8,"button",5),m("click",function(){return r.confirm()}),a(9,"Yes"),l()()()),i&2&&(d(4),F(r.name))},styles:[".btn[_ngcontent-%COMP%]{width:45%;margin-inline-end:1rem}"]})}}return e})();function je(e,n){if(e&1&&(s(0,"div",1),f(1,"img",12),l()),e&2){let t=v();d(),T("src",t.userList().avatar,_)}}function We(e,n){e&1&&(s(0,"div",1),f(1,"img",13),l())}function Re(e,n){e&1&&a(0," Edit ")}function Ke(e,n){e&1&&a(0," Add ")}var V=(()=>{class e{constructor(){this.activeModal=c(L),this.UsersService=c(b),this.ToastServiceService=c(x),this.userList=U({id:0,email:"",first_name:"",last_name:"",avatar:""})}ngOnInit(){this.initForm(),this.user!==void 0&&this.UsersService.getUserDetails(this.user.id).subscribe({next:t=>{this.userList.set(t.data),this.UserFrom.patchValue({name:this.userList().first_name+" "+this.userList().last_name,job:""})},error:t=>{this.ToastServiceService.show({template:"No User found",classname:"bg-danger text-light",delay:4e3}),console.log(t)}})}cansle(){this.activeModal.dismiss()}addUSer(){this.UsersService.createUser(this.UserFrom.value).subscribe({next:t=>{this.ToastServiceService.show({template:"User Added Successfully",classname:"bg-success text-light",delay:4e3}),this.activeModal.close()},error:t=>{this.ToastServiceService.show({template:"User not Added",classname:"bg-danger text-light",delay:4e3})}})}editUSer(){this.UsersService.eidtUser(this.UserFrom.value,this.user.id).subscribe({next:t=>{this.ToastServiceService.show({template:"User edit Successfully",classname:"bg-success text-light",delay:4e3}),this.activeModal.close()},error:t=>{this.ToastServiceService.show({template:"User not edit",classname:"bg-danger text-light",delay:4e3})}})}initForm(){this.UserFrom=new xe({name:new Y("",[$.required]),job:new Y("",[$.required])})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-add-edit-user"]],inputs:{user:"user"},decls:19,vars:3,consts:[[1,"add_edit_container","position-relative"],[1,"bg-white","p-1","rounded-img","img_container","position-absolute"],[1,"p-3",3,"formGroup"],[1,"form-group","mt-5"],["for","exampleInputEmail1",1,"text-secondary","fs-6"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","name","formControlName","name",1,"form-control","text-secondary"],[1,"form-group","mt-2"],["for","exampleInputPassword1",1,"text-secondary","fs-6"],["type","text","id","exampleInputPassword1","placeholder","job Title","formControlName","job",1,"form-control","text-secondary"],[1,"mt-4","text-center"],["type","button",1,"btn","text-primary","rounded-5","border-1","solid","border-primary",3,"click"],["type","button",1,"btn","bg-primary","text-white","rounded-5","me-1",3,"click"],["width","120","height","120","alt","","srcset","",1,"rounded-img","mg-fluid","object-fit-contain",3,"src"],["src","assets/icons8-user.svg","width","120","height","120","alt","","srcset","",1,"rounded-img","img-fluid","object-fit-contain","bg-grey"]],template:function(i,r){i&1&&(s(0,"div",0),O(1,je,2,1,"div",1)(2,We,2,0),s(3,"div")(4,"form",2)(5,"div",3)(6,"label",4),a(7,"Name"),l(),f(8,"input",5),l(),s(9,"div",6)(10,"label",7),a(11,"job Title"),l(),f(12,"input",8),l(),s(13,"div",9)(14,"button",10),m("click",function(){return r.cansle()}),a(15," Cancel "),l(),s(16,"button",11),m("click",function(){return r.user?r.editUSer():r.addUSer()}),O(17,Re,1,0)(18,Ke,1,0),l()()()()()),i&2&&(d(),z(1,r.userList().avatar?1:2),d(3),C("formGroup",r.UserFrom),d(13),z(17,r.user?17:18))},dependencies:[De,Ue,Ce,Te,Ee,Me],styles:[".img_container[_ngcontent-%COMP%]{top:-25%;left:40%}.rounded-img[_ngcontent-%COMP%]{border-radius:100%}input[_ngcontent-%COMP%]{height:3rem;margin-top:.5rem}.btn[_ngcontent-%COMP%]{width:45%;margin-inline-end:1rem;height:3rem}"]})}}return e})();var ke=(()=>{class e{constructor(){this.offcanvas=c(H),this.UsersService=c(b),this.ToastServiceService=c(x),this.modalService=c(N),this.UserDetalis=U({id:0,email:"",first_name:"",last_name:"",avatar:""})}ngOnInit(){this.UsersService.getUserDetails(this.Id).subscribe({next:t=>{this.UserDetalis.set(t.data)},error:t=>{this.ToastServiceService.show({template:"No User found",classname:"bg-danger text-light",delay:4e3}),console.log(t)}})}cansle(){this.offcanvas.dismiss()}editUser(){this.offcanvas.dismiss(),this.editAndAddUser(this.UserDetalis())}editAndAddUser(t){let i=this.modalService.open(V,{centered:!0,size:"md"});i.componentInstance.user=t,i.closed.subscribe(r=>{})}deleteUser(){this.offcanvas.dismiss();let t=this.modalService.open(P,{centered:!0,size:"md"});t.componentInstance.name=`${this.UserDetalis().first_name} ${this.UserDetalis().last_name}`,t.closed.subscribe(i=>{i==="Delete"&&this.UsersService.deleteUsers(this.UserDetalis().id).subscribe({next:r=>{this.ToastServiceService.show({template:"User Deleted Successfully",classname:"bg-success text-light",delay:3e3})},error:r=>{console.log(r)}})})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-side-bar-user-details"]],inputs:{Id:"Id"},standalone:!0,features:[A],decls:16,vars:3,consts:[[1,"offcanvas-header"],["type","button","aria-label","Close",1,"btn-close","text-primary",3,"click"],[1,"offcanvas-body"],[1,"content","text-center"],["alt","","srcset","",1,"",3,"src"],[1,"mt-4","mb-4","fw-semibold","fs-2"],[1,"mt-3","text-center"],["type","button",1,"btn","text-primary","rounded-5","border-1","solid","border-primary",3,"click"],["type","button",1,"btn","bg-primary","text-white","rounded-5","me-1",3,"click"]],template:function(i,r){i&1&&(s(0,"div")(1,"div",0)(2,"button",1),m("click",function(){return r.cansle()}),l()(),s(3,"div",2)(4,"div",3),f(5,"img",4),s(6,"div",5)(7,"span"),a(8),l(),s(9,"span"),a(10),l()()(),s(11,"div",6)(12,"button",7),m("click",function(){return r.deleteUser()}),a(13," Delete "),l(),s(14,"button",8),m("click",function(){return r.editUser()}),a(15," Edit "),l()()()()),i&2&&(d(5),T("src",r.UserDetalis().avatar,_),d(3),F(r.UserDetalis().first_name),d(2),F(r.UserDetalis().last_name))},styles:[".btn[_ngcontent-%COMP%]{width:45%;margin-inline-end:1rem}"]})}}return e})();function ze(e,n,t,i){let r=window&&!!window.document&&window.document.documentElement,o=r&&n?window:t;if(e&&(o=e&&r&&typeof e=="string"?Be(e,t.nativeElement,i):e,!o))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return o}function Be(e,n,t){return(t?window.document:n).querySelector(e)}function G(e){return e&&!e.firstChange}function $e(){return typeof window<"u"}var Ye={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},Ge={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},q=class{constructor(n=!0){this.vertical=n,this.propsMap=n?Ye:Ge}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}};function qe(e,n,t){return!!(e&&n||!t&&n)}function Xe({windowElement:e,axis:n}){return Ze({axis:n,isWindow:Je(e)},e)}function Ze(e,n){let t=e.isWindow||n&&!n.nativeElement?n:n.nativeElement;return ee(Q({},e),{container:t})}function Je(e){return["Window","global"].some(t=>Object.prototype.toString.call(e).includes(t))}function J(e,n){return e?n.document.documentElement:null}function Oe(e,n){let t=tt(n);return n.isWindow?Qe(t,e,n):et(t,e,n)}function Qe(e,n,t){let{axis:i,container:r,isWindow:o}=t,{offsetHeightKey:p,clientHeightKey:u}=Fe(i),w=e+Le(J(o,r),i,o),g=Ae(n.nativeElement,o,p,u),D=it(n.nativeElement,i,o)+g;return{height:e,scrolled:w,totalToScroll:D,isWindow:o}}function et(e,n,t){let{axis:i,container:r}=t,o=r[i.scrollTopKey()],p=r[i.scrollHeightKey()];return{height:e,scrolled:o,totalToScroll:p,isWindow:!1}}function Fe(e){return{offsetHeightKey:e.offsetHeightKey(),clientHeightKey:e.clientHeightKey()}}function tt({container:e,isWindow:n,axis:t}){let{offsetHeightKey:i,clientHeightKey:r}=Fe(t);return Ae(e,n,i,r)}function Ae(e,n,t,i){if(isNaN(e[t])){let r=J(n,e);return r?r[i]:0}else return e[t]}function it(e,n,t){let i=n.topKey();if(e.getBoundingClientRect)return e.getBoundingClientRect()[i]+Le(e,n,t)}function Le(e,n,t){let i=n.pageYOffsetKey(),r=n.scrollTopKey(),o=n.offsetTopKey();return isNaN(window.pageYOffset)?J(t,e)[r]:e.ownerDocument?e.ownerDocument.defaultView[i]:e[o]}function nt(e,n={down:0,up:0},t){let i,r;if(e.totalToScroll<=0)return!1;let o=e.isWindow?e.scrolled:e.height+e.scrolled;if(t)i=(e.totalToScroll-o)/e.totalToScroll,r=(n?.down?n.down:0)/10;else{let u=e.scrolled+(e.totalToScroll-o);i=e.scrolled/u,r=(n?.up?n.up:0)/10}return i<=r}function rt(e,n){return e<n.scrolled}function ot(e,n,t){let i=rt(e,n);return{fire:nt(n,t,i),scrollDown:i}}var X=class{constructor(n){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,n)}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,t){this.updateScrollPosition(n),this.updateTotalToScroll(t)}updateTriggeredFlag(n,t){t?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,t){return t?this.triggered.down===n:this.triggered.up===n}};function st(e){let{scrollContainer:n,scrollWindow:t,element:i,fromRoot:r}=e,o=Xe({axis:new q(!e.horizontal),windowElement:ze(n,t,i,r)}),p=new X({totalToScroll:Oe(i,o).totalToScroll}),u={container:o.container,throttle:e.throttle},w={up:e.upDistance,down:e.downDistance};return lt(u).pipe(ie(()=>te(Oe(i,o))),j(g=>at(p.lastScrollPosition,g,w)),W(({stats:g})=>p.updateScroll(g.scrolled,g.totalToScroll)),re(({fire:g,scrollDown:D,stats:{totalToScroll:Ve}})=>qe(e.alwaysCallback,g,p.isTriggeredScroll(Ve,D))),W(({scrollDown:g,stats:{totalToScroll:D}})=>{p.updateTriggeredFlag(D,g)}),j(ct))}function lt(e){let n=ne(e.container,"scroll");return e.throttle&&(n=n.pipe(oe(e.throttle,void 0,{leading:!0,trailing:!0}))),n}function at(e,n,t){let{scrollDown:i,fire:r}=ot(e,n,t);return{scrollDown:i,fire:r,stats:n}}var Z={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function ct(e){let{scrollDown:n,stats:{scrolled:t}}=e;return{type:n?Z.DOWN:Z.UP,payload:{currentScrollPosition:t}}}var Ne=(()=>{class e{constructor(t,i){this.element=t,this.zone=i,this.scrolled=new R,this.scrolledUp=new R,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:i,infiniteScrollDistance:r}){let o=G(t),p=G(i),u=G(r),w=!p&&!this.infiniteScrollDisabled||p&&!i.currentValue||u;(o||p||u)&&(this.destroyScroller(),w&&this.setup())}ngOnDestroy(){this.destroyScroller()}setup(){$e()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=st({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.handleOnScroll(t))})}handleOnScroll({type:t,payload:i}){let r=t===Z.DOWN?this.scrolled:this.scrolledUp;dt(r)&&this.zone.run(()=>r.emit(i))}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)(K(me),K(pe))}}static{this.\u0275dir=ae({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},standalone:!0,features:[ce]})}}return e})();function dt(e){return e.observed??e.observers.length>0}var pt=(e,n)=>({"bg-primary text-white":e,"bg-secondary":n});function ut(e,n){if(e&1){let t=ge();s(0,"div",12),m("click",function(){let r=I(t).$implicit,o=v();return k(o.setActiveUser(r.id))}),s(1,"div",13),f(2,"img",14),s(3,"p",15),a(4),l()(),s(5,"div",16)(6,"button",17),m("click",function(){let r=I(t).$implicit,o=v();return k(o.editAndAddUser(r))}),s(7,"span"),f(8,"img",18),l()(),s(9,"button",19),m("click",function(){let r=I(t).$implicit,o=v();return k(o.deleteUser(r.first_name,r.last_name,r.id))}),s(10,"span"),f(11,"img",20),l()(),s(12,"span",21),m("click",function(){let r=I(t).$implicit,o=v();return k(o.displayActions(r.id))}),de(),s(13,"svg",22),f(14,"path",23),l()()()()}if(e&2){let t=n.$implicit,i=v();C("ngClass",ve(4,pt,i.isActive(t.id),!i.isActive(t.id))),d(2),T("src",t.avatar,_),d(2),Se("",t.first_name," ",t.last_name,"")}}function ft(e,n){e&1&&(s(0,"p",24),a(1," loading more Users........... "),l())}var He=(()=>{class e{constructor(){this.UsersService=c(b),this.modalService=c(N),this.ToastServiceService=c(x),this.offcanvasService=c(H),this.page=1,this.userList=U([]),this.loadingSpinner=!1,this.activeUserId=null}ngOnInit(){this.usersList()}usersList(){return this.UsersService.getLsitOFUsers(this.page).subscribe(t=>{this.userList.update(i=>i.concat(t.data))})}onScrollDown(){this.loadingSpinner=!0,this.page++,this.usersList(),this.loadingSpinner=!1}displayActions(t){let i=this.offcanvasService.open(ke,{backdrop:!1,position:"end"});i.componentInstance.Id=t}editAndAddUser(t){let i=this.modalService.open(V,{centered:!0,size:"md"});i.componentInstance.user=t,i.closed.subscribe(r=>{this.userList.set([]),this.page=1,this.usersList()})}deleteUser(t,i,r){let o=this.modalService.open(P,{centered:!0,size:"md"});o.componentInstance.name=`${t} ${i}`,o.closed.subscribe(p=>{p==="Delete"&&this.UsersService.deleteUsers(r).subscribe({next:u=>{this.userList.set([]),this.page=1,this.usersList(),this.ToastServiceService.show({template:"User Deleted Successfully",classname:"bg-success text-light",delay:3e3})},error:u=>{console.log(u)}})})}setActiveUser(t){this.activeUserId=t}isActive(t){return this.activeUserId===t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-users-view-list"]],decls:26,vars:4,consts:[[1,"container","mt-4"],[1,"fs-6","text-primary"],[1,"d-flex","justify-content-between"],[1,"btn","bg-primary","text-white","fs-6",3,"click"],[1,"fs-5","fw-bold"],[1,"mt-4","user_container","w-100","rounded-4"],[1,"d-flex","justify-content-between","text-white","p-3","bg-secondary","rounded-top"],[1,"text-secondary"],[1,"text-secondary","me-5"],["infiniteScroll","",1,"search-results","rounded-bottom",3,"scrolled","infiniteScrollDistance","infiniteScrollUpDistance","infiniteScrollThrottle"],[1,"user-Card","d-flex","justify-content-between","align-items-center","border-bottom","solid","border-color-light","bg-secondary",3,"ngClass"],["class","text-center mt-5 text-primary fw-lighter",4,"ngIf"],[1,"user-Card","d-flex","justify-content-between","align-items-center","border-bottom","solid","border-color-light","bg-secondary",3,"click","ngClass"],[1,"d-flex"],["width","60","height","60","alt","",1,"object-fit-contain","rounded-5",3,"src"],[1,"ms-3","mt-4"],[1,""],[1,"btn","me-3","bg-white","bg-white","border-1","solid","border-primary","pb-2",3,"click"],["src","assets/icons8-edit copy 4.svg","alt","","srcset",""],[1,"btn","me-3","bg-white","border-1","solid","border-primary","pb-2",3,"click"],["src","assets/icons8-delete copy 2.svg","alt","","srcset",""],[1,"text-primary","fs-5","fw-bold","btn",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","25","height","18","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-right","fw-bold"],["fill-rule","evenodd","d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"],[1,"text-center","mt-5","text-primary","fw-lighter"]],template:function(i,r){i&1&&(s(0,"section",0)(1,"p",1)(2,"span"),a(3,"home"),l(),a(4,"/ "),s(5,"span"),a(6,"DashBoard"),l()(),s(7,"div",2)(8,"div")(9,"h2"),a(10,"Users List"),l()(),s(11,"div")(12,"button",3),m("click",function(){return r.editAndAddUser()}),s(13,"span",4),a(14,"+"),l(),a(15," New User "),l()()(),s(16,"div",5)(17,"div",6)(18,"div",7),a(19,"User"),l(),s(20,"div",8),a(21,"Actions"),l()(),s(22,"div",9),m("scrolled",function(){return r.onScrollDown()}),fe(23,ut,15,7,"div",10,ue),O(25,ft,2,0,"p",11),l()()()),i&2&&(d(22),C("infiniteScrollDistance",2)("infiniteScrollUpDistance",1.5)("infiniteScrollThrottle",50),d(),he(r.userList()),d(2),C("ngIf",r.loadingSpinner))},dependencies:[be,we,Ne],styles:[".user_container[_ngcontent-%COMP%]   .user-Card[_ngcontent-%COMP%]{padding:1rem}.user_container[_ngcontent-%COMP%]   .user-Card[_ngcontent-%COMP%]:hover{background-color:#8e44ad0d}.search-results[_ngcontent-%COMP%]{height:60rem}"]})}}return e})();var ht=[{path:"",pathMatch:"full",redirectTo:"user-view"},{path:"user-view",component:He}],Pe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=M({type:e})}static{this.\u0275inj=E({imports:[B.forChild(ht),B]})}}return e})();var Si=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=M({type:e})}static{this.\u0275inj=E({imports:[ye,Pe,Ie]})}}return e})();export{Si as UsersModule};
