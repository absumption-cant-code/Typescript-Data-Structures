/* 

    Data Structure : Stacked Data Structure

*/

/* It's a stack that uses an array as its underlying data structure. */
export class arrayStack<T> {
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
      * The push function takes a generic type T and returns void.
      * @param {T} data - T - The data to push into the stack.
      */
    public push(data: T): void { this.array.push(data) };

    /**
     * Return the last element of the array, or undefined if the array is empty.
     * @returns The last element of the array.
     */
    public pop(): T | undefined { return this.array.pop() };
}

/* It's a stack that uses a linked list as its underlying data structure. */
export class linkedListStack<T> {

}