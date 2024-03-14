export function level1(input) {
    let str1 = input[0]
    let str2 = input[1]
    let val=""
    str1[0]!=str2[0] ? val+="X" : val+=str1[0] 
    str1[1]!=str2[1] ? val+="Y" : val+=str1[1]  
    str1[2]!=str2[2 ] ? val+="Z" : val+=str1[2] 
    return val
}


