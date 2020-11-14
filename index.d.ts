import { CustomEvent } from '../customevent'

/**
 * 数据结构：栈
 */
export declare class Stack extends CustomEvent {
  /**
   * 入栈
   * @param item 入栈元素
   */
  push (item: any) : void
  /**
   * 出栈
   * @returns 出栈元素
   */
  pop () : any
  /**
   * 返回栈顶元素
   * @returns 栈顶元素
   */
  peek () : any
  /**
   * 判断是否为空栈
   * @returns 空栈判断结果
   */
  isEmpty () : boolean
  /**
   * 获取栈元素个数
   * @returns 栈元素个数
   */
  size () : number
  /**
   * 清空栈元素
   */
  clear () : void
  /**
   * 栈转字符串
   * @returns 栈的字符串表达形式
   */
  toString () : string
  /**
   * 栈转数组
   * @returns 栈的数组形式
   */
  toArray () : any[]
  /**
   * 绑定事件
   * @param name 事件名称
   * @param fn 事件处理函数
   * @param scope 事件处理函数上下文
   * @returns 事件处理函数
   */
  on (name: 'push' | 'pop', fn: Function, scope?: Object): Function
}

/**
 * 数据结构 队列
 */
export declare class Queue extends CustomEvent {
  /**
   * 入队
   * @param item 入队元素
   */
  enqueue (item: any) : void
  /**
   * 出队
   * @returns 出队元素
   */
  dequeue () : any
  /**
   * 获取队头元素
   * @returns 队头元素
   */
  front () : any
  /**
   * 获取队尾元素
   * @returns 队尾元素
   */
  end () : any
  /**
   * 判断是否为空队列
   * @returns 空队列判断结果
   */
  isEmpty () : boolean
  /**
   * 获取队列元素个数
   * @returns 队列元素个数
   */
  size () : number
  /**
   * 清空队列元素
   */
  clear () : void
  /**
   * 队列转字符串
   * @returns 队列的字符串表达形式
   */
  toString () : string
  /**
   * 队列转数组
   * @returns 队列的数组形式
   */
  toArray () : any[]
  /**
   * 绑定事件
   * @param name 事件名称
   * @param fn 事件处理函数
   * @param scope 事件处理函数上下文
   * @returns 事件处理函数
   */
  on (name: 'enqueue' | 'dequeue', fn: Function, scope?: Object): Function
}