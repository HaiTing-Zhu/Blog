function bubbleSort (arr) {
    const len = arr.length
    // 循环全部数据，除了最后一个
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 判断相邻的两个元素大小
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1]
                // 交换元素
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }        
    }
    return arr
}
const arr = [9, 5, 4, 6, 7, 2, 8, 1, 3]

bubbleSort(arr)