(function() {
    // ----- Footer: year & last modified -----
    document.getElementById('year').textContent = new Date().getFullYear();
    const modSpan = document.getElementById('modDate');
    modSpan.textContent = document.lastModified || new Date().toLocaleString();

    // ----- DATA (Ghana businesses with updated links and extracted logos/colors) -----
    const membersData = [{
        companyName: 'Accra Web Solutions',
        address: '23 Independence Ave, Accra',
        phone: '+233 30 222 1111',
        website: 'https://ghanawebdesigns.com',
        // Extracted color: #1a3a4a, Logo: SVG text-based
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#1a3a4a; border-radius:12px;"><text x="10" y="50" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ffd966">GWD</text><text x="10" y="70" font-family="Arial, sans-serif" font-size="11" fill="#e6edf2">Ghana Web Designs</text></svg>`,
        membershipLevel: 3
    }, {
        companyName: 'Kumasi Digital Hub',
        address: '12 Asante Rd, Kumasi',
        phone: '+233 32 200 3456',
        website: 'https://kumasihive.com',
        // Extracted color: #2a4a5a, Logo: SVG text-based
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#2a4a5a; border-radius:12px;"><text x="10" y="50" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffd966">KH</text><text x="10" y="70" font-family="Arial, sans-serif" font-size="11" fill="#e6edf2">Kumasi Hive</text></svg>`,
        membershipLevel: 2
    }, {
        companyName: 'Tema Port Logistics',
        address: '5 Harbour St, Tema',
        phone: '+233 30 333 7890',
        website: 'http://www.achieverslogistics.com',
        // Extracted color: #3a5a6a, Logo: SVG text-based
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#3a5a6a; border-radius:12px;"><text x="10" y="45" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffd966">ACHIEVERS</text><text x="10" y="68" font-family="Arial, sans-serif" font-size="11" fill="#e6edf2">Logistics</text></svg>`,
        membershipLevel: 3
    }, {
        companyName: 'Cape Coast Creative',
        address: '17 Castle Rd, Cape Coast',
        phone: '+233 42 444 5678',
        website: 'https://www.rossmann.ro/grupul-rossman/?lang=en',
        // Using Rossmann brand colors (red/white)
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#d21034; border-radius:12px;"><text x="15" y="50" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white">ROSSMANN</text></svg>`,
        membershipLevel: 1
    }, {
        companyName: 'Sunyani AgroTech',
        address: '9 Garden Street, Sunyani',
        phone: '+233 35 555 4321',
        website: 'https://agritech.edu.gh',
        // Extracted color: #5a7a8a, Logo: SVG text-based
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#5a7a8a; border-radius:12px;"><text x="10" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffd966">AGRITECH</text><text x="10" y="68" font-family="Arial, sans-serif" font-size="11" fill="#e6edf2">Sunyani</text></svg>`,
        membershipLevel: 2
    }, {
        companyName: 'Tamale Transport Co.',
        address: '44 Station Rd, Tamale',
        phone: '+233 37 666 9876',
        website: 'http://dhl.com',
        // DHL colors: yellow and red
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#ffcc00; border-radius:12px;"><text x="15" y="50" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#d21034">DHL</text></svg>`,
        membershipLevel: 1
    }, {
        companyName: 'Ho IT Solutions',
        address: '21 Volta St, Ho',
        phone: '+233 36 777 6543',
        website: 'https://233developers.com',
        // Extracted color: #7a9aaa, Logo: SVG text-based
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" style="background:#7a9aaa; border-radius:12px;"><text x="10" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffd966">233</text><text x="10" y="68" font-family="Arial, sans-serif" font-size="12" fill="#e6edf2">Developers</text></svg>`,
        membershipLevel: 3
    }];

    // ----- Render function -----
    const container = document.getElementById('directoryContainer');
    let currentView = 'grid';

    function renderMembers(view) {
        container.className = view === 'grid' ? 'grid-view' : 'list-view';
        container.innerHTML = membersData.map(m => {
            const levelClass = m.membershipLevel === 3 ? 'gold' : m.membershipLevel === 2 ? 'silver' : '';
            const levelLabel = m.membershipLevel === 3 ? '⭐ Gold' : m.membershipLevel === 2 ? '🔹 Silver' : 'Member';
            return `
            <div class="member-card">
              <div class="member-logo">
                ${m.logo || '<span style="color:#1a3a4a;font-weight:bold;">Logo</span>'}
              </div>
              <div class="member-info">
                <div class="member-name">${m.companyName}</div>
                <span class="member-level ${levelClass}">${levelLabel}</span>
                <div class="member-address">📍 ${m.address || 'Accra, Ghana'}</div>
                <div class="member-phone">📞 <a href="tel:${m.phone}">${m.phone || 'N/A'}</a></div>
                <div class="member-web">🌐 <a href="${m.website}" target="_blank" rel="noopener">${m.website.replace(/^https?:\/\//, '').replace(/^www\./, '')}</a></div>
              </div>
            </div>
          `;
        }).join('');
    }

    // ----- Toggle buttons -----
    document.getElementById('gridBtn').addEventListener('click', () => {
        document.getElementById('gridBtn').classList.add('active');
        document.getElementById('listBtn').classList.remove('active');
        currentView = 'grid';
        renderMembers('grid');
    });
    document.getElementById('listBtn').addEventListener('click', () => {
        document.getElementById('listBtn').classList.add('active');
        document.getElementById('gridBtn').classList.remove('active');
        currentView = 'list';
        renderMembers('list');
    });

    // ----- Initial render -----
    renderMembers('grid');
})();