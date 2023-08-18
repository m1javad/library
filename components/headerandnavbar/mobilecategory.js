import {moveAllElements,createSecondNavbarMobile,moveElementToParent,undocreateSecondNavbarMobile} from "../components/elementmove"

    
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
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",   
    "روانشناسی",
    "روانشناسی",
    "روانشناسی",
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

function loadcategoryside() {
    let newPar = document.getElementById("mainitems");
    let oldPar = document.getElementById("dropdownC");
    newPar.innerHTML=""
    while (oldPar.childNodes.length > 0) {
    newPar.appendChild(oldPar.childNodes[0]);
      }
    }
    
    function menucreatore(arr){
        function createmenu(){
        const parentElement = document.getElementById("mainitems")
          parentElement.innerText=""
        for (var i = 0; i < arr.length; i++){
        const childElement = document.createElement("li");
        const childerElement = document.createElement("a");
        childElement.href="#"
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

    


    
export default {loadcategoryside};