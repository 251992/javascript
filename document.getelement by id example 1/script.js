function product(){
    var x=window.prompt("Enter the first no? : ")
    var y=window.prompt("Enter the second no? : ")
    var z=x*y;
    alert(" Result : " +z)
}
var btn=document.getElementById("btn")
btn.addEventListener("click",product);