//store the products array in localstorage as "products"

let arr=JSON.parse(localStorage.getItem("products"))||[];
function product(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type1=form.type.value;
    let desc1=form.desc.value;
    let price1=form.price.value;
    let image=form.image.value;
    let p1=new product1(type1,desc1,price1,image,);
    arr.push(p1);
    console.log("arr",arr);
    localStorage.setItem("products",JSON.stringify(arr));

}
function product1(t,d,p,m){
    this.type1=t;
    this.desc1=d;
    this.price1=p;
    this.image=m;
}