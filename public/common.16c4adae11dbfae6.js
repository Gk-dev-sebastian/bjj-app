"use strict";(self.webpackChunkbjj_app=self.webpackChunkbjj_app||[]).push([[592],{8398:(u,n,s)=>{s.d(n,{j:()=>o});var i=s(5879),p=s(9862);let o=(()=>{class r{constructor(e){this.http=e,this.apiUrl="https://bjj-app.onrender.com/api/classes"}get token(){return localStorage.getItem("id_token")||""}get headers(){return{headers:{Authorization:this.token}}}getAllClasses(){return this.http.get(`${this.apiUrl}`,this.headers)}getClassesByDate(e){return this.http.get(`${this.apiUrl}/date/${e}`,this.headers)}getClassById(e){return this.http.get(`${this.apiUrl}/${e}`,this.headers)}createClass(e){return this.http.post(`${this.apiUrl}`,e,this.headers)}updateClass(e,t){return this.http.put(`${this.apiUrl}/${e}`,t,this.headers)}deleteClass(e){return this.http.delete(`${this.apiUrl}/${e}`,this.headers)}updateWeek(){return this.http.put(`${this.apiUrl}/updateWeek`,{},this.headers)}static#t=this.\u0275fac=function(t){return new(t||r)(i.LFG(p.eN))};static#e=this.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},3076:(u,n,s)=>{s.d(n,{K:()=>r});var i=s(7398),p=s(5879),o=s(9862);let r=(()=>{class h{constructor(t){this.http=t,this.apiUrl="https://bjj-app.onrender.com/api/users"}get token(){return localStorage.getItem("id_token")||""}get headers(){return{headers:{Authorization:this.token}}}createuser(t){return this.http.post(`${this.apiUrl}`,t,this.headers)}getusers(){return this.http.get(`${this.apiUrl}`,this.headers)}getuserById(t){return this.http.get(`${this.apiUrl}/${t}`,this.headers).pipe((0,i.U)(a=>a.user))}updateuser(t,a){return this.http.put(`${this.apiUrl}/${t}`,a,this.headers)}deleteuser(t){return this.http.delete(`${this.apiUrl}/${t}`,this.headers)}static#t=this.\u0275fac=function(a){return new(a||h)(p.LFG(o.eN))};static#e=this.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);