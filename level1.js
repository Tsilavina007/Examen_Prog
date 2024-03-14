export function level1(arr) {
    let str1 = arr[0]
    let str2 = arr[1]
    let val=""
    str1[0]!=str2[0] ? val+="X" : val+=str1[0] 
    str1[1]!=str2[1] ? val+="Y" : val+=str1[1]  
    str1[2]!=str2[2 ] ? val+="Z" : val+=str1[2] 
    return val
}
console.log(level1(["AYC","AYZ"]));

