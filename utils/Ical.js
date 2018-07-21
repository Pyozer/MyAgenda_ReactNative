export function parseToIcal(icalData) {
    let lines = icalData.split("\n")
    
    var events = []
    var event = {}

    lines.forEach(line => {
        if (line.includes('BEGIN:VEVENT'))
            event = {}
        else if (line.includes('DTSTART'))
            event.DTSTART = getValue(line)
        else if (line.includes('DTEND'))
            event.DTEND = getValue(line)
        else if (line.includes('SUMMARY'))
            event.SUMMARY = getValue(line)
        else if (line.includes('LOCATION'))
            event.LOCATION = getValue(line)
        else if (line.includes('DESCRIPTION')) {
            let description = getValue(line);
            event.DESCRIPTION = description.replace(/\\n/g, ' ').replace(/\s\s+/g, ' ').split('(Exported')[0].trim()
        } else if (line.includes('UID'))
            event.UID = getValue(line)
        else if (line.includes('END:VEVENT'))
            events.push(event)
    });

    return events
}

function getValue(line) {
    let index = line.indexOf(":")  // Gets the first index where a space occours
    return line.substr(index + 1)  // Gets the value part
}