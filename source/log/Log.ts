import CircularBuffer from '../utils/CircularBuffer'
import LogEntry from './LogEntry'

export default class Log extends CircularBuffer<LogEntry> {
    public constructor(capacity: number) {
        super(capacity)
    }

    /**
     * Creates a new Log object from the given string.
     *
     * @param enc - the encoded log
     * @returns a log object
     */
    // public static from(enc: string) : Log {}

    /**
     * Returns this log as string.
     *
     * @returns the log as string
     */
    // public toString() : string {}
}