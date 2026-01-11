$(document).ready(function() {
    
    // Sayaç Animasyonu
    const counters = document.querySelectorAll('.numara');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 100; 

            if (count < target) {
                counter.innerText = Math.ceil(count + (target / speed));
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });

    // İletişim Formu İşlemi
    $('#kasap-formu').on('submit', function(e) {
        e.preventDefault();
        const isim = $('#ad').val();
        $(this).fadeOut(300, function() {
            $('#form-sonuc').html('Teşekkürler ' + isim + '! Mesajınız TAN-ET sistemine ulaştı.');
        });
    });
});

// Sipariş Fonksiyonu
function siparisVer(urunAdi) {
    alert(urunAdi + " sepetinize eklendi! TAN-ET kalitesini seçtiğiniz için teşekkürler.");
}