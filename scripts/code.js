const codeVariables={
    codeText:document.getElementById("code_text"),
    codeKey:document.getElementById("code_key"),
    codeResult:document.getElementById("code_result"),
}
function execute(){
    const string=codeVariables.codeText.value;
    const key=codeVariables.codeKey.value;
    let newStringCode=[];
    const encoder=new TextEncoder();
    const decoder=new TextDecoder();
    const stringCode=encoder.encode(string);
    let keyNumber= Number(encoder.encode(key).join(""));
    let primeKeyNumber;
    let testNumber;
    let code;
    if(keyNumber!==2){
        if(keyNumber%2===0){
             keyNumber=keyNumber-1;
        }
   }
        for(let test=keyNumber;test>=0;test-=2){
             if(foundation.check(test)){
                  primeKeyNumber=test;
                  break;
             }
        }
    for(let i=0;i<=stringCode.length-1;i++){
        if(stringCode[i]!==2){
            if(stringCode[i]%2===0){
                 testNumber=stringCode[i]-1;
            }
       }
            for(let test=stringCode[i];test>=0;test-=2){
                 if(foundation.check(test)){
                      testNumber=test;
                      break;
                 }
            }
        newStringCode.push(stringCode[i]+testNumber*primeKeyNumber);
    }
    codeVariables.codeResult.textContent=newStringCode;
}
function returnCode(){
     const string=codeVariables.codeText.value;
    const key=codeVariables.codeKey.value;
    let newStringCode=[];
    const encoder=new TextEncoder();
    const decoder=new TextDecoder();
    const stringArray=string.split(",");
    const stringCode=[];
    let keyNumber= Number(encoder.encode(key).join(""));
    let primeKeyNumber;
    let testNumber;
    let code;
    for(let i of stringArray){
     stringCode.push(Number(i));
    }
    if(keyNumber!==2){
        if(keyNumber%2===0){
             keyNumber=keyNumber-1;
        }
   }
        for(let test=keyNumber;test>=0;test-=2){
             if(foundation.check(test)){
                  primeKeyNumber=test;
                  break;
             }
        }
        for(let i=0;i<=stringCode.length-1;i++){
          if(stringCode[i]!==2){
              if(stringCode[i]%2===0){
                   testNumber=stringCode[i]-1;
              }
         }
              for(let test=stringCode[i];test>=0;test-=2){
                   if(foundation.check(test)){
                        testNumber=test;
                        break;
                   }
              }
          newStringCode.push(stringCode[i]-testNumber*primeKeyNumber);
      }
      const ArrayBuffer=new Uint8Array(newStringCode);
      console.log(decoder.decode(ArrayBuffer.buffer));
      codeVariables.codeResult.textContent=decoder.decode(ArrayBuffer.buffer);
}