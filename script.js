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
const foundation={
     addPrimes:function(max){
          for(let test=primes[primes.length-1]+2;test<=max;test+2){
               if(this.check(test)){
                    primes.push(test);
               }
          }
     },
     check:function(number){
           let isprime=true;
           if(number<2){return false;}
           else if(number<=primes[primes.length-1]){
               if(primes.includes(number)){
                    return true;
               }
           }
           else if(Math.sqrt(number)<=primes[primes.length-1]){
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
      else{
          this.addPrimes(Math.sqrt(number));
          return this.check(number);
      }
     },
     create:function(bigin,end){
          let newPrimes=[];
          if(end%2===0){
               end=end+1;
          }
          for(let addNumber=end;addNumber>=bigin;end-2){
               if(this.check(addNumber)){
                    newPrimes.push(addNumber);
               }
          }
          return newPrimes;
     }
     };
function check(){
     const number=document.getElementById("check").value;
     const result=document.getElementById("checked");
     if(foundation.check(number)){
          result.textContent="素数です。";
     }
     else{
          result.textContent="素数ではありません。";
     }
}
function create(){
     const method=document.getElementById("create_method").value;
     let number=Number(document.getElementById("create").value);
     let number2=Number(document.getElementById("create2").value)
     const result=document.getElementById("created");
     let result_number;
     if(method==="digit"){
          for(let test=10**(number+1)-3;String(test).length===number;test-2){
               if(foundation.check(test)){
                    result_number=test;
                    break;
               }
          }
          result.textContent=result_number;
     }
     else if(method==="max"){
          if(number%2===0){
               number=number+1;
          }
          for(let test=number;test>=0;test-2){
               if(foundation.check(test)){
                    result_number=test;
                    break;
               }
          }
          result.textContent=result_number;
     }
     else if(method==="primesCreate"){
          let newPrimes=foundation.create(number,number2);
     }
     }