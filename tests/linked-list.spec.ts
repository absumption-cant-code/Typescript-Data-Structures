import { doublyLinkedList, singlyLinkedList, circularLinkedList, listNode } from "../src/linked-list";

describe('linkedListImplementation', () => {
    test('doublyLinkedListInsertTop', () => {
        let linkedList = new doublyLinkedList();
        let linkedListDatum = 1;

        linkedList.insertAtTop(linkedListDatum);

        expect(linkedList.top).toStrictEqual(new listNode(linkedListDatum));
    });

    test('doublyLinkedListInsertBottom', () => {
        let linkedList = new doublyLinkedList();
        let linkedListDatum = 1;

        linkedList.insertAtBottom(linkedListDatum);

        expect(linkedList.bottom).toStrictEqual(new listNode(linkedListDatum));
    });

    test('singlyLinkedListInsertBottom', () => {
        let linkedList = new singlyLinkedList();
        let linkedListDatum = 1;

        linkedList.insertAtBottom(linkedListDatum);

        expect(linkedList.bottom).toStrictEqual(new listNode(linkedListDatum));
    });

    // Although multiple expects can be seen as bad practices, the conditions are needed to check the entirety of this test.
    test('circularLinkedListInsertBottom', () => {
        let linkedList = new circularLinkedList();
        let linkedListTopDatum = linkedList.insertAtBottom(1);
        let linkedListBottomDatum = linkedList.insertAtBottom(2);

        expect(linkedList.top).toStrictEqual(linkedListTopDatum);
        expect(linkedList.bottom).toStrictEqual(linkedListBottomDatum);
        expect(linkedListBottomDatum.below).toBe(linkedListTopDatum);
    })
})