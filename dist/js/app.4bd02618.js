(function(t){function a(a){for(var n,r,o=a[0],c=a[1],l=a[2],d=0,p=[];d<o.length;d++)r=o[d],s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),s=e.n(n);s.a},"0610":function(t,a,e){},"089c":function(t,a,e){},"0ab5":function(t,a,e){},"10f3":function(t,a,e){},"138a":function(t,a,e){},"268e":function(t,a,e){"use strict";var n=e("d53c"),s=e.n(n);s.a},"27e1":function(t,a,e){"use strict";var n=e("97fa"),s=e.n(n);s.a},"3d74":function(t,a,e){"use strict";var n=e("c271"),s=e.n(n);s.a},4502:function(t,a,e){"use strict";var n=e("d841"),s=e.n(n);s.a},"469a":function(t,a,e){},"49e5":function(t,a,e){"use strict";var n=e("469a"),s=e.n(n);s.a},"52ab":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r=window.pageYOffset,o={name:"app",methods:{handleScroll:function(t){t.preventDefault();var a=document.getElementById("nav-bar"),e=window.pageYOffset;r>e?(console.log(a.style.top),a.style.top="0"):a.style.top="-95px",r=e,a.style.backgroundColor=r>"95"?"#333":"rgba(0,0,0,0)"}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},c=o,l=(e("034f"),e("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,p=e("8c4f"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("h1",[t._v("About Page")]),e("Postmail")],1),e("Footer")],1)},v=[],f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-md",attrs:{id:"nav-bar"}},[e("div",{staticClass:"container",staticStyle:{display:"flex"}},[e("Logo",{staticClass:"navbar-brand"}),e("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("font-awesome-icon",{staticStyle:{color:"#fff"},attrs:{icon:"bars"}})],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("div",{staticClass:"nav navbar-nav ml-auto"},[e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"about"}},[t._v("About")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"apps"}},[t._v("Apps")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"signup"}},[t._v("Sign Up")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"erps"}},[t._v("ERPs")])],1),e("div",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"contact"}},[t._v("Contact")])],1)])]),t._m(0)],1)])])},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav navbar-nav ml-auto",attrs:{id:"navPhoneNumWrapper"}},[e("p",{attrs:{id:"navPhoneNum"}},[e("i",{staticClass:"fa fa-phone"}),t._v(" 877.841.0203")])])}],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("router-link",{staticClass:"navbar-brand p-3",attrs:{to:"/"}},[e("img",{attrs:{src:t.logo.img,alt:"logo",id:"logo"}})])],1)},b=[],h=e("bf3d"),C=e.n(h),x={name:"Logo",data:function(){return{logo:{img:C.a}}}},y=x,S=(e("cccc"),Object(l["a"])(y,g,b,!1,null,null,null));S.options.__file="Logo.vue";var w=S.exports,E=[{name:"About"},{name:"Apps"},{name:"Sign Up"},{name:"ERPs"},{name:"Contact"}],P={name:"Navbar",components:{Logo:w},data:function(){return{navLinks:E}}},F=P,N=(e("ed71"),Object(l["a"])(F,f,_,!1,null,null,null));N.options.__file="Navbar.vue";var j=N.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row",staticStyle:{"padding-top":"15px"}},[e("div",{staticClass:"col-md-4 text-center col-xs-4"},[e("a",{attrs:{href:"mailto:sales@cloudsnap.com",id:"sales_email"}},[t._v(t._s(t.cloudsnap.email))])]),t._m(0),e("div",{staticClass:"col-md-4 text-center col-xs-4"},[e("a",{attrs:{href:"tel:+18778410203",id:"sales_phone"}},[t._v(t._s(t.cloudsnap.phoneNum))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"text-center col-md-12 col-xs-12",attrs:{id:"footer-address"}},[e("p",[t._v(t._s(t.cloudsnap.address)),e("br"),e("sub",[e("i",{staticClass:"fa fa-copyright"}),t._v(" "+t._s(t.cloudsnap.copywrite)+"\n\t\t\t\t")])])])])])])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 col-xs-4 text-center"},[e("a",{staticClass:"social-icon",attrs:{href:"https://www.facebook.com/Cloudsnap-719145441790767/?modal=admin_todo_tour",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook-square",attrs:{"aria-hidden":"true"}})]),e("a",{staticClass:"social-icon",attrs:{href:"https://www.linkedin.com/company/cloudsnapconnect/ ",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin-square",attrs:{"aria-hidden":"true"}})]),e("a",{staticClass:"social-icon",attrs:{href:"https://twitter.com/Cloudsnap2",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter-square",attrs:{"aria-hidden":"true"}})])])}],$={email:"sales@cloudsnap.com",phoneNum:"(877) 841-0203",address:"701 Brazos Street Austin, Texas 78701 ",copywrite:" Cloudsnap | All Rights Reserved "},A={name:"Footer",data:function(){return{cloudsnap:$}}},U=A,q=(e("f668"),Object(l["a"])(U,k,O,!1,null,"fd97081e",null));q.options.__file="Footer.vue";var T=q.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{attrs:{action:"https://postmail.invotes.com/send",method:"post",id:"email_form"}},[e("input",{attrs:{type:"text",name:"subject",placeholder:"Subject"}}),e("textarea",{attrs:{name:"text",placeholder:"Message"}}),e("input",{attrs:{type:"hidden",name:"access_token",value:"geuvzcp1zvzd52yx9u3qw54q"}}),e("input",{attrs:{type:"hidden",name:"success_url",value:"/thanks"}}),e("input",{attrs:{type:"hidden",name:"error_url",value:"/#/error/"}}),e("input",{attrs:{type:"text",name:"will@cloudsnap.com",placeholder:"Email"}}),e("input",{attrs:{id:"submitForm",type:"submit",value:"Send"}})])])}],M=document.getElementById("emailForm"),I={name:"Postmail",created:function(){var t=document.getElementById("submitForm");M.addEventListener("submit",function(a){setTimeout(function(){t.value="Sending...",t.disabled=!0},1)})}},R=I,z=(e("49e5"),Object(l["a"])(R,L,B,!1,null,null,null));z.options.__file="Postmail.vue";var W=z.exports,D={name:"AboutPage",components:{Navbar:j,Footer:T,Postmail:W}},Y=D,H=(e("f366"),Object(l["a"])(Y,m,v,!1,null,"34e59c1f",null));H.options.__file="AboutPage.vue";var J=H.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("Splash")],1),e("Footer")],1)},X=[],K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{attrs:{id:"splash"}},[e("div",{staticClass:"container h-100"},[e("div",{staticClass:"row h-100"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"header-content"},[e("SplashText"),e("div",{attrs:{id:"signUpBtn1"}},[e("SignUpBtn")],1)],1)]),e("div",{staticClass:"col-md-7 col-xs-12 my-auto"},[e("SplashImg")],1),e("div",{staticClass:"row",attrs:{id:"signUpBtn"}},[e("div",{staticClass:"col-xs-12 mx-auto"},[e("SignUpBtn")],1)])])])])},Q=[],V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"btnWrapper"}},[e("router-link",{staticClass:"btn",attrs:{to:"signup",id:"sign-up-btn"}},[t._v("Sign up for a free trial!")])],1)},Z=[],tt={name:"SignUpBtn"},at=tt,et=(e("6a3b"),Object(l["a"])(at,V,Z,!1,null,null,null));et.options.__file="SignUpBtn.vue";var nt=et.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("img",{staticClass:"img-fluid",attrs:{src:t.img.url,id:"main-img",alt:"header-comp"}})])},it=[],rt=e("f186"),ot=e.n(rt),ct={name:"SplashImage",data:function(){return{img:{url:ot.a}}}},lt=ct,ut=(e("6532"),Object(l["a"])(lt,st,it,!1,null,"5ab86572",null));ut.options.__file="SplashImage.vue";var dt=ut.exports,pt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"mainText"}},[e("h1",{attrs:{id:"splash-text"}},[t._v("\n\t\tConnect your apps in a"),e("strong",[t._v(" snap")])]),e("p",{staticClass:"lead"},[t._v(" The iPaaS solution built for the hybrid enterprise")])])}],vt={name:"MainText"},ft=vt,_t=(e("e1eb"),Object(l["a"])(ft,pt,mt,!1,null,"292fd8c9",null));_t.options.__file="SplashHeading.vue";var gt=_t.exports,bt={name:"Splash",components:{SignUpBtn:nt,SplashImg:dt,SplashText:gt}},ht=bt,Ct=(e("6046"),Object(l["a"])(ht,K,Q,!1,null,"20af4ef4",null));Ct.options.__file="Splash.vue";var xt=Ct.exports,yt={name:"IndexPage",components:{Navbar:j,Footer:T,Splash:xt}},St=yt,wt=(e("5b42"),Object(l["a"])(St,G,X,!1,null,"0d43fcc3",null));wt.options.__file="IndexPage.vue";var Et=wt.exports,Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("AppLibrary")],1),e("Footer")],1)},Ft=[],Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"appsWrapperWrapper"}},t._l(t.apps,function(a){return e("div",{key:t.apps[a],attrs:{id:"appsWrapper"}},[e("div",{attrs:{id:"apps"}},[e("img",{staticClass:"card-img-top",attrs:{src:a.icon.url,alt:"img",id:"appIcon"}}),e("div",[e("h4",[t._v("\n\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t")]),e("p",[t._v(t._s(a.description.slice(0,80)))]),e("p",[e("small",[t._v("Last Updated: "+t._s(a.created_at.slice(0,10)))])])])])])}))])},jt=[],kt=(e("7f7f"),e("55dd"),e("bc3a")),Ot=e.n(kt),$t="https://nuvola.numanage.io/app_templates.json",At={name:"appPageLogos",data:function(){return{apps:[],loading:!1}},created:function(){var t=this;this.loading=!0,Ot.a.get($t).then(function(t){return t.data}).then(function(t){return t.sort(function(t,a){return t.name>a.name?1:-1}),t}).then(function(a){return t.apps=a,!0}).catch(function(a){t.errors.push(a)}),this.loading=!1}},Ut=At,qt=(e("4502"),Object(l["a"])(Ut,Nt,jt,!1,null,null,null));qt.options.__file="AppLibraryApps.vue";var Tt=qt.exports,Lt={name:"AppsPage",components:{Navbar:j,Footer:T,AppLibrary:Tt}},Bt=Lt,Mt=(e("3d74"),Object(l["a"])(Bt,Pt,Ft,!1,null,"3a288d6a",null));Mt.options.__file="AppsPage.vue";var It=Mt.exports,Rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("SignUpForm")],1),e("Footer")],1)},zt=[],Wt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10 offset-md-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10",attrs:{id:"signUpForm"}},[e("span",{attrs:{id:"signUpHeader"}},[e("p",[t._v("Sign up for a free 30 day trial")]),e("span",{staticStyle:{"font-size":"16px"}},[t._v("no credit card necessary)")])]),e("form",{attrs:{id:"contactForm"}},[e("h2",[t._v("User Information")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",{attrs:{for:"firstName"}},[t._v("First Name:")]),e("input",{staticClass:"inputField",attrs:{name:"firstName",type:"text",id:"firstName",required:""}})]),e("div",{staticClass:"col-sm-6"},[e("label",{attrs:{for:"lastName"}},[t._v("Last Name:")]),e("input",{staticClass:"inputField",attrs:{name:"lastName",id:"lastName",type:"text",required:""}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",{attrs:{for:"companyName"}},[t._v("Company Name:")]),e("input",{staticClass:"inputField",attrs:{name:"companyName",type:"text",id:"companyName",required:""}})]),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Phone Number")]),e("input",{staticClass:"inputField",attrs:{name:"phone_number",type:"number",id:"phone_number",required:""}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Email")]),e("input",{staticClass:"inputField",attrs:{name:"email",type:"email",id:"email",required:""}})]),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Password")]),e("input",{staticClass:"inputField",attrs:{name:"password",type:"password",required:""}})])]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h3",[t._v("Get Your Custom Cloudsnap Instance")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-7",staticStyle:{"padding-right":"0"}},[e("input",{staticClass:"inputField",attrs:{name:"corporation[subdomain]",id:"subdomain",type:"text",placeholder:"Company",required:""}})]),e("div",{staticClass:"col-5",staticStyle:{"padding-left":"0","padding-top":"4px"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t.numanage.io\n\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"col-12",staticStyle:{"font-size":"13px",color:"#999"}},[t._v("Example:\n\t\t\t\t\t\t\t\t\t\t\t"),e("u",[t._v("companyname")]),t._v(".numanage.io\n\t\t\t\t\t\t\t\t\t\t")])])])]),e("br"),e("input",{staticClass:"btn float-xs-right",attrs:{type:"submit",value:"Submit",id:"submitBtn"}})])])])])])])}],Yt={name:"SignUpForm"},Ht=Yt,Jt=(e("5e00"),Object(l["a"])(Ht,Wt,Dt,!1,null,null,null));Jt.options.__file="SignUpForm.vue";var Gt=Jt.exports,Xt={name:"SignupPage",components:{Navbar:j,Footer:T,SignUpForm:Gt}},Kt=Xt,Qt=(e("83dd"),Object(l["a"])(Kt,Rt,zt,!1,null,"5dde8470",null));Qt.options.__file="SignUpPage.vue";var Vt=Qt.exports,Zt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("h1",[t._v("ERPs Page")]),e("Postmail")],1),e("Footer")],1)},ta=[],aa={name:"ErpsPage",components:{Navbar:j,Footer:T,Postmail:W}},ea=aa,na=(e("ca1e"),Object(l["a"])(ea,Zt,ta,!1,null,"1bc4c0da",null));na.options.__file="ErpsPage.vue";var sa=na.exports,ia=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}},[e("ContactForm")],1),e("Footer")],1)},ra=[],oa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-form",attrs:{id:"contact-form"}},[e("div",{staticClass:"row mx-auto"},[e("div",{staticClass:"col-md-9 text-center"},[t.messageSent?t._e():e("h1",{staticClass:"contact-form-title"},[t._v(t._s(t.cloudsnap.title))]),t.messageSent?e("h1",{staticClass:"contact-form-title-after"},[t._v("\n\t\t\t\t"+t._s(t.cloudsnap.successMessage)+"\n\t\t\t")]):t._e(),t.messageSent?e("p",{staticClass:"lead",staticStyle:{color:"#fff"}},[t._v("\n\t\t\t\t"+t._s(t.cloudsnap.successMessageSub)+"\n\t\t\t")]):t._e(),t.messageSent?t._e():e("div",{staticClass:"separator"}),t.isSending?e("div",{staticClass:"loading"},[t._v("Delivering Message...")]):t._e(),t.messageSent?t._e():e("form",{staticClass:"form",attrs:{id:"submitForm"},on:{submit:function(a){return a.preventDefault(),t.handleSubmit(a)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.contact.name},on:{input:function(a){a.target.composing||t.$set(t.contact,"name",a.target.value)}}}),e("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,email:!0,regex:/[0-9]+/},expression:"{ required: true, email:true, regex: /[0-9]+/ }"},{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],attrs:{type:"email",name:"email",placeholder:"Email",required:""},domProps:{value:t.contact.email},on:{input:function(a){a.target.composing||t.$set(t.contact,"email",a.target.value)}}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.message,expression:"contact.message"}],attrs:{name:"message",rows:"4",placeholder:"Message"},domProps:{value:t.contact.message},on:{input:function(a){a.target.composing||t.$set(t.contact,"message",a.target.value)}}}),e("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Send")])])]),t.messageSent?t._e():e("div",{staticClass:"col-md-3",attrs:{id:"sideLogos"}},[e("div",{staticClass:"col-md-12 text-center"},[e("ul",{staticClass:"list-unstyled mb-0"},[e("li",{staticClass:"list-item"},[e("i",{staticClass:"fa fa-map-marker fa-2x"}),e("p",[t._v(t._s(t.cloudsnap.address)+" "+t._s(t.cloudsnap.city))])]),e("li",{staticClass:"list-item"},[e("i",{staticClass:"fa fa-phone mt-4 fa-2x"}),e("p",[t._v(t._s(t.cloudsnap.phone))])]),e("li",{staticClass:"list-item"},[e("i",{staticClass:"fa fa-envelope mt-4 fa-2x"}),e("p",[t._v(t._s(t.cloudsnap.email))])])])])])])])},ca=[],la={name:"contactForm",data:function(){return{contact:{name:"",email:"",message:""},cloudsnap:{title:"Contact Us!",address:"701 Brazos St.",city:"Austin, TX",phone:"(877) 841-0203",email:"sales@cloudsnap.com",successMessage:"Message Sent!",successMessageSub:"Thanks for the inquiry! We will contact you shortly!"},isSending:!1,messageSent:!1}},methods:{handleSubmit:function(t){var a=this;t.preventDefault();var e="http://localhost:3333/vets";this.isSending=!0;var n={name:this.contact.name,email:this.contact.email,message:this.contact.message,date:new Date};Ot()({method:"post",url:e,data:n,config:{headers:{"Content-Type:":"application/json"}}}).then(function(t){404!==t.status&&!0===a.isSending&&(a.isSending=!1,a.messageSent=!0)}).catch(function(t){return t})}}},ua=la,da=(e("8e69"),Object(l["a"])(ua,oa,ca,!1,null,null,null));da.options.__file="ContactForm.vue";var pa=da.exports,ma={name:"ContactPage",components:{Navbar:j,Footer:T,ContactForm:pa}},va=ma,fa=(e("f13c"),Object(l["a"])(va,ia,ra,!1,null,"18daff3e",null));fa.options.__file="ContactPage.vue";var _a=fa.exports,ga=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}}),e("Footer")],1)},ba=[],ha={name:"ThanksPage",components:{Navbar:j,Footer:T}},Ca=ha,xa=(e("27e1"),Object(l["a"])(Ca,ga,ba,!1,null,"4e375336",null));xa.options.__file="ThanksPage.vue";var ya=xa.exports,Sa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg"}},[e("Navbar"),e("div",{attrs:{id:"content"}}),e("Footer")],1)},wa=[],Ea={name:"ErrorPage",components:{Navbar:j,Footer:T}},Pa=Ea,Fa=(e("268e"),Object(l["a"])(Pa,Sa,wa,!1,null,"1e7da9b5",null));Fa.options.__file="ErrorPage.vue";var Na=Fa.exports;n["a"].use(p["a"]);var ja=[{path:"/",component:Et},{path:"/about",component:J},{path:"/apps",component:It},{path:"/signup",component:Vt},{path:"/erps",component:sa},{path:"/contact",component:_a},{path:"/thanks",component:ya},{path:"/error",component:Na}],ka=new p["a"]({routes:ja}),Oa=ka,$a=(e("4989"),e("ab8b"),e("ecee")),Aa=e("c074"),Ua=e("ad3d"),qa=e("7bb1");n["a"].use(qa["a"]),$a["c"].add(Aa["a"]),n["a"].component("font-awesome-icon",Ua["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)},el:"#app",name:"app",router:Oa,template:"<App/>",components:{App:d}}).$mount("#app")},"5b42":function(t,a,e){"use strict";var n=e("9594"),s=e.n(n);s.a},"5e00":function(t,a,e){"use strict";var n=e("eda8"),s=e.n(n);s.a},6046:function(t,a,e){"use strict";var n=e("0ab5"),s=e.n(n);s.a},"64a9":function(t,a,e){},6532:function(t,a,e){"use strict";var n=e("10f3"),s=e.n(n);s.a},"6a3b":function(t,a,e){"use strict";var n=e("8740"),s=e.n(n);s.a},"7cff":function(t,a,e){},"83dd":function(t,a,e){"use strict";var n=e("7cff"),s=e.n(n);s.a},8740:function(t,a,e){},"8e69":function(t,a,e){"use strict";var n=e("dcb2"),s=e.n(n);s.a},9594:function(t,a,e){},"97fa":function(t,a,e){},"9d8a":function(t,a,e){},bf3d:function(t,a,e){t.exports=e.p+"img/cloudsnap-logo-white.18cc451b.png"},c271:function(t,a,e){},ca1e:function(t,a,e){"use strict";var n=e("fedb"),s=e.n(n);s.a},ca84:function(t,a,e){},cccc:function(t,a,e){"use strict";var n=e("089c"),s=e.n(n);s.a},d53c:function(t,a,e){},d841:function(t,a,e){},dcb2:function(t,a,e){},e1eb:function(t,a,e){"use strict";var n=e("52ab"),s=e.n(n);s.a},ed71:function(t,a,e){"use strict";var n=e("ca84"),s=e.n(n);s.a},eda8:function(t,a,e){},f13c:function(t,a,e){"use strict";var n=e("138a"),s=e.n(n);s.a},f186:function(t,a,e){t.exports=e.p+"img/main-comp-img.722770f4.png"},f366:function(t,a,e){"use strict";var n=e("9d8a"),s=e.n(n);s.a},f668:function(t,a,e){"use strict";var n=e("0610"),s=e.n(n);s.a},fedb:function(t,a,e){}});
//# sourceMappingURL=app.4bd02618.js.map