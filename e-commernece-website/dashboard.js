let logopage=document.getElementById("logo-page");
let homepage=document.getElementById("home-page");
let dressespage=document.getElementById("dresses-page");
let clothespage=document.getElementById("clothes-page");
let shoespage=document.getElementById("shoes-page");
let cartpage=document.getElementById("Cart-page");
let cartgrid=document.getElementById("cart-gri");
let pagi=document.getElementsByClassName("Navs");

let cartbtn=document.getElementsByClassName("cart");
let name=document.getElementById("display-name");
name.textContent = localStorage.getItem("newuser");
function logout() {
    window.location.href = "indexpage.html"; 
};
function shopn(){
    window.location.href="#dresses-page";
};
function cart(){
    logopage.style.display='none';
    homepage.style.display='none';
    dressespage.style.display='none';
    clothespage.style.display='none';
    shoespage.style.display='none';
    cartpage.style.display='revert';
    add_data();
};   
function Navs(){
    logopage.style.display='revert';
    homepage.style.display='revert';
    dressespage.style.display='revert';
    clothespage.style.display='revert';
    shoespage.style.display='revert';
    cartpage.style.display='none';
};
 mycart=[];
function addtocart(img,name,price){
    let all=mycart.find((item)=>item.name===name);
    if (all){
        all.qut+=1;
    }else{
    let cartt={img:img,name:name,price:price,qut:1};
    mycart.push(cartt);
    }
    alert(name+" added to your Cart");
};

function add_data(){
    cartgrid.innerHTML="";
    let total=0;
    mycart.map((item,index)=>{
        let itemtot=item.price*item.qut;
        total+=itemtot;
        let cartcard=document.createElement('div');
        cartcard.className='cart-card';
        cartcard.innerHTML=`
        <div>
            <img src="${item.img}" class="imgs-dress"/>
            <div style="padding-left:16px;">
            <h1>${item.name}</h1>
            <p>Price :$ ${item.price}</p>
            <h2>Item total :$ ${itemtot}</h2>
            </div>
        </div>
        <div style="padding-left:16px; padding-bottom:10px;">
            <button onclick="qnty(${index},-1)" class="a1">-</button>
            <span style="font-size:20px;">${item.qut}</span>
            <button onclick="qnty(${index},1)" class="a1">+</button>
        </div>
        `
        cartgrid.appendChild(cartcard);
    });
    document.getElementById("amt").textContent=total;
};
function qnty(index,amunt){
    if(parseInt(mycart[index].qut)!=0 || parseInt(amunt)!=-1)
    {
        mycart[index].qut=parseInt(mycart[index].qut)+parseInt(amunt);
        add_data();
    }
    
};




