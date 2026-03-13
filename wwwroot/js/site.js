document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. TABLO SIRALAMA --- */
    const sortBtn = document.getElementById('sortBtn');
    if (sortBtn) {
        sortBtn.addEventListener('click', function () {
            const table = document.getElementById('studentTable');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));

            rows.sort((a, b) => {
                const nameA = a.cells[1].textContent.trim();
                const nameB = b.cells[1].textContent.trim();
                return nameA.localeCompare(nameB, 'tr');
            });

            rows.forEach(row => tbody.appendChild(row));
            this.textContent = "İsimler Sıralandı! ✓";
            this.style.backgroundColor = "#28a745";
        });
    }

    /* --- 2. METİN VE ETİKET KARIŞTIRMA (SCRAMBLE) --- */
    const scrambleBtn = document.getElementById('scrambleBtn');
    const title1 = document.getElementById('title1');
    const text1 = document.getElementById('text1');

    function scrambleEffect(text) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ' || text[i] === '\n') {
                result += text[i];
            } else {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
        return result;
    }

    if (scrambleBtn) {
        scrambleBtn.addEventListener('click', function () {
            title1.textContent = scrambleEffect(title1.textContent);
            text1.textContent = scrambleEffect(text1.textContent);

            // DİKKAT: Yeni HTML yapımıza uygun olarak '.my-badge' aranıyor
            const badges = document.querySelectorAll('.my-badge');
            badges.forEach(badge => {
                badge.textContent = scrambleEffect(badge.textContent);
            });

            this.textContent = "Sistem Karıştırıldı! 🔥";
            this.style.backgroundColor = "#e67e22";

            setTimeout(() => {
                this.textContent = "Metni Karıştır (Rastgele) 🔥";
                this.style.backgroundColor = "#1a73e8";
            }, 3000);
        });
    }

    /* --- 3. FOTOĞRAF DEĞİŞTİRME --- */
    const changeBtn = document.getElementById('changeBtn');
    const targetImage = document.getElementById('targetImage');

    if (changeBtn && targetImage) {
        changeBtn.addEventListener('click', function () {
            // Görsel yolu kontrol edilmeli, wwwroot/images içinde olmalı
            targetImage.src = "/images/images.png";
            this.textContent = "Fotoğraf Güncellendi!";
            this.style.backgroundColor = "#28a745";
        });
    }

    /* --- 4. DALGA (WAVE) EFEKTİ --- */
    const waveCard = document.getElementById('waveCard');

    if (waveCard) {
        waveCard.addEventListener('mousemove', function (e) {
            const wave = document.createElement('div');
            // DİKKAT: Yeni CSS yapımıza uygun olarak 'my-cursor-wave' eklendi
            wave.classList.add('my-cursor-wave');

            const rect = waveCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;

            waveCard.appendChild(wave);

            setTimeout(() => {
                wave.remove();
            }, 800);
        });
    }

    /* --- 5. JS TRUE++ DEMOSU --- */
    const trueIncrementBtn = document.getElementById('trueIncrementBtn');
    const trueResultText = document.getElementById('trueResultText');

    let benimDegerim = true;

    if (trueIncrementBtn && trueResultText) {
        trueIncrementBtn.addEventListener('click', function () {
            benimDegerim++;
            trueResultText.innerHTML = `<strong>Yeni değer:</strong> ${benimDegerim} (Türü: ${typeof benimDegerim})`;
            this.textContent = "İşlem Tamamlandı! Sonuç: 2";
            this.style.backgroundColor = "#28a745";
            this.style.cursor = "not-allowed";
            this.disabled = true;
        });
    }
});