const contents={
     home : document.getElementById("home"),
     prime_check : document.getElementById("prime_check"),
     prime_create : document.getElementById("prime_create"),
     prime_code : document.getElementById("prime_code"),
}
function show(content){
     document.getElementsByClassName("open")[0].classList.add("close");
     document.getElementsByClassName("open")[0].classList.remove("open");
     content.classList.add("open");
     content.classList.remove("close");
}
function check(){
     const number=document.getElementById("check").value;
     const result=document.getElementById("checked");
     let isprime=true;
     for(let prime of primes){
          if(prime<=Math.sqrt(number)){
               if(number%prime===0){
                    isprime=false;
                    break;
               }
          }
          else{
               break;
          }
     }
     if(isprime){
          result.textContent="素数です。";
     }
     else{
          result.textContent="素数ではありません。";
     }
}