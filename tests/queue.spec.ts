import { queue } from '../src/queue';

describe('queueImplementation', () => {
    test('queueEnqueue', () => {
        let emptyQueue = new queue();
        let emptyQueueDatum = "";

        emptyQueue.enqueue(emptyQueueDatum);
        
        expect(emptyQueue.size()).toBe(1);
    })

    test('queueDequeue', () => {
        let emptyQueue = new queue();
        let emptyQueueDatum = "";

        emptyQueue.enqueue(emptyQueueDatum);
        emptyQueue.dequeue();

        expect(emptyQueue.size()).toBe(0);
    })

    test('queuePeek', () => {
        let emptyQueue = new queue();
        let emptyQueueDatum = "";

        emptyQueue.enqueue(emptyQueueDatum);

        expect(emptyQueue.peek()).toBe(emptyQueueDatum);
    })

    test('queueIsEmpty', () => {
        let emptyQueue = new queue();
        let emptyQueueDatum = "";

        expect(emptyQueue.isEmpty()).toBe(true);
    })
})