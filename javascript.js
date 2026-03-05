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

    /* --- SADECE 3. KUTU İÇİN FOTOĞRAF DEĞİŞTİRME --- */
    const changeBtn = document.getElementById('changeBtn');
    const targetImage = document.getElementById('targetImage');

    if (changeBtn && targetImage) {
        changeBtn.addEventListener('click', function () {
            // Butona basıldığında images.png dosyasını gösterir
            targetImage.src = "images.png";

            // Görsel geri bildirim için buton metnini değiştirir
            this.textContent = "Fotoğraf Güncellendi!";
            this.style.backgroundColor = "#28a745"; // Yeşil renk
        });
    }

    /* --- YENİ KUTU İÇİN DALGA (WAVE) EFEKTİ --- */
    const waveCard = document.getElementById('waveCard');

    if (waveCard) {
        waveCard.addEventListener('mousemove', function (e) {
            // 1. Yeni bir yuvarlak div oluştur
            const wave = document.createElement('div');
            wave.classList.add('cursor-wave');

            // 2. Kutunun sayfadaki konumunu alarak farenin kutu içindeki koordinatlarını hesapla
            const rect = waveCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 3. Yuvarlağı farenin olduğu yere yerleştir
            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;

            // 4. Yuvarlağı kutunun içine ekle
            waveCard.appendChild(wave);

            // 5. Animasyon bitince (0.8 saniye) oluşan div'i HTML'den sil ki sayfa kasmasın
            setTimeout(() => {
                wave.remove();
            }, 800);
        });
    }
    /* --- JS TRUE++ DEMOSU --- */
    const trueIncrementBtn = document.getElementById('trueIncrementBtn');
    const trueResultText = document.getElementById('trueResultText');
    
    // Başlangıç değişkenimiz
    let benimDegerim = true;

    if (trueIncrementBtn && trueResultText) {
        trueIncrementBtn.addEventListener('click', function () {
            // Değeri 1 artırıyoruz (true = 1 olur, 1+1 = 2 olur)
            benimDegerim++; 
            
            // Sonucu ve yeni veri türünü (typeof) ekrana yazdırıyoruz
            trueResultText.innerHTML = `<strong>Yeni değer:</strong> ${benimDegerim} (Türü: ${typeof benimDegerim})`;
            
            // Butonun görünümünü güncelleyip tekrar basılmasını kapatalım
            this.textContent = "İşlem Tamamlandı! Sonuç: 2";
            this.style.backgroundColor = "#28a745"; // Yeşil
            this.style.cursor = "not-allowed"; // İmleci değiştir
            this.disabled = true; // Butonu kilitle
        });
    }
});