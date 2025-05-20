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