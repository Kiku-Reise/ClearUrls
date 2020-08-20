export default class CircularBuffer<T> {
    private buffer: T[]
    public readonly capacity: number

    /**
     * Create a new circular buffer, that removes the oldes elements if the capacity is reached.
     *
     * @param capacity - the capacity of this queue
     * @throws error if the capacity is <= 0
     */
    public constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error('The capacity must be > 0')
        }

        this.capacity = capacity
        this.buffer = []
    }

    /**
     * Returns true if the buffer is empty.
     *
     * @returns true if the buffer is empty otherwise false
     */
    public isEmpty() : boolean {
        return this.buffer.length === 0
    }

    /**
     * Returns true if the buffer is full.
     *
     * @returns true if the buffer is full otherwise false
     */
    public isFull() : boolean {
        return this.buffer.length === this.capacity
    }

    /**
     * Enqueues an item.
     *
     * @param item - item that should be enqueued
     */
    public enqueue(item: T) : void {
        if (this.isFull()) {
            this.buffer.shift()
        }

        this.buffer.push(item)
    }

    /**
     * Returns the buffer in a fresh array.
     *
     * @returns the buffer
     */
    public toArray() : T[] {
        return [...this.buffer]
    }

    get size() : number {
        return this.buffer.length
    }
}