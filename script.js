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
const foundation;
function check(number){
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
     return isprime;
}
function prime_check(){
     const number=document.getElementById("check").value;
     const result=document.getElementById("checked");
     if(check(number)){
          result.textContent="素数です。";
     }
     else{
          result.textContent="素数ではありません。";
     }
}
function create(){
     const method=document.getElementById("create_method").value;
     const number=document.getElementById("create").value;
     const result=document.getElementById("created");
     let result_number;
     if(method==="digit"){
          for(let test=10**(number+1)-3;String(test).length===number;test--){
               if(check(test)){
                    result_number=String(test);
                    break;
               }
          }
          result.textContent=result_number;
     }
     else{
          for(let test=number;String(test).length=number;test--){
               if(check(number)){
                    result_number=String(test);
                    break;
               }
          }
          result.textContent=result_number;
     }
     }
