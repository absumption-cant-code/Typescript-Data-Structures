/*
    Data Structure : Linked List

    This implemantation assumes a vertical order to the list rather than the typical horizontal implementation

    Singly linked list,
    Doubly linked list
*/

/* An interface. */
interface listProperties<T> {
   // size(): number;
   // traverse(): T[];
   // search(comparator: (data: T) => boolean): (listNode<T> | null);

    //insert(data: T, position?: number): listNode<T>; // * Warning * This method is more costly when performed on a doubly linked list due to the nature of recursion.
    insertAtTop?(data: T): listNode<T>; // Insert a datum at the top of the linked list
    insertAtBottom(data: T): listNode<T>; // Insert a datum at the bottom of the linked list, universal accross both singly and doubly
}

export class listNode<T> {
    public above: (listNode<T> | null) = null;
    public below: (listNode<T> | null) = null;

    constructor(public data: T) {};
}

/* It's a doubly linked list that can insert nodes at the top or bottom of the list */
export class doublyLinkedList<T> implements listProperties<T> {
    public top: (listNode<T> | null) = null;
    public bottom: (listNode<T> | null) = null;

    public insertAtTop(data: T): listNode<T> {
        let node = new listNode(data);

        if (!this.top) { this.top = node } else {
            node.below = this.top;

            this.top.above = node;
            this.top = node;
        }

        return node
    }

    public insertAtBottom(data: T): listNode<T> {
        let node = new listNode(data);
        
        if (!this.bottom) { this.bottom = node } else {
            node.above = this.bottom;

            this.bottom.below = node;
            this.bottom = node;
        }

        return node
    }
}

/* It's a singly linked list that has a bottom property that is either null or a listNode. */
export class singlyLinkedList<T> implements listProperties<T> {
    public bottom: (listNode<T> | null) = null;

    public insertAtBottom(data: T): listNode<T> {
        let node = new listNode(data);

        if (!this.bottom) { this.bottom = node } else {
            this.bottom.below = node;
            this.bottom = node;
        }

        return node
    } 
}

/* It's a circular linked list that has a top and bottom property, and an insertAtBottom method. */
export class circularLinkedList<T> implements listProperties<T> {
    public top: (listNode<T> | null) = null;
    public bottom: (listNode<T> | null) = null;

    public insertAtBottom(data: T): listNode<T> {
        let node = new listNode(data);

        if (!this.top) { this.top = node } else {
            if (!this.bottom) { this.bottom = node } else {
                this.bottom.below = node;
                this.bottom = node;
            }

            this.bottom.below = this.top;
        }

        return node
    }
}

