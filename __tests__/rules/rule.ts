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

import Rule from '../../source/rules/rule';
import SimpleRule from '../../source/rules/simpleRule';

describe('RuleTest', () => {
    let rule: Rule

    it('should create correct RegExp', () => {
        rule = new SimpleRule('test')

        expect(rule.value.toString()).toBe(new RegExp('([\/?#]|(&|&amp;))+(test=[^&]*)', 'gi').toString())
    })

    it('should return correct value on toString', () => {
        rule = new SimpleRule('test')

        expect(rule.toString()).toBe('([\/?#]|(&|&amp;))+(test=[^&]*)')
    })

    it('should be set active value correctly', () => {
        rule = new SimpleRule('test')

        expect(rule.isActive).toBe(true)
        rule.deactivate()
        expect(rule.isActive).toBe(false)
        rule.activate()
        expect(rule.isActive).toBe(true)
    })
})
