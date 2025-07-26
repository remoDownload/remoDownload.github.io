// إنشاء تأثير الريبل عند النقر على الأزرار
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// إضافة تأثير اهتزاز للزر العائم عند التمرير
window.addEventListener('scroll', function() {
    const floatingBtn = document.getElementById('floatingBtn');
    if (window.scrollY > 100) {
        floatingBtn.style.animation = 'pulse 1.5s infinite, shake 0.5s ease-in-out';
        setTimeout(() => {
            floatingBtn.style.animation = 'pulse 1.5s infinite';
        }, 500);
    }
});

// إظهار إشعار النسخ عند نسخ كود الداونلودر
const downloaderCode = document.querySelector('.downloader-code');
const copyNotification = document.getElementById('copyNotification');

downloaderCode.addEventListener('click', function() {
    const range = document.createRange();
    range.selectNode(this);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    copyNotification.style.opacity = '1';
    setTimeout(() => {
        copyNotification.style.opacity = '0';
    }, 2000);
});
