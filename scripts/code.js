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
          for(let j=Math.floor(255/keyBinaryArrayBuffer.length)*i,k=j;j<=Math.floor(255/keyBinaryArrayBuffer.length)*(i+1);j++,k=foundation.nextPrime(k,1)){
               correspondenceTable[j]=k;
          }
     }
     console.log(correspondenceTable);
}
function returnCode(){
}