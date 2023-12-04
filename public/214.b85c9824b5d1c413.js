"use strict";(self.webpackChunkbjj_app=self.webpackChunkbjj_app||[]).push([[214],{9214:(w,c,s)=>{s.r(c),s.d(c,{UsersModule:()=>N});var u=s(6814),n=s(6223),m=s(4581),Z=s(8525),d=s(2032),U=s(5986),l=s(9157),h=s(324),t=s(5879),f=s(3076),p=s(6472),q=s(684);const A=function(e){return[e]};function v(e,i){if(1&e&&(t.TgZ(0,"li",10)(1,"div",11)(2,"div",12),t._uU(3),t.qZA(),t.TgZ(4,"div",13),t._uU(5),t.qZA(),t.TgZ(6,"div",14),t._uU(7),t.ALo(8,"truncateWords"),t.qZA(),t.TgZ(9,"div",15),t._uU(10),t.qZA()()()),2&e){const o=i.$implicit,r=i.index,a=t.oxw(2);t.Q6J("routerLink",t.VKq(8,A,"./user/"+o._id)),t.xp6(3),t.Oqu(15*(a.page-1)+r+1),t.xp6(2),t.AsE("",o.name," ",o.lastName,""),t.xp6(2),t.Oqu(t.lcZ(8,6,o.type)),t.xp6(3),t.Oqu(o.role)}}function x(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"pagination-controls",18),t.NdJ("pageChange",function(a){t.CHM(o);const g=t.oxw(3);return t.KtG(g.page=a)}),t.qZA()}}function C(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,x,1,0,"pagination-controls",17),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0!=o.total)}}const _=function(e,i){return{itemsPerPage:15,currentPage:e,totalItems:i}};function y(e,i){if(1&e&&(t.TgZ(0,"section",6)(1,"ul",7),t.YNc(2,v,11,10,"li",8),t.ALo(3,"paginate"),t.qZA(),t.YNc(4,C,2,1,"div",9),t.qZA()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,o.users,t.WLB(5,_,o.page,o.total))),t.xp6(2),t.Q6J("ngIf",o.users)}}const b=[{path:"",component:(()=>{class e{constructor(o){this.userService=o,this.error=null,this.users=[],this.total=0,this.page=1}ngOnInit(){this.fetchUsers()}fetchUsers(){this.userService.getusers().subscribe({next:o=>{this.users=o,this.total=this.users.length,console.log(this.users)},error:o=>{console.error("Error al cargar los programas",o),this.error="Error al cargar los programas"}})}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(f.K))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:9,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],[1,"admin-top-menu-buttons"],["routerLink","./new-user/",1,"button"],["class","table-container",4,"ngIf"],[1,"table-container"],[1,"table-list"],[3,"routerLink",4,"ngFor","ngForOf"],["class","p-controls",4,"ngIf"],[3,"routerLink"],[1,"item-box"],[1,"item-index-number","item-xsmall"],[1,"items","item-medium"],[1,"items","item-large"],[1,"items","item-small"],[1,"p-controls"],[3,"pageChange",4,"ngIf"],[3,"pageChange"]],template:function(r,a){1&r&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h2"),t._uU(4,"Flow305 Staff"),t.qZA()(),t.TgZ(5,"div",3)(6,"button",4),t._uU(7,"New Coach"),t.qZA()()(),t.YNc(8,y,5,8,"section",5),t.qZA()),2&r&&(t.xp6(8),t.Q6J("ngIf",a.users))},dependencies:[u.sg,u.O5,m.rH,p.LS,p._s,q.d]})}return e})()},{path:"new-user",component:(()=>{class e{constructor(o,r,a){this.formBuilder=o,this.router=r,this.userService=a,this.newUserForm=this.formBuilder.group({active:[!0,n.kI.required],address:[""],address2:[""],athletes:[[]],city:[""],dateSignedIn:[new Date,n.kI.required],dob:[""],email:["",[n.kI.required,n.kI.email]],emailVerified:[!0],lastName:["",n.kI.required],name:["",n.kI.required],phone:[""],photoURL:[""],role:["MEMBER",n.kI.required],signature:[""],state:[""],status:["active",n.kI.required],type:["professor",n.kI.required],waiver:[!0,n.kI.required],zip:[""],password:["",[n.kI.required,n.kI.minLength(6)]]})}onSubmit(){if(this.newUserForm.valid){const o=this.newUserForm.value;console.log("Creando nuevo usuario:",o),this.userService.createuser(o).subscribe(()=>{console.log("new user created"),this.router.navigate(["/admin/dashboard/users"])})}else console.error("Formulario no v\xe1lido")}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(n.qu),t.Y36(m.F0),t.Y36(f.K))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-user"]],decls:72,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],[1,"admin-top-menu-buttons"],["routerLink","/admin/dashboard/users",1,"button"],[1,"new-p-form",3,"formGroup","ngSubmit"],[1,"top-form-user"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","matInput","","required","",1,"form-control"],["for","lastName"],["type","text","id","lastName","formControlName","lastName","matInput","","required","",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","matInput","","required","",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password","matInput","","required","",1,"form-control"],["for","role"],["type","text","id","role","formControlName","role","matInput","","required","",1,"form-control"],["for","type"],["type","text","id","type","formControlName","type","matInput","","required","",1,"form-control"],["for","status"],["type","text","id","status","formControlName","status","matInput","","required","",1,"form-control"],["for","address"],["type","text","id","address","formControlName","address","matInput","",1,"form-control"],["for","address2"],["type","text","id","address2","formControlName","address2","matInput","",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city","matInput","",1,"form-control"],["for","state"],["type","text","id","state","formControlName","state","matInput","",1,"form-control"],["for","zip"],["type","text","id","zip","formControlName","zip","matInput","",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone","matInput","",1,"form-control"],["for","dob"],["type","date","id","dob","formControlName","dob","matInput","",1,"form-control"],["for","signature"],["type","text","id","signature","formControlName","signature","matInput","",1,"form-control"],["type","submit",1,"submit-button"]],template:function(r,a){1&r&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h2"),t._uU(4,"Class creator"),t.qZA()(),t.TgZ(5,"div",3)(6,"button",4),t._uU(7,"Back"),t.qZA()()(),t.TgZ(8,"form",5),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(9,"section",6)(10,"mat-form-field",7)(11,"mat-label",8),t._uU(12,"Name:"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"mat-form-field",7)(15,"mat-label",10),t._uU(16,"Last Name:"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"mat-form-field",7)(19,"mat-label",12),t._uU(20,"Email:"),t.qZA(),t._UZ(21,"input",13),t.qZA(),t.TgZ(22,"mat-form-field",7)(23,"mat-label",14),t._uU(24,"Password:"),t.qZA(),t._UZ(25,"input",15),t.qZA(),t.TgZ(26,"mat-form-field",7)(27,"mat-label",16),t._uU(28,"Role:"),t.qZA(),t._UZ(29,"input",17),t.qZA(),t.TgZ(30,"mat-form-field",7)(31,"mat-label",18),t._uU(32,"Type:"),t.qZA(),t._UZ(33,"input",19),t.qZA(),t.TgZ(34,"mat-form-field",7)(35,"mat-label",20),t._uU(36,"Status:"),t.qZA(),t._UZ(37,"input",21),t.qZA(),t.TgZ(38,"mat-form-field",7)(39,"mat-label",22),t._uU(40,"Address:"),t.qZA(),t._UZ(41,"input",23),t.qZA(),t.TgZ(42,"mat-form-field",7)(43,"mat-label",24),t._uU(44,"Address 2:"),t.qZA(),t._UZ(45,"input",25),t.qZA(),t.TgZ(46,"mat-form-field",7)(47,"mat-label",26),t._uU(48,"City:"),t.qZA(),t._UZ(49,"input",27),t.qZA(),t.TgZ(50,"mat-form-field",7)(51,"mat-label",28),t._uU(52,"State:"),t.qZA(),t._UZ(53,"input",29),t.qZA(),t.TgZ(54,"mat-form-field",7)(55,"mat-label",30),t._uU(56,"Zip Code:"),t.qZA(),t._UZ(57,"input",31),t.qZA(),t.TgZ(58,"mat-form-field",7)(59,"mat-label",32),t._uU(60,"Phone Number:"),t.qZA(),t._UZ(61,"input",33),t.qZA(),t.TgZ(62,"mat-form-field",7)(63,"mat-label",34),t._uU(64,"Date of Birth:"),t.qZA(),t._UZ(65,"input",35),t.qZA(),t.TgZ(66,"mat-form-field",7)(67,"mat-label",36),t._uU(68,"Signature:"),t.qZA(),t._UZ(69,"input",37),t.qZA()(),t.TgZ(70,"button",38),t._uU(71,"Create User"),t.qZA()()()),2&r&&(t.xp6(8),t.Q6J("formGroup",a.newUserForm))},dependencies:[m.rH,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,d.Nt,l.KE,l.hX],styles:[".new-p-form[_ngcontent-%COMP%]{width:100%;max-width:1300px;min-height:50vh!important;background-color:var(--admin-grey-1);color:var(--admin-black);overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;padding:30px 40px 40px;margin-top:30px}"]})}return e})()},{path:"user/:id",component:(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:2,vars:0,template:function(r,a){1&r&&(t.TgZ(0,"p"),t._uU(1,"user works!"),t.qZA())}})}return e})()},{path:"up-user/:id",component:(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-user"]],decls:2,vars:0,template:function(r,a){1&r&&(t.TgZ(0,"p"),t._uU(1,"update-user works!"),t.qZA())}})}return e})()}];let T=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(b),m.Bz]})}return e})();var I=s(682);let N=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[u.ez,T,m.Bz,n.UX,n.u5,p.JX,d.c,l.lN,Z.LD,U.p9,h.Fk,I.G]})}return e})()}}]);