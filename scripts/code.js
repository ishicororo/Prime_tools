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
     let correspondenceTable=[[0,0,0]];
     let finalStringBinaryArarry={
          where:[],
          index:[],
          body:[],
     };
     for(let i=0;i<keyBinaryArrayBuffer.length;i++){
          for(let j=Math.floor(255/keyBinaryArrayBuffer.length)*i,k=keyBinaryArrayBuffer[i];j<=Math.floor(255/keyBinaryArrayBuffer.length)*(i+1);j++,k=foundation.nextPrime(k,1)){
               correspondenceTable.push([i,Math.ceil(k/255)-1,k-255*(Math.ceil(k/255)-1)]);
          }
     }
     console.log(keyBinaryArrayBuffer);
     console.log(correspondenceTable);
     for(let i of stringBinaryArrayBuffer){
          finalStringBinaryArarry.where.push(correspondenceTable[i][0]);
          finalStringBinaryArarry.index.push(correspondenceTable[i][1]);
          finalStringBinaryArarry.body.push(correspondenceTable[i][2]);
     }
     const stringBodyBuffer=new Uint8Array(finalStringBinaryArarry.body).buffer;
     const newString=decoder.decode(stringBodyBuffer);
     console.log(newString);
     for(let i=1;i<=Math.ceil(finalStringBinaryArarry.index.length/8);i++){
          for(let j=0;j<=7;j++){
          }
     }
}
function returnCode(){
}