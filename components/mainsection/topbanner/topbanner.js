function topbannercreate(){
    const Mainsection =document.getElementById("mainsection");
    const photosection=document.createElement("div");
    const bannertextsection=document.createElement("div");
    const bannercontainer=document.createElement("div");
    bannercontainer.classList.add('bannercontainer');
    bannertextsection.classList.add('bannertextsection');
    photosection.classList.add('photosection');
    const bannercontant=document.createElement("div");
    bannercontant.classList.add('bannercontant');
    bannercontant.appendChild(photosection);
    bannercontant.appendChild(bannertextsection);
    bannercontainer.appendChild(bannercontant);
    Mainsection.appendChild(bannercontainer);
    const bannertitle = "لذت خواندن و شنیدن کتاب ها"
    const bannertext = '<p><br> خرید نسخه قانونی بیش از ده هزار کتاب صوتی الکترونیکی و چاپی </br></p>'  
    const bannerinstallbuttontext = "نصب اپلیکیشن بوکچه"
    const lineimagesrc = "images/whiteline.png"
    const bannerimagesrc ="images/bannerphoto.webp"
    const banneritems = {
        Mainsection,photosection,bannertextsection,bannertitle,bannertext,
        bannerinstallbuttontext,lineimagesrc,bannerimagesrc,bannercontainer}
    return{banneritems}
}

function loadtopbannercontent(){
    const el=topbannercreate();
    el.banneritems.bannertextsection.innerHTML=`
    <div class="bannertitle">${el.banneritems.bannertitle}</div>
    <img src='${el.banneritems.lineimagesrc}' class="bannerline">
    <div class="bannertext" >${el.banneritems.bannertext}</div>
    <div class="bannerappinstall"><button class="bannerbutton">${el.banneritems.bannerinstallbuttontext}</button></div>
    `
    el.banneritems.photosection.innerHTML=`
    <div class="imagecontainer"><img class="bannerimage"src="${el.banneritems.bannerimagesrc}"></div>
    `
}


/*mobile styles*/


export default loadtopbannercontent;

