const commonItems  = (a, b)=>{
    var result = a.concat(b)
    console.log(result)
    reuslt = result.filter(item =>{
        return item !== item
    })
    console.log(result)
}
commonItems([1,2,3,4,5], [3,4,5,6,7,8,9,10,11,12])