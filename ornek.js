let counter = localStorage.getItem('newOrn') ? Number(localStorage.getItem('newOrn')) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter
increaseDOM.addEventListener("click" , clickEvent)
decreaseDOM.addEventListener("click", clickEvent)



function clickEvent (){
    console.log(this.id)
    if(this.id == "increase"){
        counterDOM.innerHTML = counter += 1 
    }else {
           counterDOM.innerHTML = counter -= 1 
    }
    localStorage.setItem('newOrn', counter)
   
}
// ya da şu şekilde de yazılabilir. 

//this.id =="increase" ? counterDOM.innerHTML = counter += 1 : 
//counterDOM.innerHTML = counter -= 1 

// ya da daha kısa bir şekilde yazılsın isteniyorsa da

//this.id =="increase" ? counter += 1 : counter -= 1
//counterDOM.innerHTML = counter


// sayfada arttırıp azaltıgımız zaman nerede kaldığımı öğrendim.
// bunu da setItem ve getItem kullanarak yaptım
