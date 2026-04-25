import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

document.title = parkData.fullName;

const heroImg = document.querySelector(".hero-banner img");
heroImg.src = parkData.images[0];
heroImg.alt = parkData.fullName;

function parkInfoTemplate(info) {
  return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);
