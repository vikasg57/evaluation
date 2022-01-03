
document.querySelector('.button').addEventListener('click',order)

    

function order(){

     var adress=document.querySelector('.adress').value
    console.log(adress)
    console.log("vikas")

        

    let mypromise = new Promise(function(resolve,reject){

        if(adress==null || adress ==undefined || adress.length<=0){

            reject("please enter adress")
            alert("please enter adress")


        }
        else{
            alert("order accepted")
        
            resolve(
        setTimeout(function(){
            alert("your order is being cooked")
        },3000),

        setTimeout(function(){
            alert("your order is ready")
        },8000),

        setTimeout(function(){
            alert("order out for delivery")
        },10000),

         setTimeout(function(){
            alert("order delivered")
        },12000)
        )
    }
                 
             

    })

    mypromise.then(function(res){
        console.log(res)
    })
     mypromise.catch(function(res){
        console.log(res)
    })



}