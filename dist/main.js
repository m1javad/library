(()=>{"use strict";const e=function(e,t){let n=document.getElementById(e),l=document.getElementById(t);for(;l.childNodes.length>0;)n.appendChild(l.childNodes[0])},t=function(){const e=document.getElementById("nav2"),t=document.createElement("ul");t.className="nav3",t.id="searchbarmobile";const n=document.createElement("div");n.className="input-group",n.id="input-group-mobile",t.appendChild(n),e.appendChild(t)};let n,l;function o(){e("mainitems","navbarcollapse"),document.getElementById("burgermenu").style.right="0",document.getElementById("Blurwhole").style.display="flex",document.getElementById("closebtn").style.display="flex"}function i(){e("navbarcollapse","mainitems"),document.getElementById("burgermenu").style.right="-280px",setTimeout((function(){document.getElementById("Blurwhole").style.display="none",document.getElementById("closebtn").style.display="none"}),300)}const s=function(){const s=document.querySelector(".navbar-header"),r=document.querySelector(".lefts"),a=document.querySelector(".navbar-brandC"),d=document.querySelector(".navbar-toggleC"),c=document.querySelector(".cartC"),u=document.querySelector("#input-group"),y=document.querySelector("#search-bar");function m(){window.innerWidth>768?1!=l&&(function(){const e=document.querySelector(".bannercontainer"),t=document.querySelector(".bannercontant"),n=document.querySelector(".bannertextsection"),l=document.querySelector(".bannerline"),o=document.querySelector(".bannertitle"),i=document.querySelector(".bannertext"),s=document.querySelector(".bannerappinstall"),r=document.querySelector(".bannerbutton"),a=document.querySelector(".imagecontainer");e.style.alignItems="center",e.style.height="380px",t.style.alignItems="center",n.style.padding="unset",n.style.paddingBottom="unset",n.style.height="unset",n.style.width="unset",n.style.gap="15px",l.style.width="550px",l.style.margin="unset",o.style.textAlign="unset",o.style.fontSize="38px",i.style.fontSize="25px",i.style.lineHeight="35px",i.style.width="450px",s.style.marginTop="5px",r.style.width="250px",r.style.height="50px",r.style.padding="8px 30px",r.style.border="2px solid #FFFFFF",r.style.fontSize="20px",a.style.height="380px"}(),i(),y.style.width="65vw",s.style.gap="25px",s.style.display="",s.style.gridTemplate="",r.style.gridArea="",r.style.display="",r.style.justifyContent="",r.style.alignItems="",r.style.width="",a.style.gridArea="",d.style.position="",d.style.right="",c.style.position="",c.style.left="",a.style.alignSelf="",u.style.display="",u.style.position="",function(){const t=document.getElementById("loginbotton");document.getElementById("login").appendChild(t),e("input-group","input-group-mobile"),document.getElementById("nav2").innerHTML=""}(),l=1,n=0):1!=n&&(function(){const e=document.querySelector(".bannercontainer"),t=document.querySelector(".bannercontant"),n=document.querySelector(".bannertextsection"),l=document.querySelector(".bannerline"),o=document.querySelector(".bannertitle"),i=document.querySelector(".bannertext"),s=document.querySelector(".bannerappinstall"),r=document.querySelector(".bannerbutton"),a=document.querySelector(".imagecontainer");e.style.alignItems="flex-end",e.style.height="200px",t.style.alignItems="flex-end",n.style.padding="10px",n.style.paddingBottom="0",n.style.height="180px",n.style.width="200px",n.style.gap="0px",l.style.width="50px",l.style.margin="5px",o.style.textAlign="center",o.style.fontSize="20px",i.style.fontSize="12px",i.style.lineHeight="16px",i.style.width="200px",s.style.marginTop="3px",r.style.width="120px",r.style.height="30px",r.style.padding="2px 4px",r.style.border="1px solid #FFFFFF",r.style.fontSize="10px",r.style.marginBottom="28px",a.style.height="150px"}(),y.style.width="85vw",s.style.gap="0px",s.style.display="grid",s.style.gridTemplate="1fr/1fr 3fr 1fr",r.style.gridArea="1/1/2/2",r.style.display="flex",r.style.justifyContent="flex-start",r.style.alignItems="center",r.style.width="40px",a.style.gridArea="1/2/2/3",d.style.position="absolute",d.style.right="15px",c.style.position="absolute",c.style.left="15px",a.style.alignSelf="center",u.style.display="none",u.style.position="absolute",e("navbarcollapse","login"),t(),e("input-group-mobile","input-group"),n=1,l=0)}document.querySelector("#dropdownbotton"),window.addEventListener("resize",m),document.getElementById("togglenavbar").addEventListener("click",o),document.getElementById("closebtn").addEventListener("click",i),m()},r=["ادبیات","ادبیات","ادبیات"],a=["تاریخ","تاریخ","تاریخ","تاریخ"],d=["دفاع","دفاع","دفاع","دفاع","دفاع","دفاع","دفاع"],c=["روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی"],u=["رایگان","رایگان","رایگان","رایگان","رایگان","رایگان"];function y(e){return{eventcreature:function(e,t){document.getElementById(e).addEventListener("mouseover",t)},createmenu:function(){const t=document.getElementById("dropdown2");t.innerText="";for(var n=0;n<e.length;n++){const l=document.createElement("li"),o=document.createElement("a");l.href="#",l.appendChild(o),o.textContent=e[n],t.appendChild(l)}}}}let m=!1;function p(){m?(document.getElementById("dropdownc").style.display="none",document.getElementById("dropdown3").style.display="none",m=!1):(document.getElementById("dropdownc").style.display="flex",document.getElementById("dropdown3").style.display="flex",m=!0)}$(document).on("click","nav .dropdown-menu",(function(e){e.stopPropagation()})),$(document).on("click","Dropdown3",(function(){document.getElementsByClassName("dropdown-menu").stopPropagation()})),function(){const e=y(r);e.eventcreature("adabiat",e.createmenu);const t=y(a);t.eventcreature("tarikh",t.createmenu);const n=y(d);n.eventcreature("defa",n.createmenu);const l=y(c);l.eventcreature("ravanshenasi",l.createmenu);const o=y(u);var i;o.eventcreature("raigan",o.createmenu),i=p,document.getElementById("dropdownbotton").addEventListener("click",i)}(),function(){const e=function(){const e=document.getElementById("mainsection"),t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div");l.classList.add("bannercontainer"),n.classList.add("bannertextsection"),t.classList.add("photosection");const o=document.createElement("div");return o.classList.add("bannercontant"),o.appendChild(t),o.appendChild(n),l.appendChild(o),e.appendChild(l),{banneritems:{Mainsection:e,photosection:t,bannertextsection:n,bannertitle:"لذت خواندن و شنیدن کتاب ها",bannertext:"<p><br> خرید نسخه قانونی بیش از ده هزار کتاب صوتی الکترونیکی و چاپی </br></p>",bannerinstallbuttontext:"نصب اپلیکیشن بوکچه",lineimagesrc:"images/whiteline.png",bannerimagesrc:"images/bannerphoto.webp",bannercontainer:l}}}();e.banneritems.bannertextsection.innerHTML=`\n    <div class="bannertitle">${e.banneritems.bannertitle}</div>\n    <img src='${e.banneritems.lineimagesrc}' class="bannerline">\n    <div class="bannertext" >${e.banneritems.bannertext}</div>\n    <div class="bannerappinstall"><button class="bannerbutton">${e.banneritems.bannerinstallbuttontext}</button></div>\n    `,e.banneritems.photosection.innerHTML=`\n    <div class="imagecontainer"><img class="bannerimage"src="${e.banneritems.bannerimagesrc}"></div>\n    `}(),s()})();