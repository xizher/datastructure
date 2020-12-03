import { Queue, Graph } from '.'

const COLORS = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}

const initColor = vertices => {
  const color = new Map()
  vertices.forEach(v => color.set(v, COLORS.WHITE))
  return color
}


/**
 * 广度优选的图遍历算法
 * @param {Graph} graph 图
 * @param {any} startVertex 起算结点
 * @param {Function} callback 遍历每个结点的回调函数
 * @return {Array<T>} 遍历结点数组
 */
export function breadthFirstSearch (graph, startVertex, callback) {
  const vertices = graph.getVertices()
  const adjacencyList = graph.getAdjacencyList()
  const color = initColor(vertices)
  const queue = new Queue()
  const result = [] // 顶点集
  queue.enqueue(startVertex)
  while (!queue.isEmpty()) {
    let u = queue.dequeue()
    adjacencyList.get(u).forEach(n => {
      if (color.get(n) === COLORS.WHITE) {
        color.set(n, COLORS.GREY)
        queue.enqueue(n)
      }
    })
    color.set(u, COLORS.BLACK)
    result.push(u)
    callback && callback(u) // callback?.()
  }
  return result
}

/**
 * 图：寻找最短路径
 * @param {Graph} graph 图
 * @param {any} startVertex 起步结点
 * @return {Array<T>} 遍历结点数组
 */
export function breadthFirstSearchV2 (graph, startVertex) {
  const vertices = graph.getVertices()
  const adjacencyList = graph.getAdjacencyList()
  console.log(adjacencyList)
  const color = initColor(vertices)
  const queue = new Queue()
  const distances = {}
  const predecessors = {}

  queue.enqueue(startVertex)

  // init
  vertices.forEach(v => {
    distances[v] = 0
    predecessors[v] = null
  })


  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    adjacencyList.get(u).forEach(n => {
      if (color.get(n) === COLORS.WHITE) {
        color.set(n, COLORS.GREY)
        distances[n] = distances[u] + 1
        predecessors[n] = u
        queue.enqueue(n)
      }
    })
    color[u] = COLORS.BLACK
  }

  return { distances, predecessors }
}
