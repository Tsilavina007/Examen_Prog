<<<<<<< HEAD
export function level2(nb, array) {
    
=======
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
>>>>>>> dev
}