(()=>{"use strict";const e=function(e,t){let n=document.getElementById(e),o=document.getElementById(t);for(;o.childNodes.length>0;)n.appendChild(o.childNodes[0])},t=function(){const e=document.getElementById("nav2"),t=document.createElement("ul");t.className="nav3",t.id="searchbarmobile";const n=document.createElement("div");n.className="input-group",n.id="input-group-mobile",t.appendChild(n),e.appendChild(t)};let n,o;function l(){e("burgermenu","navbarcollapse"),document.getElementById("burgermenu").style.right="0",document.getElementById("Blurwhole").style.display="flex",document.getElementById("navbarfixed").style.position="static",document.getElementById("closebtn").style.display="flex"}function r(){e("navbarcollapse","burgermenu"),document.getElementById("burgermenu").style.right="-45vw",setTimeout((function(){document.getElementById("Blurwhole").style.display="none",document.getElementById("navbarfixed").style.position="fixed",document.getElementById("closebtn").style.display="none"}),300)}const d=function(){const d=document.querySelector(".navbar-header"),i=document.querySelector(".lefts"),s=document.querySelector(".navbar-brandC"),c=document.querySelector(".navbar-toggleC"),a=document.querySelector(".cartC"),u=document.querySelector("#input-group"),m=document.querySelector("#search-bar");function y(){window.innerWidth>768?1!=o&&(r(),m.style.width="65vw",d.style.gap="25px",d.style.display="",d.style.gridTemplate="",i.style.gridArea="",i.style.display="",i.style.justifyContent="",i.style.alignItems="",i.style.width="",s.style.gridArea="",c.style.position="",c.style.right="",a.style.position="",a.style.left="",s.style.alignSelf="",u.style.display="",u.style.position="",function(){const t=document.getElementById("loginbotton");document.getElementById("login").appendChild(t),e("input-group","input-group-mobile"),document.getElementById("nav2").innerHTML=""}(),o=1,n=0):1!=n&&(m.style.width="85vw",d.style.gap="0px",d.style.display="grid",d.style.gridTemplate="1fr/1fr 3fr 1fr",i.style.gridArea="1/1/2/2",i.style.display="flex",i.style.justifyContent="flex-start",i.style.alignItems="center",i.style.width="40px",s.style.gridArea="1/2/2/3",c.style.position="absolute",c.style.right="15px",a.style.position="absolute",a.style.left="15px",s.style.alignSelf="center",u.style.display="none",u.style.position="absolute",e("navbarcollapse","login"),t(),e("input-group-mobile","input-group"),n=1,o=0)}window.addEventListener("resize",y),document.getElementById("togglenavbar").addEventListener("click",l),document.getElementById("closebtn").addEventListener("click",r),y()},i=["صوتی","صوتی","صوتی","صوتی","صوتی"],s=["ادبیات","ادبیات","ادبیات"],c=["تاریخ","تاریخ","تاریخ","تاریخ"],a=["دفاع","دفاع","دفاع","دفاع","دفاع","دفاع","دفاع"],u=["روانشناسی","روانشناسی","روانشناسی","روانشناسی","روانشناسی"],m=["رایگان","رایگان","رایگان","رایگان","رایگان","رایگان"];function y(e){return{eventcreature:function(e,t){document.getElementById(e).addEventListener("mouseover",t)},createmenu:function(){const t=document.getElementById("dropdown2");t.innerText="";for(var n=0;n<e.length;n++){const o=document.createElement("li"),l=document.createElement("a");o.appendChild(l),l.textContent=e[n],t.appendChild(o)}}}}$(document).on("click","nav .dropdown-menu",(function(e){e.stopPropagation()})),$(document).on("click","Dropdown3",(function(){document.getElementsByClassName("dropdown-menu").stopPropagation()})),d(),function(){const e=y(s);e.eventcreature("adabiat",e.createmenu);const t=y(c);t.eventcreature("tarikh",t.createmenu);const n=y(a);n.eventcreature("defa",n.createmenu);const o=y(u);o.eventcreature("ravanshenasi",o.createmenu);const l=y(m);l.eventcreature("raigan",l.createmenu);const r=y(i);r.eventcreature("souti",r.createmenu)}()})();