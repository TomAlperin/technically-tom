"use strict";(self.webpackChunktechnically_tom=self.webpackChunktechnically_tom||[]).push([[592],{7300:(M,x,e)=>{e.d(x,{F:()=>m});var t=e(5879),f=e(9045);const m=(_,C,n=(0,t.f3M)(f.s))=>{const p=_.params.post;return n.getJSON(`assets/posts${C.url}${p?"/"+p:""}`)}},1707:(M,x,e)=>{e.d(x,{Q:()=>m});var t=e(5879),f=e(9045);const m=(_,C,n=(0,t.f3M)(f.s))=>n.getMD(`assets/posts${C.url}/${_.params.post}`)},1570:(M,x,e)=>{e.d(x,{v:()=>c});var t=e(8645),f=e(6321),m=e(4825),C=e(9773),n=e(5879),p=e(915),d=e(6814),v=e(3552),i=e(1777);let l=(()=>{class r{constructor(a){this.el=a,this.loaded=!1,Object.assign(a.nativeElement.style,{opacity:"0",transition:"opacity .6s ease-in-out"})}ngOnChanges(a){a.appFadeImg&&!1===this.appFadeImg&&(this.el.nativeElement.style.opacity="0")}onLoad(){this.el.nativeElement.style.opacity="1"}}return r.\u0275fac=function(a){return new(a||r)(n.Y36(n.SBq))},r.\u0275dir=n.lG2({type:r,selectors:[["","appFadeImg",""]],hostBindings:function(a,h){1&a&&n.NdJ("load",function(){return h.onLoad()})},inputs:{appFadeImg:"appFadeImg"},features:[n.TTD]}),r})();function s(r,b){if(1&r){const a=n.EpF();n.TgZ(0,"ul",12)(1,"li",13)(2,"a",14),n.NdJ("click",function(){n.CHM(a);const O=n.oxw();return n.KtG(O.slideShow(!1))}),n._uU(3,"Full Screen"),n.qZA()(),n.TgZ(4,"li",13)(5,"a",14),n.NdJ("click",function(){n.CHM(a);const O=n.oxw();return n.KtG(O.slideShow(!0))}),n._uU(6,"Slide Show"),n.qZA()()()}}function o(r,b){if(1&r){const a=n.EpF();n.TgZ(0,"img",15),n.NdJ("click",function(){n.CHM(a);const O=n.oxw();return n.KtG(O.slideShow(null))}),n.qZA()}if(2&r){const a=n.oxw();n.Q6J("appFadeImg",a.fadeImg)("src",a.image,n.LSH)("alt",a.title)}}function g(r,b){if(1&r&&(n.ynx(0),n.TgZ(1,"div",16)(2,"button",17),n._UZ(3,"i",18),n.qZA()(),n.TgZ(4,"div",19)(5,"button",17),n._UZ(6,"i",20),n.qZA()(),n.BQk()),2&r){const a=n.oxw();n.xp6(2),n.Q6J("routerLink",a.prevUrl),n.xp6(3),n.Q6J("routerLink",a.nextUrl)}}const u=function(r){return{"full-screen":r}};let c=(()=>{class r{constructor(a,h){this.route=a,this.router=h,this.title="",this.image="",this.prevUrl="",this.nextUrl="",this.back="",this.fadeImg=!0,this.doSlideShow=!1,this.doFullScreen=!1,this.destroyed$=new t.x,this.route.params.subscribe(O=>{this.title=this.route.snapshot.data.meta.title,this.prevUrl=this.route.snapshot.data.meta.prevUrl,this.nextUrl=this.route.snapshot.data.meta.nextUrl,this.back=this.route.snapshot.data.back,this.fadeImg=!1,setTimeout(()=>{this.image=this.route.snapshot.data.meta.image,this.fadeImg=!0},500)})}slideShow(a){switch(a){case!0:this.doSlideShow=!0,this.slideShowSub=function _(r=0,b=f.z){return r<0&&(r=0),(0,m.H)(r,r,b)}(6e3).pipe((0,C.R)(this.destroyed$)).subscribe(()=>{this.router.navigate([this.nextUrl])});break;case!1:this.doFullScreen=!0;break;case null:this.doFullScreen=!1,this.slideShowSub&&(this.doSlideShow=!1,this.slideShowSub?.unsubscribe(),this.slideShowSub=void 0)}}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return r.\u0275fac=function(a){return new(a||r)(n.Y36(p.gz),n.Y36(p.F0))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-art-piece"]],decls:15,vars:7,consts:[[1,"page-container","bg-dark",3,"ngClass"],[1,"container-fluid","py-1","bd-layout"],[1,"d-flex","m-0","justify-content-between"],["type","button",1,"btn","btn-dark","header-btn","px-0",3,"routerLink"],["dropdown","","placement","bottom right",1,"btn-group"],["id","button-basic","dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-lg","btn-dark","header-btn","px-0","dropdown-toggle"],[1,"fas","fa-cog"],["class","dropdown-menu dropdown-menu-right","role","menu","aria-labelledby","button-basic",4,"dropdownMenu"],[1,"d-flex","image-container","justify-content-center"],["class","w-100 mh-100",3,"appFadeImg","src","alt","click",4,"ngIf"],[4,"ngIf"],[1,"d-block","w-100"],["role","menu","aria-labelledby","button-basic",1,"dropdown-menu","dropdown-menu-right"],["role","menuitem"],[1,"dropdown-item",3,"click"],[1,"w-100","mh-100",3,"appFadeImg","src","alt","click"],[1,"previous"],["type","button",1,"btn","btn-dark",3,"routerLink"],[1,"fa-solid","fa-angles-left"],[1,"next"],[1,"fa-solid","fa-angles-right"]],template:function(a,h){1&a&&(n.TgZ(0,"div",0)(1,"main")(2,"div",1)(3,"h1",2)(4,"button",3),n._uU(5," Back "),n.qZA(),n._uU(6),n.TgZ(7,"div",4)(8,"button",5),n._UZ(9,"i",6),n.qZA(),n.YNc(10,s,7,0,"ul",7),n.qZA()(),n.TgZ(11,"div",8),n.YNc(12,o,1,3,"img",9),n.qZA()(),n.YNc(13,g,7,2,"ng-container",10),n.qZA(),n._UZ(14,"app-footer",11),n.qZA()),2&a&&(n.Q6J("ngClass",n.VKq(5,u,h.doSlideShow||h.doFullScreen)),n.xp6(4),n.Q6J("routerLink","/"+h.back),n.xp6(2),n.hij(" ",h.title," "),n.xp6(6),n.Q6J("ngIf",h.image),n.xp6(1),n.Q6J("ngIf",!h.doSlideShow&&!h.doFullScreen))},dependencies:[d.mk,d.O5,p.rH,v.Hz,v.Mq,v.TO,i.c,l],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin:20px 0;color:#888;font-size:24px}h1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#888}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{position:fixed;top:calc(50% - 5px)}.previous[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:2.5em;background:none;border:none;outline:none;opacity:.5;text-shadow:1px 1px 3px #000;transform:scaleY(2)}.previous[_ngcontent-%COMP%]{left:40px}.next[_ngcontent-%COMP%]{right:40px}.header-btn[_ngcontent-%COMP%]{background:none;border:none;outline:none}.image-container[_ngcontent-%COMP%]{position:fixed;top:80px;bottom:55px;left:0;width:100%}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.page-container.full-screen[_ngcontent-%COMP%]{z-index:3000}.page-container.full-screen[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{top:0;bottom:0;background:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}a[_ngcontent-%COMP%]{cursor:pointer}"]}),r})()},5184:(M,x,e)=>{e.d(x,{t:()=>p});var t=e(5879),f=e(915),m=e(6814),_=e(4213),C=e(1777);function n(d,v){if(1&d&&t._UZ(0,"markdown",6),2&d){const i=t.oxw();t.Q6J("data",i.article)}}let p=(()=>{class d{constructor(i){this.route=i,this.article="",this.meta={},this.article=this.route.snapshot.data.article,this.meta=this.route.snapshot.data.meta}}return d.\u0275fac=function(i){return new(i||d)(t.Y36(f.gz))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-article"]],decls:12,vars:6,consts:[[1,"page-container"],[1,"bicycles"],[1,"container-fluid","container-xl","py-4","bd-layout"],[1,"row"],[1,"col-12"],["emoji","",3,"data",4,"ngIf"],["emoji","",3,"data"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0)(1,"main",1)(2,"div",2)(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"div",3)(9,"div",4),t.YNc(10,n,1,1,"markdown",5),t.qZA()()()(),t._UZ(11,"app-footer"),t.qZA()),2&i&&(t.xp6(4),t.Oqu(null==l.meta?null:l.meta.title),t.xp6(2),t.Oqu(t.xi3(7,3,null==l.meta?null:l.meta.date,"MMM d yyyy | hh:mm a")),t.xp6(4),t.Q6J("ngIf",l.article))},dependencies:[m.O5,_.lF,C.c,m.uU]}),d})()},8747:(M,x,e)=>{e.d(x,{L:()=>s});var t=e(5879),f=e(915),m=e(6814),_=e(1835);function C(o,g){1&o&&(t.ynx(0),t._uU(1," \xa0"),t._UZ(2,"i",9),t.BQk())}const n=function(o){return{"shake-feature":o}},p=function(){return[!0,""]},d=function(o){return{dark:o}};let v=(()=>{class o{constructor(){this.article=new _.d}}return o.\u0275fac=function(u){return new(u||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-article-card"]],inputs:{article:"article",dark:"dark"},decls:16,vars:26,consts:[[1,"post-thumb",3,"ngClass"],[3,"routerLink"],[1,"thumb-container"],[3,"alt"],[4,"ngIf"],[1,"article-date",3,"ngClass"],[1,"excerpt",3,"ngClass"],[1,"read-more"],[1,"read-article",3,"routerLink","ngClass"],[1,"fa-solid","fa-star","float-end","text-warning","shake"]],template:function(u,c){1&u&&(t.TgZ(0,"article")(1,"div",0)(2,"a",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"h2"),t.YNc(6,C,3,0,"ng-container",4),t._uU(7),t.qZA()()(),t.TgZ(8,"span",5),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"p",6),t._uU(12),t.qZA(),t.TgZ(13,"p",7)(14,"a",8),t._uU(15,"Read More"),t.qZA()()()),2&u&&(t.xp6(1),t.Q6J("ngClass",t.VKq(15,n,c.article.featured)),t.xp6(1),t.Q6J("routerLink",c.article.url),t.xp6(2),t.Q6J("alt",c.article.title),t.uIk("src",c.article.thumb,t.LSH),t.xp6(2),t.Q6J("ngIf",c.article.featured),t.xp6(1),t.hij(" ",c.article.title," "),t.xp6(1),t.Q6J("ngClass",t.VKq(18,d,t.DdM(17,p).includes(c.dark))),t.xp6(1),t.Oqu(t.xi3(10,12,c.article.date,"MMM d yyyy | hh:mm a")),t.xp6(2),t.Q6J("ngClass",t.VKq(21,d,t.DdM(20,p).includes(c.dark))),t.xp6(1),t.hij(" ",c.article.excerpt,"... "),t.xp6(2),t.Q6J("routerLink",c.article.url)("ngClass",t.VKq(24,d,t.DdM(23,p).includes(c.dark))))},dependencies:[m.mk,m.O5,f.rH,m.uU],styles:['.post-thumb[_ngcontent-%COMP%]{position:relative;text-align:center}.post-thumb[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]{width:60%;display:inline-block;position:relative}.post-thumb[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]:before{content:"";position:relative;display:inline-block;width:0%;height:0;margin-bottom:100%}.post-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:50%;width:calc(100% - 5px);height:calc(100% - 5px);padding:5px;border:1px solid #222;background:white;object-fit:cover;object-position:center}.post-thumb[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px!important;font-weight:400;text-transform:uppercase;width:80%;border:1px solid #222;border-radius:5px;margin:0 auto;padding:5px;background:white;display:block;position:absolute;bottom:10%;left:0;right:0;color:#444}.excerpt[_ngcontent-%COMP%]{min-height:120px;padding-bottom:20px;margin:0}.excerpt.dark[_ngcontent-%COMP%], .article-date.dark[_ngcontent-%COMP%]{color:#fff}.read-article[_ngcontent-%COMP%]{float:right;color:#000}.read-article.dark[_ngcontent-%COMP%]{color:#fff}.read-more[_ngcontent-%COMP%]{position:absolute;margin:0;bottom:8px;right:12px}']}),o})();var i=e(1777);function l(o,g){if(1&o&&(t.TgZ(0,"div",4),t._UZ(1,"app-article-card",5),t.qZA()),2&o){const u=g.$implicit,c=t.oxw();t.xp6(1),t.Q6J("article",u)("dark",c.dark)}}let s=(()=>{class o{constructor(u){this.route=u,this.title="",this.class="",this.dark=!1,this.articles=[],this.title=this.route.snapshot.data.title,this.class=this.route.snapshot.data.class,this.dark=!!this.route.snapshot.data.dark,this.articles=this.route.snapshot.data.articles}}return o.\u0275fac=function(u){return new(u||o)(t.Y36(f.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-articles"]],decls:8,vars:5,consts:[[1,"articles"],[1,"container-fluid","container-xl","py-md-4","bd-layout"],[1,"row"],["class","col-sm-5 col-md-4 col-lg-3 pb-2 position-relative",4,"ngFor","ngForOf"],[1,"col-sm-5","col-md-4","col-lg-3","pb-2","position-relative"],[3,"article","dark"]],template:function(u,c){1&u&&(t.TgZ(0,"div")(1,"main",0)(2,"div",1)(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,l,2,2,"div",3),t.qZA()()(),t._UZ(7,"app-footer"),t.qZA()),2&u&&(t.Gre("page-container ",c.class,""),t.xp6(4),t.Oqu(c.title),t.xp6(2),t.Q6J("ngForOf",c.articles))},dependencies:[m.sg,v,i.c],styles:[".carbon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;text-shadow:1px 1px 0 rgba(0,0,0,.52),-1px -1px 0 rgba(0,0,0,.52),1px -1px 0 rgba(0,0,0,.52),-1px 1px 0 rgba(0,0,0,.52)}h1[_ngcontent-%COMP%]{text-align:center;margin:20px 0}"]}),o})()},5456:(M,x,e)=>{e.d(x,{A:()=>v});var t=e(5879),f=e(915),m=e(1777),_=e(6814);function C(i,l){if(1&i&&(t.TgZ(0,"a",5),t._UZ(1,"img",6),t.qZA()),2&i){const s=t.oxw().$implicit,o=t.oxw().$implicit,g=t.oxw();t.Q6J("routerLink",g.images[s+o].url),t.xp6(1),t.Q6J("src",g.images[s+o].src,t.LSH)}}function n(i,l){if(1&i&&(t.ynx(0),t.YNc(1,C,2,2,"a",4),t.BQk()),2&i){const s=l.$implicit,o=t.oxw().$implicit,g=t.oxw();t.xp6(1),t.Q6J("ngIf",g.images[s+o])}}function p(i,l){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,n,2,1,"ng-container",3),t.qZA()),2&i){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.rows)}}let d=(()=>{class i{constructor(){this.images=[],this.rows=[],this.columns=[]}ngOnInit(){this.rows=Array(Math.ceil(this.images.length/4)).fill(null).map((s,o)=>4*o),this.columns=Array(4).fill(null).map((s,o)=>o)}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-image-grid"]],inputs:{images:"images"},decls:2,vars:1,consts:[[1,"grid-row"],["class","grid-column",4,"ngFor","ngForOf"],[1,"grid-column"],[4,"ngFor","ngForOf"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],[3,"src"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0),t.YNc(1,p,2,1,"div",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",o.columns))},dependencies:[_.sg,_.O5,f.rH],styles:[".grid-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:0 4px 30px}.grid-column[_ngcontent-%COMP%]{flex:25%;max-width:25%;padding:0 4px}.grid-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width: 800px){.grid-column[_ngcontent-%COMP%]{flex:50%;max-width:50%}}@media screen and (max-width: 600px){.grid-column[_ngcontent-%COMP%]{flex:100%;max-width:100%}}"]}),i})(),v=(()=>{class i{constructor(s){this.route=s,this.title="",this.artwork=[],this.title=this.route.snapshot.data.title,this.artwork=this.route.snapshot.data.artwork}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(f.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-artwork"]],decls:6,vars:2,consts:[[1,"page-container","flex-wrap"],[3,"images"],[1,"d-block","w-100"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"main")(2,"h1"),t._uU(3),t.qZA(),t._UZ(4,"app-image-grid",1),t.qZA(),t._UZ(5,"app-footer",2),t.qZA()),2&s&&(t.xp6(3),t.Oqu(o.title),t.xp6(1),t.Q6J("images",o.artwork))},dependencies:[m.c,d],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin:20px 0}.page-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{max-width:1300px}"]}),i})()}}]);