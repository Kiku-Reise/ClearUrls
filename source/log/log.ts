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

import CircularBuffer from '../utils/circularBuffer'
import LogEntry from './logEntry'

/**
 * Models the log.
 */
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
