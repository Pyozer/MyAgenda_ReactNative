export default class Cours {

    constructor(uuid, title, description, location, dateStart, dateEnd) {
        this.uuid = uuid
        this.title = title
        this.description = description
        this.location = location
        this.dateStart = dateStart
        this.dateEnd = dateEnd
    }

    get uuid() { return this.uuid }
    set uuid(value) { return this.uuid = value }

    get title() { return this.title }
    set title(value) { return this.title = value }

    get description() { return this.description }
    set description(value) { return this.description = value }

    get location() { return this.location }
    set location(value) { return this.location = value }

    get dateStart() { return this.dateStart }
    set dateStart(value) { return this.dateStart = value }

    get dateEnd() { return this.dateEnd }
    set dateEnd(value) { return this.dateEnd = value }

}