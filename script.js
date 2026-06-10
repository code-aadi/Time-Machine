
let p = document.querySelector(".messages")  // div ke andar last wala
let input = document.querySelector("#inp")
let submit = document.querySelector(".submit")
function promiseOne(){
   return new Promise((resolve,reject)=>{
    let random = Math.floor(1 + 6* Math.random())
    setTimeout(() => {
         resolve("Initilizing setup")
    }, 3000);
})
}
function promiseTwo(){ 
    return new Promise((resolve,reject)=>{
         // let random = Math.floor(1 + 6* Math.random())
   setTimeout(() => {
     resolve("Starting rockets")
   }, 3000);
})
}
function promiseThree() {
    return new Promise((resolve,reject)=>{
          let random = Math.floor(1 + 6* Math.random())
setTimeout(() => {
    resolve("calling to Elon Musk")
}, 3000);
})
}
function promiseFour(){
    return new Promise((resolve,reject)=>{
          let random = Math.floor(1 + 6* Math.random())
setTimeout(() => {
    resolve("you dont go anywhere")
    
}, 3000);
})
}

async function getData() {
   p.innerHTML  = "Your data received successfully"
    await promiseOne()
 p.innerHTML =  `You want to go in ${input.value}`
    await promiseTwo()
     p.innerHTML  = "Starting time machine"
     p.classList.add("dots")
    await promiseThree()
p.innerHTML = "Contacting with Aliens"
p.classList.add("dots")
   await promiseFour()
//p.innerHTML  = `Congratulations! aap ${input.value-2025} saal baad ${input.value} me pahuch jayenge`
p.innerHTML  = `Congratulations 🥳, you will arrive in ${input.value} in ${input.value-2026} years.`
p.classList.remove("dots")

}

submit.addEventListener("click",()=>{
    if(input.value===""){
         input.classList.add("empty-value")
    }
    else if(input.value<2025){
        p.innerHTML = "Sorry! hamari service peeche nahi le jati"
    }
    else{
        getData()
       
    }
})

input.addEventListener("input",()=>{
   if(input.value!==""){
     input.classList.remove("empty-value")
    }
    else if(input.value===""){
        p.innerHTML = ""
    }
})

