import {getParkData, getAlertData, getVisitorCenterData} from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import {alertTemplate, servicesTemplate, activitiesTemplate} from "./templates.mjs";

function setAlerts(alert) {
    const alertsEl = document.querySelector(".alerts > ul");
    alertsEl.innerHTML = "";
    const html = alert.map(alertTemplate);
    alertsEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(services) {
    const servicesEl = document.querySelector(".visitor ul");
    const html = services.map(servicesTemplate);
    servicesEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activity) {
    const activitiesEl = document.querySelector(".activities ul");
    const html = activitiesTemplate(activity);
    activitiesEl.insertAdjacentHTML("beforeend", html);
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getAlertData(parkData.parkCode);
    const services = await getVisitorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(services);
    setActivities(parkData.activities);
}


init();