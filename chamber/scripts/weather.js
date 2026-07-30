// OpenWeatherMap API Configuration
// NOTE: Replace this placeholder with your own free API key from openweathermap.org
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

// Coordinates Setup: 1. Accra, Ghana | 2. Hanoi, Vietnam
const coords = {
    accra: { lat: "5.60", lon: "-0.19", containerId: "#accra-weather" },
    hanoi: { lat: "21.03", lon: "105.85", containerId: "#hanoi-weather" }
};

const forecastInfo = document.querySelector("#forecast-info");

async function fetchChamberWeather() {
    try {
        const [accraRes, hanoiRes, forecastRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.accra.lat}&lon=${coords.accra.lon}&units=metric&appid=${apiKey}`),
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.hanoi.lat}&lon=${coords.hanoi.lon}&units=metric&appid=${apiKey}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.accra.lat}&lon=${coords.accra.lon}&units=metric&appid=${apiKey}`)
        ]);

        if (accraRes.ok && hanoiRes.ok && forecastRes.ok) {
            displayCurrentCity(await accraRes.json(), coords.accra.containerId, "Accra");
            displayCurrentCity(await hanoiRes.json(), coords.hanoi.containerId, "Hanoi");
            displayForecast(await forecastRes.json());
        } else {
            throw Error("OpenWeather data parsing connection breakdown.");
        }
    } catch (error) {
        console.error("Critical Weather Module Engine Exception:", error);
        showWeatherFallback();
    }
}

function showWeatherFallback() {
    const accraEl = document.querySelector(coords.accra.containerId);
    const hanoiEl = document.querySelector(coords.hanoi.containerId);
    const message = `<p>Live weather unavailable right now. Add your OpenWeatherMap API key in scripts/weather.js to enable this feature.</p>`;
    if (accraEl) accraEl.innerHTML = message;
    if (hanoiEl) hanoiEl.innerHTML = message;
    if (forecastInfo) forecastInfo.innerHTML = "";
}

function displayCurrentCity(data, containerId, cityName) {
    const el = document.querySelector(containerId);
    if (!el) return;

    const temp = Math.round(data.main.temp);
    if (data.weather && data.weather.length > 0) {
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        el.innerHTML = `
            <div class="current-weather-display">
                <img src="${iconUrl}" alt="${desc}" width="50" height="50">
                <div>
                    <p class="temp" style="font-size: 1.8rem; font-weight: 700; margin: 0;">${temp}&deg;C</p>
                    <p class="desc" style="margin: 0; text-transform: capitalize; color: var(--text-muted); font-size: 0.85rem;">${desc}</p>
                </div>
            </div>
        `;
    }
}

function displayForecast(data) {
    if (!forecastInfo) return;
    forecastInfo.innerHTML = "";

    if (data.list) {
        const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        dailyData.forEach(day => {
            const date = new Date(day.dt * 1000);
            const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
            const temp = Math.round(day.main.temp);

            if (day.weather && day.weather.length > 0) {
                const iconCode = day.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
                const desc = day.weather[0].description;

                const dayCard = document.createElement("div");
                dayCard.className = "forecast-day";
                dayCard.innerHTML = `
                    <p class="forecast-date" style="font-weight: bold; margin: 0 0 5px 0;">${dayName}</p>
                    <img src="${iconUrl}" alt="${desc}" width="40" height="40">
                    <p class="forecast-temp" style="font-weight: bold; margin: 5px 0 0 0;">${temp}&deg;C</p>
                `;
                forecastInfo.appendChild(dayCard);
            }
        });
    }
}

if (apiKey && apiKey !== "YOUR_OPENWEATHERMAP_API_KEY") {
    fetchChamberWeather();
} else {
    showWeatherFallback();
}
