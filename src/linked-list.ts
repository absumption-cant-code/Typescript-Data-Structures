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

    /**
     * If the top node is null, then set the top node to the new node, otherwise set the new node's
     * below node to the current top node, set the current top node's above node to the new node, and
     * set the top node to the new node.
     * @param {T} data - T - The data to be inserted into the list.
     * @returns The node that was inserted.
     */
    public insertAtTop(data: T): listNode<T> {
        let node = new listNode(data);

        if (!this.top) { this.top = node } else {
            node.below = this.top;

            this.top.above = node;
            this.top = node;
        }

        return node
    }

    /**
     * If the top node is null, then set the top node to the new node, otherwise set the new node's
     * below node to the current top node, set the current top node's above node to the new node, and
     * set the top node to the new node.
     * @param {T} data - T - The data to be inserted into the list.
     * @returns The node that was inserted.
     */
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

    /**
     * If the bottom of the stack is empty, then the bottom of the stack is the new node, otherwise the
     * bottom of the stack is the new node and the new node is the bottom of the stack.
     * @param {T} data - T - The data to be inserted into the node
     * @returns The node that was just created.
     */
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

    /**
     * If the stack is empty, then the new node becomes the top and bottom of the stack. If the stack
     * is not empty, then the new node becomes the bottom of the stack and the bottom of the stack
     * points to the top of the stack.
     * @param {T} data - T - The data to be inserted into the node
     * @returns The node that was inserted.
     */
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

