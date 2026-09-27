class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    (this.querySelector('#CartDrawer-Overlay') || this.querySelector('.lavee-cart-drawer-backdrop'))?.addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
  }

  setHeaderCartIconAccessibility() {
    const attach = () => {
      const cartLinks = document.querySelectorAll('#cart-icon-bubble, [data-action="open-cart-drawer"], .lavee-header__action-link--bag, .header__icon--cart');
      cartLinks.forEach(cartLink => {
        cartLink.setAttribute('role', 'button');
        cartLink.setAttribute('aria-haspopup', 'dialog');
        cartLink.addEventListener('click', (event) => {
          event.preventDefault();
          this.open(cartLink);
        });
        cartLink.addEventListener('keydown', (event) => {
          if (event.code.toUpperCase() === 'SPACE' || event.code.toUpperCase() === 'ENTER') {
            event.preventDefault();
            this.open(cartLink);
          }
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attach, { once: true });
    } else {
      attach();
    }
  }

  open(triggeredBy) {
    if (window.LaveeCartController) {
      window.LaveeCartController.refreshCartAndOpen();
      return;
    }
    if (this.classList.contains('active') || this.classList.contains('is-open')) return;
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    
    this.classList.add('animate', 'active', 'is-open');
    this.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow-hidden');

    this.querySelector('cart-drawer-items')?.dispatchViewEvent();
  }

  close() {
    if (window.LaveeCartController) {
      window.LaveeCartController.closeDrawer();
      return;
    }
    this.classList.remove('active', 'is-open', 'animate');
    this.setAttribute('aria-hidden', 'true');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if (cartDrawerNote.nextElementSibling?.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  renderContents(parsedState) {
    if (window.LaveeCartController) {
      if (parsedState && parsedState.item_count !== undefined) {
        window.LaveeCartController.updateUI(parsedState);
        window.LaveeCartController.openDrawer();
      } else {
        window.LaveeCartController.refreshCartAndOpen();
      }
      return;
    }
    this.querySelector('.drawer__inner')?.classList.contains('is-empty') &&
      this.querySelector('.drawer__inner')?.classList.remove('is-empty');
    this.productId = parsedState?.id;
    this.getSectionsToRender().forEach((section) => {
      const sectionElement = section.selector
        ? document.querySelector(section.selector)
        : document.getElementById(section.id);

      if (!sectionElement || !parsedState?.sections) return;
      sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    });

    setTimeout(() => {
      (this.querySelector('#CartDrawer-Overlay') || this.querySelector('.lavee-cart-drawer-backdrop'))?.addEventListener('click', this.close.bind(this));
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector)?.innerHTML || '';
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        section: 'cart-drawer',
        selector: '#LaveeCartDrawerWrapper',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '#cart-icon-bubble',
      },
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

if (!customElements.get('cart-drawer')) {
  customElements.define('cart-drawer', CartDrawer);
}

const BaseCartItems = (typeof window !== 'undefined' && window.CartItems)
  ? window.CartItems
  : (typeof CartItems !== 'undefined')
    ? CartItems
    : class extends HTMLElement {
        dispatchViewEvent() {}
        getSectionsToRender() { return []; }
      };

if (!customElements.get('cart-drawer-items')) {
  class CartDrawerItems extends BaseCartItems {
    getSectionsToRender() {
      return [
        {
          id: 'CartDrawer',
          section: 'cart-drawer',
          selector: '#LaveeCartItemsStack',
        },
        {
          id: 'cart-icon-bubble',
          section: 'cart-icon-bubble',
          selector: '.shopify-section',
        },
      ];
    }
  }
  customElements.define('cart-drawer-items', CartDrawerItems);
}

