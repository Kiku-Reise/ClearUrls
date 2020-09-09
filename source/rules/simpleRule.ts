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

import Rule from './rule'

/**
 * Models a simple rule.
 */
export default class SimpleRule extends Rule {
    /**
     * Creates a new simple rule, that already includes start and stop elements.
     *
     * @param rule - the simple rule
     * @param active - if the rule is active or not
     */
    constructor(rule: string, active: boolean = true) {
        super('([\/?#]|(&|&amp;))+(' + rule + '=[^&]*)', active)
    }
}
