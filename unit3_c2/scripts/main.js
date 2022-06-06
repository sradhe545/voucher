var x=document.querySelector("#submit").addEventListener("click",myf)
var arr=JSON.parse(localStorage.getItem("user"))||[]
function myf()
{
    event.preventDefault();
    var obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
       address:document.querySelector("#address").value,
       wallet:document.querySelector("#amount").value
    }
  
   arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr))
    document.querySelector("#name").value=null
    document.querySelector("#email").value=null
   document.querySelector("#address").value=null
   document.querySelector("#amount").value=null
}
