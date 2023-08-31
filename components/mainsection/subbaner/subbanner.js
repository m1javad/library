function subbannercreate(){
    const Mainsection =document.getElementById("mainsection");
    const subbannerContainer=document.createElement("div");
    subbannerContainer.classList.add('subbannerContainer');
    subbannerContainer.id='subbannerContainer';
    Mainsection.appendChild(subbannerContainer);

   
    const item1text = "جدید ترین کتاب ها"
    const item2text = "کتاب های رایگان"
    const item3text = "کتابخانه اشتراکی"
    const item1imgsrc= "images/item1.webp"
    const item2imgsrc= "images/item2.webp"
    const item3imgsrc= "images/item3.webp"


    const subbanneritems = {item1imgsrc,item2imgsrc,item3imgsrc,item1text,item2text,item3text}
    return{subbanneritems}
}

function loadsubbanner(){
    const el=subbannercreate();
    document.getElementById("subbannerContainer").innerHTML=`
    <div class='subbannerItems'><img class="subbannerimage" src=${el.subbanneritems.item1imgsrc}> <div class="subbannerText">${el.subbanneritems.item1text}</div> </div>
    <div class='subbannerItems'><img class="subbannerimage" src=${el.subbanneritems.item2imgsrc}> <div class="subbannerText">${el.subbanneritems.item2text}</div> </div>
    <div class='subbannerItems'><img class="subbannerimage" src=${el.subbanneritems.item3imgsrc}> <div class="subbannerText">${el.subbanneritems.item3text}</div> </div>
    `
}


/*mobile styles*/


export default loadsubbanner;

