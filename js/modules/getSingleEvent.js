import { getTheID } from "../utils/getTheID.js"
// WIP - need objectID on cardEvent
export async function getSingleEvent(eventId) {
        try {
            const response = await fetch(`http://localhost:3000/api/events/${eventId}`);
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.error('Erreur de récupération du single event :', error);
        }
}
// getSingleEvent('f5b6564b5dc4') // <=== appel de test, la data est ok 