/* 

    Data Structure : Queue

*/

/* A queue is a data structure that stores data in a first-in-first-out (FIFO) manner */
export class queue<T> {
    private array: T[] = [];

    public size(): number { return this.array.length };
    public isEmpty(): boolean { return this.array.length === 0 };
    public peek(): T { return this.array[0] };

    public enqueue(data: T): void { this.array.push(data) };
    public dequeue(): T | undefined { 
        if (this.array.length === 0) { return undefined };
        if (this.array.length >= 1) { return this.array.shift() };
    }
}