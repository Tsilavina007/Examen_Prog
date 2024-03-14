export function level2(input) {
    let arr = []
    let res=0;
    for (let i = 1; i <= input[0]; i++){
        let val = input[i].split('x')
        let sum=0;
        for(let i=0; i<val.length; i++){
            sum+=parseInt(val[i])
        }
        arr.push(sum)
    }
    let arrSet = [...new Set(arr)].sort()
    arrSet.forEach(elem=>{
        arr.filter(e=>e==elem).length == 2 ? res+=1 : res;
    })
    return res
}

console.log(level2([6,"8x7x10","7x8x10","4x8x6","1x5x4","7x5x9","1x5x4"]));