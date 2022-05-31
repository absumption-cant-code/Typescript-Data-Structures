import { doublyLinkedList, singlyLinkedList, listNode } from "../src/linked-list";

describe('linkedListImplementation', () => {
    test('doublyLinkedListInsertTop', () => {
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
})