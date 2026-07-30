document.addEventListener("DOMContentLoaded", () => {
    const membersUrl = "data/members.json";
    const spotlightContainer = document.querySelector("#spotlight-container");

    if (!spotlightContainer) return;

    async function getSpotlightMembers() {
        try {
            const response = await fetch(membersUrl);
            if (!response.ok) {
                throw new Error(`HTTP Error Status: ${response.status}`);
            }
            const membersList = await response.json();

            // Filter for Premium Tiers: Only Silver (2) or Gold (3) membership levels
            const premiumMembers = membersList.filter(member =>
                member.membership === 2 || member.membership === 3
            );

            const selectedSpotlights = getRandomMembers(premiumMembers, 3);
            displaySpotlights(selectedSpotlights);
        } catch (error) {
            console.error("Error processing sponsor data stream profiles:", error);
            spotlightContainer.innerHTML = `<p>Sponsor spotlights temporarily unavailable.</p>`;
        }
    }

    function getRandomMembers(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displaySpotlights(spotlightArray) {
        spotlightContainer.innerHTML = "";

        spotlightArray.forEach(member => {
            const card = document.createElement("section");
            card.className = `spotlight-card tier-${member.membership}`;

            card.innerHTML = `
                <div class="spotlight-header">
                    <span class="company-badge">${member.membership === 3 ? "⭐ Gold Sponsor" : "✨ Silver Member"}</span>
                    <h3>${member.name}</h3>
                </div>
                <p class="spotlight-tagline">"${member.tagline}"</p>
                <div class="spotlight-details">
                    <p><strong>📍 Address:</strong> ${member.address}</p>
                    <p><strong>📞 Phone:</strong> ${member.phone}</p>
                    <p><strong>🌐 Web:</strong> <a href="${member.url}" target="_blank" rel="noopener noreferrer">${member.url.replace('https://', '')}</a></p>
                </div>
            `;
            spotlightContainer.appendChild(card);
        });
    }

    getSpotlightMembers();
});
