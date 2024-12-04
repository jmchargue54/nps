import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
    // disclaimer url 
    const disclaimer = document.querySelector(".disclaimer_url");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    
    // title
    const titleEl = document.querySelector("title");
    titleEl.innerHTML = data.fullName;
    // image
    document.querySelector("#banner-img").src = data.images[0].url;
    // park info
    document.querySelector("#banner").innerHTML = parkInfoTemplate(data);
}
function renderFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}
export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    renderFooter(parkData);
    enableNavigation();
}