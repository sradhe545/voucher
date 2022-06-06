var z=JSON.parse(localStorage.getItem("purchase"))
z.forEach(function(el){
    var a=document.createElement("img")
    a.src=el.image
    var b=document.createElement("h3")
    b.innerText=el.name
    var c=document.createElement("p")
    c.innerText=el.price
    var lower=document.querySelector("#purchased_vouchers")
    lower.append(a,b,c)
})