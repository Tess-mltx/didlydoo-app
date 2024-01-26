export function getTheID(btn) {
    let eventId = btn.parentNode.id.split('-')[1]; // <=== a vérifier selon la structure des cardEvent
    return eventId
}