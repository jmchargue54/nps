import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {
  vcInfoTemplate,
  vcTitleTemplate,
  vcDetailsTemplate,
  vcAmenityTemplate,
  vcImageTemplate,
  listTemplate,
  vcAddressesListTemplate,
  vcDirectionsTemplate,
  vcContactsTemplate
} from "./templates.mjs";

function arrowsTemplate() {
  return `<svg class="arrow">
            <use href="images/sprite.symbol.svg#arrow"></use>
          </svg>  
`
}

function getParam(param) {
  const search = location.search;
  const params = new URLSearchParams(search);
  return params.get(param);
}

function buildPage(data) {
  // since we have all the structure in place in the HTML, this solution chooses to insert content into the existing structure instead of generating all the structure with the content
  document.querySelector(".vc-name").innerHTML = vcTitleTemplate(data.name);
  document.querySelector(".vc-info").innerHTML = vcInfoTemplate(data);
  const detailsEl = document.querySelector(".vc-details-list");
  detailsEl.innerHTML = "";
  // addresses section
  const addressHTML = vcAddressesListTemplate(data.addresses);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAddresses",
      "Addresses",
      "heading-icon_map-pin",
      addressHTML
    )
  );
  const arrowAddress = document.querySelector('#vcAddresses summary')
  arrowAddress.insertAdjacentHTML("beforeend", arrowsTemplate());
  // directions
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcDirections",
      "Directions",
      "directions",
      vcDirectionsTemplate(data.directionsInfo)
    )
  );
  const arrowDirection = document.querySelector('#vcDirections summary')
  arrowDirection.insertAdjacentHTML("beforeend", arrowsTemplate());

  // amenities section.
  const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAmenities",
      "Amenities",
      "heading-icon_info",
      amenitiesHTML
    )
  );
  const arrowAmenities = document.querySelector('#vcAmenities summary')
  arrowAmenities.insertAdjacentHTML("beforeend", arrowsTemplate());

  // contact section
  const contactHTML = vcContactsTemplate(data.contacts);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate("vcContacts", "Contacts", "phone", contactHTML)
  );
  const arrowContacts = document.querySelector('#vcContacts summary')
  arrowContacts.insertAdjacentHTML("beforeend", arrowsTemplate());

  // gallery section
  const galleryHTML = listTemplate(data.images, vcImageTemplate);
  document
    .querySelector(".vc-gallery")
    .insertAdjacentHTML("beforeend", galleryHTML);
}

async function init() {
  const parkData = await getParkData();
  const id = getParam("id");
  const centerDetails = await getParkVisitorCenterDetails(id);
  setHeaderFooter(parkData);
  buildPage(centerDetails);
}

init();