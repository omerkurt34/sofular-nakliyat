// Hero metinlerini yönetim panelinden al
const heroTitle = localStorage.getItem('heroTitle');
const heroSubtitle = localStorage.getItem('heroSubtitle');
if(heroTitle) document.getElementById('heroTitle').textContent = heroTitle;
if(heroSubtitle) document.getElementById('heroSubtitle').textContent = heroSubtitle;

// Yorumları listele
const yorumListesi = document.getElementById('yorumListesi');
const yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];
yorumlar.forEach(y => {
    const div = document.createElement('div');
    div.className = 'service-card';
    div.innerHTML = `<strong>${y.ad}</strong><p>${y.mesaj}</p>`;
    yorumListesi.appendChild(div);
});
