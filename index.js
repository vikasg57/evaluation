


getdishes()

async function getdishes(){
    try{
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        let data= await res.json()
        console.log(data.meals)
        ondisplay(data.meals)


    }
    catch(er){
        console.log(er)

    }
}

var cart= JSON.parse(localStorage.getItem("dish")) || []
var price= JSON.parse(localStorage.getItem("price")) || []


function ondisplay(arr){
    
    document.querySelector('.main').innerHTML=null

    arr.map(function(el){
       
        let div=document.createElement('div')

        let images=document.createElement('img')
        images.src=el.strMealThumb

        let title=document.createElement('h2')
        title.innerHTML=el.strMeal

        var random=Math.floor(Math.random()*500+100)

        let price=document.createElement('h4')
        price.innerHTML= "₹ "+random

        function priceobj(random){
            this.price=random
        }

        let price1 = new priceobj(random)

        let button=document.createElement('button')
        button.innerHTML="add to cart"
        button.addEventListener('click',function(){
            console.log(price1)
            console.log(el)
            tocart(el,price1)

            window.location.href="cart.html"
        })


        div.append(images,title,price,button)

        document.querySelector('.main').append(div)

    })

}


function tocart(el,price1){
    price.push(price1)

    cart.push(el)
    localStorage.setItem("dish",JSON.stringify(cart))
        localStorage.setItem("newprice",JSON.stringify(price))
    console.log(cart)
}

document.querySelector('.nav').textContent=`cart :${cart.length}`


