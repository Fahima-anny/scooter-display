document.getElementById("scooterImg1").addEventListener("click",function(){
   document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/gDwzMss/DTX-LTD-649-2000x-105ca834-6dac-459a-87ca-185e2f8cd6d8-1728x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`
})
document.getElementById("scooterImg2").addEventListener("click",function(){
   document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/Qc7R2Gr/DTX-LTD-658-2000x-08e6a736-11bd-45e9-9102-5ff16bc356b4-1512x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`
})
document.getElementById("scooterImg3").addEventListener("click",function(){
   document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/Y7GX3rj/DTX-LTD-659-2000x-8b868df4-7642-46d6-8020-d5d7c398ff2d-1512x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`
})





document.getElementById("blackbtn").addEventListener("click",function(){

   document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/gDwzMss/DTX-LTD-649-2000x-105ca834-6dac-459a-87ca-185e2f8cd6d8-1728x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`;
//    document.getElementById("blackbtn").classList.remove("ring-slate-200")
//    document.getElementById("blackbtn").classList.add("ring-blue-500")
//    document.getElementById("greenBtn").classList.remove("ring-blue-500")
//    document.getElementById("redBtn").classList.remove("ring-blue-500")
//    document.getElementById("greenBtn").classList.add("ring-slate-200")
//    document.getElementById("redBtn").classList.add("ring-slate-200")
})
document.getElementById("greenBtn").addEventListener("click",function(){
 
 
    document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/Qc7R2Gr/DTX-LTD-658-2000x-08e6a736-11bd-45e9-9102-5ff16bc356b4-1512x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`;
    // document.getElementById("greenBtn").classList.remove("ring-slate-200")
    // document.getElementById("greenBtn").classList.add("ring-blue-500")
    // document.getElementById("blackBtn").classList.remove("ring-blue-500")
    // document.getElementById("redBtn").classList.remove("ring-blue-500")
    // document.getElementById("blackBtn").classList.add("ring-slate-200")
    // document.getElementById("redBtn").classList.add("ring-slate-200")
 })
 document.getElementById("redBtn").addEventListener("click",function(){
  
    document.getElementById("mainImg").innerHTML = `<img src="https://i.ibb.co/Y7GX3rj/DTX-LTD-659-2000x-8b868df4-7642-46d6-8020-d5d7c398ff2d-1512x.jpg" class="border rounded-xl hover:shadow-lg  ease-in-out delay-150 duration-150" alt="">`;
    // document.getElementById("redBtn").classList.remove("ring-slate-200")
    // document.getElementById("redBtn").classList.add("ring-blue-500")
    // document.getElementById("blackBtn").classList.remove("ring-blue-500")
    // document.getElementById("greenBtn").classList.remove("ring-blue-500")
    // document.getElementById("blackBtn").classList.add("ring-slate-200")
    // document.getElementById("greenBtn").classList.add("ring-slate-200")
 })




 document.getElementById("wattBtn250").addEventListener("click",function(){
    document.getElementById("wattBtn550").style.background="white"
    document.getElementById("wattBtn550").style.color="black"
    document.getElementById("wattBtn650").style.background="white"
    document.getElementById("wattBtn650").style.color="black"
    document.getElementById("wattBtn250").style.background="black"
    document.getElementById("wattBtn250").style.color="white"
})
document.getElementById("wattBtn550").addEventListener("click",function(){
    document.getElementById("wattBtn250").style.background="white"
    document.getElementById("wattBtn250").style.color="black"
    document.getElementById("wattBtn550").style.background="black"
    document.getElementById("wattBtn550").style.color="white"
    document.getElementById("wattBtn650").style.background="white"
    document.getElementById("wattBtn650").style.color="black"
})
document.getElementById("wattBtn650").addEventListener("click",function(){
    document.getElementById("wattBtn250").style.background="white"
    document.getElementById("wattBtn250").style.color="black"
    document.getElementById("wattBtn550").style.background="white"
    document.getElementById("wattBtn550").style.color="black"
    document.getElementById("wattBtn650").style.background="black"
    document.getElementById("wattBtn650").style.color="white"
})




document.getElementById("wishlistBtn").addEventListener("click",function(){
 document.getElementById("img1").setAttribute("src","https://i.ibb.co/3zwPPpp/heart-3.png")  
})


document.getElementById("minusItem").addEventListener("click",function(){
    let totalItem = document.getElementById("totalItem") 
    let totalItemTxt = totalItem.innerText
    let totalItemInt = parseInt(totalItemTxt)
    totalItem.innerText = totalItemInt - 1;
    
  })

document.getElementById("plusItem").addEventListener("click",function(){
    let totalItem = document.getElementById("totalItem") 
    let totalItemTxt = totalItem.innerText
    let totalItemInt = parseInt(totalItemTxt)
    totalItem.innerText = totalItemInt + 1;
    
  })















