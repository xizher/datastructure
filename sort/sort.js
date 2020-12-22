/**
 * 冒泡排序
 * @param {Array} arr
 */
export function bubbleSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (callback(arr[j]) < callback(arr[j + 1]) === desc) {
        swap(arr, j, j + 1)
      }
    }
  }
}

/**
 * 选择排序
 * @param {Array} arr
 */
export function selectionSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  let index
  for (let i = 0; i < len - 1; i++) {
    index = i
    for (let j = i + 1; j < len; j++) {
      if (callback(arr[j]) > callback(arr[index]) === desc) {
        index = j
      }
    }
    swap(arr, i, index)
  }
}

/**
 * 插入排序
 * @param {Array} arr
 */
export function insertionSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && (callback(arr[preIndex]) < callback(current) === desc)) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
}

/**
 * 哈希排序
 * @param {Array} arr
 */
export function shellSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  let temp, gap = 1
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  for (;gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      let j = i - gap
      for (; j >= 0 && (callback(arr[j]) < callback(temp) === desc); j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
}

/**
 * 归并排序
 * @param {Array} arr
 */
export function mergeSort (arr, { callback = item => item, desc = false } = {}) {
  const result = mergeSort2(arr, { callback, desc })
  arr.splice(0, arr.length, ...result)
  function mergeSort2 (arr) {
    const len = arr.length
    if (len < 2) {
      return arr
    }
    const middle = Math.floor(len / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    const evalStr = desc
      ? 'callback(left[0]) >= callback(right[0])'
      : 'callback(left[0]) <= callback(right[0])'
    return merge(mergeSort2(left), mergeSort2(right))

    /**
     * @param {Array} left
     * @param {Array} right
     */
    function merge (left, right) {
      const reuslt = []
      while (left.length && right.length) {
        if (eval(evalStr)) {
          reuslt.push(left.shift())
        } else {
          reuslt.push(right.shift())
        }
      }
      while (left.length) {
        reuslt.push(left.shift())
      }
      while (right.length) {
        reuslt.push(right.shift())
      }
      return reuslt
    }
  }
}

/**
 * 快速排序
 * @param {Array} arr
 */
export function quickSort (arr, { left = 0, right = arr.length - 1, callback = item => item, desc = false } = {}) {
  let partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, { left, right: partitionIndex - 1, callback, desc })
    quickSort(arr, { left: partitionIndex + 1, right, callback, desc })
  }

  function partition (arr, left, right) {
    const pivot = left
    let index = pivot + 1
    for (let i = index; i <= right; i++) {
      if (callback(arr[i]) > callback(arr[pivot]) === desc) {
        swap(arr, i, index)
        index++
      }
    }
    swap(arr, pivot, index - 1)
    return index - 1
  }

}

/**
 * 数组项交换
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
 */
function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
