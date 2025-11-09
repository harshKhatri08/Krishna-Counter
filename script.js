let mantraCount = document.querySelector("#count");
let reset = document.querySelector("#reset");
let chanted = document.querySelector("#h3");



let mantra = 108;
let chant = 0;


let rem =  mantra;
let done =   chant;



mantraCount.addEventListener("click",()=>{

    if(rem<=0){
        alert("Chant finished ! Jai Shree Krishna...");
         mantraCount.textContent = 108;
        chanted.textContent = 0;
    }else{
        mantraCount.textContent = --rem;
        chanted.textContent = ++done;

        navigator.vibrate(100);
    }

});


reset.addEventListener("click",()=>{

   rem = 108;
   done = 0;

   mantraCount.textContent = rem;  // 👈 add this
   chanted.textContent = done;     // 👈 add this
    

});