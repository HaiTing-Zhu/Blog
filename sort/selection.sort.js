function selectionSort (arr) {
    const len = arr.length
    let min, temp
    for (let i = 0; i < len - 1; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            // 比较元素大小，取得最小元素的下标
            if (arr[j] < arr[min]) {
                min = j
            }            
        }
        // 保存当前元素
        temp = arr[i]
        // 替换当前元素和最小元素的位置
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

const arr = [9, 5, 4, 6, 7, 2, 8, 1, 3]

selectionSort(arr)