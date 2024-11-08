// banner template
export function parkInfoTemplate(info) {
    return `<a href="#" class="banner-title">${info.name}</a>
    <p class="banner-subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}
// main content template
export function mediaCardTemplate(info) {
    return `<div class="media-card">
          <a href="${info.link}">
            <img class="media-img" src="${info.image}" alt="${info.name}">
            <h1 class="media-title">${info.name}</h1>
          </a>
          <p>${info.description}</p>
        </div>`;
}
// footer tempate
function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}
function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}
export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
        <h3>CONTACT INFO</h3>
        <h4>Mailing Address:</h4>
        <div class="city"><p>${mailing.line1}<p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
        <h4>Phone:</h4>
        <p>${voice}</p>
        </section>`;
}


