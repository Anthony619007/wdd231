document.addEventListener("DOMContentLoaded", () => {
    const displayContainer = document.getElementById("directory-display-container");
    const gridBtn = document.getElementById("grid-view-btn");
    const listBtn = document.getElementById("list-view-btn");
    let loadedMembers = [];

    if (!displayContainer) return;

    async function getMembersData() {
        try {
            const dataUrl = "data/members.json";
            const response = await fetch(dataUrl);
            if (!response.ok) {
                throw new Error(`HTTP Status Error: ${response.status}`);
            }
            loadedMembers = await response.json();
            renderDirectoryView(loadedMembers);
        } catch (error) {
            console.error("Critical Fetch Error Details:", error);
            displayContainer.innerHTML = `<p class="error-message">Failed to safely execute directory fetch engine profile.</p>`;
        }
    }

    function renderDirectoryView(membersArray) {
        displayContainer.innerHTML = "";

        membersArray.forEach(member => {
            const card = document.createElement("section");
            card.className = `business-card level-${member.membership}`;

            // Use a placeholder if the image is missing or just show the icon
            card.innerHTML = `
                <div class="card-logo-wrap">
                    <span class="placeholder-icon">🏢</span>
                </div>
                <h3>${member.name}</h3>
                <p class="tagline">"${member.tagline}"</p>
                <p class="address">📍 ${member.address}</p>
                <p class="phone">📞 ${member.phone}</p>
                <a href="${member.url}" target="_blank" rel="noopener noreferrer">Visit Corporate Website &rarr;</a>
            `;

            displayContainer.appendChild(card);
        });
    }

    // View Switcher Interaction Handlers
    if (gridBtn && listBtn) {
        gridBtn.addEventListener("click", () => {
            displayContainer.classList.add("grid-layout");
            displayContainer.classList.remove("list-layout");
            gridBtn.classList.add("active");
            listBtn.classList.remove("active");
            renderDirectoryView(loadedMembers);
        });

        listBtn.addEventListener("click", () => {
            displayContainer.classList.add("list-layout");
            displayContainer.classList.remove("grid-layout");
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
            renderDirectoryView(loadedMembers);
        });
    }

    getMembersData();
});
