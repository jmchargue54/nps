import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// disclaimer url 
const disclaimer = document.querySelector(".disclaimer_url");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// title
const titleEl = document.querySelector("title");
titleEl.innerHTML = parkData.fullName;

// banner 
function parkInfoTemplate(info) {
    return `<a href="#" class="banner-title">Yellowstone</a>
          <p class="banner-subtitle">
            <span>${info.designation}</span>
            <span>${info.states}</span>
          </p>`;
}
function renderParkInfo() {
    const bannerEl = document.querySelector("#banner");
    bannerEl.innerHTML = parkInfoTemplate(parkData)
}
// image
const imgEl = document.querySelector("#banner-img");
imgEl.src = parkData.images[0].url;


renderParkInfo();