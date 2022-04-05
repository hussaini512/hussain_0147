

const {readFile, writeFile}=require('fs');

readFile('./context/first.txt','utf-8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
const first= result;
readFile('./context/second.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    } 
    const second=result;
    writeFile('./context/result.txt',`the result is: ${first},${second}`,
    (err,result)=>{
        if(err){
            console.log();
            return;
        }
        console.log(result);
    })
})
})