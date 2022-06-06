async function myfunction()
{
    let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
    let res=await fetch(url)
    let coup=await res.json()
    console.log(coup[0].vouchers)
  append(coup[0].vouchers)
   return coup[0].vouchers
}



var buy=JSON.parse(localStorage.getItem("purchase")) || []
function append(y)
{
    let u=document.querySelector("#voucher_list")
    u.innerHTML=null
    y.forEach(function(el){
     var a=document.createElement("img")
     a.src=el.image
     var b=document.createElement("h3")
     b.innerText=el.name
     var c=document.createElement("p")
     c.innerText=el.price
     var lower=document.createElement("div")
     lower.setAttribute("class","voucher")
     var d=document.createElement("button")
     d.setAttribute("class","buy_voucher")
     d.innerText="BUY"
     d.addEventListener("click",function(){
         var m=document.querySelector("#wallet_balance").innerText
         console.log(c.innerText)
        //  console.log(typeof(+m))
          if(+m>=+c.innerText)
        {
             alert("Hurray! purchase successful")
             var y=+m - +c.innerText
             m=y
             console.log(y)
            buy.push(el)
            localStorage.setItem("purchase",JSON.stringify(buy))
         } 
         else{
             alert("Sorry! insufficient balance")
         }      
     })
     lower.append(a,b,c,d)
     u.append(lower)
    })
}
myfunction()