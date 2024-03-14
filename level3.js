<<<<<<< HEAD
export function level1(adn1, adn2 ) {
    
=======
export function level3(input) {
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
            let val=parseInt(input[i].split(' ')[1])
            input[i]="X"
            val>0?i+=val-1:i+=val
        }else if(input[i]=="X"){
            continue 
        }
    }
    return output.join(' ')
>>>>>>> dev
}