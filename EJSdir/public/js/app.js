let buttons = document.querySelectorAll("button");

for(let btn of buttons){
    btn.addEventListener("click",()=>{
    console.log(`Button clicked: ${btn.innerText}`);
    });
}
