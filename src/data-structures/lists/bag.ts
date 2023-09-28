export class Bag<T> {
  private items: T[] = [];

  constructor(items?: T[]) {
    if (items) {
      this.items = items;
    }
  }

  // 添加一个元素
  add(item: T): void {
    this.items.push(item);
  }

  // 返回背包中元素数量
  size(): number {
    return this.items.length;
  }

  // 返回背包中的所有元素
  values(): T[] {
    return this.items;
  }

  // 返回数组的字符串
  toString(): string {
    return this.items.toString();
  }

  // 清空数组
  clear(): void {
    this.items = [];
  }

  // 判断数组是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 移除背包中的某个元素
  remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  // 判断数组是否包含某个元素
  contains(item: T): boolean {
    return this.items.includes(item);
  }

  // 返回并集
  union(otherBag: Bag<T>): Bag<T> {
    const unionBag = new Bag<T>();
    this.items.forEach((item) => unionBag.add(item));
    otherBag.values().forEach((item) => unionBag.add(item));
    return unionBag;
  }

  // 返回交集
  intersection(otherBag: Bag<T>): Bag<T> {
    const intersectionBag = new Bag<T>();
    this.items.forEach((item) => {
      if (otherBag.contains(item)) {
        intersectionBag.add(item);
      }
    });
    return intersectionBag;
  }

  // 返回差集
  difference(otherBag: Bag<T>): Bag<T> {
    const differenceBag = new Bag<T>();
    this.items.forEach((item) => {
      if (!otherBag.contains(item)) {
        differenceBag.add(item);
      }
    });
    return differenceBag;
  }

  // 判断是否为子集
  isSubsetOf(otherBag: Bag<T>): boolean {
    return this.items.every((item) => otherBag.contains(item));
  }
}
