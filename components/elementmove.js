
function moveAllElements(newParent,oldParent) {
let newPar = document.getElementById(newParent);
let oldPar = document.getElementById(oldParent);
while (oldPar.childNodes.length > 0) {
newPar.appendChild(oldPar.childNodes[0]);
  }
}

function createSecondNavbarMobile(){
  const parentElement = document.getElementById("nav2");
  const ulElement = document.createElement("ul");
  ulElement.className = "nav3";
  ulElement.id = "searchbarmobile";
  const secondchild = document.createElement("div");
  secondchild.className = "input-group";
  secondchild.id = "input-group-mobile";
  ulElement.appendChild(secondchild);
  parentElement.appendChild(ulElement);
}


    



    function moveElementToParent(elementId, newParentId) {
      const element = document.getElementById(elementId);
      const newParent = document.getElementById(newParentId);
      
      
        newParent.appendChild(element);
      
    }

    function undocreateSecondNavbarMobile(element){

      const elementt = document.getElementById(element);
     
        elementt.parentNode.removeChild(elementt);
      
      
    }
    




  export default {moveAllElements,createSecondNavbarMobile,moveElementToParent,undocreateSecondNavbarMobile}