/*
 * ClearURLs
 * Copyright (c) 2017-2020 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
