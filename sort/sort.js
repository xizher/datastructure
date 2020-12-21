/**
 * 冒泡排序
 * @param {Array} arr
 */
export function bubbleSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  const evalStr = desc ? 'front < end' : 'front > end'
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const front = callback(arr[j]) // eslint-disable-line
      const end = callback(arr[j + 1]) // eslint-disable-line
      if (eval(evalStr)) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
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
  const evalStr = desc ? 'jItem > indexItem' : 'jItem < indexItem'
  let index, temp
  for (let i = 0; i < len - 1; i++) {
    index = i
    for (let j = i + 1; j < len; j++) {
      const jItem = callback(arr[j]) // eslint-disable-line
      const indexItem = callback(arr[index]) // eslint-disable-line
      if (eval(evalStr)) {
        index = j
      }
    }
    temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp
  }
}

/**
 * 插入排序
 * @param {Array} arr
 */
export function insertionSort (arr, { callback = item => item, desc = false } = {}) {
  const len = arr.length
  const evalStr = desc ? 'preCurrent < current' : 'preCurrent > current'
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = callback(arr[i])
    const preCurrent = callback(arr[preIndex]) // eslint-disable-line
    while (preIndex >= 0 && eval(evalStr)) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
}
