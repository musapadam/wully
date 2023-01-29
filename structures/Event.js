export default class Event {
    constructor({
        name,
        execute
    }) {
        this.name = name;
        this.execute = execute;
    }
}