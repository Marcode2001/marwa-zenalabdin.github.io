// ============================================================
// ====== LIGHTBOX - تكبير الصور عند الضغط عليها ======
// ============================================================

/* 
   الفكرة: 
   - لما المستخدم يضغط على صورة، تظهر الصورة مكبرة في منتصف الشاشة
   - يقدر يغلق الصورة بالضغط على X، أو على الخلفية، أو زر ESC
*/

// ====== 1. فتح الصورة بتكبير ======
// نختار جميع الصور الموجودة داخل شبكة الصور
document.querySelectorAll('.project-image-grid img').forEach(img => {
    
    // لكل صورة، نضيف لها حدث "click" (ضغطة)
    img.addEventListener('click', function() {
        
        // نجيب عنصر الـ Lightbox (النافذة المنبثقة)
        const lightbox = document.getElementById('lightbox');
        
        // نجيب عنصر الصورة المكبرة داخل الـ Lightbox
        const lightboxImg = document.getElementById('lightbox-img');
        
        // نخلي مصدر الصورة المكبرة = نفس الصورة يلي انضغطت
        lightboxImg.src = this.src;
        
        // نظيف كلاس "active" عشان تظهر النافذة
        lightbox.classList.add('active');
    });
});

// ====== 2. إغلاق الـ Lightbox ======
function closeLightbox() {
    // نشيل كلاس "active" عشان تخفى النافذة
    document.getElementById('lightbox').classList.remove('active');
}

// ====== 3. إغلاق بالضغط على الخلفية ======
// لما المستخدم يضغط على الخلفية (مو على الصورة)، تنغلق النافذة
document.getElementById('lightbox').addEventListener('click', function(e) {
    
    // e.target هو العنصر يلي انضغط
    // this هو الـ Lightbox نفسه
    // إذا انضغطت الخلفية (مو الصورة)، نغلق
    if (e.target === this) {
        closeLightbox();
    }
});

// ====== 4. إغلاق بالضغط على زر ESC ======
// لما المستخدم يضغط على زر ESC في الكيبورد، تنغلق النافذة
document.addEventListener('keydown', function(e) {
    
    // e.key = اسم الزر يلي انضغط
    if (e.key === 'Escape') {
        closeLightbox();
    }
});