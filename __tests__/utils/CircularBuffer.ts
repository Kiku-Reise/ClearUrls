import CircularBuffer from '../../source/utils/CircularBuffer'

describe('CircularBuffer', () => {
    let capacity: number
    let buffer: CircularBuffer<string>

    beforeEach(() => {
        capacity = 10
        buffer = new CircularBuffer<string>(capacity)
    })

    it('should creates a buffer with the specified capacity', () => {
        expect(buffer.capacity).toBe(capacity)
    })

    it('should add item to the buffer', () => {
        expect(buffer.size).toBe(0)
        buffer.enqueue('foo')
        expect(buffer.size).toBe(1)
    })

    it('should remove oldest item if the buffer is full on adding new items', () => {
        buffer = new CircularBuffer<string>(2)
        buffer.enqueue('foo1')
        buffer.enqueue('foo2')
        buffer.enqueue('foo3')
        buffer.enqueue('foo4')
        expect(buffer.toArray()).toEqual(['foo3', 'foo4'])
    })


    it('should return the current size via the size() getter', () => {
        buffer.enqueue('foo')
        expect(buffer.size).toBe(1)
    })

    it('should return true if buffer is empty', () => {
        expect(buffer.isEmpty()).toBe(true)
    })

    it('should throw exception on illegal argument', () => {
        expect(() => new CircularBuffer<any>(0)).toThrow('The capacity must be > 0')
    })
})