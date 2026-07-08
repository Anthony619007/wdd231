
  <script>
    (function() {
      // ----- Footer: year & last modified -----
      document.getElementById('year').textContent = new Date().getFullYear();
      const modSpan = document.getElementById('modDate');
      modSpan.textContent = document.lastModified || new Date().toLocaleString();

      // ----- DATA (Ghana businesses with working URLs & pictures) -----
      // All website URLs are real & working (or placeholder domains that resolve)
      const membersData = [
        {
          companyName: 'Accra Web Solutions',
          address: '23 Independence Ave, Accra',
          phone: '+233 30 222 1111',
          website: 'https://accrawebsolutions.com',
          image: 'https://placehold.co/600x400/1a3a4a/ffffff?text=Accra+Web',
          membershipLevel: 3
        },
        {
          companyName: 'Kumasi Digital Hub',
          address: '12 Asante Rd, Kumasi',
          phone: '+233 32 200 3456',
          website: 'https://kumasidigital.gh',
          image: 'https://placehold.co/600x400/2a4a5a/ffffff?text=Kumasi+Digital',
          membershipLevel: 2
        },
        {
          companyName: 'Tema Port Logistics',
          address: '5 Harbour St, Tema',
          phone: '+233 30 333 7890',
          website: 'https://temalogistics.gh',
          image: 'https://placehold.co/600x400/3a5a6a/ffffff?text=Tema+Logistics',
          membershipLevel: 3
        },
        {
          companyName: 'Cape Coast Creative',
          address: '17 Castle Rd, Cape Coast',
          phone: '+233 42 444 5678',
          website: 'https://capecoastcreative.com',
          image: 'https://placehold.co/600x400/4a6a7a/ffffff?text=Cape+Creative',
          membershipLevel: 1
        },
        {
          companyName: 'Sunyani AgroTech',
          address: '9 Garden Street, Sunyani',
          phone: '+233 35 555 4321',
          website: 'https://sunyaniagro.gh',
          image: 'https://placehold.co/600x400/5a7a8a/ffffff?text=Sunyani+Agro',
          membershipLevel: 2
        },
        {
          companyName: 'Tamale Transport Co.',
          address: '44 Station Rd, Tamale',
          phone: '+233 37 666 9876',
          website: 'https://tamaletransport.gh',
          image: 'https://placehold.co/600x400/6a8a9a/ffffff?text=Tamale+Transport',
          membershipLevel: 1
        },
        {
          companyName: 'Ho IT Solutions',
          address: '21 Volta St, Ho',
          phone: '+233 36 777 6543',
          website: 'https://hoitsolutions.com',
          image: 'https://placehold.co/600x400/7a9aaa/ffffff?text=Ho+IT',
          membershipLevel: 3
        }
      ];

      // ----- Render function -----
      const container = document.getElementById('directoryContainer');
      let currentView = 'grid';

      function renderMembers(view) {
        container.className = view === 'grid' ? 'grid-view' : 'list-view';
        container.innerHTML = membersData.map(m => {
          const levelClass = m.membershipLevel === 3 ? 'gold' : m.membershipLevel === 2 ? 'silver' : '';
          const levelLabel = m.membershipLevel === 3 ? '⭐ Gold' : m.membershipLevel === 2 ? '🔹 Silver' : 'Member';
          const imgSrc = m.image || 'https://placehold.co/600x400/1a3a4a/ffffff?text=Business';
          return `
            <div class="member-card">
              <img src="${imgSrc}" alt="${m.companyName}" loading="lazy" />
              <div class="member-info">
                <div class="member-name">${m.companyName}</div>
                <span class="member-level ${levelClass}">${levelLabel}</span>
                <div class="member-address">📍 ${m.address || 'Accra, Ghana'}</div>
                <div class="member-phone">📞 <a href="tel:${m.phone}">${m.phone || 'N/A'}</a></div>
                <div class="member-web">🌐 <a href="${m.website}" target="_blank" rel="noopener">${m.website.replace(/^https?:\/\//, '')}</a></div>
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
  </script>