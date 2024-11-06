// src/header.js
const contactDetails = {
    email: "forsuresh@ahoo.com",
    phone: "347.855.1499",
    linkedIn: "https://www.linkedin.com/in/suresh-nandlall",
    portfolio: "https://www.google.com",
    github: "https://github.com/surnan",
    location: "Jersey City, NJ"
};

function loadHeader() {
    const headerFlexContainer = document.querySelector(".header-xflex");

    if (headerFlexContainer) {
        headerFlexContainer.innerHTML = `
            <a href="mailto:${contactDetails.email}">${contactDetails.email}</a>
            <strong> > </strong>
            <a href="tel:${contactDetails.phone}">${contactDetails.phone}</a>
            <strong> > </strong>
            <a href="${contactDetails.linkedIn}" target="_blank">LinkedIn</a>
            <strong> > </strong>
            <a href="${contactDetails.portfolio}" target="_blank">Portfolio</a>
            <strong> > </strong>
            <span>${contactDetails.location}</span>
        `;
    }
}

document.addEventListener("DOMContentLoaded", loadHeader);
