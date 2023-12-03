"use strict";(self.webpackChunkbjj_app=self.webpackChunkbjj_app||[]).push([[918],{4918:(me,P,u)=>{u.r(P),u.d(P,{ClassesModule:()=>ge});var c=u(6814),d=u(4581),e=u(5879),A=u(7398),k=u(9862);let T=(()=>{class n{constructor(t){this.http=t,this.apiUrl="https://bjj-app.onrender.com/api/programs"}get token(){return localStorage.getItem("id_token")||""}get headers(){return{headers:{Authorization:this.token}}}createProgram(t){return this.http.post(`${this.apiUrl}`,t,this.headers)}getPrograms(){return this.http.get(`${this.apiUrl}`,this.headers)}getProgramById(t){return this.http.get(`${this.apiUrl}/${t}`,this.headers).pipe((0,A.U)(i=>i.program))}updateProgram(t,i){return this.http.put(`${this.apiUrl}/${t}`,i,this.headers)}deleteProgram(t){return this.http.delete(`${this.apiUrl}/${t}`,this.headers)}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(k.eN))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function I(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function w(n,a){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function L(n,a){if(1&n&&(e.TgZ(0,"li",9),e.YNc(1,I,4,2,"a",10),e.YNc(2,w,4,2,"span",11),e.qZA()),2&n){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&n){const t=e.oxw().$implicit,i=e.oxw(2);e.xp6(2),e.hij("",i.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function q(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&n){const t=e.oxw().$implicit,i=e.oxw(2);e.xp6(3),e.hij("",i.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function U(n,a){if(1&n&&(e.TgZ(0,"li"),e.YNc(1,y,6,5,"a",10),e.YNc(2,q,7,5,"ng-container",15),e.qZA()),2&n){const t=a.$implicit;e.oxw(2);const i=e.MAs(1);e.ekj("current",i.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",i.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",i.getCurrent()===t.value)}}function F(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function N(n,a){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function M(n,a){if(1&n&&(e.TgZ(0,"li",17),e.YNc(1,F,4,2,"a",10),e.YNc(2,N,4,2,"span",11),e.qZA()),2&n){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function O(n,a){if(1&n&&(e.TgZ(0,"ul",4),e.YNc(1,L,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,U,3,6,"li",7),e.YNc(5,M,3,4,"li",8),e.qZA()),2&n){const t=e.oxw(),i=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",i.getCurrent()," / ",i.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",i.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class C{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let i in this.instances[a.id])a[i]!==this.instances[a.id][i]&&(this.instances[a.id][i]=a[i],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let i=this.instances[a];t<=Math.ceil(i.totalItems/i.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i]);return t}}const D=Number.MAX_SAFE_INTEGER;let J=(()=>{class n{constructor(t){this.service=t,this.state={}}transform(t,i){if(!(t instanceof Array)){let m=i.id||this.service.defaultId();return this.state[m]?this.state[m].slice:t}let l,p,s=i.totalItems&&i.totalItems!==t.length,r=this.createInstance(t,i),o=r.id,g=r.itemsPerPage,f=this.service.register(r);if(!s&&t instanceof Array){if(g=+g||D,l=(r.currentPage-1)*g,p=l+g,this.stateIsIdentical(o,t,l,p))return this.state[o].slice;{let x=t.slice(l,p);return this.saveState(o,t,x,l,p),this.service.change.emit(o),x}}return f&&this.service.change.emit(o),this.saveState(o,t,t,l,p),t}createInstance(t,i){return this.checkConfig(i),{id:null!=i.id?i.id:this.service.defaultId(),itemsPerPage:+i.itemsPerPage||0,currentPage:+i.currentPage||1,totalItems:+i.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,i,s,r,o){this.state[t]={collection:i,size:i.length,slice:s,start:r,end:o}}stateIsIdentical(t,i,s,r){let o=this.state[t];return!(!o||o.size!==i.length||o.start!==s||o.end!==r)&&o.slice.every((p,g)=>p===i[s+g])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C,16))},n.\u0275pipe=e.Yjl({name:"paginate",type:n,pure:!1}),n})(),Y=(()=>{class n{constructor(t,i){this.service=t,this.changeDetectorRef=i,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const i=this.outOfBoundCorrection(t);i!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(i),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const i=Math.ceil(t.totalItems/t.itemsPerPage);return i<t.currentPage&&0<i?i:t.currentPage<1?1:t.currentPage}createPageArray(t,i,s,r){r=+r;let o=[];const l=Math.max(Math.ceil(s/i),1),p=Math.ceil(r/2),g=t<=p,f=l-p<t,m=!g&&!f;let x=r<l,h=1;for(;h<=l&&h<=r;){let b,Z=this.calculatePageNumber(h,t,r,l);b=x&&(2===h&&(m||f)||h===r-1&&(m||g))?"...":Z,o.push({label:b,value:Z}),h++}return o}calculatePageNumber(t,i,s,r){let o=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-o<i?r-s+t:o<i?i-o+t:t:t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),n})();function v(n){return!!n&&"false"!==n}let S=(()=>{class n{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=v(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=v(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=v(t)}trackByIndex(t){return t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,i){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return i.pageChange.emit(r)})("pageBoundsCorrection",function(r){return i.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,O,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",i.id)("maxSize",i.maxSize),e.xp6(2),e.uIk("aria-label",i.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(i.autoHide&&s.pages.length<=1))}},dependencies:[Y,c.O5,c.sg,c.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[C],imports:[[c.ez]]}),n})(),E=(()=>{class n{transform(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275pipe=e.Yjl({name:"formatDate",type:n,pure:!0})}return n})(),Q=(()=>{class n{transform(t,i=3){if(!t)return"";let s=t.split(" ");return s.length>i?s.slice(0,i).join(" ")+"...":t}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275pipe=e.Yjl({name:"truncateWords",type:n,pure:!0})}return n})();const j=function(n){return[n]};function $(n,a){if(1&n&&(e.TgZ(0,"li",10)(1,"div",11)(2,"div",12),e._uU(3),e.qZA(),e.TgZ(4,"div",13),e._uU(5),e.qZA(),e.TgZ(6,"div",14),e._uU(7),e.ALo(8,"truncateWords"),e.qZA(),e.TgZ(9,"div",15),e._uU(10),e.qZA(),e.TgZ(11,"div",13),e._uU(12),e.ALo(13,"formatDate"),e.qZA()()()),2&n){const t=a.$implicit,i=a.index,s=e.oxw(2);e.Q6J("routerLink",e.VKq(10,j,"./class/"+t._id)),e.xp6(3),e.Oqu(15*(s.page-1)+i+1),e.xp6(2),e.Oqu(t.programName),e.xp6(2),e.Oqu(e.lcZ(8,6,t.description)),e.xp6(3),e.Oqu(t.user),e.xp6(2),e.Oqu(e.lcZ(13,8,t.date))}}function z(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",18),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw(3);return e.KtG(r.page=s)}),e.qZA()}}function R(n,a){if(1&n&&(e.TgZ(0,"div",16),e.YNc(1,z,1,0,"pagination-controls",17),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",0!=t.total)}}const H=function(n,a){return{itemsPerPage:15,currentPage:n,totalItems:a}};function G(n,a){if(1&n&&(e.TgZ(0,"section",6)(1,"ul",7),e.YNc(2,$,14,12,"li",8),e.ALo(3,"paginate"),e.qZA(),e.YNc(4,R,2,1,"div",9),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",e.xi3(3,2,t.programs,e.WLB(5,H,t.page,t.total))),e.xp6(2),e.Q6J("ngIf",t.programs)}}let K=(()=>{class n{constructor(t){this.programService=t,this.error=null,this.displayedColumns=["position","name","weight","symbol"],this.programs=[],this.creator="",this.total=0,this.page=1}ngOnInit(){this.fetchPrograms()}fetchPrograms(){this.programService.getPrograms().subscribe({next:t=>{t.ok?(this.programs=t.programs,this.total=this.programs.length):this.error="No se pudieron cargar los programas"},error:t=>{console.error("Error al cargar los programas",t),this.error="Error al cargar los programas"}})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(T))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-classes"]],decls:9,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],[1,"admin-top-menu-buttons"],["routerLink","./new-class/",1,"button"],["class","table-container",4,"ngIf"],[1,"table-container"],[1,"table-list"],[3,"routerLink",4,"ngFor","ngForOf"],["class","p-controls",4,"ngIf"],[3,"routerLink"],[1,"item-box"],[1,"item-index-number","item-xsmall"],[1,"items","item-medium"],[1,"items","item-large"],[1,"items","item-small"],[1,"p-controls"],[3,"pageChange",4,"ngIf"],[3,"pageChange"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h2"),e._uU(4,"Flow305 Classes"),e.qZA()(),e.TgZ(5,"div",3)(6,"button",4),e._uU(7,"New Class"),e.qZA()()(),e.YNc(8,G,5,8,"section",5),e.qZA()),2&i&&(e.xp6(8),e.Q6J("ngIf",s.programs))},dependencies:[c.sg,c.O5,d.rH,S,J,E,Q]})}return n})(),X=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-class"]],decls:2,vars:0,template:function(i,s){1&i&&(e.TgZ(0,"p"),e._uU(1,"new-class works!"),e.qZA())}})}return n})();var _=u(696);let W=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-confirm-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"mat-dialog-close"]],template:function(i,s){1&i&&(e.TgZ(0,"h2",0),e._uU(1,"Are you sure?"),e.qZA(),e.TgZ(2,"mat-dialog-content",1)(3,"p"),e._uU(4,"You will NOT be able to revert this!"),e.qZA()(),e.TgZ(5,"mat-dialog-actions")(6,"button",2),e._uU(7,"Cancel"),e.qZA(),e.TgZ(8,"button",3),e._uU(9,"Delete it!"),e.qZA()()),2&i&&(e.xp6(8),e.Q6J("mat-dialog-close",!0))},dependencies:[_.ZT,_.uh,_.xY,_.H8]})}return n})();const V=function(n){return[n]};function ee(n,a){if(1&n&&(e.TgZ(0,"button",9),e._uU(1,"Update "),e.qZA()),2&n){const t=e.oxw();e.Q6J("routerLink",e.VKq(1,V,"../../up-program/"+t.program._id))}}function te(n,a){if(1&n&&(e.TgZ(0,"li",31)(1,"p"),e._uU(2),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.Oqu(t.drill)}}function ne(n,a){if(1&n&&(e.TgZ(0,"li")(1,"div",28),e._uU(2),e.qZA(),e.TgZ(3,"ul",29),e.YNc(4,te,3,1,"li",30),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.hij("",t.groupName,":"),e.xp6(2),e.Q6J("ngForOf",t.drills)}}function ie(n,a){if(1&n&&(e.TgZ(0,"li",25)(1,"div",26),e._uU(2),e.qZA(),e.TgZ(3,"ul",27),e.YNc(4,ne,5,2,"li",19),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.Oqu(t.weekName),e.xp6(2),e.Q6J("ngForOf",t.curriculum)}}function ae(n,a){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.hij("",t,". ")}}function se(n,a){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.hij("",t,". ")}}function re(n,a){if(1&n&&(e.TgZ(0,"li",36)(1,"p"),e._uU(2),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.hij("",t.technique,".")}}function oe(n,a){if(1&n&&(e.TgZ(0,"li",32)(1,"div",33),e._uU(2),e.qZA(),e.TgZ(3,"ul",34),e.YNc(4,re,3,1,"li",35),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.Oqu(t.groupName),e.xp6(2),e.Q6J("ngForOf",t.techniques)}}function le(n,a){if(1&n&&(e.TgZ(0,"div",10)(1,"div",11)(2,"h3"),e._uU(3),e.qZA(),e._UZ(4,"p",12),e.qZA(),e.TgZ(5,"div",13)(6,"ul",14),e.YNc(7,ie,5,2,"li",15),e.qZA()(),e.TgZ(8,"div",16)(9,"div",17)(10,"h3"),e._uU(11,"Main Concepts:"),e.qZA(),e.TgZ(12,"div",18),e.YNc(13,ae,3,1,"div",19),e.qZA()(),e.TgZ(14,"div",20)(15,"h3"),e._uU(16,"Main Positions:"),e.qZA(),e.TgZ(17,"div",18),e.YNc(18,se,3,1,"div",19),e.qZA()(),e.TgZ(19,"div",21)(20,"h3"),e._uU(21,"Techniques:"),e.qZA(),e.TgZ(22,"ul",22),e.YNc(23,oe,5,2,"li",23),e.qZA()()(),e.TgZ(24,"div",24)(25,"p"),e._uU(26,"All the techniques of the program can be taken into account in the event of an evaluation to promote the student to the next level. The professor in charge will determine which ones the student should demonstrate in the exam."),e.qZA()()()),2&n){const t=e.oxw();e.xp6(3),e.AsE("",t.program.programName," | CREATED BY: ",t.program.user,""),e.xp6(1),e.Q6J("innerHTML",t.program.description,e.oJD),e.xp6(3),e.Q6J("ngForOf",t.program.weeks),e.xp6(6),e.Q6J("ngForOf",t.program.mainConcepts),e.xp6(5),e.Q6J("ngForOf",t.program.mainPositions),e.xp6(5),e.Q6J("ngForOf",t.program.techniques)}}const pe=[{path:"",component:K},{path:"new-class",component:X},{path:"class/:id",component:(()=>{class n{constructor(t,i,s){this.route=t,this.router=i,this.programService=s}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.programService.getProgramById(this.id).subscribe(t=>{this.program=t,console.log(this.program)})}captureScreen(){}deleteProgram(){this.dialog.open(W,{width:"300px"}).afterClosed().subscribe(i=>{i&&this.programService.deleteProgram(this.route.snapshot.params.id).subscribe(()=>{this.router.navigate(["/admin/dashboard/flow-classes"])})})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(T))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-class"]],decls:14,vars:2,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],[1,"admin-top-menu-buttons"],[3,"click"],["routerLink","/admin/dashboard/school/programs",1,""],["class","",3,"routerLink",4,"ngIf"],[1,"red-button",3,"click"],["class","program-container","id","program-screen",4,"ngIf"],[1,"",3,"routerLink"],["id","program-screen",1,"program-container"],[1,"program-header"],[3,"innerHTML"],[1,"program-weeks"],[1,"week-list"],["class","week-container",4,"ngFor","ngForOf"],[1,"program-middle"],[1,"program-mainConcepts"],[1,"concepts-box"],[4,"ngFor","ngForOf"],[1,"program-mainPositions"],[1,"program-techniques"],[1,"techniques-groups-list"],["class","technique-group",4,"ngFor","ngForOf"],[1,"program-footer"],[1,"week-container"],[1,"week-name"],[1,"curriculum-list"],[1,"moves-name"],[1,"moves-list"],["class","moves-items",4,"ngFor","ngForOf"],[1,"moves-items"],[1,"technique-group"],[1,"group-name"],[1,"techniques-list"],["class","tech-box",4,"ngFor","ngForOf"],[1,"tech-box"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h2"),e._uU(4,"Flow305 Class"),e.qZA()(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return s.captureScreen()}),e._uU(7,"Download"),e.qZA(),e.TgZ(8,"button",5),e._uU(9,"All "),e.qZA(),e.YNc(10,ee,2,3,"button",6),e.TgZ(11,"button",7),e.NdJ("click",function(){return s.deleteProgram()}),e._uU(12,"delete "),e.qZA()()(),e.YNc(13,le,27,7,"div",8),e.qZA()),2&i&&(e.xp6(10),e.Q6J("ngIf",s.program),e.xp6(3),e.Q6J("ngIf",s.program))},dependencies:[c.sg,c.O5,d.rH]})}return n})()},{path:"up-class/:id",component:(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-class"]],decls:2,vars:0,template:function(i,s){1&i&&(e.TgZ(0,"p"),e._uU(1,"update-class works!"),e.qZA())}})}return n})()}];let ce=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(pe),d.Bz]})}return n})(),ge=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,ce,B]})}return n})()}}]);