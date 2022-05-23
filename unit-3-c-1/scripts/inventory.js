var getdata=JSON.parse(localStorage.getItem("products"));
getdata.map(function(e,index){
    var box=document.createElement("div");
    var img=document.createElement("img");
    img.src=e.image;

    var type=document.createElement("p");
    type.innerText=e.type1;

    var desc=document.createElement("p");
    desc.innerText=e.desc1;
    var price=document.createElement("p");
    price.innerText=e.price1;


    var remove=document.createElement("button");
    remove.innerText="remove";

    remove.addEventListener("click",function(){
        removeiteam(e,index);

    })

    box.append(img,type,desc,price,remove);
    document.querySelector("#all_products").append(box);


})

function removeiteam(e,index){
    console.log(e,index)
    getdata.splice(index,1);
    localStorage.setItem("products",JSON.stringify(getdata));
    window.location.reload();
}