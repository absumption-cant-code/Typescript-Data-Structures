/* 

    Data Structure : Queue

*/

/* A queue is a data structure that stores data in a first-in-first-out (FIFO) manner */
export class queue<T> {
    private array: T[] = [];

    /**
     * Return the length of the array.
     * @returns The length of the array.
     */
    public size(): number { return this.array.length };

    /**
     * Return true if the array is empty, otherwise return false.
     * @returns The length of the array.
     */
    public isEmpty(): boolean { return this.array.length === 0 };

    /**
     * Return the first element of the array.
     * @returns The first element in the array.
     */
    public peek(): T { return this.array[0] };

    /**
     * "This function adds an element to the end of the queue."
     * 
     * The function is public because it needs to be called outside of the class
     * @param {T} data - T - The data that we want to add to the queue.
     */
    public enqueue(data: T): void { this.array.push(data) };

    /**
     * If the array is empty, return undefined. If the array has at least one element, return the first
     * element of the array
     * @returns The first element in the array.
     */
    public dequeue(): T | undefined { 
        if (this.array.length === 0) { return undefined };
        if (this.array.length >= 1) { return this.array.shift() };
    }
}