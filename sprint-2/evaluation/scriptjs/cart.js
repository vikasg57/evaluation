var cart=JSON.parse(localStorage.getItem("dish")) || []


let total =document.querySelector('.count')
total.textContent= `Number of dishes -${cart.length}`

ondisplay(cart)




function ondisplay(cart){
    console.log(cart)
   
    
    document.querySelector('.main').innerHTML=null


    cart.map(function(el,i){

       
        let div=document.createElement('div')

        let images=document.createElement('img')
        images.src=el.strMealThumb

        let title=document.createElement('h2')
        title.innerHTML=el.strMeal
           random=Math.floor(Math.random()*500+100)

        let price=document.createElement('h4')
        price.innerHTML= el.price

        let button=document.createElement('button')
        button.innerHTML="remove"
        button.addEventListener('click',function(){
            console.log(i)
            removecart(i)
        })

        //     price.map(function(el,i){
        //  let price=document.createElement('h4')
        // price.innerHTML=price.el

    // })


        div.append(images,title,price,button)

        document.querySelector('.main').append(div)

    })


}





function removecart(i){
    cart.splice(i,1)
    localStorage.setItem("dish",JSON.stringify(cart))
    ondisplay(cart)
}
