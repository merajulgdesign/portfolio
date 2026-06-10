// ============ Loader ============
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.add('hidden');
    }, 1000);
});

// ============ Navigation Toggle ============
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
        navMenu?.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// ============ Navbar Scroll Effect ============
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// ============ Back to Top Button ============
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============ Portfolio Filter ============
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ============ Typing Animation ============
const typingTextEn = document.querySelector('.typing-text.en');
const typingTextBn = document.querySelector('.typing-text.bn');

if (typingTextEn && typingTextBn) {
    const textsEn = [
        'Web Developer',
        'UI/UX Designer',
        'Content Creator',
        'Freelancer'
    ];
    
    const textsBn = [
        'ওয়েব ডেভেলপার',
        'ইউআই/ইউএক্স ডিজাইনার',
        'কন্টেন্ট ক্রিয়েটর',
        'ফ্রিল্যান্সার'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentTexts = textsEn;
    
    function type() {
        const currentText = currentTexts[textIndex];
        
        if (isDeleting) {
            typingTextEn.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextEn.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === textsEn.length) {
                textIndex = 0;
            }
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

// ============ Contact Form ============
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    alert('✅ Message sent successfully!\n\n✅ বার্তা সফলভাবে পাঠানো হয়েছে!\n\nI will get back to you soon.\nআমি শীঘ্রই উত্তর দেব।');
    
    // Reset form
    this.reset();
});

// ============ Skill Bar Animation ============
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// Trigger skill animation when visible
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
}

// ============ Smooth Scroll for all anchor links ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ Initialize ============
console.log('🎉 Portfolio website loaded successfully!');
console.log('🌐 Visit your blog at: https://YOUR-BLOG-NAME.blogspot.com');