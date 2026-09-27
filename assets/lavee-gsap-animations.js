/* La Vee Luxury GSAP & ScrollTrigger Motion Engine */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
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
    '.lavee-hero-btn, .lavee-hero-audio-btn, .lavee-hero-nav-btn, .lavee-hero-tab-pill, .lavee-btn, .button'
  );

  interactiveElements.forEach((el) => {
    const arrow = el.querySelector('.lavee-hero-btn-arrow, .lavee-hero-btn-icon');
    const text = el.querySelector('.lavee-hero-tab-pill__title, .lavee-hero-audio-text, span:not(.lavee-hero-btn-arrow):not(.lavee-hero-btn-icon)');
    const isPrimary = el.classList.contains('lavee-hero-btn--primary');
    const isSecondary = el.classList.contains('lavee-hero-btn--secondary');
    const isAudio = el.classList.contains('lavee-hero-audio-btn');
    const isNav = el.classList.contains('lavee-hero-nav-btn');
    const isTab = el.classList.contains('lavee-hero-tab-pill');

    el.addEventListener('mouseenter', () => {
      if (el.hasAttribute('disabled') || el.classList.contains('is-disabled')) return;

      // Button scale & elevation
      gsap.to(el, {
        y: -4,
        scale: 1.04,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      // Background color & border animations based on button type
      if (isPrimary) {
        gsap.to(el, {
          backgroundColor: 'rgba(145, 38, 52, 0.98)',
          borderColor: 'rgba(212, 175, 55, 0.85)',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 12px 32px rgba(110, 31, 42, 0.65)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else if (isSecondary) {
        gsap.to(el, {
          backgroundColor: 'rgba(255, 255, 255, 0.28)',
          borderColor: '#FFFFFF',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 12px 32px rgba(0, 0, 0, 0.45)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else if (isAudio) {
        gsap.to(el, {
          backgroundColor: 'rgba(22, 22, 22, 0.85)',
          borderColor: 'rgba(212, 175, 55, 0.7)',
          color: '#D4AF37',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.35), 0 10px 32px rgba(0, 0, 0, 0.5)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else if (isNav) {
        gsap.to(el, {
          backgroundColor: '#6E1F2A',
          borderColor: '#D4AF37',
          color: '#FFFFFF',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(110, 31, 42, 0.6)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else if (isTab && !el.classList.contains('is-active')) {
        gsap.to(el, {
          backgroundColor: 'rgba(35, 35, 35, 0.85)',
          borderColor: 'rgba(255, 255, 255, 0.4)',
          color: '#FFFFFF',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      // Arrow animation
      if (arrow) {
        gsap.to(arrow, {
          x: 6,
          scale: 1.15,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      // Text letter spacing animation
      if (text) {
        gsap.to(text, {
          letterSpacing: '0.15em',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });

    el.addEventListener('mouseleave', () => {
      // Revert Button scale & elevation
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });

      // Revert background color & border
      if (isPrimary) {
        gsap.to(el, {
          backgroundColor: 'rgba(110, 31, 42, 0.85)',
          borderColor: 'rgba(212, 175, 55, 0.4)',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.25), 0 8px 24px rgba(110, 31, 42, 0.4)',
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      } else if (isSecondary) {
        gsap.to(el, {
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderColor: 'rgba(255, 255, 255, 0.32)',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.25)',
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      } else if (isAudio) {
        gsap.to(el, {
          backgroundColor: 'rgba(22, 22, 22, 0.45)',
          borderColor: 'rgba(255, 255, 255, 0.22)',
          color: '#FFFFFF',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      } else if (isNav) {
        gsap.to(el, {
          backgroundColor: 'rgba(22, 22, 22, 0.45)',
          borderColor: 'rgba(255, 255, 255, 0.22)',
          color: '#FFFFFF',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(0, 0, 0, 0.3)',
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      } else if (isTab && !el.classList.contains('is-active')) {
        gsap.to(el, {
          backgroundColor: 'rgba(22, 22, 22, 0.55)',
          borderColor: 'rgba(255, 255, 255, 0.18)',
          color: 'rgba(255, 255, 255, 0.85)',
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }

      // Revert Arrow animation
      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }

      // Revert Text letter spacing
      if (text) {
        gsap.to(text, {
          letterSpacing: isTab ? '0.05em' : '0.12em',
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }
    });
  });

  // 6. GSAP FOOTER LINKS UNDERLINE HOVER ANIMATION
  function initFooterGSAPUnderlines() {
    const footerLinks = document.querySelectorAll(
      '.lavee-footer-wrapper a:not(.lavee-footer__accordion-btn), .lavee-footer__col-link, .lavee-footer__social-link, .lavee-footer__currency-btn'
    );

    footerLinks.forEach((link) => {
      // Ensure element has relative position and doesn't duplicate underline span
      let underline = link.querySelector('.lavee-footer-underline');
      if (!underline) {
        underline = document.createElement('span');
        underline.className = 'lavee-footer-underline';
        link.appendChild(underline);
      }

      // GSAP Hover Enter Animation (draw line left to right)
      link.addEventListener('mouseenter', () => {
        gsap.killTweensOf(underline);
        gsap.set(underline, { transformOrigin: 'left center' });
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.38,
          ease: 'power2.out'
        });
      });

      // GSAP Hover Leave Animation (slide out left to right)
      link.addEventListener('mouseleave', () => {
        gsap.killTweensOf(underline);
        gsap.set(underline, { transformOrigin: 'right center' });
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.35,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(underline, { transformOrigin: 'left center' });
          }
        });
      });
    });
  }

  initFooterGSAPUnderlines();

});

