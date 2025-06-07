const codeVariables={
    codeText:document.getElementById("code_text"),
    codeKey:document.getElementById("code_key"),
    codeResult:document.getElementById("code_result"),
}
function execute(){
     const encoder=new TextEncoder();
     const decoder=new TextDecoder();
     const stringBinaryArrayBuffer=encoder.encode(codeVariables.codeText.value);
     const keyBinaryArrayBuffer=encoder.encode(codeVariables.codeKey.value);
     let correspondenceTable={};
     for(let i=0;i<keyBinaryArrayBuffer.length;i++){
          for(j=Math.floor(225/keyBinaryArrayBuffer.length)*i;j<=Math.floor(225/keyBinaryArrayBuffer.length)*(i+1);j++){
               if(j===Math.floor(225/keyBinaryArrayBuffer.length)*i){
                    correspondenceTable[j]=keyBinaryArrayBuffer[i];
               }
               else{
                    correspondenceTable[j]=foundation.nextPrime()
               }
          }
     }
}
function returnCode(){
}