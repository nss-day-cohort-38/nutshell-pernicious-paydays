import API from "../data.js";
import renderHtmlEvents from "./domManagerEvents.js"
import eventListeners from "./eventListeners.js"

eventListeners.saveEvent();
eventListeners.editEvent();

API.get("events")
.then(renderHtmlEvents)