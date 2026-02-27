document.addEventListener('DOMContentLoaded', () => {
    const sortBtn = document.getElementById('sortBtn');

    if (sortBtn) {
        sortBtn.addEventListener('click', function () {
            const table = document.getElementById('studentTable');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));

            // Türkçe alfabe kurallarına göre sıralama (A-Z)
            rows.sort((a, b) => {
                const nameA = a.cells[1].textContent.trim();
                const nameB = b.cells[1].textContent.trim();
                return nameA.localeCompare(nameB, 'tr');
            });

            // Tabloyu yeni sırayla güncelle
            rows.forEach(row => tbody.appendChild(row));

            // Butonun görünümünü değiştir
            this.textContent = "İsimler Sıralandı! ✓";
            this.style.backgroundColor = "#28a745";
            this.style.color = "white";
        });
    }
});