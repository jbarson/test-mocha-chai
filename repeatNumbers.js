function repeatNumbers(array) {
    // if(!isArray(array))
    if(!array) return null
    // if(array) return "111"
    let output = ''

    for (const element of array) {
        const newItem =element[0].toString().repeat(element[1])
        if(!output) {
            output = newItem
        }else{
            output += `, ${newItem}`
        }
    }

    return output
}



module.exports = repeatNumbers