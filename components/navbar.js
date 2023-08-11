    
const souti=[
    "صوتی",
    "صوتی",
    "صوتی",
    "صوتی",
    "صوتی",
]
const adabiat=[
    "ادبیات",
    "ادبیات",
    "ادبیات",


]
const tarikh=[
    "تاریخ",
    "تاریخ",
    "تاریخ",
    "تاریخ",

]
const defamoghadas=[
    "دفاع",
    "دفاع",
    "دفاع",
    "دفاع",
    "دفاع",
    "دفاع",
    "دفاع",
]
const ravanshenasi=[
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
]
const raigan=[
    "رایگان",
    "رایگان",
    "رایگان",
    "رایگان",
    "رایگان",
    "رایگان",
]

 
        
    function menucreatore(arr){
          function createmenu(){
          const parentElement = document.getElementById("dropdown2")
            parentElement.innerText=""
          for (var i = 0; i < arr.length; i++){
          const childElement = document.createElement("li");
          const childerElement = document.createElement("a");
          childElement.appendChild(childerElement);

          childerElement.textContent = arr[i]
          parentElement.appendChild(childElement);
          }
          }
          function eventcreature(element,funcname){
            document.getElementById(element).addEventListener("mouseover",funcname)
          }
          return{eventcreature,createmenu}
     }
     




     const adabiatmenu = menucreatore(adabiat);
     adabiatmenu.eventcreature("adabiat",adabiatmenu.createmenu);

     const tarikhmenu = menucreatore(tarikh);
     tarikhmenu.eventcreature("tarikh",tarikhmenu.createmenu);

     const defamenu = menucreatore(defamoghadas);
     defamenu.eventcreature("defa",defamenu.createmenu);

     const ravanmenu = menucreatore(ravanshenasi);    
     ravanmenu.eventcreature("ravanshenasi",ravanmenu.createmenu);

     const raiganmenu = menucreatore(raigan);
     raiganmenu.eventcreature("raigan",raiganmenu.createmenu);

     const soutimenu = menucreatore(souti);
     soutimenu.eventcreature("souti",soutimenu.createmenu);



     export default {adabiatmenu, tarikhmenu, defamenu, ravanmenu, raiganmenu, soutimenu};
