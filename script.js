//ここからコンテンツの表示
const contents={
     home : document.getElementById("home"),
     prime_check : document.getElementById("prime_check"),
     prime_create : document.getElementById("prime_create"),
     prime_code : document.getElementById("prime_code"),
     primesSet:new Set(primes),
     input:document.getElementById("create"),
     newInput:document.getElementById("newInput"),
}
function show(content){
     document.getElementsByClassName("open")[0].classList.add("close");
     document.getElementsByClassName("open")[0].classList.remove("open");
     content.classList.add("open");
     content.classList.remove("close");
}
function method(){
     const CreateMethod=document.getElementById("createMethod").value;
     if(CreateMethod==="primesCreate"){
          contents.newInput.classList.remove("close");
          contents.input.value="1";
     }
     else if(CreateMethod==="max"){
          contents.input.placeholder="最大値を入力";
          contents.newInput.classList.add("close");
     }
     else{
          contents.newInput.classList.add("close");
          contents.input.placeholder="生成したい桁数を入力"
     }
}
//ここからメイン関数
const foundation={
     addPrimes:function(max){
          for(let test=primes[primes.length-1]+2;test<max;test+=2){
               if(this.check(test)){
                    primes.push(test);
                    contents.primesSet.add(test);
               }
          }
     },
     check:function(number){
           let isprime=true;
           if(number<2){return false;}
           else if(number<=primes[primes.length-1]){
               if(contents.primesSet.has(number)){
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
          this.addPrimes(Math.ceil(Math.sqrt(number)));
          return this.check(number);
      }
     },
     create:function(bigin,end){
          let newPrimes=[];
          if(end%2===0){
               end=end+1;
          }
          for(let addNumber=end;addNumber>=bigin;addNumber-=2){
               if(this.check(addNumber)){
                    newPrimes.push(addNumber);
               }
          }
          return newPrimes;
     }
     };
     //ここから実際の操作
function check(){
     const number=Number(document.getElementById("check").value);
     const result=document.getElementById("checked");
     if(foundation.check(number)){
          result.textContent="素数です。";
     }
     else{
          result.textContent="素数ではありません。";
     }
}
function create(){
     const method=document.getElementById("createMethod").value;
     let number=Number(document.getElementById("create").value);
     let number2=Number(document.getElementById("newInput").value)
     const result=document.getElementById("created");
     let result_number;
     if(method==="digit"){
          for(let test=10**number-3;String(test).length===number;test-=2){
               if(foundation.check(test)){
                    result_number=test;
                    break;
               }
          }
          result.textContent=result_number;
     }
     else if(method==="max"){
          if(number%2===0){
               number=number-1;
          }
          for(let test=number;test>=0;test-=2){
               if(foundation.check(test)){
                    result_number=test;
                    break;
               }
          }
          result.textContent=result_number;
     }
     else if(method==="primesCreate"){
          let newPrimes=foundation.create(number,number2);
          result.textContent=newPrimes;
     }
     }
