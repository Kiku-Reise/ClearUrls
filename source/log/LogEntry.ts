import Rule from '../rules/rule'

export default class LogEntry {
    private _before: string
    private _after: string
    private _rule: Rule
    private _timestamp: number
    private _runtime: number

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