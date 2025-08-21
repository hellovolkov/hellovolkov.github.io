// Premium Dark Theme Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const langSwitcher = document.getElementById('langSwitcher');
    const langText = langSwitcher.querySelector('.lang-text');
    const htmlElement = document.documentElement;

    let currentLang = 'ru';

    // Language data
    const langData = {
        ru: {
            title: 'МИХАИЛ ВОЛКОВ - Data Analyst',
            langButtonText: 'EN'
        },
        en: {
            title: 'MIKHAIL VOLKOV - Data Analyst',
            langButtonText: 'RU'
        }
    };

    // Function to switch language with dark theme effects
    function switchLanguage(lang) {
        currentLang = lang;

        // Update HTML lang attribute
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('data-lang', lang);

        // Update document title
        document.title = langData[lang].title;

        // Update language switcher button text
        langText.textContent = langData[lang].langButtonText;

        // Update all elements with language attributes
        const elementsWithLang = document.querySelectorAll('[data-ru][data-en]');

        elementsWithLang.forEach((element, index) => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                // Add dark theme transition effect
                element.style.opacity = '0.5';
                element.style.transform = 'translateY(-10px)';
                element.style.transition = 'all 0.3s ease';

                setTimeout(() => {
                    element.textContent = text;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150 + (index * 20));
            }
        });

        console.log('Language switched to:', lang);
    }

    // Language switcher click handler with glow effect - Fixed implementation
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Language switcher clicked, current lang:', currentLang);

            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            switchLanguage(newLang);

            // Add dark theme click effect with glow
            this.style.transform = 'translateY(2px) scale(0.95)';
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';

            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 200);
        });
    }

    // Enhanced smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            console.log('Clicked link to:', targetId, 'Element found:', !!targetElement);

            if (targetElement) {
                // Calculate header height
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const offset = 20;

                // Get target position
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

                console.log('Scrolling to position:', offsetPosition);

                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Add active state to clicked link
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');

                // Dark theme click effect with glow
                this.style.transform = 'translateY(2px)';
                this.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.4)';
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 300);
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });

    // Active navigation link highlighting on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const scrollPosition = window.pageYOffset;

        let activeSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSection = section;
            }
        });

        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));

        if (activeSection) {
            const targetId = activeSection.getAttribute('id');
            const correspondingLink = document.querySelector(`a[href="#${targetId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }

    // Throttled scroll handler for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 50);
    });

    // Initialize active nav link
    setTimeout(updateActiveNavLink, 100);

    // Enhanced contact link functionality with dark theme effects
    const contactLinks = document.querySelectorAll('.contact-value');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add dark theme click effect with glow
            const parent = this.parentElement;
            parent.style.transform = 'translateY(2px) scale(0.98)';
            parent.style.boxShadow = '0 0 25px rgba(0, 255, 136, 0.4)';

            setTimeout(() => {
                parent.style.transform = '';
                parent.style.boxShadow = '';
            }, 300);

            console.log('Contact link clicked:', this.href);
        });

        // Add hover effects for contact links
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.6)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });

    // Dark theme hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 212, 255, 0.2)';

            // Add subtle glow to project number
            const number = this.querySelector('.project-number');
            if (number) {
                number.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';

            const number = this.querySelector('.project-number');
            if (number) {
                number.style.boxShadow = '';
            }
        });

        // Add click effect for project cards
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 150);
        });
    });

    // Dark theme hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });

        // Add click effect
        item.addEventListener('click', function() {
            this.style.transform = 'translateY(-1px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
        });
    });

    // Enhanced contact items hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 255, 136, 0.2)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Skill category hover effects
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 212, 255, 0.15)';
        });

        category.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Intersection Observer for dark theme entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Add dark theme entrance effect
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

                // Animate child elements with delay
                const children = entry.target.querySelectorAll('.project-card, .skill-category, .contact-item');
                children.forEach((child, index) => {
                    child.style.opacity = '0';
                    child.style.transform = 'translateY(30px)';
                    child.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;

                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                });
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.classList.add('loading');
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        observer.observe(section);
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Switch language with Ctrl+L or Cmd+L
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            if (langSwitcher) {
                langSwitcher.click();
            }
        }

        // Navigate sections with arrow keys when focused on nav
        if (document.activeElement && document.activeElement.classList.contains('nav-link')) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const currentIndex = Array.from(navLinks).indexOf(document.activeElement);
                const nextIndex = (currentIndex + 1) % navLinks.length;
                navLinks[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const currentIndex = Array.from(navLinks).indexOf(document.activeElement);
                const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
                navLinks[prevIndex].focus();
            }
        }
    });

    // Dark theme page load animation
    function initPageAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroCta = document.querySelector('.hero-cta');
        const geometricShapes = document.querySelectorAll('.geometric-shape');

        // Set initial states
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(50px)';
        }

        if (heroSubtitle) {
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(30px)';
        }

        if (heroCta) {
            heroCta.style.opacity = '0';
            heroCta.style.transform = 'translateY(20px)';
        }

        // Animate geometric shapes
        geometricShapes.forEach((shape, index) => {
            shape.style.opacity = '0';
            shape.style.transform = 'scale(0.5) rotate(0deg)';
        });

        // Animate in sequence with dark theme effects
        setTimeout(() => {
            if (heroTitle) {
                heroTitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }
        }, 300);

        setTimeout(() => {
            if (heroSubtitle) {
                heroSubtitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }
        }, 600);

        setTimeout(() => {
            if (heroCta) {
                heroCta.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroCta.style.opacity = '1';
                heroCta.style.transform = 'translateY(0)';
            }
        }, 900);

        // Animate geometric shapes
        geometricShapes.forEach((shape, index) => {
            setTimeout(() => {
                shape.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                shape.style.opacity = '0.6';
                shape.style.transform = 'scale(1) rotate(360deg)';
            }, 1200 + (index * 200));
        });
    }

    // Initialize page animations
    initPageAnimation();

    // Enhanced hero CTA hover effect
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
        });

        heroCta.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });

        heroCta.addEventListener('click', function(e) {
            this.style.transform = 'translateY(-2px) scale(0.98)';
            this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.6)';

            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 200);
        });
    }

    // Add parallax effect to geometric shapes
    function addParallaxEffect() {
        const shapes = document.querySelectorAll('.geometric-shape');

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;

            shapes.forEach((shape, index) => {
                const speed = 0.3 + (index * 0.1);
                const rotation = scrolled * 0.1;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
            });
        });
    }

    // Initialize parallax effect
    addParallaxEffect();

    // Add mouse move effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            const shapes = this.querySelectorAll('.geometric-shape');
            shapes.forEach((shape, index) => {
                const moveX = (x - 0.5) * (20 + index * 10);
                const moveY = (y - 0.5) * (20 + index * 10);
                const currentTransform = shape.style.transform;
                const baseTransform = currentTransform.replace(/translate\([^)]*\)/g, '');
                shape.style.transform = baseTransform + ` translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // Add glowing cursor effect for desktop
    function addGlowCursor() {
        if (window.innerWidth <= 768) return; // Skip on mobile

        const cursor = document.createElement('div');
        cursor.classList.add('glow-cursor');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            mix-blend-mode: screen;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', function(e) {
            cursor.style.left = (e.clientX - 10) + 'px';
            cursor.style.top = (e.clientY - 10) + 'px';
            cursor.style.opacity = '1';
        });

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '1';
        });
    }

    // Initialize glow cursor
    addGlowCursor();

    // Debug information
    console.log('Premium dark theme portfolio initialized');
    console.log('Navigation links:', navLinks.length);
    console.log('Contact links:', contactLinks.length);
    console.log('Project cards:', projectCards.length);
    console.log('Skill items:', skillItems.length);
    console.log('Language switcher found:', !!langSwitcher);
    console.log('Current language:', currentLang);

    // Log all sections with IDs for debugging
    const allSections = document.querySelectorAll('section[id]');
    console.log('Sections found:');
    allSections.forEach(section => {
        console.log('- Section ID:', section.id);
    });

    // Performance monitoring
    console.log('Page load completed in:', performance.now().toFixed(2), 'ms');
});
