// ============================================================
// ====== LIGHTBOX - تكبير الصور عند الضغط عليها ======
// ============================================================

// ====== 1. فتح الصورة بتكبير ======
document.querySelectorAll('.project-image-grid img').forEach(img => {
    
    img.addEventListener('click', function() {
        
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

// ====== 2. إغلاق الـ Lightbox ======
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// ====== 3. إغلاق بالضغط على الخلفية ======
document.getElementById('lightbox').addEventListener('click', function(e) {
    
    if (e.target === this) {
        closeLightbox();
    }
});

// ====== 4. إغلاق بالضغط على زر ESC ======
document.addEventListener('keydown', function(e) {
    
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
