"use strict";(self.webpackChunkbjj_app=self.webpackChunkbjj_app||[]).push([[997],{4997:(w,p,r)=>{r.r(p),r.d(p,{StudentsModule:()=>x});var l=r(6814),a=r(6223),m=r(4581),Z=r(8525),c=r(2032),h=r(5986),u=r(9157),A=r(324),t=r(5879),f=r(748),d=r(6472),_=r(127),U=r(684);const q=function(e){return[e]};function C(e,s){if(1&e&&(t.TgZ(0,"li",11)(1,"div",12)(2,"div",13),t._uU(3),t.qZA(),t.TgZ(4,"div",14),t._uU(5),t.qZA(),t.TgZ(6,"div",14),t._uU(7),t.ALo(8,"truncateWords"),t.qZA(),t.TgZ(9,"div",14),t._uU(10),t.ALo(11,"formatDate"),t.qZA(),t.TgZ(12,"div",14),t._uU(13),t.ALo(14,"formatDate"),t.qZA()()()),2&e){const n=s.$implicit,o=s.index,i=t.oxw(2);t.Q6J("routerLink",t.VKq(14,q,"./student/"+n._id)),t.xp6(3),t.Oqu(15*(i.page-1)+o+1),t.xp6(2),t.AsE("",n.name," ",n.lastName,""),t.xp6(2),t.AsE("",t.lcZ(8,8,n.current_rank),", degrees: ",n.stripes,""),t.xp6(3),t.hij("Last Prom: ",t.lcZ(11,10,n.last_promotion),""),t.xp6(3),t.hij("Since: ",t.lcZ(14,12,n.dateSignedIn),"")}}function S(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"pagination-controls",17),t.NdJ("pageChange",function(i){t.CHM(n);const g=t.oxw(3);return t.KtG(g.page=i)}),t.qZA()}}function T(e,s){if(1&e&&(t.TgZ(0,"div",15),t.YNc(1,S,1,0,"pagination-controls",16),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0!=n.total)}}const v=function(e,s){return{itemsPerPage:15,currentPage:e,totalItems:s}};function b(e,s){if(1&e&&(t.TgZ(0,"section",7)(1,"ul",8),t.YNc(2,C,15,16,"li",9),t.ALo(3,"paginate"),t.qZA(),t.YNc(4,T,2,1,"div",10),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,n.students,t.WLB(5,v,n.page,n.total))),t.xp6(2),t.Q6J("ngIf",n.students)}}const y=[{path:"",component:(()=>{class e{constructor(n){this.studentService=n,this.error=null,this.students=[],this.total=0,this.page=1}ngOnInit(){this.fetchStudents()}fetchStudents(){this.studentService.getAthletes().subscribe({next:n=>{this.students=n.athletes,this.total=this.students.length,console.log(this.students,this.total)},error:n=>{console.error("Error al cargar los programas",n),this.error="Error al cargar los programas"}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(f.o))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-students"]],decls:10,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],["routerLink","./new-student/",1,"button"],["class","table-container",4,"ngIf"],[1,"table-container"],[1,"table-list"],[3,"routerLink",4,"ngFor","ngForOf"],["class","p-controls",4,"ngIf"],[3,"routerLink"],[1,"item-box"],[1,"item-index-number","item-xsmall"],[1,"items","item-medium"],[1,"p-controls"],[3,"pageChange",4,"ngIf"],[3,"pageChange"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"Flow305 Staff"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t._uU(8,"New athlete"),t.qZA()()(),t.YNc(9,b,5,8,"section",6),t.qZA()),2&o&&(t.xp6(9),t.Q6J("ngIf",i.students))},dependencies:[l.sg,l.O5,m.rH,d.LS,d._s,_.i,U.d]})}return e})()},{path:"new-student",component:(()=>{class e{constructor(n,o,i){this.formBuilder=n,this.router=o,this.athleteService=i,this.newAthleteForm=this.formBuilder.group({active:[!0,a.kI.required],address:[""],address2:[""],age:[""],city:[""],dateSignedIn:[new Date,a.kI.required],dob:[""],email:["",[a.kI.required,a.kI.email]],emailVerified:[!0],lastName:["",a.kI.required],last_promotion:[""],stripes:[0],name:["",a.kI.required],nationality:[""],phone:[""],photoURL:[""],current_rank:[""],signature:[""],state:[""],status:["pending",a.kI.required],type:["athlete",a.kI.required],waiver:[!0,a.kI.required],weight:[""],zip:[""]})}onSubmit(){this.newAthleteForm.valid?(console.log(this.newAthleteForm.value),this.athleteService.createAthlete(this.newAthleteForm.value).subscribe(()=>{this.router.navigate(["/admin/dashboard/students"])})):console.error("Formulario no v\xe1lido")}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(m.F0),t.Y36(f.o))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-student"]],decls:85,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],["routerLink","/admin/dashboard/users",1,"button"],[1,"new-p-form",3,"formGroup","ngSubmit"],[1,"top-form-user"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","matInput","","required","",1,"form-control"],["for","lastName"],["type","text","id","lastName","formControlName","lastName","matInput","","required","",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","matInput","","required","",1,"form-control"],["for","address"],["type","text","id","address","formControlName","address","matInput","",1,"form-control"],["for","address2"],["type","text","id","address2","formControlName","address2","matInput","",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city","matInput","",1,"form-control"],["for","state"],["type","text","id","state","formControlName","state","matInput","",1,"form-control"],["for","zip"],["type","text","id","zip","formControlName","zip","matInput","",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone","matInput","",1,"form-control"],["for","dob"],["type","date","id","dob","formControlName","dob","matInput","",1,"form-control"],["for","signature"],["type","text","id","signature","formControlName","signature","matInput","",1,"form-control"],["for","current_rank"],["type","text","id","current_rank","formControlName","current_rank","matInput","",1,"form-control"],["for","stripes"],["type","number","id","stripes","formControlName","stripes","matInput","",1,"form-control"],["type","text","id","weight","formControlName","weight","matInput","",1,"form-control"],["type","number","id","age","formControlName","age","matInput","",1,"form-control"],["type","text","id","nationality","formControlName","nationality","matInput","",1,"form-control"],["type","date","id","last_promotion","formControlName","last_promotion","matInput","",1,"form-control"],["for","dateSignedIn"],["type","date","id","dateSignedIn","formControlName","dateSignedIn","matInput","",1,"form-control"],["type","submit",1,"submit-button"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"New Student or Athlete"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t._uU(8,"Back"),t.qZA()()(),t.TgZ(9,"form",6),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(10,"section",7)(11,"mat-form-field",8)(12,"mat-label",9),t._uU(13,"Name:"),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"mat-form-field",8)(16,"mat-label",11),t._uU(17,"Last Name:"),t.qZA(),t._UZ(18,"input",12),t.qZA(),t.TgZ(19,"mat-form-field",8)(20,"mat-label",13),t._uU(21,"Email:"),t.qZA(),t._UZ(22,"input",14),t.qZA(),t.TgZ(23,"mat-form-field",8)(24,"mat-label",15),t._uU(25,"Address:"),t.qZA(),t._UZ(26,"input",16),t.qZA(),t.TgZ(27,"mat-form-field",8)(28,"mat-label",17),t._uU(29,"Address 2:"),t.qZA(),t._UZ(30,"input",18),t.qZA(),t.TgZ(31,"mat-form-field",8)(32,"mat-label",19),t._uU(33,"City:"),t.qZA(),t._UZ(34,"input",20),t.qZA(),t.TgZ(35,"mat-form-field",8)(36,"mat-label",21),t._uU(37,"State:"),t.qZA(),t._UZ(38,"input",22),t.qZA(),t.TgZ(39,"mat-form-field",8)(40,"mat-label",23),t._uU(41,"Zip Code:"),t.qZA(),t._UZ(42,"input",24),t.qZA(),t.TgZ(43,"mat-form-field",8)(44,"mat-label",25),t._uU(45,"Phone Number:"),t.qZA(),t._UZ(46,"input",26),t.qZA(),t.TgZ(47,"mat-form-field",8)(48,"mat-label",27),t._uU(49,"Date of Birth:"),t.qZA(),t._UZ(50,"input",28),t.qZA(),t.TgZ(51,"mat-form-field",8)(52,"mat-label",29),t._uU(53,"Signature:"),t.qZA(),t._UZ(54,"input",30),t.qZA(),t.TgZ(55,"mat-form-field",8)(56,"mat-label",31),t._uU(57,"Rank:"),t.qZA(),t._UZ(58,"input",32),t.qZA(),t.TgZ(59,"mat-form-field",8)(60,"mat-label",33),t._uU(61,"Degrees:"),t.qZA(),t._UZ(62,"input",34),t.qZA(),t.TgZ(63,"mat-form-field",8)(64,"mat-label",29),t._uU(65,"weight:"),t.qZA(),t._UZ(66,"input",35),t.qZA(),t.TgZ(67,"mat-form-field",8)(68,"mat-label",29),t._uU(69,"age:"),t.qZA(),t._UZ(70,"input",36),t.qZA(),t.TgZ(71,"mat-form-field",8)(72,"mat-label",29),t._uU(73,"nationality:"),t.qZA(),t._UZ(74,"input",37),t.qZA(),t.TgZ(75,"mat-form-field",8)(76,"mat-label",29),t._uU(77,"last_promotion:"),t.qZA(),t._UZ(78,"input",38),t.qZA(),t.TgZ(79,"mat-form-field",8)(80,"mat-label",39),t._uU(81,"date Signed In:"),t.qZA(),t._UZ(82,"input",40),t.qZA()(),t.TgZ(83,"button",41),t._uU(84,"Create User"),t.qZA()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",i.newAthleteForm))},dependencies:[m.rH,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.sg,a.u,c.Nt,u.KE,u.hX]})}return e})()},{path:"student/:id",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-student"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"student works!"),t.qZA())}})}return e})()},{path:"up-student/:id",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-student"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"update-student works!"),t.qZA())}})}return e})()}];let I=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(y),m.Bz]})}return e})();var N=r(682);let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,I,m.Bz,a.UX,a.u5,d.JX,c.c,u.lN,Z.LD,h.p9,A.Fk,N.G]})}return e})()}}]);