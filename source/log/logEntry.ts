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

import Rule from '../rules/rule'

export default class LogEntry {
    private readonly _before: string
    private readonly _after: string
    private readonly _rule: Rule
    private readonly _timestamp: number
    private readonly _runtime: number

    constructor(before: string, after: string, rule: Rule, timestamp: number = Date.now(), runtime: number) {
        this._before = before
        this._after = after
        this._rule = rule
        this._timestamp = timestamp
        this._runtime = runtime
    }

    get before() : string {
        return this._before
    }

    get after() : string {
        return this._after
    }

    get rule() : Rule {
        return this._rule
    }

    get timestamp() : number {
        return this._timestamp
    }

    get runtime() : number {
        return this._runtime
    }
}
