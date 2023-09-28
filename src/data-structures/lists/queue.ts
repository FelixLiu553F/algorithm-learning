export class Queue<T> {
  private items: T[] = [];

  // 入队，将元素添加到队列尾部
  enqueue(item: T): void {
    this.items.push(item);
  }

  // 出队，从队列头部移除并返回元素
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // 查看队列头部的元素，不移除
  peek(): T | undefined {
    return this.items[0];
  }

  // 检查队列是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 获取队列的大小（元素数量）
  size(): number {
    return this.items.length;
  }

  // 清空队列
  clear(): void {
    this.items = [];
  }

  // 返回队列中的所有元素
  values(): T[] {
    return this.items;
  }
}
