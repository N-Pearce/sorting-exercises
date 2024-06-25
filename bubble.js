function bubbleSort(array) {
    for (let i=array.length; i>0; i--){
        for (let j=0; j < i-1; j++){
            if (array[j] > array[j+1]){
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

module.exports = bubbleSort;