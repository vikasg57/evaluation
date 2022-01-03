


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
        price.textContent= "₹ "+random

      


        let button=document.createElement('button')
        button.innerHTML="add to cart"
        button.addEventListener('click',function(){
             el.price= price.textContent
            console.log(price)
            console.log(el)
            tocart(el)

            
            
            

             window.location.href="cart.html"
        })


        div.append(images,title,price,button)

        document.querySelector('.main').append(div)

    })

}


function tocart(el){
  

    cart.push(el)
    localStorage.setItem("dish",JSON.stringify(cart))
      
    console.log(cart)
}

document.querySelector('.nav').textContent=`cart :${cart.length}`


