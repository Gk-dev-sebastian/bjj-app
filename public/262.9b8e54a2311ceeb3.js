"use strict";(self.webpackChunkbjj_app=self.webpackChunkbjj_app||[]).push([[262],{5262:(at,x,a)=>{a.r(x),a.d(x,{CurriculumModule:()=>mt});var d=a(6814),s=a(6223),l=a(4581),v=a(8525),f=a(2032),Z=a(5986),_=a(9157),q=a(324),t=a(5879),T=a(7398),N=a(9862);let g=(()=>{class r{constructor(e){this.http=e,this.apiUrl="https://bjj-app.onrender.com/api/curriculum"}get token(){return localStorage.getItem("id_token")||""}get headers(){return{headers:{Authorization:this.token}}}createFlowC(e){return this.http.post(`${this.apiUrl}`,e,this.headers)}getFlowC(){return this.http.get(`${this.apiUrl}`,this.headers)}getFlowCById(e){return this.http.get(`${this.apiUrl}/${e}`,this.headers).pipe((0,T.U)(o=>o.flowC))}updateFlowC(e,o){return this.http.put(`${this.apiUrl}/${e}`,o,this.headers)}deleteFlowC(e){return this.http.delete(`${this.apiUrl}/${e}`,this.headers)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(N.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var h=a(6472),b=a(127),k=a(684);const w=function(r){return[r]};function A(r,u){if(1&r&&(t.TgZ(0,"li",11)(1,"div",12)(2,"div",13),t._uU(3),t.qZA(),t.TgZ(4,"div",14),t._uU(5),t.qZA(),t.TgZ(6,"div",15),t._uU(7),t.ALo(8,"truncateWords"),t.qZA(),t.TgZ(9,"div",16),t._uU(10),t.qZA(),t.TgZ(11,"div",14),t._uU(12),t.ALo(13,"formatDate"),t.qZA()()()),2&r){const e=u.$implicit,o=u.index,n=t.oxw(2);t.Q6J("routerLink",t.VKq(10,w,"./curriculum/"+e._id)),t.xp6(3),t.Oqu(15*(n.page-1)+o+1),t.xp6(2),t.Oqu(e.programName),t.xp6(2),t.Oqu(t.lcZ(8,6,e.description)),t.xp6(3),t.Oqu(e.user),t.xp6(2),t.Oqu(t.lcZ(13,8,e.date))}}function U(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"pagination-controls",19),t.NdJ("pageChange",function(n){t.CHM(e);const i=t.oxw(3);return t.KtG(i.page=n)}),t.qZA()}}function F(r,u){if(1&r&&(t.TgZ(0,"div",17),t.YNc(1,U,1,0,"pagination-controls",18),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0!=e.total)}}const I=function(r,u){return{itemsPerPage:15,currentPage:r,totalItems:u}};function y(r,u){if(1&r&&(t.TgZ(0,"section",7)(1,"ul",8),t.YNc(2,A,14,12,"li",9),t.ALo(3,"paginate"),t.qZA(),t.YNc(4,F,2,1,"div",10),t.qZA()),2&r){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,e.curriculum,t.WLB(5,I,e.page,e.total))),t.xp6(2),t.Q6J("ngIf",e.curriculum)}}function J(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",39)(1,"div",8)(2,"mat-label"),t._uU(3,"Drill "),t.qZA(),t._UZ(4,"input",40),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw().index,p=t.oxw();return t.KtG(p.removeDrill(m,c,i))}),t._UZ(6,"i",32),t.qZA()()()}2&r&&t.Q6J("formGroupName",u.index)}function O(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",35)(1,"div",8)(2,"mat-label"),t._uU(3,"Group Name "),t.qZA(),t._UZ(4,"input",36),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.removeCurriculum(c,i))}),t._UZ(6,"i",32),t.qZA()(),t.TgZ(7,"div",37),t.YNc(8,J,7,1,"div",38),t.TgZ(9,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.addDrill(c,i))}),t._uU(10,"Add Drill"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw().index,n=t.oxw();t.Q6J("formGroupName",e),t.xp6(8),t.Q6J("ngForOf",n.drills(o,e).controls)}}function P(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"mat-form-field")(3,"mat-label"),t._uU(4,"Week Name"),t.qZA(),t._UZ(5,"input",30),t.qZA(),t.TgZ(6,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeWeek(i))}),t._UZ(7,"i",32),t.qZA()(),t.TgZ(8,"div",33),t.YNc(9,O,11,2,"div",34),t.TgZ(10,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.addCurriculum(i))}),t._uU(11,"Add drills"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw();t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",o.curriculum(e).controls)}}function G(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",41)(1,"div",42)(2,"label",43),t._uU(3),t.qZA(),t._UZ(4,"input",44),t.TgZ(5,"button",45),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeMainConcept(i))}),t._UZ(6,"i",32),t.qZA()()()}if(2&r){const e=u.index;t.xp6(2),t.MGl("for","conceptName",e,""),t.xp6(1),t.hij("Concept ",e+1,":"),t.xp6(1),t.MGl("id","conceptName",e,""),t.Q6J("formControlName",e)}}function B(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",41)(1,"div",42)(2,"label",43),t._uU(3),t.qZA(),t._UZ(4,"input",44),t.TgZ(5,"button",45),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeMainPosition(i))}),t._UZ(6,"i",32),t.qZA()()()}if(2&r){const e=u.index;t.xp6(2),t.MGl("for","positionName",e,""),t.xp6(1),t.hij("Position ",e+1,":"),t.xp6(1),t.MGl("id","positionName",e,""),t.Q6J("formControlName",e)}}function Q(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",35)(1,"div",8)(2,"mat-label"),t._uU(3,"Technique"),t.qZA(),t._UZ(4,"input",47),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.removeTechniqueItem(c,i))}),t._UZ(6,"i",32),t.qZA()()()}2&r&&t.Q6J("formGroupName",u.index)}function Y(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"mat-label"),t._uU(3,"Technique Group"),t.qZA(),t._UZ(4,"input",36),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeTechnique(i))}),t._UZ(6,"i",32),t.qZA()(),t.TgZ(7,"div",46),t.YNc(8,Q,7,1,"div",34),t.TgZ(9,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.addTechniqueItem(i))}),t._uU(10,"Add Technique"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw();t.Q6J("formGroupName",e),t.xp6(8),t.Q6J("ngForOf",o.techniqueItems(e).controls)}}const S=function(r){return[r]};function L(r,u){if(1&r&&(t.TgZ(0,"button",10),t._uU(1,"Update "),t.qZA()),2&r){const e=t.oxw();t.Q6J("routerLink",t.VKq(1,S,"/admin/dashboard/curriculum/up-curriculum/"+e.flowC._id))}}function z(r,u){if(1&r&&(t.TgZ(0,"li",32)(1,"p"),t._uU(2),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.Oqu(e.drill)}}function H(r,u){if(1&r&&(t.TgZ(0,"li")(1,"div",29),t._uU(2),t.qZA(),t.TgZ(3,"ul",30),t.YNc(4,z,3,1,"li",31),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.hij("",e.groupName,":"),t.xp6(2),t.Q6J("ngForOf",e.drills)}}function K(r,u){if(1&r&&(t.TgZ(0,"li",26)(1,"div",27),t._uU(2),t.qZA(),t.TgZ(3,"ul",28),t.YNc(4,H,5,2,"li",20),t.qZA()()),2&r){const e=u.$implicit,o=u.index;t.xp6(2),t.hij("Week ",o+1,""),t.xp6(2),t.Q6J("ngForOf",e.curriculum)}}function j(r,u){if(1&r&&(t.TgZ(0,"div")(1,"p"),t._uU(2),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.hij("",e,". ")}}function $(r,u){if(1&r&&(t.TgZ(0,"div")(1,"p"),t._uU(2),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.hij("",e,". ")}}function D(r,u){if(1&r&&(t.TgZ(0,"li",37)(1,"p"),t._uU(2),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.hij("",e.technique,".")}}function W(r,u){if(1&r&&(t.TgZ(0,"li",33)(1,"div",34),t._uU(2),t.qZA(),t.TgZ(3,"ul",35),t.YNc(4,D,3,1,"li",36),t.qZA()()),2&r){const e=u.$implicit;t.xp6(2),t.Oqu(e.groupName),t.xp6(2),t.Q6J("ngForOf",e.techniques)}}function X(r,u){if(1&r&&(t.TgZ(0,"div",11)(1,"div",12)(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"p",13),t.qZA(),t.TgZ(5,"div",14)(6,"ul",15),t.YNc(7,K,5,2,"li",16),t.qZA()(),t.TgZ(8,"div",17)(9,"div",18)(10,"h3"),t._uU(11,"Main Concepts:"),t.qZA(),t.TgZ(12,"div",19),t.YNc(13,j,3,1,"div",20),t.qZA()(),t.TgZ(14,"div",21)(15,"h3"),t._uU(16,"Main Positions:"),t.qZA(),t.TgZ(17,"div",19),t.YNc(18,$,3,1,"div",20),t.qZA()(),t.TgZ(19,"div",22)(20,"h3"),t._uU(21,"Techniques:"),t.qZA(),t.TgZ(22,"ul",23),t.YNc(23,W,5,2,"li",24),t.qZA()()(),t.TgZ(24,"div",25)(25,"p"),t._uU(26,"All the techniques of the program can be taken into account in the event of an evaluation to promote the student to the next level. The professor in charge will determine which ones the student should demonstrate in the exam."),t.qZA()()()),2&r){const e=t.oxw();t.xp6(3),t.AsE("",e.flowC.programName," | CREATED BY: ",e.flowC.user,""),t.xp6(1),t.Q6J("innerHTML",e.flowC.description,t.oJD),t.xp6(3),t.Q6J("ngForOf",e.flowC.weeks),t.xp6(6),t.Q6J("ngForOf",e.flowC.mainConcepts),t.xp6(5),t.Q6J("ngForOf",e.flowC.mainPositions),t.xp6(5),t.Q6J("ngForOf",e.flowC.techniques)}}function V(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",39)(1,"div",8)(2,"mat-label"),t._uU(3,"Drill "),t.qZA(),t._UZ(4,"input",40),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw().index,p=t.oxw();return t.KtG(p.removeDrill(m,c,i))}),t._UZ(6,"i",32),t.qZA()()()}2&r&&t.Q6J("formGroupName",u.index)}function tt(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",35)(1,"div",8)(2,"mat-label"),t._uU(3,"Group Name "),t.qZA(),t._UZ(4,"input",36),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.removeCurriculum(c,i))}),t._UZ(6,"i",32),t.qZA()(),t.TgZ(7,"div",37),t.YNc(8,V,7,1,"div",38),t.TgZ(9,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.addDrill(c,i))}),t._uU(10,"Add Drill"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw().index,n=t.oxw();t.Q6J("formGroupName",e),t.xp6(8),t.Q6J("ngForOf",n.drills(o,e).controls)}}function et(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"mat-form-field")(3,"mat-label"),t._uU(4,"Week Name"),t.qZA(),t._UZ(5,"input",30),t.qZA(),t.TgZ(6,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeWeek(i))}),t._UZ(7,"i",32),t.qZA()(),t.TgZ(8,"div",33),t.YNc(9,tt,11,2,"div",34),t.TgZ(10,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.addCurriculum(i))}),t._uU(11,"Add drills"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw();t.Q6J("formGroupName",e),t.xp6(9),t.Q6J("ngForOf",o.curriculum(e).controls)}}function rt(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",41)(1,"div",42)(2,"label",43),t._uU(3),t.qZA(),t._UZ(4,"input",44),t.TgZ(5,"button",45),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeMainConcept(i))}),t._UZ(6,"i",32),t.qZA()()()}if(2&r){const e=u.index;t.xp6(2),t.MGl("for","conceptName",e,""),t.xp6(1),t.hij("Concept ",e+1,":"),t.xp6(1),t.MGl("id","conceptName",e,""),t.Q6J("formControlName",e)}}function ot(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",41)(1,"div",42)(2,"label",43),t._uU(3),t.qZA(),t._UZ(4,"input",44),t.TgZ(5,"button",45),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeMainPosition(i))}),t._UZ(6,"i",32),t.qZA()()()}if(2&r){const e=u.index;t.xp6(2),t.MGl("for","positionName",e,""),t.xp6(1),t.hij("Position ",e+1,":"),t.xp6(1),t.MGl("id","positionName",e,""),t.Q6J("formControlName",e)}}function nt(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",35)(1,"div",8)(2,"mat-label"),t._uU(3,"Technique"),t.qZA(),t._UZ(4,"input",47),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw().index,m=t.oxw();return t.KtG(m.removeTechniqueItem(c,i))}),t._UZ(6,"i",32),t.qZA()()()}2&r&&t.Q6J("formGroupName",u.index)}function it(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"mat-label"),t._uU(3,"Technique Group"),t.qZA(),t._UZ(4,"input",36),t.TgZ(5,"button",31),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.removeTechnique(i))}),t._UZ(6,"i",32),t.qZA()(),t.TgZ(7,"div",46),t.YNc(8,nt,7,1,"div",34),t.TgZ(9,"button",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.addTechniqueItem(i))}),t._uU(10,"Add Technique"),t.qZA()()()}if(2&r){const e=u.index,o=t.oxw();t.Q6J("formGroupName",e),t.xp6(8),t.Q6J("ngForOf",o.techniqueItems(e).controls)}}const ut=[{path:"",component:(()=>{class r{constructor(e){this.curriculumService=e,this.error=null,this.displayedColumns=["position","name","weight","symbol"],this.curriculum=[],this.creator="",this.total=0,this.page=1}ngOnInit(){this.fetchPrograms()}fetchPrograms(){this.curriculumService.getFlowC().subscribe({next:e=>{e.ok?(this.curriculum=e.flowC,this.total=this.curriculum.length):this.error="No se pudieron cargar los programas"},error:e=>{console.error("Error al cargar los programas",e),this.error="Error al cargar los programas"}})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-curriculum-list"]],decls:10,vars:1,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],["routerLink","./new-curriculum/",1,"button"],["class","table-container",4,"ngIf"],[1,"table-container"],[1,"table-list"],[3,"routerLink",4,"ngFor","ngForOf"],["class","p-controls",4,"ngIf"],[3,"routerLink"],[1,"item-box"],[1,"item-index-number","item-xsmall"],[1,"items","item-medium"],[1,"items","item-large"],[1,"items","item-small"],[1,"p-controls"],[3,"pageChange",4,"ngIf"],[3,"pageChange"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"Flow305 Curriculum"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t._uU(8,"New Curriculum"),t.qZA()()(),t.YNc(9,y,5,8,"section",6),t.qZA()),2&o&&(t.xp6(9),t.Q6J("ngIf",n.curriculum))},dependencies:[d.sg,d.O5,l.rH,h.LS,h._s,b.i,k.d]})}return r})()},{path:"new-curriculum",component:(()=>{class r{constructor(e,o,n){this.formBuilder=e,this.flowCService=o,this.router=n,this.programForm=this.formBuilder.group({programName:["",s.kI.required],description:["",s.kI.required],weeks:this.formBuilder.array([]),mainConcepts:this.formBuilder.array([]),mainPositions:this.formBuilder.array([]),techniques:this.formBuilder.array([]),user:["Seba",s.kI.required]})}get weeks(){return this.programForm.get("weeks")}addWeek(){const e=this.formBuilder.group({weekName:["",s.kI.required],curriculum:this.formBuilder.array([])});this.weeks.push(e)}removeWeek(e){this.weeks.removeAt(e)}curriculum(e){return this.weeks.at(e).get("curriculum")}addCurriculum(e){const o=this.formBuilder.group({groupName:["",s.kI.required],drills:this.formBuilder.array([])});this.curriculum(e).push(o)}removeCurriculum(e,o){this.curriculum(e).removeAt(o)}drills(e,o){return this.curriculum(e).at(o).get("drills")}addDrill(e,o){const n=this.formBuilder.group({drill:["",s.kI.required]});this.drills(e,o).push(n)}removeDrill(e,o,n){this.drills(e,o).removeAt(n)}get mainConcepts(){return this.programForm.get("mainConcepts")}addMainConcept(){const e=this.formBuilder.control("",s.kI.required);this.mainConcepts.push(e)}removeMainConcept(e){this.mainConcepts.removeAt(e)}get mainPositions(){return this.programForm.get("mainPositions")}addMainPosition(){const e=this.formBuilder.control("",s.kI.required);this.mainPositions.push(e)}removeMainPosition(e){this.mainPositions.removeAt(e)}get techniques(){return this.programForm.get("techniques")}addTechnique(){const e=this.formBuilder.group({groupName:["",s.kI.required],techniques:this.formBuilder.array([])});this.techniques.push(e)}removeTechnique(e){this.techniques.removeAt(e)}techniqueItems(e){return this.techniques.at(e).get("techniques")}addTechniqueItem(e){const o=this.formBuilder.group({technique:["",s.kI.required]});this.techniqueItems(e).push(o)}removeTechniqueItem(e,o){this.techniqueItems(e).removeAt(o)}onSubmit(){this.flowCService.createFlowC(this.programForm.value).subscribe(()=>{this.router.navigate(["/admin/dashboard/curriculum"])},e=>{console.error("Error updating program:",e)})}getback(){this.router.navigate(["/admin/dashboard/curriculum"])}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(s.qu),t.Y36(g),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-new-curriculum"]],decls:53,vars:5,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],[3,"click"],[1,"new-p-form",3,"formGroup","ngSubmit"],[1,"top-form"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","programName","matInput","",1,"form-control"],["for","description"],["id","description","formControlName","description","required","","matInput","",1,"form-control"],["for","user"],["type","text","id","user","formControlName","user","required","","matInput","",1,"form-control"],[1,"middle-form"],["formArrayName","weeks",1,"main-array"],[1,"items-group-v"],["class","items",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",3,"click"],["formArrayName","mainConcepts",1,"second-array"],[1,"items","center-group"],["class","second-array-group",4,"ngFor","ngForOf"],["type","button",1,"add-button",3,"click"],["formArrayName","mainPositions",1,"second-array"],["formArrayName","techniques",1,"main-array"],[1,"bottom-form"],["type","submit"],[1,"items",3,"formGroupName"],[1,"form-group","specific-size"],["matInput","","formControlName","weekName"],["type","button",1,"button-remove",3,"click"],[1,"fa-solid","fa-xmark"],["formArrayName","curriculum",1,"second-array"],["class","second-array-group",3,"formGroupName",4,"ngFor","ngForOf"],[1,"second-array-group",3,"formGroupName"],["matInput","","formControlName","groupName"],["formArrayName","drills",1,"third-array"],["class","third-array-group",3,"formGroupName",4,"ngFor","ngForOf"],[1,"third-array-group",3,"formGroupName"],["matInput","","formControlName","drill"],[1,"second-array-group"],[1,"form-group","specific-size2"],[3,"for"],["type","text","required","",1,"form-control",3,"id","formControlName"],[1,"button-remove",3,"click"],["formArrayName","techniques",1,"second-array"],["matInput","","formControlName","technique"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"CURRICULUM CREATOR"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return n.getback()}),t._uU(8,"Back"),t.qZA()()(),t._UZ(9,"br")(10,"br"),t.TgZ(11,"form",6),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(12,"section",7)(13,"mat-form-field",8)(14,"mat-label",9),t._uU(15,"Name:"),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"mat-form-field",8)(18,"mat-label",11),t._uU(19,"Description"),t.qZA(),t._UZ(20,"textarea",12),t.qZA(),t.TgZ(21,"mat-form-field",8)(22,"mat-label",13),t._uU(23,"Creator:"),t.qZA(),t._UZ(24,"input",14),t.qZA()(),t.TgZ(25,"section",15)(26,"div")(27,"div",16)(28,"div",17),t.YNc(29,P,12,2,"div",18),t.qZA(),t.TgZ(30,"button",19),t.NdJ("click",function(){return n.addWeek()}),t._uU(31,"Add Week"),t.qZA()()(),t.TgZ(32,"div")(33,"div",20)(34,"div",21),t.YNc(35,G,7,4,"div",22),t.qZA(),t.TgZ(36,"button",23),t.NdJ("click",function(){return n.addMainConcept()}),t._uU(37,"Add Main Concept"),t.qZA()()(),t.TgZ(38,"div")(39,"div",24)(40,"div",21),t.YNc(41,B,7,4,"div",22),t.qZA(),t.TgZ(42,"button",23),t.NdJ("click",function(){return n.addMainPosition()}),t._uU(43,"Add Main Position"),t.qZA()()(),t.TgZ(44,"div")(45,"div",25)(46,"div",17),t.YNc(47,Y,11,2,"div",18),t.qZA(),t.TgZ(48,"button",19),t.NdJ("click",function(){return n.addTechnique()}),t._uU(49,"Add Technique Group"),t.qZA()()()(),t.TgZ(50,"section",26)(51,"button",27),t._uU(52,"Save Changes"),t.qZA()()()()),2&o&&(t.xp6(11),t.Q6J("formGroup",n.programForm),t.xp6(18),t.Q6J("ngForOf",n.weeks.controls),t.xp6(6),t.Q6J("ngForOf",n.mainConcepts.controls),t.xp6(6),t.Q6J("ngForOf",n.mainPositions.controls),t.xp6(6),t.Q6J("ngForOf",n.techniques.controls))},dependencies:[d.sg,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,s.x0,s.CE,f.Nt,_.KE,_.hX]})}return r})()},{path:"curriculum/:id",component:(()=>{class r{constructor(e,o,n){this.route=e,this.router=o,this.flowCService=n}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.flowCService.getFlowCById(this.id).subscribe(e=>{this.flowC=e})}captureScreen(){}deleteProgram(){}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-curriculum"]],decls:15,vars:2,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],[3,"click"],["routerLink","/admin/dashboard/curriculum",1,""],["class","",3,"routerLink",4,"ngIf"],[1,"red-button",3,"click"],["class","program-container","id","program-screen",4,"ngIf"],[1,"",3,"routerLink"],["id","program-screen",1,"program-container"],[1,"program-header"],[3,"innerHTML"],[1,"program-weeks"],[1,"week-list"],["class","week-container",4,"ngFor","ngForOf"],[1,"program-middle"],[1,"program-mainConcepts"],[1,"concepts-box"],[4,"ngFor","ngForOf"],[1,"program-mainPositions"],[1,"program-techniques"],[1,"techniques-groups-list"],["class","technique-group",4,"ngFor","ngForOf"],[1,"program-footer"],[1,"week-container"],[1,"week-name"],[1,"curriculum-list"],[1,"moves-name"],[1,"moves-list"],["class","moves-items",4,"ngFor","ngForOf"],[1,"moves-items"],[1,"technique-group"],[1,"group-name"],[1,"techniques-list"],["class","tech-box",4,"ngFor","ngForOf"],[1,"tech-box"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"Training program"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return n.captureScreen()}),t._uU(8,"Download"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"All "),t.qZA(),t.YNc(11,L,2,3,"button",7),t.TgZ(12,"button",8),t.NdJ("click",function(){return n.deleteProgram()}),t._uU(13,"delete "),t.qZA()()(),t.YNc(14,X,27,7,"div",9),t.qZA()),2&o&&(t.xp6(11),t.Q6J("ngIf",n.flowC),t.xp6(3),t.Q6J("ngIf",n.flowC))},dependencies:[d.sg,d.O5,l.rH],styles:[".program-container[_ngcontent-%COMP%]{width:100%;max-width:1500px;min-height:100vh;background-color:#f9f9f9;color:#000;overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;padding:0 40px 40px;list-style:none}.program-header[_ngcontent-%COMP%]{text-transform:uppercase}.program-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:30px 0 5px;padding:10px 30px;background-color:#000;color:#fff}.program-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:30px 0;padding:0 50px;box-sizing:border-box;text-transform:lowercase;font-size:large}ul[_ngcontent-%COMP%]{margin:0px 0PX 30PX;padding:0}.week-list[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap}li[_ngcontent-%COMP%]{list-style:none}.week-container[_ngcontent-%COMP%]{width:20%;margin:30px 15px;background-color:#fff;text-transform:lowercase;box-shadow:12px 12px 5px -9px #d9d9d9}.week-name[_ngcontent-%COMP%]{background-color:#000;color:#ff4992;text-align:center;padding:20px 0;font-weight:600;text-transform:uppercase;letter-spacing:1px}.curriculum-list[_ngcontent-%COMP%]{padding:20px!important;box-sizing:border-box}.moves-name[_ngcontent-%COMP%]{font-size:18px;font-weight:600;text-transform:capitalize;background-color:#00efff;margin:15px 0;box-sizing:border-box;padding:5px}.moves-items[_ngcontent-%COMP%]{font-style:italic}.moves-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:0}.program-middle[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.program-mainConcepts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .program-mainPositions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .program-techniques[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background-color:#000;color:#fff;box-sizing:border-box;padding:10px 30px}.program-mainConcepts[_ngcontent-%COMP%], .program-mainPositions[_ngcontent-%COMP%], .program-techniques[_ngcontent-%COMP%]{width:1000px;border-bottom:solid 2px #e4e2e2;box-sizing:border-box;padding-bottom:30px;margin-bottom:30px}.program-mainConcepts[_ngcontent-%COMP%]{width:1000px!important}.concepts-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.concepts-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 10px;font-size:18px;font-style:italic}.technique-group[_ngcontent-%COMP%]{background-color:#f5f5f5;margin-bottom:10px;box-sizing:border-box;padding:20px}.group-name[_ngcontent-%COMP%]{font-size:18px;font-weight:600;text-transform:capitalize;background-color:#dadada;margin:15px 0;box-sizing:border-box;padding:5px}.techniques-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.tech-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 10px;font-style:italic}.top-menu[_ngcontent-%COMP%]{display:flex;align-items:center;position:absolute;top:40px;right:130px}.program-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.program-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%}"]})}return r})()},{path:"up-curriculum/:id",component:(()=>{class r{constructor(e,o,n,i){this.formBuilder=e,this.flowCService=o,this.router=n,this.route=i,this.programForm=this.formBuilder.group({programName:["",s.kI.required],description:["",s.kI.required],weeks:this.formBuilder.array([]),mainConcepts:this.formBuilder.array([]),mainPositions:this.formBuilder.array([]),techniques:this.formBuilder.array([]),user:["",s.kI.required]})}ngOnInit(){const e=this.route.snapshot.params.id;e&&this.flowCService.getFlowCById(e).subscribe(o=>this.updateProgramForm(o),o=>console.error("Error fetching program data",o))}updateProgramForm(e){this.programForm.patchValue({programName:e.programName,description:e.description,user:e.user});const o=this.programForm.get("weeks");e.weeks.forEach(m=>{const p=this.formBuilder.group({weekName:[m.weekName,s.kI.required],curriculum:this.formBuilder.array(m.curriculum.map(C=>this.createCurriculumFormGroup(C)))});o.push(p)});const n=this.programForm.get("mainConcepts");e.mainConcepts.forEach(m=>{n.push(this.formBuilder.control(m))});const i=this.programForm.get("mainPositions");e.mainPositions.forEach(m=>{i.push(this.formBuilder.control(m))});const c=this.programForm.get("techniques");e.techniques.forEach(m=>{const p=this.formBuilder.group({groupName:[m.groupName,s.kI.required],techniques:this.formBuilder.array(m.techniques.map(C=>this.createTechniqueFormGroup(C)))});c.push(p)})}createCurriculumFormGroup(e){return this.formBuilder.group({groupName:[e.groupName,s.kI.required],drills:this.formBuilder.array(e.drills.map(o=>this.createDrillFormGroup(o)))})}createDrillFormGroup(e){return this.formBuilder.group({drill:[e.drill,s.kI.required]})}createTechniqueFormGroup(e){return this.formBuilder.group({technique:[e.technique,s.kI.required]})}get weeks(){return this.programForm.get("weeks")}addWeek(e){const o=this.formBuilder.group({weekName:[e?.weekName||null],curriculum:this.formBuilder.array([])});this.weeks.push(o)}removeWeek(e){this.weeks.removeAt(e)}curriculum(e){return this.weeks.at(e).get("curriculum")}addCurriculum(e,o){const n=this.formBuilder.group({groupName:[o?.groupName||null],drills:this.formBuilder.array([])});this.curriculum(e).push(n)}removeCurriculum(e,o){this.curriculum(e).removeAt(o)}drills(e,o){return this.curriculum(e).at(o).get("drills")}addDrill(e,o,n){const i=this.formBuilder.group({drill:[n?.drill||null]});this.drills(e,o).push(i)}removeDrill(e,o,n){this.drills(e,o).removeAt(n)}get mainConcepts(){return this.programForm.get("mainConcepts")}addMainConcept(e){const o=this.formBuilder.control(e||null);this.mainConcepts.push(o)}removeMainConcept(e){this.mainConcepts.removeAt(e)}get mainPositions(){return this.programForm.get("mainPositions")}addMainPosition(e){const o=this.formBuilder.control(e||null);this.mainPositions.push(o)}removeMainPosition(e){this.mainPositions.removeAt(e)}get techniques(){return this.programForm.get("techniques")}addTechnique(e){const o=this.formBuilder.group({groupName:[e?.groupName||""],techniques:this.formBuilder.array([])});this.techniques.push(o)}removeTechnique(e){this.techniques.removeAt(e)}techniqueItems(e){return this.techniques.at(e).get("techniques")}addTechniqueItem(e,o){const n=this.formBuilder.group({technique:[o?.technique||""]});this.techniqueItems(e).push(n)}removeTechniqueItem(e,o){this.techniqueItems(e).removeAt(o)}onSubmit(){const e=this.route.snapshot.params.id;this.flowCService.updateFlowC(e,this.programForm.value).subscribe(()=>{this.router.navigate(["/admin/dashboard/curriculum/curriculum/"+e])},o=>{console.error("Error Creating curriculum:",o)})}getback(){this.router.navigate(["/admin/dashboard/curriculum/curriculum/"+this.route.snapshot.params.id])}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(s.qu),t.Y36(g),t.Y36(l.F0),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-update-curriculum"]],decls:53,vars:5,consts:[[1,"admin-container"],[1,"admin-top-menu"],[1,"admin-top-menu-logo"],["src","../../../../assets/img/legion-logo.png","alt",""],[1,"admin-top-menu-buttons"],[3,"click"],[1,"new-p-form",3,"formGroup","ngSubmit"],[1,"top-form"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","programName","matInput","",1,"form-control"],["for","description"],["id","description","formControlName","description","required","","matInput","",1,"form-control"],["for","user"],["type","text","id","user","formControlName","user","required","","matInput","",1,"form-control"],[1,"middle-form"],["formArrayName","weeks",1,"main-array"],[1,"items-group-v"],["class","items",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",3,"click"],["formArrayName","mainConcepts",1,"second-array"],[1,"items","center-group"],["class","second-array-group",4,"ngFor","ngForOf"],["type","button",1,"add-button",3,"click"],["formArrayName","mainPositions",1,"second-array"],["formArrayName","techniques",1,"main-array"],[1,"bottom-form"],["type","submit"],[1,"items",3,"formGroupName"],[1,"form-group","specific-size"],["matInput","","formControlName","weekName"],["type","button",1,"button-remove",3,"click"],[1,"fa-solid","fa-xmark"],["formArrayName","curriculum",1,"second-array"],["class","second-array-group",3,"formGroupName",4,"ngFor","ngForOf"],[1,"second-array-group",3,"formGroupName"],["matInput","","formControlName","groupName"],["formArrayName","drills",1,"third-array"],["class","third-array-group",3,"formGroupName",4,"ngFor","ngForOf"],[1,"third-array-group",3,"formGroupName"],["matInput","","formControlName","drill"],[1,"second-array-group"],[1,"form-group","specific-size2"],[3,"for"],["type","text","required","",1,"form-control",3,"id","formControlName"],[1,"button-remove",3,"click"],["formArrayName","techniques",1,"second-array"],["matInput","","formControlName","technique"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2"),t._uU(5,"Training program update"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return n.getback()}),t._uU(8,"Back"),t.qZA()()(),t._UZ(9,"br")(10,"br"),t.TgZ(11,"form",6),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(12,"section",7)(13,"mat-form-field",8)(14,"mat-label",9),t._uU(15,"Name:"),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"mat-form-field",8)(18,"mat-label",11),t._uU(19,"Description"),t.qZA(),t._UZ(20,"textarea",12),t.qZA(),t.TgZ(21,"mat-form-field",8)(22,"mat-label",13),t._uU(23,"Creator:"),t.qZA(),t._UZ(24,"input",14),t.qZA()(),t.TgZ(25,"section",15)(26,"div")(27,"div",16)(28,"div",17),t.YNc(29,et,12,2,"div",18),t.qZA(),t.TgZ(30,"button",19),t.NdJ("click",function(){return n.addWeek()}),t._uU(31,"Add Week"),t.qZA()()(),t.TgZ(32,"div")(33,"div",20)(34,"div",21),t.YNc(35,rt,7,4,"div",22),t.qZA(),t.TgZ(36,"button",23),t.NdJ("click",function(){return n.addMainConcept()}),t._uU(37,"Add Main Concept"),t.qZA()()(),t.TgZ(38,"div")(39,"div",24)(40,"div",21),t.YNc(41,ot,7,4,"div",22),t.qZA(),t.TgZ(42,"button",23),t.NdJ("click",function(){return n.addMainPosition()}),t._uU(43,"Add Main Position"),t.qZA()()(),t.TgZ(44,"div")(45,"div",25)(46,"div",17),t.YNc(47,it,11,2,"div",18),t.qZA(),t.TgZ(48,"button",19),t.NdJ("click",function(){return n.addTechnique()}),t._uU(49,"Add Technique Group"),t.qZA()()()(),t.TgZ(50,"section",26)(51,"button",27),t._uU(52,"Save Changes"),t.qZA()()()()),2&o&&(t.xp6(11),t.Q6J("formGroup",n.programForm),t.xp6(18),t.Q6J("ngForOf",n.weeks.controls),t.xp6(6),t.Q6J("ngForOf",n.mainConcepts.controls),t.xp6(6),t.Q6J("ngForOf",n.mainPositions.controls),t.xp6(6),t.Q6J("ngForOf",n.techniques.controls))},dependencies:[d.sg,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,s.x0,s.CE,f.Nt,_.KE,_.hX]})}return r})()}];let ct=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(ut),l.Bz]})}return r})();var st=a(682);let mt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[d.ez,ct,l.Bz,s.UX,s.u5,h.JX,f.c,_.lN,v.LD,Z.p9,q.Fk,st.G]})}return r})()}}]);