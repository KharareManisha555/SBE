(window.webpackJsonpsbe=window.webpackJsonpsbe||[]).push([[0],{42:function(e,a,t){},49:function(e,a,t){e.exports=t(93)},54:function(e,a,t){},74:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(23),i=t.n(s),n=(t(54),t(18)),c=t.n(n),o=t(17),m=t(14),u=(t(27),t(71),t(72),t(73),t(41),t(42),t(2)),d=t(3),p=t(5),g=t(4),h=t(6),b=(t(74),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){function e(e){document.querySelector(".slides")&&(document.querySelector(".slides").addEventListener("click",a,!1),document.querySelectorAll(".slides .slide")[0].click())}function a(e){var a=e.target;a.getAttribute("data-slide")&&function(e){for(var a=document.querySelectorAll(".slides .slide"),t=0;t<a.length;t++)a[t].classList.remove("slide--left"),a[t].classList.remove("slide--left-left"),a[t].classList.remove("slide--center"),a[t].classList.remove("slide--right"),a[t].classList.remove("slide--right-right");a[e].classList.add("slide--center"),0==e&&(a[4].classList.add("slide--left"),a[3].classList.add("slide--left-left"),a[1].classList.add("slide--right"),a[2].classList.add("slide--right-right"));1==e&&(a[0].classList.add("slide--left"),a[4].classList.add("slide--left-left"),a[2].classList.add("slide--right"),a[3].classList.add("slide--right-right"));2==e&&(a[1].classList.add("slide--left"),a[0].classList.add("slide--left-left"),a[3].classList.add("slide--right"),a[4].classList.add("slide--right-right"));3==e&&(a[2].classList.add("slide--left"),a[1].classList.add("slide--left-left"),a[4].classList.add("slide--right"),a[0].classList.add("slide--right-right"));4==e&&(a[3].classList.add("slide--left"),a[2].classList.add("slide--left-left"),a[0].classList.add("slide--right"),a[1].classList.add("slide--right-right"))}(a.getAttribute("data-slide"))}return window.scrollTo(0,0),window.addEventListener("DOMContentLoaded",function(){setTimeout(e,1)},!0),{init:e}}},{key:"caraouselData",value:function(){return[{image:"/images/img1.jpg",title:"PVC Tape Biocon Electric PVC Tape"},{image:"/images/img8.jpg",title:"Garware Polyester Film"},{image:"/images/img3.jpg",title:"Insulated Fiberglass Sleevings"},{image:"/images/img5.jpg",title:"Gdr Presspahn Paper"},{image:"/images/img6.jpg",title:"Nomex Insulation Paper"}]}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 caraouselblock"},r.a.createElement("div",{className:"slides col-lg-12 col-md-12 col-sm-12 col-xs-12"},this.caraouselData().map(function(e,a){return r.a.createElement("div",{key:a,className:"slide col-lg-3 col-md-3 col-sm-3 col-xs-3","data-slide":a},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding",style:{backgroundImage:"URL("+e.image+")"}},r.a.createElement("span",{className:"caraouselText"},e.title)))})))))}}]),a}(l.Component)),f=t(15),E=t(7),N=t.n(E),v=(t(79),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){N()(".dropdown-toggle").click(function(e){if(N()(document).width()>768){e.preventDefault();var a=N()(this).attr("href");"#"!==a&&(window.location.href=a)}});for(var e=document.getElementsByClassName("sbeLi"),a=0;a<=e.length;a++)window.location.pathname===N()(e[a]).find("a").attr("href")&&N()(e[a]).addClass("current")}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 sbeHead"},r.a.createElement("div",{className:"col-lg-8 col-md-7 col-sm-12 hidden-xs"},r.a.createElement("img",{src:"/images/sbelogo.jpg",className:"pull-left marRight12",width:"100"}),r.a.createElement("h1",{className:"marTop10 blackColor"},"Shri Balaji Electricals")),r.a.createElement("div",{className:"hidden-lg hidden-md hidden-sm"},r.a.createElement("img",{src:"/images/sbelogo.jpg",className:"pull-left marRight12",width:"100"}),r.a.createElement("h1",{className:"marTop10 blackColor"},"Shri Balaji Electricals")),r.a.createElement("div",{className:"col-lg-4 col-md-5 "},r.a.createElement("span",{className:"marTop10 col-lg-12 col-md-9 col-sm-12 col-xs-12 blackColor"},r.a.createElement("b",null,"Call us :")," +91-9820695966"),r.a.createElement("span",{className:"col-lg-12 col-md-9 col-sm-12 col-xs-12 blackColor"},r.a.createElement("b",null,"Email :")," ahujap63@yahoo.com"),r.a.createElement("div",{className:"col-lg-4 col-md-4 pull-right marTopN10"},r.a.createElement("a",{href:"https://www.facebook.com/Shri-Balaji-Electricals-101417767921726/notifications/"},r.a.createElement("i",{className:"fa fa-facebook socialFacebook pull-right",title:"Go to Facebook page"})),r.a.createElement("a",{href:"https://www.indiamart.com/shri-balaji-electrical-maharashtra/"},r.a.createElement("img",{src:"/images/Indiamart.png",alt:"",width:"30",title:"Go to India Mart profile",className:"pull-right"}))))),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("nav",{className:"navbar sbeHeader"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav sbeNav navbar-nav"},r.a.createElement("li",{className:"sbeLi"},r.a.createElement("a",{className:"customPad",href:"/"},"Home")),r.a.createElement("li",{className:"sbeLi"},r.a.createElement("a",{href:"/about-us"},"About Us")),r.a.createElement("li",{className:"sbeLi dropdown"},r.a.createElement("a",{href:"/products",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Products ",r.a.createElement("span",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu sbeDropdown"},this.props.sidebarList.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{href:"/sbe/"+e.toLowerCase().replace(/ /g,"-")},e))}))),r.a.createElement("li",{className:"sbeLi"},r.a.createElement("a",{href:"/contact-us"},"Contact Us")),r.a.createElement("li",{className:"sbeLi"},r.a.createElement("a",{href:"/enquiry"},"Enquiry")),r.a.createElement("li",{className:"sbeLi"},r.a.createElement("a",{href:"/sitemap"},"Site Map"))))))))}}]),a}(l.Component)),y=Object(f.b)(function(e){return{sidebarList:e.sidebarList}},function(e){return{subBlockDataUrl:function(a){return e({type:a})}}})(v),k=(t(80),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 footer"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-6 col-xs-12"},r.a.createElement("h3",null,"About us"),r.a.createElement("p",null,"Shri Balaji Electricals was established in the year ",r.a.createElement("b",null,"1980 at Mumbai, Maharashtra"),". We \u201c",r.a.createElement("b",null,"Shri Balaji Electricals"),"\u201d are a ",r.a.createElement("b",null,"Sole Proprietorship")," firm, engaged as the foremost ",r.a.createElement("b",null,"Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material"),". Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.")),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-3 col-xs-12 sitemap"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("h3",null,"Site Map"),r.a.createElement("ul",{className:"padLeft15"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about-us"},"About us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/products"},"Products")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact-us"},"Contact us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/enquiry"},"Enquiry")),r.a.createElement("li",null,r.a.createElement("a",{href:"/sitemap"},"Site Map"))))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-3 col-xs-12"},r.a.createElement("h3",null,"Get in Touch"),r.a.createElement("h4",null,r.a.createElement("b",null,"Shri Balaji Electricals")),r.a.createElement("b",null,"Address :"),"\xa0 Shop No. 2, Peerbhoy Building, Ground Floor, 93, Princess Street, Lohar Chawl, Mumbai-400 002, Maharashtra, India.",r.a.createElement("br",null),r.a.createElement("b",null,"Mobile No. :")," +91 99200 47380",r.a.createElement("br",null),r.a.createElement("b",null,"E-mail :")," shribalajielectricals63@gmail.com")),r.a.createElement("div",{className:"textFooter col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBorderLine"},r.a.createElement("div",{className:"pull-left"},"\xa9 2019 Shri Balaji Electricals. All rights reserved."),r.a.createElement("div",{className:"pull-right"},"Designed and developed by ",r.a.createElement("i",null,"Diamond Corp."),"."))))}}]),a}(l.Component)),j=(t(81),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){}},{key:"getUrl",value:function(e){var a=e.target.id;this.props.subBlockDataUrl(a),this.props.history.push("/sbe/"+a)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 content"},r.a.createElement("ul",{className:"sidebarUL"},r.a.createElement("h2",null,"Our Products"),this.props.sidebarList.map(function(a,t){return r.a.createElement("li",{key:t,id:a.toLowerCase().replace(/ /g,"-"),onClick:e.getUrl.bind(e)},a)})))}}]),a}(l.Component)),x=Object(f.b)(function(e){return{subBlockData:e.subBlockData,sidebarList:e.sidebarList}},function(e){return{subBlockDataUrl:function(a){return e({type:a})}}})(Object(o.f)(j)),O=(t(83),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 homepage"},r.a.createElement("h2",null,r.a.createElement("span",{className:"blackColor"},"Welcome to")," Shri Balaji Electricals"),r.a.createElement("br",null),r.a.createElement("p",null,"Shri Balaji Electricals was established in the year ",r.a.createElement("b",null,"1980 at Mumbai, Maharashtra"),". We \u201c",r.a.createElement("b",null,"Shri Balaji Electricals"),"\u201d are a ",r.a.createElement("b",null,"Sole Proprietorship")," firm, engaged as the foremost ",r.a.createElement("b",null,"Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material"),". Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.")))}}]),a}(l.Component)),P=Object(o.f)(O),w=(t(84),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutus"},r.a.createElement("h2",null,r.a.createElement("span",{className:"blackColor"},"About ")," Us"),r.a.createElement("br",null),r.a.createElement("p",null,"Shri Balaji Electricals was established in the year ",r.a.createElement("b",null,"1980 at Mumbai, Maharashtra"),". We \u201c",r.a.createElement("b",null,"Shri Balaji Electricals"),"\u201d are a ",r.a.createElement("b",null,"Sole Proprietorship")," firm, engaged as the foremost ",r.a.createElement("b",null,"Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material"),". Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.")))}}]),a}(l.Component)),C=Object(o.f)(w),L=(t(85),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={products:[{image:"/images/img1.jpg",title:"PVC Tape Biocon <br/>Electric PVC Tape"},{image:"/images/img9.jpg",title:"Elmo Luft 1A -<br/> Varnish and Thinner"},{image:"/images/img8.jpg",title:"Garware Polyester<br/> Film"},{image:"/images/img7.jpg",title:"Electrical Insulation<br/> Kraft Paper"},{image:"/images/img6.jpg",title:"Nomex Insulation<br/> Paper"},{image:"/images/img5.jpg",title:"Gdr Presspahn<br/> Paper"},{image:"/images/img4.jpg",title:"Kraft Paper"},{image:"/images/img3.jpg",title:"Insulated Fiberglass<br/> Sleevings"},{image:"/images/img2.jpg",title:"Super Enamelled <br/> Copper Wires"}]},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 products"},r.a.createElement("h3",null,r.a.createElement("span",{className:"blackColor"},"Our ")," Products"),r.a.createElement("br",null),r.a.createElement("ul",{className:""},this.state.products.map(function(e,a){return r.a.createElement("div",null,r.a.createElement("li",{key:"index",className:"effectImg"},r.a.createElement("img",{src:e.image,"data-toggle":"modal","data-target":"#showModal-"+a,className:"productImg img-responsive"}),r.a.createElement("div",{className:"imgTitle",dangerouslySetInnerHTML:{__html:e.title}})),r.a.createElement("div",{className:"modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12",id:"showModal-"+a,role:"dialog"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"modal-content blockModal col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 NOpadding"},r.a.createElement("div",{className:"modal-body blockModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("button",{type:"button",className:"cancelModal pull-right","data-dismiss":"modal","data-target":"#showModal-"+a},"\xd7"),r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.title}}))))))}))))}}]),a}(l.Component)),M=Object(o.f)(L),S=(t(86),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.url;this.props.subBlockDataUrl(e),this.setState({title1:this.props.subBlockData.title1,title2:this.props.subBlockData.title2,image:this.props.subBlockData.image,para1:this.props.subBlockData.para1,para2:this.props.subBlockData.para2})}},{key:"componentWillReceiveProps",value:function(e){this.setState({title1:e.subBlockData.title1,title2:e.subBlockData.title2,image:e.subBlockData.image,para1:e.subBlockData.para1,para2:e.subBlockData.para2})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 block"},r.a.createElement("h3",null,r.a.createElement("span",{className:"blackColor"},this.state.title1),"\xa0",this.state.title2),r.a.createElement("br",null),this.state.image&&this.state.image.length>0?this.state.image.map(function(a,t){return r.a.createElement("div",{key:t,className:"col-lg-4 col-md-4 col-sm-12 col-xs-12 NOpadding"},r.a.createElement("div",{key:t,className:"block-images effectImg col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding"},r.a.createElement("img",{"data-toggle":"modal","data-target":"#showModal"+t,className:"img-bordered img-responsive",src:a,alt:""})),r.a.createElement("div",{className:"modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12",id:"showModal"+t,role:"dialog"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"modal-content blockModal col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 NOpadding"},r.a.createElement("div",{className:"modal-body blockModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("button",{type:"button",className:"cancelModal pull-right","data-dismiss":"modal","data-target":"#showModal"},"\xd7"),r.a.createElement("img",{src:a,alt:""}),r.a.createElement("h4",null,e.state.title1," ",e.state.title2))))))}):null,r.a.createElement("br",null),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding"},r.a.createElement("p",{className:"para1"},this.state.para1),r.a.createElement("p",{className:"para2"},this.state.para2?this.state.para2.map(function(e,a){return r.a.createElement("div",{className:"blackColor",dangerouslySetInnerHTML:{__html:e}})}):null))))}}]),a}(l.Component)),B=Object(f.b)(function(e){return{subBlockData:e.subBlockData}},function(e){return{subBlockDataUrl:function(a){return e({type:a})}}})(Object(o.f)(S)),I=(t(87),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 contactus"},r.a.createElement("h2",null,r.a.createElement("span",{className:"blackColor"},"Contact ")," Us"),r.a.createElement("br",null),r.a.createElement("h4",{className:"blackColor"},"Shri Balaji Electricals"),r.a.createElement("p",null,r.a.createElement("b",null,"Address:")," Shop No. 2, Peerbhoy Building, Ground Floor,",r.a.createElement("br",null)," 93, Princess Street, Lohar Chawl,",r.a.createElement("br",null)," Mumbai-400 002, Maharashtra, India.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Mobile No.:"),r.a.createElement("br",null),"1. Suresh Ahuja : +91 99200 47380,",r.a.createElement("br",null),"2. Manoj Ahuja : +91 98200 31782,",r.a.createElement("br",null),"3. Abhishek Ahuja : +91 98206 95966,",r.a.createElement("br",null),"4. Kanaya Ahuja : +91 75063 00835",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"E-mail :"),r.a.createElement("br",null),"shribalajielectricals63@gmail.com, ",r.a.createElement("br",null),"ahujap63@yahoo.com")))}}]),a}(l.Component)),D=Object(o.f)(I),A=t(25),T=t(19),q=t(46),F=t.n(q),V=(t(88),t(89),t(47)),R=t.n(V),G=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={captchaError:"",captchaVerified:!1},t.callbackFun=t.callbackFun.bind(Object(T.a)(t)),t.captchaVerified=t.captchaVerified.bind(Object(T.a)(t)),t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){N.a.validator.addMethod("regxfirstName",function(e,a,t){return t.test(e)},"First Name should only contain letters & number."),N.a.validator.addMethod("regxlastName",function(e,a,t){return t.test(e)},"Last Name should only contain letters & number."),N.a.validator.addMethod("regxcompanyName",function(e,a,t){return t.test(e)},"Company Name should only contain letters & number."),N.a.validator.addMethod("regxaddress",function(e,a,t){return t.test(e)},"Address should only contain letters & number."),N.a.validator.addMethod("regxemailId",function(e,a,t){return t.test(e)},"Please enter valid email ID."),N.a.validator.addMethod("regxmobileNumber",function(e,a,t){return t.test(e)},"Please enter valid mobile number."),N.a.validator.addMethod("regxrequirement",function(e,a,t){return t.test(e)},"Requirements should only contain letters & number."),N.a.validator.setDefaults({debug:!0,success:"valid"}),N()("#enquiry").validate({rules:{firstName:{required:!0,regxfirstName:/^[A-Za-z][A-Za-z0-9\-\s]*$/},lastName:{required:!0,regxlastName:/^[A-Za-z][A-Za-z0-9\-\s]*$/},companyName:{required:!0,regxcompanyName:/^[A-Za-z][A-Za-z0-9\-\s]*$/},address:{required:!0,regxaddress:/^[A-Za-z0-9_@.\/#&+-]/},emailId:{required:!0,regxemailId:/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},mobileNumber:{required:!0,regxmobileNumber:/^([7-9][0-9]{9})$/},requirement:{required:!0}},errorPlacement:function(e,a){"firstName"===a.attr("name")&&e.insertAfter("#firstName"),"lastName"===a.attr("name")&&e.insertAfter("#lastName"),"companyName"===a.attr("name")&&e.insertAfter("#companyName"),"address"===a.attr("name")&&e.insertAfter("#address"),"emailId"===a.attr("name")&&e.insertAfter("#emailId"),"mobileNumber"===a.attr("name")&&e.insertAfter("#mobileNumber"),"requirement"===a.attr("name")&&e.insertAfter("#requirement")}})}},{key:"handleChange",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){var a=this;e.preventDefault();var t={firstName:this.state.firstName,lastName:this.state.lastName,companyName:this.state.companyName,address:this.state.address,emailId:this.state.emailId,mobileNumber:this.state.mobileNumber,requirement:this.state.requirement,captcha:this.state.captcha};N()("#enquiry").valid()&&(!0===this.state.captchaVerified?c.a.post("/api/users/sendmail",t).then(function(e){R()("Your Request Submitted successfully"),a.setState({firstName:"",lastName:"",companyName:"",address:"",emailId:"",mobileNumber:"",requirement:"",captcha:""})}).catch(function(e){console.log("error",e)}):this.setState({captchaError:"Please verify captcha code"}))}},{key:"callbackFun",value:function(){}},{key:"captchaVerified",value:function(){this.setState({captchaVerified:!0,captchaError:""})}},{key:"reset",value:function(e){e.preventDefault(),this.setState({firstName:"",lastName:"",companyName:"",address:"",emailId:"",mobileNumber:"",requirement:"",captcha:""}),window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiry"},r.a.createElement("h2",null,r.a.createElement("span",{className:"blackColor"},"Enq"),"uiry"),r.a.createElement("br",null),r.a.createElement("form",{id:"enquiry",className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiryform"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"First Name: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.firstName,ref:"firstName",name:"firstName",id:"firstName",onChange:this.handleChange.bind(this),placeholder:"First Name",className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"Last Name:",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.lastName,ref:"lastName",name:"lastName",id:"lastName",onChange:this.handleChange.bind(this),placeholder:"Last Name",className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"Company Name: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.companyName,ref:"companyName",name:"companyName",id:"companyName",onChange:this.handleChange.bind(this),className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"Phone No: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.mobileNumber,maxLength:"10",ref:"mobileNumber",name:"mobileNumber",id:"mobileNumber",onChange:this.handleChange.bind(this),className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"Address: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.address,ref:"address",name:"address",id:"address",onChange:this.handleChange.bind(this),className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"E-mail: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("input",{type:"email",value:this.state.emailId,ref:"emailId",name:"emailId",id:"emailId",onChange:this.handleChange.bind(this),className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement("label",null,"Requirement: ",r.a.createElement("span",{className:"mandatory"},"*")),r.a.createElement("br",null),r.a.createElement("textarea",{value:this.state.requirement,ref:"requirement",name:"requirement",onChange:this.handleChange.bind(this),id:"requirement",rows:"4",className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"})),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput"},r.a.createElement(F.a,{sitekey:"6LdDpb8UAAAAAF--p9Mug9_kH1tEVEN4TBZK6UYG",render:"explicit",onloadCallback:this.callbackFun,type:"image",verifyCallback:this.captchaVerified}),r.a.createElement("label",{className:"captchaError"},this.state.captchaError)),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 formBtn"},r.a.createElement("button",{className:"btn",onClick:this.submit.bind(this)},"Submit")," \xa0 \xa0",r.a.createElement("button",{className:"btn",onClick:this.reset.bind(this)},"Reset")))))}}]),a}(l.Component),W=Object(o.f)(G),U=(t(91),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 site"},r.a.createElement("h2",null,r.a.createElement("span",{className:"blackColor"},"Site ")," Map"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about-us"},"About us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/products"},"Products"),r.a.createElement("ul",{className:"padLeft15"},this.props.sidebarList.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{href:"/sbe/"+e.toLowerCase().replace(/ /g,"-")},e))}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact-us"},"Contact us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/enquiry"},"Enquiry")),r.a.createElement("li",null,r.a.createElement("a",{href:"/sitemap"},"Site Map")))))}}]),a}(l.Component)),K=Object(f.b)(function(e){return{sidebarList:e.sidebarList}},function(e){return{subBlockDataUrl:function(a){return e({type:a})}}})(Object(o.f)(U)),z=function(){return r.a.createElement("div",{className:"skin-blue fixed sidebar-mini"},r.a.createElement(o.a,{path:"/",exact:!0,strict:!0,component:P}),r.a.createElement(o.a,{path:"/about-us",exact:!0,strict:!0,component:C}),r.a.createElement(o.a,{path:"/products",exact:!0,strict:!0,component:M}),r.a.createElement(o.a,{path:"/sbe/:url",exact:!0,strict:!0,component:B}),r.a.createElement(o.a,{path:"/contact-us",exact:!0,strict:!0,component:D}),r.a.createElement(o.a,{path:"/enquiry",exact:!0,strict:!0,component:W}),r.a.createElement(o.a,{path:"/sitemap",exact:!0,strict:!0,component:K}))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(y,null),r.a.createElement("div",{className:"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12"},r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:z}))),r.a.createElement(k,null)))};t(92);c.a.defaults.baseURL="http://localhost:3660",c.a.defaults.headers.post["Content-Type"]="application/json";var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(21),$=t(48);function Q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function J(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Q(t,!0).forEach(function(a){Object(A.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Y={subBlockData:{},sidebarList:["PVC Tape Biocon Electric PVC Tape","Gdr Presspahn Paper","Nomex Insulation Paper","Insulated Fiberglass Sleevings","Electrical Insulation Kraft Paper","Garware Polyester Film","Elmo Luft 1A - Varnish and Thinne","Super Enamelled Copper Wires","Rubber Compound","Fibre Glass Products","Soldering Wires & Stics"]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0,t=J({},e);return"pvc-tape-biocon-electric-pvc-tape"===a.type&&(t.subBlockData={title1:"PVC Tape Biocon",title2:"Electric PVC Tape",image:["/images/img1.jpg","/images/defaultImage.png","/images/defaultImage.png"],para1:"Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.",para2:["<li> Biocon Electric PVC Tape </li>","<li> Minimum Order Quantity: 1200 Roll </li>","<li> Adhesive Type: Single Sided </li>","<li> Material     : PVC </li>","<li> Brand        : Biocon </li>","<li> Tape Length  : 0-10 m </li>","<li> Tape Width   : 0-20 mm </li><br/>","<b>Additional Information :</b>","<li> Packaging Details: 30 nos per box  </li>","<li> Minimum Order Quantity: 1500 Piece </li>","<li> Tape Length 0-10 m </li>"]}),"super-enamelled-copper-wires"===a.type&&(t.subBlockData={title1:"Super Enamelled",title2:"Copper Wires",image:["/images/img2.jpg"],para1:"Super Enamelled Copper Wires",para2:["<li> Rs 550\xa0/\xa0Kilogram </li>","<li> Diameter: 1-3 mm </li>","<li> Wire Gauge: 5-10 </li>","<li> Shape: Round </li>","<li> Insulation Type: Enameled </li>","<li> Material: Copper </li>","<li> Super Enamelled Copper Wires </li>"]}),"insulated-fiberglass-sleevings"===a.type&&(t.subBlockData={title1:"Insulated",title2:"Fiberglass Sleevings",image:["/images/img3.jpg"],para1:"Insulated Fiberglass Sleevings",para2:["<li> Rs 1\xa0/\xa0Meter </li>","<li> Minimum Order Quantity:\xa01000 Meter </li>","<li> Usage/Application </li>","<li> Motors,Wire Harness and Various other Insulating Purposes </li>","<li> Brand: Lotus </li>","<li> Voltage: 600V </li>","<li> Material: Fiberglass </li>","<li> Max Temperature Resistance: -30 to 155 Degree Celsius </li>","<li> Insulated Fiberglass Sleevings </li><br/>","<b>Additional Information :</b>","<li> Packaging Details: 100 mtrs </li>"]}),"gdr-presspahn-paper"===a.type&&(t.subBlockData={title1:"Gdr",title2:"Presspahn Paper",image:["/images/img5.jpg"],para1:"Gdr Presspahn Paper",para2:["<li> Rs 375\xa0/\xa0Kilogram </li>","<li> GSM: 150 - 200 </li>","<li> Size: 1/2 to 5 inch </li>","<li> Packaging Type: Roll </li>","<li> Material: Kraft Paper </li>","<li> Length: 0-200 m </li>","<li> For Power transformers, also used in the label industry </li>"]}),"nomex-insulation-paper"===a.type&&(t.subBlockData={title1:"Nomex",title2:"Insulation Paper",image:["/images/img6.jpg"],para1:"Nomex Insulation Paper",para2:["<li> Rs 730\xa0/\xa0Kg </li>","<li> Minimum Order Quantity:\xa050 Kg </li>","<li> Material: Dupond </li>","<li> Packaging Type: Roll </li>","<li> Tensile Strength: 100 mpa </li>","<li> Brand: Nomex </li>","<li> Thickness: 0.25 - 2 mm </li><br/>","<b>Nomex Paper Class F</b>\xa0is Nomex Polyester Nomex composite, which is used for electrical motor insulation. It is made using Original DuPont Nomex paper. Nomex Polyester Paper gives best thermal performance in terms of electrical insulating properties."]}),"electrical-insulation-kraft-paper"===a.type&&(t.subBlockData={title1:"Electrical Insulation",title2:"Kraft Paper",image:["/images/img7.jpg"],para1:"Electrical Insulation Kraft Paper",para2:["<li> Rs 95\xa0/\xa0Kilogram </li>","<li> Paper Type: Kraft Paper </li>","<li> Packaging Type: Roll </li>","<li> Pulp Material: Sulfate Pulp </li>","<li> Thickness: 0.05 mm - 0.25 mm </li>","<li> Pattern: Plain </li>","<li> Temperature: 105 Degree C </li>","<li> Electrical Insulation Kraft Paper </li>"]}),"garware-polyester-film"===a.type&&(t.subBlockData={title1:"Garware",title2:"Polyester Film",image:["/images/img8.jpg"],para1:"Garware Polyester Film",para2:["<li> Rs 150\xa0/\xa0Kilogram </li>","<li> Minimum Order Quantity:\xa050 Kilogram </li>","<li> Brand: Garware </li>","<li> Packaging Type: Roll </li>","<li> Usage/Application: Industrial </li>","<li> Thickness: 25, 50, 75, 100, 125, 187, 250, 350 Microns </li>","<li> Material: Polyester </li>","<li> Core Weight: 2.2 kg </li>","<li> Garware Polyester Film </li><br/>","<b>Additional Information :</b>","<li> Packaging Details: 50 Kgs </li>"]}),"elmo-luft-1a---varnish-and-thinne"===a.type&&(t.subBlockData={title1:"Elmo Luft 1A -",title2:"Varnish and Thinner",image:["/images/img9.jpg"],para1:"Elmo Luft 1A - Varnish and Thinner",para2:["<li> Rs 185\xa0/\xa0Litre</li>","<li> Minimum Order Quantity:\xa015 Litre</li><br/>","Dr. Beck Varnish is best in class and specially required for Motor,fan and any type of rewinding works."]}),"about-us"===a.type&&(t.subBlockData={title1:"Polyster",title2:"Garware",image:["/images/pic9.jpg"],para1:"We are Authorized Distributor of Polyster Film - Garware , which is made up of premier quality raw material thus, confirming to the international standards. It Can be Supplied as per specific sizes of customer's need.",para2:[]}),"rubber-compound"===a.type&&(t.subBlockData={title1:"Rubber",title2:"Compound",image:["/images/defaultImage.png"],para1:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",para2:[]}),"fibre-glass-products"===a.type&&(t.subBlockData={title1:"Fibre Glass",title2:"Products",image:["/images/defaultImage.png"],para1:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",para2:[]}),"soldering-wires-&-stics"===a.type&&(t.subBlockData={title1:"Soldering Wires",title2:"and Stics",image:["/images/defaultImage.png"],para1:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",para2:[]}),t},ee=Object(_.c)(X,Object(_.a)($.a));i.a.render(r.a.createElement(f.a,{store:ee}," ",r.a.createElement(H,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.bb781d8f.chunk.js.map