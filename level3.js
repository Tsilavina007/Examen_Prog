function level3(input) {
    let output =[0, 0]
    for(let i=1; i<=input[0]; i++){
        if(input[i].split(' ').includes("ADD")){
            output[1]+=parseInt(input[i].split(' ')[1])
        }else if(input[i]=="TRANSFER"){
            output[0]+= output[1]
            output[1] = 0
        }else if(input[i]=="SWAP"){
            output.reverse()
        }else if(input[i].split(' ').includes("JUMP")){
            // input[i]="X"
            // i+=parseInt(input[i].split(' ')[1])
            console.log(input[i]);
        }else if(input[i]=="X"){
            continue
        }
        console.log(i);
    }
    return output
}

console.log(level3([6, "ADD 5", "SWAP","ADD 3","JUMP -2","TRANSFER","ADD 2"]));