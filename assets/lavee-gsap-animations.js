/* La Vee Luxury GSAP & ScrollTrigger Motion Engine */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded yet.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. SECTION-BY-SECTION VIEWPORT REVEAL
  const sections = document.querySelectorAll('.shopify-section, .lavee-animate-section, section');
  sections.forEach((section) => {
    // Avoid double animating header/announcement
    if (section.querySelector('.lavee-header') || section.querySelector('.lavee-announcement-bar')) {
      return;
    }

    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 45,
        willChange: 'opacity, transform'
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 2. LUXURY HEADING & TITLE STAGGER REVEAL
  const headings = document.querySelectorAll('.lavee-animate-title, h1, h2, .h1, .h2, .hero__title');
  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 30,
        skewY: 1.5
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 3. PRODUCT CARDS & GRID STAGGER REVEAL
  const grids = document.querySelectorAll('.grid, .lavee-footer__columns, .lavee-animate-grid');
  grids.forEach((grid) => {
    const items = grid.children;
    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });

  // 4. PARALLAX EFFECT FOR HERO & MEDIA IMAGES
  const parallaxImages = document.querySelectorAll('.lavee-animate-parallax, .media > img');
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: img.parentElement || img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // 5. GSAP INTERACTIVE HOVER ENGINE FOR ALL FROSTED GLASS CONTROLS & BUTTONS
  const interactiveElements = document.querySelectorAll(
    '.lavee-hero-btn, .lavee-hero-audio-btn, .lavee-hero-nav-btn, .lavee-hero-tab-pill, .lavee-hero-badge, .lavee-btn, .button'
  );

  interactiveElements.forEach((el) => {
    const arrow = el.querySelector('.lavee-hero-btn-arrow, .lavee-hero-btn-icon');
    const text = el.querySelector('.lavee-hero-tab-pill__title, .lavee-hero-audio-text');

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        y: -3,
        scale: 1.035,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      if (arrow) {
        gsap.to(arrow, {
          x: 4,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      if (text) {
        gsap.to(text, {
          letterSpacing: '0.08em',
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });

      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          duration: 0.25,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }

      if (text) {
        gsap.to(text, {
          letterSpacing: '0.05em',
          duration: 0.25,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }
    });
  });

  console.log('✨ La Vee GSAP ScrollTrigger & Frosted Glass Hover Engine Initialized Successfully.');
});

