
 function mergeArrays(a, b) {
    // let x = 0;    
    let mergedArray = [];
    for(let x = 0 ; x < a.length ; x++) {
        let element = a[x];
        if(element % 3 == 0 || element % 5 == 0) {
                mergedArray.push(element + b[x])
        }
        else 
            mergedArray.push(element)
    }
    return mergedArray
}
    
//     a.forEach(element => {
//         mergedArray.push(element + b[x])
//         x++;
//         });
//         return mergedArray;
//  }
 console.log(mergeArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
