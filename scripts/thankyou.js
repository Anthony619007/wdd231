document.addEventListener("DOMContentLoaded", () => {
    const detailsList = document.getElementById("thankyou-details");
    if (!detailsList) return;

    const params = new URLSearchParams(window.location.search);

    const fieldMap = [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "title", label: "Organization Title" },
        { key: "email", label: "Email Address" },
        { key: "phone", label: "Mobile Phone" },
        { key: "organization", label: "Organization Name" },
        { key: "businessDescription", label: "Business Description" },
        { key: "membershipLevel", label: "Membership Level" },
        { key: "timestamp", label: "Submitted On" }
    ];

    let hasData = false;

    fieldMap.forEach(field => {
        const value = params.get(field.key);
        if (value && value.trim() !== "") {
            hasData = true;
            const dt = document.createElement("dt");
            dt.textContent = field.label;

            const dd = document.createElement("dd");
            dd.textContent = field.key === "timestamp"
                ? new Date(value).toLocaleString()
                : value;

            detailsList.appendChild(dt);
            detailsList.appendChild(dd);
        }
    });

    if (!hasData) {
        detailsList.innerHTML = "<p>No application details were found. Please submit the membership form to see your confirmation here.</p>";
    }
});
