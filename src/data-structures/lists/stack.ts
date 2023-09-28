export class Stack<T> {
  private items: T[] = [];

  // 入栈，将元素添加到栈顶
  push(item: T): void {
    this.items.push(item);
  }

  // 出栈，从栈顶移除并返回元素
  pop(): T | undefined {
    return this.items.pop();
  }

  // 查看栈顶的元素，不移除
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 获取栈的大小（元素数量）
  size(): number {
    return this.items.length;
  }

  // 清空栈
  clear(): void {
    this.items = [];
  }

  // 返回栈中的所有元素
  values(): T[] {
    return this.items;
  }
}
