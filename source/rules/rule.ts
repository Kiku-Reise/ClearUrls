export default class Rule {
    private _rule: RegExp

    constructor(rule: RegExp) {
        this._rule = rule
    }

    get value() : RegExp {
        return this._rule
    }
}