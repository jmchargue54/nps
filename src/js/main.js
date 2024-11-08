import { getParkData, getParkInfoLinks} from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

// main
function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
  }
  
  function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
  }

// // banner 
// function renderParkInfo(park) {
//     const bannerEl = document.querySelector("#banner");
//     bannerEl.innerHTML = parkInfoTemplate(park)
// }
  
setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);