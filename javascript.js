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
            // Başlık ve metni karıştır
            title1.textContent = scrambleEffect(title1.textContent);
            text1.textContent = scrambleEffect(text1.textContent);

            // Tüm etiketleri (badges) bul ve karıştır
            const badges = document.querySelectorAll('.badge');
            badges.forEach(badge => {
                badge.textContent = scrambleEffect(badge.textContent);
            });

            // Buton geri bildirimi
            this.textContent = "Sistem Karıştırıldı! 🔥";
            this.style.backgroundColor = "#e67e22";

            // 3 saniye sonra butonu sıfırla
            setTimeout(() => {
                this.textContent = "Metni Karıştır (Rastgele) 🔥";
                this.style.backgroundColor = "#1a73e8";
            }, 3000);
        });
    }
});