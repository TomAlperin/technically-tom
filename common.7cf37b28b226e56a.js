"use strict";(self.webpackChunktechnically_tom=self.webpackChunktechnically_tom||[]).push([[592],{7300:(f,d,e)=>{e.d(d,{F:()=>i});var t=e(5879),l=e(9045);const i=(u,m,_=(0,t.f3M)(l.s))=>{const s=u.params.post;return _.getJSON(`assets/posts${m.url}${s?"/"+s:""}`)}},1707:(f,d,e)=>{e.d(d,{Q:()=>i});var t=e(5879),l=e(9045);const i=(u,m,_=(0,t.f3M)(l.s))=>_.getMD(`assets/posts${m.url}/${u.params.post}`)},5184:(f,d,e)=>{e.d(d,{t:()=>s});var t=e(5879),l=e(915),i=e(6814),u=e(4213),m=e(1777);function _(r,h){if(1&r&&t._UZ(0,"markdown",5),2&r){const c=t.oxw();t.Q6J("data",c.article)}}let s=(()=>{class r{constructor(c){this.route=c,this.article="",this.meta={},this.article=this.route.snapshot.data.article,this.meta=this.route.snapshot.data.meta}}return r.\u0275fac=function(c){return new(c||r)(t.Y36(l.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-article"]],decls:11,vars:6,consts:[[1,"bicycles"],[1,"container-fluid","container-xl","py-4","bd-layout"],[1,"row"],[1,"col-12"],["emoji","",3,"data",4,"ngIf"],["emoji","",3,"data"]],template:function(c,g){1&c&&(t.TgZ(0,"main",0)(1,"div",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"div",2)(8,"div",3),t.YNc(9,_,1,1,"markdown",4),t.qZA()()()(),t._UZ(10,"app-footer")),2&c&&(t.xp6(3),t.Oqu(null==g.meta?null:g.meta.title),t.xp6(2),t.Oqu(t.xi3(6,3,null==g.meta?null:g.meta.date,"MMM d yyyy | hh:mm a")),t.xp6(4),t.Q6J("ngIf",g.article))},dependencies:[i.O5,u.lF,m.c,i.uU]}),r})()},8747:(f,d,e)=>{e.d(d,{L:()=>C});var t=e(5879),l=e(915),i=e(6814),u=e(1835);function m(n,p){1&n&&(t.ynx(0),t._uU(1," \xa0"),t._UZ(2,"i",9),t.BQk())}const _=function(n){return{"shake-feature":n}},s=function(){return[!0,""]},r=function(n){return{dark:n}};let h=(()=>{class n{constructor(){this.article=new u.d}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-article-card"]],inputs:{article:"article",dark:"dark"},decls:16,vars:26,consts:[[1,"post-thumb",3,"ngClass"],[3,"routerLink"],[1,"thumb-container"],[3,"alt"],[4,"ngIf"],[1,"article-date",3,"ngClass"],[1,"excerpt",3,"ngClass"],[1,"read-more"],[1,"read-article",3,"routerLink","ngClass"],[1,"fa-solid","fa-star","float-end","text-warning","shake"]],template:function(a,o){1&a&&(t.TgZ(0,"article")(1,"div",0)(2,"a",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"h2"),t.YNc(6,m,3,0,"ng-container",4),t._uU(7),t.qZA()()(),t.TgZ(8,"span",5),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"p",6),t._uU(12),t.qZA(),t.TgZ(13,"p",7)(14,"a",8),t._uU(15,"Read More"),t.qZA()()()),2&a&&(t.xp6(1),t.Q6J("ngClass",t.VKq(15,_,o.article.featured)),t.xp6(1),t.Q6J("routerLink",o.article.url),t.xp6(2),t.Q6J("alt",o.article.title),t.uIk("src",o.article.thumb,t.LSH),t.xp6(2),t.Q6J("ngIf",o.article.featured),t.xp6(1),t.hij(" ",o.article.title," "),t.xp6(1),t.Q6J("ngClass",t.VKq(18,r,t.DdM(17,s).includes(o.dark))),t.xp6(1),t.Oqu(t.xi3(10,12,o.article.date,"MMM d yyyy | hh:mm a")),t.xp6(2),t.Q6J("ngClass",t.VKq(21,r,t.DdM(20,s).includes(o.dark))),t.xp6(1),t.hij(" ",o.article.excerpt,"... "),t.xp6(2),t.Q6J("routerLink",o.article.url)("ngClass",t.VKq(24,r,t.DdM(23,s).includes(o.dark))))},dependencies:[i.mk,i.O5,l.rH,i.uU],styles:['.post-thumb[_ngcontent-%COMP%]{position:relative;text-align:center}.post-thumb[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]{width:60%;display:inline-block;position:relative}.post-thumb[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]:before{content:"";position:relative;display:inline-block;width:0%;height:0;margin-bottom:100%}.post-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:50%;width:calc(100% - 5px);height:calc(100% - 5px);padding:5px;border:1px solid #222;background:white;object-fit:cover;object-position:center}.post-thumb[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px!important;font-weight:400;text-transform:uppercase;width:80%;border:1px solid #222;border-radius:5px;margin:0 auto;padding:5px;background:white;display:block;position:absolute;bottom:10%;left:0;right:0;color:#444}.excerpt[_ngcontent-%COMP%]{min-height:120px;padding-bottom:20px;margin:0}.excerpt.dark[_ngcontent-%COMP%], .article-date.dark[_ngcontent-%COMP%]{color:#fff}.read-article[_ngcontent-%COMP%]{float:right;color:#000}.read-article.dark[_ngcontent-%COMP%]{color:#fff}.read-more[_ngcontent-%COMP%]{position:absolute;margin:0;bottom:8px;right:12px}']}),n})();var c=e(1777);function g(n,p){if(1&n&&(t.TgZ(0,"div",3),t._UZ(1,"app-article-card",4),t.qZA()),2&n){const a=p.$implicit,o=t.oxw();t.xp6(1),t.Q6J("article",a)("dark",o.dark)}}let C=(()=>{class n{constructor(a){this.route=a,this.title="",this.class="",this.dark=!1,this.articles=[],this.title=this.route.snapshot.data.title,this.class=this.route.snapshot.data.class,this.dark=!!this.route.snapshot.data.dark,this.articles=this.route.snapshot.data.articles}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-articles"]],decls:7,vars:5,consts:[[1,"container-fluid","container-xl","py-md-4","bd-layout"],[1,"row"],["class","col-sm-5 col-md-4 col-lg-3 pb-2 position-relative",4,"ngFor","ngForOf"],[1,"col-sm-5","col-md-4","col-lg-3","pb-2","position-relative"],[3,"article","dark"]],template:function(a,o){1&a&&(t.TgZ(0,"main")(1,"div",0)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"div",1),t.YNc(5,g,2,2,"div",2),t.qZA()()(),t._UZ(6,"app-footer")),2&a&&(t.Gre("articles ",o.class,""),t.xp6(3),t.Oqu(o.title),t.xp6(2),t.Q6J("ngForOf",o.articles))},dependencies:[i.sg,h,c.c],styles:[".carbon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;text-shadow:1px 1px 0 rgba(0,0,0,.52),-1px -1px 0 rgba(0,0,0,.52),1px -1px 0 rgba(0,0,0,.52),-1px 1px 0 rgba(0,0,0,.52)}h1[_ngcontent-%COMP%]{text-align:center;margin:20px 0}"]}),n})()}}]);