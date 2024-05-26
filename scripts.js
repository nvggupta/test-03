const prorem1 = document.getElementById("pro-1-rem");
const proadd1 = document.getElementById("pro-1-Add");
const proquan1 = document.getElementById("pro-1-Quan");
const prorem2 = document.getElementById("pro-2-rem");
const proadd2 = document.getElementById("pro-2-Add");
const proquan2 = document.getElementById("pro-2-Quan");
const prorem3 = document.getElementById("pro-3-rem");
const proadd3 = document.getElementById("pro-3-Add");
const proquan3 = document.getElementById("pro-3-Quan");
const price = document.getElementById("price");
const emptycart = document.getElementById("empty-cart");
const cart = document.getElementById("cart");
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let price1 = 0
proadd1.addEventListener('click' , ()=>{
    
    let span = document.createElement("span");
    span.setAttribute("id" ,"span2");
    if(quantity1===0)
    {
        quantity1++;
        let li = document.createElement("li");
        li.setAttribute("id" , "li-1");
        li.innerText = `Product-1`;
        span.innerText = `${quantity1} * $100 = $${quantity1*100}`;
        li.appendChild(span);
        cart.appendChild(li);
        price1  += 100;
        price.innerText = price1;
        proquan1.innerText = quantity1;
        emptycart.style.display = "none";
    } 
    else{
        quantity1++;
        let span1 =  document.getElementById("span2");
        span1.innerText = `${quantity1} * $100 = $${quantity1*100}`;
        price1  += 100;
        price.innerText = price1;
        proquan1.innerText = quantity1;
    }
})
prorem1.addEventListener('click' , ()=>{
    
       let span1 =  document.getElementById("span2");
       if(quantity1 === 1)
        {
           quantity1--;
           li1 = document.getElementById("li-1");
           li1.remove();
           price1 -=100;
           proquan1.innerText = quantity1; 
           price.innerText = price1;
           emptycart.style.display = "block";
        }
        else if(quantity1 > 1){
            quantity1--;
            price1 -=100;
            proquan1.innerText = quantity1; 
            price.innerText = price1;
        }
        else{
            alert("please enter this product-1");
        }
})
proadd1.addEventListener('click' , ()=>{
    
    let span = document.createElement("span");
    span.setAttribute("id" ,"span2");
    if(quantity1===0)
    {
        quantity1++;
        let li = document.createElement("li");
        li.setAttribute("id" , "li-1");
        li.innerText = `Product-1`;
        span.innerText = `${quantity1} * $100 = $${quantity1*100}`;
        li.appendChild(span);
        cart.appendChild(li);
        price1  += 100;
        price.innerText = price1;
        proquan1.innerText = quantity1;
        emptycart.style.display = "none";
    } 
    else{
        quantity1++;
        let span1 =  document.getElementById("span2");
        span1.innerText = `${quantity1} * $100 = $${quantity1*100}`;
        price1  += 100;
        price.innerText = price1;
        proquan1.innerText = quantity1;
    }
})
prorem1.addEventListener('click' , ()=>{
    
       let span1 =  document.getElementById("span2");
       if(quantity1 === 1)
        {
           quantity1--;
           li1 = document.getElementById("li-1");
           li1.remove();
           price1 -=100;
           proquan1.innerText = quantity1; 
           price.innerText = price1;
           emptycart.style.display = "block";
        }
        else if(quantity1 > 1){
            quantity1--;
            price1 -=100;
            proquan1.innerText = quantity1; 
            price.innerText = price1;
        }
        else{
            alert("please enter this product-1");
        }
})
proadd3.addEventListener('click' , ()=>{
    
    let span = document.createElement("span");
    span.setAttribute("id" ,"span3");
    if(quantity3===0)
    {
        quantity3++;
        let li = document.createElement("li");
        li.setAttribute("id" , "li-3");
        li.innerText = `Product-3`;
        span.innerText = `${quantity3} * $100 = $${quantity3*100}`;
        li.appendChild(span);
        cart.appendChild(li);
        price1  += 300;
        price.innerText = price1;
        proquan1.innerText = quantity3;
        emptycart.style.display = "none";
    } 
    else{
        quantity3++;
        let span3 =  document.getElementById("span3");
        span3.innerText = `${quantity3} * $300 = $${quantity3*300}`;
        price1  += 300;
        price.innerText = price1;
        proquan3.innerText = quantity3;
    }
})
prorem3.addEventListener('click' , ()=>{
    
       let span1 =  document.getElementById("span2");
       if(quantity3 === 1)
        {
           quantity3--;
           li1 = document.getElementById("li-1");
           li1.remove();
           price1 -=100;
           proquan1.innerText = quantity1; 
           price.innerText = price1;
           emptycart.style.display = "block";
        }
        else if(quantity1 > 1){
            quantity1--;
            price1 -=100;
            proquan1.innerText = quantity1; 
            price.innerText = price1;
        }
        else{
            alert("please enter this product-1");
        }
})