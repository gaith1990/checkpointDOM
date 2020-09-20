//JS CONT PRODUIT
var btn=document.querySelectorAll(".plus");
btn1=document.querySelectorAll(".moin")  ;
var total=document.querySelector("#total");
 var prix=document.querySelectorAll(".prix");
 var produit=document.querySelectorAll(".produit")
 var qt=document.querySelectorAll(".cont")
for (let i = 0; i < btn.length; i++) {
    //js button +
btn[i].addEventListener("click", function(){
    qt[i].innerHTML  = Number(qt[i].innerHTML) + 1 
    total.innerHTML= Number(total.innerHTML)+Number(prix[i].innerHTML) 
})
//js button -
 btn1[i].addEventListener("click",function(){
     if(Number(qt[i].innerHTML)>0) {qt[i].innerHTML = Number(qt[i].innerHTML)-1} 
     else{Number(qt[i])=0} 
//js total
     total.innerHTML= Number(total.innerHTML)-Number(prix[i].innerHTML) 

     
})
//js heart color
var heart=document.querySelectorAll(".fas")
heart[i].style.color="salmon"
heart[i].addEventListener('click', function(){
    if(heart[i].style.color==="salmon"){heart[i].style.color="red"}
    else {heart[i].style.color="salmon"} }
) 
}
//js btn remouve
var BtnSup=document.querySelectorAll(".far")
for (let i = 0; i < BtnSup.length; i++) {


 BtnSup[i].addEventListener('click',function() {
   
 BtnSup[i].parentElement.parentElement.remove() 
 total.innerHTML=total.innerHTML-Number(qt[i].innerHTML)*Number(prix[i].innerHTML)
})
}

//js total apres remouve de produil 


